// Compiled by ClojureScript 1.10.339 {}
goog.provide('xpage.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('garden.core');
cljs.core.println.call(null,"This text is printed from src/xpage/core.cljs. Go ahead and edit it and see reloading in action.");
xpage.core.multiply = (function xpage$core$multiply(a,b){
return (a * b);
});
xpage.core.app_config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom-step","zoom-step",-1257828560),0.1], null);
if((typeof xpage !== 'undefined') && (typeof xpage.core !== 'undefined') && (typeof xpage.core.app_state !== 'undefined')){
} else {
xpage.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!",new cljs.core.Keyword(null,"scale","scale",-230427353),0.6,new cljs.core.Keyword(null,"page-width","page-width",185039201),(210),new cljs.core.Keyword(null,"page-height","page-height",1988560834),(297),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),(1),new cljs.core.Keyword(null,"num","num",1985240673),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),(2),new cljs.core.Keyword(null,"num","num",1985240673),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),(3),new cljs.core.Keyword(null,"num","num",1985240673),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),(4),new cljs.core.Keyword(null,"num","num",1985240673),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),(5),new cljs.core.Keyword(null,"num","num",1985240673),(5)], null)], null),new cljs.core.Keyword(null,"spread","spread",862337191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spread-id","spread-id",-151481820),(1),new cljs.core.Keyword(null,"page-id-list","page-id-list",-1886532636),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spread-id","spread-id",-151481820),(2),new cljs.core.Keyword(null,"page-id-list","page-id-list",-1886532636),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null)], null),new cljs.core.Keyword(null,"zone","zone",2068674983),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"zone-id","zone-id",55099318),(1),new cljs.core.Keyword(null,"page-id","page-id",-872941168),(2),new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"height","height",1025178622),(25)], null)], null)], null)], null));
}
xpage.core.apply_current_scale_to_value = (function xpage$core$apply_current_scale_to_value(value){
return (value * new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.app_state)));
});
xpage.core.zoom_in = (function xpage$core$zoom_in(){
return cljs.core.swap_BANG_.call(null,xpage.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),(function (scale){
return (scale + new cljs.core.Keyword(null,"zoom-step","zoom-step",-1257828560).cljs$core$IFn$_invoke$arity$1(xpage.core.app_config));
}));
});
xpage.core.zoom_out = (function xpage$core$zoom_out(){
return cljs.core.swap_BANG_.call(null,xpage.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),(function (scale){
return (scale - new cljs.core.Keyword(null,"zoom-step","zoom-step",-1257828560).cljs$core$IFn$_invoke$arity$1(xpage.core.app_config));
}));
});
xpage.core.get_app_element = (function xpage$core$get_app_element(){
return goog.dom.getElement("app");
});
xpage.core.toolbar_html = (function xpage$core$toolbar_html(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar","div.toolbar",-1371089148),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"id","id",-1388402092),"range",new cljs.core.Keyword(null,"name","name",1843675177),"range",new cljs.core.Keyword(null,"value","value",305978217),(20),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"step","step",1288888124),(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return xpage.core.zoom_in.call(null);
})], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return xpage.core.zoom_out.call(null);
})], null),"-"], null),null], null);
});
xpage.core.tools_html = (function xpage$core$tools_html(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.vertical.labeled.icon.buttons.tools","div.ui.vertical.labeled.icon.buttons.tools",-746783588),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.location.arrow.icon","i.location.arrow.icon",-1256704491)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.location.arrow.icon","i.location.arrow.icon",-1256704491)], null)], null)], null);
});
xpage.core.spread_html = (function xpage$core$spread_html(pages){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spread","div.spread",1219475037),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spread-inner","div.spread-inner",1531451063),cljs.core.map.call(null,(function (page){
return page;
}),pages)], null)], null);
});
xpage.core.zone_html = (function xpage$core$zone_html(zone_row){
var page_row = (1);
var boundary = new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205).cljs$core$IFn$_invoke$arity$1(zone_row);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.zone","div.zone",481968830),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(xpage.core.apply_current_scale_to_value.call(null,(new cljs.core.Keyword(null,"page-height","page-height",1988560834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.app_state)) * new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(boundary))) / (100)),new cljs.core.Keyword(null,"left","left",-399115937),(xpage.core.apply_current_scale_to_value.call(null,(new cljs.core.Keyword(null,"page-width","page-width",185039201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.app_state)) * new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(boundary))) / (100)),new cljs.core.Keyword(null,"width","width",-384071477),(xpage.core.apply_current_scale_to_value.call(null,(new cljs.core.Keyword(null,"page-width","page-width",185039201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.app_state)) * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(boundary))) / (100)),new cljs.core.Keyword(null,"height","height",1025178622),(xpage.core.apply_current_scale_to_value.call(null,(new cljs.core.Keyword(null,"page-height","page-height",1988560834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.app_state)) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(boundary))) / (100))], null)], null)], null);
});
xpage.core.page_html = (function xpage$core$page_html(page_row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),xpage.core.apply_current_scale_to_value.call(null,new cljs.core.Keyword(null,"page-width","page-width",185039201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.app_state))),new cljs.core.Keyword(null,"height","height",1025178622),xpage.core.apply_current_scale_to_value.call(null,new cljs.core.Keyword(null,"page-height","page-height",1988560834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.app_state)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.zones","div.zones",480080865),xpage.core.zone_html.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"zone","zone",2068674983).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.app_state))))], null)], null);
});
xpage.core.document_html = (function xpage$core$document_html(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.document","div.document",-85286330),(function (){var iter__4324__auto__ = (function xpage$core$document_html_$_iter__33873(s__33874){
return (new cljs.core.LazySeq(null,(function (){
var s__33874__$1 = s__33874;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__33874__$1);
if(temp__5457__auto__){
var s__33874__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33874__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__33874__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__33876 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__33875 = (0);
while(true){
if((i__33875 < size__4323__auto__)){
var spread = cljs.core._nth.call(null,c__4322__auto__,i__33875);
cljs.core.chunk_append.call(null,b__33876,xpage.core.spread_html.call(null,(function (){var page_id_list = new cljs.core.Keyword(null,"page-id-list","page-id-list",-1886532636).cljs$core$IFn$_invoke$arity$1(spread);
var iter__4324__auto__ = ((function (i__33875,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__33876,s__33874__$2,temp__5457__auto__){
return (function xpage$core$document_html_$_iter__33873_$_iter__33877(s__33878){
return (new cljs.core.LazySeq(null,((function (i__33875,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__33876,s__33874__$2,temp__5457__auto__){
return (function (){
var s__33878__$1 = s__33878;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__33878__$1);
if(temp__5457__auto____$1){
var s__33878__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33878__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__33878__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__33880 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__33879 = (0);
while(true){
if((i__33879 < size__4323__auto____$1)){
var page_id = cljs.core._nth.call(null,c__4322__auto____$1,i__33879);
cljs.core.chunk_append.call(null,b__33880,xpage.core.page_html.call(null,(function (){var page_row_list = cljs.core.filter.call(null,((function (i__33879,i__33875,page_id,c__4322__auto____$1,size__4323__auto____$1,b__33880,s__33878__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__33876,s__33874__$2,temp__5457__auto__){
return (function (p1__33872_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__33872_SHARP_),page_id);
});})(i__33879,i__33875,page_id,c__4322__auto____$1,size__4323__auto____$1,b__33880,s__33878__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__33876,s__33874__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.app_state)));
return page_row_list;
})()));

var G__33885 = (i__33879 + (1));
i__33879 = G__33885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33880),xpage$core$document_html_$_iter__33873_$_iter__33877.call(null,cljs.core.chunk_rest.call(null,s__33878__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33880),null);
}
} else {
var page_id = cljs.core.first.call(null,s__33878__$2);
return cljs.core.cons.call(null,xpage.core.page_html.call(null,(function (){var page_row_list = cljs.core.filter.call(null,((function (i__33875,page_id,s__33878__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__33876,s__33874__$2,temp__5457__auto__){
return (function (p1__33872_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__33872_SHARP_),page_id);
});})(i__33875,page_id,s__33878__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__33876,s__33874__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.app_state)));
return page_row_list;
})()),xpage$core$document_html_$_iter__33873_$_iter__33877.call(null,cljs.core.rest.call(null,s__33878__$2)));
}
} else {
return null;
}
break;
}
});})(i__33875,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__33876,s__33874__$2,temp__5457__auto__))
,null,null));
});})(i__33875,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__33876,s__33874__$2,temp__5457__auto__))
;
return iter__4324__auto__.call(null,page_id_list);
})()));

var G__33886 = (i__33875 + (1));
i__33875 = G__33886;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33876),xpage$core$document_html_$_iter__33873.call(null,cljs.core.chunk_rest.call(null,s__33874__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33876),null);
}
} else {
var spread = cljs.core.first.call(null,s__33874__$2);
return cljs.core.cons.call(null,xpage.core.spread_html.call(null,(function (){var page_id_list = new cljs.core.Keyword(null,"page-id-list","page-id-list",-1886532636).cljs$core$IFn$_invoke$arity$1(spread);
var iter__4324__auto__ = ((function (page_id_list,spread,s__33874__$2,temp__5457__auto__){
return (function xpage$core$document_html_$_iter__33873_$_iter__33881(s__33882){
return (new cljs.core.LazySeq(null,((function (page_id_list,spread,s__33874__$2,temp__5457__auto__){
return (function (){
var s__33882__$1 = s__33882;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__33882__$1);
if(temp__5457__auto____$1){
var s__33882__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33882__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__33882__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__33884 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__33883 = (0);
while(true){
if((i__33883 < size__4323__auto__)){
var page_id = cljs.core._nth.call(null,c__4322__auto__,i__33883);
cljs.core.chunk_append.call(null,b__33884,xpage.core.page_html.call(null,(function (){var page_row_list = cljs.core.filter.call(null,((function (i__33883,page_id,c__4322__auto__,size__4323__auto__,b__33884,s__33882__$2,temp__5457__auto____$1,page_id_list,spread,s__33874__$2,temp__5457__auto__){
return (function (p1__33872_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__33872_SHARP_),page_id);
});})(i__33883,page_id,c__4322__auto__,size__4323__auto__,b__33884,s__33882__$2,temp__5457__auto____$1,page_id_list,spread,s__33874__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.app_state)));
return page_row_list;
})()));

var G__33887 = (i__33883 + (1));
i__33883 = G__33887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33884),xpage$core$document_html_$_iter__33873_$_iter__33881.call(null,cljs.core.chunk_rest.call(null,s__33882__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33884),null);
}
} else {
var page_id = cljs.core.first.call(null,s__33882__$2);
return cljs.core.cons.call(null,xpage.core.page_html.call(null,(function (){var page_row_list = cljs.core.filter.call(null,((function (page_id,s__33882__$2,temp__5457__auto____$1,page_id_list,spread,s__33874__$2,temp__5457__auto__){
return (function (p1__33872_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__33872_SHARP_),page_id);
});})(page_id,s__33882__$2,temp__5457__auto____$1,page_id_list,spread,s__33874__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.app_state)));
return page_row_list;
})()),xpage$core$document_html_$_iter__33873_$_iter__33881.call(null,cljs.core.rest.call(null,s__33882__$2)));
}
} else {
return null;
}
break;
}
});})(page_id_list,spread,s__33874__$2,temp__5457__auto__))
,null,null));
});})(page_id_list,spread,s__33874__$2,temp__5457__auto__))
;
return iter__4324__auto__.call(null,page_id_list);
})()),xpage$core$document_html_$_iter__33873.call(null,cljs.core.rest.call(null,s__33874__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,new cljs.core.Keyword(null,"spread","spread",862337191).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.app_state)));
})()], null);
});
xpage.core.hello_world = (function xpage$core$hello_world(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),xpage.core.toolbar_html.call(null),xpage.core.tools_html.call(null),xpage.core.document_html.call(null)], null);
});
xpage.core.mount = (function xpage$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpage.core.hello_world], null),el);
});
xpage.core.mount_app_element = (function xpage$core$mount_app_element(){
var temp__5457__auto__ = xpage.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return xpage.core.mount.call(null,el);
} else {
return null;
}
});
xpage.core.mount_app_element.call(null);
xpage.core.on_reload = (function xpage$core$on_reload(){
return xpage.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
