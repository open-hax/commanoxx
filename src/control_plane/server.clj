(ns control-plane.server
  "Control Plane HTTP API"
  (:require [control-plane.process :as proc]
            [control-plane.docker :as docker]
            [control-plane.pm2 :as pm2]
            [control-plane.health :as health]
            [clojure.data.json :as json])
  (:import [java.net ServerSocket]
           [java.io InputStreamReader BufferedReader OutputStreamWriter]))

(defmulti route-handler (fn [path] path))

(defmethod route-handler "/health" [_]
  {:status "ok"})

(defmethod route-handler "/api/v1/processes" [_]
  {:processes (proc/scan-processes)})

(defmethod route-handler "/api/v1/orphans" [_]
  {:orphans (proc/find-orphaned-processes (proc/scan-processes))})

(defmethod route-handler "/api/v1/memory" [_]
  {:breakdown (proc/comm-memory-breakdown (proc/scan-processes))})

(defmethod route-handler "/api/v1/docker" [_]
  {:containers (docker/list-containers)})

(defmethod route-handler "/api/v1/docker/running" [_]
  {:containers (docker/list-running)})

(defmethod route-handler "/api/v1/docker/stopped" [_]
  {:containers (docker/find-stopped-containers)})

(defmethod route-handler "/api/v1/docker/restarting" [_]
  {:containers (docker/find-restarting-containers)})

(defmethod route-handler "/api/v1/pm2" [_]
  {:processes (pm2/list-processes)})

(defmethod route-handler "/api/v1/pm2/summary" [_]
  {:summary (pm2/status-summary)})

(defmethod route-handler "/api/v1/pm2/monit" [_]
  (pm2/monit-summary))

(defmethod route-handler "/api/v1/systems" [_]
  (health/system-summary))

(defmethod route-handler "/api/v1/health" [_]
  (health/overall-status))

(defmethod route-handler "/api/v1/pm2/monit" [_]
  (pm2/monit-summary))

(defmethod route-handler "/api/v1/correlation" [_]
  (health/container-orphan-correlation))

(defmethod route-handler :default [_]
  {:error "Not found"})

(defn handle-client [client-socket]
  (try
    (let [in (BufferedReader. (InputStreamReader. (.getInputStream client-socket)))
          os (OutputStreamWriter. (.getOutputStream client-socket) "UTF-8")
          request-line (.readLine in)]
      (when request-line
        (let [path (second (re-find #"GET (/[^\s]*)" request-line))]
          (when path
            (let [response (route-handler path)
                  body (json/write-str response)
                  body-bytes (.getBytes body "UTF-8")]
              (.write os "HTTP/1.1 200 OK\r\n")
              (.write os "Content-Type: application/json\r\n")
              (.write os (str "Content-Length: " (alength body-bytes) "\r\n"))
              (.write os "\r\n")
              (.flush os)
              (.write os body)
              (.flush os))))))
    (catch Exception e
      (println "Error:" (.getMessage e)))
    (finally
      (try (.close client-socket) (catch Exception _)))))

(defn start-server [port]
  (println (str "Control-plane starting on port " port))
  (let [server-sock (ServerSocket. port)]
    (println (str "Control-plane started on port " port))
    (try
      (while true
        (let [client (.accept server-sock)]
          (.start (Thread. #(handle-client client)))))
      (catch InterruptedException _ nil)
      (finally (.close server-sock)))))

(defn start [& {:keys [port] :or {port 8090}}]
  (start-server port))