(ns xpage.ui.main
  (:require [xpage.ui.document :refer [document-html]]
            [xpage.ui.modal.zone :refer [zone-modal-html]]
            [xpage.ui.panel.info :refer [info-html]]
            [xpage.ui.panel.page-panel :refer [page-panel-html]]
            [xpage.ui.panel.toolbar :refer [main-toolbar-html]]
            [xpage.ui.panel.panels :refer [panels-html]]
            [xpage.ui.panel.tools :refer [tools-html]]))

(defn main-html []
  [:div.main
   (tools-html)
   (main-toolbar-html)
   (document-html)
   (zone-modal-html)
   (info-html)
   (panels-html)])
