goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___21887 = arguments.length;
var i__5877__auto___21888 = (0);
while(true){
if((i__5877__auto___21888 < len__5876__auto___21887)){
args__5882__auto__.push((arguments[i__5877__auto___21888]));

var G__21889 = (i__5877__auto___21888 + (1));
i__5877__auto___21888 = G__21889;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21603){
var G__21604 = cljs.core.first(seq21603);
var seq21603__$1 = cljs.core.next(seq21603);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21604,seq21603__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21605 = cljs.core.seq(sources);
var chunk__21606 = null;
var count__21607 = (0);
var i__21608 = (0);
while(true){
if((i__21608 < count__21607)){
var map__21613 = chunk__21606.cljs$core$IIndexed$_nth$arity$2(null,i__21608);
var map__21613__$1 = cljs.core.__destructure_map(map__21613);
var src = map__21613__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21613__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21613__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21613__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21613__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21614){var e_21890 = e21614;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21890);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21890.message))));
}

var G__21891 = seq__21605;
var G__21892 = chunk__21606;
var G__21893 = count__21607;
var G__21894 = (i__21608 + (1));
seq__21605 = G__21891;
chunk__21606 = G__21892;
count__21607 = G__21893;
i__21608 = G__21894;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21605);
if(temp__5825__auto__){
var seq__21605__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21605__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21605__$1);
var G__21895 = cljs.core.chunk_rest(seq__21605__$1);
var G__21896 = c__5673__auto__;
var G__21897 = cljs.core.count(c__5673__auto__);
var G__21898 = (0);
seq__21605 = G__21895;
chunk__21606 = G__21896;
count__21607 = G__21897;
i__21608 = G__21898;
continue;
} else {
var map__21615 = cljs.core.first(seq__21605__$1);
var map__21615__$1 = cljs.core.__destructure_map(map__21615);
var src = map__21615__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21616){var e_21899 = e21616;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21899);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21899.message))));
}

var G__21900 = cljs.core.next(seq__21605__$1);
var G__21901 = null;
var G__21902 = (0);
var G__21903 = (0);
seq__21605 = G__21900;
chunk__21606 = G__21901;
count__21607 = G__21902;
i__21608 = G__21903;
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
var seq__21617 = cljs.core.seq(js_requires);
var chunk__21618 = null;
var count__21619 = (0);
var i__21620 = (0);
while(true){
if((i__21620 < count__21619)){
var js_ns = chunk__21618.cljs$core$IIndexed$_nth$arity$2(null,i__21620);
var require_str_21904 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21904);


var G__21905 = seq__21617;
var G__21906 = chunk__21618;
var G__21907 = count__21619;
var G__21908 = (i__21620 + (1));
seq__21617 = G__21905;
chunk__21618 = G__21906;
count__21619 = G__21907;
i__21620 = G__21908;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21617);
if(temp__5825__auto__){
var seq__21617__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21617__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21617__$1);
var G__21909 = cljs.core.chunk_rest(seq__21617__$1);
var G__21910 = c__5673__auto__;
var G__21911 = cljs.core.count(c__5673__auto__);
var G__21912 = (0);
seq__21617 = G__21909;
chunk__21618 = G__21910;
count__21619 = G__21911;
i__21620 = G__21912;
continue;
} else {
var js_ns = cljs.core.first(seq__21617__$1);
var require_str_21913 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21913);


var G__21914 = cljs.core.next(seq__21617__$1);
var G__21915 = null;
var G__21916 = (0);
var G__21917 = (0);
seq__21617 = G__21914;
chunk__21618 = G__21915;
count__21619 = G__21916;
i__21620 = G__21917;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21622){
var map__21623 = p__21622;
var map__21623__$1 = cljs.core.__destructure_map(map__21623);
var msg = map__21623__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21623__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21623__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21624(s__21625){
return (new cljs.core.LazySeq(null,(function (){
var s__21625__$1 = s__21625;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21625__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__21630 = cljs.core.first(xs__6385__auto__);
var map__21630__$1 = cljs.core.__destructure_map(map__21630);
var src = map__21630__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21630__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21630__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__21625__$1,map__21630,map__21630__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21623,map__21623__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21624_$_iter__21626(s__21627){
return (new cljs.core.LazySeq(null,((function (s__21625__$1,map__21630,map__21630__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21623,map__21623__$1,msg,info,reload_info){
return (function (){
var s__21627__$1 = s__21627;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__21627__$1);
if(temp__5825__auto____$1){
var s__21627__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21627__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__21627__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__21629 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__21628 = (0);
while(true){
if((i__21628 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__21628);
cljs.core.chunk_append(b__21629,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21918 = (i__21628 + (1));
i__21628 = G__21918;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21629),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21624_$_iter__21626(cljs.core.chunk_rest(s__21627__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21629),null);
}
} else {
var warning = cljs.core.first(s__21627__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21624_$_iter__21626(cljs.core.rest(s__21627__$2)));
}
} else {
return null;
}
break;
}
});})(s__21625__$1,map__21630,map__21630__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21623,map__21623__$1,msg,info,reload_info))
,null,null));
});})(s__21625__$1,map__21630,map__21630__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21623,map__21623__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21624(cljs.core.rest(s__21625__$1)));
} else {
var G__21919 = cljs.core.rest(s__21625__$1);
s__21625__$1 = G__21919;
continue;
}
} else {
var G__21920 = cljs.core.rest(s__21625__$1);
s__21625__$1 = G__21920;
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
var seq__21631_21921 = cljs.core.seq(warnings);
var chunk__21632_21922 = null;
var count__21633_21923 = (0);
var i__21634_21924 = (0);
while(true){
if((i__21634_21924 < count__21633_21923)){
var map__21637_21925 = chunk__21632_21922.cljs$core$IIndexed$_nth$arity$2(null,i__21634_21924);
var map__21637_21926__$1 = cljs.core.__destructure_map(map__21637_21925);
var w_21927 = map__21637_21926__$1;
var msg_21928__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21637_21926__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21637_21926__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21637_21926__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21637_21926__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21931)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21929)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21930)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21928__$1)));


var G__21932 = seq__21631_21921;
var G__21933 = chunk__21632_21922;
var G__21934 = count__21633_21923;
var G__21935 = (i__21634_21924 + (1));
seq__21631_21921 = G__21932;
chunk__21632_21922 = G__21933;
count__21633_21923 = G__21934;
i__21634_21924 = G__21935;
continue;
} else {
var temp__5825__auto___21936 = cljs.core.seq(seq__21631_21921);
if(temp__5825__auto___21936){
var seq__21631_21937__$1 = temp__5825__auto___21936;
if(cljs.core.chunked_seq_QMARK_(seq__21631_21937__$1)){
var c__5673__auto___21938 = cljs.core.chunk_first(seq__21631_21937__$1);
var G__21939 = cljs.core.chunk_rest(seq__21631_21937__$1);
var G__21940 = c__5673__auto___21938;
var G__21941 = cljs.core.count(c__5673__auto___21938);
var G__21942 = (0);
seq__21631_21921 = G__21939;
chunk__21632_21922 = G__21940;
count__21633_21923 = G__21941;
i__21634_21924 = G__21942;
continue;
} else {
var map__21638_21943 = cljs.core.first(seq__21631_21937__$1);
var map__21638_21944__$1 = cljs.core.__destructure_map(map__21638_21943);
var w_21945 = map__21638_21944__$1;
var msg_21946__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21638_21944__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21638_21944__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21638_21944__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21638_21944__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21949)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21947)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21948)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21946__$1)));


var G__21950 = cljs.core.next(seq__21631_21937__$1);
var G__21951 = null;
var G__21952 = (0);
var G__21953 = (0);
seq__21631_21921 = G__21950;
chunk__21632_21922 = G__21951;
count__21633_21923 = G__21952;
i__21634_21924 = G__21953;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21621_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21621_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21640 = node_uri;
G__21640.setQuery(null);

G__21640.setPath(new$);

return G__21640;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21641){
var map__21642 = p__21641;
var map__21642__$1 = cljs.core.__destructure_map(map__21642);
var msg = map__21642__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21642__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21642__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21643 = cljs.core.seq(updates);
var chunk__21645 = null;
var count__21646 = (0);
var i__21647 = (0);
while(true){
if((i__21647 < count__21646)){
var path = chunk__21645.cljs$core$IIndexed$_nth$arity$2(null,i__21647);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21757_21954 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21761_21955 = null;
var count__21762_21956 = (0);
var i__21763_21957 = (0);
while(true){
if((i__21763_21957 < count__21762_21956)){
var node_21958 = chunk__21761_21955.cljs$core$IIndexed$_nth$arity$2(null,i__21763_21957);
if(cljs.core.not(node_21958.shadow$old)){
var path_match_21959 = shadow.cljs.devtools.client.browser.match_paths(node_21958.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21959)){
var new_link_21960 = (function (){var G__21789 = node_21958.cloneNode(true);
G__21789.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21959)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21789;
})();
(node_21958.shadow$old = true);

(new_link_21960.onload = ((function (seq__21757_21954,chunk__21761_21955,count__21762_21956,i__21763_21957,seq__21643,chunk__21645,count__21646,i__21647,new_link_21960,path_match_21959,node_21958,path,map__21642,map__21642__$1,msg,updates,reload_info){
return (function (e){
var seq__21790_21961 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21792_21962 = null;
var count__21793_21963 = (0);
var i__21794_21964 = (0);
while(true){
if((i__21794_21964 < count__21793_21963)){
var map__21798_21965 = chunk__21792_21962.cljs$core$IIndexed$_nth$arity$2(null,i__21794_21964);
var map__21798_21966__$1 = cljs.core.__destructure_map(map__21798_21965);
var task_21967 = map__21798_21966__$1;
var fn_str_21968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21798_21966__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21798_21966__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21970 = goog.getObjectByName(fn_str_21968,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21969)));

(fn_obj_21970.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21970.cljs$core$IFn$_invoke$arity$2(path,new_link_21960) : fn_obj_21970.call(null,path,new_link_21960));


var G__21971 = seq__21790_21961;
var G__21972 = chunk__21792_21962;
var G__21973 = count__21793_21963;
var G__21974 = (i__21794_21964 + (1));
seq__21790_21961 = G__21971;
chunk__21792_21962 = G__21972;
count__21793_21963 = G__21973;
i__21794_21964 = G__21974;
continue;
} else {
var temp__5825__auto___21975 = cljs.core.seq(seq__21790_21961);
if(temp__5825__auto___21975){
var seq__21790_21976__$1 = temp__5825__auto___21975;
if(cljs.core.chunked_seq_QMARK_(seq__21790_21976__$1)){
var c__5673__auto___21977 = cljs.core.chunk_first(seq__21790_21976__$1);
var G__21978 = cljs.core.chunk_rest(seq__21790_21976__$1);
var G__21979 = c__5673__auto___21977;
var G__21980 = cljs.core.count(c__5673__auto___21977);
var G__21981 = (0);
seq__21790_21961 = G__21978;
chunk__21792_21962 = G__21979;
count__21793_21963 = G__21980;
i__21794_21964 = G__21981;
continue;
} else {
var map__21799_21982 = cljs.core.first(seq__21790_21976__$1);
var map__21799_21983__$1 = cljs.core.__destructure_map(map__21799_21982);
var task_21984 = map__21799_21983__$1;
var fn_str_21985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21799_21983__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21799_21983__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21987 = goog.getObjectByName(fn_str_21985,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21986)));

(fn_obj_21987.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21987.cljs$core$IFn$_invoke$arity$2(path,new_link_21960) : fn_obj_21987.call(null,path,new_link_21960));


var G__21988 = cljs.core.next(seq__21790_21976__$1);
var G__21989 = null;
var G__21990 = (0);
var G__21991 = (0);
seq__21790_21961 = G__21988;
chunk__21792_21962 = G__21989;
count__21793_21963 = G__21990;
i__21794_21964 = G__21991;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21958);
});})(seq__21757_21954,chunk__21761_21955,count__21762_21956,i__21763_21957,seq__21643,chunk__21645,count__21646,i__21647,new_link_21960,path_match_21959,node_21958,path,map__21642,map__21642__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21959], 0));

goog.dom.insertSiblingAfter(new_link_21960,node_21958);


var G__21992 = seq__21757_21954;
var G__21993 = chunk__21761_21955;
var G__21994 = count__21762_21956;
var G__21995 = (i__21763_21957 + (1));
seq__21757_21954 = G__21992;
chunk__21761_21955 = G__21993;
count__21762_21956 = G__21994;
i__21763_21957 = G__21995;
continue;
} else {
var G__21996 = seq__21757_21954;
var G__21997 = chunk__21761_21955;
var G__21998 = count__21762_21956;
var G__21999 = (i__21763_21957 + (1));
seq__21757_21954 = G__21996;
chunk__21761_21955 = G__21997;
count__21762_21956 = G__21998;
i__21763_21957 = G__21999;
continue;
}
} else {
var G__22000 = seq__21757_21954;
var G__22001 = chunk__21761_21955;
var G__22002 = count__21762_21956;
var G__22003 = (i__21763_21957 + (1));
seq__21757_21954 = G__22000;
chunk__21761_21955 = G__22001;
count__21762_21956 = G__22002;
i__21763_21957 = G__22003;
continue;
}
} else {
var temp__5825__auto___22004 = cljs.core.seq(seq__21757_21954);
if(temp__5825__auto___22004){
var seq__21757_22005__$1 = temp__5825__auto___22004;
if(cljs.core.chunked_seq_QMARK_(seq__21757_22005__$1)){
var c__5673__auto___22006 = cljs.core.chunk_first(seq__21757_22005__$1);
var G__22007 = cljs.core.chunk_rest(seq__21757_22005__$1);
var G__22008 = c__5673__auto___22006;
var G__22009 = cljs.core.count(c__5673__auto___22006);
var G__22010 = (0);
seq__21757_21954 = G__22007;
chunk__21761_21955 = G__22008;
count__21762_21956 = G__22009;
i__21763_21957 = G__22010;
continue;
} else {
var node_22011 = cljs.core.first(seq__21757_22005__$1);
if(cljs.core.not(node_22011.shadow$old)){
var path_match_22012 = shadow.cljs.devtools.client.browser.match_paths(node_22011.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22012)){
var new_link_22013 = (function (){var G__21800 = node_22011.cloneNode(true);
G__21800.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22012)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21800;
})();
(node_22011.shadow$old = true);

(new_link_22013.onload = ((function (seq__21757_21954,chunk__21761_21955,count__21762_21956,i__21763_21957,seq__21643,chunk__21645,count__21646,i__21647,new_link_22013,path_match_22012,node_22011,seq__21757_22005__$1,temp__5825__auto___22004,path,map__21642,map__21642__$1,msg,updates,reload_info){
return (function (e){
var seq__21801_22014 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21803_22015 = null;
var count__21804_22016 = (0);
var i__21805_22017 = (0);
while(true){
if((i__21805_22017 < count__21804_22016)){
var map__21809_22018 = chunk__21803_22015.cljs$core$IIndexed$_nth$arity$2(null,i__21805_22017);
var map__21809_22019__$1 = cljs.core.__destructure_map(map__21809_22018);
var task_22020 = map__21809_22019__$1;
var fn_str_22021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21809_22019__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21809_22019__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22023 = goog.getObjectByName(fn_str_22021,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22022)));

(fn_obj_22023.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22023.cljs$core$IFn$_invoke$arity$2(path,new_link_22013) : fn_obj_22023.call(null,path,new_link_22013));


var G__22024 = seq__21801_22014;
var G__22025 = chunk__21803_22015;
var G__22026 = count__21804_22016;
var G__22027 = (i__21805_22017 + (1));
seq__21801_22014 = G__22024;
chunk__21803_22015 = G__22025;
count__21804_22016 = G__22026;
i__21805_22017 = G__22027;
continue;
} else {
var temp__5825__auto___22028__$1 = cljs.core.seq(seq__21801_22014);
if(temp__5825__auto___22028__$1){
var seq__21801_22029__$1 = temp__5825__auto___22028__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21801_22029__$1)){
var c__5673__auto___22030 = cljs.core.chunk_first(seq__21801_22029__$1);
var G__22031 = cljs.core.chunk_rest(seq__21801_22029__$1);
var G__22032 = c__5673__auto___22030;
var G__22033 = cljs.core.count(c__5673__auto___22030);
var G__22034 = (0);
seq__21801_22014 = G__22031;
chunk__21803_22015 = G__22032;
count__21804_22016 = G__22033;
i__21805_22017 = G__22034;
continue;
} else {
var map__21810_22035 = cljs.core.first(seq__21801_22029__$1);
var map__21810_22036__$1 = cljs.core.__destructure_map(map__21810_22035);
var task_22037 = map__21810_22036__$1;
var fn_str_22038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810_22036__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21810_22036__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22040 = goog.getObjectByName(fn_str_22038,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22039)));

(fn_obj_22040.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22040.cljs$core$IFn$_invoke$arity$2(path,new_link_22013) : fn_obj_22040.call(null,path,new_link_22013));


var G__22041 = cljs.core.next(seq__21801_22029__$1);
var G__22042 = null;
var G__22043 = (0);
var G__22044 = (0);
seq__21801_22014 = G__22041;
chunk__21803_22015 = G__22042;
count__21804_22016 = G__22043;
i__21805_22017 = G__22044;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22011);
});})(seq__21757_21954,chunk__21761_21955,count__21762_21956,i__21763_21957,seq__21643,chunk__21645,count__21646,i__21647,new_link_22013,path_match_22012,node_22011,seq__21757_22005__$1,temp__5825__auto___22004,path,map__21642,map__21642__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22012], 0));

goog.dom.insertSiblingAfter(new_link_22013,node_22011);


var G__22045 = cljs.core.next(seq__21757_22005__$1);
var G__22046 = null;
var G__22047 = (0);
var G__22048 = (0);
seq__21757_21954 = G__22045;
chunk__21761_21955 = G__22046;
count__21762_21956 = G__22047;
i__21763_21957 = G__22048;
continue;
} else {
var G__22049 = cljs.core.next(seq__21757_22005__$1);
var G__22050 = null;
var G__22051 = (0);
var G__22052 = (0);
seq__21757_21954 = G__22049;
chunk__21761_21955 = G__22050;
count__21762_21956 = G__22051;
i__21763_21957 = G__22052;
continue;
}
} else {
var G__22053 = cljs.core.next(seq__21757_22005__$1);
var G__22054 = null;
var G__22055 = (0);
var G__22056 = (0);
seq__21757_21954 = G__22053;
chunk__21761_21955 = G__22054;
count__21762_21956 = G__22055;
i__21763_21957 = G__22056;
continue;
}
}
} else {
}
}
break;
}


var G__22057 = seq__21643;
var G__22058 = chunk__21645;
var G__22059 = count__21646;
var G__22060 = (i__21647 + (1));
seq__21643 = G__22057;
chunk__21645 = G__22058;
count__21646 = G__22059;
i__21647 = G__22060;
continue;
} else {
var G__22061 = seq__21643;
var G__22062 = chunk__21645;
var G__22063 = count__21646;
var G__22064 = (i__21647 + (1));
seq__21643 = G__22061;
chunk__21645 = G__22062;
count__21646 = G__22063;
i__21647 = G__22064;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21643);
if(temp__5825__auto__){
var seq__21643__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21643__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21643__$1);
var G__22065 = cljs.core.chunk_rest(seq__21643__$1);
var G__22066 = c__5673__auto__;
var G__22067 = cljs.core.count(c__5673__auto__);
var G__22068 = (0);
seq__21643 = G__22065;
chunk__21645 = G__22066;
count__21646 = G__22067;
i__21647 = G__22068;
continue;
} else {
var path = cljs.core.first(seq__21643__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21811_22069 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21815_22070 = null;
var count__21816_22071 = (0);
var i__21817_22072 = (0);
while(true){
if((i__21817_22072 < count__21816_22071)){
var node_22073 = chunk__21815_22070.cljs$core$IIndexed$_nth$arity$2(null,i__21817_22072);
if(cljs.core.not(node_22073.shadow$old)){
var path_match_22074 = shadow.cljs.devtools.client.browser.match_paths(node_22073.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22074)){
var new_link_22075 = (function (){var G__21843 = node_22073.cloneNode(true);
G__21843.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22074)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21843;
})();
(node_22073.shadow$old = true);

(new_link_22075.onload = ((function (seq__21811_22069,chunk__21815_22070,count__21816_22071,i__21817_22072,seq__21643,chunk__21645,count__21646,i__21647,new_link_22075,path_match_22074,node_22073,path,seq__21643__$1,temp__5825__auto__,map__21642,map__21642__$1,msg,updates,reload_info){
return (function (e){
var seq__21844_22076 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21846_22077 = null;
var count__21847_22078 = (0);
var i__21848_22079 = (0);
while(true){
if((i__21848_22079 < count__21847_22078)){
var map__21852_22080 = chunk__21846_22077.cljs$core$IIndexed$_nth$arity$2(null,i__21848_22079);
var map__21852_22081__$1 = cljs.core.__destructure_map(map__21852_22080);
var task_22082 = map__21852_22081__$1;
var fn_str_22083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21852_22081__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21852_22081__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22085 = goog.getObjectByName(fn_str_22083,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22084)));

(fn_obj_22085.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22085.cljs$core$IFn$_invoke$arity$2(path,new_link_22075) : fn_obj_22085.call(null,path,new_link_22075));


var G__22086 = seq__21844_22076;
var G__22087 = chunk__21846_22077;
var G__22088 = count__21847_22078;
var G__22089 = (i__21848_22079 + (1));
seq__21844_22076 = G__22086;
chunk__21846_22077 = G__22087;
count__21847_22078 = G__22088;
i__21848_22079 = G__22089;
continue;
} else {
var temp__5825__auto___22090__$1 = cljs.core.seq(seq__21844_22076);
if(temp__5825__auto___22090__$1){
var seq__21844_22091__$1 = temp__5825__auto___22090__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21844_22091__$1)){
var c__5673__auto___22092 = cljs.core.chunk_first(seq__21844_22091__$1);
var G__22093 = cljs.core.chunk_rest(seq__21844_22091__$1);
var G__22094 = c__5673__auto___22092;
var G__22095 = cljs.core.count(c__5673__auto___22092);
var G__22096 = (0);
seq__21844_22076 = G__22093;
chunk__21846_22077 = G__22094;
count__21847_22078 = G__22095;
i__21848_22079 = G__22096;
continue;
} else {
var map__21853_22097 = cljs.core.first(seq__21844_22091__$1);
var map__21853_22098__$1 = cljs.core.__destructure_map(map__21853_22097);
var task_22099 = map__21853_22098__$1;
var fn_str_22100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21853_22098__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21853_22098__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22102 = goog.getObjectByName(fn_str_22100,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22101)));

(fn_obj_22102.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22102.cljs$core$IFn$_invoke$arity$2(path,new_link_22075) : fn_obj_22102.call(null,path,new_link_22075));


var G__22103 = cljs.core.next(seq__21844_22091__$1);
var G__22104 = null;
var G__22105 = (0);
var G__22106 = (0);
seq__21844_22076 = G__22103;
chunk__21846_22077 = G__22104;
count__21847_22078 = G__22105;
i__21848_22079 = G__22106;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22073);
});})(seq__21811_22069,chunk__21815_22070,count__21816_22071,i__21817_22072,seq__21643,chunk__21645,count__21646,i__21647,new_link_22075,path_match_22074,node_22073,path,seq__21643__$1,temp__5825__auto__,map__21642,map__21642__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22074], 0));

goog.dom.insertSiblingAfter(new_link_22075,node_22073);


var G__22107 = seq__21811_22069;
var G__22108 = chunk__21815_22070;
var G__22109 = count__21816_22071;
var G__22110 = (i__21817_22072 + (1));
seq__21811_22069 = G__22107;
chunk__21815_22070 = G__22108;
count__21816_22071 = G__22109;
i__21817_22072 = G__22110;
continue;
} else {
var G__22111 = seq__21811_22069;
var G__22112 = chunk__21815_22070;
var G__22113 = count__21816_22071;
var G__22114 = (i__21817_22072 + (1));
seq__21811_22069 = G__22111;
chunk__21815_22070 = G__22112;
count__21816_22071 = G__22113;
i__21817_22072 = G__22114;
continue;
}
} else {
var G__22115 = seq__21811_22069;
var G__22116 = chunk__21815_22070;
var G__22117 = count__21816_22071;
var G__22118 = (i__21817_22072 + (1));
seq__21811_22069 = G__22115;
chunk__21815_22070 = G__22116;
count__21816_22071 = G__22117;
i__21817_22072 = G__22118;
continue;
}
} else {
var temp__5825__auto___22119__$1 = cljs.core.seq(seq__21811_22069);
if(temp__5825__auto___22119__$1){
var seq__21811_22120__$1 = temp__5825__auto___22119__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21811_22120__$1)){
var c__5673__auto___22121 = cljs.core.chunk_first(seq__21811_22120__$1);
var G__22122 = cljs.core.chunk_rest(seq__21811_22120__$1);
var G__22123 = c__5673__auto___22121;
var G__22124 = cljs.core.count(c__5673__auto___22121);
var G__22125 = (0);
seq__21811_22069 = G__22122;
chunk__21815_22070 = G__22123;
count__21816_22071 = G__22124;
i__21817_22072 = G__22125;
continue;
} else {
var node_22126 = cljs.core.first(seq__21811_22120__$1);
if(cljs.core.not(node_22126.shadow$old)){
var path_match_22127 = shadow.cljs.devtools.client.browser.match_paths(node_22126.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22127)){
var new_link_22128 = (function (){var G__21854 = node_22126.cloneNode(true);
G__21854.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22127)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21854;
})();
(node_22126.shadow$old = true);

(new_link_22128.onload = ((function (seq__21811_22069,chunk__21815_22070,count__21816_22071,i__21817_22072,seq__21643,chunk__21645,count__21646,i__21647,new_link_22128,path_match_22127,node_22126,seq__21811_22120__$1,temp__5825__auto___22119__$1,path,seq__21643__$1,temp__5825__auto__,map__21642,map__21642__$1,msg,updates,reload_info){
return (function (e){
var seq__21855_22129 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21857_22130 = null;
var count__21858_22131 = (0);
var i__21859_22132 = (0);
while(true){
if((i__21859_22132 < count__21858_22131)){
var map__21863_22133 = chunk__21857_22130.cljs$core$IIndexed$_nth$arity$2(null,i__21859_22132);
var map__21863_22134__$1 = cljs.core.__destructure_map(map__21863_22133);
var task_22135 = map__21863_22134__$1;
var fn_str_22136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21863_22134__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21863_22134__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22138 = goog.getObjectByName(fn_str_22136,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22137)));

(fn_obj_22138.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22138.cljs$core$IFn$_invoke$arity$2(path,new_link_22128) : fn_obj_22138.call(null,path,new_link_22128));


var G__22139 = seq__21855_22129;
var G__22140 = chunk__21857_22130;
var G__22141 = count__21858_22131;
var G__22142 = (i__21859_22132 + (1));
seq__21855_22129 = G__22139;
chunk__21857_22130 = G__22140;
count__21858_22131 = G__22141;
i__21859_22132 = G__22142;
continue;
} else {
var temp__5825__auto___22143__$2 = cljs.core.seq(seq__21855_22129);
if(temp__5825__auto___22143__$2){
var seq__21855_22144__$1 = temp__5825__auto___22143__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21855_22144__$1)){
var c__5673__auto___22145 = cljs.core.chunk_first(seq__21855_22144__$1);
var G__22146 = cljs.core.chunk_rest(seq__21855_22144__$1);
var G__22147 = c__5673__auto___22145;
var G__22148 = cljs.core.count(c__5673__auto___22145);
var G__22149 = (0);
seq__21855_22129 = G__22146;
chunk__21857_22130 = G__22147;
count__21858_22131 = G__22148;
i__21859_22132 = G__22149;
continue;
} else {
var map__21864_22150 = cljs.core.first(seq__21855_22144__$1);
var map__21864_22151__$1 = cljs.core.__destructure_map(map__21864_22150);
var task_22152 = map__21864_22151__$1;
var fn_str_22153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21864_22151__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21864_22151__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22155 = goog.getObjectByName(fn_str_22153,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22154)));

(fn_obj_22155.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22155.cljs$core$IFn$_invoke$arity$2(path,new_link_22128) : fn_obj_22155.call(null,path,new_link_22128));


var G__22156 = cljs.core.next(seq__21855_22144__$1);
var G__22157 = null;
var G__22158 = (0);
var G__22159 = (0);
seq__21855_22129 = G__22156;
chunk__21857_22130 = G__22157;
count__21858_22131 = G__22158;
i__21859_22132 = G__22159;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22126);
});})(seq__21811_22069,chunk__21815_22070,count__21816_22071,i__21817_22072,seq__21643,chunk__21645,count__21646,i__21647,new_link_22128,path_match_22127,node_22126,seq__21811_22120__$1,temp__5825__auto___22119__$1,path,seq__21643__$1,temp__5825__auto__,map__21642,map__21642__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22127], 0));

goog.dom.insertSiblingAfter(new_link_22128,node_22126);


var G__22160 = cljs.core.next(seq__21811_22120__$1);
var G__22161 = null;
var G__22162 = (0);
var G__22163 = (0);
seq__21811_22069 = G__22160;
chunk__21815_22070 = G__22161;
count__21816_22071 = G__22162;
i__21817_22072 = G__22163;
continue;
} else {
var G__22164 = cljs.core.next(seq__21811_22120__$1);
var G__22165 = null;
var G__22166 = (0);
var G__22167 = (0);
seq__21811_22069 = G__22164;
chunk__21815_22070 = G__22165;
count__21816_22071 = G__22166;
i__21817_22072 = G__22167;
continue;
}
} else {
var G__22168 = cljs.core.next(seq__21811_22120__$1);
var G__22169 = null;
var G__22170 = (0);
var G__22171 = (0);
seq__21811_22069 = G__22168;
chunk__21815_22070 = G__22169;
count__21816_22071 = G__22170;
i__21817_22072 = G__22171;
continue;
}
}
} else {
}
}
break;
}


var G__22172 = cljs.core.next(seq__21643__$1);
var G__22173 = null;
var G__22174 = (0);
var G__22175 = (0);
seq__21643 = G__22172;
chunk__21645 = G__22173;
count__21646 = G__22174;
i__21647 = G__22175;
continue;
} else {
var G__22176 = cljs.core.next(seq__21643__$1);
var G__22177 = null;
var G__22178 = (0);
var G__22179 = (0);
seq__21643 = G__22176;
chunk__21645 = G__22177;
count__21646 = G__22178;
i__21647 = G__22179;
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
try{var G__21866 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21866) : success.call(null,G__21866));
}catch (e21865){var e = e21865;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21867,success,fail){
var map__21868 = p__21867;
var map__21868__$1 = cljs.core.__destructure_map(map__21868);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21868__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21870 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21870) : success.call(null,G__21870));
}catch (e21869){var e = e21869;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21871,done,error){
var map__21872 = p__21871;
var map__21872__$1 = cljs.core.__destructure_map(map__21872);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21872__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21873,done,error){
var map__21874 = p__21873;
var map__21874__$1 = cljs.core.__destructure_map(map__21874);
var msg = map__21874__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21874__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21874__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21874__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21875){
var map__21876 = p__21875;
var map__21876__$1 = cljs.core.__destructure_map(map__21876);
var src = map__21876__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21876__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21877 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21877) : done.call(null,G__21877));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21878){
var map__21879 = p__21878;
var map__21879__$1 = cljs.core.__destructure_map(map__21879);
var msg__$1 = map__21879__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21879__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21880){var ex = e21880;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21881){
var map__21882 = p__21881;
var map__21882__$1 = cljs.core.__destructure_map(map__21882);
var env = map__21882__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21882__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21883){
var map__21884 = p__21883;
var map__21884__$1 = cljs.core.__destructure_map(map__21884);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21884__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21884__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__21885){
var map__21886 = p__21885;
var map__21886__$1 = cljs.core.__destructure_map(map__21886);
var svc = map__21886__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21886__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
