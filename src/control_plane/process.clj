(ns control-plane.process
  "Process scanning and orphan detection.
   Scans host processes, detects orphans, extracts memory usage."
  (:require [clojure.string :as str]
            [clojure.java.shell :as shell]))

(defn scan-processes
  "Scan all processes on the host using ps aux."
  []
  (try
    (let [out (:out (shell/sh "ps" "aux"))
          lines (rest (str/split-lines out))] ;; skip header
      (mapcat (fn [line]
                (try
                  (let [parts (str/split line #"\s+")]
                    (when (and (>= (count parts) 11) (first parts))
                      (let [pid (Long/parseLong (nth parts 1))
                            ppid-str (nth parts 2)
                            cpu (try (Double/parseDouble (nth parts 2)) (catch Exception _ 0))
                            mem-str (nth parts 3)
                            rss-str (nth parts 5 "0") ;; RSS in KB
                            vsz-str (nth parts 4 "0") ;; VSZ in KB
                            tty (nth parts 6 "?")
                            stat (nth parts 7 "?")
                            etime (nth parts 8 "?")
                            comm (last (take 11 parts))
                            args (str/join " " (drop 10 parts))]
                        [{:pid pid
                          :ppid (try (when (not= ppid-str "?") (Long/parseLong ppid-str)) (catch Exception _ nil))
                          :cpu cpu
                          :mem-str mem-str
                          :rss-kb (try (Long/parseLong rss-str) (catch Exception _ 0))
                          :vsz (try (Long/parseLong vsz-str) (catch Exception _ 0))
                          :tty tty
                          :stat stat
                          :etime etime
                          :comm (or comm "?")
                          :args args}])))
                  (catch Exception _
                    [])))
              lines))
    (catch Exception e
      (println "Error scanning processes:" e)
      [])))

(defn find-child-processes
  "Find all children of a given parent PID."
  [processes parent-pid]
  (filter #(= (:ppid %) parent-pid) processes))

(defn find-live-pids
  "Extract all PIDs from process list."
  [processes]
  (set (map :pid processes)))

(defn find-process-by-pid
  "Find a process by PID."
  [processes pid]
  (first (filter #(= (:pid %) pid) processes)))

(defn find-processes-by-comm
  "Find processes matching command pattern."
  [processes comm-pattern]
  (filter #(str/includes? (:comm %) comm-pattern) processes))

(defn find-orphaned-processes
  "Find processes whose parent is gone (orphaned/zombie).
   An orphan has a PPID that doesn't exist in the live PID set."
  [processes]
  (let [live-pids (find-live-pids processes)]
    (filter (fn [p]
              (and (:ppid p)
                   (not (contains? live-pids (:ppid p)))))
            processes)))

(defn find-zombies
  "Find zombie processes (state contains 'Z')."
  [processes]
  (filter #(str/includes? (:stat %) "Z") processes))

(defn parse-mem-to-bytes
  "Parse memory string like '14.9G' or '3852M' to bytes."
  [mem-str]
  (when mem-str
    (try
      (let [[_ num unit] (re-find #"([\d.]+)([GMKT])?" mem-str)]
        (when num
          (let [n (Double/parseDouble num)]
            (long (* n (case unit
                        "G" (* 1024 1024 1024)
                        "M" (* 1024 1024)
                        "K" 1024
                        1))))))
      (catch Exception _
        nil))))

(defn total-memory-bytes
  "Calculate total RSS memory in bytes from rss-kb field."
  [processes]
  (reduce + 0 (map #(* (or (:rss-kb %) 0) 1024) processes)))

(defn group-by-comm
  "Group processes by command name."
  [processes]
  (group-by :comm processes))

(defn comm-memory-breakdown
  "Get memory breakdown by command."
  [processes]
  (reduce-kv
    (fn [m comm procs]
      (assoc m comm {:count (count procs)
                     :total-mem (total-memory-bytes procs)
                     :pids (mapv :pid procs)}))
    {}
    (group-by-comm processes)))

(defn build-process-tree
  "Build parent-child tree starting from roots."
  [processes]
  (let [by-pid (reduce #(assoc %1 (:pid %2) %2) {} processes)
        roots (filter #(nil? (:ppid %)) processes)]
    {:roots roots
     :by-pid by-pid
     :count (count processes)}))

(defn kill-process
  "Kill a process by PID with signal."
  ([pid] (kill-process pid 9))
  ([pid signal]
   (try
     (:out (shell/sh "kill" (str "-" signal) (str pid)))
     (catch Exception e
       (str "Error: " (.getMessage e))))))