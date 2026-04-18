(ns control-plane.docker
  "Docker and Compose integration.
   Queries Docker daemon, lists containers, extracts status."
  (:require [clojure.string :as str]
            [clojure.java.shell :as shell]))

(defn docker
  "Run a docker command and return output."
  [& args]
  (try
    (let [result (apply shell/sh "docker" args)]
      {:out (:out result)
       :err (:err result)
       :exit (:exit result)})
    (catch Exception e
      {:error (.getMessage e)})))

(defn parse-containers
  "Parse docker ps output into container maps."
  [out]
  (let [lines (str/split-lines out)]
    (mapcat (fn [line]
              (try
                (let [parts (str/split line #"\t")
                      name (first parts)
                      image (second parts)
                      status (nth parts 2 "")]
                  (when name
                    [{:name (str/replace-first name #"^/" "")
                     :image image
                     :status status}]))
                (catch Exception _
                  [])))
            lines)))

(defn list-containers
  "List all containers (running and stopped)."
  []
  (let [result (docker "ps" "-a" "--format" "{{.Names}}\t{{.Image}}\t{{.Status}}")]
    (if (:error result)
      {:error (:error result)}
      (parse-containers (:out result)))))

(defn list-running
  "List only running containers."
  []
  (let [result (docker "ps" "--format" "{{.Names}}\t{{.Image}}\t{{.Status}}")]
    (if (:error result)
      {:error (:error result)}
      (parse-containers (:out result)))))

(defn find-stopped-containers
  "Find containers that exited but may have left orphans."
  []
  (filter (fn [c]
             (str/includes? (:status c) "Exited"))
          (list-containers)))

(defn find-restarting-containers
  "Find containers in restart loop."
  []
  (filter (fn [c]
             (str/includes? (:status c) "Restarting"))
          (list-containers)))

(defn compose-projects
  "Find all compose projects in services directory."
  []
  (let [result (shell/sh "bash" "-c"
                       "find /home/err/devel/services -name 'docker-compose.yml' -exec dirname {} \\; 2>/dev/null | xargs -I{} basename {}")]
    (str/split-lines (:out result))))

(defn stack-health
  "Get health summary for all compose stacks."
  []
  (mapv (fn [proj]
           {:name proj})
        (compose-projects)))