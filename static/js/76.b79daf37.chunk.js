(this["webpackJsonpfirst-example"]=this["webpackJsonpfirst-example"]||[]).push([[76,83],{1199:function(t,e,i){"use strict";i.r(e);var a=i(24),r=i(15),n=i(3),c=i(5),s=i(6),o=i(2),h=i(0),l=(i(76),i(64)),p=i(71),u=i(48),v=i(4),b=i(25),f=i(1),y=(i(14),i(16),i(13),i(8)),d=i(97),g=i(311),_=i(146),m=i(99),O=i(94),G=i(39),k=i(232);function j(t){var e,i=0,a=0,r=t.length,n=t[a];for(a=0;a<r-1;a++)i+=((e=t[a+1])[0]-n[0])*(e[1]+n[1]),n=e;return i>=0}function w(t,e,i,a){var n,c=[],s=Object(r.a)(t);try{for(s.s();!(n=s.n()).done;){var o=n.value,h=o.slice(0);c.push(h);var l=e*(o[0]-a.x)-i*(o[1]-a.y)+a.x,p=i*(o[0]-a.x)+e*(o[1]-a.y)+a.y;h[0]=l,h[1]=p}}catch(u){s.e(u)}finally{s.f()}return c}var x=function(t,e,i){var a,n,c=t.spatialReference,s=e*Math.PI/180,o=Math.cos(s),h=Math.sin(s);if("xmin"in t&&(i=null!=(a=i)?a:t.center,t=new m.a({spatialReference:c,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){var l;i=null!=(l=i)?l:t.extent.center;var p,u=[],v=Object(r.a)(t.paths);try{for(v.s();!(p=v.n()).done;){var b=p.value;u.push(w(b,o,h,i))}}catch(C){v.e(C)}finally{v.f()}return new O.a({spatialReference:c,paths:u})}if("rings"in t){var f;i=null!=(f=i)?f:t.extent.center;var y,d=[],g=Object(r.a)(t.rings);try{for(g.s();!(y=g.n()).done;){var _=y.value,x=j(_),S=w(_,o,h,i);j(S)!==x&&S.reverse(),d.push(S)}}catch(C){g.e(C)}finally{g.f()}return new m.a({spatialReference:c,rings:d})}if("x"in t){var M;i=null!=(M=i)?M:t;var E=new G.a({x:o*(t.x-i.x)-h*(t.y-i.y)+i.x,y:h*(t.x-i.x)+o*(t.y-i.y)+i.y,spatialReference:c});return null!=t.z&&(E.z=t.z),null!=t.m&&(E.m=t.m),E}return"points"in t?(i=null!=(n=i)?n:t.extent.center,new k.a({points:w(t.points,o,h,i),spatialReference:c})):null},S=i(119),M=i(101),E=i(105),C=i(483),R=i(860),I=i(485),P=i(494),D=function t(e,i,a,r){Object(o.a)(this,t),this.graphics=e,this.mover=i,this.dx=a,this.dy=r,this.type="move-start"},z=function t(e,i,a,r){Object(o.a)(this,t),this.graphics=e,this.mover=i,this.dx=a,this.dy=r,this.type="move"},H=function t(e,i,a,r){Object(o.a)(this,t),this.graphics=e,this.mover=i,this.dx=a,this.dy=r,this.type="move-stop"},L=function t(e,i,a){Object(o.a)(this,t),this.graphics=e,this.mover=i,this.angle=a,this.type="rotate-start"},T=function t(e,i,a){Object(o.a)(this,t),this.graphics=e,this.mover=i,this.angle=a,this.type="rotate"},B=function t(e,i,a){Object(o.a)(this,t),this.graphics=e,this.mover=i,this.angle=a,this.type="rotate-stop"},N=function t(e,i,a,r){Object(o.a)(this,t),this.graphics=e,this.mover=i,this.xScale=a,this.yScale=r,this.type="scale-start"},U=function t(e,i,a,r){Object(o.a)(this,t),this.graphics=e,this.mover=i,this.xScale=a,this.yScale=r,this.type="scale"},A=function t(e,i,a,r){Object(o.a)(this,t),this.graphics=e,this.mover=i,this.xScale=a,this.yScale=r,this.type="scale-stop"},Y=P.b.transformGraphics,X={centerIndicator:new E.a({style:"cross",size:Y.center.size,color:Y.center.color}),fill:{default:new S.a({color:Y.fill.color,outline:{color:Y.fill.outlineColor,join:"round",width:1}}),active:new S.a({color:Y.fill.stagedColor,outline:{color:Y.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new E.a({style:"square",size:Y.vertex.size,color:Y.vertex.color,outline:{color:Y.vertex.outlineColor,width:1}}),hover:new E.a({style:"square",size:Y.vertex.hoverSize,color:Y.vertex.hoverColor,outline:{color:Y.vertex.hoverOutlineColor,width:1}})},rotator:{default:new E.a({style:"circle",size:Y.vertex.size,color:Y.vertex.color,outline:{color:Y.vertex.outlineColor,width:1}}),hover:new E.a({style:"circle",size:Y.vertex.hoverSize,color:Y.vertex.hoverColor,outline:{color:Y.vertex.hoverOutlineColor,width:1}})},rotatorLine:new M.a({color:Y.line.color,width:1})},V=function(t){Object(c.a)(i,t);var e=Object(s.a)(i);function i(t){var n;return Object(o.a)(this,i),(n=e.call(this,t))._activeHandleGraphic=null,n._graphicAttributes={esriSketchTool:"box"},n._handles=new u.a,n._mover=null,n._rotateGraphicOffset=20,n._angleOfRotation=0,n._rotateLineGraphic=null,n._startInfo=null,n._totalDx=0,n._totalDy=0,n._xScale=1,n._yScale=1,n.type="box",n.callbacks={onMoveStart:function(){},onMove:function(){},onMoveStop:function(){},onScaleStart:function(){},onScale:function(){},onScaleStop:function(){},onRotateStart:function(){},onRotate:function(){},onRotateStop:function(){},onGraphicClick:function(){}},n.centerGraphic=null,n.backgroundGraphic=null,n.enableMovement=!0,n.enableRotation=!0,n.enableScaling=!0,n.graphics=[],n.handleGraphics=[],n.layer=null,n.preserveAspectRatio=!1,n.rotateGraphic=null,n.showCenterGraphic=!0,n.view=null,n._getBounds=function(){var t=Object(d.k)();return function(e,i){e[0]=Number.POSITIVE_INFINITY,e[1]=Number.POSITIVE_INFINITY,e[2]=Number.NEGATIVE_INFINITY,e[3]=Number.NEGATIVE_INFINITY;var n,c=Object(r.a)(i);try{for(c.s();!(n=c.n()).done;){var s=n.value;if(s){var o=void 0,h=void 0,l=void 0,p=void 0;if("point"===s.type)o=l=s.x,h=p=s.y;else if("multipoint"===s.type){var u=Object(_.b)(s),v=Object(g.d)(t,[u]),b=Object(a.a)(v,4);o=b[0],h=b[1],l=b[2],p=b[3]}else if("extent"===s.type){var f=[s.xmin,s.ymin,s.xmax,s.ymax];o=f[0],h=f[1],l=f[2],p=f[3]}else{var y=Object(_.b)(s),d=Object(g.d)(t,y),m=Object(a.a)(d,4);o=m[0],h=m[1],l=m[2],p=m[3]}e[0]=Math.min(o,e[0]),e[1]=Math.min(h,e[1]),e[2]=Math.max(l,e[2]),e[3]=Math.max(p,e[3])}}}catch(O){c.e(O)}finally{c.f()}return e}}(),n}return Object(n.a)(i,[{key:"initialize",value:function(){var t=this;this._setup(),this._handles.add([Object(b.j)(this,"view.ready",(function(){var e=t.layer,i=t.view;Object(I.a)(i,e)})),Object(b.c)(this,"preserveAspectRatio",(function(){t._activeHandleGraphic&&(t._scaleGraphic(t._activeHandleGraphic),t._updateGraphics())})),Object(b.c)(this,"view.scale",(function(){t._updateRotateGraphic(),t._updateRotateLineGraphic()})),Object(b.c)(this,"graphics",(function(){return t.refresh()})),Object(b.c)(this,"layer",(function(e,i){i&&t._resetGraphics(i),t.refresh()}))])}},{key:"destroy",value:function(){this._reset(),this._handles=Object(v.e)(this._handles)}},{key:"state",get:function(){var t=!!this.get("view.ready"),e=!(!this.get("graphics.length")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"}},{key:"symbols",set:function(t){var e=t||{},i=e.centerIndicator,a=void 0===i?X.centerIndicator:i,r=e.fill,n=void 0===r?X.fill:r,c=e.handles,s=void 0===c?X.handles:c,o=e.rotator,h=void 0===o?X.rotator:o,l=e.rotatorLine,p=void 0===l?X.rotatorLine:l;this._set("symbols",{centerIndicator:a,fill:n,handles:s,rotator:h,rotatorLine:p})}},{key:"isUIGraphic",value:function(t){var e=[];return this.handleGraphics.length&&(e=e.concat(this.handleGraphics)),this.backgroundGraphic&&e.push(this.backgroundGraphic),this.centerGraphic&&e.push(this.centerGraphic),this.rotateGraphic&&e.push(this.rotateGraphic),this._rotateLineGraphic&&e.push(this._rotateLineGraphic),e.length&&e.includes(t)}},{key:"move",value:function(t,e){if(this._mover&&this.graphics.length){var i,a=Object(r.a)(this.graphics);try{for(a.s();!(i=a.n()).done;){var n=i.value,c=n.geometry,s=Object(C.a)(c,t,e,this.view);n.geometry=s}}catch(o){a.e(o)}finally{a.f()}this.refresh(),this._emitMoveStopEvent(t,e,null)}}},{key:"scale",value:function(t,e){if(this._mover&&this.graphics.length){var i,a=Object(r.a)(this.graphics);try{for(a.s();!(i=a.n()).done;){var n=i.value,c=n.geometry,s=Object(C.e)(c,t,e);n.geometry=s}}catch(o){a.e(o)}finally{a.f()}this.refresh(),this._emitScaleStopEvent(t,e,null)}}},{key:"rotate",value:function(t,e){if(this._mover&&this.graphics.length){if(!e){var i=this.handleGraphics[1].geometry.x,a=this.handleGraphics[3].geometry.y;e=new G.a(i,a,this.view.spatialReference)}var n,c=Object(r.a)(this.graphics);try{for(c.s();!(n=c.n()).done;){var s=n.value,o=s.geometry,h=x(o,t,e);s.geometry=h}}catch(l){c.e(l)}finally{c.f()}this.refresh(),this._emitRotateStopEvent(t,null)}}},{key:"refresh",value:function(){this._reset(),this._setup()}},{key:"reset",value:function(){this.graphics=[]}},{key:"_setup",value:function(){"active"===this.state&&(this._setupGraphics(),this._setupMover(),this._updateGraphics())}},{key:"_reset",value:function(){this._resetGraphicStateVars(),this._resetGraphics(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}},{key:"_resetGraphicStateVars",value:function(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}},{key:"_resetGraphics",value:function(t){var e=t||this.layer;e&&(e.removeMany(this.handleGraphics),e.remove(this.backgroundGraphic),e.remove(this.centerGraphic),e.remove(this.rotateGraphic),e.remove(this._rotateLineGraphic));var i,a=Object(r.a)(this.handleGraphics);try{for(a.s();!(i=a.n()).done;){i.value.destroy()}}catch(n){a.e(n)}finally{a.f()}this._set("handleGraphics",[]),this.backgroundGraphic&&(this.backgroundGraphic.destroy(),this._set("backgroundGraphic",null)),this.centerGraphic&&(this.centerGraphic.destroy(),this._set("centerGraphic",null)),this.rotateGraphic&&(this.rotateGraphic.destroy(),this._set("rotateGraphic",null)),this._rotateLineGraphic&&(this._rotateLineGraphic.destroy(),this._rotateLineGraphic=null)}},{key:"_setupMover",value:function(){var t=this,e=[].concat(this.handleGraphics);this.enableMovement&&(e=e.concat(this.graphics,this.backgroundGraphic)),this.enableRotation&&e.push(this.rotateGraphic),this.showCenterGraphic&&e.push(this.centerGraphic),this._mover=new R.default({enableMoveAllGraphics:!1,indicatorsEnabled:!1,view:this.view,graphics:e,callbacks:{onGraphicClick:function(e){return t._onGraphicClickCallback(e)},onGraphicMoveStart:function(e){return t._onGraphicMoveStartCallback(e)},onGraphicMove:function(e){return t._onGraphicMoveCallback(e)},onGraphicMoveStop:function(e){return t._onGraphicMoveStopCallback(e)},onGraphicPointerOver:function(e){return t._onGraphicPointerOverCallback(e)},onGraphicPointerOut:function(e){return t._onGraphicPointerOutCallback(e)}}})}},{key:"_getStartInfo",value:function(t){var e=this._getBoxBounds(Object(d.k)()),i=Object(a.a)(e,4),r=i[0],n=i[1],c=i[2],s=i[3],o=Math.abs(c-r),h=Math.abs(s-n),l=(c+r)/2,p=(s+n)/2,u=t.geometry;return{width:o,height:h,centerX:l,centerY:p,startX:u.x,startY:u.y,graphicInfos:this._getGraphicInfos(),box:this.backgroundGraphic.geometry,rotate:this.rotateGraphic.geometry}}},{key:"_getGraphicInfos",value:function(){var t=this;return this.graphics.map((function(e){return t._getGraphicInfo(e)}))}},{key:"_getGraphicInfo",value:function(t){var e=t.geometry,i=this._getBounds(Object(d.k)(),[e]),r=Object(a.a)(i,4),n=r[0],c=r[1],s=r[2],o=r[3];return{width:Math.abs(s-n),height:Math.abs(o-c),centerX:(s+n)/2,centerY:(o+c)/2,geometry:e}}},{key:"_onGraphicClickCallback",value:function(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}},{key:"_onGraphicMoveStartCallback",value:function(t){var e=this._angleOfRotation,i=this._xScale,a=this._yScale,r=this.backgroundGraphic,n=this.handleGraphics,c=this.rotateGraphic,s=this.symbols,o=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),r.symbol=s.fill.active,this._startInfo=this._getStartInfo(o),o===c?(this.view.cursor="grabbing",this._emitRotateStartEvent(e,o)):n.includes(o)?(this._activeHandleGraphic=o,this._emitScaleStartEvent(i,a,o)):this._emitMoveStartEvent(t.dx,t.dy,o)}},{key:"_onGraphicMoveCallback",value:function(t){var e=t.graphic;if(this._startInfo)if(this.handleGraphics.includes(e))this._scaleGraphic(e),this._emitScaleEvent(this._xScale,this._yScale,e);else if(e===this.rotateGraphic)this._rotateGraphic(e),this._emitRotateEvent(this._angleOfRotation,e);else{var i=t.dx,a=t.dy;this._totalDx+=i,this._totalDy+=a,this._moveGraphic(e,i,a),this._emitMoveEvent(i,a,e)}}},{key:"_onGraphicMoveStopCallback",value:function(t){var e=t.graphic;if(this._startInfo){var i=this._angleOfRotation,a=this._totalDx,r=this._totalDy,n=this._xScale,c=this._yScale,s=this.handleGraphics,o=this.rotateGraphic;this.refresh(),e===o?(this.view.cursor="pointer",this._emitRotateStopEvent(i,e)):s.includes(e)?this._emitScaleStopEvent(n,c,e):this._emitMoveStopEvent(a,r,e)}else this.refresh()}},{key:"_onGraphicPointerOverCallback",value:function(t){var e=this.backgroundGraphic,i=this.handleGraphics,a=this.graphics,r=this.rotateGraphic,n=this.symbols,c=this.view,s=t.graphic;if(s===r)return r.symbol=n.rotator.hover,void(c.cursor="pointer");if(a.includes(s)||s===e)c.cursor="move";else if(i.includes(s)){t.graphic.symbol=n.handles.hover;var o,h=c.rotation,l=t.index;switch(l<8&&(h>=0&&h<45?l%=8:l=h>=45&&h<90?(l+1)%8:h>=90&&h<135?(l+2)%8:h>=135&&h<180?(l+3)%8:h>=180&&h<225?(l+4)%8:h>=225&&h<270?(l+5)%8:h>=270&&h<315?(l+6)%8:(l+7)%8),l){case 0:o="nwse-resize";break;case 1:o="ns-resize";break;case 2:o="nesw-resize";break;case 3:o="ew-resize";break;case 4:o="nwse-resize";break;case 5:o="ns-resize";break;case 6:o="nesw-resize";break;case 7:o="ew-resize";break;default:o="pointer"}c.cursor=o}else c.cursor="pointer"}},{key:"_onGraphicPointerOutCallback",value:function(t){var e=this.handleGraphics,i=this.rotateGraphic,a=this.symbols,r=this.view;t.graphic===i?i.symbol=a.rotator.default:e.includes(t.graphic)&&(t.graphic.symbol=a.handles.default),r.cursor="default"}},{key:"_scaleGraphic",value:function(t){var e=this._startInfo,i=this.handleGraphics,a=this.preserveAspectRatio,n=this.view,c=e.centerX,s=e.centerY,o=e.startX,h=e.startY,l=n.state,p=l.resolution,u=l.transform,v=i.indexOf(t);1!==v&&5!==v||this._updateX(t,c),3!==v&&7!==v||this._updateY(t,s);var b=t.geometry,f=b.x,y=b.y,d=u[0]*f+u[2]*y+u[4],g=u[1]*f+u[3]*y+u[5],_=e.graphicInfos.map((function(t){return t.geometry}));if(a){var m=u[0]*c+u[2]*s+u[4],O=u[1]*c+u[3]*s+u[5],k=u[0]*o+u[2]*h+u[4],j=u[1]*o+u[3]*h+u[5];this._xScale=this._yScale=Object(C.c)(m,O,k,j,d,g);var w,x=Object(r.a)(_);try{for(x.s();!(w=x.n()).done;){var S=w.value,M=_.indexOf(S);this.graphics[M].geometry=Object(C.e)(S,this._xScale,this._yScale,[c,s])}}catch(W){x.e(W)}finally{x.f()}this._updateBackgroundGraphic()}else{var E=e.width,R=e.height,I=f-o,P=h-y;if(1===v||5===v?I=0:3!==v&&7!==v||(P=0),0===I&&0===P)return;var D=E+(o>c?I:-1*I),z=R+(h<s?P:-1*P),H=c+I/2,L=s+P/2;this._xScale=D/E||1,this._yScale=z/R||1,1===v||5===v?this._xScale=1:3!==v&&7!==v||(this._yScale=1);var T=(H-c)/p,B=(L-s)/p,N=Object(C.e)(e.box,this._xScale,this._yScale);this.backgroundGraphic.geometry=Object(C.a)(N,T,B,n,!0);var U,A=this._getGraphicInfo(this.backgroundGraphic),Y=A.centerX,X=A.centerY,V=(Y-c)/p,q=-1*(X-s)/p,F=Object(r.a)(_);try{for(F.s();!(U=F.n()).done;){var J=U.value,K=_.indexOf(J),Q=Object(C.e)(J,this._xScale,this._yScale,[c,s]);this.graphics[K].geometry=Object(C.a)(Q,V,q,n,!0)}}catch(W){F.e(W)}finally{F.f()}this.centerGraphic.geometry=new G.a(Y,X,n.spatialReference)}}},{key:"_rotateGraphic",value:function(t){var e=this._startInfo,i=e.centerX,a=e.centerY,n=e.startX,c=e.startY,s=e.box,o=e.rotate,h=t.geometry,l=h.x,p=h.y,u=new G.a(i,a,this.view.spatialReference);this._angleOfRotation=Object(C.b)(i,a,n,c,l,p);var v,b=this._startInfo.graphicInfos.map((function(t){return t.geometry})),f=Object(r.a)(b);try{for(f.s();!(v=f.n()).done;){var y=v.value,d=b.indexOf(y),g=x(y,this._angleOfRotation,u);this.graphics[d].geometry=g}}catch(_){f.e(_)}finally{f.f()}this.backgroundGraphic.geometry=x(s,this._angleOfRotation,u),this.rotateGraphic.geometry=x(o,this._angleOfRotation,u)}},{key:"_moveGraphic",value:function(t,e,i){if(this.graphics.includes(t)){var a=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=Object(C.a)(a,e,i,this.view);var n,c=Object(r.a)(this.graphics);try{for(c.s();!(n=c.n()).done;){var s=n.value;s!==t&&(s.geometry=Object(C.a)(s.geometry,e,i,this.view))}}catch(u){c.e(u)}finally{c.f()}}else if(t===this.centerGraphic){var o=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=Object(C.a)(o,e,i,this.view)}if(t===this.backgroundGraphic||t===this.centerGraphic){var h,l=Object(r.a)(this.graphics);try{for(l.s();!(h=l.n()).done;){var p=h.value;p.geometry=Object(C.a)(p.geometry,e,i,this.view)}}catch(u){l.e(u)}finally{l.f()}}}},{key:"_setupGraphics",value:function(){var t=this._graphicAttributes,e=this.symbols;this._set("centerGraphic",new l.a(null,e.centerIndicator,t)),this.showCenterGraphic&&this.layer.add(this.centerGraphic),this._set("backgroundGraphic",new l.a(null,e.fill.default,t)),this.layer.add(this.backgroundGraphic),this._rotateLineGraphic=new l.a(null,e.rotatorLine,t),this._set("rotateGraphic",new l.a(null,e.rotator.default,t)),this.enableRotation&&!this._hasExtentGraphic()&&(this.layer.add(this._rotateLineGraphic),this.layer.add(this.rotateGraphic));for(var i=0;i<8;i++)this.handleGraphics.push(new l.a(null,e.handles.default,t));this.enableScaling&&this.layer.addMany(this.handleGraphics)}},{key:"_updateGraphics",value:function(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}},{key:"_hideGraphicsBeforeUpdate",value:function(){this.centerGraphic.visible=!1,this.rotateGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this.handleGraphics.forEach((function(t){return t.visible=!1}))}},{key:"_updateHandleGraphics",value:function(){var t=this,e=this._getCoordinates(!0);this.handleGraphics.forEach((function(i,r){var n=Object(a.a)(e[r],2),c=n[0],s=n[1];t._updateXY(i,c,s)}))}},{key:"_updateBackgroundGraphic",value:function(){var t=this._getCoordinates();this.backgroundGraphic.geometry=new m.a({rings:t,spatialReference:this.view.spatialReference})}},{key:"_updateCenterGraphic",value:function(){var t=this._getBoxBounds(Object(d.k)()),e=Object(a.a)(t,4),i=e[0],r=e[1],n=(e[2]+i)/2,c=(e[3]+r)/2;this.centerGraphic.geometry=new G.a(n,c,this.view.spatialReference)}},{key:"_updateRotateGraphic",value:function(){if(this.handleGraphics.length){var t=this.handleGraphics[1].geometry,e=t.x,i=t.y+this.view.state.resolution*this._rotateGraphicOffset;this.rotateGraphic.geometry=new G.a(e,i,this.view.spatialReference)}}},{key:"_updateRotateLineGraphic",value:function(){if(this.handleGraphics.length&&this.rotateGraphic&&this.rotateGraphic.geometry){var t=this.handleGraphics[1].geometry,e=this.rotateGraphic.geometry;this._rotateLineGraphic.geometry=new O.a({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference})}}},{key:"_updateXY",value:function(t,e,i){t.geometry=new G.a(e,i,this.view.spatialReference)}},{key:"_updateX",value:function(t,e){var i=t.geometry.y;t.geometry=new G.a(e,i,this.view.spatialReference)}},{key:"_updateY",value:function(t,e){var i=t.geometry.x;t.geometry=new G.a(i,e,this.view.spatialReference)}},{key:"_hasExtentGraphic",value:function(){return this.graphics.some((function(t){return t&&Object(v.k)(t.geometry)&&"extent"===t.geometry.type}))}},{key:"_getBoxBounds",value:function(t){var e=this.graphics.map((function(t){return t.geometry}));return this._getBounds(t,e)}},{key:"_getCoordinates",value:function(t){var e=this._getBoxBounds(Object(d.k)()),i=Object(a.a)(e,4),r=i[0],n=i[1],c=i[2],s=i[3];if(t){var o=(r+c)/2,h=(s+n)/2;return[[r,s],[o,s],[c,s],[c,h],[c,n],[o,n],[r,n],[r,h]]}return[[r,s],[c,s],[c,n],[r,n]]}},{key:"_emitMoveStartEvent",value:function(t,e,i){var a=new D(this.graphics,i,t,e);this.emit("move-start",a),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(a)}},{key:"_emitMoveEvent",value:function(t,e,i){var a=new z(this.graphics,i,t,e);this.emit("move",a),this.callbacks.onMove&&this.callbacks.onMove(a)}},{key:"_emitMoveStopEvent",value:function(t,e,i){var a=new H(this.graphics,i,t,e);this.emit("move-stop",a),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(a)}},{key:"_emitRotateStartEvent",value:function(t,e){var i=new L(this.graphics,e,t);this.emit("rotate-start",i),this.callbacks.onRotateStart&&this.callbacks.onRotateStart(i)}},{key:"_emitRotateEvent",value:function(t,e){var i=new T(this.graphics,e,t);this.emit("rotate",i),this.callbacks.onRotate&&this.callbacks.onRotate(i)}},{key:"_emitRotateStopEvent",value:function(t,e){var i=new B(this.graphics,e,t);this.emit("rotate-stop",i),this.callbacks.onRotateStop&&this.callbacks.onRotateStop(i)}},{key:"_emitScaleStartEvent",value:function(t,e,i){var a=new N(this.graphics,i,t,e);this.emit("scale-start",a),this.callbacks.onScaleStart&&this.callbacks.onScaleStart(a)}},{key:"_emitScaleEvent",value:function(t,e,i){var a=new U(this.graphics,i,t,e);this.emit("scale",a),this.callbacks.onScale&&this.callbacks.onScale(a)}},{key:"_emitScaleStopEvent",value:function(t,e,i){var a=new A(this.graphics,i,t,e);this.emit("scale-stop",a),this.callbacks.onScaleStop&&this.callbacks.onScaleStop(a)}}]),i}(p.a.EventedAccessor);Object(h.a)([Object(f.b)()],V.prototype,"_rotateLineGraphic",void 0),Object(h.a)([Object(f.b)({readOnly:!0})],V.prototype,"type",void 0),Object(h.a)([Object(f.b)()],V.prototype,"callbacks",void 0),Object(h.a)([Object(f.b)({readOnly:!0})],V.prototype,"centerGraphic",void 0),Object(h.a)([Object(f.b)({readOnly:!0})],V.prototype,"backgroundGraphic",void 0),Object(h.a)([Object(f.b)()],V.prototype,"enableMovement",void 0),Object(h.a)([Object(f.b)()],V.prototype,"enableRotation",void 0),Object(h.a)([Object(f.b)()],V.prototype,"enableScaling",void 0),Object(h.a)([Object(f.b)()],V.prototype,"graphics",void 0),Object(h.a)([Object(f.b)({readOnly:!0})],V.prototype,"handleGraphics",void 0),Object(h.a)([Object(f.b)()],V.prototype,"layer",void 0),Object(h.a)([Object(f.b)()],V.prototype,"preserveAspectRatio",void 0),Object(h.a)([Object(f.b)({readOnly:!0})],V.prototype,"rotateGraphic",void 0),Object(h.a)([Object(f.b)()],V.prototype,"showCenterGraphic",void 0),Object(h.a)([Object(f.b)({readOnly:!0})],V.prototype,"state",null),Object(h.a)([Object(f.b)({value:X})],V.prototype,"symbols",null),Object(h.a)([Object(f.b)()],V.prototype,"view",void 0);var q=V=Object(h.a)([Object(y.a)("esri.views.draw.support.Box")],V);e.default=q},719:function(t,e,i){"use strict";function a(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function r(t,e){return"number"==typeof t?t:t&&t.stops&&t.stops.length?function(t){for(var e=0,i=0,a=0;a<t.length;a++){var r=t[a].size;"number"==typeof r&&(e+=r,i++)}return e/i}(t.stops):e}function n(t,e){if(!e)return t;var i=e.filter((function(t){return"size"===t.type})).map((function(e){var i=e.maxSize,a=e.minSize;return(r(i,t)+r(a,t))/2})),a=0,n=i.length;if(0===n)return t;for(var c=0;c<n;c++)a+=i[c];var s=Math.floor(a/n);return Math.max(s,t)}function c(t){var e=t&&t.renderer,i="touch"===(t&&t.event&&t.event.pointerType)?9:6;if(!e)return i;var r="visualVariables"in e?n(i,e.visualVariables):i;if("simple"===e.type)return a(r,e.symbol);if("unique-value"===e.type){var c=r;return e.uniqueValueInfos.forEach((function(t){c=a(c,t.symbol)})),c}if("class-breaks"===e.type){var s=r;return e.classBreakInfos.forEach((function(t){s=a(s,t.symbol)})),s}return e.type,r}i.d(e,"a",(function(){return c}))},734:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return o}));i(76);var a=i(4),r=i(61),n=i(719),c=i(56);function s(t,e,i){var n,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new c.a;if("2d"===i.type)n=e*i.resolution;else if("3d"===i.type){var o=i.overlayPixelSizeInMapUnits(t),h=i.basemapSpatialReference;n=Object(a.k)(h)&&!h.equals(i.spatialReference)?Object(r.d)(h)/Object(r.d)(i.spatialReference):e*o}var l=t.x-n,p=t.y-n,u=t.x+n,v=t.y+n,b=i.spatialReference;return s.xmin=Math.min(l,u),s.ymin=Math.min(p,v),s.xmax=Math.max(l,u),s.ymax=Math.max(p,v),s.spatialReference=b,s}function o(t,e,i){var r=i.toMap(t);return!Object(a.j)(r)&&s(r,Object(n.a)(),i,h).intersects(e)}var h=new c.a},780:function(t,e,i){"use strict";i.d(e,"a",(function(){return G}));var a=i(2),r=i(3),n=i(5),c=i(6),s=i(0),o=i(33),h=i(71),l=i(4),p=i(31),u=i(1),v=(i(14),i(16),i(13),i(8)),b=i(26),f=i(11),y=i(22),d=i(108),g=i(153),_=i(512),m=i(415),O=i(734),G=function(t){Object(n.a)(i,t);var e=Object(c.a)(i);function i(t){var r;return Object(a.a)(this,i),(r=e.call(this,t)).layer=null,r.interactive=!0,r.selectable=!1,r.grabbable=!0,r.dragging=!1,r.cursor=null,r.events=new h.a.EventEmitter,r._circleCollisionCache=null,r._graphicSymbolChangedHandle=null,r._originalSymbol=null,r}return Object(r.a)(i,[{key:"graphic",set:function(t){this._circleCollisionCache=null,this._originalSymbol=t.symbol,this._set("graphic",t),this.attachSymbolChanged()}},{key:"elevationInfo",get:function(){var t="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,e=Object(g.f)(this.graphic),i=t?t.offset:0;return new m.a({mode:e,offset:i})}},{key:"focusedSymbol",set:function(t){t!==this._get("focusedSymbol")&&(this._set("focusedSymbol",t),this._updateGraphicSymbol(),this._circleCollisionCache=null)}},{key:"grabbableForEvent",value:function(){return!0}},{key:"grabbing",set:function(t){t!==this._get("grabbing")&&(this._set("grabbing",t),this._updateGraphicSymbol())}},{key:"hovering",set:function(t){t!==this._get("hovering")&&(this._set("hovering",t),this._updateGraphicSymbol())}},{key:"selected",set:function(t){t!==this._get("selected")&&(this._set("selected",t),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:t?"select":"deselect"}))}},{key:"_focused",get:function(){return this._get("hovering")||this._get("grabbing")}},{key:"destroy",value:function(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}},{key:"intersectionDistance",value:function(t){var e=this.graphic;if(!1===e.visible)return null;var i=e.geometry;if(Object(l.j)(i))return null;var a=this._get("focusedSymbol"),r=Object(l.k)(a)?a:e.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,t,i,r):this._intersectDistance3D(this.view,t,e)}},{key:"attach",value:function(){this.attachSymbolChanged(),Object(l.k)(this.layer)&&this.layer.add(this.graphic)}},{key:"detach",value:function(){this.detachSymbolChanged(),this._resetGraphicSymbol(),Object(l.k)(this.layer)&&this.layer.remove(this.graphic)}},{key:"attachSymbolChanged",value:function(){var t=this;this.detachSymbolChanged(),this._graphicSymbolChangedHandle=this.graphic.watch("symbol",(function(e){Object(l.k)(e)&&e!==t.focusedSymbol&&e!==t._originalSymbol&&(t._originalSymbol=e,t._focused&&Object(l.k)(t.focusedSymbol)&&(t.graphic.symbol=t.focusedSymbol))}),!0)}},{key:"detachSymbolChanged",value:function(){Object(l.k)(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}},{key:"_updateGraphicSymbol",value:function(){this.graphic.symbol=this._focused&&Object(l.k)(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}},{key:"_resetGraphicSymbol",value:function(){this.graphic.symbol=this._originalSymbol}},{key:"_intersectDistance2D",value:function(t,e,i,a){if(a=a||Object(_.h)(i),Object(l.j)(a))return null;var r=this._circleCollisionCache;if("point"!==i.type||"simple-marker"!==a.type)return Object(O.b)(e,i,t)?1:null;if(Object(l.j)(r)||!r.originalPoint.equals(i)){var n=i,c=t.spatialReference;if(Object(d.b)(n.spatialReference,c)){var s=Object(d.k)(n,c);r={originalPoint:n.clone(),mapPoint:s,radiusPx:Object(p.g)(a.size)},this._circleCollisionCache=r}}if(Object(l.k)(r)){var o=Object(p.i)(e,j),h=t.toScreen(r.mapPoint),u=r.radiusPx,v=h.x+Object(p.g)(a.xoffset),f=h.y-Object(p.g)(a.yoffset);return Object(b.j)(o,[v,f])<u*u?1:null}return null}},{key:"_intersectDistance3D",value:function(t,e,i){var a=t.toMap(e,{include:[i]});return a&&Object(d.p)(a,k,t.renderSpatialReference)?Object(f.m)(k,t.state.camera.eye):null}}]),i}(o.a);Object(s.a)([Object(u.b)({constructOnly:!0,nonNullable:!0})],G.prototype,"graphic",null),Object(s.a)([Object(u.b)({readOnly:!0})],G.prototype,"elevationInfo",null),Object(s.a)([Object(u.b)({constructOnly:!0,nonNullable:!0})],G.prototype,"view",void 0),Object(s.a)([Object(u.b)({value:null})],G.prototype,"focusedSymbol",null),Object(s.a)([Object(u.b)({constructOnly:!0})],G.prototype,"layer",void 0),Object(s.a)([Object(u.b)()],G.prototype,"interactive",void 0),Object(s.a)([Object(u.b)()],G.prototype,"selectable",void 0),Object(s.a)([Object(u.b)()],G.prototype,"grabbable",void 0),Object(s.a)([Object(u.b)({value:!1})],G.prototype,"grabbing",null),Object(s.a)([Object(u.b)()],G.prototype,"dragging",void 0),Object(s.a)([Object(u.b)()],G.prototype,"hovering",null),Object(s.a)([Object(u.b)({value:!1})],G.prototype,"selected",null),Object(s.a)([Object(u.b)()],G.prototype,"cursor",void 0),G=Object(s.a)([Object(v.a)("esri.views.interactive.GraphicManipulator")],G);var k=Object(y.e)(),j=Object(p.f)()},860:function(t,e,i){"use strict";i.r(e);var a=i(2),r=i(3),n=i(5),c=i(6),s=i(0),o=(i(65),i(71)),h=i(48),l=i(20),p=i(4),u=i(25),v=i(1),b=(i(16),i(14),i(13),i(8)),f=i(192),y=i(483),d=i(485),g=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-click"},_=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-double-click"},m=function(){function t(e,i,r,n,c,s,o,h,l,p){Object(a.a)(this,t),this.graphic=e,this.allGraphics=i,this.index=r,this.x=n,this.y=c,this.dx=s,this.dy=o,this.totalDx=h,this.totalDy=l,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move-start"}return Object(r.a)(t,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),t}(),O=function(){function t(e,i,r,n,c,s,o,h,l,p){Object(a.a)(this,t),this.graphic=e,this.allGraphics=i,this.index=r,this.x=n,this.y=c,this.dx=s,this.dy=o,this.totalDx=h,this.totalDy=l,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move"}return Object(r.a)(t,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),t}(),G=function(){function t(e,i,r,n,c,s,o,h,l,p){Object(a.a)(this,t),this.graphic=e,this.allGraphics=i,this.index=r,this.x=n,this.y=c,this.dx=s,this.dy=o,this.totalDx=h,this.totalDy=l,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move-stop"}return Object(r.a)(t,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),t}(),k=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-pointer-over"},j=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-pointer-out"},w=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-pointer-down"},x=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-pointer-up"},S=i(44),M=i(780),E=i(81),C=i(105),R=i(101),I=i(119),P=function(t){Object(n.a)(i,t);var e=Object(c.a)(i);function i(t){var r;return Object(a.a)(this,i),(r=e.call(this,t))._activeGraphic=null,r._indicators=[],r._dragEvent=null,r._handles=new h.a,r._hoverGraphic=null,r._initialDragGeometry=null,r._viewHandles=new h.a,r._manipulators=[],r.type="graphic-mover",r.callbacks={onGraphicClick:function(){},onGraphicDoubleClick:function(){},onGraphicMoveStart:function(){},onGraphicMove:function(){},onGraphicMoveStop:function(){},onGraphicPointerOver:function(){},onGraphicPointerOut:function(){},onGraphicPointerDown:function(){},onGraphicPointerUp:function(){}},r.enableMoveAllGraphics=!1,r.graphics=[],r.indicatorsEnabled=!0,r.layer=new f.a({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),r.view=null,r}return Object(r.a)(i,[{key:"initialize",value:function(){var t=this;Object(d.a)(this.view,this.layer),this.refresh(),this._handles.add([Object(u.d)(this,["graphics","graphics.length"],(function(){return t.refresh()})),Object(u.j)(this,"view.ready",(function(){t._viewHandles.add([t.view.on("immediate-click",(function(e){return t._clickHandler(e)}),S.b.TOOL),t.view.on("double-click",(function(e){return t._doubleClickHandler(e)}),S.b.TOOL),t.view.on("pointer-down",(function(e){return t._pointerDownHandler(e)}),S.b.TOOL),t.view.on("pointer-move",(function(e){return t._pointerMoveHandler(e)}),S.b.TOOL),t.view.on("pointer-up",(function(e){return t._pointerUpHandler(e)}),S.b.TOOL),t.view.on("drag",(function(e){return t._dragHandler(e)}),S.b.TOOL),t.view.on("key-down",(function(e){return t._keyDownHandler(e)}),S.b.TOOL)])}))])}},{key:"destroy",value:function(){var t;this._removeIndicators(),null==(t=this.view.map)||t.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach((function(t){return t.destroy()})),this._manipulators=null,this._handles=Object(p.e)(this._handles),this._viewHandles=Object(p.e)(this._viewHandles)}},{key:"state",get:function(){var t=!!this.get("view.ready"),e=!!this.get("graphics.length"),i=this._activeGraphic;return t&&e?i?"moving":"active":t?"ready":"disabled"}},{key:"refresh",value:function(){this._setUpIndicators(),this._setUpManipulators()}},{key:"reset",value:function(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null}},{key:"updateGeometry",value:function(t,e){var i=this.graphics[t];i&&(i.set("geometry",e),this._setUpIndicators())}},{key:"_clickHandler",value:function(t){var e=this._findTargetGraphic(Object(E.a)(t));if(e){var i=new g(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-click",i),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(i)}}},{key:"_doubleClickHandler",value:function(t){var e=this._findTargetGraphic(Object(E.a)(t));if(e){var i=new _(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-double-click",i),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(i)}}},{key:"_pointerDownHandler",value:function(t){var e=this._findTargetGraphic(Object(E.a)(t));if(e){this._activeGraphic=e;var i=t.x,a=t.y,r=new w(e,this.graphics.indexOf(e),i,a,t);this.emit("graphic-pointer-down",r),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(r)}else this._activeGraphic=null}},{key:"_pointerUpHandler",value:function(t){if(this._activeGraphic){var e=t.x,i=t.y,a=this.graphics.indexOf(this._activeGraphic),r=new x(this._activeGraphic,a,e,i,t);this.emit("graphic-pointer-up",r),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(r)}}},{key:"_pointerMoveHandler",value:function(t){if(!this._dragEvent){var e=this._findTargetGraphic(Object(E.a)(t));if(e){var i=t.x,a=t.y;if(this._hoverGraphic){if(this._hoverGraphic===e)return;var r=this.graphics.indexOf(this._hoverGraphic),n=new j(this.graphics[r],r,i,a,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",n),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(n)}var c=this.graphics.indexOf(e),s=new k(e,c,i,a,t);return this._hoverGraphic=e,this.emit("graphic-pointer-over",s),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(s))}if(this._hoverGraphic){var o=t.x,h=t.y,l=this.graphics.indexOf(this._hoverGraphic),p=new j(this.graphics[l],l,o,h,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",p),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(p)}}}},{key:"_dragHandler",value:function(t){var e=this;if(("start"===t.action||this._dragEvent)&&this._activeGraphic&&this._activeGraphic.geometry){"start"===t.action&&this._removeIndicators(),t.stopPropagation();var i=t.action,a=t.x,r=t.y,n=this.graphics.indexOf(this._activeGraphic),c=this._activeGraphic.geometry,s=this._dragEvent?a-this._dragEvent.x:0,o=this._dragEvent?r-this._dragEvent.y:0,h=a-t.origin.x,p=r-t.origin.y,u=Object(y.a)(c,s,o,this.view);if(this._activeGraphic.geometry=u,this.enableMoveAllGraphics&&this.graphics.forEach((function(t){t!==e._activeGraphic&&(t.geometry=Object(y.a)(t.geometry,s,o,e.view))})),this._dragEvent=t,"start"===i){this._initialDragGeometry=Object(l.a)(c);var v=new m(this._activeGraphic,this.graphics,n,a,r,s,o,h,p,t);this.emit("graphic-move-start",v),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(v),v.defaultPrevented&&this._activeGraphic.set("geometry",c)}else if("update"===i){var b=new O(this._activeGraphic,this.graphics,n,a,r,s,o,h,p,t);this.emit("graphic-move",b),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(b),b.defaultPrevented&&(this._activeGraphic.geometry=c)}else{var f=new G(this._activeGraphic,this.graphics,n,a,r,s,o,h,p,t);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",f),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(f),f.defaultPrevented&&(this.graphics[n].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null}}}},{key:"_keyDownHandler",value:function(t){"a"!==t.key&&"d"!==t.key&&"n"!==t.key||"moving"!==this.state||t.stopPropagation()}},{key:"_findTargetGraphic",value:function(t){var e=null,i=Number.MAX_VALUE;return this._manipulators.forEach((function(a){var r=a.intersectionDistance(t);Object(p.k)(r)&&r<i&&(i=r,e=a.graphic)})),e}},{key:"_setUpManipulators",value:function(){var t=this.graphics,e=this.view;this._manipulators.forEach((function(t){return t.destroy()})),this._manipulators=null!=t&&t.length?t.map((function(t){return new M.a({graphic:t,view:e})})):[]}},{key:"_setUpIndicators",value:function(){var t,e=this;this._removeIndicators(),this.indicatorsEnabled&&(this._indicators=(null==(t=this.graphics)?void 0:t.map((function(t){var i=t.clone();return i.symbol=e._getSymbolForIndicator(t),i})))||[],this.layer.addMany(this._indicators))}},{key:"_removeIndicators",value:function(){this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach((function(t){return t.destroy()})),this._indicators=[])}},{key:"_getSymbolForIndicator",value:function(t){if(Object(p.j)(t.symbol))return null;switch(t.symbol.type){case"cim":return new C.a({style:"circle",size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":var e=t.symbol,i=e.xoffset,a=e.yoffset,r=e.height,n=e.width,c=r===n?n:Math.max(r,n);return new C.a({xoffset:i,yoffset:a,size:c,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"simple-marker":var s=t.symbol,o=s.xoffset,h=s.yoffset,l=s.size,u=s.style;return new C.a({xoffset:o,yoffset:h,style:"circle"===u?"circle":"square",size:l+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"simple-fill":return new I.a({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new R.a({color:[255,127,0,1],style:"dash",width:1});case"text":var v=t.symbol,b=v.xoffset,f=v.yoffset;return new C.a({xoffset:b,yoffset:f,size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});default:return null}}}]),i}(o.a.EventedAccessor);Object(s.a)([Object(v.b)()],P.prototype,"_activeGraphic",void 0),Object(s.a)([Object(v.b)({readOnly:!0})],P.prototype,"type",void 0),Object(s.a)([Object(v.b)()],P.prototype,"callbacks",void 0),Object(s.a)([Object(v.b)()],P.prototype,"enableMoveAllGraphics",void 0),Object(s.a)([Object(v.b)()],P.prototype,"graphics",void 0),Object(s.a)([Object(v.b)()],P.prototype,"indicatorsEnabled",void 0),Object(s.a)([Object(v.b)()],P.prototype,"layer",void 0),Object(s.a)([Object(v.b)({readOnly:!0})],P.prototype,"state",null),Object(s.a)([Object(v.b)()],P.prototype,"view",void 0);var D=P=Object(s.a)([Object(b.a)("esri.views.draw.support.GraphicMover")],P);e.default=D}}]);
//# sourceMappingURL=76.b79daf37.chunk.js.map