// Compiled by ClojureScript 1.10.339 {}
goog.provide('xpage.action.document');
goog.require('cljs.core');
goog.require('xpage.state');
goog.require('cljs.tools.reader.edn');
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
xpage.action.document.save_document = (function xpage$action$document$save_document(document_name){
var form_data = (new FormData());
var url = ["http://localhost:9500/api/document/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(document_name),"/save"].join('');
var blob = (new Blob(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document))].join('')], null)));
var request = (new XMLHttpRequest());
form_data.append("document",blob);


request.open("POST",url);

return request.send(form_data);
});
xpage.action.document.save_current_document = (function xpage$action$document$save_current_document(){
return xpage.action.document.save_document.call(null,new cljs.core.Keyword(null,"document-name","document-name",-591850874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
});

//# sourceMappingURL=document.js.map
