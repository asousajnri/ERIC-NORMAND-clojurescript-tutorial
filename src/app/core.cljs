(ns app.core
  (:require ["react-dom/client" :refer [createRoot]]
            [reagent.core :as r]
            ["@mui/material" :as mui]))


(defonce current-count (r/atom 0))
(defonce counters (r/atom []))

(defn vec-delete [v i]
  (into (subvec v 0 i) (subvec v (inc i))))

(defn Counter [i counter]
  [:div
   counter
   " "
   [:button
    {:onClick (fn [] (swap! counters update i inc))}
    "+1"]
   [:button
    {:onClick (fn [] (swap! counters update i dec))}
    "-1"]
   [:button
    {:onClick (fn [] (swap! counters vec-delete i))}
    "X"]])

(defn Application []
  [:div
   [:h1 "Counter"]
   (doall
     (for [[i counter] (map vector (range) @counters)]
       ^{:key (str i)} [Counter i counter]))
   [:> mui/Button
    {:variant "contained"
     :color "primary"
     :onClick (fn [] (swap! counters conj 0))}
    "Add counter"]])

(defonce root (createRoot (js/document.getElementById "app")))

(defn init []
  (.render root (r/as-element [Application])))

(defn ^:dev/after-load start []
  (init))
