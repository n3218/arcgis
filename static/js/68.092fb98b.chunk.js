(this["webpackJsonpfirst-example"]=this["webpackJsonpfirst-example"]||[]).push([[68],{1206:function(e,t,i){"use strict";i.r(t);var n=i(2),r=i(3),a=i(5),s=i(6),o=i(0),c=(i(1),i(14),i(16),i(13),i(8)),u=i(858),l=i(935),h=i(923),d=function(){function e(){Object(n.a)(this,e),this.gradient=null,this.height=512,this.width=512}return Object(r.a)(e,[{key:"render",value:function(e){Object(u.b)(e,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}]),e}(),f=function(e){Object(a.a)(i,e);var t=Object(s.a)(i);function i(e){var r;return Object(n.a)(this,i),(r=t.call(this,e))._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},r.featuresView={attributeView:{initialize:function(){},requestUpdate:function(){}},requestRender:function(){}},r._container=new l.a(e.tileInfoView),r}return Object(r.a)(i,[{key:"createTile",value:function(e){var t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}},{key:"onConfigUpdate",value:function(){var e=this,t=this.layer.renderer;if("heatmap"===t.type){var i=t.minPixelIntensity,n=t.maxPixelIntensity;this._intensityInfo.minPixelIntensity=i,this._intensityInfo.maxPixelIntensity=n,this._gradient=Object(u.c)(t.toJSON()),this.tiles.forEach((function(t){var r=t.bitmap.source;r&&(r.minPixelIntensity=i,r.maxPixelIntensity=n,r.gradient=e._gradient,t.bitmap.invalidateTexture())}))}}},{key:"hitTest",value:function(){return Promise.resolve([])}},{key:"install",value:function(e){e.addChild(this._container)}},{key:"uninstall",value:function(e){this._container.removeAllChildren(),e.removeChild(this._container)}},{key:"disposeTile",value:function(e){this._container.removeChild(e),e.destroy()}},{key:"supportsRenderer",value:function(e){return e&&"heatmap"===e.type}},{key:"onTileData",value:function(e){var t=this.tiles.get(e.tileKey);if(t){var i=e.intensityInfo,n=this._intensityInfo,r=n.minPixelIntensity,a=n.maxPixelIntensity,s=t.bitmap.source||new d;s.intensities=i&&i.matrix||null,s.minPixelIntensity=r,s.maxPixelIntensity=a,s.gradient=this._gradient,t.bitmap.source=s,this._container.addChild(t),this.requestUpdate()}}},{key:"onTileError",value:function(e){console.error(e)}},{key:"lockGPUUploads",value:function(){}},{key:"unlockGPUUploads",value:function(){}}]),i}(h.a),y=f=Object(o.a)([Object(c.a)("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],f);t.default=y},701:function(e,t,i){"use strict";var n=i(15),r=i(9),a=i(2),s=i(3),o=i(46),c=i(45),u=i(5),l=i(6),h=i(14),d=i(663),f=i(720),y=i(739),v=i(735),b=function(e,t){return e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col},p=function(e){Object(u.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(a.a)(this,i),(n=t.call(this))._tileInfoView=e,n}return Object(s.a)(i,[{key:"requiresDedicatedFBO",get:function(){return!1}},{key:"renderChildren",value:function(e){this.sortChildren(b),this.setStencilReference(),Object(o.a)(Object(c.a)(i.prototype),"renderChildren",this).call(this,e)}},{key:"createRenderParams",value:function(e){var t=e.state;return Object(r.a)(Object(r.a)({},Object(o.a)(Object(c.a)(i.prototype),"createRenderParams",this).call(this,e)),{},{requiredLevel:this._tileInfoView.getClosestInfoForScale(t.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(t.scale)})}},{key:"prepareRenderPasses",value:function(e){var t=this,n=Object(o.a)(Object(c.a)(i.prototype),"prepareRenderPasses",this).call(this,e);return n.push(e.registerRenderPass({name:"stencil",brushes:[v.a],drawPhase:d.c.DEBUG|d.c.MAP|d.c.HIGHLIGHT,target:function(){return t.getStencilTarget()}})),Object(h.a)("esri-tiles-debug")&&n.push(e.registerRenderPass({name:"tileInfo",brushes:[y.a],drawPhase:d.c.DEBUG,target:function(){return t.children}})),n}},{key:"getStencilTarget",value:function(){return this.children}},{key:"updateTransforms",value:function(e){var t,i=Object(n.a)(this.children);try{for(i.s();!(t=i.n()).done;){var r=t.value,a=this._tileInfoView.getTileResolution(r.key);r.setTransform(e,a)}}catch(s){i.e(s)}finally{i.f()}}},{key:"setStencilReference",value:function(){var e,t=1,i=Object(n.a)(this.children);try{for(i.s();!(e=i.n()).done;){e.value.stencilRef=t++}}catch(r){i.e(r)}finally{i.f()}}}]),i}(f.a);t.a=p},750:function(e,t,i){"use strict";var n=i(2),r=i(3),a=function(){function e(t,i,r){Object(n.a)(this,e),this.pixelBlock=t,this.extent=i,this.originalPixelBlock=r}return Object(r.a)(e,[{key:"width",get:function(){return this.pixelBlock?this.pixelBlock.width:0}},{key:"height",get:function(){return this.pixelBlock?this.pixelBlock.height:0}},{key:"render",value:function(e){var t=this.pixelBlock;if(t){var i=this.filter({pixelBlock:t}),n=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(n),e.putImageData(r,0,0)}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({pixelBlock:this.pixelBlock});return{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}]),e}();t.a=a},754:function(e,t,i){"use strict";i.d(t,"a",(function(){return g}));var n=i(24),r=i(2),a=i(3),s=i(17),o=i(46),c=i(45),u=i(5),l=i(6),h=i(145),d=i(271),f=i(478),y=(i(134),i(376),i(14),i(103),i(229),i(334),i(98)),v=(i(200),i(525)),b=i(750);function p(e,t,i){var n={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(n.width=t,n.height=i),new y.a(e,n)}var g=function(e){Object(u.a)(i,e);var t=Object(l.a)(i);function i(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(r.a)(this,i),(e=t.call(this)).requestRenderOnSourceChangedEnabled=o,e._textureInvalidated=!0,e.stencilRef=0,e.coordScale=[1,1],e._height=void 0,e.pixelRatio=1,e.resolution=0,e.rotation=0,e._source=null,e._width=void 0,e.x=0,e.y=0,e.transforms={dvs:Object(d.b)()},e.blendFunction=a,e.source=n,e.requestRender=e.requestRender.bind(Object(s.a)(e)),e}return Object(a.a)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null)}},{key:"isSourceScaled",get:function(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()}},{key:"sourceHeight",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}},{key:"sourceWidth",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}},{key:"width",get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){Object(o.a)(Object(c.a)(i.prototype),"beforeRender",this).call(this,e),this.updateTexture(e.context)}},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"setTransform",value:function(e){var t=Object(h.b)(this.transforms.dvs),i=e.toScreenNoRotation([0,0],this.x,this.y),r=Object(n.a)(i,2),a=r[0],s=r[1],o=this.resolution/this.pixelRatio/e.resolution,c=o*this.width,u=o*this.height,l=Math.PI*this.rotation/180;Object(h.c)(t,t,Object(f.b)(a,s)),Object(h.c)(t,t,Object(f.b)(c/2,u/2)),Object(h.k)(t,t,-l),Object(h.c)(t,t,Object(f.b)(-c/2,-u/2)),Object(h.h)(t,t,Object(f.b)(c,u)),Object(h.i)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(this._textureInvalidated){this._textureInvalidated=!1,this._texture||(this.source?this._texture=p(e,this.sourceWidth,this.sourceHeight):this._texture=p(e));var i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function(e){return e&&"render"in e}(i))if(i instanceof b.a){var n=i.getRenderedRasterPixels();this._texture.setData(n.renderedRasterPixels)}else this._texture.setData(function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(i));else(function(e){return e&&!("render"in e)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}}},{key:"onAttach",value:function(){this.invalidateTexture()}},{key:"onDetach",value:function(){this.invalidateTexture()}}]),i}(v.a)},858:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return s}));var n=i(15),r=i(57),a=i(40),s=function(){if(!("document"in r.a))return function(){return null};var e=document.createElement("canvas"),t=e.getContext("2d");return e.height=512,e.width=1,function(i){t.clearRect(0,0,1,e.height);var r,a=t.createLinearGradient(0,0,0,e.height),s=Object(n.a)(i.colorStops);try{for(s.s();!(r=s.n()).done;){var o=r.value,c=o.ratio,u=o.color;a.addColorStop(Math.max(c,.001),"rgba(".concat(u[0],", ").concat(u[1],", ").concat(u[2],", ").concat(u[3],")"))}}catch(l){s.e(l)}finally{s.f()}return t.fillStyle=a,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}}();function o(e,t,i,r){var a,s,o=t.blurRadius,c=t.fieldOffset,l=t.field,h=new Float64Array(i*r),d=u(o),f=Math.round(3*o),y=Number.NEGATIVE_INFINITY,v=function(e,t){return null!=e?"string"==typeof t?function(t){return-1*+t.readAttribute(e)}:function(i){return+i.readAttribute(e)+t}:function(e){return 1}}(l,c),b=new Set,p=Object(n.a)(e);try{for(p.s();!(s=p.n()).done;)for(var g=s.value.getCursor();g.next();){var x=g.getObjectId();if(!b.has(x)){b.add(x);var m=g.readLegacyPointGeometry(),k=128;if(!(m.x<-128||m.x>=i+k||m.y<-128||m.y>r+k))for(var O=+v(g),j=Math.round(m.x)-f,w=Math.round(m.y)-f,_=Math.max(0,j),R=Math.max(0,w),I=Math.min(r,Math.round(m.y)+f),P=Math.min(i,Math.round(m.x)+f),T=R;T<I;T++)for(var M=d[T-w],B=_;B<P;B++){var A=d[B-j];(a=h[T*i+B]+=M*A*O)>y&&(y=a)}}}}catch(U){p.e(U)}finally{p.f()}return{matrix:h.buffer,max:y}}function c(e,t,i,n,r,s){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);var o=e.getImageData(0,0,t,t);i&&n&&o.data.set(new Uint8ClampedArray(function(e,t,i,n,r){for(var s=new Uint32Array(e*e),o=("buffer"in t?t:new Float64Array(t)),c=("buffer"in i?new Uint32Array(i.buffer):new Uint32Array(new Uint8Array(i).buffer)),u=c.length/(r-n),l=0;l<o.length;l++){var h=o[l],d=Math.floor((h-n)*u);s[l]=c[Object(a.e)(d,0,c.length-1)]}return s.buffer}(t,i,n,r,s))),e.putImageData(o,0,0)}function u(e){for(var t=Math.round(3*e),i=2*e*e,n=new Float64Array(2*t+1),r=0;r<=n.length;r++)n[r]=Math.exp(-Math.pow(r-t,2)/i)/Math.sqrt(2*Math.PI)*(e/2);return n}},923:function(e,t,i){"use strict";var n=i(2),r=i(3),a=i(5),s=i(6),o=i(0),c=i(118),u=i(1),l=(i(14),i(16),i(13),i(8)),h=function(e){Object(a.a)(i,e);var t=Object(s.a)(i);function i(e){var r;return Object(n.a)(this,i),(r=t.call(this,e)).tiles=new Map,r}return Object(r.a)(i,[{key:"destroy",value:function(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}},{key:"updating",get:function(){return this.isUpdating()}},{key:"acquireTile",value:function(e){var t=this,i=this.createTile(e);return i.once("isReady",(function(){return t.notifyChange("updating")})),this.tiles.set(e.id,i),i}},{key:"forceAttributeTextureUpload",value:function(){}},{key:"forEachTile",value:function(e){this.tiles.forEach(e)}},{key:"releaseTile",value:function(e){this.tiles.delete(e.key.id),this.disposeTile(e)}},{key:"isUpdating",value:function(){var e=!0;return this.tiles.forEach((function(t){e=e&&t.isReady})),!e}},{key:"setHighlight",value:function(){}},{key:"invalidateLabels",value:function(){}},{key:"requestUpdate",value:function(){this.layerView.requestUpdate()}}]),i}(c.a);Object(o.a)([Object(u.b)()],h.prototype,"layer",void 0),Object(o.a)([Object(u.b)()],h.prototype,"layerView",void 0),Object(o.a)([Object(u.b)()],h.prototype,"tileInfoView",void 0),Object(o.a)([Object(u.b)()],h.prototype,"updating",null);var d=h=Object(o.a)([Object(l.a)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],h);t.a=d},935:function(e,t,i){"use strict";i.d(t,"a",(function(){return v}));var n=i(28),r=i(2),a=i(3),s=i(46),o=i(45),c=i(5),u=i(6),l=i(97),h=i(754),d=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(e,n,a){var s,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return Object(r.a)(this,i),(s=t.call(this,e,n,a,a)).bitmap=new h.a(o,"standard",!1),s.bitmap.coordScale=a,s.bitmap.once("isReady",(function(){return s.ready()})),s}return Object(a.a)(i,[{key:"destroy",value:function(){Object(s.a)(Object(o.a)(i.prototype),"destroy",this).call(this),this.bitmap.destroy()}},{key:"beforeRender",value:function(e){Object(s.a)(Object(o.a)(i.prototype),"beforeRender",this).call(this,e),this.bitmap.beforeRender(e)}},{key:"afterRender",value:function(e){Object(s.a)(Object(o.a)(i.prototype),"afterRender",this).call(this,e),this.bitmap.afterRender(e)}},{key:"stencilRef",get:function(){return this.bitmap.stencilRef},set:function(e){this.bitmap.stencilRef=e}},{key:"setTransform",value:function(e,t){Object(s.a)(Object(o.a)(i.prototype),"setTransform",this).call(this,e,t),this.bitmap.transforms.dvs=this.transforms.dvs}},{key:"onAttach",value:function(){this.bitmap.stage=this.stage}},{key:"onDetach",value:function(){this.bitmap&&(this.bitmap.stage=null)}}]),i}(i(523).a),f=i(760),y=i(663),v=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((function(e){return"additive"===e.bitmap.blendFunction}))}},{key:"createTile",value:function(e){var t=this._tileInfoView.getTileBounds(Object(l.k)(),e);return new d(e,t,this._tileInfoView.tileInfo.size)}},{key:"destroyTile",value:function(){}},{key:"prepareRenderPasses",value:function(e){var t=this,r=e.registerRenderPass({name:"bitmap (tile)",brushes:[f.a.bitmap],target:function(){return t.children.map((function(e){return e.bitmap}))},drawPhase:y.c.MAP});return[].concat(Object(n.a)(Object(s.a)(Object(o.a)(i.prototype),"prepareRenderPasses",this).call(this,e)),[r])}},{key:"doRender",value:function(e){this.visible&&e.drawPhase===y.c.MAP&&Object(s.a)(Object(o.a)(i.prototype),"doRender",this).call(this,e)}}]),i}(i(701).a)}}]);
//# sourceMappingURL=68.092fb98b.chunk.js.map