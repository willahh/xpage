(ns xpage.javascript-event
  (:require [xpage.state :refer [js-event-info]]))

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
      (js/window.addEventListener
       "click" (fn [event]
                 (swap! js-event-info update-in
                        [:click-event] (fn []
                                         event))))))