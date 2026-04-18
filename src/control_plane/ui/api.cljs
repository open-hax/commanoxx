(ns control-plane.ui.api
  (:require [helix.core :refer [defcomponent $]]))

(def API_BASE "/api/v1")

(defn fetch-json [endpoint]
  (-> (js/fetch (str API_BASE endpoint))
      (.then (fn [res] (.json res)))))

(defn fetch-all [callback]
  (-> (js/Promise.all
         #js[(fetch-json "/health")
            (fetch-json "/docker")
            (fetch-json "/pm2")])
      (.then
        (fn [results]
          (let [h (aget results 0)
                c (aget results 1)
                p (aget results 2)]
            (callback h (aget c "containers") (aget p "processes")))))))