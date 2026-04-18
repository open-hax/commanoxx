goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__21087,p__21088){
var map__21089 = p__21087;
var map__21089__$1 = cljs.core.__destructure_map(map__21089);
var svc = map__21089__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21090 = p__21088;
var map__21090__$1 = cljs.core.__destructure_map(map__21090);
var msg = map__21090__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21090__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__21107,p__21108){
var map__21109 = p__21107;
var map__21109__$1 = cljs.core.__destructure_map(map__21109);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21109__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__21110 = p__21108;
var map__21110__$1 = cljs.core.__destructure_map(map__21110);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21110__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__21117,p__21118){
var map__21119 = p__21117;
var map__21119__$1 = cljs.core.__destructure_map(map__21119);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21119__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21119__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21120 = p__21118;
var map__21120__$1 = cljs.core.__destructure_map(map__21120);
var msg = map__21120__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21120__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__21126,tid){
var map__21127 = p__21126;
var map__21127__$1 = cljs.core.__destructure_map(map__21127);
var svc = map__21127__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21127__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__21137 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__21138 = null;
var count__21139 = (0);
var i__21140 = (0);
while(true){
if((i__21140 < count__21139)){
var vec__21153 = chunk__21138.cljs$core$IIndexed$_nth$arity$2(null,i__21140);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21153,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21153,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21211 = seq__21137;
var G__21212 = chunk__21138;
var G__21213 = count__21139;
var G__21214 = (i__21140 + (1));
seq__21137 = G__21211;
chunk__21138 = G__21212;
count__21139 = G__21213;
i__21140 = G__21214;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21137);
if(temp__5825__auto__){
var seq__21137__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21137__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21137__$1);
var G__21219 = cljs.core.chunk_rest(seq__21137__$1);
var G__21220 = c__5673__auto__;
var G__21221 = cljs.core.count(c__5673__auto__);
var G__21222 = (0);
seq__21137 = G__21219;
chunk__21138 = G__21220;
count__21139 = G__21221;
i__21140 = G__21222;
continue;
} else {
var vec__21156 = cljs.core.first(seq__21137__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21156,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21156,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21224 = cljs.core.next(seq__21137__$1);
var G__21225 = null;
var G__21226 = (0);
var G__21227 = (0);
seq__21137 = G__21224;
chunk__21138 = G__21225;
count__21139 = G__21226;
i__21140 = G__21227;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__21130_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__21130_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__21131_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__21131_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__21132_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__21132_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__21133_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__21133_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__21165){
var map__21166 = p__21165;
var map__21166__$1 = cljs.core.__destructure_map(map__21166);
var svc = map__21166__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21166__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21166__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
