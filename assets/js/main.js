! function(t) {
    function e(e) {
        for (var n, o, r = e[0], a = e[1], s = 0, c = []; s < r.length; s++) o = r[s], Object.prototype.hasOwnProperty.call(i, o) && i[o] && c.push(i[o][0]), i[o] = 0;
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
        for (l && l(e); c.length;) c.shift()()
    }
    var n = {},
        i = {
            3: 0
        };

    function o(e) {
        if (n[e]) return n[e].exports;
        var i = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }
    o.e = function(t) {
        var e = [],
            n = i[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var r = new Promise((function(e, o) {
                    n = i[t] = [e, o]
                }));
                e.push(n[2] = r);
                var a, s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, o.nc && s.setAttribute("nonce", o.nc), s.src = function(t) {
                    return o.p + "js/" + ({}[t] || t) + ".js"
                }(t);
                var l = new Error;
                a = function(e) {
                    s.onerror = s.onload = null, clearTimeout(c);
                    var n = i[t];
                    if (0 !== n) {
                        if (n) {
                            var o = e && ("load" === e.type ? "missing" : e.type),
                                r = e && e.target && e.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + o + ": " + r + ")", l.name = "ChunkLoadError", l.type = o, l.request = r, n[1](l)
                        }
                        i[t] = void 0
                    }
                };
                var c = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: s
                    })
                }), 12e4);
                s.onerror = s.onload = a, document.head.appendChild(s)
            }
        return Promise.all(e)
    }, o.m = t, o.c = n, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) o.d(n, i, function(e) {
                return t[e]
            }.bind(null, i));
        return n
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/assets/", o.oe = function(t) {
        throw t
    };
    var r = window.webpackJsonp = window.webpackJsonp || [],
        a = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var s = 0; s < r.length; s++) e(r[s]);
    var l = a;
    o(o.s = 0)
}({
    0: function(t, e, n) {
        n("BSPe"), n("B7/P"), t.exports = n("7XYO")
    },
    "5DeG": function(t, e) {
        (function() {
            var e, n, i = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
            n = "data:font/woff;charset=utf-8;base64,d09GRk9UVE8AAAQYAAoAAAAABlwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAAMQAAADSEQga8UZGVE0AAAG4AAAAGwAAABxqQJGNT1MvMgAAAdQAAABDAAAAYFYPXfBjbWFwAAACGAAAADcAAAFCAA0D1mhlYWQAAAJQAAAAKQAAADb9ITBXaGhlYQAAAnwAAAAZAAAAJAN7/ztobXR4AAACmAAAAAgAAAAIAfQAAG1heHAAAAKgAAAABgAAAAYAAlAAbmFtZQAAAqgAAAFZAAACjkaWZeZwb3N0AAAEBAAAABMAAAAg/4YAMnicY2RgYWFgZGTkCs0rySzJSU0xZGBkYmBk0PjBz/BDmvGHDNMPWeYf4izdQMAqw7CIX4aBQUCGYamgDAO7DMNpIQZmkGoXBl+GMOei1MSS1BSFpEqFqtS8fCBO19HRUSjPLMlQcMvPK3HLL0pPVTDSM1DQyCgpKbDS108DiqaBRPWK0/TyUks04Y5AuAYIBBmYGBkVFLv3/nDdy7h37++Yvcx7xdR/rHzPtvdPuegP198xf1zZ+fi6RbpFu3m4ANybP/V4nGNgYGBkAIIztovOg+jzjOV2ULoeAEMOBccAeJxjYGH8wviFgZWBgamLaQ8DA0MPhGZ8wGDIyAQUZWBjZoABRgYkEJDmmsJwgMGAwYBZ4b8FQxSGGgUgZAQAfmQKqgB4nGNgYGBmgGAZBkYGELAB8hjBfBYGBSDNAoQgvsH//xDy/0WoSgZGNgYYk2hAqvrBDgBrAQbjAHicY2BkYGAA4pys3ox4fpuvDNzML4AiDOcZy3ci01DAwcAEogAU4ghtAAAAeJxjYGRgYFb4b8EQxQADjAyogAkAMlIBuQAAAAH0AAAAAAAAAABQAAACAAB4nIWQzUoDMRSFT+wPFESkT5CNUGEmzZRuOluhC8Wl3bdMph2omTpNKe1eceebCL6Ca9euXfsE7vTMNBREsBOS+92TMzc3AXCCZwjsvgs8ehZo4cPzEZr48lzDmbjyXEdL3Htu4FS8eG5Sf6dT1FvMHqq/ShZo483zEY7x6bmGS3x7rqMt7jw3IMWT5yb1V/ZXwGAMxzWBxAQbrltmFrmPUwTVkFgjo3NGGnLXkstY0GGo9aCgGTt0OI4FYnQ5Uu9N916FJTNF1VA/5zMVZuxMIicbuTU255wGQSDXmZvJYW7dMC+mRvaUlp2Zc4u4202ppqWqlqmyxrHITXVK2eG8uk1EybrMzU1CvK60DCvcMjFJtmL87xox59+SOz3CACHXkG7N2GepX23Gcn80ORqEUdjTUf9QkyNqBR8nq/qSrF1WV1Use8LIFMsst1LrSGmt5YGCP/yzcc0AAAB4nGNgZgCD/80MRgxYAAAoRAG4AA==", e = function() {
                function t(t) {
                    var e;
                    this.ready = i(this.ready, this), e = "src: url(" + n + ") format('woff');", this.css = "@font-face {\n    font-family: font-detect-0-woff;\n    " + e + "\n}\n#font-detect-test-block {\n    display: inline-block;\n    position: fixed;\n    left: -100%;\n}"
                }
                return t.prototype.inject = function() {
                    var t, e;
                    if (null == (t = document.getElementById("font-detect-test-block")) && ((t = document.createElement("div")).id = "font-detect-test-block", t.innerHTML = "0", document.body.appendChild(t)), null == (e = document.getElementById("font-detect-styles"))) return (e = document.createElement("style")).setAttribute("type", "text/css"), e.id = "font-detect-styles", e.innerHTML = this.css, document.getElementsByTagName("head")[0].appendChild(e)
                }, t.prototype.remove = function() {
                    var t, e;
                    if (null != (t = document.getElementById("font-detect-test-block")) && t.remove(), null != (e = document.getElementById("font-detect-styles"))) return e.remove()
                }, t.prototype.ready = function(t) {
                    var e, n;
                    return this.inject(), (e = document.getElementById("font-detect-test-block")).style.fontFamily = "font-detect-0-woff", e.clientWidth > 0 ? setTimeout((n = this, function() {
                        return n.ready(t)
                    }), 50) : t()
                }, t.prototype.detect = function(t, e) {
                    return this.ready((n = this, function() {
                        var i, o, r, a, s;
                        for (i = document.getElementById("font-detect-test-block"), r = [], a = 0, s = t.length; a < s; a++) o = t[a], i.style.fontFamily = "'" + o + "', font-detect-0-woff", r.push(i.clientWidth > 0);
                        return e(null, r), n.remove()
                    }));
                    var n
                }, t
            }(), t.exports = e
        }).call(this)
    },
    "5IH5": function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "default", (function() {
            return f
        }));
        var i = n("z+i3"),
            o = n("QZz8"),
            r = n("EgnG"),
            a = n("Y2vH");

        function s(t) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function l(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function c(t, e) {
            return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function u(t, e, n) {
            return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = d(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function d(t) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function h(t, e) {
            return (h = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var f = function(t) {
            function e() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), c(this, d(e).apply(this, arguments))
            }
            var n, i, s;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && h(t, e)
            }(e, t), n = e, (i = [{
                key: "init",
                value: function() {
                    u(d(e.prototype), "init", this).call(this), this.onIntroLoadDone = this.onIntroLoadDone.bind(this), this.onLinkClick = this.onLinkClick.bind(this), this.onMenuButtonLinkClick = this.onMenuButtonLinkClick.bind(this), this.update = this.update.bind(this), this.navigate = this.navigate.bind(this), this.isReady = !1, this.links = [], this.homeLinks = o.a.doc.querySelectorAll(".menu-item-home"), this.links = this.$$(".menu-item"), this.linksInner = this.$$(".menu-item-inner"), this.linkDivider = this.$(".menu-divider"), this.menuContent = this.$(".menu-content"), this.mobileMenuContent = this.$(".menu-mobile-content"), this.mobileMenuIsOpen = !1, this.isScrollNative = !1, this.menuButton = this.$(".menu-button"), this.menuButtonInner = this.$(".menu-button-inner")
                }
            }, {
                key: "initEvents",
                value: function() {
                    u(d(e.prototype), "initEvents", this).call(this), o.a.doc.addEventListener("introLoadDone", this.onIntroLoadDone, !1)
                }
            }, {
                key: "destroyEvents",
                value: function() {
                    u(d(e.prototype), "destroyEvents", this).call(this), o.a.doc.removeEventListener("introLoadDone", this.onIntroLoadDone)
                }
            }, {
                key: "onLinkClick",
                value: function(t) {
                    var e = t.target.getAttribute("data-menu-link");
                    if (!this.isReady) return !1;
                    o.a.page.current.slug !== e && (this.reset(), this.navigate(e), this.isReady = !1)
                }
            }, {
                key: "onMenuButtonLinkClick",
                value: function() {
                    var t = this;
                    if (!this.isReady) return !1;
                    if (this.isReady = !1, o.a.viewport.small)
                        if (this.mobileMenuIsOpen) setTimeout((function() {
                            null !== t.menuButtonInner && (t.menuButtonInner.innerHTML = "Menu")
                        }), 200), Object(r.a)({
                            targets: this.mobileMenuContent.querySelectorAll(".menu-item-inner"),
                            translateY: [0, -100],
                            duration: 500,
                            easing: o.a.easings.soft
                        }), Object(r.a)({
                            targets: this.mobileMenuContent,
                            scaleY: [1, 0],
                            duration: 500,
                            delay: 300,
                            easing: o.a.easings.soft,
                            complete: function() {
                                t.mobileMenuIsOpen = !1, t.component.classList.remove("is-open"), t.isScrollNative && o.a.body.classList.add("is-scroll-native"), t.isReady = !0
                            }
                        });
                        else {
                            if (setTimeout((function() {
                                    null !== t.menuButtonInner && (t.menuButtonInner.innerHTML = "Close")
                                }), 200), null !== this.mobileMenuContent && (this.mobileMenuContent.innerHTML = ""), null === this.mobileMenuContent) {
                                var e = o.a.doc.createElement("div");
                                e.classList.add("menu-mobile-content"), this.component.appendChild(e), this.mobileMenuContent = this.$(".menu-mobile-content")
                            }
                            this.update('\n            <ul class="h-full flex flex-col justify-center text-24 xs:text-32 font-staffX p-24 uppercase text-center">\n                <li class="menu-item '.concat("home" === o.a.activePage ? "text-outline" : "", '" data-menu-link="home">\n                    <div class="pointer-events-none overflow-hidden">\n                        <div class="animation-translate menu-item-inner">').concat(o.a.data.labels.home, '</div>\n                    </div>\n                </li>\n                <li class="menu-item ').concat("gallery" === o.a.activePage ? "text-outline" : "", '" data-menu-link="gallery">\n                    <div class="pointer-events-none overflow-hidden">\n                        <div class="animation-translate menu-item-inner">').concat(o.a.data.labels.gallery, '</div>\n                    </div>\n                </li>\n                <li class="menu-item ').concat("about" === o.a.activePage ? "text-outline" : "", '" data-menu-link="about">\n                    <div class="pointer-events-none overflow-hidden">\n                        <div class="animation-translate menu-item-inner">').concat(o.a.data.labels.about, "</div>\n                    </div>\n                </li>\n            </ul>"), !0), this.mobileMenuIsOpen = !0, this.component.classList.add("is-open"), o.a.body.classList.contains("is-scroll-native") && (this.isScrollNative = !0, o.a.body.classList.remove("is-scroll-native")), Object(r.a)({
                                targets: this.mobileMenuContent,
                                scaleY: [0, 1],
                                duration: 700,
                                delay: 300,
                                easing: o.a.easings.soft,
                                begin: function() {
                                    t.mobileMenuIsOpen = !0, t.component.classList.add("is-open")
                                },
                                complete: function() {
                                    t.isReady = !0
                                }
                            })
                        }
                }
            }, {
                key: "navigate",
                value: function(t) {
                    switch (a.a.classFactory.getPage(o.a.doc.querySelector('[data-page="container"]'), t), t) {
                        case "gallery":
                            o.a.pages.gallery.animateIn();
                            break;
                        case "home":
                            o.a.pages.home.animateIn("menuClick");
                            break;
                        case "about":
                            o.a.pages.about.animateIn()
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    var t = o.a.page.current;
                    t.animateOut(), t.destroy()
                }
            }, {
                key: "onIntroLoadDone",
                value: function() {
                    this.isReady = !0
                }
            }, {
                key: "removeListeners",
                value: function(t) {
                    var e = this;
                    t.length && t.forEach((function(t) {
                        t.removeEventListener("click", e.onLinkClick)
                    })), this.homeLinks.length && this.homeLinks.forEach((function(t) {
                        t.removeEventListener("click", e.onLinkClick)
                    }))
                }
            }, {
                key: "update",
                value: function(t) {
                    var e = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.animateOut();
                    var i = this.animateOut(),
                        a = o.a.doc.querySelector(".close-icon");
                    null !== a && Object(r.a)({
                        targets: a,
                        opacity: 0,
                        duration: 300,
                        easing: "linear"
                    }), i.then((function() {
                        e.removeListeners(e.links), n ? (e.mobileMenuContent.style.transform = "scaleY(0)", e.mobileMenuContent.innerHTML = t) : e.menuContent.innerHTML = t, e.links = e.$$(".menu-item"), e.linksInner = e.$$(".menu-item-inner"), e.linkDivider = e.$(".menu-divider"), e.links.forEach((function(t) {
                            return t.style.pointerEvents = "none"
                        })), e.animateIn()
                    }))
                }
            }, {
                key: "animateOut",
                value: function() {
                    var t = this;
                    return new Promise((function(e) {
                        var n = r.a.timeline({
                            duration: 300,
                            complete: function() {
                                e()
                            }
                        });
                        n.add({
                            targets: t.linksInner,
                            translateY: [0, -100],
                            duration: 300,
                            easing: o.a.easings.soft
                        }), n.add({
                            targets: t.linkDivider,
                            translateY: -50,
                            opacity: 0,
                            rotate: "-65deg",
                            duration: 300,
                            easing: o.a.easings.soft
                        }, "-=300"), t.mobileMenuIsOpen && (setTimeout((function() {
                            null !== t.menuButtonInner && (t.menuButtonInner.innerHTML = "Menu")
                        }), 200), n.add({
                            targets: t.mobileMenuContent,
                            scaleY: [1, 0],
                            duration: 300,
                            easing: o.a.easings.soft,
                            complete: function() {
                                t.mobileMenuIsOpen = !1, t.component.classList.remove("is-open")
                            }
                        }, "-=100"))
                    }))
                }
            }, {
                key: "animateIn",
                value: function() {
                    var t = this;
                    Object(r.a)({
                        targets: this.linksInner,
                        translateY: o.a.viewport.small ? [100, 0] : [-100, 0],
                        delay: o.a.viewport.small ? r.a.stagger(30) : 0,
                        duration: 800,
                        easing: o.a.easings.soft,
                        complete: function() {
                            t.menuButton.addEventListener("click", t.onMenuButtonLinkClick), t.homeLinks.forEach((function(e) {
                                e.addEventListener("click", t.onLinkClick)
                            })), t.links.forEach((function(e) {
                                e.addEventListener("click", t.onLinkClick), setTimeout((function() {
                                    e.style.pointerEvents = ""
                                }), 300)
                            }))
                        }
                    }), Object(r.a)({
                        targets: this.menuButton,
                        opacity: 1,
                        duration: 500,
                        easing: "linear"
                    }), Object(r.a)({
                        targets: this.linkDivider,
                        opacity: .75,
                        translateY: "-50%",
                        rotate: "-65deg",
                        delay: 300,
                        duration: 500,
                        easing: "linear"
                    })
                }
            }, {
                key: "resetStyle",
                value: function() {
                    Object(r.a)({
                        targets: this.linkDivider,
                        opacity: .75,
                        translateY: "-50%",
                        rotate: "-65deg",
                        duration: 500,
                        delay: 500,
                        easing: o.a.easings.soft
                    })
                }
            }]) && l(n.prototype, i), s && l(n, s), e
        }(i.a)
    },
    "688/": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
            function t() {
                var t = this;
                if (this.lastRAFId = 0, this.frameId = 0, this.lastNow = 0, this.uidCounter = 0, this.stopped = !0, this.queue = [], "undefined" == typeof window || void 0 === window.requestAnimationFrame) throw new Error("You are not using this package in browser environment");
                this.frameHandler = function() {
                    return t.frame()
                }
            }
            return t.prototype.start = function() {
                this.stopped = !1, this.lastNow = performance.now(), this.lastRAFId = window.requestAnimationFrame(this.frameHandler)
            }, t.prototype.stop = function(t) {
                void 0 === t && (t = !1), t && window.cancelAnimationFrame(this.lastRAFId), this.stopped = !0
            }, t.prototype.frame = function() {
                var t = this,
                    e = performance.now(),
                    n = e - this.lastNow;
                this.lastNow = e, this.queue.forEach((function(e) {
                    e.isHeavy ? t.frameId % 2 == 0 && e.handler(n, t.frameId) : e.handler(n, t.frameId)
                })), this.frameId += 1, this.stopped || (this.lastRAFId = window.requestAnimationFrame(this.frameHandler))
            }, t.prototype.add = function(t, e, n) {
                if (void 0 === n && (n = !1), "function" != typeof t) throw new Error("Expected function as handler");
                return void 0 === e && (e = "h_" + ++this.uidCounter), this.queue.push({
                    id: e,
                    handler: t,
                    isHeavy: n
                }), e
            }, t.prototype.remove = function(t) {
                if (void 0 === t) throw new Error("Expected id");
                var e = this.queue.findIndex((function(e) {
                    return e.id === t
                }));
                e < 0 || (this.queue.splice(e, 1), this.queue.length <= 0 && this.stop())
            }, t
        }();
        e.default = i
    },
    "7XYO": function(t, e) {},
    "7jGY": function(t, e, n) {
        "use strict";

        function i(t, e) {
            t.classList ? t.classList.add(e) : t.className += " " + e
        }

        function o(t, e) {
            if (t.classList) t.classList.remove(e);
            else {
                t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), "");
                var n = t.className.length - 1;
                " " === t.className[n] && (t.className = t.className.substring(0, n))
            }
            0 === t.classList.length && t.removeAttribute("class")
        }
        n.d(e, "a", (function() {
            return i
        })), n.d(e, "b", (function() {
            return o
        }))
    },
    "8aAX": function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "default", (function() {
            return h
        }));
        var i = n("z+i3"),
            o = n("QZz8"),
            r = n("EgnG");

        function a(t) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function s(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function l(t, e) {
            return !e || "object" !== a(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function c(t, e, n) {
            return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function u(t) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function d(t, e) {
            return (d = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var h = function(t) {
            function e() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), l(this, u(e).apply(this, arguments))
            }
            var n, i, a;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && d(t, e)
            }(e, t), n = e, (i = [{
                key: "init",
                value: function() {
                    var t = this;
                    c(u(e.prototype), "init", this).call(this), this.animateIn = this.animateIn.bind(this), this.$$("[data-anim-id]").forEach((function(e) {
                        t[e.getAttribute("data-anim-id")] = e
                    }))
                }
            }, {
                key: "initEvents",
                value: function() {
                    c(u(e.prototype), "initEvents", this).call(this)
                }
            }, {
                key: "destroyEvents",
                value: function() {
                    c(u(e.prototype), "destroyEvents", this).call(this)
                }
            }, {
                key: "animateIn",
                value: function() {
                    Object(r.a)({
                        targets: this.$$(".animation-translate"),
                        translateY: [-100, 0],
                        opacity: [0, 1],
                        duration: 1200,
                        delay: r.a.stagger(100),
                        easing: o.a.easings.soft
                    })
                }
            }]) && s(n.prototype, i), a && s(n, a), e
        }(i.a)
    },
    "B7/P": function(t, e) {},
    BSPe: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("QZz8"),
            o = n("Y2vH"),
            r = n("7jGY");

        function a(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var s = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.init()
            }
            var e, n, s;
            return e = t, (n = [{
                key: "init",
                value: function() {
                    var t = this;
                    o.a.anim && o.a.anim.loadAnimation(), this.buildPage = this.buildPage.bind(this), setTimeout((function() {
                        t.buildPage(), t.startLoop(), r.a(i.a.body, "is-ready")
                    }), 1100), this.registerSw()
                }
            }, {
                key: "appendStats",
                value: function() {
                    i.a.loop.add(o.a.stats.begin, "statsBegin"), o.a.stats.showPanel(0), o.a.stats.domElement.style.cssText = "position:fixed;bottom:0px;left:0px;", i.a.body.appendChild(o.a.stats.dom)
                }
            }, {
                key: "startLoop",
                value: function() {
                    i.a.loop.start()
                }
            }, {
                key: "clearPage",
                value: function() {
                    r.b(i.a.body, "is-ready"), r.b(i.a.body, "is-loaded")
                }
            }, {
                key: "buildPage",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    null === t && (t = i.a.doc.querySelector('[data-page="container"]')), o.a.classFactory.getPage(t, t.dataset.pageNamespace)
                }
            }, {
                key: "registerSw",
                value: function() {
                    "serviceWorker" in navigator && window.addEventListener("load", (function() {
                        navigator.serviceWorker.register("/sw.js").then((function(t) {
                            t.update()
                        })).catch((function(t) {}))
                    }))
                }
            }]) && a(e.prototype, n), s && a(e, s), t
        }();
        n.d(e, "app", (function() {
            return l
        }));
        var l = new s
    },
    EgnG: function(t, e, n) {
        "use strict";
        var i = {
                update: null,
                begin: null,
                loopBegin: null,
                changeBegin: null,
                change: null,
                changeComplete: null,
                loopComplete: null,
                complete: null,
                loop: 1,
                direction: "normal",
                autoplay: !0,
                timelineOffset: 0
            },
            o = {
                duration: 1e3,
                delay: 0,
                endDelay: 0,
                easing: "easeOutElastic(1, .5)",
                round: 0
            },
            r = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective"],
            a = {
                CSS: {},
                springs: {}
            };

        function s(t, e, n) {
            return Math.min(Math.max(t, e), n)
        }

        function l(t, e) {
            return t.indexOf(e) > -1
        }

        function c(t, e) {
            return t.apply(null, e)
        }
        var u = {
            arr: function(t) {
                return Array.isArray(t)
            },
            obj: function(t) {
                return l(Object.prototype.toString.call(t), "Object")
            },
            pth: function(t) {
                return u.obj(t) && t.hasOwnProperty("totalLength")
            },
            svg: function(t) {
                return t instanceof SVGElement
            },
            inp: function(t) {
                return t instanceof HTMLInputElement
            },
            dom: function(t) {
                return t.nodeType || u.svg(t)
            },
            str: function(t) {
                return "string" == typeof t
            },
            fnc: function(t) {
                return "function" == typeof t
            },
            und: function(t) {
                return void 0 === t
            },
            hex: function(t) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
            },
            rgb: function(t) {
                return /^rgb/.test(t)
            },
            hsl: function(t) {
                return /^hsl/.test(t)
            },
            col: function(t) {
                return u.hex(t) || u.rgb(t) || u.hsl(t)
            },
            key: function(t) {
                return !i.hasOwnProperty(t) && !o.hasOwnProperty(t) && "targets" !== t && "keyframes" !== t
            }
        };

        function d(t) {
            var e = /\(([^)]+)\)/.exec(t);
            return e ? e[1].split(",").map((function(t) {
                return parseFloat(t)
            })) : []
        }

        function h(t, e) {
            var n = d(t),
                i = s(u.und(n[0]) ? 1 : n[0], .1, 100),
                o = s(u.und(n[1]) ? 100 : n[1], .1, 100),
                r = s(u.und(n[2]) ? 10 : n[2], .1, 100),
                l = s(u.und(n[3]) ? 0 : n[3], .1, 100),
                c = Math.sqrt(o / i),
                h = r / (2 * Math.sqrt(o * i)),
                f = h < 1 ? c * Math.sqrt(1 - h * h) : 0,
                p = 1,
                m = h < 1 ? (h * c - l) / f : -l + c;

            function g(t) {
                var n = e ? e * t / 1e3 : t;
                return n = h < 1 ? Math.exp(-n * h * c) * (p * Math.cos(f * n) + m * Math.sin(f * n)) : (p + m * n) * Math.exp(-n * c), 0 === t || 1 === t ? t : 1 - n
            }
            return e ? g : function() {
                var e = a.springs[t];
                if (e) return e;
                for (var n = 0, i = 0;;)
                    if (1 === g(n += 1 / 6)) {
                        if (++i >= 16) break
                    } else i = 0;
                var o = n * (1 / 6) * 1e3;
                return a.springs[t] = o, o
            }
        }

        function f(t) {
            return void 0 === t && (t = 10),
                function(e) {
                    return Math.round(e * t) * (1 / t)
                }
        }
        var p, m, g = function() {
                var t = 11,
                    e = 1 / (t - 1);

                function n(t, e) {
                    return 1 - 3 * e + 3 * t
                }

                function i(t, e) {
                    return 3 * e - 6 * t
                }

                function o(t) {
                    return 3 * t
                }

                function r(t, e, r) {
                    return ((n(e, r) * t + i(e, r)) * t + o(e)) * t
                }

                function a(t, e, r) {
                    return 3 * n(e, r) * t * t + 2 * i(e, r) * t + o(e)
                }
                return function(n, i, o, s) {
                    if (0 <= n && n <= 1 && 0 <= o && o <= 1) {
                        var l = new Float32Array(t);
                        if (n !== i || o !== s)
                            for (var c = 0; c < t; ++c) l[c] = r(c * e, n, o);
                        return function(t) {
                            return n === i && o === s ? t : 0 === t || 1 === t ? t : r(u(t), i, s)
                        }
                    }

                    function u(i) {
                        for (var s = 0, c = 1, u = t - 1; c !== u && l[c] <= i; ++c) s += e;
                        --c;
                        var d = s + (i - l[c]) / (l[c + 1] - l[c]) * e,
                            h = a(d, n, o);
                        return h >= .001 ? function(t, e, n, i) {
                            for (var o = 0; o < 4; ++o) {
                                var s = a(e, n, i);
                                if (0 === s) return e;
                                e -= (r(e, n, i) - t) / s
                            }
                            return e
                        }(i, d, n, o) : 0 === h ? d : function(t, e, n, i, o) {
                            var a, s, l = 0;
                            do {
                                (a = r(s = e + (n - e) / 2, i, o) - t) > 0 ? n = s : e = s
                            } while (Math.abs(a) > 1e-7 && ++l < 10);
                            return s
                        }(i, s, s + e, n, o)
                    }
                }
            }(),
            v = (p = {
                linear: function() {
                    return function(t) {
                        return t
                    }
                }
            }, m = {
                Sine: function() {
                    return function(t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    }
                },
                Circ: function() {
                    return function(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    }
                },
                Back: function() {
                    return function(t) {
                        return t * t * (3 * t - 2)
                    }
                },
                Bounce: function() {
                    return function(t) {
                        for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11;);
                        return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                    }
                },
                Elastic: function(t, e) {
                    void 0 === t && (t = 1), void 0 === e && (e = .5);
                    var n = s(t, 1, 10),
                        i = s(e, .1, 2);
                    return function(t) {
                        return 0 === t || 1 === t ? t : -n * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - i / (2 * Math.PI) * Math.asin(1 / n)) * (2 * Math.PI) / i)
                    }
                }
            }, ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach((function(t, e) {
                m[t] = function() {
                    return function(t) {
                        return Math.pow(t, e + 2)
                    }
                }
            })), Object.keys(m).forEach((function(t) {
                var e = m[t];
                p["easeIn" + t] = e, p["easeOut" + t] = function(t, n) {
                    return function(i) {
                        return 1 - e(t, n)(1 - i)
                    }
                }, p["easeInOut" + t] = function(t, n) {
                    return function(i) {
                        return i < .5 ? e(t, n)(2 * i) / 2 : 1 - e(t, n)(-2 * i + 2) / 2
                    }
                }
            })), p);

        function y(t, e) {
            if (u.fnc(t)) return t;
            var n = t.split("(")[0],
                i = v[n],
                o = d(t);
            switch (n) {
                case "spring":
                    return h(t, e);
                case "cubicBezier":
                    return c(g, o);
                case "steps":
                    return c(f, o);
                default:
                    return c(i, o)
            }
        }

        function b(t) {
            try {
                return document.querySelectorAll(t)
            } catch (t) {
                return
            }
        }

        function w(t, e) {
            for (var n = t.length, i = arguments.length >= 2 ? arguments[1] : void 0, o = [], r = 0; r < n; r++)
                if (r in t) {
                    var a = t[r];
                    e.call(i, a, r, t) && o.push(a)
                }
            return o
        }

        function _(t) {
            return t.reduce((function(t, e) {
                return t.concat(u.arr(e) ? _(e) : e)
            }), [])
        }

        function x(t) {
            return u.arr(t) ? t : (u.str(t) && (t = b(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
        }

        function k(t, e) {
            return t.some((function(t) {
                return t === e
            }))
        }

        function E(t) {
            var e = {};
            for (var n in t) e[n] = t[n];
            return e
        }

        function A(t, e) {
            var n = E(t);
            for (var i in t) n[i] = e.hasOwnProperty(i) ? e[i] : t[i];
            return n
        }

        function O(t, e) {
            var n = E(t);
            for (var i in e) n[i] = u.und(t[i]) ? e[i] : t[i];
            return n
        }

        function S(t) {
            return u.rgb(t) ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = t)) ? "rgba(" + n[1] + ",1)" : e : u.hex(t) ? function(t) {
                var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, n, i) {
                        return e + e + n + n + i + i
                    })),
                    n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return "rgba(" + parseInt(n[1], 16) + "," + parseInt(n[2], 16) + "," + parseInt(n[3], 16) + ",1)"
            }(t) : u.hsl(t) ? function(t) {
                var e, n, i, o = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
                    r = parseInt(o[1], 10) / 360,
                    a = parseInt(o[2], 10) / 100,
                    s = parseInt(o[3], 10) / 100,
                    l = o[4] || 1;

                function c(t, e, n) {
                    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                }
                if (0 == a) e = n = i = s;
                else {
                    var u = s < .5 ? s * (1 + a) : s + a - s * a,
                        d = 2 * s - u;
                    e = c(d, u, r + 1 / 3), n = c(d, u, r), i = c(d, u, r - 1 / 3)
                }
                return "rgba(" + 255 * e + "," + 255 * n + "," + 255 * i + "," + l + ")"
            }(t) : void 0;
            var e, n
        }

        function C(t) {
            var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);
            if (e) return e[1]
        }

        function j(t, e) {
            return u.fnc(t) ? t(e.target, e.id, e.total) : t
        }

        function L(t, e) {
            return t.getAttribute(e)
        }

        function T(t, e, n) {
            if (k([n, "deg", "rad", "turn"], C(e))) return e;
            var i = a.CSS[e + n];
            if (!u.und(i)) return i;
            var o = document.createElement(t.tagName),
                r = t.parentNode && t.parentNode !== document ? t.parentNode : document.body;
            r.appendChild(o), o.style.position = "absolute", o.style.width = 100 + n;
            var s = 100 / o.offsetWidth;
            r.removeChild(o);
            var l = s * parseFloat(e);
            return a.CSS[e + n] = l, l
        }

        function P(t, e, n) {
            if (e in t.style) {
                var i = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                    o = t.style[e] || getComputedStyle(t).getPropertyValue(i) || "0";
                return n ? T(t, o, n) : o
            }
        }

        function M(t, e) {
            return u.dom(t) && !u.inp(t) && (L(t, e) || u.svg(t) && t[e]) ? "attribute" : u.dom(t) && k(r, e) ? "transform" : u.dom(t) && "transform" !== e && P(t, e) ? "css" : null != t[e] ? "object" : void 0
        }

        function B(t) {
            if (u.dom(t)) {
                for (var e, n = t.style.transform || "", i = /(\w+)\(([^)]*)\)/g, o = new Map; e = i.exec(n);) o.set(e[1], e[2]);
                return o
            }
        }

        function I(t, e, n, i) {
            var o = l(e, "scale") ? 1 : 0 + function(t) {
                    return l(t, "translate") || "perspective" === t ? "px" : l(t, "rotate") || l(t, "skew") ? "deg" : void 0
                }(e),
                r = B(t).get(e) || o;
            return n && (n.transforms.list.set(e, r), n.transforms.last = e), i ? T(t, r, i) : r
        }

        function R(t, e, n, i) {
            switch (M(t, e)) {
                case "transform":
                    return I(t, e, i, n);
                case "css":
                    return P(t, e, n);
                case "attribute":
                    return L(t, e);
                default:
                    return t[e] || 0
            }
        }

        function D(t, e) {
            var n = /^(\*=|\+=|-=)/.exec(t);
            if (!n) return t;
            var i = C(t) || 0,
                o = parseFloat(e),
                r = parseFloat(t.replace(n[0], ""));
            switch (n[0][0]) {
                case "+":
                    return o + r + i;
                case "-":
                    return o - r + i;
                case "*":
                    return o * r + i
            }
        }

        function F(t, e) {
            if (u.col(t)) return S(t);
            if (/\s/g.test(t)) return t;
            var n = C(t),
                i = n ? t.substr(0, t.length - n.length) : t;
            return e ? i + e : i
        }

        function N(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }

        function H(t) {
            for (var e, n = t.points, i = 0, o = 0; o < n.numberOfItems; o++) {
                var r = n.getItem(o);
                o > 0 && (i += N(e, r)), e = r
            }
            return i
        }

        function z(t) {
            if (t.getTotalLength) return t.getTotalLength();
            switch (t.tagName.toLowerCase()) {
                case "circle":
                    return function(t) {
                        return 2 * Math.PI * L(t, "r")
                    }(t);
                case "rect":
                    return function(t) {
                        return 2 * L(t, "width") + 2 * L(t, "height")
                    }(t);
                case "line":
                    return function(t) {
                        return N({
                            x: L(t, "x1"),
                            y: L(t, "y1")
                        }, {
                            x: L(t, "x2"),
                            y: L(t, "y2")
                        })
                    }(t);
                case "polyline":
                    return H(t);
                case "polygon":
                    return function(t) {
                        var e = t.points;
                        return H(t) + N(e.getItem(e.numberOfItems - 1), e.getItem(0))
                    }(t)
            }
        }

        function Y(t, e) {
            var n = e || {},
                i = n.el || function(t) {
                    for (var e = t.parentNode; u.svg(e) && u.svg(e.parentNode);) e = e.parentNode;
                    return e
                }(t),
                o = i.getBoundingClientRect(),
                r = L(i, "viewBox"),
                a = o.width,
                s = o.height,
                l = n.viewBox || (r ? r.split(" ") : [0, 0, a, s]);
            return {
                el: i,
                viewBox: l,
                x: l[0] / 1,
                y: l[1] / 1,
                w: a / l[2],
                h: s / l[3]
            }
        }

        function G(t, e) {
            function n(n) {
                void 0 === n && (n = 0);
                var i = e + n >= 1 ? e + n : 0;
                return t.el.getPointAtLength(i)
            }
            var i = Y(t.el, t.svg),
                o = n(),
                r = n(-1),
                a = n(1);
            switch (t.property) {
                case "x":
                    return (o.x - i.x) * i.w;
                case "y":
                    return (o.y - i.y) * i.h;
                case "angle":
                    return 180 * Math.atan2(a.y - r.y, a.x - r.x) / Math.PI
            }
        }

        function U(t, e) {
            var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
                i = F(u.pth(t) ? t.totalLength : t, e) + "";
            return {
                original: i,
                numbers: i.match(n) ? i.match(n).map(Number) : [0],
                strings: u.str(t) || e ? i.split(n) : []
            }
        }

        function q(t) {
            return w(t ? _(u.arr(t) ? t.map(x) : x(t)) : [], (function(t, e, n) {
                return n.indexOf(t) === e
            }))
        }

        function V(t) {
            var e = q(t);
            return e.map((function(t, n) {
                return {
                    target: t,
                    id: n,
                    total: e.length,
                    transforms: {
                        list: B(t)
                    }
                }
            }))
        }

        function W(t, e) {
            var n = E(e);
            if (/^spring/.test(n.easing) && (n.duration = h(n.easing)), u.arr(t)) {
                var i = t.length;
                2 === i && !u.obj(t[0]) ? t = {
                    value: t
                } : u.fnc(e.duration) || (n.duration = e.duration / i)
            }
            var o = u.arr(t) ? t : [t];
            return o.map((function(t, n) {
                var i = u.obj(t) && !u.pth(t) ? t : {
                    value: t
                };
                return u.und(i.delay) && (i.delay = n ? 0 : e.delay), u.und(i.endDelay) && (i.endDelay = n === o.length - 1 ? e.endDelay : 0), i
            })).map((function(t) {
                return O(t, n)
            }))
        }

        function X(t, e) {
            var n = [],
                i = e.keyframes;
            for (var o in i && (e = O(function(t) {
                    for (var e = w(_(t.map((function(t) {
                            return Object.keys(t)
                        }))), (function(t) {
                            return u.key(t)
                        })).reduce((function(t, e) {
                            return t.indexOf(e) < 0 && t.push(e), t
                        }), []), n = {}, i = function(i) {
                            var o = e[i];
                            n[o] = t.map((function(t) {
                                var e = {};
                                for (var n in t) u.key(n) ? n == o && (e.value = t[n]) : e[n] = t[n];
                                return e
                            }))
                        }, o = 0; o < e.length; o++) i(o);
                    return n
                }(i), e)), e) u.key(o) && n.push({
                name: o,
                tweens: W(e[o], t)
            });
            return n
        }

        function Q(t, e) {
            var n;
            return t.tweens.map((function(i) {
                var o = function(t, e) {
                        var n = {};
                        for (var i in t) {
                            var o = j(t[i], e);
                            u.arr(o) && 1 === (o = o.map((function(t) {
                                return j(t, e)
                            }))).length && (o = o[0]), n[i] = o
                        }
                        return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n
                    }(i, e),
                    r = o.value,
                    a = u.arr(r) ? r[1] : r,
                    s = C(a),
                    l = R(e.target, t.name, s, e),
                    c = n ? n.to.original : l,
                    d = u.arr(r) ? r[0] : c,
                    h = C(d) || C(l),
                    f = s || h;
                return u.und(a) && (a = c), o.from = U(d, f), o.to = U(D(a, d), f), o.start = n ? n.end : 0, o.end = o.start + o.delay + o.duration + o.endDelay, o.easing = y(o.easing, o.duration), o.isPath = u.pth(r), o.isColor = u.col(o.from.original), o.isColor && (o.round = 1), n = o, o
            }))
        }
        var Z = {
            css: function(t, e, n) {
                return t.style[e] = n
            },
            attribute: function(t, e, n) {
                return t.setAttribute(e, n)
            },
            object: function(t, e, n) {
                return t[e] = n
            },
            transform: function(t, e, n, i, o) {
                if (i.list.set(e, n), e === i.last || o) {
                    var r = "";
                    i.list.forEach((function(t, e) {
                        r += e + "(" + t + ") "
                    })), t.style.transform = r
                }
            }
        };

        function $(t, e) {
            V(t).forEach((function(t) {
                for (var n in e) {
                    var i = j(e[n], t),
                        o = t.target,
                        r = C(i),
                        a = R(o, n, r, t),
                        s = D(F(i, r || C(a)), a),
                        l = M(o, n);
                    Z[l](o, n, s, t.transforms, !0)
                }
            }))
        }

        function J(t, e) {
            return w(_(t.map((function(t) {
                return e.map((function(e) {
                    return function(t, e) {
                        var n = M(t.target, e.name);
                        if (n) {
                            var i = Q(e, t),
                                o = i[i.length - 1];
                            return {
                                type: n,
                                property: e.name,
                                animatable: t,
                                tweens: i,
                                duration: o.end,
                                delay: i[0].delay,
                                endDelay: o.endDelay
                            }
                        }
                    }(t, e)
                }))
            }))), (function(t) {
                return !u.und(t)
            }))
        }

        function K(t, e) {
            var n = t.length,
                i = function(t) {
                    return t.timelineOffset ? t.timelineOffset : 0
                },
                o = {};
            return o.duration = n ? Math.max.apply(Math, t.map((function(t) {
                return i(t) + t.duration
            }))) : e.duration, o.delay = n ? Math.min.apply(Math, t.map((function(t) {
                return i(t) + t.delay
            }))) : e.delay, o.endDelay = n ? o.duration - Math.max.apply(Math, t.map((function(t) {
                return i(t) + t.duration - t.endDelay
            }))) : e.endDelay, o
        }
        var tt = 0;
        var et, nt = [],
            it = [],
            ot = function() {
                function t() {
                    et = requestAnimationFrame(e)
                }

                function e(e) {
                    var n = nt.length;
                    if (n) {
                        for (var i = 0; i < n;) {
                            var o = nt[i];
                            if (o.paused) {
                                var r = nt.indexOf(o);
                                r > -1 && (nt.splice(r, 1), n = nt.length)
                            } else o.tick(e);
                            i++
                        }
                        t()
                    } else et = cancelAnimationFrame(et)
                }
                return t
            }();

        function rt(t) {
            void 0 === t && (t = {});
            var e, n = 0,
                r = 0,
                a = 0,
                l = 0,
                c = null;

            function u(t) {
                var e = window.Promise && new Promise((function(t) {
                    return c = t
                }));
                return t.finished = e, e
            }
            var d = function(t) {
                var e = A(i, t),
                    n = A(o, t),
                    r = X(n, t),
                    a = V(t.targets),
                    s = J(a, r),
                    l = K(s, n),
                    c = tt;
                return tt++, O(e, {
                    id: c,
                    children: [],
                    animatables: a,
                    animations: s,
                    duration: l.duration,
                    delay: l.delay,
                    endDelay: l.endDelay
                })
            }(t);
            u(d);

            function h() {
                var t = d.direction;
                "alternate" !== t && (d.direction = "normal" !== t ? "normal" : "reverse"), d.reversed = !d.reversed, e.forEach((function(t) {
                    return t.reversed = d.reversed
                }))
            }

            function f(t) {
                return d.reversed ? d.duration - t : t
            }

            function p() {
                n = 0, r = f(d.currentTime) * (1 / rt.speed)
            }

            function m(t, e) {
                e && e.seek(t - e.timelineOffset)
            }

            function g(t) {
                for (var e = 0, n = d.animations, i = n.length; e < i;) {
                    var o = n[e],
                        r = o.animatable,
                        a = o.tweens,
                        l = a.length - 1,
                        c = a[l];
                    l && (c = w(a, (function(e) {
                        return t < e.end
                    }))[0] || c);
                    for (var u = s(t - c.start - c.delay, 0, c.duration) / c.duration, h = isNaN(u) ? 1 : c.easing(u), f = c.to.strings, p = c.round, m = [], g = c.to.numbers.length, v = void 0, y = 0; y < g; y++) {
                        var b = void 0,
                            _ = c.to.numbers[y],
                            x = c.from.numbers[y] || 0;
                        b = c.isPath ? G(c.value, h * _) : x + h * (_ - x), p && (c.isColor && y > 2 || (b = Math.round(b * p) / p)), m.push(b)
                    }
                    var k = f.length;
                    if (k) {
                        v = f[0];
                        for (var E = 0; E < k; E++) {
                            f[E];
                            var A = f[E + 1],
                                O = m[E];
                            isNaN(O) || (v += A ? O + A : O + " ")
                        }
                    } else v = m[0];
                    Z[o.type](r.target, o.property, v, r.transforms), o.currentValue = v, e++
                }
            }

            function v(t) {
                d[t] && !d.passThrough && d[t](d)
            }

            function y(t) {
                var i = d.duration,
                    o = d.delay,
                    p = i - d.endDelay,
                    y = f(t);
                d.progress = s(y / i * 100, 0, 100), d.reversePlayback = y < d.currentTime, e && function(t) {
                    if (d.reversePlayback)
                        for (var n = l; n--;) m(t, e[n]);
                    else
                        for (var i = 0; i < l; i++) m(t, e[i])
                }(y), !d.began && d.currentTime > 0 && (d.began = !0, v("begin")), !d.loopBegan && d.currentTime > 0 && (d.loopBegan = !0, v("loopBegin")), y <= o && 0 !== d.currentTime && g(0), (y >= p && d.currentTime !== i || !i) && g(i), y > o && y < p ? (d.changeBegan || (d.changeBegan = !0, d.changeCompleted = !1, v("changeBegin")), v("change"), g(y)) : d.changeBegan && (d.changeCompleted = !0, d.changeBegan = !1, v("changeComplete")), d.currentTime = s(y, 0, i), d.began && v("update"), t >= i && (r = 0, d.remaining && !0 !== d.remaining && d.remaining--, d.remaining ? (n = a, v("loopComplete"), d.loopBegan = !1, "alternate" === d.direction && h()) : (d.paused = !0, d.completed || (d.completed = !0, v("loopComplete"), v("complete"), !d.passThrough && "Promise" in window && (c(), u(d)))))
            }
            return d.reset = function() {
                var t = d.direction;
                d.passThrough = !1, d.currentTime = 0, d.progress = 0, d.paused = !0, d.began = !1, d.loopBegan = !1, d.changeBegan = !1, d.completed = !1, d.changeCompleted = !1, d.reversePlayback = !1, d.reversed = "reverse" === t, d.remaining = d.loop, e = d.children;
                for (var n = l = e.length; n--;) d.children[n].reset();
                (d.reversed && !0 !== d.loop || "alternate" === t && 1 === d.loop) && d.remaining++, g(d.reversed ? d.duration : 0)
            }, d.set = function(t, e) {
                return $(t, e), d
            }, d.tick = function(t) {
                a = t, n || (n = a), y((a + (r - n)) * rt.speed)
            }, d.seek = function(t) {
                y(f(t))
            }, d.pause = function() {
                d.paused = !0, p()
            }, d.play = function() {
                d.paused && (d.completed && d.reset(), d.paused = !1, nt.push(d), p(), et || ot())
            }, d.reverse = function() {
                h(), p()
            }, d.restart = function() {
                d.reset(), d.play()
            }, d.reset(), d.autoplay && d.play(), d
        }

        function at(t, e) {
            for (var n = e.length; n--;) k(t, e[n].animatable.target) && e.splice(n, 1)
        }
        "undefined" != typeof document && document.addEventListener("visibilitychange", (function() {
            document.hidden ? (nt.forEach((function(t) {
                return t.pause()
            })), it = nt.slice(0), rt.running = nt = []) : it.forEach((function(t) {
                return t.play()
            }))
        })), rt.version = "3.1.0", rt.speed = 1, rt.running = nt, rt.remove = function(t) {
            for (var e = q(t), n = nt.length; n--;) {
                var i = nt[n],
                    o = i.animations,
                    r = i.children;
                at(e, o);
                for (var a = r.length; a--;) {
                    var s = r[a],
                        l = s.animations;
                    at(e, l), l.length || s.children.length || r.splice(a, 1)
                }
                o.length || r.length || i.pause()
            }
        }, rt.get = R, rt.set = $, rt.convertPx = T, rt.path = function(t, e) {
            var n = u.str(t) ? b(t)[0] : t,
                i = e || 100;
            return function(t) {
                return {
                    property: t,
                    el: n,
                    svg: Y(n),
                    totalLength: z(n) * (i / 100)
                }
            }
        }, rt.setDashoffset = function(t) {
            var e = z(t);
            return t.setAttribute("stroke-dasharray", e), e
        }, rt.stagger = function(t, e) {
            void 0 === e && (e = {});
            var n = e.direction || "normal",
                i = e.easing ? y(e.easing) : null,
                o = e.grid,
                r = e.axis,
                a = e.from || 0,
                s = "first" === a,
                l = "center" === a,
                c = "last" === a,
                d = u.arr(t),
                h = d ? parseFloat(t[0]) : parseFloat(t),
                f = d ? parseFloat(t[1]) : 0,
                p = C(d ? t[1] : t) || 0,
                m = e.start || 0 + (d ? h : 0),
                g = [],
                v = 0;
            return function(t, e, u) {
                if (s && (a = 0), l && (a = (u - 1) / 2), c && (a = u - 1), !g.length) {
                    for (var y = 0; y < u; y++) {
                        if (o) {
                            var b = l ? (o[0] - 1) / 2 : a % o[0],
                                w = l ? (o[1] - 1) / 2 : Math.floor(a / o[0]),
                                _ = b - y % o[0],
                                x = w - Math.floor(y / o[0]),
                                k = Math.sqrt(_ * _ + x * x);
                            "x" === r && (k = -_), "y" === r && (k = -x), g.push(k)
                        } else g.push(Math.abs(a - y));
                        v = Math.max.apply(Math, g)
                    }
                    i && (g = g.map((function(t) {
                        return i(t / v) * v
                    }))), "reverse" === n && (g = g.map((function(t) {
                        return r ? t < 0 ? -1 * t : -t : Math.abs(v - t)
                    })))
                }
                return m + (d ? (f - h) / v : h) * (Math.round(100 * g[e]) / 100) + p
            }
        }, rt.timeline = function(t) {
            void 0 === t && (t = {});
            var e = rt(t);
            return e.duration = 0, e.add = function(n, i) {
                var r = nt.indexOf(e),
                    a = e.children;

                function s(t) {
                    t.passThrough = !0
                }
                r > -1 && nt.splice(r, 1);
                for (var l = 0; l < a.length; l++) s(a[l]);
                var c = O(n, A(o, t));
                c.targets = c.targets || t.targets;
                var d = e.duration;
                c.autoplay = !1, c.direction = e.direction, c.timelineOffset = u.und(i) ? d : D(i, d), s(e), e.seek(c.timelineOffset);
                var h = rt(c);
                s(h), a.push(h);
                var f = K(a, t);
                return e.delay = f.delay, e.endDelay = f.endDelay, e.duration = f.duration, e.seek(0), e.reset(), e.autoplay && e.play(), e
            }, e
        }, rt.easing = y, rt.penner = v, rt.random = function(t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t
        }, e.a = rt
    },
    MZFn: function(t, e, n) {
        var i;
        t.exports = ((i = function() {
            function t(t) {
                return o.appendChild(t.dom), t
            }

            function e(t) {
                for (var e = 0; e < o.children.length; e++) o.children[e].style.display = e === t ? "block" : "none";
                n = t
            }
            var n = 0,
                o = document.createElement("div");
            o.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", o.addEventListener("click", (function(t) {
                t.preventDefault(), e(++n % o.children.length)
            }), !1);
            var r = (performance || Date).now(),
                a = r,
                s = 0,
                l = t(new i.Panel("FPS", "#0ff", "#002")),
                c = t(new i.Panel("MS", "#0f0", "#020"));
            if (self.performance && self.performance.memory) var u = t(new i.Panel("MB", "#f08", "#201"));
            return e(0), {
                REVISION: 16,
                dom: o,
                addPanel: t,
                showPanel: e,
                begin: function() {
                    r = (performance || Date).now()
                },
                end: function() {
                    s++;
                    var t = (performance || Date).now();
                    if (c.update(t - r, 200), t > a + 1e3 && (l.update(1e3 * s / (t - a), 100), a = t, s = 0, u)) {
                        var e = performance.memory;
                        u.update(e.usedJSHeapSize / 1048576, e.jsHeapSizeLimit / 1048576)
                    }
                    return t
                },
                update: function() {
                    r = this.end()
                },
                domElement: o,
                setMode: e
            }
        }).Panel = function(t, e, n) {
            var i = 1 / 0,
                o = 0,
                r = Math.round,
                a = r(window.devicePixelRatio || 1),
                s = 80 * a,
                l = 48 * a,
                c = 3 * a,
                u = 2 * a,
                d = 3 * a,
                h = 15 * a,
                f = 74 * a,
                p = 30 * a,
                m = document.createElement("canvas");
            m.width = s, m.height = l, m.style.cssText = "width:80px;height:48px";
            var g = m.getContext("2d");
            return g.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", g.textBaseline = "top", g.fillStyle = n, g.fillRect(0, 0, s, l), g.fillStyle = e, g.fillText(t, c, u), g.fillRect(d, h, f, p), g.fillStyle = n, g.globalAlpha = .9, g.fillRect(d, h, f, p), {
                dom: m,
                update: function(l, v) {
                    i = Math.min(i, l), o = Math.max(o, l), g.fillStyle = n, g.globalAlpha = 1, g.fillRect(0, 0, s, h), g.fillStyle = e, g.fillText(r(l) + " " + t + " (" + r(i) + "-" + r(o) + ")", c, u), g.drawImage(m, d + a, h, f - a, p, d, h, f - a, p), g.fillRect(d + f - a, h, a, p), g.fillStyle = n, g.globalAlpha = .9, g.fillRect(d + f - a, h, a, r((1 - l / v) * p))
                }
            }
        }, i)
    },
    QZz8: function(t, e, n) {
        "use strict";
        var i = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
            o = "undefined" != typeof InstallTrigger,
            r = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString(),
            a = !!document.documentMode,
            s = !a && !!window.StyleMedia,
            l = !(!window.chrome || !window.chrome.webstore && !window.chrome.runtime),
            c = (l || i) && !!window.CSS,
            u = function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.isOpera = i, this.isFirefox = o, this.isSafari = r, this.isIE = a, this.isEdge = s, this.isChrome = l, this.isBlink = c, this.isSafari && document.documentElement.classList.add("is-safari")
            },
            d = n("688/"),
            h = n.n(d),
            f = "/assets/images",
            p = {
                site: {
                    author: "Rogier de Boevé",
                    year: (new Date).getFullYear()
                },
                labels: {
                    next: "Next:",
                    previous: "Previous:",
                    viewCase: "View case",
                    visitLive: "Visit Site",
                    goBack: "Go back",
                    aboutMe: "About me",
                    about: "About",
                    gallery: "Showcase",
                    intro: "Back to home",
                    home: "Home"
                },
                home: {
                    image: "".concat(f, "/01.jpg"),
                    noiseTexture: "".concat(f, "/noise-01.jpg")
                },
                projects: [{
                    title: "Brand Identity",
                    slug: "Brand Identity",
                    type: "Graphic Designer",
                    description: "",
                    link: {
                        type: "external",
                        url: "/",
                        text: "View site"
                    },
                    style: {
                        opacity: 1,
                        distortion: 1,
                        vignette: 0,
                        kaleidoFactor: 1,
                        noise: .135,
                        lines: {
                            opacity: 1,
                            width: 1.35,
                            darkness: .8,
                            shadow: .5
                        },
                        refraction: 1,
                        vertexNoise: 4,
                        fragmented: !1,
                        brightness: 1,
                        light: {
                            left: 0,
                            right: 0
                        },
                        colors: {
                            background: "#000000",
                            ui: "#F4F4F4",
                            title: "#F4F4F4",
                            border: "rgba(255,255,255,0.75)",
                            menuBackground: "#272727",
                            overlay: "#e1261c"
                        }
                    },
                    texture: "".concat(f, "/03.png"),
                    noiseTexture: "".concat(f, "/noise-01.jpg"),
                    images: []
                }, {
                    title: "Poster Design",
                    slug: "Poster Design",
                    type: "Graphic Designer",
                    description: "",
                    link: {
                        type: "",
                        url: "",
                        text: "coming soon"
                    },
                    style: {
                        opacity: 1,
                        distortion: .8,
                        vignette: 0,
                        kaleidoFactor: 0,
                        noise: .135,
                        lines: {
                            opacity: 0,
                            shadow: .5,
                            width: 1.75,
                            darkness: 1
                        },
                        refraction: 1,
                        vertexNoise: 0,
                        fragmented: !1,
                        brightness: 1.02,
                        light: {
                            left: 3.24,
                            right: 1.83
                        },
                        colors: {
                            background: "#000000",
                            ui: "#B3B3B3",
                            title: "#B3B3B3",
                            border: "#999999",
                            menuBackground: "#272727",
                            overlay: "#767676"
                        }
                    },
                    texture: "".concat(f, "/14759948851_3acca31672_2.jpg"),
                    noiseTexture: "".concat(f, "/01-alt.jpg"),
                    images: []
                }, {
                    title: "Illustration",
                    slug: "Illustration",
                    type: "Graphic Designer",
                    description: "",
                    link: {
                        type: "external",
                        url: "/",
                        text: "View site"
                    },
                    style: {
                        materialOpacity: .15,
                        distortion: .4,
                        vignette: .8,
                        kaleidoFactor: 0,
                        noise: .135,
                        lines: {
                            opacity: 1,
                            shadow: 1,
                            width: .9,
                            darkness: .7
                        },
                        refraction: .2,
                        vertexNoise: 0,
                        fragmented: !1,
                        brightness: 1.16,
                        light: {
                            left: 5,
                            right: 5
                        },
                        colors: {
                            background: "rgba(254,254,254,1)",
                            ui: "#2e2e2e",
                            title: "#2a2a2a",
                            border: "#515151",
                            menuBackground: "#272727",
                            overlay: "#808080"
                        }
                    },
                    texture: "".concat(f, "/glenn.jpg"),
                    noiseTexture: "".concat(f, "/noise-stmpd.jpg"),
                    images: []
                }, {
                    title: "Book Design",
                    slug: "Book Design",
                    type: "Graphic Design",
                    description: "",
                    link: {
                        type: "internal",
                        url: "",
                        text: "View collection"
                    },
                    style: {
                        materialOpacity: 1,
                        distortion: .43,
                        vignette: .65,
                        kaleidoFactor: 0,
                        noise: .12,
                        lines: {
                            opacity: 1,
                            shadow: .62,
                            width: 2,
                            darkness: 1
                        },
                        refraction: .6,
                        vertexNoise: 0,
                        fragmented: !0,
                        brightness: 1.07,
                        light: {
                            left: 0,
                            right: 1
                        },
                        colors: {
                            background: "rgba(241,240,240,1.0)",
                            ui: "#F4F4F4",
                            title: "#F4F4F4",
                            border: "rgba(255,255,255,0.75)",
                            menuBackground: "#272727",
                            overlay: "#808080"
                        }
                    },
                    texture: "".concat(f, "/reconstruct-texture.jpg"),
                    noiseTexture: "".concat(f, "/noise-01.jpg"),
                    images: [{
                        url: "".concat(f, "/reconstruct-01.jpg"),
                        width: 2122,
                        height: 2122,
                        type: "img"
                    }, {
                        url: "".concat(f, "/reconstruct-03.jpg"),
                        width: 850,
                        height: 1162,
                        type: "img"
                    }, {
                        url: "".concat(f, "/reconstruct-02.jpg"),
                        width: 850,
                        height: 1160,
                        type: "img"
                    }, {
                        url: "".concat(f, "/reconstruct-04.jpg"),
                        width: 750,
                        height: 1064,
                        type: "img"
                    }]
                }, {
                    title: "Packaging",
                    slug: "Packaging",
                    type: "Graphic Design",
                    link: {
                        type: "internal",
                        url: "",
                        text: "View collection"
                    },
                    description: "",
                    style: {
                        materialOpacity: 1,
                        distortion: .59,
                        noise: .12,
                        lines: {
                            opacity: 0,
                            shadow: .5,
                            width: 1.75,
                            darkness: 1
                        },
                        refraction: 0,
                        vignette: 1,
                        kaleidoFactor: 0,
                        brightness: 1.135,
                        light: {
                            left: .52,
                            right: 1.29
                        },
                        vertexNoise: .35,
                        fragmented: !1,
                        colors: {
                            background: "#ffffff",
                            ui: "#F4F4F4",
                            title: "#F4F4F4",
                            border: "rgba(255,255,255,0.75)",
                            menuBackground: "#272727",
                            overlay: "#808080"
                        }
                    },
                    texture: "".concat(f, "/04.jpg"),
                    noiseTexture: "".concat(f, "/noise-stmpd.jpg"),
                    images: [{
                        url: "".concat(f, "/altered-01.jpg"),
                        width: 2400,
                        height: 2400,
                        type: "img"
                    }, {
                        url: "".concat(f, "/altered-02.jpg"),
                        width: 2400,
                        height: 2400,
                        type: "img"
                    }, {
                        url: "".concat(f, "/altered-04.jpg"),
                        width: 2399,
                        height: 2400,
                        type: "img"
                    }, {
                        url: "".concat(f, "/altered-06.jpg"),
                        width: 1e3,
                        height: 1e3,
                        type: "img"
                    }]
                }, {
                    title: "Logo Design",
                    slug: "Logo Design",
                    type: "Graphic Designer",
                    description: "",
                    link: {
                        type: "external",
                        url: "be.net/phuwn",
                        text: "View site"
                    },
                    style: {
                        materialOpacity: 1,
                        distortion: 1,
                        vignette: 0,
                        kaleidoFactor: 0,
                        noise: .1,
                        lines: {
                            opacity: 0,
                            shadow: .5,
                            width: 1.75,
                            darkness: 1
                        },
                        refraction: 1,
                        vertexNoise: .3,
                        fragmented: !0,
                        brightness: .94,
                        light: {
                            left: 0,
                            right: 4
                        },
                        colors: {
                            background: "rgba(111,111,111,1)",
                            ui: "#B3B3B3",
                            title: "#B3B3B3",
                            border: "#999999",
                            menuBackground: "#272727",
                            overlay: "#8c10ff"
                        }
                    },
                    texture: "".concat(f, "/noise-stmpd.jpg"),
                    noiseTexture: "".concat(f, "/noise-01.jpg"),
                    images: []
                }]
            };
        e.a = new function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.win = window, this.doc = document, this.html = document.documentElement, this.body = document.body, this.browser = new u, this.loop = new h.a, this.activePage = null, this.images = null, this.components = {}, this.pages = {}, this.promises = {}, this.data = p, this.loaderStarted = !1, this.loaderDone = !1, this.loadedImages = {}, this.time = 0, this.colors = {
                ui: "#B3B3B3",
                title: "#B3B3B3",
                background: "#141414",
                overlay: "#808080"
            }, this.easings = {
                soft: "cubicBezier(.5,.1,0,.99)"
            }, this.page = {
                previous: null,
                current: null,
                lastProject: null
            }, this.events = {
                appLoaded: new Event("appLoaded"),
                loadAnimation: new Event("loadAnimation"),
                loaderDone: new Event("loaderDone"),
                introLoadDone: new Event("introLoadDone"),
                imagesLoaded: new Event("imagesLoaded"),
                scrollEnd: new Event("scrollEnd")
            }, this.viewport = {
                width: window.innerWidth,
                height: window.innerHeight,
                small: window.innerWidth < 850
            }, this.settings = {
                smoothscroll: !0,
                loader: !1
            }, this.cookies = !1
        }
    },
    UMGS: function(t, e, n) {
        "use strict";

        function i(t, e, n) {
            return (1 - n) * t + n * e
        }

        function o(t, e, n, i, o) {
            return (t - e) * (o - i) / (n - e) + i
        }
        n.d(e, "a", (function() {
            return i
        })), n.d(e, "b", (function() {
            return o
        }))
    },
    Va3W: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "default", (function() {
            return h
        }));
        var i = n("z+i3"),
            o = n("EgnG"),
            r = n("QZz8");

        function a(t) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function s(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function l(t, e) {
            return !e || "object" !== a(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function c(t, e, n) {
            return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function u(t) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function d(t, e) {
            return (d = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var h = function(t) {
            function e() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), l(this, u(e).apply(this, arguments))
            }
            var n, i, a;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && d(t, e)
            }(e, t), n = e, (i = [{
                key: "init",
                value: function() {
                    c(u(e.prototype), "init", this).call(this), this.loading = this.loading.bind(this), this.animateIn = this.animateIn.bind(this), this.loaderInner = this.$(".loader-text-inner"), this.removeLoadingAnimation = this.removeLoadingAnimation.bind(this), this.loadingAnimation = null, this.loading()
                }
            }, {
                key: "initEvents",
                value: function() {
                    c(u(e.prototype), "initEvents", this).call(this), r.a.doc.addEventListener("loaderDone", this.removeLoadingAnimation, !1), r.a.doc.addEventListener("imagesLoaded", this.replaceText, !1)
                }
            }, {
                key: "destroyEvents",
                value: function() {
                    c(u(e.prototype), "destroyEvents", this).call(this), r.a.doc.removeEventListener("loaderDone", this.removeLoadingAnimation), r.a.doc.removeEventListener("imagesLoaded", this.replaceText), this.component.remove()
                }
            }, {
                key: "loading",
                value: function() {
                    var t = this;
                    this.loadingAnimation = setInterval((function() {
                        for (var e = function(e) {
                                setTimeout((function() {
                                    t.loaderInner.innerHTML = "".concat("Loading").concat(".".repeat(e))
                                }), 300 * e)
                            }, n = 0; n < 4; n++) e(n)
                    }), 1200)
                }
            }, {
                key: "animateIn",
                value: function() {
                    Object(o.a)({
                        targets: this.$$(".animation-translate"),
                        translateY: [-100, 0],
                        opacity: [0, 1],
                        duration: 1200,
                        easing: r.a.easings.soft
                    })
                }
            }, {
                key: "removeLoadingAnimation",
                value: function() {
                    var t = this;
                    clearInterval(this.loadingAnimation), Object(o.a)({
                        targets: this.$(".animation-translate"),
                        translateY: [0, -100],
                        delay: 500,
                        opacity: [1, 0],
                        duration: 1e3,
                        easing: r.a.easings.soft,
                        complete: function() {
                            t.destroyEvents()
                        }
                    })
                }
            }]) && s(n.prototype, i), a && s(n, a), e
        }(i.a)
    },
    W3FC: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "default", (function() {
            return h
        }));
        var i = n("z+i3"),
            o = n("QZz8"),
            r = n("EgnG");

        function a(t) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function s(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function l(t, e) {
            return !e || "object" !== a(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function c(t, e, n) {
            return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function u(t) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function d(t, e) {
            return (d = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var h = function(t) {
            function e() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), l(this, u(e).apply(this, arguments))
            }
            var n, i, a;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && d(t, e)
            }(e, t), n = e, (i = [{
                key: "init",
                value: function() {
                    var t = this;
                    c(u(e.prototype), "init", this).call(this), this.animateIn = this.animateIn.bind(this), this.$$("[data-anim-id]").forEach((function(e) {
                        t[e.getAttribute("data-anim-id")] = e
                    }))
                }
            }, {
                key: "initEvents",
                value: function() {
                    c(u(e.prototype), "initEvents", this).call(this)
                }
            }, {
                key: "destroyEvents",
                value: function() {
                    c(u(e.prototype), "destroyEvents", this).call(this)
                }
            }, {
                key: "animateIn",
                value: function() {
                    Object(r.a)({
                        targets: this.$$(".animation-translate"),
                        translateY: [-100, 0],
                        opacity: [0, 1],
                        duration: 1200,
                        delay: r.a.stagger(100),
                        easing: o.a.easings.soft
                    })
                }
            }]) && s(n.prototype, i), a && s(n, a), e
        }(i.a)
    },
    XSMb: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "default", (function() {
            return p
        }));
        var i = n("z+i3"),
            o = n("Y2vH"),
            r = n("5DeG"),
            a = n.n(r),
            s = n("QZz8");

        function l(t) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function c(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function u(t, e) {
            return !e || "object" !== l(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function d(t, e, n) {
            return (d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function h(t) {
            return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function f(t, e) {
            return (f = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var p = function(t) {
            function e() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), u(this, h(e).apply(this, arguments))
            }
            var n, i, r;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && f(t, e)
            }(e, t), n = e, (i = [{
                key: "init",
                value: function() {
                    d(h(e.prototype), "init", this).call(this), this.loadAnimation = this.loadAnimation.bind(this)
                }
            }, {
                key: "initEvents",
                value: function() {
                    d(h(e.prototype), "initEvents", this).call(this)
                }
            }, {
                key: "destroyEvents",
                value: function() {
                    d(h(e.prototype), "destroyEvents", this).call(this)
                }
            }, {
                key: "loadAnimation",
                value: function() {
                    var t = this;
                    this.fonts = '"staff-wide", "staff-x-wide"'.replace(/"/g, "").split(", "), this.fontDetector = new a.a, this.loaderText = s.a.doc.querySelector(".loader-letter-inner"), this.fontDetector.ready((function() {
                        o.a.header.animateIn(), o.a.aside.animateIn(), setTimeout((function() {
                            o.a.loaderprogress.animateIn(), o.a.loadertext.animateIn()
                        }), 250), setTimeout((function() {
                            s.a.loaderStarted || (t.loaderText.innerHTML = "1", o.a.loadingIcon.setLoadingPoint(1))
                        }), 2e3), t.fontDetector.remove()
                    }))
                }
            }]) && c(n.prototype, i), r && c(n, r), e
        }(i.a)
    },
    Y2vH: function(t, e, n) {
        "use strict";
        var i = {};
        n.r(i), n.d(i, "color", (function() {
            return Qt
        })), n.d(i, "controllers", (function() {
            return Zt
        })), n.d(i, "dom", (function() {
            return $t
        })), n.d(i, "gui", (function() {
            return Jt
        })), n.d(i, "GUI", (function() {
            return Kt
        })), n.d(i, "default", (function() {
            return te
        }));
        var o = n("QZz8"),
            r = n("7jGY"),
            a = n("EgnG"),
            s = n("tUEC");

        function l(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function c(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var u = function() {
            function t(e, n) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.slug = n, this.page = e, this.classFactory = new Pe, this.components = [], this.pageComponents = [], this.scrollTargets = [], this.container = this.page.querySelector(".main"), this.id = Object(s.a)(n), this.loadComponents(), this.init(), this.setActivePage()
            }
            var e, n, i;
            return e = t, (n = [{
                key: "init",
                value: function() {
                    this.initEvents(), this.resize = this.resize.bind(this), this.onImagesLoad = this.onImagesLoad.bind(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.destroyEvents(), null !== this.pageComponents && this.pageComponents.forEach((function(t) {
                        t instanceof Promise ? t.then((function(t) {
                            return t.destroy()
                        })) : t.destroy()
                    }))
                }
            }, {
                key: "initEvents",
                value: function() {
                    var t = this;
                    o.a.win.addEventListener("resize", this.resize), this.scrollTargets = l(o.a.doc.querySelectorAll('a[href^="#"]')), this.scrollTargets.forEach((function(e) {
                        e.addEventListener("click", t.scrollToAchor)
                    }))
                }
            }, {
                key: "destroyEvents",
                value: function() {
                    var t = this;
                    o.a.win.removeEventListener("resize", this.resize), this.scrollTargets.forEach((function(e) {
                        e.removeEventListener("click", (function(e) {
                            return t.scrollToAchor
                        }))
                    })), this.scrollTargets = []
                }
            }, {
                key: "setActivePage",
                value: function() {
                    o.a.activePage = this.slug, o.a.body.setAttribute("data-page-active", o.a.activePage)
                }
            }, {
                key: "resize",
                value: function() {
                    o.a.viewport.width = o.a.win.innerWidth, o.a.viewport.height = o.a.win.innerHeight, o.a.viewport.small = o.a.win.innerWidth < 1024
                }
            }, {
                key: "loadComponents",
                value: function() {
                    var t = this,
                        e = l(this.container.querySelectorAll("[data-component]"));
                    if (!o.a.components.gl) {
                        var n = this.page.querySelector('[data-component="gl"]');
                        this.initSingleComponent(n)
                    }
                    e.forEach((function(e) {
                        t.initSingleComponent(e)
                    }))
                }
            }, {
                key: "initSingleComponent",
                value: function(t) {
                    var e = t.getAttribute("data-component");
                    this.classFactory.getComponent(e, this, t), this.components.push(t)
                }
            }, {
                key: "onImagesLoad",
                value: function() {
                    var t = Object.keys(o.a.promises).map((function(t) {
                        return o.a.promises[t]
                    }));
                    Promise.all(t).then((function() {
                        r.a(o.a.body, "is-loaded"), o.a.win.dispatchEvent(o.a.events.loaded)
                    }))
                }
            }, {
                key: "scrollToAchor",
                value: function(t) {
                    if (t.preventDefault(), t.stopImmediatePropagation(), "" !== t.target.hash) {
                        var e = document.getElementById(t.target.hash.substr(1)),
                            n = window.pageYOffset + e.getBoundingClientRect().top - 150;
                        Object(a.a)({
                            targets: o.a.html,
                            scrollTop: n,
                            duration: 500,
                            easing: "easeInOutQuad"
                        })
                    }
                }
            }, {
                key: "$",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.page;
                    return e.querySelector(t)
                }
            }, {
                key: "$$",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.page;
                    return Array.from(e.querySelectorAll(t))
                }
            }]) && c(e.prototype, n), i && c(e, i), t
        }();

        function d(t) {
            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function h(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function f(t, e) {
            return !e || "object" !== d(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function p(t, e, n) {
            return (p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = m(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function m(t) {
            return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function g(t, e) {
            return (g = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var v = function(t) {
                function e() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), f(this, m(e).apply(this, arguments))
                }
                var n, i, r;
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && g(t, e)
                }(e, t), n = e, (i = [{
                    key: "init",
                    value: function() {
                        p(m(e.prototype), "init", this).call(this), o.a.loaderDone || this.load()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        p(m(e.prototype), "destroy", this).call(this)
                    }
                }, {
                    key: "initEvents",
                    value: function() {
                        p(m(e.prototype), "initEvents", this).call(this)
                    }
                }, {
                    key: "destroyEvents",
                    value: function() {
                        p(m(e.prototype), "destroyEvents", this).call(this)
                    }
                }, {
                    key: "load",
                    value: function() {
                        o.a.promises.gl.then((function() {
                            o.a.doc.dispatchEvent(o.a.events.loadAnimation), o.a.components.gl.loadBackground()
                        }))
                    }
                }]) && h(n.prototype, i), r && h(n, r), e
            }(u),
            y = n("UMGS"),
            b = n("j2ox");

        function w(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                tolerance: 100,
                horizontal: !1
            };
            if (!t) throw new Error("You should specify the element you want to test");
            if ("string" == typeof t && (t = document.querySelector(t)), n.horizontal) {
                var i = -e + window.innerWidth,
                    o = t.offsetLeft;
                return t.offsetWidth + o + n.tolerance > -e && o - n.tolerance <= i
            }
            var r = -e + window.innerHeight,
                a = t.offsetTop;
            return t.offsetHeight + a + n.tolerance > -e && a - n.tolerance <= r
        }

        function _(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function x(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var k = function() {
                function t(e, n, i) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        horizontal: !1,
                        include: o.a.doc.querySelector('[data-module="header"]')
                    };
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.slug = e || "block", this.options = r, this.page = void 0 !== n ? n : o.a.doc, this.component = void 0 !== i ? i : o.a.doc.querySelector('[data-module="'.concat(e, '"]')), this.id = Object(s.a)("component"), this.settings = {
                        smoothness: .1,
                        speed: .7,
                        active: !0,
                        horizontal: this.options.horizontal
                    }, this.ticking = !1, this.currentScroll = 0, this.deltaY = 0, this.sectionsTotalHeight = 0, this.sectionsTotalWidth = 0, this.direction = null, this.scrolledYLerp = 0, this.isAtBottom = !1, this.scrolltoTop = !1, this.init()
                }
                var e, n, i;
                return e = t, (n = [{
                    key: "init",
                    value: function() {
                        this.container = this.options.container || this.page.querySelector(".scroll-outer"), this.sectionsEls = this.options.sectionsEls || _(this.page.querySelectorAll(".scroll-section")), this.imagesEls = this.options.imagesEls || this.page.querySelectorAll(".scroll-image"), this.itemEls = this.options.itemEls || this.page.querySelectorAll(".scroll-item"), this.itemElsTop = this.options.itemElsTop || this.page.querySelectorAll(".scroll-item-top"), null != this.options.include && this.sectionsEls.push(this.options.include), this.images = [], this.items = [], this.sections = [], this.animateScroll = this.animateScroll.bind(this), this.onWheel = this.onWheel.bind(this), this.start = this.start.bind(this), this.stop = this.stop.bind(this), this.onResize = this.onResize.bind(this), this.wheelCalc = this.wheelCalc.bind(this), this.onAppLoaded = this.onAppLoaded.bind(this), this.recalculateImages = this.recalculateImages.bind(this), this.translateItems = this.translateItems.bind(this), this.resetImages = this.resetImages.bind(this), this.resetItems = this.resetItems.bind(this), this.destroy = this.destroy.bind(this), this.onScroll = this.onScroll.bind(this), this.move = this.move.bind(this), this.toTop = this.toTop.bind(this), this.initEvents(), this.getSections(), this.setClasses(), this.reset()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.destroyEvents()
                    }
                }, {
                    key: "initEvents",
                    value: function() {
                        o.a.doc.addEventListener("loaderDone", this.start, !1), o.a.doc.addEventListener("transitionBegin", this.start), o.a.win.addEventListener("resize", this.onResize)
                    }
                }, {
                    key: "destroyEvents",
                    value: function() {
                        o.a.body.classList.contains("is-scroll-native") && o.a.body.classList.remove("is-scroll-native"), o.a.html.classList.contains("is-scroll-smooth") && o.a.html.classList.remove("is-scroll-smooth"), o.a.loop.remove(this.id), o.a.doc.removeEventListener("loaderDone", this.start, !1), o.a.doc.removeEventListener("transitionBegin", this.start), o.a.win.removeEventListener("wheel", this.onWheel, {
                            passive: !0
                        }), o.a.win.removeEventListener("resize", this.onResize), this.container = [], this.sectionsEls = [], this.imagesEls = [], this.itemEls = [], this.images = [], this.items = [], this.sections = [], this.currentScroll = 0, this.deltaY = 0, this.sectionsTotalHeight = 0, this.sectionsTotalWidth = 0, this.direction = null, this.scrolledYLerp = 0
                    }
                }, {
                    key: "recalculateImages",
                    value: function() {
                        var t = this,
                            e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.sections.forEach((function(n) {
                            t.resetSections(n), t.resetImages(n), t.resetItems(n), n.images = t.calculateElementsPosition(n.el.querySelectorAll(".scroll-image"), e), n.items = t.calculateElementsPosition(n.el.querySelectorAll(".scroll-item"), e), n.itemsTop = t.calculateElementsPosition(n.el.querySelectorAll(".scroll-item-top"), e)
                        }))
                    }
                }, {
                    key: "getSections",
                    value: function() {
                        var t = this;
                        this.sectionsEls.forEach((function(e) {
                            var n = {
                                active: !1,
                                el: e,
                                parallax: e.dataset.parallax ? e.dataset.parallax : 1,
                                images: t.calculateElementsPosition(e.querySelectorAll(".scroll-image")),
                                items: t.calculateElementsPosition(e.querySelectorAll(".scroll-item")),
                                itemsTop: t.calculateElementsPosition(e.querySelectorAll(".scroll-item-top")),
                                horizontalEls: t.calculateElementsPosition(e.querySelectorAll(".scroll-horizontal"))
                            };
                            t.sections.push(n)
                        }))
                    }
                }, {
                    key: "checkViewport",
                    value: function() {
                        o.a.viewport.small ? o.a.body.classList.add("is-scroll-native") : o.a.body.classList.remove("is-scroll-native")
                    }
                }, {
                    key: "setClasses",
                    value: function() {
                        o.a.settings.smoothscroll && !o.a.viewport.small && o.a.html.classList.add("is-scroll-smooth"), o.a.viewport.small ? o.a.body.classList.add("is-scroll-native") : o.a.body.classList.remove("is-scroll-native")
                    }
                }, {
                    key: "initHorizontalElements",
                    value: function() {
                        this.sections.forEach((function(t) {
                            t.horizontalEls.length && t.horizontalEls.forEach((function(t) {
                                var e = 0;
                                t.el.children.length && _(t.el.children).forEach((function(t) {
                                    e += t.offsetWidth
                                })), t.el.style.width = "".concat(e + 10, "px"), t.offsetRight = t.el.offsetWidth - o.a.win.innerWidth
                            }))
                        }))
                    }
                }, {
                    key: "onAppLoaded",
                    value: function() {
                        this.ticking = !0, this.animateScroll(), o.a.viewport.small || this.initHorizontalElements(), this.onResize()
                    }
                }, {
                    key: "start",
                    value: function() {
                        if (this.onAppLoaded(), this.settings.active = !0, this.calculateScrollSize(), o.a.viewport.height > this.sectionsTotalHeight) return !1;
                        o.a.win.addEventListener("wheel", this.onWheel), o.a.loop.add(this.animateScroll, this.id), this.animateScroll(), o.a.viewport.small || this.initHorizontalElements(), this.onResize()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.settings.active = !1
                    }
                }, {
                    key: "reset",
                    value: function() {
                        o.a.win.scrollTo(0, 0)
                    }
                }, {
                    key: "calculateElementsPosition",
                    value: function(t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = [];
                        return t.forEach((function(t) {
                            var r = t.getBoundingClientRect(),
                                a = r.top,
                                s = r.left,
                                l = r.height,
                                c = r.width,
                                u = o.a.settings.smoothscroll ? e.scrolledYLerp : e.currentScroll,
                                d = {
                                    el: t,
                                    top: n ? a : u + a,
                                    left: s,
                                    height: l,
                                    width: c,
                                    offsetRight: t.offsetWidth - o.a.win.innerWidth,
                                    offsetTop: t.offsetParent && t.offsetParent.offsetParent ? (t.offsetParent.offsetHeight - t.offsetParent.offsetParent.offsetHeight) / 2 : 0,
                                    parallax: t.dataset.parallax ? t.dataset.parallax : 1
                                };
                            i.push(d)
                        })), i
                    }
                }, {
                    key: "calculateItemsPosition",
                    value: function() {
                        var t = this;
                        this.itemEls.forEach((function(e) {
                            var n = e.getBoundingClientRect(),
                                i = n.top,
                                o = n.left,
                                r = n.height,
                                a = {
                                    el: e,
                                    top: scrollY + i,
                                    left: o,
                                    height: r,
                                    offsetTop: (e.offsetParent.offsetHeight - e.offsetParent.offsetParent.offsetHeight) / 2,
                                    parallax: e.dataset.parallax ? e.dataset.parallax : 1
                                };
                            t.items.push(a)
                        }))
                    }
                }, {
                    key: "calculateHorizontalScroll",
                    value: function(t) {
                        var e = t.el.getBoundingClientRect().top,
                            n = t.offsetRight / 2,
                            i = -1 * n,
                            r = o.a.settings.smoothscroll ? this.scrolledYLerp : this.currentScroll;
                        return Object(y.b)(e + r, o.a.win.innerHeight, -1 * t.width, i, n)
                    }
                }, {
                    key: "calculateImageParallax",
                    value: function(t) {
                        var e = Math.max(Math.min(t.offsetTop, 50), 0),
                            n = -1 * e,
                            i = o.a.settings.smoothscroll ? this.scrolledYLerp : this.currentScroll;
                        return Object(y.b)(t.top + i, o.a.win.innerHeight, -1 * t.height, n, e)
                    }
                }, {
                    key: "calculateItemParallax",
                    value: function(t) {
                        var e = 100 * t.parallax,
                            n = -1 * e,
                            i = o.a.settings.smoothscroll ? this.scrolledYLerp : this.currentScroll,
                            r = this.options.horizontal ? t.left + i : t.top + i;
                        return Object(y.b)(r, this.options.horizontal ? o.a.win.innerWidth : o.a.win.innerHeight, this.options.horizontal ? -1 * t.width : -1 * t.height, n, e)
                    }
                }, {
                    key: "calculateItemTopParallax",
                    value: function(t) {
                        var e = o.a.settings.smoothscroll ? this.scrolledYLerp : this.currentScroll;
                        return e * t.parallax - e
                    }
                }, {
                    key: "translateItems",
                    value: function(t) {
                        var e = this;
                        t.itemsTop.forEach((function(t) {
                            var n = e.calculateItemTopParallax(t);
                            e.settings.horizontal ? t.el.style.transform = "translate3d(".concat(Math.round(100 * n) / 100, "px, 0, 0)") : t.el.style.transform = "translate3d(0, ".concat(Math.round(100 * n) / 100, "px, 0)")
                        })), t.items.forEach((function(t) {
                            var n = e.calculateItemParallax(t);
                            e.settings.horizontal ? t.el.style.transform = "translate3d(".concat(Math.round(100 * n) / 100, "px, 0, 0)") : t.el.style.transform = "translate3d(0, ".concat(Math.round(100 * n) / 100, "px, 0)")
                        }))
                    }
                }, {
                    key: "translateImages",
                    value: function(t) {
                        var e = this;
                        t.images.forEach((function(t) {
                            var n = e.calculateImageParallax(t);
                            e.settings.horizontal ? t.el.style.transform = "translate3d(".concat(Math.round(100 * n) / 100, "px, 0, 0)") : t.el.style.transform = "translate3d(0, ".concat(Math.round(100 * n) / 100, "px, 0)")
                        }))
                    }
                }, {
                    key: "resetSections",
                    value: function(t) {
                        t.el.style.transform = ""
                    }
                }, {
                    key: "resetItems",
                    value: function(t) {
                        t.items.forEach((function(t) {
                            t.el.style.transform = ""
                        }))
                    }
                }, {
                    key: "resetImages",
                    value: function(t) {
                        t.images.forEach((function(t) {
                            t.el.style.transform = ""
                        }))
                    }
                }, {
                    key: "animateScroll",
                    value: function() {
                        var t = this;
                        this.settings.active && o.a.settings.smoothscroll && (this.currentScroll = this.currentScroll + this.deltaY, this.isAtBottom = Math.abs(this.currentScroll) > this.maxScroll, this.scrolltoTop = Math.abs(this.currentScroll) >= this.maxScroll, -this.currentScroll < 0 ? this.currentScroll = 0 : this.isAtBottom && (this.currentScroll = -this.maxScroll)), this.scrolledYLerp = Object(y.a)(this.scrolledYLerp, this.currentScroll, this.settings.smoothness), o.a.viewport.small || this.sections.forEach((function(e) {
                            w(e.el, t.scrolledYLerp) && e.horizontalEls.length, t.settings.horizontal, e.horizontalEls.forEach((function(e) {
                                var n = t.calculateHorizontalScroll(e);
                                e.el.style.transform = "translate3d(".concat(Math.round(100 * n) / 100, "px, 0, 0)")
                            }))
                        })), this.sections.forEach((function(e) {
                            w(e.el, t.scrolledYLerp, {
                                tolerance: 200,
                                horizontal: t.settings.horizontal
                            }) ? (e.active = !0, o.a.settings.smoothscroll && (t.settings.horizontal ? e.el.style.transform = "translate3d(".concat(Math.round(t.scrolledYLerp * e.parallax * 100) / 100, "px, 0, 0)") : e.el.style.transform = "translate3d(0, ".concat(Math.round(t.scrolledYLerp * e.parallax * 100) / 100, "px, 0)"), e.el.style.visibility = "visible"), o.a.viewport.small || (t.translateImages(e), t.translateItems(e))) : (e.active && (o.a.settings.smoothscroll && (e.el.style.transform = "", e.el.style.visibility = "hidden"), e.images.forEach((function(t) {
                                t.el.style.transform = ""
                            }))), e.active = !1)
                        })), this.deltaY = 0, Math.abs(this.scrolledYLerp - this.currentScroll) > 5 ? (o.a.isScrolling = !0, o.a.body.classList.add("is-scrolling")) : (o.a.isScrolling = !1, o.a.body.classList.remove("is-scrolling"))
                    }
                }, {
                    key: "calculateScrollSize",
                    value: function() {
                        this.settings.horizontal ? (this.container && (this.sectionsTotalWidth = this.container.getBoundingClientRect().width), this.maxScroll = this.sectionsTotalWidth - window.innerWidth, this.options.offsetBottom && (this.maxScroll += this.options.offsetBottom)) : (this.container && (this.sectionsTotalHeight = this.container.getBoundingClientRect().height), this.options.include && (this.sectionsTotalHeight += this.options.include.getBoundingClientRect().height), this.maxScroll = this.sectionsTotalHeight - window.innerHeight)
                    }
                }, {
                    key: "onWheel",
                    value: function(t) {
                        if (!o.a.viewport.small) {
                            var e = b.a.normalizeWheel(t);
                            this.deltaY = this.delta = t.wheelDeltaY * this.settings.speed || -this.settings.speed * e.pixelY, this.wheelCalc(), this.onScrollFunction()
                        }
                    }
                }, {
                    key: "onScroll",
                    value: function(t) {
                        t && (this.onScrollFunction = t)
                    }
                }, {
                    key: "move",
                    value: function() {
                        this.deltaY -= 200, this.wheelCalc(), this.onScrollFunction()
                    }
                }, {
                    key: "toTop",
                    value: function() {
                        this.currentScroll = 0, this.wheelCalc(), this.onScrollFunction()
                    }
                }, {
                    key: "wheelCalc",
                    value: function() {
                        this.deltaY > 0 ? this.direction = "up" : this.deltaY < 0 ? this.direction = "down" : this.direction = null, this.ticking || (this.ticking = !0, o.a.isScrolling = !0), o.a.settings.smoothscroll || (this.currentScroll = -window.pageYOffset)
                    }
                }, {
                    key: "onResize",
                    value: function() {
                        this.setClasses(), this.calculateScrollSize(), this.recalculateImages(), this.wheelCalc()
                    }
                }]) && x(e.prototype, n), i && x(e, i), t
            }(),
            E = n("yXg1");

        function A(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    splitLetters: !1
                },
                n = t.querySelectorAll("p"),
                i = [];

            function o(n) {
                var o = n.innerHTML,
                    r = o.split("<br>");
                n.innerHTML = "", r.forEach((function(t) {
                    if ("" === t) return !1;
                    var n = t.split(" "),
                        o = document.createElement("div"),
                        r = !1;
                    n.forEach((function(t) {
                        r = t.indexOf("<strong>") > -1, t = (t = t.replace(/(<strong>)*/g, "")).replace(/(<\/strong>)*/g, "");
                        var n = document.createElement("span"),
                            i = document.createElement("span");
                        if (i.classList.add("c-word", "overflow-hidden", "inline-block"), r && i.classList.add("text-orange-500"), e.splitLetters) {
                            var a = t.split(""),
                                s = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
                                l = !0,
                                c = !1,
                                u = void 0;
                            try {
                                for (var d, h = a[Symbol.iterator](); !(l = (d = h.next()).done); l = !0) {
                                    var f = d.value,
                                        p = document.createElement("span");
                                    s.test(f) && (r = !1), p.classList.add("c-letter"), p.classList.add("inline-block"), r && p.classList.add("text-orange-500"), " " === f && (f = String.fromCharCode(160)), p.innerText = f, i.appendChild(p), n.appendChild(i)
                                }
                            } catch (t) {
                                c = !0, u = t
                            } finally {
                                try {
                                    l || null == h.return || h.return()
                                } finally {
                                    if (c) throw u
                                }
                            }
                        } else {
                            var m = document.createElement("span");
                            m.classList.add("c-word__inner"), m.innerHTML = t, i.appendChild(m), n.appendChild(i)
                        }
                        o.appendChild(i)
                    })), i.push(o)
                })), t.classList.add("c-words"), i.forEach((function(e) {
                    t.appendChild(e)
                }))
            }
            n.length ? n.forEach((function(e) {
                o(e), t.removeChild(e)
            })) : o(t)
        }

        function O(t) {
            return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function S(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function C(t, e) {
            return !e || "object" !== O(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function j(t, e, n) {
            return (j = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = L(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function L(t) {
            return (L = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function T(t, e) {
            return (T = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var P = function(t) {
            function e() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), C(this, L(e).apply(this, arguments))
            }
            var n, i, r;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && T(t, e)
            }(e, t), n = e, (i = [{
                key: "init",
                value: function() {
                    var t = this;
                    j(L(e.prototype), "init", this).call(this), this.animateIn = this.animateIn.bind(this), this.animateOut = this.animateOut.bind(this), this.toTop = this.toTop.bind(this), this.scroll = null, this.project = null, this.images = [], this.letters = null, this.close = new E.default, o.a.data.projects.forEach((function(e) {
                        t.slug === e.title.toLowerCase() && (t.project = e)
                    }))
                }
            }, {
                key: "destroy",
                value: function() {
                    j(L(e.prototype), "destroy", this).call(this)
                }
            }, {
                key: "initEvents",
                value: function() {
                    j(L(e.prototype), "initEvents", this).call(this)
                }
            }, {
                key: "destroyEvents",
                value: function() {
                    j(L(e.prototype), "destroyEvents", this).call(this)
                }
            }, {
                key: "checkCache",
                value: function() {
                    this.images = o.a.loadedImages[this.slug]
                }
            }, {
                key: "toTop",
                value: function() {
                    this.scroll.toTop(), Ge.cta.scrollToTopMode(!1), Ge.cta.component.addEventListener("click", this.scroll.move), Ge.cta.component.removeEventListener("click", this.toTop)
                }
            }, {
                key: "animateIn",
                value: function() {
                    var t = this;
                    o.a.page.previous = o.a.page.current, o.a.page.current = o.a.pages[this.slug], this.checkCache(), Ge.menu.update('\n            <ul class="flex pt-2">\n                <li class="menu-item menu-item-close" data-menu-link="gallery">\n                    <div class="pointer-events-none">\n                        <div class="flex flex-col items-center">\n                            <div class="mb-24 w-40">'.concat(this.close.svg, '</div>\n                            <div class="overflow-hidden">\n                                <div class="animation-translate | menu-item-inner">\n                                    ').concat(o.a.data.labels.goBack, "\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        ")), Object(a.a)({
                        targets: [o.a.components.gl.icosahedron.settings, o.a.components.gl.icosahedron.settings.lines, Ge.header.component],
                        opacity: 0,
                        duration: 500,
                        easing: "linear"
                    }), setTimeout((function() {
                        t.render(), setTimeout((function() {
                            Ge.menu.menuContent.style.display = "block", Ge.menu.menuButton.style.display = "none", t.scroll = new k(t.id, t.page, t.page), t.close.animateIn(), t.scroll.onScroll((function() {
                                t.scrollTimeOut && clearTimeout(t.scrollTimeOut);
                                var e = Math.floor(Math.abs(t.scroll.currentScroll) / t.scroll.maxScroll * 100);
                                if (Ge.loadingIcon.setLoadingPoint(e), t.scroll.scrolltoTop) {
                                    if ("top" === Ge.cta.mode) return;
                                    Ge.cta.scrollToTopMode(), Ge.cta.component.removeEventListener("click", t.scroll.move), Ge.cta.component.addEventListener("click", t.toTop)
                                } else {
                                    if ("scroll" === Ge.cta.mode) return;
                                    Ge.cta.scrollToTopMode(!1), Ge.cta.component.addEventListener("click", t.scroll.move), Ge.cta.component.removeEventListener("click", t.toTop)
                                }
                            })), t.scroll.start(), Ge.cta.component.addEventListener("click", t.scroll.move), Ge.cta.component.style.cursor = "pointer"
                        }), 300), Ge.loadingIcon.scrollMode(), Ge.cta.scrollMode(), t.title = t.$(".project-title"), A(t.title, {
                            splitLetters: !0
                        }), t.viewCaseButtonClicked = !1, t.onScrollNavigating = !1, t.letters = t.title.querySelectorAll(".c-letter"), t.letters.forEach((function(t) {
                            t.style.transform = "translateY(-101%)"
                        })), Object(a.a)({
                            targets: [t.letters],
                            translateY: ["-101%", "0%"],
                            duration: 1500,
                            delay: a.a.stagger(t.letters.length < 5 ? 100 : 50),
                            easing: o.a.easings.soft
                        }), Object(a.a)({
                            targets: t.container.querySelectorAll(".animation-translate"),
                            translateY: ["101%", "0%"],
                            duration: 1500,
                            delay: a.a.stagger(40),
                            easing: o.a.easings.soft,
                            complete: function() {
                                Ge.menu.isReady = !0
                            }
                        }), Object(a.a)({
                            targets: t.container.querySelectorAll(".animation-opacity"),
                            opacity: [0, 1],
                            delay: 700,
                            duration: 700,
                            easing: "linear"
                        })
                    }), 700)
                }
            }, {
                key: "animateOut",
                value: function() {
                    var t = this;
                    this.scroll.destroyEvents(), Ge.cta.component.removeEventListener("click", this.scroll.move), Ge.cta.component.style.cursor = "";
                    var e = Ge.header.component,
                        n = Ge.aside.asideBox;
                    Object(a.a)({
                        targets: [n, e],
                        delay: 500,
                        opacity: 1,
                        duration: 500,
                        easing: "linear",
                        begin: function() {
                            e.style.transform = "", e.style.visibility = "", Ge.menu.menuContent.style.display = "", Ge.menu.menuButton.style.display = ""
                        },
                        complete: function() {
                            t.close.destroy()
                        }
                    }), Object(a.a)({
                        targets: [this.container.querySelectorAll(".animation-opacity"), this.container.querySelectorAll(".animation-translate"), this.letters],
                        delay: 100,
                        opacity: 0,
                        duration: 300,
                        easing: "linear"
                    })
                }
            }, {
                key: "render",
                value: function() {
                    this.container.innerHTML = '\n            <div class="scroll-outer">\n                <div class="scroll-section">\n                    <div class="wrap scroll-item-top" data-parallax="0.75">\n                        <div class="grid md:pt-80 '.concat("" === this.project.description ? "pb-80 md:pb-120" : "", '">\n                            <div class="grid-col w-full text-center">\n                                <div>\n                                    <div class=" ').concat("" === this.project.description ? "mb-24" : "mb-48", ' font-regular text-14 md:text-12 uppercase tracking-widest overflow-hidden animation-opacity">').concat(this.project.type, '</div>\n                                    <h2 class="font-staffX text-24 xs:text-32 md:text-48 uppercase leading-none text-title project-title">').concat(this.project.title, "</h2>\n                                </div>\n                            </div>\n                        </div>\n                        ").concat("" !== this.project.description ? '\n                            <div class="grid md:pt-40 pb-80 md:pb-120 justify-center text-center">\n                                <div class="grid-col w-1/2 | animation-opacity">\n                                    <p class="text-20 font-sans leading-normal | animation-opacity">'.concat(this.project.description, "</p>\n                                </div>\n                            </div>\n                        ") : "", '\n                    </div>\n                </div>\n                <div class="scroll-section">\n                    <div class="wrap">\n                        <div class="grid pb-160">\n                            <div class="grid-col w-full">\n                                ').concat(this.project.images.map((function(t) {
                        return '\n                                    <div class="py-16 md:py-40 lg:py-80 flex justify-center">\n                                        <div style="max-width: '.concat(t.width, 'px; width: 100%;">\n                                            <div class="animation-opacity project-image" style="padding-bottom: ').concat(t.height / t.width * 100, '%">\n                                                ').concat("img" === t.type ? '\n                                                    <img src="'.concat(t.url, '" width="').concat(t.width, '" height="').concat(t.height, '">\n                                                ') : "", "\n\n                                                ").concat("video" === t.type ? '\n                                                <video width="'.concat(t.width, '" height="').concat(t.height, '" controls>\n                                                    <source src="').concat(t.url, '" type="video/mp4">\n                                                </video>\n                                                ') : "", "\n                                            </div>\n                                        </div>\n                                    </div>\n                                ").trim()
                    })).join(""), '\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="scroll-section">\n                    <div class="wrap">\n                        <div class="grid pb-72 | animation-opacity justify-center">\n                            <div class="grid-col font-regular text-14 md:text-12 uppercase tracking-widest">\n                                ©  ').concat(o.a.data.site.year, " —  ").concat(o.a.data.site.author, "\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>")
                }
            }]) && S(n.prototype, i), r && S(n, r), e
        }(v);

        function M(t) {
            return (M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function B(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function I(t, e) {
            return !e || "object" !== M(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function R(t, e, n) {
            return (R = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = D(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function D(t) {
            return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function F(t, e) {
            return (F = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var N = function(t) {
                function e() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), I(this, D(e).apply(this, arguments))
                }
                var n, i, r;
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && F(t, e)
                }(e, t), n = e, (i = [{
                    key: "init",
                    value: function() {
                        R(D(e.prototype), "init", this).call(this), this.animateIn = this.animateIn.bind(this), this.animateOut = this.animateOut.bind(this), this.toTop = this.toTop.bind(this), this.scroll = null, this.close = new E.default
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        R(D(e.prototype), "destroy", this).call(this)
                    }
                }, {
                    key: "initEvents",
                    value: function() {
                        R(D(e.prototype), "initEvents", this).call(this)
                    }
                }, {
                    key: "destroyEvents",
                    value: function() {
                        R(D(e.prototype), "destroyEvents", this).call(this), Ge.cta.component.removeEventListener("click", this.scroll.move), Ge.cta.component.removeEventListener("click", this.toTop)
                    }
                }, {
                    key: "animateIn",
                    value: function() {
                        var t = this;
                        Ge.menu.isReady = !1, o.a.page.previous = o.a.page.current, o.a.page.current = o.a.pages.about, Ge.menu.update('\n            <ul class="flex pt-2">\n                <li class="menu-item menu-item-close" data-menu-link="'.concat(o.a.page.previous.slug, '">\n                    <div class="pointer-events-none">\n                        <div class="flex flex-col items-center">\n                            <div class="mb-24 w-40">').concat(this.close.svg, '</div>\n                            <div class="overflow-hidden">\n                                <div class="animation-translate | menu-item-inner">\n                                    ').concat(o.a.data.labels.goBack, "\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        ")), Object(a.a)({
                            targets: [o.a.components.gl.icosahedron.settings, o.a.components.gl.icosahedron.settings.lines],
                            opacity: 0,
                            duration: 500,
                            easing: "linear"
                        }), o.a.components.gl.setBackground({
                            bgColor: o.a.colors.background,
                            kaleidoFactor: 0
                        }, 500), setTimeout((function() {
                            o.a.components.gl.setStyle({
                                lines: {
                                    opacity: 1,
                                    width: 3.5,
                                    shadow: .5,
                                    darkness: 0
                                },
                                colors: {
                                    ui: "#B3B3B3",
                                    title: "#B3B3B3",
                                    border: "#999999",
                                    menuBackground: "#272727"
                                }
                            }, 0), t.render(), t.scroll = new k(t.id, t.page, t.page), Ge.loadingIcon.scrollMode(), Ge.cta.scrollMode(), t.close.animateIn(), null !== o.a.page.previous && "gallery" === o.a.page.previous.slug && (o.a.components.gl.loadImage(o.a.data.home.image), o.a.components.gl.loadNoiseTexture(o.a.data.home.noiseTexture)), o.a.components.gl.scroll.currentScroll = -4e3, o.a.components.gl.icosahedron.settings.position.y = -5.5, o.a.components.gl.icosahedron.settings.position.z = 3.5, o.a.components.gl.settings.zoom = 26, o.a.components.gl.settings.imageScale = 1.5, t.scroll.onScroll((function() {
                                if (o.a.activePage === o.a.page.current.slug) {
                                    t.scrollTimeOut && clearTimeout(t.scrollTimeOut);
                                    var e = Math.floor(Math.abs(t.scroll.currentScroll) / t.scroll.maxScroll * 100);
                                    if (Ge.loadingIcon.setLoadingPoint(e), o.a.components.gl.icosahedron.settings.smoothness = t.scroll.settings.smoothness, o.a.components.gl.icosahedron.settings.position.y = -(5.5 + .00675 * t.scroll.currentScroll), t.scrollTimeOut = setTimeout((function() {
                                            o.a.components.gl.icosahedron.settings.smoothness = .05
                                        }), 100), t.scroll.scrolltoTop) {
                                        if ("top" === Ge.cta.mode) return;
                                        Ge.cta.scrollToTopMode(), Ge.cta.component.removeEventListener("click", t.scroll.move), Ge.cta.component.addEventListener("click", t.toTop)
                                    } else {
                                        if ("scroll" === Ge.cta.mode) return;
                                        Ge.cta.scrollToTopMode(!1), Ge.cta.component.addEventListener("click", t.scroll.move), Ge.cta.component.removeEventListener("click", t.toTop)
                                    }
                                } else t.scroll.destroyEvents()
                            })), t.scroll.start(), Ge.cta.component.addEventListener("click", t.scroll.move), Ge.cta.component.style.cursor = "pointer";
                            var e = o.a.doc.querySelector(".aside-label");
                            e && "1" != e.style.opacity && Object(a.a)({
                                targets: e,
                                opacity: 1,
                                duration: 500,
                                easing: "linear"
                            }), Object(a.a)({
                                targets: o.a.components.gl.icosahedron.settings.lines,
                                darkness: .515,
                                duration: 1500,
                                easing: "linear"
                            }), Object(a.a)({
                                targets: o.a.components.gl.icosahedron.settings,
                                opacity: .515,
                                duration: 1500,
                                easing: "linear",
                                complete: function() {
                                    Ge.menu.isReady = !0
                                }
                            }), Object(a.a)({
                                targets: t.container.querySelectorAll(".animation-translate"),
                                translateY: ["101%", "0%"],
                                duration: 1500,
                                delay: a.a.stagger(40),
                                easing: o.a.easings.soft
                            }), Object(a.a)({
                                targets: t.container.querySelectorAll(".animation-opacity"),
                                opacity: [0, 1],
                                delay: 400,
                                duration: 500,
                                easing: "linear"
                            })
                        }), 700)
                    }
                }, {
                    key: "toTop",
                    value: function() {
                        this.scroll.toTop(), Ge.cta.scrollToTopMode(!1), Ge.cta.component.addEventListener("click", this.scroll.move), Ge.cta.component.removeEventListener("click", this.toTop)
                    }
                }, {
                    key: "animateOut",
                    value: function() {
                        var t = this;
                        Ge.cta.component.removeEventListener("click", this.scroll.move), Ge.cta.component.style.cursor = "", this.scroll.destroyEvents(), this.aboutOutAnimation = a.a.timeline({
                            duration: 2e3
                        });
                        var e = o.a.doc.querySelector('[data-module="header"]');
                        "translate3d(0px, 0px, 0px)" !== e.style.transform && Object(a.a)({
                            targets: e,
                            delay: 100,
                            opacity: 0,
                            duration: 300,
                            easing: "linear",
                            complete: function(n) {
                                t.close.destroy(), e.style.transform = "", e.style.visibility = "", Object(a.a)({
                                    targets: e,
                                    delay: 200,
                                    opacity: 1,
                                    duration: 500,
                                    easing: "linear"
                                })
                            }
                        }), Object(a.a)({
                            targets: [this.container.querySelectorAll(".animation-opacity"), this.container.querySelectorAll(".animation-translate")],
                            delay: 100,
                            opacity: 0,
                            duration: 300,
                            easing: "linear"
                        }), this.aboutOutAnimation.add({
                            targets: [o.a.components.gl.icosahedron.settings, o.a.components.gl.icosahedron.settings.lines],
                            opacity: 0,
                            duration: 1e3,
                            easing: "linear"
                        }), this.aboutOutAnimation.add({
                            targets: o.a.components.gl.icosahedron.settings.lines,
                            darkness: .6,
                            duration: 1e3,
                            easing: "linear",
                            complete: function() {
                                o.a.page.previous === o.a.pages.gallery && o.a.pages.gallery.animateIn(), o.a.page.previous === o.a.pages.home && o.a.pages.home.animateIn()
                            }
                        }, "-=1000"), this.aboutOutAnimation.add({
                            targets: o.a.components.gl.icosahedron.settings.lines,
                            darkness: 1,
                            duration: 1e3,
                            easing: "linear"
                        }, "-=1000")
                    }
                }, {
                    key: "render",
                    value: function() {
                        this.container.innerHTML = '\n            <div class="wrap scroll-outer">\n                <div class="scroll-section">\n                    <div class="grid pb-24 md:pb-40">\n                        <div class="grid-col scroll-item-top" data-parallax="1.25">\n                            <h2 aria-label="Belgium-based creative developer and digital designer." class="hero-text hero-text-about font-staffX text-24 xs:text-32 md:text-40 lg:text-48 xl:text-56 uppercase leading-none">\n                                <div aria-hidden="true">\n                                    <div class="overflow-hidden">\n                                       <div class="animation-translate"><span class="text-outline">Phuong</span> Duy</div>\n                                   </div>\n                                    <div class="overflow-hidden">\n                                        <div class="animation-translate">Graphic <span class="text-outline">Designer</span></div>\n                                  </div>\n                                    <div class="overflow-hidden">\n                                                                      </div>\n                                    <div class="overflow-hidden">\n                                                                           </div>\n                                </div>\n                            </h2>\n                        </div>\n                    </div>\n\n                    <div class="grid justify-end scroll-item-top" data-parallax="1.1">\n                        <div class="grid-col md:w-1/2 py-40 md:py-96">\n                            <p class="text-20 font-sans leading-normal text-gray-300 | animation-opacity">Hello! I am a young and passionate graphic designer! With creativity, eagerness to learn and a high sense of responsibility in work, I can create unique and creative products.</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="scroll-section">\n                    <div class="grid">\n                        <div class="grid-col w-full pt-32 md:py-96 | animation-opacity">\n                            <h3 class="font-staff text-24 uppercase">Experience</h3>\n                            <ul class="list list--striped">\n                                <li class="list-item"><span class="md:w-320">2021 - Present</span><span class="w-full">Freelance Creative Developer</span><span class="md:w-full md:text-right">Remote</span></li>\n                                <li class="list-item"><span class="md:w-320">2019 - 2020</span><span class="w-full">Lead Front-end Developer</span><span class="md:w-full md:text-right">Lunar, Antwerp</span></li>\n                                <li class="list-item"><span class="md:w-320">2019</span><span class="w-full">Front-end Developer</span><span class="md:w-full md:text-right">Minsky, Leuven</span></li>\n                                <li class="list-item"><span class="md:w-320">2017 - 2019</span><span class="w-full">Freelance developer / Digital designer</span><span class="md:w-full md:text-right">Remote</span></li>\n                                <li class="list-item"><span class="md:w-320">2013 - 2017</span><span class="w-full">Front-end developer / Digital designer</span><span class="md:w-full md:text-right">Spatie, Antwerp</span></li>\n                                <li class="list-item"><span class="md:w-320">2012 - 2013</span><span class="w-full">Intern designer</span><span class="md:w-full md:text-right">Bagaar, Antwerp</span></li>\n                            </ul>\n                        </div>\n                    </div>\n\n                    <div class="grid pt-80 md:py-120">\n                        <div class="grid-col w-full md:w-1/2 | animation-opacity">\n                            <h3 class="font-staff text-24 uppercase">Features</h3>\n                            <ul class="list">\n                                <li class="list-item">Adobe New Creatives</li>\n                                <li class="list-item">Awwwards: Mobile Of The Week <sup>3</sup></li>\n                                <li class="list-item">Awwwards: Site Of The Day <sup>2</sup></li>\n                                <li class="list-item">Awwwards: Developer Award <sup>2</sup></li>\n                                <li class="list-item">Behance: Best of Behance <sup>2</sup></li>\n                                <li class="list-item">Behance: Digital Art <sup>3</sup></li>\n                                <li class="list-item">Behance: Editorial</li>\n                                <li class="list-item">CSSDA: Site of the day <sup>4</sup></li>\n                                <li class="list-item">Deviantart: Daily Deviation <sup>5</sup></li>\n                                <li class="list-item">FWA: FWA Of The Day <sup>3</sup></li>\n                            </ul>\n                        </div>\n                        <div class="grid-col w-full pt-80 md:pt-0 md:w-1/2 | animation-opacity">\n                            <h3 class="font-staff text-24 uppercase">Publications</h3>\n                            <ul class="list">\n                                <li class="list-item">Advanced Photoshop</li>\n                                <li class="list-item">Computer Arts</li>\n                                <li class="list-item">Communication Arts</li>\n                                <li class="list-item">IDN World</li>\n                                <li class="list-item">La Mono</li>\n                                <li class="list-item">PSD Mag</li>\n                                <li class="list-item">PSD Tuts</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class="scroll-section">\n                    <div class="grid pt-80 md:pt-120 pb-120 md:pb-200 items-end">\n                        <div class="grid-col w-full | animation-opacity">\n                            <h2 class="font-staffX text-24 xs:text-32 lg:text-40 xl:text-48 uppercase leading-none">\n                                Say <br>\n                                <span class="text-outline">Hello</span>\n                            </h2>\n                            <a href="mailto:duyphuongarts@gmail.com" class="link inline-block text-20 font-sans leading-normal text-gray-300 mt-40">duyphuongarts@gmail.com</a>\n                        </div>\n                    </div>\n\n                    <div class="grid md:flex-row-reverse pb-72 font-regular text-14 md:text-12 uppercase tracking-widest | animation-opacity">\n                        <div class="grid-col w-full md:w-1/2 mb-80 md:mb-0">\n                            <ul class="md:flex socials -my-4">\n                                <li class="menu-item md:my-0"><a class="inline-block" href="https://facebook.com/duyphuongarts" target="_blank" rel="noopener">Facebook</a></li>\n                                <li class="menu-item md:my-0"><a class="inline-block" href="https://www.behance.net/phuwn" target="_blank" rel="noopener">Behance</a></li>\n                                <li class="menu-item md:my-0"><a class="inline-block" href="https://www.instagram.com/hd_phuwn/" target="_blank" rel="noopener">Instagram</a></li>\n                            </ul>\n                        </div>\n\n                        <div class="grid-col w-full md:w-1/2">\n                            ©  '.concat(o.a.data.site.year, " —  ").concat(o.a.data.site.author, "\n                        </div>\n                    </div>\n                </div>\n            </div>")
                    }
                }]) && B(n.prototype, i), r && B(n, r), e
            }(v),
            H = n("o0o1"),
            z = n.n(H);

        function Y(t, e) {
            var n = t.__state.conversionName.toString(),
                i = Math.round(t.r),
                o = Math.round(t.g),
                r = Math.round(t.b),
                a = t.a,
                s = Math.round(t.h),
                l = t.s.toFixed(1),
                c = t.v.toFixed(1);
            if (e || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
                for (var u = t.hex.toString(16); u.length < 6;) u = "0" + u;
                return "#" + u
            }
            return "CSS_RGB" === n ? "rgb(" + i + "," + o + "," + r + ")" : "CSS_RGBA" === n ? "rgba(" + i + "," + o + "," + r + "," + a + ")" : "HEX" === n ? "0x" + t.hex.toString(16) : "RGB_ARRAY" === n ? "[" + i + "," + o + "," + r + "]" : "RGBA_ARRAY" === n ? "[" + i + "," + o + "," + r + "," + a + "]" : "RGB_OBJ" === n ? "{r:" + i + ",g:" + o + ",b:" + r + "}" : "RGBA_OBJ" === n ? "{r:" + i + ",g:" + o + ",b:" + r + ",a:" + a + "}" : "HSV_OBJ" === n ? "{h:" + s + ",s:" + l + ",v:" + c + "}" : "HSVA_OBJ" === n ? "{h:" + s + ",s:" + l + ",v:" + c + ",a:" + a + "}" : "unknown format"
        }
        var G = Array.prototype.forEach,
            U = Array.prototype.slice,
            q = {
                BREAK: {},
                extend: function(t) {
                    return this.each(U.call(arguments, 1), (function(e) {
                        (this.isObject(e) ? Object.keys(e) : []).forEach(function(n) {
                            this.isUndefined(e[n]) || (t[n] = e[n])
                        }.bind(this))
                    }), this), t
                },
                defaults: function(t) {
                    return this.each(U.call(arguments, 1), (function(e) {
                        (this.isObject(e) ? Object.keys(e) : []).forEach(function(n) {
                            this.isUndefined(t[n]) && (t[n] = e[n])
                        }.bind(this))
                    }), this), t
                },
                compose: function() {
                    var t = U.call(arguments);
                    return function() {
                        for (var e = U.call(arguments), n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
                        return e[0]
                    }
                },
                each: function(t, e, n) {
                    if (t)
                        if (G && t.forEach && t.forEach === G) t.forEach(e, n);
                        else if (t.length === t.length + 0) {
                        var i, o = void 0;
                        for (o = 0, i = t.length; o < i; o++)
                            if (o in t && e.call(n, t[o], o) === this.BREAK) return
                    } else
                        for (var r in t)
                            if (e.call(n, t[r], r) === this.BREAK) return
                },
                defer: function(t) {
                    setTimeout(t, 0)
                },
                debounce: function(t, e, n) {
                    var i = void 0;
                    return function() {
                        var o = this,
                            r = arguments;

                        function a() {
                            i = null, n || t.apply(o, r)
                        }
                        var s = n || !i;
                        clearTimeout(i), i = setTimeout(a, e), s && t.apply(o, r)
                    }
                },
                toArray: function(t) {
                    return t.toArray ? t.toArray() : U.call(t)
                },
                isUndefined: function(t) {
                    return void 0 === t
                },
                isNull: function(t) {
                    return null === t
                },
                isNaN: function(t) {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e.toString = function() {
                        return t.toString()
                    }, e
                }((function(t) {
                    return isNaN(t)
                })),
                isArray: Array.isArray || function(t) {
                    return t.constructor === Array
                },
                isObject: function(t) {
                    return t === Object(t)
                },
                isNumber: function(t) {
                    return t === t + 0
                },
                isString: function(t) {
                    return t === t + ""
                },
                isBoolean: function(t) {
                    return !1 === t || !0 === t
                },
                isFunction: function(t) {
                    return "[object Function]" === Object.prototype.toString.call(t)
                }
            },
            V = [{
                litmus: q.isString,
                conversions: {
                    THREE_CHAR_HEX: {
                        read: function(t) {
                            var e = t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                            return null !== e && {
                                space: "HEX",
                                hex: parseInt("0x" + e[1].toString() + e[1].toString() + e[2].toString() + e[2].toString() + e[3].toString() + e[3].toString(), 0)
                            }
                        },
                        write: Y
                    },
                    SIX_CHAR_HEX: {
                        read: function(t) {
                            var e = t.match(/^#([A-F0-9]{6})$/i);
                            return null !== e && {
                                space: "HEX",
                                hex: parseInt("0x" + e[1].toString(), 0)
                            }
                        },
                        write: Y
                    },
                    CSS_RGB: {
                        read: function(t) {
                            var e = t.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                            return null !== e && {
                                space: "RGB",
                                r: parseFloat(e[1]),
                                g: parseFloat(e[2]),
                                b: parseFloat(e[3])
                            }
                        },
                        write: Y
                    },
                    CSS_RGBA: {
                        read: function(t) {
                            var e = t.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                            return null !== e && {
                                space: "RGB",
                                r: parseFloat(e[1]),
                                g: parseFloat(e[2]),
                                b: parseFloat(e[3]),
                                a: parseFloat(e[4])
                            }
                        },
                        write: Y
                    }
                }
            }, {
                litmus: q.isNumber,
                conversions: {
                    HEX: {
                        read: function(t) {
                            return {
                                space: "HEX",
                                hex: t,
                                conversionName: "HEX"
                            }
                        },
                        write: function(t) {
                            return t.hex
                        }
                    }
                }
            }, {
                litmus: q.isArray,
                conversions: {
                    RGB_ARRAY: {
                        read: function(t) {
                            return 3 === t.length && {
                                space: "RGB",
                                r: t[0],
                                g: t[1],
                                b: t[2]
                            }
                        },
                        write: function(t) {
                            return [t.r, t.g, t.b]
                        }
                    },
                    RGBA_ARRAY: {
                        read: function(t) {
                            return 4 === t.length && {
                                space: "RGB",
                                r: t[0],
                                g: t[1],
                                b: t[2],
                                a: t[3]
                            }
                        },
                        write: function(t) {
                            return [t.r, t.g, t.b, t.a]
                        }
                    }
                }
            }, {
                litmus: q.isObject,
                conversions: {
                    RGBA_OBJ: {
                        read: function(t) {
                            return !!(q.isNumber(t.r) && q.isNumber(t.g) && q.isNumber(t.b) && q.isNumber(t.a)) && {
                                space: "RGB",
                                r: t.r,
                                g: t.g,
                                b: t.b,
                                a: t.a
                            }
                        },
                        write: function(t) {
                            return {
                                r: t.r,
                                g: t.g,
                                b: t.b,
                                a: t.a
                            }
                        }
                    },
                    RGB_OBJ: {
                        read: function(t) {
                            return !!(q.isNumber(t.r) && q.isNumber(t.g) && q.isNumber(t.b)) && {
                                space: "RGB",
                                r: t.r,
                                g: t.g,
                                b: t.b
                            }
                        },
                        write: function(t) {
                            return {
                                r: t.r,
                                g: t.g,
                                b: t.b
                            }
                        }
                    },
                    HSVA_OBJ: {
                        read: function(t) {
                            return !!(q.isNumber(t.h) && q.isNumber(t.s) && q.isNumber(t.v) && q.isNumber(t.a)) && {
                                space: "HSV",
                                h: t.h,
                                s: t.s,
                                v: t.v,
                                a: t.a
                            }
                        },
                        write: function(t) {
                            return {
                                h: t.h,
                                s: t.s,
                                v: t.v,
                                a: t.a
                            }
                        }
                    },
                    HSV_OBJ: {
                        read: function(t) {
                            return !!(q.isNumber(t.h) && q.isNumber(t.s) && q.isNumber(t.v)) && {
                                space: "HSV",
                                h: t.h,
                                s: t.s,
                                v: t.v
                            }
                        },
                        write: function(t) {
                            return {
                                h: t.h,
                                s: t.s,
                                v: t.v
                            }
                        }
                    }
                }
            }],
            W = void 0,
            X = void 0,
            Q = function() {
                X = !1;
                var t = arguments.length > 1 ? q.toArray(arguments) : arguments[0];
                return q.each(V, (function(e) {
                    if (e.litmus(t)) return q.each(e.conversions, (function(e, n) {
                        if (W = e.read(t), !1 === X && !1 !== W) return X = W, W.conversionName = n, W.conversion = e, q.BREAK
                    })), q.BREAK
                })), X
            },
            Z = void 0,
            $ = {
                hsv_to_rgb: function(t, e, n) {
                    var i = Math.floor(t / 60) % 6,
                        o = t / 60 - Math.floor(t / 60),
                        r = n * (1 - e),
                        a = n * (1 - o * e),
                        s = n * (1 - (1 - o) * e),
                        l = [
                            [n, s, r],
                            [a, n, r],
                            [r, n, s],
                            [r, a, n],
                            [s, r, n],
                            [n, r, a]
                        ][i];
                    return {
                        r: 255 * l[0],
                        g: 255 * l[1],
                        b: 255 * l[2]
                    }
                },
                rgb_to_hsv: function(t, e, n) {
                    var i = Math.min(t, e, n),
                        o = Math.max(t, e, n),
                        r = o - i,
                        a = void 0;
                    return 0 === o ? {
                        h: NaN,
                        s: 0,
                        v: 0
                    } : (a = t === o ? (e - n) / r : e === o ? 2 + (n - t) / r : 4 + (t - e) / r, (a /= 6) < 0 && (a += 1), {
                        h: 360 * a,
                        s: r / o,
                        v: o / 255
                    })
                },
                rgb_to_hex: function(t, e, n) {
                    var i = this.hex_with_component(0, 2, t);
                    return i = this.hex_with_component(i, 1, e), i = this.hex_with_component(i, 0, n)
                },
                component_from_hex: function(t, e) {
                    return t >> 8 * e & 255
                },
                hex_with_component: function(t, e, n) {
                    return n << (Z = 8 * e) | t & ~(255 << Z)
                }
            },
            J = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            K = function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            },
            tt = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            et = function t(e, n, i) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var r = Object.getPrototypeOf(e);
                    return null === r ? void 0 : t(r, n, i)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(i) : void 0
            },
            nt = function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            },
            it = function(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            },
            ot = function() {
                function t() {
                    if (K(this, t), this.__state = Q.apply(this, arguments), !1 === this.__state) throw new Error("Failed to interpret color arguments");
                    this.__state.a = this.__state.a || 1
                }
                return tt(t, [{
                    key: "toString",
                    value: function() {
                        return Y(this)
                    }
                }, {
                    key: "toHexString",
                    value: function() {
                        return Y(this, !0)
                    }
                }, {
                    key: "toOriginal",
                    value: function() {
                        return this.__state.conversion.write(this)
                    }
                }]), t
            }();

        function rt(t, e, n) {
            Object.defineProperty(t, e, {
                get: function() {
                    return "RGB" === this.__state.space ? this.__state[e] : (ot.recalculateRGB(this, e, n), this.__state[e])
                },
                set: function(t) {
                    "RGB" !== this.__state.space && (ot.recalculateRGB(this, e, n), this.__state.space = "RGB"), this.__state[e] = t
                }
            })
        }

        function at(t, e) {
            Object.defineProperty(t, e, {
                get: function() {
                    return "HSV" === this.__state.space ? this.__state[e] : (ot.recalculateHSV(this), this.__state[e])
                },
                set: function(t) {
                    "HSV" !== this.__state.space && (ot.recalculateHSV(this), this.__state.space = "HSV"), this.__state[e] = t
                }
            })
        }
        ot.recalculateRGB = function(t, e, n) {
            if ("HEX" === t.__state.space) t.__state[e] = $.component_from_hex(t.__state.hex, n);
            else {
                if ("HSV" !== t.__state.space) throw new Error("Corrupted color state");
                q.extend(t.__state, $.hsv_to_rgb(t.__state.h, t.__state.s, t.__state.v))
            }
        }, ot.recalculateHSV = function(t) {
            var e = $.rgb_to_hsv(t.r, t.g, t.b);
            q.extend(t.__state, {
                s: e.s,
                v: e.v
            }), q.isNaN(e.h) ? q.isUndefined(t.__state.h) && (t.__state.h = 0) : t.__state.h = e.h
        }, ot.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], rt(ot.prototype, "r", 2), rt(ot.prototype, "g", 1), rt(ot.prototype, "b", 0), at(ot.prototype, "h"), at(ot.prototype, "s"), at(ot.prototype, "v"), Object.defineProperty(ot.prototype, "a", {
            get: function() {
                return this.__state.a
            },
            set: function(t) {
                this.__state.a = t
            }
        }), Object.defineProperty(ot.prototype, "hex", {
            get: function() {
                return "HEX" !== !this.__state.space && (this.__state.hex = $.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
            },
            set: function(t) {
                this.__state.space = "HEX", this.__state.hex = t
            }
        });
        var st = function() {
                function t(e, n) {
                    K(this, t), this.initialValue = e[n], this.domElement = document.createElement("div"), this.object = e, this.property = n, this.__onChange = void 0, this.__onFinishChange = void 0
                }
                return tt(t, [{
                    key: "onChange",
                    value: function(t) {
                        return this.__onChange = t, this
                    }
                }, {
                    key: "onFinishChange",
                    value: function(t) {
                        return this.__onFinishChange = t, this
                    }
                }, {
                    key: "setValue",
                    value: function(t) {
                        return this.object[this.property] = t, this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this
                    }
                }, {
                    key: "getValue",
                    value: function() {
                        return this.object[this.property]
                    }
                }, {
                    key: "updateDisplay",
                    value: function() {
                        return this
                    }
                }, {
                    key: "isModified",
                    value: function() {
                        return this.initialValue !== this.getValue()
                    }
                }]), t
            }(),
            lt = {};
        q.each({
            HTMLEvents: ["change"],
            MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
            KeyboardEvents: ["keydown"]
        }, (function(t, e) {
            q.each(t, (function(t) {
                lt[t] = e
            }))
        }));
        var ct = /(\d+(\.\d+)?)px/;

        function ut(t) {
            if ("0" === t || q.isUndefined(t)) return 0;
            var e = t.match(ct);
            return q.isNull(e) ? 0 : parseFloat(e[1])
        }
        var dt = {
                makeSelectable: function(t, e) {
                    void 0 !== t && void 0 !== t.style && (t.onselectstart = e ? function() {
                        return !1
                    } : function() {}, t.style.MozUserSelect = e ? "auto" : "none", t.style.KhtmlUserSelect = e ? "auto" : "none", t.unselectable = e ? "on" : "off")
                },
                makeFullscreen: function(t, e, n) {
                    var i = n,
                        o = e;
                    q.isUndefined(o) && (o = !0), q.isUndefined(i) && (i = !0), t.style.position = "absolute", o && (t.style.left = 0, t.style.right = 0), i && (t.style.top = 0, t.style.bottom = 0)
                },
                fakeEvent: function(t, e, n, i) {
                    var o = n || {},
                        r = lt[e];
                    if (!r) throw new Error("Event type " + e + " not supported.");
                    var a = document.createEvent(r);
                    switch (r) {
                        case "MouseEvents":
                            var s = o.x || o.clientX || 0,
                                l = o.y || o.clientY || 0;
                            a.initMouseEvent(e, o.bubbles || !1, o.cancelable || !0, window, o.clickCount || 1, 0, 0, s, l, !1, !1, !1, !1, 0, null);
                            break;
                        case "KeyboardEvents":
                            var c = a.initKeyboardEvent || a.initKeyEvent;
                            q.defaults(o, {
                                cancelable: !0,
                                ctrlKey: !1,
                                altKey: !1,
                                shiftKey: !1,
                                metaKey: !1,
                                keyCode: void 0,
                                charCode: void 0
                            }), c(e, o.bubbles || !1, o.cancelable, window, o.ctrlKey, o.altKey, o.shiftKey, o.metaKey, o.keyCode, o.charCode);
                            break;
                        default:
                            a.initEvent(e, o.bubbles || !1, o.cancelable || !0)
                    }
                    q.defaults(a, i), t.dispatchEvent(a)
                },
                bind: function(t, e, n, i) {
                    var o = i || !1;
                    return t.addEventListener ? t.addEventListener(e, n, o) : t.attachEvent && t.attachEvent("on" + e, n), dt
                },
                unbind: function(t, e, n, i) {
                    var o = i || !1;
                    return t.removeEventListener ? t.removeEventListener(e, n, o) : t.detachEvent && t.detachEvent("on" + e, n), dt
                },
                addClass: function(t, e) {
                    if (void 0 === t.className) t.className = e;
                    else if (t.className !== e) {
                        var n = t.className.split(/ +/); - 1 === n.indexOf(e) && (n.push(e), t.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                    }
                    return dt
                },
                removeClass: function(t, e) {
                    if (e)
                        if (t.className === e) t.removeAttribute("class");
                        else {
                            var n = t.className.split(/ +/),
                                i = n.indexOf(e); - 1 !== i && (n.splice(i, 1), t.className = n.join(" "))
                        }
                    else t.className = void 0;
                    return dt
                },
                hasClass: function(t, e) {
                    return new RegExp("(?:^|\\s+)" + e + "(?:\\s+|$)").test(t.className) || !1
                },
                getWidth: function(t) {
                    var e = getComputedStyle(t);
                    return ut(e["border-left-width"]) + ut(e["border-right-width"]) + ut(e["padding-left"]) + ut(e["padding-right"]) + ut(e.width)
                },
                getHeight: function(t) {
                    var e = getComputedStyle(t);
                    return ut(e["border-top-width"]) + ut(e["border-bottom-width"]) + ut(e["padding-top"]) + ut(e["padding-bottom"]) + ut(e.height)
                },
                getOffset: function(t) {
                    var e = t,
                        n = {
                            left: 0,
                            top: 0
                        };
                    if (e.offsetParent)
                        do {
                            n.left += e.offsetLeft, n.top += e.offsetTop, e = e.offsetParent
                        } while (e);
                    return n
                },
                isActive: function(t) {
                    return t === document.activeElement && (t.type || t.href)
                }
            },
            ht = function(t) {
                function e(t, n) {
                    K(this, e);
                    var i = it(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)),
                        o = i;
                    return i.__prev = i.getValue(), i.__checkbox = document.createElement("input"), i.__checkbox.setAttribute("type", "checkbox"), dt.bind(i.__checkbox, "change", (function() {
                        o.setValue(!o.__prev)
                    }), !1), i.domElement.appendChild(i.__checkbox), i.updateDisplay(), i
                }
                return nt(e, t), tt(e, [{
                    key: "setValue",
                    value: function(t) {
                        var n = et(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, t);
                        return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), n
                    }
                }, {
                    key: "updateDisplay",
                    value: function() {
                        return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), et(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this)
                    }
                }]), e
            }(st),
            ft = function(t) {
                function e(t, n, i) {
                    K(this, e);
                    var o = it(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)),
                        r = i,
                        a = o;
                    if (o.__select = document.createElement("select"), q.isArray(r)) {
                        var s = {};
                        q.each(r, (function(t) {
                            s[t] = t
                        })), r = s
                    }
                    return q.each(r, (function(t, e) {
                        var n = document.createElement("option");
                        n.innerHTML = e, n.setAttribute("value", t), a.__select.appendChild(n)
                    })), o.updateDisplay(), dt.bind(o.__select, "change", (function() {
                        var t = this.options[this.selectedIndex].value;
                        a.setValue(t)
                    })), o.domElement.appendChild(o.__select), o
                }
                return nt(e, t), tt(e, [{
                    key: "setValue",
                    value: function(t) {
                        var n = et(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, t);
                        return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), n
                    }
                }, {
                    key: "updateDisplay",
                    value: function() {
                        return dt.isActive(this.__select) ? this : (this.__select.value = this.getValue(), et(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this))
                    }
                }]), e
            }(st),
            pt = function(t) {
                function e(t, n) {
                    K(this, e);
                    var i = it(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)),
                        o = i;

                    function r() {
                        o.setValue(o.__input.value)
                    }
                    return i.__input = document.createElement("input"), i.__input.setAttribute("type", "text"), dt.bind(i.__input, "keyup", r), dt.bind(i.__input, "change", r), dt.bind(i.__input, "blur", (function() {
                        o.__onFinishChange && o.__onFinishChange.call(o, o.getValue())
                    })), dt.bind(i.__input, "keydown", (function(t) {
                        13 === t.keyCode && this.blur()
                    })), i.updateDisplay(), i.domElement.appendChild(i.__input), i
                }
                return nt(e, t), tt(e, [{
                    key: "updateDisplay",
                    value: function() {
                        return dt.isActive(this.__input) || (this.__input.value = this.getValue()), et(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this)
                    }
                }]), e
            }(st);

        function mt(t) {
            var e = t.toString();
            return e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0
        }
        var gt = function(t) {
            function e(t, n, i) {
                K(this, e);
                var o = it(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)),
                    r = i || {};
                return o.__min = r.min, o.__max = r.max, o.__step = r.step, q.isUndefined(o.__step) ? 0 === o.initialValue ? o.__impliedStep = 1 : o.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(o.initialValue)) / Math.LN10)) / 10 : o.__impliedStep = o.__step, o.__precision = mt(o.__impliedStep), o
            }
            return nt(e, t), tt(e, [{
                key: "setValue",
                value: function(t) {
                    var n = t;
                    return void 0 !== this.__min && n < this.__min ? n = this.__min : void 0 !== this.__max && n > this.__max && (n = this.__max), void 0 !== this.__step && n % this.__step != 0 && (n = Math.round(n / this.__step) * this.__step), et(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, n)
                }
            }, {
                key: "min",
                value: function(t) {
                    return this.__min = t, this
                }
            }, {
                key: "max",
                value: function(t) {
                    return this.__max = t, this
                }
            }, {
                key: "step",
                value: function(t) {
                    return this.__step = t, this.__impliedStep = t, this.__precision = mt(t), this
                }
            }]), e
        }(st);
        var vt = function(t) {
            function e(t, n, i) {
                K(this, e);
                var o = it(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, i));
                o.__truncationSuspended = !1;
                var r = o,
                    a = void 0;

                function s() {
                    r.__onFinishChange && r.__onFinishChange.call(r, r.getValue())
                }

                function l(t) {
                    var e = a - t.clientY;
                    r.setValue(r.getValue() + e * r.__impliedStep), a = t.clientY
                }

                function c() {
                    dt.unbind(window, "mousemove", l), dt.unbind(window, "mouseup", c), s()
                }
                return o.__input = document.createElement("input"), o.__input.setAttribute("type", "text"), dt.bind(o.__input, "change", (function() {
                    var t = parseFloat(r.__input.value);
                    q.isNaN(t) || r.setValue(t)
                })), dt.bind(o.__input, "blur", (function() {
                    s()
                })), dt.bind(o.__input, "mousedown", (function(t) {
                    dt.bind(window, "mousemove", l), dt.bind(window, "mouseup", c), a = t.clientY
                })), dt.bind(o.__input, "keydown", (function(t) {
                    13 === t.keyCode && (r.__truncationSuspended = !0, this.blur(), r.__truncationSuspended = !1, s())
                })), o.updateDisplay(), o.domElement.appendChild(o.__input), o
            }
            return nt(e, t), tt(e, [{
                key: "updateDisplay",
                value: function() {
                    var t, n, i;
                    return this.__input.value = this.__truncationSuspended ? this.getValue() : (t = this.getValue(), n = this.__precision, i = Math.pow(10, n), Math.round(t * i) / i), et(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this)
                }
            }]), e
        }(gt);

        function yt(t, e, n, i, o) {
            return i + (t - e) / (n - e) * (o - i)
        }
        var bt = function(t) {
                function e(t, n, i, o, r) {
                    K(this, e);
                    var a = it(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, {
                            min: i,
                            max: o,
                            step: r
                        })),
                        s = a;

                    function l(t) {
                        t.preventDefault();
                        var e = s.__background.getBoundingClientRect();
                        return s.setValue(yt(t.clientX, e.left, e.right, s.__min, s.__max)), !1
                    }

                    function c() {
                        dt.unbind(window, "mousemove", l), dt.unbind(window, "mouseup", c), s.__onFinishChange && s.__onFinishChange.call(s, s.getValue())
                    }

                    function u(t) {
                        var e = t.touches[0].clientX,
                            n = s.__background.getBoundingClientRect();
                        s.setValue(yt(e, n.left, n.right, s.__min, s.__max))
                    }

                    function d() {
                        dt.unbind(window, "touchmove", u), dt.unbind(window, "touchend", d), s.__onFinishChange && s.__onFinishChange.call(s, s.getValue())
                    }
                    return a.__background = document.createElement("div"), a.__foreground = document.createElement("div"), dt.bind(a.__background, "mousedown", (function(t) {
                        document.activeElement.blur(), dt.bind(window, "mousemove", l), dt.bind(window, "mouseup", c), l(t)
                    })), dt.bind(a.__background, "touchstart", (function(t) {
                        if (1 !== t.touches.length) return;
                        dt.bind(window, "touchmove", u), dt.bind(window, "touchend", d), u(t)
                    })), dt.addClass(a.__background, "slider"), dt.addClass(a.__foreground, "slider-fg"), a.updateDisplay(), a.__background.appendChild(a.__foreground), a.domElement.appendChild(a.__background), a
                }
                return nt(e, t), tt(e, [{
                    key: "updateDisplay",
                    value: function() {
                        var t = (this.getValue() - this.__min) / (this.__max - this.__min);
                        return this.__foreground.style.width = 100 * t + "%", et(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this)
                    }
                }]), e
            }(gt),
            wt = function(t) {
                function e(t, n, i) {
                    K(this, e);
                    var o = it(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)),
                        r = o;
                    return o.__button = document.createElement("div"), o.__button.innerHTML = void 0 === i ? "Fire" : i, dt.bind(o.__button, "click", (function(t) {
                        return t.preventDefault(), r.fire(), !1
                    })), dt.addClass(o.__button, "button"), o.domElement.appendChild(o.__button), o
                }
                return nt(e, t), tt(e, [{
                    key: "fire",
                    value: function() {
                        this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
                    }
                }]), e
            }(st),
            _t = function(t) {
                function e(t, n) {
                    K(this, e);
                    var i = it(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    i.__color = new ot(i.getValue()), i.__temp = new ot(0);
                    var o = i;
                    i.domElement = document.createElement("div"), dt.makeSelectable(i.domElement, !1), i.__selector = document.createElement("div"), i.__selector.className = "selector", i.__saturation_field = document.createElement("div"), i.__saturation_field.className = "saturation-field", i.__field_knob = document.createElement("div"), i.__field_knob.className = "field-knob", i.__field_knob_border = "2px solid ", i.__hue_knob = document.createElement("div"), i.__hue_knob.className = "hue-knob", i.__hue_field = document.createElement("div"), i.__hue_field.className = "hue-field", i.__input = document.createElement("input"), i.__input.type = "text", i.__input_textShadow = "0 1px 1px ", dt.bind(i.__input, "keydown", (function(t) {
                        13 === t.keyCode && d.call(this)
                    })), dt.bind(i.__input, "blur", d), dt.bind(i.__selector, "mousedown", (function() {
                        dt.addClass(this, "drag").bind(window, "mouseup", (function() {
                            dt.removeClass(o.__selector, "drag")
                        }))
                    })), dt.bind(i.__selector, "touchstart", (function() {
                        dt.addClass(this, "drag").bind(window, "touchend", (function() {
                            dt.removeClass(o.__selector, "drag")
                        }))
                    }));
                    var r, a = document.createElement("div");

                    function s(t) {
                        f(t), dt.bind(window, "mousemove", f), dt.bind(window, "touchmove", f), dt.bind(window, "mouseup", c), dt.bind(window, "touchend", c)
                    }

                    function l(t) {
                        p(t), dt.bind(window, "mousemove", p), dt.bind(window, "touchmove", p), dt.bind(window, "mouseup", u), dt.bind(window, "touchend", u)
                    }

                    function c() {
                        dt.unbind(window, "mousemove", f), dt.unbind(window, "touchmove", f), dt.unbind(window, "mouseup", c), dt.unbind(window, "touchend", c), h()
                    }

                    function u() {
                        dt.unbind(window, "mousemove", p), dt.unbind(window, "touchmove", p), dt.unbind(window, "mouseup", u), dt.unbind(window, "touchend", u), h()
                    }

                    function d() {
                        var t = Q(this.value);
                        !1 !== t ? (o.__color.__state = t, o.setValue(o.__color.toOriginal())) : this.value = o.__color.toString()
                    }

                    function h() {
                        o.__onFinishChange && o.__onFinishChange.call(o, o.__color.toOriginal())
                    }

                    function f(t) {
                        -1 === t.type.indexOf("touch") && t.preventDefault();
                        var e = o.__saturation_field.getBoundingClientRect(),
                            n = t.touches && t.touches[0] || t,
                            i = n.clientX,
                            r = n.clientY,
                            a = (i - e.left) / (e.right - e.left),
                            s = 1 - (r - e.top) / (e.bottom - e.top);
                        return s > 1 ? s = 1 : s < 0 && (s = 0), a > 1 ? a = 1 : a < 0 && (a = 0), o.__color.v = s, o.__color.s = a, o.setValue(o.__color.toOriginal()), !1
                    }

                    function p(t) {
                        -1 === t.type.indexOf("touch") && t.preventDefault();
                        var e = o.__hue_field.getBoundingClientRect(),
                            n = 1 - ((t.touches && t.touches[0] || t).clientY - e.top) / (e.bottom - e.top);
                        return n > 1 ? n = 1 : n < 0 && (n = 0), o.__color.h = 360 * n, o.setValue(o.__color.toOriginal()), !1
                    }
                    return q.extend(i.__selector.style, {
                        width: "122px",
                        height: "102px",
                        padding: "3px",
                        backgroundColor: "#222",
                        boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
                    }), q.extend(i.__field_knob.style, {
                        position: "absolute",
                        width: "12px",
                        height: "12px",
                        border: i.__field_knob_border + (i.__color.v < .5 ? "#fff" : "#000"),
                        boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                        borderRadius: "12px",
                        zIndex: 1
                    }), q.extend(i.__hue_knob.style, {
                        position: "absolute",
                        width: "15px",
                        height: "2px",
                        borderRight: "4px solid #fff",
                        zIndex: 1
                    }), q.extend(i.__saturation_field.style, {
                        width: "100px",
                        height: "100px",
                        border: "1px solid #555",
                        marginRight: "3px",
                        display: "inline-block",
                        cursor: "pointer"
                    }), q.extend(a.style, {
                        width: "100%",
                        height: "100%",
                        background: "none"
                    }), kt(a, "top", "rgba(0,0,0,0)", "#000"), q.extend(i.__hue_field.style, {
                        width: "15px",
                        height: "100px",
                        border: "1px solid #555",
                        cursor: "ns-resize",
                        position: "absolute",
                        top: "3px",
                        right: "3px"
                    }), (r = i.__hue_field).style.background = "", r.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", r.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", r.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", r.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", r.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", q.extend(i.__input.style, {
                        outline: "none",
                        textAlign: "center",
                        color: "#fff",
                        border: 0,
                        fontWeight: "bold",
                        textShadow: i.__input_textShadow + "rgba(0,0,0,0.7)"
                    }), dt.bind(i.__saturation_field, "mousedown", s), dt.bind(i.__saturation_field, "touchstart", s), dt.bind(i.__field_knob, "mousedown", s), dt.bind(i.__field_knob, "touchstart", s), dt.bind(i.__hue_field, "mousedown", l), dt.bind(i.__hue_field, "touchstart", l), i.__saturation_field.appendChild(a), i.__selector.appendChild(i.__field_knob), i.__selector.appendChild(i.__saturation_field), i.__selector.appendChild(i.__hue_field), i.__hue_field.appendChild(i.__hue_knob), i.domElement.appendChild(i.__input), i.domElement.appendChild(i.__selector), i.updateDisplay(), i
                }
                return nt(e, t), tt(e, [{
                    key: "updateDisplay",
                    value: function() {
                        var t = Q(this.getValue());
                        if (!1 !== t) {
                            var e = !1;
                            q.each(ot.COMPONENTS, (function(n) {
                                if (!q.isUndefined(t[n]) && !q.isUndefined(this.__color.__state[n]) && t[n] !== this.__color.__state[n]) return e = !0, {}
                            }), this), e && q.extend(this.__color.__state, t)
                        }
                        q.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
                        var n = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                            i = 255 - n;
                        q.extend(this.__field_knob.style, {
                            marginLeft: 100 * this.__color.s - 7 + "px",
                            marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                            backgroundColor: this.__temp.toHexString(),
                            border: this.__field_knob_border + "rgb(" + n + "," + n + "," + n + ")"
                        }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, kt(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), q.extend(this.__input.style, {
                            backgroundColor: this.__color.toHexString(),
                            color: "rgb(" + n + "," + n + "," + n + ")",
                            textShadow: this.__input_textShadow + "rgba(" + i + "," + i + "," + i + ",.7)"
                        })
                    }
                }]), e
            }(st),
            xt = ["-moz-", "-o-", "-webkit-", "-ms-", ""];

        function kt(t, e, n, i) {
            t.style.background = "", q.each(xt, (function(o) {
                t.style.cssText += "background: " + o + "linear-gradient(" + e + ", " + n + " 0%, " + i + " 100%); "
            }))
        }
        var Et = function(t, e) {
                var n = e || document,
                    i = document.createElement("style");
                i.type = "text/css", i.innerHTML = t;
                var o = n.getElementsByTagName("head")[0];
                try {
                    o.appendChild(i)
                } catch (t) {}
            },
            At = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>',
            Ot = function(t, e) {
                var n = t[e];
                return q.isArray(arguments[2]) || q.isObject(arguments[2]) ? new ft(t, e, arguments[2]) : q.isNumber(n) ? q.isNumber(arguments[2]) && q.isNumber(arguments[3]) ? q.isNumber(arguments[4]) ? new bt(t, e, arguments[2], arguments[3], arguments[4]) : new bt(t, e, arguments[2], arguments[3]) : q.isNumber(arguments[4]) ? new vt(t, e, {
                    min: arguments[2],
                    max: arguments[3],
                    step: arguments[4]
                }) : new vt(t, e, {
                    min: arguments[2],
                    max: arguments[3]
                }) : q.isString(n) ? new pt(t, e) : q.isFunction(n) ? new wt(t, e, "") : q.isBoolean(n) ? new ht(t, e) : null
            };
        var St = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                setTimeout(t, 1e3 / 60)
            },
            Ct = function() {
                function t() {
                    K(this, t), this.backgroundElement = document.createElement("div"), q.extend(this.backgroundElement.style, {
                        backgroundColor: "rgba(0,0,0,0.8)",
                        top: 0,
                        left: 0,
                        display: "none",
                        zIndex: "1000",
                        opacity: 0,
                        WebkitTransition: "opacity 0.2s linear",
                        transition: "opacity 0.2s linear"
                    }), dt.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), q.extend(this.domElement.style, {
                        position: "fixed",
                        display: "none",
                        zIndex: "1001",
                        opacity: 0,
                        WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
                        transition: "transform 0.2s ease-out, opacity 0.2s linear"
                    }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
                    var e = this;
                    dt.bind(this.backgroundElement, "click", (function() {
                        e.hide()
                    }))
                }
                return tt(t, [{
                    key: "show",
                    value: function() {
                        var t = this;
                        this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), q.defer((function() {
                            t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)"
                        }))
                    }
                }, {
                    key: "hide",
                    value: function() {
                        var t = this,
                            e = function e() {
                                t.domElement.style.display = "none", t.backgroundElement.style.display = "none", dt.unbind(t.domElement, "webkitTransitionEnd", e), dt.unbind(t.domElement, "transitionend", e), dt.unbind(t.domElement, "oTransitionEnd", e)
                            };
                        dt.bind(this.domElement, "webkitTransitionEnd", e), dt.bind(this.domElement, "transitionend", e), dt.bind(this.domElement, "oTransitionEnd", e), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
                    }
                }, {
                    key: "layout",
                    value: function() {
                        this.domElement.style.left = window.innerWidth / 2 - dt.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - dt.getHeight(this.domElement) / 2 + "px"
                    }
                }]), t
            }();
        Et(function(t) {
            if (t && "undefined" != typeof window) {
                var e = document.createElement("style");
                return e.setAttribute("type", "text/css"), e.innerHTML = t, document.head.appendChild(e), t
            }
        }(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n"));
        var jt = "Default",
            Lt = function() {
                try {
                    return !!window.localStorage
                } catch (t) {
                    return !1
                }
            }(),
            Tt = void 0,
            Pt = !0,
            Mt = void 0,
            Bt = !1,
            It = [],
            Rt = function t(e) {
                var n = this,
                    i = e || {};
                this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), dt.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], i = q.defaults(i, {
                    closeOnTop: !1,
                    autoPlace: !0,
                    width: t.DEFAULT_WIDTH
                }), i = q.defaults(i, {
                    resizable: i.autoPlace,
                    hideable: i.autoPlace
                }), q.isUndefined(i.load) ? i.load = {
                    preset: jt
                } : i.preset && (i.load.preset = i.preset), q.isUndefined(i.parent) && i.hideable && It.push(this), i.resizable = q.isUndefined(i.parent) && i.resizable, i.autoPlace && q.isUndefined(i.scrollable) && (i.scrollable = !0);
                var o, r = Lt && "true" === localStorage.getItem(Yt(this, "isLocal")),
                    a = void 0,
                    s = void 0;
                if (Object.defineProperties(this, {
                        parent: {
                            get: function() {
                                return i.parent
                            }
                        },
                        scrollable: {
                            get: function() {
                                return i.scrollable
                            }
                        },
                        autoPlace: {
                            get: function() {
                                return i.autoPlace
                            }
                        },
                        closeOnTop: {
                            get: function() {
                                return i.closeOnTop
                            }
                        },
                        preset: {
                            get: function() {
                                return n.parent ? n.getRoot().preset : i.load.preset
                            },
                            set: function(t) {
                                n.parent ? n.getRoot().preset = t : i.load.preset = t,
                                    function(t) {
                                        for (var e = 0; e < t.__preset_select.length; e++) t.__preset_select[e].value === t.preset && (t.__preset_select.selectedIndex = e)
                                    }(this), n.revert()
                            }
                        },
                        width: {
                            get: function() {
                                return i.width
                            },
                            set: function(t) {
                                i.width = t, Wt(n, t)
                            }
                        },
                        name: {
                            get: function() {
                                return i.name
                            },
                            set: function(t) {
                                i.name = t, s && (s.innerHTML = i.name)
                            }
                        },
                        closed: {
                            get: function() {
                                return i.closed
                            },
                            set: function(e) {
                                i.closed = e, i.closed ? dt.addClass(n.__ul, t.CLASS_CLOSED) : dt.removeClass(n.__ul, t.CLASS_CLOSED), this.onResize(), n.__closeButton && (n.__closeButton.innerHTML = e ? t.TEXT_OPEN : t.TEXT_CLOSED)
                            }
                        },
                        load: {
                            get: function() {
                                return i.load
                            }
                        },
                        useLocalStorage: {
                            get: function() {
                                return r
                            },
                            set: function(t) {
                                Lt && (r = t, t ? dt.bind(window, "unload", a) : dt.unbind(window, "unload", a), localStorage.setItem(Yt(n, "isLocal"), t))
                            }
                        }
                    }), q.isUndefined(i.parent)) {
                    if (this.closed = i.closed || !1, dt.addClass(this.domElement, t.CLASS_MAIN), dt.makeSelectable(this.domElement, !1), Lt && r) {
                        n.useLocalStorage = !0;
                        var l = localStorage.getItem(Yt(this, "gui"));
                        l && (i.load = JSON.parse(l))
                    }
                    this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = t.TEXT_CLOSED, dt.addClass(this.__closeButton, t.CLASS_CLOSE_BUTTON), i.closeOnTop ? (dt.addClass(this.__closeButton, t.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (dt.addClass(this.__closeButton, t.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), dt.bind(this.__closeButton, "click", (function() {
                        n.closed = !n.closed
                    }))
                } else {
                    void 0 === i.closed && (i.closed = !0);
                    var c = document.createTextNode(i.name);
                    dt.addClass(c, "controller-name"), s = Dt(n, c);
                    dt.addClass(this.__ul, t.CLASS_CLOSED), dt.addClass(s, "title"), dt.bind(s, "click", (function(t) {
                        return t.preventDefault(), n.closed = !n.closed, !1
                    })), i.closed || (this.closed = !1)
                }
                i.autoPlace && (q.isUndefined(i.parent) && (Pt && (Mt = document.createElement("div"), dt.addClass(Mt, "dg"), dt.addClass(Mt, t.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(Mt), Pt = !1), Mt.appendChild(this.domElement), dt.addClass(this.domElement, t.CLASS_AUTO_PLACE)), this.parent || Wt(n, i.width)), this.__resizeHandler = function() {
                    n.onResizeDebounced()
                }, dt.bind(window, "resize", this.__resizeHandler), dt.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), dt.bind(this.__ul, "transitionend", this.__resizeHandler), dt.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), i.resizable && Vt(this), a = function() {
                    Lt && "true" === localStorage.getItem(Yt(n, "isLocal")) && localStorage.setItem(Yt(n, "gui"), JSON.stringify(n.getSaveObject()))
                }, this.saveToLocalStorageIfPossible = a, i.parent || ((o = n.getRoot()).width += 1, q.defer((function() {
                    o.width -= 1
                })))
            };

        function Dt(t, e, n) {
            var i = document.createElement("li");
            return e && i.appendChild(e), n ? t.__ul.insertBefore(i, n) : t.__ul.appendChild(i), t.onResize(), i
        }

        function Ft(t) {
            dt.unbind(window, "resize", t.__resizeHandler), t.saveToLocalStorageIfPossible && dt.unbind(window, "unload", t.saveToLocalStorageIfPossible)
        }

        function Nt(t, e) {
            var n = t.__preset_select[t.__preset_select.selectedIndex];
            n.innerHTML = e ? n.value + "*" : n.value
        }

        function Ht(t, e) {
            var n = t.getRoot(),
                i = n.__rememberedObjects.indexOf(e.object);
            if (-1 !== i) {
                var o = n.__rememberedObjectIndecesToControllers[i];
                if (void 0 === o && (o = {}, n.__rememberedObjectIndecesToControllers[i] = o), o[e.property] = e, n.load && n.load.remembered) {
                    var r = n.load.remembered,
                        a = void 0;
                    if (r[t.preset]) a = r[t.preset];
                    else {
                        if (!r[jt]) return;
                        a = r[jt]
                    }
                    if (a[i] && void 0 !== a[i][e.property]) {
                        var s = a[i][e.property];
                        e.initialValue = s, e.setValue(s)
                    }
                }
            }
        }

        function zt(t, e, n, i) {
            if (void 0 === e[n]) throw new Error('Object "' + e + '" has no property "' + n + '"');
            var o = void 0;
            if (i.color) o = new _t(e, n);
            else {
                var r = [e, n].concat(i.factoryArgs);
                o = Ot.apply(t, r)
            }
            i.before instanceof st && (i.before = i.before.__li), Ht(t, o), dt.addClass(o.domElement, "c");
            var a = document.createElement("span");
            dt.addClass(a, "property-name"), a.innerHTML = o.property;
            var s = document.createElement("div");
            s.appendChild(a), s.appendChild(o.domElement);
            var l = Dt(t, s, i.before);
            return dt.addClass(l, Rt.CLASS_CONTROLLER_ROW), o instanceof _t ? dt.addClass(l, "color") : dt.addClass(l, J(o.getValue())),
                function(t, e, n) {
                    if (n.__li = e, n.__gui = t, q.extend(n, {
                            options: function(e) {
                                if (arguments.length > 1) {
                                    var i = n.__li.nextElementSibling;
                                    return n.remove(), zt(t, n.object, n.property, {
                                        before: i,
                                        factoryArgs: [q.toArray(arguments)]
                                    })
                                }
                                if (q.isArray(e) || q.isObject(e)) {
                                    var o = n.__li.nextElementSibling;
                                    return n.remove(), zt(t, n.object, n.property, {
                                        before: o,
                                        factoryArgs: [e]
                                    })
                                }
                            },
                            name: function(t) {
                                return n.__li.firstElementChild.firstElementChild.innerHTML = t, n
                            },
                            listen: function() {
                                return n.__gui.listen(n), n
                            },
                            remove: function() {
                                return n.__gui.remove(n), n
                            }
                        }), n instanceof bt) {
                        var i = new vt(n.object, n.property, {
                            min: n.__min,
                            max: n.__max,
                            step: n.__step
                        });
                        q.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], (function(t) {
                            var e = n[t],
                                o = i[t];
                            n[t] = i[t] = function() {
                                var t = Array.prototype.slice.call(arguments);
                                return o.apply(i, t), e.apply(n, t)
                            }
                        })), dt.addClass(e, "has-slider"), n.domElement.insertBefore(i.domElement, n.domElement.firstElementChild)
                    } else if (n instanceof vt) {
                        var o = function(e) {
                            if (q.isNumber(n.__min) && q.isNumber(n.__max)) {
                                var i = n.__li.firstElementChild.firstElementChild.innerHTML,
                                    o = n.__gui.__listening.indexOf(n) > -1;
                                n.remove();
                                var r = zt(t, n.object, n.property, {
                                    before: n.__li.nextElementSibling,
                                    factoryArgs: [n.__min, n.__max, n.__step]
                                });
                                return r.name(i), o && r.listen(), r
                            }
                            return e
                        };
                        n.min = q.compose(o, n.min), n.max = q.compose(o, n.max)
                    } else n instanceof ht ? (dt.bind(e, "click", (function() {
                        dt.fakeEvent(n.__checkbox, "click")
                    })), dt.bind(n.__checkbox, "click", (function(t) {
                        t.stopPropagation()
                    }))) : n instanceof wt ? (dt.bind(e, "click", (function() {
                        dt.fakeEvent(n.__button, "click")
                    })), dt.bind(e, "mouseover", (function() {
                        dt.addClass(n.__button, "hover")
                    })), dt.bind(e, "mouseout", (function() {
                        dt.removeClass(n.__button, "hover")
                    }))) : n instanceof _t && (dt.addClass(e, "color"), n.updateDisplay = q.compose((function(t) {
                        return e.style.borderLeftColor = n.__color.toString(), t
                    }), n.updateDisplay), n.updateDisplay());
                    n.setValue = q.compose((function(e) {
                        return t.getRoot().__preset_select && n.isModified() && Nt(t.getRoot(), !0), e
                    }), n.setValue)
                }(t, l, o), t.__controllers.push(o), o
        }

        function Yt(t, e) {
            return document.location.href + "." + e
        }

        function Gt(t, e, n) {
            var i = document.createElement("option");
            i.innerHTML = e, i.value = e, t.__preset_select.appendChild(i), n && (t.__preset_select.selectedIndex = t.__preset_select.length - 1)
        }

        function Ut(t, e) {
            e.style.display = t.useLocalStorage ? "block" : "none"
        }

        function qt(t) {
            var e = t.__save_row = document.createElement("li");
            dt.addClass(t.domElement, "has-save"), t.__ul.insertBefore(e, t.__ul.firstChild), dt.addClass(e, "save-row");
            var n = document.createElement("span");
            n.innerHTML = "&nbsp;", dt.addClass(n, "button gears");
            var i = document.createElement("span");
            i.innerHTML = "Save", dt.addClass(i, "button"), dt.addClass(i, "save");
            var o = document.createElement("span");
            o.innerHTML = "New", dt.addClass(o, "button"), dt.addClass(o, "save-as");
            var r = document.createElement("span");
            r.innerHTML = "Revert", dt.addClass(r, "button"), dt.addClass(r, "revert");
            var a = t.__preset_select = document.createElement("select");
            if (t.load && t.load.remembered ? q.each(t.load.remembered, (function(e, n) {
                    Gt(t, n, n === t.preset)
                })) : Gt(t, jt, !1), dt.bind(a, "change", (function() {
                    for (var e = 0; e < t.__preset_select.length; e++) t.__preset_select[e].innerHTML = t.__preset_select[e].value;
                    t.preset = this.value
                })), e.appendChild(a), e.appendChild(n), e.appendChild(i), e.appendChild(o), e.appendChild(r), Lt) {
                var s = document.getElementById("dg-local-explain"),
                    l = document.getElementById("dg-local-storage");
                document.getElementById("dg-save-locally").style.display = "block", "true" === localStorage.getItem(Yt(0, "isLocal")) && l.setAttribute("checked", "checked"), Ut(t, s), dt.bind(l, "change", (function() {
                    t.useLocalStorage = !t.useLocalStorage, Ut(t, s)
                }))
            }
            var c = document.getElementById("dg-new-constructor");
            dt.bind(c, "keydown", (function(t) {
                !t.metaKey || 67 !== t.which && 67 !== t.keyCode || Tt.hide()
            })), dt.bind(n, "click", (function() {
                c.innerHTML = JSON.stringify(t.getSaveObject(), void 0, 2), Tt.show(), c.focus(), c.select()
            })), dt.bind(i, "click", (function() {
                t.save()
            })), dt.bind(o, "click", (function() {
                var e = prompt("Enter a new preset name.");
                e && t.saveAs(e)
            })), dt.bind(r, "click", (function() {
                t.revert()
            }))
        }

        function Vt(t) {
            var e = void 0;

            function n(n) {
                return n.preventDefault(), t.width += e - n.clientX, t.onResize(), e = n.clientX, !1
            }

            function i() {
                dt.removeClass(t.__closeButton, Rt.CLASS_DRAG), dt.unbind(window, "mousemove", n), dt.unbind(window, "mouseup", i)
            }

            function o(o) {
                return o.preventDefault(), e = o.clientX, dt.addClass(t.__closeButton, Rt.CLASS_DRAG), dt.bind(window, "mousemove", n), dt.bind(window, "mouseup", i), !1
            }
            t.__resize_handle = document.createElement("div"), q.extend(t.__resize_handle.style, {
                width: "6px",
                marginLeft: "-3px",
                height: "200px",
                cursor: "ew-resize",
                position: "absolute"
            }), dt.bind(t.__resize_handle, "mousedown", o), dt.bind(t.__closeButton, "mousedown", o), t.domElement.insertBefore(t.__resize_handle, t.domElement.firstElementChild)
        }

        function Wt(t, e) {
            t.domElement.style.width = e + "px", t.__save_row && t.autoPlace && (t.__save_row.style.width = e + "px"), t.__closeButton && (t.__closeButton.style.width = e + "px")
        }

        function Xt(t, e) {
            var n = {};
            return q.each(t.__rememberedObjects, (function(i, o) {
                var r = {},
                    a = t.__rememberedObjectIndecesToControllers[o];
                q.each(a, (function(t, n) {
                    r[n] = e ? t.initialValue : t.getValue()
                })), n[o] = r
            })), n
        }
        Rt.toggleHide = function() {
            Bt = !Bt, q.each(It, (function(t) {
                t.domElement.style.display = Bt ? "none" : ""
            }))
        }, Rt.CLASS_AUTO_PLACE = "a", Rt.CLASS_AUTO_PLACE_CONTAINER = "ac", Rt.CLASS_MAIN = "main", Rt.CLASS_CONTROLLER_ROW = "cr", Rt.CLASS_TOO_TALL = "taller-than-window", Rt.CLASS_CLOSED = "closed", Rt.CLASS_CLOSE_BUTTON = "close-button", Rt.CLASS_CLOSE_TOP = "close-top", Rt.CLASS_CLOSE_BOTTOM = "close-bottom", Rt.CLASS_DRAG = "drag", Rt.DEFAULT_WIDTH = 245, Rt.TEXT_CLOSED = "Close Controls", Rt.TEXT_OPEN = "Open Controls", Rt._keydownHandler = function(t) {
            "text" === document.activeElement.type || 72 !== t.which && 72 !== t.keyCode || Rt.toggleHide()
        }, dt.bind(window, "keydown", Rt._keydownHandler, !1), q.extend(Rt.prototype, {
            add: function(t, e) {
                return zt(this, t, e, {
                    factoryArgs: Array.prototype.slice.call(arguments, 2)
                })
            },
            addColor: function(t, e) {
                return zt(this, t, e, {
                    color: !0
                })
            },
            remove: function(t) {
                this.__ul.removeChild(t.__li), this.__controllers.splice(this.__controllers.indexOf(t), 1);
                var e = this;
                q.defer((function() {
                    e.onResize()
                }))
            },
            destroy: function() {
                if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
                this.autoPlace && Mt.removeChild(this.domElement);
                var t = this;
                q.each(this.__folders, (function(e) {
                    t.removeFolder(e)
                })), dt.unbind(window, "keydown", Rt._keydownHandler, !1), Ft(this)
            },
            addFolder: function(t) {
                if (void 0 !== this.__folders[t]) throw new Error('You already have a folder in this GUI by the name "' + t + '"');
                var e = {
                    name: t,
                    parent: this
                };
                e.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[t] && (e.closed = this.load.folders[t].closed, e.load = this.load.folders[t]);
                var n = new Rt(e);
                this.__folders[t] = n;
                var i = Dt(this, n.domElement);
                return dt.addClass(i, "folder"), n
            },
            removeFolder: function(t) {
                this.__ul.removeChild(t.domElement.parentElement), delete this.__folders[t.name], this.load && this.load.folders && this.load.folders[t.name] && delete this.load.folders[t.name], Ft(t);
                var e = this;
                q.each(t.__folders, (function(e) {
                    t.removeFolder(e)
                })), q.defer((function() {
                    e.onResize()
                }))
            },
            open: function() {
                this.closed = !1
            },
            close: function() {
                this.closed = !0
            },
            hide: function() {
                this.domElement.style.display = "none"
            },
            show: function() {
                this.domElement.style.display = ""
            },
            onResize: function() {
                var t = this.getRoot();
                if (t.scrollable) {
                    var e = dt.getOffset(t.__ul).top,
                        n = 0;
                    q.each(t.__ul.childNodes, (function(e) {
                        t.autoPlace && e === t.__save_row || (n += dt.getHeight(e))
                    })), window.innerHeight - e - 20 < n ? (dt.addClass(t.domElement, Rt.CLASS_TOO_TALL), t.__ul.style.height = window.innerHeight - e - 20 + "px") : (dt.removeClass(t.domElement, Rt.CLASS_TOO_TALL), t.__ul.style.height = "auto")
                }
                t.__resize_handle && q.defer((function() {
                    t.__resize_handle.style.height = t.__ul.offsetHeight + "px"
                })), t.__closeButton && (t.__closeButton.style.width = t.width + "px")
            },
            onResizeDebounced: q.debounce((function() {
                this.onResize()
            }), 50),
            remember: function() {
                if (q.isUndefined(Tt) && ((Tt = new Ct).domElement.innerHTML = At), this.parent) throw new Error("You can only call remember on a top level GUI.");
                var t = this;
                q.each(Array.prototype.slice.call(arguments), (function(e) {
                    0 === t.__rememberedObjects.length && qt(t), -1 === t.__rememberedObjects.indexOf(e) && t.__rememberedObjects.push(e)
                })), this.autoPlace && Wt(this, this.width)
            },
            getRoot: function() {
                for (var t = this; t.parent;) t = t.parent;
                return t
            },
            getSaveObject: function() {
                var t = this.load;
                return t.closed = this.closed, this.__rememberedObjects.length > 0 && (t.preset = this.preset, t.remembered || (t.remembered = {}), t.remembered[this.preset] = Xt(this)), t.folders = {}, q.each(this.__folders, (function(e, n) {
                    t.folders[n] = e.getSaveObject()
                })), t
            },
            save: function() {
                this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = Xt(this), Nt(this, !1), this.saveToLocalStorageIfPossible()
            },
            saveAs: function(t) {
                this.load.remembered || (this.load.remembered = {}, this.load.remembered[jt] = Xt(this, !0)), this.load.remembered[t] = Xt(this), this.preset = t, Gt(this, t, !0), this.saveToLocalStorageIfPossible()
            },
            revert: function(t) {
                q.each(this.__controllers, (function(e) {
                    this.getRoot().load.remembered ? Ht(t || this.getRoot(), e) : e.setValue(e.initialValue), e.__onFinishChange && e.__onFinishChange.call(e, e.getValue())
                }), this), q.each(this.__folders, (function(t) {
                    t.revert(t)
                })), t || Nt(this.getRoot(), !1)
            },
            listen: function(t) {
                var e = 0 === this.__listening.length;
                this.__listening.push(t), e && function t(e) {
                    0 !== e.length && St.call(window, (function() {
                        t(e)
                    }));
                    q.each(e, (function(t) {
                        t.updateDisplay()
                    }))
                }(this.__listening)
            },
            updateDisplay: function() {
                q.each(this.__controllers, (function(t) {
                    t.updateDisplay()
                })), q.each(this.__folders, (function(t) {
                    t.updateDisplay()
                }))
            }
        });
        var Qt = {
                Color: ot,
                math: $,
                interpret: Q
            },
            Zt = {
                Controller: st,
                BooleanController: ht,
                OptionController: ft,
                StringController: pt,
                NumberController: gt,
                NumberControllerBox: vt,
                NumberControllerSlider: bt,
                FunctionController: wt,
                ColorController: _t
            },
            $t = {
                dom: dt
            },
            Jt = {
                GUI: Rt
            },
            Kt = Rt,
            te = {
                color: Qt,
                controllers: Zt,
                dom: $t,
                gui: Jt,
                GUI: Kt
            },
            ee = n("cYUZ"),
            ne = n.n(ee),
            ie = n("ijHy"),
            oe = n.n(ie);

        function re(t) {
            return (re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function ae(t, e, n, i, o, r, a) {
            try {
                var s = t[r](a),
                    l = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(l) : Promise.resolve(l).then(i, o)
        }

        function se(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function le(t, e) {
            return !e || "object" !== re(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function ce(t, e, n) {
            return (ce = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = ue(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function ue(t) {
            return (ue = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function de(t, e) {
            return (de = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var he = function(t) {
            function e() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), le(this, ue(e).apply(this, arguments))
            }
            var n, r, a, s, l;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && de(t, e)
            }(e, t), n = e, (r = [{
                key: "init",
                value: function() {
                    ne()(i), ce(ue(e.prototype), "init", this).call(this), this.load(), this.setupGui(), this.onMouseDown = this.onMouseDown.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onClose = this.onClose.bind(this), this.saveDataURI = this.saveDataURI.bind(this), this.isPointerDown = !1, this.pointer = {
                        x: 0,
                        y: 0
                    }, this.deltaY = 0, this.currentMove = 0, this.screenshotButton = o.a.doc.querySelector(".screenshot-button"), "ontouchmove" in o.a.win ? (o.a.win.addEventListener("touchstart", this.onMouseDown), o.a.win.addEventListener("touchmove", this.onMouseMove), o.a.win.addEventListener("touchend", this.onMouseUp)) : (o.a.win.addEventListener("wheel", this.onScroll, {
                        passive: !0
                    }), o.a.win.addEventListener("mousedown", this.onMouseDown), o.a.win.addEventListener("mousemove", this.onMouseMove), o.a.win.addEventListener("mouseup", this.onMouseUp))
                }
            }, {
                key: "destroy",
                value: function() {
                    ce(ue(e.prototype), "destroy", this).call(this)
                }
            }, {
                key: "initEvents",
                value: function() {
                    ce(ue(e.prototype), "initEvents", this).call(this)
                }
            }, {
                key: "destroyEvents",
                value: function() {
                    ce(ue(e.prototype), "destroyEvents", this).call(this), "ontouchmove" in o.a.win ? (o.a.win.removeEventListener("touchstart", this.onMouseDown), o.a.win.removeEventListener("touchmove", this.onMouseMove), o.a.win.removeEventListener("touchend", this.onMouseUp)) : (o.a.win.removeEventListener("wheel", this.onScroll, {
                        passive: !0
                    }), o.a.win.removeEventListener("mousedown", this.onMouseDown), o.a.win.removeEventListener("mousemove", this.onMouseMove), o.a.win.removeEventListener("mouseup", this.onMouseUp))
                }
            }, {
                key: "onClose",
                value: function() {
                    o.a.body.classList.toggle("dat-closed")
                }
            }, {
                key: "load",
                value: function() {
                    var t = this;
                    o.a.promises.gl.then((function() {
                        o.a.components.gl.mouse.active = !1, o.a.components.gl.loadBackground(), o.a.components.gl.scroll.start(), o.a.components.gl.scroll.sectionsTotalHeight = 5100, o.a.components.gl.scrollSpeed = .3, o.a.components.gl.scroll.currentScroll = -4500, setTimeout((function() {
                            o.a.doc.dispatchEvent(o.a.events.loadAnimation), o.a.components.gl.isLoaded = !0, o.a.components.gl.changeImage(o.a.data.projects[1].texture, o.a.data.projects[1].noiseTexture), o.a.components.gl.setBackground(), o.a.components.gl.setStyle(o.a.data.projects[1].style), o.a.components.gl.settings.dragZoom = -7.5
                        }), 1e3), setTimeout((function() {
                            t.updateDisplay(t.gui)
                        }), 3e3)
                    }))
                }
            }, {
                key: "onMouseDown",
                value: function(t) {
                    this.isPointerDown = !0, this.pointer.x = t.touches ? t.touches[0].clientX : t.clientX
                }
            }, {
                key: "onMouseMove",
                value: function(t) {
                    if (this.isPointerDown) {
                        var e = t.touches ? t.touches[0].clientX : t.clientX;
                        this.currentMove = e - this.pointer.x, o.a.components.gl.drag.x += .005 * this.currentMove, this.pointer.x = e
                    }
                }
            }, {
                key: "onMouseUp",
                value: function() {
                    this.isPointerDown = !1, this.currentMove = 0
                }
            }, {
                key: "changeImage",
                value: (s = z.a.mark((function t(e, n) {
                    var i, r;
                    return z.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, o.a.components.gl.loader.load(e);
                            case 2:
                                return i = t.sent, t.next = 5, o.a.components.gl.loader.load(n);
                            case 5:
                                r = t.sent, o.a.components.gl.textures.push(i), o.a.components.gl.textures.push(r), o.a.components.gl.changeImage(e, n);
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })), l = function() {
                    var t = this,
                        e = arguments;
                    return new Promise((function(n, i) {
                        var o = s.apply(t, e);

                        function r(t) {
                            ae(o, n, i, r, a, "next", t)
                        }

                        function a(t) {
                            ae(o, n, i, r, a, "throw", t)
                        }
                        r(void 0)
                    }))
                }, function(t, e) {
                    return l.apply(this, arguments)
                })
            }, {
                key: "saveScreenshot",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.width,
                        n = void 0 === e ? 4e3 : e,
                        i = t.height,
                        r = void 0 === i ? 4e3 : i,
                        a = t.fileName,
                        s = void 0 === a ? "image.jpg" : a;
                    o.a.components.gl.takingScreen = !0, o.a.components.gl.resize({
                        width: n,
                        height: r,
                        pixelRatio: 1
                    }), o.a.components.gl.render(), o.a.components.gl.resize(), o.a.components.gl.render();
                    var l = o.a.components.gl.renderer.domElement.toDataURL("image/jpg");
                    fe(s, l)
                }
            }, {
                key: "saveDataURI",
                value: function(t, e) {
                    var n = oe()(e),
                        i = document.createElement("a");
                    i.download = t, i.href = window.URL.createObjectURL(n), i.onclick = setTimeout((function() {
                        window.URL.revokeObjectURL(n), i.removeAttribute("href")
                    }), 0), i.click()
                }
            }, {
                key: "updateDisplay",
                value: function(t) {
                    for (var e in t.__controllers) t.__controllers[e].updateDisplay();
                    for (var n in t.__folders) this.updateDisplay(t.__folders[n])
                }
            }, {
                key: "setupGui",
                value: function() {
                    var t = this;
                    o.a.promises.gl.then((function() {
                        var e = o.a.components.gl;
                        t.screenshotButton.addEventListener("click", t.saveScreenshot), t.gui = new Kt, t.gui.closed || o.a.body.classList.add("dat-closed"), setTimeout((function() {
                            o.a.body.classList.add("is-loaded")
                        }), 1500), t.gui.domElement.offsetParent.style.zIndex = 1e3, t.gui.__closeButton.addEventListener("click", t.onClose);
                        var n = t.gui.addFolder("Texture");
                        n.add(e.icosahedron.settings, "opacity", 0, 1), n.add(e.icosahedron.settings, "refraction", 0, 1), n.add(e.icosahedron.settings, "distortion", 0, 1).step(.01), n.add(e.icosahedron.settings, "fragmented").name("Static"), n.addImage(o.a.data.projects[1], "texture").onChange((function(e) {
                            if (e.src.includes(o.a.data.projects[1].texture)) return !1;
                            t.changeImage(e.src, o.a.data.projects[1].noiseTexture), o.a.data.projects[1].texture = e.src
                        })), n.addImage(o.a.data.projects[1], "noiseTexture").onChange((function(e) {
                            if (e.src.includes(o.a.data.projects[1].noiseTexture)) return !1;
                            t.changeImage(o.a.data.projects[1].texture, e.src), o.a.data.projects[1].noiseTexture = e.src
                        }));
                        var i = t.gui.addFolder("Background");
                        i.add(e.settings, "vignette", 0, 1), i.addColor(e.settings, "background").onChange((function(t) {
                            e.setBackground({
                                bgColor: t
                            })
                        }));
                        var r = t.gui.addFolder("Lights");
                        r.add(e.icosahedron.settings.light, "right", 0, 5).step(.01).name("Both sides"), r.add(e.icosahedron.settings.light, "left", 0, 5).step(.01).name("Left");
                        var a = t.gui.addFolder("Effects");
                        a.add(e.settings, "brightness", 0, 2).step(.01), a.add(e.settings, "rgbOffset", 0, 1).step(.01), a.addColor(e.settings, "colorOverlay").onChange((function(t) {
                            e.changeColor(t)
                        }));
                        var s = t.gui.addFolder("Geometry");
                        s.add(e.icosahedron.settings, "vertexNoise", 0, 1).step(.05), n.open(), s.open(), i.open(), r.open(), a.open()
                    }))
                }
            }]) && se(n.prototype, r), a && se(n, a), e
        }(u);

        function fe(t, e) {
            var n = oe()(e),
                i = document.createElement("a");
            i.download = t, i.href = window.URL.createObjectURL(n), i.onclick = setTimeout((function() {
                window.URL.revokeObjectURL(n), i.removeAttribute("href")
            }), 0), i.click()
        }

        function pe(t) {
            return (pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function me(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function ge(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? me(Object(n), !0).forEach((function(e) {
                    ve(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function ve(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function ye(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function be(t, e) {
            return !e || "object" !== pe(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function we(t, e, n) {
            return (we = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = _e(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function _e(t) {
            return (_e = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function xe(t, e) {
            return (xe = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var ke = function(t) {
            function e() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), be(this, _e(e).apply(this, arguments))
            }
            var n, i, r;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && xe(t, e)
            }(e, t), n = e, (i = [{
                key: "init",
                value: function() {
                    we(_e(e.prototype), "init", this).call(this), this.onMouseDown = this.onMouseDown.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.onScroll = this.onScroll.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onKeydown = this.onKeydown.bind(this), this.animateIn = this.animateIn.bind(this), this.reset = this.reset.bind(this), this.next = this.next.bind(this), this.previous = this.previous.bind(this), this.onNextButton = this.onNextButton.bind(this), this.onPreviousButton = this.onPreviousButton.bind(this), this.onViewCaseButtonClick = this.onViewCaseButtonClick.bind(this), this.render = this.render.bind(this), this.getElements = this.getElements.bind(this), this.addEventListeners = this.addEventListeners.bind(this), this.resetElements = this.resetElements.bind(this), this.total = o.a.data.projects.length - 1, this.isAnimatingIn = !1, this.isAnimatingOut = !1, this.onMouseDownAnimation = null, this.onMouseUpAnimation = null, this.animateInTimeOut = null, this.animateInPromise = null, this.viewCaseButtonClicked = !1, this.onScrollNavigating = !1, this.isButtonDown = !1, this.dragArea = o.a.doc.querySelector(".main"), this.index = {
                        current: 0,
                        prev: this.total,
                        next: 1
                    }, this.isPointerDown = !1, this.pointer = {
                        x: 0,
                        y: 0
                    }, this.deltaY = 0, this.currentMove = 0
                }
            }, {
                key: "initEvents",
                value: function() {
                    we(_e(e.prototype), "initEvents", this).call(this)
                }
            }, {
                key: "destroyEvents",
                value: function() {
                    we(_e(e.prototype), "destroyEvents", this).call(this), this.resetElements()
                }
            }, {
                key: "onKeydown",
                value: function(t) {
                    var e = this;
                    this.viewCaseButtonClicked || this.animateInPromise.then((function() {
                        "37" == (t = t || window.event).keyCode ? e.previous() : "39" == t.keyCode && e.next()
                    }))
                }
            }, {
                key: "onMouseDown",
                value: function(t) {
                    this.viewCaseButtonClicked || this.isButtonDown || (null != this.onMouseUpAnimation && this.onMouseUpAnimation.pause(), null != this.onMouseDownAnimation && this.onMouseDownAnimation.pause(), void 0 === Ge.loadingIcon.count || !Ge.loadingIcon.playing || this.isAnimatingIn || this.isAnimatingOut || Ge.loadingIcon.count.pause(), this.isPointerDown || (this.isPointerDown = !0, this.pointer.x = t.touches ? t.touches[0].clientX : t.clientX, this.onMouseDownAnimation = a.a.timeline({
                        duration: 500
                    }), this.onMouseDownAnimation.add({
                        targets: o.a.components.gl.settings,
                        dragZoom: -2,
                        duration: 500,
                        easing: "linear"
                    }), this.onMouseDownAnimation.add({
                        targets: Ge.cta.mainCircle,
                        r: 26,
                        duration: 500,
                        easing: o.a.easings.soft
                    }, "-=500"), this.onMouseDownAnimation.add({
                        targets: Ge.cta.ctaText,
                        opacity: 0,
                        duration: 400,
                        easing: "linear"
                    }, "-=500")))
                }
            }, {
                key: "onScroll",
                value: function(t) {
                    var e = this;
                    if (!this.viewCaseButtonClicked && !this.onScrollNavigating && !this.isAnimatingOut) {
                        var n = b.a.normalizeWheel(t);
                        this.deltaY = this.delta = t.wheelDeltaY || -1 * n.pixelY, o.a.components.gl.drag.x += 5e-4 * this.deltaY, this.isPointerDown || this.animateInPromise.then((function() {
                            (e.deltaY < -40 || e.deltaY > 40) && (e.onScrollNavigating = !0), e.deltaY < -40 && e.next(), e.deltaY > 40 && e.previous()
                        }))
                    }
                }
            }, {
                key: "onMouseMove",
                value: function(t) {
                    if (this.isPointerDown && !this.isAnimatingOut) {
                        var e = t.touches ? t.touches[0].clientX : t.clientX;
                        this.currentMove = e - this.pointer.x, o.a.components.gl.drag.x += .005 * this.currentMove, this.pointer.x = e
                    }
                }
            }, {
                key: "onMouseUp",
                value: function() {
                    var t = this;
                    this.viewCaseButtonClicked || (null != this.onMouseDownAnimation && this.onMouseDownAnimation.pause(), null != this.onMouseUpAnimation && this.onMouseUpAnimation.pause(), void 0 === Ge.loadingIcon.count || !Ge.loadingIcon.playing || this.isAnimatingIn || this.isAnimatingOut || Ge.loadingIcon.count.play(), this.isPointerDown = !1, this.onMouseUpAnimation = a.a.timeline({
                        duration: 500
                    }), this.onMouseUpAnimation.add({
                        targets: o.a.components.gl.settings,
                        dragZoom: 0,
                        duration: 500,
                        easing: "linear"
                    }), this.onMouseUpAnimation.add({
                        targets: Ge.cta.mainCircle,
                        r: 32,
                        duration: 500,
                        easing: o.a.easings.soft
                    }, "-=500"), this.onMouseUpAnimation.add({
                        targets: Ge.cta.ctaText,
                        opacity: 1,
                        duration: 400,
                        easing: "linear"
                    }, "-=500"), this.animateInPromise.then((function() {
                        t.currentMove < -2.5 && t.next(), t.currentMove > 2.5 && t.previous(), t.currentMove = 0
                    })))
                }
            }, {
                key: "onViewCaseButtonClick",
                value: function() {
                    var t = this;
                    if (!this.viewCaseButtonClicked) {
                        this.viewCaseButtonClicked = !0, setTimeout((function() {
                            t.viewCaseButtonClicked = !1
                        }), 2e3);
                        var e = o.a.data.projects,
                            n = e[this.index.current].slug;
                        if ("internal" !== e[this.index.current].link.type) return !1;
                        this.animateInPromise.then((function() {
                            t.animateOut(), Ge.menu.reset(), Ge.classFactory.getProjectPage(o.a.doc.querySelector('[data-page="container"]'), n), setTimeout((function() {
                                o.a.pages[n].animateIn()
                            }), 100)
                        }))
                    }
                }
            }, {
                key: "resetElements",
                value: function() {
                    this.nextButton && this.nextButton.removeEventListener("click", this.onNextButton), this.previousButton && this.previousButton.removeEventListener("click", this.onPreviousButton), this.viewCaseButton && this.viewCaseButton.removeEventListener("click", this.onViewCaseButtonClick), o.a.doc.removeEventListener("keydown", this.onKeydown), Ge.cta.component.style.pointerEvents = "", "ontouchmove" in o.a.win ? (this.dragArea.removeEventListener("touchstart", this.onMouseDown, {
                        passive: !0
                    }), this.dragArea.removeEventListener("touchmove", this.onMouseMove, {
                        passive: !0
                    }), this.dragArea.removeEventListener("touchend", this.onMouseUp)) : (o.a.win.removeEventListener("wheel", this.onScroll), this.dragArea.removeEventListener("mousedown", this.onMouseDown), this.dragArea.removeEventListener("mousemove", this.onMouseMove), this.dragArea.removeEventListener("mouseup", this.onMouseUp)), this.title = null, this.subtitle = null, this.previousButton = null, this.nextButton = null, this.progress = {
                        total: null,
                        fill: null
                    }
                }
            }, {
                key: "addEventListeners",
                value: function() {
                    null !== this.nextButton && this.nextButton.addEventListener("click", this.onNextButton), null !== this.previousButton && this.previousButton.addEventListener("click", this.onPreviousButton), null !== this.viewCaseButton && this.viewCaseButton.addEventListener("click", this.onViewCaseButtonClick), o.a.doc.addEventListener("keydown", this.onKeydown), null !== this.dragArea && this.dragArea.classList.add("cursor-grab"), "ontouchmove" in o.a.win ? (this.dragArea.addEventListener("touchstart", this.onMouseDown), this.dragArea.addEventListener("touchmove", this.onMouseMove), this.dragArea.addEventListener("touchend", this.onMouseUp)) : (o.a.win.addEventListener("wheel", this.onScroll, {
                        passive: !0
                    }), this.dragArea.addEventListener("mousedown", this.onMouseDown), this.dragArea.addEventListener("mousemove", this.onMouseMove), this.dragArea.addEventListener("mouseup", this.onMouseUp))
                }
            }, {
                key: "getElements",
                value: function() {
                    this.title = this.container.querySelector(".gallery-title"), this.subtitle = this.container.querySelector(".gallery-subtitle"), this.viewCaseButton = this.container.querySelector(".gallery-button"), this.previousButton = this.container.querySelector(".gallery-previous"), this.nextButton = this.container.querySelector(".gallery-next"), this.progress = {
                        total: this.container.querySelector(".gallery-total"),
                        fill: this.container.querySelector(".gallery-progress")
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    this.index.current = 0, this.updateIndex(), null !== this.dragArea && this.dragArea.classList.remove("cursor-grab")
                }
            }, {
                key: "slideTransition",
                value: function() {
                    var t = this;
                    if (!this.viewCaseButtonClicked) {
                        Ge.menu.isReady = !1, Object(a.a)({
                            targets: Ge.loadingIcon.counter,
                            opacity: 0,
                            duration: 300,
                            easing: "linear"
                        }), Object(a.a)({
                            targets: Ge.loadingIcon.loaderCircle,
                            scale: 0,
                            duration: 500,
                            easing: "linear"
                        }), o.a.page.lastProject = o.a.data.projects[this.index.current].slug, o.a.components.gl.changeImage(o.a.data.projects[this.index.current].texture, o.a.data.projects[this.index.current].noiseTexture, 700, 500), this.slideTransitionTimeline = a.a.timeline({
                            duration: 700
                        }), this.slideTransitionTimeline.add({
                            targets: o.a.components.gl.scroll,
                            currentScroll: -3200,
                            duration: 700,
                            easing: o.a.easings.soft,
                            complete: function() {
                                t.isAnimatingOut || (t.resetElements(), t.animateIn("slideIn", 0, !1))
                            }
                        }), this.slideTransitionTimeline.add({
                            targets: [this.title.querySelectorAll(".c-letter"), this.subtitle, this.viewCaseButton],
                            translateY: ["0%", "-120%"],
                            opacity: 0,
                            duration: 300,
                            easing: "linear"
                        }, "-=700"), Object(a.a)({
                            targets: o.a.components.gl.icosahedron.settings.lines,
                            opacity: 1,
                            duration: 700,
                            easing: "linear"
                        });
                        var e = o.a.data.projects[this.index.current];
                        if (e.images) {
                            if (e.slug in o.a.loadedImages) return !1;
                            o.a.loadedImages[e.slug] = [], e.images.forEach((function(t) {
                                o.a.loadedImages[e.slug].push({
                                    url: t.url,
                                    img: o.a.components.gl.loader.load(t.url)
                                })
                            }))
                        }
                    }
                }
            }, {
                key: "animateOut",
                value: function() {
                    var t = this;
                    this.isAnimatingOut || (this.isAnimatingOut = !0, this.slideTransitionTimeline && this.slideTransitionTimeline.pause(), this.animateOutAnimation = a.a.timeline({
                        duration: 700,
                        complete: function() {
                            t.isAnimatingOut = !1, t.resetElements()
                        }
                    }), this.reset(), void 0 !== Ge.loadingIcon.count && Ge.loadingIcon.count.pause(), this.animateOutAnimation.add({
                        targets: [this.nextButton, this.previousButton],
                        opacity: 0,
                        duration: 500,
                        easing: "linear"
                    }), this.animateOutAnimation.add({
                        targets: o.a.components.gl.scroll,
                        currentScroll: -3500,
                        duration: 500,
                        easing: o.a.easings.soft
                    }, "-=500"), this.animateOutAnimation.add({
                        targets: [this.title.querySelectorAll(".c-letter"), this.subtitle, this.viewCaseButton],
                        translateY: ["0%", "-120%"],
                        opacity: 0,
                        duration: 300,
                        easing: "linear"
                    }, "-=500"))
                }
            }, {
                key: "checkPreviousProject",
                value: function() {
                    var t = this;
                    if (null === o.a.page.lastProject) return !1;
                    o.a.data.projects.forEach((function(e, n) {
                        o.a.page.lastProject === e.slug && (t.index.current = n, t.updateIndex())
                    }))
                }
            }, {
                key: "animateIn",
                value: function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "load",
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 710,
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    this.isAnimatingIn || (this.animateInPromise = new Promise((function(r) {
                        Ge.menu.isReady = !1, t.isAnimatingIn = !0, t.isButtonDown = !1;
                        var s = n,
                            l = o.a.data.projects;
                        o.a.page.previous = o.a.page.current, o.a.page.current = o.a.pages.gallery, "load" === e && t.checkPreviousProject(), i && (null !== o.a.page.previous && "about" === o.a.page.previous.slug ? (n = 2100, setTimeout((function() {
                            o.a.components.gl.loadImage(l[t.index.current].texture), o.a.components.gl.loadNoiseTexture(l[t.index.current].noiseTexture), o.a.components.gl.showIcosahedron(!0)
                        }), 800)) : o.a.components.gl.changeImage(l[t.index.current].texture, l[t.index.current].noiseTexture)), null != l[t.index.current].style.colors ? setTimeout((function() {
                            o.a.components.gl.setBackground({
                                bgColor: l[t.index.current].style.colors.background,
                                vignette: l[t.index.current].style.vignette,
                                kaleidoFactor: l[t.index.current].style.kaleidoFactor,
                                overlay: l[t.index.current].style.colors.overlay
                            })
                        }), "load" === e ? 1200 : 0) : o.a.components.gl.setBackground(), clearTimeout(t.animateInTimeOut), t.animateInTimeOut = setTimeout((function() {
                            "load" === e && (t.render(), Ge.menu.update('\n                    <ul class="flex pt-2">\n                        <li class="menu-item" data-menu-link="home">\n                            <div class="pointer-events-none overflow-hidden">\n                                <div class="animation-translate menu-item-inner">'.concat(o.a.data.labels.intro, '</div>\n                            </div>\n                        </li>\n                        <li class="menu-item" data-menu-link="about">\n                            <div class="menu-divider"></div>\n                            <div class="pointer-events-none overflow-hidden">\n                                <div class="animation-translate menu-item-inner">').concat(o.a.data.labels.aboutMe, "</div>\n                            </div>\n                        </li>\n                    </ul>"))), t.getElements(), t.formatSlide(l), o.a.components.gl.setPosition({
                                scroll: !1
                            }), Ge.cta.component.style.pointerEvents = "none", null !== t.viewCaseButton && (t.viewCaseButton.style.opacity = ""), null !== t.subtitle && (t.subtitle.style.opacity = ""), o.a.components.gl.setStyle(ge({}, l[t.index.current].style)), t.animateInAnimation = a.a.timeline({
                                duration: 2500,
                                complete: function() {
                                    r()
                                }
                            }), t.animateInAnimation.add({
                                targets: o.a.components.gl.scroll,
                                currentScroll: -4500,
                                duration: 1e3,
                                easing: o.a.easings.soft,
                                begin: function() {
                                    Ge.loadingIcon.counterMode(15e3), "drag" !== Ge.cta.mode && Ge.cta.dragMode()
                                },
                                complete: function() {
                                    t.addEventListeners()
                                }
                            }), t.animateInAnimation.add({
                                targets: [o.a.doc.querySelector(".aside-label")],
                                opacity: 0,
                                duration: 500,
                                easing: "linear"
                            }, "-=1000"), t.animateInAnimation.add({
                                targets: t.viewCaseButton,
                                translateY: ["-101%", "0%"],
                                duration: 800,
                                easing: o.a.easings.soft
                            }, "-=500"), "load" === e && t.animateInAnimation.add({
                                targets: [t.nextButton, t.previousButton],
                                opacity: 1,
                                duration: 800,
                                easing: "linear"
                            }, "-=800"), t.animateInAnimation.add({
                                targets: [t.letters, t.subtitle],
                                translateY: ["-101%", "0%"],
                                duration: 1500,
                                delay: a.a.stagger(t.letters.length < 5 ? 100 : 50),
                                easing: o.a.easings.soft,
                                complete: function() {
                                    Ge.menu.isReady = !0, t.isAnimatingIn = !1
                                }
                            }, "-=1300")
                        }), s)
                    })))
                }
            }, {
                key: "onNextButton",
                value: function() {
                    this.isButtonDown = !0, this.next()
                }
            }, {
                key: "onPreviousButton",
                value: function() {
                    this.isButtonDown = !0, this.previous()
                }
            }, {
                key: "next",
                value: function() {
                    var t = this;
                    setTimeout((function() {
                        t.viewCaseButtonClicked || t.animateInPromise.then((function() {
                            Ge.menu.isReady && (Ge.menu.isReady = !1, void 0 !== Ge.loadingIcon.count && Ge.loadingIcon.count.pause(), t.index.current++, t.updateIndex(), t.slideTransition())
                        }))
                    }), 100)
                }
            }, {
                key: "previous",
                value: function() {
                    var t = this;
                    setTimeout((function() {
                        t.viewCaseButtonClicked || t.animateInPromise.then((function() {
                            Ge.menu.isReady && (Ge.menu.isReady = !1, void 0 !== Ge.loadingIcon.count && Ge.loadingIcon.count.pause(), t.index.current--, t.updateIndex(), t.slideTransition())
                        }))
                    }), 100)
                }
            }, {
                key: "updateIndex",
                value: function() {
                    this.index.prev = this.index.current - 1, this.index.next = this.index.current + 1, this.index.current < 0 && (this.index.current = this.total, this.index.prev = this.index.current - 1, this.index.next = 0), this.index.current > this.total && (this.index.current = 0, this.index.prev = this.total, this.index.next = this.index.current + 1), this.index.current == this.total && (this.index.next = 0), 0 === this.index.current && (this.index.prev = this.total)
                }
            }, {
                key: "formatSlide",
                value: function(t) {
                    if (o.a.activePage === o.a.page.current.slug) {
                        var e = t[this.index.current];
                        this.container.style.pointerEvents = "auto", this.title.innerHTML = e.title, this.subtitle.innerHTML = e.type, "internal" === e.link.type ? this.viewCaseButton.innerHTML = '<span class="gallery-button-inner">'.concat(e.link.text, '</span>\n                <span class="gallery-button-icon">\n                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                        viewBox="0 0 100 46.3" enable-background="new 0 0 100 46.3" xml:space="preserve">\n                        <line fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" x1="0" y1="23.1" x2="99" y2="23.1"/>\n                        <polyline fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" points="77.2,1.3 99,23.1 77.2,44.9 "/>\n                    </svg>\n                </span>') : "external" === e.link.type ? this.viewCaseButton.innerHTML = '<a href="'.concat(e.link.url, '" target="_blank" class="gallery-button-inner">').concat(e.link.text, '</a>\n            <span class="gallery-button-icon -external">\n            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                    viewBox="0 0 52 51" enable-background="new 0 0 52 51" xml:space="preserve">\n                    <line fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" x1="4.5" y1="47" x2="47.4" y2="4"/>\n                    <polyline fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" points="11.9,4 47.4,4 47.4,39.5 \t"/>\n            </svg>\n            </span>') : this.viewCaseButton.innerHTML = "<span>".concat(e.link.text, "</span>"), A(this.title, {
                            splitLetters: !0
                        }), this.viewCaseButtonClicked = !1, this.onScrollNavigating = !1, this.letters = this.title.querySelectorAll(".c-letter"), this.letters.forEach((function(t) {
                            t.style.transform = "translateY(-101%)"
                        })), this.subtitle.style.transform = "translateY(-101%)"
                    }
                }
            }, {
                key: "render",
                value: function() {
                    this.container.innerHTML = '\n        <div class="absolute w-full bottom-0 left-0">\n            '.concat('\n            <div class="mobile:fixed mobile:bottom-0 wrap py-40 md:py-72">\n                <div class="grid">\n                    <div class="grid-col">\n                        <div class="hidden md:block font-regular text-14 md:text-12 uppercase tracking-widest overflow-hidden animation-color">\n                            <div class="animation-translate gallery-subtitle"></div>\n                        </div>\n                        <div class="font-staffX leading-none text-24 xs:text-32 sm:text-48 lg:text-56 xl:text-72 uppercase will-change my-16">\n                            <div class="gallery-title animation-color text-title"></div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="pt-48 md:pt-136">\n                    <div class="grid justify-between">\n                        <div class="grid-col flex -mb-2 pt-8">\n                            <div class="font-regular text-14 md:text-12  uppercase tracking-widest overflow-hidden animation-color">\n                                <div class="gallery-button | flex items-center"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ', "\n            ").concat('\n            <div class="gallery-controls">\n                <div class="gallery-control gallery-previous | hidden md:flex opacity-0 cursor-pointer">\n                    <div class="gallery-control-icon">\n                        <svg enable-background="new 0 0 30.99 70.38" viewBox="0 0 30.99 70.38" xmlns="http://www.w3.org/2000/svg"><path d="m29.3.96-27.61 34.32 27.64 34.14" fill="none" stroke-miterlimit="10"/></svg>\n                    </div>\n                </div>\n\n                <div class="gallery-control gallery-next | hidden md:flex opacity-0 cursor-pointer">\n                    <div class="gallery-control-icon">\n                        <svg enable-background="new 0 0 30.99 70.38" viewBox="0 0 30.99 70.38" xmlns="http://www.w3.org/2000/svg"><path d="m1.73 69.42 27.6-34.32-27.64-34.14" fill="none" stroke-miterlimit="10"/></svg>\n                    </div>\n                </div>\n            </div>', "\n        </div>")
                }
            }]) && ye(n.prototype, i), r && ye(n, r), e
        }(v);

        function Ee(t) {
            return (Ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Ae(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Oe(t, e) {
            return !e || "object" !== Ee(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Se(t, e, n) {
            return (Se = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Ce(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function Ce(t) {
            return (Ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function je(t, e) {
            return (je = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Le = function(t) {
            function e() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), Oe(this, Ce(e).apply(this, arguments))
            }
            var n, i, r;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && je(t, e)
            }(e, t), n = e, (i = [{
                key: "init",
                value: function() {
                    Se(Ce(e.prototype), "init", this).call(this), this.loadAnimation = this.loadAnimation.bind(this), this.animateIn = this.animateIn.bind(this), this.animateOut = this.animateOut.bind(this), this.onWheel = this.onWheel.bind(this), this.removeTouchEvents = this.removeTouchEvents.bind(this), this.addTouchEvents = this.addTouchEvents.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.isPointerDown = !1, this.isAnimateOut = !1, this.touch = {
                        x: 0,
                        y: 0
                    }, this.scrollLimit = 2e3, this.currentMove = 0
                }
            }, {
                key: "destroy",
                value: function() {
                    Se(Ce(e.prototype), "destroy", this).call(this)
                }
            }, {
                key: "initEvents",
                value: function() {
                    var t = this;
                    Se(Ce(e.prototype), "initEvents", this).call(this), o.a.win.removeEventListener("wheel", this.onWheel), o.a.win.addEventListener("wheel", this.onWheel = function() {
                        t.checkScroll()
                    }, !1), o.a.doc.addEventListener("imagesLoaded", this.onImagesLoaded = function() {
                        o.a.pages.home.animateIn("load")
                    })
                }
            }, {
                key: "destroyEvents",
                value: function() {
                    Se(Ce(e.prototype), "destroyEvents", this).call(this), o.a.win.removeEventListener("wheel", this.onWheel), o.a.doc.removeEventListener("imagesLoaded", this.onImagesLoaded)
                }
            }, {
                key: "removeTouchEvents",
                value: function() {
                    o.a.viewport.small && ("ontouchmove" in o.a.win ? (o.a.win.removeEventListener("touchstart", this.onTouchStart), o.a.win.removeEventListener("touchmove", this.onTouchMove), o.a.win.removeEventListener("touchend", this.onTouchEnd)) : (o.a.win.removeEventListener("mousedown", this.onTouchStart), o.a.win.removeEventListener("mousemove", this.onTouchMove), o.a.win.removeEventListener("mouseup", this.onTouchEnd)))
                }
            }, {
                key: "addTouchEvents",
                value: function() {
                    o.a.viewport.small && ("ontouchmove" in o.a.win ? (o.a.win.addEventListener("touchstart", this.onTouchStart, {
                        passive: !0
                    }), o.a.win.addEventListener("touchmove", this.onTouchMove, {
                        passive: !0
                    }), o.a.win.addEventListener("touchend", this.onTouchEnd)) : (o.a.win.addEventListener("mousedown", this.onTouchStart, {
                        passive: !0
                    }), o.a.win.addEventListener("mousemove", this.onTouchMove, {
                        passive: !0
                    }), o.a.win.addEventListener("mouseup", this.onTouchEnd)))
                }
            }, {
                key: "onWheel",
                value: function() {
                    this.checkScroll()
                }
            }, {
                key: "onTouchStart",
                value: function(t) {
                    o.a.viewport.small && !this.isAnimateOut && (this.isPointerDown = !0, this.touch.y = t.touches ? t.touches[0].clientY : t.clientY)
                }
            }, {
                key: "onTouchEnd",
                value: function() {
                    o.a.viewport.small && !this.isAnimateOut && (this.isPointerDown = !1, this.currentMove = 0)
                }
            }, {
                key: "onTouchMove",
                value: function(t) {
                    if (o.a.viewport.small && !this.isAnimateOut && this.isPointerDown) {
                        var e = t.touches ? t.touches[0].clientY : t.clientY;
                        this.currentMove = e - this.touch.y, o.a.components.gl.scroll.currentScroll += 10 * this.currentMove, this.touch.y = e, this.checkScroll()
                    }
                }
            }, {
                key: "loadAnimation",
                value: function() {
                    this.animateIn()
                }
            }, {
                key: "checkScroll",
                value: function() {
                    if (null == o.a.components.gl.scroll || !o.a.components.gl.scroll.active) return !1;
                    if (o.a.page.current === o.a.pages.home) {
                        var t = Math.floor(Math.abs(o.a.components.gl.scroll.currentScroll) / this.scrollLimit * 100);
                        if (Ge.loadingIcon.setLoadingPoint(t), Math.abs(o.a.components.gl.scroll.currentScroll) > this.scrollLimit) {
                            if (this.isAnimateOut) return;
                            this.isAnimateOut = !0, o.a.page.current = null, this.animateOut(), Ge.menu.navigate("gallery"), Ge.loadingIcon.loaderReset()
                        }
                    }
                }
            }, {
                key: "animateIn",
                value: function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
                    o.a.components.gl.scroll.active = !1, Ge.menu.isReady = !1;
                    var n = 500,
                        i = 0;
                    if ("load" === e && (o.a.components.gl.showIcosahedron(), o.a.components.gl.setStyle()), this.renderMenu(), o.a.page.previous = o.a.page.current, o.a.page.current = o.a.pages.home, null !== o.a.page.previous) switch (o.a.page.previous.slug) {
                        case "about":
                            i = 700, setTimeout((function() {
                                o.a.components.gl.setPosition(), o.a.components.gl.showIcosahedron(), o.a.components.gl.setStyle()
                            }), 1e3);
                            break;
                        default:
                            o.a.components.gl.changeImage(o.a.data.home.image, o.a.data.home.noise), setTimeout((function() {
                                o.a.components.gl.setBackground(), o.a.components.gl.setStyle()
                            }), 500), n = 1e3
                    }
                    Object(a.a)({
                        targets: o.a.components.gl.scroll,
                        currentScroll: 0,
                        duration: 1e3,
                        delay: i,
                        easing: o.a.easings.soft
                    }), setTimeout((function() {
                        t.render(), "load" !== e && Ge.loadingIcon.scrollMode(), Ge.cta.scrollMode(), Object(a.a)({
                            targets: t.container.querySelectorAll(".hero-letter-inner"),
                            translateY: ["-101%", "0%"],
                            duration: 1500,
                            delay: a.a.stagger(40),
                            easing: o.a.easings.soft
                        }), Object(a.a)({
                            targets: t.container.querySelectorAll(".animation-translate"),
                            translateY: ["-101%", "0%"],
                            duration: 1500,
                            delay: a.a.stagger(40),
                            easing: o.a.easings.soft,
                            complete: function(e) {
                                o.a.doc.dispatchEvent(o.a.events.introLoadDone), o.a.components.gl.scroll.sectionsTotalHeight = 5100, o.a.components.gl.scroll.active = !0, o.a.components.gl.scrollSpeed = .3, Ge.menu.isReady = !0, t.addTouchEvents()
                            }
                        });
                        var n = o.a.doc.querySelector(".aside-label");
                        n && "1" != n.style.opacity && Object(a.a)({
                            targets: n,
                            opacity: 1,
                            duration: 500,
                            easing: "linear"
                        })
                    }), n)
                }
            }, {
                key: "animateOut",
                value: function() {
                    var t = this;
                    o.a.components.gl.scroll.active = !1, Object(a.a)({
                        targets: this.container.querySelectorAll(".hero-letter-inner"),
                        translateY: ["0%", "-101%"],
                        opacity: 0,
                        duration: 700,
                        easing: o.a.easings.soft
                    }), Object(a.a)({
                        targets: this.container.querySelectorAll(".animation-translate"),
                        translateY: ["0%", "-101%"],
                        duration: 700,
                        easing: o.a.easings.soft,
                        complete: function() {
                            t.destroyEvents(), t.removeTouchEvents()
                        }
                    })
                }
            }, {
                key: "renderMenu",
                value: function() {
                    Ge.menu.update('\n        <ul class="flex pt-2">\n            <li class="menu-item" data-menu-link="gallery">\n                <div class="pointer-events-none overflow-hidden">\n                    <div class="animation-translate menu-item-inner">'.concat(o.a.data.labels.gallery, '</div>\n                </div>\n            </li>\n            <li class="menu-item" data-menu-link="about">\n                <div class="menu-divider"></div>\n                <div class="pointer-events-none overflow-hidden">\n                    <div class="animation-translate menu-item-inner">').concat(o.a.data.labels.aboutMe, "</div>\n                </div>\n            </li>\n        </ul>\n        "))
                }
            }, {
                key: "render",
                value: function() {
                    this.container.innerHTML = '\n        <div class="wrap flex-1">\n            <div class="grid">\n                <div class="grid-col">\n                    <div class="hero-text font-staffX text-32 xs:text-40 sm:text-56 md:text-72 lg:text-88 xl:text-96 uppercase leading-none" aria-label="Graphic Designer">\n                        <div class="hero-text-line" aria-hidden="true">\n                            <span class="hero-letter"><span class="hero-letter-inner">G</span></span>\n                            <span class="hero-letter"><span class="hero-letter-inner">r</span></span>\n                            <span class="hero-letter"><span class="hero-letter-inner">a</span></span>\n                            <span class="hero-letter"><span class="hero-letter-inner">p</span></span>\n                            <span class="hero-letter"><span class="hero-letter-inner">h</span></span>\n                            <span class="hero-letter"><span class="hero-letter-inner">i</span></span>\n                            <span class="hero-letter"><span class="hero-letter-inner">c</span></span>\n                                              </div>\n                        <div class="hero-text-line text-outline" aria-hidden="true">\n                            <span class="hero-letter"><span class="hero-letter-inner">D</span></span>\n                            <span class="hero-letter"><span class="hero-letter-inner">e</span></span>\n                            <span class="hero-letter"><span class="hero-letter-inner">s</span></span>\n                            <span class="hero-letter"><span class="hero-letter-inner">i</span></span>\n                            <span class="hero-letter"><span class="hero-letter-inner">g</span></span>\n                            <span class="hero-letter"><span class="hero-letter-inner">n</span></span>\n                      <span class="hero-letter"><span class="hero-letter-inner">e</span></span>\n                            <span class="hero-letter"><span class="hero-letter-inner">r</span></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="mobile:fixed mobile:bottom-0 wrap py-40 md:py-72">\n            <div class="grid">\n                <div class="grid-col md:w-1/3">\n                    <div class="flex font-regular text-14 md:text-12 uppercase tracking-widest">\n                        <div class="overflow-hidden"><div class="animation-translate">Designer</div></div>\n                        <div class="overflow-hidden mx-16"><div class="animation-translate">&</div></div>\n                        <div class="overflow-hidden"><div class="animation-translate">Illustrator</div></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        '
                }
            }]) && Ae(n.prototype, i), r && Ae(n, r), e
        }(v);

        function Te(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var Pe = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var e, i, r;
            return e = t, (i = [{
                key: "getPage",
                value: function(t, e) {
                    switch (e) {
                        case "home":
                            o.a.pages[e] = new Le(t, e);
                            break;
                        case "about":
                            o.a.pages[e] = new N(t, e);
                            break;
                        case "gallery":
                            o.a.pages[e] = new ke(t, e);
                            break;
                        case "editor":
                            o.a.pages[e] = new he(t, e);
                            break;
                        default:
                            return new v(t, e)
                    }
                }
            }, {
                key: "getProjectPage",
                value: function(t, e) {
                    return o.a.pages[e] = new P(t, e), o.a.pages[e]
                }
            }, {
                key: "getComponent",
                value: function(t, e, i) {
                    o.a.promises[t] = n("g8Ma")("./".concat(t)).then((function(n) {
                        return o.a.components[t] = new n.default(t, e, i), o.a.components[t]
                    }))
                }
            }]) && Te(e.prototype, i), r && Te(e, r), t
        }();
        n("MZFn");

        function Me(t) {
            return (Me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Be(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Ie(t, e) {
            return !e || "object" !== Me(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Re(t, e, n) {
            return (Re = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = De(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function De(t) {
            return (De = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Fe(t, e) {
            return (Fe = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        n("z+i3").a;
        var Ne = n("pDBs");

        function He(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function ze(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var Ye = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.classFactory = new Pe, this.loadTemplateModules(), o.a.doc.querySelector(".loader-icon") && (this.loadingIcon = new Ne.default("loading-icon", o.a.doc, o.a.doc.querySelector(".loader-icon")))
                }
                var e, i, r;
                return e = t, (i = [{
                    key: "loadTemplateModules",
                    value: function() {
                        var t = this;
                        He(o.a.doc.querySelectorAll("[data-module]")).forEach((function(e) {
                            var i = e.getAttribute("data-module"),
                                r = new(n("mv1g")("./".concat(i.toLowerCase())).default)(i, o.a.doc, e);
                            t[i] = r
                        }))
                    }
                }]) && ze(e.prototype, i), r && ze(e, r), t
            }(),
            Ge = e.a = new Ye
    },
    YbcQ: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "default", (function() {
            return h
        }));
        var i = n("z+i3"),
            o = n("QZz8"),
            r = n("EgnG");

        function a(t) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function s(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function l(t, e) {
            return !e || "object" !== a(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function c(t, e, n) {
            return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function u(t) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function d(t, e) {
            return (d = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var h = function(t) {
            function e() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), l(this, u(e).apply(this, arguments))
            }
            var n, i, a;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && d(t, e)
            }(e, t), n = e, (i = [{
                key: "init",
                value: function() {
                    var t = this;
                    c(u(e.prototype), "init", this).call(this), this.animateIn = this.animateIn.bind(this), this.$$("[data-anim-id]").forEach((function(e) {
                        t[e.getAttribute("data-anim-id")] = e
                    }))
                }
            }, {
                key: "initEvents",
                value: function() {
                    c(u(e.prototype), "initEvents", this).call(this)
                }
            }, {
                key: "destroyEvents",
                value: function() {
                    c(u(e.prototype), "destroyEvents", this).call(this)
                }
            }, {
                key: "animateIn",
                value: function() {
                    Object(r.a)({
                        targets: this.sidelabel.querySelector(".animation-translate"),
                        translateY: [-100, 0],
                        opacity: [0, 1],
                        duration: 1200,
                        easing: o.a.easings.soft
                    }), Object(r.a)({
                        targets: this.asideBox,
                        opacity: [0, 1],
                        delay: 500,
                        duration: 300,
                        easing: "linear"
                    })
                }
            }]) && s(n.prototype, i), a && s(n, a), e
        }(i.a)
    },
    aU2D: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("z+i3"),
            o = n("QZz8"),
            r = n("EgnG"),
            a = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16;
                return "".concat(t / e, "rem")
            };

        function s(t) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function l(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function c(t, e) {
            return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function u(t, e, n) {
            return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = d(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function d(t) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function h(t, e) {
            return (h = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        n.d(e, "default", (function() {
            return f
        }));
        var f = function(t) {
            function e() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), c(this, d(e).apply(this, arguments))
            }
            var n, i, s;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && h(t, e)
            }(e, t), n = e, (i = [{
                key: "init",
                value: function() {
                    u(d(e.prototype), "init", this).call(this), this.onLoaderDone = this.onLoaderDone.bind(this), this.ctaText = this.$(".cta-text"), this.ctaWrap = this.$(".cta-wrap"), this.cta = this.component, this.scrollArrow = null, this.scrollArrowParts = [], this.radius = 56, this.stroke = 1, this.rotation = -90, this.dasharray1 = 0, this.dasharray2 = 200, this.scrollAnimation = null, this.mode = null, this.normalizedRadius = this.radius - 2 * this.stroke, this.circumference = 2 * this.normalizedRadius * Math.PI, this.cta.style.width = "".concat(a(2 * this.radius)), this.cta.style.height = "".concat(a(2 * this.radius)), this.injectSvg(), this.scrollMode()
                }
            }, {
                key: "initEvents",
                value: function() {
                    u(d(e.prototype), "initEvents", this).call(this), o.a.doc.addEventListener("loaderDone", this.onLoaderDone)
                }
            }, {
                key: "destroyEvents",
                value: function() {
                    u(d(e.prototype), "destroyEvents", this).call(this), o.a.doc.removeEventListener("loaderDone", this.onLoaderDone)
                }
            }, {
                key: "onLoaderDone",
                value: function() {
                    Object(r.a)({
                        targets: this.component,
                        opacity: 1,
                        delay: 2e3,
                        duration: 300,
                        easing: "linear"
                    }), Object(r.a)({
                        targets: ".cta-circle-inner",
                        rotate: 360,
                        delay: 2e3,
                        duration: 2e3,
                        easing: o.a.easings.soft
                    });
                    var t = this;
                    Object(r.a)({
                        targets: this,
                        dasharray2: 20,
                        dasharray1: 135,
                        delay: 2e3,
                        duration: 2e3,
                        easing: o.a.easings.soft,
                        update: function(e) {
                            t.mainCircle.style.strokeDasharray = "".concat(t.dasharray1, " ").concat(t.dasharray2)
                        }
                    })
                }
            }, {
                key: "scrollMode",
                value: function() {
                    var t = this;
                    if (this.mode = "scroll", null !== this.scrollArrow && "" !== this.scrollArrow.style.transform && this.scrollToTopMode(!1), null !== this.dragArrowLeft && Object(r.a)({
                            targets: this.dragArrowLeft,
                            translateX: "-200%",
                            opacity: 0,
                            duration: 400,
                            easing: o.a.easings.soft
                        }), null !== this.dragArrowRight && Object(r.a)({
                            targets: this.dragArrowRight,
                            translateX: "200%",
                            opacity: 0,
                            duration: 400,
                            easing: "linear"
                        }), null != this.ctaWrap && Object(r.a)({
                            targets: this.ctaWrap,
                            translateY: "0",
                            duration: 3e3,
                            easing: "linear"
                        }), null !== this.scrollArrow && Object(r.a)({
                            targets: this.scrollArrow,
                            opacity: 1,
                            duration: 500,
                            easing: "linear"
                        }), null !== this.ctaText && (this.ctaText.innerHTML = "Scroll", Object(r.a)({
                            targets: this.ctaText,
                            translateX: "-50%",
                            translateY: "100%",
                            opacity: 1,
                            duration: 800,
                            easing: o.a.easings.soft
                        })), null !== o.a.page.previous && "gallery" === o.a.page.previous.slug) {
                        var e = this;
                        Object(r.a)({
                            targets: this.mainCircle,
                            r: this.normalizedRadius,
                            duration: 500,
                            easing: o.a.easings.soft
                        }), Object(r.a)({
                            targets: this,
                            dasharray2: 20,
                            dasharray1: 135,
                            duration: 500,
                            easing: o.a.easings.soft,
                            update: function(t) {
                                e.mainCircle.style.strokeDasharray = "".concat(e.dasharray1, " ").concat(e.dasharray2)
                            }
                        })
                    }
                    null === this.scrollAnimation && (this.scrollAnimation = setInterval((function() {
                        for (var e = function(e) {
                                setTimeout((function() {
                                    t.scrollArrowParts.forEach((function(t) {
                                        t.style.opacity = ".5"
                                    })), t.scrollArrowParts[e].style.opacity = "1"
                                }), 700 * e)
                            }, n = 0; n < 3; n++) e(n)
                    }), 2100))
                }
            }, {
                key: "scrollToTopMode",
                value: function() {
                    var t = this,
                        e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.mode = e ? "top" : "scroll", null !== this.scrollArrow && Object(r.a)({
                        targets: this.scrollArrow,
                        opacity: 0,
                        duration: 200,
                        easing: "linear",
                        complete: function() {
                            t.scrollArrow.style.transform = e ? "translateX(-50%) translateY(-70%) rotate(180deg)" : "", Object(r.a)({
                                targets: t.scrollArrow,
                                opacity: 1,
                                duration: 400,
                                easing: "linear"
                            })
                        }
                    }), null !== this.ctaText && Object(r.a)({
                        targets: this.ctaText,
                        opacity: 0,
                        duration: 200,
                        easing: "linear",
                        complete: function() {
                            t.ctaText.innerHTML = e ? "Top" : "Scroll", Object(r.a)({
                                targets: t.ctaText,
                                opacity: 1,
                                duration: 400,
                                easing: "linear"
                            })
                        }
                    })
                }
            }, {
                key: "dragMode",
                value: function() {
                    clearInterval(this.scrollAnimation), this.scrollAnimation = null, this.mode = "drag", Object(r.a)({
                        targets: this.$(".cta-scroll-arrow"),
                        opacity: 0,
                        duration: 500,
                        easing: "linear"
                    }), null !== this.ctaText && (this.ctaText.innerHTML = "drag", Object(r.a)({
                        targets: this.ctaText,
                        translateX: "-50%",
                        translateY: "-50%",
                        duration: 800,
                        easing: o.a.easings.soft
                    }));
                    var t = this;
                    Object(r.a)({
                        targets: this.mainCircle,
                        r: 32,
                        duration: 1e3,
                        easing: o.a.easings.soft
                    }), null !== this.ctaWrap && Object(r.a)({
                        targets: this.ctaWrap,
                        translateY: "1.35rem",
                        duration: 1e3,
                        easing: "linear"
                    }), null !== this.dragArrowLeft && Object(r.a)({
                        targets: this.dragArrowLeft,
                        translateX: "0",
                        opacity: 1,
                        duration: 800,
                        easing: o.a.easings.soft
                    }), null !== this.dragArrowRight && Object(r.a)({
                        targets: this.dragArrowRight,
                        translateX: "0",
                        opacity: 1,
                        duration: 800,
                        easing: o.a.easings.soft
                    }), Object(r.a)({
                        targets: this,
                        dasharray1: 1,
                        dasharray2: 0,
                        duration: 500,
                        easing: o.a.easings.soft,
                        update: function(e) {
                            t.mainCircle.style.strokeDasharray = "".concat(t.dasharray1, " ").concat(t.dasharray2)
                        }
                    })
                }
            }, {
                key: "injectSvg",
                value: function() {
                    var t = o.a.doc.createElement("div"),
                        e = o.a.doc.createElement("div"),
                        n = o.a.doc.createElement("div");
                    e.classList.add("cta-scroll-arrow"), t.classList.add("cta-circle-inner"), n.classList.add("cta-drag-arrows"), e.innerHTML = '\n            <svg viewBox="0 0 20.06 30.04">\n                <polyline class="cta-scroll-arrow-part" points="0.36 0.37 10.04 9.12 19.72 0.37" fill="none" stroke="var(--main-border-color)" stroke-miterlimit="10" opacity="0.5"/>\n                <polyline class="cta-scroll-arrow-part" points="0.36 10.65 5.2 15.03 10.04 19.4 14.88 15.03 19.72 10.65" fill="none" stroke="var(--main-border-color)" stroke-miterlimit="10" opacity="0.5"/>\n                <polyline class="cta-scroll-arrow-part" points="0.33 20.74 10.08 29.37 19.69 20.49" fill="none" stroke="var(--main-border-color)" stroke-miterlimit="10"/>\n            </svg>', t.innerHTML = '\n                <svg viewBox="0 0 '.concat(2 * this.radius, " ").concat(2 * this.radius, '">\n                    <circle\n                        class="cta-circle-main"\n                        opacity="1"\n                        fill="none"\n                        stroke="var(--main-border-color)"\n                        stroke-width="').concat(this.stroke, '"\n                        stroke-dasharray="135 ').concat(this.dasharray2, '"\n                        r="').concat(this.normalizedRadius, '"\n                        cx="').concat(this.radius, '"\n                        cy="').concat(this.radius, '"/>\n                </svg>\n            '), n.innerHTML = '\n                <div class="cta-drag-arrow-left">\n                    <svg viewBox="0 0 8.16 13.72">\n                        <polyline\n                            fill="none"\n                            stroke="var(--main-border-color)"\n                            stroke-width="0.1847"\n                            stroke-miterlimit="10"\n                            points="7.61,0.54 0.67,6.88 7.62,13.18"/>\n                        <polyline\n                            fill="none"\n                            stroke="var(--main-border-color)"\n                            stroke-linecap="round"\n                            stroke-linejoin="round"\n                            stroke-miterlimit="10" points="7.61,0.54 0.67,6.88 7.62,13.18"/>\n                    </svg>\n                </div>\n\n                <div class="cta-drag-arrow-right">\n                    <svg viewBox="0 0 8.16 13.72">\n                        <polyline\n                            fill="none"\n                            stroke="var(--main-border-color)"\n                            stroke-width="0.1847"\n                            stroke-miterlimit="10"\n                            points="0.67,13.18 7.62,6.84 0.67,0.54"/>\n                        <polyline\n                            fill="none"\n                            stroke="var(--main-border-color)"\n                            stroke-linecap="round"\n                            stroke-linejoin="round"\n                            stroke-miterlimit="10"\n                            points="0.67,13.18 7.62,6.84 0.67,0.54"/>\n                    </svg>\n                </div>\n        ', this.ctaWrap.appendChild(e), this.ctaWrap.appendChild(t), this.ctaWrap.appendChild(n), this.dragArrowLeft = this.$(".cta-drag-arrow-left"), this.dragArrowLeft.style.opacity = "0", this.dragArrowLeft.style.transform = "translateX(-200%)", this.dragArrowRight = this.$(".cta-drag-arrow-right"), this.dragArrowRight.style.opacity = "0", this.dragArrowLeft.style.transform = "translateX(200%)", this.mainCircle = this.$(".cta-circle-main"), this.scrollArrow = this.$(".cta-scroll-arrow"), this.scrollArrowParts = this.$$(".cta-scroll-arrow-part"), this.scrollArrowParts = this.$$(".cta-scroll-arrow-part"), this.scrollArrow.style.opacity = "0"
                }
            }]) && l(n.prototype, i), s && l(n, s), e
        }(i.a)
    },
    cYUZ: function(t, e, n) {
        var i;
        window, i = function() {
            return function(t) {
                var e = {};

                function n(i) {
                    if (e[i]) return e[i].exports;
                    var o = e[i] = {
                        i: i,
                        l: !1,
                        exports: {}
                    };
                    return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                }
                return n.m = t, n.c = e, n.d = function(t, e, i) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: i
                    })
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }, n.t = function(t, e) {
                    if (1 & e && (t = n(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var i = Object.create(null);
                    if (n.r(i), Object.defineProperty(i, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t)
                        for (var o in t) n.d(i, o, function(e) {
                            return t[e]
                        }.bind(null, o));
                    return i
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return n.d(e, "a", e), e
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, n.p = "", n(n.s = 0)
            }([function(t, e, n) {
                "use strict";

                function i(t) {
                    return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function o(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }

                function r(t, e, n) {
                    return (r = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                        var i = function(t, e) {
                            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)););
                            return t
                        }(t, e);
                        if (i) {
                            var o = Object.getOwnPropertyDescriptor(i, e);
                            return o.get ? o.get.call(n) : o.value
                        }
                    })(t, e, n || t)
                }

                function a(t, e) {
                    return !e || "object" !== i(e) && "function" != typeof e ? s(t) : e
                }

                function s(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }

                function l() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }

                function c(t) {
                    return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    })(t)
                }

                function u(t, e) {
                    return (u = Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e, t
                    })(t, e)
                }
                n.r(e), n(1), e.default = function(t) {
                    var e = t.dom.dom,
                        n = function(t) {
                            ! function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && u(t, e)
                            }(p, t);
                            var n, i, d, h, f = (n = p, function() {
                                var t, e = c(n);
                                if (l()) {
                                    var i = c(this).constructor;
                                    t = Reflect.construct(e, arguments, i)
                                } else t = e.apply(this, arguments);
                                return a(this, t)
                            });

                            function p(t, n) {
                                var i;
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, p), (i = f.call(this, t, n)).__fileReader = new FileReader, i.__image = document.createElement("img"), i.__imagePreview = document.createElement("img"), i.__input = document.createElement("input"), i.__image.src = t[n], i.__imagePreview.src = t[n], i.__input.type = "file", e.bind(i.__image, "load", i.handleImageLoaded.bind(s(i))), e.bind(i.__input, "change", i.handleFileUpload.bind(s(i))), e.bind(i.__fileReader, "loadend", i.handleFileLoaded.bind(s(i))), e.addClass(i.__imagePreview, "preview"), i.domElement.appendChild(i.__imagePreview), i.domElement.appendChild(i.__input), i
                            }
                            return i = p, (d = [{
                                key: "handleFileUpload",
                                value: function() {
                                    var t = this.__input.files[0];
                                    t && this.__fileReader.readAsDataURL(t)
                                }
                            }, {
                                key: "handleFileLoaded",
                                value: function() {
                                    this.handleFilePath(this.__fileReader.result)
                                }
                            }, {
                                key: "handleFilePath",
                                value: function(t) {
                                    t && (this.__image.src = t)
                                }
                            }, {
                                key: "handleImageLoaded",
                                value: function() {
                                    this.__imagePreview.src = this.__image.src, this.__onChange && this.__onChange.call(this, this.__image)
                                }
                            }, {
                                key: "updateDisplay",
                                value: function() {
                                    if (this.isModified()) {
                                        var t = this.getValue();
                                        this.handleFilePath(t), this.initialValue = t
                                    }
                                    return r(c(p.prototype), "updateDisplay", this).call(this)
                                }
                            }]) && o(i.prototype, d), h && o(i, h), p
                        }(t.controllers.Controller);
                    t.GUI.prototype.addImage = function(i, o) {
                        if (void 0 === i[o]) throw new Error('Object "' + i + '" has no property "' + o + '"');
                        var r = new n(i, o);
                        e.addClass(r.domElement, "c");
                        var a = document.createElement("span");
                        e.addClass(a, "property-name"), a.innerHTML = r.property;
                        var s = document.createElement("div");
                        s.appendChild(a), s.appendChild(r.domElement);
                        var l = document.createElement("li");
                        return s && l.appendChild(s), this.__ul.appendChild(l), this.onResize(), e.addClass(l, t.GUI.CLASS_CONTROLLER_ROW), e.addClass(l, "image"), r.__li = l, r.__gui = this, r.name = function(t) {
                            return this.__li.firstElementChild.firstElementChild.innerHTML = t, this
                        }, r.listen = function() {
                            return this.__gui.listen(this), this
                        }, r.remove = function() {
                            return this.__gui.remove(this), this
                        }, this.__controllers.push(r), r
                    }
                }
            }, function(t, e, n) {
                var i = n(2),
                    o = n(3);
                "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
                    [t.i, o, ""]
                ]);
                var r = {
                        insert: "head",
                        singleton: !1
                    },
                    a = (i(o, r), o.locals ? o.locals : {});
                t.exports = a
            }, function(t, e, n) {
                "use strict";
                var i, o = function() {
                        return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i
                    },
                    r = function() {
                        var t = {};
                        return function(e) {
                            if (void 0 === t[e]) {
                                var n = document.querySelector(e);
                                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                    n = n.contentDocument.head
                                } catch (t) {
                                    n = null
                                }
                                t[e] = n
                            }
                            return t[e]
                        }
                    }(),
                    a = [];

                function s(t) {
                    for (var e = -1, n = 0; n < a.length; n++)
                        if (a[n].identifier === t) {
                            e = n;
                            break
                        }
                    return e
                }

                function l(t, e) {
                    for (var n = {}, i = [], o = 0; o < t.length; o++) {
                        var r = t[o],
                            l = e.base ? r[0] + e.base : r[0],
                            c = n[l] || 0,
                            u = "".concat(l, " ").concat(c);
                        n[l] = c + 1;
                        var d = s(u),
                            h = {
                                css: r[1],
                                media: r[2],
                                sourceMap: r[3]
                            }; - 1 !== d ? (a[d].references++, a[d].updater(h)) : a.push({
                            identifier: u,
                            updater: g(h, e),
                            references: 1
                        }), i.push(u)
                    }
                    return i
                }

                function c(t) {
                    var e = document.createElement("style"),
                        i = t.attributes || {};
                    if (void 0 === i.nonce) {
                        var o = n.nc;
                        o && (i.nonce = o)
                    }
                    if (Object.keys(i).forEach((function(t) {
                            e.setAttribute(t, i[t])
                        })), "function" == typeof t.insert) t.insert(e);
                    else {
                        var a = r(t.insert || "head");
                        if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                        a.appendChild(e)
                    }
                    return e
                }
                var u, d = (u = [], function(t, e) {
                    return u[t] = e, u.filter(Boolean).join("\n")
                });

                function h(t, e, n, i) {
                    var o = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
                    if (t.styleSheet) t.styleSheet.cssText = d(e, o);
                    else {
                        var r = document.createTextNode(o),
                            a = t.childNodes;
                        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(r, a[e]) : t.appendChild(r)
                    }
                }

                function f(t, e, n) {
                    var i = n.css,
                        o = n.media,
                        r = n.sourceMap;
                    if (o ? t.setAttribute("media", o) : t.removeAttribute("media"), r && btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), t.styleSheet) t.styleSheet.cssText = i;
                    else {
                        for (; t.firstChild;) t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(i))
                    }
                }
                var p = null,
                    m = 0;

                function g(t, e) {
                    var n, i, o;
                    if (e.singleton) {
                        var r = m++;
                        n = p || (p = c(e)), i = h.bind(null, n, r, !1), o = h.bind(null, n, r, !0)
                    } else n = c(e), i = f.bind(null, n, e), o = function() {
                        ! function(t) {
                            if (null === t.parentNode) return !1;
                            t.parentNode.removeChild(t)
                        }(n)
                    };
                    return i(t),
                        function(e) {
                            if (e) {
                                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                                i(t = e)
                            } else o()
                        }
                }
                t.exports = function(t, e) {
                    (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = o());
                    var n = l(t = t || [], e);
                    return function(t) {
                        if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
                            for (var i = 0; i < n.length; i++) {
                                var o = s(n[i]);
                                a[o].references--
                            }
                            for (var r = l(t, e), c = 0; c < n.length; c++) {
                                var u = s(n[c]);
                                0 === a[u].references && (a[u].updater(), a.splice(u, 1))
                            }
                            n = r
                        }
                    }
                }
            }, function(t, e, n) {
                (e = n(4)(!1)).push([t.i, ".dg .cr.image{position:relative;height:auto;border-left:3px solid #2fa1d6}.dg .cr.image .preview{display:block;width:calc(100% + 5px);padding:4px 0;margin-left:-5px}.dg .cr.image input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}\n", ""]), t.exports = e
            }, function(t, e, n) {
                "use strict";
                t.exports = function(t) {
                    var e = [];
                    return e.toString = function() {
                        return this.map((function(e) {
                            var n = function(t, e) {
                                var n, i, o, r = t[1] || "",
                                    a = t[3];
                                if (!a) return r;
                                if (e && "function" == typeof btoa) {
                                    var s = (n = a, i = btoa(unescape(encodeURIComponent(JSON.stringify(n)))), o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i), "/*# ".concat(o, " */")),
                                        l = a.sources.map((function(t) {
                                            return "/*# sourceURL=".concat(a.sourceRoot || "").concat(t, " */")
                                        }));
                                    return [r].concat(l).concat([s]).join("\n")
                                }
                                return [r].join("\n")
                            }(e, t);
                            return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n
                        })).join("")
                    }, e.i = function(t, n, i) {
                        "string" == typeof t && (t = [
                            [null, t, ""]
                        ]);
                        var o = {};
                        if (i)
                            for (var r = 0; r < this.length; r++) {
                                var a = this[r][0];
                                null != a && (o[a] = !0)
                            }
                        for (var s = 0; s < t.length; s++) {
                            var l = [].concat(t[s]);
                            i && o[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), e.push(l))
                        }
                    }, e
                }
            }])
        }, t.exports = i()
    },
    g8Ma: function(t, e, n) {
        var i = {
            "./gl": ["lEI6", 0, 1],
            "./gl.js": ["lEI6", 0, 1],
            "./meshes/icosahedron": ["OEHq", 0, 2],
            "./meshes/icosahedron.js": ["OEHq", 0, 2]
        };

        function o(t) {
            if (!n.o(i, t)) return Promise.resolve().then((function() {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }));
            var e = i[t],
                o = e[0];
            return Promise.all(e.slice(1).map(n.e)).then((function() {
                return n(o)
            }))
        }
        o.keys = function() {
            return Object.keys(i)
        }, o.id = "g8Ma", t.exports = o
    },
    ijHy: function(t, e) {
        t.exports = function(t) {
            for (var e = atob(t.split(",")[1]), n = t.split(",")[0].split(":")[1].split(";")[0], i = new ArrayBuffer(e.length), o = new DataView(i), r = 0; r < e.length; r++) o.setUint8(r, e.charCodeAt(r));
            return new Blob([i], {
                type: n
            })
        }
    },
    j2ox: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        }));
        var i = function() {
            var t = {
                normalizeWheel: function(t) {
                    var e = 0,
                        n = 0,
                        i = 0,
                        o = 0;
                    return "detail" in t && (n = t.detail), "wheelDelta" in t && (n = -t.wheelDelta / 120), "wheelDeltaY" in t && (n = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = n, n = 0), i = 10 * e, o = 10 * n, "deltaY" in t && (o = t.deltaY), "deltaX" in t && (i = t.deltaX), (i || o) && t.deltaMode && (1 == t.deltaMode ? (i *= 40, o *= 40) : (i *= 800, o *= 800)), i && !e && (e = i < 1 ? -1 : 1), o && !n && (n = o < 1 ? -1 : 1), {
                        spinX: e,
                        spinY: n,
                        pixelX: i,
                        pixelY: o
                    }
                }
            };
            return t
        }()
    },
    ls82: function(t, e, n) {
        var i = function(t) {
            "use strict";
            var e, n = Object.prototype,
                i = n.hasOwnProperty,
                o = "function" == typeof Symbol ? Symbol : {},
                r = o.iterator || "@@iterator",
                a = o.asyncIterator || "@@asyncIterator",
                s = o.toStringTag || "@@toStringTag";

            function l(t, e, n, i) {
                var o = e && e.prototype instanceof m ? e : m,
                    r = Object.create(o.prototype),
                    a = new S(i || []);
                return r._invoke = function(t, e, n) {
                    var i = u;
                    return function(o, r) {
                        if (i === h) throw new Error("Generator is already running");
                        if (i === f) {
                            if ("throw" === o) throw r;
                            return j()
                        }
                        for (n.method = o, n.arg = r;;) {
                            var a = n.delegate;
                            if (a) {
                                var s = E(a, n);
                                if (s) {
                                    if (s === p) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (i === u) throw i = f, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            i = h;
                            var l = c(t, e, n);
                            if ("normal" === l.type) {
                                if (i = n.done ? f : d, l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (i = f, n.method = "throw", n.arg = l.arg)
                        }
                    }
                }(t, n, a), r
            }

            function c(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var u = "suspendedStart",
                d = "suspendedYield",
                h = "executing",
                f = "completed",
                p = {};

            function m() {}

            function g() {}

            function v() {}
            var y = {};
            y[r] = function() {
                return this
            };
            var b = Object.getPrototypeOf,
                w = b && b(b(C([])));
            w && w !== n && i.call(w, r) && (y = w);
            var _ = v.prototype = m.prototype = Object.create(y);

            function x(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t)
                    }
                }))
            }

            function k(t) {
                var e;
                this._invoke = function(n, o) {
                    function r() {
                        return new Promise((function(e, r) {
                            ! function e(n, o, r, a) {
                                var s = c(t[n], t, o);
                                if ("throw" !== s.type) {
                                    var l = s.arg,
                                        u = l.value;
                                    return u && "object" == typeof u && i.call(u, "__await") ? Promise.resolve(u.__await).then((function(t) {
                                        e("next", t, r, a)
                                    }), (function(t) {
                                        e("throw", t, r, a)
                                    })) : Promise.resolve(u).then((function(t) {
                                        l.value = t, r(l)
                                    }), (function(t) {
                                        return e("throw", t, r, a)
                                    }))
                                }
                                a(s.arg)
                            }(n, o, e, r)
                        }))
                    }
                    return e = e ? e.then(r, r) : r()
                }
            }

            function E(t, n) {
                var i = t.iterator[n.method];
                if (i === e) {
                    if (n.delegate = null, "throw" === n.method) {
                        if (t.iterator.return && (n.method = "return", n.arg = e, E(t, n), "throw" === n.method)) return p;
                        n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return p
                }
                var o = c(i, t.iterator, n.arg);
                if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, p;
                var r = o.arg;
                return r ? r.done ? (n[t.resultName] = r.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, p) : r : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, p)
            }

            function A(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function O(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function S(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(A, this), this.reset(!0)
            }

            function C(t) {
                if (t) {
                    var n = t[r];
                    if (n) return n.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length;)
                                    if (i.call(t, o)) return n.value = t[o], n.done = !1, n;
                                return n.value = e, n.done = !0, n
                            };
                        return a.next = a
                    }
                }
                return {
                    next: j
                }
            }

            function j() {
                return {
                    value: e,
                    done: !0
                }
            }
            return g.prototype = _.constructor = v, v.constructor = g, v[s] = g.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, s in t || (t[s] = "GeneratorFunction")), t.prototype = Object.create(_), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, x(k.prototype), k.prototype[a] = function() {
                return this
            }, t.AsyncIterator = k, t.async = function(e, n, i, o) {
                var r = new k(l(e, n, i, o));
                return t.isGeneratorFunction(n) ? r : r.next().then((function(t) {
                    return t.done ? t.value : r.next()
                }))
            }, x(_), _[s] = "Generator", _[r] = function() {
                return this
            }, _.toString = function() {
                return "[object Generator]"
            }, t.keys = function(t) {
                var e = [];
                for (var n in t) e.push(n);
                return e.reverse(),
                    function n() {
                        for (; e.length;) {
                            var i = e.pop();
                            if (i in t) return n.value = i, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, t.values = C, S.prototype = {
                constructor: S,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(O), !t)
                        for (var n in this) "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var n = this;

                    function o(i, o) {
                        return s.type = "throw", s.arg = t, n.next = i, o && (n.method = "next", n.arg = e), !!o
                    }
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r],
                            s = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var l = i.call(a, "catchLoc"),
                                c = i.call(a, "finallyLoc");
                            if (l && c) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                            } else if (l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && i.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var r = o;
                            break
                        }
                    }
                    r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
                    var a = r ? r.completion : {};
                    return a.type = t, a.arg = e, r ? (this.method = "next", this.next = r.finallyLoc, p) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), p
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var i = n.completion;
                            if ("throw" === i.type) {
                                var o = i.arg;
                                O(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, n, i) {
                    return this.delegate = {
                        iterator: C(t),
                        resultName: n,
                        nextLoc: i
                    }, "next" === this.method && (this.arg = e), p
                }
            }, t
        }(t.exports);
        try {
            regeneratorRuntime = i
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(i)
        }
    },
    mv1g: function(t, e, n) {
        var i = {
            "./anim": "XSMb",
            "./anim.js": "XSMb",
            "./aside": "YbcQ",
            "./aside.js": "YbcQ",
            "./close-button": "yXg1",
            "./close-button.js": "yXg1",
            "./cta": "aU2D",
            "./cta.js": "aU2D",
            "./header": "8aAX",
            "./header.js": "8aAX",
            "./loadericon": "pDBs",
            "./loadericon.js": "pDBs",
            "./loaderprogress": "W3FC",
            "./loaderprogress.js": "W3FC",
            "./loadertext": "Va3W",
            "./loadertext.js": "Va3W",
            "./menu": "5IH5",
            "./menu.js": "5IH5"
        };

        function o(t) {
            var e = r(t);
            return n(e)
        }

        function r(t) {
            if (!n.o(i, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return i[t]
        }
        o.keys = function() {
            return Object.keys(i)
        }, o.resolve = r, t.exports = o, o.id = "mv1g"
    },
    o0o1: function(t, e, n) {
        t.exports = n("ls82")
    },
    pDBs: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "default", (function() {
            return h
        }));
        var i = n("z+i3"),
            o = n("EgnG"),
            r = n("QZz8");

        function a(t) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function s(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function l(t, e) {
            return !e || "object" !== a(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function c(t, e, n) {
            return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function u(t) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function d(t, e) {
            return (d = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var h = function(t) {
            function e() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), l(this, u(e).apply(this, arguments))
            }
            var n, i, a;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && d(t, e)
            }(e, t), n = e, (i = [{
                key: "init",
                value: function() {
                    c(u(e.prototype), "init", this).call(this), this.loading = this.loading.bind(this), this.setLoadingPoint = this.setLoadingPoint.bind(this), this.loaderReset = this.loaderReset.bind(this), this.loaderCircle = this.$(".loader-circle"), this.scale = this.scale.bind(this), this.radius = 9, this.stroke = 1, this.circleProgress = null, this.rotation = -90, this.loadingAnimation = null, this.counterTimeline = null, this.playing = !1, this.normalizedRadius = this.radius - 2 * this.stroke, this.circumference = 2 * this.normalizedRadius * Math.PI, this.loading(), this.setupCounter(), this.loadingAnimation = Object(o.a)({
                        targets: this.loaderCircle,
                        rotate: [this.rotation, this.rotation + 360],
                        duration: 2e3,
                        loop: !0,
                        easing: "linear"
                    })
                }
            }, {
                key: "initEvents",
                value: function() {
                    c(u(e.prototype), "initEvents", this).call(this), r.a.doc.addEventListener("loadAnimation", this.loading, !1), r.a.doc.addEventListener("loaderDone", this.loaderReset, !1)
                }
            }, {
                key: "destroyEvents",
                value: function() {
                    c(u(e.prototype), "destroyEvents", this).call(this)
                }
            }, {
                key: "setupCounter",
                value: function() {
                    this.counter = r.a.doc.createElement("div"), this.counter.classList.add("counter", "text-center", "font-regular", "text-8", "center", "opacity-0")
                }
            }, {
                key: "setLoadingPoint",
                value: function(t) {
                    this.circleProgress.style = "stroke-dasharray: ".concat(this.circumference / (100 / t), " ").concat(this.circumference, ";"), 100 === t && null !== this.loadingAnimation && this.loadingAnimation.pause()
                }
            }, {
                key: "scale",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 9;
                    this.radius = t, this.normalizedRadius = this.radius - 2 * this.stroke, this.circumference = 2 * this.normalizedRadius * Math.PI
                }
            }, {
                key: "scrollMode",
                value: function() {
                    var t = this;
                    this.count && this.count.pause(), this.loadingAnimation.pause(), this.scrollTimeline = o.a.timeline({
                        easing: "easeOutExpo",
                        duration: 2400
                    }), this.scrollTimeline.add({
                        targets: this.loaderCircle,
                        scale: 0,
                        duration: 500,
                        easing: "linear",
                        complete: function(e) {
                            t.scale(), t.loading(), t.counter.remove()
                        }
                    }), this.scrollTimeline.add({
                        targets: this.counter,
                        opacity: 1,
                        duration: 500,
                        easing: "linear"
                    }), this.scrollTimeline.add({
                        targets: this.loaderCircle,
                        scale: 1,
                        duration: 1200,
                        easing: r.a.easings.soft
                    }, "-=500")
                }
            }, {
                key: "counterMode",
                value: function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.loadingAnimation && this.loadingAnimation.pause(), this.counterTimeline && this.counterTimeline.pause(), this.count && this.count.pause(), clearTimeout(this.countTimeout), this.counterTimeline = o.a.timeline({
                        easing: "easeOutExpo",
                        duration: 2400
                    }), this.counterTimeline.add({
                        targets: this.counter,
                        opacity: 0,
                        duration: 300,
                        easing: "linear",
                        complete: function(n) {
                            t.counter.innerHTML = e / 1e3
                        }
                    }), this.counterTimeline.add({
                        targets: this.loaderCircle,
                        scale: 0,
                        duration: 500,
                        easing: "linear",
                        complete: function(e) {
                            t.scale(18), t.loading(), t.component.appendChild(t.counter)
                        }
                    }, "-=300"), this.counterTimeline.add({
                        targets: this.counter,
                        opacity: 1,
                        duration: 500,
                        easing: "linear"
                    }), this.counterTimeline.add({
                        targets: this.loaderCircle,
                        scale: 1,
                        duration: 1200,
                        easing: r.a.easings.soft,
                        complete: function(n) {
                            t.startCounting(e)
                        }
                    }, "-=500")
                }
            }, {
                key: "startCounting",
                value: function(t) {
                    var e = this;
                    this.playing = !0;
                    var n = t / 100;
                    this.count = Object(o.a)({
                        duration: t,
                        easing: "linear",
                        update: function(t) {
                            e.counter.innerHTML = Math.round((n - t.progress / 100 * n) / 10), e.setLoadingPoint(t.progress)
                        },
                        complete: function() {
                            r.a.pages.gallery.next(), e.playing = !1
                        }
                    })
                }
            }, {
                key: "loaderReset",
                value: function() {
                    Object(o.a)({
                        targets: this.circleProgress,
                        strokeDashoffset: {
                            value: "".concat(this.circumference)
                        },
                        duration: 1200,
                        delay: 400,
                        easing: r.a.easings.soft
                    }), Object(o.a)({
                        targets: this.loaderCircle,
                        rotate: this.rotation,
                        duration: 1200,
                        delay: 400,
                        easing: r.a.easings.soft
                    })
                }
            }, {
                key: "loading",
                value: function() {
                    this.loaderCircle.innerHTML = '\n            <svg width="'.concat(2 * this.radius, '" height="').concat(2 * this.radius, '">\n                <circle class="circle-base"\n                    fill="none"\n                    opacity="0.9"\n                    stroke="var(--main-border-color)"\n                    stroke-width="').concat(this.stroke, '"\n                    r="').concat(this.normalizedRadius, '"\n                    cx="').concat(this.radius, '"\n                    cy="').concat(this.radius, '"/>\n                <circle class="circle-progress"\n                    opacity="1"\n                    fill="none"\n                    stroke="var(--main-progress-color)"\n                    stroke-width="').concat(this.stroke, '"\n                    r="').concat(this.normalizedRadius, '"\n                    cx="').concat(this.radius, '"\n                    cy="').concat(this.radius, '"/>\n            </svg>'), Object(o.a)({
                        targets: this.loaderCircle,
                        opacity: 1,
                        delay: 700,
                        duration: 500
                    }), this.circleProgress = this.loaderCircle.querySelector(".circle-progress"), this.setLoadingPoint(0)
                }
            }]) && s(n.prototype, i), a && s(n, a), e
        }(i.a)
    },
    tUEC: function(t, e, n) {
        "use strict";

        function i() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") + "_" + Math.random().toString(36).substr(2, 9)
        }
        n.d(e, "a", (function() {
            return i
        }))
    },
    yXg1: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "default", (function() {
            return h
        }));
        var i = n("EgnG"),
            o = n("z+i3"),
            r = n("QZz8");

        function a(t) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function s(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function l(t, e) {
            return !e || "object" !== a(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function c(t, e, n) {
            return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function u(t) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function d(t, e) {
            return (d = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var h = function(t) {
            function e() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), l(this, u(e).apply(this, arguments))
            }
            var n, o, a;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && d(t, e)
            }(e, t), n = e, (o = [{
                key: "init",
                value: function() {
                    c(u(e.prototype), "init", this).call(this), this.animateIn = this.animateIn.bind(this), this.animateOut = this.animateOut.bind(this), this.lineLength = 25.35, this.dashArray = 35, this.dashoffset1 = 70, this.dashoffset2 = 70, this.closeButton = null, this.line1 = null, this.line2 = null, this.svg = '\n        <div class="close-icon opacity-0 pointer-events-none">\n            <div class="close-icon-line close-icon-line-1"></div>\n            <div class="close-icon-line close-icon-line-2"></div>\n        </div>'
                }
            }, {
                key: "initEvents",
                value: function() {
                    c(u(e.prototype), "initEvents", this).call(this)
                }
            }, {
                key: "destroyEvents",
                value: function() {
                    c(u(e.prototype), "destroyEvents", this).call(this)
                }
            }, {
                key: "animateOut",
                value: function() {
                    null !== this.closeButton && Object(i.a)({
                        targets: this.closeButton,
                        opacity: 0,
                        duration: 300,
                        easing: "linear"
                    })
                }
            }, {
                key: "animateIn",
                value: function() {
                    this.closeButton = r.a.doc.querySelector(".close-icon"), this.line1 = r.a.doc.querySelector(".close-icon-line-1"), this.line2 = r.a.doc.querySelector(".close-icon-line-2"), Object(i.a)({
                        targets: this.closeButton,
                        opacity: 1,
                        duration: 300,
                        easing: "linear"
                    })
                }
            }]) && s(n.prototype, o), a && s(n, a), e
        }(o.a)
    },
    "z+i3": function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return a
        }));
        var i = n("QZz8"),
            o = n("tUEC");

        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var a = function() {
            function t(e, n, r) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.slug = e || "block", this.page = void 0 !== n ? n : "", this.component = void 0 !== r ? r : i.a.doc.querySelector('[data-module="'.concat(e, '"')), this.id = Object(o.a)(e), this.init(), this.initEvents()
            }
            var e, n, a;
            return e = t, (n = [{
                key: "init",
                value: function() {}
            }, {
                key: "initEvents",
                value: function() {}
            }, {
                key: "destroy",
                value: function() {
                    this.destroyEvents()
                }
            }, {
                key: "destroyEvents",
                value: function() {}
            }, {
                key: "$",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.component;
                    return e.querySelector(t)
                }
            }, {
                key: "$$",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.component;
                    return Array.from(e.querySelectorAll(t))
                }
            }]) && r(e.prototype, n), a && r(e, a), t
        }()
    }
});