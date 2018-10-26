// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29475){
var map__29476 = p__29475;
var map__29476__$1 = ((((!((map__29476 == null)))?(((((map__29476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29476):map__29476);
var m = map__29476__$1;
var n = cljs.core.get.call(null,map__29476__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29476__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29478_29500 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29479_29501 = null;
var count__29480_29502 = (0);
var i__29481_29503 = (0);
while(true){
if((i__29481_29503 < count__29480_29502)){
var f_29504 = cljs.core._nth.call(null,chunk__29479_29501,i__29481_29503);
cljs.core.println.call(null,"  ",f_29504);


var G__29505 = seq__29478_29500;
var G__29506 = chunk__29479_29501;
var G__29507 = count__29480_29502;
var G__29508 = (i__29481_29503 + (1));
seq__29478_29500 = G__29505;
chunk__29479_29501 = G__29506;
count__29480_29502 = G__29507;
i__29481_29503 = G__29508;
continue;
} else {
var temp__5457__auto___29509 = cljs.core.seq.call(null,seq__29478_29500);
if(temp__5457__auto___29509){
var seq__29478_29510__$1 = temp__5457__auto___29509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29478_29510__$1)){
var c__4351__auto___29511 = cljs.core.chunk_first.call(null,seq__29478_29510__$1);
var G__29512 = cljs.core.chunk_rest.call(null,seq__29478_29510__$1);
var G__29513 = c__4351__auto___29511;
var G__29514 = cljs.core.count.call(null,c__4351__auto___29511);
var G__29515 = (0);
seq__29478_29500 = G__29512;
chunk__29479_29501 = G__29513;
count__29480_29502 = G__29514;
i__29481_29503 = G__29515;
continue;
} else {
var f_29516 = cljs.core.first.call(null,seq__29478_29510__$1);
cljs.core.println.call(null,"  ",f_29516);


var G__29517 = cljs.core.next.call(null,seq__29478_29510__$1);
var G__29518 = null;
var G__29519 = (0);
var G__29520 = (0);
seq__29478_29500 = G__29517;
chunk__29479_29501 = G__29518;
count__29480_29502 = G__29519;
i__29481_29503 = G__29520;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29521 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29521);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29521)))?cljs.core.second.call(null,arglists_29521):arglists_29521));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29482_29522 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29483_29523 = null;
var count__29484_29524 = (0);
var i__29485_29525 = (0);
while(true){
if((i__29485_29525 < count__29484_29524)){
var vec__29486_29526 = cljs.core._nth.call(null,chunk__29483_29523,i__29485_29525);
var name_29527 = cljs.core.nth.call(null,vec__29486_29526,(0),null);
var map__29489_29528 = cljs.core.nth.call(null,vec__29486_29526,(1),null);
var map__29489_29529__$1 = ((((!((map__29489_29528 == null)))?(((((map__29489_29528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29489_29528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29489_29528):map__29489_29528);
var doc_29530 = cljs.core.get.call(null,map__29489_29529__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29531 = cljs.core.get.call(null,map__29489_29529__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29527);

cljs.core.println.call(null," ",arglists_29531);

if(cljs.core.truth_(doc_29530)){
cljs.core.println.call(null," ",doc_29530);
} else {
}


var G__29532 = seq__29482_29522;
var G__29533 = chunk__29483_29523;
var G__29534 = count__29484_29524;
var G__29535 = (i__29485_29525 + (1));
seq__29482_29522 = G__29532;
chunk__29483_29523 = G__29533;
count__29484_29524 = G__29534;
i__29485_29525 = G__29535;
continue;
} else {
var temp__5457__auto___29536 = cljs.core.seq.call(null,seq__29482_29522);
if(temp__5457__auto___29536){
var seq__29482_29537__$1 = temp__5457__auto___29536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29482_29537__$1)){
var c__4351__auto___29538 = cljs.core.chunk_first.call(null,seq__29482_29537__$1);
var G__29539 = cljs.core.chunk_rest.call(null,seq__29482_29537__$1);
var G__29540 = c__4351__auto___29538;
var G__29541 = cljs.core.count.call(null,c__4351__auto___29538);
var G__29542 = (0);
seq__29482_29522 = G__29539;
chunk__29483_29523 = G__29540;
count__29484_29524 = G__29541;
i__29485_29525 = G__29542;
continue;
} else {
var vec__29491_29543 = cljs.core.first.call(null,seq__29482_29537__$1);
var name_29544 = cljs.core.nth.call(null,vec__29491_29543,(0),null);
var map__29494_29545 = cljs.core.nth.call(null,vec__29491_29543,(1),null);
var map__29494_29546__$1 = ((((!((map__29494_29545 == null)))?(((((map__29494_29545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29494_29545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29494_29545):map__29494_29545);
var doc_29547 = cljs.core.get.call(null,map__29494_29546__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29548 = cljs.core.get.call(null,map__29494_29546__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29544);

cljs.core.println.call(null," ",arglists_29548);

if(cljs.core.truth_(doc_29547)){
cljs.core.println.call(null," ",doc_29547);
} else {
}


var G__29549 = cljs.core.next.call(null,seq__29482_29537__$1);
var G__29550 = null;
var G__29551 = (0);
var G__29552 = (0);
seq__29482_29522 = G__29549;
chunk__29483_29523 = G__29550;
count__29484_29524 = G__29551;
i__29485_29525 = G__29552;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__29496 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29497 = null;
var count__29498 = (0);
var i__29499 = (0);
while(true){
if((i__29499 < count__29498)){
var role = cljs.core._nth.call(null,chunk__29497,i__29499);
var temp__5457__auto___29553__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29553__$1)){
var spec_29554 = temp__5457__auto___29553__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29554));
} else {
}


var G__29555 = seq__29496;
var G__29556 = chunk__29497;
var G__29557 = count__29498;
var G__29558 = (i__29499 + (1));
seq__29496 = G__29555;
chunk__29497 = G__29556;
count__29498 = G__29557;
i__29499 = G__29558;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__29496);
if(temp__5457__auto____$1){
var seq__29496__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29496__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__29496__$1);
var G__29559 = cljs.core.chunk_rest.call(null,seq__29496__$1);
var G__29560 = c__4351__auto__;
var G__29561 = cljs.core.count.call(null,c__4351__auto__);
var G__29562 = (0);
seq__29496 = G__29559;
chunk__29497 = G__29560;
count__29498 = G__29561;
i__29499 = G__29562;
continue;
} else {
var role = cljs.core.first.call(null,seq__29496__$1);
var temp__5457__auto___29563__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29563__$2)){
var spec_29564 = temp__5457__auto___29563__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29564));
} else {
}


var G__29565 = cljs.core.next.call(null,seq__29496__$1);
var G__29566 = null;
var G__29567 = (0);
var G__29568 = (0);
seq__29496 = G__29565;
chunk__29497 = G__29566;
count__29498 = G__29567;
i__29499 = G__29568;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
