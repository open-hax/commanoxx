goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18711 = arguments.length;
var i__5877__auto___18712 = (0);
while(true){
if((i__5877__auto___18712 < len__5876__auto___18711)){
args__5882__auto__.push((arguments[i__5877__auto___18712]));

var G__18713 = (i__5877__auto___18712 + (1));
i__5877__auto___18712 = G__18713;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq18424){
var G__18425 = cljs.core.first(seq18424);
var seq18424__$1 = cljs.core.next(seq18424);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18425,seq18424__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__18429 = cljs.core.seq(sources);
var chunk__18430 = null;
var count__18431 = (0);
var i__18432 = (0);
while(true){
if((i__18432 < count__18431)){
var map__18437 = chunk__18430.cljs$core$IIndexed$_nth$arity$2(null,i__18432);
var map__18437__$1 = cljs.core.__destructure_map(map__18437);
var src = map__18437__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18437__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18437__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18437__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18437__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e18438){var e_18714 = e18438;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_18714);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18714.message))));
}

var G__18715 = seq__18429;
var G__18716 = chunk__18430;
var G__18717 = count__18431;
var G__18718 = (i__18432 + (1));
seq__18429 = G__18715;
chunk__18430 = G__18716;
count__18431 = G__18717;
i__18432 = G__18718;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__18429);
if(temp__5825__auto__){
var seq__18429__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18429__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__18429__$1);
var G__18719 = cljs.core.chunk_rest(seq__18429__$1);
var G__18720 = c__5673__auto__;
var G__18721 = cljs.core.count(c__5673__auto__);
var G__18722 = (0);
seq__18429 = G__18719;
chunk__18430 = G__18720;
count__18431 = G__18721;
i__18432 = G__18722;
continue;
} else {
var map__18439 = cljs.core.first(seq__18429__$1);
var map__18439__$1 = cljs.core.__destructure_map(map__18439);
var src = map__18439__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18439__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18439__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18439__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18439__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e18440){var e_18723 = e18440;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_18723);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18723.message))));
}

var G__18724 = cljs.core.next(seq__18429__$1);
var G__18725 = null;
var G__18726 = (0);
var G__18727 = (0);
seq__18429 = G__18724;
chunk__18430 = G__18725;
count__18431 = G__18726;
i__18432 = G__18727;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__18441 = cljs.core.seq(js_requires);
var chunk__18442 = null;
var count__18443 = (0);
var i__18444 = (0);
while(true){
if((i__18444 < count__18443)){
var js_ns = chunk__18442.cljs$core$IIndexed$_nth$arity$2(null,i__18444);
var require_str_18728 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_18728);


var G__18729 = seq__18441;
var G__18730 = chunk__18442;
var G__18731 = count__18443;
var G__18732 = (i__18444 + (1));
seq__18441 = G__18729;
chunk__18442 = G__18730;
count__18443 = G__18731;
i__18444 = G__18732;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__18441);
if(temp__5825__auto__){
var seq__18441__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18441__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__18441__$1);
var G__18733 = cljs.core.chunk_rest(seq__18441__$1);
var G__18734 = c__5673__auto__;
var G__18735 = cljs.core.count(c__5673__auto__);
var G__18736 = (0);
seq__18441 = G__18733;
chunk__18442 = G__18734;
count__18443 = G__18735;
i__18444 = G__18736;
continue;
} else {
var js_ns = cljs.core.first(seq__18441__$1);
var require_str_18737 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_18737);


var G__18738 = cljs.core.next(seq__18441__$1);
var G__18739 = null;
var G__18740 = (0);
var G__18741 = (0);
seq__18441 = G__18738;
chunk__18442 = G__18739;
count__18443 = G__18740;
i__18444 = G__18741;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__18446){
var map__18447 = p__18446;
var map__18447__$1 = cljs.core.__destructure_map(map__18447);
var msg = map__18447__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18447__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18447__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18448(s__18449){
return (new cljs.core.LazySeq(null,(function (){
var s__18449__$1 = s__18449;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__18449__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__18454 = cljs.core.first(xs__6385__auto__);
var map__18454__$1 = cljs.core.__destructure_map(map__18454);
var src = map__18454__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18454__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18454__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__18449__$1,map__18454,map__18454__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__18447,map__18447__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18448_$_iter__18450(s__18451){
return (new cljs.core.LazySeq(null,((function (s__18449__$1,map__18454,map__18454__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__18447,map__18447__$1,msg,info,reload_info){
return (function (){
var s__18451__$1 = s__18451;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__18451__$1);
if(temp__5825__auto____$1){
var s__18451__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18451__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__18451__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__18453 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__18452 = (0);
while(true){
if((i__18452 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__18452);
cljs.core.chunk_append(b__18453,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__18742 = (i__18452 + (1));
i__18452 = G__18742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18453),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18448_$_iter__18450(cljs.core.chunk_rest(s__18451__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18453),null);
}
} else {
var warning = cljs.core.first(s__18451__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18448_$_iter__18450(cljs.core.rest(s__18451__$2)));
}
} else {
return null;
}
break;
}
});})(s__18449__$1,map__18454,map__18454__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__18447,map__18447__$1,msg,info,reload_info))
,null,null));
});})(s__18449__$1,map__18454,map__18454__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__18447,map__18447__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18448(cljs.core.rest(s__18449__$1)));
} else {
var G__18743 = cljs.core.rest(s__18449__$1);
s__18449__$1 = G__18743;
continue;
}
} else {
var G__18744 = cljs.core.rest(s__18449__$1);
s__18449__$1 = G__18744;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__18455_18745 = cljs.core.seq(warnings);
var chunk__18456_18746 = null;
var count__18457_18747 = (0);
var i__18458_18748 = (0);
while(true){
if((i__18458_18748 < count__18457_18747)){
var map__18461_18749 = chunk__18456_18746.cljs$core$IIndexed$_nth$arity$2(null,i__18458_18748);
var map__18461_18750__$1 = cljs.core.__destructure_map(map__18461_18749);
var w_18751 = map__18461_18750__$1;
var msg_18752__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18461_18750__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18461_18750__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18461_18750__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18461_18750__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18755)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18753)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18754)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18752__$1)));


var G__18756 = seq__18455_18745;
var G__18757 = chunk__18456_18746;
var G__18758 = count__18457_18747;
var G__18759 = (i__18458_18748 + (1));
seq__18455_18745 = G__18756;
chunk__18456_18746 = G__18757;
count__18457_18747 = G__18758;
i__18458_18748 = G__18759;
continue;
} else {
var temp__5825__auto___18760 = cljs.core.seq(seq__18455_18745);
if(temp__5825__auto___18760){
var seq__18455_18761__$1 = temp__5825__auto___18760;
if(cljs.core.chunked_seq_QMARK_(seq__18455_18761__$1)){
var c__5673__auto___18762 = cljs.core.chunk_first(seq__18455_18761__$1);
var G__18763 = cljs.core.chunk_rest(seq__18455_18761__$1);
var G__18764 = c__5673__auto___18762;
var G__18765 = cljs.core.count(c__5673__auto___18762);
var G__18766 = (0);
seq__18455_18745 = G__18763;
chunk__18456_18746 = G__18764;
count__18457_18747 = G__18765;
i__18458_18748 = G__18766;
continue;
} else {
var map__18462_18767 = cljs.core.first(seq__18455_18761__$1);
var map__18462_18768__$1 = cljs.core.__destructure_map(map__18462_18767);
var w_18769 = map__18462_18768__$1;
var msg_18770__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18462_18768__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18462_18768__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18462_18768__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18462_18768__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18773)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18771)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18772)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18770__$1)));


var G__18774 = cljs.core.next(seq__18455_18761__$1);
var G__18775 = null;
var G__18776 = (0);
var G__18777 = (0);
seq__18455_18745 = G__18774;
chunk__18456_18746 = G__18775;
count__18457_18747 = G__18776;
i__18458_18748 = G__18777;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__18445_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__18445_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5140__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5140__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__18464 = node_uri;
G__18464.setQuery(null);

G__18464.setPath(new$);

return G__18464;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__18465){
var map__18466 = p__18465;
var map__18466__$1 = cljs.core.__destructure_map(map__18466);
var msg = map__18466__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18466__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18466__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__18467 = cljs.core.seq(updates);
var chunk__18469 = null;
var count__18470 = (0);
var i__18471 = (0);
while(true){
if((i__18471 < count__18470)){
var path = chunk__18469.cljs$core$IIndexed$_nth$arity$2(null,i__18471);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18581_18778 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18585_18779 = null;
var count__18586_18780 = (0);
var i__18587_18781 = (0);
while(true){
if((i__18587_18781 < count__18586_18780)){
var node_18782 = chunk__18585_18779.cljs$core$IIndexed$_nth$arity$2(null,i__18587_18781);
if(cljs.core.not(node_18782.shadow$old)){
var path_match_18783 = shadow.cljs.devtools.client.browser.match_paths(node_18782.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18783)){
var new_link_18784 = (function (){var G__18613 = node_18782.cloneNode(true);
G__18613.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18783)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__18613;
})();
(node_18782.shadow$old = true);

(new_link_18784.onload = ((function (seq__18581_18778,chunk__18585_18779,count__18586_18780,i__18587_18781,seq__18467,chunk__18469,count__18470,i__18471,new_link_18784,path_match_18783,node_18782,path,map__18466,map__18466__$1,msg,updates,reload_info){
return (function (e){
var seq__18614_18785 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18616_18786 = null;
var count__18617_18787 = (0);
var i__18618_18788 = (0);
while(true){
if((i__18618_18788 < count__18617_18787)){
var map__18622_18789 = chunk__18616_18786.cljs$core$IIndexed$_nth$arity$2(null,i__18618_18788);
var map__18622_18790__$1 = cljs.core.__destructure_map(map__18622_18789);
var task_18791 = map__18622_18790__$1;
var fn_str_18792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18622_18790__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18622_18790__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18794 = goog.getObjectByName(fn_str_18792,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18793)));

(fn_obj_18794.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18794.cljs$core$IFn$_invoke$arity$2(path,new_link_18784) : fn_obj_18794.call(null,path,new_link_18784));


var G__18795 = seq__18614_18785;
var G__18796 = chunk__18616_18786;
var G__18797 = count__18617_18787;
var G__18798 = (i__18618_18788 + (1));
seq__18614_18785 = G__18795;
chunk__18616_18786 = G__18796;
count__18617_18787 = G__18797;
i__18618_18788 = G__18798;
continue;
} else {
var temp__5825__auto___18799 = cljs.core.seq(seq__18614_18785);
if(temp__5825__auto___18799){
var seq__18614_18800__$1 = temp__5825__auto___18799;
if(cljs.core.chunked_seq_QMARK_(seq__18614_18800__$1)){
var c__5673__auto___18801 = cljs.core.chunk_first(seq__18614_18800__$1);
var G__18802 = cljs.core.chunk_rest(seq__18614_18800__$1);
var G__18803 = c__5673__auto___18801;
var G__18804 = cljs.core.count(c__5673__auto___18801);
var G__18805 = (0);
seq__18614_18785 = G__18802;
chunk__18616_18786 = G__18803;
count__18617_18787 = G__18804;
i__18618_18788 = G__18805;
continue;
} else {
var map__18623_18806 = cljs.core.first(seq__18614_18800__$1);
var map__18623_18807__$1 = cljs.core.__destructure_map(map__18623_18806);
var task_18808 = map__18623_18807__$1;
var fn_str_18809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18623_18807__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18623_18807__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18811 = goog.getObjectByName(fn_str_18809,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18810)));

(fn_obj_18811.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18811.cljs$core$IFn$_invoke$arity$2(path,new_link_18784) : fn_obj_18811.call(null,path,new_link_18784));


var G__18812 = cljs.core.next(seq__18614_18800__$1);
var G__18813 = null;
var G__18814 = (0);
var G__18815 = (0);
seq__18614_18785 = G__18812;
chunk__18616_18786 = G__18813;
count__18617_18787 = G__18814;
i__18618_18788 = G__18815;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18782);
});})(seq__18581_18778,chunk__18585_18779,count__18586_18780,i__18587_18781,seq__18467,chunk__18469,count__18470,i__18471,new_link_18784,path_match_18783,node_18782,path,map__18466,map__18466__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18783], 0));

goog.dom.insertSiblingAfter(new_link_18784,node_18782);


var G__18816 = seq__18581_18778;
var G__18817 = chunk__18585_18779;
var G__18818 = count__18586_18780;
var G__18819 = (i__18587_18781 + (1));
seq__18581_18778 = G__18816;
chunk__18585_18779 = G__18817;
count__18586_18780 = G__18818;
i__18587_18781 = G__18819;
continue;
} else {
var G__18820 = seq__18581_18778;
var G__18821 = chunk__18585_18779;
var G__18822 = count__18586_18780;
var G__18823 = (i__18587_18781 + (1));
seq__18581_18778 = G__18820;
chunk__18585_18779 = G__18821;
count__18586_18780 = G__18822;
i__18587_18781 = G__18823;
continue;
}
} else {
var G__18824 = seq__18581_18778;
var G__18825 = chunk__18585_18779;
var G__18826 = count__18586_18780;
var G__18827 = (i__18587_18781 + (1));
seq__18581_18778 = G__18824;
chunk__18585_18779 = G__18825;
count__18586_18780 = G__18826;
i__18587_18781 = G__18827;
continue;
}
} else {
var temp__5825__auto___18828 = cljs.core.seq(seq__18581_18778);
if(temp__5825__auto___18828){
var seq__18581_18829__$1 = temp__5825__auto___18828;
if(cljs.core.chunked_seq_QMARK_(seq__18581_18829__$1)){
var c__5673__auto___18830 = cljs.core.chunk_first(seq__18581_18829__$1);
var G__18831 = cljs.core.chunk_rest(seq__18581_18829__$1);
var G__18832 = c__5673__auto___18830;
var G__18833 = cljs.core.count(c__5673__auto___18830);
var G__18834 = (0);
seq__18581_18778 = G__18831;
chunk__18585_18779 = G__18832;
count__18586_18780 = G__18833;
i__18587_18781 = G__18834;
continue;
} else {
var node_18835 = cljs.core.first(seq__18581_18829__$1);
if(cljs.core.not(node_18835.shadow$old)){
var path_match_18836 = shadow.cljs.devtools.client.browser.match_paths(node_18835.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18836)){
var new_link_18837 = (function (){var G__18624 = node_18835.cloneNode(true);
G__18624.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18836)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__18624;
})();
(node_18835.shadow$old = true);

(new_link_18837.onload = ((function (seq__18581_18778,chunk__18585_18779,count__18586_18780,i__18587_18781,seq__18467,chunk__18469,count__18470,i__18471,new_link_18837,path_match_18836,node_18835,seq__18581_18829__$1,temp__5825__auto___18828,path,map__18466,map__18466__$1,msg,updates,reload_info){
return (function (e){
var seq__18625_18838 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18627_18839 = null;
var count__18628_18840 = (0);
var i__18629_18841 = (0);
while(true){
if((i__18629_18841 < count__18628_18840)){
var map__18633_18842 = chunk__18627_18839.cljs$core$IIndexed$_nth$arity$2(null,i__18629_18841);
var map__18633_18843__$1 = cljs.core.__destructure_map(map__18633_18842);
var task_18844 = map__18633_18843__$1;
var fn_str_18845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18633_18843__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18633_18843__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18847 = goog.getObjectByName(fn_str_18845,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18846)));

(fn_obj_18847.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18847.cljs$core$IFn$_invoke$arity$2(path,new_link_18837) : fn_obj_18847.call(null,path,new_link_18837));


var G__18848 = seq__18625_18838;
var G__18849 = chunk__18627_18839;
var G__18850 = count__18628_18840;
var G__18851 = (i__18629_18841 + (1));
seq__18625_18838 = G__18848;
chunk__18627_18839 = G__18849;
count__18628_18840 = G__18850;
i__18629_18841 = G__18851;
continue;
} else {
var temp__5825__auto___18852__$1 = cljs.core.seq(seq__18625_18838);
if(temp__5825__auto___18852__$1){
var seq__18625_18853__$1 = temp__5825__auto___18852__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18625_18853__$1)){
var c__5673__auto___18854 = cljs.core.chunk_first(seq__18625_18853__$1);
var G__18855 = cljs.core.chunk_rest(seq__18625_18853__$1);
var G__18856 = c__5673__auto___18854;
var G__18857 = cljs.core.count(c__5673__auto___18854);
var G__18858 = (0);
seq__18625_18838 = G__18855;
chunk__18627_18839 = G__18856;
count__18628_18840 = G__18857;
i__18629_18841 = G__18858;
continue;
} else {
var map__18634_18859 = cljs.core.first(seq__18625_18853__$1);
var map__18634_18860__$1 = cljs.core.__destructure_map(map__18634_18859);
var task_18861 = map__18634_18860__$1;
var fn_str_18862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18634_18860__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18634_18860__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18864 = goog.getObjectByName(fn_str_18862,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18863)));

(fn_obj_18864.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18864.cljs$core$IFn$_invoke$arity$2(path,new_link_18837) : fn_obj_18864.call(null,path,new_link_18837));


var G__18865 = cljs.core.next(seq__18625_18853__$1);
var G__18866 = null;
var G__18867 = (0);
var G__18868 = (0);
seq__18625_18838 = G__18865;
chunk__18627_18839 = G__18866;
count__18628_18840 = G__18867;
i__18629_18841 = G__18868;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18835);
});})(seq__18581_18778,chunk__18585_18779,count__18586_18780,i__18587_18781,seq__18467,chunk__18469,count__18470,i__18471,new_link_18837,path_match_18836,node_18835,seq__18581_18829__$1,temp__5825__auto___18828,path,map__18466,map__18466__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18836], 0));

goog.dom.insertSiblingAfter(new_link_18837,node_18835);


var G__18869 = cljs.core.next(seq__18581_18829__$1);
var G__18870 = null;
var G__18871 = (0);
var G__18872 = (0);
seq__18581_18778 = G__18869;
chunk__18585_18779 = G__18870;
count__18586_18780 = G__18871;
i__18587_18781 = G__18872;
continue;
} else {
var G__18873 = cljs.core.next(seq__18581_18829__$1);
var G__18874 = null;
var G__18875 = (0);
var G__18876 = (0);
seq__18581_18778 = G__18873;
chunk__18585_18779 = G__18874;
count__18586_18780 = G__18875;
i__18587_18781 = G__18876;
continue;
}
} else {
var G__18877 = cljs.core.next(seq__18581_18829__$1);
var G__18878 = null;
var G__18879 = (0);
var G__18880 = (0);
seq__18581_18778 = G__18877;
chunk__18585_18779 = G__18878;
count__18586_18780 = G__18879;
i__18587_18781 = G__18880;
continue;
}
}
} else {
}
}
break;
}


var G__18881 = seq__18467;
var G__18882 = chunk__18469;
var G__18883 = count__18470;
var G__18884 = (i__18471 + (1));
seq__18467 = G__18881;
chunk__18469 = G__18882;
count__18470 = G__18883;
i__18471 = G__18884;
continue;
} else {
var G__18885 = seq__18467;
var G__18886 = chunk__18469;
var G__18887 = count__18470;
var G__18888 = (i__18471 + (1));
seq__18467 = G__18885;
chunk__18469 = G__18886;
count__18470 = G__18887;
i__18471 = G__18888;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__18467);
if(temp__5825__auto__){
var seq__18467__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18467__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__18467__$1);
var G__18889 = cljs.core.chunk_rest(seq__18467__$1);
var G__18890 = c__5673__auto__;
var G__18891 = cljs.core.count(c__5673__auto__);
var G__18892 = (0);
seq__18467 = G__18889;
chunk__18469 = G__18890;
count__18470 = G__18891;
i__18471 = G__18892;
continue;
} else {
var path = cljs.core.first(seq__18467__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18635_18893 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18639_18894 = null;
var count__18640_18895 = (0);
var i__18641_18896 = (0);
while(true){
if((i__18641_18896 < count__18640_18895)){
var node_18897 = chunk__18639_18894.cljs$core$IIndexed$_nth$arity$2(null,i__18641_18896);
if(cljs.core.not(node_18897.shadow$old)){
var path_match_18898 = shadow.cljs.devtools.client.browser.match_paths(node_18897.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18898)){
var new_link_18899 = (function (){var G__18667 = node_18897.cloneNode(true);
G__18667.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18898)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__18667;
})();
(node_18897.shadow$old = true);

(new_link_18899.onload = ((function (seq__18635_18893,chunk__18639_18894,count__18640_18895,i__18641_18896,seq__18467,chunk__18469,count__18470,i__18471,new_link_18899,path_match_18898,node_18897,path,seq__18467__$1,temp__5825__auto__,map__18466,map__18466__$1,msg,updates,reload_info){
return (function (e){
var seq__18668_18900 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18670_18901 = null;
var count__18671_18902 = (0);
var i__18672_18903 = (0);
while(true){
if((i__18672_18903 < count__18671_18902)){
var map__18676_18904 = chunk__18670_18901.cljs$core$IIndexed$_nth$arity$2(null,i__18672_18903);
var map__18676_18905__$1 = cljs.core.__destructure_map(map__18676_18904);
var task_18906 = map__18676_18905__$1;
var fn_str_18907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18676_18905__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18676_18905__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18909 = goog.getObjectByName(fn_str_18907,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18908)));

(fn_obj_18909.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18909.cljs$core$IFn$_invoke$arity$2(path,new_link_18899) : fn_obj_18909.call(null,path,new_link_18899));


var G__18910 = seq__18668_18900;
var G__18911 = chunk__18670_18901;
var G__18912 = count__18671_18902;
var G__18913 = (i__18672_18903 + (1));
seq__18668_18900 = G__18910;
chunk__18670_18901 = G__18911;
count__18671_18902 = G__18912;
i__18672_18903 = G__18913;
continue;
} else {
var temp__5825__auto___18914__$1 = cljs.core.seq(seq__18668_18900);
if(temp__5825__auto___18914__$1){
var seq__18668_18915__$1 = temp__5825__auto___18914__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18668_18915__$1)){
var c__5673__auto___18916 = cljs.core.chunk_first(seq__18668_18915__$1);
var G__18917 = cljs.core.chunk_rest(seq__18668_18915__$1);
var G__18918 = c__5673__auto___18916;
var G__18919 = cljs.core.count(c__5673__auto___18916);
var G__18920 = (0);
seq__18668_18900 = G__18917;
chunk__18670_18901 = G__18918;
count__18671_18902 = G__18919;
i__18672_18903 = G__18920;
continue;
} else {
var map__18677_18921 = cljs.core.first(seq__18668_18915__$1);
var map__18677_18922__$1 = cljs.core.__destructure_map(map__18677_18921);
var task_18923 = map__18677_18922__$1;
var fn_str_18924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18677_18922__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18677_18922__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18926 = goog.getObjectByName(fn_str_18924,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18925)));

(fn_obj_18926.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18926.cljs$core$IFn$_invoke$arity$2(path,new_link_18899) : fn_obj_18926.call(null,path,new_link_18899));


var G__18927 = cljs.core.next(seq__18668_18915__$1);
var G__18928 = null;
var G__18929 = (0);
var G__18930 = (0);
seq__18668_18900 = G__18927;
chunk__18670_18901 = G__18928;
count__18671_18902 = G__18929;
i__18672_18903 = G__18930;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18897);
});})(seq__18635_18893,chunk__18639_18894,count__18640_18895,i__18641_18896,seq__18467,chunk__18469,count__18470,i__18471,new_link_18899,path_match_18898,node_18897,path,seq__18467__$1,temp__5825__auto__,map__18466,map__18466__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18898], 0));

goog.dom.insertSiblingAfter(new_link_18899,node_18897);


var G__18931 = seq__18635_18893;
var G__18932 = chunk__18639_18894;
var G__18933 = count__18640_18895;
var G__18934 = (i__18641_18896 + (1));
seq__18635_18893 = G__18931;
chunk__18639_18894 = G__18932;
count__18640_18895 = G__18933;
i__18641_18896 = G__18934;
continue;
} else {
var G__18935 = seq__18635_18893;
var G__18936 = chunk__18639_18894;
var G__18937 = count__18640_18895;
var G__18938 = (i__18641_18896 + (1));
seq__18635_18893 = G__18935;
chunk__18639_18894 = G__18936;
count__18640_18895 = G__18937;
i__18641_18896 = G__18938;
continue;
}
} else {
var G__18939 = seq__18635_18893;
var G__18940 = chunk__18639_18894;
var G__18941 = count__18640_18895;
var G__18942 = (i__18641_18896 + (1));
seq__18635_18893 = G__18939;
chunk__18639_18894 = G__18940;
count__18640_18895 = G__18941;
i__18641_18896 = G__18942;
continue;
}
} else {
var temp__5825__auto___18943__$1 = cljs.core.seq(seq__18635_18893);
if(temp__5825__auto___18943__$1){
var seq__18635_18944__$1 = temp__5825__auto___18943__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18635_18944__$1)){
var c__5673__auto___18945 = cljs.core.chunk_first(seq__18635_18944__$1);
var G__18946 = cljs.core.chunk_rest(seq__18635_18944__$1);
var G__18947 = c__5673__auto___18945;
var G__18948 = cljs.core.count(c__5673__auto___18945);
var G__18949 = (0);
seq__18635_18893 = G__18946;
chunk__18639_18894 = G__18947;
count__18640_18895 = G__18948;
i__18641_18896 = G__18949;
continue;
} else {
var node_18950 = cljs.core.first(seq__18635_18944__$1);
if(cljs.core.not(node_18950.shadow$old)){
var path_match_18951 = shadow.cljs.devtools.client.browser.match_paths(node_18950.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18951)){
var new_link_18952 = (function (){var G__18678 = node_18950.cloneNode(true);
G__18678.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18951)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__18678;
})();
(node_18950.shadow$old = true);

(new_link_18952.onload = ((function (seq__18635_18893,chunk__18639_18894,count__18640_18895,i__18641_18896,seq__18467,chunk__18469,count__18470,i__18471,new_link_18952,path_match_18951,node_18950,seq__18635_18944__$1,temp__5825__auto___18943__$1,path,seq__18467__$1,temp__5825__auto__,map__18466,map__18466__$1,msg,updates,reload_info){
return (function (e){
var seq__18679_18953 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18681_18954 = null;
var count__18682_18955 = (0);
var i__18683_18956 = (0);
while(true){
if((i__18683_18956 < count__18682_18955)){
var map__18687_18957 = chunk__18681_18954.cljs$core$IIndexed$_nth$arity$2(null,i__18683_18956);
var map__18687_18958__$1 = cljs.core.__destructure_map(map__18687_18957);
var task_18959 = map__18687_18958__$1;
var fn_str_18960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18687_18958__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18687_18958__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18962 = goog.getObjectByName(fn_str_18960,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18961)));

(fn_obj_18962.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18962.cljs$core$IFn$_invoke$arity$2(path,new_link_18952) : fn_obj_18962.call(null,path,new_link_18952));


var G__18963 = seq__18679_18953;
var G__18964 = chunk__18681_18954;
var G__18965 = count__18682_18955;
var G__18966 = (i__18683_18956 + (1));
seq__18679_18953 = G__18963;
chunk__18681_18954 = G__18964;
count__18682_18955 = G__18965;
i__18683_18956 = G__18966;
continue;
} else {
var temp__5825__auto___18967__$2 = cljs.core.seq(seq__18679_18953);
if(temp__5825__auto___18967__$2){
var seq__18679_18968__$1 = temp__5825__auto___18967__$2;
if(cljs.core.chunked_seq_QMARK_(seq__18679_18968__$1)){
var c__5673__auto___18969 = cljs.core.chunk_first(seq__18679_18968__$1);
var G__18970 = cljs.core.chunk_rest(seq__18679_18968__$1);
var G__18971 = c__5673__auto___18969;
var G__18972 = cljs.core.count(c__5673__auto___18969);
var G__18973 = (0);
seq__18679_18953 = G__18970;
chunk__18681_18954 = G__18971;
count__18682_18955 = G__18972;
i__18683_18956 = G__18973;
continue;
} else {
var map__18688_18974 = cljs.core.first(seq__18679_18968__$1);
var map__18688_18975__$1 = cljs.core.__destructure_map(map__18688_18974);
var task_18976 = map__18688_18975__$1;
var fn_str_18977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18688_18975__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18688_18975__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18979 = goog.getObjectByName(fn_str_18977,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18978)));

(fn_obj_18979.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18979.cljs$core$IFn$_invoke$arity$2(path,new_link_18952) : fn_obj_18979.call(null,path,new_link_18952));


var G__18980 = cljs.core.next(seq__18679_18968__$1);
var G__18981 = null;
var G__18982 = (0);
var G__18983 = (0);
seq__18679_18953 = G__18980;
chunk__18681_18954 = G__18981;
count__18682_18955 = G__18982;
i__18683_18956 = G__18983;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18950);
});})(seq__18635_18893,chunk__18639_18894,count__18640_18895,i__18641_18896,seq__18467,chunk__18469,count__18470,i__18471,new_link_18952,path_match_18951,node_18950,seq__18635_18944__$1,temp__5825__auto___18943__$1,path,seq__18467__$1,temp__5825__auto__,map__18466,map__18466__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18951], 0));

goog.dom.insertSiblingAfter(new_link_18952,node_18950);


var G__18984 = cljs.core.next(seq__18635_18944__$1);
var G__18985 = null;
var G__18986 = (0);
var G__18987 = (0);
seq__18635_18893 = G__18984;
chunk__18639_18894 = G__18985;
count__18640_18895 = G__18986;
i__18641_18896 = G__18987;
continue;
} else {
var G__18988 = cljs.core.next(seq__18635_18944__$1);
var G__18989 = null;
var G__18990 = (0);
var G__18991 = (0);
seq__18635_18893 = G__18988;
chunk__18639_18894 = G__18989;
count__18640_18895 = G__18990;
i__18641_18896 = G__18991;
continue;
}
} else {
var G__18992 = cljs.core.next(seq__18635_18944__$1);
var G__18993 = null;
var G__18994 = (0);
var G__18995 = (0);
seq__18635_18893 = G__18992;
chunk__18639_18894 = G__18993;
count__18640_18895 = G__18994;
i__18641_18896 = G__18995;
continue;
}
}
} else {
}
}
break;
}


var G__18996 = cljs.core.next(seq__18467__$1);
var G__18997 = null;
var G__18998 = (0);
var G__18999 = (0);
seq__18467 = G__18996;
chunk__18469 = G__18997;
count__18470 = G__18998;
i__18471 = G__18999;
continue;
} else {
var G__19000 = cljs.core.next(seq__18467__$1);
var G__19001 = null;
var G__19002 = (0);
var G__19003 = (0);
seq__18467 = G__19000;
chunk__18469 = G__19001;
count__18470 = G__19002;
i__18471 = G__19003;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__18690 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__18690) : success.call(null,G__18690));
}catch (e18689){var e = e18689;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__18691,success,fail){
var map__18692 = p__18691;
var map__18692__$1 = cljs.core.__destructure_map(map__18692);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18692__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__18694 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__18694) : success.call(null,G__18694));
}catch (e18693){var e = e18693;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__18695,done,error){
var map__18696 = p__18695;
var map__18696__$1 = cljs.core.__destructure_map(map__18696);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18696__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__18697,done,error){
var map__18698 = p__18697;
var map__18698__$1 = cljs.core.__destructure_map(map__18698);
var msg = map__18698__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18698__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18698__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18698__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__18699){
var map__18700 = p__18699;
var map__18700__$1 = cljs.core.__destructure_map(map__18700);
var src = map__18700__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18700__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__18701 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__18701) : done.call(null,G__18701));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__18702){
var map__18703 = p__18702;
var map__18703__$1 = cljs.core.__destructure_map(map__18703);
var msg__$1 = map__18703__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18703__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e18704){var ex = e18704;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__18705){
var map__18706 = p__18705;
var map__18706__$1 = cljs.core.__destructure_map(map__18706);
var env = map__18706__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18706__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__18707){
var map__18708 = p__18707;
var map__18708__$1 = cljs.core.__destructure_map(map__18708);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18708__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18708__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__18709){
var map__18710 = p__18709;
var map__18710__$1 = cljs.core.__destructure_map(map__18710);
var svc = map__18710__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18710__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
