(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5728: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(7211)
            }])
        },
        7283: function(e, n, t) {
            "use strict";
            t.d(n, {
                H: function() {
                    return s
                }
            });
            var o = t(6955),
                r = t(7430),
                i = t(1575),
                a = t(4219);
            let s = () => {
                let {
                    isIdle: e
                } = (0, o.y0)();
                (0, a.VB)().testExperience && (0, a.KG)({
                    startedMoved: !0
                }), (0, o.IW)({
                    isAfk: !1,
                    isIdle: !1
                }), (0, r.Kn)("userAction");
                let {
                    ref: n
                } = (0, i.XV)();
                e && !n.isFlyingBack && (0, r.Kn)("resetOffsetCamera")
            }
        },
        5683: function(e, n, t) {
            "use strict";
            t.d(n, {
                y: function() {
                    return h
                }
            });
            var o = t(5893),
                r = t(7294),
                i = t(1472),
                a = t(1033),
                s = t(9389),
                l = t.n(s),
                c = t(5878),
                u = t(4671),
                d = t(5518),
                m = t(4219);
            let f = {
                    mass: .6,
                    tension: 300,
                    friction: 60,
                    precision: 1e-5,
                    velocity: 0,
                    clamp: !0
                },
                p = (e, n, t) => Math.min(Math.max(e, n), t),
                g = (e, n, t) => n - t == 0 ? 1 : (e - t) / (n - t),
                v = (0, u.Z)(e => ({
                    scrollPosition: -1
                })),
                h = (0, u.Z)(e => ({
                    scrollTo: e => v.setState({
                        scrollPosition: e
                    }),
                    position: 0,
                    size: 0,
                    lerpPosition: 0,
                    ratio: 0,
                    disableScrollEvent: !1,
                    vs: null,
                    loop: {
                        offset: 0
                    }
                })),
                x = 0,
                y = 0,
                b = (0, r.forwardRef)(function(e, n) {
                    let {
                        children: t,
                        direction: s = "vertical",
                        enableLoop: u = !1,
                        lockInitialScrollBack: b = !1,
                        locked: _ = !1,
                        onScroll: w = () => null,
                        onResize: C = () => null,
                        onLoop: P = () => null,
                        vsConfig: M = {},
                        easingConfig: N = {},
                        easingScrollToConfig: F = {},
                        ...R
                    } = e, S = (0, r.useRef)(!1), z = (0, r.useRef)(b), L = (0, r.useRef)(null);
                    (0, r.useRef)(null);
                    let D = v(e => e.scrollPosition),
                        A = "vertical" === s;
                    h(e => e.disableScrollEvent);
                    let j = u ? A ? window.innerHeight : window.innerWidth : 0,
                        k = (0, r.useRef)(j),
                        E = (0, r.useRef)(j);
                    (0, r.useEffect)(() => {
                        let e = () => {
                            k.current = u ? A ? window.innerHeight : window.innerWidth : 0
                        };
                        return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                    }, [u, A, k]);
                    let [{
                        yPos: T
                    }, V] = (0, i.useSpring)(() => ({
                        yPos: [-E.current],
                        onChange: null,
                        config: { ...f,
                            ...N
                        }
                    })), [B, I] = (0, r.useState)(A ? window.innerHeight : window.innerWidth), U = (0, r.useCallback)((e, n) => {
                        for (let t of e) {
                            let o = t.contentRect;
                            n(A ? o.height : o.width), C(A ? o.height : o.width)
                        }
                    }, [A, C]);
                    (0, r.useLayoutEffect)(() => {
                        let e = L.current;
                        if (!e) return;
                        let n = new a.Z(e => U(e, I));
                        return n.observe(e), V.start({
                            onChange: null,
                            yPos: [-E.current],
                            immediate: !0
                        }), () => {
                            n && n.disconnect()
                        }
                    }, [U, V]);
                    let G = () => {
                            let e = k.current,
                                n = (L.current.children[0].getBoundingClientRect().top - e) / (B - e - (u ? 0 : A ? window.innerHeight : window.innerWidth)),
                                t = p(n, 0, 1);
                            if (h.setState({
                                    position: -E.current,
                                    size: B,
                                    lerpPosition: T,
                                    ratio: t,
                                    ratioNoClamp: n,
                                    isLocked: !1
                                }), u) {
                                let o = e / (B - e),
                                    r = p(g(t - n, -o, 0), 0, 1) / 2;
                                y = p(g(t - n, -o, 0), 0, 1), n < 0 && (r = 1 + p(g(t - n, -o, 0), -1, 0) / 2, x = p(g(t - n, -o, 0), -1, 0)), h.setState({
                                    loopOffset: r,
                                    loopOffsetStart: x,
                                    loopOffsetEnd: y,
                                    loopSize: e
                                })
                            }
                        },
                        W = (0, m.N1)(e => e.testExperience);
                    (0, r.useEffect)(() => {
                        if (D < 0) return;
                        let e = k.current;
                        V.start({
                            yPos: [-(D * (B - e) + e + 1)],
                            onChange: e => {
                                let {
                                    value: n
                                } = e;
                                E.current = -n.yPos[0], G(), w()
                            },
                            onRest: e => {
                                let {
                                    value: n
                                } = e;
                                E.current = -n.yPos[0], G(), w()
                            },
                            config: {
                                duration: W ? 0 : 3e3,
                                easing: e => 1 - (Math.pow(2, -10 * e) - 9765625e-10) * 1.0009775171065494,
                                ...F
                            }
                        })
                    }, [D]);
                    let O = (0, r.useMemo)(() => new(l())({
                        mouseMultiplier: d.ED ? 1.5 : .4,
                        passive: !1,
                        touchMultiplier: 3.25,
                        ...M
                    }), [M]);
                    return (0, r.useEffect)(() => {
                        let e = e => {
                            let {
                                x: n,
                                y: t,
                                deltaX: o,
                                deltaY: r,
                                originalEvent: i
                            } = e;
                            if (!_ && !h.getState().isLocked) {
                                if (S.current) window.setTimeout(function() {
                                    S.current = !1
                                }, 40);
                                else {
                                    Object.assign(E.current);
                                    let a = k.current;
                                    E.current -= o + r, u ? L.current.children[0].getBoundingClientRect().top >= B + a + 1 ? (E.current = 1, S.current = !0, z.current = !1, P()) : E.current < a && (L.current.children[0].getBoundingClientRect().top <= 0 && (E.current = B + a), z.current && (E.current = a), S.current = !0) : E.current = p(E.current, 0, B - (A ? window.innerHeight : window.innerWidth)), h.setState({
                                        vs: O
                                    })
                                }
                            }
                        };
                        return window.addEventListener("scroll", function(e) {
                            console.log(e)
                        }), () => {
                            L.current && L.current.removeEventListener("scroll", e)
                        }
                    }, [B]), (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)("div", {
                            style: {
                                willChange: "transform",
                                position: "absolute",
                                top: "0",
                                left: "0",
                                right: "0",
                                bottom: "0",
                                overflow: "auto",
                                scrollBehavior: "smooth",
                                zIndex: 1
                            },
                            ref: (0, c.Z)([L, n]),
                            ...R,
                            children: t
                        })
                    })
                });
            n.Z = b
        },
        7211: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                __N_SSG: function() {
                    return to
                },
                default: function() {
                    return tr
                }
            });
            var o, r, i, a, s, l = t(5893),
                c = t(7294),
                u = t(8626),
                d = t(9477),
                m = t(9137),
                f = t(8715),
                p = t(7597),
                g = t.n(p);
            let v = (0, m.g)({
                tDiffuse: {
                    value: null
                },
                grassShape: {
                    value: null
                },
                map: {
                    value: null
                },
                color: {
                    value: null
                },
                bladeHeight: {
                    value: 1
                },
                bloom: {
                    value: null
                },
                time: {
                    value: 1
                }
            }, "#define GLSLIFY 1\n#define STANDARD\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n\nout float depth;\nout vec2 vTexCoords;\n\nout float frc;\nout float angle;\n\nattribute vec4 orientation;\nattribute float halfRootAngleSin;\nattribute float halfRootAngleCos;\nattribute float stretch;\n\nuniform float time;\n\n// flowmap\nuniform sampler2D tFlowMap;\nuniform mat4 viewMatrixCamera;\n\n// snoise\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec3 permute(vec3 x) {\n  return mod289(((x * 34.0) + 1.0) * x);\n}\nfloat snoise(vec2 v) {\n  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);\n  vec2 i = floor(v + dot(v, C.yy));\n  vec2 x0 = v - i + dot(i, C.xx);\n  vec2 i1;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n  i = mod289(i);\n  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));\n  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);\n  m = m * m;\n  m = m * m;\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);\n  vec3 g;\n  g.x = a0.x * x0.x + h.x * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n//https://www.geeks3d.com/20141201/how-to-rotate-a-vertex-by-a-quaternion-in-glsl/\nvec3 rotateVectorByQuaternion(vec3 v, vec4 q) {\n  return 2.0 * cross(q.xyz, v * q.w + cross(q.xyz, v)) + v;\n}\n\nmat3 rotation3dY(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n\n  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);\n}\n\nmat3 rotation3dX(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n\n  return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c);\n}\n\n//https://en.wikipedia.org/wiki/Slerp\nvec4 slerp(vec4 v0, vec4 v1, float t) {\n  // Only unit quaternions are valid rotations.\n  // Normalize to avoid undefined behavior.\n  normalize(v0);\n  normalize(v1);\n\n  // Compute the cosine of the angle between the two vectors.\n  float dot_ = dot(v0, v1);\n\n  // If the dot product is negative, slerp won't take\n  // the shorter path. Note that v1 and -v1 are equivalent when\n  // the negation is applied to all four components. Fix by \n  // reversing one quaternion.\n  if(dot_ < 0.0) {\n    v1 = -v1;\n    dot_ = -dot_;\n  }\n\n  const float DOT_THRESHOLD = 0.9995;\n  if(dot_ > DOT_THRESHOLD) {\n    // If the inputs are too close for comfort, linearly interpolate\n    // and normalize the result.\n    vec4 result = t * (v1 - v0) + v0;\n    normalize(result);\n    return result;\n  }\n\n  // Since dot is in range [0, DOT_THRESHOLD], acos is safe\n  float theta_0 = acos(dot_);       // theta_0 = angle between input vectors\n  float theta = theta_0 * t;          // theta = angle between v0 and result\n  float sin_theta = sin(theta);     // compute this value only once\n  float sin_theta_0 = sin(theta_0); // compute this value only once\n  float s0 = cos(theta) - dot_ * sin_theta / sin_theta_0;  // == sin(theta_0 - theta) / sin(theta_0)\n  float s1 = sin_theta / sin_theta_0;\n  return (s0 * v0) + (s1 * v1);\n}\n\nvoid main() {\n    //Relative position of vertex along the mesh Y direction\n  frc = position.y / 1.;\n\n	#include <color_vertex>\n	#include <logdepthbuf_vertex>\n\n  // #ifdef USE_SHADOW\n    // vec4 vWorldPosition = modelMatrix * vec4(position, 1.0);\n    // vec4 vTexCoords = viewMatrixCamera * vWorldPosition;\n    // vec2 uvCloud = (vTexCoords.xy / vTexCoords.w) * 0.05 + 0.5;\n\n  // #endif\n\n  //Define the direction of an unbent blade of grass rotated around the Y axis\n  vec4 direction = vec4(0.0, halfRootAngleSin, 0.0, halfRootAngleCos);\n  //Interpolate between the unbent direction and the direction of growth calculated on the CPU. \n  //Using the relative location of the vertex along the Y axis as the weight, we get a smooth bend\n  direction = slerp(direction, orientation, frc);\n\n  vec3 transformed = vec3(position.x, position.y + position.y * stretch, position.z);\n\n  // billboard non spherical\n  // vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);\n  // vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);\n\n  //Get wind data from simplex noise \n  vec4 instancePos = instanceMatrix * vec4(transformed, 1.);\n\n  float noise = 1.0 - (snoise(vec2((time - instancePos.x / 50.0), (time - instancePos.z / 50.0))));\n\n  transformed = rotateVectorByQuaternion(transformed, direction);\n\n  //Apply wind\n  float halfAngle = noise * 0.25;\n  // select only the top edge\n\n  vec4 vWorldPosition = modelMatrix * instanceMatrix * vec4(transformed, 1.0);\n  vec4 vTexCoordsPos = viewMatrixCamera * -vWorldPosition;\n  vTexCoords = ((vTexCoordsPos.xy) / (vTexCoordsPos.w * vec2(496.57 + 503.42, 577.57 + 422.42))) + vec2(.4965, .4235);\n  float flowmap = texture(tFlowMap, vTexCoords).r;\n\n  if(gl_VertexID == 0) {\n    float halfAngle2 = halfAngle - flowmap * 1.5;\n    transformed = rotateVectorByQuaternion(transformed, normalize(vec4(sin(halfAngle2), 0.0, -sin(halfAngle), cos(halfAngle))));\n\n  }\n	#include <fog_vertex>\n	#include <project_vertex>\n\n  if(gl_VertexID == 0) {\n    float outColor = texture(tFlowMap, vec2(mvPosition.x, mvPosition.z)).r;\n\n    halfAngle += outColor;\n    angle = noise;\n\n  } else {\n    angle = 0.;\n\n  }\n\n  depth = -mvPosition.z;\n}\n", "#define GLSLIFY 1\nlayout(location = 0) out vec4 gColor;\nlayout(location = 1) out vec3 gBloom;\n// layout(location = 2) out vec3 gBright;\n\nuniform vec3 color;\n\nin float depth;\nin float angle;\nin float frc;\nin vec2 vTexCoords;\n\nuniform vec3 diffuse;\nuniform sampler2D tFlowMap;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n\nvec4 layer(vec4 foreground, vec4 background) {\n    return foreground * foreground.a + background * (1.0 - foreground.a);\n}\n\nvoid main() {\n	vec4 diffuseColor = vec4( vec3(.1), opacity );\n  float depthFactor = smoothstep( 50., 100., depth );\n  float depthFactor2 = smoothstep( 100., 500., depth );\n\n  if (depthFactor >= 1.) discard;\n\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n\n  diffuseColor.rgb *= color;\n  vec4 col = vec4(vec3(.8,1.,0.8), 1.0);\n  col.rgb = mix(col.rgb, mix(vec3(1.,0.1,0.1), vec3(1.,0.35,0.35), saturate(pow(angle, 2.))), min(.6, max(frc, 0.)));\n  //Add more green towards root\n  col = mix(vec4(vec3(1.,1.,1.), 1.0), col,frc );\n  //Add a shadow towards root\n  col = mix(vec4(vec3(0.4823529411764706,0.8196078431372549,0.5176470588235295), 1.0), col,  min(.8, max(frc, 0.)));\n\n    // vec2 uvCloud = (vViewPosition.xy / vViewPosition.w) * 0.05 + 0.5;\n\n  float flowmap = texture(tFlowMap, vTexCoords).r;\n\n  // vec3 N = vec3(0.);\n  // vec3 VP = normalize(vViewPosition);\n\n  \n  gColor = col;\n  col.rgb -= vec3(flowmap) * 0.1;\n  \n  gColor = col;\n  gColor.a = 1. - depthFactor;\n\n  // gNormal = vec3(0.);\n\n  // write color to G-Buffer\n  // float brightness = dot(gColor.rgb, vec3(0.2126, 0.7152, 0.0722));\n  gBloom = vec4(0.);\n}\n");
            v.key = g().generate(), (0, f.e)({
                GrassMaterial: v
            });
            var h = t(3320),
                x = function() {
                    var e = new d.Triangle,
                        n = new d.Vector3;

                    function t(e) {
                        var n = e.geometry;
                        if (!n.isBufferGeometry || 3 !== n.attributes.position.itemSize) throw Error("THREE.MeshSurfaceSampler: Requires BufferGeometry triangle mesh.");
                        n.index && (console.warn("THREE.MeshSurfaceSampler: Converting geometry to non-indexed BufferGeometry."), n = n.toNonIndexed()), this.geometry = n, this.randomFunction = Math.random, this.positionAttribute = this.geometry.getAttribute("position"), this.colorAttribute = this.geometry.getAttribute("color"), this.weightAttribute = null, this.distribution = null
                    }
                    return t.prototype = {
                        constructor: t,
                        setWeightAttribute: function(e) {
                            return this.weightAttribute = e ? this.geometry.getAttribute(e) : null, this
                        },
                        build: function() {
                            var n = this.positionAttribute,
                                t = this.weightAttribute,
                                o = new Float32Array(n.count / 3);
                            for (let r = 0; r < n.count; r += 3) {
                                var i = 1;
                                t && (i = t.getX(r) + t.getX(r + 1) + t.getX(r + 2)), e.a.fromBufferAttribute(n, r), e.b.fromBufferAttribute(n, r + 1), e.c.fromBufferAttribute(n, r + 2), i *= e.getArea(), o[r / 3] = i
                            }
                            this.distribution = new Float32Array(n.count / 3);
                            var a = 0;
                            for (let s = 0; s < o.length; s++) a += o[s], this.distribution[s] = a;
                            return this
                        },
                        setRandomGenerator: function(e) {
                            return this.randomFunction = e, this
                        },
                        sample: function(e, n, t) {
                            var o = this.distribution[this.distribution.length - 1],
                                r = this.binarySearch(this.randomFunction() * o);
                            return this.sampleFace(r, e, n, t)
                        },
                        binarySearch: function(e) {
                            for (var n = this.distribution, t = 0, o = n.length - 1, r = -1; t <= o;) {
                                var i = Math.ceil((t + o) / 2);
                                if (0 === i || n[i - 1] <= e && n[i] > e) {
                                    r = i;
                                    break
                                }
                                e < n[i] ? o = i - 1 : t = i + 1
                            }
                            return r
                        },
                        sampleFace: function(t, o, r, i) {
                            var a = this.randomFunction(),
                                s = this.randomFunction();
                            return a + s > 1 && (a = 1 - a, s = 1 - s), e.a.fromBufferAttribute(this.positionAttribute, 3 * t), e.b.fromBufferAttribute(this.positionAttribute, 3 * t + 1), e.c.fromBufferAttribute(this.positionAttribute, 3 * t + 2), o.set(0, 0, 0).addScaledVector(e.a, a).addScaledVector(e.b, s).addScaledVector(e.c, 1 - (a + s)), void 0 !== r && e.getNormal(r), void 0 !== i && void 0 !== this.colorAttribute && (e.a.fromBufferAttribute(this.colorAttribute, 3 * t), e.b.fromBufferAttribute(this.colorAttribute, 3 * t + 1), e.c.fromBufferAttribute(this.colorAttribute, 3 * t + 2), n.set(0, 0, 0).addScaledVector(e.a, a).addScaledVector(e.b, s).addScaledVector(e.c, 1 - (a + s)), i.r = n.x, i.g = n.y, i.b = n.z), this
                        }
                    }, t
                }(),
                y = t(5769),
                b = t(1660);
            let _ = (o = d.MeshPhongMaterial, r = {
                tNoise: null,
                tFractal: null,
                tRough: null,
                vertexColors: 2,
                playerPos: new d.Vector3,
                playerNeonColor: new d.Color,
                grassColor: new d.Color,
                grassColorBottom: new d.Color,
                parallaxScale: .2,
                parallaxMinLayers: 16,
                parallaxMaxLayers: 28,
                map: null,
                time: 0,
                bw: 0,
                nightmod: 0,
                colorWrite: !0,
                vertexColor: !1,
                noiseRepeat: new d.Vector2(1, 1),
                scale: 1
            }, i = "#define GLSLIFY 1\n#include <common>\n\nout vec3 vViewPosition;\nout vec2 vUv;\n// out vec2 vTexCoords;\nout vec3 vWorldPosition;\nout float vDirt;\n\nuniform mat3 uvTransform;\nuniform mat4 viewMatrixCamera;\n\n#include <displacementmap_pars_vertex>\n\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n  vUv = (uvTransform * vec3(uv, 1.)).xy;\n  #include <color_vertex>\n  vDirt = color.g;\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	// #include <project_vertex>\n  vec4 mvPosition = vec4(transformed, 1.0);\n  vec4 mPosition = modelMatrix * mvPosition;\n\n	#ifdef USE_INSTANCING\n  mPosition = instanceMatrix * mPosition;\n	#endif\n\n  mvPosition = viewMatrix * mPosition;\n\n  gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n\n  vViewPosition = -mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n  vWorldPosition = (mPosition).xyz;\n  // vec4 vTexCoordsPos = viewMatrixCamera * mvPosition;\n  // vTexCoords = ((vTexCoordsPos.xy) / (vTexCoordsPos.w * vec2(1000.))) + vec2(0.5);\n\n}\n", class extends o {
                constructor(e) {
                    var n, t, o;
                    super(e), n = this, t = "onBeforeCompile", o = e => {
                        Object.assign(e.uniforms, this.uniforms), "function" == typeof i ? i(e) : (e.vertexShader = i, e.fragmentShader = "#define GLSLIFY 1\nlayout(location = 0) out vec4 gColor;\nlayout(location = 1) out vec4 gBloom;\n#define gl_FragColor     gColor\n\nuniform float time;\nuniform float opacity;\nuniform float nightmod;\nuniform float bw;\nuniform sampler2D tNoise;\nuniform sampler2D tFractal;\nuniform sampler2D tRough;\nin vec2 vUv;\nin float vDirt;\n\nuniform vec3 diffuse;\nuniform vec3 playerPos;\nuniform vec3 grassColor;\nuniform vec3 playerNeonColor;\nuniform vec3 grassColorBottom;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\n\nin vec3 vViewPosition;\nin vec3 vWorldPosition;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n\nvec3 Fast_Improved_OrenNayar(vec3 color, float dotNL, float dotNV, float dotNH, float dotLH, float dotLV, float roughness, float a) {\n  float s = (dotLV - dotNL*dotNV);\n  float A = 1.0 / (PI+(PI/2.0-2.0/3.0)*roughness);\n  float B = roughness*A;\n  float t = 1.0;\n  if (s > 0.0) t = max(dotNL, dotNV) + EPSILON;\n  vec3 L1 = color*(A+B*s/t);\n  return L1;\n}\n\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n  vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n  vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n  vec2 st0 = dFdx( vUv.st );\n  vec2 st1 = dFdy( vUv.st );\n  vec3 N = surf_norm;\n  vec3 q1perp = cross( q1, N );\n  vec3 q0perp = cross( N, q0 );\n  vec3 T = q1perp * st0.x + q0perp * st1.x;\n  vec3 B = q1perp * st0.y + q0perp * st1.y;\n  float det = max( dot( T, T ), dot( B, B ) );\n  float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n  return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n}\n\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\n// snoise\nvec3 mod289(vec3 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;} vec2 mod289(vec2 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;} vec3 permute(vec3 x) {return mod289(((x*34.0)+1.0)*x);} float snoise(vec2 v){const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439); vec2 i  = floor(v + dot(v, C.yy) ); vec2 x0 = v -   i + dot(i, C.xx); vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0); vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod289(i); vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 )); vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0); m = m*m ; m = m*m ; vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5); vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h ); vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw; return 130.0 * dot(m, g);}\n\n// vec3 RoughSpecular(vec3 diff, vec2 uv, vec3 N, vec3 L, vec3 V) {\n//   float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n\n//   vec3 mapRough = texture2D( tRough, uv * 30.).xyz * 2.0 - 1.0;\n//   vec3 G = perturbNormal2Arb( vViewPosition, N, mapRough, faceDirection );\n\n//   vec3 R = reflect(L, G);\n//   float RdotV = max(0., dot(G, V));\n\n//   return -vec3(0.) * vec3(1. - smoothstep(0., 50., vViewPosition.z) * 2.);\n// }\n\nvec3 GlitterSpecular(vec3 diff, vec2 uv, vec3 N, vec3 L, vec3 V, float e) {\n  vec3 N2 = N;\n  float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n  vec3 mapN = texture2D( tNoise, uv * 100.  + e * .05).xyz * 2.0 - 1.0;\n  vec3 G = perturbNormal2Arb( vViewPosition, N2, mapN, faceDirection );\n\n  vec3 mapN2 = texture2D( tNoise, uv * 50.  + e * .002).xyz * 2.0 - 1.0;\n  vec3 G2 = perturbNormal2Arb( vViewPosition, N2, mapN2, faceDirection );\n\n  vec3 R = reflect(L, G * G2);\n  float RdotV = max(0., dot(G * G2, V));\n\n  if(RdotV > smoothstep(0., 1. - .1 * sin(time * 3.), distance(vWorldPosition, playerPos) * 1.) + .1)\n    return playerNeonColor * vec3(2. - smoothstep(0., 50., vViewPosition.z) * 2.);\n\n    // Only the strong ones (= small RdotV)\n  if(RdotV > .8 && smoothstep(0., 50., vViewPosition.z) < 1.)\n    return diff * vec3(2. - smoothstep(0., 50., vViewPosition.z) * 2.);\n\n  return (1. - RdotV) * vec3(0.0);\n}\n\n// #include <lights_phong_pars_fragment>\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n  \n  vec3 normal = geometry.normal;\n  vec3 N2 = geometry.normal;\n\n  float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n\n	vec3 mapN = LinearTosRGB(texture2D( tRough, vUv * 200. )).xyz * 2.  - 1.;\n  mapN.xy *= .35;\n  vec3 N3 = perturbNormal2Arb( - vViewPosition, normalize(normal), normalize(mapN), faceDirection );\n\n  float noise = 1.0-(snoise(vec2((time/2.-vUv.x*40.), (time/4.-vUv.y*40.)))); \n  float vNoise = sin(noise) / 2.;\n  \n  vec3 N = geometry.normal;\n  vec3 V = geometry.viewDir;\n  vec3 L = directLight.direction;\n\n  float dotNL = saturate(dot(N,L));\n  float dotNV = saturate(dot(N,V));\n  vec3 H = normalize(L+V);\n  float roughness = 1.5;\n  float dotNH = saturate(dot(N,H));\n  float dotVH = saturate(dot(V,H));\n  float dotLH = saturate(dot(L,H));\n  float dotLV = saturate(dot(L,V));\n  float a = roughness;\n\n  vec3 diffuse = material.diffuseColor;\n  vec3 irradiance = dotNL * directLight.color;\n\n	// reflectedLight.directDiffuse += (irradiance * .8) * BRDF_Lambert( diffuse );\n  reflectedLight.directDiffuse += mix(irradiance * .8 * Fast_Improved_OrenNayar( material.diffuseColor, dotNL, dotNV, dotLH, dotVH, dotLV, roughness, a ), (irradiance * .8) * BRDF_Lambert( diffuse ), vDirt);\n\n  vec4 fractal3 = texture(tFractal, vUv * 1.);\n\n  float ratio3 = clamp(pow((fractal3.g + 0.7), 8.0), 0.0, 1.0) * .35;\n\n  float dotNLRock = saturate( dot( N3, L ) );\n	vec3 irradianceRock = dotNLRock * directLight.color;\n  vec3 blendRock = mix((irradianceRock * .6) * BRDF_Lambert( diffuse ), reflectedLight.directDiffuse * 1.4, smoothstep(0., 150., vWorldPosition.z));\n	reflectedLight.directDiffuse = mix(blendRock, reflectedLight.directDiffuse, vColor.r);\n\n  reflectedLight.directSpecular = mix(reflectedLight.directSpecular, playerNeonColor, 1. - smoothstep(0., .8, distance(vWorldPosition, playerPos)));\n\n	reflectedLight.directSpecular += (irradiance * .5 * vColor.r) * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n  vec3 glitter = GlitterSpecular(reflectedLight.directDiffuse, vUv, N2, directLight.direction, geometry.viewDir, vNoise * vColor.r);\n  vec3 glitter2 = GlitterSpecular(reflectedLight.directDiffuse, vUv, V, directLight.direction, geometry.viewDir, vNoise * vColor.r);\n\n  reflectedLight.directSpecular += saturate(glitter2 * vColor.r);\n  reflectedLight.directSpecular += glitter * 2.;\n  \n}\n\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * (1. - nightmod * .7) * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)\n\n#include <shadowmap_pars_fragment>\n\nvoid main() {\n#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( mix(grassColor, vec3(0.,0.969,1.), nightmod), opacity );\n\n  float noise = (snoise(vec2((time/1.-vUv.x*40.), (time/2.-vUv.y*40.)))); \n  float vNoise = 1.0-sin(noise) / 2.;\n\n  vec4 fractal = texture(tFractal, vUv / 2.);\n\n  float a = saturate(texture(tNoise, vUv * 100. + vNoise * .05).r + .4);\n  float b = saturate(pow(texture(tNoise, vUv * 100. - vNoise * .08).g, .4));\n\n  diffuseColor.rgb = mix(mix(grassColorBottom * .7, vec3(0.,0.969,1.) * .8, nightmod), diffuseColor.rgb, smoothstep(-12., 50., vWorldPosition.y + vNoise * 10.));\n  diffuseColor.rgb = mix(vec3(1.), diffuseColor.rgb, smoothstep(-70., -6., vWorldPosition.y));\n\n  // shadow system\n  // diffuseColor.rgb = mix(mix(diffuseColor.rgb, vec3(0.,0.,0.), .5), diffuseColor.rgb, smoothstep(0., 1., distance(vWorldPosition, playerPos)));\n  \n  if ( pow(a, 4.) > 0.8) {\n    diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * .5, pow(a, 4.) * smoothstep(0., 40., vViewPosition.z));\n  }\n\n  \n  diffuseColor.rgb = mix(mix( vec3(0.294,0.416,0.486) * .4, vec3(0.294,0.416,0.486), smoothstep(-12., 50., vWorldPosition.y)), diffuseColor.rgb, vColor.r);\n\n  float ratio2 = clamp(pow((fractal.g + 0.5),  7.0), 0.0, 1.0);\n  diffuseColor.rgb= mix(diffuseColor.rgb, mix(diffuseColor.rgb, diffuseColor.rgb + .25, ratio2 * vNoise), smoothstep(0., 0.3, vColor.r));\n\n  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	// #include <color_fragment>\n\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n\n  vec4 fractal3 = texture(tRough, vUv * 10.);\n\n  float ratio3 = clamp(pow((fractal3.g + 0.5),  2.0), 0.0, 1.0);\n\n  diffuseColor.rgb = mix(diffuseColor.rgb, mix(vec3(1.), vec3(0.82,0.776,0.58), ratio3), vDirt);\n\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n\n  if (vColor.r < 0.1) {\n    vec3 rockB = vec3(0.529,0.808,0.922);\n\n    gColor.rgb = mix(rockB, gColor.rgb, smoothstep(-120., -80., vWorldPosition.y));\n  }\n\n  float fractal2 = texture(tFractal, vUv * 50.).r;\n  float gray = 0.21 * gColor.r + 0.71 * gColor.g + 0.07 * gColor.b;\n  vec3 pulseColor = mix(vec3(1.), playerNeonColor, bw);\n  float bwsmooth = 1. - smoothstep(4999. * pow(bw, 5.), 5000. * pow(bw, 5.), distance(vWorldPosition, playerPos));\n  gl_FragColor = vec4(gl_FragColor.rgb * (1.0 - bw) + (gray * bw), gl_FragColor.a);\n  gBloom = vec4(0.0);\n}\n")
                    }, t in n ? Object.defineProperty(n, t, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[t] = o, this.glslVersion = d.GLSL3, this.setValues(e), this.defines = {
                        PHONG: ""
                    };
                    let a = Object.keys(r),
                        s = a.reduce((e, n) => (e[n] = new d.Uniform(r[n]), e), {});
                    this.uniforms = d.UniformsUtils.clone(s);
                    let l = a.reduce((e, n) => (e[n] = {
                        get: () => this.uniforms[n].value,
                        set: e => {
                            this.uniforms[n].value = e
                        }
                    }, e), {});
                    Object.defineProperties(this, l)
                }
            });
            _.key = g().generate(), (0, f.e)({
                MossMaterial: _
            });
            let w = (0, m.g)({
                map: null,
                alphaMap: null,
                opacity: 1,
                time: 1,
                nightmod: 0,
                scale: 1,
                size: 1,
                bw: 1,
                dpr: 1,
                alphaTest: 1,
                uvTransform: new d.Matrix3,
                playerPos: new d.Vector3,
                playerNeonColor: new d.Color(16777215),
                diffuse: new d.Color(16777215),
                color: new d.Color(16777215)
            }, "#define GLSLIFY 1\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nout float frc;\nout float vAnimDistance;\n\nuniform float time;\nuniform float size;\nuniform float dpr;\nuniform vec3 playerPos;\n\n// snoise\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec3 permute(vec3 x) {\n  return mod289(((x * 34.0) + 1.0) * x);\n}\nfloat snoise(vec2 v) {\n  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);\n  vec2 i = floor(v + dot(v, C.yy));\n  vec2 x0 = v - i + dot(i, C.xx);\n  vec2 i1;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n  i = mod289(i);\n  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));\n  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);\n  m = m * m;\n  m = m * m;\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);\n  vec3 g;\n  g.x = a0.x * x0.x + h.x * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n//https://www.geeks3d.com/20141201/how-to-rotate-a-vertex-by-a-quaternion-in-glsl/\nvec3 rotateVectorByQuaternion(vec3 v, vec4 q) {\n  return 2.0 * cross(q.xyz, v * q.w + cross(q.xyz, v)) + v;\n}\n\nvoid main() {\n\n  #include <color_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n\n  float noise = 1.0 - (snoise(vec2((time * 2. - transformed.x / 10.0), (time * 2. - transformed.z / 50.0)))); \n\n  //Apply wind\n  float halfAngle = noise * 0.0005;\n\n  transformed = rotateVectorByQuaternion(transformed, normalize(vec4(sin(halfAngle), 0.0, -sin(halfAngle), cos(halfAngle))));\n  frc = sin(noise) * 2. - 1.;\n  transformed.y += .2;\n  transformed.x += sin(noise) / 5.;\n  transformed.z -= cos(noise) / 4.;\n	// #include <project_vertex>\n	// #include <project_vertex>\n  vec4 mvPosition = vec4(transformed, 1.0);\n  vec4 mPosition = modelMatrix * mvPosition;\n\n	#ifdef USE_INSTANCING\n  mPosition = instanceMatrix * mPosition;\n	#endif\n  vAnimDistance = distance(mPosition.xyz, playerPos);\n\n  float animDistanceRatio = smoothstep(0., 10., vAnimDistance);\n  mPosition.y -= .1;\n  mPosition.x += noise * (sin(time * 30. + noise) * (1. - animDistanceRatio));\n  mPosition.z += noise * (cos(time * 30. + noise) * (1. - animDistanceRatio));\n\n  mvPosition = viewMatrix * mPosition;\n  float sizeDpr = size;\n\n  gl_Position = projectionMatrix * mvPosition;\n  float excitedRatio = sin(time * 20. + noise) * (1. - animDistanceRatio) * size * .3;\n  gl_PointSize = size - (size * .5 * (1. - animDistanceRatio) + excitedRatio);\n  #ifdef USE_SIZEATTENUATION\n  bool isPerspective = isPerspectiveMatrix(projectionMatrix);\n  if(isPerspective)\n    gl_PointSize *= (size / -mvPosition.z);\n	#endif\n\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n\n}\n", "#define GLSLIFY 1\nlayout(location = 0) out vec4 gColor;\nlayout(location = 1) out vec4 gBloom;\n#define gl_FragColor				gColor\n\nin float frc;\nin float vAnimDistance;\n\nuniform vec3 diffuse;\nuniform vec3 playerNeonColor;\nuniform float opacity;\nuniform float scale;\nuniform float bw;\nuniform float nightmod;\n\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n  float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n  vec3 color = mix(diffuse, playerNeonColor, 1. - smoothstep(0., 7., vAnimDistance));\n  color = mix(color, vec3(1.), bw);\n	vec4 diffuseColor = vec4( color, 1. );\n  #include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n  diffuseColor.rgb = color;\n\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n  \n	// #ifdef PREMULTIPLIED_ALPHA\n		// gl_FragColor.rgb *= gl_FragColor.a;\n	// #endif\n  // gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.396078431372549,0.5607843137254902,0.4) - .1, smoothstep(0., 0.6, distanceToCenter));\n  // gl_FragColor.a = 1. - smoothstep(0., 0.45, distanceToCenter) * animDistanceRatio;\n  // gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.16862745098039217,0.5254901960784314,0.9215686274509803), smoothstep(0., .8, distanceToCenter));\n\n  gColor.r = clamp(gColor.r + frc / 5., 0., 1.);\n  gColor.g = clamp(gColor.g + frc / 5., 0., 1.);\n  gColor.b = clamp(gColor.b + frc / 5., 0., 1.);\n  gColor = gl_FragColor;\n  gBloom.rgb = gColor.rgb * nightmod;\n}\n");
            w.prototype.isPointsMaterial = !0, w.key = g().generate(), (0, f.e)({
                FlowersMaterial: w
            });
            var C = t(6955),
                P = t(5403),
                M = t(1802),
                N = t(7430);
            t(5110);
            let {
                damp: F,
                clamp: R
            } = d.MathUtils;

            function S(e) {
                let {
                    node: n,
                    attribute: t = "color",
                    diffuse: o = "#dfd98c",
                    diffuseNight: r = "#ffffff",
                    texture: i = "circle.jpeg",
                    size: a = 1,
                    instances: s = 1500
                } = e, u = (0, y.m)(i);
                u.wrapS = u.wrapT = d.RepeatWrapping, u.needsUpdate = !0;
                let {
                    dpr: m
                } = (0, f.z)(e => e.viewport), p = (0, c.useRef)(null), g = (0, c.useRef)(null), [v] = (0, M.LM)(e => [e.id]), h = new d.Color(o), _ = new d.Color(r);
                (0, f.A)((e, n) => {
                    if (g.current) {
                        g.current.time = e.clock.elapsedTime / 4, g.current.bw = F(g.current.bw, 1 - C.QF.head.smooth + C.QF.team.smooth, 3, n), g.current.color.lerpColors(h, _, C.QF.gameplay.smooth - C.QF.team.smooth), g.current.nightmod = C.QF.gameplay.smooth - C.QF.team.smooth;
                        let t = (0, C.y0)().playerApi;
                        t && g.current.playerPos.copy(t.entity.position)
                    }
                }), (0, c.useEffect)(() => {
                    g.current.playerNeonColor.setRGB(P.TD[(0, M.PR)().skin.color[2]][0], P.TD[(0, M.PR)().skin.color[2]][1], P.TD[(0, M.PR)().skin.color[2]][2])
                }, []), (0, N.zX)("update_skin_color_".concat(v), e => {
                    g.current.playerNeonColor.setRGB(P.TD[e[2]][0], P.TD[e[2]][1], P.TD[e[2]][2])
                });
                let R = (0, c.useMemo)(() => (function(e, n, t) {
                        let o = [],
                            r = new x(n).setWeightAttribute(e).build(),
                            i = new d.Vector3;
                        for (let a = 0; a < t; a++) r.sample(i), o.push(i.x, i.y + .4, i.z);
                        return {
                            position: o
                        }
                    })(t, n, s), [n, s]),
                    S = {};
                return S[t] = (0, b.so)({
                    scale: {
                        value: a,
                        min: 0,
                        max: 100
                    },
                    color: o
                }), (0, l.jsxs)("points", {
                    matrixAutoUpdate: !0,
                    ref: p,
                    renderOrder: -9999,
                    children: [(0, l.jsx)("bufferGeometry", {
                        children: (0, l.jsx)("bufferAttribute", {
                            attachObject: ["attributes", "position"],
                            args: [new Float32Array(R.position), 3]
                        })
                    }), (0, l.jsx)("flowersMaterial", {
                        ref: g,
                        map: u,
                        transparent: !1,
                        side: d.FrontSide,
                        alphaTest: .5,
                        morphTargets: !1,
                        blending: d.NoBlending,
                        sizeAttenuation: !0,
                        isPointsMaterial: !0,
                        color: o,
                        size: Math.max(window.innerHeight * a / 1e3, 8),
                        dpr: m,
                        glslVersion: d.GLSL3
                    }, w.key)]
                })
            }
            var z = t(317),
                L = t(6086);
            let {
                damp: D
            } = d.MathUtils, A = e => {
                let {
                    node: n,
                    noise: t,
                    map: o,
                    rough: r
                } = e, i = (0, c.useRef)(null), a = (0, c.useRef)(null), [s] = (0, M.LM)(e => [e.id]);
                return (0, z.r)(i, {
                    slide: !0,
                    enabled: !0
                }), (0, f.A)((e, n) => {
                    if (a.current) {
                        a.current.time += n, a.current.nightmod = C.QF.gameplay.smooth - C.QF.team.smooth, a.current.bw = D(a.current.bw, 1 - C.QF.head.smooth + C.QF.team.smooth, 3, n);
                        let t = (0, C.y0)().playerApi;
                        t && a.current.playerPos.damp(t.entity.position, 35, n)
                    }
                }), (0, c.useEffect)(() => {
                    a.current.playerNeonColor.setRGB(P.TD[(0, M.PR)().skin.color[2]][0], P.TD[(0, M.PR)().skin.color[2]][1], P.TD[(0, M.PR)().skin.color[2]][2]), (0, L.jF)({
                        physicReady: !0
                    }), (0, N.Kn)("physicready")
                }, []), (0, N.zX)("update_skin_color_".concat(s), e => {
                    a.current.playerNeonColor.setRGB(P.TD[e[2]][0], P.TD[e[2]][1], P.TD[e[2]][2])
                }), (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)("mesh", {
                        ref: i,
                        geometry: n.geometry,
                        position: n.position,
                        scale: n.scale,
                        frustumCulled: !1,
                        rotation: n.rotation,
                        receiveShadow: !0,
                        castShadow: !0,
                        children: (0, l.jsx)("mossMaterial", {
                            attach: "material",
                            diffuse: "#57b800",
                            diffuseNight: "#ca8dfd",
                            grassColor: "#57b800",
                            playerNeonColor: "#ff0000",
                            grassColorBottom: "#72f000",
                            ref: a,
                            side: d.FrontSide,
                            depthTest: !0,
                            transparent: !1,
                            tNoise: t,
                            reflectivity: .8,
                            tFractal: o,
                            tRough: r,
                            vertexColors: 2
                        }, _.key)
                    }, n.uuid)
                })
            }, j = e => {
                let {
                    nodes: n
                } = e, [t, o, r] = (0, y.m)(["/img/noiseGrain.webp", "/img/fractal4.webp", "/img/rough.webp"]);
                return o.wrapS = o.wrapT = d.RepeatWrapping, o.needsUpdate = !0, r.wrapS = r.wrapT = d.RepeatWrapping, r.needsUpdate = !0, t.wrapS = t.wrapT = d.RepeatWrapping, t.repeat = new d.Vector2(40, 40), t.needsUpdate = !0, n.map((e, n) => (0, l.jsx)(A, {
                    node: e,
                    map: o,
                    noise: t,
                    rough: r
                }, n))
            };
            var k = t(4671),
                E = t(374);
            let T = (0, k.Z)((e, n) => ({
                    scene_gpu: null
                })),
                V = e => T(e, E.Z);
            Object.assign(V, T);
            let {
                getStateGlb: B,
                setStateGlb: I
            } = T;
            d.Mesh.prototype.raycast = h.uL, d.BufferGeometry.prototype.computeBoundsTree = h.Xy, d.BufferGeometry.prototype.disposeBoundsTree = h.sn;
            let U = new d.Vector3,
                G = new d.Matrix4;

            function W(e) {
                let {
                    scene: n,
                    options: t = {
                        bW: .2,
                        bH: 1
                    },
                    width: o = 40,
                    instances: r = 0
                } = e, i = (0, C.oR)(e => e.quality), a = (0, c.useMemo)(() => {
                    let e = n.getObjectByName("Landscape").clone();
                    return e.geometry = e.geometry.toNonIndexed(), e
                }, []), s = (0, c.useRef)(null), u = (0, c.useRef)(null);
                (0, c.useEffect)(() => {
                    if (!a) return;
                    let e = s.current;
                    if (!e) return;
                    let n = new x(a).setWeightAttribute("color").build();
                    for (let t = 0; t < r; t++) n.sample(U), G.makeTranslation(U.x, U.y, U.z), e.setMatrixAt(t, G);
                    e.instanceMatrix.needsUpdate = !0
                }, [a, i, r]), (0, f.A)((e, n) => {
                    u.current && (u.current.time = e.clock.elapsedTime / 4)
                }), (0, c.useMemo)(() => (function(e) {
                    let n = [],
                        t = [],
                        o = [],
                        r = [],
                        i = new d.Vector4,
                        a = new d.Vector4;
                    for (let s = 0; s < e; s++) {
                        let l = Math.PI - Math.random() * (2 * Math.PI);
                        o.push(Math.sin(.5 * l)), r.push(Math.cos(.5 * l));
                        let c = new d.Vector3(0, 1, 0),
                            u = c.x * Math.sin(l / 2),
                            m = c.y * Math.sin(l / 2),
                            f = c.z * Math.sin(l / 2),
                            p = Math.cos(l / 2);
                        i.set(u, m, f, p).normalize(), l = .5 * Math.random() + -.25, u = (c = new d.Vector3(1, 0, 0)).x * Math.sin(l / 2), m = c.y * Math.sin(l / 2), f = c.z * Math.sin(l / 2), p = Math.cos(l / 2), a.set(u, m, f, p).normalize(), i = O(i, a), l = .5 * Math.random() + -.25, u = (c = new d.Vector3(0, 0, 1)).x * Math.sin(l / 2), m = c.y * Math.sin(l / 2), f = c.z * Math.sin(l / 2), p = Math.cos(l / 2), a.set(u, m, f, p).normalize(), i = O(i, a), n.push(i.x, i.y, i.z, i.w), s < e / 3 ? t.push(1.8 * Math.random()) : t.push(Math.random())
                    }
                    return {
                        orientations: n,
                        stretches: t,
                        halfRootAngleCos: r,
                        halfRootAngleSin: o
                    }
                })(r), [r, i]);
                let m = new d.Shape;
                return m.moveTo(-.04, -.2), m.lineTo(.04, -.2), m.lineTo(0, .2 + .4), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(S, {
                        node: a,
                        attribute: "color",
                        diffuse: "#a64d79",
                        diffuseNight: "#ca8dfd",
                        size: 15,
                        texture: "/img/disc.png"
                    }), (0, l.jsx)(S, {
                        node: a,
                        attribute: "color",
                        diffuse: "#ffdc00",
                        size: 17,
                        texture: "/img/disc.png"
                    }), (0, l.jsx)(j, {
                        nodes: n.children
                    })]
                })
            }

            function O(e, n) {
                let t = e.x * n.w + e.y * n.z - e.z * n.y + e.w * n.x,
                    o = -e.x * n.z + e.y * n.w + e.z * n.x + e.w * n.y,
                    r = e.x * n.y - e.y * n.x + e.z * n.w + e.w * n.z,
                    i = -e.x * n.x - e.y * n.y - e.z * n.z + e.w * n.w;
                return new d.Vector4(t, o, r, i)
            }

            function Z(e) {
                let n = (0, c.useRef)(),
                    {
                        scene: t
                    } = (0, u.L)("/scene_ground.glb"),
                    o = V(e => e.ground);
                return (0, l.jsx)("group", {
                    ref: n,
                    ...e,
                    children: (0, l.jsx)(c.Suspense, {
                        fallback: null,
                        children: (0, l.jsx)(W, {
                            scene: o || t
                        }, t.uuid)
                    })
                })
            }
            class H {
                createNodeMesh(e) {
                    let n = this.parser.json,
                        t = n.nodes[e];
                    if (!t.extensions || !t.extensions[this.name] || void 0 === t.mesh) return null;
                    let o = t.extensions[this.name],
                        r = o.attributes,
                        i = [],
                        a = {};
                    for (let s in r) i.push(this.parser.getDependency("accessor", r[s]).then(e => (a[s] = e, a[s])));
                    return i.length < 1 ? null : (i.push(this.parser.createNodeMesh(e)), Promise.all(i).then(e => {
                        let n = e.pop();
                        if (!n.isMesh) return n;
                        let t = e[0].count,
                            o = n.matrix.clone(),
                            r = n.position.clone().set(0, 0, 0),
                            i = n.quaternion.clone().set(0, 0, 0, 1),
                            s = n.scale.clone().set(1, 1, 1),
                            l = new this.THREE.InstancedMesh(n.geometry, n.material, t);
                        l.position.copy(r), l.quaternion.copy(i), l.scale.copy(s);
                        for (let c = 0; c < t; c++) a.TRANSLATION && r.fromBufferAttribute(a.TRANSLATION, c), a.ROTATION && i.fromBufferAttribute(a.ROTATION, c), a.SCALE && s.fromBufferAttribute(a.SCALE, c), l.setMatrixAt(c, o.compose(r, i, s));
                        for (let u in a) "TRANSLATION" !== u && "ROTATION" !== u && "SCALE" !== u && n.geometry.setAttribute(u, a[u]);
                        return this.THREE.Object3D.prototype.copy.call(l, n), l.frustumCulled = !0, this.parser.assignFinalMaterial(l), l
                    }))
                }
                constructor(e, n) {
                    this.name = "EXT_mesh_gpu_instancing", this.parser = e, this.THREE = n
                }
            }
            var Q = t(5878);
            class q extends d.MeshPhongMaterial {
                onBeforeCompile(e) {
                    e.uniforms.time = this._time, e.uniforms.bw = this._bw, e.uniforms.crystal = this._crystal, e.uniforms.nightmod = this._nightmod, e.uniforms.roughness = this._roughness, e.uniforms.ditherDistance = this._ditherDistance, e.uniforms.playerPos = this._playerPos, e.uniforms.tNoise = this._tNoise, e.uniforms.tGrunge = this._tGrunge, e.uniforms.playerNeonColor = this._playerNeonColor, e.vertexShader = "\n    uniform float time;\n    out vec3 vWorldPosition;\n    in vec3 color;\n    out vec3 vColor;\n\n    ".concat(e.vertexShader, "\n    "), e.vertexShader = e.vertexShader.replace("#include <worldpos_vertex>", "\n    vColor = color;\n    #ifdef USE_FOG\n      vFogDepth = - mvPosition.z;\n    #endif\n    vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n    #ifdef USE_INSTANCING\n      worldPosition = instanceMatrix * worldPosition;\n    #endif\n    worldPosition = modelMatrix * worldPosition;\n    \n    vWorldPosition = worldPosition.xyz;\n    "), e.vertexShader = e.vertexShader.replace("#include <fog_vertex>", "\n      #ifdef USE_FOG\n        vFogDepth = - mvPosition.z;\n      #endif\n      "), e.fragmentShader = e.fragmentShader.replace("#include <normal_fragment_maps>", "\n        // vec3 mapN = LinearTosRGB(texture2D( normalMap, vUv )).xyz * 2.0 - 1.0;\n        // mapN.xy *= normalScale * (1. - smoothstep(0., 15., vViewPosition.z)) * .3;\n        // #ifdef USE_TANGENT\n        //   normal = normalize( vTBN * mapN );\n        // #else\n        //   normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n        // #endif\n      "), e.fragmentShader = "\n      layout(location = 1) out vec4 gBloom;\n\n      uniform float time;\n      uniform float bw;\n      uniform float crystal;\n      uniform float nightmod;\n      uniform sampler2D tNoise;\n      uniform vec3 playerPos;\n      uniform vec3 playerNeonColor;\n      uniform sampler2D tGrunge;\n      \n      in vec3 vColor;\n\n      in vec3 vWorldPosition;\n\n\n          // snoise\n    vec3 mod289(vec3 x) {\n      return x - floor(x * (1.0 / 289.0)) * 289.0;\n    }\n    vec2 mod289(vec2 x) {\n      return x - floor(x * (1.0 / 289.0)) * 289.0;\n    }\n    vec3 permute(vec3 x) {\n      return mod289(((x * 34.0) + 1.0) * x);\n    }\n    float snoise(vec2 v) {\n      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);\n      vec2 i = floor(v + dot(v, C.yy));\n      vec2 x0 = v - i + dot(i, C.xx);\n      vec2 i1;\n      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n      vec4 x12 = x0.xyxy + C.xxzz;\n      x12.xy -= i1;\n      i = mod289(i);\n      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));\n      vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);\n      m = m * m;\n      m = m * m;\n      vec3 x = 2.0 * fract(p * C.www) - 1.0;\n      vec3 h = abs(x) - 0.5;\n      vec3 ox = floor(x + 0.5);\n      vec3 a0 = x - ox;\n      m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);\n      vec3 g;\n      g.x = a0.x * x0.x + h.x * x0.y;\n      g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n      return 130.0 * dot(m, g);\n    }\n\n    float blendAdd(float base, float blend) {\n	return min(base+blend,1.0);\n}\n\nvec3 blendAdd(vec3 base, vec3 blend) {\n	return min(base+blend,vec3(1.0));\n}\n\nvec3 blendAdd(vec3 base, vec3 blend, float opacity) {\n	return (blendAdd(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n     ".concat(e.fragmentShader, "\n    "), e.fragmentShader = e.fragmentShader.replace("#include <normalmap_pars_fragment>", ""), e.fragmentShader = e.fragmentShader.replace("#include <bsdfs>", "\n      #include <normalmap_pars_fragment>\n      #include <bsdfs>\n      vec3 BRDF_Improved_OrenNayar(vec3 color, float dotNL, float dotNV, float dotNH, float dotLH, float dotLV, float roughness, float a) {\n        float theta_i = acos(dotNL);\n        float theta_r = acos(dotNV);\n        float cos_phi_diff = (dotLV - dotNL*dotNV) / (sin(theta_i)*sin(theta_r) + EPSILON);\n        \n        float A1 = 1.0 - 0.5*a/(a+0.33);\n        float A2 = 0.17*a/(a+0.13);\n        float B = 0.45*a/(a+0.09);\n        float s = cos_phi_diff * sin(theta_i) * sin(theta_r);\n        float t = 1.0;\n        if (s > 0.0) t = max(dotNL, dotNV);\n        vec3 L1 = color*(A1+B*s/t);\n        vec3 L2 = color*color*A2;\n        return (L1+L2)*RECIPROCAL_PI;\n      }\n\n      vec3 Fast_Improved_OrenNayar(vec3 color, float dotNL, float dotNV, float dotNH, float dotLH, float dotLV, float roughness, float a) {\n        float s = (dotLV - dotNL*dotNV);\n        float A = 1.0 / (PI+(PI/2.0-2.0/3.0)*roughness);\n        float B = roughness*A;\n        float t = 1.0;\n        if (s > 0.0) t = max(dotNL, dotNV) + EPSILON;\n        vec3 L1 = color*(A+B*s/t);\n        return L1;\n      }\n      "), e.fragmentShader = e.fragmentShader.replace("#include <color_fragment>", "\n        // diffuseColor = vec4(1.);\n\n        vec3 rock = vec4(diffuse, 1.).rgb;\n        #if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n          diffuseColor.rgb = mix(diffuse * .8, diffuse * 1.5, vColor.r);\n        #endif\n\n        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * .5, vColor.g);\n        //vec3(0.,0.969,1.) * .8\n      \n        // bevel\n        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * .9, vColor.r);\n        // wood\n        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * .5, vColor.b);\n        // diffuseColor.rgb = mix( rock * .4, rock, smoothstep(-12., 50., vWorldPosition.y));\n      "), e.fragmentShader = e.fragmentShader.replace("#include <normalmap_pars_fragment>", "\n      #include <normalmap_pars_fragment>\n\n      "), e.fragmentShader = e.fragmentShader.replace("#include <lights_phong_pars_fragment>", "\n      in vec3 vViewPosition;\n      uniform float roughness;\n      struct BlinnPhongMaterial {\n        vec3 diffuseColor;\n        vec3 specularColor;\n        float specularShininess;\n        float specularStrength;\n      };\n\n      vec3 SparkleSpecular(vec3 diff, vec2 uv, vec3 N, vec3 L, vec3 V) {\n          vec3 N2 = N;\n          float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n          vec3 mapN = LinearTosRGB(texture2D( tNoise, uv * 2.)).xyz * 2.0 - 1.0;\n          vec3 G = perturbNormal2Arb( vViewPosition, N2, mapN, faceDirection );\n\n          vec3 mapN2 = texture2D( tNoise, uv * 1.).xyz * 2.0 - 1.0;\n          vec3 G2 = perturbNormal2Arb( vViewPosition, N2, mapN2, faceDirection );\n\n          vec3 R = reflect(L, G * G2);\n          float RdotV = max(0., dot(G * G2, V));\n\n          // Only the strong ones (= small RdotV)\n        if(RdotV > .75 && smoothstep(0., 15., vViewPosition.z) < 1.)\n          return diff * vec3(1. - smoothstep(0., 15., vViewPosition.z));\n\n        return (1. - RdotV) * vec3(0.0);\n      }\n      void RE_Direct_OrenNayar( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n        vec3 N = geometry.normal;\n        vec3 V = geometry.viewDir;\n        vec3 L = directLight.direction;\n\n        float dotNL = saturate(dot(N,L));\n        float dotNV = saturate(dot(N,V));\n        vec3 H = normalize(L+V);\n        float dotNH = saturate(dot(N,H));\n        float dotVH = saturate(dot(V,H));\n        float dotLH = saturate(dot(L,H));\n        float dotLV = saturate(dot(L,V));\n        float a = roughness * roughness;\n\n        vec3 irradiance = dotNL * directLight.color;\n\n        float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n        vec3 mapN = LinearTosRGB(texture2D( normalMap, vUv )).xyz * 2.  - 1.;\n        mapN.xy *= .5;\n        vec3 N3 = perturbNormal2Arb( - vViewPosition, normalize(N), normalize(mapN), faceDirection );\n\n        float dotNLRock = saturate( dot( N3, L ) );\n        vec3 irradianceRock = dotNLRock * directLight.color;\n        vec3 blendRock = mix((irradianceRock * .6) * BRDF_Lambert( diffuse ), reflectedLight.directDiffuse * 1.4, smoothstep(0., 150., vWorldPosition.z));\n        reflectedLight.directDiffuse = blendRock;\n\n        // reflectedLight.directSpecular = mix(reflectedLight.directSpecular, playerNeonColor, 1. - smoothstep(0., .8, distance(vWorldPosition, playerPos)));\n\n        // reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n        reflectedLight.directDiffuse += irradiance * Fast_Improved_OrenNayar(material.diffuseColor, dotNL, dotNV, dotLH, dotVH, dotLV, roughness, a );\n\n        if (roughness < 1.) {\n          reflectedLight.directSpecular += (irradiance * (1. - roughness)) * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n        }\n        vec3 sparkle = SparkleSpecular(reflectedLight.directDiffuse, vUv, V, L, V);\n        reflectedLight.directSpecular += sparkle * 2.;\n\n      }\n      void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n        reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n      }\n      #define RE_Direct				RE_Direct_OrenNayar\n      #define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n      #define Material_LightProbeLOD( material )	(0)\n      "), e.fragmentShader = e.fragmentShader.replace("#include <map_fragment>", "\n      #ifdef USE_MAP\n        vec2 uv2 = vUv;\n        if (crystal > 0.) {\n          float noise = snoise(vec2((time / 500. - vWorldPosition.x / 5000.0) * 1., (time / 500. - vWorldPosition.y / 5000.0) * 1.));\n          uv2 += noise;\n        }\n        vec4 sampledDiffuseColor = texture2D( map, uv2 );\n        sampledDiffuseColor = vec4(blendAdd(texture2D( map, vUv ).rgb, sampledDiffuseColor.rgb, .4), 1.);\n        #ifdef DECODE_VIDEO_TEXTURE\n          sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n        #endif\n        diffuseColor *= sampledDiffuseColor;\n      #endif\n      "), e.fragmentShader = e.fragmentShader.replace("#include <fog_fragment>", "\n\n      #ifdef USE_FOG\n        #ifdef FOG_EXP2\n          float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n        #else\n          float fogFactor = smoothstep( fogNear, fogFar, vFogDepth * bw );\n        #endif\n        gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n      #endif\n    \n      // float ditherFactor = smoothstep( 0., 1., vFogDepth );\n      // float dith = (Bayer8(gl_FragCoord.xy * 0.45) * 1.0 - .5);\n\n      // if (ditherFactor < 1.) {\n      //   ditherFactor -= dith * ditherFactor;\n      // }\n      // if (ditherDistance < 0.) {\n      //   ditherFactor = 100.;\n      // }\n      // if (ditherFactor < 0.1) discard;\n\n      float gray = 0.21 * gl_FragColor.r + 0.71 * gl_FragColor.g + 0.07 * gl_FragColor.b;\n      gray += .6;\n      gl_FragColor = vec4(gl_FragColor.rgb * (1.0 - bw) + (gray * bw), gl_FragColor.a);\n      // vec3 pulseColor = mix(vec3(1.), playerNeonColor, pow(bw, 1.));\n\n      gl_FragColor = vec4(gl_FragColor.rgb * (1.0 - bw) + (gray * bw), gl_FragColor.a);\n      // gl_FragColor.rgb = mix(gl_FragColor.rgb, playerNeonColor, bw);\n      \n      float glow = vColor.g;\n      if (glow > 0.9) {\n        float bfac = 1. - smoothstep(0., 40., distance(vWorldPosition.xz, playerPos.xz));\n        gl_FragColor.rgb = mix(gl_FragColor.rgb, playerNeonColor, nightmod);\n        gBloom = vec4(mix(vec3(0.), playerNeonColor, nightmod), 1.);\n      }\n      \n\n        if (crystal > 0.) {\n          gl_FragColor.rgb = diffuseColor.rgb;\n          gBloom = vec4(diffuseColor.rgb, 1.);\n        }\n\n        gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb - .1, normal.b);\n\n      ")
                }
                get time() {
                    return this._time.value
                }
                set time(e) {
                    this._time.value = e
                }
                get roughness() {
                    return this._roughness.value
                }
                set roughness(e) {
                    this._roughness.value = e
                }
                get bw() {
                    return this._bw.value
                }
                set bw(e) {
                    this._bw.value = e
                }
                get crystal() {
                    return this._crystal.value
                }
                set crystal(e) {
                    this._crystal.value = e
                }
                get nightmod() {
                    return this._nightmod.value
                }
                set nightmod(e) {
                    this._nightmod.value = e
                }
                get ditherDistance() {
                    return this._ditherDistance.value
                }
                set ditherDistance(e) {
                    this._ditherDistance.value = e
                }
                get playerPos() {
                    return this._playerPos.value
                }
                set playerPos(e) {
                    this._playerPos.value = e
                }
                get playerNeonColor() {
                    return this._playerNeonColor.value
                }
                set playerNeonColor(e) {
                    this._playerNeonColor.value = e
                }
                get tNoise() {
                    return this._tNoise.value
                }
                set tNoise(e) {
                    this._tNoise.value = e
                }
                get tGrunge() {
                    return this._tGrunge.value
                }
                set tGrunge(e) {
                    this._tGrunge.value = e
                }
                constructor(e = {}) {
                    super(e), this.setValues(e), this._time = {
                        value: 0
                    }, this._bw = {
                        value: 1
                    }, this._roughness = {
                        value: 1
                    }, this._crystal = {
                        value: 0
                    }, this._nightmod = {
                        value: 0
                    }, this._ditherDistance = {
                        value: 10
                    }, this._playerPos = {
                        value: new d.Vector3
                    }, this._playerNeonColor = {
                        value: new d.Color(16777215)
                    }, this._tNoise = {
                        value: null
                    }, this._tGrunge = {
                        value: null
                    }
                }
            }
            q.key = g().generate(), (0, f.e)({
                OrenNayarShaderImpl: q
            });
            let K = c.forwardRef((e, n) => {
                let {
                    speed: t = 1,
                    ...o
                } = e, r = c.useRef(null);
                return (0, l.jsx)("orenNayarShaderImpl", {
                    ref: (0, Q.Z)([r, n]),
                    customProgramCacheKey: () => r.current && r.current.onBeforeCompile.toString(),
                    ...o,
                    attach: "material"
                }, q.key)
            });
            var X = t(5572);
            let {
                damp: Y
            } = d.MathUtils, J = e => {
                let {
                    scene: n
                } = e, [t, o, r] = (0, y.m)(["/img/noiseGrain.webp", "/img/fractal4.webp", "/img/rough.webp"]);
                return o.wrapS = o.wrapT = d.RepeatWrapping, o.needsUpdate = !0, r.wrapS = r.wrapT = d.RepeatWrapping, r.repeat = new d.Vector2(1, 1), r.needsUpdate = !0, t.wrapS = t.wrapT = d.RepeatWrapping, t.repeat = new d.Vector2(40, 40), t.needsUpdate = !0, (0, l.jsx)(l.Fragment, {
                    children: n.children.map(e => (0, l.jsx)($, {
                        mesh: e,
                        map: o,
                        rough: r,
                        noise: t
                    }, e.uuid))
                })
            }, $ = e => {
                let {
                    mesh: n,
                    rough: t,
                    noise: o
                } = e, r = (0, c.useRef)(), [i] = (0, M.LM)(e => [e.id]);
                return (0, f.A)((e, n) => {
                    if (!r.current) return;
                    r.current.bw = Y(r.current.bw, 1 - C.QF.head.smooth + C.QF.team.smooth, 3, n), r.current.time += n, r.current.nightmod = C.QF.gameplay.smooth;
                    let t = (0, C.y0)().playerApi;
                    t && r.current.playerPos.copy(t.entity.position)
                }), (0, c.useEffect)(() => {
                    r.current.playerNeonColor.setRGB(P.TD[(0, M.PR)().skin.color[2]][0], P.TD[(0, M.PR)().skin.color[2]][1], P.TD[(0, M.PR)().skin.color[2]][2])
                }, []), (0, N.zX)("update_skin_color_".concat(i), e => {
                    r.current.playerNeonColor.setRGB(P.TD[e[2]][0], P.TD[e[2]][1], P.TD[e[2]][2])
                }), (0, l.jsx)("primitive", {
                    object: n,
                    castShadow: !0,
                    receiveShadow: !0,
                    children: (0, l.jsx)(K, {
                        ref: r,
                        color: n.material.color,
                        roughness: .1,
                        map: n.material.map,
                        crystal: n.name.includes("crystal") || n.name.includes("Spiral") ? 1 : 0,
                        alphaMap: n.material.alphaMap,
                        side: d.DoubleSide,
                        aoMap: n.material && n.material.aoMap,
                        normalMap: n.material.normalMap || t,
                        tNoise: o
                    })
                }, n.uuid)
            };

            function ee(e) {
                let {
                    scene: n
                } = (0, u.L)("/scene_gpu.glb", !0, !1, e => {
                    e.register(e => new H(e, d))
                });
                (0, c.useEffect)(() => (C.Fk.push({
                    dontLookAtMe: !0,
                    eyePosition: new d.Vector3(0, 20, 59),
                    position: new d.Vector3(0, 20, 59),
                    playerId: "crystal"
                }), () => {
                    (0, X.Z)(C.Fk, function(e) {
                        return "crystal" === e.playerId
                    })
                }));
                let t = V(e => e.scene_gpu);
                return (0, l.jsx)(c.Suspense, {
                    fallback: null,
                    children: (0, l.jsx)(J, {
                        scene: t || n
                    })
                })
            }
            let {
                damp: en
            } = d.MathUtils, et = e => {
                let {
                    node: n,
                    noise: t,
                    map: o,
                    rough: r
                } = e, i = (0, c.useRef)(null), a = (0, c.useRef)(null), [s] = (0, M.LM)(e => [e.id]), u = (0, c.useMemo)(() => new d.Matrix4, []), m = (0, c.useMemo)(() => new d.Matrix4, []), p = (0, c.useMemo)(() => n.clone(), [n]);
                return (0, f.A)((e, t) => {
                    if (a.current) {
                        a.current.time += t, a.current.bw = en(a.current.bw, 1 - C.QF.head.smooth + C.QF.team.smooth, 3, t), a.current.nightmod = C.QF.gameplay.smooth;
                        let o = (0, C.y0)().playerApi;
                        if (!o || !o || !p) return;
                        a.current.playerPos.copy(o.entity.position);
                        let r = i.current;
                        for (let s = 0; s < n.count; s++) p.getMatrixAt(s, u), m.makeTranslation(0, .2 * Math.sin(.5 * e.clock.getElapsedTime()), 0), u.multiply(m), r.setMatrixAt(s, u);
                        r.instanceMatrix.needsUpdate = !0
                    }
                }), (0, c.useEffect)(() => {
                    a.current.playerNeonColor.setRGB(P.TD[(0, M.PR)().skin.color[2]][0], P.TD[(0, M.PR)().skin.color[2]][1], P.TD[(0, M.PR)().skin.color[2]][2])
                }, []), (0, N.zX)("update_skin_color_".concat(s), e => {
                    a.current.playerNeonColor.setRGB(P.TD[e[2]][0], P.TD[e[2]][1], P.TD[e[2]][2])
                }), (0, N.zX)("update_meshes_dither", e => {
                    let {
                        dist: n = 10
                    } = e;
                    a.current.ditherDistance = n
                }), (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)("instancedMesh", {
                        ref: i,
                        ...n,
                        receiveShadow: !0,
                        castShadow: !0,
                        children: (0, l.jsx)(K, {
                            ref: a,
                            color: n.material.color,
                            roughness: .1,
                            aoMap: n.material && n.material.aoMap,
                            normalMap: n.material.normalMap || r,
                            aoMapIntensity: .45,
                            side: d.DoubleSide,
                            ditherDistance: 10,
                            tNoise: t
                        })
                    }, n.uuid)
                })
            }, eo = e => {
                let {
                    scene: n
                } = e, [t, o, r] = (0, y.m)(["/img/noiseGrain.webp", "/img/fractal4.webp", "/img/rough.webp"]);
                return o.wrapS = o.wrapT = d.RepeatWrapping, o.needsUpdate = !0, r.wrapS = r.wrapT = d.RepeatWrapping, r.needsUpdate = !0, t.wrapS = t.wrapT = d.RepeatWrapping, t.repeat = new d.Vector2(40, 40), t.needsUpdate = !0, n.children.map((e, n) => e.instanceMatrix ? (0, l.jsx)(et, {
                    node: e,
                    map: o,
                    noise: t,
                    rough: r
                }, n) : null)
            };

            function er(e) {
                let n = (0, c.useRef)(),
                    {
                        scene: t
                    } = (0, u.L)("/scene_float.glb", !0, !1, e => {
                        e.register(e => new H(e, d))
                    }),
                    o = V(e => e.floats);
                return (0, l.jsx)("group", {
                    ref: n,
                    ...e,
                    children: (0, l.jsx)(c.Suspense, {
                        fallback: null,
                        children: (0, l.jsx)(eo, {
                            scene: o || t
                        }, t.uuid)
                    })
                })
            }
            var ei = t(7462),
                ea = t(5697),
                es = t.n(ea);
            es().func.isRequired, es().arrayOf(es().oneOfType([es().element, es().func])).isRequired;
            let el = new d.Matrix4,
                ec = new d.Matrix4,
                eu = [],
                ed = new d.Mesh;
            class em extends d.Group {
                constructor() {
                    super(), this.color = new d.Color("black"), this.instance = {
                        current: void 0
                    }, this.instanceKey = {
                        current: void 0
                    }
                }
                get geometry() {
                    var e;
                    return null == (e = this.instance.current) ? void 0 : e.geometry
                }
                raycast(e, n) {
                    let t = this.instance.current;
                    if (!t || !t.geometry || !t.material) return;
                    ed.geometry = t.geometry;
                    let o = t.matrixWorld,
                        r = t.userData.instances.indexOf(this.instanceKey);
                    if (-1 !== r && !(r > t.count)) {
                        t.getMatrixAt(r, el), ec.multiplyMatrices(o, el), ed.matrixWorld = ec, t.material instanceof d.Material ? ed.material.side = t.material.side : ed.material.side = t.material[0].side, ed.raycast(e, eu);
                        for (let i = 0, a = eu.length; i < a; i++) {
                            let s = eu[i];
                            s.instanceId = r, s.object = this, n.push(s)
                        }
                        eu.length = 0
                    }
                }
            }
            let ef = c.createContext(null),
                ep = new d.Matrix4,
                eg = new d.Matrix4,
                ev = new d.Matrix4,
                eh = new d.Vector3,
                ex = new d.Quaternion,
                ey = new d.Vector3,
                eb = c.forwardRef(({
                    context: e,
                    children: n,
                    ...t
                }, o) => {
                    c.useMemo(() => (0, f.e)({
                        PositionMesh: em
                    }), []);
                    let r = c.useRef(),
                        {
                            subscribe: i,
                            getParent: a
                        } = c.useContext(e || ef);
                    return c.useLayoutEffect(() => i(r), []), c.createElement("positionMesh", (0, ei.Z)({
                        instance: a(),
                        instanceKey: r,
                        ref: (0, Q.Z)([o, r])
                    }, t), n)
                }),
                e_ = c.forwardRef(({
                    children: e,
                    range: n,
                    limit: t = 1e3,
                    frames: o = 1 / 0,
                    ...r
                }, i) => {
                    let [{
                        context: a,
                        instance: s
                    }] = c.useState(() => {
                        let e = c.createContext(null);
                        return {
                            context: e,
                            instance: c.forwardRef((n, t) => c.createElement(eb, (0, ei.Z)({
                                context: e
                            }, n, {
                                ref: t
                            })))
                        }
                    }), l = c.useRef(null), [u, m] = c.useState([]), [
                        [p, g]
                    ] = c.useState(() => {
                        let e = new Float32Array(16 * t);
                        for (let n = 0; n < t; n++) ev.identity().toArray(e, 16 * n);
                        return [e, new Float32Array([...Array(3 * t)].map(() => 1))]
                    });
                    c.useEffect(() => {
                        l.current.instanceMatrix.needsUpdate = !0
                    });
                    let v = 0,
                        h = 0;
                    (0, f.A)(() => {
                        if (o === 1 / 0 || v < o) {
                            l.current.updateMatrix(), l.current.updateMatrixWorld(), ep.copy(l.current.matrixWorld).invert(), h = Math.min(t, void 0 !== n ? n : t, u.length), l.current.count = h, l.current.instanceMatrix.updateRange.count = 16 * h, l.current.instanceColor.updateRange.count = 3 * h;
                            for (let e = 0; e < u.length; e++) {
                                let r = u[e].current;
                                r.matrixWorld.decompose(eh, ex, ey), eg.compose(eh, ex, ey).premultiply(ep), eg.toArray(p, 16 * e), l.current.instanceMatrix.needsUpdate = !0, r.color.toArray(g, 3 * e), l.current.instanceColor.needsUpdate = !0
                            }
                            v++
                        }
                    });
                    let x = c.useMemo(() => ({
                        getParent: () => l,
                        subscribe: e => (m(n => [...n, e]), () => m(n => n.filter(n => n.current !== e.current)))
                    }), []);
                    return c.createElement("instancedMesh", (0, ei.Z)({
                        userData: {
                            instances: u
                        },
                        matrixAutoUpdate: !1,
                        ref: (0, Q.Z)([i, l]),
                        args: [null, null, 0],
                        raycast: () => null
                    }, r), c.createElement("instancedBufferAttribute", {
                        attach: "instanceMatrix",
                        count: p.length / 16,
                        array: p,
                        itemSize: 16,
                        usage: d.DynamicDrawUsage
                    }), c.createElement("instancedBufferAttribute", {
                        attach: "instanceColor",
                        count: g.length / 3,
                        array: g,
                        itemSize: 3,
                        usage: d.DynamicDrawUsage
                    }), "function" == typeof e ? c.createElement(a.Provider, {
                        value: x
                    }, e(s)) : c.createElement(ef.Provider, {
                        value: x
                    }, e))
                }),
                ew = (a = {
                    time: 0,
                    bw: 0,
                    nightmod: 0,
                    count: 0,
                    col: new d.Color(5748736),
                    playerNeonColor: new d.Color(5748736),
                    hairMap: null,
                    tFractal: null,
                    playerPos: new d.Vector3(0, 0, 0),
                    gravity: new d.Vector3(0, 9, 0)
                }, s = e => {
                    e.lights = !0
                }, class extends d.ShaderMaterial {
                    constructor() {
                        let e = Object.entries(a);
                        super({
                            uniforms: d.UniformsUtils.merge([d.UniformsLib.lights, d.UniformsLib.fog, e.reduce((e, n) => {
                                let [t, o] = n, r = d.UniformsUtils.clone({
                                    [t]: {
                                        value: o
                                    }
                                });
                                return { ...e,
                                    ...r
                                }
                            }, {})]),
                            vertexShader: '\n      #include <common>\n\n			uniform float time;\n      uniform float count;\n			uniform vec3 gravity;\n      vec3 mod289(vec3 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;} vec2 mod289(vec2 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;} vec3 permute(vec3 x) {return mod289(((x*34.0)+1.0)*x);} float snoise(vec2 v){const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439); vec2 i  = floor(v + dot(v, C.yy) ); vec2 x0 = v -   i + dot(i, C.xx); vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0); vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod289(i); vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 )); vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0); m = m*m ; m = m*m ; vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5); vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h ); vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw; return 130.0 * dot(m, g);}\n\n			out vec2 vUv;\n			out float vOffset;\n			out float vNoise;\n			out vec3 vNormal;\n      out float vGrass;\n      out vec3 vWorldPosition;\n      out float depth;\n      out float vDirt;\n      #include <shadowmap_pars_vertex>\n\n      in vec3 color;\n			void main() {\n        vOffset = float(gl_InstanceID) / count;\n        vGrass = color.r;\n        vDirt = color.g;\n\n			  float spacing = .03 * (1. - vNoise);\n\n				vUv = uv;\n\n        float noise = 1.0-(snoise(vec2((time/3.5-uv.x*60.), (time/5.5-uv.y*60.)))); \n        vNoise = sin(noise) / 2.;\n\n				vec3 displacement = vec3(0.0,0.0,0.0);\n				vec3 forceDirection = vec3(0.0,0.0,0.0);\n        vec3 pos = position;\n        float factor = 1. * (1. - vDirt);\n				// "wind"\n	    	forceDirection.x = sin(noise * 5.+position.x*0.24) * factor;\n				forceDirection.y = cos(noise * 5.*0.7+position.y*0.04) * factor;\n				forceDirection.z = sin(noise * 5.*0.7+position.y*0.24) * factor;\n\n\n				// "gravity"\n				displacement = forceDirection;\n        // displacement *= noise;\n				float displacementFactor = pow(vOffset, 3.0);\n\n				vec3 aNormal = normal;\n				aNormal.xyz += displacement*displacementFactor;\n        \n        \n				// move outwards depending on offset(layer) and normal+force+gravity\n				vec3 animated = vec3( pos.x, pos.y, pos.z )+(normalize(aNormal)*vOffset*(spacing* count * (1. - (vDirt * .5))));\n\n				vNormal = normalize(normal*aNormal);\n\n\n        vec4 worldPosition = modelMatrix * vec4( animated, 1.0 );\n        worldPosition.y += .01;\n\n        vWorldPosition = worldPosition.xyz;\n    \n				vec4 mvPosition = viewMatrix * worldPosition;\n        depth = -mvPosition.z;\n        \n        #include <beginnormal_vertex>\n        #include <defaultnormal_vertex>\n        #include <shadowmap_vertex>\n\n				gl_Position = projectionMatrix * mvPosition;\n\n			}\n  ',
                            fragmentShader: "\n  layout(location = 1) out vec4 gBloom;\n\n  uniform sampler2D hairMap;\n  uniform sampler2D tFractal;\n  uniform vec3 col;\n  uniform vec3 playerPos;\n  uniform vec3 playerNeonColor;\n  uniform float time;\n  uniform float bw;\n  uniform float nightmod;\n\n  \n  in vec3 vNormal;\n  in float vNoise;\n  in float vOffset;\n  in vec2 vUv;\n  in vec3 vWorldPosition;\n  in float depth;\n  in float vDirt;\n  in float vGrass;\n\n  #include <common>\n  #include <packing>\n  #include <lights_pars_begin>\n  #include <shadowmap_pars_fragment>\n  #include <shadowmask_pars_fragment>\n\n  void main() {\n\n    float offset = vOffset;\n    vec3 diffuse = col * (1.5 - .5 * nightmod);\n    vec4 fractal = texture2D(tFractal, vUv * 04.);\n    float ratio2 = clamp(pow((fractal.r + 0.5),  3.0), 0.0, 1.0);\n    float ratio3 = clamp(pow((fractal.g + 0.5),  3.0), 0.0, 1.0);\n    float ratio4 = 1. - clamp(pow((fractal.r + .3),  3.0), 0.0, 1.0);\n\n\n    vec4 hairColor = texture2D(hairMap, vec2(vUv.s, vUv.t) *(400.0 + (vDirt * 1000.)));\n    hairColor.a *= .3 + vNoise / 2.;\n    hairColor.a *= vGrass + vDirt;\n    // vec4 col = texture2D(colorMap, vec2(vUv.s*0.2, vUv.t*0.2));\n\n    hairColor.a *= 1. - smoothstep(0., 100., depth);\n    hairColor.a *=  vGrass + vDirt;\n\n    hairColor.a -= (1. - vGrass - vDirt) * .2;\n\n    // discard no hairs + above the max length\n    if ((hairColor.a <= 0.0 || hairColor.g < offset || (vGrass + vDirt) <= 0.0)) {\n      discard;\n    }\n\n    hairColor.a += (1. - smoothstep(0., 100., depth)) * (vGrass + vDirt) * .8;\n\n\n\n    diffuse = mix(vec3(0.447,0.941,0.), diffuse, smoothstep(-12., 50., vWorldPosition.y + vNoise));\n    diffuse *= .5 - .3 * nightmod;\n    diffuse = mix(mix(diffuse.rgb, diffuse.rgb + .2, vNoise), mix(vec3(0.,0.969,1.) + .5, vec3(0.,0.969,1.), vNoise), nightmod);\n\n    diffuse = clamp(diffuse, 0., 1.);\n    float shadow = mix(0.0,hairColor.b*1.2,offset);\n\n\n    diffuse.rgb = mix(diffuse.rgb, vec3(0.82,0.776,0.58), saturate(vDirt - pow(ratio2, 3.01) * vNoise)) * 1.;\n\n\n    // light\n    vec3 light = vec3(0.1,1.0,0.3);\n    float d = pow(max(0.25,dot(vNormal.xyz, light))*(5.75 + vDirt * 4.2 * ratio2), 1.4);\n\n    gl_FragColor = mix(vec4(diffuse, hairColor.a), vec4(mix(diffuse, vec3(1.), diffuse.xyz*d*shadow), 2.1-offset), ratio2 * (1. - vNoise));\n    gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * 1., ratio2 * vNoise);\n    gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * .5, ratio3 * vNoise);\n    gl_FragColor.a *= hairColor.a;\n\n    float dist = saturate(pow(distance(vWorldPosition.xyz, playerPos), 2.));\n    float limit = .5;\n    gl_FragColor.a *= smoothstep(0., .5, pow(distance(vWorldPosition.xyz, playerPos), 2.8));\n    if (dist <= limit) {\n      gl_FragColor.rgb = mix(mix(playerNeonColor, gl_FragColor.rgb, .5), gl_FragColor.rgb, smoothstep(.0, limit, dist));\n    }\n    gl_FragColor.a *= clamp(vNoise, 0., 1.);\n\n    gl_FragColor.a *= 1. - smoothstep(0., 600., depth);\n    \n    // gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(.8), bw);\n\n    float gray = 0.21 * gl_FragColor.r + 0.71 * gl_FragColor.g + 0.07 * gl_FragColor.b;\n    gl_FragColor = vec4(gl_FragColor.rgb * (1.0 - bw) + (gray * bw), gl_FragColor.a);\n    vec3 pulseColor = mix(vec3(1.), playerNeonColor, bw);\n\n    // gl_FragColor.rgb = mix(gl_FragColor.rgb, playerNeonColor, 1. - bw);\n\n    gl_FragColor = vec4(gl_FragColor.rgb * (1.0 - bw) + (gray * bw), gl_FragColor.a);\n    gl_FragColor.rgb -= nightmod * .4;\n\n    vec3 shadowColor = vec3(0, 0, 0);\n    float shadowPower = 0.5;\n    gl_FragColor.rgb = mix(gl_FragColor.rgb, shadowColor, (1.0 - getShadowMask() ) * shadowPower);\n\n    // gl_FragColor.rg = vec2(vGrass, vDirt);\n    gBloom.rgb = vec3(0.);\n  }\n  "
                        }), e.forEach(e => {
                            let [n] = e;
                            return Object.defineProperty(this, n, {
                                get: () => this.uniforms[n].value,
                                set: e => this.uniforms[n].value = e
                            })
                        }), s && s(this)
                    }
                });
            ew.key = g().generate(), (0, f.e)({
                FurMaterial: ew
            });
            var eC = t(3865),
                eP = t(5518);
            let {
                damp: eM
            } = d.MathUtils, eN = e => {
                let {
                    node: n,
                    fractal: t
                } = e;
                (0, eC.Bf)(e => e.videoQuality);
                let [o] = (0, M.LM)(e => [e.id]), r = (0, f.z)(e => {
                    let {
                        get: n
                    } = e;
                    return n
                }), [i, a] = (0, c.useMemo)(() => {
                    let e = new d.Texture(function() {
                        let e = document.createElement("canvas");
                        e.width = 256, e.height = 256;
                        let n = e.getContext("2d");
                        for (let t = 0; t < 2e4; ++t) n.fillStyle = "rgba(255," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + ",1)", n.fillRect(Math.random() * e.width, Math.random() * e.height, 2, 2);
                        return e
                    }());
                    e.wrapS = e.wrapT = d.RepeatWrapping, e.anisotropy = r().gl.capabilities.getMaxAnisotropy(), e.needsUpdate = !0;
                    let n = [];
                    for (let t = 0; t < 20; t++) n.push(t / 20);
                    return [e, n]
                }, []), s = (0, c.useRef)();
                return (0, f.A)((e, n) => {
                    let {
                        mouse: t,
                        camera: o
                    } = e;
                    s.current.time += n;
                    let r = 150 * Math.sin(t.x) - o.position.x;
                    s.current.gravity.y = -.75 + Math.abs(r) / 150 - 2 * t.y, s.current.bw = eM(s.current.bw, 1 - C.QF.head.smooth + C.QF.team.smooth, 3, n), s.current.nightmod = C.QF.gameplay.smooth - C.QF.team.smooth;
                    let i = (0, C.y0)().playerApi;
                    i && s.current.playerPos.damp(i.entity.position, 35, n)
                }), (0, c.useEffect)(() => {
                    s.current.playerNeonColor.setRGB(P.TD[(0, M.PR)().skin.color[2]][0], P.TD[(0, M.PR)().skin.color[2]][1], P.TD[(0, M.PR)().skin.color[2]][2])
                }, []), (0, N.zX)("update_skin_color_".concat(o), e => {
                    s.current.playerNeonColor.setRGB(P.TD[e[2]][0], P.TD[e[2]][1], P.TD[e[2]][2])
                }), (0, l.jsxs)(e_, {
                    limit: 20,
                    range: 20,
                    frustumCulled: !1,
                    receiveShadow: !0,
                    children: [(0, l.jsx)("bufferGeometry", { ...n.geometry
                    }), (0, l.jsx)("furMaterial", {
                        ref: s,
                        count: 20,
                        vertexColors: 2,
                        hairMap: i,
                        tFractal: t,
                        depthTest: !0,
                        depthWrite: !1,
                        transparent: !0,
                        side: d.FrontSide,
                        blending: d.NormalBlending
                    }, ew.key), a.map((e, n) => (0, l.jsx)(eb, {}, n))]
                }, "instance_".concat(n.geometry.uuid))
            }, eF = () => {
                let [e] = (0, y.m)(["/img/fractal4.webp"]), {
                    nodes: n,
                    scene: t
                } = (0, u.L)("/scene_ground.glb");
                return (0, eC.Bf)(e => e.videoQuality), eP.nI ? (0, l.jsx)(eN, {
                    node: t.children[0],
                    fractal: e
                }) : null
            };
            var eR = t(3606),
                eS = t(2113),
                ez = t(1799);
            let eL = (0, k.Z)((e, n) => ({
                    gemsQuestStarted: !1,
                    flyQuestStarted: !1,
                    jumpQuestStarted: !1
                })),
                eD = e => eL(e, E.Z);
            Object.assign(eD, eL);
            let {
                getState: eA,
                setState: ej
            } = eL, ek = [{
                position: [-26.2, -6.16, -40.54],
                quaternion: [0, .3801, 0, .9249],
                skin: [10, 10, 10],
                height: 1,
                animationId: 34,
                triggerDistance: 30,
                name: "Guide",
                getInteractScriptId: () => "",
                getInReachScriptId: () => "npc_reach_1_0"
            }], eE = Object.assign({
                npc_reach_1_0: {
                    inGameMsg: "msg_1_0",
                    anim: "thankYou"
                }
            });
            var eT = t(111),
                eV = t(9497),
                eB = t(318),
                eI = t.t(eB, 2),
                eU = t(4661),
                eG = t(6924),
                eW = t(4219);
            let eO = e => {
                    (0, N.Kn)("hideMessages_".concat(e))
                },
                eZ = e => {
                    let {
                        NPCid: n,
                        position: t,
                        quaternion: o,
                        skin: r,
                        height: i,
                        animationId: a,
                        name: s,
                        inReachTrigger: u = () => {},
                        interactTrigger: d = () => {},
                        outOfReachTrigger: m = () => {},
                        triggerDistance: p = 20
                    } = e, g = (0, c.useRef)(null), v = (0, c.useRef)(null), h = (0, c.useRef)({
                        inReach: !1
                    }), x = "npc" + n, [y, b] = (0, c.useState)(!1), _ = (0, c.useMemo)(() => {
                        let e = (0, C.EA)(x, {
                            isCharacterInstance: !0
                        });
                        return e.initAnim = a, e
                    }, [x]), w = (0, M.LM)(e => e.id), P = (0, c.useMemo)(() => C.Fm.find(e => w === e.playerId), [w]);
                    (0, eG.Z)(_, x), (0, c.useEffect)(() => {
                        let e = (0, C.y0)().playersPublic;
                        e[x] = {}, e[x].name = s, e[x].isNpc = !0, (0, C.IW)({
                            playersPublic: e
                        })
                    }, [s]), (0, N.zX)("anim_".concat(x), e => {
                        let {
                            name: n
                        } = e;
                        if (!g.current) return
                    }), (0, c.useEffect)(() => {
                        let e = g.current;
                        _ && (_.position = e.position, _.quaternion = e.quaternion)
                    }, [g, y, _]), (0, c.useEffect)(() => {
                        g.current && _ && (_.position = g.current.position, (0, C.oC)(x))
                    }, [g, _, x]);
                    let F = (0, c.useCallback)((0, eT.Z)((e, n) => {
                        if (!g.current) return;
                        C.QF.gameplay.value < .001 && !(0, eW.VB)().testExperience ? (g.current.position.y = -9999, _.holo = 1) : (g.current.position.y = -6.16, _.holo = 0), v.current.position.set(g.current.position.x, g.current.position.y, g.current.position.z), v.current.quaternion.set(0, 0, 0, 0);
                        let t = _.position.distanceTo(P.position);
                        if (h.current.inReach) {
                            let o = (0, C.y0)().canInteractWith,
                                r = 9999;
                            if (o && (r = o.player.position.distanceTo(P.position)), r < t) return;
                            (0, C.IW)({
                                canInteractWith: {
                                    player: _,
                                    trigger: d
                                }
                            }), t >= p && ((0, C.IW)({
                                canInteractWith: null
                            }), h.current.inReach = !1, eO(x), m())
                        } else t < p && (h.current.inReach = !0, u())
                    }, 500), [500]);
                    return (0, f.A)(F), (0, c.useEffect)(() => {
                        a && (0, N.Kn)("anim_".concat(x), {
                            name: eS.l0[a],
                            play: !0,
                            timeScale: eS.MQ[eS.l0[a]]
                        }), (0, N.Kn)("update_skin_height_".concat(x), i), (0, N.Kn)("update_skin_color_".concat(x), r), (0, N.Kn)("update_name_".concat(x), s)
                    }, [_]), (0, c.useEffect)(() => {
                        b(!0)
                    }, []), (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("group", {
                            ref: v,
                            children: (0, l.jsx)(ez.Z, {
                                playerId: x,
                                player: _,
                                grpRef: g,
                                fromNpc: !0
                            })
                        }), (0, l.jsx)("group", {
                            ref: g,
                            position: t,
                            quaternion: o,
                            children: y && (0, l.jsx)(eR.Z, {
                                grpRef: g,
                                playerId: x,
                                player: _
                            })
                        })]
                    })
                },
                eH = (e, n) => {
                    let t = eE[e];
                    t && (t.anim && (0, N.Kn)("anim_npc".concat(n), {
                        name: t.anim,
                        play: !0,
                        reset: !0,
                        timeScale: eS.MQ[t.anim]
                    }), t.inGameMsg && (0, N.Kn)("message_npc".concat(n), {
                        messages: [{
                            message: eI[t.inGameMsg]
                        }]
                    }))
                },
                eQ = () => (0, l.jsx)(l.Fragment, {
                    children: ek.map((e, n) => (0, l.jsx)(eZ, {
                        position: e.position,
                        NPCid: n,
                        quaternion: e.quaternion,
                        skin: e.skin,
                        height: e.height,
                        animationId: e.animationId,
                        triggerDistance: e.triggerDistance,
                        name: e.name,
                        interactTrigger: () => {},
                        inReachTrigger: () => {
                            eH(e.getInReachScriptId(), n)
                        }
                    }, n))
                });
            class eq extends d.MeshLambertMaterial {
                onBeforeCompile(e) {
                    e.uniforms.time = this._time, e.uniforms.bw = this._bw, e.uniforms.nightmode = this._nightmode, e.uniforms.ditherDistance = this._ditherDistance, e.uniforms.playerPos = this._playerPos, e.vertexShader = "\n    uniform float time;\n    out float vWorldPos;\n    out float vNoise;\n   \n    // snoise\n    vec3 mod289(vec3 x) {\n      return x - floor(x * (1.0 / 289.0)) * 289.0;\n    }\n    vec2 mod289(vec2 x) {\n      return x - floor(x * (1.0 / 289.0)) * 289.0;\n    }\n    vec3 permute(vec3 x) {\n      return mod289(((x * 34.0) + 1.0) * x);\n    }\n    float snoise(vec2 v) {\n      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);\n      vec2 i = floor(v + dot(v, C.yy));\n      vec2 x0 = v - i + dot(i, C.xx);\n      vec2 i1;\n      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n      vec4 x12 = x0.xyxy + C.xxzz;\n      x12.xy -= i1;\n      i = mod289(i);\n      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));\n      vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);\n      m = m * m;\n      m = m * m;\n      vec3 x = 2.0 * fract(p * C.www) - 1.0;\n      vec3 h = abs(x) - 0.5;\n      vec3 ox = floor(x + 0.5);\n      vec3 a0 = x - ox;\n      m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);\n      vec3 g;\n      g.x = a0.x * x0.x + h.x * x0.y;\n      g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n      return 130.0 * dot(m, g);\n    }\n\n    ".concat(e.vertexShader, "\n    "), e.vertexShader = e.vertexShader.replace("#include <project_vertex>", "\n      vec4 mvPosition = vec4(transformed, 1.0);\n\n      #ifdef USE_INSTANCING\n        mvPosition = instanceMatrix * mvPosition;\n      #endif\n\n      float noise = 0.0;\n      noise = snoise(vec2((time / 2. - mvPosition.x / 2.0) * .4, (time / 4. - mvPosition.y / 2.0) * .4));\n      vNoise = noise;\n      if (mvPosition.y > .4) {\n        #ifdef USE_INSTANCING\n        #else\n          noise *= .1;\n        #endif\n        mvPosition.x += noise / 1.;\n        mvPosition.z -= noise / 1.;\n      }\n\n      vec4 mPosition = modelMatrix * mvPosition;\n\n      mvPosition = viewMatrix * mPosition;\n      gl_Position = projectionMatrix * mvPosition;\n      "), e.vertexShader = e.vertexShader.replace("#include <worldpos_vertex>", "\n    #ifdef USE_FOG\n      vFogDepth = - mvPosition.z;\n    #endif\n    vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n    #ifdef USE_INSTANCING\n      worldPosition = instanceMatrix * worldPosition;\n    #endif\n    worldPosition = modelMatrix * worldPosition;\n    vWorldPos = distance((modelMatrix * worldPosition).xyz, vec3(1000. * noise, 2000. * noise, -3000.));\n    "), e.vertexShader = e.vertexShader.replace("#include <fog_vertex>", "\n      #ifdef USE_FOG\n        vFogDepth = - mvPosition.z;\n      #endif\n      "), e.fragmentShader = "\n      layout(location = 1) out vec4 gBloom;\n      uniform float time;\n      uniform float bw;\n      uniform float nightmode;\n      in float vWorldPos;\n      in float vNoise;\n     ".concat(e.fragmentShader, "\n    "), e.fragmentShader = e.fragmentShader.replace("#include <fog_fragment>", "\n\n      #ifdef USE_FOG\n        #ifdef FOG_EXP2\n          float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n        #else\n          float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n        #endif\n        gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n      #endif\n\n      float gray = 0.21 * gl_FragColor.r + 0.71 * gl_FragColor.g + 0.07 * gl_FragColor.b;\n      gray += .4;\n\n      gl_FragColor = vec4(gl_FragColor.rgb * (1.0 - bw) + (gray * bw), gl_FragColor.a);\n       \n      \n      gl_FragColor.rgb = mix(gl_FragColor.rgb, mix(vec3(0.,0.969,1.), vec3(0.9, 1., 0.9), smoothstep(2000., 10000., vWorldPos)), nightmode);\n      gBloom = vec4(mix(vec3(0.), mix(gl_FragColor.rgb, vec3(0.), vNoise), nightmode), 0.);\n      ")
                }
                get time() {
                    return this._time.value
                }
                set time(e) {
                    this._time.value = e
                }
                get ditherDistance() {
                    return this._ditherDistance.value
                }
                set ditherDistance(e) {
                    this._ditherDistance.value = e
                }
                get playerPos() {
                    return this._playerPos.value
                }
                set playerPos(e) {
                    this._playerPos.value = e
                }
                get bw() {
                    return this._bw.value
                }
                set bw(e) {
                    this._bw.value = e
                }
                get nightmode() {
                    return this._nightmode.value
                }
                set nightmode(e) {
                    this._nightmode.value = e
                }
                constructor(e = {}) {
                    super(e), this.setValues(e), this._time = {
                        value: 0
                    }, this._ditherDistance = {
                        value: 10
                    }, this._bw = {
                        value: 0
                    }, this._nightmode = {
                        value: 0
                    }, this._playerPos = {
                        value: new d.Vector3
                    }
                }
            }
            eq.key = g().generate(), (0, f.e)({
                SakuraShaderImpl: eq
            });
            let eK = c.forwardRef((e, n) => {
                    let {
                        speed: t = 1,
                        ...o
                    } = e, r = c.useRef(null);
                    return (0, f.A)(e => r.current && (r.current.time = e.clock.getElapsedTime() * t)), (0, l.jsx)("sakuraShaderImpl", {
                        ref: (0, Q.Z)([r, n]),
                        customProgramCacheKey: () => r.current && r.current.onBeforeCompile.toString(),
                        ...o,
                        side: d.DoubleSide,
                        fog: !1,
                        attach: "material"
                    }, eq.key)
                }),
                {
                    damp: eX
                } = d.MathUtils,
                eY = e => {
                    let {
                        mesh: n
                    } = e, t = (0, c.useRef)(), o = (0, c.useRef)(), r = (0, y.m)("/img/leaf_alpha_bw.webp");
                    return (0, f.A)((e, n) => {
                        t.current && (t.current.bw = eX(t.current.bw, 1 - C.QF.head.smooth + C.QF.team.smooth, 3, n), t.current.nightmode = C.QF.gameplay.smooth - C.QF.team.smooth)
                    }), (0, l.jsxs)("primitive", {
                        ref: o,
                        object: n,
                        castShadow: !0,
                        frustumCulled: !0,
                        children: [(0, l.jsx)("meshDepthMaterial", {
                            attach: "customDepthMaterial",
                            depthPacking: d.RGBADepthPacking,
                            map: n.material.alphaMap,
                            alphaTest: .5
                        }), (0, l.jsx)(eK, {
                            ref: t,
                            ...n.material,
                            map: null,
                            alphaMap: r,
                            color: 16764639,
                            bw: 1,
                            side: d.DoubleSide
                        })]
                    }, n.uuid)
                };

            function eJ(e) {
                let {
                    scene: n
                } = e;
                return n.children.map(e => (0, l.jsx)(eY, {
                    mesh: e
                }, e.uuid))
            }

            function e$() {
                let {
                    scene: e
                } = (0, u.L)("/scene_leaves.glb", !0, !1, e => {
                    e.register(e => new H(e, d))
                }), n = V(e => e.scene_sakura);
                return (0, l.jsx)(c.Suspense, {
                    fallback: null,
                    children: (0, l.jsx)(eJ, {
                        scene: n || e
                    })
                })
            }
            let e0 = (0, m.g)({
                bw: 1,
                nightmod: 0,
                size: 0
            }, "#define GLSLIFY 1\nin vec3 aEuler;\nout float pAlpha;\nout vec3 normX;\nout vec3 normY;\nout vec3 normZ;\nuniform float size;\n\nvoid main() {\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	pAlpha = (modelMatrix * vec4( position, 1.0 )).y;\n    gl_Position = projectionMatrix * mvPosition;\n    gl_PointSize = (size) * (10. / -mvPosition.z);\n    \n	float pdist = length(mvPosition.xyz);\n	// Caculate Normal\n	vec3 elrsn = sin(aEuler);\n 	vec3 elrcs = cos(aEuler);\n 	mat3 rotx = mat3(\n		1.0, 0.0, 0.0,\n      0.0, elrcs.x, elrsn.x,\n      0.0, -elrsn.x, elrcs.x\n 	);\n	mat3 roty = mat3(\n      elrcs.y, 0.0, -elrsn.y,\n      0.0, 1.0, 0.0,\n      elrsn.y, 0.0, elrcs.y\n	);\n	mat3 rotz = mat3(\n      elrcs.z, elrsn.z, 0.0, \n      -elrsn.z, elrcs.z, 0.0,\n      0.0, 0.0, 1.0\n	);\n	mat3 rotmat = rotx * roty * rotz;\n	mat3 trrotm = mat3(\n      rotmat[0][0], rotmat[1][0], rotmat[2][0],\n      rotmat[0][1], rotmat[1][1], rotmat[2][1],\n      rotmat[0][2], rotmat[1][2], rotmat[2][2]\n 	);\n 	normX = trrotm[0];\n 	normY = trrotm[1];\n 	normZ = trrotm[2];\n}\n", "layout(location = 1) out vec4 gBloom;\n\nuniform float bw;\nuniform float nightmod;\nprecision highp float;\n#define GLSLIFY 1\nin vec3 normX;\nin vec3 normY;\nin vec3 normZ;\nin float pAlpha;\nfloat diffuse = 0.9;\nfloat specular = 0.8;\nfloat rstop = 0.1;\n// pos orign r.ab\nfloat ellipse(vec2 p, vec2 o, vec2 r) { \n    vec2 lp = (p - o) / r;\n    return length(lp) - 1.0;\n}\nvoid main() {\n	vec3 p = vec3(gl_PointCoord - vec2(0.5, 0.5), 0.0) * 2.0;\n	vec3 d = vec3(0.0, 0.0, -1.0);\n	float nd = normZ.z; //dot(-normZ, d);\n	if(abs(nd) < 0.0001) discard;\n	float np = dot(normZ, p);\n    vec3 tp = p + d * np / nd;//dot(-normZ, d) / dot(-normZ, p);\n	// Back 2D \n 	vec2 coord = vec2(dot(normX, tp), dot(normY, tp));\n	// angle = 15 degree\n	const float flwrsn = 0.258819045102521;\n	const float flwrcs = 0.965925826289068;\n	mat2 flwrm = mat2(flwrcs, -flwrsn, flwrsn, flwrcs);\n	// abs => double [0,1]\n	vec2 flwrp = vec2(abs(coord.x), coord.y) * flwrm;\n	float r;\n	if(flwrp.x < 0.0) {\n	// middle part(double)\n		r = ellipse(flwrp, vec2(0.065, 0.024) * 0.5, vec2(0.36, 0.96) * 0.5);\n	} else {\n		// out part(double)\n		r = ellipse(flwrp, vec2(0.065, 0.024) * 0.5, vec2(0.58, 0.96) * 0.5);\n	}\n	if(r > rstop) discard;\n    vec3 col = vec3(1.);\n    \n	float grady = mix(0.0, 1.0, pow(coord.y * 0.5 + 0.5, 0.35));\n  	col *= vec3(1.0, grady, grady);\n	col *= mix(0.8, 1.0, pow(abs(coord.x), 0.3));\n  	col = col * diffuse + specular;\n    \n	float alphaS = (0.5 - r / (rstop * 1.0));\n	alphaS = smoothstep(0.0, 1.0, alphaS) * pAlpha;\n  float distCenter = distance(gl_PointCoord.xy, vec2(0.));\n\n  float finalAlpha = 1.0; \n  \n  if (finalAlpha <= 0.0) {\n    discard;\n  };\n\n  pc_fragColor = vec4(mix(mix(vec3(1.,0.918,0.973), vec3(0.,0.969,1.), nightmod), mix(vec3(1.,0.518,0.573), vec3(1.), nightmod), distCenter), finalAlpha);\n \n  float gray = 0.21 * pc_fragColor.r + 0.71 * pc_fragColor.g + 0.07 * pc_fragColor.b;\n  pc_fragColor = vec4(pc_fragColor.rgb * (1.0 - bw) + (gray * bw), pc_fragColor.a);\n  // pc_fragColor.rgb *= .4;\n  gBloom = mix(vec4(0.), pc_fragColor, nightmod);\n  pc_fragColor.a = finalAlpha;\n}\n");
            e0.key = g().generate(), (0, f.e)({
                PetalesMaterialImpl: e0
            });
            let e1 = c.forwardRef((e, n) => {
                    let {
                        speed: t = 1,
                        ...o
                    } = e, r = c.useRef(null), {
                        dpr: i
                    } = (0, f.z)(e => e.viewport);
                    return (0, l.jsx)("petalesMaterialImpl", {
                        ref: (0, Q.Z)([r, n]),
                        ...o,
                        side: d.DoubleSide,
                        fog: !1,
                        attach: "material",
                        size: Math.max(130 * window.innerHeight / 1e3, 8)
                    }, e0.key)
                }),
                e2 = 2 * Math.PI;

            function e3() {
                return 2 * Math.random() - 1
            }

            function e4(e) {
                let {
                    area: n = [60, 25, 60],
                    velocity: t = -2,
                    position: o = [15.29, 10, -198.45],
                    color: r = "red",
                    petalsBalancer: i,
                    zoneId: a = 0
                } = e, s = (0, c.useRef)(null), u = (0, c.useRef)(null), m = (0, c.useRef)(null), p = (0, c.useRef)(null), g = i.zones[a].maxCount, [v, h, x] = (0, c.useMemo)(() => {
                    let e = new Float32Array(3 * g),
                        o = new Float32Array(3 * g),
                        r = {};
                    r.particles = Array(g);
                    let i = new d.Vector3,
                        a = 1;
                    for (let s = 0; s < g; s++) {
                        r.particles[s] = new e9;
                        let l = r.particles[s];
                        l.zkey = s, i.x = -1, i.y = 1, i.z = 1, i.normalize(), a = 1, i.multiplyScalar(a), l.setVelocity(i.x * t, i.y * t, i.z * t), l.setRandom(e3(), e3(), e3()), l.setRotation(e3() * e2 * .5, e3() * e2 * .5, e3() * e2 * .5), l.setPosition(e3() * n[0], e3() * n[1], e3() * n[2], !0), l.setEulerAngles(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2)
                    }
                    return [e, o, r]
                }, []), y = (0, M.LM)(e => e.id), b = (0, c.useMemo)(() => {
                    let e = null;
                    return y && (e = C.Fm.find(e => y === e.playerId)), e
                }, [y]), _ = (0, c.useCallback)((0, eT.Z)((e, n) => {
                    let t = b.position.distanceTo(o);
                    t = Math.max(0, t - i.zones[a].biggestSide), i.zones[a].pctPetal = Math.max(1 - t / 200, 0)
                }, 100), [100]);
                (0, f.A)(_);
                let w = function(e) {
                    let n = c.useRef(null),
                        t = c.useRef(!1),
                        o = c.useRef(!1),
                        r = c.useRef(e);
                    return c.useLayoutEffect(() => void(r.current = e), [e]), c.useEffect(() => {
                        let e = n.current;
                        if (e) {
                            let i = (0, f.n)(() => (t.current = !1, !0)),
                                a = e.onBeforeRender;
                            e.onBeforeRender = () => t.current = !0;
                            let s = (0, f.o)(() => (t.current !== o.current && (null == r.current || r.current(o.current = t.current)), !0));
                            return () => {
                                e.onBeforeRender = a, i(), s()
                            }
                        }
                    }, []), n
                }(e => {
                    i.zones[a].count = e ? i.zones[a].maxCount : 0
                });
                return (0, f.A)((e, t) => {
                    let {
                        particles: o
                    } = x, r = Math.round(i.zones[a].count * i.zones[a].pctPetal);
                    for (let l = 0; l < r; l++) {
                        let c = o[l];
                        c.update(t, 100 + e.clock.getElapsedTime() % 100);
                        for (let f = 0; f < 3; f++) {
                            let g = n[f];
                            Math.abs(c.cachePos[f]) - .5 > g && (c.cachePos[f] > 0 ? (c.cachePos[f] -= 2 * g, c.position[f] -= 2 * g) : (c.cachePos[f] += 2 * g, c.position[f] += 2 * g))
                        }
                        for (let y = 0; y < 3; y++) c.euler[y] = c.euler[y] % e2, c.euler[y] < 0 && (c.euler[y] += e2);
                        v[3 * l] = c.position[0], v[3 * l + 1] = c.position[1], v[3 * l + 2] = c.position[2], h[3 * l] = c.euler[0], h[3 * l + 1] = c.euler[1], h[3 * l + 2] = c.euler[2]
                    }
                    u.current.geometry.drawRange.count = r, m.current.needsUpdate = !0, p.current.needsUpdate = !0, s.current.uniforms.bw.value = d.MathUtils.damp(s.current.uniforms.bw.value, 1 - C.QF.head.smooth + C.QF.team.smooth, 3, t), s.current.uniforms.nightmod.value = C.QF.gameplay.smooth
                }), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("mesh", {
                        ref: w,
                        position: o,
                        scale: 2,
                        renderOrder: 0,
                        children: [(0, l.jsx)("boxGeometry", {
                            args: n
                        }), (0, l.jsx)(eV.Z, {
                            color: r,
                            transparent: !0,
                            opacity: .5,
                            wireframe: !0,
                            colorWrite: !1,
                            depthWrite: !1,
                            depthTest: !1
                        })]
                    }), (0, l.jsxs)("points", {
                        ref: u,
                        position: o,
                        frustumCulled: !1,
                        children: [(0, l.jsxs)("bufferGeometry", {
                            children: [(0, l.jsx)("bufferAttribute", {
                                attachObject: ["attributes", "position"],
                                count: g,
                                array: v,
                                itemSize: 3,
                                ref: m,
                                needsUpdate: !0
                            }), (0, l.jsx)("bufferAttribute", {
                                attachObject: ["attributes", "aEuler"],
                                count: g,
                                array: h,
                                ref: p,
                                itemSize: 3,
                                needsUpdate: !0
                            })]
                        }), (0, l.jsx)(e1, {
                            ref: s,
                            transparent: !0,
                            side: d.DoubleSide,
                            depthWrite: !0
                        })]
                    })]
                })
            }
            let e5 = () => {
                let e = (0, c.useRef)({
                        zones: [{
                            count: 0,
                            maxCount: 800,
                            pctPetal: .1,
                            biggestSide: 60
                        }, {
                            count: 0,
                            maxCount: 120,
                            pctPetal: .1,
                            biggestSide: 30
                        }, {
                            count: 0,
                            maxCount: 120,
                            pctPetal: .1,
                            biggestSide: 30
                        }, {
                            count: 0,
                            maxCount: 120,
                            pctPetal: .1,
                            biggestSide: 30
                        }, {
                            count: 0,
                            maxCount: 2e3,
                            pctPetal: .1,
                            biggestSide: 100
                        }, {
                            count: 0,
                            maxCount: 800,
                            pctPetal: .1,
                            biggestSide: 30
                        }, {
                            count: 0,
                            maxCount: 300,
                            pctPetal: .1,
                            biggestSide: 30
                        }, {
                            count: 0,
                            maxCount: 300,
                            pctPetal: .1,
                            biggestSide: 30
                        }, {
                            count: 0,
                            maxCount: 300,
                            pctPetal: .1,
                            biggestSide: 30
                        }, {
                            count: 0,
                            maxCount: 300,
                            pctPetal: .1,
                            biggestSide: 30
                        }, {
                            count: 0,
                            maxCount: 300,
                            pctPetal: .1,
                            biggestSide: 30
                        }, {
                            count: 0,
                            maxCount: 300,
                            pctPetal: .1,
                            biggestSide: 30
                        }, {
                            count: 0,
                            maxCount: 300,
                            pctPetal: .1,
                            biggestSide: 30
                        }, {
                            count: 0,
                            maxCount: 300,
                            pctPetal: .1,
                            biggestSide: 30
                        }]
                    }),
                    n = [{
                        area: [100, 45, 100],
                        velocity: -4,
                        position: new d.Vector3(25.29, 10, -10.45),
                        color: "blue"
                    }];
                return n.map((n, t) => (0, l.jsx)(e4, {
                    zoneId: t,
                    petalsBalancer: e.current,
                    ...n
                }, t))
            };
            class e9 {
                setVelocity(e, n, t) {
                    this.velocity[0] = e, this.velocity[1] = n, this.velocity[2] = t
                }
                setRotation(e, n, t) {
                    this.rotation[0] = e, this.rotation[1] = n, this.rotation[2] = t
                }
                setPosition(e, n, t, o) {
                    this.position[0] = e, this.position[1] = n, this.position[2] = t, o && (this.cachePos = Object.assign([, , , ], this.position))
                }
                setEulerAngles(e, n, t) {
                    this.euler[0] = e, this.euler[1] = n, this.euler[2] = t
                }
                setRandom(e, n, t) {
                    this.random[0] = e, this.random[1] = n, this.random[2] = t
                }
                update(e, n) {
                    this.cacheRotate[1] = -3, this.cacheRotate[0] = 0 + 10 * Math.sin(this.zkey + n / 3) * this.random[2] * 4 / 2 + this.random[0] / 2, this.cacheRotate[2] = -40 + 10 * Math.cos(this.zkey + n / 3) * this.random[2] * 4 / 2 + this.random[1] / 2, this.cachePos[0] += this.velocity[0] * e, this.cachePos[1] += this.velocity[1] * e, this.cachePos[2] += this.velocity[2] * e, this.position[0] = d.MathUtils.damp(this.position[0], this.cachePos[0], 2, e), this.position[1] = d.MathUtils.damp(this.position[1], this.cachePos[1], 2, e), this.position[2] = d.MathUtils.damp(this.position[2], this.cachePos[2], 2, e), this.euler[0] += this.rotation[0] * e, this.euler[1] += this.rotation[1] * e, this.euler[2] += this.rotation[2] * e
                }
                constructor() {
                    this.velocity = [, , , ], this.rotation = [, , , ], this.position = [, , , ], this.cachePos = [, , , ], this.cacheRotate = [, , , ], this.random = [, , , ], this.euler = [, , , ], this.alpha = 1, this.zkey = 0
                }
            }
            var e8 = t(9637),
                e6 = t(6038);
            let e7 = 0,
                ne = [10, 12, 16, 20],
                nn = [8, 10, 14, 20],
                nt = [0, 8, 12, 20],
                no = [8, 8, 8, 10],
                nr = [0, 2, 2, 4],
                ni = 2 * Math.PI,
                na = Math.PI,
                ns = Math.PI / 2,
                nl = [
                    [1, 9, 0],
                    [8, 9, 0],
                    [3, 9, 3],
                    [6, 0, 4]
                ],
                {
                    damp: nc
                } = d.MathUtils,
                nu = e => {
                    let {
                        soldierParam: n,
                        rank: t,
                        realKey: o,
                        animationApi: r,
                        gpuTier: i
                    } = e, a = (0, c.useRef)(null), s = (0, eW.N1)(e => e.testExperience), [u, m] = (0, c.useState)(!1), p = (0, c.useMemo)(() => {
                        let e = (0, C.EA)(t, {
                            isCharacterInstance: !0
                        });
                        return s ? (e.height = n.height, e.color = new d.Vector3(n.skin[0], n.skin[1], n.skin[2]), e.initAnim = n.anim, e.holo = 1, e.fly = !!n.fly, e.lookatcrystal = !!n.lookatcrystal) : setTimeout(() => {
                            (0, eW.VB)().testExperience || (0, X.Z)(C.Fm, function(e) {
                                return e.playerId === t
                            })
                        }, 1e3), e
                    }, [s]);
                    (0, c.useEffect)(() => {
                        n.rotationY && (a.current.rotation.y = n.rotationY), p && (p.position = a.current.position)
                    }, [p]), (0, eG.Z)(p, t), (0, c.useEffect)(() => {
                        m(!0)
                    }, []);
                    let g = ne[i] + nn[i];
                    return (0, f.A)((e, t) => {
                        let {
                            clock: l
                        } = e;
                        if ((e7 = nc(e7, s ? 1 : 0, t, 4)) < .4) {
                            a.current.position.y = 100;
                            return
                        }
                        o < ne[i] ? (n.timeProgress += t * r.current.runnningMultiplicator, n.progress = n.timeProgress % 100 / 100 * ni, a.current.position.x = 0 + 26 * Math.cos(n.progress), a.current.position.z = 59 + 26 * Math.sin(n.progress), a.current.position.y = n.position.y + n.jumpProgress, a.current.rotation.y = -n.progress - n.jumpRotationProgress * ni, p && (p.fly = n.jumpProgress > .25)) : o < g ? (n.timeProgress += t * r.current.runnningMultiplicator, n.progress = n.timeProgress % 100 / 100 * ni, a.current.position.x = 0 + 19 * Math.sin(n.progress), a.current.position.z = 59 + 19 * Math.cos(n.progress), a.current.position.y = n.position.y + n.jumpProgress, a.current.rotation.y = ns + n.progress + n.jumpRotationProgress * ni, p && (p.fly = n.jumpProgress > .25)) : o < g + no[i] ? (n.timeProgress += t, n.progress = n.timeProgress % 60 / 60 * ni, a.current.position.x = 0 + 14 * Math.cos(n.progress), a.current.position.z = 59 + 14 * Math.sin(n.progress), a.current.position.y = n.position.y, a.current.rotation.y = -n.progress) : a.current.position.y = n.position.y, p ? a.current.position.y += 1 === p.holo ? 100 : 10 * p.holo : a.current.position.y += 100
                    }), (0, l.jsx)("group", {
                        ref: a,
                        position: n.position,
                        children: u && p && (0, l.jsx)(eR.Z, {
                            grpRef: a,
                            playerId: t,
                            player: p
                        })
                    })
                },
                nd = (0, c.memo)(() => {
                    let [e, n] = (0, C.oR)(e => [e.gpuTier, e.isMobile]), t = (0, c.useRef)({
                        runnningMultiplicator: 1,
                        isRunning: !1,
                        animationLoopProgress: 0,
                        animationLoopMadeJump: !1,
                        animationLoopMadeRun: !1,
                        animationLoopMadeDance: !1,
                        animationLoopRunReady: !1,
                        holoPlayed: !1
                    }), o = null === e ? 0 : ne[e] + nn[e], r = (0, c.useMemo)(() => {
                        let n = [];
                        return null === e ? n : n.concat(Array.from({
                            length: ne[e]
                        }, (n, t) => ({
                            jumpProgress: 0,
                            jumpRotationProgress: 0,
                            timeProgress: t * (100 / ne[e]),
                            progress: 0,
                            anim: 1,
                            height: d.MathUtils.randFloat(.5, 1),
                            skin: nl[t % 4],
                            position: new d.Vector3(0, -1.2, 59)
                        })), Array.from({
                            length: nn[e]
                        }, (n, t) => ({
                            jumpProgress: 0,
                            jumpRotationProgress: 0,
                            timeProgress: t * (100 / nn[e]),
                            progress: 0,
                            anim: 18,
                            height: d.MathUtils.randFloat(.5, 1),
                            skin: nl[t % 4],
                            position: new d.Vector3(0, -1.2, 59)
                        })), Array.from({
                            length: no[e]
                        }, (n, t) => ({
                            anim: 1,
                            progress: 0,
                            timeProgress: t * (60 / no[e]),
                            height: d.MathUtils.randFloat(.5, 1),
                            skin: nl[t % 4],
                            position: new d.Vector3(0, -1.2, 59),
                            fly: !0
                        })), Array.from({
                            length: nr[e]
                        }, (e, n) => {
                            let t = (n + 1) / 4;
                            return {
                                anim: 6,
                                height: 1 === n ? 1 : d.MathUtils.randFloat(.5, .7),
                                skin: [5, 6, 2],
                                position: new d.Vector3(-70.3 + 4 * Math.sin(t * na + na / 1.5), -4.84, 7.91 + 4 * Math.cos(t * na + na / 1.5)),
                                rotationY: Math.PI + t * na + na / 1.5
                            }
                        }), Array.from({
                            length: nt[e]
                        }, (n, t) => {
                            let o = (t + 1) / nt[e] + Math.random() / 1.5 / nt[e],
                                r = Math.random();
                            return {
                                anim: .75 > Math.random() ? 34 : 6,
                                height: d.MathUtils.randFloat(.5, 1),
                                skin: r < .33 ? [6, 0, 4] : r < .66 ? [9, 6, 2] : [0, 9, 4],
                                position: new d.Vector3(0 + 33 * Math.sin(o * na + ns), -1.23, 59 + 33 * Math.cos(o * na + ns)),
                                rotationY: Math.PI + o * na + ns,
                                lookatcrystal: !0
                            }
                        }))
                    }, [e, n]), i = r.slice(0, o);
                    return (0, f.A)((n, r) => {
                        if (null !== e) {
                            if (!t.current.holoPlayed && e7 > .45) {
                                t.current.holoPlayed = !0;
                                let a = C.Fm.slice(1, -1);
                                e6.ZP.to(a, {
                                    holo: 0,
                                    duration: 1,
                                    overwrite: !0
                                })
                            } else if (t.current.holoPlayed && e7 < .3) {
                                t.current.holoPlayed = !1;
                                let s = C.Fm.slice(1, -1);
                                e6.ZP.set(s, {
                                    holo: 1,
                                    overwrite: !0
                                })
                            }
                            if (t.current.runnningMultiplicator = nc(t.current.runnningMultiplicator, t.current.isRunning ? 10 : 1, 2, r), t.current.animationLoopProgress += r, !t.current.animationLoopMadeJump && t.current.animationLoopProgress > 0) {
                                t.current.animationLoopMadeJump = !0;
                                for (let l = 0; l < o; l++)(0, N.Kn)("anim_".concat(l), {
                                    name: "jump",
                                    play: !0,
                                    blendDuration: .2,
                                    timeScale: eS.MQ.jump
                                });
                                e6.ZP.fromTo(i, {
                                    jumpRotationProgress: 0
                                }, {
                                    jumpRotationProgress: 2,
                                    ease: "none",
                                    duration: 1.8
                                }), e6.ZP.fromTo(i, {
                                    jumpProgress: 0
                                }, {
                                    jumpProgress: 2,
                                    duration: .4,
                                    yoyo: !0,
                                    ease: "power2.out",
                                    yoyoEase: "power2.in",
                                    repeatDelay: 1,
                                    repeat: 1,
                                    onComplete: function() {
                                        t.current.animationLoopRunReady = !0
                                    }
                                })
                            }
                            if (t.current.animationLoopRunReady && !t.current.animationLoopMadeRun) {
                                t.current.animationLoopMadeRun = !0, t.current.isRunning = !0, t.current.animationLoopProgress = 0;
                                for (let c = 0; c < o; c++)(0, N.Kn)("anim_".concat(c), {
                                    name: "run",
                                    play: !0,
                                    blendDuration: .2,
                                    timeScale: eS.MQ.run
                                })
                            }
                            if (!t.current.animationLoopMadeDance && t.current.animationLoopProgress > 4) {
                                t.current.animationLoopMadeDance = !0, t.current.isRunning = !1;
                                for (let u = 0; u < o; u++) {
                                    let d = "dance".concat(u < ne[e] ? "" : "_mirror");
                                    (0, N.Kn)("anim_".concat(u), {
                                        name: d,
                                        play: !0,
                                        blendDuration: 1,
                                        timeScale: eS.MQ.dance
                                    })
                                }
                            }
                            t.current.animationLoopProgress > 12 && (t.current.animationLoopMadeJump = !1, t.current.animationLoopMadeRun = !1, t.current.animationLoopMadeDance = !1, t.current.animationLoopRunReady = !1, t.current.animationLoopProgress = 0)
                        }
                    }), r.map((n, o) => n ? (0, l.jsx)(nu, {
                        soldierParam: n,
                        realKey: o,
                        rank: o + 4,
                        animationApi: t,
                        gpuTier: e
                    }, o) : null)
                }),
                nm = () => (0, l.jsx)(nd, {}),
                nf = e => {
                    let {
                        scene: n
                    } = e, t = (0, c.useRef)(null);
                    return (0, z.r)(t, {
                        zoneIds: [0, 2],
                        enabled: !0
                    }), (0, l.jsx)("mesh", { ...n.children[0],
                        ref: t,
                        "material-visible": !1,
                        "material-colorWrite": !1
                    }, n.uuid)
                };

            function np() {
                let {
                    scene: e
                } = (0, u.L)("/scene_physic.glb"), n = V(e => e.scene_physic);
                return (0, l.jsx)(nf, {
                    scene: n || e
                })
            }
            class ng extends d.BufferGeometry {
                constructor() {
                    super();
                    let e = new d.BufferAttribute(new Float32Array(48), 3),
                        n = new d.BufferAttribute(new Float32Array(16), 1);
                    this.setAttribute("position", e), this.setAttribute("birdVertex", n);
                    let t = 0;

                    function o() {
                        for (let n = 0; n < arguments.length; n++) e.array[t++] = arguments[n]
                    }
                    for (let r = 0; r < 16; r++) o(0, -0, -1, 0, .25, -1, 0, 0, 1.5), o(0, 0, -1, -.5, 0, 0, 0, 0, 1), o(0, 0, 1, .5, 0, 0, 0, 0, -1);
                    for (let i = 0; i < 48; i++) n.array[i] = i % 9
                }
            }(0, f.e)({
                BirdGeometry: ng
            });
            let nv = (0, m.g)({
                time: 0,
                color: new d.Color(.05, 0, .025)
            }, "\n    uniform float time;\n    in float birdVertex;\n    in vec3 birdColor;\n\n    void main() {\n      vec3 transformed = position;\n      // vColor = birdColor;\n      float id = float(gl_InstanceID);\n\n      if ( birdVertex == 4.0 || birdVertex == 7.0 ) {\n        // flap wings\n        transformed.y = sin( time * 3. + id ) * 1.;\n      }\n\n      transformed.y += sin(time * .2 + id) * 10.;\n      transformed.z += cos(time * .1 + id) * 10.;\n      // transformed.x += cos(time * .1 + id) * 10.;\n      vec4 mvPosition = vec4(transformed, 1.0);\n\n      #ifdef USE_INSTANCING\n        mvPosition = instanceMatrix * mvPosition;\n      #endif\n\n      gl_Position = projectionMatrix * modelViewMatrix * mvPosition;\n    }\n  ", "\n    layout(location = 1) out vec4 gBloom;\n\n    uniform vec3 color;\n    void main() {\n      gl_FragColor = vec4(vec3(1.), 1.);\n      gBloom.rgb = vec3(0.);\n    }\n  ");
            nv.key = g().generate(), (0, f.e)({
                BirdMaterial: nv
            });
            var nh = t(3753),
                nx = function(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            closed: !0,
                            forCamera: !1,
                            withHeadTracking: !1
                        },
                        {
                            closed: t,
                            forCamera: o
                        } = n;
                    if (!(0, nh.gI)()["curve_".concat(e)]) {
                        let r = {};
                        r["curve_".concat(e)] = {
                            data: [o ? {
                                position: [2, 2, 2],
                                position: [3, 3, 3]
                            } : {
                                position: [0, 0, 0],
                                position: [1, 1, 1]
                            }],
                            timeline: {
                                duration: 20,
                                ease: "none",
                                easeFunc: "none"
                            },
                            version: 0
                        }, o && (r["curve_".concat(e)].cameraData = [{
                            pct: 0,
                            fov: 50
                        }, {
                            pct: 1,
                            fov: 50
                        }]), (0, nh.Xj)(r)
                    }
                    let i = (0, nh.vd)(n => n["curve_".concat(e)]),
                        a = (0, nh.vd)(n => n["curve_".concat(e)].version);
                    (0, c.useEffect)(() => (n.withHeadTracking && (0, C.EA)("curve_".concat(e), {
                        isCharacterInstance: !1
                    }), () => {
                        n.withHeadTracking && (0, X.Z)(C.Fm, function(n) {
                            return n.playerId === "curve_".concat(e)
                        })
                    }));
                    let s = (0, c.useMemo)(() => {
                        let n = null,
                            o = new d.CatmullRomCurve3(i.data.map(e => new d.Vector3().fromArray(e.position)), t);
                        return n = {
                            progress: 0
                        }, {
                            curve: i,
                            curveId: e,
                            curvebezier: o,
                            curveTimeline: n
                        }
                    }, [a]);
                    return [s]
                };
            let {
                clamp: ny
            } = d.MathUtils;
            new d.Vector3;
            let nb = e => {
                    let {
                        apiCamera: n,
                        apiTarget: t
                    } = e;
                    return !1
                },
                {
                    clamp: n_
                } = d.MathUtils,
                nw = e => {
                    let {
                        id: n,
                        section: t
                    } = e, [o] = nx(n, {
                        forCamera: !0,
                        close: !1
                    }), [r] = nx(n + "_target", {
                        close: !1
                    }), [i, a] = (0, c.useState)(!1), s = (0, c.useMemo)(() => new d.Vector3, []), u = (0, c.useMemo)(() => new d.Vector3, []), m = (0, c.useMemo)(() => new d.Vector3, []), p = (0, c.useMemo)(() => {
                        let e = new d.Camera;
                        return e
                    }, []);
                    (0, N.zX)("playcinematic_curve_" + n, e => {
                        let {
                            callback: n = function() {},
                            debug: t = !1
                        } = e, {
                            duration: i,
                            easeFunc: s,
                            ease: l
                        } = o.curve.timeline;
                        e6.ZP.fromTo(o.curveTimeline, {
                            progress: 0
                        }, {
                            onStart: function() {
                                t || (a(!0), (0, N.Kn)("cinematic", !0))
                            },
                            onComplete: function() {
                                a(!1), (0, N.Kn)("cinematic", !1);
                                let {
                                    refCamera: e,
                                    defaultFov: t
                                } = (0, eU.A8)();
                                e.current && (e.current.fov = t, e.current.updateProjectionMatrix()), n()
                            },
                            progress: 1,
                            overwrite: !0,
                            duration: i,
                            ease: "none" !== s ? s + "." + l : "none"
                        });
                        let {
                            duration: c,
                            easeFunc: u,
                            ease: d
                        } = r.curve.timeline;
                        e6.ZP.fromTo(r.curveTimeline, {
                            progress: 0
                        }, {
                            progress: 1,
                            duration: c,
                            ease: "none" !== u ? u + "." + d : "none"
                        })
                    });
                    let {
                        curveId: g,
                        curve: v,
                        curvebezier: h,
                        curveTimeline: x
                    } = o, {
                        curveId: y,
                        curve: b,
                        curvebezier: _,
                        curveTimeline: w
                    } = r, P = (e, n) => {
                        if ("planseq1" !== g) return;
                        let t = 0;
                        _.getPoint(t, s), t = 0, h.getPoint(t, m), e.position.copy(m), u.copy(s);
                        let o = v.cameraData[0];
                        o && (o.fov, e.fov = e.fov, p.position.copy(e.position), p.lookAt(u), e.quaternion.copy(p.quaternion), e.updateProjectionMatrix())
                    }, M = (0, f.z)(e => {
                        let {
                            get: n
                        } = e;
                        return n
                    });
                    return (0, c.useEffect)(() => {
                        setTimeout(() => {
                            P(M().camera, .01)
                        })
                    }), (0, f.A)((e, n) => {
                        let {
                            clock: o,
                            camera: r
                        } = e;
                        if ((0, C.y0)().theatre) {
                            if (!i) return
                        } else {
                            let {
                                testExperience: a
                            } = (0, eW.VB)();
                            if (a) return;
                            if ("planseq1" === t) {
                                if (C.QF.roadmap.value > 0) return
                            } else if (C.QF[t].value <= .001 || C.QF[t].smooth >= .999) return;
                            w.progress = C.QF[t].smooth || 0, x.progress = C.QF[t].smooth || 0
                        }
                        let l = n_(w.progress, 0, 1);
                        for (let c in _.getPoint(l, s), l = n_(x.progress, 0, .999), h.getPoint(l, m), r.position.damp(m, 100, n), u.damp(s, 100, n), v.cameraData) {
                            let d = v.cameraData[c];
                            if (d.pct > l) {
                                p.position.copy(r.position), p.lookAt(u), r.quaternion.copy(p.quaternion), r.updateProjectionMatrix();
                                break
                            }
                        }
                    }, 999), (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)(nb, {
                            name: n,
                            apiCamera: o,
                            apiTarget: r
                        })
                    })
                },
                nC = () => (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(nw, {
                        id: "planseq1",
                        section: "planseq1"
                    }), (0, l.jsx)(nw, {
                        id: "planseq2",
                        section: "planseq2"
                    })]
                });
            var nP = t(4504),
                nM = t(9796),
                nN = t(1304),
                nF = t(2746),
                nR = function(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (0, f.z)(e => e.scene),
                        {
                            bodies: o,
                            debugMaterial: r
                        } = (0, c.useContext)(nM.h),
                        i = (0, c.useRef)({
                            ref: e,
                            onEnterZone: null,
                            onLeaveZone: null,
                            ...n
                        });
                    return (0, c.useLayoutEffect)(() => {
                        n.name || console.error("zone physic entity needs a name as a unique identifier");
                        let a = e.current,
                            s = o.current,
                            l = i.current;
                        if (a) {
                            a.updateMatrixWorld();
                            let c = a.geometry.clone();
                            c.applyMatrix4(a.matrixWorld), c.boundsTree = new nN.r(c, {
                                lazyGeneration: !1
                            }), a.physic = new d.Mesh(c, r), a.physic.name = n.name, a.physic.visible = !1, a.physic.material.color = new d.Color(65280), a.physic.type = "zone", a.physic.api = l, a.physic.userData.ref = a, a.physic = a.physic, s.zone.push(a.physic), t.add(a.physic)
                        }
                        return () => {
                            a && (t.remove(a.physic), s.zone = s.zone.filter(function(e) {
                                return e.uuid !== a.physic.uuid
                            }))
                        }
                    }), i.current.stopListen = function(n) {
                        let r = e.current,
                            i = o.current;
                        r && (t.remove(r.physic), i.zone = i.zone.filter(function(e) {
                            return e.uuid !== r.physic.uuid
                        }), n && n())
                    }, (0, nF.Z)(e.current, 255), [i.current]
                };
            let nS = () => {
                    let e = (0, c.useRef)(),
                        [n] = nR(e, {
                            name: "tori_meteo",
                            enabled: !0
                        });
                    return n.onEnterZone = e => {
                        let {
                            collider: n
                        } = e
                    }, n.onLeaveZone = e => {
                        let {
                            collider: n
                        } = e;
                        (0, C.IW)({
                            activateArmy: !(0, C.y0)().activateArmy
                        }), (0, C.y0)().portalAnim.current = e6.ZP.to(C.QF.gameplay, {
                            smooth: (0, C.y0)().activateArmy ? 1 : 0,
                            duration: 3,
                            ease: "power2.out",
                            overwrite: !0
                        })
                    }, (0, l.jsxs)("mesh", {
                        ref: e,
                        position: [-34, 0, -42],
                        scale: [1, 1, 1],
                        children: [(0, l.jsx)("boxGeometry", {
                            args: [16, 20, 4]
                        }), (0, l.jsx)(eV.Z, {
                            visible: !1,
                            wireframe: !1,
                            color: "red",
                            transparent: !0,
                            opacity: .5
                        })]
                    })
                },
                nz = () => {
                    let e = (0, c.useRef)(null),
                        n = (0, c.useRef)(1),
                        t = (0, c.useRef)(null);
                    return (0, f.A)((o, r) => {
                        let {
                            camera: i
                        } = o;
                        if ((0, nP.nZ)().active) return;
                        let {
                            colorCharacter: a
                        } = (0, C.y0)();
                        n.current = d.MathUtils.damp(n.current, a ? 0 : 1, 2, r), e.current.scale.setScalar(1 - 1.5 * C.QF.fullhead.smooth + 1 * n.current), e.current.position.y = 9 + 10 * C.QF.fullhead.smooth, t.current.scale.setScalar(1 + C.QF.fullhead.smooth * (window.innerWidth > 768 ? 4.5 : window.innerWidth > 568 ? 5 : 5.5) - .4 * n.current), t.current.visible = C.QF.fullhead.smooth < .99 && !(0, C.y0)().theatre, e.current.visible = C.QF.fullhead.smooth < .99 && !(0, C.y0)().theatre
                    }, -1), (0, l.jsxs)(e8.V, {
                        children: [(0, l.jsxs)("mesh", {
                            ref: t,
                            position: [1, 9, -4],
                            children: [(0, l.jsx)("ringGeometry", {
                                args: [window.innerWidth > 768 ? 4.64 : window.innerWidth > 568 ? 3.6 : 3, 45, 64, 64, Math.PI, Math.PI]
                            }), (0, l.jsx)(eV.Z, {
                                color: 16777215
                            })]
                        }), (0, l.jsxs)("mesh", {
                            ref: e,
                            position: [1, 9, -4],
                            children: [(0, l.jsx)("circleGeometry", {
                                args: [2, 64, Math.PI, Math.PI]
                            }), (0, l.jsx)(eV.Z, {
                                color: 16777215
                            })]
                        })]
                    })
                },
                nL = () => (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(nC, {})
                }),
                nD = () => (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(nz, {}), (0, l.jsx)(eQ, {}), (0, l.jsx)(nS, {}), (0, l.jsx)(e5, {}), (0, l.jsx)(eF, {}), (0, l.jsx)(e$, {}), (0, l.jsx)(ee, {}), (0, l.jsx)(nm, {}), (0, l.jsx)(er, {}), (0, l.jsx)(nL, {}), (0, l.jsx)(Z, {}), (0, l.jsx)(np, {})]
                });
            var nA = t(7297),
                nj = t(7379);

            function nk() {
                let e = (0, nA.Z)(["\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  z-index: 9999;\n"]);
                return nk = function() {
                    return e
                }, e
            }

            function nE() {
                let e = (0, nA.Z)(["\n  position: fixed;\n  bottom: 9%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9998;\n  p {\n    max-width: 60%;\n    text-align: center;\n    color: #ffffff;\n    \n    font-size: 14px;\n    font-weight: 400;\n    line-height: 19px;\n    letter-spacing: 0.07em;\n    text-align: left;\n  }\n"]);
                return nE = function() {
                    return e
                }, e
            }
            let nT = nj.ZP.div.withConfig({
                    componentId: "sc-373beddc-0"
                })(nk()),
                nV = nj.ZP.div.withConfig({
                    componentId: "sc-373beddc-1"
                })(nE()),
                nB = () => {
                    let [e, n] = (0, c.useState)(() => function() {}), [t, o] = (0, c.useState)(!1);
                    return (0, N.zX)("cinematicEvent", e => {
                        let {
                            open: t = !0,
                            onNext: r = function() {}
                        } = e;
                        n(() => function() {
                            (0, N.Kn)("skip"), r()
                        }), o(t)
                    }), (0, N.zX)("selectCtrl", () => {
                        e()
                    }), t ? (0, l.jsx)(nT, {
                        onClick: () => {
                            e()
                        }
                    }) : null
                },
                nI = () => {
                    let [e, n] = (0, c.useState)(!1), [t, o] = (0, c.useState)(""), [r, i] = (0, c.useState)(""), a = () => {
                        n(!1), (0, C.IW)({
                            hiddenUi: (0, M.PR)().hideUi
                        })
                    };
                    return (0, N.zX)("cinematicText", e => {
                        let {
                            message: t = "",
                            name: r = "",
                            open: s = !0
                        } = e;
                        i(t), o(r), n(s), s ? (0, C.IW)({
                            hiddenUi: !0
                        }) : a()
                    }), e ? (0, l.jsx)(nV, {
                        children: (0, l.jsxs)("p", {
                            children: [(0, l.jsx)("span", {
                                children: t ? t + " : " : null
                            }), r]
                        })
                    }) : null
                };

            function nU() {
                let e = (0, nA.Z)(["\n  position: fixed;\n  bottom: 138px;\n  right: 0px;\n  // left: 50%;\n  // transform: translateX(-50%);\n  // bottom: 0px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  .dialogsubcont {\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    position: relative;\n\n    &::before {\n      content: ' ';\n      display: block;\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(255, 255, 255, 0.9);\n      z-index: 0;\n      transform: scaleX(0) translateZ(0);\n      opacity: 0;\n      transition: transform 1s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.3s,\n        opacity 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.6s;\n    }\n\n    > div {\n      z-index: 1;\n      &:nth-child(1) {\n        width: 403px;\n        margin: 115px 59px 108px 132px;\n      }\n\n      &:nth-child(3) {\n        margin: 111px 130px 104px 64px;\n      }\n    }\n    .separator {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      height: 169px;\n\n      .sep {\n        background: #ebeceb;\n        height: 157px;\n      }\n      .point {\n        height: 2px;\n        background: #ff8800;\n      }\n\n      .sep,\n      .point {\n        width: 2px;\n        transform: scaleY(0) translateZ(0);\n        transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s;\n      }\n    }\n\n    .name,\n    .message {\n      overflow: hidden;\n    }\n\n    .name {\n      font-size: 20px;\n      line-height: 22px;\n      letter-spacing: 0.2em;\n      color: #38bcbc;\n      margin: 0 0 15px;\n      text-transform: uppercase;\n      span {\n        transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s;\n      }\n    }\n    .message {\n      font-size: 12px;\n      line-height: 19px;\n      letter-spacing: 0.07em;\n      text-align: left;\n      color: #686868;\n      span {\n        transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s;\n      }\n    }\n\n    & > button {\n    }\n  }\n\n  &:after,\n  &:before {\n    content: '';\n    display: block;\n    margin: 10px 0px;\n    width: 100%;\n    height: 6px;\n    background: linear-gradient(\n      270deg,\n      rgba(255, 255, 255, 0) 0%,\n      #ffffff 50%,\n      rgba(255, 255, 255, 0) 100%\n    );\n    transform: scaleX(0) translateZ(0);\n    transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.3s;\n  }\n\n  .name span,\n  .message span {\n    display: block;\n    transform: translate3d(0, 100%, 0);\n  }\n\n  &.show {\n    .dialogsubcont::before,\n    &:after,\n    &:before {\n      transform: scaleX(1) translateZ(0);\n    }\n\n    &:after,\n    &:before {\n      transition: transform 0.9s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.2s;\n    }\n\n    .dialogsubcont::before {\n      opacity: 1;\n      transition-delay: 0s, 0s;\n    }\n    .dialogsubcont > button,\n    .name span,\n    .message span {\n      transform: translate3d(0, 0, 0);\n    }\n\n    .name span {\n      transition-delay: 0.5s;\n    }\n\n    .message span {\n      transition-delay: 0.6s;\n    }\n\n    .dialogsubcont > button {\n      transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.9s;\n    }\n\n    .separator {\n      .sep,\n      .point {\n        transform: scaleY(1) translateZ(0);\n        transition-delay: 0.6s;\n      }\n    }\n\n    .optlabel,\n    .optionDialog button {\n      opacity: 1;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .optlabel {\n      transition-delay: 0.6s, 0.6s;\n    }\n\n    .optionDialog button {\n      transition-delay: 0.7s, 0.7s;\n      &:nth-child(3) {\n        transition-delay: 0.8s, 0.8s;\n      }\n      &:nth-child(4) {\n        transition-delay: 0.9s, 0.9s;\n      }\n      &:nth-child(5) {\n        transition-delay: 1s, 1s;\n      }\n    }\n  }\n"]);
                return nU = function() {
                    return e
                }, e
            }

            function nG() {
                let e = (0, nA.Z)(["\n  .optlabel {\n    margin-bottom: 5px;\n    color: #686868;\n    font-size: 12px;\n    opacity: 0;\n    transform: translate3d(0, 30px, 0);\n    transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s, opacity 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s;\n  }\n}\n"]);
                return nG = function() {
                    return e
                }, e
            }

            function nW() {
                let e = (0, nA.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 10px 4px;\n\n  opacity: 0;\n  transform: translate3d(0, 30px, 0);\n  transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s,\n    opacity 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s;\n\n  p {\n    font-size: 12px;\n    line-height: 19px;\n    letter-spacing: 0.07em;\n    text-align: left;\n    color: #686868;\n    margin: 0px 8px;\n\n    &.opt {\n      cursor: pointer;\n    }\n  }\n\n  @media (pointer: fine) {\n    .obleft,\n    .obright {\n      transform: translate3d(0, 0, 0);\n      transition: transform 0.3s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n    }\n\n    svg {\n      path {\n        transition: stroke 0.3s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n      }\n    }\n\n    p {\n      transition: color 0.3s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n    }\n\n    &:hover {\n      svg path {\n        stroke: #ff8800;\n      }\n      .obleft {\n        transform: translate3d(3px, 0, 0);\n      }\n      .obright {\n        transform: translate3d(-3px, 0, 0);\n      }\n      p {\n        color: #242424;\n      }\n    }\n  }\n"]);
                return nW = function() {
                    return e
                }, e
            }

            function nO() {
                let e = (0, nA.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n\n  transform: translate3d(-100%, 0, 0);\n  transition: transform 0.3s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s;\n\n  @media (pointer: fine) {\n    .bgicarr {\n      fill: #242424;\n      transform-origin: bottom left;\n      transform: scale(0) translateZ(0);\n    }\n    .bgicarr,\n    .arrcont {\n      transition: transform 0.4s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n    }\n\n    .arrcont {\n      transform: translate3d(0, 0, 0);\n    }\n\n    &:hover {\n      .bgicarr {\n        transform: scale(1) translateZ(0);\n      }\n      .arrcont {\n        transform: translate3d(-6px, 0, 0);\n      }\n    }\n  }\n"]);
                return nO = function() {
                    return e
                }, e
            }
            let nZ = nj.ZP.div.withConfig({
                    componentId: "sc-bbe618da-0"
                })(nU()),
                nH = nj.ZP.div.withConfig({
                    componentId: "sc-bbe618da-1"
                })(nG()),
                nQ = nj.ZP.button.withConfig({
                    componentId: "sc-bbe618da-2"
                })(nW()),
                nq = nj.ZP.button.withConfig({
                    componentId: "sc-bbe618da-3"
                })(nO()),
                nK = e => {
                    let {
                        showBackground: n = !0,
                        color: t = "#fff"
                    } = e;
                    return (0, l.jsxs)("svg", {
                        width: "60",
                        height: "60",
                        viewBox: "0 0 60 60",
                        children: [n && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("path", {
                                d: "M0 0.0146484H50L60 10.0146V60.0146H0V0.0146484Z",
                                fill: "#38BCBC"
                            }), (0, l.jsx)("path", {
                                d: "M0 0.0146484H50L60 10.0146V60.0146H0V0.0146484Z",
                                fill: "#38BCBC",
                                className: "bgicarr"
                            })]
                        }), (0, l.jsxs)("g", {
                            className: "arrcont",
                            children: [(0, l.jsx)("path", {
                                d: "M28 29.3477H39",
                                stroke: t,
                                strokeWidth: "2",
                                strokeLinecap: "round"
                            }), (0, l.jsx)("path", {
                                d: "M28.7 22.0146L21 29.348",
                                stroke: t,
                                strokeWidth: "2",
                                strokeLinecap: "round"
                            }), (0, l.jsx)("path", {
                                d: "M28.334 37.0476L21.0007 29.3477",
                                stroke: t,
                                strokeWidth: "2",
                                strokeLinecap: "round"
                            })]
                        })]
                    })
                },
                nX = () => {
                    let [e, n] = (0, c.useState)(!1), [t, o] = (0, c.useState)(""), [r, i] = (0, c.useState)(""), [a, s] = (0, c.useState)([]), [u, d] = (0, c.useState)(0), m = () => {
                        p(!1), setTimeout(() => {
                            n(!1)
                        }, 800), (0, eU.Th)({
                            dialogMode: !1
                        })
                    };
                    (0, N.zX)("downCtrl", () => {
                        d(u >= a.length - 1 ? 0 : u + 1)
                    }), (0, N.zX)("upCtrl", () => {
                        d(u <= 0 ? a.length - 1 : u - 1)
                    }), (0, N.zX)("selectCtrl", () => {
                        a[u] && a[u].trigger && a[u].trigger()
                    }), (0, N.zX)("escapeCtrl", () => {
                        m()
                    }), (0, N.zX)("dialog", e => {
                        let {
                            message: t = "",
                            name: r = "",
                            actions: a = [],
                            open: l = !0
                        } = e;
                        l && (0, eU.Th)({
                            dialogMode: !0
                        }), i(t), o(r), n(l), s(a), d(0)
                    });
                    let [f, p] = (0, c.useState)(!1);
                    return (0, c.useEffect)(() => {
                        setTimeout(() => {
                            p(!0)
                        }, 50)
                    }, []), e ? (0, l.jsx)(nZ, {
                        className: f ? "show" : "",
                        children: (0, l.jsxs)("div", {
                            className: "dialogsubcont",
                            children: [(0, l.jsxs)("div", {
                                children: [(0, l.jsx)("p", {
                                    className: "name",
                                    children: (0, l.jsx)("span", {
                                        children: t
                                    })
                                }), (0, l.jsx)("p", {
                                    className: "message",
                                    children: (0, l.jsx)("span", {
                                        children: r
                                    })
                                })]
                            }), a.length ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsxs)("div", {
                                    className: "separator",
                                    children: [(0, l.jsx)("div", {
                                        className: "point"
                                    }), (0, l.jsx)("div", {
                                        className: "sep"
                                    }), (0, l.jsx)("div", {
                                        className: "point"
                                    })]
                                }), (0, l.jsxs)(nH, {
                                    className: "optionDialog",
                                    children: [(0, l.jsx)("p", {
                                        className: "optlabel",
                                        children: (0, l.jsx)("span", {
                                            children: "SELECT"
                                        })
                                    }), a.map((e, n) => (0, l.jsxs)(nQ, {
                                        children: [(0, l.jsx)("svg", {
                                            width: "8",
                                            height: "13",
                                            viewBox: "0 0 8 13",
                                            fill: "none",
                                            className: "obleft",
                                            children: (0, l.jsx)("path", {
                                                d: "M1.14258 1.37207L6.28493 6.51443L1.14258 11.6568",
                                                stroke: n === u ? "#ff8800" : "#e8e9e7",
                                                strokeWidth: "2"
                                            })
                                        }), (0, l.jsx)("p", {
                                            className: "opt",
                                            onClick: e.trigger,
                                            children: e.label
                                        }), (0, l.jsx)("svg", {
                                            width: "9",
                                            height: "13",
                                            viewBox: "0 0 9 13",
                                            fill: "none",
                                            className: "obright",
                                            children: (0, l.jsx)("path", {
                                                d: "M7.42578 11.6572L2.28342 6.51487L7.42578 1.37251",
                                                stroke: n === u ? "#ff8800" : "#e8e9e7",
                                                strokeWidth: "2"
                                            })
                                        })]
                                    }, n))]
                                })]
                            }) : null, (0, l.jsx)(nq, {
                                onClick: () => {
                                    m()
                                },
                                children: (0, l.jsx)(nK, {})
                            })]
                        })
                    }) : null
                };
            var nY = t(7283),
                nJ = t(1575),
                n$ = t(1345);

            function n0() {
                let {
                    actions: e,
                    set: n
                } = (0, C.oR)(e => {
                    let {
                        actions: n,
                        set: t
                    } = e;
                    return {
                        set: t
                    }
                });
                return ! function(e) {
                    let n = e => (!(0, eW.VB)().testExperience || (0, eW.VB)().focusChat || (0, C.y0)().isEditingName || (0, C.y0)().theatre && "," !== e.key) && "Enter" !== e.key && "Escape" !== e.key;
                    (0, c.useEffect)(() => {
                        let t = e.reduce((e, n) => {
                                let {
                                    keys: t,
                                    fn: o,
                                    up: r = !0
                                } = n;
                                return t && t.forEach(n => e[n] = {
                                    fn: o,
                                    pressed: !1,
                                    up: r,
                                    key: n
                                }), e
                            }, {}),
                            o = e => {
                                var o;
                                let {
                                    code: r,
                                    key: i,
                                    target: a
                                } = e, s = null !== (o = t[r]) && void 0 !== o ? o : t[i];
                                if (!s || n(s)) return;
                                let {
                                    fn: l,
                                    pressed: c,
                                    up: u
                                } = s;
                                s.pressed = !0, (u || !c) && l(!0, c)
                            },
                            r = e => {
                                var o;
                                let {
                                    code: r,
                                    key: i,
                                    target: a
                                } = e, s = null !== (o = t[r]) && void 0 !== o ? o : t[i];
                                if (!s || n(s)) return;
                                let {
                                    fn: l,
                                    up: c
                                } = s;
                                s.pressed = !1, c && l(!1)
                            },
                            i = () => {
                                for (let e in t) {
                                    let {
                                        fn: n,
                                        up: o
                                    } = t[e];
                                    t[e].pressed = !1, o && n(!1, null, !0)
                                }
                            },
                            a = (0, N.Vl)("resetcontrols", () => {
                                i()
                            });
                        return window.addEventListener("keydown", o, {
                            passive: !0
                        }), window.addEventListener("keyup", r, {
                            passive: !0
                        }), window.addEventListener("blur", i), window.addEventListener("contextmenu", i), () => {
                            (0, N.bm)("resetcontrols", a), window.removeEventListener("keydown", o), window.removeEventListener("keyup", r), window.removeEventListener("blur", i), window.removeEventListener("contextmenu", i)
                        }
                    }, [e])
                }([{
                    keys: ["ArrowUp", "KeyW", "KeyI", "Numpad8"],
                    fn: (e, t, o) => {
                        e && (0, N.Kn)("upCtrl");
                        let {
                            isCustomising: r,
                            controls: i
                        } = (0, C.y0)();
                        if (r);
                        else {
                            o || (0, nY.H)();
                            let {
                                lockRotation: a
                            } = (0, eU.A8)(), {
                                left: s,
                                right: l,
                                backward: c
                            } = i;
                            (0, nJ.EA)({
                                move: !!l || !!e || !!c || !!s,
                                moveAlongZ: e || c,
                                forceFactor: a ? c ? -1 : e ? 1 : 0 : l || e || c || s ? 1 : 0,
                                yAxisCtrl: c ? -1 : e ? 1 : 0
                            }), n(n => ({
                                controls: { ...n.controls,
                                    forward: e
                                }
                            }))
                        }
                    }
                }, {
                    keys: ["KeyS", "KeyK", "ArrowDown", "Numpad5", "Numpad2"],
                    fn: (e, t, o) => {
                        e && (0, N.Kn)("downCtrl");
                        let {
                            isCustomising: r,
                            controls: i
                        } = (0, C.y0)();
                        if (r);
                        else {
                            o || (0, nY.H)();
                            let {
                                lockRotation: a
                            } = (0, eU.A8)(), {
                                forward: s,
                                left: l,
                                right: c
                            } = i;
                            (0, nJ.EA)({
                                move: !!c || !!s || !!e || !!l,
                                moveAlongZ: s || e,
                                forceFactor: a ? e ? -1 : s ? 1 : 0 : c || s || e || l ? 1 : 0,
                                yAxisCtrl: e ? -1 : s ? 1 : 0
                            }), n(n => ({
                                controls: { ...n.controls,
                                    backward: e
                                }
                            }))
                        }
                    }
                }, {
                    keys: ["KeyA", "KeyJ", "ArrowLeft", "Numpad4"],
                    fn: (e, t, o) => {
                        e && (0, N.Kn)("leftCtrl");
                        let {
                            isCustomising: r,
                            controls: i
                        } = (0, C.y0)();
                        if (r);
                        else {
                            o || (0, nY.H)();
                            let {
                                lockRotation: a
                            } = (0, eU.A8)(), {
                                forward: s,
                                right: l,
                                backward: c
                            } = i;
                            (0, nJ.EA)({
                                move: !!l || !!s || !!c || !!e,
                                moveAlongZ: s || c,
                                forceFactor: a ? c ? -1 : s ? 1 : 0 : l || s || c || e ? 1 : 0,
                                xAxisCtrl: l ? 1 : e ? -1 : 0,
                                turnFactor: l ? -.01 : e ? .01 : 0
                            }), n(n => ({
                                controls: { ...n.controls,
                                    left: e
                                }
                            }))
                        }
                    }
                }, {
                    keys: ["KeyD", "KeyL", "ArrowRight", "Numpad6"],
                    fn: (e, t, o) => {
                        e && (0, N.Kn)("rightCtrl");
                        let {
                            isCustomising: r,
                            controls: i
                        } = (0, C.y0)();
                        if (r);
                        else {
                            o || (0, nY.H)();
                            let {
                                lockRotation: a
                            } = (0, eU.A8)(), {
                                forward: s,
                                left: l,
                                backward: c
                            } = i;
                            (0, nJ.EA)({
                                move: !!e || !!s || !!c || !!l,
                                moveAlongZ: s || c,
                                forceFactor: a ? c ? -1 : s ? 1 : 0 : e || s || c || l ? 1 : 0,
                                xAxisCtrl: e ? 1 : l ? -1 : 0,
                                turnFactor: e ? -.01 : l ? .01 : 0
                            }), n(n => ({
                                controls: { ...n.controls,
                                    right: e
                                }
                            }))
                        }
                    }
                }, {
                    keys: ["Space"],
                    fn: (e, n, t) => {
                        t || (0, nY.H)(), n || (e ? (0, N.Kn)("ctrl_jump") : (0, N.Kn)("ctrl_stopJump"))
                    }
                }, {
                    keys: ["Enter"],
                    fn: () => {
                        (0, N.Kn)("selectCtrl"), (0, eW.VB)().focusChat || ((0, N.Kn)("sendMessage"), (0, N.Kn)("cancelUI"))
                    },
                    up: !1
                }, {
                    keys: ["Escape"],
                    fn: () => {
                        (0, N.Kn)("escapeCtrl"), (0, N.Kn)("cancelUI")
                    },
                    up: !1
                }, {
                    keys: ["u", "U"],
                    fn: () => {
                        let e = (0, C.y0)().hiddenUi;
                        (0, M.av)({
                            hideUi: !e
                        }), n({
                            hiddenUi: !e
                        })
                    },
                    up: !1
                }, {
                    keys: ["n", "N"],
                    fn: () => {
                        let {
                            settings: e
                        } = (0, M.PR)();
                        e.privacy.showNames = !e.privacy.showNames, (0, M.av)({
                            settings: e
                        })
                    },
                    up: !1
                }, {
                    keys: ["v", "V"],
                    fn: () => {
                        (0, eU.A8)().setNextCameraMode(), (0, N.Kn)("userAction")
                    },
                    up: !1
                }, {
                    keys: ["p", "P"],
                    fn: () => {
                        let {
                            isCustomising: e
                        } = (0, C.y0)();
                        (0, N.Kn)("resetcontrols"), e ? (0, n$.E0)(!1) : (0, n$.E0)(!0, "colors")
                    },
                    up: !1
                }, {
                    keys: ["m", "M"],
                    fn: () => {
                        (0, M.PR)().toggleMute()
                    },
                    up: !1
                }]), null
            }
            t(5683);
            var n1 = t(4955);
            let n2 = (0, k.Z)((e, n) => {
                    let t = t => {
                            let o = n().focusableElements;
                            o.push(t), e({
                                focusableElements: o
                            })
                        },
                        o = t => {
                            let o = n().focusableElements,
                                r = o.filter(e => {});
                            e({
                                focusableElements: r
                            })
                        },
                        r = () => {
                            let t = n().focusableElements,
                                o = n().focusedUuid,
                                r = null;
                            if (null === o && t.length > 0) r = t[0];
                            else
                                for (let i = 0; i < t.length; i++) t[i] === o && (r = t[i + 1] ? t[i + 1] : t[0]);
                            e({
                                focusedUuid: r
                            })
                        },
                        i = () => {
                            let t = n().focusableElements,
                                o = n().focusedUuid,
                                r = null;
                            if (null === o && t.length > 0) r = t[t.length - 1];
                            else
                                for (let i = 0; i < t.length; i++) t[i] === o && (r = t[i - 1] ? t[i - 1] : t[t.length - 1]);
                            e({
                                focusedUuid: r
                            })
                        },
                        a = () => {
                            let t = n().focusedUuid;
                            e({
                                activedUuid: t
                            })
                        };
                    return {
                        focusableElements: [],
                        focusedUuid: null,
                        activedUuid: null,
                        addFocusableElement: t,
                        removeFocusableElement: o,
                        focusNext: r,
                        focusPrev: i,
                        actionFocused: a
                    }
                }),
                n3 = e => n2(e, E.Z);
            Object.assign(n3, n2);
            let {
                getState: n4,
                setState: n5
            } = n2;

            function n9() {
                let [e, n] = (0, c.useState)(!1), t = (0, c.useRef)(null), o = (0, c.useRef)({
                    buttons: [],
                    axes: []
                }), {
                    set: r
                } = (0, C.oR)(e => {
                    let {
                        set: n
                    } = e;
                    return {
                        set: n
                    }
                }), i = e => {
                    console.log("Contr\xf4leur n\xb0%d connect\xe9 : %s. %d boutons, %d axes.", e.gamepad.index, e.gamepad.id, e.gamepad.buttons.length, e.gamepad.axes.length), n(!0), t.current = e.gamepad, o.current.buttons = Array(e.gamepad.buttons.length), o.current.axes = Array(e.gamepad.axes.length)
                }, a = e => {
                    console.log("Contr\xf4leur n\xb0%d d\xe9connect\xe9 : %s", e.gamepad.index, e.gamepad.id), n(!1), t.current = null
                }, s = (e, n) => {
                    o.current.buttons[e] = n, (0, nY.H)(), 0 == e && (n ? (0, N.Kn)("ctrl_jump") : (0, N.Kn)("ctrl_stopJump")), n && 1 == e && n4().actionFocused(), n && 12 == e && (0, N.Kn)("ctrl_meditateyoyo"), n && 13 == e && (0, N.Kn)("ctrl_thankYou"), n && 14 == e && n4().focusNext(), n && 15 == e && n4().focusPrev(), n && 8 == e && (0, eU.A8)().setNextCameraMode()
                }, l = (e, n) => {
                    o.current.axes[e] = n;
                    let {
                        lockRotation: t
                    } = (0, eU.A8)(), {
                        move: r
                    } = (0, nJ.XV)(), i = o.current.axes[1] > .1 || o.current.axes[1] < -.1 || o.current.axes[0] > .1 || o.current.axes[0] < -.1;
                    i && (0, nY.H)(), !r && i && (0, eU.Th)({
                        resetCamera: !0
                    }), (0, nJ.EA)({
                        move: i,
                        forceFactor: i ? t ? -o.current.axes[1] > 0 ? Math.min(Math.abs(o.current.axes[0]) + -o.current.axes[1], 1) : Math.max(Math.abs(o.current.axes[0]) + -o.current.axes[1], -1) : Math.min(Math.abs(o.current.axes[0]) + Math.abs(o.current.axes[1]), 1) : 0,
                        turnFactor: i ? -o.current.axes[0] / 100 : 0,
                        xAxisCtrl: o.current.axes[0],
                        yAxisCtrl: -o.current.axes[1]
                    })
                }, u = (e, n) => {
                    o.current.axes[e] = n;
                    let t = o.current.axes[2] > .1 || o.current.axes[2] < -.1 || o.current.axes[3] > .1 || o.current.axes[3] < -.1;
                    if (t) {
                        let {
                            dragDelta: r
                        } = (0, eU.A8)();
                        r.x = 10 * o.current.axes[2], r.y = 20 * o.current.axes[3], (0, eU.Th)({
                            dragDelta: r,
                            resetCamera: !1,
                            isDragging: !0
                        }), n1.inactivityDrag.cancel(), (0, n1.inactivityDrag)()
                    }
                };
                return (0, c.useEffect)(() => (window.addEventListener("gamepadconnected", i), window.addEventListener("gamepaddisconnected", a), () => {
                    window.removeEventListener("gamepadconnected", i), window.removeEventListener("gamepaddisconnected", a)
                })), (0, f.A)(() => {
                    if (e && (t.current = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads : [], t.current)) {
                        for (let n = 0; n < t.current[0].buttons.length; n++) t.current[0].buttons[n].pressed != o.current.buttons[n] && s(n, t.current[0].buttons[n].pressed);
                        for (let r = 0; r < 2; r++) t.current[0].axes[r] != o.current.axes[r] && l(r, t.current[0].axes[r]);
                        for (let i = 2; i < 4; i++) u(i, t.current[0].axes[i])
                    }
                }), null
            }
            var n8 = t(5152),
                n6 = t.n(n8);
            let n7 = n6()(() => Promise.all([t.e(675), t.e(567), t.e(173)]).then(t.bind(t, 3173)), {
                    loadableGenerated: {
                        webpack: () => [3173]
                    },
                    ssr: !1
                }),
                te = () => (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(nX, {}), (0, l.jsx)(nI, {}), (0, l.jsx)(nB, {}), (0, l.jsx)(n0, {}), (0, l.jsx)(n7, {})]
                }),
                tn = () => (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(nD, {}), (0, l.jsx)(n9, {})]
                }),
                tt = () => (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(te, {}), (0, l.jsx)(tn, {
                        r3f: !0
                    })]
                });
            var to = !0,
                tr = tt
        }
    },
    function(e) {
        e.O(0, [318, 839, 609, 673, 955, 774, 888, 179], function() {
            return e(e.s = 5728)
        }), _N_E = e.O()
    }
]);