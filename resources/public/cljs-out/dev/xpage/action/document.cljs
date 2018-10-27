(ns xpage.action.document
  (:require [xpage.state :refer [app-config
                                 document]]))

(defn zoom-in []
  (swap! document update-in [:scale] (fn [scale]
                                       (+ scale (:zoom-step app-config)))))

(defn zoom-out []
  (swap! document update-in [:scale] (fn [scale]
                                       (- scale (:zoom-step app-config)))))