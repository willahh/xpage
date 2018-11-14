(ns xpage.model.zone-dao
  (:require [xpage.state :as state]))

(defn- last-zone-id []
  (->> @state/document
       :zone
       (map :zone-id)
       (reduce max)))

(defn- next-zone-id []
  (-> (last-zone-id) inc))

(defn make-zone! [page-id & {:keys [top left width height]
                             :or {top 0 left 0 width 0 height 0}}]
  (let [zone-id (next-zone-id)
        zone-model {:zone-id zone-id
                    :page-id page-id
                    :bounding-box {:top top
                                   :left left
                                   :width width
                                   :height height}}]
    (swap! state/document update-in [:zone] conj zone-model)
    zone-model))

(defn delete-zone! [zone-id]
  (let [zones (->> @state/document
                   :zone
                   (filter #(not= zone-id (:zone-id %))))]
    (swap! state/document update-in [:zone] (fn [] zones))))




(comment
  
  (make-zone! 2
              :top 30
              :left 20
              :width 20
              :height 25)

  (delete-zone! (last-zone-id))

  (->> @state/document
       :zone
       (map :zone-id)
       (reduce max)))
