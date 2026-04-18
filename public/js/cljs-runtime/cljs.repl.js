goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17203){
var map__17204 = p__17203;
var map__17204__$1 = cljs.core.__destructure_map(map__17204);
var m = map__17204__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17204__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17204__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17206_17396 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17207_17397 = null;
var count__17208_17398 = (0);
var i__17209_17399 = (0);
while(true){
if((i__17209_17399 < count__17208_17398)){
var f_17400 = chunk__17207_17397.cljs$core$IIndexed$_nth$arity$2(null,i__17209_17399);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17400], 0));


var G__17401 = seq__17206_17396;
var G__17402 = chunk__17207_17397;
var G__17403 = count__17208_17398;
var G__17404 = (i__17209_17399 + (1));
seq__17206_17396 = G__17401;
chunk__17207_17397 = G__17402;
count__17208_17398 = G__17403;
i__17209_17399 = G__17404;
continue;
} else {
var temp__5825__auto___17405 = cljs.core.seq(seq__17206_17396);
if(temp__5825__auto___17405){
var seq__17206_17410__$1 = temp__5825__auto___17405;
if(cljs.core.chunked_seq_QMARK_(seq__17206_17410__$1)){
var c__5673__auto___17411 = cljs.core.chunk_first(seq__17206_17410__$1);
var G__17412 = cljs.core.chunk_rest(seq__17206_17410__$1);
var G__17413 = c__5673__auto___17411;
var G__17414 = cljs.core.count(c__5673__auto___17411);
var G__17415 = (0);
seq__17206_17396 = G__17412;
chunk__17207_17397 = G__17413;
count__17208_17398 = G__17414;
i__17209_17399 = G__17415;
continue;
} else {
var f_17417 = cljs.core.first(seq__17206_17410__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17417], 0));


var G__17418 = cljs.core.next(seq__17206_17410__$1);
var G__17419 = null;
var G__17420 = (0);
var G__17421 = (0);
seq__17206_17396 = G__17418;
chunk__17207_17397 = G__17419;
count__17208_17398 = G__17420;
i__17209_17399 = G__17421;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17423 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_17423], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_17423)))?cljs.core.second(arglists_17423):arglists_17423)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17213_17432 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17214_17433 = null;
var count__17215_17434 = (0);
var i__17216_17435 = (0);
while(true){
if((i__17216_17435 < count__17215_17434)){
var vec__17232_17436 = chunk__17214_17433.cljs$core$IIndexed$_nth$arity$2(null,i__17216_17435);
var name_17437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17232_17436,(0),null);
var map__17235_17438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17232_17436,(1),null);
var map__17235_17439__$1 = cljs.core.__destructure_map(map__17235_17438);
var doc_17440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17235_17439__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17235_17439__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17437], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17441], 0));

if(cljs.core.truth_(doc_17440)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17440], 0));
} else {
}


var G__17442 = seq__17213_17432;
var G__17443 = chunk__17214_17433;
var G__17444 = count__17215_17434;
var G__17445 = (i__17216_17435 + (1));
seq__17213_17432 = G__17442;
chunk__17214_17433 = G__17443;
count__17215_17434 = G__17444;
i__17216_17435 = G__17445;
continue;
} else {
var temp__5825__auto___17450 = cljs.core.seq(seq__17213_17432);
if(temp__5825__auto___17450){
var seq__17213_17451__$1 = temp__5825__auto___17450;
if(cljs.core.chunked_seq_QMARK_(seq__17213_17451__$1)){
var c__5673__auto___17452 = cljs.core.chunk_first(seq__17213_17451__$1);
var G__17453 = cljs.core.chunk_rest(seq__17213_17451__$1);
var G__17454 = c__5673__auto___17452;
var G__17455 = cljs.core.count(c__5673__auto___17452);
var G__17456 = (0);
seq__17213_17432 = G__17453;
chunk__17214_17433 = G__17454;
count__17215_17434 = G__17455;
i__17216_17435 = G__17456;
continue;
} else {
var vec__17237_17461 = cljs.core.first(seq__17213_17451__$1);
var name_17462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17237_17461,(0),null);
var map__17240_17463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17237_17461,(1),null);
var map__17240_17464__$1 = cljs.core.__destructure_map(map__17240_17463);
var doc_17465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17240_17464__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17240_17464__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17462], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17466], 0));

if(cljs.core.truth_(doc_17465)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17465], 0));
} else {
}


var G__17467 = cljs.core.next(seq__17213_17451__$1);
var G__17468 = null;
var G__17469 = (0);
var G__17470 = (0);
seq__17213_17432 = G__17467;
chunk__17214_17433 = G__17468;
count__17215_17434 = G__17469;
i__17216_17435 = G__17470;
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
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__17243 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17244 = null;
var count__17245 = (0);
var i__17246 = (0);
while(true){
if((i__17246 < count__17245)){
var role = chunk__17244.cljs$core$IIndexed$_nth$arity$2(null,i__17246);
var temp__5825__auto___17475__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___17475__$1)){
var spec_17476 = temp__5825__auto___17475__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_17476)], 0));
} else {
}


var G__17477 = seq__17243;
var G__17478 = chunk__17244;
var G__17479 = count__17245;
var G__17480 = (i__17246 + (1));
seq__17243 = G__17477;
chunk__17244 = G__17478;
count__17245 = G__17479;
i__17246 = G__17480;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__17243);
if(temp__5825__auto____$1){
var seq__17243__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17243__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__17243__$1);
var G__17485 = cljs.core.chunk_rest(seq__17243__$1);
var G__17486 = c__5673__auto__;
var G__17487 = cljs.core.count(c__5673__auto__);
var G__17488 = (0);
seq__17243 = G__17485;
chunk__17244 = G__17486;
count__17245 = G__17487;
i__17246 = G__17488;
continue;
} else {
var role = cljs.core.first(seq__17243__$1);
var temp__5825__auto___17489__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___17489__$2)){
var spec_17490 = temp__5825__auto___17489__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_17490)], 0));
} else {
}


var G__17492 = cljs.core.next(seq__17243__$1);
var G__17493 = null;
var G__17494 = (0);
var G__17495 = (0);
seq__17243 = G__17492;
chunk__17244 = G__17493;
count__17245 = G__17494;
i__17246 = G__17495;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__17256 = datafied_throwable;
var map__17256__$1 = cljs.core.__destructure_map(map__17256);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17256__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17256__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17256__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17257 = cljs.core.last(via);
var map__17257__$1 = cljs.core.__destructure_map(map__17257);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17257__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17257__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17257__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17258 = data;
var map__17258__$1 = cljs.core.__destructure_map(map__17258);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17258__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17258__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17258__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17259 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__17259__$1 = cljs.core.__destructure_map(map__17259);
var top_data = map__17259__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17259__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__17261 = phase;
var G__17261__$1 = (((G__17261 instanceof cljs.core.Keyword))?G__17261.fqn:null);
switch (G__17261__$1) {
case "read-source":
var map__17262 = data;
var map__17262__$1 = cljs.core.__destructure_map(map__17262);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17262__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17262__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17263 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__17263__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17263,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17263);
var G__17263__$2 = (cljs.core.truth_((function (){var fexpr__17264 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17264.cljs$core$IFn$_invoke$arity$1 ? fexpr__17264.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17264.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17263__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17263__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17263__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17263__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17265 = top_data;
var G__17265__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17265,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17265);
var G__17265__$2 = (cljs.core.truth_((function (){var fexpr__17266 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17266.cljs$core$IFn$_invoke$arity$1 ? fexpr__17266.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17266.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17265__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17265__$1);
var G__17265__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17265__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17265__$2);
var G__17265__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17265__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17265__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17265__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17265__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17267 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17267,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17267,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17267,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17267,(3),null);
var G__17271 = top_data;
var G__17271__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17271,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17271);
var G__17271__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17271__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17271__$1);
var G__17271__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17271__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17271__$2);
var G__17271__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17271__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17271__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17271__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17271__$4;
}

break;
case "execution":
var vec__17273 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17273,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17273,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17273,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17273,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__17255_SHARP_){
var or__5142__auto__ = (p1__17255_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__17276 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17276.cljs$core$IFn$_invoke$arity$1 ? fexpr__17276.cljs$core$IFn$_invoke$arity$1(p1__17255_SHARP_) : fexpr__17276.call(null,p1__17255_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__17277 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17277__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17277,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17277);
var G__17277__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17277__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17277__$1);
var G__17277__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17277__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17277__$2);
var G__17277__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17277__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17277__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17277__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17277__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17261__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17282){
var map__17283 = p__17282;
var map__17283__$1 = cljs.core.__destructure_map(map__17283);
var triage_data = map__17283__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17283__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17283__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17283__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17283__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17283__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17283__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17283__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17283__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = source;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = line;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5142__auto__ = class$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__17290 = phase;
var G__17290__$1 = (((G__17290 instanceof cljs.core.Keyword))?G__17290.fqn:null);
switch (G__17290__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__17295 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__17296 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__17297 = loc;
var G__17298 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17308_17513 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17309_17514 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17310_17515 = true;
var _STAR_print_fn_STAR__temp_val__17311_17516 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17310_17515);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17311_17516);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17280_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17280_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17309_17514);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17308_17513);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17295,G__17296,G__17297,G__17298) : format.call(null,G__17295,G__17296,G__17297,G__17298));

break;
case "macroexpansion":
var G__17317 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__17318 = cause_type;
var G__17319 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__17320 = loc;
var G__17321 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17317,G__17318,G__17319,G__17320,G__17321) : format.call(null,G__17317,G__17318,G__17319,G__17320,G__17321));

break;
case "compile-syntax-check":
var G__17325 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__17326 = cause_type;
var G__17327 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__17328 = loc;
var G__17329 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17325,G__17326,G__17327,G__17328,G__17329) : format.call(null,G__17325,G__17326,G__17327,G__17328,G__17329));

break;
case "compilation":
var G__17330 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__17331 = cause_type;
var G__17332 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__17333 = loc;
var G__17334 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17330,G__17331,G__17332,G__17333,G__17334) : format.call(null,G__17330,G__17331,G__17332,G__17333,G__17334));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__17335 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__17336 = symbol;
var G__17337 = loc;
var G__17338 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17339_17518 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17340_17519 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17341_17520 = true;
var _STAR_print_fn_STAR__temp_val__17342_17521 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17341_17520);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17342_17521);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17281_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17281_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17340_17519);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17339_17518);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17335,G__17336,G__17337,G__17338) : format.call(null,G__17335,G__17336,G__17337,G__17338));
} else {
var G__17354 = "Execution error%s at %s(%s).\n%s\n";
var G__17355 = cause_type;
var G__17356 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__17357 = loc;
var G__17358 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17354,G__17355,G__17356,G__17357,G__17358) : format.call(null,G__17354,G__17355,G__17356,G__17357,G__17358));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17290__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
