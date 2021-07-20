(this["webpackJsonpfirst-example"]=this["webpackJsonpfirst-example"]||[]).push([[166],{1183:function(e,t,r){"use strict";r.r(t),r.d(t,"toBinaryGLTF",(function(){return J}));var i=r(2),n=r(3),s=r(23),a=r(39),o=r(14),u=function(){function e(t,r){if(Object(i.a)(this,e),!t)throw new Error("GLB requires a JSON gltf chunk");this.length=e.HEADER_SIZE,this.length+=e.CHUNK_HEADER_SIZE;var n=this.textToArrayBuffer(t);if(this.length+=this.alignTo(n.byteLength,4),r&&(this.length+=e.CHUNK_HEADER_SIZE,this.length+=r.byteLength,r.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this.writeHeader();var s=this.writeChunk(n,12,1313821514,32);r&&this.writeChunk(r,s,5130562)}return Object(n.a)(e,[{key:"writeHeader",value:function(){this.outView.setUint32(0,e.MAGIC,!0),this.outView.setUint32(4,e.VERSION,!0),this.outView.setUint32(8,this.length,!0)}},{key:"writeChunk",value:function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=this.alignTo(e.byteLength,4);for(this.outView.setUint32(t,n,!0),this.outView.setUint32(t+=4,r,!0),this.writeArrayBuffer(this.outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)i&&this.outView.setUint8(t,i),t++;return t}},{key:"writeArrayBuffer",value:function(e,t,r,i,n){new Uint8Array(e,r,n).set(new Uint8Array(t,i,n),0)}},{key:"textToArrayBuffer",value:function(e){if(Object(o.a)("esri-text-encoder"))return(new TextEncoder).encode(e).buffer;for(var t=new Uint8Array(e.length),r=0;r<t.length;++r)t[r]=e.charCodeAt(r);return t.buffer}},{key:"alignTo",value:function(e,t){return t*Math.ceil(e/t)}}]),e}();u.HEADER_SIZE=12,u.CHUNK_HEADER_SIZE=8,u.MAGIC=1179937895,u.VERSION=2;var c,f,h,l,d,b,v,m,p=r(15),g=r(4),A=r(480),x=r(291),y=r(11),w=r(22),O=r(793),E=r(788);(m=c||(c={}))[m.External=0]="External",m[m.DataURI=1]="DataURI",m[m.GLB=2]="GLB",function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(f||(f={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(h||(h={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(l||(l={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(d||(d={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(b||(b={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(v||(v={}));var T=function(){function e(t,r,n,s,a){Object(i.a)(this,e),this.buffer=t,this.componentType=n,this.dataType=s,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,r.bufferViews||(r.bufferViews=[]),this.index=r.bufferViews.length,this.bufferView={buffer:t.index,byteLength:-1,target:a};var o=this.getElementSize();o>=4&&a!==h.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=o),r.bufferViews.push(this.bufferView)}return Object(n.a)(e,[{key:"push",value:function(e){var t=this.data.length;if(this.data.push(e),this.accessorIndex>=0){var r=t%this.numComponentsForDataType(),i=this.accessorMin[r];this.accessorMin[r]="number"!=typeof i?e:Math.min(i,e);var n=this.accessorMax[r];this.accessorMax[r]="number"!=typeof n?e:Math.max(n,e)}}},{key:"dataSize",get:function(){return this.data.length*this.sizeComponentType()}},{key:"size",get:function(){return function(e,t){return t*Math.ceil(e/t)}(this.dataSize,4)}},{key:"getByteOffset",value:function(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}},{key:"byteOffset",get:function(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}},{key:"writeOutToBuffer",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.size,r=new DataView(e,t),i=this.sizeComponentType(),n=0;n<this.data.length;++n)this.writeValue(r,n*i,this.data[n])}},{key:"writeAsync",value:function(e){var t=this;if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView vlaues asynchronously");return this.asyncWritePromise=e.then((function(e){for(var r=new Uint8Array(e),i=0;i<r.byteLength;++i)t.data.push(r[i]);delete t.asyncWritePromise})),this.asyncWritePromise}},{key:"startAccessor",value:function(e){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=e;var t=this.numComponentsForDataType();this.accessorMin=new Array(t),this.accessorMax=new Array(t)}},{key:"endAccessor",value:function(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");var e=this.getElementSize(),t=this.numComponentsForDataType(),r=(this.data.length-this.accessorIndex)/t;if(r%1)throw new Error("An accessor was ended with missing component values");for(var i=0;i<this.accessorMin.length;++i)"number"!=typeof this.accessorMin[i]&&(this.accessorMin[i]=0),"number"!=typeof this.accessorMax[i]&&(this.accessorMax[i]=0);var n={byteOffset:e*(this.accessorIndex/t),componentType:this.componentType,count:r,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case 5121:case 5123:n.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,n}},{key:"finalized",get:function(){var e=this;return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise((function(t){return e.finalizedPromiseResolve=t}))}},{key:"finalize",value:function(){var e=this,t=this.bufferView;return new Promise((function(t){var r=e.buffer.getViewFinalizePromises(e);e.asyncWritePromise&&r.push(e.asyncWritePromise),t(Object(s.j)(r))})).then((function(){e.isFinalized=!0,t.byteOffset=e.getByteOffset(),t.byteLength=e.dataSize,e.finalizedPromiseResolve&&e.finalizedPromiseResolve()}))}},{key:"getElementSize",value:function(){return this.sizeComponentType()*this.numComponentsForDataType()}},{key:"sizeComponentType",value:function(){switch(this.componentType){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5125:case 5126:return 4}}},{key:"numComponentsForDataType",value:function(){switch(this.dataType){case l.SCALAR:return 1;case l.VEC2:return 2;case l.VEC3:return 3;case l.VEC4:case l.MAT2:return 4;case l.MAT3:return 9;case l.MAT4:return 16}}},{key:"writeValue",value:function(e,t,r){switch(this.componentType){case 5120:e.setInt8(t,r);break;case 5121:e.setUint8(t,r);break;case 5122:e.setInt16(t,r,!0);break;case 5123:e.setUint16(t,r,!0);break;case 5125:e.setUint32(t,r,!0);break;case 5126:e.setFloat32(t,r,!0);break;default:throw new Error("Unsupported data type: ".concat(this.componentType))}}}]),e}(),k=function(){function e(t){Object(i.a)(this,e),this.gltf=t,this.bufferViews=[],this.isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;var r={byteLength:-1};t.buffers.push(r),this.buffer=r}return Object(n.a)(e,[{key:"addBufferView",value:function(e,t,r){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");var i=new T(this,this.gltf,e,t,r);return this.bufferViews.push(i),i}},{key:"getByteOffset",value:function(e){var t,r=0,i=Object(p.a)(this.bufferViews);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(n===e)return r;r+=n.size}}catch(s){i.e(s)}finally{i.f()}throw new Error("Given bufferView was not present in this buffer")}},{key:"getViewFinalizePromises",value:function(e){var t,r=[],i=Object(p.a)(this.bufferViews);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(e&&n===e)return r;r.push(n.finalized)}}catch(s){i.e(s)}finally{i.f()}return r}},{key:"getArrayBuffer",value:function(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");var e,t=this.getTotalSize(),r=new ArrayBuffer(t),i=0,n=Object(p.a)(this.bufferViews);try{for(n.s();!(e=n.n()).done;){var s=e.value;s.writeOutToBuffer(r,i),i+=s.size}}catch(a){n.e(a)}finally{n.f()}return r}},{key:"finalize",value:function(){var e=this;if(this.finalizePromise)throw new Error("Buffer ".concat(this.index," was already finalized"));return this.finalizePromise=new Promise((function(t){t(Object(s.j)(e.getViewFinalizePromises()))})).then((function(){e.isFinalized=!0;var t=e.getArrayBuffer();e.buffer.byteLength=t.byteLength,e.buffer.uri=t})),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}},{key:"getTotalSize",value:function(){var e,t=0,r=Object(p.a)(this.bufferViews);try{for(r.s();!(e=r.n()).done;){t+=e.value.size}}catch(i){r.e(i)}finally{r.f()}return t}}]),e}(),R=(r(76),r(40));function j(e,t){Object(g.j)(e.vertexAttributes.normal)&&(e.vertexAttributes.normal=new Float32Array(e.vertexAttributes.position.length));for(var r=t.faces.length/3,i=0;i<r;++i){var n=t.faces[3*i+0],s=t.faces[3*i+1],a=t.faces[3*i+2],o=Object(y.w)(B,e.vertexAttributes.position[3*n+0],e.vertexAttributes.position[3*n+1],e.vertexAttributes.position[3*n+2]),u=Object(y.w)(C,e.vertexAttributes.position[3*s+0],e.vertexAttributes.position[3*s+1],e.vertexAttributes.position[3*s+2]),c=Object(y.w)(L,e.vertexAttributes.position[3*a+0],e.vertexAttributes.position[3*a+1],e.vertexAttributes.position[3*a+2]),f=Object(y.j)(u,u,o),h=Object(y.j)(c,c,o),l=Object(y.g)(f,f,h);Object(R.k)(e.vertexAttributes.normal[3*n+0])&&(e.vertexAttributes.normal[3*n+0]=0),Object(R.k)(e.vertexAttributes.normal[3*n+1])&&(e.vertexAttributes.normal[3*n+1]=0),Object(R.k)(e.vertexAttributes.normal[3*n+2])&&(e.vertexAttributes.normal[3*n+2]=0),Object(R.k)(e.vertexAttributes.normal[3*s+0])&&(e.vertexAttributes.normal[3*s+0]=0),Object(R.k)(e.vertexAttributes.normal[3*s+1])&&(e.vertexAttributes.normal[3*s+1]=0),Object(R.k)(e.vertexAttributes.normal[3*s+2])&&(e.vertexAttributes.normal[3*s+2]=0),Object(R.k)(e.vertexAttributes.normal[3*a+0])&&(e.vertexAttributes.normal[3*a+0]=0),Object(R.k)(e.vertexAttributes.normal[3*a+1])&&(e.vertexAttributes.normal[3*a+1]=0),Object(R.k)(e.vertexAttributes.normal[3*a+2])&&(e.vertexAttributes.normal[3*a+2]=0),e.vertexAttributes.normal[3*n+0]+=l[0],e.vertexAttributes.normal[3*n+1]+=l[1],e.vertexAttributes.normal[3*n+2]+=l[2],e.vertexAttributes.normal[3*s+0]+=l[0],e.vertexAttributes.normal[3*s+1]+=l[1],e.vertexAttributes.normal[3*s+2]+=l[2],e.vertexAttributes.normal[3*a+0]+=l[0],e.vertexAttributes.normal[3*a+1]+=l[1],e.vertexAttributes.normal[3*a+2]+=l[2]}for(var d=0;d<e.vertexAttributes.normal.length;d+=3)Object(y.w)(M,e.vertexAttributes.normal[d],e.vertexAttributes.normal[d+1],e.vertexAttributes.normal[d+2]),Object(y.r)(M,M),e.vertexAttributes.normal[d+0]=M[0],e.vertexAttributes.normal[d+1]=M[1],e.vertexAttributes.normal[d+2]=M[2]}var B=Object(w.e)(),C=Object(w.e)(),L=Object(w.e)(),M=Object(w.e)(),S=r(7),z=r.n(S),V=r(10),I=r(19);function N(e){return F.apply(this,arguments)}function F(){return(F=Object(V.a)(z.a.mark((function e(t){var r,i;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=_(t),!Object(g.j)(r)){e.next=3;break}throw new I.a("imageToArrayBuffer","Unsupported image type");case 3:if(i=function(){var e=Object(V.a)(z.a.mark((function e(t){var r,i;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new I.a("imageToArrayBuffer","Unable to convert image to PNG");case 2:return r=new FileReader,i=new Promise((function(e){r.addEventListener("loadend",(function(){e(r.result)}))})),e.abrupt("return",(r.readAsArrayBuffer(t),i));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!r.toBlob){e.next=6;break}return e.abrupt("return",new Promise((function(e,t){r.toBlob((function(r){i(r).then(e,t)}),"image/png")})));case 6:if(!("msToBlob"in r)){e.next=8;break}return e.abrupt("return",i(r.msToBlob()));case 8:throw new I.a("imageToArrayBuffer","Could not convert canvas to blob");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var r=t.getContext("2d");return e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,e.width,e.height),t}var U=function(){function e(t,r,n){Object(i.a)(this,e),this.params={},this.materialMap=new Array,this.gltf={asset:{version:"2.0",copyright:t.copyright,generator:t.generator},extras:{options:r,binChunkBuffer:null,promises:[]}},n&&(this.params=n),this.addScenes(t)}return Object(n.a)(e,[{key:"addScenes",value:function(e){var t=this;this.gltf.scene=e.defaultScene;var r=this.gltf.extras.options.bufferOutputType===c.GLB||this.gltf.extras.options.imageOutputType===f.GLB;r&&(this.gltf.extras.binChunkBuffer=new k(this.gltf)),e.forEachScene((function(e){t.addScene(e)})),r&&this.gltf.extras.binChunkBuffer.finalize()}},{key:"addScene",value:function(e){var t=this;this.gltf.scenes||(this.gltf.scenes=[]);var r={};e.name&&(r.name=e.name),e.forEachNode((function(e){r.nodes||(r.nodes=[]);var i=t.addNode(e);r.nodes.push(i)})),this.gltf.scenes.push(r)}},{key:"addNode",value:function(e){var t=this;this.gltf.nodes||(this.gltf.nodes=[]);var r={};e.name&&(r.name=e.name);var i=e.translation;Object(y.o)(i,w.b)||(r.translation=Object(w.c)(i));var n=e.rotation;Object(A.d)(n,x.a)||(r.rotation=Object(x.c)(n));var s=e.scale;Object(y.o)(s,w.a)||(r.scale=Object(w.c)(s)),e.mesh&&e.mesh.vertexAttributes.position?r.mesh=this.addMesh(e.mesh):e.forEachNode((function(e){r.children||(r.children=[]);var i=t.addNode(e);r.children.push(i)}));var a=this.gltf.nodes.length;return this.gltf.nodes.push(r),a}},{key:"addMesh",value:function(e){this.gltf.meshes||(this.gltf.meshes=[]);var t,r={primitives:[]},i=this.gltf.extras.options.bufferOutputType===c.GLB;t=i?this.gltf.extras.binChunkBuffer:new k(this.gltf);var n=e.clone();this.params.origin||(this.params.origin=function(e){if(Object(g.k)(e.transform))return e.transform.getOriginPoint(e.spatialReference);var t=e.extent.xmax-e.extent.width/2,r=e.extent.ymax-e.extent.height/2,i=e.extent.zmin;return new a.a({x:t,y:r,z:i,spatialReference:e.extent.spatialReference})}(n)),n.rotate(-90,0,0,{origin:this.params.origin}),function(e){if(e.components){var t,r=Object(p.a)(e.components);try{for(r.s();!(t=r.n()).done;){var i=t.value;"smooth"===i.shading&&i.faces&&j(e,i)}}catch(n){r.e(n)}finally{r.f()}e.vertexAttributesChanged()}}(n);var s=Object(E.e)(n.vertexAttributes,n.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});n.vertexAttributes.position=s.position,n.vertexAttributes.normal=s.normal,n.vertexAttributes.tangent=s.tangent;var o,u,f,d,b=t.addBufferView(5126,l.VEC3,h.ARRAY_BUFFER);n.vertexAttributes.normal&&(o=t.addBufferView(5126,l.VEC3,h.ARRAY_BUFFER)),n.vertexAttributes.uv&&(u=t.addBufferView(5126,l.VEC2,h.ARRAY_BUFFER)),n.vertexAttributes.tangent&&(f=t.addBufferView(5126,l.VEC4,h.ARRAY_BUFFER)),n.vertexAttributes.color&&(d=t.addBufferView(5121,l.VEC4,h.ARRAY_BUFFER)),b.startAccessor("POSITION"),o&&o.startAccessor("NORMAL"),u&&u.startAccessor("TEXCOORD_0"),f&&f.startAccessor("TANGENT"),d&&d.startAccessor("COLOR_0");for(var v=n.vertexAttributes.position.length/3,m=0;m<v;++m)b.push(n.vertexAttributes.position[3*m+0]),b.push(n.vertexAttributes.position[3*m+1]),b.push(n.vertexAttributes.position[3*m+2]),o&&Object(g.k)(n.vertexAttributes.normal)&&(o.push(n.vertexAttributes.normal[3*m+0]),o.push(n.vertexAttributes.normal[3*m+1]),o.push(n.vertexAttributes.normal[3*m+2])),u&&Object(g.k)(n.vertexAttributes.uv)&&(u.push(n.vertexAttributes.uv[2*m+0]),u.push(n.vertexAttributes.uv[2*m+1])),f&&Object(g.k)(n.vertexAttributes.tangent)&&(f.push(n.vertexAttributes.tangent[4*m+0]),f.push(n.vertexAttributes.tangent[4*m+1]),f.push(n.vertexAttributes.tangent[4*m+2]),f.push(n.vertexAttributes.tangent[4*m+3])),d&&Object(g.k)(n.vertexAttributes.color)&&(d.push(n.vertexAttributes.color[4*m+0]),d.push(n.vertexAttributes.color[4*m+1]),d.push(n.vertexAttributes.color[4*m+2]),d.push(n.vertexAttributes.color[4*m+3]));var A,x,y,w,O,T=b.endAccessor(),R=this.addAccessor(b.index,T);if(o){var B=o.endAccessor();A=this.addAccessor(o.index,B)}if(u){var C=u.endAccessor();x=this.addAccessor(u.index,C)}if(f){var L=f.endAccessor();y=this.addAccessor(f.index,L)}if(d){var M=d.endAccessor();w=this.addAccessor(d.index,M)}n.components&&n.components.length>0&&n.components[0].faces?(O=t.addBufferView(5125,l.SCALAR,h.ELEMENT_ARRAY_BUFFER),this.addMeshVertexIndexed(O,n.components,r,R,A,x,y,w)):this.addMeshVertexNonIndexed(n.components,r,R,A,x,y,w),b.finalize(),o&&o.finalize(),u&&u.finalize(),f&&f.finalize(),O&&O.finalize(),d&&d.finalize(),i||t.finalize();var S=this.gltf.meshes.length;return this.gltf.meshes.push(r),S}},{key:"addMaterial",value:function(e){if(null!==e){var t=this.materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);var r={};switch(e.alphaMode){case"mask":r.alphaMode=b.MASK;break;case"auto":case"blend":r.alphaMode=b.BLEND}.5!==e.alphaCutoff&&(r.alphaCutoff=e.alphaCutoff),e.doubleSided&&(r.doubleSided=e.doubleSided),r.pbrMetallicRoughness={};var i=function(e){return Math.pow(e,2.1)},n=function(e){var t=e.toRgba();return t[0]=i(t[0]/255),t[1]=i(t[1]/255),t[2]=i(t[2]/255),t};if(Object(g.k)(e.color)&&(r.pbrMetallicRoughness.baseColorFactor=n(e.color)),Object(g.k)(e.colorTexture)&&(r.pbrMetallicRoughness.baseColorTexture={index:this.addTexture(e.colorTexture)}),Object(g.k)(e.normalTexture)&&(r.normalTexture={index:this.addTexture(e.normalTexture)}),e instanceof O.a){if(Object(g.k)(e.emissiveTexture)&&(r.emissiveTexture={index:this.addTexture(e.emissiveTexture)}),Object(g.k)(e.emissiveColor)){var s=n(e.emissiveColor);r.emissiveFactor=[s[0],s[1],s[2]]}Object(g.k)(e.occlusionTexture)&&(r.occlusionTexture={index:this.addTexture(e.occlusionTexture)}),Object(g.k)(e.metallicRoughnessTexture)&&(r.pbrMetallicRoughness.metallicRoughnessTexture={index:this.addTexture(e.metallicRoughnessTexture)}),r.pbrMetallicRoughness.metallicFactor=e.metallic,r.pbrMetallicRoughness.roughnessFactor=e.roughness}else r.pbrMetallicRoughness.metallicFactor=1,r.pbrMetallicRoughness.roughnessFactor=1;var a=this.gltf.materials.length;return this.gltf.materials.push(r),this.materialMap.push(e),a}}},{key:"addTexture",value:function(e){this.gltf.textures||(this.gltf.textures=[]);var t={sampler:this.addSampler(e),source:this.addImage(e)},r=this.gltf.textures.length;return this.gltf.textures.push(t),r}},{key:"addImage",value:function(e){this.gltf.images||(this.gltf.images=[]);var t={};if(e.url)t.uri=e.url;else{t.extras=e.data;for(var r=0;r<this.gltf.images.length;++r)if(e.data===this.gltf.images[r].extras)return r;switch(this.gltf.extras.options.imageOutputType){case f.GLB:var i=this.gltf.extras.binChunkBuffer.addBufferView(5121,l.SCALAR);i.writeAsync(N(e.data)).then((function(){i.finalize()})),t.bufferView=i.index,t.mimeType="image/png";break;case f.DataURI:t.uri=function(e){var t=_(e);return Object(g.k)(t)?t.toDataURL():""}(e.data);break;default:this.gltf.extras.promises.push(N(e.data).then((function(e){t.uri=e})))}}var n=this.gltf.images.length;return this.gltf.images.push(t),n}},{key:"addSampler",value:function(e){this.gltf.samplers||(this.gltf.samplers=[]);var t=10497,r=10497;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=33071,r=33071;break;case"mirror":t=33648,r=33648}else{switch(e.wrap.vertical){case"clamp":r=33071;break;case"mirror":r=33648}switch(e.wrap.horizontal){case"clamp":t=33071;break;case"mirror":t=33648}}for(var i={wrapS:t,wrapT:r},n=0;n<this.gltf.samplers.length;++n)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[n]))return n;var s=this.gltf.samplers.length;return this.gltf.samplers.push(i),s}},{key:"addAccessor",value:function(e,t){this.gltf.accessors||(this.gltf.accessors=[]);var r={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(r.normalized=!0);var i=this.gltf.accessors.length;return this.gltf.accessors.push(r),i}},{key:"addMeshVertexIndexed",value:function(e,t,r,i,n,s,a,o){var u,c=Object(p.a)(t);try{for(c.s();!(u=c.n()).done;){var f=u.value;e.startAccessor("INDICES");for(var h=0;h<f.faces.length;++h)e.push(f.faces[h]);var l=e.endAccessor(),d={attributes:{POSITION:i},indices:this.addAccessor(e.index,l),material:this.addMaterial(f.material)};n&&"flat"!==f.shading&&(d.attributes.NORMAL=n),s&&(d.attributes.TEXCOORD_0=s),a&&"flat"!==f.shading&&(d.attributes.TANGENT=a),o&&(d.attributes.COLOR_0=o),r.primitives.push(d)}}catch(b){c.e(b)}finally{c.f()}}},{key:"addMeshVertexNonIndexed",value:function(e,t,r,i,n,s,a){var o={attributes:{POSITION:r}};i&&(o.attributes.NORMAL=i),n&&(o.attributes.TEXCOORD_0=n),s&&(o.attributes.TANGENT=s),a&&(o.attributes.COLOR_0=a),e&&(o.material=this.addMaterial(e[0].material)),t.primitives.push(o)}}]),e}(),P=function(){function e(){Object(i.a)(this,e),this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}return Object(n.a)(e,[{key:"addScene",value:function(e){if(this._scenes.indexOf(e)>=0)throw new Error("Scene already added");this._scenes.push(e)}},{key:"removeScene",value:function(e){var t=this._scenes.indexOf(e);t>=0&&this._scenes.splice(t,1)}},{key:"forEachScene",value:function(e){this._scenes.forEach(e)}}]),e}(),D=function(){function e(){Object(i.a)(this,e),this.name="",this.nodes=[]}return Object(n.a)(e,[{key:"addNode",value:function(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)}},{key:"forEachNode",value:function(e){this.nodes.forEach(e)}}]),e}(),G=function(){function e(){Object(i.a)(this,e),this.name="",this.mesh=null,this.translation=Object(w.e)(),this.rotation=Object(x.b)(),this.scale=Object(w.c)(w.a),this.nodes=[]}return Object(n.a)(e,[{key:"addNode",value:function(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)}},{key:"forEachNode",value:function(e){this.nodes.forEach(e)}},{key:"rotationAngles",set:function(e){Object(A.e)(this.rotation,e[0],e[1],e[2])}}]),e}(),H="model.glb";function Y(e,t,r){var i=new U(e,t=t||{},r),n=i.params;n?n.origin||(n.origin=new a.a({x:-1,y:-1,z:-1})):n={origin:new a.a({x:-1,y:-1,z:-1})};var o=n.origin,h=i.gltf,l=h.extras.promises,d=1,b=1,v=null;return Object(s.j)(l).then((function(){var e={origin:o};delete h.extras;var r="number"==typeof t.jsonSpacing?t.jsonSpacing:4,i=JSON.stringify(h,(function(r,i){if("extras"!==r){if(i instanceof ArrayBuffer){if(function(e){if(e.byteLength<8)return!1;var t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}(i))switch(t.imageOutputType){case f.DataURI:case f.GLB:break;case f.External:default:var n="img".concat(b,".png");return b++,e[n]=i,n}switch(t.bufferOutputType){case c.DataURI:return function(e){for(var t=[],r=new Uint8Array(e),i=0;i<r.length;i++)t.push(String.fromCharCode(r[i]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}(i);case c.GLB:if(v)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(v=i);case c.External:default:var s="data".concat(d,".bin");return d++,e[s]=i,s}}return i}}),r);return t.bufferOutputType===c.GLB||t.imageOutputType===f.GLB?e[H]=new u(i,v).buffer:e["model.gltf"]=i,e}))}var W=function(){function e(t,r){Object(i.a)(this,e),this.file={type:"model/gltf-binary",data:t},this.origin=r}return Object(n.a)(e,[{key:"buffer",value:function(){return Promise.resolve(this.file)}},{key:"download",value:function(e){var t=this;return new Promise((function(){var r=new Blob([t.file.data],{type:t.file.type}),i=e;if(i||(i="model.glb"),"glb"!==i.split(".").pop()&&(i+=".glb"),window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(r,i);else{var n=document.createElement("a"),s=URL.createObjectURL(r);n.href=s,n.download=i,document.body.appendChild(n),n.click(),setTimeout((function(){document.body.removeChild(n),window.URL.revokeObjectURL(s)}),0)}}))}}]),e}();function J(e,t){var r=new P,i=new D;r.addScene(i);var n,s,a=new G;return i.addNode(a),a.mesh=e,(n=r,s=t,Y(n,{bufferOutputType:c.GLB,imageOutputType:f.GLB,jsonSpacing:0},s)).then((function(e){return new W(e[H],e.origin)}))}}}]);
//# sourceMappingURL=166.9664d7a4.chunk.js.map