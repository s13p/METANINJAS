"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [955], {
        4955: function(n, e, t) {
            t.r(e), t.d(e, {
                default: function() {
                    return P
                },
                inactivityDrag: function() {
                    return C
                }
            });
            var i = t(5893),
                o = t(6955),
                r = t(7294),
                a = t(7297),
                s = t(7379);

            function c() {
                let n = (0, a.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100vw;\n  height: 100vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scroll-behavior: smooth;\n"]);
                return c = function() {
                    return n
                }, n
            }

            function u() {
                let n = (0, a.Z)(["\n  position: absolute;\n  z-index: 2;\n"]);
                return u = function() {
                    return n
                }, n
            }

            function p() {
                let n = (0, a.Z)(["\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 9;\n  background-color: #212121;\n  pointer-events: none;\n  width: 100vw;\n  height: 100vh;\n  // overflow: hidden;\n"]);
                return p = function() {
                    return n
                }, n
            }
            let d = s.ZP.div.withConfig({
                    componentId: "sc-b0860ede-0"
                })(c()),
                l = s.ZP.div.withConfig({
                    componentId: "sc-b0860ede-1"
                })(u());
            s.ZP.div.withConfig({
                componentId: "sc-b0860ede-2"
            })(p());
            var f = t(543),
                h = t(8891),
                g = t(4661),
                m = t(1802),
                v = t(5678),
                x = t(4219),
                w = t(1472);

            function b() {
                let n = (0, a.Z)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n"]);
                return b = function() {
                    return n
                }, n
            }

            function y() {
                let n = (0, a.Z)(["\n	0% {\n		transform: translate3d(0, 0, 0);\n	}\n	50% {\n		transform: translate3d(0, 40px, 0);\n	}\n	100% {\n		transform: translate3d(0, 0, 0);\n	}\n"]);
                return y = function() {
                    return n
                }, n
            }

            function _() {
                let n = (0, a.Z)(["\n  width: 80px;\n  .spinner-a {\n    animation-name: ", ";\n    animation-duration: 4s;\n    animation-iteration-count: infinite;\n  }\n"]);
                return _ = function() {
                    return n
                }, n
            }
            let F = (0, s.ZP)(w.a.div).withConfig({
                    componentId: "sc-5c5694c7-0"
                })(b()),
                Z = (0, s.F4)(y()),
                I = s.ZP.svg.withConfig({
                    componentId: "sc-5c5694c7-1"
                })(_(), Z),
                j = () => {
                    let n = (0, x.N1)(n => n.showSpinnerLoading),
                        e = (0, w.useTransition)(n, {
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
                            config: w.config.default
                        });
                    return e((n, e) => {
                        let { ...t
                        } = n;
                        return e && (0, i.jsx)(F, {
                            style: { ...t
                            },
                            children: (0, i.jsxs)(I, {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 105.44 104",
                                children: [(0, i.jsx)("path", {
                                    d: "M29.27 11.67a6.52 6.52 0 0 0-9.38-1.64 52.72 52.72 0 1 0 65.33-.27 6.51 6.51 0 0 0-9.31 1.67c-2.47 3.48-1.31 8.31 1.9 11.11a38.14 38.14 0 1 1-50.4.2c3.17-2.81 4.3-7.6 1.86-11.07Z"
                                }), (0, i.jsx)("path", {
                                    className: "spinner-a",
                                    d: "M54.64 14.69a2 2 0 0 1-2.79.48 2 2 0 0 1-.48-.48L43.23 3.15A2 2 0 0 1 44.86 0h16.28a2 2 0 0 1 1.64 3.15Z"
                                })]
                            })
                        })
                    })
                };

            function S() {
                let n = (0, a.Z)(["\n  position: fixed;\n  top: 250px;\n  right: 0;\n  width: auto;\n  z-index: 99999;\n  border-radius: 4px;\n\n  > select {\n    width: 100%;\n  }\n\n  background-color: rgba(40, 43, 47, 0.99);\n  margin-right: 4px;\n  font-weight: 300;\n  font-size: 11px;\n  color: #9a9a9a;\n  > div {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n\n    input,\n    select {\n      border-radius: 2px;\n      margin-left: 6px;\n    }\n    input[type='number'] {\n      width: 60px;\n    }\n\n    > button {\n      padding: 6px 12px;\n      background-color: #3f4354;\n      margin: 6px;\n      color: #ffffff;\n\n      span {\n        margin-left: 10px;\n      }\n    }\n    > div {\n      padding: 6px;\n      cursor: pointer;\n      &.active {\n        font-weight: bold;\n      }\n    }\n  }\n"]);
                return S = function() {
                    return n
                }, n
            }

            function D() {
                let n = (0, a.Z)(["\n  text-align: left;\n  margin: 6px 12px 0px 12px;\n  line-height: 4px;\n  li {\n    padding: 0;\n    height: 22px;\n    border-bottom: 1px solid #a1a1a169;\n    line-height: 22px;\n    margin-bottom: 7px;\n\n    span {\n      display: inline-block;\n      float: right;\n      padding: 0 7px;\n      line-height: 22px;\n      margin-left: 8px;\n      cursor: pointer;\n    }\n  }\n"]);
                return D = function() {
                    return n
                }, n
            }
            t(3753), s.ZP.div.withConfig({
                componentId: "sc-61d4b59-0"
            })(S()), s.ZP.ul.withConfig({
                componentId: "sc-61d4b59-1"
            })(D());
            var E = t(7430),
                k = t(1575);
            let T = {
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
                C = (0, h.Z)(() => {
                    let {
                        lockRotation: n
                    } = (0, g.A8)(), {
                        moveAlongZ: e
                    } = (0, k.XV)();
                    n && ((0, o.y0)().isIdle || !e ? C() : (0, g.Th)({
                        isDragging: !1,
                        resetCamera: !0
                    }))
                }, 1250),
                O = () => {
                    let n = (0, o.oR)(n => n.customisationStep),
                        e = (0, m.LM)(n => n.onboarded),
                        [t] = (0, o.oR)(n => [n.hiddenUi]);
                    return (0, i.jsx)(i.Fragment, {
                        children: e && !t && "" === n ? (0, i.jsx)(s.f6, {
                            theme: v.r,
                            children: (0, i.jsx)(l, {
                                children: (0, i.jsx)(j, {})
                            })
                        }) : null
                    })
                },
                z = n => {
                    let {
                        children: e,
                        refCanvasState: t
                    } = n, a = (0, r.useRef)(null), {
                        width: s,
                        height: c
                    } = function() {
                        let [n, e] = (0, r.useState)({
                            width: void 0,
                            height: void 0
                        });
                        return (0, r.useEffect)(() => {
                            function n() {
                                e({
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                })
                            }
                            return window.addEventListener("resize", n), n(), () => window.removeEventListener("resize", n)
                        }, []), n
                    }(), u = (0, f.useGesture)({
                        onDrag: n => {
                            let {
                                event: e,
                                delta: t
                            } = n, {
                                dragDelta: i,
                                lockRotation: o
                            } = (0, g.A8)();
                            i.x = -t[0] / (s / 2 * .001), i.y = t[1] / (.001 * c), (0, g.Th)({
                                dragDelta: i,
                                resetCamera: !1,
                                isDragging: !0
                            }), o && C.cancel()
                        },
                        onPointerDown: () => {
                            (0, g.Th)({
                                isDragging: !0
                            })
                        },
                        onPointerUp: () => {
                            let {
                                lockRotation: n
                            } = (0, g.A8)();
                            n && C()
                        }
                    }, { ...T
                    });
                    return (0, E.zX)("canvas_ready", n => {
                        n.connect(a.current)
                    }, [a]), (0, r.useEffect)(() => {
                        let n = a.current;
                        if (!a.current) return;
                        (0, o.IW)({
                            dom: a
                        }), (0, E.Kn)("dom_ready", a);
                        let e = n => {
                            let e = a.current.scrollTop;
                            (0, o.IW)({
                                headScrolled: e > 100
                            }), !(0, o.y0)().hasSeenTry && e + a.current.clientHeight >= a.current.scrollHeight && "/" === window.location.pathname && (setTimeout(() => {
                                (0, o.y0)().hasSeenExperienceOnce || (a.current.style.overflowY = "hidden")
                            }), (0, o.y0)().hasSeenExperienceOnce || (0, o.IW)({
                                showLoadingMetaverse: !0
                            }), setTimeout(() => {
                                (0, o.y0)().hasSeenExperienceOnce ? (0, o.y0)().hasSeenTry || (a.current.children[0].style.maxHeight = "none", (0, o.IW)({
                                    hasSeenTry: !0
                                })) : (a.current.children[0].style.maxHeight = "none", document.body.style.cursor = "auto", (0, o.IW)({
                                    hasSeenTry: !0,
                                    goBackMetaverse: !0
                                }), (0, E.Kn)("launchMetaverse"), localStorage.setItem("seenExperience", !0))
                            }, (0, o.y0)().hasSeenExperienceOnce ? 0 : 1500)), (0, o.IW)({
                                posY: e
                            })
                        };
                        return n.addEventListener("scroll", e, {
                            passive: !0
                        }), () => {
                            n.removeEventListener("scroll", e)
                        }
                    }, [a]), (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(d, {
                            ref: a,
                            style: {
                                touchAction: "none"
                            },
                            ...u(),
                            children: [e, (0, o.oR)(n => n.theatre) && !1]
                        }), (0, i.jsx)(O, {})]
                    })
                };
            var P = z
        },
        3753: function(n, e, t) {
            t.d(e, {
                gI: function() {
                    return c
                },
                Xj: function() {
                    return u
                },
                vd: function() {
                    return s
                }
            });
            var i = t(4671),
                o = t(374),
                r = {
                    curve_planseq1: {
                        timeline: {
                            duration: 4,
                            ease: "inOut",
                            easeFunc: "none"
                        },
                        cameraData: [{
                            pct: 0,
                            fov: 50
                        }, {
                            pct: 1,
                            fov: 50
                        }],
                        data: [{
                            position: [0, 5, 3]
                        }, {
                            position: [0, 1, 3]
                        }, {
                            position: [2.11, 1, -9.5]
                        }, {
                            position: [-6.67, .66, -15.37]
                        }]
                    },
                    curve_planseq1_target: {
                        timeline: {
                            duration: 4,
                            ease: "out",
                            easeFunc: "none"
                        },
                        data: [{
                            position: [0, 5, -3]
                        }, {
                            position: [0, 1, -3]
                        }, {
                            position: [-3.08, 1, -8.18]
                        }, {
                            position: [-5.79, 2.65, -3.12]
                        }]
                    },
                    curve_planseq2: {
                        timeline: {
                            duration: 4,
                            ease: "inOut",
                            easeFunc: "none"
                        },
                        cameraData: [{
                            pct: 0,
                            fov: 50
                        }, {
                            pct: 1,
                            fov: 50
                        }],
                        data: [{
                            position: [34.6, 38.34, 134.96]
                        }, {
                            position: [-26.43, 20.31, 60.18]
                        }, {
                            position: [9.52, 17.03, 30.18]
                        }, {
                            position: [-25.52, -5.31, -37.18]
                        }]
                    },
                    curve_planseq2_target: {
                        timeline: {
                            duration: 4,
                            ease: "out",
                            easeFunc: "none"
                        },
                        data: [{
                            position: [-10.81, 24.25, 47.54]
                        }, {
                            position: [10.35, 12.4, 45.64]
                        }, {
                            position: [-10.91, 9.13, -4.09]
                        }, {
                            position: [-41.58, 3.7, -61.89]
                        }]
                    },
                    curve_team: {
                        timeline: {
                            duration: 4,
                            ease: "inOut",
                            easeFunc: "none"
                        },
                        cameraData: [{
                            pct: 0,
                            fov: 50
                        }, {
                            pct: 1,
                            fov: 50
                        }],
                        data: [{
                            position: [15.04, 16.83, -3.04]
                        }, {
                            position: [8.56, 24.97, 24.49]
                        }]
                    },
                    curve_team_target: {
                        timeline: {
                            duration: 4,
                            ease: "out",
                            easeFunc: "none"
                        },
                        data: [{
                            position: [22.25, 16.65, -4.39]
                        }, {
                            position: [17.11, 18.72, 22.12]
                        }]
                    },
                    curve_planseq3: {
                        timeline: {
                            duration: 4,
                            ease: "inOut",
                            easeFunc: "none"
                        },
                        cameraData: [{
                            pct: 0,
                            fov: 50
                        }, {
                            pct: 1,
                            fov: 50
                        }],
                        data: [{
                            position: [4.04, 26.04, 10.43]
                        }, {
                            position: [-14.94, 17.03, -1.94]
                        }, {
                            position: [-4.25, 1.92, -16.07]
                        }]
                    },
                    curve_planseq3_target: {
                        timeline: {
                            duration: 4,
                            ease: "out",
                            easeFunc: "none"
                        },
                        data: [{
                            position: [-18.89, 19.74, -9.22]
                        }, {
                            position: [-29.27, 2.42, -12.58]
                        }, {
                            position: [-31.5, 5.99, -26.02]
                        }]
                    },
                    curve_plan_sequence: {
                        timeline: {
                            duration: 20,
                            ease: "none",
                            easeFunc: "none"
                        },
                        data: [{
                            position: [1, 1, 1]
                        }]
                    },
                    curve_footer: {
                        timeline: {
                            duration: 20,
                            ease: "none",
                            easeFunc: "none"
                        },
                        cameraData: [{
                            pct: 0,
                            fov: 50
                        }, {
                            pct: 1,
                            fov: 50
                        }],
                        data: [{
                            position: [3, 3, 3]
                        }]
                    },
                    curve_footer_target: {
                        timeline: {
                            duration: 20,
                            ease: "none",
                            easeFunc: "none"
                        },
                        data: [{
                            position: [1, 1, 1]
                        }]
                    },
                    curve_birds: {
                        timeline: {
                            duration: 20,
                            ease: "out",
                            easeFunc: "none"
                        },
                        data: [{
                            position: [.91, 43.27, -48.31]
                        }, {
                            position: [66.75, 19.57, 103.77]
                        }, {
                            position: [193.43, 41.46, -7.94]
                        }]
                    },
                    curve_birdsmountain: {
                        timeline: {
                            duration: 20,
                            ease: "out",
                            easeFunc: "none"
                        },
                        data: [{
                            position: [-315.31, 122.11, 155.24]
                        }, {
                            position: [-84.7, 68.89, 100.99]
                        }, {
                            position: [-138.88, 56.56, -130.15]
                        }]
                    },
                    curve_entrance: {
                        timeline: {
                            duration: 17,
                            ease: "out",
                            easeFunc: "none"
                        },
                        cameraData: [{
                            pct: 0,
                            fov: 30
                        }, {
                            pct: 1,
                            fov: 70
                        }],
                        data: [{
                            position: [210.59, 33.71, -51.41]
                        }, {
                            position: [191.71, 35.32, -48.6]
                        }, {
                            position: [209.37, 33.1, -57.74]
                        }, {
                            position: [210.62, 35.34, -43.55]
                        }, {
                            position: [197.52, 32.31, -46.65]
                        }, {
                            position: [201.1, 33.1, -60.22]
                        }, {
                            position: [202.04, 33.95, -60.88]
                        }, {
                            position: [202.39, 33.82, -60.93]
                        }]
                    },
                    curve_entrance_target: {
                        timeline: {
                            duration: 17,
                            ease: "out",
                            easeFunc: "none"
                        },
                        data: [{
                            position: [231.9, 36.66, -52.79]
                        }, {
                            position: [203.96, 31.24, -47.41]
                        }, {
                            position: [205.66, 31.47, -46.04]
                        }, {
                            position: [204.75, 32.15, -47.72]
                        }, {
                            position: [204.41, 31.64, -46.16]
                        }, {
                            position: [204.88, 32.69, -48.15]
                        }, {
                            position: [2.77, 43.07, -35.93]
                        }, {
                            position: [.83, 58.21, -34.42]
                        }]
                    },
                    curve_parkour: {
                        timeline: {
                            duration: 4,
                            ease: "inOut",
                            easeFunc: "power2"
                        },
                        cameraData: [{
                            pct: 0,
                            fov: 70
                        }, {
                            pct: 1,
                            fov: 50
                        }],
                        data: [{
                            position: [137.57, -.76, -333.74]
                        }, {
                            position: [228.07, 30.06, -350.43]
                        }, {
                            position: [238.42, 45.48, -296.74]
                        }]
                    },
                    curve_parkour_target: {
                        timeline: {
                            duration: 4,
                            ease: "inOut",
                            easeFunc: "power2"
                        },
                        data: [{
                            position: [170.81, 11.82, -320.49]
                        }, {
                            position: [218.31, 34.52, -332.14]
                        }, {
                            position: [226.5, 49.03, -284.53]
                        }]
                    }
                };
            let a = (0, i.Z)((n, e) => r),
                s = n => a(n, o.Z);
            Object.assign(s, a);
            let {
                getState: c,
                setState: u
            } = a
        }
    }
]);