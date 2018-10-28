// Compiled by ClojureScript 1.10.339 {}
goog.provide('xpage.ui');
goog.require('cljs.core');
goog.require('xpage.state');
goog.require('xpage.dao');
goog.require('xpage.ui.xinterface');
goog.require('xpage.action.zone');
goog.require('xpage.action.document');
xpage.ui.scale_value = (function xpage$ui$scale_value(value){
return (value * new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
});
xpage.ui.spread_html = (function xpage$ui$spread_html(spread_id,pages){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spread","div.spread",1219475037),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),spread_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spread-inner","div.spread-inner",1531451063),cljs.core.map.call(null,cljs.core.identity,pages)], null)], null);
});
xpage.ui.zone_html = (function xpage$ui$zone_html(zone_record){
var page_record = (1);
var boundary = new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205).cljs$core$IFn$_invoke$arity$1(zone_record);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.zone","div.zone",481968830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"zone-id","zone-id",55099318).cljs$core$IFn$_invoke$arity$1(zone_record),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(xpage.ui.scale_value.call(null,(new cljs.core.Keyword(null,"page-height","page-height",1988560834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)) * new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(boundary))) / (100)),new cljs.core.Keyword(null,"left","left",-399115937),(xpage.ui.scale_value.call(null,(new cljs.core.Keyword(null,"page-width","page-width",185039201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)) * new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(boundary))) / (100)),new cljs.core.Keyword(null,"width","width",-384071477),(xpage.ui.scale_value.call(null,(new cljs.core.Keyword(null,"page-width","page-width",185039201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)) * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(boundary))) / (100)),new cljs.core.Keyword(null,"height","height",1025178622),(xpage.ui.scale_value.call(null,(new cljs.core.Keyword(null,"page-height","page-height",1988560834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(boundary))) / (100))], null)], null)], null);
});
xpage.ui.page_html = (function xpage$ui$page_html(page_record){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(page_record),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),xpage.ui.scale_value.call(null,new cljs.core.Keyword(null,"page-width","page-width",185039201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document))),new cljs.core.Keyword(null,"height","height",1025178622),xpage.ui.scale_value.call(null,new cljs.core.Keyword(null,"page-height","page-height",1988560834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.zones","div.zones",480080865),(function (){var page_id = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(page_record);
var zone_record_list = xpage.dao.zone_list_from_page_id.call(null,page_id);
return cljs.core.doall.call(null,cljs.core.map.call(null,xpage.ui.zone_html,zone_record_list));
})()], null)], null);
});
xpage.ui.document_html = (function xpage$ui$document_html(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.document","div.document",-85286330),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function xpage$ui$document_html_$_iter__40896(s__40897){
return (new cljs.core.LazySeq(null,(function (){
var s__40897__$1 = s__40897;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__40897__$1);
if(temp__5457__auto__){
var s__40897__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40897__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__40897__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__40899 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__40898 = (0);
while(true){
if((i__40898 < size__4323__auto__)){
var spread = cljs.core._nth.call(null,c__4322__auto__,i__40898);
cljs.core.chunk_append.call(null,b__40899,xpage.ui.spread_html.call(null,new cljs.core.Keyword(null,"spread-id","spread-id",-151481820).cljs$core$IFn$_invoke$arity$1(spread),(function (){var page_id_list = new cljs.core.Keyword(null,"page-id-list","page-id-list",-1886532636).cljs$core$IFn$_invoke$arity$1(spread);
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (i__40898,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__40899,s__40897__$2,temp__5457__auto__){
return (function xpage$ui$document_html_$_iter__40896_$_iter__40900(s__40901){
return (new cljs.core.LazySeq(null,((function (i__40898,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__40899,s__40897__$2,temp__5457__auto__){
return (function (){
var s__40901__$1 = s__40901;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__40901__$1);
if(temp__5457__auto____$1){
var s__40901__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40901__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__40901__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__40903 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__40902 = (0);
while(true){
if((i__40902 < size__4323__auto____$1)){
var page_id = cljs.core._nth.call(null,c__4322__auto____$1,i__40902);
cljs.core.chunk_append.call(null,b__40903,xpage.ui.page_html.call(null,cljs.core.first.call(null,(function (){var page_record_list = cljs.core.filter.call(null,((function (i__40902,i__40898,page_id,c__4322__auto____$1,size__4323__auto____$1,b__40903,s__40901__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__40899,s__40897__$2,temp__5457__auto__){
return (function (p1__40895_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__40895_SHARP_),page_id);
});})(i__40902,i__40898,page_id,c__4322__auto____$1,size__4323__auto____$1,b__40903,s__40901__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__40899,s__40897__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
return page_record_list;
})())));

var G__40908 = (i__40902 + (1));
i__40902 = G__40908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40903),xpage$ui$document_html_$_iter__40896_$_iter__40900.call(null,cljs.core.chunk_rest.call(null,s__40901__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40903),null);
}
} else {
var page_id = cljs.core.first.call(null,s__40901__$2);
return cljs.core.cons.call(null,xpage.ui.page_html.call(null,cljs.core.first.call(null,(function (){var page_record_list = cljs.core.filter.call(null,((function (i__40898,page_id,s__40901__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__40899,s__40897__$2,temp__5457__auto__){
return (function (p1__40895_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__40895_SHARP_),page_id);
});})(i__40898,page_id,s__40901__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__40899,s__40897__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
return page_record_list;
})())),xpage$ui$document_html_$_iter__40896_$_iter__40900.call(null,cljs.core.rest.call(null,s__40901__$2)));
}
} else {
return null;
}
break;
}
});})(i__40898,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__40899,s__40897__$2,temp__5457__auto__))
,null,null));
});})(i__40898,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__40899,s__40897__$2,temp__5457__auto__))
;
return iter__4324__auto__.call(null,page_id_list);
})());
})()));

var G__40909 = (i__40898 + (1));
i__40898 = G__40909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40899),xpage$ui$document_html_$_iter__40896.call(null,cljs.core.chunk_rest.call(null,s__40897__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40899),null);
}
} else {
var spread = cljs.core.first.call(null,s__40897__$2);
return cljs.core.cons.call(null,xpage.ui.spread_html.call(null,new cljs.core.Keyword(null,"spread-id","spread-id",-151481820).cljs$core$IFn$_invoke$arity$1(spread),(function (){var page_id_list = new cljs.core.Keyword(null,"page-id-list","page-id-list",-1886532636).cljs$core$IFn$_invoke$arity$1(spread);
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (page_id_list,spread,s__40897__$2,temp__5457__auto__){
return (function xpage$ui$document_html_$_iter__40896_$_iter__40904(s__40905){
return (new cljs.core.LazySeq(null,((function (page_id_list,spread,s__40897__$2,temp__5457__auto__){
return (function (){
var s__40905__$1 = s__40905;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__40905__$1);
if(temp__5457__auto____$1){
var s__40905__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40905__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__40905__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__40907 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__40906 = (0);
while(true){
if((i__40906 < size__4323__auto__)){
var page_id = cljs.core._nth.call(null,c__4322__auto__,i__40906);
cljs.core.chunk_append.call(null,b__40907,xpage.ui.page_html.call(null,cljs.core.first.call(null,(function (){var page_record_list = cljs.core.filter.call(null,((function (i__40906,page_id,c__4322__auto__,size__4323__auto__,b__40907,s__40905__$2,temp__5457__auto____$1,page_id_list,spread,s__40897__$2,temp__5457__auto__){
return (function (p1__40895_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__40895_SHARP_),page_id);
});})(i__40906,page_id,c__4322__auto__,size__4323__auto__,b__40907,s__40905__$2,temp__5457__auto____$1,page_id_list,spread,s__40897__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
return page_record_list;
})())));

var G__40910 = (i__40906 + (1));
i__40906 = G__40910;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40907),xpage$ui$document_html_$_iter__40896_$_iter__40904.call(null,cljs.core.chunk_rest.call(null,s__40905__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40907),null);
}
} else {
var page_id = cljs.core.first.call(null,s__40905__$2);
return cljs.core.cons.call(null,xpage.ui.page_html.call(null,cljs.core.first.call(null,(function (){var page_record_list = cljs.core.filter.call(null,((function (page_id,s__40905__$2,temp__5457__auto____$1,page_id_list,spread,s__40897__$2,temp__5457__auto__){
return (function (p1__40895_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__40895_SHARP_),page_id);
});})(page_id,s__40905__$2,temp__5457__auto____$1,page_id_list,spread,s__40897__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
return page_record_list;
})())),xpage$ui$document_html_$_iter__40896_$_iter__40904.call(null,cljs.core.rest.call(null,s__40905__$2)));
}
} else {
return null;
}
break;
}
});})(page_id_list,spread,s__40897__$2,temp__5457__auto__))
,null,null));
});})(page_id_list,spread,s__40897__$2,temp__5457__auto__))
;
return iter__4324__auto__.call(null,page_id_list);
})());
})()),xpage$ui$document_html_$_iter__40896.call(null,cljs.core.rest.call(null,s__40897__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,new cljs.core.Keyword(null,"spread","spread",862337191).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
})())], null);
});

//# sourceMappingURL=ui.js.map
