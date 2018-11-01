(ns xpage.state
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce app-config
  (atom {:zoom-step 0.1}))

;; document information
(defonce document
  (atom {:document-name "document_b",
         :text "Hello world!",
         :page-width 210,
         :page-height 297,
         :page [{:page-id 1, :num 1}
                {:page-id 2, :num 2}
                {:page-id 3, :num 3}
                {:page-id 4, :num 4}
                {:page-id 5, :num 5}],
         :spread [{:spread-id 1, :page-id-list [1 2]}
                  ],
         :zone [{:zone-id 1, :page-id 2, :bounding-box {:top 0, :left 0, :width 10, :height 25}}
                {:zone-id 2, :page-id 2, :bounding-box {:top 30, :left 10, :width 10, :height 10}}
                {:zone-id 3, :page-id 1, :bounding-box {:top 2, :left 3, :width 4, :height 5}}
                ]
         :layer [{:layer-id 1 :name "Layer 1" :color "#ff00ff"}
                 {:layer-id 2 :name "Layer 2" :color "#00ff00"}]}))

;; User session settings
(defonce session-settings
  (atom {
         ;; Zoom scale
         :scale 1

         ;; Active tool
         :tool-active :xpage.constant.tool/pointer

         ;; Active page number
         :active-page 1

         ;; Selected zone id list
         :selected-zone-id-list []
         }))

(defonce js-event-info
  (atom {
         :mouse-event nil
         :screen-x 0
         :screen-y 0
         :click-event nil}))

(def document-list (atom []))



;; State history
(def document-history (atom {:entries [@document]}))
(add-watch document :history
           (fn [_ _ _ n]
             (js/console.log "watch" n)
             (let [entries @document-history]
               (when-not (= (last entries) n)
                 (swap! document-history
                        #(update-in % [:entries] conj n))))))
