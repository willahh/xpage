(ns ^:figwheel-hooks xpage.core
  (:require [goog.dom :as gdom]
            [reagent.core :as reagent]
            [xpage.dao :as dao]
            [xpage.state :refer [document document-list]]
            [xpage.ui.main :refer [main-html]]))

(defn multiply [a b] (* a b))

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (reagent/render-component [main-html] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(defn init []
  (mount-app-element)
  (dao/fetch-document-and-update document "document_a")
  (dao/fetch-document-list-and-update document-list)
  (.ready (js/$) (fn []
                   (.dropdown (js/$ ".ui.dropdown")))))

(defonce one-call (do (init)))
