(ns xpage.ui.panel.panels
  (:require [xpage.ui.panel.page-panel :as page-panel]
            [xpage.ui.panel.layer-panel :as layer-panel]))

(defn panels-html []
  [:div.panels
   (page-panel/page-panel-html)
   (layer-panel/layer-panel-html)])