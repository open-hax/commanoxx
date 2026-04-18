goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15498 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15498(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15509 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15509(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__14124 = coll;
var G__14125 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__14124,G__14125) : shadow.dom.lazy_native_coll_seq.call(null,G__14124,G__14125));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5142__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__14181 = arguments.length;
switch (G__14181) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__14221 = arguments.length;
switch (G__14221) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__14238 = arguments.length;
switch (G__14238) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__14275 = arguments.length;
switch (G__14275) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__14334 = arguments.length;
switch (G__14334) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__14431 = arguments.length;
switch (G__14431) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e14484){if((e14484 instanceof Object)){
var e = e14484;
return console.log("didnt support attachEvent",el,e);
} else {
throw e14484;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__14494 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__14495 = null;
var count__14496 = (0);
var i__14497 = (0);
while(true){
if((i__14497 < count__14496)){
var el = chunk__14495.cljs$core$IIndexed$_nth$arity$2(null,i__14497);
var handler_15577__$1 = ((function (seq__14494,chunk__14495,count__14496,i__14497,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14494,chunk__14495,count__14496,i__14497,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15577__$1);


var G__15580 = seq__14494;
var G__15582 = chunk__14495;
var G__15584 = count__14496;
var G__15585 = (i__14497 + (1));
seq__14494 = G__15580;
chunk__14495 = G__15582;
count__14496 = G__15584;
i__14497 = G__15585;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__14494);
if(temp__5825__auto__){
var seq__14494__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14494__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14494__$1);
var G__15587 = cljs.core.chunk_rest(seq__14494__$1);
var G__15588 = c__5673__auto__;
var G__15589 = cljs.core.count(c__5673__auto__);
var G__15590 = (0);
seq__14494 = G__15587;
chunk__14495 = G__15588;
count__14496 = G__15589;
i__14497 = G__15590;
continue;
} else {
var el = cljs.core.first(seq__14494__$1);
var handler_15592__$1 = ((function (seq__14494,chunk__14495,count__14496,i__14497,el,seq__14494__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14494,chunk__14495,count__14496,i__14497,el,seq__14494__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15592__$1);


var G__15596 = cljs.core.next(seq__14494__$1);
var G__15597 = null;
var G__15598 = (0);
var G__15599 = (0);
seq__14494 = G__15596;
chunk__14495 = G__15597;
count__14496 = G__15598;
i__14497 = G__15599;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__14501 = arguments.length;
switch (G__14501) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__14504 = cljs.core.seq(events);
var chunk__14505 = null;
var count__14506 = (0);
var i__14507 = (0);
while(true){
if((i__14507 < count__14506)){
var vec__14517 = chunk__14505.cljs$core$IIndexed$_nth$arity$2(null,i__14507);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14517,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14517,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15609 = seq__14504;
var G__15610 = chunk__14505;
var G__15611 = count__14506;
var G__15612 = (i__14507 + (1));
seq__14504 = G__15609;
chunk__14505 = G__15610;
count__14506 = G__15611;
i__14507 = G__15612;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__14504);
if(temp__5825__auto__){
var seq__14504__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14504__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14504__$1);
var G__15613 = cljs.core.chunk_rest(seq__14504__$1);
var G__15614 = c__5673__auto__;
var G__15615 = cljs.core.count(c__5673__auto__);
var G__15616 = (0);
seq__14504 = G__15613;
chunk__14505 = G__15614;
count__14506 = G__15615;
i__14507 = G__15616;
continue;
} else {
var vec__14521 = cljs.core.first(seq__14504__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14521,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14521,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15617 = cljs.core.next(seq__14504__$1);
var G__15618 = null;
var G__15619 = (0);
var G__15620 = (0);
seq__14504 = G__15617;
chunk__14505 = G__15618;
count__14506 = G__15619;
i__14507 = G__15620;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__14526 = cljs.core.seq(styles);
var chunk__14527 = null;
var count__14528 = (0);
var i__14529 = (0);
while(true){
if((i__14529 < count__14528)){
var vec__14541 = chunk__14527.cljs$core$IIndexed$_nth$arity$2(null,i__14529);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14541,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14541,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15627 = seq__14526;
var G__15628 = chunk__14527;
var G__15629 = count__14528;
var G__15630 = (i__14529 + (1));
seq__14526 = G__15627;
chunk__14527 = G__15628;
count__14528 = G__15629;
i__14529 = G__15630;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__14526);
if(temp__5825__auto__){
var seq__14526__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14526__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14526__$1);
var G__15635 = cljs.core.chunk_rest(seq__14526__$1);
var G__15636 = c__5673__auto__;
var G__15637 = cljs.core.count(c__5673__auto__);
var G__15638 = (0);
seq__14526 = G__15635;
chunk__14527 = G__15636;
count__14528 = G__15637;
i__14529 = G__15638;
continue;
} else {
var vec__14548 = cljs.core.first(seq__14526__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14548,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14548,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15643 = cljs.core.next(seq__14526__$1);
var G__15644 = null;
var G__15645 = (0);
var G__15646 = (0);
seq__14526 = G__15643;
chunk__14527 = G__15644;
count__14528 = G__15645;
i__14529 = G__15646;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__14563_15648 = key;
var G__14563_15649__$1 = (((G__14563_15648 instanceof cljs.core.Keyword))?G__14563_15648.fqn:null);
switch (G__14563_15649__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15657 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_15657,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_15657,"aria-");
}
})())){
el.setAttribute(ks_15657,value);
} else {
(el[ks_15657] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14609){
var map__14610 = p__14609;
var map__14610__$1 = cljs.core.__destructure_map(map__14610);
var props = map__14610__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14610__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14611 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14611,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14611,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14611,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14617 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14617,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14617;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14621 = arguments.length;
switch (G__14621) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14632){
var vec__14633 = p__14632;
var seq__14634 = cljs.core.seq(vec__14633);
var first__14635 = cljs.core.first(seq__14634);
var seq__14634__$1 = cljs.core.next(seq__14634);
var nn = first__14635;
var first__14635__$1 = cljs.core.first(seq__14634__$1);
var seq__14634__$2 = cljs.core.next(seq__14634__$1);
var np = first__14635__$1;
var nc = seq__14634__$2;
var node = vec__14633;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14640 = nn;
var G__14641 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14640,G__14641) : create_fn.call(null,G__14640,G__14641));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14642 = nn;
var G__14643 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14642,G__14643) : create_fn.call(null,G__14642,G__14643));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14649 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14649,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14649,(1),null);
var seq__14652_15702 = cljs.core.seq(node_children);
var chunk__14653_15703 = null;
var count__14654_15704 = (0);
var i__14655_15705 = (0);
while(true){
if((i__14655_15705 < count__14654_15704)){
var child_struct_15707 = chunk__14653_15703.cljs$core$IIndexed$_nth$arity$2(null,i__14655_15705);
var children_15709 = shadow.dom.dom_node(child_struct_15707);
if(cljs.core.seq_QMARK_(children_15709)){
var seq__14712_15710 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15709));
var chunk__14714_15711 = null;
var count__14715_15712 = (0);
var i__14716_15713 = (0);
while(true){
if((i__14716_15713 < count__14715_15712)){
var child_15715 = chunk__14714_15711.cljs$core$IIndexed$_nth$arity$2(null,i__14716_15713);
if(cljs.core.truth_(child_15715)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15715);


var G__15716 = seq__14712_15710;
var G__15717 = chunk__14714_15711;
var G__15718 = count__14715_15712;
var G__15719 = (i__14716_15713 + (1));
seq__14712_15710 = G__15716;
chunk__14714_15711 = G__15717;
count__14715_15712 = G__15718;
i__14716_15713 = G__15719;
continue;
} else {
var G__15721 = seq__14712_15710;
var G__15722 = chunk__14714_15711;
var G__15723 = count__14715_15712;
var G__15724 = (i__14716_15713 + (1));
seq__14712_15710 = G__15721;
chunk__14714_15711 = G__15722;
count__14715_15712 = G__15723;
i__14716_15713 = G__15724;
continue;
}
} else {
var temp__5825__auto___15725 = cljs.core.seq(seq__14712_15710);
if(temp__5825__auto___15725){
var seq__14712_15726__$1 = temp__5825__auto___15725;
if(cljs.core.chunked_seq_QMARK_(seq__14712_15726__$1)){
var c__5673__auto___15727 = cljs.core.chunk_first(seq__14712_15726__$1);
var G__15728 = cljs.core.chunk_rest(seq__14712_15726__$1);
var G__15729 = c__5673__auto___15727;
var G__15730 = cljs.core.count(c__5673__auto___15727);
var G__15731 = (0);
seq__14712_15710 = G__15728;
chunk__14714_15711 = G__15729;
count__14715_15712 = G__15730;
i__14716_15713 = G__15731;
continue;
} else {
var child_15733 = cljs.core.first(seq__14712_15726__$1);
if(cljs.core.truth_(child_15733)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15733);


var G__15736 = cljs.core.next(seq__14712_15726__$1);
var G__15737 = null;
var G__15738 = (0);
var G__15739 = (0);
seq__14712_15710 = G__15736;
chunk__14714_15711 = G__15737;
count__14715_15712 = G__15738;
i__14716_15713 = G__15739;
continue;
} else {
var G__15741 = cljs.core.next(seq__14712_15726__$1);
var G__15742 = null;
var G__15743 = (0);
var G__15744 = (0);
seq__14712_15710 = G__15741;
chunk__14714_15711 = G__15742;
count__14715_15712 = G__15743;
i__14716_15713 = G__15744;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15709);
}


var G__15745 = seq__14652_15702;
var G__15746 = chunk__14653_15703;
var G__15747 = count__14654_15704;
var G__15748 = (i__14655_15705 + (1));
seq__14652_15702 = G__15745;
chunk__14653_15703 = G__15746;
count__14654_15704 = G__15747;
i__14655_15705 = G__15748;
continue;
} else {
var temp__5825__auto___15750 = cljs.core.seq(seq__14652_15702);
if(temp__5825__auto___15750){
var seq__14652_15752__$1 = temp__5825__auto___15750;
if(cljs.core.chunked_seq_QMARK_(seq__14652_15752__$1)){
var c__5673__auto___15754 = cljs.core.chunk_first(seq__14652_15752__$1);
var G__15755 = cljs.core.chunk_rest(seq__14652_15752__$1);
var G__15756 = c__5673__auto___15754;
var G__15757 = cljs.core.count(c__5673__auto___15754);
var G__15758 = (0);
seq__14652_15702 = G__15755;
chunk__14653_15703 = G__15756;
count__14654_15704 = G__15757;
i__14655_15705 = G__15758;
continue;
} else {
var child_struct_15759 = cljs.core.first(seq__14652_15752__$1);
var children_15760 = shadow.dom.dom_node(child_struct_15759);
if(cljs.core.seq_QMARK_(children_15760)){
var seq__14729_15761 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15760));
var chunk__14731_15762 = null;
var count__14732_15763 = (0);
var i__14733_15764 = (0);
while(true){
if((i__14733_15764 < count__14732_15763)){
var child_15770 = chunk__14731_15762.cljs$core$IIndexed$_nth$arity$2(null,i__14733_15764);
if(cljs.core.truth_(child_15770)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15770);


var G__15771 = seq__14729_15761;
var G__15772 = chunk__14731_15762;
var G__15773 = count__14732_15763;
var G__15774 = (i__14733_15764 + (1));
seq__14729_15761 = G__15771;
chunk__14731_15762 = G__15772;
count__14732_15763 = G__15773;
i__14733_15764 = G__15774;
continue;
} else {
var G__15775 = seq__14729_15761;
var G__15776 = chunk__14731_15762;
var G__15777 = count__14732_15763;
var G__15778 = (i__14733_15764 + (1));
seq__14729_15761 = G__15775;
chunk__14731_15762 = G__15776;
count__14732_15763 = G__15777;
i__14733_15764 = G__15778;
continue;
}
} else {
var temp__5825__auto___15780__$1 = cljs.core.seq(seq__14729_15761);
if(temp__5825__auto___15780__$1){
var seq__14729_15781__$1 = temp__5825__auto___15780__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14729_15781__$1)){
var c__5673__auto___15782 = cljs.core.chunk_first(seq__14729_15781__$1);
var G__15783 = cljs.core.chunk_rest(seq__14729_15781__$1);
var G__15784 = c__5673__auto___15782;
var G__15785 = cljs.core.count(c__5673__auto___15782);
var G__15786 = (0);
seq__14729_15761 = G__15783;
chunk__14731_15762 = G__15784;
count__14732_15763 = G__15785;
i__14733_15764 = G__15786;
continue;
} else {
var child_15787 = cljs.core.first(seq__14729_15781__$1);
if(cljs.core.truth_(child_15787)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15787);


var G__15788 = cljs.core.next(seq__14729_15781__$1);
var G__15789 = null;
var G__15790 = (0);
var G__15791 = (0);
seq__14729_15761 = G__15788;
chunk__14731_15762 = G__15789;
count__14732_15763 = G__15790;
i__14733_15764 = G__15791;
continue;
} else {
var G__15792 = cljs.core.next(seq__14729_15781__$1);
var G__15793 = null;
var G__15794 = (0);
var G__15795 = (0);
seq__14729_15761 = G__15792;
chunk__14731_15762 = G__15793;
count__14732_15763 = G__15794;
i__14733_15764 = G__15795;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15760);
}


var G__15796 = cljs.core.next(seq__14652_15752__$1);
var G__15797 = null;
var G__15798 = (0);
var G__15799 = (0);
seq__14652_15702 = G__15796;
chunk__14653_15703 = G__15797;
count__14654_15704 = G__15798;
i__14655_15705 = G__15799;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__14747 = cljs.core.seq(node);
var chunk__14748 = null;
var count__14749 = (0);
var i__14750 = (0);
while(true){
if((i__14750 < count__14749)){
var n = chunk__14748.cljs$core$IIndexed$_nth$arity$2(null,i__14750);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15809 = seq__14747;
var G__15810 = chunk__14748;
var G__15811 = count__14749;
var G__15812 = (i__14750 + (1));
seq__14747 = G__15809;
chunk__14748 = G__15810;
count__14749 = G__15811;
i__14750 = G__15812;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__14747);
if(temp__5825__auto__){
var seq__14747__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14747__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14747__$1);
var G__15814 = cljs.core.chunk_rest(seq__14747__$1);
var G__15815 = c__5673__auto__;
var G__15816 = cljs.core.count(c__5673__auto__);
var G__15817 = (0);
seq__14747 = G__15814;
chunk__14748 = G__15815;
count__14749 = G__15816;
i__14750 = G__15817;
continue;
} else {
var n = cljs.core.first(seq__14747__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15818 = cljs.core.next(seq__14747__$1);
var G__15819 = null;
var G__15820 = (0);
var G__15821 = (0);
seq__14747 = G__15818;
chunk__14748 = G__15819;
count__14749 = G__15820;
i__14750 = G__15821;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14761 = arguments.length;
switch (G__14761) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14770 = arguments.length;
switch (G__14770) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14783 = arguments.length;
switch (G__14783) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5142__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5882__auto__ = [];
var len__5876__auto___15842 = arguments.length;
var i__5877__auto___15843 = (0);
while(true){
if((i__5877__auto___15843 < len__5876__auto___15842)){
args__5882__auto__.push((arguments[i__5877__auto___15843]));

var G__15844 = (i__5877__auto___15843 + (1));
i__5877__auto___15843 = G__15844;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14802_15845 = cljs.core.seq(nodes);
var chunk__14803_15846 = null;
var count__14804_15847 = (0);
var i__14805_15848 = (0);
while(true){
if((i__14805_15848 < count__14804_15847)){
var node_15849 = chunk__14803_15846.cljs$core$IIndexed$_nth$arity$2(null,i__14805_15848);
fragment.appendChild(shadow.dom._to_dom(node_15849));


var G__15850 = seq__14802_15845;
var G__15851 = chunk__14803_15846;
var G__15852 = count__14804_15847;
var G__15853 = (i__14805_15848 + (1));
seq__14802_15845 = G__15850;
chunk__14803_15846 = G__15851;
count__14804_15847 = G__15852;
i__14805_15848 = G__15853;
continue;
} else {
var temp__5825__auto___15854 = cljs.core.seq(seq__14802_15845);
if(temp__5825__auto___15854){
var seq__14802_15855__$1 = temp__5825__auto___15854;
if(cljs.core.chunked_seq_QMARK_(seq__14802_15855__$1)){
var c__5673__auto___15856 = cljs.core.chunk_first(seq__14802_15855__$1);
var G__15857 = cljs.core.chunk_rest(seq__14802_15855__$1);
var G__15858 = c__5673__auto___15856;
var G__15859 = cljs.core.count(c__5673__auto___15856);
var G__15860 = (0);
seq__14802_15845 = G__15857;
chunk__14803_15846 = G__15858;
count__14804_15847 = G__15859;
i__14805_15848 = G__15860;
continue;
} else {
var node_15863 = cljs.core.first(seq__14802_15855__$1);
fragment.appendChild(shadow.dom._to_dom(node_15863));


var G__15864 = cljs.core.next(seq__14802_15855__$1);
var G__15865 = null;
var G__15866 = (0);
var G__15867 = (0);
seq__14802_15845 = G__15864;
chunk__14803_15846 = G__15865;
count__14804_15847 = G__15866;
i__14805_15848 = G__15867;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14799){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14799));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14819_15871 = cljs.core.seq(scripts);
var chunk__14820_15872 = null;
var count__14821_15873 = (0);
var i__14822_15874 = (0);
while(true){
if((i__14822_15874 < count__14821_15873)){
var vec__14833_15881 = chunk__14820_15872.cljs$core$IIndexed$_nth$arity$2(null,i__14822_15874);
var script_tag_15882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14833_15881,(0),null);
var script_body_15883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14833_15881,(1),null);
eval(script_body_15883);


var G__15891 = seq__14819_15871;
var G__15892 = chunk__14820_15872;
var G__15893 = count__14821_15873;
var G__15894 = (i__14822_15874 + (1));
seq__14819_15871 = G__15891;
chunk__14820_15872 = G__15892;
count__14821_15873 = G__15893;
i__14822_15874 = G__15894;
continue;
} else {
var temp__5825__auto___15899 = cljs.core.seq(seq__14819_15871);
if(temp__5825__auto___15899){
var seq__14819_15900__$1 = temp__5825__auto___15899;
if(cljs.core.chunked_seq_QMARK_(seq__14819_15900__$1)){
var c__5673__auto___15901 = cljs.core.chunk_first(seq__14819_15900__$1);
var G__15902 = cljs.core.chunk_rest(seq__14819_15900__$1);
var G__15903 = c__5673__auto___15901;
var G__15904 = cljs.core.count(c__5673__auto___15901);
var G__15905 = (0);
seq__14819_15871 = G__15902;
chunk__14820_15872 = G__15903;
count__14821_15873 = G__15904;
i__14822_15874 = G__15905;
continue;
} else {
var vec__14840_15906 = cljs.core.first(seq__14819_15900__$1);
var script_tag_15907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14840_15906,(0),null);
var script_body_15908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14840_15906,(1),null);
eval(script_body_15908);


var G__15913 = cljs.core.next(seq__14819_15900__$1);
var G__15914 = null;
var G__15915 = (0);
var G__15916 = (0);
seq__14819_15871 = G__15913;
chunk__14820_15872 = G__15914;
count__14821_15873 = G__15915;
i__14822_15874 = G__15916;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14847){
var vec__14848 = p__14847;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14848,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14848,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14857 = arguments.length;
switch (G__14857) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14869 = cljs.core.seq(style_keys);
var chunk__14870 = null;
var count__14871 = (0);
var i__14872 = (0);
while(true){
if((i__14872 < count__14871)){
var it = chunk__14870.cljs$core$IIndexed$_nth$arity$2(null,i__14872);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15924 = seq__14869;
var G__15925 = chunk__14870;
var G__15926 = count__14871;
var G__15927 = (i__14872 + (1));
seq__14869 = G__15924;
chunk__14870 = G__15925;
count__14871 = G__15926;
i__14872 = G__15927;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__14869);
if(temp__5825__auto__){
var seq__14869__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14869__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14869__$1);
var G__15929 = cljs.core.chunk_rest(seq__14869__$1);
var G__15930 = c__5673__auto__;
var G__15931 = cljs.core.count(c__5673__auto__);
var G__15932 = (0);
seq__14869 = G__15929;
chunk__14870 = G__15930;
count__14871 = G__15931;
i__14872 = G__15932;
continue;
} else {
var it = cljs.core.first(seq__14869__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15933 = cljs.core.next(seq__14869__$1);
var G__15934 = null;
var G__15935 = (0);
var G__15936 = (0);
seq__14869 = G__15933;
chunk__14870 = G__15934;
count__14871 = G__15935;
i__14872 = G__15936;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k14878,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__14891 = k14878;
var G__14891__$1 = (((G__14891 instanceof cljs.core.Keyword))?G__14891.fqn:null);
switch (G__14891__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14878,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__14895){
var vec__14896 = p__14895;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14896,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14896,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14877){
var self__ = this;
var G__14877__$1 = this;
return (new cljs.core.RecordIter((0),G__14877__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14879,other14880){
var self__ = this;
var this14879__$1 = this;
return (((!((other14880 == null)))) && ((((this14879__$1.constructor === other14880.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14879__$1.x,other14880.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14879__$1.y,other14880.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14879__$1.__extmap,other14880.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k14878){
var self__ = this;
var this__5455__auto____$1 = this;
var G__14920 = k14878;
var G__14920__$1 = (((G__14920 instanceof cljs.core.Keyword))?G__14920.fqn:null);
switch (G__14920__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14878);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__14877){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__14922 = cljs.core.keyword_identical_QMARK_;
var expr__14923 = k__5457__auto__;
if(cljs.core.truth_((pred__14922.cljs$core$IFn$_invoke$arity$2 ? pred__14922.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14923) : pred__14922.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__14923)))){
return (new shadow.dom.Coordinate(G__14877,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14922.cljs$core$IFn$_invoke$arity$2 ? pred__14922.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14923) : pred__14922.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__14923)))){
return (new shadow.dom.Coordinate(self__.x,G__14877,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__14877),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__14877){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14877,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14882){
var extmap__5490__auto__ = (function (){var G__14937 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14882,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14882)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14937);
} else {
return G__14937;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14882),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14882),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k14944,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__14953 = k14944;
var G__14953__$1 = (((G__14953 instanceof cljs.core.Keyword))?G__14953.fqn:null);
switch (G__14953__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14944,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__14959){
var vec__14961 = p__14959;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14961,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14961,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Size{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14943){
var self__ = this;
var G__14943__$1 = this;
return (new cljs.core.RecordIter((0),G__14943__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14945,other14946){
var self__ = this;
var this14945__$1 = this;
return (((!((other14946 == null)))) && ((((this14945__$1.constructor === other14946.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14945__$1.w,other14946.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14945__$1.h,other14946.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14945__$1.__extmap,other14946.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k14944){
var self__ = this;
var this__5455__auto____$1 = this;
var G__14973 = k14944;
var G__14973__$1 = (((G__14973 instanceof cljs.core.Keyword))?G__14973.fqn:null);
switch (G__14973__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14944);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__14943){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__14975 = cljs.core.keyword_identical_QMARK_;
var expr__14976 = k__5457__auto__;
if(cljs.core.truth_((pred__14975.cljs$core$IFn$_invoke$arity$2 ? pred__14975.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__14976) : pred__14975.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__14976)))){
return (new shadow.dom.Size(G__14943,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14975.cljs$core$IFn$_invoke$arity$2 ? pred__14975.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__14976) : pred__14975.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__14976)))){
return (new shadow.dom.Size(self__.w,G__14943,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__14943),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__14943){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__14943,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__14949){
var extmap__5490__auto__ = (function (){var G__14993 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14949,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__14949)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14993);
} else {
return G__14993;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__14949),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__14949),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5738__auto__ = opts;
var l__5739__auto__ = a__5738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5739__auto__)){
var G__16050 = (i + (1));
var G__16051 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16050;
ret = G__16051;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15032){
var vec__15034 = p__15032;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15034,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15034,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15046 = arguments.length;
switch (G__15046) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16068 = ps;
var G__16069 = (i + (1));
el__$1 = G__16068;
i = G__16069;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__15120 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15120,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15120,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15120,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15132_16084 = cljs.core.seq(props);
var chunk__15133_16085 = null;
var count__15134_16086 = (0);
var i__15135_16087 = (0);
while(true){
if((i__15135_16087 < count__15134_16086)){
var vec__15169_16088 = chunk__15133_16085.cljs$core$IIndexed$_nth$arity$2(null,i__15135_16087);
var k_16089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15169_16088,(0),null);
var v_16090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15169_16088,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_16089);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16089),v_16090);


var G__16097 = seq__15132_16084;
var G__16098 = chunk__15133_16085;
var G__16099 = count__15134_16086;
var G__16100 = (i__15135_16087 + (1));
seq__15132_16084 = G__16097;
chunk__15133_16085 = G__16098;
count__15134_16086 = G__16099;
i__15135_16087 = G__16100;
continue;
} else {
var temp__5825__auto___16101 = cljs.core.seq(seq__15132_16084);
if(temp__5825__auto___16101){
var seq__15132_16102__$1 = temp__5825__auto___16101;
if(cljs.core.chunked_seq_QMARK_(seq__15132_16102__$1)){
var c__5673__auto___16105 = cljs.core.chunk_first(seq__15132_16102__$1);
var G__16107 = cljs.core.chunk_rest(seq__15132_16102__$1);
var G__16108 = c__5673__auto___16105;
var G__16109 = cljs.core.count(c__5673__auto___16105);
var G__16110 = (0);
seq__15132_16084 = G__16107;
chunk__15133_16085 = G__16108;
count__15134_16086 = G__16109;
i__15135_16087 = G__16110;
continue;
} else {
var vec__15177_16114 = cljs.core.first(seq__15132_16102__$1);
var k_16115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15177_16114,(0),null);
var v_16116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15177_16114,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_16115);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16115),v_16116);


var G__16119 = cljs.core.next(seq__15132_16102__$1);
var G__16120 = null;
var G__16121 = (0);
var G__16122 = (0);
seq__15132_16084 = G__16119;
chunk__15133_16085 = G__16120;
count__15134_16086 = G__16121;
i__15135_16087 = G__16122;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15199 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15199,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15199,(1),null);
var seq__15204_16127 = cljs.core.seq(node_children);
var chunk__15206_16128 = null;
var count__15207_16129 = (0);
var i__15208_16130 = (0);
while(true){
if((i__15208_16130 < count__15207_16129)){
var child_struct_16132 = chunk__15206_16128.cljs$core$IIndexed$_nth$arity$2(null,i__15208_16130);
if((!((child_struct_16132 == null)))){
if(typeof child_struct_16132 === 'string'){
var text_16133 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16133)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_16132)));
} else {
var children_16134 = shadow.dom.svg_node(child_struct_16132);
if(cljs.core.seq_QMARK_(children_16134)){
var seq__15325_16136 = cljs.core.seq(children_16134);
var chunk__15327_16137 = null;
var count__15328_16138 = (0);
var i__15329_16139 = (0);
while(true){
if((i__15329_16139 < count__15328_16138)){
var child_16148 = chunk__15327_16137.cljs$core$IIndexed$_nth$arity$2(null,i__15329_16139);
if(cljs.core.truth_(child_16148)){
node.appendChild(child_16148);


var G__16153 = seq__15325_16136;
var G__16155 = chunk__15327_16137;
var G__16156 = count__15328_16138;
var G__16157 = (i__15329_16139 + (1));
seq__15325_16136 = G__16153;
chunk__15327_16137 = G__16155;
count__15328_16138 = G__16156;
i__15329_16139 = G__16157;
continue;
} else {
var G__16158 = seq__15325_16136;
var G__16159 = chunk__15327_16137;
var G__16160 = count__15328_16138;
var G__16161 = (i__15329_16139 + (1));
seq__15325_16136 = G__16158;
chunk__15327_16137 = G__16159;
count__15328_16138 = G__16160;
i__15329_16139 = G__16161;
continue;
}
} else {
var temp__5825__auto___16163 = cljs.core.seq(seq__15325_16136);
if(temp__5825__auto___16163){
var seq__15325_16167__$1 = temp__5825__auto___16163;
if(cljs.core.chunked_seq_QMARK_(seq__15325_16167__$1)){
var c__5673__auto___16171 = cljs.core.chunk_first(seq__15325_16167__$1);
var G__16173 = cljs.core.chunk_rest(seq__15325_16167__$1);
var G__16174 = c__5673__auto___16171;
var G__16175 = cljs.core.count(c__5673__auto___16171);
var G__16176 = (0);
seq__15325_16136 = G__16173;
chunk__15327_16137 = G__16174;
count__15328_16138 = G__16175;
i__15329_16139 = G__16176;
continue;
} else {
var child_16181 = cljs.core.first(seq__15325_16167__$1);
if(cljs.core.truth_(child_16181)){
node.appendChild(child_16181);


var G__16185 = cljs.core.next(seq__15325_16167__$1);
var G__16186 = null;
var G__16187 = (0);
var G__16188 = (0);
seq__15325_16136 = G__16185;
chunk__15327_16137 = G__16186;
count__15328_16138 = G__16187;
i__15329_16139 = G__16188;
continue;
} else {
var G__16189 = cljs.core.next(seq__15325_16167__$1);
var G__16190 = null;
var G__16191 = (0);
var G__16192 = (0);
seq__15325_16136 = G__16189;
chunk__15327_16137 = G__16190;
count__15328_16138 = G__16191;
i__15329_16139 = G__16192;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16134);
}
}


var G__16197 = seq__15204_16127;
var G__16198 = chunk__15206_16128;
var G__16199 = count__15207_16129;
var G__16200 = (i__15208_16130 + (1));
seq__15204_16127 = G__16197;
chunk__15206_16128 = G__16198;
count__15207_16129 = G__16199;
i__15208_16130 = G__16200;
continue;
} else {
var G__16203 = seq__15204_16127;
var G__16204 = chunk__15206_16128;
var G__16205 = count__15207_16129;
var G__16206 = (i__15208_16130 + (1));
seq__15204_16127 = G__16203;
chunk__15206_16128 = G__16204;
count__15207_16129 = G__16205;
i__15208_16130 = G__16206;
continue;
}
} else {
var temp__5825__auto___16207 = cljs.core.seq(seq__15204_16127);
if(temp__5825__auto___16207){
var seq__15204_16212__$1 = temp__5825__auto___16207;
if(cljs.core.chunked_seq_QMARK_(seq__15204_16212__$1)){
var c__5673__auto___16213 = cljs.core.chunk_first(seq__15204_16212__$1);
var G__16214 = cljs.core.chunk_rest(seq__15204_16212__$1);
var G__16215 = c__5673__auto___16213;
var G__16216 = cljs.core.count(c__5673__auto___16213);
var G__16217 = (0);
seq__15204_16127 = G__16214;
chunk__15206_16128 = G__16215;
count__15207_16129 = G__16216;
i__15208_16130 = G__16217;
continue;
} else {
var child_struct_16219 = cljs.core.first(seq__15204_16212__$1);
if((!((child_struct_16219 == null)))){
if(typeof child_struct_16219 === 'string'){
var text_16221 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16221)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_16219)));
} else {
var children_16224 = shadow.dom.svg_node(child_struct_16219);
if(cljs.core.seq_QMARK_(children_16224)){
var seq__15367_16226 = cljs.core.seq(children_16224);
var chunk__15369_16227 = null;
var count__15370_16228 = (0);
var i__15371_16229 = (0);
while(true){
if((i__15371_16229 < count__15370_16228)){
var child_16231 = chunk__15369_16227.cljs$core$IIndexed$_nth$arity$2(null,i__15371_16229);
if(cljs.core.truth_(child_16231)){
node.appendChild(child_16231);


var G__16235 = seq__15367_16226;
var G__16236 = chunk__15369_16227;
var G__16237 = count__15370_16228;
var G__16238 = (i__15371_16229 + (1));
seq__15367_16226 = G__16235;
chunk__15369_16227 = G__16236;
count__15370_16228 = G__16237;
i__15371_16229 = G__16238;
continue;
} else {
var G__16242 = seq__15367_16226;
var G__16243 = chunk__15369_16227;
var G__16244 = count__15370_16228;
var G__16245 = (i__15371_16229 + (1));
seq__15367_16226 = G__16242;
chunk__15369_16227 = G__16243;
count__15370_16228 = G__16244;
i__15371_16229 = G__16245;
continue;
}
} else {
var temp__5825__auto___16247__$1 = cljs.core.seq(seq__15367_16226);
if(temp__5825__auto___16247__$1){
var seq__15367_16249__$1 = temp__5825__auto___16247__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15367_16249__$1)){
var c__5673__auto___16250 = cljs.core.chunk_first(seq__15367_16249__$1);
var G__16251 = cljs.core.chunk_rest(seq__15367_16249__$1);
var G__16252 = c__5673__auto___16250;
var G__16253 = cljs.core.count(c__5673__auto___16250);
var G__16254 = (0);
seq__15367_16226 = G__16251;
chunk__15369_16227 = G__16252;
count__15370_16228 = G__16253;
i__15371_16229 = G__16254;
continue;
} else {
var child_16255 = cljs.core.first(seq__15367_16249__$1);
if(cljs.core.truth_(child_16255)){
node.appendChild(child_16255);


var G__16258 = cljs.core.next(seq__15367_16249__$1);
var G__16259 = null;
var G__16260 = (0);
var G__16261 = (0);
seq__15367_16226 = G__16258;
chunk__15369_16227 = G__16259;
count__15370_16228 = G__16260;
i__15371_16229 = G__16261;
continue;
} else {
var G__16265 = cljs.core.next(seq__15367_16249__$1);
var G__16266 = null;
var G__16267 = (0);
var G__16268 = (0);
seq__15367_16226 = G__16265;
chunk__15369_16227 = G__16266;
count__15370_16228 = G__16267;
i__15371_16229 = G__16268;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16224);
}
}


var G__16269 = cljs.core.next(seq__15204_16212__$1);
var G__16270 = null;
var G__16271 = (0);
var G__16272 = (0);
seq__15204_16127 = G__16269;
chunk__15206_16128 = G__16270;
count__15207_16129 = G__16271;
i__15208_16130 = G__16272;
continue;
} else {
var G__16273 = cljs.core.next(seq__15204_16212__$1);
var G__16274 = null;
var G__16275 = (0);
var G__16276 = (0);
seq__15204_16127 = G__16273;
chunk__15206_16128 = G__16274;
count__15207_16129 = G__16275;
i__15208_16130 = G__16276;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16291 = arguments.length;
var i__5877__auto___16292 = (0);
while(true){
if((i__5877__auto___16292 < len__5876__auto___16291)){
args__5882__auto__.push((arguments[i__5877__auto___16292]));

var G__16293 = (i__5877__auto___16292 + (1));
i__5877__auto___16292 = G__16293;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15417){
var G__15418 = cljs.core.first(seq15417);
var seq15417__$1 = cljs.core.next(seq15417);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15418,seq15417__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
