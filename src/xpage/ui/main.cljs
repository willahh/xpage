(ns xpage.ui.main
  (:require [xpage.state :refer [js-event-info]]
            [xpage.ui :as ui]
            [xpage.ui.panel.page-panel :refer [page-panel-html]]
            [xpage.ui.modal.zone :refer [zone-modal-html]]
            [xpage.ui.xinterface :refer [tools-html main-toolbar-html]]
            [xpage.ui.document :refer [document-html]]            
            [xpage.ui.info :refer [info-html]]))

(defn main-html []
  [:div
   (tools-html)
   (main-toolbar-html)
   (document-html)
   (zone-modal-html)
   (info-html)
   (page-panel-html)])

(defonce init-main-js
  (js/window.addEventListener
   "mousemove" (fn [event]
                 (swap! js-event-info update-in
                        [:mouse-event] (fn []
                                         event))
                 (swap! js-event-info update-in
                        [:screen-x] (fn []
                                      event.screenX))
                 (swap! js-event-info update-in
                        [:screen-y] (fn []
                                      event.screenY)))))

