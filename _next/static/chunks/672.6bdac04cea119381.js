(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [672], {
        5495: function(A, e, t) {
            "use strict";
            t.d(e, {
                c: function() {
                    return o
                }
            });
            var g = t(7462),
                I = t(7294),
                B = t(8715),
                r = t(5878),
                i = t(9477);
            let C = A => "function" == typeof A,
                o = I.forwardRef(({
                    envMap: A,
                    resolution: e = 256,
                    frames: t = 1 / 0,
                    makeDefault: o,
                    children: E,
                    ...Q
                }, n) => {
                    let a = (0, B.z)(({
                            set: A
                        }) => A),
                        s = (0, B.z)(({
                            camera: A
                        }) => A),
                        h = (0, B.z)(({
                            size: A
                        }) => A),
                        f = I.useRef(null),
                        c = I.useRef(null),
                        u = function(A, e, t) {
                            let {
                                gl: g,
                                size: r,
                                viewport: C
                            } = (0, B.z)(), o = "number" == typeof A ? A : r.width * C.dpr, E = "number" == typeof e ? e : r.height * C.dpr, {
                                samples: Q = 0,
                                depth: n,
                                ...a
                            } = ("number" == typeof A ? void 0 : A) || {}, s = I.useMemo(() => {
                                let A;
                                return A = new i.WebGLRenderTarget(o, E, {
                                    minFilter: i.LinearFilter,
                                    magFilter: i.LinearFilter,
                                    encoding: g.outputEncoding,
                                    type: i.HalfFloatType,
                                    ...a
                                }), n && (A.depthTexture = new i.DepthTexture(o, E, i.FloatType)), A.samples = Q, A
                            }, []);
                            return I.useLayoutEffect(() => {
                                s.setSize(o, E), Q && (s.samples = Q)
                            }, [Q, s, o, E]), I.useEffect(() => () => s.dispose(), []), s
                        }(e);
                    I.useLayoutEffect(() => {
                        Q.manual || (f.current.aspect = h.width / h.height)
                    }, [h, Q]), I.useLayoutEffect(() => {
                        f.current.updateProjectionMatrix()
                    });
                    let l = 0,
                        w = null,
                        y = C(E);
                    return (0, B.A)(e => {
                        y && (t === 1 / 0 || l < t) && (c.current.visible = !1, e.gl.setRenderTarget(u), w = e.scene.background, A && (e.scene.background = A), e.gl.render(e.scene, f.current), e.scene.background = w, e.gl.setRenderTarget(null), c.current.visible = !0, l++)
                    }), I.useLayoutEffect(() => {
                        if (o) return a(() => ({
                            camera: f.current
                        })), () => a(() => ({
                            camera: s
                        }))
                    }, [f, o, a]), I.createElement(I.Fragment, null, I.createElement("perspectiveCamera", (0, g.Z)({
                        ref: (0, r.Z)([f, n])
                    }, Q), !y && E), I.createElement("group", {
                        ref: c
                    }, y && E(u.texture)))
                })
        },
        587: function(A, e, t) {
            "use strict";
            t.d(e, {
                q: function() {
                    return r
                }
            });
            var g = t(9477),
                I = t(7294),
                B = t(8715);

            function r({
                all: A,
                scene: e,
                camera: t
            }) {
                let r = (0, B.z)(({
                        gl: A
                    }) => A),
                    i = (0, B.z)(({
                        camera: A
                    }) => A),
                    C = (0, B.z)(({
                        scene: A
                    }) => A);
                return I.useLayoutEffect(() => {
                    let I = [];
                    A && (e || C).traverse(A => {
                        !1 === A.visible && (I.push(A), A.visible = !0)
                    }), r.compile(e || C, t || i);
                    let B = new g.WebGLCubeRenderTarget(128),
                        o = new g.CubeCamera(.01, 1e5, B);
                    o.update(r, e || C), B.dispose(), I.forEach(A => A.visible = !1)
                }, []), null
            }
        },
        5062: function(A, e, t) {
            "use strict";
            t.d(e, {
                H: function() {
                    return B
                }
            });
            var g = t(7294),
                I = t(8715);

            function B(A, e, ...t) {
                let B = g.useRef(),
                    r = (0, I.z)(A => A.scene);
                return g.useEffect(() => {
                    let g;
                    if (A && null != A && A.current && e && (B.current = g = new e(A.current, ...t)), g) return r.add(g), () => {
                        B.current = void 0, r.remove(g), null == g.dispose || g.dispose()
                    }
                }, [r, e, A, ...t]), (0, I.A)(() => {
                    var A;
                    null == (A = B.current) || null == A.update || A.update()
                }), B
            }
        },
        5029: function(A, e, t) {
            "use strict";
            t.d(e, {
                Xz: function() {
                    return S
                }
            });
            var g = t(8715),
                I = t(7462),
                B = t(7294),
                r = t(9477),
                i = t(296),
                C = t.n(i);
            let o = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
                E = (A, e) => o.every(t => A[t] === e[t]);
            var Q = Object.defineProperty,
                n = Object.defineProperties,
                a = Object.getOwnPropertyDescriptors,
                s = Object.getOwnPropertySymbols,
                h = Object.prototype.hasOwnProperty,
                f = Object.prototype.propertyIsEnumerable,
                c = (A, e, t) => e in A ? Q(A, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : A[e] = t,
                u = (A, e) => {
                    for (var t in e || (e = {})) h.call(e, t) && c(A, t, e[t]);
                    if (s)
                        for (var t of s(e)) f.call(e, t) && c(A, t, e[t]);
                    return A
                },
                l = (A, e) => n(A, a(e));

            function w(A) {
                try {
                    return Object.defineProperties(A, {
                        _currentRenderer: {
                            get: () => null,
                            set() {}
                        },
                        _currentRenderer2: {
                            get: () => null,
                            set() {}
                        }
                    })
                } catch (e) {
                    return A
                }
            }
            let y = w(B.createContext(null));
            class D extends B.Component {
                render() {
                    return B.createElement(y.Provider, {
                        value: this._reactInternals
                    }, this.props.children)
                }
            }
            let {
                ReactCurrentOwner: d,
                ReactCurrentDispatcher: p
            } = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            t(2576), t(6525), t(3840);
            let F = {
                onClick: ["click", !1],
                onContextMenu: ["contextmenu", !1],
                onDoubleClick: ["dblclick", !1],
                onWheel: ["wheel", !0],
                onPointerDown: ["pointerdown", !0],
                onPointerUp: ["pointerup", !0],
                onPointerLeave: ["pointerleave", !0],
                onPointerMove: ["pointermove", !0],
                onPointerCancel: ["pointercancel", !0],
                onLostPointerCapture: ["lostpointercapture", !0]
            };

            function G(A) {
                let {
                    handlePointer: e
                } = (0, g.c)(A);
                return {
                    priority: 1,
                    enabled: !0,
                    compute(A, e, t) {
                        e.pointer.set(A.offsetX / e.size.width * 2 - 1, -(2 * (A.offsetY / e.size.height)) + 1), e.raycaster.setFromCamera(e.pointer, e.camera)
                    },
                    connected: void 0,
                    handlers: Object.keys(F).reduce((A, t) => ({ ...A,
                        [t]: e(t)
                    }), {}),
                    connect: e => {
                        var t;
                        let {
                            set: g,
                            events: I
                        } = A.getState();
                        null == I.disconnect || I.disconnect(), g(A => ({
                            events: { ...A.events,
                                connected: e
                            }
                        })), Object.entries(null != (t = I.handlers) ? t : []).forEach(([A, t]) => {
                            let [g, I] = F[A];
                            e.addEventListener(g, t, {
                                passive: I
                            })
                        })
                    },
                    disconnect: () => {
                        let {
                            set: e,
                            events: t
                        } = A.getState();
                        if (t.connected) {
                            var g;
                            Object.entries(null != (g = t.handlers) ? g : []).forEach(([A, e]) => {
                                if (t && t.connected instanceof HTMLElement) {
                                    let [g] = F[A];
                                    t.connected.removeEventListener(g, e)
                                }
                            }), e(A => ({
                                events: { ...A.events,
                                    connected: void 0
                                }
                            }))
                        }
                    }
                }
            }
            let R = B.forwardRef(function({
                    children: A,
                    fallback: e,
                    resize: t,
                    style: i,
                    gl: o,
                    events: Q = G,
                    eventSource: n,
                    eventPrefix: a,
                    shadows: s,
                    linear: h,
                    flat: f,
                    legacy: c,
                    orthographic: F,
                    frameloop: R,
                    dpr: S,
                    performance: U,
                    raycaster: L,
                    camera: k,
                    onPointerMissed: m,
                    onCreated: N,
                    ...M
                }, q) {
                    B.useMemo(() => (0, g.e)(r), []);
                    let J = function() {
                            var A, e;
                            let t = function() {
                                    let A = B.useContext(y);
                                    if (!A) throw Error("its-fine: useFiber must be called within a <FiberProvider />!");
                                    let e = B.useId(),
                                        t = B.useMemo(() => {
                                            var t;
                                            return null != (t = d.current) ? t : function A(e, t, g) {
                                                if (!e) return;
                                                if (!0 === g(e)) return e;
                                                let I = t ? e.return : e.child;
                                                for (; I;) {
                                                    let B = A(I, t, g);
                                                    if (B) return B;
                                                    I = t ? null : I.sibling
                                                }
                                            }(A, !1, A => {
                                                let t = A.memoizedState;
                                                for (; t;) {
                                                    if (t.memoizedState === e) return !0;
                                                    t = t.next
                                                }
                                            })
                                        }, [A, e]);
                                    return t
                                }(),
                                [g] = B.useState(() => new Map);
                            g.clear();
                            let I = t;
                            for (; I;) {
                                let r = null == (A = I.type) ? void 0 : A._context;
                                r && r !== y && !g.has(r) && g.set(r, null == (e = p.current) ? void 0 : e.readContext(w(r))), I = I.return
                            }
                            return B.useMemo(() => Array.from(g.keys()).reduce((A, e) => t => B.createElement(A, null, B.createElement(e.Provider, l(u({}, t), {
                                value: g.get(e)
                            }))), A => B.createElement(D, u({}, A))), [g])
                        }(),
                        [v, b] = function(A) {
                            var e;
                            let {
                                debounce: t,
                                scroll: g,
                                polyfill: I,
                                offsetSize: r
                            } = void 0 === A ? {
                                debounce: 0,
                                scroll: !1,
                                offsetSize: !1
                            } : A, i = I || ("undefined" == typeof window ? class {} : window.ResizeObserver);
                            if (!i) throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
                            let [o, Q] = (0, B.useState)({
                                left: 0,
                                top: 0,
                                width: 0,
                                height: 0,
                                bottom: 0,
                                right: 0,
                                x: 0,
                                y: 0
                            }), n = (0, B.useRef)({
                                element: null,
                                scrollContainers: null,
                                resizeObserver: null,
                                lastBounds: o
                            }), a = t ? "number" == typeof t ? t : t.scroll : null, s = t ? "number" == typeof t ? t : t.resize : null, h = (0, B.useRef)(!1);
                            (0, B.useEffect)(() => (h.current = !0, () => void(h.current = !1)));
                            let [f, c, u] = (0, B.useMemo)(() => {
                                let A = () => {
                                    if (!n.current.element) return;
                                    let {
                                        left: A,
                                        top: e,
                                        width: t,
                                        height: g,
                                        bottom: I,
                                        right: B,
                                        x: i,
                                        y: C
                                    } = n.current.element.getBoundingClientRect(), o = {
                                        left: A,
                                        top: e,
                                        width: t,
                                        height: g,
                                        bottom: I,
                                        right: B,
                                        x: i,
                                        y: C
                                    };
                                    n.current.element instanceof HTMLElement && r && (o.height = n.current.element.offsetHeight, o.width = n.current.element.offsetWidth), Object.freeze(o), h.current && !E(n.current.lastBounds, o) && Q(n.current.lastBounds = o)
                                };
                                return [A, s ? C()(A, s) : A, a ? C()(A, a) : A]
                            }, [Q, r, a, s]);

                            function l() {
                                n.current.scrollContainers && (n.current.scrollContainers.forEach(A => A.removeEventListener("scroll", u, !0)), n.current.scrollContainers = null), n.current.resizeObserver && (n.current.resizeObserver.disconnect(), n.current.resizeObserver = null)
                            }

                            function w() {
                                n.current.element && (n.current.resizeObserver = new i(u), n.current.resizeObserver.observe(n.current.element), g && n.current.scrollContainers && n.current.scrollContainers.forEach(A => A.addEventListener("scroll", u, {
                                    capture: !0,
                                    passive: !0
                                })))
                            }
                            let y = A => {
                                A && A !== n.current.element && (l(), n.current.element = A, n.current.scrollContainers = function A(e) {
                                    let t = [];
                                    if (!e || e === document.body) return t;
                                    let {
                                        overflow: g,
                                        overflowX: I,
                                        overflowY: B
                                    } = window.getComputedStyle(e);
                                    return [g, I, B].some(A => "auto" === A || "scroll" === A) && t.push(e), [...t, ...A(e.parentElement)]
                                }(A), w())
                            };
                            return e = Boolean(g), (0, B.useEffect)(() => {
                                if (e) return window.addEventListener("scroll", u, {
                                    capture: !0,
                                    passive: !0
                                }), () => void window.removeEventListener("scroll", u, !0)
                            }, [u, e]), (0, B.useEffect)(() => (window.addEventListener("resize", c), () => void window.removeEventListener("resize", c)), [c]), (0, B.useEffect)(() => {
                                l(), w()
                            }, [g, u, c]), (0, B.useEffect)(() => l, []), [y, o, f]
                        }({
                            scroll: !0,
                            debounce: {
                                scroll: 50,
                                resize: 0
                            },
                            ...t
                        }),
                        Y = B.useRef(null),
                        H = B.useRef(null),
                        [x, T] = B.useState(null);
                    B.useImperativeHandle(q, () => Y.current);
                    let _ = (0, g.u)(m),
                        [K, O] = B.useState(!1),
                        [P, V] = B.useState(!1);
                    if (K) throw K;
                    if (P) throw P;
                    let W = B.useRef(null);
                    return b.width > 0 && b.height > 0 && x && (W.current || (W.current = (0, g.a)(x)), W.current.configure({
                        gl: o,
                        events: Q,
                        shadows: s,
                        linear: h,
                        flat: f,
                        legacy: c,
                        orthographic: F,
                        frameloop: R,
                        dpr: S,
                        performance: U,
                        raycaster: L,
                        camera: k,
                        size: b,
                        onPointerMissed: (...A) => null == _.current ? void 0 : _.current(...A),
                        onCreated: A => {
                            null == A.events.connect || A.events.connect(n ? (0, g.i)(n) ? n.current : n : H.current), a && A.setEvents({
                                compute: (A, e) => {
                                    let t = A[a + "X"],
                                        g = A[a + "Y"];
                                    e.pointer.set(t / e.size.width * 2 - 1, -(2 * (g / e.size.height)) + 1), e.raycaster.setFromCamera(e.pointer, e.camera)
                                }
                            }), null == N || N(A)
                        }
                    }), W.current.render(B.createElement(J, null, B.createElement(g.E, {
                        set: V
                    }, B.createElement(B.Suspense, {
                        fallback: B.createElement(g.B, {
                            set: O
                        })
                    }, A))))), (0, g.b)(() => {
                        T(Y.current)
                    }, []), B.useEffect(() => {
                        if (x) return () => (0, g.d)(x)
                    }, [x]), B.createElement("div", (0, I.Z)({
                        ref: H,
                        style: {
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            pointerEvents: n ? "none" : "auto",
                            ...i
                        }
                    }, M), B.createElement("div", {
                        ref: v,
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    }, B.createElement("canvas", {
                        ref: Y,
                        style: {
                            display: "block"
                        }
                    }, e)))
                }),
                S = B.forwardRef(function(A, e) {
                    return B.createElement(D, null, B.createElement(R, (0, I.Z)({}, A, {
                        ref: e
                    })))
                })
        },
        9742: function(A, e) {
            "use strict";
            e.byteLength = function(A) {
                var e = C(A),
                    t = e[0],
                    g = e[1];
                return (t + g) * 3 / 4 - g
            }, e.toByteArray = function(A) {
                var e, t, B = C(A),
                    r = B[0],
                    i = B[1],
                    o = new I((r + i) * 3 / 4 - i),
                    E = 0,
                    Q = i > 0 ? r - 4 : r;
                for (t = 0; t < Q; t += 4) e = g[A.charCodeAt(t)] << 18 | g[A.charCodeAt(t + 1)] << 12 | g[A.charCodeAt(t + 2)] << 6 | g[A.charCodeAt(t + 3)], o[E++] = e >> 16 & 255, o[E++] = e >> 8 & 255, o[E++] = 255 & e;
                return 2 === i && (e = g[A.charCodeAt(t)] << 2 | g[A.charCodeAt(t + 1)] >> 4, o[E++] = 255 & e), 1 === i && (e = g[A.charCodeAt(t)] << 10 | g[A.charCodeAt(t + 1)] << 4 | g[A.charCodeAt(t + 2)] >> 2, o[E++] = e >> 8 & 255, o[E++] = 255 & e), o
            }, e.fromByteArray = function(A) {
                for (var e, g = A.length, I = g % 3, B = [], r = 0, i = g - I; r < i; r += 16383) B.push(function(A, e, g) {
                    for (var I, B = [], r = e; r < g; r += 3) B.push(t[(I = (A[r] << 16 & 16711680) + (A[r + 1] << 8 & 65280) + (255 & A[r + 2])) >> 18 & 63] + t[I >> 12 & 63] + t[I >> 6 & 63] + t[63 & I]);
                    return B.join("")
                }(A, r, r + 16383 > i ? i : r + 16383));
                return 1 === I ? B.push(t[(e = A[g - 1]) >> 2] + t[e << 4 & 63] + "==") : 2 === I && B.push(t[(e = (A[g - 2] << 8) + A[g - 1]) >> 10] + t[e >> 4 & 63] + t[e << 2 & 63] + "="), B.join("")
            };
            for (var t = [], g = [], I = "undefined" != typeof Uint8Array ? Uint8Array : Array, B = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = 0, i = B.length; r < i; ++r) t[r] = B[r], g[B.charCodeAt(r)] = r;

            function C(A) {
                var e = A.length;
                if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                var t = A.indexOf("="); - 1 === t && (t = e);
                var g = t === e ? 0 : 4 - t % 4;
                return [t, g]
            }
            g["-".charCodeAt(0)] = 62, g["_".charCodeAt(0)] = 63
        },
        8764: function(A, e, t) {
            "use strict";
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <https://feross.org>
             * @license  MIT
             */
            var g = t(9742),
                I = t(645),
                B = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

            function r(A) {
                if (A > 2147483647) throw RangeError('The value "' + A + '" is invalid for option "size"');
                var e = new Uint8Array(A);
                return Object.setPrototypeOf(e, i.prototype), e
            }

            function i(A, e, t) {
                if ("number" == typeof A) {
                    if ("string" == typeof e) throw TypeError('The "string" argument must be of type string. Received type number');
                    return E(A)
                }
                return C(A, e, t)
            }

            function C(A, e, t) {
                if ("string" == typeof A) return function(A, e) {
                    if (("string" != typeof e || "" === e) && (e = "utf8"), !i.isEncoding(e)) throw TypeError("Unknown encoding: " + e);
                    var t = 0 | s(A, e),
                        g = r(t),
                        I = g.write(A, e);
                    return I !== t && (g = g.slice(0, I)), g
                }(A, e);
                if (ArrayBuffer.isView(A)) return function(A) {
                    if (U(A, Uint8Array)) {
                        var e = new Uint8Array(A);
                        return n(e.buffer, e.byteOffset, e.byteLength)
                    }
                    return Q(A)
                }(A);
                if (null == A) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof A);
                if (U(A, ArrayBuffer) || A && U(A.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (U(A, SharedArrayBuffer) || A && U(A.buffer, SharedArrayBuffer))) return n(A, e, t);
                if ("number" == typeof A) throw TypeError('The "value" argument must not be of type number. Received type number');
                var g = A.valueOf && A.valueOf();
                if (null != g && g !== A) return i.from(g, e, t);
                var I = function(A) {
                    if (i.isBuffer(A)) {
                        var e, t = 0 | a(A.length),
                            g = r(t);
                        return 0 === g.length || A.copy(g, 0, 0, t), g
                    }
                    return void 0 !== A.length ? "number" != typeof A.length || (e = A.length) != e ? r(0) : Q(A) : "Buffer" === A.type && Array.isArray(A.data) ? Q(A.data) : void 0
                }(A);
                if (I) return I;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof A[Symbol.toPrimitive]) return i.from(A[Symbol.toPrimitive]("string"), e, t);
                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof A)
            }

            function o(A) {
                if ("number" != typeof A) throw TypeError('"size" argument must be of type number');
                if (A < 0) throw RangeError('The value "' + A + '" is invalid for option "size"')
            }

            function E(A) {
                return o(A), r(A < 0 ? 0 : 0 | a(A))
            }

            function Q(A) {
                for (var e = A.length < 0 ? 0 : 0 | a(A.length), t = r(e), g = 0; g < e; g += 1) t[g] = 255 & A[g];
                return t
            }

            function n(A, e, t) {
                var g;
                if (e < 0 || A.byteLength < e) throw RangeError('"offset" is outside of buffer bounds');
                if (A.byteLength < e + (t || 0)) throw RangeError('"length" is outside of buffer bounds');
                return Object.setPrototypeOf(g = void 0 === e && void 0 === t ? new Uint8Array(A) : void 0 === t ? new Uint8Array(A, e) : new Uint8Array(A, e, t), i.prototype), g
            }

            function a(A) {
                if (A >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                return 0 | A
            }

            function s(A, e) {
                if (i.isBuffer(A)) return A.length;
                if (ArrayBuffer.isView(A) || U(A, ArrayBuffer)) return A.byteLength;
                if ("string" != typeof A) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof A);
                var t = A.length,
                    g = arguments.length > 2 && !0 === arguments[2];
                if (!g && 0 === t) return 0;
                for (var I = !1;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return t;
                    case "utf8":
                    case "utf-8":
                        return G(A).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * t;
                    case "hex":
                        return t >>> 1;
                    case "base64":
                        return R(A).length;
                    default:
                        if (I) return g ? -1 : G(A).length;
                        e = ("" + e).toLowerCase(), I = !0
                }
            }

            function h(A, e, t) {
                var I, B, r = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length || ((void 0 === t || t > this.length) && (t = this.length), t <= 0 || (t >>>= 0) <= (e >>>= 0))) return "";
                for (A || (A = "utf8");;) switch (A) {
                    case "hex":
                        return function(A, e, t) {
                            var g = A.length;
                            (!e || e < 0) && (e = 0), (!t || t < 0 || t > g) && (t = g);
                            for (var I = "", B = e; B < t; ++B) I += L[A[B]];
                            return I
                        }(this, e, t);
                    case "utf8":
                    case "utf-8":
                        return l(this, e, t);
                    case "ascii":
                        return function(A, e, t) {
                            var g = "";
                            t = Math.min(A.length, t);
                            for (var I = e; I < t; ++I) g += String.fromCharCode(127 & A[I]);
                            return g
                        }(this, e, t);
                    case "latin1":
                    case "binary":
                        return function(A, e, t) {
                            var g = "";
                            t = Math.min(A.length, t);
                            for (var I = e; I < t; ++I) g += String.fromCharCode(A[I]);
                            return g
                        }(this, e, t);
                    case "base64":
                        return I = e, B = t, 0 === I && B === this.length ? g.fromByteArray(this) : g.fromByteArray(this.slice(I, B));
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return function(A, e, t) {
                            for (var g = A.slice(e, t), I = "", B = 0; B < g.length - 1; B += 2) I += String.fromCharCode(g[B] + 256 * g[B + 1]);
                            return I
                        }(this, e, t);
                    default:
                        if (r) throw TypeError("Unknown encoding: " + A);
                        A = (A + "").toLowerCase(), r = !0
                }
            }

            function f(A, e, t) {
                var g = A[e];
                A[e] = A[t], A[t] = g
            }

            function c(A, e, t, g, I) {
                var B;
                if (0 === A.length) return -1;
                if ("string" == typeof t ? (g = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), (B = t = +t) != B && (t = I ? 0 : A.length - 1), t < 0 && (t = A.length + t), t >= A.length) {
                    if (I) return -1;
                    t = A.length - 1
                } else if (t < 0) {
                    if (!I) return -1;
                    t = 0
                }
                if ("string" == typeof e && (e = i.from(e, g)), i.isBuffer(e)) return 0 === e.length ? -1 : u(A, e, t, g, I);
                if ("number" == typeof e) return (e &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? I ? Uint8Array.prototype.indexOf.call(A, e, t) : Uint8Array.prototype.lastIndexOf.call(A, e, t) : u(A, [e], t, g, I);
                throw TypeError("val must be string, number or Buffer")
            }

            function u(A, e, t, g, I) {
                var B, r = 1,
                    i = A.length,
                    C = e.length;
                if (void 0 !== g && ("ucs2" === (g = String(g).toLowerCase()) || "ucs-2" === g || "utf16le" === g || "utf-16le" === g)) {
                    if (A.length < 2 || e.length < 2) return -1;
                    r = 2, i /= 2, C /= 2, t /= 2
                }

                function o(A, e) {
                    return 1 === r ? A[e] : A.readUInt16BE(e * r)
                }
                if (I) {
                    var E = -1;
                    for (B = t; B < i; B++)
                        if (o(A, B) === o(e, -1 === E ? 0 : B - E)) {
                            if (-1 === E && (E = B), B - E + 1 === C) return E * r
                        } else -1 !== E && (B -= B - E), E = -1
                } else
                    for (t + C > i && (t = i - C), B = t; B >= 0; B--) {
                        for (var Q = !0, n = 0; n < C; n++)
                            if (o(A, B + n) !== o(e, n)) {
                                Q = !1;
                                break
                            }
                        if (Q) return B
                    }
                return -1
            }

            function l(A, e, t) {
                t = Math.min(A.length, t);
                for (var g = [], I = e; I < t;) {
                    var B, r, i, C, o = A[I],
                        E = null,
                        Q = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                    if (I + Q <= t) switch (Q) {
                        case 1:
                            o < 128 && (E = o);
                            break;
                        case 2:
                            (192 & (B = A[I + 1])) == 128 && (C = (31 & o) << 6 | 63 & B) > 127 && (E = C);
                            break;
                        case 3:
                            B = A[I + 1], r = A[I + 2], (192 & B) == 128 && (192 & r) == 128 && (C = (15 & o) << 12 | (63 & B) << 6 | 63 & r) > 2047 && (C < 55296 || C > 57343) && (E = C);
                            break;
                        case 4:
                            B = A[I + 1], r = A[I + 2], i = A[I + 3], (192 & B) == 128 && (192 & r) == 128 && (192 & i) == 128 && (C = (15 & o) << 18 | (63 & B) << 12 | (63 & r) << 6 | 63 & i) > 65535 && C < 1114112 && (E = C)
                    }
                    null === E ? (E = 65533, Q = 1) : E > 65535 && (E -= 65536, g.push(E >>> 10 & 1023 | 55296), E = 56320 | 1023 & E), g.push(E), I += Q
                }
                return function(A) {
                    var e = A.length;
                    if (e <= 4096) return String.fromCharCode.apply(String, A);
                    for (var t = "", g = 0; g < e;) t += String.fromCharCode.apply(String, A.slice(g, g += 4096));
                    return t
                }(g)
            }

            function w(A, e, t) {
                if (A % 1 != 0 || A < 0) throw RangeError("offset is not uint");
                if (A + e > t) throw RangeError("Trying to access beyond buffer length")
            }

            function y(A, e, t, g, I, B) {
                if (!i.isBuffer(A)) throw TypeError('"buffer" argument must be a Buffer instance');
                if (e > I || e < B) throw RangeError('"value" argument is out of bounds');
                if (t + g > A.length) throw RangeError("Index out of range")
            }

            function D(A, e, t, g, I, B) {
                if (t + g > A.length || t < 0) throw RangeError("Index out of range")
            }

            function d(A, e, t, g, B) {
                return e = +e, t >>>= 0, B || D(A, e, t, 4, 34028234663852886e22, -34028234663852886e22), I.write(A, e, t, g, 23, 4), t + 4
            }

            function p(A, e, t, g, B) {
                return e = +e, t >>>= 0, B || D(A, e, t, 8, 17976931348623157e292, -17976931348623157e292), I.write(A, e, t, g, 52, 8), t + 8
            }
            e.lW = i, e.h2 = 50, i.TYPED_ARRAY_SUPPORT = function() {
                try {
                    var A = new Uint8Array(1),
                        e = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(A, e), 42 === A.foo()
                } catch (t) {
                    return !1
                }
            }(), i.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(i.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (i.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(i.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (i.isBuffer(this)) return this.byteOffset
                }
            }), i.poolSize = 8192, i.from = function(A, e, t) {
                return C(A, e, t)
            }, Object.setPrototypeOf(i.prototype, Uint8Array.prototype), Object.setPrototypeOf(i, Uint8Array), i.alloc = function(A, e, t) {
                return (o(A), A <= 0) ? r(A) : void 0 !== e ? "string" == typeof t ? r(A).fill(e, t) : r(A).fill(e) : r(A)
            }, i.allocUnsafe = function(A) {
                return E(A)
            }, i.allocUnsafeSlow = function(A) {
                return E(A)
            }, i.isBuffer = function(A) {
                return null != A && !0 === A._isBuffer && A !== i.prototype
            }, i.compare = function(A, e) {
                if (U(A, Uint8Array) && (A = i.from(A, A.offset, A.byteLength)), U(e, Uint8Array) && (e = i.from(e, e.offset, e.byteLength)), !i.isBuffer(A) || !i.isBuffer(e)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (A === e) return 0;
                for (var t = A.length, g = e.length, I = 0, B = Math.min(t, g); I < B; ++I)
                    if (A[I] !== e[I]) {
                        t = A[I], g = e[I];
                        break
                    }
                return t < g ? -1 : g < t ? 1 : 0
            }, i.isEncoding = function(A) {
                switch (String(A).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, i.concat = function(A, e) {
                if (!Array.isArray(A)) throw TypeError('"list" argument must be an Array of Buffers');
                if (0 === A.length) return i.alloc(0);
                if (void 0 === e)
                    for (t = 0, e = 0; t < A.length; ++t) e += A[t].length;
                var t, g = i.allocUnsafe(e),
                    I = 0;
                for (t = 0; t < A.length; ++t) {
                    var B = A[t];
                    if (U(B, Uint8Array)) I + B.length > g.length ? i.from(B).copy(g, I) : Uint8Array.prototype.set.call(g, B, I);
                    else if (i.isBuffer(B)) B.copy(g, I);
                    else throw TypeError('"list" argument must be an Array of Buffers');
                    I += B.length
                }
                return g
            }, i.byteLength = s, i.prototype._isBuffer = !0, i.prototype.swap16 = function() {
                var A = this.length;
                if (A % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < A; e += 2) f(this, e, e + 1);
                return this
            }, i.prototype.swap32 = function() {
                var A = this.length;
                if (A % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < A; e += 4) f(this, e, e + 3), f(this, e + 1, e + 2);
                return this
            }, i.prototype.swap64 = function() {
                var A = this.length;
                if (A % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < A; e += 8) f(this, e, e + 7), f(this, e + 1, e + 6), f(this, e + 2, e + 5), f(this, e + 3, e + 4);
                return this
            }, i.prototype.toString = function() {
                var A = this.length;
                return 0 === A ? "" : 0 == arguments.length ? l(this, 0, A) : h.apply(this, arguments)
            }, i.prototype.toLocaleString = i.prototype.toString, i.prototype.equals = function(A) {
                if (!i.isBuffer(A)) throw TypeError("Argument must be a Buffer");
                return this === A || 0 === i.compare(this, A)
            }, i.prototype.inspect = function() {
                var A = "",
                    t = e.h2;
                return A = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (A += " ... "), "<Buffer " + A + ">"
            }, B && (i.prototype[B] = i.prototype.inspect), i.prototype.compare = function(A, e, t, g, I) {
                if (U(A, Uint8Array) && (A = i.from(A, A.offset, A.byteLength)), !i.isBuffer(A)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof A);
                if (void 0 === e && (e = 0), void 0 === t && (t = A ? A.length : 0), void 0 === g && (g = 0), void 0 === I && (I = this.length), e < 0 || t > A.length || g < 0 || I > this.length) throw RangeError("out of range index");
                if (g >= I && e >= t) return 0;
                if (g >= I) return -1;
                if (e >= t) return 1;
                if (e >>>= 0, t >>>= 0, g >>>= 0, I >>>= 0, this === A) return 0;
                for (var B = I - g, r = t - e, C = Math.min(B, r), o = this.slice(g, I), E = A.slice(e, t), Q = 0; Q < C; ++Q)
                    if (o[Q] !== E[Q]) {
                        B = o[Q], r = E[Q];
                        break
                    }
                return B < r ? -1 : r < B ? 1 : 0
            }, i.prototype.includes = function(A, e, t) {
                return -1 !== this.indexOf(A, e, t)
            }, i.prototype.indexOf = function(A, e, t) {
                return c(this, A, e, t, !0)
            }, i.prototype.lastIndexOf = function(A, e, t) {
                return c(this, A, e, t, !1)
            }, i.prototype.write = function(A, e, t, g) {
                if (void 0 === e) g = "utf8", t = this.length, e = 0;
                else if (void 0 === t && "string" == typeof e) g = e, t = this.length, e = 0;
                else if (isFinite(e)) e >>>= 0, isFinite(t) ? (t >>>= 0, void 0 === g && (g = "utf8")) : (g = t, t = void 0);
                else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                var I, B, r, i, C, o, E, Q, n = this.length - e;
                if ((void 0 === t || t > n) && (t = n), A.length > 0 && (t < 0 || e < 0) || e > this.length) throw RangeError("Attempt to write outside buffer bounds");
                g || (g = "utf8");
                for (var a = !1;;) switch (g) {
                    case "hex":
                        return function(A, e, t, g) {
                            t = Number(t) || 0;
                            var I = A.length - t;
                            g ? (g = Number(g)) > I && (g = I) : g = I;
                            var B = e.length;
                            g > B / 2 && (g = B / 2);
                            for (var r = 0; r < g; ++r) {
                                var i = parseInt(e.substr(2 * r, 2), 16);
                                if (i != i) break;
                                A[t + r] = i
                            }
                            return r
                        }(this, A, e, t);
                    case "utf8":
                    case "utf-8":
                        return I = e, B = t, S(G(A, this.length - I), this, I, B);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r = e, i = t, S(function(A) {
                            for (var e = [], t = 0; t < A.length; ++t) e.push(255 & A.charCodeAt(t));
                            return e
                        }(A), this, r, i);
                    case "base64":
                        return C = e, o = t, S(R(A), this, C, o);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return E = e, Q = t, S(function(A, e) {
                            for (var t, g, I = [], B = 0; B < A.length && !((e -= 2) < 0); ++B) g = (t = A.charCodeAt(B)) >> 8, I.push(t % 256), I.push(g);
                            return I
                        }(A, this.length - E), this, E, Q);
                    default:
                        if (a) throw TypeError("Unknown encoding: " + g);
                        g = ("" + g).toLowerCase(), a = !0
                }
            }, i.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }, i.prototype.slice = function(A, e) {
                var t = this.length;
                A = ~~A, e = void 0 === e ? t : ~~e, A < 0 ? (A += t) < 0 && (A = 0) : A > t && (A = t), e < 0 ? (e += t) < 0 && (e = 0) : e > t && (e = t), e < A && (e = A);
                var g = this.subarray(A, e);
                return Object.setPrototypeOf(g, i.prototype), g
            }, i.prototype.readUintLE = i.prototype.readUIntLE = function(A, e, t) {
                A >>>= 0, e >>>= 0, t || w(A, e, this.length);
                for (var g = this[A], I = 1, B = 0; ++B < e && (I *= 256);) g += this[A + B] * I;
                return g
            }, i.prototype.readUintBE = i.prototype.readUIntBE = function(A, e, t) {
                A >>>= 0, e >>>= 0, t || w(A, e, this.length);
                for (var g = this[A + --e], I = 1; e > 0 && (I *= 256);) g += this[A + --e] * I;
                return g
            }, i.prototype.readUint8 = i.prototype.readUInt8 = function(A, e) {
                return A >>>= 0, e || w(A, 1, this.length), this[A]
            }, i.prototype.readUint16LE = i.prototype.readUInt16LE = function(A, e) {
                return A >>>= 0, e || w(A, 2, this.length), this[A] | this[A + 1] << 8
            }, i.prototype.readUint16BE = i.prototype.readUInt16BE = function(A, e) {
                return A >>>= 0, e || w(A, 2, this.length), this[A] << 8 | this[A + 1]
            }, i.prototype.readUint32LE = i.prototype.readUInt32LE = function(A, e) {
                return A >>>= 0, e || w(A, 4, this.length), (this[A] | this[A + 1] << 8 | this[A + 2] << 16) + 16777216 * this[A + 3]
            }, i.prototype.readUint32BE = i.prototype.readUInt32BE = function(A, e) {
                return A >>>= 0, e || w(A, 4, this.length), 16777216 * this[A] + (this[A + 1] << 16 | this[A + 2] << 8 | this[A + 3])
            }, i.prototype.readIntLE = function(A, e, t) {
                A >>>= 0, e >>>= 0, t || w(A, e, this.length);
                for (var g = this[A], I = 1, B = 0; ++B < e && (I *= 256);) g += this[A + B] * I;
                return g >= (I *= 128) && (g -= Math.pow(2, 8 * e)), g
            }, i.prototype.readIntBE = function(A, e, t) {
                A >>>= 0, e >>>= 0, t || w(A, e, this.length);
                for (var g = e, I = 1, B = this[A + --g]; g > 0 && (I *= 256);) B += this[A + --g] * I;
                return B >= (I *= 128) && (B -= Math.pow(2, 8 * e)), B
            }, i.prototype.readInt8 = function(A, e) {
                return (A >>>= 0, e || w(A, 1, this.length), 128 & this[A]) ? -((255 - this[A] + 1) * 1) : this[A]
            }, i.prototype.readInt16LE = function(A, e) {
                A >>>= 0, e || w(A, 2, this.length);
                var t = this[A] | this[A + 1] << 8;
                return 32768 & t ? 4294901760 | t : t
            }, i.prototype.readInt16BE = function(A, e) {
                A >>>= 0, e || w(A, 2, this.length);
                var t = this[A + 1] | this[A] << 8;
                return 32768 & t ? 4294901760 | t : t
            }, i.prototype.readInt32LE = function(A, e) {
                return A >>>= 0, e || w(A, 4, this.length), this[A] | this[A + 1] << 8 | this[A + 2] << 16 | this[A + 3] << 24
            }, i.prototype.readInt32BE = function(A, e) {
                return A >>>= 0, e || w(A, 4, this.length), this[A] << 24 | this[A + 1] << 16 | this[A + 2] << 8 | this[A + 3]
            }, i.prototype.readFloatLE = function(A, e) {
                return A >>>= 0, e || w(A, 4, this.length), I.read(this, A, !0, 23, 4)
            }, i.prototype.readFloatBE = function(A, e) {
                return A >>>= 0, e || w(A, 4, this.length), I.read(this, A, !1, 23, 4)
            }, i.prototype.readDoubleLE = function(A, e) {
                return A >>>= 0, e || w(A, 8, this.length), I.read(this, A, !0, 52, 8)
            }, i.prototype.readDoubleBE = function(A, e) {
                return A >>>= 0, e || w(A, 8, this.length), I.read(this, A, !1, 52, 8)
            }, i.prototype.writeUintLE = i.prototype.writeUIntLE = function(A, e, t, g) {
                if (A = +A, e >>>= 0, t >>>= 0, !g) {
                    var I = Math.pow(2, 8 * t) - 1;
                    y(this, A, e, t, I, 0)
                }
                var B = 1,
                    r = 0;
                for (this[e] = 255 & A; ++r < t && (B *= 256);) this[e + r] = A / B & 255;
                return e + t
            }, i.prototype.writeUintBE = i.prototype.writeUIntBE = function(A, e, t, g) {
                if (A = +A, e >>>= 0, t >>>= 0, !g) {
                    var I = Math.pow(2, 8 * t) - 1;
                    y(this, A, e, t, I, 0)
                }
                var B = t - 1,
                    r = 1;
                for (this[e + B] = 255 & A; --B >= 0 && (r *= 256);) this[e + B] = A / r & 255;
                return e + t
            }, i.prototype.writeUint8 = i.prototype.writeUInt8 = function(A, e, t) {
                return A = +A, e >>>= 0, t || y(this, A, e, 1, 255, 0), this[e] = 255 & A, e + 1
            }, i.prototype.writeUint16LE = i.prototype.writeUInt16LE = function(A, e, t) {
                return A = +A, e >>>= 0, t || y(this, A, e, 2, 65535, 0), this[e] = 255 & A, this[e + 1] = A >>> 8, e + 2
            }, i.prototype.writeUint16BE = i.prototype.writeUInt16BE = function(A, e, t) {
                return A = +A, e >>>= 0, t || y(this, A, e, 2, 65535, 0), this[e] = A >>> 8, this[e + 1] = 255 & A, e + 2
            }, i.prototype.writeUint32LE = i.prototype.writeUInt32LE = function(A, e, t) {
                return A = +A, e >>>= 0, t || y(this, A, e, 4, 4294967295, 0), this[e + 3] = A >>> 24, this[e + 2] = A >>> 16, this[e + 1] = A >>> 8, this[e] = 255 & A, e + 4
            }, i.prototype.writeUint32BE = i.prototype.writeUInt32BE = function(A, e, t) {
                return A = +A, e >>>= 0, t || y(this, A, e, 4, 4294967295, 0), this[e] = A >>> 24, this[e + 1] = A >>> 16, this[e + 2] = A >>> 8, this[e + 3] = 255 & A, e + 4
            }, i.prototype.writeIntLE = function(A, e, t, g) {
                if (A = +A, e >>>= 0, !g) {
                    var I = Math.pow(2, 8 * t - 1);
                    y(this, A, e, t, I - 1, -I)
                }
                var B = 0,
                    r = 1,
                    i = 0;
                for (this[e] = 255 & A; ++B < t && (r *= 256);) A < 0 && 0 === i && 0 !== this[e + B - 1] && (i = 1), this[e + B] = (A / r >> 0) - i & 255;
                return e + t
            }, i.prototype.writeIntBE = function(A, e, t, g) {
                if (A = +A, e >>>= 0, !g) {
                    var I = Math.pow(2, 8 * t - 1);
                    y(this, A, e, t, I - 1, -I)
                }
                var B = t - 1,
                    r = 1,
                    i = 0;
                for (this[e + B] = 255 & A; --B >= 0 && (r *= 256);) A < 0 && 0 === i && 0 !== this[e + B + 1] && (i = 1), this[e + B] = (A / r >> 0) - i & 255;
                return e + t
            }, i.prototype.writeInt8 = function(A, e, t) {
                return A = +A, e >>>= 0, t || y(this, A, e, 1, 127, -128), A < 0 && (A = 255 + A + 1), this[e] = 255 & A, e + 1
            }, i.prototype.writeInt16LE = function(A, e, t) {
                return A = +A, e >>>= 0, t || y(this, A, e, 2, 32767, -32768), this[e] = 255 & A, this[e + 1] = A >>> 8, e + 2
            }, i.prototype.writeInt16BE = function(A, e, t) {
                return A = +A, e >>>= 0, t || y(this, A, e, 2, 32767, -32768), this[e] = A >>> 8, this[e + 1] = 255 & A, e + 2
            }, i.prototype.writeInt32LE = function(A, e, t) {
                return A = +A, e >>>= 0, t || y(this, A, e, 4, 2147483647, -2147483648), this[e] = 255 & A, this[e + 1] = A >>> 8, this[e + 2] = A >>> 16, this[e + 3] = A >>> 24, e + 4
            }, i.prototype.writeInt32BE = function(A, e, t) {
                return A = +A, e >>>= 0, t || y(this, A, e, 4, 2147483647, -2147483648), A < 0 && (A = 4294967295 + A + 1), this[e] = A >>> 24, this[e + 1] = A >>> 16, this[e + 2] = A >>> 8, this[e + 3] = 255 & A, e + 4
            }, i.prototype.writeFloatLE = function(A, e, t) {
                return d(this, A, e, !0, t)
            }, i.prototype.writeFloatBE = function(A, e, t) {
                return d(this, A, e, !1, t)
            }, i.prototype.writeDoubleLE = function(A, e, t) {
                return p(this, A, e, !0, t)
            }, i.prototype.writeDoubleBE = function(A, e, t) {
                return p(this, A, e, !1, t)
            }, i.prototype.copy = function(A, e, t, g) {
                if (!i.isBuffer(A)) throw TypeError("argument should be a Buffer");
                if (t || (t = 0), g || 0 === g || (g = this.length), e >= A.length && (e = A.length), e || (e = 0), g > 0 && g < t && (g = t), g === t || 0 === A.length || 0 === this.length) return 0;
                if (e < 0) throw RangeError("targetStart out of bounds");
                if (t < 0 || t >= this.length) throw RangeError("Index out of range");
                if (g < 0) throw RangeError("sourceEnd out of bounds");
                g > this.length && (g = this.length), A.length - e < g - t && (g = A.length - e + t);
                var I = g - t;
                return this === A && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, t, g) : Uint8Array.prototype.set.call(A, this.subarray(t, g), e), I
            }, i.prototype.fill = function(A, e, t, g) {
                if ("string" == typeof A) {
                    if ("string" == typeof e ? (g = e, e = 0, t = this.length) : "string" == typeof t && (g = t, t = this.length), void 0 !== g && "string" != typeof g) throw TypeError("encoding must be a string");
                    if ("string" == typeof g && !i.isEncoding(g)) throw TypeError("Unknown encoding: " + g);
                    if (1 === A.length) {
                        var I, B = A.charCodeAt(0);
                        ("utf8" === g && B < 128 || "latin1" === g) && (A = B)
                    }
                } else "number" == typeof A ? A &= 255 : "boolean" == typeof A && (A = Number(A));
                if (e < 0 || this.length < e || this.length < t) throw RangeError("Out of range index");
                if (t <= e) return this;
                if (e >>>= 0, t = void 0 === t ? this.length : t >>> 0, A || (A = 0), "number" == typeof A)
                    for (I = e; I < t; ++I) this[I] = A;
                else {
                    var r = i.isBuffer(A) ? A : i.from(A, g),
                        C = r.length;
                    if (0 === C) throw TypeError('The value "' + A + '" is invalid for argument "value"');
                    for (I = 0; I < t - e; ++I) this[I + e] = r[I % C]
                }
                return this
            };
            var F = /[^+/0-9A-Za-z-_]/g;

            function G(A, e) {
                e = e || 1 / 0;
                for (var t, g = A.length, I = null, B = [], r = 0; r < g; ++r) {
                    if ((t = A.charCodeAt(r)) > 55295 && t < 57344) {
                        if (!I) {
                            if (t > 56319 || r + 1 === g) {
                                (e -= 3) > -1 && B.push(239, 191, 189);
                                continue
                            }
                            I = t;
                            continue
                        }
                        if (t < 56320) {
                            (e -= 3) > -1 && B.push(239, 191, 189), I = t;
                            continue
                        }
                        t = (I - 55296 << 10 | t - 56320) + 65536
                    } else I && (e -= 3) > -1 && B.push(239, 191, 189);
                    if (I = null, t < 128) {
                        if ((e -= 1) < 0) break;
                        B.push(t)
                    } else if (t < 2048) {
                        if ((e -= 2) < 0) break;
                        B.push(t >> 6 | 192, 63 & t | 128)
                    } else if (t < 65536) {
                        if ((e -= 3) < 0) break;
                        B.push(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128)
                    } else if (t < 1114112) {
                        if ((e -= 4) < 0) break;
                        B.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, 63 & t | 128)
                    } else throw Error("Invalid code point")
                }
                return B
            }

            function R(A) {
                return g.toByteArray(function(A) {
                    if ((A = (A = A.split("=")[0]).trim().replace(F, "")).length < 2) return "";
                    for (; A.length % 4 != 0;) A += "=";
                    return A
                }(A))
            }

            function S(A, e, t, g) {
                for (var I = 0; I < g && !(I + t >= e.length) && !(I >= A.length); ++I) e[I + t] = A[I];
                return I
            }

            function U(A, e) {
                return A instanceof e || null != A && null != A.constructor && null != A.constructor.name && A.constructor.name === e.name
            }
            var L = function() {
                for (var A = "0123456789abcdef", e = Array(256), t = 0; t < 16; ++t)
                    for (var g = 16 * t, I = 0; I < 16; ++I) e[g + I] = A[t] + A[I];
                return e
            }()
        },
        296: function(A) {
            function e(A, e, t) {
                function g() {
                    var o = Date.now() - i;
                    o < e && o >= 0 ? I = setTimeout(g, e - o) : (I = null, t || (C = A.apply(r, B), r = B = null))
                }
                null == e && (e = 100);
                var I, B, r, i, C, o = function() {
                    r = this, B = arguments, i = Date.now();
                    var o = t && !I;
                    return I || (I = setTimeout(g, e)), o && (C = A.apply(r, B), r = B = null), C
                };
                return o.clear = function() {
                    I && (clearTimeout(I), I = null)
                }, o.flush = function() {
                    I && (C = A.apply(r, B), r = B = null, clearTimeout(I), I = null)
                }, o
            }
            e.debounce = e, A.exports = e
        },
        2975: function(A, e, t) {
            "use strict";

            function g(A, e, t, g) {
                return new(t || (t = Promise))(function(I, B) {
                    function r(A) {
                        try {
                            C(g.next(A))
                        } catch (e) {
                            B(e)
                        }
                    }

                    function i(A) {
                        try {
                            C(g.throw(A))
                        } catch (e) {
                            B(e)
                        }
                    }

                    function C(A) {
                        var e;
                        A.done ? I(A.value) : ((e = A.value) instanceof t ? e : new t(function(A) {
                            A(e)
                        })).then(r, i)
                    }
                    C((g = g.apply(A, e || [])).next())
                })
            }
            t.d(e, {
                M: function() {
                    return n
                }
            });
            let I = ["geforce 320m", "geforce 8600", "geforce 8600m gt", "geforce 8800 gs", "geforce 8800 gt", "geforce 9400", "geforce 9400m g", "geforce 9400m", "geforce 9600m gt", "geforce 9600m", "geforce fx go5200", "geforce gt 120", "geforce gt 130", "geforce gt 330m", "geforce gtx 285", "google swiftshader", "intel g41", "intel g45", "intel gma 4500mhd", "intel gma x3100", "intel hd 3000", "intel q45", "legacy", "mali-2", "mali-3", "mali-4", "quadro fx 1500", "quadro fx 4", "quadro fx 5", "radeon hd 2400", "radeon hd 2600", "radeon hd 4670", "radeon hd 4850", "radeon hd 4870", "radeon hd 5670", "radeon hd 5750", "radeon hd 6290", "radeon hd 6300", "radeon hd 6310", "radeon hd 6320", "radeon hd 6490m", "radeon hd 6630m", "radeon hd 6750m", "radeon hd 6770m", "radeon hd 6970m", "sgx 543", "sgx543"];

            function B(A) {
                return A = A.toLowerCase().replace(/^angle ?\((.+)\)*$/, "$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g, "")
            }
            let r = "undefined" == typeof window,
                i = (() => {
                    if (r) return;
                    let {
                        userAgent: A,
                        platform: e,
                        maxTouchPoints: t
                    } = window.navigator, g = /(iphone|ipod|ipad)/i.test(A), I = "iPad" === e || "MacIntel" === e && t > 0 && !window.MSStream;
                    return {
                        isIpad: I,
                        isMobile: /android/i.test(A) || g || I,
                        isSafari12: /Version\/12.+Safari/.test(A)
                    }
                })(),
                C = [],
                o = [];

            function E(A) {
                return null != A
            }
            class Q extends Error {
                constructor(A) {
                    super(A), Object.setPrototypeOf(this, new.target.prototype)
                }
            }
            let n = ({
                mobileTiers: A = [0, 15, 30, 60],
                desktopTiers: e = [0, 15, 30, 60],
                override: t = {},
                glContext: n,
                failIfMajorPerformanceCaveat: a = !1,
                benchmarksURL: s = "https://unpkg.com/detect-gpu@4.0.8/dist/benchmarks"
            } = {}) => g(void 0, void 0, void 0, function*() {
                let h = {};
                if (r) return {
                    tier: 0,
                    type: "SSR"
                };
                let {
                    isIpad: f = !!(null == i ? void 0 : i.isIpad),
                    isMobile: c = !!(null == i ? void 0 : i.isMobile),
                    screenSize: u = window.screen,
                    loadBenchmarks: l = A => g(void 0, void 0, void 0, function*() {
                        let e = yield fetch(`${s}/${A}`).then(A => A.json());
                        if (4 > parseInt(e.shift().split(".")[0], 10)) throw new Q("Detect GPU benchmark data is out of date. Please update to version 4x");
                        return e
                    })
                } = t, {
                    renderer: w
                } = t, y = (A, e, t, g, I) => ({
                    device: I,
                    fps: g,
                    gpu: t,
                    isMobile: c,
                    tier: A,
                    type: e
                }), D, d = "";
                if (w) D = [w = B(w)];
                else {
                    var p;
                    let F = n || function(A, e = !1) {
                        let t = {
                            alpha: !1,
                            antialias: !1,
                            depth: !1,
                            failIfMajorPerformanceCaveat: e,
                            powerPreference: "high-performance",
                            stencil: !1
                        };
                        A && delete t.powerPreference;
                        let g = window.document.createElement("canvas"),
                            I = g.getContext("webgl", t) || g.getContext("experimental-webgl", t);
                        return null != I ? I : void 0
                    }(null == i ? void 0 : i.isSafari12, a);
                    if (!F) return y(0, "WEBGL_UNSUPPORTED");
                    let G = F.getExtension("WEBGL_debug_renderer_info");
                    if (G && (w = F.getParameter(G.UNMASKED_RENDERER_WEBGL)), !w) return y(1, "FALLBACK");
                    d = w, D = "apple gpu" === (p = w = B(w)) ? function(A, e, t) {
                        let g;
                        if (!t) return [e];
                        let I = function(A) {
                                let e = A.createShader(35633),
                                    t = A.createShader(35632),
                                    g = A.createProgram();
                                if (!(t && e && g)) return;
                                A.shaderSource(e, "\n    precision highp float;\n    attribute vec3 aPosition;\n    varying float vvv;\n    void main() {\n      vvv = 0.31622776601683794;\n      gl_Position = vec4(aPosition, 1.0);\n    }\n  "), A.shaderSource(t, "\n    precision highp float;\n    varying float vvv;\n    void main() {\n      vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;\n      enc = fract(enc);\n      enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);\n      gl_FragColor = enc;\n    }\n  "), A.compileShader(e), A.compileShader(t), A.attachShader(g, e), A.attachShader(g, t), A.linkProgram(g), A.detachShader(g, e), A.detachShader(g, t), A.deleteShader(e), A.deleteShader(t), A.useProgram(g);
                                let I = A.createBuffer();
                                A.bindBuffer(34962, I), A.bufferData(34962, new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 35044);
                                let B = A.getAttribLocation(g, "aPosition");
                                A.vertexAttribPointer(B, 3, 5126, !1, 0, 0), A.enableVertexAttribArray(B), A.clearColor(1, 1, 1, 1), A.clear(16384), A.viewport(0, 0, 1, 1), A.drawArrays(4, 0, 3);
                                let r = new Uint8Array(4);
                                return A.readPixels(0, 0, 1, 1, 6408, 5121, r), A.deleteProgram(g), A.deleteBuffer(I), r.join("")
                            }(A),
                            B = "801621810",
                            r = "8016218135",
                            C = "80162181161",
                            o = (null == i ? void 0 : i.isIpad) ? [
                                ["a7", C, 12],
                                ["a8", r, 15],
                                ["a8x", r, 15],
                                ["a9", r, 15],
                                ["a9x", r, 15],
                                ["a10", r, 15],
                                ["a10x", r, 15],
                                ["a12", B, 15],
                                ["a12x", B, 15],
                                ["a12z", B, 15],
                                ["a14", B, 15],
                                ["m1", B, 15]
                            ] : [
                                ["a7", C, 12],
                                ["a8", r, 12],
                                ["a9", r, 15],
                                ["a10", r, 15],
                                ["a11", B, 15],
                                ["a12", B, 15],
                                ["a13", B, 15],
                                ["a14", B, 15]
                            ];
                        return "80162181255" === I ? g = o.filter(([, , A]) => A >= 14) : (g = o.filter(([, A]) => A === I)).length || (g = o), g.map(([A]) => `apple ${A} gpu`)
                    }(F, p, c) : [p]
                }
                let R = (yield Promise.all(D.map(A => g(void 0, void 0, void 0, function*() {
                    var e;
                    let t;
                    let g = (A => {
                        for (let e of c ? ["adreno", "apple", "mali-t", "mali", "nvidia", "powervr"] : ["intel", "apple", "amd", "radeon", "nvidia", "geforce"])
                            if (A.includes(e)) return e
                    })(A);
                    if (!g) return;
                    let I = `${c?"m":"d"}-${g}${f?"-ipad":""}.json`,
                        B = h[I] = null !== (e = h[I]) && void 0 !== e ? e : l(I);
                    try {
                        t = yield B
                    } catch (r) {
                        if (r instanceof Q) throw r;
                        return
                    }
                    let i = function(A) {
                            var e;
                            let t = (A = A.replace(/\([^)]+\)/, "")).match(/\d+/) || A.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g);
                            return null !== (e = null == t ? void 0 : t.join("").replace(/\W|amd/g, "")) && void 0 !== e ? e : ""
                        }(A),
                        E = t.filter(([, A]) => A === i);
                    E.length || (E = t.filter(([e]) => e.includes(A)));
                    let n = E.length;
                    if (0 === n) return;
                    let a, [s, , , w] = n > 1 ? E.map(e => [e, function(A, e) {
                            if (A === e) return 0;
                            let t = A;
                            A.length > e.length && (A = e, e = t);
                            let g = A.length,
                                I = e.length;
                            for (; g > 0 && A.charCodeAt(~-g) === e.charCodeAt(~-I);) g--, I--;
                            let B, r = 0;
                            for (; r < g && A.charCodeAt(r) === e.charCodeAt(r);) r++;
                            if (g -= r, I -= r, 0 === g) return I;
                            let i, E, Q = 0,
                                n = 0,
                                a = 0;
                            for (; n < g;) o[n] = A.charCodeAt(r + n), C[n] = ++n;
                            for (; a < I;)
                                for (B = e.charCodeAt(r + a), i = a++, Q = a, n = 0; n < g; n++) E = B === o[n] ? i : i + 1, i = C[n], Q = C[n] = i > Q ? E > Q ? Q + 1 : E : E > i ? i + 1 : E;
                            return Q
                        }(A, e[0])]).sort(([, A], [, e]) => A - e)[0][0] : E[0],
                        y = Number.MAX_VALUE,
                        {
                            devicePixelRatio: D
                        } = window,
                        d = u.width * D * u.height * D;
                    for (let p of w) {
                        let [F, G] = p, R = F * G, S = Math.abs(d - R);
                        S < y && (y = S, a = p)
                    }
                    if (!a) return;
                    let [, , U, L] = a;
                    return [y, U, s, L]
                })))).filter(E).sort(([A = Number.MAX_VALUE, e], [t = Number.MAX_VALUE, g]) => A === t ? e - g : A - t);
                if (!R.length) {
                    let S = I.find(A => w.includes(A));
                    return S ? y(0, "BLOCKLISTED", S) : y(1, "FALLBACK", `${w} (${d})`)
                }
                let [, U, L, k] = R[0];
                if (-1 === U) return y(0, "BLOCKLISTED", L, U, k);
                let m = c ? A : e,
                    N = 0;
                for (let M = 0; M < m.length; M++) U >= m[M] && (N = M);
                return y(N, "BENCHMARK", L, U, k)
            })
        },
        645: function(A, e) { /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
            e.read = function(A, e, t, g, I) {
                var B, r, i = 8 * I - g - 1,
                    C = (1 << i) - 1,
                    o = C >> 1,
                    E = -7,
                    Q = t ? I - 1 : 0,
                    n = t ? -1 : 1,
                    a = A[e + Q];
                for (Q += n, B = a & (1 << -E) - 1, a >>= -E, E += i; E > 0; B = 256 * B + A[e + Q], Q += n, E -= 8);
                for (r = B & (1 << -E) - 1, B >>= -E, E += g; E > 0; r = 256 * r + A[e + Q], Q += n, E -= 8);
                if (0 === B) B = 1 - o;
                else {
                    if (B === C) return r ? NaN : (a ? -1 : 1) * (1 / 0);
                    r += Math.pow(2, g), B -= o
                }
                return (a ? -1 : 1) * r * Math.pow(2, B - g)
            }, e.write = function(A, e, t, g, I, B) {
                var r, i, C, o = 8 * B - I - 1,
                    E = (1 << o) - 1,
                    Q = E >> 1,
                    n = 23 === I ? 5960464477539062e-23 : 0,
                    a = g ? 0 : B - 1,
                    s = g ? 1 : -1,
                    h = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (isNaN(e = Math.abs(e)) || e === 1 / 0 ? (i = isNaN(e) ? 1 : 0, r = E) : (r = Math.floor(Math.log(e) / Math.LN2), e * (C = Math.pow(2, -r)) < 1 && (r--, C *= 2), r + Q >= 1 ? e += n / C : e += n * Math.pow(2, 1 - Q), e * C >= 2 && (r++, C /= 2), r + Q >= E ? (i = 0, r = E) : r + Q >= 1 ? (i = (e * C - 1) * Math.pow(2, I), r += Q) : (i = e * Math.pow(2, Q - 1) * Math.pow(2, I), r = 0)); I >= 8; A[t + a] = 255 & i, a += s, i /= 256, I -= 8);
                for (r = r << I | i, o += I; o > 0; A[t + a] = 255 & r, a += s, r /= 256, o -= 8);
                A[t + a - s] |= 128 * h
            }
        },
        5878: function(A, e) {
            "use strict";
            e.Z = function(A) {
                return function(e) {
                    A.forEach(function(A) {
                        "function" == typeof A ? A(e) : null != A && (A.current = e)
                    })
                }
            }
        },
        4105: function(A, e, t) {
            "use strict";
            let g, I, B, r;
            t.d(e, {
                a: function() {
                    return w
                }
            });
            var i = t(9477);
            class C {
                constructor(A = 4) {
                    this.pool = A, this.queue = [], this.workers = [], this.workersResolve = [], this.workerStatus = 0
                }
                _initWorker(A) {
                    if (!this.workers[A]) {
                        let e = this.workerCreator();
                        e.addEventListener("message", this._onMessage.bind(this, A)), this.workers[A] = e
                    }
                }
                _getIdleWorker() {
                    for (let A = 0; A < this.pool; A++)
                        if (!(this.workerStatus & 1 << A)) return A;
                    return -1
                }
                _onMessage(A, e) {
                    let t = this.workersResolve[A];
                    if (t && t(e), this.queue.length) {
                        let {
                            resolve: g,
                            msg: I,
                            transfer: B
                        } = this.queue.shift();
                        this.workersResolve[A] = g, this.workers[A].postMessage(I, B)
                    } else this.workerStatus ^= 1 << A
                }
                setWorkerCreator(A) {
                    this.workerCreator = A
                }
                setWorkerLimit(A) {
                    this.pool = A
                }
                postMessage(A, e) {
                    return new Promise(t => {
                        let g = this._getIdleWorker(); - 1 !== g ? (this._initWorker(g), this.workerStatus |= 1 << g, this.workersResolve[g] = t, this.workers[g].postMessage(A, e)) : this.queue.push({
                            resolve: t,
                            msg: A,
                            transfer: e
                        })
                    })
                }
                dispose() {
                    this.workers.forEach(A => A.terminate()), this.workersResolve.length = 0, this.workers.length = 0, this.queue.length = 0, this.workerStatus = 0
                }
            }
            var o = t(8764).lW;
            class E {
                constructor() {
                    this.vkFormat = 0, this.typeSize = 1, this.pixelWidth = 0, this.pixelHeight = 0, this.pixelDepth = 0, this.layerCount = 0, this.faceCount = 1, this.supercompressionScheme = 0, this.levels = [], this.dataFormatDescriptor = [{
                        vendorId: 0,
                        descriptorType: 0,
                        descriptorBlockSize: 0,
                        versionNumber: 2,
                        colorModel: 0,
                        colorPrimaries: 1,
                        transferFunction: 2,
                        flags: 0,
                        texelBlockDimension: [0, 0, 0, 0],
                        bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0],
                        samples: []
                    }], this.keyValue = {}, this.globalData = null
                }
            }
            class Q {
                constructor(A, e, t, g) {
                    this._dataView = void 0, this._littleEndian = void 0, this._offset = void 0, this._dataView = new DataView(A.buffer, A.byteOffset + e, t), this._littleEndian = g, this._offset = 0
                }
                _nextUint8() {
                    let A = this._dataView.getUint8(this._offset);
                    return this._offset += 1, A
                }
                _nextUint16() {
                    let A = this._dataView.getUint16(this._offset, this._littleEndian);
                    return this._offset += 2, A
                }
                _nextUint32() {
                    let A = this._dataView.getUint32(this._offset, this._littleEndian);
                    return this._offset += 4, A
                }
                _nextUint64() {
                    let A = this._dataView.getUint32(this._offset, this._littleEndian),
                        e = this._dataView.getUint32(this._offset + 4, this._littleEndian);
                    return this._offset += 8, A + 4294967296 * e
                }
                _nextInt32() {
                    let A = this._dataView.getInt32(this._offset, this._littleEndian);
                    return this._offset += 4, A
                }
                _skip(A) {
                    return this._offset += A, this
                }
                _scan(A, e = 0) {
                    let t = this._offset,
                        g = 0;
                    for (; this._dataView.getUint8(this._offset) !== e && g < A;) g++, this._offset++;
                    return g < A && this._offset++, new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + t, g)
                }
            }
            new Uint8Array([0]);
            let n = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];

            function a(A) {
                return "undefined" != typeof TextDecoder ? new TextDecoder().decode(A) : o.from(A).toString("utf8")
            }
            var s = t(8764).lW;
            let h = {
                env: {
                    emscripten_notify_memory_growth: function(A) {
                        B = new Uint8Array(I.exports.memory.buffer)
                    }
                }
            };
            class f {
                init() {
                    return g || (g = "undefined" != typeof fetch ? fetch("data:application/wasm;base64," + c).then(A => A.arrayBuffer()).then(A => WebAssembly.instantiate(A, h)).then(this._init) : WebAssembly.instantiate(s.from(c, "base64"), h).then(this._init))
                }
                _init(A) {
                    I = A.instance, h.env.emscripten_notify_memory_growth(0)
                }
                decode(A, e = 0) {
                    if (!I) throw Error("ZSTDDecoder: Await .init() before decoding.");
                    let t = A.byteLength,
                        g = I.exports.malloc(t);
                    B.set(A, g), e = e || Number(I.exports.ZSTD_findDecompressedSize(g, t));
                    let r = I.exports.malloc(e),
                        i = I.exports.ZSTD_decompress(r, e, g, t),
                        C = B.slice(r, r + i);
                    return I.exports.free(g), I.exports.free(r), C
                }
            }
            let c = "AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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",
                u = new WeakMap,
                l = 0;
            class w extends i.Loader {
                constructor(A) {
                    super(A), this.transcoderPath = "", this.transcoderBinary = null, this.transcoderPending = null, this.workerPool = new C, this.workerSourceURL = "", this.workerConfig = null, "undefined" != typeof MSC_TRANSCODER && console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')
                }
                setTranscoderPath(A) {
                    return this.transcoderPath = A, this
                }
                setWorkerLimit(A) {
                    return this.workerPool.setWorkerLimit(A), this
                }
                detectSupport(A) {
                    return this.workerConfig = {
                        astcSupported: A.extensions.has("WEBGL_compressed_texture_astc"),
                        etc1Supported: A.extensions.has("WEBGL_compressed_texture_etc1"),
                        etc2Supported: A.extensions.has("WEBGL_compressed_texture_etc"),
                        dxtSupported: A.extensions.has("WEBGL_compressed_texture_s3tc"),
                        bptcSupported: A.extensions.has("EXT_texture_compression_bptc"),
                        pvrtcSupported: A.extensions.has("WEBGL_compressed_texture_pvrtc") || A.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")
                    }, A.capabilities.isWebGL2 && (this.workerConfig.etc1Supported = !1), this
                }
                init() {
                    if (!this.transcoderPending) {
                        let A = new i.FileLoader(this.manager);
                        A.setPath(this.transcoderPath), A.setWithCredentials(this.withCredentials);
                        let e = A.loadAsync("basis_transcoder.js"),
                            t = new i.FileLoader(this.manager);
                        t.setPath(this.transcoderPath), t.setResponseType("arraybuffer"), t.setWithCredentials(this.withCredentials);
                        let g = t.loadAsync("basis_transcoder.wasm");
                        this.transcoderPending = Promise.all([e, g]).then(([A, e]) => {
                            let t = w.BasisWorker.toString(),
                                g = ["/* constants */", "let _EngineFormat = " + JSON.stringify(w.EngineFormat), "let _TranscoderFormat = " + JSON.stringify(w.TranscoderFormat), "let _BasisFormat = " + JSON.stringify(w.BasisFormat), "/* basis_transcoder.js */", A, "/* worker */", t.substring(t.indexOf("{") + 1, t.lastIndexOf("}"))].join("\n");
                            this.workerSourceURL = URL.createObjectURL(new Blob([g])), this.transcoderBinary = e, this.workerPool.setWorkerCreator(() => {
                                let A = new Worker(this.workerSourceURL),
                                    e = this.transcoderBinary.slice(0);
                                return A.postMessage({
                                    type: "init",
                                    config: this.workerConfig,
                                    transcoderBinary: e
                                }, [e]), A
                            })
                        }), l > 0 && console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."), l++
                    }
                    return this.transcoderPending
                }
                load(A, e, t, g) {
                    if (null === this.workerConfig) throw Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
                    let I = new i.FileLoader(this.manager);
                    I.setResponseType("arraybuffer"), I.setWithCredentials(this.withCredentials), I.load(A, A => {
                        if (u.has(A)) {
                            let t = u.get(A);
                            return t.promise.then(e).catch(g)
                        }
                        this._createTexture(A).then(A => e ? e(A) : null).catch(g)
                    }, t, g)
                }
                _createTextureFrom(A) {
                    let {
                        mipmaps: e,
                        width: t,
                        height: g,
                        format: I,
                        type: B,
                        error: r,
                        dfdTransferFn: C,
                        dfdFlags: o
                    } = A;
                    if ("error" === B) return Promise.reject(r);
                    let E = new i.CompressedTexture(e, t, g, I, i.UnsignedByteType);
                    return E.minFilter = 1 === e.length ? i.LinearFilter : i.LinearMipmapLinearFilter, E.magFilter = i.LinearFilter, E.generateMipmaps = !1, E.needsUpdate = !0, E.encoding = 2 === C ? i.sRGBEncoding : i.LinearEncoding, E.premultiplyAlpha = !!(1 & o), E
                }
                _createTexture(A, e = {}) {
                    let t = function(A) {
                        let e = new Uint8Array(A.buffer, A.byteOffset, n.length);
                        if (e[0] !== n[0] || e[1] !== n[1] || e[2] !== n[2] || e[3] !== n[3] || e[4] !== n[4] || e[5] !== n[5] || e[6] !== n[6] || e[7] !== n[7] || e[8] !== n[8] || e[9] !== n[9] || e[10] !== n[10] || e[11] !== n[11]) throw Error("Missing KTX 2.0 identifier.");
                        let t = new E,
                            g = 17 * Uint32Array.BYTES_PER_ELEMENT,
                            I = new Q(A, n.length, g, !0);
                        t.vkFormat = I._nextUint32(), t.typeSize = I._nextUint32(), t.pixelWidth = I._nextUint32(), t.pixelHeight = I._nextUint32(), t.pixelDepth = I._nextUint32(), t.layerCount = I._nextUint32(), t.faceCount = I._nextUint32();
                        let B = I._nextUint32();
                        t.supercompressionScheme = I._nextUint32();
                        let r = I._nextUint32(),
                            i = I._nextUint32(),
                            C = I._nextUint32(),
                            o = I._nextUint32(),
                            s = I._nextUint64(),
                            h = I._nextUint64(),
                            f = new Q(A, n.length + g, 24 * B, !0);
                        for (let c = 0; c < B; c++) t.levels.push({
                            levelData: new Uint8Array(A.buffer, A.byteOffset + f._nextUint64(), f._nextUint64()),
                            uncompressedByteLength: f._nextUint64()
                        });
                        let u = new Q(A, r, i, !0),
                            l = {
                                vendorId: u._skip(4)._nextUint16(),
                                descriptorType: u._nextUint16(),
                                versionNumber: u._nextUint16(),
                                descriptorBlockSize: u._nextUint16(),
                                colorModel: u._nextUint8(),
                                colorPrimaries: u._nextUint8(),
                                transferFunction: u._nextUint8(),
                                flags: u._nextUint8(),
                                texelBlockDimension: [u._nextUint8(), u._nextUint8(), u._nextUint8(), u._nextUint8()],
                                bytesPlane: [u._nextUint8(), u._nextUint8(), u._nextUint8(), u._nextUint8(), u._nextUint8(), u._nextUint8(), u._nextUint8(), u._nextUint8()],
                                samples: []
                            },
                            w = (l.descriptorBlockSize / 4 - 6) / 4;
                        for (let y = 0; y < w; y++) {
                            let D = {
                                bitOffset: u._nextUint16(),
                                bitLength: u._nextUint8(),
                                channelType: u._nextUint8(),
                                samplePosition: [u._nextUint8(), u._nextUint8(), u._nextUint8(), u._nextUint8()],
                                sampleLower: -1 / 0,
                                sampleUpper: 1 / 0
                            };
                            64 & D.channelType ? (D.sampleLower = u._nextInt32(), D.sampleUpper = u._nextInt32()) : (D.sampleLower = u._nextUint32(), D.sampleUpper = u._nextUint32()), l.samples[y] = D
                        }
                        t.dataFormatDescriptor.length = 0, t.dataFormatDescriptor.push(l);
                        let d = new Q(A, C, o, !0);
                        for (; d._offset < o;) {
                            let p = d._nextUint32(),
                                F = d._scan(p),
                                G = a(F),
                                R = d._scan(p - F.byteLength);
                            t.keyValue[G] = G.match(/^ktx/i) ? a(R) : R, d._offset % 4 && d._skip(4 - d._offset % 4)
                        }
                        if (h <= 0) return t;
                        let S = new Q(A, s, h, !0),
                            U = S._nextUint16(),
                            L = S._nextUint16(),
                            k = S._nextUint32(),
                            m = S._nextUint32(),
                            N = S._nextUint32(),
                            M = S._nextUint32(),
                            q = [];
                        for (let J = 0; J < B; J++) q.push({
                            imageFlags: S._nextUint32(),
                            rgbSliceByteOffset: S._nextUint32(),
                            rgbSliceByteLength: S._nextUint32(),
                            alphaSliceByteOffset: S._nextUint32(),
                            alphaSliceByteLength: S._nextUint32()
                        });
                        let v = s + S._offset,
                            b = v + k,
                            Y = b + m,
                            H = new Uint8Array(A.buffer, A.byteOffset + v, k),
                            x = new Uint8Array(A.buffer, A.byteOffset + b, m),
                            T = new Uint8Array(A.buffer, A.byteOffset + Y, N),
                            _ = new Uint8Array(A.buffer, A.byteOffset + (Y + N), M);
                        return t.globalData = {
                            endpointCount: U,
                            selectorCount: L,
                            imageDescs: q,
                            endpointsData: H,
                            selectorsData: x,
                            tablesData: T,
                            extendedData: _
                        }, t
                    }(new Uint8Array(A));
                    if (0 !== t.vkFormat) return p(t);
                    let g = this.init().then(() => this.workerPool.postMessage({
                        type: "transcode",
                        buffer: A,
                        taskConfig: e
                    }, [A])).then(A => this._createTextureFrom(A.data));
                    return u.set(A, {
                        promise: g
                    }), g
                }
                dispose() {
                    return this.workerPool.dispose(), this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL), l--, this
                }
            }
            w.BasisFormat = {
                ETC1S: 0,
                UASTC_4x4: 1
            }, w.TranscoderFormat = {
                ETC1: 0,
                ETC2: 1,
                BC1: 2,
                BC3: 3,
                BC4: 4,
                BC5: 5,
                BC7_M6_OPAQUE_ONLY: 6,
                BC7_M5: 7,
                PVRTC1_4_RGB: 8,
                PVRTC1_4_RGBA: 9,
                ASTC_4x4: 10,
                ATC_RGB: 11,
                ATC_RGBA_INTERPOLATED_ALPHA: 12,
                RGBA32: 13,
                RGB565: 14,
                BGR565: 15,
                RGBA4444: 16
            }, w.EngineFormat = {
                RGBAFormat: i.RGBAFormat,
                RGBA_ASTC_4x4_Format: i.RGBA_ASTC_4x4_Format,
                RGBA_BPTC_Format: i.RGBA_BPTC_Format,
                RGBA_ETC2_EAC_Format: i.RGBA_ETC2_EAC_Format,
                RGBA_PVRTC_4BPPV1_Format: i.RGBA_PVRTC_4BPPV1_Format,
                RGBA_S3TC_DXT5_Format: i.RGBA_S3TC_DXT5_Format,
                RGB_ETC1_Format: i.RGB_ETC1_Format,
                RGB_ETC2_Format: i.RGB_ETC2_Format,
                RGB_PVRTC_4BPPV1_Format: i.RGB_PVRTC_4BPPV1_Format,
                RGB_S3TC_DXT1_Format: i.RGB_S3TC_DXT1_Format
            }, w.BasisWorker = function() {
                let A, e, t;
                let g = _EngineFormat,
                    I = _TranscoderFormat,
                    B = _BasisFormat;
                self.addEventListener("message", function(r) {
                    let E = r.data;
                    switch (E.type) {
                        case "init":
                            var Q;
                            A = E.config, Q = E.transcoderBinary, e = new Promise(A => {
                                t = {
                                    wasmBinary: Q,
                                    onRuntimeInitialized: A
                                }, BASIS(t)
                            }).then(() => {
                                t.initializeBasis(), void 0 === t.KTX2File && console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")
                            });
                            break;
                        case "transcode":
                            e.then(() => {
                                try {
                                    let {
                                        width: e,
                                        height: r,
                                        hasAlpha: Q,
                                        mipmaps: n,
                                        format: a,
                                        dfdTransferFn: s,
                                        dfdFlags: h
                                    } = function(e) {
                                        let r = new t.KTX2File(new Uint8Array(e));

                                        function E() {
                                            r.close(), r.delete()
                                        }
                                        if (!r.isValid()) throw E(), Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");
                                        let Q = r.isUASTC() ? B.UASTC_4x4 : B.ETC1S,
                                            n = r.getWidth(),
                                            a = r.getHeight(),
                                            s = r.getLevels(),
                                            h = r.getHasAlpha(),
                                            f = r.getDFDTransferFunc(),
                                            c = r.getDFDFlags(),
                                            {
                                                transcoderFormat: u,
                                                engineFormat: l
                                            } = function(e, t, r, E) {
                                                let Q, n;
                                                let a = e === B.ETC1S ? i : C;
                                                for (let s = 0; s < a.length; s++) {
                                                    let h = a[s];
                                                    if (A[h.if] && h.basisFormat.includes(e) && (!E || !(h.transcoderFormat.length < 2)) && (!h.needsPowerOfTwo || o(t) && o(r))) return Q = h.transcoderFormat[E ? 1 : 0], n = h.engineFormat[E ? 1 : 0], {
                                                        transcoderFormat: Q,
                                                        engineFormat: n
                                                    }
                                                }
                                                return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."), Q = I.RGBA32, n = g.RGBAFormat, {
                                                    transcoderFormat: Q,
                                                    engineFormat: n
                                                }
                                            }(Q, n, a, h);
                                        if (!n || !a || !s) throw E(), Error("THREE.KTX2Loader:	Invalid texture");
                                        if (!r.startTranscoding()) throw E(), Error("THREE.KTX2Loader: .startTranscoding failed");
                                        let w = [];
                                        for (let y = 0; y < s; y++) {
                                            let D = r.getImageLevelInfo(y, 0, 0),
                                                d = D.origWidth,
                                                p = D.origHeight,
                                                F = new Uint8Array(r.getImageTranscodedSizeInBytes(y, 0, 0, u)),
                                                G = r.transcodeImage(F, y, 0, 0, u, 0, -1, -1);
                                            if (!G) throw E(), Error("THREE.KTX2Loader: .transcodeImage failed.");
                                            w.push({
                                                data: F,
                                                width: d,
                                                height: p
                                            })
                                        }
                                        return E(), {
                                            width: n,
                                            height: a,
                                            hasAlpha: h,
                                            mipmaps: w,
                                            format: l,
                                            dfdTransferFn: f,
                                            dfdFlags: c
                                        }
                                    }(E.buffer), f = [];
                                    for (let c = 0; c < n.length; ++c) f.push(n[c].data.buffer);
                                    self.postMessage({
                                        type: "transcode",
                                        id: E.id,
                                        width: e,
                                        height: r,
                                        hasAlpha: Q,
                                        mipmaps: n,
                                        format: a,
                                        dfdTransferFn: s,
                                        dfdFlags: h
                                    }, f)
                                } catch (u) {
                                    console.error(u), self.postMessage({
                                        type: "error",
                                        id: E.id,
                                        error: u.message
                                    })
                                }
                            })
                    }
                });
                let r = [{
                        if: "astcSupported",
                        basisFormat: [B.UASTC_4x4],
                        transcoderFormat: [I.ASTC_4x4, I.ASTC_4x4],
                        engineFormat: [g.RGBA_ASTC_4x4_Format, g.RGBA_ASTC_4x4_Format],
                        priorityETC1S: 1 / 0,
                        priorityUASTC: 1,
                        needsPowerOfTwo: !1
                    }, {
                        if: "bptcSupported",
                        basisFormat: [B.ETC1S, B.UASTC_4x4],
                        transcoderFormat: [I.BC7_M5, I.BC7_M5],
                        engineFormat: [g.RGBA_BPTC_Format, g.RGBA_BPTC_Format],
                        priorityETC1S: 3,
                        priorityUASTC: 2,
                        needsPowerOfTwo: !1
                    }, {
                        if: "dxtSupported",
                        basisFormat: [B.ETC1S, B.UASTC_4x4],
                        transcoderFormat: [I.BC1, I.BC3],
                        engineFormat: [g.RGB_S3TC_DXT1_Format, g.RGBA_S3TC_DXT5_Format],
                        priorityETC1S: 4,
                        priorityUASTC: 5,
                        needsPowerOfTwo: !1
                    }, {
                        if: "etc2Supported",
                        basisFormat: [B.ETC1S, B.UASTC_4x4],
                        transcoderFormat: [I.ETC1, I.ETC2],
                        engineFormat: [g.RGB_ETC2_Format, g.RGBA_ETC2_EAC_Format],
                        priorityETC1S: 1,
                        priorityUASTC: 3,
                        needsPowerOfTwo: !1
                    }, {
                        if: "etc1Supported",
                        basisFormat: [B.ETC1S, B.UASTC_4x4],
                        transcoderFormat: [I.ETC1],
                        engineFormat: [g.RGB_ETC1_Format],
                        priorityETC1S: 2,
                        priorityUASTC: 4,
                        needsPowerOfTwo: !1
                    }, {
                        if: "pvrtcSupported",
                        basisFormat: [B.ETC1S, B.UASTC_4x4],
                        transcoderFormat: [I.PVRTC1_4_RGB, I.PVRTC1_4_RGBA],
                        engineFormat: [g.RGB_PVRTC_4BPPV1_Format, g.RGBA_PVRTC_4BPPV1_Format],
                        priorityETC1S: 5,
                        priorityUASTC: 6,
                        needsPowerOfTwo: !0
                    }],
                    i = r.sort(function(A, e) {
                        return A.priorityETC1S - e.priorityETC1S
                    }),
                    C = r.sort(function(A, e) {
                        return A.priorityUASTC - e.priorityUASTC
                    });

                function o(A) {
                    return A <= 2 || (A & A - 1) == 0 && 0 !== A
                }
            };
            let y = {
                    109: i.RGBAFormat,
                    97: i.RGBAFormat,
                    37: i.RGBAFormat,
                    43: i.RGBAFormat,
                    103: i.RGFormat,
                    83: i.RGFormat,
                    16: i.RGFormat,
                    22: i.RGFormat,
                    100: i.RedFormat,
                    76: i.RedFormat,
                    15: i.RedFormat,
                    9: i.RedFormat
                },
                D = {
                    109: i.FloatType,
                    97: i.HalfFloatType,
                    37: i.UnsignedByteType,
                    43: i.UnsignedByteType,
                    103: i.FloatType,
                    83: i.HalfFloatType,
                    16: i.UnsignedByteType,
                    22: i.UnsignedByteType,
                    100: i.FloatType,
                    76: i.HalfFloatType,
                    15: i.UnsignedByteType,
                    9: i.UnsignedByteType
                },
                d = {
                    43: i.sRGBEncoding,
                    22: i.sRGBEncoding,
                    15: i.sRGBEncoding
                };
            async function p(A) {
                let e, t;
                let {
                    vkFormat: g,
                    pixelWidth: I,
                    pixelHeight: B,
                    pixelDepth: C
                } = A;
                if (void 0 === y[g]) throw Error("THREE.KTX2Loader: Unsupported vkFormat.");
                let o = A.levels[0];
                if (0 === A.supercompressionScheme) e = o.levelData;
                else if (2 === A.supercompressionScheme) r || (r = new Promise(async A => {
                    let e = new f;
                    await e.init(), A(e)
                })), e = (await r).decode(o.levelData, o.uncompressedByteLength);
                else throw Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");
                t = D[g] === i.FloatType ? new Float32Array(e.buffer, e.byteOffset, e.byteLength / Float32Array.BYTES_PER_ELEMENT) : D[g] === i.HalfFloatType ? new Uint16Array(e.buffer, e.byteOffset, e.byteLength / Uint16Array.BYTES_PER_ELEMENT) : e;
                let E = 0 === C ? new i.DataTexture(t, I, B) : new i.Data3DTexture(t, I, B, C);
                return E.type = D[g], E.format = y[g], E.encoding = d[g] || i.LinearEncoding, E.needsUpdate = !0, Promise.resolve(E)
            }
        },
        5429: function(A, e, t) {
            "use strict";
            t.d(e, {
                W: function() {
                    return I
                }
            });
            var g = t(7294);

            function I(A, e) {
                var t = (0, g.useState)(function() {
                    return {
                        value: A,
                        callback: e,
                        facade: {
                            get current() {
                                return t.value
                            },
                            set current(value) {
                                var g = t.value;
                                g !== value && (t.value = value, t.callback(value, g))
                            }
                        }
                    }
                })[0];
                return t.callback = e, t.facade
            }
        },
        5183: function(A, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return n
                }
            });
            var g, I = t(8774),
                B = function(A, e, t) {
                    for (var g = -1, I = Object(A), B = t(A), r = B.length; r--;) {
                        var i = B[++g];
                        if (!1 === e(I[i], i, I)) break
                    }
                    return A
                },
                r = t(336),
                i = t(585),
                C = function(A, e) {
                    if (null == A) return A;
                    if (!(0, i.Z)(A)) return A && B(A, e, r.Z);
                    for (var t = A.length, I = g ? t : -1, C = Object(A);
                        (g ? I-- : ++I < t) && !1 !== e(C[I], I, C););
                    return A
                },
                o = function(A, e) {
                    var t = [];
                    return C(A, function(A, g, I) {
                        e(A, g, I) && t.push(A)
                    }), t
                },
                E = t(7134),
                Q = t(7771),
                n = function(A, e) {
                    return ((0, Q.Z)(A) ? I.Z : o)(A, (0, E.Z)(e, 3))
                }
        }
    }
]);