(ns xpage.ui.modal.zone
  (:require [xpage.ui.modal.modal :refer [modal-html]]))

(defn zone-modal-html []
  (modal-html "Title"
              "add-zone-modal"
              [:div "Contenu"]
              [[:div.ui.button {:key "a"
                                :on-click (fn [event]
                                            (.modal (.$ js/window "#add-zone-modal") "hide"))}
                "Cancel"]
               [:div.ui.button {:key "b"}
                "OK"]]))