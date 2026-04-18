(ns control-plane.ui.core
  (:require ["react" :as react]
            ["react-dom/client" :as react-dom]
            [control-plane.ui.api :as api]
            ["@open-hax/uxx/primitives" :as uxx]))

(defonce state (atom {:health nil :containers [] :pm2 [] :loading true}))

(def App
  (fn []
    (let [{:keys [loading health containers pm2]} @state]
      (react/useEffect
        (fn []
          (when loading
            (api/fetch-all
              (fn [h c p]
                (swap! state assoc :health h :containers c :pm2 p :loading false))))
          nil)
        nil)
      (if loading
        (react/createElement "div" #js {:style #js {:display "flex" :justify-content "center" :align-items "center" :height "100vh"}}
          (react/createElement uxx/Spinner #js {:size "lg"}))
        (react/createElement uxx/UxxThemeProvider #js {:theme "monokai"}
          (react/createElement "div" #js {:style #js {:padding "2rem"}}
            (react/createElement uxx/MetricTile #js {:label "Health" :value (if health "Healthy" "Unhealthy") :variant (if health "success" "error")})
            (react/createElement uxx/MetricTile #js {:label "Containers" :value (str (count containers))})
            (react/createElement uxx/MetricTile #js {:label "PM2" :value (str (count pm2))})))))))

(defn mount! []
  (let [root (react-dom/createRoot (js/document.getElementById "root"))]
    (.render root (App))))