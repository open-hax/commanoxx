(ns control-plane.pm2
  "PM2 process management integration.
   Queries PM2 daemon, lists processes, extracts metadata."
  (:require [clojure.string :as str]
            [clojure.java.shell :as shell]
            [clojure.data.json :as json]))

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
  "List all PM2 managed processes using JSON output."
  []
  (let [result (pm2 "jlist")]
    (if (:error result)
      {:error (:error result)}
      (try
        (let [data (json/read-str (:out result))]
          (mapv (fn [p]
                  {:name (get p "name")
                   :id (get p "pm_id")
                   :pid (get p "pid")
                   :status (get p "pm2_env" "status")
                   :uptime (get p "pm2_env" "pm_uptime")
                   :memory (get p "monit" "memory")
                   :cpu (get p "monit" "cpu")
                   :restart-time (get p "pm2_env" "restart_time")
                   :pm-env {:exec-path (get p "pm2_env" "exec_path")
                            :cwd (get p "pm2_env" "cwd")
                            :interpreter (get p "pm2_env" "interpreter")
                            :args (get p "pm2_env" "args")}}))
                data))
        (catch Exception e
          {:error (str "Parse error: " (.getMessage e))})))))

(defn status-summary
  "Get count of processes by status."
  []
  (let [result (pm2 "jlist")]
    (if (:error result)
      {:error (:error result)}
      (try
        (let [data (json/read-str (:out result))
              by-status (group-by #(get % "pm2_env" "status") data)]
          {:total (count data)
           :online (count (get by-status "online"))
           :stopped (count (get by-status "stopped"))
           :errored (count (get by-status "errored"))})
        (catch Exception e
          {:error (.getMessage e)})))))

(defn monit-summary
  "Get memory/CPU summary from all processes."
  []
  (let [result (pm2 "jlist")]
    (if (:error result)
      {:error (:error result)}
      (try
        (let [data (json/read-str (:out result))
              total-mem (reduce + 0 (map #(get (get % "monit") "memory" 0) data))
              total-cpu (reduce + 0 (map #(get (get % "monit") "cpu" 0) data))]
          {:total-memory total-mem
           :total-cpu total-cpu
           :process-count (count data)})
        (catch Exception e
          {:error (.getMessage e)})))))