(ns xpage.action.zone
  (:require [xpage.state :refer [document]]))

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

