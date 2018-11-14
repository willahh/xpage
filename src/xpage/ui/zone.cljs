(ns xpage.ui.zone
  (:require [cljs.core.async :refer [chan go go-loop close! put! alts! <! >! alt!]]
            [xpage.helper.tools :refer [is-tool-active]]
            [xpage.state :as state :refer [document
                                           session-settings
                                           js-event-info]]
            [xpage.action.zone :as zone]
            [xpage.model.zone-dao :as zone-dao]
            [xpage.javascript-event :refer [mouse-move-channel
                                            mouse-up-channel
                                            mouse-down-channel]]))
(def zone--temp (atom {}))
(def mouse-event (atom nil))
;; (mouse-xy-relative-to-page @mouse-event)
(def zone-bounding (atom {}))

;; (zone-dao/make-zone! 1
;;                      :top 0
;;                      :left 0
;;                      :width 20
;;                      :height 20)

(defn- page-bounding-box [mouse-event]
  (let [page-element (-> mouse-event
                         .-target
                         (.closest ".page"))]
    (when page-element
      (let [bounding (.getBoundingClientRect page-element)]
        {:top (.-top bounding)
         :left (.-left bounding)
         :width (.-width bounding)
         :height (.-right bounding)}))))

(defn- mouse-xy-relative-to-page [mouse-event]
  "Get mouse x and y coordinates relative to page"
  (when mouse-event
    (let [page-bounding-box (page-bounding-box mouse-event)]
      (when page-bounding-box
        {:x (- (.-clientX mouse-event) (:left page-bounding-box))
         :y (- (.-clientY mouse-event) (:top page-bounding-box))}))))

(defn scale-value [value]
  (-> value
      (* (:scale @session-settings))))

(defn zone-class-name [zone-id]
  (str "zone" (when (some #{zone-id}
                          (:selected-zone-id-list @session-settings))
                " active")))

(defn zone-html [zone-record]
  (let [page-record 1
        zone-id (:zone-id zone-record)
        boundary (:bounding-box zone-record)
        className (zone-class-name zone-id)]
    [:div
     {:key (:zone-id zone-record)
      :className className
      :on-click (fn [event]
                  (.stopPropagation event)
                  (zone/select-zone zone-id))
      ;; #(select-zone zone-id)
      :style {:top (/ (scale-value
                       (* (:page-height @document) (:top boundary))) 100)
              :left (/ (scale-value
                        (* (:page-width @document) (:left boundary))) 100)
              :width (/ (scale-value
                         (* (:page-width @document) (:width boundary))) 100)
              :height (/ (scale-value
                          (* (:page-height @document) (:height boundary))) 100)}}]))







;; (go-loop []
;;   (loop []
;;     (alt! [mouse-down-channel] down nil ;; stop looping when mouse-down is read
;;           [mouse-move-channel] event (recur))) ;; loop until mouse-down
;;   (loop []
;;     (alt! [mouse-up-channel] up nil ;; stop looping when mouse-up is read
;;           [mouse-move-channel] event ;; process current position
;;           (do
;;             (.log js/console (str evt-type " we are over " event))
;;             (recur)))) ;; loop until mouse-up
;;   (recur)) ;; start the process all over again



(go (while true
      (let [event (<! mouse-move-channel)]
        (js/console.log event))))

(go (while true
      (let [event (<! mouse-down-channel)]

        (js/console.log event))))







;; (defn merge-chans [& chans]
;;   (let [rc (chan)]
;;     (go
;;       (loop []
;;         (put! rc (first (alts! chans)))
;;         (recur)))
;;     rc))


;; (go (while true
;;       (<! mouse-down-channel)
;;       (loop []
;;         (let [[v ch] (alts! [mouse-move-channel mouse-up-channel])]
;;           (when (= ch mouse-move-channel)
;;             (do
;;               (js/console.log "move")
;;               (recur)))))))



;; (def mouse-channel (chan 1))

;; (let [start-state {:a "a"}
;;       move mouse-move-channel
;;       up mouse-up-channel
;;       down mouse-down-channel
;;       input-channel (merge-chans move up down)]
;;   (go-loop []
;;     (let [[event mouse-event-name] (<! input-channel)
;;           {x :x y :y} (mouse-xy-relative-to-page event)]
;;       (println "a "x y mouse-event-name)
;;       ;; (>! mouse-channel {:x x :y y})
;;       (recur )




;;       )))

;; (let [start-state {:a "a"}
;;       move mouse-move-channel
;;       up mouse-up-channel
;;       down mouse-down-channel
;;       input-channel (merge-chans move up down)]
;;   (go
;;     (while true
;;       (let [event (<! input-channel)
;;             {x :x y :y} (mouse-xy-relative-to-page event)]
;;         (println "a "x y)


;;         ;; (>! mouse-channel {:x x :y y})



;;         ))))

;; (go
;;   (while true
;;     (let [event (<! input)
;;           {x :x y :y} (mouse-xy-relative-to-page event)]
;;       (println "a "x y))))
















;; (defn- on-mouse-down [event]
;;   (let [{x :x
;;          y :y} (mouse-xy-relative-to-page event)] 
;;     (swap! zone-bounding assoc
;;            :left x
;;            :top y)
;;     (js/console.log "down from ui/zone" @zone-bounding)))

;; (defn- on-mouse-up [event]
;;   (js/console.log "up from ui/zone" event)
;;   (reset! mouse-event event))

;; (defn- on-mouse-move [event]
;;   (let [{x :x
;;          y :y} (mouse-xy-relative-to-page event)] 
;;     (swap! zone-bounding assoc
;;            :width x
;;            :height y)
;;     (js/console.log "move from ui/zone" @zone-bounding)))

;; (defonce mouse-down-c
;;   (go (while true
;;         (let [event (<! mouse-down-channel)]
;;           (when (is-tool-active :xpage.constant.tool/rectangle)
;;             (on-mouse-down event))))))

;; (defonce mouse-up-c
;;   (go (while true
;;         (let [event (<! mouse-up-channel)]
;;           (when (is-tool-active :xpage.constant.tool/rectangle)
;;             (on-mouse-up event))))))

;; (defonce mouse-move-c
;;   (go (while true
;;         (let [event (<! mouse-move-channel)]
;;           (when (is-tool-active :xpage.constant.tool/rectangle)
;;             (on-mouse-move event))))))



;; ;; Mouse move
;; (go (while true
;;       (let [event (<! mouse-move-channel)
;;             {x :x y :y} (mouse-xy-relative-to-page event)]
;;         (>! mouse-move-channel-out (assoc @zone-bounding assoc
;;                                           :width x
;;                                           :height y))



;;         (let [z (<! mouse-move-channel-out)]
;;           (when z
;;             (println "Got => " z)
;;             (swap! zone-bounding assoc
;;                    :left x
;;                    :top y))))))

;; ;; Mouse down
;; (go (while true
;;       (let [event (<! mouse-down-channel)
;;             {x :x y :y} (mouse-xy-relative-to-page event)]
;;         (>! mouse-down-channel-out (assoc @zone-bounding assoc
;;                                           :width x
;;                                           :height y))


;;         (let [z (<! mouse-down-channel-out)]
;;           (when z
;;             (println "(mouse down) Got  => " z)
;;             (swap! zone-bounding assoc
;;                    :left x
;;                    :top y))))



;;       ))

;; ;; Mouse up
;; (go (while true
;;       (let [event (<! mouse-up-channel)]
;;         (println "(mouse up)")




;;         )))





