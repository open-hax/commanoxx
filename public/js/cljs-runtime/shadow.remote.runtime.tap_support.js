goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__18066,p__18067){
var map__18068 = p__18066;
var map__18068__$1 = cljs.core.__destructure_map(map__18068);
var svc = map__18068__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18068__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18068__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18068__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__18069 = p__18067;
var map__18069__$1 = cljs.core.__destructure_map(map__18069);
var msg = map__18069__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18069__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18069__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18069__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18069__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__18083,p__18084){
var map__18085 = p__18083;
var map__18085__$1 = cljs.core.__destructure_map(map__18085);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18085__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__18086 = p__18084;
var map__18086__$1 = cljs.core.__destructure_map(map__18086);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18086__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__18098,p__18099){
var map__18101 = p__18098;
var map__18101__$1 = cljs.core.__destructure_map(map__18101);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18101__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18101__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__18102 = p__18099;
var map__18102__$1 = cljs.core.__destructure_map(map__18102);
var msg = map__18102__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18102__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__18110,tid){
var map__18112 = p__18110;
var map__18112__$1 = cljs.core.__destructure_map(map__18112);
var svc = map__18112__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18112__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__18118 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__18119 = null;
var count__18120 = (0);
var i__18121 = (0);
while(true){
if((i__18121 < count__18120)){
var vec__18136 = chunk__18119.cljs$core$IIndexed$_nth$arity$2(null,i__18121);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18136,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18136,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__18154 = seq__18118;
var G__18155 = chunk__18119;
var G__18156 = count__18120;
var G__18157 = (i__18121 + (1));
seq__18118 = G__18154;
chunk__18119 = G__18155;
count__18120 = G__18156;
i__18121 = G__18157;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__18118);
if(temp__5825__auto__){
var seq__18118__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18118__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__18118__$1);
var G__18158 = cljs.core.chunk_rest(seq__18118__$1);
var G__18159 = c__5673__auto__;
var G__18160 = cljs.core.count(c__5673__auto__);
var G__18161 = (0);
seq__18118 = G__18158;
chunk__18119 = G__18159;
count__18120 = G__18160;
i__18121 = G__18161;
continue;
} else {
var vec__18144 = cljs.core.first(seq__18118__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18144,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18144,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__18162 = cljs.core.next(seq__18118__$1);
var G__18163 = null;
var G__18164 = (0);
var G__18165 = (0);
seq__18118 = G__18162;
chunk__18119 = G__18163;
count__18120 = G__18164;
i__18121 = G__18165;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__18114_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__18114_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__18115_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__18115_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__18116_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__18116_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__18117_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__18117_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__18147){
var map__18148 = p__18147;
var map__18148__$1 = cljs.core.__destructure_map(map__18148);
var svc = map__18148__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18148__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18148__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
