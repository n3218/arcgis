(this["webpackJsonpfirst-example"]=this["webpackJsonpfirst-example"]||[]).push([[89],{827:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return O})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return f}));var a=r(2),o=r(5),n=r(6),i=r(0),c=r(21),s=r(1),p=(r(14),r(16),r(13),r(43)),u=r(8),b=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).nodesPerPage=null,e.rootIndex=0,e.lodSelectionMetricType=null,e}return r}(c.a);Object(i.a)([Object(s.b)({type:Number})],b.prototype,"nodesPerPage",void 0),Object(i.a)([Object(s.b)({type:Number})],b.prototype,"rootIndex",void 0),Object(i.a)([Object(s.b)({type:String})],b.prototype,"lodSelectionMetricType",void 0),b=Object(i.a)([Object(u.a)("esri.layer.support.I3SNodePageDefinition")],b);var l=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).factor=1,e}return r}(c.a);Object(i.a)([Object(s.b)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),Object(i.a)([Object(s.b)({type:Number})],l.prototype,"factor",void 0),l=Object(i.a)([Object(u.a)("esri.layer.support.I3SMaterialTexture")],l);var y=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).baseColorFactor=[1,1,1,1],e.baseColorTexture=null,e.metallicRoughnessTexture=null,e.metallicFactor=1,e.roughnessFactor=1,e}return r}(c.a);Object(i.a)([Object(s.b)({type:[Number]})],y.prototype,"baseColorFactor",void 0),Object(i.a)([Object(s.b)({type:l})],y.prototype,"baseColorTexture",void 0),Object(i.a)([Object(s.b)({type:l})],y.prototype,"metallicRoughnessTexture",void 0),Object(i.a)([Object(s.b)({type:Number})],y.prototype,"metallicFactor",void 0),Object(i.a)([Object(s.b)({type:Number})],y.prototype,"roughnessFactor",void 0),y=Object(i.a)([Object(u.a)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],y);var O=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).alphaMode="opaque",e.alphaCutoff=.25,e.doubleSided=!1,e.cullFace="none",e.normalTexture=null,e.occlusionTexture=null,e.emissiveTexture=null,e.emissiveFactor=null,e.pbrMetallicRoughness=null,e}return r}(c.a);Object(i.a)([Object(p.a)({opaque:"opaque",mask:"mask",blend:"blend"})],O.prototype,"alphaMode",void 0),Object(i.a)([Object(s.b)({type:Number})],O.prototype,"alphaCutoff",void 0),Object(i.a)([Object(s.b)({type:Boolean})],O.prototype,"doubleSided",void 0),Object(i.a)([Object(p.a)({none:"none",back:"back",front:"front"})],O.prototype,"cullFace",void 0),Object(i.a)([Object(s.b)({type:l})],O.prototype,"normalTexture",void 0),Object(i.a)([Object(s.b)({type:l})],O.prototype,"occlusionTexture",void 0),Object(i.a)([Object(s.b)({type:l})],O.prototype,"emissiveTexture",void 0),Object(i.a)([Object(s.b)({type:[Number]})],O.prototype,"emissiveFactor",void 0),Object(i.a)([Object(s.b)({type:y})],O.prototype,"pbrMetallicRoughness",void 0),O=Object(i.a)([Object(u.a)("esri.layer.support.I3SMaterialDefinition")],O);var j=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return r}(c.a);Object(i.a)([Object(s.b)({type:String,json:{read:{source:["name","index"],reader:function(e,t){return null!=e?e:"".concat(t.index)}}}})],j.prototype,"name",void 0),Object(i.a)([Object(p.a)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],j.prototype,"format",void 0),j=Object(i.a)([Object(u.a)("esri.layer.support.I3STextureFormat")],j);var f=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).atlas=!1,e}return r}(c.a);Object(i.a)([Object(s.b)({type:[j]})],f.prototype,"formats",void 0),Object(i.a)([Object(s.b)({type:Boolean})],f.prototype,"atlas",void 0),f=Object(i.a)([Object(u.a)("esri.layer.support.I3STextureSetDefinition")],f);var d=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return r}(c.a);Object(i.a)([Object(p.a)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],d.prototype,"type",void 0),Object(i.a)([Object(s.b)({type:Number})],d.prototype,"component",void 0),d=Object(i.a)([Object(u.a)("esri.layer.support.I3SGeometryAttribute")],d);var v=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return r}(c.a);Object(i.a)([Object(p.a)({draco:"draco"})],v.prototype,"encoding",void 0),Object(i.a)([Object(s.b)({type:[String]})],v.prototype,"attributes",void 0),v=Object(i.a)([Object(u.a)("esri.layer.support.I3SGeometryCompressedAttributes")],v);var h=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).offset=0,e}return r}(c.a);Object(i.a)([Object(s.b)({type:Number})],h.prototype,"offset",void 0),Object(i.a)([Object(s.b)({type:d})],h.prototype,"position",void 0),Object(i.a)([Object(s.b)({type:d})],h.prototype,"normal",void 0),Object(i.a)([Object(s.b)({type:d})],h.prototype,"uv0",void 0),Object(i.a)([Object(s.b)({type:d})],h.prototype,"color",void 0),Object(i.a)([Object(s.b)({type:d})],h.prototype,"uvRegion",void 0),Object(i.a)([Object(s.b)({type:d})],h.prototype,"featureId",void 0),Object(i.a)([Object(s.b)({type:d})],h.prototype,"faceRange",void 0),Object(i.a)([Object(s.b)({type:v})],h.prototype,"compressedAttributes",void 0),h=Object(i.a)([Object(u.a)("esri.layer.support.I3SGeometryBuffer")],h);var m=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return r}(c.a);Object(i.a)([Object(p.a)({triangle:"triangle"})],m.prototype,"topology",void 0),Object(i.a)([Object(s.b)()],m.prototype,"geometryBuffers",void 0),m=Object(i.a)([Object(u.a)("esri.layer.support.I3SGeometryDefinition")],m)},861:function(e,t,r){"use strict";r.d(t,"a",(function(){return S}));var a=r(7),o=r.n(a),n=r(10),i=r(9),c=r(15),s=r(4),p=r(561),u=r(35),b=r(540),l=r(173),y=r(138),O=r(1);function j(e){return f[function(e){return e instanceof Blob?e.type:function(e){var t=Object(u.n)(e);return h[t]||d}(e.url)}(e)]||v}var f={},d="text/plain",v=f[d],h={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(var m in h)f[h[m]]=m;var g=r(111);function S(e){var t=Object(s.k)(e)&&e.origins?e.origins:[void 0];return function(r,a){var o,n=function(e,t,r){if(Object(s.k)(e)&&"resource"===e.type)return function(e,t,r){var a=Object(l.b)(t,r);return{type:String,read:function(e,t,r){var o=Object(g.d)(e,t,r);return a.type===String?o:"function"==typeof a.type?new a.type({url:o}):void 0},write:{writer:function(t,o,n,c){if(!c||!c.resources)return"string"==typeof t?void(o[n]=Object(g.e)(t,c)):void(o[n]=t.write({},c));var b=function(e){return Object(s.j)(e)?null:"string"==typeof e?e:e.url}(t),l=b?Object(g.e)(b,Object(i.a)(Object(i.a)({},c),{},{verifyItemRelativeUrls:c&&c.verifyItemRelativeUrls?{writtenUrls:c.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null}),1):null,O=a.type!==String&&(!Object(p.a)(this)||c&&c.origin&&this.originIdOf(r)>Object(y.d)(c.origin));c&&c.portalItem&&Object(s.k)(l)&&!Object(u.s)(l)?O?function(e,t,r,a,o,n,i,c){var s=i.portalItem.resourceFromPath(a),p=k(r,a,i);j(p)===Object(u.n)(s.path)?(w(e,t,s,p,i.resources.toUpdate),o[n]=a):x(e,t,r,a,o,n,i,c)}(this,r,t,l,o,n,c,e):function(e,t,r,a){a.resources.toKeep.push({resource:a.portalItem.resourceFromPath(e)}),t[r]=e}(l,o,n,c):c&&c.portalItem&&(Object(s.j)(l)||Object(s.k)(Object(g.b)(l))||Object(u.t)(l)||O)?x(this,r,t,l,o,n,c,e):o[n]=l}}}}(e,t,r);switch(Object(s.k)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":return{read:g.c.read,write:g.c.write}}}(e,r,a),b=Object(c.a)(t);try{for(b.s();!(o=b.n()).done;){var f=o.value,d=Object(O.c)(r,f,a);for(var v in n)d[v]=n[v]}}catch(h){b.e(h)}finally{b.f()}}}function x(e,t,r,a,o,n,i,c){var p=Object(b.a)(),l=k(r,a,i),y=Object(u.z)(Object(s.i)(c,"prefix"),p),O="".concat(y,".").concat(j(l)),f=i.portalItem.resourceFromPath(O);Object(u.t)(a)&&i.resources.pendingOperations.push(function(e){return I.apply(this,arguments)}(a).then((function(e){f.path="".concat(y,".").concat(j(e)),o[n]=f.itemRelativeUrl})).catch((function(){}))),w(e,t,f,l,i.resources.toAdd),o[n]=f.itemRelativeUrl}function w(e,t,r,a,o){o.push({resource:r,content:a,finish:function(r){!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function k(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}function I(){return(I=Object(n.a)(o.a.mark((function e(t){var a,n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(r.bind(null,63));case 2:return a=e.sent.default,e.next=5,a(t,{responseType:"blob"});case 5:return n=e.sent,i=n.data,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},989:function(e,t,r){"use strict";r.r(t);var a,o=r(7),n=r.n(o),i=r(10),c=r(9),s=r(2),p=r(3),u=r(5),b=r(6),l=r(0),y=r(19),O=r(48),j=r(4),f=r(266),d=r(23),v=r(25),h=r(1),m=(r(14),r(16),r(13),r(36)),g=r(8),S=r(861),x=r(287),w=r(530),k=r(524),I=r(511),T=r(510),N=r(409),R=r(862),M=r(144),U=r(827),_=r(15),F=r(63),P=r(38),J=r(21),L=r(35),D=(r(76),r(20)),A=r(165),C=r(32),z=r(108),B=r(99),K=a=function(e){Object(u.a)(r,e);var t=Object(b.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).geometry=null,a.type="clip",a}return Object(p.a)(r,[{key:"writeGeometry",value:function(e,t,r,a){if(a.layer&&a.layer.spatialReference&&!a.layer.spatialReference.equals(this.geometry.spatialReference)){if(!Object(z.b)(e.spatialReference,a.layer.spatialReference))return void(a&&a.messages&&a.messages.push(new A.a("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:a.layer.spatialReference,context:a})));var o=new B.a;Object(z.q)(e,o,a.layer.spatialReference),t[r]=o.toJSON(a)}else t[r]=e.toJSON(a);delete t[r].spatialReference}},{key:"clone",value:function(){return new a({geometry:Object(D.a)(this.geometry),type:this.type})}}]),r}(J.a);Object(l.a)([Object(h.b)({type:B.a}),Object(S.a)()],K.prototype,"geometry",void 0),Object(l.a)([Object(C.a)(["web-scene","portal-item"],"geometry")],K.prototype,"writeGeometry",null),Object(l.a)([Object(h.b)({type:["clip","mask","replace"],nonNullable:!0}),Object(S.a)()],K.prototype,"type",void 0);var G,q=K=a=Object(l.a)([Object(g.a)("esri.layers.support.SceneModification")],K),V=G=function(e){Object(u.a)(r,e);var t=Object(b.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).url=null,a}return Object(p.a)(r,[{key:"toJSON",value:function(e){return this.toArray().map((function(t){return t.toJSON(e)})).filter((function(e){return!!e.geometry}))}},{key:"clone",value:function(){return new G({url:this.url,items:this.items.map((function(e){return e.clone()}))})}},{key:"_readModifications",value:function(e,t){var r,a=Object(_.a)(e);try{for(a.s();!(r=a.n()).done;){var o=r.value;this.add(q.fromJSON(o,t))}}catch(n){a.e(n)}finally{a.f()}}}],[{key:"fromJSON",value:function(e,t){var r=new G;return r._readModifications(e,t),r}},{key:"fromUrl",value:function(){var e=Object(i.a)(n.a.mark((function e(t,r,a){var o,i,s,p,u,b,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={url:Object(L.K)(t),origin:"service"},e.next=3,Object(F.default)(t,{responseType:"json",signal:Object(j.i)(a,"signal")});case 3:i=e.sent,s=r.toJSON(),p=[],u=Object(_.a)(i.data);try{for(u.s();!(b=u.n()).done;)l=b.value,p.push(q.fromJSON(Object(c.a)(Object(c.a)({},l),{},{geometry:Object(c.a)(Object(c.a)({},l.geometry),{},{spatialReference:s})}),o))}catch(n){u.e(n)}finally{u.f()}return e.abrupt("return",new G({url:t,items:p}));case 9:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}()}]),r}(Object(J.b)(P.a.ofType(q)));Object(l.a)([Object(h.b)({type:String})],V.prototype,"url",void 0);var E=V=G=Object(l.a)([Object(g.a)("esri.layers.support.SceneModifications")],V),H=r(111),Q=function(e){Object(u.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).handles=new O.a,e.geometryType="mesh",e.operationalLayerType="IntegratedMeshLayer",e.type="integrated-mesh",e.nodePages=null,e.materialDefinitions=null,e.textureSetDefinitions=null,e.geometryDefinitions=null,e.serviceUpdateTimeStamp=null,e.profile="mesh-pyramids",e.modifications=null,e._modificationsSource=null,e.elevationInfo=null,e.path=null,e}return Object(p.a)(r,[{key:"destroy",value:function(){this.handles.destroy()}},{key:"initialize",value:function(){var e=this;this.handles.add(Object(v.b)(this,"modifications","after-changes",(function(){return e.modifications=e.modifications}),null,null,!0))}},{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(c.a)({url:e},t):e}},{key:"readModifications",value:function(e,t,r){this._modificationsSource={url:Object(H.a)(e,r),context:r}}},{key:"load",value:function(){var e=Object(i.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(this.addResolvingPromise(this._doLoad(t)),this));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_doLoad",value:function(){var e=Object(i.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(j.i)(t,"signal"),e.prev=1,e.next=4,this.loadFromPortal({supportedTypes:["Scene Service"]},t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),Object(d.u)(e.t0);case 9:return e.next=11,this._fetchService(r);case 11:if(!Object(j.k)(this._modificationsSource)){e.next=16;break}return e.next=14,E.fromUrl(this._modificationsSource.url,this.spatialReference,t);case 14:a=e.sent,this.setAtOrigin("modifications",a,this._modificationsSource.context.origin),this._modificationsSource=null;case 16:return e.next=18,this._fetchIndexAndUpdateExtent(this.nodePages,r);case 18:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"beforeSave",value:function(){if(!Object(j.j)(this._modificationsSource))return this.load().then((function(){}),(function(){}))}},{key:"saveAs",value:function(){var e=Object(i.a)(n.a.mark((function e(t,r){var a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(1,Object(c.a)(Object(c.a)({},r),{},{getTypeKeywords:function(){return a._getTypeKeywords()},portalItemLayerType:"integrated-mesh"}),t));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=Object(i.a)(n.a.mark((function e(){var t,r=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={getTypeKeywords:function(){return r._getTypeKeywords()},portalItemLayerType:"integrated-mesh"},e.abrupt("return",this._debouncedSaveOperations(0,t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validateLayer",value:function(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new y.a("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new y.a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new y.a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}},{key:"_getTypeKeywords",value:function(){return["IntegratedMeshLayer"]}}]),r}(Object(R.a)(Object(k.a)(Object(I.a)(Object(T.a)(Object(N.a)(Object(f.a)(Object(w.a)(x.a))))))));Object(l.a)([Object(h.b)({type:String,readOnly:!0})],Q.prototype,"geometryType",void 0),Object(l.a)([Object(h.b)({type:["show","hide"]})],Q.prototype,"listMode",void 0),Object(l.a)([Object(h.b)({type:["IntegratedMeshLayer"]})],Q.prototype,"operationalLayerType",void 0),Object(l.a)([Object(h.b)({json:{read:!1},readOnly:!0})],Q.prototype,"type",void 0),Object(l.a)([Object(h.b)({type:U.c,readOnly:!0})],Q.prototype,"nodePages",void 0),Object(l.a)([Object(h.b)({type:[U.b],readOnly:!0})],Q.prototype,"materialDefinitions",void 0),Object(l.a)([Object(h.b)({type:[U.d],readOnly:!0})],Q.prototype,"textureSetDefinitions",void 0),Object(l.a)([Object(h.b)({type:[U.a],readOnly:!0})],Q.prototype,"geometryDefinitions",void 0),Object(l.a)([Object(h.b)({readOnly:!0})],Q.prototype,"serviceUpdateTimeStamp",void 0),Object(l.a)([Object(h.b)({type:E}),Object(S.a)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],Q.prototype,"modifications",void 0),Object(l.a)([Object(m.a)(["web-scene","portal-item"],"modifications")],Q.prototype,"readModifications",null),Object(l.a)([Object(h.b)(M.b)],Q.prototype,"elevationInfo",void 0),Object(l.a)([Object(h.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],Q.prototype,"path",void 0);var W=Q=Object(l.a)([Object(g.a)("esri.layers.IntegratedMeshLayer")],Q);t.default=W}}]);
//# sourceMappingURL=89.d99f4cf9.chunk.js.map