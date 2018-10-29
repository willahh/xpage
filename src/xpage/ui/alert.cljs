(ns xpage.ui.alert)

(def success-color "#19c3aa")
(def error-color "#DB2828")
(def warn-color "#F2711C")

(defn success [text & {:keys [time]
                       :or {time 5}}]
  (.uiAlert js/$ (clj->js {:textHead ""
                           :text text
                           :bgcolor success-color
                           :icon "checkmark box"
                           :textcolor "#fff"
                           :position "bottom-left"
                           :time time})))

(defn error [text & {:keys [time]
                     :or {time 5}}]
  (.uiAlert js/$ (clj->js {:textHead ""
                           :text text
                           :bgcolor error-color
                           :icon "remove circle"
                           :textcolor "#fff"
                           :position "bottom-left"
                           :time time})))

(defn warning [text & {:keys [time]
                       :or {time 5}}]
  (.uiAlert js/$ (clj->js {:textHead ""
                           :text text
                           :bgcolor warn-color
                           :icon "warning sign"
                           :textcolor "#fff"
                           :position "bottom-left"
                           :time time})))
