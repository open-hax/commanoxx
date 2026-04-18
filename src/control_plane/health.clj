(ns control-plane.health
  "Health aggregation across all subsystems."
  (:require [control-plane.process :as proc]
            [control-plane.docker :as docker]
            [clojure.java.shell :as shell])
  (:import (java.io File)))

(defn overall-status
  "Calculate overall system health."
  []
  (let [orphans (proc/find-orphaned-processes (proc/scan-processes))
        zombies (proc/find-zombies (proc/scan-processes))
        stopped (docker/find-stopped-containers)
        restarting (docker/find-restarting-containers)]
    {:healthy (and (empty? orphans) (zero? (count zombies)))
     :orphans (count orphans)
     :zombies (count zombies)
     :stopped-containers (count stopped)
     :restarting-containers (count restarting)}))

(defn list-systemd-services
  "List running systemd services."
  []
  (try
    (let [out (:out (shell/sh "systemctl" "list-units" "--type=service" "--state=running" "--no-legend" "--no-pager"))
          lines (filter seq (clojure.string/split-lines out))]
      (if (empty? lines)
        ;; Fallback: parse /proc for running services hints
        (try
          (let [out2 (:out (shell/sh "ps" "aux"))
                lines2 (rest (clojure.string/split-lines out2))
                systemd-procs (filter #(clojure.string/includes? (or (nth % 10 "") "") "systemd") lines2)]
            (mapv (fn [p]
                    {:unit (or (nth p 10) "unknown")
                     :sub "running"})
                  systemd-procs))
          (catch Exception _
            []))
        (mapv (fn [line]
                (let [parts (clojure.string/split line #"\s+")]
                  {:unit (first parts)
                   :sub (nth parts 2 "")}))
              lines)))
    (catch Exception e
      (println "Error listing systemd services:" e)
      [])))

(defn system-summary
  "Get full system summary across all sources."
  []
  (let [procs (proc/scan-processes)
        orphans (proc/find-orphaned-processes procs)
        zombies (proc/find-zombies procs)
        containers (docker/list-containers)
        running-containers (filter #(clojure.string/includes? (:status %) "Up") containers)
        services (list-systemd-services)]
    {:processes {:total (count procs)
                 :orphans (count orphans)
                 :zombies (count zombies)}
     :containers {:total (count containers)
                  :running (count running-containers)}
     :services {:total (count services)
                :running (take 50 services)}}))

(defn container-orphan-correlation
  "Correlate orphaned processes with stopped containers."
  []
  (let [orphans (proc/find-orphaned-processes (proc/scan-processes))
        stopped (docker/find-stopped-containers)]
    {:orphaned-processes orphans
     :stopped-containers stopped}))

(defn health-check
  "Simple boolean health check."
  []
  (:healthy (overall-status)))

(defn metrics
  "Get raw metrics for API."
  []
  (let [procs (proc/scan-processes)]
    {:host-processes {:count (count procs)}
     :orphans (count (proc/find-orphaned-processes procs))}))