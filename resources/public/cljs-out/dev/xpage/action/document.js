// Compiled by ClojureScript 1.10.339 {}
goog.provide('xpage.action.document');
goog.require('cljs.core');
goog.require('xpage.state');
xpage.action.document.zoom_in = (function xpage$action$document$zoom_in(){
return cljs.core.swap_BANG_.call(null,xpage.state.document,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),(function (scale){
return (scale + new cljs.core.Keyword(null,"zoom-step","zoom-step",-1257828560).cljs$core$IFn$_invoke$arity$1(xpage.state.app_config));
}));
});
xpage.action.document.zoom_out = (function xpage$action$document$zoom_out(){
return cljs.core.swap_BANG_.call(null,xpage.state.document,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),(function (scale){
return (scale - new cljs.core.Keyword(null,"zoom-step","zoom-step",-1257828560).cljs$core$IFn$_invoke$arity$1(xpage.state.app_config));
}));
});

//# sourceMappingURL=document.js.map
