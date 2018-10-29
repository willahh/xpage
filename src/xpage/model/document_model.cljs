(ns xpage.model.document-model
  (:require [xpage.state :refer [app-config
                                 document
                                 session-settings]]))

(defn- last-spread []
  "Return the last spread record"
  (->> (:spread @document)
       last))

(defn- next-page-id []
  "Return the next page id"
  (->> (:page @document)
       (map :page-id) last inc))

(defn- next-page-num []
  "Return the next page num"
  (->> (:page @document)
       (map :num) last inc))

(defn- next-spread-id []
  "Return the next spread id"
  (->> (:spread @document)
       (map :spread-id)
       sort last inc))

(defn- last-spread-page-count []
  "Return the number of pages of the last spread"
  (->> (last-spread)
       :page-id-list
       count))

(defn add-new-page-id-into-last-spread-record []
  "Add a new page id into last spread record"
  (let [last-spread (last-spread)
        updated-spread (assoc-in last-spread
                                 [:page-id-list]
                                 (conj (:page-id-list last-spread)
                                       (next-page-id)))
        new-spreads (into []
                          (-> (:spread @document)
                              (butlast)
                              (conj updated-spread)
                              ))]
    (sort-by :spread-id new-spreads)))

(defn new-spread-record [page-id]
  "Reurn a new spread record"
  {:spread-id (next-spread-id), :page-id-list [page-id]})

(defn new-page-record []
  "Return a new page record"
  {:page-id (next-page-id)
   :num (next-page-num)})

(defn add-page-record []
  "Add a new page record"
  (let [page-record (new-page-record)
        spread-record (new-spread-record (:page-id page-record))]

    ;; Add a new page record
    (swap! document update-in [:page]
           (fn [pages]
             (conj pages page-record)))
    
    (if (< (last-spread-page-count) 2)
      ;; Add a new page id into last spread record
      (swap! document update-in [:spread] add-new-page-id-into-last-spread-record)
      
      ;; Add a new spread
      (swap! document update-in [:spread]
             (fn [spreads]
               (->> (conj (into [] spreads)
                          spread-record)
                    (sort-by :spread-id)))))))