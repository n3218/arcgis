(this["webpackJsonpfirst-example"]=this["webpackJsonpfirst-example"]||[]).push([[84],{1161:function(e,t,r){"use strict";r.r(t);var a=r(9),n=r(24),i=r(15),o=r(7),c=r.n(o),u=r(10),s=r(3),l=r(5),f=r(6),d=r(2),h=r(0),b=(r(14),r(4)),p=(r(1),r(16),r(13),r(8)),y=r(516),v=r(858),O=r(662),j=r(922),m=r(712),w=function e(t,r){Object(d.a)(this,e),this.offset=t,this.extent=r};function k(e){var t=e.key,r=new Map,a=256,n=O.E,i=e.tileInfoView.tileInfo.isWrappable;return r.set(Object(m.a)(t,-1,-1,i).id,new w([-n,-n],[n-a,n-a,n,n])),r.set(Object(m.a)(t,0,-1,i).id,new w([0,-n],[0,n-a,n,n])),r.set(Object(m.a)(t,1,-1,i).id,new w([n,-n],[0,n-a,a,n])),r.set(Object(m.a)(t,-1,0,i).id,new w([-n,0],[n-a,0,n,n])),r.set(Object(m.a)(t,1,0,i).id,new w([n,0],[0,0,a,n])),r.set(Object(m.a)(t,-1,1,i).id,new w([-n,n],[n-a,0,n,a])),r.set(Object(m.a)(t,0,1,i).id,new w([0,n],[0,0,n,a])),r.set(Object(m.a)(t,1,1,i).id,new w([n,n],[0,0,a,a])),r}var g=function(e){Object(l.a)(r,e);var t=Object(f.a)(r);function r(){var e;return Object(d.a)(this,r),(e=t.apply(this,arguments)).type="heatmap",e._tileKeyToFeatureSets=new Map,e}return Object(s.a)(r,[{key:"initialize",value:function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}},{key:"update",value:function(){var e=Object(u.a)(c.a.mark((function e(t,r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("heatmap"===(a=r.schema.processors[0]).type){e.next=3;break}return e.abrupt("return");case 3:Object(y.a)(this._schema,a)&&(t.mesh=!0,this._schema=a);case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"onTileUpdate",value:function(e){var t,r=Object(i.a)(e.removed);try{for(r.s();!(t=r.n()).done;){var a=t.value;this._tileKeyToFeatureSets.delete(a.key.id)}}catch(n){r.e(n)}finally{r.f()}}},{key:"onTileClear",value:function(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}},{key:"onTileMessage",value:function(){var e=Object(u.a)(c.a.mark((function e(t,r,i){var o,u,s,l,f,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._tileKeyToFeatureSets.has(t.key.id)||this._tileKeyToFeatureSets.set(t.key.id,new Map),o=this._tileKeyToFeatureSets.get(t.key.id),Object(b.k)(r.addOrUpdate)&&r.addOrUpdate.hasFeatures&&o.set(r.addOrUpdate.instance,r),!r.end){e.next=7;break}return u=[],s=k(t),this._tileKeyToFeatureSets.forEach((function(e,r){if(r===t.key.id)e.forEach((function(e){return Object(b.b)(e.addOrUpdate,(function(e){return u.push(e)}))}));else if(s.has(r)){var a=s.get(r),i=Object(n.a)(a.offset,2),o=i[0],c=i[1];e.forEach((function(e){return Object(b.b)(e.addOrUpdate,(function(e){var t=e.transform(o,c,1,1);u.push(t)}))}))}})),l=Object(v.a)(u,this._schema.mesh,512,512),f={tileKey:t.key.id,intensityInfo:l},d=[l.matrix],e.abrupt("return",this.remoteClient.invoke("tileRenderer.onTileData",f,Object(a.a)(Object(a.a)({},i),{},{transferList:d})));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,a){return e.apply(this,arguments)}}()},{key:"onTileError",value:function(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}}]),r}(j.a),x=g=Object(h.a)([Object(p.a)("esri.views.2d.layers.features.processors.HeatmapProcessor")],g);t.default=x},712:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(687);function a(e,t,r,a){var n=e.clone(),i=1<<n.level,o=n.col+t,c=n.row+r;return a&&o<0?(n.col=o+i,n.world-=1):o>=i?(n.col=o-i,n.world+=1):n.col=o,n.row=c,n}},858:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return o}));var a=r(15),n=r(57),i=r(40),o=function(){if(!("document"in n.a))return function(){return null};var e=document.createElement("canvas"),t=e.getContext("2d");return e.height=512,e.width=1,function(r){t.clearRect(0,0,1,e.height);var n,i=t.createLinearGradient(0,0,0,e.height),o=Object(a.a)(r.colorStops);try{for(o.s();!(n=o.n()).done;){var c=n.value,u=c.ratio,s=c.color;i.addColorStop(Math.max(u,.001),"rgba(".concat(s[0],", ").concat(s[1],", ").concat(s[2],", ").concat(s[3],")"))}}catch(l){o.e(l)}finally{o.f()}return t.fillStyle=i,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}}();function c(e,t,r,n){var i,o,c=t.blurRadius,u=t.fieldOffset,l=t.field,f=new Float64Array(r*n),d=s(c),h=Math.round(3*c),b=Number.NEGATIVE_INFINITY,p=function(e,t){return null!=e?"string"==typeof t?function(t){return-1*+t.readAttribute(e)}:function(r){return+r.readAttribute(e)+t}:function(e){return 1}}(l,u),y=new Set,v=Object(a.a)(e);try{for(v.s();!(o=v.n()).done;)for(var O=o.value.getCursor();O.next();){var j=O.getObjectId();if(!y.has(j)){y.add(j);var m=O.readLegacyPointGeometry(),w=128;if(!(m.x<-128||m.x>=r+w||m.y<-128||m.y>n+w))for(var k=+p(O),g=Math.round(m.x)-h,x=Math.round(m.y)-h,M=Math.max(0,g),T=Math.max(0,x),S=Math.min(n,Math.round(m.y)+h),U=Math.min(r,Math.round(m.x)+h),I=T;I<S;I++)for(var F=d[I-x],A=M;A<U;A++){var _=d[A-g];(i=f[I*r+A]+=F*_*k)>b&&(b=i)}}}}catch(K){v.e(K)}finally{v.f()}return{matrix:f.buffer,max:b}}function u(e,t,r,a,n,o){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);var c=e.getImageData(0,0,t,t);r&&a&&c.data.set(new Uint8ClampedArray(function(e,t,r,a,n){for(var o=new Uint32Array(e*e),c=("buffer"in t?t:new Float64Array(t)),u=("buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer)),s=u.length/(n-a),l=0;l<c.length;l++){var f=c[l],d=Math.floor((f-a)*s);o[l]=u[Object(i.e)(d,0,u.length-1)]}return o.buffer}(t,r,a,n,o))),e.putImageData(c,0,0)}function s(e){for(var t=Math.round(3*e),r=2*e*e,a=new Float64Array(2*t+1),n=0;n<=a.length;n++)a[n]=Math.exp(-Math.pow(n-t,2)/r)/Math.sqrt(2*Math.PI)*(e/2);return a}},922:function(e,t,r){"use strict";var a=r(2),n=r(3),i=r(5),o=r(6),c=r(0),u=r(118),s=r(1),l=(r(14),r(16),r(13),r(8)),f=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"initialize",value:function(){}},{key:"destroy",value:function(){}},{key:"supportsTileUpdates",get:function(){return!1}},{key:"spatialReference",get:function(){var e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}}]),r}(u.a);Object(c.a)([Object(s.b)({readOnly:!0})],f.prototype,"supportsTileUpdates",null),Object(c.a)([Object(s.b)({constructOnly:!0})],f.prototype,"remoteClient",void 0),Object(c.a)([Object(s.b)({constructOnly:!0})],f.prototype,"service",void 0),Object(c.a)([Object(s.b)()],f.prototype,"spatialReference",null),Object(c.a)([Object(s.b)({constructOnly:!0})],f.prototype,"tileInfo",void 0),Object(c.a)([Object(s.b)({constructOnly:!0})],f.prototype,"tileStore",void 0);var d=f=Object(c.a)([Object(l.a)("esri.views.2d.layers.features.processors.BaseProcessor")],f);t.a=d}}]);
//# sourceMappingURL=84.09e5181a.chunk.js.map