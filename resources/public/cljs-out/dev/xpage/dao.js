// Compiled by ClojureScript 1.10.339 {}
goog.provide('xpage.dao');
goog.require('cljs.core');
goog.require('cljs.tools.reader.edn');
goog.require('xpage.state');
xpage.dao.fetch = (function xpage$dao$fetch(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32310 = arguments.length;
var i__4532__auto___32311 = (0);
while(true){
if((i__4532__auto___32311 < len__4531__auto___32310)){
args__4534__auto__.push((arguments[i__4532__auto___32311]));

var G__32312 = (i__4532__auto___32311 + (1));
i__4532__auto___32311 = G__32312;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return xpage.dao.fetch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

xpage.dao.fetch.cljs$core$IFn$_invoke$arity$variadic = (function (url,success_fn,failure_fn){

return fetch(url).then((function (response){
return response.text().then((function (text){
return success_fn.call(null,text);
}));
}));
});

xpage.dao.fetch.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
xpage.dao.fetch.cljs$lang$applyTo = (function (seq32307){
var G__32308 = cljs.core.first.call(null,seq32307);
var seq32307__$1 = cljs.core.next.call(null,seq32307);
var G__32309 = cljs.core.first.call(null,seq32307__$1);
var seq32307__$2 = cljs.core.next.call(null,seq32307__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32308,G__32309,seq32307__$2);
});

xpage.dao.fetch_document_and_update = (function xpage$dao$fetch_document_and_update(document,doc_name){

return xpage.dao.fetch.call(null,["http://localhost:9500/api/document/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_name)].join(''),(function (text){
return cljs.core.reset_BANG_.call(null,document,cljs.tools.reader.edn.read_string.call(null,text));
}));
});
xpage.dao.fetch_document_list_and_update = (function xpage$dao$fetch_document_list_and_update(document_list){

return xpage.dao.fetch.call(null,"http://localhost:9500/api/documents",(function (text){
return cljs.core.reset_BANG_.call(null,document_list,cljs.tools.reader.edn.read_string.call(null,text));
}));
});
xpage.dao.zone_list_from_page_id = (function xpage$dao$zone_list_from_page_id(page_id){
return cljs.core.filter.call(null,(function (p1__32313_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__32313_SHARP_),page_id);
}),new cljs.core.Keyword(null,"zone","zone",2068674983).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
});

//# sourceMappingURL=dao.js.map
