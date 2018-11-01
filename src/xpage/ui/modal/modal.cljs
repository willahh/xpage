(ns xpage.ui.modal.modal)

(defn modal-html [title id content-html &
                  {:keys [className style ok-button-html ko-button-html]
                   :or {className ""
                        style {}
                        ok-button-html [:div]
                        ko-button-html [:div]}}]
  [:div.ui.modal {:id id
                  :className className
                  :style style}
   [:i.close.icon]
   [:div.header title]
   content-html
   ok-button-html
   ko-button-html])
