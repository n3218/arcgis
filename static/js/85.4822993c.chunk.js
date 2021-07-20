(this["webpackJsonpfirst-example"]=this["webpackJsonpfirst-example"]||[]).push([[85],{744:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return c}));var a,o=n(29),i=n(295),r=n(27);function s(t){t.fragment.include(i.a),t.fragment.uniforms.add("uShadowMapTex","sampler2D"),t.fragment.uniforms.add("uShadowMapNum","int"),t.fragment.uniforms.add("uShadowMapDistance","vec4"),t.fragment.uniforms.add("uShadowMapMatrix","mat4",4),t.fragment.uniforms.add("uDepthHalfPixelSz","float"),t.fragment.code.add(Object(r.a)(a||(a=Object(o.a)(["int chooseCascade(float _linearDepth, out mat4 mat) {\nvec4 distance = uShadowMapDistance;\nfloat depth = _linearDepth;\nint i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;\nmat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];\nreturn i;\n}\nvec3 lightSpacePosition(vec3 _vpos, mat4 mat) {\nvec4 lv = mat * vec4(_vpos, 1.0);\nlv.xy /= lv.w;\nreturn 0.5 * lv.xyz + vec3(0.5);\n}\nvec2 cascadeCoordinates(int i, vec3 lvpos) {\nreturn vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;\n}\nfloat readShadowMapDepth(vec2 uv, sampler2D _depthTex) {\nreturn rgba2float(texture2D(_depthTex, uv));\n}\nfloat posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {\nreturn readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;\n}\nfloat filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {\nfloat texSize = 0.5 / halfPixelSize;\nvec2 st = fract((vec2(halfPixelSize) + uv) * texSize);\nfloat s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);\nfloat s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);\nfloat s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);\nfloat s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);\nreturn mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);\n}\nfloat readShadowMap(const in vec3 _vpos, float _linearDepth) {\nmat4 mat;\nint i = chooseCascade(_linearDepth, mat);\nif (i >= uShadowMapNum) { return 0.0; }\nvec3 lvpos = lightSpacePosition(_vpos, mat);\nif (lvpos.z >= 1.0) { return 0.0; }\nif (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }\nvec2 uv = cascadeCoordinates(i, lvpos);\nreturn filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);\n}"]))))}function l(t,e){e.shadowMappingEnabled&&(e.shadowMap.bind(t),e.shadowMap.bindView(t,e.origin))}function c(t,e,n){e.shadowMappingEnabled&&e.shadowMap.bindView(t,n)}function f(t,e){e.shadowMappingEnabled&&e.shadowMap.bindView(t,e.origin)}},764:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a,o,i,r=n(29),s=n(27);function l(t,e){0===e.output&&e.receiveShadows?(t.varyings.add("linearDepth","float"),t.vertex.code.add(Object(s.a)(a||(a=Object(r.a)(["void forwardLinearDepth() { linearDepth = gl_Position.w; }"]))))):1===e.output||3===e.output?(t.varyings.add("linearDepth","float"),t.vertex.uniforms.add("cameraNearFar","vec2"),t.vertex.code.add(Object(s.a)(o||(o=Object(r.a)(["void forwardLinearDepth() {\nlinearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);\n}"]))))):t.vertex.code.add(Object(s.a)(i||(i=Object(r.a)(["void forwardLinearDepth() {}"]))))}},784:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var a,o,i,r=n(29),s=n(27);function l(t){var e=t.fragment.code;e.add(Object(s.a)(a||(a=Object(r.a)(["vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)\n{\nreturn ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;\n}"])))),e.add(Object(s.a)(o||(o=Object(r.a)(["float integratedRadiance(float cosTheta2, float roughness)\n{\nreturn (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);\n}"])))),e.add(Object(s.a)(i||(i=Object(r.a)(["vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)\n{\nfloat cosTheta2 = 1.0 - RdotNG * RdotNG;\nfloat intRadTheta = integratedRadiance(cosTheta2, roughness);\nfloat ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;\nfloat sky = 2.0 - ground;\nreturn (ground * ambientGround + sky * ambientSky) * 0.5;\n}"]))))}var c,f,h,u,d,p,v,b,m,g,S,x=n(543);function O(t,e){var n=t.fragment.code;t.include(x.a),3===e.pbrMode||4===e.pbrMode?(n.add(Object(s.a)(c||(c=Object(r.a)(["\n    struct PBRShadingWater\n    {\n        float NdotL;   // cos angle between normal and light direction\n        float NdotV;   // cos angle between normal and view direction\n        float NdotH;   // cos angle between normal and half vector\n        float VdotH;   // cos angle between view direction and half vector\n        float LdotH;   // cos angle between light direction and half vector\n        float VdotN;   // cos angle between view direction and normal vector\n    };\n\n    float dtrExponent = ",";\n    "])),e.useCustomDTRExponentForWater?"2.2":"2.0")),n.add(Object(s.a)(f||(f=Object(r.a)(["vec3 fresnelReflection(float angle, vec3 f0, float f90) {\nreturn f0 + (f90 - f0) * pow(1.0 - angle, 5.0);\n}"])))),n.add(Object(s.a)(h||(h=Object(r.a)(["float normalDistributionWater(float NdotH, float roughness)\n{\nfloat r2 = roughness * roughness;\nfloat NdotH2 = NdotH * NdotH;\nfloat denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;\nreturn r2 / denom;\n}"])))),n.add(Object(s.a)(u||(u=Object(r.a)(["float geometricOcclusionKelemen(float LoH)\n{\nreturn 0.25 / (LoH * LoH);\n}"])))),n.add(Object(s.a)(d||(d=Object(r.a)(["vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)\n{\nvec3  F = fresnelReflection(props.VdotH, F0, F0Max);\nfloat dSun = normalDistributionWater(props.NdotH, roughness);\nfloat V = geometricOcclusionKelemen(props.LdotH);\nfloat diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);\nfloat strengthSunHaze  = 1.2;\nfloat dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;\nreturn ((dSun + dSunHaze) * V) * F;\n}\nvec3 tonemapACES(const vec3 x) {\nreturn (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);\n}"]))))):1!==e.pbrMode&&2!==e.pbrMode||(t.include(l),n.add(Object(s.a)(p||(p=Object(r.a)(["struct PBRShadingInfo\n{\nfloat NdotL;\nfloat NdotV;\nfloat NdotH;\nfloat VdotH;\nfloat LdotH;\nfloat NdotNG;\nfloat RdotNG;\nfloat NdotAmbDir;\nfloat NdotH_Horizon;\nvec3 skyRadianceToSurface;\nvec3 groundRadianceToSurface;\nvec3 skyIrradianceToSurface;\nvec3 groundIrradianceToSurface;\nfloat averageAmbientRadiance;\nfloat ssao;\nvec3 albedoLinear;\nvec3 f0;\nvec3 f90;\nvec3 diffuseColor;\nfloat metalness;\nfloat roughness;\n};"])))),n.add(Object(s.a)(v||(v=Object(r.a)(["float normalDistribution(float NdotH, float roughness)\n{\nfloat a = NdotH * roughness;\nfloat b = roughness / (1.0 - NdotH * NdotH + a * a);\nreturn b * b * INV_PI;\n}"])))),n.add(Object(s.a)(b||(b=Object(r.a)(["const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);\nconst vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);\nconst vec2 c2 = vec2(-1.04, 1.04);\nvec2 prefilteredDFGAnalytical(float roughness, float NdotV) {\nvec4 r = roughness * c0 + c1;\nfloat a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;\nreturn c2 * a004 + r.zw;\n}"])))),n.add(Object(s.a)(m||(m=Object(r.a)(["vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {\nvec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);\nvec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);\nvec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;\nvec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);\nvec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;\nvec3 specularComponent = specularColor * indirectSpecular;\nreturn (diffuseComponent + specularComponent);\n}"])))),n.add(Object(s.a)(g||(g=Object(r.a)(["float gamutMapChanel(float x, vec2 p){\nreturn (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );\n}"])))),n.add(Object(s.a)(S||(S=Object(r.a)(["vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){\nvec3 outColor;\nvec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));\noutColor.x = gamutMapChanel(inColor.x, p) ;\noutColor.y = gamutMapChanel(inColor.y, p) ;\noutColor.z = gamutMapChanel(inColor.z, p) ;\nreturn outColor;\n}"])))))}},845:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return y}));var a=n(2),o=n(3),i=n(4),r=n(145),s=n(267),l=n(78),c=n(104),f=n(480),h=n(291),u=n(11),d=n(73),p=n(22),v=n(85),b=n(124),m=function(){function t(){Object(a.a)(this,t),this._transform=Object(c.d)(),this._transformInverse=new g({value:this._transform},l.a,c.d),this._transformInverseTranspose=new g(this._transformInverse,l.e,c.d),this._transformTranspose=new g({value:this._transform},l.e,c.d),this._transformInverseRotation=new g({value:this._transform},r.j,s.b)}return Object(o.a)(t,[{key:"invalidateLazyTransforms",value:function(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}},{key:"transform",get:function(){return this._transform}},{key:"inverse",get:function(){return this._transformInverse.value}},{key:"inverseTranspose",get:function(){return this._transformInverseTranspose.value}},{key:"inverseRotation",get:function(){return this._transformInverseRotation.value}},{key:"transpose",get:function(){return this._transformTranspose.value}},{key:"setTransformMatrix",value:function(t){Object(l.d)(this._transform,t)}},{key:"multiplyTransform",value:function(t){Object(l.m)(this._transform,this._transform,t)}},{key:"set",value:function(t){Object(l.d)(this._transform,t),this.invalidateLazyTransforms()}},{key:"setAndInvalidateLazyTransforms",value:function(t,e){this.setTransformMatrix(t),this.multiplyTransform(e),this.invalidateLazyTransforms()}}]),t}(),g=function(){function t(e,n,o){Object(a.a)(this,t),this.original=e,this.update=n,this.dirty=!0,this.transform=o()}return Object(o.a)(t,[{key:"invalidate",value:function(){this.dirty=!0}},{key:"value",get:function(){return this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1),this.transform}}]),t}(),S=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;Object(a.a)(this,t),this.offset=e,this.tmpVertex=Object(p.e)()}return Object(o.a)(t,[{key:"applyToVertex",value:function(t,e,n){var a=t+this.localOrigin[0],o=e+this.localOrigin[1],i=n+this.localOrigin[2],r=this.offset/Math.sqrt(a*a+o*o+i*i);return this.tmpVertex[0]=t+a*r,this.tmpVertex[1]=e+o*r,this.tmpVertex[2]=n+i*r,this.tmpVertex}},{key:"applyToAabb",value:function(t){var e=t[0]+this.localOrigin[0],n=t[1]+this.localOrigin[1],a=t[2]+this.localOrigin[2],o=t[3]+this.localOrigin[0],i=t[4]+this.localOrigin[1],r=t[5]+this.localOrigin[2],s=this.offset/Math.sqrt(e*e+n*n+a*a);t[0]+=e*s,t[1]+=n*s,t[2]+=a*s;var l=this.offset/Math.sqrt(o*o+i*i+r*r);return t[3]+=o*l,t[4]+=i*l,t[5]+=r*l,t}}]),t}(),x=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;Object(a.a)(this,t),this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=Object(p.e)(),this.mbs=Object(v.e)(),this.obb={center:Object(p.e)(),halfSize:Object(d.b)(),quaternion:null}}return Object(o.a)(t,[{key:"localOrigin",set:function(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])}},{key:"applyToVertex",value:function(t,e,n){var a=t,o=e,i=n+this.componentLocalOriginLength,r=this.offset/Math.sqrt(a*a+o*o+i*i);return this.tmpVertex[0]=t+a*r,this.tmpVertex[1]=e+o*r,this.tmpVertex[2]=n+i*r,this.tmpVertex}},{key:"applyToAabb",value:function(t){var e=t[0],n=t[1],a=t[2]+this.componentLocalOriginLength,o=t[3],i=t[4],r=t[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(e*e+n*n+a*a);t[0]+=e*s,t[1]+=n*s,t[2]+=a*s;var l=this.offset/Math.sqrt(o*o+i*i+r*r);return t[3]+=o*l,t[4]+=i*l,t[5]+=r*l,t}},{key:"applyToMbs",value:function(t){var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),n=this.offset/e;return this.mbs[0]=t[0]+t[0]*n,this.mbs[1]=t[1]+t[1]*n,this.mbs[2]=t[2]+t[2]*n,this.mbs[3]=t[3]+t[3]*this.offset/e,this.mbs}},{key:"applyToObb",value:function(t){var e=t.center,n=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);this.obb.center[0]=e[0]+e[0]*n,this.obb.center[1]=e[1]+e[1]*n,this.obb.center[2]=e[2]+e[2]*n,Object(u.u)(this.obb.halfSize,t.halfSize,t.quaternion),Object(u.f)(this.obb.halfSize,this.obb.halfSize,t.center);var a=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*a,this.obb.halfSize[1]+=this.obb.halfSize[1]*a,this.obb.halfSize[2]+=this.obb.halfSize[2]*a,Object(u.j)(this.obb.halfSize,this.obb.halfSize,t.center),Object(f.a)(z,t.quaternion),Object(u.u)(this.obb.halfSize,this.obb.halfSize,z),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=t.quaternion,this.obb}}]),t}(),O=new(function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;Object(a.a)(this,t),this.offset=e,this.sphere=Object(b.b)(),this.tmpVertex=Object(p.e)()}return Object(o.a)(t,[{key:"applyToVertex",value:function(t,e,n){var a=this.objectTransform.transform,o=a[0]*t+a[4]*e+a[8]*n+a[12],i=a[1]*t+a[5]*e+a[9]*n+a[13],r=a[2]*t+a[6]*e+a[10]*n+a[14],s=this.offset/Math.sqrt(o*o+i*i+r*r);o+=o*s,i+=i*s,r+=r*s;var l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*o+l[4]*i+l[8]*r+l[12],this.tmpVertex[1]=l[1]*o+l[5]*i+l[9]*r+l[13],this.tmpVertex[2]=l[2]*o+l[6]*i+l[10]*r+l[14],this.tmpVertex}},{key:"applyToMinMax",value:function(t,e){var n=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*n,t[1]+=t[1]*n,t[2]+=t[2]*n;var a=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*a,e[1]+=e[1]*a,e[2]+=e[2]*a}},{key:"applyToAabb",value:function(t){var e=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*e,t[1]+=t[1]*e,t[2]+=t[2]*e;var n=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*n,t[4]+=t[4]*n,t[5]+=t[5]*n,t}},{key:"applyToBoundingSphere",value:function(t){var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),n=this.offset/e;return this.sphere[0]=t[0]+t[0]*n,this.sphere[1]=t[1]+t[1]*n,this.sphere[2]=t[2]+t[2]*n,this.sphere[3]=t[3]+t[3]*this.offset/e,this.sphere}}]),t}());function y(t){return Object(i.k)(t)?(O.offset=t,O):null}new x;new S;var j="terrain",z=Object(h.b)()}}]);
//# sourceMappingURL=85.4822993c.chunk.js.map