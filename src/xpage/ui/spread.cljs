(ns xpage.ui.spread)

(defn spread-html [spread-id page-html-list]
  [:div.spread
   {:key spread-id}
   [:div.spread-inner
    (map identity page-html-list)]])