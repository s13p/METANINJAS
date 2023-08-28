"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [173], {
        3173: function(n, t, e) {
            e.r(t), e.d(t, {
                default: function() {
                    return a8
                }
            });
            var i = e(5893),
                a = e(6955),
                r = e(7294);

            function s() {
                return (s = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i])
                    }
                    return n
                }).apply(this, arguments)
            }

            function o(n, t) {
                return (o = Object.setPrototypeOf || function(n, t) {
                    return n.__proto__ = t, n
                })(n, t)
            }
            var l = new Map,
                d = new WeakMap,
                c = 0,
                p = void 0;

            function h(n, t, e, i) {
                if (void 0 === e && (e = {}), void 0 === i && (i = p), void 0 === window.IntersectionObserver && void 0 !== i) {
                    var a = n.getBoundingClientRect();
                    return t(i, {
                            isIntersecting: i,
                            target: n,
                            intersectionRatio: "number" == typeof e.threshold ? e.threshold : 0,
                            time: 0,
                            boundingClientRect: a,
                            intersectionRect: a,
                            rootBounds: a
                        }),
                        function() {}
                }
                var r = function(n) {
                        var t = Object.keys(n).sort().filter(function(t) {
                                return void 0 !== n[t]
                            }).map(function(t) {
                                var e;
                                return t + "_" + ("root" === t ? (e = n.root) ? (d.has(e) || (c += 1, d.set(e, c.toString())), d.get(e)) : "0" : n[t])
                            }).toString(),
                            e = l.get(t);
                        if (!e) {
                            var i, a = new Map,
                                r = new IntersectionObserver(function(t) {
                                    t.forEach(function(t) {
                                        var e, r = t.isIntersecting && i.some(function(n) {
                                            return t.intersectionRatio >= n
                                        });
                                        n.trackVisibility && void 0 === t.isVisible && (t.isVisible = r), null == (e = a.get(t.target)) || e.forEach(function(n) {
                                            n(r, t)
                                        })
                                    })
                                }, n);
                            i = r.thresholds || (Array.isArray(n.threshold) ? n.threshold : [n.threshold || 0]), e = {
                                id: t,
                                observer: r,
                                elements: a
                            }, l.set(t, e)
                        }
                        return e
                    }(e),
                    s = r.id,
                    o = r.observer,
                    h = r.elements,
                    f = h.get(n) || [];
                return h.has(n) || h.set(n, f), f.push(t), o.observe(n),
                    function() {
                        f.splice(f.indexOf(t), 1), 0 === f.length && (h.delete(n), o.unobserve(n)), 0 === h.size && (o.disconnect(), l.delete(s))
                    }
            }
            var f = ["children", "as", "tag", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];

            function x(n) {
                return "function" != typeof n.children
            }
            var m = function(n) {
                function t(t) {
                    var e;
                    return (e = n.call(this, t) || this).node = null, e._unobserveCb = null, e.handleNode = function(n) {
                        !e.node || (e.unobserve(), n || e.props.triggerOnce || e.props.skip || e.setState({
                            inView: !!e.props.initialInView,
                            entry: void 0
                        })), e.node = n || null, e.observeNode()
                    }, e.handleChange = function(n, t) {
                        n && e.props.triggerOnce && e.unobserve(), x(e.props) || e.setState({
                            inView: n,
                            entry: t
                        }), e.props.onChange && e.props.onChange(n, t)
                    }, e.state = {
                        inView: !!t.initialInView,
                        entry: void 0
                    }, e
                }(e = t).prototype = Object.create(n.prototype), e.prototype.constructor = e, o(e, n);
                var e, i = t.prototype;
                return i.componentDidUpdate = function(n) {
                    (n.rootMargin !== this.props.rootMargin || n.root !== this.props.root || n.threshold !== this.props.threshold || n.skip !== this.props.skip || n.trackVisibility !== this.props.trackVisibility || n.delay !== this.props.delay) && (this.unobserve(), this.observeNode())
                }, i.componentWillUnmount = function() {
                    this.unobserve(), this.node = null
                }, i.observeNode = function() {
                    if (this.node && !this.props.skip) {
                        var n = this.props,
                            t = n.threshold,
                            e = n.root,
                            i = n.rootMargin,
                            a = n.trackVisibility,
                            r = n.delay,
                            s = n.fallbackInView;
                        this._unobserveCb = h(this.node, this.handleChange, {
                            threshold: t,
                            root: e,
                            rootMargin: i,
                            trackVisibility: a,
                            delay: r
                        }, s)
                    }
                }, i.unobserve = function() {
                    this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
                }, i.render = function() {
                    if (!x(this.props)) {
                        var n = this.state,
                            t = n.inView,
                            e = n.entry;
                        return this.props.children({
                            inView: t,
                            entry: e,
                            ref: this.handleNode
                        })
                    }
                    var i = this.props,
                        a = i.children,
                        o = i.as,
                        l = i.tag,
                        d = function(n, t) {
                            if (null == n) return {};
                            var e, i, a = {},
                                r = Object.keys(n);
                            for (i = 0; i < r.length; i++) e = r[i], t.indexOf(e) >= 0 || (a[e] = n[e]);
                            return a
                        }(i, f);
                    return r.createElement(o || l || "div", s({
                        ref: this.handleNode
                    }, d), a)
                }, t
            }(r.Component);

            function u(n) {
                var t = void 0 === n ? {} : n,
                    e = t.threshold,
                    i = t.delay,
                    a = t.trackVisibility,
                    s = t.rootMargin,
                    o = t.root,
                    l = t.triggerOnce,
                    d = t.skip,
                    c = t.initialInView,
                    p = t.fallbackInView,
                    f = r.useRef(),
                    x = r.useState({
                        inView: !!c
                    }),
                    m = x[0],
                    u = x[1],
                    g = r.useCallback(function(n) {
                        void 0 !== f.current && (f.current(), f.current = void 0), !d && n && (f.current = h(n, function(n, t) {
                            u({
                                inView: n,
                                entry: t
                            }), t.isIntersecting && l && f.current && (f.current(), f.current = void 0)
                        }, {
                            root: o,
                            rootMargin: s,
                            threshold: e,
                            trackVisibility: a,
                            delay: i
                        }, p))
                    }, [Array.isArray(e) ? e.toString() : e, o, s, l, d, a, p, i]);
                (0, r.useEffect)(function() {
                    f.current || !m.entry || l || d || u({
                        inView: !!c
                    })
                });
                var b = [g, m.inView, m.entry];
                return b.ref = b[0], b.inView = b[1], b.entry = b[2], b
            }
            m.displayName = "InView", m.defaultProps = {
                threshold: 0,
                triggerOnce: !1,
                initialInView: !1
            };
            var g = e(5878);
            let b = (0, r.forwardRef)(function(n, t) {
                let {
                    children: e,
                    className: s = "",
                    offsetvw: o = 0,
                    threshold: l = 1,
                    mutationType: d = "summer",
                    isReverse: c = !1
                } = n, [p, h, f] = u({
                    initialInView: !1,
                    triggerOnce: !1,
                    threshold: 0
                });
                return (0, r.useEffect)(() => {
                    h && f && (a.QF.sections[d].ref = f.target, a.QF.sections[d].offsetvw = o, a.QF.sections[d].threshold = l, a.QF.sections[d].isReverse = c)
                }, [h]), (0, r.useEffect)(() => () => {
                    a.QF.sections[d].ref = null, a.QF[d].value = 0, a.QF[d].smooth = 0
                }, []), (0, i.jsx)("div", {
                    ref: (0, g.Z)([t, p]),
                    className: s,
                    children: e
                })
            });
            var w = e(6542),
                v = e(7297),
                y = e(7379);

            function j() {
                let n = (0, v.Z)(["\n  position: fixed;\n  z-index: 9998;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n"]);
                return j = function() {
                    return n
                }, n
            }
            let Z = y.ZP.div.withConfig({
                componentId: "sc-17899295-0"
            })(j());
            var C = e(4219),
                k = e(5763),
                I = e(1472);

            function E() {
                let n = (0, v.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  pointer-events: none;\n"]);
                return E = function() {
                    return n
                }, n
            }

            function N() {
                let n = (0, v.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n"]);
                return N = function() {
                    return n
                }, n
            }

            function z() {
                let n = (0, v.Z)(["\n  padding: 60px;\n"]);
                return z = function() {
                    return n
                }, n
            }

            function P() {
                let n = (0, v.Z)(["\n  display: flex;\n  column-gap: 350px;\n  justify-content: space-between;\n\n  @media all and (max-width: 1124px) {\n    column-gap: 250px;\n  }\n\n  @media all and (max-width: 660px) {\n    column-gap: 90px;\n  }\n"]);
                return P = function() {
                    return n
                }, n
            }

            function T() {
                let n = (0, v.Z)(["\n  position: fixed;\n  pointer-events: all;\n  right: 44px;\n  top: 51px;\n  padding: 5px;\n  &.sp {\n    right: 5px;\n    top: 7px;\n    padding: 15px;\n    z-index: 100;\n    & > div {\n      width: 32px;\n      height: 32px;\n    }\n  }\n  @media (pointer: fine) {\n    svg {\n      transition: transform 0.3s ease;\n    }\n    &:hover {\n      svg {\n        transform: scale(0.9) translateZ(0);\n      }\n    }\n  }\n"]);
                return T = function() {
                    return n
                }, n
            }

            function S() {
                let n = (0, v.Z)([""]);
                return S = function() {
                    return n
                }, n
            }

            function M() {
                let n = (0, v.Z)(["\n  display: block;\n  position: fixed;\n  top: 58px;\n  left: 60px;\n  align-items: center;\n  h5 {\n    padding: 0 0 10px;\n    font-weight: 600;\n  }\n  & > div {\n    padding: 15px 0 0;\n  }\n"]);
                return M = function() {
                    return n
                }, n
            }

            function R() {
                let n = (0, v.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 2px 0;\n  span {\n    display: inline-block;\n    padding: 0 0 3px;\n    font-size: 12px;\n    letter-spacing: 0.03em;\n  }\n  &.ckir {\n    div {\n      margin: 0 0 0 15px;\n    }\n  }\n"]);
                return R = function() {
                    return n
                }, n
            }

            function O() {
                let n = (0, v.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px 3px;\n  height: 35px;\n  border: 1px solid #fff;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 12px;\n  ", "\n  color: #fff;\n  margin: 0 15px 0 0;\n  transform: scaleX(0) translateZ(0);\n  transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.1s;\n  overflow: hidden;\n  span {\n    display: block;\n    opacity: 0;\n    transform: translate3d(0, 15px, 0);\n    transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.35s,\n      opacity 0.3s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.35s;\n  }\n  &.nomr {\n    margin: 0;\n  }\n  &.sbck {\n    min-width: 144px;\n    margin: 0 auto;\n  }\n  svg {\n    margin: 0 7px 0 0;\n  }\n  &::after {\n    content: ' ';\n    display: block;\n    position: absolute;\n    left: -1px;\n    top: -1px;\n    width: calc(100% + 2px);\n    height: 32px;\n    border: 1px solid #fff;\n    border-radius: 4px;\n  }\n"]);
                return O = function() {
                    return n
                }, n
            }

            function A() {
                let n = (0, v.Z)(["\n  position: fixed;\n  bottom: 66px;\n  left: 120px;\n  padding: 0 10px 0 0;\n"]);
                return A = function() {
                    return n
                }, n
            }

            function L() {
                let n = (0, v.Z)(["\n  position: fixed;\n  bottom: 47px;\n  right: 122px;\n  padding: 0 10px 0 0;\n  & > div {\n    justify-content: flex-end;\n  }\n  p {\n    padding: 4px 0 0;\n  }\n"]);
                return L = function() {
                    return n
                }, n
            }

            function D() {
                let n = (0, v.Z)(["\n  position: fixed;\n  left: 5px;\n  text-align: center;\n  width: 58px;\n  top: 60px;\n  ", "\n"]);
                return D = function() {
                    return n
                }, n
            }

            function F() {
                let n = (0, v.Z)(["\n  position: fixed;\n  left: 50%;\n  top: 60px;\n  transform: translate(-50%, 0);\n  ", "\n"]);
                return F = function() {
                    return n
                }, n
            }
            let V = (0, y.ZP)(I.a.div).withConfig({
                    componentId: "sc-fcdfdb46-0"
                })(E()),
                H = (0, y.ZP)(I.a.div).withConfig({
                    componentId: "sc-fcdfdb46-1"
                })(N()),
                B = y.ZP.div.withConfig({
                    componentId: "sc-fcdfdb46-2"
                })(z()),
                U = y.ZP.div.withConfig({
                    componentId: "sc-fcdfdb46-3"
                })(P());
            y.ZP.button.withConfig({
                componentId: "sc-fcdfdb46-4"
            })(T()), y.ZP.div.withConfig({
                componentId: "sc-fcdfdb46-5"
            })(S()), y.ZP.div.withConfig({
                componentId: "sc-fcdfdb46-6"
            })(M()), y.ZP.div.withConfig({
                componentId: "sc-fcdfdb46-7"
            })(R());
            let X = y.ZP.div.withConfig({
                componentId: "sc-fcdfdb46-8"
            })(O(), n => n.theme.highlightFont);

            function G() {
                let n = (0, v.Z)(["\n  text-align: center;\n  h3 {\n    font-size: 20px;\n    letter-spacing: 0.12em;\n    margin: 0 0 36px;\n    color: #fff;\n    overflow: hidden;\n    span {\n      display: block;\n      transform: translate3d(0, 100%, 0);\n      transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n    }\n  }\n\n  &.active {\n    p,\n    .nomr span,\n    .sbck span {\n      opacity: 1;\n      transform: translate3d(0, 0px, 0);\n    }\n    .nomr,\n    .sbck {\n      transform: scaleX(1) translateZ(0);\n    }\n    h3 {\n      span {\n        transform: translate3d(0, 0%, 0);\n      }\n    }\n  }\n"]);
                return G = function() {
                    return n
                }, n
            }

            function _() {
                let n = (0, v.Z)(["\n  ", "\n  color: #fff;\n  padding: 20px 0 0;\n  transform: translate3d(0, 100%, 0);\n  opacity: 0;\n  transform: translate3d(0, 30px, 0);\n  transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.5s,\n    opacity 0.3s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.5s;\n"]);
                return _ = function() {
                    return n
                }, n
            }

            function W() {
                let n = (0, v.Z)(["\n  min-height: 77px;\n  width: 150px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: flex-end;\n"]);
                return W = function() {
                    return n
                }, n
            }

            function Y() {
                let n = (0, v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 107px;\n  margin: 0 auto;\n  justify-content: center;\n"]);
                return Y = function() {
                    return n
                }, n
            }

            function q() {
                let n = (0, v.Z)(["\n  display: flex;\n  padding: 7px 0 0;\n  width: 100%;\n  justify-content: space-between;\n"]);
                return q = function() {
                    return n
                }, n
            }
            y.ZP.div.withConfig({
                componentId: "sc-fcdfdb46-9"
            })(A()), y.ZP.div.withConfig({
                componentId: "sc-fcdfdb46-10"
            })(L()), y.ZP.div.withConfig({
                componentId: "sc-fcdfdb46-11"
            })(D(), n => n.theme.bodyText3), y.ZP.div.withConfig({
                componentId: "sc-fcdfdb46-12"
            })(F(), n => n.theme.bodyText3);
            let K = y.ZP.div.withConfig({
                    componentId: "sc-7854bc81-0"
                })(G()),
                Q = y.ZP.p.withConfig({
                    componentId: "sc-7854bc81-1"
                })(_(), n => n.theme.bodyText5),
                J = y.ZP.div.withConfig({
                    componentId: "sc-7854bc81-2"
                })(W()),
                $ = y.ZP.div.withConfig({
                    componentId: "sc-7854bc81-3"
                })(Y()),
                nn = y.ZP.div.withConfig({
                    componentId: "sc-7854bc81-4"
                })(q()),
                nt = () => {
                    let [n, t] = (0, r.useState)(!1);
                    return (0, r.useEffect)(() => {
                        setTimeout(() => {
                            t(!0)
                        }, 700)
                    }, []), (0, i.jsxs)(K, {
                        className: n ? "active" : "",
                        children: [(0, i.jsx)("h3", {
                            children: (0, i.jsx)("span", {
                                children: "JUMP / GLIDE"
                            })
                        }), (0, i.jsx)(J, {
                            children: (0, i.jsx)(X, {
                                className: "sbck",
                                children: (0, i.jsx)("span", {
                                    children: "SPACE BAR"
                                })
                            })
                        }), (0, i.jsxs)(Q, {
                            children: ["Glide by holding the ", (0, i.jsx)("br", {}), " space bar in the air."]
                        })]
                    })
                },
                ne = () => {
                    let [n, t] = (0, r.useState)(!1);
                    return (0, r.useEffect)(() => {
                        setTimeout(() => {
                            t(!0)
                        }, 700)
                    }, []), (0, i.jsxs)(K, {
                        className: n ? "active" : "",
                        children: [(0, i.jsx)("h3", {
                            children: (0, i.jsx)("span", {
                                children: "MOVING"
                            })
                        }), (0, i.jsxs)($, {
                            children: [(0, i.jsx)(X, {
                                className: "nomr",
                                children: (0, i.jsx)("span", {
                                    children: "W"
                                })
                            }), (0, i.jsxs)(nn, {
                                children: [(0, i.jsx)(X, {
                                    className: "nomr",
                                    children: (0, i.jsx)("span", {
                                        children: "A"
                                    })
                                }), (0, i.jsx)(X, {
                                    className: "nomr",
                                    children: (0, i.jsx)("span", {
                                        children: "S"
                                    })
                                }), (0, i.jsx)(X, {
                                    className: "nomr",
                                    children: (0, i.jsx)("span", {
                                        children: "D"
                                    })
                                })]
                            })]
                        }), (0, i.jsxs)(Q, {
                            children: ["Alternatively you can", (0, i.jsx)("br", {}), " use the arrow keys."]
                        })]
                    })
                };
            var ni = e(5518);

            function na() {
                let n = (0, v.Z)(["\n  position: absolute;\n  bottom: 126px;\n  left: 100px;\n  transform: translate(-50%, 0);\n  text-align: center;\n  color: #fff;\n"]);
                return na = function() {
                    return n
                }, n
            }

            function nr() {
                let n = (0, v.Z)(["\n  position: absolute;\n  bottom: 126px;\n  right: 100px;\n  transform: translate(50%, 0);\n  text-align: center;\n  color: #fff;\n"]);
                return nr = function() {
                    return n
                }, n
            }

            function ns() {
                let n = (0, v.Z)(["\n  position: absolute;\n  bottom: 18px;\n  right: 100px;\n  transform: translate(50%, 0);\n  text-align: center;\n  ", "\n  color: #fff;\n"]);
                return ns = function() {
                    return n
                }, n
            }
            let no = y.ZP.h5.withConfig({
                    componentId: "sc-8bd66d78-0"
                })(na()),
                nl = y.ZP.h5.withConfig({
                    componentId: "sc-8bd66d78-1"
                })(nr()),
                nd = y.ZP.div.withConfig({
                    componentId: "sc-8bd66d78-2"
                })(ns(), n => n.theme.bodyText3),
                nc = () => (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(no, {
                        children: ["DRAG JOYSTICK", (0, i.jsx)("br", {}), "TO MOVE"]
                    })
                }),
                np = () => (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(nl, {
                        children: ["TAP", (0, i.jsx)("br", {}), " TO JUMP"]
                    }), (0, i.jsxs)(nd, {
                        children: ["Hold it to fly", (0, i.jsx)("br", {}), "while in the air"]
                    })]
                }),
                nh = () => (0, i.jsx)(B, {
                    children: (0, i.jsxs)(U, {
                        children: [(0, i.jsx)(ne, {}), (0, i.jsx)(nt, {})]
                    })
                }),
                nf = () => (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(nc, {}), (0, i.jsx)(np, {})]
                }),
                nx = n => {
                    let {
                        anim: t
                    } = n;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(H, {
                            style: { ...t
                            }
                        }), (0, i.jsx)(V, {
                            style: { ...t
                            },
                            children: ni.tq ? (0, i.jsx)(nf, {}) : (0, i.jsx)(nh, {})
                        })]
                    })
                },
                nm = () => {
                    let n = (0, C.N1)(n => n.testExperience),
                        t = (0, C.N1)(n => n.startedMoved),
                        e = (0, I.useTransition)(n && !t, {
                            from: {
                                opacity: 0
                            },
                            enter: {
                                opacity: 1
                            },
                            leave: {
                                opacity: 0
                            },
                            reverse: n,
                            config: {
                                duration: 600
                            }
                        });
                    return e((n, t) => {
                        let { ...e
                        } = n;
                        return t && (0, i.jsx)(nx, {
                            anim: e
                        })
                    })
                };

            function nu() {
                let n = (0, v.Z)(["\n  position: fixed;\n  z-index: 9999;\n  width: 100vw;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  top: 0;\n"]);
                return nu = function() {
                    return n
                }, n
            }

            function ng() {
                let n = (0, v.Z)(["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  height: var(--app-height);\n"]);
                return ng = function() {
                    return n
                }, n
            }

            function nb() {
                let n = (0, v.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);
                return nb = function() {
                    return n
                }, n
            }

            function nw() {
                let n = (0, v.Z)(["\n  width: 350px;\n  & > div {\n    width: 210px;\n  }\n  color: #fff;\n\n  p {\n    padding: 15px 0 20px;\n  }\n\n  @media all and (max-width: 1260px) {\n    h2 {\n      font-size: 40px;\n      line-height: 38px;\n    }\n  }\n  @media all and (max-width: 520px) {\n    h2 {\n      font-size: 32px;\n      line-height: 30px;\n    }\n  }\n"]);
                return nw = function() {
                    return n
                }, n
            }

            function nv() {
                let n = (0, v.Z)(["\n  position: absolute;\n  z-index: 99;\n  right: 30px;\n  top: 30px;\n  svg {\n    width: 14px;\n    height: 14px;\n    transform: scale(0) translateZ(0);\n    transition: transform 0.4s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n  }\n  transform: scale(0) translateZ(0);\n  transition: transform 0.4s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n  &.active {\n    transform: scale(1) translateZ(0);\n    svg {\n      transform: scale(1) translateZ(0);\n      transition-delay: 0.15s;\n    }\n  }\n  /* width: 160px; */\n"]);
                return nv = function() {
                    return n
                }, n
            }

            function ny() {
                let n = (0, v.Z)(["\n  z-index: 1;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  transform: translate3d(0, 200px, 0);\n  transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n  &.show {\n    transform: translate3d(0, 0px, 0);\n  }\n"]);
                return ny = function() {
                    return n
                }, n
            }

            function nj() {
                let n = (0, v.Z)(["\n  position: absolute;\n  z-index: 1;\n  left: 30px;\n  top: 30px;\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 0.06em;\n\n  span {\n    display: block;\n  }\n  & > span {\n    overflow: hidden;\n    span {\n      transition: transform 0.3s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n      transform: translate3d(0, 100%, 0);\n    }\n  }\n\n  &.active {\n    & > span {\n      span {\n        transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n        transform: translate3d(0, 0%, 0);\n      }\n      &:nth-child(2) {\n        span {\n          transition-delay: 0.1s;\n        }\n      }\n    }\n  }\n\n  @media (orientation: landscape) {\n    display: none;\n  }\n\n  @media all and (max-width: 360px) {\n    font-size: 13px;\n  }\n"]);
                return nj = function() {
                    return n
                }, n
            }
            let nZ = y.ZP.div.withConfig({
                    componentId: "sc-597184b7-0"
                })(nu()),
                nC = y.ZP.div.withConfig({
                    componentId: "sc-597184b7-1"
                })(ng());
            y.ZP.div.withConfig({
                componentId: "sc-597184b7-2"
            })(nb()), y.ZP.div.withConfig({
                componentId: "sc-597184b7-3"
            })(nw());
            let nk = y.ZP.div.withConfig({
                    componentId: "sc-597184b7-4"
                })(nv()),
                nI = y.ZP.div.withConfig({
                    componentId: "sc-597184b7-5"
                })(ny()),
                nE = y.ZP.div.withConfig({
                    componentId: "sc-597184b7-6"
                })(nj());

            function nN() {
                let n = (0, v.Z)(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n"]);
                return nN = function() {
                    return n
                }, n
            }

            function nz() {
                let n = (0, v.Z)(["\n  width: 200px;\n  height: 180px;\n  z-index: 90;\n  pointer-events: all;\n"]);
                return nz = function() {
                    return n
                }, n
            }

            function nP() {
                let n = (0, v.Z)(["\n  width: 100vw;\n  height: 100vh;\n  z-index: 80;\n"]);
                return nP = function() {
                    return n
                }, n
            }
            let nT = y.ZP.div.withConfig({
                    componentId: "sc-52ec8fe1-0"
                })(nN()),
                nS = (0, y.ZP)(nT).withConfig({
                    componentId: "sc-52ec8fe1-1"
                })(nz()),
                nM = (0, y.ZP)(nT).withConfig({
                    componentId: "sc-52ec8fe1-2"
                })(nP());
            var nR = e(543),
                nO = e(7430),
                nA = e(1575),
                nL = e(4661);

            function nD() {
                let n = (0, v.Z)(["\n      right: 50px;\n    "]);
                return nD = function() {
                    return n
                }, n
            }

            function nF() {
                let n = (0, v.Z)(["\n      left: 50px;\n    "]);
                return nF = function() {
                    return n
                }, n
            }

            function nV() {
                let n = (0, v.Z)(["\n  position: absolute;\n  bottom: 40px;\n  ", "\n  ", "\n  padding: 50px;\n  &.blk {\n    .jsc,\n    .jdc,\n    .jda::before {\n      border-color: #00000080;\n    }\n  }\n  user-select: none;\n"]);
                return nV = function() {
                    return n
                }, n
            }

            function nH() {
                let n = (0, v.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  border: 2.5px solid #ffffff80;\n  border-radius: 100px;\n"]);
                return nH = function() {
                    return n
                }, n
            }

            function nB() {
                let n = (0, v.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  border: 3.5px solid #ffffff80;\n  border-radius: 100px;\n"]);
                return nB = function() {
                    return n
                }, n
            }

            function nU() {
                let n = (0, v.Z)(["\n  position: absolute;\n  top: -2.5px;\n  right: 50%;\n  bottom: 50%;\n  left: -2.5px;\n  transform-origin: 100% 100%;\n  // transform: rotate(0deg) skewX(30deg);\n  overflow: hidden;\n  :before {\n    content: '';\n    display: block;\n    width: 200%;\n    height: 200%;\n    box-sizing: border-box;\n    border: 7.5px solid #ffffff80;\n    border-radius: 50%;\n    transform: skewX(-30deg);\n  }\n"]);
                return nU = function() {
                    return n
                }, n
            }
            let nX = (0, y.ZP)(I.a.div).withConfig({
                    componentId: "sc-90754616-0"
                })(nV(), n => n.right && (0, y.iv)(nD()), n => n.left && (0, y.iv)(nF())),
                nG = (0, y.ZP)(I.a.div).withConfig({
                    componentId: "sc-90754616-1"
                })(nH()),
                n_ = (0, y.ZP)(I.a.div).withConfig({
                    componentId: "sc-90754616-2"
                })(nB()),
                nW = (0, y.ZP)(I.a.div).withConfig({
                    componentId: "sc-90754616-3"
                })(nU()),
                nY = n => {
                    let {
                        dragging: t,
                        pos: e,
                        visible: a
                    } = n, r = Math.atan2(e.x, e.y), s = {
                        x: 40 * Math.sin(r),
                        y: 40 * Math.cos(r)
                    };
                    e.x = Math.abs(e.x) < Math.abs(s.x) ? e.x : s.x, e.y = Math.abs(e.y) < Math.abs(s.y) ? e.y : s.y;
                    let {
                        opacity: o,
                        xyz: l
                    } = (0, I.useSpring)({
                        from: {
                            opacity: 1,
                            xyz: {
                                x: "-50%",
                                y: "-50%",
                                z: 0
                            }
                        },
                        to: {
                            opacity: a && t ? 0 : 1,
                            xyz: {
                                x: "calc(-50% + ".concat(t ? e.x : 0, "px)"),
                                y: "calc(-50% + ".concat(t ? e.y : 0, "px)"),
                                z: 0
                            }
                        },
                        immediate: t,
                        config: I.config.slow
                    });
                    return (0, i.jsx)(nG, {
                        className: "jsc",
                        style: {
                            opacity: o,
                            transform: (0, I.to)(l, n => "translate3d(".concat(n.x, ", ").concat(n.y, ", ").concat(n.z, "px)"))
                        }
                    })
                },
                nq = n => {
                    let {
                        active: t,
                        dragging: e,
                        pos: a
                    } = n, r = Math.atan2(a.x, a.y), s = {
                        x: 20 * Math.sin(r),
                        y: 20 * Math.cos(r)
                    };
                    a.x = Math.abs(a.x) < Math.abs(s.x) ? a.x : s.x, a.y = Math.abs(a.y) < Math.abs(s.y) ? a.y : s.y;
                    let {
                        width: o,
                        height: l,
                        background: d,
                        opacity: c,
                        xyz: p
                    } = (0, I.useSpring)({
                        from: {
                            width: 125,
                            height: 125,
                            background: "#ffffff40",
                            opacity: 0,
                            xyz: {
                                x: "-50%",
                                y: "-50%",
                                z: 0
                            }
                        },
                        to: {
                            width: t ? e ? 125 : 155 : 0,
                            height: t ? e ? 125 : 155 : 0,
                            background: t && e ? "#ffffff40" : "#ffffff10",
                            opacity: t ? 1 : 0,
                            xyz: {
                                x: "calc(-50% + ".concat(e ? a.x : 0, "px)"),
                                y: "calc(-50% + ".concat(e ? a.y : 0, "px)"),
                                z: 0
                            }
                        },
                        immediate: e,
                        config: I.config.slow
                    });
                    return (0, i.jsx)(n_, {
                        className: "jdc",
                        style: {
                            width: o,
                            height: l,
                            background: d,
                            opacity: c,
                            transform: (0, I.to)(p, n => "translate3d(".concat(n.x, ", ").concat(n.y, ", ").concat(n.z, "px)"))
                        },
                        children: (0, i.jsx)(nK, {
                            dragging: e,
                            pos: a
                        })
                    })
                },
                nK = n => {
                    let {
                        dragging: t,
                        pos: e
                    } = n, a = Math.atan2(e.x, e.y) + Math.PI / 1.5, {
                        opacity: r,
                        rotation: s
                    } = (0, I.useSpring)({
                        from: {
                            opacity: 0,
                            rotation: 0
                        },
                        to: {
                            opacity: t ? 1 : 0,
                            rotation: a
                        },
                        immediate: t,
                        config: I.config.slow
                    });
                    return (0, i.jsx)(nW, {
                        className: "jda",
                        style: {
                            opacity: r,
                            transform: (0, I.to)(s, n => "rotate(".concat(-n, "rad) skewX(30deg)"))
                        }
                    })
                },
                nQ = n => {
                    let {
                        active: t,
                        dragging: e,
                        pos: a,
                        visible: r,
                        ...s
                    } = n, o = (0, C.N1)(n => n.showControlModal);
                    return (0, i.jsxs)(nX, {
                        className: o ? "blk" : "",
                        ...s,
                        children: [(0, i.jsx)(nY, {
                            dragging: e,
                            visible: r,
                            pos: a
                        }), r && (0, i.jsx)(nq, {
                            active: t,
                            dragging: e,
                            pos: a
                        })]
                    })
                };

            function nJ() {
                let n = (0, v.Z)(["\n  position: absolute;\n  bottom: 40px;\n  right: 50px;\n  padding: 50px;\n  z-index: 100;\n  pointer-events: all;\n  user-select: none;\n"]);
                return nJ = function() {
                    return n
                }, n
            }

            function n$() {
                let n = (0, v.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  border: 2.5px solid #ffffff80;\n  border-radius: 100px;\n  transform: translate3D(-50%, -50%, 0);\n  &.blk {\n    border-color: #00000080;\n  }\n"]);
                return n$ = function() {
                    return n
                }, n
            }

            function n0() {
                let n = (0, v.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 30px;\n  height: 30px;\n  background: #ffffff40;\n  border: 2.5px solid #ffffff;\n  border-radius: 100px;\n  transform: translate3D(-50%, -50%, 0);\n  pointer-events: none;\n"]);
                return n0 = function() {
                    return n
                }, n
            }

            function n1() {
                let n = (0, v.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 7.5px;\n  height: 7.5px;\n  background: #ffffff;\n  opacity: 0.35;\n  transform: translate3D(-50%, -50%, 0) rotate3D(0, 0, 1, 45deg);\n"]);
                return n1 = function() {
                    return n
                }, n
            }
            let n2 = (0, y.ZP)(I.a.div).withConfig({
                    componentId: "sc-de1d4635-0"
                })(nJ()),
                n5 = (0, y.ZP)(I.a.button).withConfig({
                    componentId: "sc-de1d4635-1"
                })(n$()),
                n3 = (0, y.ZP)(I.a.div).withConfig({
                    componentId: "sc-de1d4635-2"
                })(n0()),
                n4 = (0, y.ZP)(I.a.div).withConfig({
                    componentId: "sc-de1d4635-3"
                })(n1()),
                n6 = n => {
                    let {
                        toggle: t
                    } = n, e = {
                        from: {
                            width: 25,
                            height: 25,
                            opacity: 0
                        },
                        to: {
                            width: 125,
                            height: 125,
                            opacity: 1
                        }
                    }, [{
                        opacity: a,
                        width: s,
                        height: o
                    }, l] = (0, I.useSpring)(() => ({ ...e.from,
                        config: I.config.slow
                    }));
                    return (0, r.useEffect)(() => {
                        t > 0 && l.start(e)
                    }, [t]), (0, i.jsx)(n3, {
                        style: {
                            width: s,
                            height: o,
                            opacity: a.to([0, .01, 1], [0, 1, 0])
                        }
                    })
                },
                n8 = n => {
                    let {
                        toggle: t,
                        ...e
                    } = n, a = (0, C.N1)(n => n.showControlModal);
                    return (0, i.jsxs)(n2, { ...e,
                        children: [(0, i.jsx)(n5, {
                            className: a ? "blk" : ""
                        }), (0, i.jsx)(n4, {}), (0, i.jsx)(n6, {
                            toggle: t
                        })]
                    })
                };
            var n9 = e(7283),
                n7 = e(4955);
            let tn = {
                    drag: {
                        filterTaps: !0,
                        pointer: {
                            touch: !1
                        }
                    },
                    pinch: {
                        scaleBounds: {
                            min: .1,
                            max: 10
                        },
                        pointer: {
                            touch: !1
                        }
                    }
                },
                tt = () => {
                    let [n, t] = (0, r.useState)(!1), [e, a] = (0, r.useState)(!1), [s, o] = (0, r.useState)({
                        x: 0,
                        y: 0
                    }), l = (0, nR.useGesture)({
                        onPointerDown: n => {
                            let {
                                down: e
                            } = n;
                            t(e)
                        },
                        onPointerUp: n => {
                            let {
                                down: e
                            } = n;
                            t(e)
                        },
                        onDrag: n => {
                            let {
                                movement: t,
                                dragging: e
                            } = n;
                            a(e), o({
                                x: t[0],
                                y: t[1]
                            }), (0, n9.H)();
                            let i = t[0] > 0 ? Math.min(t[0], 30) / 30 : Math.max(t[0], -30) / 30,
                                r = t[1] > 0 ? Math.min(t[1], 30) / 30 : Math.max(t[1], -30) / 30;
                            t[0] = Math.abs(t[0]), t[1] = Math.abs(t[1]);
                            let {
                                lockRotation: s
                            } = (0, nL.A8)(), l = (0 !== t[0] || 0 !== t[1]) && e;
                            (0, nA.EA)({
                                move: l,
                                forceFactor: Math.sign(-r) * Math.min(Math.min(t[0], 30) / 30 + Math.min(t[1], 30) / 30, 1),
                                forceFactor: l ? s ? -r > 0 ? Math.min(Math.abs(i) + -r, 1) : Math.max(Math.abs(i) + -r, -1) : Math.min(Math.abs(i) + Math.abs(r), 1) : 0,
                                turnFactor: -i / 100,
                                xAxisCtrl: i,
                                yAxisCtrl: -r
                            })
                        }
                    }, { ...tn
                    });
                    return (0, i.jsx)(nS, {
                        style: {
                            touchAction: "none"
                        },
                        ...l(),
                        children: (0, i.jsx)(nQ, {
                            active: n,
                            dragging: e,
                            pos: s,
                            visible: !0,
                            left: "true"
                        })
                    })
                },
                te = () => {
                    let [n, t] = (0, r.useState)(0), e = (0, nR.useGesture)({
                        onDrag: n => {
                            let {
                                delta: t,
                                tap: e,
                                movement: i,
                                dragging: a
                            } = n, {
                                dragDelta: r,
                                lockRotation: s
                            } = (0, nL.A8)();
                            r.x = -(2.5 * t[0]), r.y = t[1], (0, nL.Th)({
                                dragDelta: r,
                                isDragging: !0
                            }), s && (n7.inactivityDrag.cancel(), (0, n7.inactivityDrag)()), (0, nO.Kn)("userAction")
                        }
                    }, { ...tn
                    });
                    return (0, i.jsx)(nM, {
                        style: {
                            touchAction: "none"
                        },
                        ...e(),
                        children: (0, i.jsx)(n8, {
                            toggle: n,
                            onTouchStart: n => {
                                let {
                                    delta: t,
                                    tap: e,
                                    movement: i,
                                    dragging: a
                                } = n;
                                (0, n9.H)(), (0, nO.Kn)("ctrl_jump")
                            },
                            onTouchEnd: n => {
                                let {
                                    delta: t,
                                    tap: e,
                                    movement: i,
                                    dragging: a
                                } = n;
                                (0, n9.H)(), (0, nO.Kn)("ctrl_stopJump")
                            }
                        })
                    })
                },
                ti = () => (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(tt, {}), (0, i.jsx)(te, {})]
                });
            var ta = e(5683),
                tr = e(1802),
                ts = e(2113);
            let to = n => {
                let {
                    shadow: t = !0,
                    color: e = "white"
                } = n;
                return (0, i.jsxs)("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M15 1L8 8",
                        stroke: e,
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, i.jsx)("path", {
                        d: "M1 1L5 5",
                        stroke: e,
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, i.jsx)("path", {
                        d: "M15 15L8 8",
                        stroke: e,
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, i.jsx)("path", {
                        d: "M1 15L5 11",
                        stroke: e,
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                })
            };
            var tl = e(1766);
            let td = () => {
                    let n = (0, C.N1)(n => n.testExperience),
                        t = (0, C.N1)(n => n.startedMoved),
                        [e, s] = (0, r.useState)(!1);
                    return (0, r.useEffect)(() => {
                        t && setTimeout(() => {
                            s(!0)
                        }, 300)
                    }, [t]), (0, i.jsx)(nk, {
                        className: e && n ? "active" : "",
                        children: (0, i.jsx)(k.Z, {
                            action: () => {
                                let n = document.getElementById("mainscrll").getBoundingClientRect().top,
                                    t = document.getElementById("tryexp").getBoundingClientRect().top;
                                document.getElementById("mainscrll").parentElement.scroll({
                                    left: 0,
                                    top: t - n,
                                    behavior: "instant"
                                }), document.body.classList.remove("playingexp"), a.QF.gameplay.smooth = 1, (0, a.IW)({
                                    hasSeenExperienceOnce: !0
                                }), (0, C.KG)({
                                    testExperience: !1
                                }), a.QF.gameplay.smooth = 1, (0, a.y0)().playerApi.sleep = !0, (0, a.y0)().dom.current && ((0, a.y0)().dom.current.style.overflowY = "auto"), ta.y.setState({
                                    disableScrollEvent: !1
                                }), (0, nO.Kn)("resetcontrols"), (0, nO.Kn)("anim_".concat((0, tr.PR)().id), {
                                    name: "idle",
                                    blendDuration: 0,
                                    timeScale: ts.MQ.idle
                                }), ni.tq && !(ni.UA && ni.gn) && document.documentElement.exitFullscreen()
                            },
                            icon: (0, i.jsx)(to, {
                                color: "#242424"
                            })
                        })
                    })
                },
                tc = () => {
                    let n = (0, C.N1)(n => n.testExperience),
                        [t, e] = (0, r.useState)(!1);
                    return (0, r.useEffect)(() => {
                        setTimeout(() => {
                            e(!0)
                        }, 200)
                    }, []), (0, i.jsxs)(nE, {
                        className: "rubik ".concat(t && n ? "active" : ""),
                        children: [(0, i.jsx)("span", {
                            children: (0, i.jsx)("span", {
                                children: "ROTATE YOUR DEVICE"
                            })
                        }), " ", (0, i.jsx)("span", {
                            children: (0, i.jsx)("span", {
                                children: "FOR A BETTER EXPERIENCE."
                            })
                        })]
                    })
                },
                tp = () => {
                    let n = () => {
                        tl.Howler.mute("visible" !== document.visibilityState)
                    };
                    (0, r.useEffect)(() => (document.addEventListener("visibilitychange", n), () => {
                        document.removeEventListener("visibilitychange", n)
                    }), [])
                },
                th = () => {
                    let n = (0, C.N1)(n => n.testExperience),
                        [t, e] = (0, r.useState)(!1);
                    return (0, r.useEffect)(() => {
                        setTimeout(() => {
                            e(!0)
                        }, 200)
                    }, []), (0, i.jsx)(nI, {
                        className: n && t ? "show" : "",
                        children: (0, i.jsx)(ti, {})
                    })
                },
                tf = () => (0, i.jsx)(nZ, {
                    children: (0, i.jsxs)(nC, {
                        children: [(0, i.jsx)(td, {}), (0, i.jsx)(nm, {}), (0, i.jsx)(tp, {}), ni.tq && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(tc, {}), (0, i.jsx)(th, {})]
                        })]
                    })
                });
            var tx = e(5449);
            let tm = () => {
                    let n = (0, C.N1)(n => n.testExperience),
                        t = (0, tx.useTransition)(n, {
                            from: {
                                opacity: 0
                            },
                            enter: {
                                opacity: 1
                            },
                            leave: {
                                opacity: 0
                            },
                            reverse: n,
                            config: tx.config.default
                        });
                    return t((n, t) => t && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(Z, {
                            style: n,
                            onMouseDown: n => {
                                window.onmousemove = null, window.onmouseup = null
                            }
                        }), (0, i.jsx)(tf, {
                            style: n
                        })]
                    }))
                },
                tu = (0, r.forwardRef)((n, t) => {
                    let {
                        children: e,
                        onEnterInview: a = () => null,
                        onLeaveInview: s = () => null,
                        className: o = "",
                        classNameInView: l = "active",
                        delay: d = 0,
                        easing: c = {},
                        overrideInviewConfig: p = {}
                    } = n, {
                        ref: h,
                        inView: f,
                        entry: x
                    } = u({
                        initialInView: !1,
                        triggerOnce: !0,
                        ...p
                    }), m = (0, r.useRef)(!1);
                    return (0, r.useEffect)(() => {
                        f || m.current ? (m.current = !0, t.current.className = "".concat(l), a()) : (m.current = !1, t.current.className = "", s())
                    }, [f, m]), (0, i.jsx)("div", {
                        ref: (0, g.Z)([h, t]),
                        className: o,
                        children: e
                    })
                }),
                tg = () => (0, i.jsx)("svg", {
                    "aria-hidden": "true",
                    width: "19",
                    height: "10",
                    viewBox: "0 0 19 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        d: "M10.4728 9.32203C9.8701 9.86477 8.95486 9.86477 8.35215 9.32203L1.067 2.76178C-0.0119941 1.79015 0.675333 -0.000259565 2.12733 -0.000259485L16.6976 -0.000258675C18.1496 -0.000258594 18.8369 1.79015 17.758 2.76178L10.4728 9.32203Z",
                        fill: "#ff8800"
                    })
                });

            function tb() {
                let n = (0, v.Z)(["\n  position: relative;\n  width: 100vw;\n  padding: 150px 60px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  min-height: 100vh;\n  background-color: #fff;\n\n  @media all and (max-width: 840px) {\n    padding: 150px 30px;\n  }\n\n  @media all and (max-width: 360px) {\n    padding: 150px 15px;\n  }\n"]);
                return tb = function() {
                    return n
                }, n
            }

            function tw() {
                let n = (0, v.Z)(["\n  display: flex;\n  max-width: 1220px;\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n\n  .ecotitle {\n    width: 36.6%;\n  }\n  h2 {\n    position: relative;\n    display: inline-block;\n    margin: 0 0 90px;\n    span {\n      display: block;\n    }\n    & > span {\n      overflow: hidden;\n      & > span {\n        transform: translate3d(0, 100%, 0);\n        transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s;\n      }\n      &:nth-child(2) > span {\n        transition-delay: 0.05s;\n      }\n      &:nth-child(3) > span {\n        transition-delay: 0.1s;\n      }\n    }\n    svg {\n      width: 25px;\n      height: auto;\n      position: absolute;\n      left: -74px;\n      bottom: -34px;\n      transform: rotate(-90deg) scaleX(0) translate3d(0, -90px, 0);\n      transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.15s;\n    }\n    &::after {\n      content: ' ';\n      display: block;\n      position: absolute;\n      left: 0;\n      bottom: -32px;\n      width: calc(100% - 14px);\n      height: 6px;\n      background: #242424;\n      transform-origin: left center;\n      transform: scaleX(0) translateZ(0);\n      transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.15s;\n    }\n  }\n\n  @media all and (max-width: 1340px) {\n    .ecotitle {\n      flex: 1;\n      width: auto;\n    }\n  }\n\n  @media all and (max-width: 1260px) {\n    .ecotitle {\n      width: 100%;\n      padding: 0 15px 0 0;\n    }\n    h2 {\n      font-size: 40px;\n      line-height: 38px;\n    }\n  }\n\n  @media all and (max-width: 1199px) {\n    width: 100%;\n    max-width: 800px;\n  }\n\n  @media all and (max-width: 960px) {\n    h2 {\n      svg {\n        left: -66px;\n      }\n    }\n  }\n\n  @media all and (max-width: 520px) {\n    h2 {\n      font-size: 32px;\n      line-height: 30px;\n      margin: 0 0 70px;\n    }\n  }\n\n  .ecotitle {\n    .active {\n      h2 {\n        span > span {\n          transform: translate3d(0, 0, 0);\n        }\n        svg {\n          transform: rotate(-90deg) scaleX(1) translate3d(0, 0, 0);\n        }\n        &::after {\n          transform: scaleX(1) translateZ(0);\n        }\n      }\n    }\n  }\n"]);
                return tw = function() {
                    return n
                }, n
            }

            function tv() {
                let n = (0, v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-content: flex-start;\n  gap: 60px;\n  flex-wrap: wrap;\n  width: 63.4%;\n  @media all and (max-width: 1340px) {\n    width: 714px;\n    max-width: none;\n  }\n\n  @media all and (max-width: 1199px) {\n    width: 100%;\n    max-width: 800px;\n  }\n\n  @media all and (max-width: 840px) {\n    gap: 45px;\n  }\n\n  @media all and (max-width: 768px) {\n    gap: 15px;\n  }\n"]);
                return tv = function() {
                    return n
                }, n
            }

            function ty() {
                let n = (0, v.Z)(["\n  width: 326px;\n  min-height: 300px;\n  display: flex;\n  flex-wrap: wrap;\n\n  & > div {\n    height: 100%;\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  h3 {\n    padding: 18px 0 0;\n  }\n\n  h4 {\n    margin: 6px 0 15px;\n    font-weight: bold;\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0.07em;\n  }\n\n  h3,\n  h4 {\n    overflow: hidden;\n    span {\n      display: block;\n      transform: translate3d(0, 100%, 0);\n      transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.2s;\n    }\n  }\n\n  h4 span {\n    transition-delay: 0.3s;\n  }\n\n  p {\n    opacity: 0;\n    transform: translate3d(0, 20px, 0);\n    transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.4s,\n      opacity 0.3s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.4s;\n  }\n\n  &.active {\n    .ecoib {\n      span > span {\n        transform: translate3d(0, 0, 0);\n      }\n      &::after {\n        transform: scaleX(1) translateZ(0);\n      }\n    }\n\n    .ecoiic {\n      transform: scale(1) translateZ(0);\n    }\n    p {\n      opacity: 1;\n      transform: translate3d(0, 0, 0);\n    }\n    h3,\n    h4 {\n      span {\n        transform: translate3d(0, 0, 0);\n      }\n    }\n  }\n\n  @media all and (max-width: 390px) {\n    width: 100%;\n  }\n"]);
                return ty = function() {
                    return n
                }, n
            }

            function tj() {
                let n = (0, v.Z)(["\n  width: 100%;\n  font-weight: 600;\n  font-size: 12px;\n  position: relative;\n\n  & > span {\n    overflow: hidden;\n    display: block;\n  }\n  & > span > span {\n    display: block;\n    transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.5s;\n    transform: translate3d(0, 100%, 0);\n  }\n  .ecoibsplit {\n    display: inline-block;\n    padding: 0 7px;\n  }\n  &::after {\n    content: ' ';\n    display: block;\n    position: absolute;\n    left: 108px;\n    width: calc(100% - 108px);\n    height: 1px;\n    background: #000;\n    top: 9px;\n    transform-origin: left center;\n    transform: scaleX(0) translateZ(0);\n    transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.6s;\n  }\n"]);
                return tj = function() {
                    return n
                }, n
            }

            function tZ() {
                let n = (0, v.Z)(["\n  position: relative;\n  width: 69px;\n  height: 69px;\n  transform: scale(0) translateZ(0);\n  transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.1s;\n"]);
                return tZ = function() {
                    return n
                }, n
            }

            function tC() {
                let n = (0, v.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);
                return tC = function() {
                    return n
                }, n
            }

            function tk() {
                let n = (0, v.Z)(["\n  position: relative;\n  width: 32px;\n  height: 32px;\n"]);
                return tk = function() {
                    return n
                }, n
            }

            function tI() {
                let n = (0, v.Z)(["\n  0% {\n    transform: translate3d(-50%, -50%, 0);\n  }\n  25% {\n    transform: translate3d(58%, 58%, 0);\n  }\n  50% {\n    transform: translate3d(-50%, 167%, 0);\n  }\n  75% {\n    transform: translate3d(-167%, 58%, 0);\n  }\n  100% {\n    transform: translate3d(-50%, -50%, 0);\n  }\n"]);
                return tI = function() {
                    return n
                }, n
            }

            function tE() {
                let n = (0, v.Z)(["\n  0% {\n    transform: translate3d(-50%, -50%, 0);\n  }\n  25% {\n    transform: translate3d(-162%, 58%, 0);\n  }\n  50% {\n    transform: translate3d(-267%, -50%, 0);\n  }\n  75% {\n    transform: translate3d(-162%, -162%, 0);\n  }\n  100% {\n    transform: translate3d(-50%, -50%, 0);\n  }\n"]);
                return tE = function() {
                    return n
                }, n
            }

            function tN() {
                let n = (0, v.Z)(["\n  0% {\n    transform: translate3d(-50%, -50%, 0);\n  }\n  25% {\n    transform: translate3d(-162%, -162%, 0);\n  }\n  50% {\n    transform: translate3d(-50%, -267%, 0);\n  }\n  75% {\n    transform: translate3d(58%, -162%, 0);\n  }\n  100% {\n    transform: translate3d(-50%, -50%, 0);\n  }\n"]);
                return tN = function() {
                    return n
                }, n
            }

            function tz() {
                let n = (0, v.Z)(["\n  0% {\n    transform: translate3d(-50%, -50%, 0);\n  }\n  25% {\n    transform: translate3d(58%, -162%, 0);\n  }\n  50% {\n    transform: translate3d(162%, -50%, 0);\n  }\n  75% {\n    transform: translate3d(58%, 58%, 0);\n  }\n  100% {\n    transform: translate3d(-50%, -50%, 0);\n  }\n"]);
                return tz = function() {
                    return n
                }, n
            }

            function tP() {
                let n = (0, v.Z)(["\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n  border: 1.6px solid #242424;\n  box-sizing: border-box;\n  transform: translate3d(-50%, -50%, 0);\n\n  &.blue {\n    border-color: #ff8800;\n    left: 50%;\n    top: 17%;\n    animation: ", " 3s infinite cubic-bezier(0.25, 0.005, 0.24, 0.905);\n  }\n\n  &.micright {\n    left: 82%;\n    top: 50%;\n    animation: ", " 3s infinite cubic-bezier(0.25, 0.005, 0.24, 0.905);\n  }\n\n  &.micbtm {\n    left: 50%;\n    top: 85%;\n    animation: ", " 3s infinite cubic-bezier(0.25, 0.005, 0.24, 0.905);\n  }\n\n  &.micleft {\n    left: 15%;\n    top: 50%;\n    animation: ", " 3s infinite cubic-bezier(0.25, 0.005, 0.24, 0.905);\n  }\n"]);
                return tP = function() {
                    return n
                }, n
            }

            function tT() {
                let n = (0, v.Z)(["\n  0% {\n    stroke-dashoffset: 1000;\n  }\n  40% {\n    stroke-dashoffset: 1000;\n  }\n  65% {\n    stroke-dashoffset: 970;\n  }\n  95% {\n    stroke-dashoffset: 970;\n  }\n  100% {\n   stroke-dashoffset: 1000;\n  }\n"]);
                return tT = function() {
                    return n
                }, n
            }

            function tS() {
                let n = (0, v.Z)(["\n  0% {\n    transform: scaleX(0) translateZ(0);\n  }\n  25% {\n    transform: scaleX(1) translateZ(0);\n  }\n  95% {\n    transform: scaleX(1) translateZ(0);\n  }\n  100% {\n   transform: scaleX(0) translateZ(0);\n  }\n"]);
                return tS = function() {
                    return n
                }, n
            }

            function tM() {
                let n = (0, v.Z)(["\n  0% {\n    stroke-dashoffset: 1000;\n  }\n  10% {\n    stroke-dashoffset: 1000;\n  }\n  35% {\n    stroke-dashoffset: 970;\n  }\n  95% {\n    stroke-dashoffset: 970;\n  }\n  100% {\n   stroke-dashoffset: 1000;\n  }\n"]);
                return tM = function() {
                    return n
                }, n
            }

            function tR() {
                let n = (0, v.Z)(["\n  0% {\n    stroke-dashoffset: 1000;\n  }\n  25% {\n    stroke-dashoffset: 1000;\n  }\n  55% {\n    stroke-dashoffset: 970;\n  }\n  95% {\n    stroke-dashoffset: 970;\n  }\n  100% {\n   stroke-dashoffset: 1000;\n  }\n"]);
                return tR = function() {
                    return n
                }, n
            }

            function tO() {
                let n = (0, v.Z)(["\n  .icnBuildTop,\n  .icnBuildMid,\n  .icnBuildBtm {\n    stroke-dasharray: 1000;\n    stroke-dashoffset: 1000;\n  }\n  .icnBuildTop {\n    animation: ", " 3s infinite\n      cubic-bezier(0.25, 0.005, 0.24, 0.905);\n  }\n  .icnBuildMid {\n    animation: ", " 3s infinite\n      cubic-bezier(0.25, 0.005, 0.24, 0.905);\n  }\n  .icnBuildBtm {\n    animation: ", " 3s infinite\n      cubic-bezier(0.25, 0.005, 0.24, 0.905);\n  }\n  .icnBuildLast {\n    animation: ", " 3s infinite\n      cubic-bezier(0.25, 0.005, 0.24, 0.905);\n    transform-origin: center center;\n  }\n"]);
                return tO = function() {
                    return n
                }, n
            }

            function tA() {
                let n = (0, v.Z)(["\n  0% {\n    transform: translate3d(0, -2px, 0);\n  }\n  50% {\n    transform: translate3d(0, 2px, 0);\n  }\n  100% {\n    transform: translate3d(0, -2px, 0);\n  }\n"]);
                return tA = function() {
                    return n
                }, n
            }

            function tL() {
                let n = (0, v.Z)(["\n  circle,\n  .gwicir {\n    animation: ", " 6s infinite\n      cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  }\n"]);
                return tL = function() {
                    return n
                }, n
            }

            function tD() {
                let n = (0, v.Z)(["\n  0% {\n    transform: scaleY(0.5) scaleX(0) translateZ(0);\n  }\n  30% {\n    transform: scaleY(1) scaleX(1) translateZ(0);\n  }\n  95% {\n   transform: scaleY(1) scaleX(1) translateZ(0);\n  }\n  100% {\n   transform: scaleY(0.5) scaleX(0) translateZ(0);\n  }\n"]);
                return tD = function() {
                    return n
                }, n
            }

            function tF() {
                let n = (0, v.Z)(["\n  0% {\n    transform: scaleY(0) translateZ(0);\n  }\n  20% {\n    transform: scaleY(0) translateZ(0);\n  }\n  50% {\n    transform: scaleY(1) translateZ(0);\n  }\n  95%  {\n   transform: scaleY(1) translateZ(0);\n  }\n  100% {\n   transform: scaleY(0) translateZ(0);\n  }\n"]);
                return tF = function() {
                    return n
                }, n
            }

            function tV() {
                let n = (0, v.Z)(["\n  0% {\n    stroke-dashoffset: 1000;\n  }\n  30% {\n    stroke-dashoffset: 1000;\n  }\n  70% {\n    stroke-dashoffset: 970;\n  }\n  80% {\n    stroke-dashoffset: 970;\n  }\n  95% {\n   stroke-dashoffset: 1000;\n  }\n  100% {\n   stroke-dashoffset: 1000;\n  }\n"]);
                return tV = function() {
                    return n
                }, n
            }

            function tH() {
                let n = (0, v.Z)(["\n  animation: ", " 3s infinite\n    cubic-bezier(0.25, 0.005, 0.24, 0.905);\n\n  .mpicbtm {\n    transform-origin: bottom center;\n    animation: ", " 3s infinite\n      cubic-bezier(0.25, 0.005, 0.24, 0.905);\n  }\n\n  .mpicnmain {\n    stroke-dasharray: 1000;\n    stroke-dashoffset: 1000;\n    animation: ", " 3s infinite\n      cubic-bezier(0.25, 0.005, 0.24, 0.905);\n  }\n"]);
                return tH = function() {
                    return n
                }, n
            }
            let tB = y.ZP.section.withConfig({
                    componentId: "sc-dd2c60f2-0"
                })(tb()),
                tU = y.ZP.div.withConfig({
                    componentId: "sc-dd2c60f2-1"
                })(tw()),
                tX = y.ZP.ul.withConfig({
                    componentId: "sc-dd2c60f2-2"
                })(tv()),
                tG = y.ZP.li.withConfig({
                    componentId: "sc-dd2c60f2-3"
                })(ty()),
                t_ = y.ZP.div.withConfig({
                    componentId: "sc-dd2c60f2-4"
                })(tj()),
                tW = y.ZP.div.withConfig({
                    componentId: "sc-dd2c60f2-5"
                })(tZ()),
                tY = y.ZP.div.withConfig({
                    componentId: "sc-dd2c60f2-6"
                })(tC()),
                tq = y.ZP.div.withConfig({
                    componentId: "sc-dd2c60f2-7"
                })(tk()),
                tK = (0, y.F4)(tI()),
                tQ = (0, y.F4)(tE()),
                tJ = (0, y.F4)(tN()),
                t$ = (0, y.F4)(tz()),
                t0 = y.ZP.div.withConfig({
                    componentId: "sc-dd2c60f2-8"
                })(tP(), tK, tQ, tJ, t$),
                t1 = (0, y.F4)(tT()),
                t2 = (0, y.F4)(tS()),
                t5 = (0, y.F4)(tM()),
                t3 = (0, y.F4)(tR()),
                t4 = y.ZP.svg.withConfig({
                    componentId: "sc-dd2c60f2-9"
                })(tO(), t1, t3, t5, t2),
                t6 = (0, y.F4)(tA()),
                t8 = y.ZP.svg.withConfig({
                    componentId: "sc-dd2c60f2-10"
                })(tL(), t6),
                t9 = (0, y.F4)(tD()),
                t7 = (0, y.F4)(tF()),
                en = (0, y.F4)(tV()),
                et = y.ZP.svg.withConfig({
                    componentId: "sc-dd2c60f2-11"
                })(tH(), t9, t7, en),
                ee = () => (0, i.jsxs)(tq, {
                    children: [(0, i.jsx)(t0, {
                        className: "blue"
                    }), (0, i.jsx)(t0, {
                        className: "micright"
                    }), (0, i.jsx)(t0, {
                        className: "micbtm"
                    }), (0, i.jsx)(t0, {
                        className: "micleft"
                    })]
                }),
                ei = () => (0, i.jsxs)(t4, {
                    "aria-hidden": "true",
                    width: "28",
                    height: "21",
                    viewBox: "0 0 28 21",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        className: "icnBuildTop",
                        d: "M1 5L13.3905 1.18471C13.781 1.06446 14.199 1.06671 14.5882 1.19116L26.5 5",
                        stroke: "#ff8800",
                        strokeWidth: "1.62",
                        strokeLinecap: "round"
                    }), (0, i.jsx)("path", {
                        className: "icnBuildMid",
                        d: "M26.9808 10.5L14.4404 7.60393C14.1443 7.53554 13.8365 7.53554 13.5403 7.60393L1 10.5",
                        stroke: "#242424",
                        strokeWidth: "1.62",
                        strokeLinecap: "round"
                    }), (0, i.jsx)("path", {
                        className: "icnBuildBtm",
                        d: "M26.9808 15.5L14.2947 13.5469C14.093 13.5158 13.8877 13.5158 13.686 13.5469L1 15.5",
                        stroke: "#242424",
                        strokeWidth: "1.62",
                        strokeLinecap: "round"
                    }), (0, i.jsx)("path", {
                        className: "icnBuildLast",
                        d: "M26.9808 19.5H13.9904H1",
                        stroke: "#242424",
                        strokeWidth: "1.62",
                        strokeLinecap: "round"
                    })]
                }),
                ea = () => (0, i.jsxs)(t8, {
                    "aria-hidden": "true",
                    width: "45",
                    height: "33",
                    viewBox: "0 0 45 33",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("circle", {
                        cx: "23.0765",
                        cy: "16.0687",
                        r: "12.5826",
                        stroke: "#242424",
                        strokeWidth: "1.62353"
                    }), (0, i.jsx)("path", {
                        d: "M10.9998 17.5C5.37854 21.8205 2.38317 25.7164 3.43936 27.5458C4.96624 30.1904 14.8586 27.3376 25.5345 21.1738C36.2105 15.0101 43.6273 7.86944 42.1004 5.22481C41.1366 3.55541 36.8394 4.07656 31.1159 6.23829",
                        stroke: "#ff8800",
                        strokeWidth: "1.62353"
                    }), (0, i.jsx)("path", {
                        className: "gwicir",
                        d: "M11.8881 19.743C11.5101 18.589 11.3057 17.3564 11.3057 16.076C11.3057 9.57516 16.5756 4.30517 23.0765 4.30517C26.9174 4.30517 30.3286 6.14479 32.4771 8.991L33.9338 8.23029C31.5003 4.8686 27.5438 2.68164 23.0765 2.68164C15.679 2.68164 9.68213 8.67851 9.68213 16.076C9.68213 17.6277 9.94599 19.1178 10.4313 20.5038L11.8881 19.743Z",
                        fill: "#242424"
                    })]
                }),
                er = () => (0, i.jsxs)(et, {
                    "aria-hidden": "true",
                    width: "26",
                    height: "30",
                    viewBox: "0 0 26 30",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M13.5854 1.27883L24.5758 7.62413C24.944 7.8367 25.1708 8.22955 25.1708 8.6547V21.3453C25.1708 21.7704 24.944 22.1633 24.5758 22.3759L13.5854 28.7212C13.2172 28.9337 12.7636 28.9337 12.3954 28.7212L1.405 22.3759C1.03681 22.1633 0.81 21.7704 0.81 21.3453V8.6547C0.81 8.22955 1.03681 7.8367 1.405 7.62413L12.3954 1.27883C12.7636 1.06626 13.2172 1.06626 13.5854 1.27883Z",
                        stroke: "#242424",
                        strokeWidth: "1.62"
                    }), (0, i.jsx)("path", {
                        className: "mpicnmain",
                        d: "M7.22119 11.5386L11.9614 14.3827C12.5948 14.7627 13.386 14.7627 14.0194 14.3827L18.7597 11.5386",
                        stroke: "#ff8800",
                        strokeWidth: "1.62",
                        strokeLinecap: "round"
                    }), (0, i.jsx)("path", {
                        className: "mpicbtm",
                        d: "M13.81 20.0008C13.8105 19.5535 13.4482 19.1905 13.0008 19.19C12.5535 19.1895 12.1905 19.5518 12.19 19.9992L13.81 20.0008ZM13.8002 29.3855L13.81 20.0008L12.19 19.9992L12.1802 29.3838L13.8002 29.3855Z",
                        fill: "#242424"
                    })]
                }),
                es = n => {
                    let {
                        title: t,
                        subtitle: e,
                        desc: a,
                        index: s
                    } = n, o = (0, r.useRef)(), [l, d] = (0, r.useState)(!1);
                    return (0, nO.zX)("inview", () => {}), (0, i.jsx)(tG, {
                        className: l ? "active" : "",
                        children: (0, i.jsxs)(tu, {
                            ref: o,
                            overrideInviewConfig: {
                                threshold: .5
                            },
                            onEnterInview: () => {
                                d(!0)
                            },
                            children: [(0, i.jsxs)("div", {
                                children: [(0, i.jsxs)(tW, {
                                    className: "ecoiic",
                                    children: [(0, i.jsx)("svg", {
                                        "aria-hidden": "true",
                                        width: "69",
                                        height: "69",
                                        viewBox: "0 0 69 69",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, i.jsx)("path", {
                                            opacity: "0.5",
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C34.4163 0 34.3327 0.000298116 34.2491 0.000893345C52.9121 0.1348 68 15.3054 68 34C68 52.7777 52.7777 68 34 68C15.3054 68 0.1348 52.9121 0.000893345 34.2491C0.000298116 34.3327 0 34.4163 0 34.5C0 53.5538 15.4462 69 34.5 69Z",
                                            fill: "#242424"
                                        })
                                    }), (0, i.jsxs)(tY, {
                                        children: ["1" === s && (0, i.jsx)(ea, {}), "2" === s && (0, i.jsx)(ee, {}), "3" === s && (0, i.jsx)(er, {}), "4" === s && (0, i.jsx)(ei, {})]
                                    })]
                                }), (0, i.jsx)("h3", {
                                    children: (0, i.jsx)("span", {
                                        children: t
                                    })
                                }), (0, i.jsx)("h4", {
                                    children: (0, i.jsx)("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: e
                                        }
                                    })
                                }), (0, i.jsx)("p", {
                                    className: "sml",
                                    children: a
                                })]
                            }), (0, i.jsx)(t_, {
                                className: "ecoib",
                                children: (0, i.jsx)("span", {
                                    children: (0, i.jsxs)("span", {
                                        children: ["PROJECT ", (0, i.jsx)("span", {
                                            className: "ecoibsplit",
                                            children: "//"
                                        }), " 0", s]
                                    })
                                })
                            })]
                        })
                    })
                },
                eo = () => {
                    let n = (0, r.useRef)();
                    return (0, i.jsx)("div", {
                        className: "ecotitle",
                        children: (0, i.jsx)(tu, {
                            ref: n,
                            overrideInviewConfig: {
                                threshold: .5
                            },
                            children: (0, i.jsxs)("h2", {
                                children: [(0, i.jsx)("span", {
                                    children: (0, i.jsx)("span", {
                                        children: "THE"
                                    })
                                }), " ", (0, i.jsx)("span", {
                                    children: (0, i.jsx)("span", {
                                        children: "meta ninjaz "
                                    })
                                }), " ", (0, i.jsx)("span", {
                                    children: (0, i.jsx)("span", {
                                        children: "ECOSYSTEM"
                                    })
                                }), (0, i.jsx)(tg, {})]
                            })
                        })
                    })
                },
                el = n => (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(tB, {
                        className: "exphide active",
                        ...n,
                        children: (0, i.jsxs)(tU, {
                            children: [(0, i.jsx)(eo, {}), (0, i.jsxs)(tX, {
                                children: [(0, i.jsx)(es, {
                                    title: "GEN WORLD",
                                    subtitle: "THE MAIN HUB OF THE meta ninjaz METAVERSE.",
                                    desc: "A place where all the communities gather to create and exchange in a virtual world made of lands fully owned by their respective NFT holder.",
                                    index: "1"
                                }), (0, i.jsx)(es, {
                                    title: "meta ninjaz MICROVERSES",
                                    subtitle: "METAVERSES FOR VIRTUAL EVENTS AND<br/> NFTS COMMUNITIES.",
                                    desc: "Fully customize your Microverse from the shape of the world, to the physics rules and the 3D art style and mint it as a NFTs in just 1 click.",
                                    index: "2"
                                }), (0, i.jsx)(es, {
                                    title: "meta ninjaz MARKETPLACE",
                                    subtitle: "THE MOST USER-FRIENDLY NFT MARKETPLACE.",
                                    desc: "Free trade your creations and properties: wearables, avatars, lands, and even whole Microverses in our decentralized Marketplace or directly in the Metaverse.",
                                    index: "3"
                                }), (0, i.jsx)(es, {
                                    title: "meta ninjaz BUILDER",
                                    subtitle: "THE UNITY BUILDER FOR THE WEB.",
                                    desc: "A simple but powerful web-based Drag & Drop editor. Create experiences on top of your land in the GEN world, Microverse and more.",
                                    index: "4"
                                })]
                            })]
                        })
                    })
                });
            var ed = e(4504),
                ec = e(6892);

            function ep() {
                let n = (0, v.Z)(["\n  position: relative;\n  width: 100vw;\n  min-height: 100vh;\n  min-height: var(--app-height);\n"]);
                return ep = function() {
                    return n
                }, n
            }

            function eh() {
                let n = (0, v.Z)(["\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  min-height: 100vh;\n  min-height: var(--app-height);\n  overflow: hidden;\n  display: flex;\n  transition: opacity 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n\n  button,\n  a {\n    pointer-events: all;\n  }\n\n  &.hide {\n    opacity: 0;\n    button,\n    a {\n      pointer-events: none;\n    }\n  }\n\n  ul li {\n    transform: scale(0) translateZ(0);\n    transition: transform 0.7s cubic-bezier(0.25, 0.005, 0.24, 0.905) 1.5s;\n    &:nth-child(2) {\n      transition-delay: 1.55s;\n    }\n    &:nth-child(3) {\n      transition-delay: 1.6s;\n    }\n    &:nth-child(4) {\n      transition-delay: 1.65s;\n    }\n    &:nth-child(5) {\n      transition-delay: 1.7s;\n    }\n  }\n\n  &.active {\n    h2 > span,\n    .subtitle,\n    .madby {\n      span {\n        transform: translate3d(0, 0, 0) rotate(0deg);\n      }\n    }\n    .sml,\n    svg {\n      transform: translate3d(0, 0, 0);\n      opacity: 1;\n    }\n\n    .cprright {\n      span {\n        transform: translate3d(0, 0, 0);\n      }\n    }\n\n    ul li {\n      transform: scale(1) translateZ(0);\n    }\n  }\n"]);
                return eh = function() {
                    return n
                }, n
            }

            function ef() {
                let n = (0, v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n"]);
                return ef = function() {
                    return n
                }, n
            }

            function ex() {
                let n = (0, v.Z)(["\n  padding: 0 0 60px 85px;\n  p {\n    max-width: 375px;\n    width: 100%;\n    &.sml {\n      opacity: 0;\n      transition: transform 0.9s cubic-bezier(0.25, 0.005, 0.24, 0.905) 1s,\n        opacity 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 1s;\n      transform: translate3d(0, 24px, 0);\n    }\n    &.subtitle {\n      margin: 14px 0 18px;\n      overflow: hidden;\n      span {\n        display: block;\n        transition: transform 0.9s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.9s;\n        transform: translate3d(0, 100%, 0);\n      }\n    }\n  }\n\n  h2 {\n    & > span {\n      display: block;\n      overflow: hidden;\n      span {\n        display: block;\n        transform-origin: left center;\n        transition: transform 0.9s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.6s;\n        transform: translate3d(0, 100%, 0) rotate(5deg);\n        &.ttlbtmmeta {\n          transition-delay: 0.7s;\n        }\n      }\n    }\n  }\n\n  @media all and (min-width: 768px) and (max-height: 700px) {\n    padding: 0 0 60px 85px;\n  }\n\n  @media all and (min-width: 768px) and (max-height: 560px) {\n    padding: 0 0 30px 85px;\n  }\n\n  @media all and (max-width: 1360px) {\n    padding: 0 0 60px 60px;\n  }\n\n  @media all and (max-width: 840px) {\n    padding: 0 0 80px 30px;\n  }\n\n  @media all and (max-width: 768px) {\n    padding: 0 0 45px 30px;\n  }\n\n  @media all and (max-width: 520px) {\n    padding: 0 30px 40px;\n    width: 100%;\n    h2 {\n      font-size: 40px;\n      line-height: 42px;\n    }\n    p.subtitle {\n      max-width: 210px;\n    }\n  }\n\n  @media all and (max-width: 360px) {\n    padding: 0 15px 45px;\n    h2 {\n      font-size: 36px;\n      line-height: 38px;\n    }\n  }\n"]);
                return ex = function() {
                    return n
                }, n
            }

            function em() {
                let n = (0, v.Z)(["\n  width: 213px;\n  padding: 78px 0 0;\n\n  @media all and (min-width: 768px) and (max-height: 700px) {\n    padding: 45px 0 0;\n  }\n\n  @media all and (max-width: 768px) {\n    padding: 50px 0 0;\n  }\n\n  @media all and (max-width: 520px) {\n    padding: 30px 0 0;\n  }\n"]);
                return em = function() {
                    return n
                }, n
            }

            function eu() {
                let n = (0, v.Z)(["\n  position: absolute;\n  /* top: 19px; */\n  top: 40px;\n  right: 30px;\n  filter: invert(1);\n\n  @media all and (max-width: 520px) {\n    right: 20px;\n    ul {\n      margin: 0;\n      padding: 5px 0 0;\n      flex-wrap: wrap;\n      width: 37px;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n\n  @media all and (max-width: 360px) {\n    display: none;\n  }\n"]);
                return eu = function() {
                    return n
                }, n
            }

            function eg() {
                let n = (0, v.Z)(["\n  width: 196px;\n  padding: 0 0 104px;\n  svg {\n    width: 100%;\n    transition: transform 0.7s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.55s,\n      opacity 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.55s;\n    opacity: 0;\n    transform: translate3d(0, 30px, 0);\n  }\n\n  @media all and (min-width: 768px) and (max-height: 700px) {\n    padding: 0 0 7vh;\n  }\n\n  @media all and (max-width: 768px) {\n    padding: 0 0 45px;\n    width: 170px;\n  }\n\n  @media all and (max-width: 520px) {\n    width: 140px;\n    padding: 0 0 20px;\n  }\n\n  @media all and (max-width: 360px) {\n    padding: 0 0 5px;\n  }\n"]);
                return eg = function() {
                    return n
                }, n
            }

            function eb() {
                let n = (0, v.Z)(["\n  position: absolute;\n  left: 80px;\n  top: 80px;\n  font-size: 8px;\n  line-height: 13px;\n  letter-spacing: 0.15em;\n  color: #000;\n  overflow: hidden;\n  span {\n    display: block;\n    transform: translate3d(0, 100%, 0);\n    transition: transform 0.7s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.4s;\n  }\n  a {\n    @media (pointer: fine) {\n      transition: color 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n      &:hover {\n        color: ", ";\n      }\n    }\n  }\n\n  @media all and (min-width: 768px) and (max-height: 560px) {\n    top: 30px;\n  }\n\n  @media all and (max-width: 1360px) {\n    left: 60px;\n  }\n\n  @media all and (max-width: 840px) {\n    left: 30px;\n    top: 45px;\n  }\n\n  @media all and (max-width: 520px) {\n    top: 30px;\n  }\n"]);
                return eb = function() {
                    return n
                }, n
            }

            function ew() {
                let n = (0, v.Z)(["\n  position: absolute;\n  left: 100%;\n  top: 50%;\n  font-size: 8px;\n  line-height: 13px;\n  text-align: right;\n  letter-spacing: 0.3em;\n  color: #000;\n  opacity: 0.5;\n  white-space: nowrap;\n  transform-origin: left center;\n  transform: rotate(-90deg) translate3d(-50%, -30%, 0);\n  display: flex;\n  span {\n    display: block;\n    padding: 0 15px 0 0;\n    transform: translate3d(0, 10px, 0);\n    transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 1.5s;\n  }\n  svg {\n    width: 8px;\n    transform: rotate(90deg) translate3d(2px, 0px, 0);\n  }\n\n  @media all and (max-width: 440px) {\n    display: none;\n  }\n"]);
                return ew = function() {
                    return n
                }, n
            }

            function ev() {
                let n = (0, v.Z)(["\n  0% {\n    transform: scaleX(0) translate3d(0, 0, 0);\n  }\n  50% {\n    transform: scaleX(1) translate3d(0, 0, 0);\n  }\n  100% {\n   transform: scaleX(1)  translate3d(-100%, 0, 0);\n  }\n"]);
                return ev = function() {
                    return n
                }, n
            }

            function ey() {
                let n = (0, v.Z)(["\n  position: absolute;\n  right: 40px;\n  bottom: 70px;\n  font-size: 9px;\n  line-height: 29px;\n  text-align: right;\n  letter-spacing: 0.3em;\n  white-space: nowrap;\n  transform-origin: top right;\n  transform: rotate(-90deg) translate3d(50%, -100%, 0);\n  display: flex;\n  &::before,\n  &::after {\n    content: ' ';\n    position: absolute;\n    width: 29px;\n    height: 1px;\n    background: #ff8800;\n    left: -21px;\n    top: 2px;\n    transform-origin: top right;\n    transform: rotate(-65deg) scale(0) translateZ(0);\n    transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 2.1s;\n  }\n  &::after {\n    left: -28px;\n    transition-delay: 1.9s;\n  }\n  span {\n    display: block;\n  }\n  & > span {\n    position: relative;\n    color: #686868;\n    padding: 0 20px 0 15px;\n    opacity: 0.8;\n    overflow: hidden;\n    span {\n      transform: translate3d(0, 20px, 0);\n      transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 2.2s;\n    }\n    &::before {\n      content: ' ';\n      display: block;\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      background: #686868;\n      opacity: 0.8;\n      width: 100%;\n      height: 1px;\n      transform-origin: right center;\n      transform: scaleX(0) translate3d(0, 0, 0);\n    }\n  }\n\n  &.active {\n    &::before,\n    &::after {\n      transform: rotate(-65deg) scale(1) translateZ(0);\n    }\n    & > span {\n      span {\n        transform: translate3d(0, 0px, 0);\n      }\n      &::before {\n        animation: ", " 1s infinite\n          cubic-bezier(0.25, 0.005, 0.24, 0.905);\n        animation-delay: 2s;\n      }\n    }\n  }\n\n  @media all and (max-width: 500px) {\n    right: 5px;\n    bottom: 40px;\n  }\n"]);
                return ey = function() {
                    return n
                }, n
            }

            function ej() {
                let n = (0, v.Z)(["\n  display: flex;\n  column-gap: 10px;\n  button {\n    padding: 0 15px;\n  }\n\n  @media all and (max-width: 390px) {\n    column-gap: 5px;\n    button {\n      padding: 0 10px;\n    }\n  }\n"]);
                return ej = function() {
                    return n
                }, n
            }
            let eZ = y.ZP.div.withConfig({
                    componentId: "sc-2b6a84d2-0"
                })(ep()),
                eC = y.ZP.div.withConfig({
                    componentId: "sc-2b6a84d2-1"
                })(eh()),
                ek = y.ZP.div.withConfig({
                    componentId: "sc-2b6a84d2-2"
                })(ef()),
                eI = y.ZP.div.withConfig({
                    componentId: "sc-2b6a84d2-3"
                })(ex()),
                eE = y.ZP.div.withConfig({
                    componentId: "sc-2b6a84d2-4"
                })(em()),
                eN = y.ZP.div.withConfig({
                    componentId: "sc-2b6a84d2-5"
                })(eu()),
                ez = y.ZP.div.withConfig({
                    componentId: "sc-2b6a84d2-6"
                })(eg()),
                eP = y.ZP.div.withConfig({
                    componentId: "sc-2b6a84d2-7"
                })(eb(), ec.tI),
                eT = y.ZP.div.withConfig({
                    componentId: "sc-2b6a84d2-8"
                })(ew()),
                eS = (0, y.F4)(ev()),
                eM = y.ZP.div.withConfig({
                    componentId: "sc-2b6a84d2-9"
                })(ey(), eS),
                eR = y.ZP.div.withConfig({
                    componentId: "sc-2b6a84d2-10"
                })(ej()),
                eO = n => {
                    let {
                        active: t
                    } = n, [e, a] = (0, r.useState)(!1);
                    return (0, r.useEffect)(() => {
                        setTimeout(() => {
                            t && a(!0)
                        }, 500)
                    }, [t]), (0, i.jsx)(eR, {
                        children: (0, i.jsx)(k.Z, {
                            animate: !0,
                            animateDelay: .6,
                            active: e ? "active" : "",
                            action: () => {
                                window.open("https://alpha.meta ninjaz .co/", "_blank")
                            },
                            label: "TRY NOW"
                        })
                    })
                },
                eA = () => {
                    let n = (0, ed.U2)(n => !n.active),
                        t = (0, a.oR)(n => n.headScrolled),
                        e = () => {
                            let n = document.documentElement;
                            n.style.setProperty("--app-height", "".concat(window.innerHeight, "px"))
                        };
                    return (0, r.useEffect)(() => (window.addEventListener("resize", e), e(), () => {
                        window.removeEventListener("resize", e)
                    }), []), (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(eZ, {}), (0, i.jsxs)(eC, {
                            className: "".concat(n ? "active" : "", " ").concat(t ? "hide" : ""),
                            children: [(0, i.jsx)(ek, {
                                children: (0, i.jsxs)(eI, {
                                    children: [(0, i.jsx)(ez, {
                                        children: (0, i.jsx)(w.RU, {
                                            color: "#242424"
                                        })
                                    }), (0, i.jsxs)("h2", {
                                        children: [(0, i.jsx)("span", {
                                            children: (0, i.jsx)("span", {
                                                children: "META"
                                            })
                                        }), (0, i.jsx)("span", {
                                            children: (0, i.jsx)("span", {
                                                className: "ttlbtmmeta",
                                                children: " NINJAZ"
                                            })
                                        })]
                                    }), (0, i.jsx)("p", {
                                        className: "subtitle",
                                        children: (0, i.jsx)("span", {
                                            children: "A BARRIER-FREE EXPERIENCE FOR MILLIONS OF USERS."
                                        })
                                    }), (0, i.jsx)("p", {
                                        className: "sml",
                                        children: "A Metaverse should be open to everyone. meta ninjaz has been conceived with web technologies, to be accessible from any device through the browser in just 1 click."
                                    }), (0, i.jsx)(eE, {
                                        children: (0, i.jsx)(eO, {
                                            active: n
                                        })
                                    })]
                                })
                            }), (0, i.jsx)(eM, {
                                className: n ? "active" : "",
                                children: (0, i.jsx)("span", {
                                    className: "rubik",
                                    children: (0, i.jsx)("span", {
                                        children: "SCROLL DOWN"
                                    })
                                })
                            }), (0, i.jsx)(eP, {
                                className: "madby",
                                children: (0, i.jsxs)("span", {
                                    children: ["A METAVERSE BY", " ", (0, i.jsx)("a", {
                                        href: "https://utsubo.co/",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "TRINITY"
                                    })]
                                })
                            }), (0, i.jsx)(eN, {
                                children: (0, i.jsx)(w.sD, {})
                            }), (0, i.jsxs)(eT, {
                                className: "cprright",
                                children: [(0, i.jsx)("span", {
                                    children: "\xa9meta ninjaz ALL RIGHTS RESERVED 2022"
                                }), (0, i.jsx)(tg, {})]
                            })]
                        })]
                    })
                };
            var eL = e(6615);

            function eD() {
                let n = (0, v.Z)(["\n  position: relative;\n  width: 100%;\n  min-height: 100vh;\n  overflow: hidden;\n  display: flex;\n  align-items: flex-end;\n  padding: 60px 0 0;\n\n  & > div {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-width: 670px;\n    background: #fff;\n    padding: 0px 100px 60px 80px;\n    min-height: 80vh;\n\n    &::before,\n    &::after {\n      content: ' ';\n      position: absolute;\n      z-index: 0;\n      top: -83px;\n    }\n\n    &::before {\n      left: 0;\n      background: #fff;\n      width: calc(100% - 75px);\n      height: 84px;\n    }\n    &::after {\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 84px 0 0 75px;\n      border-color: transparent transparent transparent #ff8800;\n      right: 0;\n    }\n\n    @media all and (max-width: 1100px) {\n      max-width: 630px;\n      padding: 30px 80px 30px 60px;\n    }\n\n    @media all and (max-width: 980px) {\n      max-width: 65vw;\n    }\n\n    @media all and (max-width: 840px) {\n      padding: 60px 30px 30px;\n    }\n\n    @media all and (max-width: 767px) {\n      max-width: none;\n    }\n\n    @media all and (max-width: 360px) {\n      padding: 45px 15px;\n    }\n  }\n"]);
                return eD = function() {
                    return n
                }, n
            }

            function eF() {
                let n = (0, v.Z)(["\n  position: relative;\n  svg {\n    position: absolute;\n    left: 0;\n    top: -30px;\n    transform-origin: top center;\n    transform: scale(0) translate3d(0, -50px, 0);\n    transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n    z-index: 1;\n  }\n  h2 {\n    padding: 17px 0 0;\n  }\n  h5,\n  h2 {\n    overflow: hidden;\n    span {\n      display: block;\n      transform: translate3d(0, 100%, 0);\n      transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n    }\n  }\n  h2 span {\n    transition-delay: 0.1s;\n  }\n  &.active {\n    svg {\n      transform: scale(1) translate3d(0, 0px, 0);\n    }\n    h5,\n    h2 {\n      span {\n        transform: translate3d(0, 0%, 0);\n      }\n    }\n  }\n  @media all and (max-width: 1260px) {\n    h2 {\n      font-size: 40px;\n      line-height: 38px;\n    }\n  }\n  @media all and (max-width: 520px) {\n    h2 {\n      font-size: 32px;\n      line-height: 30px;\n    }\n  }\n"]);
                return eF = function() {
                    return n
                }, n
            }

            function eV() {
                let n = (0, v.Z)(["\n  padding: 60px 0 0;\n  ul {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 54px;\n  }\n\n  @media all and (max-width: 840px) {\n    ul {\n      gap: 0;\n      width: 100%;\n      li {\n        padding: 0 0 45px;\n      }\n    }\n  }\n"]);
                return eV = function() {
                    return n
                }, n
            }

            function eH() {
                let n = (0, v.Z)(["\n  h3 {\n    margin: 0 0 13px;\n    overflow: hidden;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 20px;\n    letter-spacing: 0.16em;\n    span {\n      display: block;\n      transform: translate3d(0, 100%, 0);\n      transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n    }\n  }\n\n  .active {\n    h3 {\n      span {\n        transform: translate3d(0, 0%, 0);\n      }\n    }\n    p span {\n      opacity: 1;\n      transform: translate3d(0, 0, 0);\n    }\n    .separator {\n      .point,\n      .bord {\n        transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.1s;\n        transform: scaleX(1) translateZ(0);\n      }\n    }\n  }\n"]);
                return eH = function() {
                    return n
                }, n
            }

            function eB() {
                let n = (0, v.Z)(["\n  display: block;\n  font-weight: 400;\n  span {\n    padding: 15px 0 5px;\n    display: block;\n    opacity: 0;\n    transform: translate3d(0, 30px, 0);\n    transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.2s,\n      opacity 0.3s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.2s;\n  }\n  &:nth-child(2) span {\n    transition-delay: 0.3s, 0.3s;\n  }\n  &:nth-child(3) span {\n    transition-delay: 0.4s, 0.4s;\n  }\n"]);
                return eB = function() {
                    return n
                }, n
            }
            let eU = y.ZP.section.withConfig({
                    componentId: "sc-bd1bea87-0"
                })(eD()),
                eX = y.ZP.div.withConfig({
                    componentId: "sc-bd1bea87-1"
                })(eF()),
                eG = y.ZP.div.withConfig({
                    componentId: "sc-bd1bea87-2"
                })(eV()),
                e_ = y.ZP.li.withConfig({
                    componentId: "sc-bd1bea87-3"
                })(eH()),
                eW = y.ZP.p.withConfig({
                    componentId: "sc-bd1bea87-4"
                })(eB()),
                eY = n => {
                    let {
                        title: t,
                        desc: e
                    } = n, a = (0, r.useRef)();
                    return (0, i.jsx)(e_, {
                        children: (0, i.jsxs)(tu, {
                            ref: a,
                            overrideInviewConfig: {
                                threshold: .5
                            },
                            children: [(0, i.jsx)("h3", {
                                children: (0, i.jsx)("span", {
                                    children: t
                                })
                            }), (0, i.jsx)(eL.Z, {}), (0, i.jsx)("div", {
                                children: e.map((n, t) => (0, i.jsx)(eW, {
                                    className: "sml",
                                    children: (0, i.jsx)("span", {
                                        children: n
                                    })
                                }, t))
                            })]
                        })
                    })
                },
                eq = () => {
                    let n = (0, r.useRef)(),
                        [t, e] = (0, r.useState)(!1);
                    return (0, i.jsx)(tu, {
                        ref: n,
                        overrideInviewConfig: {
                            threshold: .5
                        },
                        onEnterInview: () => {
                            e(!0)
                        },
                        children: (0, i.jsxs)(eX, {
                            className: t ? "active" : "",
                            children: [(0, i.jsx)(tg, {}), (0, i.jsx)("h5", {
                                className: "rubik",
                                children: (0, i.jsx)("span", {
                                    children: "THE meta ninjaz FOUNDATION STONE"
                                })
                            }), (0, i.jsx)("h2", {
                                children: (0, i.jsx)("span", {
                                    children: "THE PROLOGUE"
                                })
                            })]
                        })
                    })
                },
                eK = () => (0, i.jsx)(eU, {
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(eq, {}), (0, i.jsx)(eG, {
                                children: (0, i.jsxs)("ul", {
                                    children: [(0, i.jsx)(eY, {
                                        title: "THE BEGINNING",
                                        desc: ["The meta ninjaz team worked behind the scenes for months building our 1st Microverse experience: The prologue.", "This is a demonstration of our technical expertise and a sample of what we will offer to our community in the future.", "Incarnate The Ancients avatars for a limited time only during our alpha and discover the world of meta ninjaz ."]
                                    }), (0, i.jsx)(eY, {
                                        title: "THE ANCIENTS",
                                        desc: ["The creators and protectors of the Metaverse. ", "Through centuries, they survived countless bear markets, learned Satoshi Nakamoto's true identity, and were there for the release of Ethereum 3.0 in 2094.", "Master of the hodl philosophy, they are now the perfect link between nature and technology."]
                                    })]
                                })
                            })]
                        })
                    })
                });

            function eQ() {
                let n = (0, v.Z)(["\n  position: relative;\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  // background: #242424;\n  color: #f9f9f9;\n  padding: 132px 0 0;\n\n  @media all and (max-width: 920px) {\n    flex-wrap: wrap;\n    padding: 132px 0 0 100px;\n  }\n\n  @media all and (max-width: 720px) {\n    padding: 132px 0 0 60px;\n  }\n\n  @media all and (max-width: 620px) {\n    padding: 132px 0 0 30px;\n  }\n\n  @media all and (max-width: 420px) {\n    padding: 62px 0 0 15px;\n  }\n"]);
                return eQ = function() {
                    return n
                }, n
            }

            function eJ() {
                let n = (0, v.Z)(["\n  width: 43.08vw;\n  flex-shrink: 0;\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n\n  @media all and (max-width: 980px) {\n    width: 39vw;\n  }\n\n  @media all and (max-width: 920px) {\n    width: 100vw;\n    justify-content: normal;\n    padding: 0 0 0 50px;\n  }\n\n  @media all and (max-width: 720px) {\n    padding: 0 0 0 30px;\n  }\n\n  @media all and (max-width: 620px) {\n    padding: 0 0 0 12px;\n  }\n\n  @media all and (max-width: 520px) {\n    padding: 0 0 0 6px;\n  }\n"]);
                return eJ = function() {
                    return n
                }, n
            }

            function e$() {
                let n = (0, v.Z)(["\n  padding: 0 190px 0 0;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: start;\n  justify-content: flex-end;\n  & > div {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n  }\n  h2 {\n    position: relative;\n    padding: 38px 0 0;\n    svg {\n      position: absolute;\n      right: 10px;\n      top: 0;\n      transform: translate3d(0, -30px, 0) scale(0);\n      transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n    }\n    span {\n      display: block;\n    }\n    & > span {\n      overflow: hidden;\n      span {\n        transform: translate3d(0, 100%, 0);\n        transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n      }\n      &:nth-child(3) span {\n        transition-delay: 0.1s;\n      }\n    }\n  }\n  p {\n    position: relative;\n    font-size: 14px;\n    line-height: 15px;\n    letter-spacing: 0.12em;\n    margin: 125px 0 0;\n    padding: 0 0 0 23px;\n    span {\n      display: block;\n    }\n    & > span {\n      overflow: hidden;\n      span {\n        transform: translate3d(0, 100%, 0);\n        transition: transform 0.4s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.3s;\n      }\n      &:nth-child(2) span {\n        transition-delay: 0.4s;\n      }\n      &:nth-child(3) span {\n        transition-delay: 0.5s;\n      }\n      &:nth-child(4) span {\n        transition-delay: 0.6s;\n      }\n      &:nth-child(5) span {\n        transition-delay: 0.7s;\n      }\n      &:nth-child(6) span {\n        transition-delay: 0.8s;\n      }\n    }\n    &::before {\n      content: ' ';\n      display: block;\n      position: absolute;\n      width: 3px;\n      height: 16px;\n      left: 0;\n      top: 3px;\n      background: #f9f9f9;\n      transform-origin: top center;\n      transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.3s;\n      transform: scaleY(0) translateZ(0);\n    }\n  }\n\n  @media all and (max-width: 1280px) {\n    padding: 0 100px 0 0;\n  }\n  @media all and (max-width: 1260px) {\n    h2 {\n      font-size: 40px;\n      line-height: 38px;\n    }\n  }\n  @media all and (max-width: 1024px) {\n    padding: 0 60px 0 0;\n  }\n\n  @media all and (max-width: 920px) {\n    justify-content: normal;\n    flex-wrap: nowrap;\n    align-items: flex-end;\n    & > div {\n      justify-content: normal;\n    }\n\n    p {\n      margin: 0 0 0 30px;\n    }\n  }\n\n  @media all and (max-width: 520px) {\n    h2 {\n      font-size: 32px;\n      line-height: 30px;\n    }\n  }\n\n  @media all and (max-width: 480px) {\n    flex-wrap: wrap;\n    p {\n      margin: 20px 0 0;\n      max-width: 300px;\n      br {\n        display: none;\n      }\n    }\n  }\n\n  &.active {\n    h2 {\n      svg {\n        transform: translate3d(0, 0px, 0) scale(1);\n      }\n      & > span span {\n        transform: translate3d(0, 0, 0);\n      }\n    }\n    p {\n      & > span span {\n        transform: translate3d(0, 0, 0);\n      }\n      &::before {\n        transform: scaleY(1) translateZ(0);\n      }\n    }\n  }\n"]);
                return e$ = function() {
                    return n
                }, n
            }

            function e0() {
                let n = (0, v.Z)(["\n  padding: 46px 0 150px;\n  width: 100%;\n\n  @media all and (max-width: 480px) {\n    padding: 30px 0 60px;\n  }\n"]);
                return e0 = function() {
                    return n
                }, n
            }

            function e1() {
                let n = (0, v.Z)(["\n  .separator {\n    .pointr {\n      display: none;\n    }\n    .bord {\n      opacity: 0.2;\n    }\n  }\n\n  .active {\n    .sml,\n    .rdcq,\n    .rdytop,\n    .rdybtm {\n      span {\n        transform: translate3d(0, 0, 0);\n      }\n    }\n    .pfi {\n      &::before {\n        transform: scaleX(1) translateZ(0);\n      }\n      span {\n        transform: translate3d(0, 0, 0);\n      }\n    }\n\n    .rpc {\n      h3,\n      p {\n        span {\n          transform: translate3d(0, 0, 0);\n        }\n      }\n    }\n    .rdy {\n      &::after {\n        transform: scaleX(1) translateZ(0);\n      }\n    }\n    .separator {\n      .point,\n      .bord {\n        transition: transform 0.8s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s;\n        transform: scaleX(1) translateZ(0);\n      }\n    }\n  }\n"]);
                return e1 = function() {
                    return n
                }, n
            }

            function e2() {
                let n = (0, v.Z)(["\n  display: flex;\n  padding: 50px 0;\n  @media all and (max-width: 460px) {\n    flex-wrap: wrap;\n  }\n"]);
                return e2 = function() {
                    return n
                }, n
            }

            function e5() {
                let n = (0, v.Z)(["\n  width: 100%;\n  max-width: 270px;\n  p.sml {\n    color: #f9f9f9;\n    opacity: 0.7;\n    overflow: hidden;\n    span {\n      display: block;\n      transform: translate3d(0, 100%, 0);\n      transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.1s;\n    }\n  }\n\n  @media all and (max-width: 1160px) {\n    max-width: 200px;\n  }\n\n  @media all and (max-width: 590px) {\n    max-width: 140px;\n  }\n"]);
                return e5 = function() {
                    return n
                }, n
            }

            function e3() {
                let n = (0, v.Z)(["\n  padding: 7px 0 0 0;\n  display: flex;\n  position: relative;\n"]);
                return e3 = function() {
                    return n
                }, n
            }

            function e4() {
                let n = (0, v.Z)(["\n  font-size: 86px;\n  line-height: 86px;\n  letter-spacing: 0.05em;\n  display: flex;\n  overflow: hidden;\n  &.rdcqn {\n    & > span {\n      display: block;\n      transition: transform 0.7s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s;\n      transform: translate3d(0, 100%, 0);\n      &:nth-child(2) {\n        transition-delay: 0.05s;\n      }\n      &:nth-child(3) {\n        transition-delay: 0.1s;\n      }\n    }\n  }\n  &.small {\n    font-size: 45px;\n    line-height: 100%;\n    display: block;\n    span {\n      display: block;\n    }\n    & > span {\n      overflow: hidden;\n      &:nth-child(2) {\n        span {\n          transition-delay: 0.05s;\n        }\n      }\n    }\n    span > span {\n      transition: transform 0.7s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s;\n      transform: translate3d(0, 100%, 0);\n    }\n  }\n\n  @media all and (max-width: 590px) {\n    font-size: 60px;\n    line-height: 60px;\n    &.small {\n      font-size: 31px;\n    }\n  }\n"]);
                return e4 = function() {
                    return n
                }, n
            }

            function e6() {
                let n = (0, v.Z)(["\n  position: relative;\n  padding: 7px 0 0 0;\n  margin: 0 0 0 8px;\n  &::after {\n    content: ' ';\n    position: absolute;\n    display: block;\n    width: 20px;\n    height: 2px;\n    bottom: 15px;\n    left: 0;\n    background: #f9f9f9;\n    transform: scaleX(0) translateZ(0);\n    transform-origin: left center;\n    transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.35s;\n  }\n  & > span {\n    font-size: 24px;\n    line-height: 24px;\n    font-weight: 700;\n    display: block;\n    &.rdytop,\n    &.rdybtm {\n      overflow: hidden;\n      span {\n        display: block;\n        transform: translate3d(0, 100%, 0);\n        transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.2s;\n      }\n    }\n    &.rdybtm span {\n      transition-delay: 0.25s;\n    }\n    &.rdytop {\n      height: 11px;\n    }\n    &.rdybtm {\n      padding: 2px 0 0;\n    }\n  }\n\n  &.coms {\n    padding: 0;\n    margin: 0;\n    &::after {\n      content: none;\n    }\n    position: absolute;\n    bottom: 4px;\n    left: 102px;\n  }\n\n  @media all and (max-width: 590px) {\n    &::after {\n      width: 20px;\n      height: 2px;\n      bottom: 12px;\n      left: 0;\n      background: #f9f9f9;\n    }\n\n    &.coms {\n      bottom: 0px;\n      left: 72px;\n    }\n  }\n"]);
                return e6 = function() {
                    return n
                }, n
            }

            function e8() {
                let n = (0, v.Z)(["\n  h3 {\n  }\n  & > p {\n    margin: 7px 0 15px;\n  }\n\n  h3,\n  p {\n    overflow: hidden;\n    span {\n      display: block;\n      transform: translate3d(0, 100%, 0);\n      transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.1s;\n    }\n  }\n\n  p span {\n    transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.25s;\n  }\n\n  .done {\n    text-decoration: line-through;\n  }\n\n  @media all and (max-width: 880px) {\n    padding: 0 30px 0 0;\n  }\n\n  @media all and (max-width: 580px) {\n    p {\n      br {\n        display: none;\n      }\n    }\n  }\n\n  @media all and (max-width: 460px) {\n    padding: 15px 15px 0 0;\n  }\n"]);
                return e8 = function() {
                    return n
                }, n
            }

            function e9() {
                let n = (0, v.Z)([""]);
                return e9 = function() {
                    return n
                }, n
            }

            function e7() {
                let n = (0, v.Z)(["\n  position: relative;\n  padding: 0 0 0 15px;\n  font-size: 12px;\n  line-height: 19px;\n  letter-spacing: 0.07em;\n  color: #ffffff;\n  &::before {\n    content: ' ';\n    display: block;\n    position: absolute;\n    width: 4px;\n    height: 1px;\n    background: #ff8800;\n    left: 0;\n    top: 10px;\n    transform-origin: left center;\n    transform: scaleX(0) translateZ(0);\n    transition: transform 0.25s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.75s;\n  }\n  overflow: hidden;\n  span {\n    display: block;\n    transform: translate3d(0, 100%, 0);\n    transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.35s;\n  }\n\n  &:nth-child(2) span {\n    transition-delay: 0.45s;\n  }\n  &:nth-child(2)::before {\n    transition-delay: 0.85s;\n  }\n\n  &:nth-child(3) span {\n    transition-delay: 0.55s;\n  }\n  &:nth-child(3)::before {\n    transition-delay: 0.95s;\n  }\n\n  &:nth-child(4) span {\n    transition-delay: 0.65s;\n  }\n  &:nth-child(4)::before {\n    transition-delay: 1.05s;\n  }\n\n  &:nth-child(5) span {\n    transition-delay: 0.75s;\n  }\n  &:nth-child(5)::before {\n    transition-delay: 1.15s;\n  }\n\n  &:nth-child(6) span {\n    transition-delay: 0.85s;\n  }\n  &:nth-child(6)::before {\n    transition-delay: 1.25s;\n  }\n\n  &:nth-child(7) span {\n    transition-delay: 0.95s;\n  }\n  &:nth-child(7)::before {\n    transition-delay: 1.35s;\n  }\n\n  &:nth-child(8) span {\n    transition-delay: 1.05s;\n  }\n  &:nth-child(8)::before {\n    transition-delay: 1.45s;\n  }\n\n  &:nth-child(9) span {\n    transition-delay: 1.15s;\n  }\n  &:nth-child(9)::before {\n    transition-delay: 1.55s;\n  }\n  &:nth-child(10) span {\n    transition-delay: 1.25s;\n  }\n  &:nth-child(10)::before {\n    transition-delay: 1.65s;\n  }\n  &:nth-child(11) span {\n    transition-delay: 1.35s;\n  }\n  &:nth-child(11)::before {\n    transition-delay: 1.75s;\n  }\n  &:nth-child(12) span {\n    transition-delay: 1.45s;\n  }\n  &:nth-child(12)::before {\n    transition-delay: 1.85s;\n  }\n  &:nth-child(13) span {\n    transition-delay: 1.55s;\n  }\n  &:nth-child(13)::before {\n    transition-delay: 1.95s;\n  }\n"]);
                return e7 = function() {
                    return n
                }, n
            }
            let it = y.ZP.section.withConfig({
                    componentId: "sc-9405aa8f-0"
                })(eQ()),
                ie = y.ZP.div.withConfig({
                    componentId: "sc-9405aa8f-1"
                })(eJ()),
                ii = y.ZP.div.withConfig({
                    componentId: "sc-9405aa8f-2"
                })(e$()),
                ia = y.ZP.div.withConfig({
                    componentId: "sc-9405aa8f-3"
                })(e0()),
                ir = y.ZP.li.withConfig({
                    componentId: "sc-9405aa8f-4"
                })(e1()),
                is = y.ZP.div.withConfig({
                    componentId: "sc-9405aa8f-5"
                })(e2()),
                io = y.ZP.div.withConfig({
                    componentId: "sc-9405aa8f-6"
                })(e5()),
                il = y.ZP.div.withConfig({
                    componentId: "sc-9405aa8f-7"
                })(e3()),
                id = y.ZP.div.withConfig({
                    componentId: "sc-9405aa8f-8"
                })(e4()),
                ic = y.ZP.div.withConfig({
                    componentId: "sc-9405aa8f-9"
                })(e6()),
                ip = y.ZP.div.withConfig({
                    componentId: "sc-9405aa8f-10"
                })(e8()),
                ih = y.ZP.ul.withConfig({
                    componentId: "sc-9405aa8f-11"
                })(e9()),
                ix = y.ZP.li.withConfig({
                    componentId: "sc-9405aa8f-12"
                })(e7()),
                im = n => {
                    let {
                        index: t,
                        data: e
                    } = n, a = (0, r.useRef)();
                    return (0, i.jsx)(ir, {
                        children: (0, i.jsxs)(tu, {
                            ref: a,
                            overrideInviewConfig: {
                                threshold: .6
                            },
                            children: [(0, i.jsx)(eL.Z, {}), (0, i.jsxs)(is, {
                                children: [(0, i.jsxs)(io, {
                                    children: [(0, i.jsx)("p", {
                                        className: "sml rubik",
                                        children: (0, i.jsxs)("span", {
                                            children: ["PHASE // 0", t + 1]
                                        })
                                    }), (0, i.jsxs)(il, {
                                        className: "akrobat",
                                        children: [(0, i.jsx)(id, {
                                            className: "rdcq ".concat(e.comingSoon ? "small" : "rdcqn"),
                                            children: e.comingSoon ? (0, i.jsxs)(i.Fragment, {
                                                children: [(0, i.jsx)("span", {
                                                    children: (0, i.jsx)("span", {
                                                        children: "ALREADY"
                                                    })
                                                }), (0, i.jsx)("span", {
                                                    children: (0, i.jsx)("span", {
                                                        children: "DONE"
                                                    })
                                                })]
                                            }) : e.quarter.split("").map((n, t) => (0, i.jsx)("span", {
                                                children: n
                                            }, t))
                                        }), (0, i.jsx)(ic, {
                                            className: "rdy ".concat(e.comingSoon ? "coms" : ""),
                                            children: e.year && (0, i.jsxs)(i.Fragment, {
                                                children: [(0, i.jsx)("span", {
                                                    className: "rdytop",
                                                    children: (0, i.jsx)("span", {
                                                        children: "20"
                                                    })
                                                }), (0, i.jsx)("span", {
                                                    className: "rdybtm",
                                                    children: (0, i.jsx)("span", {
                                                        children: e.year
                                                    })
                                                })]
                                            })
                                        })]
                                    })]
                                }), (0, i.jsxs)(ip, {
                                    className: "rpc",
                                    children: [(0, i.jsx)("h3", {
                                        children: (0, i.jsx)("span", {
                                            children: e.title
                                        })
                                    }), (0, i.jsx)("p", {
                                        className: "subtitle rubik",
                                        children: (0, i.jsx)("span", {
                                            dangerouslySetInnerHTML: {
                                                __html: e.subtitle
                                            }
                                        })
                                    }), (0, i.jsx)(ih, {
                                        children: e.features.map((n, t) => (0, i.jsx)(ix, {
                                            className: "pfi",
                                            children: (0, i.jsx)("span", {
                                                className: "".concat(e.comingSoon ? "done" : ""),
                                                dangerouslySetInnerHTML: {
                                                    __html: n
                                                }
                                            })
                                        }, t))
                                    })]
                                })]
                            })]
                        })
                    })
                },
                iu = () => {
                    let n = (0, r.useRef)(),
                        [t, e] = (0, r.useState)(!1);
                    return (0, i.jsxs)(ii, {
                        className: t ? "active" : "",
                        children: [(0, i.jsx)(tu, {
                            ref: n,
                            overrideInviewConfig: {
                                threshold: .7
                            },
                            onEnterInview: () => {
                                e(!0)
                            },
                            children: (0, i.jsxs)("h2", {
                                children: [(0, i.jsx)(tg, {}), (0, i.jsx)("span", {
                                    children: (0, i.jsx)("span", {
                                        children: "PRODUCT"
                                    })
                                }), " ", (0, i.jsx)("span", {
                                    children: (0, i.jsx)("span", {
                                        children: "ROADMAP"
                                    })
                                })]
                            })
                        }), (0, i.jsxs)("p", {
                            className: "rubik",
                            children: [(0, i.jsxs)("span", {
                                children: [(0, i.jsx)("span", {
                                    children: "To deliver"
                                }), " "]
                            }), (0, i.jsxs)("span", {
                                children: [(0, i.jsx)("span", {
                                    children: "the most"
                                }), " "]
                            }), (0, i.jsxs)("span", {
                                children: [(0, i.jsx)("span", {
                                    children: "advanced"
                                }), " "]
                            }), (0, i.jsxs)("span", {
                                children: [(0, i.jsx)("span", {
                                    children: "Metaverse"
                                }), " "]
                            }), (0, i.jsxs)("span", {
                                children: [(0, i.jsx)("span", {
                                    children: "ever."
                                }), " "]
                            })]
                        })]
                    })
                },
                ig = () => (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(it, {
                        children: [(0, i.jsx)(ie, {
                            children: (0, i.jsx)(iu, {})
                        }), (0, i.jsx)(ia, {
                            children: (0, i.jsx)("ul", {
                                children: [{
                                    comingSoon: !0,
                                    quarter: "ALREADY<br/>DONE",
                                    year: 22,
                                    title: "THE PROLOGUE",
                                    subtitle: "AN INTRODUCTION TO THE meta ninjaz METAVERSE,<br /> SHOWCASING ITS SOLID FOUNDATION.",
                                    features: ["The prologue Microverse", "The lobby Microverse", "The HUB Microverse", "Next-gen NFTs gallery", "Exciting mini-games", "NFTs collection", "Voice chat", "VR support", "A new world to explore", "Microverse building tools", "A lot of avatars collaborations", "Original particles system"]
                                }, {
                                    quarter: "01",
                                    year: 23,
                                    title: "FOUNDATION",
                                    subtitle: "EXPANDING THE METAVERSE WITH<br/> MORE CONTENT AND MORE SOCIAL FEATURES.",
                                    features: ["Collectible game", "meta ninjaz Race", "meta ninjaz Toy Box", "Photo mode", "Inventory system", "Live Events & Concerts", "Localization in 3 languages", "Android/iOS/Windows and Mac app release", "Friends list system", "GEN world foundation", "Land presale"]
                                }, {
                                    quarter: "02",
                                    year: 24,
                                    title: "CREATION",
                                    subtitle: "EMPOWERING CREATORS WITH NEVER SEEN<br /> BEFORE BUILDING TOOLS.",
                                    features: ["Virtual land Marketplace & Map.", "Allowing creators to make their own world <br/>inside our metaverse, with powerful and<br/> easy-to-use building editor.", "Seamlessly add your own 3D model with<br/> physic capabilities, post-processing render<br/> control, lightning and particles system... <br/>Everything to give life to your ideas.", "Allowing creators to monetize their creation<br/> through the meta ninjaz marketplace", "Avatars building tools"]
                                }, {
                                    quarter: "NEX",
                                    title: "DISRUPTION",
                                    subtitle: "GIVING LIFE TO OUR FULL VISION OF THE METAVERSE.",
                                    features: ["More blockchains Interoperability", "Concert and event-building tools", "Advanced game-building tools", "Play to earn mechanism", "New worlds to come", "Virtual working and collaborating space", "And much more..."]
                                }].map((n, t) => (0, i.jsx)(im, {
                                    index: t,
                                    data: n
                                }, t))
                            })
                        })]
                    })
                });
            var ib = e(5675),
                iw = e.n(ib);

            function iv() {
                let n = (0, v.Z)(["\n  position: relative;\n  width: 100%;\n  padding: 380px 0 296px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  min-height: 100vh;\n\n  @media all and (max-width: 1280px) {\n    padding: 480px 0 296px;\n  }\n\n  @media all and (max-width: 1040px) {\n    padding: 440px 0 196px;\n  }\n\n  @media all and (max-width: 550px) {\n    padding: 80vw 0 60px;\n  }\n\n  &.active {\n    .jpnttlanim {\n      transform: translate3d(0, 0%, 0);\n    }\n  }\n"]);
                return iv = function() {
                    return n
                }, n
            }

            function iy() {
                let n = (0, v.Z)(["\n  position: relative;\n  z-index: 1;\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  h2 {\n    font-size: 8vw;\n    line-height: 100%;\n    & > span {\n      overflow: hidden;\n      display: block;\n      display: flex;\n      justify-content: space-between;\n\n      width: 100%;\n      flex-wrap: nowrap;\n    }\n  }\n  .inma {\n    transform: translate3d(-0.8vw, 0, 0);\n  }\n  .inin {\n    transform: translate3d(0.9vw, 0, 0);\n    .jpnttlanim {\n      transition-delay: 0.1s;\n    }\n  }\n  .inja {\n    transform: translate3d(2.5vw, 0, 0);\n    .jpnttlanim {\n      transition-delay: 0.2s;\n    }\n  }\n\n  .jpnttlanim {\n    display: block;\n    transform: translate3d(0, 100%, 0);\n    transition: transform 0.8s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n  }\n"]);
                return iy = function() {
                    return n
                }, n
            }

            function ij() {
                let n = (0, v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 62px 0 30px;\n\n  h3 {\n    position: relative;\n    padding: 0 0 0 80px;\n    &::after {\n      content: ' ';\n      display: block;\n      position: absolute;\n      bottom: 5px;\n      left: 80px;\n      width: calc(100% - 80px);\n      background: #242424;\n      height: 6px;\n      transform-origin: left center;\n      transform: scaleX(0) translateZ(0);\n      transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.5s;\n    }\n\n    span {\n      display: block;\n    }\n    & > span {\n      overflow: hidden;\n      span {\n        transform: translate3d(0, 100%, 0);\n        transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.1s;\n      }\n      &:nth-child(2) span {\n        transition-delay: 0.2s;\n      }\n      &:nth-child(3) span {\n        transition-delay: 0.3s;\n      }\n    }\n\n    svg {\n      width: 25px;\n      height: auto;\n      position: absolute;\n      left: -6px;\n      bottom: 0px;\n      transform: rotate(-90deg) translate3d(0, -20px, 0);\n      transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.4s;\n    }\n  }\n\n  &.active {\n    h3 > span,\n    h4 {\n      span {\n        transform: translate3d(0, 0%, 0);\n      }\n    }\n\n    h3 {\n      &::after {\n        transform: scaleX(1) translateZ(0);\n      }\n      svg {\n        transform: rotate(-90deg) translate3d(0, 0px, 0);\n      }\n    }\n\n    .tptt {\n      transform: scaleX(1) translate3d(0, 4px, 0);\n      img {\n        transform: scale(1) translateZ(0);\n      }\n    }\n\n    .tpianimspan {\n      transform: translate3d(0, 0%, 0);\n    }\n  }\n\n  @media all and (max-width: 1200px) {\n    h3 {\n      padding: 0 0 0 60px;\n      &::after {\n        left: 60px;\n        width: calc(100% - 60px);\n      }\n    }\n  }\n\n  @media all and (max-width: 840px) {\n    h3 {\n      padding: 0 0 30px 30px;\n      &::after {\n        left: 30px;\n        width: calc(100% - 30px);\n      }\n    }\n  }\n\n  @media all and (max-width: 680px) {\n    flex-wrap: wrap;\n    & > div {\n      width: 100%;\n\n      padding: 45px 0 0 30px;\n    }\n  }\n\n  @media all and (max-width: 360px) {\n    & > div {\n      padding: 45px 0 0 15px;\n      .teamname {\n        font-size: 18px;\n        line-height: 20px;\n      }\n    }\n  }\n"]);
                return ij = function() {
                    return n
                }, n
            }

            function iZ() {
                let n = (0, v.Z)(["\n  h4 {\n    overflow: hidden;\n    span {\n      display: block;\n      transform: translate3d(0, 100%, 0);\n      transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.1s;\n    }\n  }\n"]);
                return iZ = function() {
                    return n
                }, n
            }

            function iC() {
                let n = (0, v.Z)(["\n  display: flex;\n  padding: 20px 0 0;\n  width: 376px;\n  justify-content: space-between;\n  .tpianimspan {\n    display: block;\n    transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.2s;\n    transform: translate3d(0, 100%, 0);\n  }\n  .statuslabel span {\n    transition-delay: 0.3s;\n  }\n  &.cto {\n    .teamname span {\n      transition-delay: 0.5s;\n    }\n    .statuslabel span {\n      transition-delay: 0.6s;\n    }\n  }\n  .teamname {\n    display: block;\n    font-size: 22px;\n    line-height: 27px;\n    letter-spacing: 0.16em;\n    overflow: hidden;\n  }\n  .status {\n    position: relative;\n    padding: 2px 0 0;\n    overflow: hidden;\n    & > span {\n      display: block;\n      transform-origin: left center;\n      transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n    }\n  }\n  .linkedinsee {\n    position: absolute;\n    left: 0;\n    top: 0;\n    transform: translate3d(0, 100%, 0) rotate(10deg);\n  }\n  .linkedin {\n    @media (pointer: fine) {\n      .statuslabel {\n        transform: translate3d(0, 0%, 0) rotate(0deg);\n      }\n      &:hover {\n        .statuslabel {\n          transform: translate3d(0, -100%, 0) rotate(-10deg);\n        }\n        .linkedinsee {\n          transform: translate3d(0, 0%, 0) rotate(0deg);\n        }\n      }\n    }\n  }\n\n  @media all and (max-width: 840px) {\n    width: 100%;\n    max-width: 350px;\n  }\n\n  @media all and (max-width: 420px) {\n    .teamname {\n      font-size: 20px;\n      line-height: 24px;\n    }\n  }\n"]);
                return iC = function() {
                    return n
                }, n
            }

            function ik() {
                let n = (0, v.Z)(["\n  position: relative;\n  display: block;\n  width: 45px;\n  height: 39px;\n  background: #ff8800;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform-origin: right center;\n  transform: scaleX(0) translate3d(0, 4px, 0);\n  transition: transform 0.4s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.4s;\n\n  &.cto {\n    transition-delay: 0.7s;\n    img {\n      transition-delay: 1s;\n    }\n  }\n  img {\n    width: 18px;\n    height: 15px;\n    position: relative;\n    z-index: 1;\n    transform: scale(0) translateZ(0);\n    transition: transform 0.4s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.7s;\n  }\n\n  @media (pointer: fine) {\n    &::before {\n      content: ' ';\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      background: #242424;\n      transform-origin: right center;\n      transition: transform 0.3s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n      transform: scaleX(0) translateZ(0);\n    }\n    &:hover {\n      &::before {\n        transform: scaleX(1) translateZ(0);\n      }\n    }\n  }\n"]);
                return ik = function() {
                    return n
                }, n
            }

            function iI() {
                let n = (0, v.Z)(["\n  position: absolute;\n  left: 50%;\n  top: 156px;\n  transform: translate3d(-50%, 0, 0);\n  width: 840px;\n  height: 716px;\n\n  &.active {\n    .tcbtm {\n      transform: rotate(-8.77deg) translate3d(-88%, -52%, 0);\n    }\n    .tctop {\n      transform: rotate(20.39deg) translate3d(-40%, -47%, 0);\n    }\n\n    .bdgU {\n      &,\n      & > div {\n        transform: scale(1) translate3d(0, 0, 0);\n      }\n      svg {\n        transform: scale(1) translate3d(0, 2px, 0);\n      }\n    }\n  }\n\n  @media all and (max-width: 1600px) {\n    top: 9.75vw;\n    width: 52.5vw;\n    height: 44.75vw;\n  }\n\n  @media all and (max-width: 920px) {\n    top: 90px;\n    width: 483px;\n    height: 412px;\n  }\n\n  @media all and (max-width: 550px) {\n    top: 16.36vw;\n    width: 87.81vw;\n    height: 74.9vw;\n  }\n"]);
                return iI = function() {
                    return n
                }, n
            }

            function iE() {
                let n = (0, v.Z)(["\n  position: absolute;\n  width: 385px;\n  height: 568px;\n\n  top: 50%;\n  left: 50%;\n  transform: rotate(0deg) translate3d(-52%, -48%, 0);\n  transition: transform 0.8s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.3s;\n  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n  div {\n    position: relative;\n    width: 100%;\n    height: 100%;\n  }\n  &.tcbtm {\n    background: #f8f8f8;\n  }\n\n  &.tctop {\n    background: #fff;\n    z-index: 1;\n    transform: rotate(0deg) translate3d(-50%, -50%, 0);\n  }\n\n  img {\n    opacity: 0;\n    display: block;\n    transform: scale(1.2) translateZ(0);\n  }\n\n  &.active {\n    img {\n      transition: transform 1s cubic-bezier(0.25, 0.005, 0.24, 0.905),\n        opacity 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n      opacity: 1;\n      transform: scale(1) translateZ(0);\n    }\n  }\n\n  @media all and (max-width: 1600px) {\n    width: 24.06vw;\n    height: 35.488vw;\n  }\n\n  @media all and (max-width: 920px) {\n    width: 221px;\n    height: 326px;\n  }\n\n  @media all and (max-width: 550px) {\n    width: 40.18vw;\n    height: 59.27vw;\n  }\n"]);
                return iE = function() {
                    return n
                }, n
            }

            function iN() {
                let n = (0, v.Z)(["\n  position: absolute;\n  right: 100px;\n  bottom: 150px;\n  z-index: 2;\n  width: 88px;\n  height: 88px;\n  border-radius: 100%;\n  border: 0.790909px solid rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.5s;\n  transform: scale(0) translate3d(0, 0, 0);\n  & > div {\n    border-radius: 100%;\n    width: 78px;\n    height: 78px;\n    background: #2d2d2d;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: scale(0) translate3d(0, 0, 0);\n    transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.7s;\n  }\n  svg {\n    width: 38px;\n    height: auto;\n    transform: scale(0) translate3d(0, 2px, 0);\n    transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.9s;\n  }\n\n  @media all and (max-width: 1600px) {\n    right: 6.25vw;\n    bottom: 9.375vw;\n  }\n\n  @media all and (max-width: 1280px) {\n    right: 1.5vw;\n    bottom: 20vw;\n  }\n\n  @media all and (max-width: 1100px) {\n    width: 66px;\n    height: 66px;\n    & > div {\n      width: 58px;\n      height: 58px;\n    }\n    svg {\n      width: 28px;\n    }\n  }\n\n  @media all and (max-width: 920px) {\n    right: 57px;\n    bottom: 86px;\n  }\n\n  @media all and (max-width: 550px) {\n    right: 8vw;\n    bottom: 15.63vw;\n    width: 56px;\n    height: 56px;\n    & > div {\n      width: 50px;\n      height: 50px;\n    }\n    svg {\n      width: 24px;\n    }\n  }\n"]);
                return iN = function() {
                    return n
                }, n
            }
            let iz = y.ZP.section.withConfig({
                    componentId: "sc-285dfa91-0"
                })(iv()),
                iP = y.ZP.div.withConfig({
                    componentId: "sc-285dfa91-1"
                })(iy()),
                iT = y.ZP.div.withConfig({
                    componentId: "sc-285dfa91-2"
                })(ij()),
                iS = y.ZP.div.withConfig({
                    componentId: "sc-285dfa91-3"
                })(iZ()),
                iM = y.ZP.li.withConfig({
                    componentId: "sc-285dfa91-4"
                })(iC()),
                iR = y.ZP.a.withConfig({
                    componentId: "sc-285dfa91-5"
                })(ik()),
                iO = y.ZP.div.withConfig({
                    componentId: "sc-285dfa91-6"
                })(iI()),
                iA = y.ZP.div.withConfig({
                    componentId: "sc-285dfa91-7"
                })(iE()),
                iL = y.ZP.div.withConfig({
                    componentId: "sc-285dfa91-8"
                })(iN()),
                iD = n => {
                    let {
                        url: t,
                        bottom: e
                    } = n, [a, s] = (0, r.useState)(!1);
                    return (0, i.jsx)(iA, {
                        className: "".concat(e ? "tcbtm" : "tctop", " ").concat(a ? "active" : ""),
                        children: (0, i.jsx)("div", {
                            children: (0, i.jsx)(iw(), {
                                layout: "fill",
                                src: t,
                                alt: "meta ninjaz character design",
                                loading: "lazy",
                                onLoad: n => {
                                    s(!0)
                                }
                            })
                        })
                    })
                },
                iF = () => {
                    let n = (0, r.useRef)(),
                        [t, e] = (0, r.useState)(!1);
                    return (0, i.jsx)(tu, {
                        ref: n,
                        overrideInviewConfig: {
                            threshold: .5
                        },
                        onEnterInview: () => {
                            e(!0)
                        },
                        children: (0, i.jsxs)(iz, {
                            className: t ? "active" : "",
                            children: [(0, i.jsxs)(iP, {
                                children: [(0, i.jsx)("h2", {
                                    children: (0, i.jsxs)("span", {
                                        children: [(0, i.jsx)("span", {
                                            className: "inma",
                                            children: (0, i.jsx)("span", {
                                                className: "jpnttlanim",
                                                children: "MADE"
                                            })
                                        }), " ", (0, i.jsx)("span", {
                                            className: "inin",
                                            children: (0, i.jsx)("span", {
                                                className: "jpnttlanim",
                                                children: "IN"
                                            })
                                        }), " ", (0, i.jsx)("span", {
                                            className: "inja",
                                            children: (0, i.jsx)("span", {
                                                className: "jpnttlanim",
                                                children: "KENYA"
                                            })
                                        })]
                                    })
                                }), (0, i.jsxs)(iT, {
                                    className: "teamcnt ".concat(t ? "active" : ""),
                                    children: [(0, i.jsxs)("h3", {
                                        children: [(0, i.jsx)("span", {
                                            children: (0, i.jsx)("span", {
                                                children: "CRAFTING THE"
                                            })
                                        }), " ", (0, i.jsx)("span", {
                                            children: (0, i.jsx)("span", {
                                                children: "METAVERSE FOR"
                                            })
                                        }), " ", (0, i.jsx)("span", {
                                            children: (0, i.jsx)("span", {
                                                children: "THE LONG RUN."
                                            })
                                        }), (0, i.jsx)(tg, {})]
                                    }), (0, i.jsxs)(iS, {
                                        children: [(0, i.jsx)("h4", {
                                            children: (0, i.jsx)("span", {
                                                children: "meta ninjaz IS INITIATED BY:"
                                            })
                                        }), (0, i.jsxs)("ul", {
                                            children: [(0, i.jsx)(iV, {
                                                name: "EL PUTA",
                                                status: "Co-Founder CEO",
                                                linkedIn: "https://www.linkedin.com/",
                                                twitter: "https://twitter.com"
                                            }), (0, i.jsx)(iV, {
                                                cls: "cto",
                                                name: "TRINITY",
                                                status: "Co-Founder CTO",
                                                linkedIn: "https://www.linkedin.com/in/",
                                                twitter: "https://twitter.com/"
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, i.jsxs)(iO, {
                                className: t ? "active" : "",
                                children: [(0, i.jsx)(iD, {
                                    bottom: !0,
                                    url: "/images/card-back.jpg"
                                }), (0, i.jsx)(iD, {
                                    bottom: !1,
                                    url: "/images/card-front.jpg"
                                }), (0, i.jsx)(iL, {
                                    className: "bdgU",
                                    children: (0, i.jsx)("div", {
                                        children: (0, i.jsxs)("svg", {
                                            width: "39",
                                            height: "40",
                                            viewBox: "0 0 39 40",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            role: "img",
                                            "aria-label": "logo utsubo",
                                            children: [(0, i.jsx)("path", {
                                                d: "M27.4863 38.0298H15.2348C19.2049 35.4411 21.7833 30.9645 21.7833 25.9467V1.38H37.8565V25.9467C37.8565 32.0625 33.5414 37.2275 27.4863 38.0298Z",
                                                fill: "white"
                                            }), (0, i.jsx)("path", {
                                                d: "M3.84385 34.0628C6.99026 37.6342 12.8792 37.6388 16.0629 34.1006C16.7272 33.3624 17.3015 32.5435 17.7701 31.6618C17.0466 29.951 16.6486 28.0747 16.6486 26.1149V1.38H0.842285V26.1149C0.842285 29.1419 1.96761 31.9331 3.84385 34.0628Z",
                                                fill: "url(#paint0_linear_2085_11542)"
                                            }), (0, i.jsx)("defs", {
                                                children: (0, i.jsxs)("linearGradient", {
                                                    id: "paint0_linear_2085_11542",
                                                    x1: "17.7701",
                                                    y1: "3.87954",
                                                    x2: "-25.76",
                                                    y2: "48.545",
                                                    gradientUnits: "userSpaceOnUse",
                                                    children: [(0, i.jsx)("stop", {
                                                        stopColor: "white"
                                                    }), (0, i.jsx)("stop", {
                                                        offset: "1",
                                                        stopColor: "white",
                                                        stopOpacity: "0"
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                },
                iV = n => {
                    let {
                        cls: t,
                        name: e,
                        status: a,
                        linkedIn: r,
                        twitter: s
                    } = n;
                    return (0, i.jsxs)(iM, {
                        className: t,
                        children: [(0, i.jsxs)("a", {
                            href: r,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "linkedin",
                            children: [(0, i.jsx)("span", {
                                className: "rubik teamname",
                                children: (0, i.jsx)("span", {
                                    className: "tpianimspan",
                                    children: e
                                })
                            }), (0, i.jsxs)("p", {
                                className: "status sml",
                                children: [(0, i.jsx)("span", {
                                    className: "statuslabel",
                                    children: (0, i.jsx)("span", {
                                        className: "tpianimspan",
                                        children: a
                                    })
                                }), (0, i.jsx)("span", {
                                    className: "linkedinsee",
                                    children: "See LinkedIn"
                                })]
                            })]
                        }), (0, i.jsx)(iR, {
                            className: "tptt ".concat(t),
                            href: s,
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0, i.jsx)("img", {
                                src: "/sns/twitter.svg",
                                alt: "twitter"
                            })
                        })]
                    })
                };

            function iH() {
                let n = (0, v.Z)(["\n  position: relative;\n  min-height: 100vh;\n  overflow: hidden;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  background: #fff;\n"]);
                return iH = function() {
                    return n
                }, n
            }

            function iB() {
                let n = (0, v.Z)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  position: absolute;\n  width: 50vw;\n  height: calc(100% - 15px);\n  right: 30px;\n  bottom: 0;\n  z-index: 0;\n\n  div {\n    position: relative;\n    width: 100%;\n    height: 100%;\n  }\n\n  opacity: 0;\n  &.active {\n    transition: opacity 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n    opacity: 1;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    object-position: 100% 100%;\n  }\n\n  @media all and (max-width: 1320px) {\n    right: 15px;\n  }\n\n  @media all and (max-width: 1100px) {\n    display: none;\n  }\n"]);
                return iB = function() {
                    return n
                }, n
            }

            function iU() {
                let n = (0, v.Z)(["\n  display: flex;\n  width: 50vw;\n  position: relative;\n  justify-content: center;\n  align-content: flex-end;\n  gap: 60px;\n  min-height: 100vh;\n  padding: 83px 60px 90px;\n  flex-wrap: wrap;\n  z-index: 1;\n\n  transition: transform 1s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n\n  & > div {\n    width: 635px;\n  }\n\n  @media all and (max-width: 1320px) {\n    width: 60vw;\n    & > div {\n      width: 100%;\n    }\n  }\n\n  @media all and (max-width: 1260px) {\n    h2 {\n      font-size: 40px;\n      line-height: 38px;\n    }\n  }\n\n  @media all and (max-width: 1100px) {\n    width: 100vw;\n  }\n\n  @media all and (max-width: 840px) {\n    padding: 83px 30px 90px;\n  }\n\n  @media all and (max-width: 520px) {\n    h2 {\n      font-size: 32px;\n      line-height: 30px;\n    }\n  }\n\n  @media all and (max-width: 360px) {\n    padding: 83px 15px 90px;\n  }\n"]);
                return iU = function() {
                    return n
                }, n
            }

            function iX() {
                let n = (0, v.Z)(["\n  width: 100%;\n  h2 {\n    span {\n      display: block;\n    }\n    & > span {\n      overflow: hidden;\n      span {\n        transform: translate3d(0, 100%, 0);\n        transition: transform 0.7s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s;\n      }\n      &:nth-child(2) span {\n        transition-delay: 0.1s;\n      }\n      &:nth-child(3) span {\n        transition-delay: 0.2s;\n      }\n    }\n  }\n  .subtechtitle {\n    font-size: 12px;\n    line-height: 16px;\n    font-weight: bold;\n    margin: 27px 0 60px;\n    overflow: hidden;\n    span {\n      display: block;\n      transition: transform 0.7s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.3s;\n      transform: translate3d(0, 100%, 0);\n    }\n  }\n\n  .active {\n    h2 > span,\n    .subtechtitle {\n      span {\n        transform: translate3d(0, 0%, 0);\n      }\n    }\n  }\n"]);
                return iX = function() {
                    return n
                }, n
            }

            function iG() {
                let n = (0, v.Z)(["\n  & > button:last-child {\n    border-bottom: solid 1px rgba(36, 36, 36, 0.2);\n  }\n"]);
                return iG = function() {
                    return n
                }, n
            }

            function i_() {
                let n = (0, v.Z)(["\n  width: 100%;\n  text-align: left;\n  position: relative;\n  padding: 20px 0 20px 50px;\n  &::before,\n  &::after {\n    content: ' ';\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    background: #242424;\n    top: 0;\n    left: 0;\n    transform-origin: left center;\n    transform: scaleX(0) translateZ(0);\n    transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n  }\n  .ttlti {\n    overflow: hidden;\n    h3 {\n      transform: translate3d(0, 100%, 0);\n      transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.1s;\n    }\n  }\n  &::before {\n    opacity: 0.2;\n  }\n  &::after {\n    z-index: 1;\n  }\n  &.show {\n    &::before {\n      transform: scaleX(1) translateZ(0);\n    }\n    h3 {\n      transform: translate3d(0, 0%, 0);\n    }\n    p {\n      opacity: 1;\n      transform: translate3d(0, 0px, 0);\n    }\n    .tin > span {\n      span {\n        transform: translate3d(0, 0%, 0);\n      }\n    }\n  }\n  &.active {\n    pointer-events: none;\n    .tin {\n      span {\n        color: #f9f9f9;\n      }\n      &::before {\n        transform: scaleY(1) translateZ(0);\n      }\n    }\n    .tic {\n      height: 120px;\n    }\n    &::after {\n      transform: scaleX(1) translateZ(0);\n    }\n  }\n\n  @media (pointer: fine) {\n    .tihhover {\n      display: block !important;\n    }\n    .tihhout .tihHl {\n      transform: translate3d(0, 0%, 0) rotate(0deg);\n    }\n    &:hover {\n      h3 {\n      }\n      .tihhout .tihHl {\n        transform: translate3d(0, -100%, 0) rotate(-10deg);\n      }\n      .tihhover .tihHl {\n        transform: translate3d(0, 0%, 0) rotate(0deg);\n      }\n    }\n  }\n\n  @media all and (max-width: 480px) {\n    @media (pointer: fine) {\n      .tihhover {\n        display: none !important;\n      }\n      .tihhout .tihHl {\n        transform: translate3d(0, 0%, 0) rotate(0deg);\n      }\n      &:hover {\n        .tihhout .tihHl {\n          transform: translate3d(0, 0%, 0) rotate(0deg);\n        }\n      }\n    }\n  }\n"]);
                return i_ = function() {
                    return n
                }, n
            }

            function iW() {
                let n = (0, v.Z)(["\n  overflow: hidden;\n  height: 0;\n  transition: height 0.3s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n  p {\n    padding: 10px 0 0;\n    max-width: 530px;\n    height: 120px;\n    transition: transform 0.4s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.3s,\n      opacity 0.3s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.3s;\n    opacity: 0;\n    transform: translate3d(0, 40px, 0);\n  }\n"]);
                return iW = function() {
                    return n
                }, n
            }

            function iY() {
                let n = (0, v.Z)(["\n  h3 {\n    position: relative;\n    overflow: hidden;\n    .tihHl {\n      display: inline-block;\n      transform-origin: left center;\n      transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n    }\n\n    & > span {\n      display: block;\n    }\n    .tihhover {\n      display: none;\n      position: absolute;\n      left: 0;\n      top: 0;\n      .tihHD {\n        opacity: 0;\n      }\n      .tihHl {\n        color: ", ";\n        transform: translate3d(0, 100%, 0) rotate(10deg);\n      }\n    }\n  }\n\n  @media all and (max-width: 580px) {\n    h3 {\n      font-size: 18px;\n    }\n  }\n"]);
                return iY = function() {
                    return n
                }, n
            }

            function iq() {
                let n = (0, v.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 14px;\n  line-height: 15px;\n  letter-spacing: 0.12em;\n  & > span {\n    position: relative;\n    z-index: 1;\n    transition: color 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n    display: block;\n    padding: 26px 0 0;\n    transform: translate3d(-1px, 0, 0);\n    overflow: hidden;\n    span {\n      display: block;\n      transform: translate3d(0, 100%, 0);\n      transition: transform 0.4s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.1s;\n    }\n  }\n\n  &::before,\n  &::after {\n    content: ' ';\n    display: block;\n    position: absolute;\n  }\n  &::before {\n    width: 23px;\n    height: 48px;\n    top: 0;\n    left: 0;\n    background: #242424;\n    transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n    transform: scaleY(0) translateZ(0);\n    transform-origin: top center;\n  }\n  &::after {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 0 6px 5px;\n    border-color: transparent transparent #fff transparent;\n    top: 43px;\n    left: 18px;\n  }\n\n  @media all and (max-width: 580px) {\n    & > span {\n      padding: 24px 0 0;\n    }\n  }\n"]);
                return iq = function() {
                    return n
                }, n
            }
            let iK = y.ZP.section.withConfig({
                    componentId: "sc-f92e3017-0"
                })(iH()),
                iQ = y.ZP.div.withConfig({
                    componentId: "sc-f92e3017-1"
                })(iB()),
                iJ = y.ZP.div.withConfig({
                    componentId: "sc-f92e3017-2"
                })(iU()),
                i$ = y.ZP.div.withConfig({
                    componentId: "sc-f92e3017-3"
                })(iX()),
                i0 = y.ZP.div.withConfig({
                    componentId: "sc-f92e3017-4"
                })(iG()),
                i1 = y.ZP.button.withConfig({
                    componentId: "sc-f92e3017-5"
                })(i_()),
                i2 = y.ZP.div.withConfig({
                    componentId: "sc-f92e3017-6"
                })(iW()),
                i5 = y.ZP.div.withConfig({
                    componentId: "sc-f92e3017-7"
                })(iY(), ec.tI),
                i3 = y.ZP.div.withConfig({
                    componentId: "sc-f92e3017-8"
                })(iq()),
                i4 = n => {
                    let {
                        active: t,
                        index: e,
                        title: a,
                        titleW: s,
                        desc: o,
                        update: l
                    } = n, d = (0, r.useRef)(), [c, p] = (0, r.useState)(!1);
                    return (0, i.jsx)(tu, {
                        overrideInviewConfig: {
                            threshold: .5
                        },
                        ref: d,
                        onEnterInview: () => {
                            p(!0), 1 === e && l(e)
                        },
                        children: (0, i.jsxs)(i1, {
                            onClick: () => {
                                l(e)
                            },
                            className: "".concat(t ? "active" : "", " ").concat(c ? "show" : ""),
                            children: [(0, i.jsxs)(i5, {
                                children: [(0, i.jsx)(i3, {
                                    className: "rubik tin",
                                    children: (0, i.jsx)("span", {
                                        children: (0, i.jsxs)("span", {
                                            children: ["0", e, "."]
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "ttlti",
                                    children: (0, i.jsxs)("h3", {
                                        children: [(0, i.jsxs)("span", {
                                            className: "tihhout",
                                            children: [a, " ", (0, i.jsx)("span", {
                                                className: "tihHl",
                                                children: s
                                            })]
                                        }), (0, i.jsxs)("span", {
                                            className: "tihhover",
                                            "aria-hidden": "true",
                                            children: [(0, i.jsx)("span", {
                                                className: "tihHD",
                                                children: a
                                            }), " ", (0, i.jsx)("span", {
                                                className: "tihHl",
                                                children: s
                                            })]
                                        })]
                                    })
                                })]
                            }), (0, i.jsx)(i2, {
                                className: "tic",
                                children: (0, i.jsx)("p", {
                                    className: "sml",
                                    children: o
                                })
                            })]
                        })
                    })
                },
                i6 = () => {
                    let n = (0, r.useRef)();
                    return (0, i.jsx)(i$, {
                        children: (0, i.jsxs)(tu, {
                            overrideInviewConfig: {
                                threshold: .5
                            },
                            ref: n,
                            children: [(0, i.jsxs)("h2", {
                                children: [(0, i.jsx)("span", {
                                    children: (0, i.jsx)("span", {
                                        children: "meta ninjaz "
                                    })
                                }), " ", (0, i.jsx)("span", {
                                    children: (0, i.jsx)("span", {
                                        children: "TECHNICAL"
                                    })
                                }), " ", (0, i.jsx)("span", {
                                    children: (0, i.jsx)("span", {
                                        children: "ADVANTAGES"
                                    })
                                })]
                            }), (0, i.jsx)("p", {
                                className: "subtechtitle",
                                children: (0, i.jsx)("span", {
                                    children: "An industry-leading 3D Metaverse, built towards the future."
                                })
                            })]
                        })
                    })
                },
                i8 = () => {
                    let [n, t] = (0, r.useState)(!1);
                    return (0, i.jsx)(iQ, {
                        className: n ? "active" : "",
                        children: (0, i.jsx)("div", {
                            children: (0, i.jsx)(iw(), {
                                layout: "fill",
                                src: "/images/version5.jpg",
                                alt: "meta ninjaz Futur Token placeholder design",
                                loading: "lazy",
                                onLoad: n => {
                                    t(!0)
                                }
                            })
                        })
                    })
                },
                i9 = () => {
                    let [n, t] = (0, r.useState)(0), e = n => {
                        t(n)
                    };
                    return (0, i.jsxs)(iK, {
                        children: [(0, i.jsx)(i8, {}), (0, i.jsxs)(iJ, {
                            className: "mtechni",
                            children: [(0, i.jsx)(i6, {}), (0, i.jsxs)(i0, {
                                children: [(0, i.jsx)(i4, {
                                    active: 1 === n,
                                    index: 1,
                                    title: "LARGE-SCALE",
                                    titleW: "MULTIPLAYER",
                                    desc: "From day one, meta ninjaz ’s cutting-edge technology will support up to 200 players at the same time per world instance. A never-before-seen number for a 3D Web Metaverse.",
                                    update: e
                                }), (0, i.jsx)(i4, {
                                    active: 2 === n,
                                    index: 2,
                                    title: "BLAZING-FAST",
                                    titleW: "PERFORMANCES",
                                    desc: "Thanks to our own physics engine and 3D rendering techniques we can offer great performance on every device while preserving quality in our 3D graphics.",
                                    update: e
                                }), (0, i.jsx)(i4, {
                                    active: 3 === n,
                                    index: 3,
                                    title: "ADVANCED",
                                    titleW: "INTEROPERABILITY",
                                    desc: "Seamlessly embed meta ninjaz ’s NFTs assets, lands, and Microverses directly in websites or blogs to share and let users interact with it.",
                                    update: e
                                })]
                            })]
                        })]
                    })
                };

            function i7() {
                let n = (0, v.Z)(["\n  position: relative;\n  width: 100vw;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 0px;\n\n  *::selection {\n    color: #ff8800;\n    background: #000;\n  }\n\n  background: #ff8800;\n\n  .tcc {\n    width: 100%;\n  }\n\n  @media all and (max-width: 1238px) {\n    padding: 0 2.42vw;\n  }\n\n  @media all and (max-width: 840px) {\n  }\n"]);
                return i7 = function() {
                    return n
                }, n
            }

            function an() {
                let n = (0, v.Z)(["\n  position: relative;\n  width: 100%;\n  max-width: 1118px;\n  min-height: 100vh;\n  padding: 60px 0;\n  display: flex;\n  align-items: center;\n  /* &::before,\n  &::after {\n    content: ' ';\n    display: block;\n    position: absolute;\n    top: 0;\n    height: 100%;\n    width: 1px;\n    background: #fff;\n    z-index: 0;\n    transform-origin: top center;\n  }\n  &::before {\n    left: 0;\n  }\n  &::after {\n    right: 0;\n  } */\n\n  @media all and (max-width: 720px) {\n    padding: 45px 0 60px;\n  }\n"]);
                return an = function() {
                    return n
                }, n
            }

            function at() {
                let n = (0, v.Z)(["\n  position: absolute;\n  top: 0%;\n  left: 50%;\n  height: 100%;\n  width: 1px;\n  background: #fff;\n  z-index: 0;\n  transform-origin: top center;\n"]);
                return at = function() {
                    return n
                }, n
            }

            function ae() {
                let n = (0, v.Z)(["\n  opacity: 0.4;\n  text-align: right;\n  p {\n    overflow: hidden;\n    span {\n      display: inline-block;\n      transform: translate3d(100%, 0, 0);\n      transition: transform 1s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.1s;\n    }\n  }\n  .active {\n    p {\n      span {\n        transform: translate3d(0%, 0, 0);\n      }\n    }\n  }\n"]);
                return ae = function() {
                    return n
                }, n
            }

            function ai() {
                let n = (0, v.Z)(["\n  display: flex;\n  position: relative;\n  z-index: 1;\n  justify-content: space-between;\n  padding: 0 0 0 2px;\n\n  &.active {\n    h3 > span {\n      span {\n        transform: translate3d(0%, 0, 0);\n      }\n    }\n    p {\n      transform: translate3d(0%, 0, 0);\n      opacity: 1;\n    }\n  }\n\n  @media all and (max-width: 720px) {\n    flex-wrap: wrap;\n  }\n"]);
                return ai = function() {
                    return n
                }, n
            }

            function aa() {
                let n = (0, v.Z)(["\n	0% {\n		transform: translate3d(0, 0, 0);\n	}\n	50% {\n		transform: translate3d(0, 40px, 0);\n	}\n	100% {\n		transform: translate3d(0, 0, 0);\n	}\n"]);
                return aa = function() {
                    return n
                }, n
            }

            function ar() {
                let n = (0, v.Z)(["\n  display: block;\n  width: 313px;\n  transform: translate3d(-20px, -120px, 0);\n  opacity: 0;\n  &.active {\n    transition: opacity 0.3s ease;\n    opacity: 1;\n  }\n  & > span {\n    animation: ", " 12s infinite;\n  }\n\n  @media all and (max-width: 1238px) {\n    transform: translate3d(-2vw, -10vw, 0);\n  }\n\n  @media all and (max-width: 1120px) {\n    width: 25vw;\n  }\n\n  @media all and (max-width: 940px) {\n    width: 20vw;\n  }\n\n  @media all and (max-width: 850px) {\n    width: 18vw;\n    transform: translate3d(-1vw, -60px, 0);\n  }\n\n  @media all and (max-width: 720px) {\n    width: 210px;\n    padding: 0px 0 0px;\n    margin: 0 auto;\n    order: 0;\n  }\n\n  @media all and (max-width: 500px) {\n    width: 42vw;\n    transform: translate3d(0px, -60px, 0);\n  }\n"]);
                return ar = function() {
                    return n
                }, n
            }

            function as() {
                let n = (0, v.Z)(["\n  h3 {\n    line-height: 36.46px;\n    & > span {\n      display: block;\n      overflow: hidden;\n      span {\n        display: block;\n        transform: translate3d(0, 100%, 0);\n        transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s;\n      }\n\n      &:nth-child(2) span {\n        transition-delay: 0.1s;\n      }\n\n      &:nth-child(3) span {\n        transition-delay: 0.2s;\n      }\n    }\n  }\n  p {\n    padding: 26px 0 0;\n    transform: translate3d(0, 100%, 0);\n    opacity: 0;\n    transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.3s,\n      opacity 0.3s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.3s;\n  }\n\n  @media all and (max-width: 960px) {\n    h3 {\n      font-size: 22px;\n      line-height: 30px;\n      letter-spacing: 0.12em;\n    }\n  }\n\n  @media all and (max-width: 720px) {\n    width: 100%;\n    order: 1;\n    p {\n      padding: 10px 0 0;\n    }\n  }\n\n  @media all and (max-width: 360px) {\n    h3 {\n      font-size: 20px;\n      line-height: 28px;\n      letter-spacing: 0.1em;\n    }\n  }\n"]);
                return as = function() {
                    return n
                }, n
            }

            function ao() {
                let n = (0, v.Z)(["\n  h4 {\n    overflow: hidden;\n    span {\n      display: block;\n      transform: translate3d(0, 100%, 0);\n      transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s;\n    }\n  }\n  ul {\n    padding: 13px 0 0;\n  }\n  li {\n    font-size: 12px;\n    line-height: 19px;\n    letter-spacing: 0.07em;\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n    transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.1s,\n      opacity 0.3s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.1s;\n    &:nth-child(2) {\n      transition-delay: 0.15s, 0.15s;\n    }\n    &:nth-child(3) {\n      transition-delay: 0.2s, 0.2s;\n    }\n    &:nth-child(4) {\n      transition-delay: 0.25s, 0.25s;\n    }\n    &:nth-child(5) {\n      transition-delay: 0.3s, 0.3s;\n    }\n    &:nth-child(6) {\n      transition-delay: 0.35s, 0.35s;\n    }\n  }\n\n  @media all and (max-width: 720px) {\n    width: 100%;\n    order: 2;\n    padding: 30px 0 0;\n  }\n\n  .active {\n    h4 span {\n      transform: translate3d(0%, 0, 0);\n    }\n    li {\n      transform: translate3d(0%, 0, 0);\n      opacity: 1;\n    }\n  }\n"]);
                return ao = function() {
                    return n
                }, n
            }

            function al() {
                let n = (0, v.Z)(["\n  width: 214px;\n\n  margin: 0 auto;\n\n  @media all and (max-width: 940px) {\n    padding: 90px 0 0;\n  }\n\n  @media all and (max-width: 720px) {\n    padding: 60px 0 0;\n  }\n"]);
                return al = function() {
                    return n
                }, n
            }

            function ad() {
                let n = (0, v.Z)(["\n  font-size: 144px;\n  line-height: 103.5%;\n  letter-spacing: 0.215em;\n  white-space: nowrap;\n\n  /* width: calc(100% + 14px);\n  transform: translate3d(-7px, 0, 0); */\n\n  width: calc(100% + 8px);\n  transform: translate3d(-4px, 0, 0);\n  padding: 76px 0 43px;\n\n  font-size: 116.3px;\n\n  div > span {\n    overflow: hidden;\n    display: inline-block;\n    span {\n      display: block;\n      transform: translate3d(0, 120%, 0);\n      transition: transform 1s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n    }\n  }\n\n  .active {\n    span {\n      span {\n        transform: translate3d(0, 0, 0);\n      }\n    }\n  }\n\n  @media all and (max-width: 1175px) {\n    /* font-size: 11.63vw;\n    transform: translate3d(-0.56vw, 0, 0);\n    width: calc(100% + 1.12vw); */\n    letter-spacing: 2.04vw;\n    font-size: 10vw;\n    transform: translate3d(-0.26vw, 0, 0);\n    width: calc(100% + 0.52vw);\n  }\n\n  @media all and (max-width: 720px) {\n    transform: translate3d(0, 0, 0);\n    width: 100%;\n    div > span {\n      display: block;\n      &:first-child {\n        transform: translate3d(-0.7vw, 0, 0);\n        font-size: 19.4vw;\n        width: calc(100% + 1.4vw);\n        letter-spacing: 4.06vw;\n        line-height: 103.5%;\n      }\n      &:nth-child(2) {\n        transform: translate3d(-0.4vw, 0, 0);\n        font-size: 19.4vw;\n        width: calc(100% + 0.8vw);\n        letter-spacing: 9.06vw;\n        line-height: 103.5%;\n      }\n    }\n    .tokentoken {\n      transition-delay: 0.1s;\n    }\n  }\n\n  @media all and (max-width: 500px) {\n    padding: 30px 0 30px;\n  }\n"]);
                return ad = function() {
                    return n
                }, n
            }
            let ac = y.ZP.section.withConfig({
                    componentId: "sc-c146ab8f-0"
                })(i7()),
                ap = y.ZP.div.withConfig({
                    componentId: "sc-c146ab8f-1"
                })(an()),
                ah = y.ZP.div.withConfig({
                    componentId: "sc-c146ab8f-2"
                })(at()),
                af = y.ZP.div.withConfig({
                    componentId: "sc-c146ab8f-3"
                })(ae()),
                ax = y.ZP.div.withConfig({
                    componentId: "sc-c146ab8f-4"
                })(ai()),
                am = (0, y.F4)(aa()),
                au = y.ZP.div.withConfig({
                    componentId: "sc-c146ab8f-5"
                })(ar(), am),
                ag = y.ZP.div.withConfig({
                    componentId: "sc-c146ab8f-6"
                })(as()),
                ab = y.ZP.div.withConfig({
                    componentId: "sc-c146ab8f-7"
                })(ao()),
                aw = y.ZP.div.withConfig({
                    componentId: "sc-c146ab8f-8"
                })(al()),
                av = y.ZP.h2.withConfig({
                    componentId: "sc-c146ab8f-9"
                })(ad()),
                ay = () => {
                    let n = (0, r.useRef)();
                    return (0, i.jsx)(av, {
                        children: (0, i.jsxs)(tu, {
                            ref: n,
                            overrideInviewConfig: {
                                threshold: .5
                            },
                            children: [(0, i.jsx)("span", {
                                children: (0, i.jsx)("span", {
                                    className: "tokenname",
                                    children: "meta ninjaz \xa0"
                                })
                            }), (0, i.jsx)("span", {
                                children: (0, i.jsx)("span", {
                                    className: "tokentoken",
                                    children: "TOKEN"
                                })
                            })]
                        })
                    })
                },
                aj = () => {
                    let n = (0, r.useRef)(),
                        [t, e] = (0, r.useState)(!1);
                    return (0, i.jsx)(af, {
                        children: (0, i.jsx)(tu, {
                            ref: n,
                            overrideInviewConfig: {
                                threshold: .5
                            },
                            children: (0, i.jsx)("p", {
                                className: "xs",
                                children: (0, i.jsxs)("span", {
                                    children: ["Beware of scammers, always refer to official meta ninjaz ", (0, i.jsx)("br", {}), " social network accounts and websites."]
                                })
                            })
                        })
                    })
                },
                aZ = () => {
                    let n = (0, r.useRef)(),
                        [t, e] = (0, r.useState)(!1);
                    return (0, i.jsx)(aw, {
                        children: (0, i.jsx)(tu, {
                            ref: n,
                            overrideInviewConfig: {
                                threshold: .5
                            },
                            onEnterInview: () => {
                                e(!0)
                            },
                            children: (0, i.jsx)(k.Z, {
                                action: () => {},
                                label: "WHEN READY",
                                animate: !0,
                                active: t,
                                animateDelay: .6,
                                disable: !0
                            })
                        })
                    })
                },
                aC = () => {
                    let n = (0, r.useRef)();
                    return (0, i.jsx)(ab, {
                        children: (0, i.jsxs)(tu, {
                            overrideInviewConfig: {
                                threshold: .5
                            },
                            ref: n,
                            children: [(0, i.jsx)("h4", {
                                children: (0, i.jsx)("span", {
                                    children: "USE CASES"
                                })
                            }), (0, i.jsxs)("ul", {
                                children: [(0, i.jsx)("li", {
                                    children: "Mint NFTs assets, Land and Microverse."
                                }), (0, i.jsxs)("li", {
                                    children: ["Access to exclusive areas and experiences", (0, i.jsx)("br", {}), " in the Gen World."]
                                }), (0, i.jsxs)("li", {
                                    children: ["Transactions in the Metaverse or", (0, i.jsx)("br", {}), " in the Marketplace."]
                                }), (0, i.jsx)("li", {
                                    children: "Rewards for landowners and creators."
                                }), (0, i.jsx)("li", {
                                    children: "Governance rights."
                                })]
                            })]
                        })
                    })
                },
                ak = () => {
                    let [n, t] = (0, r.useState)(!1);
                    return (0, i.jsx)(au, {
                        className: "".concat(n ? "active" : ""),
                        children: (0, i.jsx)(iw(), {
                            width: "313",
                            height: "343",
                            layout: "responsive",
                            src: "/images/coin.webp",
                            alt: "meta ninjaz Futur Token placeholder design",
                            onLoad: n => {
                                t(!0)
                            }
                        })
                    })
                },
                aI = () => {
                    let n = (0, r.useRef)(),
                        [t, e] = (0, r.useState)(!1);
                    return (0, i.jsx)(tu, {
                        overrideInviewConfig: {
                            threshold: .5
                        },
                        ref: n,
                        onEnterInview: () => {
                            e(!0)
                        },
                        children: (0, i.jsxs)(ax, {
                            className: t ? "active" : "",
                            children: [(0, i.jsxs)(ag, {
                                children: [(0, i.jsxs)("h3", {
                                    children: [(0, i.jsx)("span", {
                                        children: (0, i.jsx)("span", {
                                            children: "TAKE PART TO"
                                        })
                                    }), " ", (0, i.jsx)("span", {
                                        children: (0, i.jsx)("span", {
                                            children: "THE DECENTRALIZATION"
                                        })
                                    }), " ", (0, i.jsx)("span", {
                                        children: (0, i.jsx)("span", {
                                            children: "REVOLUTION"
                                        })
                                    })]
                                }), (0, i.jsxs)("p", {
                                    className: "sml",
                                    children: ["The meta ninjaz ecosystem will be powered", (0, i.jsx)("br", {}), " by our main utility token."]
                                })]
                            }), (0, i.jsx)(ak, {}), (0, i.jsx)(aC, {})]
                        })
                    })
                },
                aE = () => (0, i.jsx)(ac, {
                    className: "exphide",
                    children: (0, i.jsxs)(ap, {
                        children: [(0, i.jsx)(ah, {}), (0, i.jsxs)("div", {
                            className: "tcc",
                            children: [(0, i.jsx)(aj, {}), (0, i.jsx)(ay, {}), (0, i.jsx)(aI, {}), (0, i.jsx)(aZ, {})]
                        })]
                    })
                });

            function aN() {
                let n = (0, v.Z)(["\n  position: relative;\n  width: 100vw;\n  min-height: 100vh;\n  min-height: var(--app-height);\n  overflow: hidden;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]);
                return aN = function() {
                    return n
                }, n
            }

            function az() {
                let n = (0, v.Z)(["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n"]);
                return az = function() {
                    return n
                }, n
            }

            function aP() {
                let n = (0, v.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  user-select: none;\n\n  &::before {\n    content: ' ';\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: radial-gradient(\n      rgba(0, 0, 0, 1) 30%,\n      rgba(0, 0, 0, 1) 0%,\n      rgba(0, 0, 0, 0) 100%\n    );\n    opacity: 0;\n    z-index: 0;\n    transition: opacity 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n  }\n\n  &.active {\n    &::before {\n      opacity: 0.4;\n    }\n    h2 > span,\n    p {\n      span {\n        transform: translate3d(0, 0%, 0);\n        transition: transform 0.6s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.2s;\n      }\n      &.tectopme {\n        span {\n          transition: transform 0.8s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s;\n        }\n      }\n    }\n    h2 > span {\n      span {\n        transition: transform 0.7s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.1s;\n      }\n      &:nth-child(2) span {\n        transition-delay: 0.2s;\n      }\n      &:nth-child(3) span {\n        transition-delay: 0.3s;\n      }\n      &:nth-child(4) span {\n        transition-delay: 0.4s;\n      }\n    }\n  }\n"]);
                return aP = function() {
                    return n
                }, n
            }

            function aT() {
                let n = (0, v.Z)(["\n  position: relative;\n  z-index: 1;\n  width: 600px;\n  & > div {\n    width: 160px;\n  }\n  color: #fff;\n\n  .flxp {\n    display: flex;\n    align-items: flex-end;\n  }\n\n  .tectopme {\n    margin: 0 0 6px;\n    font-size: 16px;\n    line-height: 20px;\n  }\n\n  h2 {\n    font-size: 100px;\n    line-height: 98px;\n    letter-spacing: 0.11em;\n    span {\n      display: block;\n      overflow: hidden;\n      span {\n        transform: translate3d(0, 100%, 0);\n        transition: transform 0.2s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n      }\n    }\n  }\n\n  p {\n    font-size: 13px;\n    font-weight: bold;\n    margin: 10px 0 30px;\n    overflow: hidden;\n    span {\n      display: block;\n      transform: translate3d(0, 100%, 0);\n      transition: transform 0.2s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n    }\n  }\n\n  @media all and (max-width: 767px) {\n    width: 100%;\n    padding: 0 60px;\n    h2 {\n      font-size: 13.12vw;\n      line-height: 13vw;\n    }\n  }\n\n  @media all and (max-width: 570px) {\n    padding: 0 30px;\n    p {\n      max-width: 300px;\n    }\n  }\n\n  @media all and (max-width: 420px) {\n    p {\n      max-width: 250px;\n    }\n  }\n\n  @media all and (max-width: 360px) {\n    padding: 0 15px;\n  }\n"]);
                return aT = function() {
                    return n
                }, n
            }

            function aS() {
                let n = (0, v.Z)(["\n  position: absolute;\n  z-index: 99;\n  right: 30px;\n  top: 30px;\n  width: 160px;\n"]);
                return aS = function() {
                    return n
                }, n
            }

            function aM() {
                let n = (0, v.Z)(["\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n"]);
                return aM = function() {
                    return n
                }, n
            }

            function aR() {
                let n = (0, v.Z)(["\n  0% {\n    transform: scaleX(0) translate3d(0, 0, 0);\n  }\n  12% {\n    transform: scaleX(1) translate3d(0, 0, 0);\n  }\n  24% {\n   transform: scaleX(1)  translate3d(100%, 0%, 0);\n  }\n  100% {\n   transform: scaleX(1)  translate3d(100%, 0%, 0);\n  }\n"]);
                return aR = function() {
                    return n
                }, n
            }

            function aO() {
                let n = (0, v.Z)(["\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  pointer-events: none;\n  transform: translate3d(0, 100%, 0);\n  transition: transform 0.3s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n\n  &.addBar {\n    & > div {\n      padding: 10px 45px 91px 30px;\n    }\n    span {\n      transform: translate3d(0, 56px, 0);\n    }\n  }\n\n  span {\n    position: relative;\n    z-index: 1;\n    display: block;\n    transform: translate3d(0, 26px, 0);\n    transition: transform 0.4s cubic-bezier(0.25, 0.005, 0.24, 0.905) 1.4s;\n  }\n\n  &::before {\n    content: ' ';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: #fff;\n    z-index: 0;\n    transform-origin: left center;\n    transform: scaleX(0) translateZ(0);\n    transition: transform 0s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.6s;\n  }\n\n  & > div {\n    z-index: 1;\n    display: flex;\n    justify-content: flex-end;\n    position: relative;\n    width: 100%;\n    color: #242424;\n    /* border-radius: 60px; */\n    padding: 10px 45px 11px 30px;\n    font-size: 13px;\n    overflow: hidden;\n    &::before,\n    &::after {\n      content: ' ';\n      position: absolute;\n      width: 16px;\n      height: 1px;\n      background: #ff8800;\n      right: 27px;\n      top: 12px;\n      transform-origin: top right;\n      transform: rotate(-65deg) scale(0) translateZ(0);\n      transition: transform 0.4s cubic-bezier(0.25, 0.005, 0.24, 0.905) 1.5s;\n      z-index: 1;\n    }\n    &::after {\n      right: 20px;\n      transition-delay: 1.6s;\n    }\n  }\n\n  &.active {\n    transform: translate3d(0, 0, 0);\n    transition: transform 0s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s;\n\n    &::before {\n      transform: scaleX(1) translateZ(0);\n      transition: transform 0.7s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.8s;\n    }\n\n    .tesa {\n      position: absolute;\n      right: 130px;\n      top: 28px;\n      width: 52px;\n      height: 1px;\n      overflow: hidden;\n      z-index: 0;\n      div {\n        width: 100%;\n        height: 100%;\n        background: #ff8800;\n        transform-origin: left center;\n        transform: scaleX(0) translate3d(0, 0, 0);\n        animation: ", " 2s infinite cubic-bezier(0.42, 0, 0.58, 1);\n        animation-delay: 1.5s;\n      }\n    }\n\n    span {\n      transform: translate3d(0, 0px, 0);\n    }\n    & > div {\n      &::before,\n      &::after {\n        transform: rotate(-65deg) scale(1) translateZ(0);\n      }\n    }\n  }\n"]);
                return aO = function() {
                    return n
                }, n
            }

            function aA() {
                let n = (0, v.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);
                return aA = function() {
                    return n
                }, n
            }

            function aL() {
                let n = (0, v.Z)(["\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 40px;\n  transform: scale(0) translate3d(4px, -12px, 0);\n  transition: transform 0.4s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n  &.active {\n    transform: scale(1) translate3d(4px, -12px, 0);\n  }\n  div {\n    display: inline-block;\n    position: absolute;\n    width: 32px;\n    height: 32px;\n    margin: 4px;\n    border: 4px solid #fff;\n    border-radius: 50%;\n    animation: ", " 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: #fff transparent transparent transparent;\n    &:nth-child(1) {\n      animation-delay: -0.45s;\n    }\n    &:nth-child(2) {\n      animation-delay: -0.3s;\n    }\n    &:nth-child(3) {\n      animation-delay: -0.15s;\n    }\n  }\n\n  @media all and (max-width: 767px) {\n    transform: scale(0) translate3d(4px, -1vw, 0);\n    &.active {\n      transform: scale(0.8) translate3d(4px, -1vw, 0);\n    }\n  }\n\n  @media all and (max-width: 600px) {\n    transform: scale(0) translate3d(0px, -1vw, 0);\n    &.active {\n      transform: scale(0.8) translate3d(0px, -1vw, 0);\n    }\n  }\n\n  @media all and (max-width: 400px) {\n    transform: scale(0) translate3d(0px, 0vw, 0);\n    &.active {\n      transform: scale(0.8) translate3d(0px, 0vw, 0);\n    }\n  }\n"]);
                return aL = function() {
                    return n
                }, n
            }
            let aD = y.ZP.div.withConfig({
                    componentId: "sc-d1d9332e-0"
                })(aN()),
                aF = y.ZP.div.withConfig({
                    componentId: "sc-d1d9332e-1"
                })(az()),
                aV = y.ZP.div.withConfig({
                    componentId: "sc-d1d9332e-2"
                })(aP()),
                aH = y.ZP.div.withConfig({
                    componentId: "sc-d1d9332e-3"
                })(aT());
            y.ZP.div.withConfig({
                componentId: "sc-d1d9332e-4"
            })(aS()), y.ZP.div.withConfig({
                componentId: "sc-d1d9332e-5"
            })(aM());
            let aB = (0, y.F4)(aR()),
                aU = y.ZP.div.withConfig({
                    componentId: "sc-d1d9332e-6"
                })(aO(), aB),
                aX = (0, y.F4)(aA()),
                aG = y.ZP.div.withConfig({
                    componentId: "sc-d1d9332e-7"
                })(aL(), aX),
                a_ = n => {
                    let {
                        active: t
                    } = n, e = (0, a.oR)(n => n.showLoadingMetaverse), r = (0, a.oR)(n => n.hasSeenExperienceOnce);
                    return (0, i.jsx)(i.Fragment, {
                        children: e && (0, i.jsx)(aU, {
                            className: "".concat(r && t ? "active" : "", " ").concat(ni.gn ? "addBar" : ""),
                            children: (0, i.jsxs)("div", {
                                children: [(0, i.jsx)("div", {
                                    className: "tesa",
                                    children: (0, i.jsx)("div", {})
                                }), (0, i.jsx)("span", {
                                    className: "rubik",
                                    children: "SCROLL TO CONTINUE"
                                })]
                            })
                        })
                    })
                },
                aW = n => {
                    let {
                        show: t,
                        active: e,
                        action: r
                    } = n, s = (0, a.oR)(n => n.goBackMetaverse);
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)("div", {
                            children: (0, i.jsx)(k.Z, {
                                animate: !0,
                                animateDelay: .6,
                                active: t && e ? "active" : "",
                                action: () => {
                                    r()
                                },
                                label: s ? "GO BACK" : "ACTIVATE"
                            })
                        })
                    })
                },
                aY = () => {
                    let n = (0, a.oR)(n => n.showLoadingMetaverse);
                    return (0, i.jsxs)(aG, {
                        className: n ? "active" : "",
                        children: [(0, i.jsx)("div", {}), (0, i.jsx)("div", {}), (0, i.jsx)("div", {}), (0, i.jsx)("div", {})]
                    })
                },
                aq = n => {
                    let {
                        anim: t,
                        active: e
                    } = n, [s, o] = (0, r.useState)(!1), l = (0, a.oR)(n => n.hasSeenExperienceOnce), d = () => {
                        o(!1), document.body.classList.add("playingexp"), (0, C.KG)({
                            testExperience: !0
                        }), a.QF.gameplay.value = 1, a.QF.gameplay.smooth = 1, (0, a.IW)({
                            activateArmy: !0
                        }), ta.y.setState({
                            disableScrollEvent: !0
                        }), ni.tq && !(ni.UA && ni.gn) && document.documentElement.requestFullscreen()
                    };
                    (0, nO.zX)("launchMetaverse", d), (0, r.useEffect)(() => {
                        setTimeout(() => {
                            o(!0)
                        }, 100), localStorage.getItem("seenExperience") && (0, a.IW)({
                            hasSeenExperienceOnce: !0
                        })
                    }, []);
                    let c = (0, r.useRef)();
                    return (0, i.jsx)(tu, {
                        ref: c,
                        overrideInviewConfig: {
                            threshold: .5,
                            triggerOnce: !1
                        },
                        children: (0, i.jsxs)(aV, {
                            className: "".concat(s && e ? "active" : ""),
                            style: { ...t
                            },
                            children: [(0, i.jsxs)(aH, {
                                children: [(0, i.jsx)("p", {
                                    className: "tectopme",
                                    children: (0, i.jsx)("span", {
                                        children: "meta ninjaz Metaverse"
                                    })
                                }), (0, i.jsx)("h2", {
                                    className: l ? "" : "smlrh",
                                    children: (0, i.jsx)("span", {
                                        children: (0, i.jsx)("span", {
                                            className: "flxp",
                                            children: l ? "WELCOME" : (0, i.jsxs)(i.Fragment, {
                                                children: ["WELCOME", (0, i.jsx)(aY, {})]
                                            })
                                        })
                                    })
                                }), (0, i.jsx)("p", {
                                    className: "subtitle",
                                    children: (0, i.jsx)("span", {
                                        children: l ? "EXPLORE THE TEASER MICROVERSE IN 1 CLICK." : "THE EXPERIENCE HAS ALREADY STARTED."
                                    })
                                }), l && (0, i.jsx)(aW, {
                                    show: s,
                                    active: e,
                                    action: d
                                })]
                            }), (0, i.jsx)(a_, {
                                active: s
                            })]
                        })
                    })
                },
                aK = () => {
                    let n = (0, C.N1)(n => n.testExperience),
                        t = (0, tx.useTransition)(!n, {
                            from: {
                                opacity: 0
                            },
                            enter: {
                                opacity: 1
                            },
                            leave: {
                                opacity: 0
                            },
                            reverse: n
                        }),
                        e = (0, a.oR)(n => n.hasSeenTry);
                    return (0, i.jsx)(aD, {
                        id: "tryexp",
                        className: "".concat(e ? "" : "snapstartExp"),
                        children: (0, i.jsx)(aF, {
                            children: t((t, e) => {
                                let { ...a
                                } = t;
                                return e && (0, i.jsx)(aq, {
                                    anim: a,
                                    active: !n
                                })
                            })
                        })
                    })
                };

            function aQ() {
                let n = (0, v.Z)(["\n  position: relative;\n  width: 100vw;\n  min-height: 752px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  margin: 0 0 160px;\n  max-height: 100vh;\n\n  @media all and (max-width: 1080px) {\n    height: 752px;\n    flex-wrap: wrap;\n  }\n\n  @media all and (max-width: 768px) {\n    svg {\n      width: 130px;\n      height: auto;\n    }\n  }\n"]);
                return aQ = function() {
                    return n
                }, n
            }

            function aJ() {
                let n = (0, v.Z)(["\n  background: radial-gradient(\n    circle,\n    rgba(255, 255, 255, 1) 0%,\n    rgba(255, 255, 255, 0.9) 30%,\n    rgba(255, 255, 255, 0) 60%\n  );\n  display: flex;\n  flex-wrap: wrap;\n  padding: 100px 60px 100px 80px;\n  max-width: 667px;\n  align-content: center;\n\n  @media all and (max-width: 1200px) {\n    padding: 100px 60px;\n  }\n\n  @media all and (max-width: 840px) {\n    padding: 100px 30px;\n    p {\n      max-width: 550px;\n      br {\n        display: none;\n      }\n    }\n  }\n\n  @media all and (max-width: 500px) {\n    background: radial-gradient(\n      circle,\n      rgba(255, 255, 255, 1) 0%,\n      rgba(255, 255, 255, 0.9) 30%,\n      rgba(255, 255, 255, 0) 80%\n    );\n  }\n\n  @media all and (max-width: 400px) {\n    p {\n      letter-spacing: 0;\n    }\n  }\n\n  @media all and (max-width: 360px) {\n    padding: 100px 15px;\n  }\n"]);
                return aJ = function() {
                    return n
                }, n
            }

            function a$() {
                let n = (0, v.Z)(["\n  svg {\n    opacity: 0;\n    margin: 0 auto 42px;\n    width: 197px;\n    height: auto;\n    transition: opacity 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s;\n  }\n  p {\n    text-align: center;\n    padding: 13px 0 0;\n    opacity: 0;\n    transform: translate3d(0, 30px, 0);\n    transition: transform 0.7s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.2s,\n      opacity 0.2s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.2s;\n\n    &:nth-child(2) {\n      transition-delay: 0.3s, 0.3s;\n    }\n    &:nth-child(3) {\n      transition-delay: 0.4s, 0.4s;\n    }\n    &:nth-child(4) {\n      transition-delay: 0.5s, 0.5s;\n    }\n    &:nth-child(5) {\n      transition-delay: 0.6s, 0.6s;\n    }\n  }\n\n  .highlight {\n    position: relative;\n    display: inline-block;\n    &::before {\n      content: ' ';\n      z-index: -1;\n      position: absolute;\n      background: #ff8800;\n      opacity: 0.2;\n      width: calc(100% + 6px);\n      height: 11px;\n      top: 14px;\n      left: -3px;\n    }\n  }\n\n  &.active {\n    svg {\n      opacity: 1;\n    }\n    p {\n      opacity: 1;\n      transform: translate3d(0, 0, 0);\n    }\n  }\n\n  a {\n    display: inline-block;\n    position: relative;\n    &::after {\n      content: ' ';\n      display: block;\n      width: 100%;\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      height: 1px;\n      background: ", ";\n    }\n    @media (pointer: fine) {\n      &::before {\n        content: ' ';\n        z-index: -1;\n        position: absolute;\n        background: #ff8800;\n        opacity: 0.2;\n        width: calc(100% + 6px);\n        height: 11px;\n        top: 14px;\n        left: -3px;\n        transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n        transform: scaleX(0) translateZ(0);\n      }\n      &::after {\n        transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905);\n      }\n      &:hover {\n        &::before {\n          transform: scaleX(1) translateZ(0);\n        }\n        &::after {\n          transform: scaleX(0) translateZ(0);\n        }\n      }\n    }\n  }\n"]);
                return a$ = function() {
                    return n
                }, n
            }
            let a0 = y.ZP.section.withConfig({
                    componentId: "sc-8d021bb8-0"
                })(aQ()),
                a1 = y.ZP.div.withConfig({
                    componentId: "sc-8d021bb8-1"
                })(aJ()),
                a2 = y.ZP.div.withConfig({
                    componentId: "sc-8d021bb8-2"
                })(a$(), ec.tI),
                a5 = () => {
                    let n = (0, r.useRef)(),
                        [t, e] = (0, r.useState)(!1);
                    return (0, i.jsx)(tu, {
                        ref: n,
                        overrideInviewConfig: {
                            threshold: .5
                        },
                        onEnterInview: () => {
                            e(!0)
                        },
                        children: (0, i.jsxs)(a2, {
                            className: t ? "active" : "",
                            children: [(0, i.jsxs)("svg", {
                                width: "164",
                                height: "45",
                                viewBox: "0 0 164 45",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                role: "img",
                                "aria-label": "logo utsubo",
                                children: [(0, i.jsxs)("g", {
   
                                }), (0, i.jsxs)("defs", {
                                    children: [(0, i.jsxs)("linearGradient", {
                                        id: "paint0_linear_2085_11843",
                                        x1: "27.6139",
                                        y1: "5.94789",
                                        x2: "-33.4463",
                                        y2: "53.3783",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [(0, i.jsx)("stop", {
                                            stopColor: "#2D2D2D"
                                        }), (0, i.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "#2D2D2D",
                                            stopOpacity: "0"
                                        })]
                                    }), (0, i.jsx)("clipPath", {
                                        id: "clip0_2085_11843",
                                        children: (0, i.jsx)("rect", {
                                            width: "164",
                                            height: "44.2958",
                                            fill: "white"
                                        })
                                    })]
                                })]
                            }), (0, i.jsxs)("p", {
                                children: ["meta ninjaz is made by ", (0, i.jsx)("strong", {
                                    children: "EL PUTA"
                                }), ", an award-winning,", (0, i.jsx)("br", {}), " Japan-based company", " ", (0, i.jsx)("span", {
                                    className: "highlight",
                                    children: "specialized in Web3 and 3D experiences."
                                })]
                            }), (0, i.jsxs)("p", {
                                children: ["While our talented team focuses on building the Metaverse, our company provides financial security ensuring", (0, i.jsx)("br", {}), " ", (0, i.jsx)("span", {
                                    className: "highlight",
                                    children: "long-term commitment"
                                }), " to the project."]
                            }), (0, i.jsxs)("p", {
                                children: ["The strategic location of our company and our multicultural", (0, i.jsx)("br", {}), " team offer meta ninjaz unique opportunities in the Asian, American, and European markets."]
                            }), (0, i.jsxs)("p", {
                                children: ["Want to be part of this adventure?", " ", (0, i.jsx)("a", {
                                    href: "#",
                                    alt: "job page",
                                    children: "We recruit"
                                })]
                            })]
                        })
                    })
                },
                a3 = () => (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(a0, {
                        children: (0, i.jsx)(a1, {
                            children: (0, i.jsx)(a5, {})
                        })
                    })
                });
            var a4 = e(7846);
            let a6 = () => {
                let n = (0, r.useRef)(null),
                    t = (0, r.useRef)(null);
                return (0, r.useEffect)(() => {
                    function n() {
                        if (!(0, a.y0)().hasSeenTry) {
                            let n = t.current;
                            n && (0, a.y0)().dom.current && ((0, a.y0)().dom.current.children[0].style.maxHeight = n.getBoundingClientRect().height + "px")
                        }
                    }
                    return window.addEventListener("resize", n), n(), () => window.removeEventListener("resize", n)
                }, []), (0, i.jsxs)(a4.w, {
                    ref: n,
                    role: "main",
                    id: "mainscrll",
                    className: "".concat("show"),
                    children: [(0, i.jsxs)("span", {
                        ref: t,
                        className: "preExp",
                        children: [(0, i.jsxs)(b, {
                            className: "exphide snapstart",
                            mutationType: "planseq1",
                            threshold: 1,
                            children: [(0, i.jsx)(b, {
                                className: "exphide",
                                mutationType: "fullhead",
                                threshold: 2,
                                children: (0, i.jsx)(b, {
                                    className: "exphide",
                                    mutationType: "head",
                                    threshold: .5,
                                    children: (0, i.jsx)(eA, {})
                                })
                            }), (0, i.jsx)(b, {
                                className: "exphide",
                                mutationType: "blue",
                                threshold: 1,
                                children: (0, i.jsx)(a4.i, {})
                            }), (0, i.jsx)(el, {})]
                        }), (0, i.jsx)(b, {
                            mutationType: "gameplay",
                            threshold: 1,
                            offsetvw: 1,
                            children: (0, i.jsx)(aK, {})
                        })]
                    }), (0, i.jsxs)(b, {
                        className: "exphide",
                        mutationType: "planseq2",
                        threshold: 1,
                        children: [(0, i.jsx)(b, {
                            className: "exphide",
                            mutationType: "roadmap",
                            threshold: 1,
                            offsetvw: 0,
                            children: (0, i.jsx)(i9, {})
                        }), (0, i.jsx)(ig, {}), (0, i.jsx)(b, {
                            className: "exphide",
                            mutationType: "team",
                            threshold: 1,
                            offsetvw: 0,
                            children: (0, i.jsx)(aE, {})
                        }), (0, i.jsx)(iF, {}), (0, i.jsx)(a3, {})]
                    }), (0, i.jsx)(b, {
                        className: "exphide",
                        mutationType: "footer",
                        threshold: 1,
                        offsetvw: 1,
                        children: (0, i.jsx)(eK, {})
                    }), (0, i.jsx)(w.ZP, {})]
                })
            };

            function a8() {
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a6, {}), (0, i.jsx)(tm, {})]
                })
            }
        }
    }
]);