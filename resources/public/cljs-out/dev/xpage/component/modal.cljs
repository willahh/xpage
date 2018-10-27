(ns xpage.component.modal)

(defn modal-html [title id content-html buttons]
  [:div.ui.modal {:id id}
   [:i.close.icon]
   [:div.header title]
   content-html
   (map identity buttons)])
