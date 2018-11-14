(ns xpage.javascript-event
  (:require [xpage.state :refer [js-event-info]]
            [cljs.core.async :refer [chan put! go take! >! <! buffer dropping-buffer sliding-buffer timeout close! alts!]]
            [xpage.state :as state]
            [xpage.helper.tools :refer [is-tool-active]]))

;; Main javascript event delegation
(defonce init-main-js
  (do (js/window.addEventListener
       "mousemove" (fn [event]
                     (swap! js-event-info update-in
                            [:mouse-event] (fn []
                                             event))
                     (swap! js-event-info update-in
                            [:screen-x] (fn []
                                          event.screenX))
                     (swap! js-event-info update-in
                            [:screen-y] (fn []
                                          event.screenY))))
      (comment 
        (js/window.addEventListener;
         "click" (fn [event]
                   (swap! js-event-info update-in
                          [:click-event] (fn []
                                           event)))))))

(defn listen [element js-event-name]
  "Add a js event listener into channel"
  (let [out-channel (chan)]
    (.addEventListener
     element js-event-name
     (fn [event]
       (put! out-channel [event js-event-name])))
    out-channel))

(defonce click-channel (listen js/window "click"))
(defonce mouse-move-channel (listen js/window "mousemove"))
(defonce mouse-down-channel (listen js/window "mousedown"))
(defonce mouse-up-channel (listen js/window "mouseup"))



;; (go (while true
;;       (let [click-event (<! click-channel)]
;;         (js/console.log "test" click-channel))))

;; (go (while true
;;       (let [mouse-move-event (<! mouse-move-channel)]
;;         (js/console.log "move" mouse-move-event))))





