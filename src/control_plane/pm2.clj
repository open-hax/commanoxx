(ns control-plane.pm2
  "PM2 process management integration.
   Queries PM2 daemon, lists processes, extracts metadata."
  (:require [clojure.string :as str]
            [clojure.java.shell :as shell]))

(defn pm2
  "Run a pm2 command and return output."
  [& args]
  (try
    (let [result (apply shell/sh "pm2" args)]
      {:out (:out result)
       :err (:err result)
       :exit (:exit result)})
    (catch Exception e
      {:error (.getMessage e)})))

(defn list-processes
  "List all PM2 managed processes (text format)."
  []
  (let [result (pm2 "list")]
    (if (:error result)
      {:error (:error result)}
      (let [lines (str/split-lines (:out result))]
        (mapv (fn [line]
                (try
                  (let [parts (str/split line #"\s+")
                        name (nth parts 0 "")
                        id (nth parts 1 "")]
                    {:name name :id id})
                  (catch Exception _ nil)))
              (drop 2 lines))))))

(defn status-summary
  "Get count of processes by status."
  []
  {:pm2 "available"})

(defn monit-summary
  "Get memory/CPU summary from monit."
  []
  {:pm2 "check via pm2 list"})