// Compiled by ClojureScript 1.10.339 {}
goog.provide('xpage.action.zone');
goog.require('cljs.core');
goog.require('xpage.state');
xpage.action.zone.open_add_zone = (function xpage$action$zone$open_add_zone(){
return window.$("#add-zone-modal").modal("show");
});
xpage.action.zone.next_zone_id = (function xpage$action$zone$next_zone_id(){
return (cljs.core.last.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"zone-id","zone-id",55099318),new cljs.core.Keyword(null,"zone","zone",2068674983).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)))) + (1));
});
xpage.action.zone.add = (function xpage$action$zone$add(page_id,zone_bounding_box){
var zone_record = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"zone-id","zone-id",55099318),xpage.action.zone.next_zone_id.call(null),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205),zone_bounding_box], null);
return cljs.core.swap_BANG_.call(null,xpage.state.document,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zone","zone",2068674983)], null),((function (zone_record){
return (function (zone_record_list){
return cljs.core.conj.call(null,zone_record_list,zone_record);
});})(zone_record))
);
});

//# sourceMappingURL=zone.js.map
