(ns xpage.ui.modal.modals
  (:require [xpage.ui.modal.history :as history]
            [xpage.ui.modal.zone :as zone]))

(defn modals-html []
  [:div
   (history/modal-history-html)
   (zone/zone-modal-html)])

