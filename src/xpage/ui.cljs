(ns xpage.ui
  (:require [xpage.state :refer [app-config
                                 document
                                 document-list
                                 session-settings]]
            [xpage.dao :as dao]
            [xpage.ui.xinterface :refer [tools-html main-toolbar-html]]
            [xpage.ui.spread :refer [spread-html]]
            [xpage.ui.zone :refer [zone-html]]
            [xpage.ui.page :refer [page-html]]
            [xpage.ui.document :refer [document-html]]
            [xpage.action.zone :refer [open-add-zone]]
            [xpage.action.document :refer [zoom-in zoom-out]]))


