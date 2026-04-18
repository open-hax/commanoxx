goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__12342){
var map__12344 = p__12342;
var map__12344__$1 = cljs.core.__destructure_map(map__12344);
var runtime = map__12344__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12344__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5142__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_12846 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_12846)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__12392 = runtime;
var G__12393 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_12846);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__12392,G__12393) : shadow.remote.runtime.shared.process.call(null,G__12392,G__12393));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__12420,res){
var map__12425 = p__12420;
var map__12425__$1 = cljs.core.__destructure_map(map__12425);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12425__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12425__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__12427 = res;
var G__12427__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12427,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__12427);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12427__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__12427__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__12462 = arguments.length;
switch (G__12462) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__12475,msg,handlers,timeout_after_ms){
var map__12476 = p__12475;
var map__12476__$1 = cljs.core.__destructure_map(map__12476);
var runtime = map__12476__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12476__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___12859 = arguments.length;
var i__5877__auto___12860 = (0);
while(true){
if((i__5877__auto___12860 < len__5876__auto___12859)){
args__5882__auto__.push((arguments[i__5877__auto___12860]));

var G__12861 = (i__5877__auto___12860 + (1));
i__5877__auto___12860 = G__12861;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__12506,ev,args){
var map__12511 = p__12506;
var map__12511__$1 = cljs.core.__destructure_map(map__12511);
var runtime = map__12511__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12511__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__12515 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__12518 = null;
var count__12519 = (0);
var i__12520 = (0);
while(true){
if((i__12520 < count__12519)){
var ext = chunk__12518.cljs$core$IIndexed$_nth$arity$2(null,i__12520);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__12863 = seq__12515;
var G__12864 = chunk__12518;
var G__12865 = count__12519;
var G__12866 = (i__12520 + (1));
seq__12515 = G__12863;
chunk__12518 = G__12864;
count__12519 = G__12865;
i__12520 = G__12866;
continue;
} else {
var G__12867 = seq__12515;
var G__12868 = chunk__12518;
var G__12869 = count__12519;
var G__12870 = (i__12520 + (1));
seq__12515 = G__12867;
chunk__12518 = G__12868;
count__12519 = G__12869;
i__12520 = G__12870;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__12515);
if(temp__5825__auto__){
var seq__12515__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12515__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12515__$1);
var G__12871 = cljs.core.chunk_rest(seq__12515__$1);
var G__12872 = c__5673__auto__;
var G__12873 = cljs.core.count(c__5673__auto__);
var G__12874 = (0);
seq__12515 = G__12871;
chunk__12518 = G__12872;
count__12519 = G__12873;
i__12520 = G__12874;
continue;
} else {
var ext = cljs.core.first(seq__12515__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__12875 = cljs.core.next(seq__12515__$1);
var G__12876 = null;
var G__12877 = (0);
var G__12878 = (0);
seq__12515 = G__12875;
chunk__12518 = G__12876;
count__12519 = G__12877;
i__12520 = G__12878;
continue;
} else {
var G__12879 = cljs.core.next(seq__12515__$1);
var G__12880 = null;
var G__12881 = (0);
var G__12882 = (0);
seq__12515 = G__12879;
chunk__12518 = G__12880;
count__12519 = G__12881;
i__12520 = G__12882;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq12491){
var G__12492 = cljs.core.first(seq12491);
var seq12491__$1 = cljs.core.next(seq12491);
var G__12493 = cljs.core.first(seq12491__$1);
var seq12491__$2 = cljs.core.next(seq12491__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12492,G__12493,seq12491__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__12591,p__12592){
var map__12593 = p__12591;
var map__12593__$1 = cljs.core.__destructure_map(map__12593);
var runtime = map__12593__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12593__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__12594 = p__12592;
var map__12594__$1 = cljs.core.__destructure_map(map__12594);
var msg = map__12594__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12594__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__12595 = cljs.core.deref(state_ref);
var map__12595__$1 = cljs.core.__destructure_map(map__12595);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12595__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12595__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__12606,msg){
var map__12607 = p__12606;
var map__12607__$1 = cljs.core.__destructure_map(map__12607);
var runtime = map__12607__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12607__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__12614,key,p__12615){
var map__12616 = p__12614;
var map__12616__$1 = cljs.core.__destructure_map(map__12616);
var state = map__12616__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12616__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__12617 = p__12615;
var map__12617__$1 = cljs.core.__destructure_map(map__12617);
var spec = map__12617__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12617__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12617__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__12626,key,spec){
var map__12627 = p__12626;
var map__12627__$1 = cljs.core.__destructure_map(map__12627);
var runtime = map__12627__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12627__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5829__auto___12893 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5829__auto___12893 == null)){
} else {
var on_welcome_12896 = temp__5829__auto___12893;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_12896.cljs$core$IFn$_invoke$arity$0 ? on_welcome_12896.cljs$core$IFn$_invoke$arity$0() : on_welcome_12896.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__12630_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__12630_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__12631_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__12631_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__12632_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__12632_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__12633_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__12633_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__12634_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__12634_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__12658,key){
var map__12660 = p__12658;
var map__12660__$1 = cljs.core.__destructure_map(map__12660);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12660__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__12668,msg){
var map__12669 = p__12668;
var map__12669__$1 = cljs.core.__destructure_map(map__12669);
var runtime = map__12669__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12669__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__12702,p__12703){
var map__12705 = p__12702;
var map__12705__$1 = cljs.core.__destructure_map(map__12705);
var runtime = map__12705__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12705__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__12706 = p__12703;
var map__12706__$1 = cljs.core.__destructure_map(map__12706);
var msg = map__12706__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12706__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12706__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__12775 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__12778 = null;
var count__12779 = (0);
var i__12780 = (0);
while(true){
if((i__12780 < count__12779)){
var map__12824 = chunk__12778.cljs$core$IIndexed$_nth$arity$2(null,i__12780);
var map__12824__$1 = cljs.core.__destructure_map(map__12824);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12824__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__12914 = seq__12775;
var G__12915 = chunk__12778;
var G__12916 = count__12779;
var G__12917 = (i__12780 + (1));
seq__12775 = G__12914;
chunk__12778 = G__12915;
count__12779 = G__12916;
i__12780 = G__12917;
continue;
} else {
var G__12918 = seq__12775;
var G__12919 = chunk__12778;
var G__12920 = count__12779;
var G__12921 = (i__12780 + (1));
seq__12775 = G__12918;
chunk__12778 = G__12919;
count__12779 = G__12920;
i__12780 = G__12921;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__12775);
if(temp__5825__auto__){
var seq__12775__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12775__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12775__$1);
var G__12922 = cljs.core.chunk_rest(seq__12775__$1);
var G__12923 = c__5673__auto__;
var G__12924 = cljs.core.count(c__5673__auto__);
var G__12925 = (0);
seq__12775 = G__12922;
chunk__12778 = G__12923;
count__12779 = G__12924;
i__12780 = G__12925;
continue;
} else {
var map__12833 = cljs.core.first(seq__12775__$1);
var map__12833__$1 = cljs.core.__destructure_map(map__12833);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12833__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__12927 = cljs.core.next(seq__12775__$1);
var G__12928 = null;
var G__12929 = (0);
var G__12930 = (0);
seq__12775 = G__12927;
chunk__12778 = G__12928;
count__12779 = G__12929;
i__12780 = G__12930;
continue;
} else {
var G__12931 = cljs.core.next(seq__12775__$1);
var G__12932 = null;
var G__12933 = (0);
var G__12934 = (0);
seq__12775 = G__12931;
chunk__12778 = G__12932;
count__12779 = G__12933;
i__12780 = G__12934;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
