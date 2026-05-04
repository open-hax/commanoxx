goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15628 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_15628(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15633 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_15633(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__14183 = coll;
var G__14184 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__14183,G__14184) : shadow.dom.lazy_native_coll_seq.call(null,G__14183,G__14184));
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
var G__14220 = arguments.length;
switch (G__14220) {
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
var G__14224 = arguments.length;
switch (G__14224) {
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
var G__14228 = arguments.length;
switch (G__14228) {
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
var G__14241 = arguments.length;
switch (G__14241) {
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
var G__14269 = arguments.length;
switch (G__14269) {
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
var G__14300 = arguments.length;
switch (G__14300) {
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
}catch (e14326){if((e14326 instanceof Object)){
var e = e14326;
return console.log("didnt support attachEvent",el,e);
} else {
throw e14326;

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
var seq__14359 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__14360 = null;
var count__14361 = (0);
var i__14362 = (0);
while(true){
if((i__14362 < count__14361)){
var el = chunk__14360.cljs$core$IIndexed$_nth$arity$2(null,i__14362);
var handler_15678__$1 = ((function (seq__14359,chunk__14360,count__14361,i__14362,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14359,chunk__14360,count__14361,i__14362,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15678__$1);


var G__15680 = seq__14359;
var G__15681 = chunk__14360;
var G__15682 = count__14361;
var G__15683 = (i__14362 + (1));
seq__14359 = G__15680;
chunk__14360 = G__15681;
count__14361 = G__15682;
i__14362 = G__15683;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__14359);
if(temp__5825__auto__){
var seq__14359__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14359__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14359__$1);
var G__15684 = cljs.core.chunk_rest(seq__14359__$1);
var G__15685 = c__5673__auto__;
var G__15686 = cljs.core.count(c__5673__auto__);
var G__15687 = (0);
seq__14359 = G__15684;
chunk__14360 = G__15685;
count__14361 = G__15686;
i__14362 = G__15687;
continue;
} else {
var el = cljs.core.first(seq__14359__$1);
var handler_15689__$1 = ((function (seq__14359,chunk__14360,count__14361,i__14362,el,seq__14359__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14359,chunk__14360,count__14361,i__14362,el,seq__14359__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15689__$1);


var G__15690 = cljs.core.next(seq__14359__$1);
var G__15691 = null;
var G__15692 = (0);
var G__15693 = (0);
seq__14359 = G__15690;
chunk__14360 = G__15691;
count__14361 = G__15692;
i__14362 = G__15693;
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
var G__14403 = arguments.length;
switch (G__14403) {
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
var seq__14438 = cljs.core.seq(events);
var chunk__14439 = null;
var count__14440 = (0);
var i__14441 = (0);
while(true){
if((i__14441 < count__14440)){
var vec__14454 = chunk__14439.cljs$core$IIndexed$_nth$arity$2(null,i__14441);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14454,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14454,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15714 = seq__14438;
var G__15715 = chunk__14439;
var G__15716 = count__14440;
var G__15717 = (i__14441 + (1));
seq__14438 = G__15714;
chunk__14439 = G__15715;
count__14440 = G__15716;
i__14441 = G__15717;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__14438);
if(temp__5825__auto__){
var seq__14438__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14438__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14438__$1);
var G__15719 = cljs.core.chunk_rest(seq__14438__$1);
var G__15720 = c__5673__auto__;
var G__15721 = cljs.core.count(c__5673__auto__);
var G__15722 = (0);
seq__14438 = G__15719;
chunk__14439 = G__15720;
count__14440 = G__15721;
i__14441 = G__15722;
continue;
} else {
var vec__14457 = cljs.core.first(seq__14438__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14457,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14457,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15723 = cljs.core.next(seq__14438__$1);
var G__15724 = null;
var G__15725 = (0);
var G__15726 = (0);
seq__14438 = G__15723;
chunk__14439 = G__15724;
count__14440 = G__15725;
i__14441 = G__15726;
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
var seq__14464 = cljs.core.seq(styles);
var chunk__14465 = null;
var count__14466 = (0);
var i__14467 = (0);
while(true){
if((i__14467 < count__14466)){
var vec__14480 = chunk__14465.cljs$core$IIndexed$_nth$arity$2(null,i__14467);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14480,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14480,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15732 = seq__14464;
var G__15733 = chunk__14465;
var G__15734 = count__14466;
var G__15735 = (i__14467 + (1));
seq__14464 = G__15732;
chunk__14465 = G__15733;
count__14466 = G__15734;
i__14467 = G__15735;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__14464);
if(temp__5825__auto__){
var seq__14464__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14464__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14464__$1);
var G__15736 = cljs.core.chunk_rest(seq__14464__$1);
var G__15737 = c__5673__auto__;
var G__15738 = cljs.core.count(c__5673__auto__);
var G__15739 = (0);
seq__14464 = G__15736;
chunk__14465 = G__15737;
count__14466 = G__15738;
i__14467 = G__15739;
continue;
} else {
var vec__14483 = cljs.core.first(seq__14464__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14483,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14483,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15744 = cljs.core.next(seq__14464__$1);
var G__15745 = null;
var G__15746 = (0);
var G__15747 = (0);
seq__14464 = G__15744;
chunk__14465 = G__15745;
count__14466 = G__15746;
i__14467 = G__15747;
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
var G__14487_15748 = key;
var G__14487_15749__$1 = (((G__14487_15748 instanceof cljs.core.Keyword))?G__14487_15748.fqn:null);
switch (G__14487_15749__$1) {
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
var ks_15760 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_15760,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_15760,"aria-");
}
})())){
el.setAttribute(ks_15760,value);
} else {
(el[ks_15760] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14535){
var map__14538 = p__14535;
var map__14538__$1 = cljs.core.__destructure_map(map__14538);
var props = map__14538__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14538__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14546 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14546,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14546,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14546,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14559 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14559,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14559;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14577 = arguments.length;
switch (G__14577) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14598){
var vec__14600 = p__14598;
var seq__14601 = cljs.core.seq(vec__14600);
var first__14602 = cljs.core.first(seq__14601);
var seq__14601__$1 = cljs.core.next(seq__14601);
var nn = first__14602;
var first__14602__$1 = cljs.core.first(seq__14601__$1);
var seq__14601__$2 = cljs.core.next(seq__14601__$1);
var np = first__14602__$1;
var nc = seq__14601__$2;
var node = vec__14600;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14608 = nn;
var G__14609 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14608,G__14609) : create_fn.call(null,G__14608,G__14609));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14614 = nn;
var G__14615 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14614,G__14615) : create_fn.call(null,G__14614,G__14615));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14620 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14620,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14620,(1),null);
var seq__14624_15816 = cljs.core.seq(node_children);
var chunk__14626_15817 = null;
var count__14627_15818 = (0);
var i__14628_15819 = (0);
while(true){
if((i__14628_15819 < count__14627_15818)){
var child_struct_15820 = chunk__14626_15817.cljs$core$IIndexed$_nth$arity$2(null,i__14628_15819);
var children_15821 = shadow.dom.dom_node(child_struct_15820);
if(cljs.core.seq_QMARK_(children_15821)){
var seq__14687_15822 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15821));
var chunk__14689_15823 = null;
var count__14690_15824 = (0);
var i__14691_15825 = (0);
while(true){
if((i__14691_15825 < count__14690_15824)){
var child_15831 = chunk__14689_15823.cljs$core$IIndexed$_nth$arity$2(null,i__14691_15825);
if(cljs.core.truth_(child_15831)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15831);


var G__15833 = seq__14687_15822;
var G__15834 = chunk__14689_15823;
var G__15835 = count__14690_15824;
var G__15836 = (i__14691_15825 + (1));
seq__14687_15822 = G__15833;
chunk__14689_15823 = G__15834;
count__14690_15824 = G__15835;
i__14691_15825 = G__15836;
continue;
} else {
var G__15838 = seq__14687_15822;
var G__15839 = chunk__14689_15823;
var G__15840 = count__14690_15824;
var G__15841 = (i__14691_15825 + (1));
seq__14687_15822 = G__15838;
chunk__14689_15823 = G__15839;
count__14690_15824 = G__15840;
i__14691_15825 = G__15841;
continue;
}
} else {
var temp__5825__auto___15843 = cljs.core.seq(seq__14687_15822);
if(temp__5825__auto___15843){
var seq__14687_15844__$1 = temp__5825__auto___15843;
if(cljs.core.chunked_seq_QMARK_(seq__14687_15844__$1)){
var c__5673__auto___15846 = cljs.core.chunk_first(seq__14687_15844__$1);
var G__15847 = cljs.core.chunk_rest(seq__14687_15844__$1);
var G__15848 = c__5673__auto___15846;
var G__15849 = cljs.core.count(c__5673__auto___15846);
var G__15850 = (0);
seq__14687_15822 = G__15847;
chunk__14689_15823 = G__15848;
count__14690_15824 = G__15849;
i__14691_15825 = G__15850;
continue;
} else {
var child_15851 = cljs.core.first(seq__14687_15844__$1);
if(cljs.core.truth_(child_15851)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15851);


var G__15852 = cljs.core.next(seq__14687_15844__$1);
var G__15853 = null;
var G__15854 = (0);
var G__15855 = (0);
seq__14687_15822 = G__15852;
chunk__14689_15823 = G__15853;
count__14690_15824 = G__15854;
i__14691_15825 = G__15855;
continue;
} else {
var G__15856 = cljs.core.next(seq__14687_15844__$1);
var G__15857 = null;
var G__15858 = (0);
var G__15859 = (0);
seq__14687_15822 = G__15856;
chunk__14689_15823 = G__15857;
count__14690_15824 = G__15858;
i__14691_15825 = G__15859;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15821);
}


var G__15860 = seq__14624_15816;
var G__15861 = chunk__14626_15817;
var G__15862 = count__14627_15818;
var G__15863 = (i__14628_15819 + (1));
seq__14624_15816 = G__15860;
chunk__14626_15817 = G__15861;
count__14627_15818 = G__15862;
i__14628_15819 = G__15863;
continue;
} else {
var temp__5825__auto___15864 = cljs.core.seq(seq__14624_15816);
if(temp__5825__auto___15864){
var seq__14624_15865__$1 = temp__5825__auto___15864;
if(cljs.core.chunked_seq_QMARK_(seq__14624_15865__$1)){
var c__5673__auto___15866 = cljs.core.chunk_first(seq__14624_15865__$1);
var G__15867 = cljs.core.chunk_rest(seq__14624_15865__$1);
var G__15868 = c__5673__auto___15866;
var G__15869 = cljs.core.count(c__5673__auto___15866);
var G__15870 = (0);
seq__14624_15816 = G__15867;
chunk__14626_15817 = G__15868;
count__14627_15818 = G__15869;
i__14628_15819 = G__15870;
continue;
} else {
var child_struct_15872 = cljs.core.first(seq__14624_15865__$1);
var children_15873 = shadow.dom.dom_node(child_struct_15872);
if(cljs.core.seq_QMARK_(children_15873)){
var seq__14715_15874 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15873));
var chunk__14717_15875 = null;
var count__14718_15876 = (0);
var i__14719_15877 = (0);
while(true){
if((i__14719_15877 < count__14718_15876)){
var child_15880 = chunk__14717_15875.cljs$core$IIndexed$_nth$arity$2(null,i__14719_15877);
if(cljs.core.truth_(child_15880)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15880);


var G__15881 = seq__14715_15874;
var G__15882 = chunk__14717_15875;
var G__15883 = count__14718_15876;
var G__15884 = (i__14719_15877 + (1));
seq__14715_15874 = G__15881;
chunk__14717_15875 = G__15882;
count__14718_15876 = G__15883;
i__14719_15877 = G__15884;
continue;
} else {
var G__15885 = seq__14715_15874;
var G__15886 = chunk__14717_15875;
var G__15887 = count__14718_15876;
var G__15888 = (i__14719_15877 + (1));
seq__14715_15874 = G__15885;
chunk__14717_15875 = G__15886;
count__14718_15876 = G__15887;
i__14719_15877 = G__15888;
continue;
}
} else {
var temp__5825__auto___15890__$1 = cljs.core.seq(seq__14715_15874);
if(temp__5825__auto___15890__$1){
var seq__14715_15891__$1 = temp__5825__auto___15890__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14715_15891__$1)){
var c__5673__auto___15893 = cljs.core.chunk_first(seq__14715_15891__$1);
var G__15894 = cljs.core.chunk_rest(seq__14715_15891__$1);
var G__15895 = c__5673__auto___15893;
var G__15896 = cljs.core.count(c__5673__auto___15893);
var G__15897 = (0);
seq__14715_15874 = G__15894;
chunk__14717_15875 = G__15895;
count__14718_15876 = G__15896;
i__14719_15877 = G__15897;
continue;
} else {
var child_15898 = cljs.core.first(seq__14715_15891__$1);
if(cljs.core.truth_(child_15898)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15898);


var G__15902 = cljs.core.next(seq__14715_15891__$1);
var G__15903 = null;
var G__15904 = (0);
var G__15905 = (0);
seq__14715_15874 = G__15902;
chunk__14717_15875 = G__15903;
count__14718_15876 = G__15904;
i__14719_15877 = G__15905;
continue;
} else {
var G__15906 = cljs.core.next(seq__14715_15891__$1);
var G__15907 = null;
var G__15908 = (0);
var G__15909 = (0);
seq__14715_15874 = G__15906;
chunk__14717_15875 = G__15907;
count__14718_15876 = G__15908;
i__14719_15877 = G__15909;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15873);
}


var G__15910 = cljs.core.next(seq__14624_15865__$1);
var G__15911 = null;
var G__15912 = (0);
var G__15913 = (0);
seq__14624_15816 = G__15910;
chunk__14626_15817 = G__15911;
count__14627_15818 = G__15912;
i__14628_15819 = G__15913;
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
var seq__14772 = cljs.core.seq(node);
var chunk__14773 = null;
var count__14774 = (0);
var i__14775 = (0);
while(true){
if((i__14775 < count__14774)){
var n = chunk__14773.cljs$core$IIndexed$_nth$arity$2(null,i__14775);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15920 = seq__14772;
var G__15921 = chunk__14773;
var G__15922 = count__14774;
var G__15923 = (i__14775 + (1));
seq__14772 = G__15920;
chunk__14773 = G__15921;
count__14774 = G__15922;
i__14775 = G__15923;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__14772);
if(temp__5825__auto__){
var seq__14772__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14772__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14772__$1);
var G__15928 = cljs.core.chunk_rest(seq__14772__$1);
var G__15929 = c__5673__auto__;
var G__15930 = cljs.core.count(c__5673__auto__);
var G__15931 = (0);
seq__14772 = G__15928;
chunk__14773 = G__15929;
count__14774 = G__15930;
i__14775 = G__15931;
continue;
} else {
var n = cljs.core.first(seq__14772__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15934 = cljs.core.next(seq__14772__$1);
var G__15935 = null;
var G__15936 = (0);
var G__15937 = (0);
seq__14772 = G__15934;
chunk__14773 = G__15935;
count__14774 = G__15936;
i__14775 = G__15937;
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
var G__14798 = arguments.length;
switch (G__14798) {
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
var G__14808 = arguments.length;
switch (G__14808) {
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
var G__14863 = arguments.length;
switch (G__14863) {
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
var len__5876__auto___15960 = arguments.length;
var i__5877__auto___15962 = (0);
while(true){
if((i__5877__auto___15962 < len__5876__auto___15960)){
args__5882__auto__.push((arguments[i__5877__auto___15962]));

var G__15963 = (i__5877__auto___15962 + (1));
i__5877__auto___15962 = G__15963;
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
var seq__14922_15965 = cljs.core.seq(nodes);
var chunk__14923_15966 = null;
var count__14924_15968 = (0);
var i__14925_15969 = (0);
while(true){
if((i__14925_15969 < count__14924_15968)){
var node_15970 = chunk__14923_15966.cljs$core$IIndexed$_nth$arity$2(null,i__14925_15969);
fragment.appendChild(shadow.dom._to_dom(node_15970));


var G__15972 = seq__14922_15965;
var G__15973 = chunk__14923_15966;
var G__15974 = count__14924_15968;
var G__15975 = (i__14925_15969 + (1));
seq__14922_15965 = G__15972;
chunk__14923_15966 = G__15973;
count__14924_15968 = G__15974;
i__14925_15969 = G__15975;
continue;
} else {
var temp__5825__auto___15976 = cljs.core.seq(seq__14922_15965);
if(temp__5825__auto___15976){
var seq__14922_15977__$1 = temp__5825__auto___15976;
if(cljs.core.chunked_seq_QMARK_(seq__14922_15977__$1)){
var c__5673__auto___15978 = cljs.core.chunk_first(seq__14922_15977__$1);
var G__15979 = cljs.core.chunk_rest(seq__14922_15977__$1);
var G__15980 = c__5673__auto___15978;
var G__15981 = cljs.core.count(c__5673__auto___15978);
var G__15982 = (0);
seq__14922_15965 = G__15979;
chunk__14923_15966 = G__15980;
count__14924_15968 = G__15981;
i__14925_15969 = G__15982;
continue;
} else {
var node_15986 = cljs.core.first(seq__14922_15977__$1);
fragment.appendChild(shadow.dom._to_dom(node_15986));


var G__15987 = cljs.core.next(seq__14922_15977__$1);
var G__15988 = null;
var G__15989 = (0);
var G__15990 = (0);
seq__14922_15965 = G__15987;
chunk__14923_15966 = G__15988;
count__14924_15968 = G__15989;
i__14925_15969 = G__15990;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14915){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14915));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14957_15993 = cljs.core.seq(scripts);
var chunk__14958_15994 = null;
var count__14959_15995 = (0);
var i__14960_15996 = (0);
while(true){
if((i__14960_15996 < count__14959_15995)){
var vec__14975_15998 = chunk__14958_15994.cljs$core$IIndexed$_nth$arity$2(null,i__14960_15996);
var script_tag_15999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14975_15998,(0),null);
var script_body_16000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14975_15998,(1),null);
eval(script_body_16000);


var G__16001 = seq__14957_15993;
var G__16002 = chunk__14958_15994;
var G__16003 = count__14959_15995;
var G__16004 = (i__14960_15996 + (1));
seq__14957_15993 = G__16001;
chunk__14958_15994 = G__16002;
count__14959_15995 = G__16003;
i__14960_15996 = G__16004;
continue;
} else {
var temp__5825__auto___16005 = cljs.core.seq(seq__14957_15993);
if(temp__5825__auto___16005){
var seq__14957_16006__$1 = temp__5825__auto___16005;
if(cljs.core.chunked_seq_QMARK_(seq__14957_16006__$1)){
var c__5673__auto___16007 = cljs.core.chunk_first(seq__14957_16006__$1);
var G__16008 = cljs.core.chunk_rest(seq__14957_16006__$1);
var G__16009 = c__5673__auto___16007;
var G__16010 = cljs.core.count(c__5673__auto___16007);
var G__16011 = (0);
seq__14957_15993 = G__16008;
chunk__14958_15994 = G__16009;
count__14959_15995 = G__16010;
i__14960_15996 = G__16011;
continue;
} else {
var vec__14978_16012 = cljs.core.first(seq__14957_16006__$1);
var script_tag_16013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14978_16012,(0),null);
var script_body_16014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14978_16012,(1),null);
eval(script_body_16014);


var G__16018 = cljs.core.next(seq__14957_16006__$1);
var G__16019 = null;
var G__16020 = (0);
var G__16021 = (0);
seq__14957_15993 = G__16018;
chunk__14958_15994 = G__16019;
count__14959_15995 = G__16020;
i__14960_15996 = G__16021;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14982){
var vec__14983 = p__14982;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14983,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14983,(1),null);
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
var G__14999 = arguments.length;
switch (G__14999) {
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
var seq__15016 = cljs.core.seq(style_keys);
var chunk__15017 = null;
var count__15018 = (0);
var i__15019 = (0);
while(true){
if((i__15019 < count__15018)){
var it = chunk__15017.cljs$core$IIndexed$_nth$arity$2(null,i__15019);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16035 = seq__15016;
var G__16036 = chunk__15017;
var G__16037 = count__15018;
var G__16038 = (i__15019 + (1));
seq__15016 = G__16035;
chunk__15017 = G__16036;
count__15018 = G__16037;
i__15019 = G__16038;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__15016);
if(temp__5825__auto__){
var seq__15016__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15016__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__15016__$1);
var G__16039 = cljs.core.chunk_rest(seq__15016__$1);
var G__16040 = c__5673__auto__;
var G__16041 = cljs.core.count(c__5673__auto__);
var G__16042 = (0);
seq__15016 = G__16039;
chunk__15017 = G__16040;
count__15018 = G__16041;
i__15019 = G__16042;
continue;
} else {
var it = cljs.core.first(seq__15016__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16043 = cljs.core.next(seq__15016__$1);
var G__16044 = null;
var G__16045 = (0);
var G__16046 = (0);
seq__15016 = G__16043;
chunk__15017 = G__16044;
count__15018 = G__16045;
i__15019 = G__16046;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k15024,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__15035 = k15024;
var G__15035__$1 = (((G__15035 instanceof cljs.core.Keyword))?G__15035.fqn:null);
switch (G__15035__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15024,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__15052){
var vec__15053 = p__15052;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15053,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15053,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15023){
var self__ = this;
var G__15023__$1 = this;
return (new cljs.core.RecordIter((0),G__15023__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15025,other15026){
var self__ = this;
var this15025__$1 = this;
return (((!((other15026 == null)))) && ((((this15025__$1.constructor === other15026.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15025__$1.x,other15026.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15025__$1.y,other15026.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15025__$1.__extmap,other15026.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k15024){
var self__ = this;
var this__5455__auto____$1 = this;
var G__15084 = k15024;
var G__15084__$1 = (((G__15084 instanceof cljs.core.Keyword))?G__15084.fqn:null);
switch (G__15084__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15024);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__15023){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__15091 = cljs.core.keyword_identical_QMARK_;
var expr__15092 = k__5457__auto__;
if(cljs.core.truth_((pred__15091.cljs$core$IFn$_invoke$arity$2 ? pred__15091.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__15092) : pred__15091.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__15092)))){
return (new shadow.dom.Coordinate(G__15023,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15091.cljs$core$IFn$_invoke$arity$2 ? pred__15091.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__15092) : pred__15091.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__15092)))){
return (new shadow.dom.Coordinate(self__.x,G__15023,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__15023),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__15023){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__15023,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__15032){
var extmap__5490__auto__ = (function (){var G__15108 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15032,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__15032)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15108);
} else {
return G__15108;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__15032),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__15032),null,cljs.core.not_empty(extmap__5490__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k15116,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__15124 = k15116;
var G__15124__$1 = (((G__15124 instanceof cljs.core.Keyword))?G__15124.fqn:null);
switch (G__15124__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15116,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__15129){
var vec__15130 = p__15129;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15130,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15130,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15115){
var self__ = this;
var G__15115__$1 = this;
return (new cljs.core.RecordIter((0),G__15115__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15117,other15118){
var self__ = this;
var this15117__$1 = this;
return (((!((other15118 == null)))) && ((((this15117__$1.constructor === other15118.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15117__$1.w,other15118.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15117__$1.h,other15118.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15117__$1.__extmap,other15118.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k15116){
var self__ = this;
var this__5455__auto____$1 = this;
var G__15152 = k15116;
var G__15152__$1 = (((G__15152 instanceof cljs.core.Keyword))?G__15152.fqn:null);
switch (G__15152__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15116);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__15115){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__15161 = cljs.core.keyword_identical_QMARK_;
var expr__15162 = k__5457__auto__;
if(cljs.core.truth_((pred__15161.cljs$core$IFn$_invoke$arity$2 ? pred__15161.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15162) : pred__15161.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__15162)))){
return (new shadow.dom.Size(G__15115,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15161.cljs$core$IFn$_invoke$arity$2 ? pred__15161.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15162) : pred__15161.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__15162)))){
return (new shadow.dom.Size(self__.w,G__15115,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__15115),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__15115){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15115,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15119){
var extmap__5490__auto__ = (function (){var G__15191 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15119,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15119)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15191);
} else {
return G__15191;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15119),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15119),null,cljs.core.not_empty(extmap__5490__auto__),null));
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
var G__16184 = (i + (1));
var G__16185 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16184;
ret = G__16185;
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15260){
var vec__15261 = p__15260;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15261,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15261,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15266 = arguments.length;
switch (G__15266) {
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
var G__16225 = ps;
var G__16226 = (i + (1));
el__$1 = G__16225;
i = G__16226;
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
var vec__15364 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15364,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15364,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15364,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15371_16237 = cljs.core.seq(props);
var chunk__15373_16238 = null;
var count__15374_16239 = (0);
var i__15375_16240 = (0);
while(true){
if((i__15375_16240 < count__15374_16239)){
var vec__15404_16243 = chunk__15373_16238.cljs$core$IIndexed$_nth$arity$2(null,i__15375_16240);
var k_16244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15404_16243,(0),null);
var v_16245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15404_16243,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_16244);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16244),v_16245);


var G__16246 = seq__15371_16237;
var G__16247 = chunk__15373_16238;
var G__16248 = count__15374_16239;
var G__16249 = (i__15375_16240 + (1));
seq__15371_16237 = G__16246;
chunk__15373_16238 = G__16247;
count__15374_16239 = G__16248;
i__15375_16240 = G__16249;
continue;
} else {
var temp__5825__auto___16250 = cljs.core.seq(seq__15371_16237);
if(temp__5825__auto___16250){
var seq__15371_16251__$1 = temp__5825__auto___16250;
if(cljs.core.chunked_seq_QMARK_(seq__15371_16251__$1)){
var c__5673__auto___16252 = cljs.core.chunk_first(seq__15371_16251__$1);
var G__16253 = cljs.core.chunk_rest(seq__15371_16251__$1);
var G__16254 = c__5673__auto___16252;
var G__16255 = cljs.core.count(c__5673__auto___16252);
var G__16256 = (0);
seq__15371_16237 = G__16253;
chunk__15373_16238 = G__16254;
count__15374_16239 = G__16255;
i__15375_16240 = G__16256;
continue;
} else {
var vec__15412_16257 = cljs.core.first(seq__15371_16251__$1);
var k_16258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15412_16257,(0),null);
var v_16259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15412_16257,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_16258);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16258),v_16259);


var G__16261 = cljs.core.next(seq__15371_16251__$1);
var G__16262 = null;
var G__16263 = (0);
var G__16264 = (0);
seq__15371_16237 = G__16261;
chunk__15373_16238 = G__16262;
count__15374_16239 = G__16263;
i__15375_16240 = G__16264;
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
var vec__15433 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15433,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15433,(1),null);
var seq__15436_16267 = cljs.core.seq(node_children);
var chunk__15438_16268 = null;
var count__15439_16269 = (0);
var i__15440_16270 = (0);
while(true){
if((i__15440_16270 < count__15439_16269)){
var child_struct_16271 = chunk__15438_16268.cljs$core$IIndexed$_nth$arity$2(null,i__15440_16270);
if((!((child_struct_16271 == null)))){
if(typeof child_struct_16271 === 'string'){
var text_16272 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16272)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_16271)));
} else {
var children_16276 = shadow.dom.svg_node(child_struct_16271);
if(cljs.core.seq_QMARK_(children_16276)){
var seq__15503_16277 = cljs.core.seq(children_16276);
var chunk__15505_16278 = null;
var count__15506_16279 = (0);
var i__15507_16280 = (0);
while(true){
if((i__15507_16280 < count__15506_16279)){
var child_16281 = chunk__15505_16278.cljs$core$IIndexed$_nth$arity$2(null,i__15507_16280);
if(cljs.core.truth_(child_16281)){
node.appendChild(child_16281);


var G__16283 = seq__15503_16277;
var G__16284 = chunk__15505_16278;
var G__16285 = count__15506_16279;
var G__16286 = (i__15507_16280 + (1));
seq__15503_16277 = G__16283;
chunk__15505_16278 = G__16284;
count__15506_16279 = G__16285;
i__15507_16280 = G__16286;
continue;
} else {
var G__16288 = seq__15503_16277;
var G__16289 = chunk__15505_16278;
var G__16290 = count__15506_16279;
var G__16291 = (i__15507_16280 + (1));
seq__15503_16277 = G__16288;
chunk__15505_16278 = G__16289;
count__15506_16279 = G__16290;
i__15507_16280 = G__16291;
continue;
}
} else {
var temp__5825__auto___16292 = cljs.core.seq(seq__15503_16277);
if(temp__5825__auto___16292){
var seq__15503_16293__$1 = temp__5825__auto___16292;
if(cljs.core.chunked_seq_QMARK_(seq__15503_16293__$1)){
var c__5673__auto___16294 = cljs.core.chunk_first(seq__15503_16293__$1);
var G__16295 = cljs.core.chunk_rest(seq__15503_16293__$1);
var G__16296 = c__5673__auto___16294;
var G__16297 = cljs.core.count(c__5673__auto___16294);
var G__16298 = (0);
seq__15503_16277 = G__16295;
chunk__15505_16278 = G__16296;
count__15506_16279 = G__16297;
i__15507_16280 = G__16298;
continue;
} else {
var child_16299 = cljs.core.first(seq__15503_16293__$1);
if(cljs.core.truth_(child_16299)){
node.appendChild(child_16299);


var G__16300 = cljs.core.next(seq__15503_16293__$1);
var G__16301 = null;
var G__16302 = (0);
var G__16303 = (0);
seq__15503_16277 = G__16300;
chunk__15505_16278 = G__16301;
count__15506_16279 = G__16302;
i__15507_16280 = G__16303;
continue;
} else {
var G__16304 = cljs.core.next(seq__15503_16293__$1);
var G__16305 = null;
var G__16306 = (0);
var G__16307 = (0);
seq__15503_16277 = G__16304;
chunk__15505_16278 = G__16305;
count__15506_16279 = G__16306;
i__15507_16280 = G__16307;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16276);
}
}


var G__16308 = seq__15436_16267;
var G__16309 = chunk__15438_16268;
var G__16310 = count__15439_16269;
var G__16311 = (i__15440_16270 + (1));
seq__15436_16267 = G__16308;
chunk__15438_16268 = G__16309;
count__15439_16269 = G__16310;
i__15440_16270 = G__16311;
continue;
} else {
var G__16313 = seq__15436_16267;
var G__16314 = chunk__15438_16268;
var G__16315 = count__15439_16269;
var G__16316 = (i__15440_16270 + (1));
seq__15436_16267 = G__16313;
chunk__15438_16268 = G__16314;
count__15439_16269 = G__16315;
i__15440_16270 = G__16316;
continue;
}
} else {
var temp__5825__auto___16317 = cljs.core.seq(seq__15436_16267);
if(temp__5825__auto___16317){
var seq__15436_16318__$1 = temp__5825__auto___16317;
if(cljs.core.chunked_seq_QMARK_(seq__15436_16318__$1)){
var c__5673__auto___16319 = cljs.core.chunk_first(seq__15436_16318__$1);
var G__16320 = cljs.core.chunk_rest(seq__15436_16318__$1);
var G__16321 = c__5673__auto___16319;
var G__16322 = cljs.core.count(c__5673__auto___16319);
var G__16323 = (0);
seq__15436_16267 = G__16320;
chunk__15438_16268 = G__16321;
count__15439_16269 = G__16322;
i__15440_16270 = G__16323;
continue;
} else {
var child_struct_16324 = cljs.core.first(seq__15436_16318__$1);
if((!((child_struct_16324 == null)))){
if(typeof child_struct_16324 === 'string'){
var text_16325 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16325)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_16324)));
} else {
var children_16326 = shadow.dom.svg_node(child_struct_16324);
if(cljs.core.seq_QMARK_(children_16326)){
var seq__15544_16327 = cljs.core.seq(children_16326);
var chunk__15546_16328 = null;
var count__15547_16329 = (0);
var i__15548_16330 = (0);
while(true){
if((i__15548_16330 < count__15547_16329)){
var child_16333 = chunk__15546_16328.cljs$core$IIndexed$_nth$arity$2(null,i__15548_16330);
if(cljs.core.truth_(child_16333)){
node.appendChild(child_16333);


var G__16335 = seq__15544_16327;
var G__16336 = chunk__15546_16328;
var G__16337 = count__15547_16329;
var G__16338 = (i__15548_16330 + (1));
seq__15544_16327 = G__16335;
chunk__15546_16328 = G__16336;
count__15547_16329 = G__16337;
i__15548_16330 = G__16338;
continue;
} else {
var G__16340 = seq__15544_16327;
var G__16341 = chunk__15546_16328;
var G__16342 = count__15547_16329;
var G__16343 = (i__15548_16330 + (1));
seq__15544_16327 = G__16340;
chunk__15546_16328 = G__16341;
count__15547_16329 = G__16342;
i__15548_16330 = G__16343;
continue;
}
} else {
var temp__5825__auto___16344__$1 = cljs.core.seq(seq__15544_16327);
if(temp__5825__auto___16344__$1){
var seq__15544_16345__$1 = temp__5825__auto___16344__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15544_16345__$1)){
var c__5673__auto___16347 = cljs.core.chunk_first(seq__15544_16345__$1);
var G__16348 = cljs.core.chunk_rest(seq__15544_16345__$1);
var G__16349 = c__5673__auto___16347;
var G__16350 = cljs.core.count(c__5673__auto___16347);
var G__16351 = (0);
seq__15544_16327 = G__16348;
chunk__15546_16328 = G__16349;
count__15547_16329 = G__16350;
i__15548_16330 = G__16351;
continue;
} else {
var child_16352 = cljs.core.first(seq__15544_16345__$1);
if(cljs.core.truth_(child_16352)){
node.appendChild(child_16352);


var G__16354 = cljs.core.next(seq__15544_16345__$1);
var G__16355 = null;
var G__16356 = (0);
var G__16357 = (0);
seq__15544_16327 = G__16354;
chunk__15546_16328 = G__16355;
count__15547_16329 = G__16356;
i__15548_16330 = G__16357;
continue;
} else {
var G__16358 = cljs.core.next(seq__15544_16345__$1);
var G__16359 = null;
var G__16360 = (0);
var G__16361 = (0);
seq__15544_16327 = G__16358;
chunk__15546_16328 = G__16359;
count__15547_16329 = G__16360;
i__15548_16330 = G__16361;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16326);
}
}


var G__16363 = cljs.core.next(seq__15436_16318__$1);
var G__16364 = null;
var G__16365 = (0);
var G__16366 = (0);
seq__15436_16267 = G__16363;
chunk__15438_16268 = G__16364;
count__15439_16269 = G__16365;
i__15440_16270 = G__16366;
continue;
} else {
var G__16367 = cljs.core.next(seq__15436_16318__$1);
var G__16368 = null;
var G__16369 = (0);
var G__16370 = (0);
seq__15436_16267 = G__16367;
chunk__15438_16268 = G__16368;
count__15439_16269 = G__16369;
i__15440_16270 = G__16370;
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
var len__5876__auto___16378 = arguments.length;
var i__5877__auto___16379 = (0);
while(true){
if((i__5877__auto___16379 < len__5876__auto___16378)){
args__5882__auto__.push((arguments[i__5877__auto___16379]));

var G__16380 = (i__5877__auto___16379 + (1));
i__5877__auto___16379 = G__16380;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15576){
var G__15577 = cljs.core.first(seq15576);
var seq15576__$1 = cljs.core.next(seq15576);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15577,seq15576__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
