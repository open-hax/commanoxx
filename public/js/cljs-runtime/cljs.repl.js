goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19364){
var map__19370 = p__19364;
var map__19370__$1 = cljs.core.__destructure_map(map__19370);
var m = map__19370__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19370__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19370__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__19392_19764 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19393_19765 = null;
var count__19394_19766 = (0);
var i__19395_19767 = (0);
while(true){
if((i__19395_19767 < count__19394_19766)){
var f_19768 = chunk__19393_19765.cljs$core$IIndexed$_nth$arity$2(null,i__19395_19767);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19768], 0));


var G__19769 = seq__19392_19764;
var G__19770 = chunk__19393_19765;
var G__19771 = count__19394_19766;
var G__19772 = (i__19395_19767 + (1));
seq__19392_19764 = G__19769;
chunk__19393_19765 = G__19770;
count__19394_19766 = G__19771;
i__19395_19767 = G__19772;
continue;
} else {
var temp__5825__auto___19773 = cljs.core.seq(seq__19392_19764);
if(temp__5825__auto___19773){
var seq__19392_19774__$1 = temp__5825__auto___19773;
if(cljs.core.chunked_seq_QMARK_(seq__19392_19774__$1)){
var c__5673__auto___19778 = cljs.core.chunk_first(seq__19392_19774__$1);
var G__19779 = cljs.core.chunk_rest(seq__19392_19774__$1);
var G__19780 = c__5673__auto___19778;
var G__19781 = cljs.core.count(c__5673__auto___19778);
var G__19782 = (0);
seq__19392_19764 = G__19779;
chunk__19393_19765 = G__19780;
count__19394_19766 = G__19781;
i__19395_19767 = G__19782;
continue;
} else {
var f_19783 = cljs.core.first(seq__19392_19774__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19783], 0));


var G__19785 = cljs.core.next(seq__19392_19774__$1);
var G__19786 = null;
var G__19787 = (0);
var G__19788 = (0);
seq__19392_19764 = G__19785;
chunk__19393_19765 = G__19786;
count__19394_19766 = G__19787;
i__19395_19767 = G__19788;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19789 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19789], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19789)))?cljs.core.second(arglists_19789):arglists_19789)], 0));
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
var seq__19419_19806 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19420_19807 = null;
var count__19421_19808 = (0);
var i__19422_19809 = (0);
while(true){
if((i__19422_19809 < count__19421_19808)){
var vec__19446_19813 = chunk__19420_19807.cljs$core$IIndexed$_nth$arity$2(null,i__19422_19809);
var name_19814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19446_19813,(0),null);
var map__19449_19815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19446_19813,(1),null);
var map__19449_19816__$1 = cljs.core.__destructure_map(map__19449_19815);
var doc_19817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19449_19816__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19449_19816__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19814], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19818], 0));

if(cljs.core.truth_(doc_19817)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19817], 0));
} else {
}


var G__19827 = seq__19419_19806;
var G__19828 = chunk__19420_19807;
var G__19829 = count__19421_19808;
var G__19830 = (i__19422_19809 + (1));
seq__19419_19806 = G__19827;
chunk__19420_19807 = G__19828;
count__19421_19808 = G__19829;
i__19422_19809 = G__19830;
continue;
} else {
var temp__5825__auto___19831 = cljs.core.seq(seq__19419_19806);
if(temp__5825__auto___19831){
var seq__19419_19833__$1 = temp__5825__auto___19831;
if(cljs.core.chunked_seq_QMARK_(seq__19419_19833__$1)){
var c__5673__auto___19834 = cljs.core.chunk_first(seq__19419_19833__$1);
var G__19835 = cljs.core.chunk_rest(seq__19419_19833__$1);
var G__19836 = c__5673__auto___19834;
var G__19837 = cljs.core.count(c__5673__auto___19834);
var G__19838 = (0);
seq__19419_19806 = G__19835;
chunk__19420_19807 = G__19836;
count__19421_19808 = G__19837;
i__19422_19809 = G__19838;
continue;
} else {
var vec__19454_19840 = cljs.core.first(seq__19419_19833__$1);
var name_19841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19454_19840,(0),null);
var map__19457_19842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19454_19840,(1),null);
var map__19457_19843__$1 = cljs.core.__destructure_map(map__19457_19842);
var doc_19844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19457_19843__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19457_19843__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19841], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19845], 0));

if(cljs.core.truth_(doc_19844)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19844], 0));
} else {
}


var G__19853 = cljs.core.next(seq__19419_19833__$1);
var G__19854 = null;
var G__19855 = (0);
var G__19856 = (0);
seq__19419_19806 = G__19853;
chunk__19420_19807 = G__19854;
count__19421_19808 = G__19855;
i__19422_19809 = G__19856;
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

var seq__19466 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19467 = null;
var count__19468 = (0);
var i__19469 = (0);
while(true){
if((i__19469 < count__19468)){
var role = chunk__19467.cljs$core$IIndexed$_nth$arity$2(null,i__19469);
var temp__5825__auto___19859__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___19859__$1)){
var spec_19861 = temp__5825__auto___19859__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19861)], 0));
} else {
}


var G__19863 = seq__19466;
var G__19864 = chunk__19467;
var G__19865 = count__19468;
var G__19866 = (i__19469 + (1));
seq__19466 = G__19863;
chunk__19467 = G__19864;
count__19468 = G__19865;
i__19469 = G__19866;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__19466);
if(temp__5825__auto____$1){
var seq__19466__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19466__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__19466__$1);
var G__19867 = cljs.core.chunk_rest(seq__19466__$1);
var G__19868 = c__5673__auto__;
var G__19869 = cljs.core.count(c__5673__auto__);
var G__19870 = (0);
seq__19466 = G__19867;
chunk__19467 = G__19868;
count__19468 = G__19869;
i__19469 = G__19870;
continue;
} else {
var role = cljs.core.first(seq__19466__$1);
var temp__5825__auto___19871__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___19871__$2)){
var spec_19872 = temp__5825__auto___19871__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19872)], 0));
} else {
}


var G__19874 = cljs.core.next(seq__19466__$1);
var G__19875 = null;
var G__19876 = (0);
var G__19877 = (0);
seq__19466 = G__19874;
chunk__19467 = G__19875;
count__19468 = G__19876;
i__19469 = G__19877;
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
var map__19634 = datafied_throwable;
var map__19634__$1 = cljs.core.__destructure_map(map__19634);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19634__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19634__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19634__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19635 = cljs.core.last(via);
var map__19635__$1 = cljs.core.__destructure_map(map__19635);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19635__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19635__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19635__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19636 = data;
var map__19636__$1 = cljs.core.__destructure_map(map__19636);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19636__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19636__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19636__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19637 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19637__$1 = cljs.core.__destructure_map(map__19637);
var top_data = map__19637__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19637__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19641 = phase;
var G__19641__$1 = (((G__19641 instanceof cljs.core.Keyword))?G__19641.fqn:null);
switch (G__19641__$1) {
case "read-source":
var map__19644 = data;
var map__19644__$1 = cljs.core.__destructure_map(map__19644);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19644__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19644__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19648 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19648__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19648,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19648);
var G__19648__$2 = (cljs.core.truth_((function (){var fexpr__19651 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19651.cljs$core$IFn$_invoke$arity$1 ? fexpr__19651.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19651.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19648__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19648__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19648__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19648__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19653 = top_data;
var G__19653__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19653,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19653);
var G__19653__$2 = (cljs.core.truth_((function (){var fexpr__19655 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19655.cljs$core$IFn$_invoke$arity$1 ? fexpr__19655.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19655.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19653__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19653__$1);
var G__19653__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19653__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19653__$2);
var G__19653__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19653__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19653__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19653__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19653__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19660 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19660,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19660,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19660,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19660,(3),null);
var G__19663 = top_data;
var G__19663__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19663,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19663);
var G__19663__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19663__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19663__$1);
var G__19663__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19663__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19663__$2);
var G__19663__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19663__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19663__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19663__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19663__$4;
}

break;
case "execution":
var vec__19671 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19671,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19671,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19671,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19671,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19621_SHARP_){
var or__5142__auto__ = (p1__19621_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__19675 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19675.cljs$core$IFn$_invoke$arity$1 ? fexpr__19675.cljs$core$IFn$_invoke$arity$1(p1__19621_SHARP_) : fexpr__19675.call(null,p1__19621_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__19678 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19678__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19678,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19678);
var G__19678__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19678__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19678__$1);
var G__19678__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19678__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19678__$2);
var G__19678__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19678__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19678__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19678__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19678__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19641__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19687){
var map__19689 = p__19687;
var map__19689__$1 = cljs.core.__destructure_map(map__19689);
var triage_data = map__19689__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19689__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19689__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19689__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19689__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19689__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19689__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19689__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19689__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__19696 = phase;
var G__19696__$1 = (((G__19696 instanceof cljs.core.Keyword))?G__19696.fqn:null);
switch (G__19696__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19698 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19699 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19700 = loc;
var G__19701 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19706_19937 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19707_19938 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19708_19939 = true;
var _STAR_print_fn_STAR__temp_val__19709_19940 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19708_19939);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19709_19940);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19684_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19684_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19707_19938);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19706_19937);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19698,G__19699,G__19700,G__19701) : format.call(null,G__19698,G__19699,G__19700,G__19701));

break;
case "macroexpansion":
var G__19718 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19719 = cause_type;
var G__19720 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19721 = loc;
var G__19722 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19718,G__19719,G__19720,G__19721,G__19722) : format.call(null,G__19718,G__19719,G__19720,G__19721,G__19722));

break;
case "compile-syntax-check":
var G__19723 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19724 = cause_type;
var G__19725 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19726 = loc;
var G__19727 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19723,G__19724,G__19725,G__19726,G__19727) : format.call(null,G__19723,G__19724,G__19725,G__19726,G__19727));

break;
case "compilation":
var G__19728 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19729 = cause_type;
var G__19730 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19731 = loc;
var G__19732 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19728,G__19729,G__19730,G__19731,G__19732) : format.call(null,G__19728,G__19729,G__19730,G__19731,G__19732));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19735 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19736 = symbol;
var G__19737 = loc;
var G__19738 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19740_19952 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19741_19953 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19742_19954 = true;
var _STAR_print_fn_STAR__temp_val__19743_19955 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19742_19954);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19743_19955);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19685_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19685_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19741_19953);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19740_19952);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19735,G__19736,G__19737,G__19738) : format.call(null,G__19735,G__19736,G__19737,G__19738));
} else {
var G__19749 = "Execution error%s at %s(%s).\n%s\n";
var G__19750 = cause_type;
var G__19751 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19752 = loc;
var G__19753 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19749,G__19750,G__19751,G__19752,G__19753) : format.call(null,G__19749,G__19750,G__19751,G__19752,G__19753));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19696__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
