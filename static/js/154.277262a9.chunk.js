(this["webpackJsonpfirst-example"]=this["webpackJsonpfirst-example"]||[]).push([[154],{656:function(e,t,r){"use strict";r.r(t),r.d(t,"previewCIMSymbol",(function(){return p}));var a=r(7),n=r.n(a),i=r(10),c=r(31),o=r(1013),u=r(355),s=new o.CIMSymbolRasterizer(null,!0),l=120;function p(e){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(n.a.mark((function e(t){var r,a,i,o,p,m,d,y,h,f,g,b,v,w,O,j,M,D,x,C=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=C.length>1&&void 0!==C[1]?C[1]:{},a=r.size,i=r.maxSize,o=r.node,p=r.opacity,m=r.cimOptions||r,d=m.feature,y=m.fieldMap,h=m.geometryType,f=m.style,g=Object(u.c)(t),(b=Math.min(null!=a?a:g,null!=i?i:Object(c.h)(l)))!==g&&(t=t.clone(),Object(u.e)(t,b,{preserveOutlineWidth:!0})),v=3,t&&t.data&&t.data.symbol&&"CIMPointSymbol"!==t.data.symbol.type&&(v=1),e.next=7,s.rasterizeCIMSymbolAsync(t,d,y,h,{scaleFactor:v,style:f});case 7:return w=e.sent,(O=document.createElement("canvas")).width=w.imageData.width,O.height=w.imageData.height,O.getContext("2d").putImageData(w.imageData,0,0),j=O.width/v,M=O.height/v,null==a||null!=(null==r?void 0:r.scale)&&!(null==r?void 0:r.scale)||(j=(D=j/M)<=1?Math.ceil(b*D):b,M=D<=1?b:Math.ceil(b/D)),x=new Image(j,M),e.abrupt("return",(x.src=O.toDataURL(),null!=p&&(x.style.opacity="".concat(p)),o&&o.appendChild(x),x));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},679:function(e,t,r){"use strict";var a=r(9),n=r(19),i=r(13),c=r(378);var o=new Map;function u(e,t,r){var u=r.transform,s=r.hasZ,l=r.hasM;o.has(t)||o.set(t,function(e){var t={};switch(e){case"esriGeometryPoint":return function(e,r,a,n){return Object(c.e)(r,t,e,a,n)};case"esriGeometryPolygon":return function(e,r,a,n){return Object(c.f)(r,t,e,a,n)};case"esriGeometryPolyline":return function(e,r,a,n){return Object(c.g)(r,t,e,a,n)};case"esriGeometryMultipoint":return function(e,r,a,n){return Object(c.d)(r,t,e,a,n)};default:return i.a.getLogger("esri.views.2d.support.arcadeOnDemand").error(new n.a("mapview-arcade","Unable to handle geometryType: ".concat(e))),function(e){return e}}}(t));var p=o.get(t)(e.geometry,u,s,l);return Object(a.a)(Object(a.a)({},e),{},{geometry:p})}t.a=function(e,t,r,n,c){var o=e.referencesGeometry()&&c?u(t,n,c):t,s=e.repurposeFeature(o);try{return e.evaluate(Object(a.a)(Object(a.a)({},r),{},{$feature:s}))}catch(l){return i.a.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",l),null}}}}]);
//# sourceMappingURL=154.277262a9.chunk.js.map