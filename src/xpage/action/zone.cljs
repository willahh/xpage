(ns xpage.action.zone
  (:require [xpage.state :as state :refer [document]]))

(defn open-add-zone []
  (.modal (.$ js/window "#add-zone-modal") "show"))

(defn- next-zone-id []
  (->> (:zone @document)
       (map :zone-id)
       last
       inc))

(defn add [page-id zone-bounding-box]
  (let [zone-record {:zone-id (next-zone-id)
                     :page-id page-id,
                     :bounding-box zone-bounding-box}]
    (swap! document update-in [:zone]
           (fn [zone-record-list]
             (conj zone-record-list zone-record)))))

(defn cando-select-zone []
  (= (-> @state/session-settings :tool-active)
     :xpage.constant.tool/pointer))

(defn select-zone [zone-id]
  (when (cando-select-zone)
    (js/console.log "select-zone" zone-id)
    (swap! state/session-settings
           update-in [:selected-zone-id-list]
           (fn [m]
             [zone-id]))))

(defn deselect-zone []
  
  (when (cando-select-zone)
    (js/console.log "deselect-zone")
    (swap! state/session-settings
           update-in [:selected-zone-id-list]
           (fn [m] []))))