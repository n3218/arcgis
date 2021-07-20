(this["webpackJsonpfirst-example"]=this["webpackJsonpfirst-example"]||[]).push([[83],{719:function(t,e,i){"use strict";function a(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function r(t,e){return"number"==typeof t?t:t&&t.stops&&t.stops.length?function(t){for(var e=0,i=0,a=0;a<t.length;a++){var r=t[a].size;"number"==typeof r&&(e+=r,i++)}return e/i}(t.stops):e}function n(t,e){if(!e)return t;var i=e.filter((function(t){return"size"===t.type})).map((function(e){var i=e.maxSize,a=e.minSize;return(r(i,t)+r(a,t))/2})),a=0,n=i.length;if(0===n)return t;for(var c=0;c<n;c++)a+=i[c];var s=Math.floor(a/n);return Math.max(s,t)}function c(t){var e=t&&t.renderer,i="touch"===(t&&t.event&&t.event.pointerType)?9:6;if(!e)return i;var r="visualVariables"in e?n(i,e.visualVariables):i;if("simple"===e.type)return a(r,e.symbol);if("unique-value"===e.type){var c=r;return e.uniqueValueInfos.forEach((function(t){c=a(c,t.symbol)})),c}if("class-breaks"===e.type){var s=r;return e.classBreakInfos.forEach((function(t){s=a(s,t.symbol)})),s}return e.type,r}i.d(e,"a",(function(){return c}))},734:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return o}));i(76);var a=i(4),r=i(61),n=i(719),c=i(56);function s(t,e,i){var n,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new c.a;if("2d"===i.type)n=e*i.resolution;else if("3d"===i.type){var o=i.overlayPixelSizeInMapUnits(t),h=i.basemapSpatialReference;n=Object(a.k)(h)&&!h.equals(i.spatialReference)?Object(r.d)(h)/Object(r.d)(i.spatialReference):e*o}var l=t.x-n,u=t.y-n,p=t.x+n,v=t.y+n,b=i.spatialReference;return s.xmin=Math.min(l,p),s.ymin=Math.min(u,v),s.xmax=Math.max(l,p),s.ymax=Math.max(u,v),s.spatialReference=b,s}function o(t,e,i){var r=i.toMap(t);return!Object(a.j)(r)&&s(r,Object(n.a)(),i,h).intersects(e)}var h=new c.a},780:function(t,e,i){"use strict";i.d(e,"a",(function(){return j}));var a=i(2),r=i(3),n=i(5),c=i(6),s=i(0),o=i(33),h=i(71),l=i(4),u=i(31),p=i(1),v=(i(14),i(16),i(13),i(8)),b=i(26),f=i(11),y=i(22),d=i(108),g=i(153),O=i(512),m=i(415),_=i(734),j=function(t){Object(n.a)(i,t);var e=Object(c.a)(i);function i(t){var r;return Object(a.a)(this,i),(r=e.call(this,t)).layer=null,r.interactive=!0,r.selectable=!1,r.grabbable=!0,r.dragging=!1,r.cursor=null,r.events=new h.a.EventEmitter,r._circleCollisionCache=null,r._graphicSymbolChangedHandle=null,r._originalSymbol=null,r}return Object(r.a)(i,[{key:"graphic",set:function(t){this._circleCollisionCache=null,this._originalSymbol=t.symbol,this._set("graphic",t),this.attachSymbolChanged()}},{key:"elevationInfo",get:function(){var t="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,e=Object(g.f)(this.graphic),i=t?t.offset:0;return new m.a({mode:e,offset:i})}},{key:"focusedSymbol",set:function(t){t!==this._get("focusedSymbol")&&(this._set("focusedSymbol",t),this._updateGraphicSymbol(),this._circleCollisionCache=null)}},{key:"grabbableForEvent",value:function(){return!0}},{key:"grabbing",set:function(t){t!==this._get("grabbing")&&(this._set("grabbing",t),this._updateGraphicSymbol())}},{key:"hovering",set:function(t){t!==this._get("hovering")&&(this._set("hovering",t),this._updateGraphicSymbol())}},{key:"selected",set:function(t){t!==this._get("selected")&&(this._set("selected",t),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:t?"select":"deselect"}))}},{key:"_focused",get:function(){return this._get("hovering")||this._get("grabbing")}},{key:"destroy",value:function(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}},{key:"intersectionDistance",value:function(t){var e=this.graphic;if(!1===e.visible)return null;var i=e.geometry;if(Object(l.j)(i))return null;var a=this._get("focusedSymbol"),r=Object(l.k)(a)?a:e.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,t,i,r):this._intersectDistance3D(this.view,t,e)}},{key:"attach",value:function(){this.attachSymbolChanged(),Object(l.k)(this.layer)&&this.layer.add(this.graphic)}},{key:"detach",value:function(){this.detachSymbolChanged(),this._resetGraphicSymbol(),Object(l.k)(this.layer)&&this.layer.remove(this.graphic)}},{key:"attachSymbolChanged",value:function(){var t=this;this.detachSymbolChanged(),this._graphicSymbolChangedHandle=this.graphic.watch("symbol",(function(e){Object(l.k)(e)&&e!==t.focusedSymbol&&e!==t._originalSymbol&&(t._originalSymbol=e,t._focused&&Object(l.k)(t.focusedSymbol)&&(t.graphic.symbol=t.focusedSymbol))}),!0)}},{key:"detachSymbolChanged",value:function(){Object(l.k)(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}},{key:"_updateGraphicSymbol",value:function(){this.graphic.symbol=this._focused&&Object(l.k)(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}},{key:"_resetGraphicSymbol",value:function(){this.graphic.symbol=this._originalSymbol}},{key:"_intersectDistance2D",value:function(t,e,i,a){if(a=a||Object(O.h)(i),Object(l.j)(a))return null;var r=this._circleCollisionCache;if("point"!==i.type||"simple-marker"!==a.type)return Object(_.b)(e,i,t)?1:null;if(Object(l.j)(r)||!r.originalPoint.equals(i)){var n=i,c=t.spatialReference;if(Object(d.b)(n.spatialReference,c)){var s=Object(d.k)(n,c);r={originalPoint:n.clone(),mapPoint:s,radiusPx:Object(u.g)(a.size)},this._circleCollisionCache=r}}if(Object(l.k)(r)){var o=Object(u.i)(e,G),h=t.toScreen(r.mapPoint),p=r.radiusPx,v=h.x+Object(u.g)(a.xoffset),f=h.y-Object(u.g)(a.yoffset);return Object(b.j)(o,[v,f])<p*p?1:null}return null}},{key:"_intersectDistance3D",value:function(t,e,i){var a=t.toMap(e,{include:[i]});return a&&Object(d.p)(a,k,t.renderSpatialReference)?Object(f.m)(k,t.state.camera.eye):null}}]),i}(o.a);Object(s.a)([Object(p.b)({constructOnly:!0,nonNullable:!0})],j.prototype,"graphic",null),Object(s.a)([Object(p.b)({readOnly:!0})],j.prototype,"elevationInfo",null),Object(s.a)([Object(p.b)({constructOnly:!0,nonNullable:!0})],j.prototype,"view",void 0),Object(s.a)([Object(p.b)({value:null})],j.prototype,"focusedSymbol",null),Object(s.a)([Object(p.b)({constructOnly:!0})],j.prototype,"layer",void 0),Object(s.a)([Object(p.b)()],j.prototype,"interactive",void 0),Object(s.a)([Object(p.b)()],j.prototype,"selectable",void 0),Object(s.a)([Object(p.b)()],j.prototype,"grabbable",void 0),Object(s.a)([Object(p.b)({value:!1})],j.prototype,"grabbing",null),Object(s.a)([Object(p.b)()],j.prototype,"dragging",void 0),Object(s.a)([Object(p.b)()],j.prototype,"hovering",null),Object(s.a)([Object(p.b)({value:!1})],j.prototype,"selected",null),Object(s.a)([Object(p.b)()],j.prototype,"cursor",void 0),j=Object(s.a)([Object(v.a)("esri.views.interactive.GraphicManipulator")],j);var k=Object(y.e)(),G=Object(u.f)()},860:function(t,e,i){"use strict";i.r(e);var a=i(2),r=i(3),n=i(5),c=i(6),s=i(0),o=(i(65),i(71)),h=i(48),l=i(20),u=i(4),p=i(25),v=i(1),b=(i(16),i(14),i(13),i(8)),f=i(192),y=i(483),d=i(485),g=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-click"},O=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-double-click"},m=function(){function t(e,i,r,n,c,s,o,h,l,u){Object(a.a)(this,t),this.graphic=e,this.allGraphics=i,this.index=r,this.x=n,this.y=c,this.dx=s,this.dy=o,this.totalDx=h,this.totalDy=l,this.viewEvent=u,this.defaultPrevented=!1,this.type="graphic-move-start"}return Object(r.a)(t,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),t}(),_=function(){function t(e,i,r,n,c,s,o,h,l,u){Object(a.a)(this,t),this.graphic=e,this.allGraphics=i,this.index=r,this.x=n,this.y=c,this.dx=s,this.dy=o,this.totalDx=h,this.totalDy=l,this.viewEvent=u,this.defaultPrevented=!1,this.type="graphic-move"}return Object(r.a)(t,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),t}(),j=function(){function t(e,i,r,n,c,s,o,h,l,u){Object(a.a)(this,t),this.graphic=e,this.allGraphics=i,this.index=r,this.x=n,this.y=c,this.dx=s,this.dy=o,this.totalDx=h,this.totalDy=l,this.viewEvent=u,this.defaultPrevented=!1,this.type="graphic-move-stop"}return Object(r.a)(t,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),t}(),k=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-pointer-over"},G=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-pointer-out"},w=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-pointer-down"},x=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-pointer-up"},S=i(44),M=i(780),E=i(81),D=i(105),P=i(101),C=i(119),H=function(t){Object(n.a)(i,t);var e=Object(c.a)(i);function i(t){var r;return Object(a.a)(this,i),(r=e.call(this,t))._activeGraphic=null,r._indicators=[],r._dragEvent=null,r._handles=new h.a,r._hoverGraphic=null,r._initialDragGeometry=null,r._viewHandles=new h.a,r._manipulators=[],r.type="graphic-mover",r.callbacks={onGraphicClick:function(){},onGraphicDoubleClick:function(){},onGraphicMoveStart:function(){},onGraphicMove:function(){},onGraphicMoveStop:function(){},onGraphicPointerOver:function(){},onGraphicPointerOut:function(){},onGraphicPointerDown:function(){},onGraphicPointerUp:function(){}},r.enableMoveAllGraphics=!1,r.graphics=[],r.indicatorsEnabled=!0,r.layer=new f.a({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),r.view=null,r}return Object(r.a)(i,[{key:"initialize",value:function(){var t=this;Object(d.a)(this.view,this.layer),this.refresh(),this._handles.add([Object(p.d)(this,["graphics","graphics.length"],(function(){return t.refresh()})),Object(p.j)(this,"view.ready",(function(){t._viewHandles.add([t.view.on("immediate-click",(function(e){return t._clickHandler(e)}),S.b.TOOL),t.view.on("double-click",(function(e){return t._doubleClickHandler(e)}),S.b.TOOL),t.view.on("pointer-down",(function(e){return t._pointerDownHandler(e)}),S.b.TOOL),t.view.on("pointer-move",(function(e){return t._pointerMoveHandler(e)}),S.b.TOOL),t.view.on("pointer-up",(function(e){return t._pointerUpHandler(e)}),S.b.TOOL),t.view.on("drag",(function(e){return t._dragHandler(e)}),S.b.TOOL),t.view.on("key-down",(function(e){return t._keyDownHandler(e)}),S.b.TOOL)])}))])}},{key:"destroy",value:function(){var t;this._removeIndicators(),null==(t=this.view.map)||t.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach((function(t){return t.destroy()})),this._manipulators=null,this._handles=Object(u.e)(this._handles),this._viewHandles=Object(u.e)(this._viewHandles)}},{key:"state",get:function(){var t=!!this.get("view.ready"),e=!!this.get("graphics.length"),i=this._activeGraphic;return t&&e?i?"moving":"active":t?"ready":"disabled"}},{key:"refresh",value:function(){this._setUpIndicators(),this._setUpManipulators()}},{key:"reset",value:function(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null}},{key:"updateGeometry",value:function(t,e){var i=this.graphics[t];i&&(i.set("geometry",e),this._setUpIndicators())}},{key:"_clickHandler",value:function(t){var e=this._findTargetGraphic(Object(E.a)(t));if(e){var i=new g(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-click",i),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(i)}}},{key:"_doubleClickHandler",value:function(t){var e=this._findTargetGraphic(Object(E.a)(t));if(e){var i=new O(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-double-click",i),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(i)}}},{key:"_pointerDownHandler",value:function(t){var e=this._findTargetGraphic(Object(E.a)(t));if(e){this._activeGraphic=e;var i=t.x,a=t.y,r=new w(e,this.graphics.indexOf(e),i,a,t);this.emit("graphic-pointer-down",r),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(r)}else this._activeGraphic=null}},{key:"_pointerUpHandler",value:function(t){if(this._activeGraphic){var e=t.x,i=t.y,a=this.graphics.indexOf(this._activeGraphic),r=new x(this._activeGraphic,a,e,i,t);this.emit("graphic-pointer-up",r),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(r)}}},{key:"_pointerMoveHandler",value:function(t){if(!this._dragEvent){var e=this._findTargetGraphic(Object(E.a)(t));if(e){var i=t.x,a=t.y;if(this._hoverGraphic){if(this._hoverGraphic===e)return;var r=this.graphics.indexOf(this._hoverGraphic),n=new G(this.graphics[r],r,i,a,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",n),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(n)}var c=this.graphics.indexOf(e),s=new k(e,c,i,a,t);return this._hoverGraphic=e,this.emit("graphic-pointer-over",s),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(s))}if(this._hoverGraphic){var o=t.x,h=t.y,l=this.graphics.indexOf(this._hoverGraphic),u=new G(this.graphics[l],l,o,h,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",u),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(u)}}}},{key:"_dragHandler",value:function(t){var e=this;if(("start"===t.action||this._dragEvent)&&this._activeGraphic&&this._activeGraphic.geometry){"start"===t.action&&this._removeIndicators(),t.stopPropagation();var i=t.action,a=t.x,r=t.y,n=this.graphics.indexOf(this._activeGraphic),c=this._activeGraphic.geometry,s=this._dragEvent?a-this._dragEvent.x:0,o=this._dragEvent?r-this._dragEvent.y:0,h=a-t.origin.x,u=r-t.origin.y,p=Object(y.a)(c,s,o,this.view);if(this._activeGraphic.geometry=p,this.enableMoveAllGraphics&&this.graphics.forEach((function(t){t!==e._activeGraphic&&(t.geometry=Object(y.a)(t.geometry,s,o,e.view))})),this._dragEvent=t,"start"===i){this._initialDragGeometry=Object(l.a)(c);var v=new m(this._activeGraphic,this.graphics,n,a,r,s,o,h,u,t);this.emit("graphic-move-start",v),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(v),v.defaultPrevented&&this._activeGraphic.set("geometry",c)}else if("update"===i){var b=new _(this._activeGraphic,this.graphics,n,a,r,s,o,h,u,t);this.emit("graphic-move",b),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(b),b.defaultPrevented&&(this._activeGraphic.geometry=c)}else{var f=new j(this._activeGraphic,this.graphics,n,a,r,s,o,h,u,t);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",f),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(f),f.defaultPrevented&&(this.graphics[n].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null}}}},{key:"_keyDownHandler",value:function(t){"a"!==t.key&&"d"!==t.key&&"n"!==t.key||"moving"!==this.state||t.stopPropagation()}},{key:"_findTargetGraphic",value:function(t){var e=null,i=Number.MAX_VALUE;return this._manipulators.forEach((function(a){var r=a.intersectionDistance(t);Object(u.k)(r)&&r<i&&(i=r,e=a.graphic)})),e}},{key:"_setUpManipulators",value:function(){var t=this.graphics,e=this.view;this._manipulators.forEach((function(t){return t.destroy()})),this._manipulators=null!=t&&t.length?t.map((function(t){return new M.a({graphic:t,view:e})})):[]}},{key:"_setUpIndicators",value:function(){var t,e=this;this._removeIndicators(),this.indicatorsEnabled&&(this._indicators=(null==(t=this.graphics)?void 0:t.map((function(t){var i=t.clone();return i.symbol=e._getSymbolForIndicator(t),i})))||[],this.layer.addMany(this._indicators))}},{key:"_removeIndicators",value:function(){this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach((function(t){return t.destroy()})),this._indicators=[])}},{key:"_getSymbolForIndicator",value:function(t){if(Object(u.j)(t.symbol))return null;switch(t.symbol.type){case"cim":return new D.a({style:"circle",size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":var e=t.symbol,i=e.xoffset,a=e.yoffset,r=e.height,n=e.width,c=r===n?n:Math.max(r,n);return new D.a({xoffset:i,yoffset:a,size:c,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"simple-marker":var s=t.symbol,o=s.xoffset,h=s.yoffset,l=s.size,p=s.style;return new D.a({xoffset:o,yoffset:h,style:"circle"===p?"circle":"square",size:l+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"simple-fill":return new C.a({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new P.a({color:[255,127,0,1],style:"dash",width:1});case"text":var v=t.symbol,b=v.xoffset,f=v.yoffset;return new D.a({xoffset:b,yoffset:f,size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});default:return null}}}]),i}(o.a.EventedAccessor);Object(s.a)([Object(v.b)()],H.prototype,"_activeGraphic",void 0),Object(s.a)([Object(v.b)({readOnly:!0})],H.prototype,"type",void 0),Object(s.a)([Object(v.b)()],H.prototype,"callbacks",void 0),Object(s.a)([Object(v.b)()],H.prototype,"enableMoveAllGraphics",void 0),Object(s.a)([Object(v.b)()],H.prototype,"graphics",void 0),Object(s.a)([Object(v.b)()],H.prototype,"indicatorsEnabled",void 0),Object(s.a)([Object(v.b)()],H.prototype,"layer",void 0),Object(s.a)([Object(v.b)({readOnly:!0})],H.prototype,"state",null),Object(s.a)([Object(v.b)()],H.prototype,"view",void 0);var I=H=Object(s.a)([Object(b.a)("esri.views.draw.support.GraphicMover")],H);e.default=I}}]);
//# sourceMappingURL=83.6e81a06c.chunk.js.map