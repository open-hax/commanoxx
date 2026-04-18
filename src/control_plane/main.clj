(ns control-plane.main
  "Main entry point for the control-plane API."
  (:require [control-plane.server :as server]))

(defn -main
  "Start the control-plane server."
  [& args]
  (let [port (or (some-> (first args) Long/parseLong) 8090)]
    (println "Starting Control Plane API on port" port)
    (server/start :port port)))