(ns control-plane.pm2
  "PM2 process management integration."
  (:require [clojure.java.shell :as shell]
            [clojure.data.json :as json]))

(defn pm2-cmd [& args]
  (try
    (apply shell/sh "pm2" args)
    (catch Exception e
      {:error (.getMessage e)})))

(defn list-processes []
  (let [r (pm2-cmd "jlist")]
    (when-not (contains? r :error)
      (json/read-str (:out r)))))

(defn status-summary []
  (let [r (pm2-cmd "jlist")]
    (when-not (contains? r :error)
      (let [data (json/read-str (:out r))
            total (count data)
            online (count (filter #(= (get % "pm2_env" "status") "online") data))]
        {:total total :online online}))))

(defn monit-summary []
  (let [r (pm2-cmd "jlist")]
    (when-not (contains? r :error)
      (let [data (json/read-str (:out r))
            total-mem (reduce + 0 (map #(get (get % "monit") "memory" 0) data))]
        {:total-memory total-mem :count (count data)}))))