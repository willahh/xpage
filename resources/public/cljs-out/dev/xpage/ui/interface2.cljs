(ns xpage.ui.interface2
  )

(comment 
  (defn zoom-in []
    (swap! document update-in [:scale] (fn [scale]
                                         (+ scale (:zoom-step app-config)))))

  (defn zoom-out []
    (swap! document update-in [:scale] (fn [scale]
                                         (- scale (:zoom-step app-config)))))

  (defn tools-html []
    [:div.tools
     [:div.ui.vertical.icon.buttons
      [:button.ui.button 
       [:i.icon.location.arrow]]
      [:button.ui.button {:on-click #(zoom-in)}
       [:i.icon.zoom.in]]
      [:button.ui.button {:on-click #(zoom-out)}
       [:i.icon.zoom.out]]]]))