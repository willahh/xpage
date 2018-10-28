(ns xpage.ui.modal.zone
  (:require [xpage.ui.modal.modal :refer [modal-html]]
            [xpage.state :refer [document]]
            [xpage.action.zone :as zone]))

(defn form-query-string-to-array-map [form-query-string]
  "Take a javascript querystring who target a <form> and return a array-map of values"
  (let [form (js/document.querySelector form-query-string)
        form-data (js/window.FormData. form)
        entries (.entries form-data)
        data (js->clj (js/Array.from entries))]
    (into {}
          (map #(array-map (keyword (first %))
                           (second %)) data))))

(defn validate []
  (let [form-data (form-query-string-to-array-map "#add-zone-modal form")
        page-id (int (:page form-data))
        zone-bounding-box {:top (int (:top form-data)),
                           :left (int (:left form-data)),
                           :width (int (:width form-data)),
                           :height (int (:height form-data))}]
    (zone/add page-id zone-bounding-box)))

(defn zone-modal-html []  
  (let [title "Title"
        id "add-zone-modal"
        content-html
        [:form.ui {:style {:padding "10px"}}
         [:div.field
          [:label "Page"]
          (let [option-html (map (fn [page-record]
                                   [:option {:value (:page-id page-record)} (:num page-record)])
                                 (:page @document))
                select-html (apply conj [:select {:name "page"}] option-html)]
            select-html)]
         [:div.field
          [:label "top"]
          [:input {:type "text" :name "top" :size 4}]]
         [:div.field
          [:label "left"]
          [:input {:type "text" :name "left" :size 4}]]
         [:div.field
          [:label "width"]
          [:input {:type "text" :name "width" :size 4}]]
         [:div.field
          [:label "height"]
          [:input {:type "text" :name "height" :size 4}]]]
        button-cancel [:div.ui.button
                       {:key "a"
                        :on-click (fn [event]
                                    (.modal (.$ js/window "#add-zone-modal") "hide"))}
                       "Cancel"]
        button-validate [:div.ui.button {:key "b"
                                         :on-click #(validate)}
                         "OK"]]
    (modal-html title id content-html [button-cancel button-validate]))) 



(comment
  (form-query-string-to-array-map "#add-zone-modal form")
  
  
  
  
  
  )

