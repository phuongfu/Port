(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        Womt: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return yn
            })), i.d(e, "b", (function() {
                return zl
            })), i.d(e, "c", (function() {
                return hn
            })), i.d(e, "d", (function() {
                return _h
            })), i.d(e, "e", (function() {
                return Po
            })), i.d(e, "f", (function() {
                return js
            })), i.d(e, "g", (function() {
                return ks
            })), i.d(e, "h", (function() {
                return dt
            })), i.d(e, "i", (function() {
                return er
            })), i.d(e, "j", (function() {
                return ht
            })), i.d(e, "k", (function() {
                return ol
            })), i.d(e, "l", (function() {
                return s
            })), i.d(e, "m", (function() {
                return gr
            })), i.d(e, "n", (function() {
                return Nr
            })), i.d(e, "o", (function() {
                return Or
            })), i.d(e, "p", (function() {
                return al
            })), i.d(e, "q", (function() {
                return Et
            })), i.d(e, "r", (function() {
                return yi
            })), i.d(e, "s", (function() {
                return mr
            })), i.d(e, "t", (function() {
                return Ch
            })), i.d(e, "u", (function() {
                return pr
            })), i.d(e, "v", (function() {
                return Ne
            })), i.d(e, "w", (function() {
                return Re
            })), i.d(e, "x", (function() {
                return We
            })), i.d(e, "y", (function() {
                return Eo
            })), void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(t) {
                return "number" == typeof t && isFinite(t) && Math.floor(t) === t
            }), void 0 === Math.sign && (Math.sign = function(t) {
                return t < 0 ? -1 : t > 0 ? 1 : +t
            }), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
                get: function() {
                    return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
                }
            }), void 0 === Object.assign && (Object.assign = function(t) {
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), i = 1; i < arguments.length; i++) {
                    var n = arguments[i];
                    if (null != n)
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            });
            var n = 0,
                r = 1,
                a = 2,
                o = 1,
                s = 2,
                c = 3,
                h = 0,
                l = 1,
                u = 2,
                p = 0,
                d = 1,
                f = 2,
                m = 0,
                v = 1,
                g = 2,
                y = 3,
                x = 4,
                _ = 5,
                b = 100,
                M = 101,
                w = 102,
                S = 103,
                T = 104,
                A = 200,
                L = 201,
                P = 202,
                C = 203,
                E = 204,
                O = 205,
                N = 206,
                I = 207,
                D = 208,
                z = 209,
                R = 210,
                F = 0,
                U = 1,
                B = 2,
                V = 3,
                G = 4,
                k = 5,
                j = 6,
                W = 7,
                H = 0,
                q = 1,
                X = 2,
                Y = 0,
                J = 1,
                Z = 2,
                Q = 3,
                K = 4,
                $ = 5,
                tt = 301,
                et = 302,
                it = 303,
                nt = 304,
                rt = 305,
                at = 306,
                ot = 307,
                st = 1e3,
                ct = 1001,
                ht = 1002,
                lt = 1003,
                ut = 1004,
                pt = 1005,
                dt = 1006,
                ft = 1007,
                mt = 1008,
                vt = 1009,
                gt = 1010,
                yt = 1011,
                xt = 1012,
                _t = 1013,
                bt = 1014,
                Mt = 1015,
                wt = 1016,
                St = 1017,
                Tt = 1018,
                At = 1019,
                Lt = 1020,
                Pt = 1021,
                Ct = 1022,
                Et = 1023,
                Ot = 1024,
                Nt = 1025,
                It = Et,
                Dt = 1026,
                zt = 1027,
                Rt = 1028,
                Ft = 1029,
                Ut = 1030,
                Bt = 1031,
                Vt = 1032,
                Gt = 1033,
                kt = 33776,
                jt = 33777,
                Wt = 33778,
                Ht = 33779,
                qt = 35840,
                Xt = 35841,
                Yt = 35842,
                Jt = 35843,
                Zt = 36196,
                Qt = 37808,
                Kt = 37809,
                $t = 37810,
                te = 37811,
                ee = 37812,
                ie = 37813,
                ne = 37814,
                re = 37815,
                ae = 37816,
                oe = 37817,
                se = 37818,
                ce = 37819,
                he = 37820,
                le = 37821,
                ue = 2201,
                pe = 2400,
                de = 3e3,
                fe = 3001,
                me = 3007,
                ve = 3002,
                ge = 3003,
                ye = 3004,
                xe = 3005,
                _e = 3006,
                be = 3200,
                Me = 3201,
                we = 0,
                Se = 1,
                Te = 7680,
                Ae = 519,
                Le = 35044;

            function Pe() {}
            Object.assign(Pe.prototype, {
                addEventListener: function(t, e) {
                    void 0 === this._listeners && (this._listeners = {});
                    var i = this._listeners;
                    void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e)
                },
                hasEventListener: function(t, e) {
                    if (void 0 === this._listeners) return !1;
                    var i = this._listeners;
                    return void 0 !== i[t] && -1 !== i[t].indexOf(e)
                },
                removeEventListener: function(t, e) {
                    if (void 0 !== this._listeners) {
                        var i = this._listeners[t];
                        if (void 0 !== i) {
                            var n = i.indexOf(e); - 1 !== n && i.splice(n, 1)
                        }
                    }
                },
                dispatchEvent: function(t) {
                    if (void 0 !== this._listeners) {
                        var e = this._listeners[t.type];
                        if (void 0 !== e) {
                            t.target = this;
                            for (var i = e.slice(0), n = 0, r = i.length; n < r; n++) i[n].call(this, t)
                        }
                    }
                }
            });
            for (var Ce = [], Ee = 0; Ee < 256; Ee++) Ce[Ee] = (Ee < 16 ? "0" : "") + Ee.toString(16);
            var Oe = {
                DEG2RAD: Math.PI / 180,
                RAD2DEG: 180 / Math.PI,
                generateUUID: function() {
                    var t = 4294967295 * Math.random() | 0,
                        e = 4294967295 * Math.random() | 0,
                        i = 4294967295 * Math.random() | 0,
                        n = 4294967295 * Math.random() | 0;
                    return (Ce[255 & t] + Ce[t >> 8 & 255] + Ce[t >> 16 & 255] + Ce[t >> 24 & 255] + "-" + Ce[255 & e] + Ce[e >> 8 & 255] + "-" + Ce[e >> 16 & 15 | 64] + Ce[e >> 24 & 255] + "-" + Ce[63 & i | 128] + Ce[i >> 8 & 255] + "-" + Ce[i >> 16 & 255] + Ce[i >> 24 & 255] + Ce[255 & n] + Ce[n >> 8 & 255] + Ce[n >> 16 & 255] + Ce[n >> 24 & 255]).toUpperCase()
                },
                clamp: function(t, e, i) {
                    return Math.max(e, Math.min(i, t))
                },
                euclideanModulo: function(t, e) {
                    return (t % e + e) % e
                },
                mapLinear: function(t, e, i, n, r) {
                    return n + (t - e) * (r - n) / (i - e)
                },
                lerp: function(t, e, i) {
                    return (1 - i) * t + i * e
                },
                smoothstep: function(t, e, i) {
                    return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t)
                },
                smootherstep: function(t, e, i) {
                    return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10)
                },
                randInt: function(t, e) {
                    return t + Math.floor(Math.random() * (e - t + 1))
                },
                randFloat: function(t, e) {
                    return t + Math.random() * (e - t)
                },
                randFloatSpread: function(t) {
                    return t * (.5 - Math.random())
                },
                degToRad: function(t) {
                    return t * Oe.DEG2RAD
                },
                radToDeg: function(t) {
                    return t * Oe.RAD2DEG
                },
                isPowerOfTwo: function(t) {
                    return 0 == (t & t - 1) && 0 !== t
                },
                ceilPowerOfTwo: function(t) {
                    return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
                },
                floorPowerOfTwo: function(t) {
                    return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
                }
            };

            function Ne(t, e) {
                this.x = t || 0, this.y = e || 0
            }

            function Ie(t, e, i, n) {
                this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 !== n ? n : 1
            }
            Object.defineProperties(Ne.prototype, {
                width: {
                    get: function() {
                        return this.x
                    },
                    set: function(t) {
                        this.x = t
                    }
                },
                height: {
                    get: function() {
                        return this.y
                    },
                    set: function(t) {
                        this.y = t
                    }
                }
            }), Object.assign(Ne.prototype, {
                isVector2: !0,
                set: function(t, e) {
                    return this.x = t, this.y = e, this
                },
                setScalar: function(t) {
                    return this.x = t, this.y = t, this
                },
                setX: function(t) {
                    return this.x = t, this
                },
                setY: function(t) {
                    return this.y = t, this
                },
                setComponent: function(t, e) {
                    switch (t) {
                        case 0:
                            this.x = e;
                            break;
                        case 1:
                            this.y = e;
                            break;
                        default:
                            throw new Error("index is out of range: " + t)
                    }
                    return this
                },
                getComponent: function(t) {
                    switch (t) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        default:
                            throw new Error("index is out of range: " + t)
                    }
                },
                clone: function() {
                    return new this.constructor(this.x, this.y)
                },
                copy: function(t) {
                    return this.x = t.x, this.y = t.y, this
                },
                add: function(t, e) {
                    return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this)
                },
                addScalar: function(t) {
                    return this.x += t, this.y += t, this
                },
                addVectors: function(t, e) {
                    return this.x = t.x + e.x, this.y = t.y + e.y, this
                },
                addScaledVector: function(t, e) {
                    return this.x += t.x * e, this.y += t.y * e, this
                },
                sub: function(t, e) {
                    return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this)
                },
                subScalar: function(t) {
                    return this.x -= t, this.y -= t, this
                },
                subVectors: function(t, e) {
                    return this.x = t.x - e.x, this.y = t.y - e.y, this
                },
                multiply: function(t) {
                    return this.x *= t.x, this.y *= t.y, this
                },
                multiplyScalar: function(t) {
                    return this.x *= t, this.y *= t, this
                },
                divide: function(t) {
                    return this.x /= t.x, this.y /= t.y, this
                },
                divideScalar: function(t) {
                    return this.multiplyScalar(1 / t)
                },
                applyMatrix3: function(t) {
                    var e = this.x,
                        i = this.y,
                        n = t.elements;
                    return this.x = n[0] * e + n[3] * i + n[6], this.y = n[1] * e + n[4] * i + n[7], this
                },
                min: function(t) {
                    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
                },
                max: function(t) {
                    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
                },
                clamp: function(t, e) {
                    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
                },
                clampScalar: function(t, e) {
                    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this
                },
                clampLength: function(t, e) {
                    var i = this.length();
                    return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
                },
                floor: function() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                },
                ceil: function() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
                },
                round: function() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                },
                roundToZero: function() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
                },
                negate: function() {
                    return this.x = -this.x, this.y = -this.y, this
                },
                dot: function(t) {
                    return this.x * t.x + this.y * t.y
                },
                cross: function(t) {
                    return this.x * t.y - this.y * t.x
                },
                lengthSq: function() {
                    return this.x * this.x + this.y * this.y
                },
                length: function() {
                    return Math.sqrt(this.x * this.x + this.y * this.y)
                },
                manhattanLength: function() {
                    return Math.abs(this.x) + Math.abs(this.y)
                },
                normalize: function() {
                    return this.divideScalar(this.length() || 1)
                },
                angle: function() {
                    var t = Math.atan2(this.y, this.x);
                    return t < 0 && (t += 2 * Math.PI), t
                },
                distanceTo: function(t) {
                    return Math.sqrt(this.distanceToSquared(t))
                },
                distanceToSquared: function(t) {
                    var e = this.x - t.x,
                        i = this.y - t.y;
                    return e * e + i * i
                },
                manhattanDistanceTo: function(t) {
                    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
                },
                setLength: function(t) {
                    return this.normalize().multiplyScalar(t)
                },
                lerp: function(t, e) {
                    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
                },
                lerpVectors: function(t, e, i) {
                    return this.subVectors(e, t).multiplyScalar(i).add(t)
                },
                equals: function(t) {
                    return t.x === this.x && t.y === this.y
                },
                fromArray: function(t, e) {
                    return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
                },
                toArray: function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
                },
                fromBufferAttribute: function(t, e, i) {
                    return this.x = t.getX(e), this.y = t.getY(e), this
                },
                rotateAround: function(t, e) {
                    var i = Math.cos(e),
                        n = Math.sin(e),
                        r = this.x - t.x,
                        a = this.y - t.y;
                    return this.x = r * i - a * n + t.x, this.y = r * n + a * i + t.y, this
                }
            }), Object.assign(Ie, {
                slerp: function(t, e, i, n) {
                    return i.copy(t).slerp(e, n)
                },
                slerpFlat: function(t, e, i, n, r, a, o) {
                    var s = i[n + 0],
                        c = i[n + 1],
                        h = i[n + 2],
                        l = i[n + 3],
                        u = r[a + 0],
                        p = r[a + 1],
                        d = r[a + 2],
                        f = r[a + 3];
                    if (l !== f || s !== u || c !== p || h !== d) {
                        var m = 1 - o,
                            v = s * u + c * p + h * d + l * f,
                            g = v >= 0 ? 1 : -1,
                            y = 1 - v * v;
                        if (y > Number.EPSILON) {
                            var x = Math.sqrt(y),
                                _ = Math.atan2(x, v * g);
                            m = Math.sin(m * _) / x, o = Math.sin(o * _) / x
                        }
                        var b = o * g;
                        if (s = s * m + u * b, c = c * m + p * b, h = h * m + d * b, l = l * m + f * b, m === 1 - o) {
                            var M = 1 / Math.sqrt(s * s + c * c + h * h + l * l);
                            s *= M, c *= M, h *= M, l *= M
                        }
                    }
                    t[e] = s, t[e + 1] = c, t[e + 2] = h, t[e + 3] = l
                }
            }), Object.defineProperties(Ie.prototype, {
                x: {
                    get: function() {
                        return this._x
                    },
                    set: function(t) {
                        this._x = t, this._onChangeCallback()
                    }
                },
                y: {
                    get: function() {
                        return this._y
                    },
                    set: function(t) {
                        this._y = t, this._onChangeCallback()
                    }
                },
                z: {
                    get: function() {
                        return this._z
                    },
                    set: function(t) {
                        this._z = t, this._onChangeCallback()
                    }
                },
                w: {
                    get: function() {
                        return this._w
                    },
                    set: function(t) {
                        this._w = t, this._onChangeCallback()
                    }
                }
            }), Object.assign(Ie.prototype, {
                isQuaternion: !0,
                set: function(t, e, i, n) {
                    return this._x = t, this._y = e, this._z = i, this._w = n, this._onChangeCallback(), this
                },
                clone: function() {
                    return new this.constructor(this._x, this._y, this._z, this._w)
                },
                copy: function(t) {
                    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this
                },
                setFromEuler: function(t, e) {
                    if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
                    var i = t._x,
                        n = t._y,
                        r = t._z,
                        a = t.order,
                        o = Math.cos,
                        s = Math.sin,
                        c = o(i / 2),
                        h = o(n / 2),
                        l = o(r / 2),
                        u = s(i / 2),
                        p = s(n / 2),
                        d = s(r / 2);
                    return "XYZ" === a ? (this._x = u * h * l + c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l - u * p * d) : "YXZ" === a ? (this._x = u * h * l + c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l + u * p * d) : "ZXY" === a ? (this._x = u * h * l - c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l - u * p * d) : "ZYX" === a ? (this._x = u * h * l - c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l + u * p * d) : "YZX" === a ? (this._x = u * h * l + c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l - u * p * d) : "XZY" === a && (this._x = u * h * l - c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l + u * p * d), !1 !== e && this._onChangeCallback(), this
                },
                setFromAxisAngle: function(t, e) {
                    var i = e / 2,
                        n = Math.sin(i);
                    return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(i), this._onChangeCallback(), this
                },
                setFromRotationMatrix: function(t) {
                    var e, i = t.elements,
                        n = i[0],
                        r = i[4],
                        a = i[8],
                        o = i[1],
                        s = i[5],
                        c = i[9],
                        h = i[2],
                        l = i[6],
                        u = i[10],
                        p = n + s + u;
                    return p > 0 ? (e = .5 / Math.sqrt(p + 1), this._w = .25 / e, this._x = (l - c) * e, this._y = (a - h) * e, this._z = (o - r) * e) : n > s && n > u ? (e = 2 * Math.sqrt(1 + n - s - u), this._w = (l - c) / e, this._x = .25 * e, this._y = (r + o) / e, this._z = (a + h) / e) : s > u ? (e = 2 * Math.sqrt(1 + s - n - u), this._w = (a - h) / e, this._x = (r + o) / e, this._y = .25 * e, this._z = (c + l) / e) : (e = 2 * Math.sqrt(1 + u - n - s), this._w = (o - r) / e, this._x = (a + h) / e, this._y = (c + l) / e, this._z = .25 * e), this._onChangeCallback(), this
                },
                setFromUnitVectors: function(t, e) {
                    var i = t.dot(e) + 1;
                    return i < 1e-6 ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = i)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = i), this.normalize()
                },
                angleTo: function(t) {
                    return 2 * Math.acos(Math.abs(Oe.clamp(this.dot(t), -1, 1)))
                },
                rotateTowards: function(t, e) {
                    var i = this.angleTo(t);
                    if (0 === i) return this;
                    var n = Math.min(1, e / i);
                    return this.slerp(t, n), this
                },
                inverse: function() {
                    return this.conjugate()
                },
                conjugate: function() {
                    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
                },
                dot: function(t) {
                    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
                },
                lengthSq: function() {
                    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
                },
                length: function() {
                    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
                },
                normalize: function() {
                    var t = this.length();
                    return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this
                },
                multiply: function(t, e) {
                    return void 0 !== e ? this.multiplyQuaternions(t, e) : this.multiplyQuaternions(this, t)
                },
                premultiply: function(t) {
                    return this.multiplyQuaternions(t, this)
                },
                multiplyQuaternions: function(t, e) {
                    var i = t._x,
                        n = t._y,
                        r = t._z,
                        a = t._w,
                        o = e._x,
                        s = e._y,
                        c = e._z,
                        h = e._w;
                    return this._x = i * h + a * o + n * c - r * s, this._y = n * h + a * s + r * o - i * c, this._z = r * h + a * c + i * s - n * o, this._w = a * h - i * o - n * s - r * c, this._onChangeCallback(), this
                },
                slerp: function(t, e) {
                    if (0 === e) return this;
                    if (1 === e) return this.copy(t);
                    var i = this._x,
                        n = this._y,
                        r = this._z,
                        a = this._w,
                        o = a * t._w + i * t._x + n * t._y + r * t._z;
                    if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = i, this._y = n, this._z = r, this;
                    var s = 1 - o * o;
                    if (s <= Number.EPSILON) {
                        var c = 1 - e;
                        return this._w = c * a + e * this._w, this._x = c * i + e * this._x, this._y = c * n + e * this._y, this._z = c * r + e * this._z, this.normalize(), this._onChangeCallback(), this
                    }
                    var h = Math.sqrt(s),
                        l = Math.atan2(h, o),
                        u = Math.sin((1 - e) * l) / h,
                        p = Math.sin(e * l) / h;
                    return this._w = a * u + this._w * p, this._x = i * u + this._x * p, this._y = n * u + this._y * p, this._z = r * u + this._z * p, this._onChangeCallback(), this
                },
                equals: function(t) {
                    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
                },
                fromArray: function(t, e) {
                    return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this
                },
                toArray: function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
                },
                _onChange: function(t) {
                    return this._onChangeCallback = t, this
                },
                _onChangeCallback: function() {}
            });
            var De = new Re,
                ze = new Ie;

            function Re(t, e, i) {
                this.x = t || 0, this.y = e || 0, this.z = i || 0
            }
            Object.assign(Re.prototype, {
                isVector3: !0,
                set: function(t, e, i) {
                    return this.x = t, this.y = e, this.z = i, this
                },
                setScalar: function(t) {
                    return this.x = t, this.y = t, this.z = t, this
                },
                setX: function(t) {
                    return this.x = t, this
                },
                setY: function(t) {
                    return this.y = t, this
                },
                setZ: function(t) {
                    return this.z = t, this
                },
                setComponent: function(t, e) {
                    switch (t) {
                        case 0:
                            this.x = e;
                            break;
                        case 1:
                            this.y = e;
                            break;
                        case 2:
                            this.z = e;
                            break;
                        default:
                            throw new Error("index is out of range: " + t)
                    }
                    return this
                },
                getComponent: function(t) {
                    switch (t) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        case 2:
                            return this.z;
                        default:
                            throw new Error("index is out of range: " + t)
                    }
                },
                clone: function() {
                    return new this.constructor(this.x, this.y, this.z)
                },
                copy: function(t) {
                    return this.x = t.x, this.y = t.y, this.z = t.z, this
                },
                add: function(t, e) {
                    return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
                },
                addScalar: function(t) {
                    return this.x += t, this.y += t, this.z += t, this
                },
                addVectors: function(t, e) {
                    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
                },
                addScaledVector: function(t, e) {
                    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
                },
                sub: function(t, e) {
                    return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
                },
                subScalar: function(t) {
                    return this.x -= t, this.y -= t, this.z -= t, this
                },
                subVectors: function(t, e) {
                    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
                },
                multiply: function(t, e) {
                    return void 0 !== e ? this.multiplyVectors(t, e) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
                },
                multiplyScalar: function(t) {
                    return this.x *= t, this.y *= t, this.z *= t, this
                },
                multiplyVectors: function(t, e) {
                    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
                },
                applyEuler: function(t) {
                    return !t || t.isEuler, this.applyQuaternion(ze.setFromEuler(t))
                },
                applyAxisAngle: function(t, e) {
                    return this.applyQuaternion(ze.setFromAxisAngle(t, e))
                },
                applyMatrix3: function(t) {
                    var e = this.x,
                        i = this.y,
                        n = this.z,
                        r = t.elements;
                    return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n, this.z = r[2] * e + r[5] * i + r[8] * n, this
                },
                applyNormalMatrix: function(t) {
                    return this.applyMatrix3(t).normalize()
                },
                applyMatrix4: function(t) {
                    var e = this.x,
                        i = this.y,
                        n = this.z,
                        r = t.elements,
                        a = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]);
                    return this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * a, this.y = (r[1] * e + r[5] * i + r[9] * n + r[13]) * a, this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * a, this
                },
                applyQuaternion: function(t) {
                    var e = this.x,
                        i = this.y,
                        n = this.z,
                        r = t.x,
                        a = t.y,
                        o = t.z,
                        s = t.w,
                        c = s * e + a * n - o * i,
                        h = s * i + o * e - r * n,
                        l = s * n + r * i - a * e,
                        u = -r * e - a * i - o * n;
                    return this.x = c * s + u * -r + h * -o - l * -a, this.y = h * s + u * -a + l * -r - c * -o, this.z = l * s + u * -o + c * -a - h * -r, this
                },
                project: function(t) {
                    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
                },
                unproject: function(t) {
                    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
                },
                transformDirection: function(t) {
                    var e = this.x,
                        i = this.y,
                        n = this.z,
                        r = t.elements;
                    return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n, this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize()
                },
                divide: function(t) {
                    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
                },
                divideScalar: function(t) {
                    return this.multiplyScalar(1 / t)
                },
                min: function(t) {
                    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
                },
                max: function(t) {
                    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
                },
                clamp: function(t, e) {
                    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
                },
                clampScalar: function(t, e) {
                    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this
                },
                clampLength: function(t, e) {
                    var i = this.length();
                    return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
                },
                floor: function() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
                },
                ceil: function() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
                },
                round: function() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
                },
                roundToZero: function() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
                },
                negate: function() {
                    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
                },
                dot: function(t) {
                    return this.x * t.x + this.y * t.y + this.z * t.z
                },
                lengthSq: function() {
                    return this.x * this.x + this.y * this.y + this.z * this.z
                },
                length: function() {
                    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
                },
                manhattanLength: function() {
                    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
                },
                normalize: function() {
                    return this.divideScalar(this.length() || 1)
                },
                setLength: function(t) {
                    return this.normalize().multiplyScalar(t)
                },
                lerp: function(t, e) {
                    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
                },
                lerpVectors: function(t, e, i) {
                    return this.subVectors(e, t).multiplyScalar(i).add(t)
                },
                cross: function(t, e) {
                    return void 0 !== e ? this.crossVectors(t, e) : this.crossVectors(this, t)
                },
                crossVectors: function(t, e) {
                    var i = t.x,
                        n = t.y,
                        r = t.z,
                        a = e.x,
                        o = e.y,
                        s = e.z;
                    return this.x = n * s - r * o, this.y = r * a - i * s, this.z = i * o - n * a, this
                },
                projectOnVector: function(t) {
                    var e = t.dot(this) / t.lengthSq();
                    return this.copy(t).multiplyScalar(e)
                },
                projectOnPlane: function(t) {
                    return De.copy(this).projectOnVector(t), this.sub(De)
                },
                reflect: function(t) {
                    return this.sub(De.copy(t).multiplyScalar(2 * this.dot(t)))
                },
                angleTo: function(t) {
                    var e = Math.sqrt(this.lengthSq() * t.lengthSq()),
                        i = this.dot(t) / e;
                    return Math.acos(Oe.clamp(i, -1, 1))
                },
                distanceTo: function(t) {
                    return Math.sqrt(this.distanceToSquared(t))
                },
                distanceToSquared: function(t) {
                    var e = this.x - t.x,
                        i = this.y - t.y,
                        n = this.z - t.z;
                    return e * e + i * i + n * n
                },
                manhattanDistanceTo: function(t) {
                    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
                },
                setFromSpherical: function(t) {
                    return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
                },
                setFromSphericalCoords: function(t, e, i) {
                    var n = Math.sin(e) * t;
                    return this.x = n * Math.sin(i), this.y = Math.cos(e) * t, this.z = n * Math.cos(i), this
                },
                setFromCylindrical: function(t) {
                    return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
                },
                setFromCylindricalCoords: function(t, e, i) {
                    return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this
                },
                setFromMatrixPosition: function(t) {
                    var e = t.elements;
                    return this.x = e[12], this.y = e[13], this.z = e[14], this
                },
                setFromMatrixScale: function(t) {
                    var e = this.setFromMatrixColumn(t, 0).length(),
                        i = this.setFromMatrixColumn(t, 1).length(),
                        n = this.setFromMatrixColumn(t, 2).length();
                    return this.x = e, this.y = i, this.z = n, this
                },
                setFromMatrixColumn: function(t, e) {
                    return this.fromArray(t.elements, 4 * e)
                },
                equals: function(t) {
                    return t.x === this.x && t.y === this.y && t.z === this.z
                },
                fromArray: function(t, e) {
                    return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
                },
                toArray: function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
                },
                fromBufferAttribute: function(t, e, i) {
                    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
                }
            });
            var Fe, Ue = new Re;

            function Be() {
                this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length
            }
            Object.assign(Be.prototype, {
                isMatrix3: !0,
                set: function(t, e, i, n, r, a, o, s, c) {
                    var h = this.elements;
                    return h[0] = t, h[1] = n, h[2] = o, h[3] = e, h[4] = r, h[5] = s, h[6] = i, h[7] = a, h[8] = c, this
                },
                identity: function() {
                    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
                },
                clone: function() {
                    return (new this.constructor).fromArray(this.elements)
                },
                copy: function(t) {
                    var e = this.elements,
                        i = t.elements;
                    return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
                },
                setFromMatrix4: function(t) {
                    var e = t.elements;
                    return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
                },
                applyToBufferAttribute: function(t) {
                    for (var e = 0, i = t.count; e < i; e++) Ue.x = t.getX(e), Ue.y = t.getY(e), Ue.z = t.getZ(e), Ue.applyMatrix3(this), t.setXYZ(e, Ue.x, Ue.y, Ue.z);
                    return t
                },
                multiply: function(t) {
                    return this.multiplyMatrices(this, t)
                },
                premultiply: function(t) {
                    return this.multiplyMatrices(t, this)
                },
                multiplyMatrices: function(t, e) {
                    var i = t.elements,
                        n = e.elements,
                        r = this.elements,
                        a = i[0],
                        o = i[3],
                        s = i[6],
                        c = i[1],
                        h = i[4],
                        l = i[7],
                        u = i[2],
                        p = i[5],
                        d = i[8],
                        f = n[0],
                        m = n[3],
                        v = n[6],
                        g = n[1],
                        y = n[4],
                        x = n[7],
                        _ = n[2],
                        b = n[5],
                        M = n[8];
                    return r[0] = a * f + o * g + s * _, r[3] = a * m + o * y + s * b, r[6] = a * v + o * x + s * M, r[1] = c * f + h * g + l * _, r[4] = c * m + h * y + l * b, r[7] = c * v + h * x + l * M, r[2] = u * f + p * g + d * _, r[5] = u * m + p * y + d * b, r[8] = u * v + p * x + d * M, this
                },
                multiplyScalar: function(t) {
                    var e = this.elements;
                    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
                },
                determinant: function() {
                    var t = this.elements,
                        e = t[0],
                        i = t[1],
                        n = t[2],
                        r = t[3],
                        a = t[4],
                        o = t[5],
                        s = t[6],
                        c = t[7],
                        h = t[8];
                    return e * a * h - e * o * c - i * r * h + i * o * s + n * r * c - n * a * s
                },
                getInverse: function(t, e) {
                    t && t.isMatrix4;
                    var i = t.elements,
                        n = this.elements,
                        r = i[0],
                        a = i[1],
                        o = i[2],
                        s = i[3],
                        c = i[4],
                        h = i[5],
                        l = i[6],
                        u = i[7],
                        p = i[8],
                        d = p * c - h * u,
                        f = h * l - p * s,
                        m = u * s - c * l,
                        v = r * d + a * f + o * m;
                    if (0 === v) {
                        if (!0 === e) throw new Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");
                        return this.identity()
                    }
                    var g = 1 / v;
                    return n[0] = d * g, n[1] = (o * u - p * a) * g, n[2] = (h * a - o * c) * g, n[3] = f * g, n[4] = (p * r - o * l) * g, n[5] = (o * s - h * r) * g, n[6] = m * g, n[7] = (a * l - u * r) * g, n[8] = (c * r - a * s) * g, this
                },
                transpose: function() {
                    var t, e = this.elements;
                    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
                },
                getNormalMatrix: function(t) {
                    return this.setFromMatrix4(t).getInverse(this).transpose()
                },
                transposeIntoArray: function(t) {
                    var e = this.elements;
                    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
                },
                setUvTransform: function(t, e, i, n, r, a, o) {
                    var s = Math.cos(r),
                        c = Math.sin(r);
                    this.set(i * s, i * c, -i * (s * a + c * o) + a + t, -n * c, n * s, -n * (-c * a + s * o) + o + e, 0, 0, 1)
                },
                scale: function(t, e) {
                    var i = this.elements;
                    return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this
                },
                rotate: function(t) {
                    var e = Math.cos(t),
                        i = Math.sin(t),
                        n = this.elements,
                        r = n[0],
                        a = n[3],
                        o = n[6],
                        s = n[1],
                        c = n[4],
                        h = n[7];
                    return n[0] = e * r + i * s, n[3] = e * a + i * c, n[6] = e * o + i * h, n[1] = -i * r + e * s, n[4] = -i * a + e * c, n[7] = -i * o + e * h, this
                },
                translate: function(t, e) {
                    var i = this.elements;
                    return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e * i[5], i[7] += e * i[8], this
                },
                equals: function(t) {
                    for (var e = this.elements, i = t.elements, n = 0; n < 9; n++)
                        if (e[n] !== i[n]) return !1;
                    return !0
                },
                fromArray: function(t, e) {
                    void 0 === e && (e = 0);
                    for (var i = 0; i < 9; i++) this.elements[i] = t[i + e];
                    return this
                },
                toArray: function(t, e) {
                    void 0 === t && (t = []), void 0 === e && (e = 0);
                    var i = this.elements;
                    return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
                }
            });
            var Ve = {
                    getDataURL: function(t) {
                        var e;
                        if ("undefined" == typeof HTMLCanvasElement) return t.src;
                        if (t instanceof HTMLCanvasElement) e = t;
                        else {
                            void 0 === Fe && (Fe = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), Fe.width = t.width, Fe.height = t.height;
                            var i = Fe.getContext("2d");
                            t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), e = Fe
                        }
                        return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
                    }
                },
                Ge = 0;

            function ke(t, e, i, n, r, a, o, s, c, h) {
                Object.defineProperty(this, "id", {
                    value: Ge++
                }), this.uuid = Oe.generateUUID(), this.name = "", this.image = void 0 !== t ? t : ke.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : ke.DEFAULT_MAPPING, this.wrapS = void 0 !== i ? i : ct, this.wrapT = void 0 !== n ? n : ct, this.magFilter = void 0 !== r ? r : dt, this.minFilter = void 0 !== a ? a : mt, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== o ? o : Et, this.internalFormat = null, this.type = void 0 !== s ? s : vt, this.offset = new Ne(0, 0), this.repeat = new Ne(1, 1), this.center = new Ne(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Be, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== h ? h : de, this.version = 0, this.onUpdate = null
            }

            function je(t, e, i, n) {
                this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1
            }

            function We(t, e, i) {
                this.width = t, this.height = e, this.scissor = new je(0, 0, t, e), this.scissorTest = !1, this.viewport = new je(0, 0, t, e), i = i || {}, this.texture = new ke(void 0, void 0, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.image = {}, this.texture.image.width = t, this.texture.image.height = e, this.texture.generateMipmaps = void 0 !== i.generateMipmaps && i.generateMipmaps, this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : dt, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
            }

            function He(t, e, i) {
                We.call(this, t, e, i), this.samples = 4
            }
            ke.DEFAULT_IMAGE = void 0, ke.DEFAULT_MAPPING = 300, ke.prototype = Object.assign(Object.create(Pe.prototype), {
                constructor: ke,
                isTexture: !0,
                updateMatrix: function() {
                    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
                },
                toJSON: function(t) {
                    var e = void 0 === t || "string" == typeof t;
                    if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
                    var i = {
                        metadata: {
                            version: 4.5,
                            type: "Texture",
                            generator: "Texture.toJSON"
                        },
                        uuid: this.uuid,
                        name: this.name,
                        mapping: this.mapping,
                        repeat: [this.repeat.x, this.repeat.y],
                        offset: [this.offset.x, this.offset.y],
                        center: [this.center.x, this.center.y],
                        rotation: this.rotation,
                        wrap: [this.wrapS, this.wrapT],
                        format: this.format,
                        type: this.type,
                        encoding: this.encoding,
                        minFilter: this.minFilter,
                        magFilter: this.magFilter,
                        anisotropy: this.anisotropy,
                        flipY: this.flipY,
                        premultiplyAlpha: this.premultiplyAlpha,
                        unpackAlignment: this.unpackAlignment
                    };
                    if (void 0 !== this.image) {
                        var n = this.image;
                        if (void 0 === n.uuid && (n.uuid = Oe.generateUUID()), !e && void 0 === t.images[n.uuid]) {
                            var r;
                            if (Array.isArray(n)) {
                                r = [];
                                for (var a = 0, o = n.length; a < o; a++) r.push(Ve.getDataURL(n[a]))
                            } else r = Ve.getDataURL(n);
                            t.images[n.uuid] = {
                                uuid: n.uuid,
                                url: r
                            }
                        }
                        i.image = n.uuid
                    }
                    return e || (t.textures[this.uuid] = i), i
                },
                dispose: function() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                },
                transformUv: function(t) {
                    if (300 !== this.mapping) return t;
                    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
                        case st:
                            t.x = t.x - Math.floor(t.x);
                            break;
                        case ct:
                            t.x = t.x < 0 ? 0 : 1;
                            break;
                        case ht:
                            1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                    }
                    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
                        case st:
                            t.y = t.y - Math.floor(t.y);
                            break;
                        case ct:
                            t.y = t.y < 0 ? 0 : 1;
                            break;
                        case ht:
                            1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                    }
                    return this.flipY && (t.y = 1 - t.y), t
                }
            }), Object.defineProperty(ke.prototype, "needsUpdate", {
                set: function(t) {
                    !0 === t && this.version++
                }
            }), Object.defineProperties(je.prototype, {
                width: {
                    get: function() {
                        return this.z
                    },
                    set: function(t) {
                        this.z = t
                    }
                },
                height: {
                    get: function() {
                        return this.w
                    },
                    set: function(t) {
                        this.w = t
                    }
                }
            }), Object.assign(je.prototype, {
                isVector4: !0,
                set: function(t, e, i, n) {
                    return this.x = t, this.y = e, this.z = i, this.w = n, this
                },
                setScalar: function(t) {
                    return this.x = t, this.y = t, this.z = t, this.w = t, this
                },
                setX: function(t) {
                    return this.x = t, this
                },
                setY: function(t) {
                    return this.y = t, this
                },
                setZ: function(t) {
                    return this.z = t, this
                },
                setW: function(t) {
                    return this.w = t, this
                },
                setComponent: function(t, e) {
                    switch (t) {
                        case 0:
                            this.x = e;
                            break;
                        case 1:
                            this.y = e;
                            break;
                        case 2:
                            this.z = e;
                            break;
                        case 3:
                            this.w = e;
                            break;
                        default:
                            throw new Error("index is out of range: " + t)
                    }
                    return this
                },
                getComponent: function(t) {
                    switch (t) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        case 2:
                            return this.z;
                        case 3:
                            return this.w;
                        default:
                            throw new Error("index is out of range: " + t)
                    }
                },
                clone: function() {
                    return new this.constructor(this.x, this.y, this.z, this.w)
                },
                copy: function(t) {
                    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
                },
                add: function(t, e) {
                    return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
                },
                addScalar: function(t) {
                    return this.x += t, this.y += t, this.z += t, this.w += t, this
                },
                addVectors: function(t, e) {
                    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
                },
                addScaledVector: function(t, e) {
                    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
                },
                sub: function(t, e) {
                    return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
                },
                subScalar: function(t) {
                    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
                },
                subVectors: function(t, e) {
                    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
                },
                multiplyScalar: function(t) {
                    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
                },
                applyMatrix4: function(t) {
                    var e = this.x,
                        i = this.y,
                        n = this.z,
                        r = this.w,
                        a = t.elements;
                    return this.x = a[0] * e + a[4] * i + a[8] * n + a[12] * r, this.y = a[1] * e + a[5] * i + a[9] * n + a[13] * r, this.z = a[2] * e + a[6] * i + a[10] * n + a[14] * r, this.w = a[3] * e + a[7] * i + a[11] * n + a[15] * r, this
                },
                divideScalar: function(t) {
                    return this.multiplyScalar(1 / t)
                },
                setAxisAngleFromQuaternion: function(t) {
                    this.w = 2 * Math.acos(t.w);
                    var e = Math.sqrt(1 - t.w * t.w);
                    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
                },
                setAxisAngleFromRotationMatrix: function(t) {
                    var e, i, n, r, a = t.elements,
                        o = a[0],
                        s = a[4],
                        c = a[8],
                        h = a[1],
                        l = a[5],
                        u = a[9],
                        p = a[2],
                        d = a[6],
                        f = a[10];
                    if (Math.abs(s - h) < .01 && Math.abs(c - p) < .01 && Math.abs(u - d) < .01) {
                        if (Math.abs(s + h) < .1 && Math.abs(c + p) < .1 && Math.abs(u + d) < .1 && Math.abs(o + l + f - 3) < .1) return this.set(1, 0, 0, 0), this;
                        e = Math.PI;
                        var m = (o + 1) / 2,
                            v = (l + 1) / 2,
                            g = (f + 1) / 2,
                            y = (s + h) / 4,
                            x = (c + p) / 4,
                            _ = (u + d) / 4;
                        return m > v && m > g ? m < .01 ? (i = 0, n = .707106781, r = .707106781) : (n = y / (i = Math.sqrt(m)), r = x / i) : v > g ? v < .01 ? (i = .707106781, n = 0, r = .707106781) : (i = y / (n = Math.sqrt(v)), r = _ / n) : g < .01 ? (i = .707106781, n = .707106781, r = 0) : (i = x / (r = Math.sqrt(g)), n = _ / r), this.set(i, n, r, e), this
                    }
                    var b = Math.sqrt((d - u) * (d - u) + (c - p) * (c - p) + (h - s) * (h - s));
                    return Math.abs(b) < .001 && (b = 1), this.x = (d - u) / b, this.y = (c - p) / b, this.z = (h - s) / b, this.w = Math.acos((o + l + f - 1) / 2), this
                },
                min: function(t) {
                    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
                },
                max: function(t) {
                    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
                },
                clamp: function(t, e) {
                    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
                },
                clampScalar: function(t, e) {
                    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this
                },
                clampLength: function(t, e) {
                    var i = this.length();
                    return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
                },
                floor: function() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
                },
                ceil: function() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
                },
                round: function() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
                },
                roundToZero: function() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
                },
                negate: function() {
                    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
                },
                dot: function(t) {
                    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
                },
                lengthSq: function() {
                    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
                },
                length: function() {
                    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
                },
                manhattanLength: function() {
                    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
                },
                normalize: function() {
                    return this.divideScalar(this.length() || 1)
                },
                setLength: function(t) {
                    return this.normalize().multiplyScalar(t)
                },
                lerp: function(t, e) {
                    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
                },
                lerpVectors: function(t, e, i) {
                    return this.subVectors(e, t).multiplyScalar(i).add(t)
                },
                equals: function(t) {
                    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
                },
                fromArray: function(t, e) {
                    return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
                },
                toArray: function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
                },
                fromBufferAttribute: function(t, e, i) {
                    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
                }
            }), We.prototype = Object.assign(Object.create(Pe.prototype), {
                constructor: We,
                isWebGLRenderTarget: !0,
                setSize: function(t, e) {
                    this.width === t && this.height === e || (this.width = t, this.height = e, this.texture.image.width = t, this.texture.image.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
                },
                dispose: function() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            }), He.prototype = Object.assign(Object.create(We.prototype), {
                constructor: He,
                isWebGLMultisampleRenderTarget: !0,
                copy: function(t) {
                    return We.prototype.copy.call(this, t), this.samples = t.samples, this
                }
            });
            var qe = new Re,
                Xe = new $e,
                Ye = new Re(0, 0, 0),
                Je = new Re(1, 1, 1),
                Ze = new Re,
                Qe = new Re,
                Ke = new Re;

            function $e() {
                this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length
            }
            Object.assign($e.prototype, {
                isMatrix4: !0,
                set: function(t, e, i, n, r, a, o, s, c, h, l, u, p, d, f, m) {
                    var v = this.elements;
                    return v[0] = t, v[4] = e, v[8] = i, v[12] = n, v[1] = r, v[5] = a, v[9] = o, v[13] = s, v[2] = c, v[6] = h, v[10] = l, v[14] = u, v[3] = p, v[7] = d, v[11] = f, v[15] = m, this
                },
                identity: function() {
                    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
                },
                clone: function() {
                    return (new $e).fromArray(this.elements)
                },
                copy: function(t) {
                    var e = this.elements,
                        i = t.elements;
                    return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
                },
                copyPosition: function(t) {
                    var e = this.elements,
                        i = t.elements;
                    return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
                },
                extractBasis: function(t, e, i) {
                    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
                },
                makeBasis: function(t, e, i) {
                    return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
                },
                extractRotation: function(t) {
                    var e = this.elements,
                        i = t.elements,
                        n = 1 / qe.setFromMatrixColumn(t, 0).length(),
                        r = 1 / qe.setFromMatrixColumn(t, 1).length(),
                        a = 1 / qe.setFromMatrixColumn(t, 2).length();
                    return e[0] = i[0] * n, e[1] = i[1] * n, e[2] = i[2] * n, e[3] = 0, e[4] = i[4] * r, e[5] = i[5] * r, e[6] = i[6] * r, e[7] = 0, e[8] = i[8] * a, e[9] = i[9] * a, e[10] = i[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
                },
                makeRotationFromEuler: function(t) {
                    !t || t.isEuler;
                    var e = this.elements,
                        i = t.x,
                        n = t.y,
                        r = t.z,
                        a = Math.cos(i),
                        o = Math.sin(i),
                        s = Math.cos(n),
                        c = Math.sin(n),
                        h = Math.cos(r),
                        l = Math.sin(r);
                    if ("XYZ" === t.order) {
                        var u = a * h,
                            p = a * l,
                            d = o * h,
                            f = o * l;
                        e[0] = s * h, e[4] = -s * l, e[8] = c, e[1] = p + d * c, e[5] = u - f * c, e[9] = -o * s, e[2] = f - u * c, e[6] = d + p * c, e[10] = a * s
                    } else if ("YXZ" === t.order) {
                        var m = s * h,
                            v = s * l,
                            g = c * h,
                            y = c * l;
                        e[0] = m + y * o, e[4] = g * o - v, e[8] = a * c, e[1] = a * l, e[5] = a * h, e[9] = -o, e[2] = v * o - g, e[6] = y + m * o, e[10] = a * s
                    } else if ("ZXY" === t.order) {
                        m = s * h, v = s * l, g = c * h, y = c * l;
                        e[0] = m - y * o, e[4] = -a * l, e[8] = g + v * o, e[1] = v + g * o, e[5] = a * h, e[9] = y - m * o, e[2] = -a * c, e[6] = o, e[10] = a * s
                    } else if ("ZYX" === t.order) {
                        u = a * h, p = a * l, d = o * h, f = o * l;
                        e[0] = s * h, e[4] = d * c - p, e[8] = u * c + f, e[1] = s * l, e[5] = f * c + u, e[9] = p * c - d, e[2] = -c, e[6] = o * s, e[10] = a * s
                    } else if ("YZX" === t.order) {
                        var x = a * s,
                            _ = a * c,
                            b = o * s,
                            M = o * c;
                        e[0] = s * h, e[4] = M - x * l, e[8] = b * l + _, e[1] = l, e[5] = a * h, e[9] = -o * h, e[2] = -c * h, e[6] = _ * l + b, e[10] = x - M * l
                    } else if ("XZY" === t.order) {
                        x = a * s, _ = a * c, b = o * s, M = o * c;
                        e[0] = s * h, e[4] = -l, e[8] = c * h, e[1] = x * l + M, e[5] = a * h, e[9] = _ * l - b, e[2] = b * l - _, e[6] = o * h, e[10] = M * l + x
                    }
                    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
                },
                makeRotationFromQuaternion: function(t) {
                    return this.compose(Ye, t, Je)
                },
                lookAt: function(t, e, i) {
                    var n = this.elements;
                    return Ke.subVectors(t, e), 0 === Ke.lengthSq() && (Ke.z = 1), Ke.normalize(), Ze.crossVectors(i, Ke), 0 === Ze.lengthSq() && (1 === Math.abs(i.z) ? Ke.x += 1e-4 : Ke.z += 1e-4, Ke.normalize(), Ze.crossVectors(i, Ke)), Ze.normalize(), Qe.crossVectors(Ke, Ze), n[0] = Ze.x, n[4] = Qe.x, n[8] = Ke.x, n[1] = Ze.y, n[5] = Qe.y, n[9] = Ke.y, n[2] = Ze.z, n[6] = Qe.z, n[10] = Ke.z, this
                },
                multiply: function(t, e) {
                    return void 0 !== e ? this.multiplyMatrices(t, e) : this.multiplyMatrices(this, t)
                },
                premultiply: function(t) {
                    return this.multiplyMatrices(t, this)
                },
                multiplyMatrices: function(t, e) {
                    var i = t.elements,
                        n = e.elements,
                        r = this.elements,
                        a = i[0],
                        o = i[4],
                        s = i[8],
                        c = i[12],
                        h = i[1],
                        l = i[5],
                        u = i[9],
                        p = i[13],
                        d = i[2],
                        f = i[6],
                        m = i[10],
                        v = i[14],
                        g = i[3],
                        y = i[7],
                        x = i[11],
                        _ = i[15],
                        b = n[0],
                        M = n[4],
                        w = n[8],
                        S = n[12],
                        T = n[1],
                        A = n[5],
                        L = n[9],
                        P = n[13],
                        C = n[2],
                        E = n[6],
                        O = n[10],
                        N = n[14],
                        I = n[3],
                        D = n[7],
                        z = n[11],
                        R = n[15];
                    return r[0] = a * b + o * T + s * C + c * I, r[4] = a * M + o * A + s * E + c * D, r[8] = a * w + o * L + s * O + c * z, r[12] = a * S + o * P + s * N + c * R, r[1] = h * b + l * T + u * C + p * I, r[5] = h * M + l * A + u * E + p * D, r[9] = h * w + l * L + u * O + p * z, r[13] = h * S + l * P + u * N + p * R, r[2] = d * b + f * T + m * C + v * I, r[6] = d * M + f * A + m * E + v * D, r[10] = d * w + f * L + m * O + v * z, r[14] = d * S + f * P + m * N + v * R, r[3] = g * b + y * T + x * C + _ * I, r[7] = g * M + y * A + x * E + _ * D, r[11] = g * w + y * L + x * O + _ * z, r[15] = g * S + y * P + x * N + _ * R, this
                },
                multiplyScalar: function(t) {
                    var e = this.elements;
                    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
                },
                applyToBufferAttribute: function(t) {
                    for (var e = 0, i = t.count; e < i; e++) qe.x = t.getX(e), qe.y = t.getY(e), qe.z = t.getZ(e), qe.applyMatrix4(this), t.setXYZ(e, qe.x, qe.y, qe.z);
                    return t
                },
                determinant: function() {
                    var t = this.elements,
                        e = t[0],
                        i = t[4],
                        n = t[8],
                        r = t[12],
                        a = t[1],
                        o = t[5],
                        s = t[9],
                        c = t[13],
                        h = t[2],
                        l = t[6],
                        u = t[10],
                        p = t[14];
                    return t[3] * (+r * s * l - n * c * l - r * o * u + i * c * u + n * o * p - i * s * p) + t[7] * (+e * s * p - e * c * u + r * a * u - n * a * p + n * c * h - r * s * h) + t[11] * (+e * c * l - e * o * p - r * a * l + i * a * p + r * o * h - i * c * h) + t[15] * (-n * o * h - e * s * l + e * o * u + n * a * l - i * a * u + i * s * h)
                },
                transpose: function() {
                    var t, e = this.elements;
                    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
                },
                setPosition: function(t, e, i) {
                    var n = this.elements;
                    return t.isVector3 ? (n[12] = t.x, n[13] = t.y, n[14] = t.z) : (n[12] = t, n[13] = e, n[14] = i), this
                },
                getInverse: function(t, e) {
                    var i = this.elements,
                        n = t.elements,
                        r = n[0],
                        a = n[1],
                        o = n[2],
                        s = n[3],
                        c = n[4],
                        h = n[5],
                        l = n[6],
                        u = n[7],
                        p = n[8],
                        d = n[9],
                        f = n[10],
                        m = n[11],
                        v = n[12],
                        g = n[13],
                        y = n[14],
                        x = n[15],
                        _ = d * y * u - g * f * u + g * l * m - h * y * m - d * l * x + h * f * x,
                        b = v * f * u - p * y * u - v * l * m + c * y * m + p * l * x - c * f * x,
                        M = p * g * u - v * d * u + v * h * m - c * g * m - p * h * x + c * d * x,
                        w = v * d * l - p * g * l - v * h * f + c * g * f + p * h * y - c * d * y,
                        S = r * _ + a * b + o * M + s * w;
                    if (0 === S) {
                        if (!0 === e) throw new Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");
                        return this.identity()
                    }
                    var T = 1 / S;
                    return i[0] = _ * T, i[1] = (g * f * s - d * y * s - g * o * m + a * y * m + d * o * x - a * f * x) * T, i[2] = (h * y * s - g * l * s + g * o * u - a * y * u - h * o * x + a * l * x) * T, i[3] = (d * l * s - h * f * s - d * o * u + a * f * u + h * o * m - a * l * m) * T, i[4] = b * T, i[5] = (p * y * s - v * f * s + v * o * m - r * y * m - p * o * x + r * f * x) * T, i[6] = (v * l * s - c * y * s - v * o * u + r * y * u + c * o * x - r * l * x) * T, i[7] = (c * f * s - p * l * s + p * o * u - r * f * u - c * o * m + r * l * m) * T, i[8] = M * T, i[9] = (v * d * s - p * g * s - v * a * m + r * g * m + p * a * x - r * d * x) * T, i[10] = (c * g * s - v * h * s + v * a * u - r * g * u - c * a * x + r * h * x) * T, i[11] = (p * h * s - c * d * s - p * a * u + r * d * u + c * a * m - r * h * m) * T, i[12] = w * T, i[13] = (p * g * o - v * d * o + v * a * f - r * g * f - p * a * y + r * d * y) * T, i[14] = (v * h * o - c * g * o - v * a * l + r * g * l + c * a * y - r * h * y) * T, i[15] = (c * d * o - p * h * o + p * a * l - r * d * l - c * a * f + r * h * f) * T, this
                },
                scale: function(t) {
                    var e = this.elements,
                        i = t.x,
                        n = t.y,
                        r = t.z;
                    return e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *= n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r, this
                },
                getMaxScaleOnAxis: function() {
                    var t = this.elements,
                        e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
                        i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
                        n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
                    return Math.sqrt(Math.max(e, i, n))
                },
                makeTranslation: function(t, e, i) {
                    return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
                },
                makeRotationX: function(t) {
                    var e = Math.cos(t),
                        i = Math.sin(t);
                    return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
                },
                makeRotationY: function(t) {
                    var e = Math.cos(t),
                        i = Math.sin(t);
                    return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
                },
                makeRotationZ: function(t) {
                    var e = Math.cos(t),
                        i = Math.sin(t);
                    return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
                },
                makeRotationAxis: function(t, e) {
                    var i = Math.cos(e),
                        n = Math.sin(e),
                        r = 1 - i,
                        a = t.x,
                        o = t.y,
                        s = t.z,
                        c = r * a,
                        h = r * o;
                    return this.set(c * a + i, c * o - n * s, c * s + n * o, 0, c * o + n * s, h * o + i, h * s - n * a, 0, c * s - n * o, h * s + n * a, r * s * s + i, 0, 0, 0, 0, 1), this
                },
                makeScale: function(t, e, i) {
                    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
                },
                makeShear: function(t, e, i) {
                    return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1), this
                },
                compose: function(t, e, i) {
                    var n = this.elements,
                        r = e._x,
                        a = e._y,
                        o = e._z,
                        s = e._w,
                        c = r + r,
                        h = a + a,
                        l = o + o,
                        u = r * c,
                        p = r * h,
                        d = r * l,
                        f = a * h,
                        m = a * l,
                        v = o * l,
                        g = s * c,
                        y = s * h,
                        x = s * l,
                        _ = i.x,
                        b = i.y,
                        M = i.z;
                    return n[0] = (1 - (f + v)) * _, n[1] = (p + x) * _, n[2] = (d - y) * _, n[3] = 0, n[4] = (p - x) * b, n[5] = (1 - (u + v)) * b, n[6] = (m + g) * b, n[7] = 0, n[8] = (d + y) * M, n[9] = (m - g) * M, n[10] = (1 - (u + f)) * M, n[11] = 0, n[12] = t.x, n[13] = t.y, n[14] = t.z, n[15] = 1, this
                },
                decompose: function(t, e, i) {
                    var n = this.elements,
                        r = qe.set(n[0], n[1], n[2]).length(),
                        a = qe.set(n[4], n[5], n[6]).length(),
                        o = qe.set(n[8], n[9], n[10]).length();
                    this.determinant() < 0 && (r = -r), t.x = n[12], t.y = n[13], t.z = n[14], Xe.copy(this);
                    var s = 1 / r,
                        c = 1 / a,
                        h = 1 / o;
                    return Xe.elements[0] *= s, Xe.elements[1] *= s, Xe.elements[2] *= s, Xe.elements[4] *= c, Xe.elements[5] *= c, Xe.elements[6] *= c, Xe.elements[8] *= h, Xe.elements[9] *= h, Xe.elements[10] *= h, e.setFromRotationMatrix(Xe), i.x = r, i.y = a, i.z = o, this
                },
                makePerspective: function(t, e, i, n, r, a) {
                    var o = this.elements,
                        s = 2 * r / (e - t),
                        c = 2 * r / (i - n),
                        h = (e + t) / (e - t),
                        l = (i + n) / (i - n),
                        u = -(a + r) / (a - r),
                        p = -2 * a * r / (a - r);
                    return o[0] = s, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = c, o[9] = l, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
                },
                makeOrthographic: function(t, e, i, n, r, a) {
                    var o = this.elements,
                        s = 1 / (e - t),
                        c = 1 / (i - n),
                        h = 1 / (a - r),
                        l = (e + t) * s,
                        u = (i + n) * c,
                        p = (a + r) * h;
                    return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -l, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
                },
                equals: function(t) {
                    for (var e = this.elements, i = t.elements, n = 0; n < 16; n++)
                        if (e[n] !== i[n]) return !1;
                    return !0
                },
                fromArray: function(t, e) {
                    void 0 === e && (e = 0);
                    for (var i = 0; i < 16; i++) this.elements[i] = t[i + e];
                    return this
                },
                toArray: function(t, e) {
                    void 0 === t && (t = []), void 0 === e && (e = 0);
                    var i = this.elements;
                    return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
                }
            });
            var ti = new $e,
                ei = new Ie;

            function ii(t, e, i, n) {
                this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = n || ii.DefaultOrder
            }

            function ni() {
                this.mask = 1
            }
            ii.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], ii.DefaultOrder = "XYZ", Object.defineProperties(ii.prototype, {
                x: {
                    get: function() {
                        return this._x
                    },
                    set: function(t) {
                        this._x = t, this._onChangeCallback()
                    }
                },
                y: {
                    get: function() {
                        return this._y
                    },
                    set: function(t) {
                        this._y = t, this._onChangeCallback()
                    }
                },
                z: {
                    get: function() {
                        return this._z
                    },
                    set: function(t) {
                        this._z = t, this._onChangeCallback()
                    }
                },
                order: {
                    get: function() {
                        return this._order
                    },
                    set: function(t) {
                        this._order = t, this._onChangeCallback()
                    }
                }
            }), Object.assign(ii.prototype, {
                isEuler: !0,
                set: function(t, e, i, n) {
                    return this._x = t, this._y = e, this._z = i, this._order = n || this._order, this._onChangeCallback(), this
                },
                clone: function() {
                    return new this.constructor(this._x, this._y, this._z, this._order)
                },
                copy: function(t) {
                    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this
                },
                setFromRotationMatrix: function(t, e, i) {
                    var n = Oe.clamp,
                        r = t.elements,
                        a = r[0],
                        o = r[4],
                        s = r[8],
                        c = r[1],
                        h = r[5],
                        l = r[9],
                        u = r[2],
                        p = r[6],
                        d = r[10];
                    return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(n(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-l, d), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(p, h), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(l, -1, 1)), Math.abs(l) < .9999999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(c, h)) : (this._y = Math.atan2(-u, a), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(n(p, -1, 1)), Math.abs(p) < .9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-o, h)) : (this._y = 0, this._z = Math.atan2(c, a))) : "ZYX" === e ? (this._y = Math.asin(-n(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(p, d), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-o, h))) : "YZX" === e ? (this._z = Math.asin(n(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-l, h), this._y = Math.atan2(-u, a)) : (this._x = 0, this._y = Math.atan2(s, d))) : "XZY" === e && (this._z = Math.asin(-n(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(p, h), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-l, d), this._y = 0)), this._order = e, !1 !== i && this._onChangeCallback(), this
                },
                setFromQuaternion: function(t, e, i) {
                    return ti.makeRotationFromQuaternion(t), this.setFromRotationMatrix(ti, e, i)
                },
                setFromVector3: function(t, e) {
                    return this.set(t.x, t.y, t.z, e || this._order)
                },
                reorder: function(t) {
                    return ei.setFromEuler(this), this.setFromQuaternion(ei, t)
                },
                equals: function(t) {
                    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
                },
                fromArray: function(t) {
                    return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this
                },
                toArray: function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
                },
                toVector3: function(t) {
                    return t ? t.set(this._x, this._y, this._z) : new Re(this._x, this._y, this._z)
                },
                _onChange: function(t) {
                    return this._onChangeCallback = t, this
                },
                _onChangeCallback: function() {}
            }), Object.assign(ni.prototype, {
                set: function(t) {
                    this.mask = 1 << t | 0
                },
                enable: function(t) {
                    this.mask |= 1 << t | 0
                },
                enableAll: function() {
                    this.mask = -1
                },
                toggle: function(t) {
                    this.mask ^= 1 << t | 0
                },
                disable: function(t) {
                    this.mask &= ~(1 << t | 0)
                },
                disableAll: function() {
                    this.mask = 0
                },
                test: function(t) {
                    return 0 != (this.mask & t.mask)
                }
            });
            var ri = 0,
                ai = new Re,
                oi = new Ie,
                si = new $e,
                ci = new Re,
                hi = new Re,
                li = new Re,
                ui = new Ie,
                pi = new Re(1, 0, 0),
                di = new Re(0, 1, 0),
                fi = new Re(0, 0, 1),
                mi = {
                    type: "added"
                },
                vi = {
                    type: "removed"
                };

            function gi() {
                Object.defineProperty(this, "id", {
                    value: ri++
                }), this.uuid = Oe.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = gi.DefaultUp.clone();
                var t = new Re,
                    e = new ii,
                    i = new Ie,
                    n = new Re(1, 1, 1);
                e._onChange((function() {
                    i.setFromEuler(e, !1)
                })), i._onChange((function() {
                    e.setFromQuaternion(i, void 0, !1)
                })), Object.defineProperties(this, {
                    position: {
                        configurable: !0,
                        enumerable: !0,
                        value: t
                    },
                    rotation: {
                        configurable: !0,
                        enumerable: !0,
                        value: e
                    },
                    quaternion: {
                        configurable: !0,
                        enumerable: !0,
                        value: i
                    },
                    scale: {
                        configurable: !0,
                        enumerable: !0,
                        value: n
                    },
                    modelViewMatrix: {
                        value: new $e
                    },
                    normalMatrix: {
                        value: new Be
                    }
                }), this.matrix = new $e, this.matrixWorld = new $e, this.matrixAutoUpdate = gi.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new ni, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
            }

            function yi() {
                gi.call(this), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                    detail: this
                }))
            }
            gi.DefaultUp = new Re(0, 1, 0), gi.DefaultMatrixAutoUpdate = !0, gi.prototype = Object.assign(Object.create(Pe.prototype), {
                constructor: gi,
                isObject3D: !0,
                onBeforeRender: function() {},
                onAfterRender: function() {},
                applyMatrix: function(t) {
                    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale)
                },
                applyQuaternion: function(t) {
                    return this.quaternion.premultiply(t), this
                },
                setRotationFromAxisAngle: function(t, e) {
                    this.quaternion.setFromAxisAngle(t, e)
                },
                setRotationFromEuler: function(t) {
                    this.quaternion.setFromEuler(t, !0)
                },
                setRotationFromMatrix: function(t) {
                    this.quaternion.setFromRotationMatrix(t)
                },
                setRotationFromQuaternion: function(t) {
                    this.quaternion.copy(t)
                },
                rotateOnAxis: function(t, e) {
                    return oi.setFromAxisAngle(t, e), this.quaternion.multiply(oi), this
                },
                rotateOnWorldAxis: function(t, e) {
                    return oi.setFromAxisAngle(t, e), this.quaternion.premultiply(oi), this
                },
                rotateX: function(t) {
                    return this.rotateOnAxis(pi, t)
                },
                rotateY: function(t) {
                    return this.rotateOnAxis(di, t)
                },
                rotateZ: function(t) {
                    return this.rotateOnAxis(fi, t)
                },
                translateOnAxis: function(t, e) {
                    return ai.copy(t).applyQuaternion(this.quaternion), this.position.add(ai.multiplyScalar(e)), this
                },
                translateX: function(t) {
                    return this.translateOnAxis(pi, t)
                },
                translateY: function(t) {
                    return this.translateOnAxis(di, t)
                },
                translateZ: function(t) {
                    return this.translateOnAxis(fi, t)
                },
                localToWorld: function(t) {
                    return t.applyMatrix4(this.matrixWorld)
                },
                worldToLocal: function(t) {
                    return t.applyMatrix4(si.getInverse(this.matrixWorld))
                },
                lookAt: function(t, e, i) {
                    t.isVector3 ? ci.copy(t) : ci.set(t, e, i);
                    var n = this.parent;
                    this.updateWorldMatrix(!0, !1), hi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? si.lookAt(hi, ci, this.up) : si.lookAt(ci, hi, this.up), this.quaternion.setFromRotationMatrix(si), n && (si.extractRotation(n.matrixWorld), oi.setFromRotationMatrix(si), this.quaternion.premultiply(oi.inverse()))
                },
                add: function(t) {
                    if (arguments.length > 1) {
                        for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
                        return this
                    }
                    return t === this ? this : (t && t.isObject3D && (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(mi)), this)
                },
                remove: function(t) {
                    if (arguments.length > 1) {
                        for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
                        return this
                    }
                    var i = this.children.indexOf(t);
                    return -1 !== i && (t.parent = null, this.children.splice(i, 1), t.dispatchEvent(vi)), this
                },
                attach: function(t) {
                    return this.updateWorldMatrix(!0, !1), si.getInverse(this.matrixWorld), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), si.multiply(t.parent.matrixWorld)), t.applyMatrix(si), t.updateWorldMatrix(!1, !1), this.add(t), this
                },
                getObjectById: function(t) {
                    return this.getObjectByProperty("id", t)
                },
                getObjectByName: function(t) {
                    return this.getObjectByProperty("name", t)
                },
                getObjectByProperty: function(t, e) {
                    if (this[t] === e) return this;
                    for (var i = 0, n = this.children.length; i < n; i++) {
                        var r = this.children[i].getObjectByProperty(t, e);
                        if (void 0 !== r) return r
                    }
                },
                getWorldPosition: function(t) {
                    return void 0 === t && (t = new Re), this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
                },
                getWorldQuaternion: function(t) {
                    return void 0 === t && (t = new Ie), this.updateMatrixWorld(!0), this.matrixWorld.decompose(hi, t, li), t
                },
                getWorldScale: function(t) {
                    return void 0 === t && (t = new Re), this.updateMatrixWorld(!0), this.matrixWorld.decompose(hi, ui, t), t
                },
                getWorldDirection: function(t) {
                    void 0 === t && (t = new Re), this.updateMatrixWorld(!0);
                    var e = this.matrixWorld.elements;
                    return t.set(e[8], e[9], e[10]).normalize()
                },
                raycast: function() {},
                traverse: function(t) {
                    t(this);
                    for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverse(t)
                },
                traverseVisible: function(t) {
                    if (!1 !== this.visible) {
                        t(this);
                        for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverseVisible(t)
                    }
                },
                traverseAncestors: function(t) {
                    var e = this.parent;
                    null !== e && (t(e), e.traverseAncestors(t))
                },
                updateMatrix: function() {
                    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
                },
                updateMatrixWorld: function(t) {
                    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
                    for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].updateMatrixWorld(t)
                },
                updateWorldMatrix: function(t, e) {
                    var i = this.parent;
                    if (!0 === t && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e)
                        for (var n = this.children, r = 0, a = n.length; r < a; r++) n[r].updateWorldMatrix(!1, !0)
                },
                toJSON: function(t) {
                    var e = void 0 === t || "string" == typeof t,
                        i = {};
                    e && (t = {
                        geometries: {},
                        materials: {},
                        textures: {},
                        images: {},
                        shapes: {}
                    }, i.metadata = {
                        version: 4.5,
                        type: "Object",
                        generator: "Object3D.toJSON"
                    });
                    var n = {};

                    function r(e, i) {
                        return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t)), i.uuid
                    }
                    if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), !1 === this.frustumCulled && (n.frustumCulled = !1), 0 !== this.renderOrder && (n.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1), this.isInstancedMesh && (n.type = "InstancedMesh", n.count = this.count, n.instanceMatrix = this.instanceMatrix.toJSON()), this.isMesh || this.isLine || this.isPoints) {
                        n.geometry = r(t.geometries, this.geometry);
                        var a = this.geometry.parameters;
                        if (void 0 !== a && void 0 !== a.shapes) {
                            var o = a.shapes;
                            if (Array.isArray(o))
                                for (var s = 0, c = o.length; s < c; s++) {
                                    var h = o[s];
                                    r(t.shapes, h)
                                } else r(t.shapes, o)
                        }
                    }
                    if (void 0 !== this.material)
                        if (Array.isArray(this.material)) {
                            var l = [];
                            for (s = 0, c = this.material.length; s < c; s++) l.push(r(t.materials, this.material[s]));
                            n.material = l
                        } else n.material = r(t.materials, this.material);
                    if (this.children.length > 0) {
                        n.children = [];
                        for (s = 0; s < this.children.length; s++) n.children.push(this.children[s].toJSON(t).object)
                    }
                    if (e) {
                        var u = m(t.geometries),
                            p = m(t.materials),
                            d = m(t.textures),
                            f = m(t.images);
                        o = m(t.shapes);
                        u.length > 0 && (i.geometries = u), p.length > 0 && (i.materials = p), d.length > 0 && (i.textures = d), f.length > 0 && (i.images = f), o.length > 0 && (i.shapes = o)
                    }
                    return i.object = n, i;

                    function m(t) {
                        var e = [];
                        for (var i in t) {
                            var n = t[i];
                            delete n.metadata, e.push(n)
                        }
                        return e
                    }
                },
                clone: function(t) {
                    return (new this.constructor).copy(this, t)
                },
                copy: function(t, e) {
                    if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
                        for (var i = 0; i < t.children.length; i++) {
                            var n = t.children[i];
                            this.add(n.clone())
                        }
                    return this
                }
            }), yi.prototype = Object.assign(Object.create(gi.prototype), {
                constructor: yi,
                isScene: !0,
                copy: function(t, e) {
                    return gi.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
                },
                toJSON: function(t) {
                    var e = gi.prototype.toJSON.call(this, t);
                    return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.environment && (e.object.environment = this.environment.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
                },
                dispose: function() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            });
            var xi = [new Re, new Re, new Re, new Re, new Re, new Re, new Re, new Re],
                _i = new Re,
                bi = new Ni,
                Mi = new Re,
                wi = new Re,
                Si = new Re,
                Ti = new Re,
                Ai = new Re,
                Li = new Re,
                Pi = new Re,
                Ci = new Re,
                Ei = new Re,
                Oi = new Re;

            function Ni(t, e) {
                this.min = void 0 !== t ? t : new Re(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new Re(-1 / 0, -1 / 0, -1 / 0)
            }

            function Ii(t, e, i, n, r) {
                var a, o;
                for (a = 0, o = t.length - 3; a <= o; a += 3) {
                    Oi.fromArray(t, a);
                    var s = r.x * Math.abs(Oi.x) + r.y * Math.abs(Oi.y) + r.z * Math.abs(Oi.z),
                        c = e.dot(Oi),
                        h = i.dot(Oi),
                        l = n.dot(Oi);
                    if (Math.max(-Math.max(c, h, l), Math.min(c, h, l)) > s) return !1
                }
                return !0
            }
            Object.assign(Ni.prototype, {
                isBox3: !0,
                set: function(t, e) {
                    return this.min.copy(t), this.max.copy(e), this
                },
                setFromArray: function(t) {
                    for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.length; s < c; s += 3) {
                        var h = t[s],
                            l = t[s + 1],
                            u = t[s + 2];
                        h < e && (e = h), l < i && (i = l), u < n && (n = u), h > r && (r = h), l > a && (a = l), u > o && (o = u)
                    }
                    return this.min.set(e, i, n), this.max.set(r, a, o), this
                },
                setFromBufferAttribute: function(t) {
                    for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.count; s < c; s++) {
                        var h = t.getX(s),
                            l = t.getY(s),
                            u = t.getZ(s);
                        h < e && (e = h), l < i && (i = l), u < n && (n = u), h > r && (r = h), l > a && (a = l), u > o && (o = u)
                    }
                    return this.min.set(e, i, n), this.max.set(r, a, o), this
                },
                setFromPoints: function(t) {
                    this.makeEmpty();
                    for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
                    return this
                },
                setFromCenterAndSize: function(t, e) {
                    var i = _i.copy(e).multiplyScalar(.5);
                    return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
                },
                setFromObject: function(t) {
                    return this.makeEmpty(), this.expandByObject(t)
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.min.copy(t.min), this.max.copy(t.max), this
                },
                makeEmpty: function() {
                    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
                },
                isEmpty: function() {
                    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
                },
                getCenter: function(t) {
                    return void 0 === t && (t = new Re), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
                },
                getSize: function(t) {
                    return void 0 === t && (t = new Re), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
                },
                expandByPoint: function(t) {
                    return this.min.min(t), this.max.max(t), this
                },
                expandByVector: function(t) {
                    return this.min.sub(t), this.max.add(t), this
                },
                expandByScalar: function(t) {
                    return this.min.addScalar(-t), this.max.addScalar(t), this
                },
                expandByObject: function(t) {
                    t.updateWorldMatrix(!1, !1);
                    var e = t.geometry;
                    void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(), bi.copy(e.boundingBox), bi.applyMatrix4(t.matrixWorld), this.expandByPoint(bi.min), this.expandByPoint(bi.max));
                    for (var i = t.children, n = 0, r = i.length; n < r; n++) this.expandByObject(i[n]);
                    return this
                },
                containsPoint: function(t) {
                    return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
                },
                containsBox: function(t) {
                    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
                },
                getParameter: function(t, e) {
                    return void 0 === e && (e = new Re), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
                },
                intersectsBox: function(t) {
                    return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
                },
                intersectsSphere: function(t) {
                    return this.clampPoint(t.center, _i), _i.distanceToSquared(t.center) <= t.radius * t.radius
                },
                intersectsPlane: function(t) {
                    var e, i;
                    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant
                },
                intersectsTriangle: function(t) {
                    if (this.isEmpty()) return !1;
                    this.getCenter(Pi), Ci.subVectors(this.max, Pi), Mi.subVectors(t.a, Pi), wi.subVectors(t.b, Pi), Si.subVectors(t.c, Pi), Ti.subVectors(wi, Mi), Ai.subVectors(Si, wi), Li.subVectors(Mi, Si);
                    var e = [0, -Ti.z, Ti.y, 0, -Ai.z, Ai.y, 0, -Li.z, Li.y, Ti.z, 0, -Ti.x, Ai.z, 0, -Ai.x, Li.z, 0, -Li.x, -Ti.y, Ti.x, 0, -Ai.y, Ai.x, 0, -Li.y, Li.x, 0];
                    return !!Ii(e, Mi, wi, Si, Ci) && (!!Ii(e = [1, 0, 0, 0, 1, 0, 0, 0, 1], Mi, wi, Si, Ci) && (Ei.crossVectors(Ti, Ai), Ii(e = [Ei.x, Ei.y, Ei.z], Mi, wi, Si, Ci)))
                },
                clampPoint: function(t, e) {
                    return void 0 === e && (e = new Re), e.copy(t).clamp(this.min, this.max)
                },
                distanceToPoint: function(t) {
                    return _i.copy(t).clamp(this.min, this.max).sub(t).length()
                },
                getBoundingSphere: function(t) {
                    return this.getCenter(t.center), t.radius = .5 * this.getSize(_i).length(), t
                },
                intersect: function(t) {
                    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
                },
                union: function(t) {
                    return this.min.min(t.min), this.max.max(t.max), this
                },
                applyMatrix4: function(t) {
                    return this.isEmpty() ? this : (xi[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), xi[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), xi[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), xi[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), xi[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), xi[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), xi[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), xi[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(xi), this)
                },
                translate: function(t) {
                    return this.min.add(t), this.max.add(t), this
                },
                equals: function(t) {
                    return t.min.equals(this.min) && t.max.equals(this.max)
                }
            });
            var Di = new Ni;

            function zi(t, e) {
                this.center = void 0 !== t ? t : new Re, this.radius = void 0 !== e ? e : 0
            }
            Object.assign(zi.prototype, {
                set: function(t, e) {
                    return this.center.copy(t), this.radius = e, this
                },
                setFromPoints: function(t, e) {
                    var i = this.center;
                    void 0 !== e ? i.copy(e) : Di.setFromPoints(t).getCenter(i);
                    for (var n = 0, r = 0, a = t.length; r < a; r++) n = Math.max(n, i.distanceToSquared(t[r]));
                    return this.radius = Math.sqrt(n), this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.center.copy(t.center), this.radius = t.radius, this
                },
                empty: function() {
                    return this.radius <= 0
                },
                containsPoint: function(t) {
                    return t.distanceToSquared(this.center) <= this.radius * this.radius
                },
                distanceToPoint: function(t) {
                    return t.distanceTo(this.center) - this.radius
                },
                intersectsSphere: function(t) {
                    var e = this.radius + t.radius;
                    return t.center.distanceToSquared(this.center) <= e * e
                },
                intersectsBox: function(t) {
                    return t.intersectsSphere(this)
                },
                intersectsPlane: function(t) {
                    return Math.abs(t.distanceToPoint(this.center)) <= this.radius
                },
                clampPoint: function(t, e) {
                    var i = this.center.distanceToSquared(t);
                    return void 0 === e && (e = new Re), e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
                },
                getBoundingBox: function(t) {
                    return void 0 === t && (t = new Ni), t.set(this.center, this.center), t.expandByScalar(this.radius), t
                },
                applyMatrix4: function(t) {
                    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
                },
                translate: function(t) {
                    return this.center.add(t), this
                },
                equals: function(t) {
                    return t.center.equals(this.center) && t.radius === this.radius
                }
            });
            var Ri = new Re,
                Fi = new Re,
                Ui = new Re,
                Bi = new Re,
                Vi = new Re,
                Gi = new Re,
                ki = new Re;

            function ji(t, e) {
                this.origin = void 0 !== t ? t : new Re, this.direction = void 0 !== e ? e : new Re(0, 0, -1)
            }
            Object.assign(ji.prototype, {
                set: function(t, e) {
                    return this.origin.copy(t), this.direction.copy(e), this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.origin.copy(t.origin), this.direction.copy(t.direction), this
                },
                at: function(t, e) {
                    return void 0 === e && (e = new Re), e.copy(this.direction).multiplyScalar(t).add(this.origin)
                },
                lookAt: function(t) {
                    return this.direction.copy(t).sub(this.origin).normalize(), this
                },
                recast: function(t) {
                    return this.origin.copy(this.at(t, Ri)), this
                },
                closestPointToPoint: function(t, e) {
                    void 0 === e && (e = new Re), e.subVectors(t, this.origin);
                    var i = e.dot(this.direction);
                    return i < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(i).add(this.origin)
                },
                distanceToPoint: function(t) {
                    return Math.sqrt(this.distanceSqToPoint(t))
                },
                distanceSqToPoint: function(t) {
                    var e = Ri.subVectors(t, this.origin).dot(this.direction);
                    return e < 0 ? this.origin.distanceToSquared(t) : (Ri.copy(this.direction).multiplyScalar(e).add(this.origin), Ri.distanceToSquared(t))
                },
                distanceSqToSegment: function(t, e, i, n) {
                    Fi.copy(t).add(e).multiplyScalar(.5), Ui.copy(e).sub(t).normalize(), Bi.copy(this.origin).sub(Fi);
                    var r, a, o, s, c = .5 * t.distanceTo(e),
                        h = -this.direction.dot(Ui),
                        l = Bi.dot(this.direction),
                        u = -Bi.dot(Ui),
                        p = Bi.lengthSq(),
                        d = Math.abs(1 - h * h);
                    if (d > 0)
                        if (a = h * l - u, s = c * d, (r = h * u - l) >= 0)
                            if (a >= -s)
                                if (a <= s) {
                                    var f = 1 / d;
                                    o = (r *= f) * (r + h * (a *= f) + 2 * l) + a * (h * r + a + 2 * u) + p
                                } else a = c, o = -(r = Math.max(0, -(h * a + l))) * r + a * (a + 2 * u) + p;
                    else a = -c, o = -(r = Math.max(0, -(h * a + l))) * r + a * (a + 2 * u) + p;
                    else a <= -s ? o = -(r = Math.max(0, -(-h * c + l))) * r + (a = r > 0 ? -c : Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p : a <= s ? (r = 0, o = (a = Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p) : o = -(r = Math.max(0, -(h * c + l))) * r + (a = r > 0 ? c : Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p;
                    else a = h > 0 ? -c : c, o = -(r = Math.max(0, -(h * a + l))) * r + a * (a + 2 * u) + p;
                    return i && i.copy(this.direction).multiplyScalar(r).add(this.origin), n && n.copy(Ui).multiplyScalar(a).add(Fi), o
                },
                intersectSphere: function(t, e) {
                    Ri.subVectors(t.center, this.origin);
                    var i = Ri.dot(this.direction),
                        n = Ri.dot(Ri) - i * i,
                        r = t.radius * t.radius;
                    if (n > r) return null;
                    var a = Math.sqrt(r - n),
                        o = i - a,
                        s = i + a;
                    return o < 0 && s < 0 ? null : o < 0 ? this.at(s, e) : this.at(o, e)
                },
                intersectsSphere: function(t) {
                    return this.distanceSqToPoint(t.center) <= t.radius * t.radius
                },
                distanceToPlane: function(t) {
                    var e = t.normal.dot(this.direction);
                    if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
                    var i = -(this.origin.dot(t.normal) + t.constant) / e;
                    return i >= 0 ? i : null
                },
                intersectPlane: function(t, e) {
                    var i = this.distanceToPlane(t);
                    return null === i ? null : this.at(i, e)
                },
                intersectsPlane: function(t) {
                    var e = t.distanceToPoint(this.origin);
                    return 0 === e || t.normal.dot(this.direction) * e < 0
                },
                intersectBox: function(t, e) {
                    var i, n, r, a, o, s, c = 1 / this.direction.x,
                        h = 1 / this.direction.y,
                        l = 1 / this.direction.z,
                        u = this.origin;
                    return c >= 0 ? (i = (t.min.x - u.x) * c, n = (t.max.x - u.x) * c) : (i = (t.max.x - u.x) * c, n = (t.min.x - u.x) * c), h >= 0 ? (r = (t.min.y - u.y) * h, a = (t.max.y - u.y) * h) : (r = (t.max.y - u.y) * h, a = (t.min.y - u.y) * h), i > a || r > n ? null : ((r > i || i != i) && (i = r), (a < n || n != n) && (n = a), l >= 0 ? (o = (t.min.z - u.z) * l, s = (t.max.z - u.z) * l) : (o = (t.max.z - u.z) * l, s = (t.min.z - u.z) * l), i > s || o > n ? null : ((o > i || i != i) && (i = o), (s < n || n != n) && (n = s), n < 0 ? null : this.at(i >= 0 ? i : n, e)))
                },
                intersectsBox: function(t) {
                    return null !== this.intersectBox(t, Ri)
                },
                intersectTriangle: function(t, e, i, n, r) {
                    Vi.subVectors(e, t), Gi.subVectors(i, t), ki.crossVectors(Vi, Gi);
                    var a, o = this.direction.dot(ki);
                    if (o > 0) {
                        if (n) return null;
                        a = 1
                    } else {
                        if (!(o < 0)) return null;
                        a = -1, o = -o
                    }
                    Bi.subVectors(this.origin, t);
                    var s = a * this.direction.dot(Gi.crossVectors(Bi, Gi));
                    if (s < 0) return null;
                    var c = a * this.direction.dot(Vi.cross(Bi));
                    if (c < 0) return null;
                    if (s + c > o) return null;
                    var h = -a * Bi.dot(ki);
                    return h < 0 ? null : this.at(h / o, r)
                },
                applyMatrix4: function(t) {
                    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
                },
                equals: function(t) {
                    return t.origin.equals(this.origin) && t.direction.equals(this.direction)
                }
            });
            var Wi = new Re,
                Hi = new Re,
                qi = new Be;

            function Xi(t, e) {
                this.normal = void 0 !== t ? t : new Re(1, 0, 0), this.constant = void 0 !== e ? e : 0
            }
            Object.assign(Xi.prototype, {
                isPlane: !0,
                set: function(t, e) {
                    return this.normal.copy(t), this.constant = e, this
                },
                setComponents: function(t, e, i, n) {
                    return this.normal.set(t, e, i), this.constant = n, this
                },
                setFromNormalAndCoplanarPoint: function(t, e) {
                    return this.normal.copy(t), this.constant = -e.dot(this.normal), this
                },
                setFromCoplanarPoints: function(t, e, i) {
                    var n = Wi.subVectors(i, e).cross(Hi.subVectors(t, e)).normalize();
                    return this.setFromNormalAndCoplanarPoint(n, t), this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.normal.copy(t.normal), this.constant = t.constant, this
                },
                normalize: function() {
                    var t = 1 / this.normal.length();
                    return this.normal.multiplyScalar(t), this.constant *= t, this
                },
                negate: function() {
                    return this.constant *= -1, this.normal.negate(), this
                },
                distanceToPoint: function(t) {
                    return this.normal.dot(t) + this.constant
                },
                distanceToSphere: function(t) {
                    return this.distanceToPoint(t.center) - t.radius
                },
                projectPoint: function(t, e) {
                    return void 0 === e && (e = new Re), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
                },
                intersectLine: function(t, e) {
                    void 0 === e && (e = new Re);
                    var i = t.delta(Wi),
                        n = this.normal.dot(i);
                    if (0 === n) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : void 0;
                    var r = -(t.start.dot(this.normal) + this.constant) / n;
                    return r < 0 || r > 1 ? void 0 : e.copy(i).multiplyScalar(r).add(t.start)
                },
                intersectsLine: function(t) {
                    var e = this.distanceToPoint(t.start),
                        i = this.distanceToPoint(t.end);
                    return e < 0 && i > 0 || i < 0 && e > 0
                },
                intersectsBox: function(t) {
                    return t.intersectsPlane(this)
                },
                intersectsSphere: function(t) {
                    return t.intersectsPlane(this)
                },
                coplanarPoint: function(t) {
                    return void 0 === t && (t = new Re), t.copy(this.normal).multiplyScalar(-this.constant)
                },
                applyMatrix4: function(t, e) {
                    var i = e || qi.getNormalMatrix(t),
                        n = this.coplanarPoint(Wi).applyMatrix4(t),
                        r = this.normal.applyMatrix3(i).normalize();
                    return this.constant = -n.dot(r), this
                },
                translate: function(t) {
                    return this.constant -= t.dot(this.normal), this
                },
                equals: function(t) {
                    return t.normal.equals(this.normal) && t.constant === this.constant
                }
            });
            var Yi = new Re,
                Ji = new Re,
                Zi = new Re,
                Qi = new Re,
                Ki = new Re,
                $i = new Re,
                tn = new Re,
                en = new Re,
                nn = new Re,
                rn = new Re;

            function an(t, e, i) {
                this.a = void 0 !== t ? t : new Re, this.b = void 0 !== e ? e : new Re, this.c = void 0 !== i ? i : new Re
            }
            Object.assign(an, {
                getNormal: function(t, e, i, n) {
                    void 0 === n && (n = new Re), n.subVectors(i, e), Yi.subVectors(t, e), n.cross(Yi);
                    var r = n.lengthSq();
                    return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0)
                },
                getBarycoord: function(t, e, i, n, r) {
                    Yi.subVectors(n, e), Ji.subVectors(i, e), Zi.subVectors(t, e);
                    var a = Yi.dot(Yi),
                        o = Yi.dot(Ji),
                        s = Yi.dot(Zi),
                        c = Ji.dot(Ji),
                        h = Ji.dot(Zi),
                        l = a * c - o * o;
                    if (void 0 === r && (r = new Re), 0 === l) return r.set(-2, -1, -1);
                    var u = 1 / l,
                        p = (c * s - o * h) * u,
                        d = (a * h - o * s) * u;
                    return r.set(1 - p - d, d, p)
                },
                containsPoint: function(t, e, i, n) {
                    return an.getBarycoord(t, e, i, n, Qi), Qi.x >= 0 && Qi.y >= 0 && Qi.x + Qi.y <= 1
                },
                getUV: function(t, e, i, n, r, a, o, s) {
                    return this.getBarycoord(t, e, i, n, Qi), s.set(0, 0), s.addScaledVector(r, Qi.x), s.addScaledVector(a, Qi.y), s.addScaledVector(o, Qi.z), s
                },
                isFrontFacing: function(t, e, i, n) {
                    return Yi.subVectors(i, e), Ji.subVectors(t, e), Yi.cross(Ji).dot(n) < 0
                }
            }), Object.assign(an.prototype, {
                set: function(t, e, i) {
                    return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
                },
                setFromPointsAndIndices: function(t, e, i, n) {
                    return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
                },
                getArea: function() {
                    return Yi.subVectors(this.c, this.b), Ji.subVectors(this.a, this.b), .5 * Yi.cross(Ji).length()
                },
                getMidpoint: function(t) {
                    return void 0 === t && (t = new Re), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
                },
                getNormal: function(t) {
                    return an.getNormal(this.a, this.b, this.c, t)
                },
                getPlane: function(t) {
                    return void 0 === t && (t = new Xi), t.setFromCoplanarPoints(this.a, this.b, this.c)
                },
                getBarycoord: function(t, e) {
                    return an.getBarycoord(t, this.a, this.b, this.c, e)
                },
                getUV: function(t, e, i, n, r) {
                    return an.getUV(t, this.a, this.b, this.c, e, i, n, r)
                },
                containsPoint: function(t) {
                    return an.containsPoint(t, this.a, this.b, this.c)
                },
                isFrontFacing: function(t) {
                    return an.isFrontFacing(this.a, this.b, this.c, t)
                },
                intersectsBox: function(t) {
                    return t.intersectsTriangle(this)
                },
                closestPointToPoint: function(t, e) {
                    void 0 === e && (e = new Re);
                    var i, n, r = this.a,
                        a = this.b,
                        o = this.c;
                    Ki.subVectors(a, r), $i.subVectors(o, r), en.subVectors(t, r);
                    var s = Ki.dot(en),
                        c = $i.dot(en);
                    if (s <= 0 && c <= 0) return e.copy(r);
                    nn.subVectors(t, a);
                    var h = Ki.dot(nn),
                        l = $i.dot(nn);
                    if (h >= 0 && l <= h) return e.copy(a);
                    var u = s * l - h * c;
                    if (u <= 0 && s >= 0 && h <= 0) return i = s / (s - h), e.copy(r).addScaledVector(Ki, i);
                    rn.subVectors(t, o);
                    var p = Ki.dot(rn),
                        d = $i.dot(rn);
                    if (d >= 0 && p <= d) return e.copy(o);
                    var f = p * c - s * d;
                    if (f <= 0 && c >= 0 && d <= 0) return n = c / (c - d), e.copy(r).addScaledVector($i, n);
                    var m = h * d - p * l;
                    if (m <= 0 && l - h >= 0 && p - d >= 0) return tn.subVectors(o, a), n = (l - h) / (l - h + (p - d)), e.copy(a).addScaledVector(tn, n);
                    var v = 1 / (m + f + u);
                    return i = f * v, n = u * v, e.copy(r).addScaledVector(Ki, i).addScaledVector($i, n)
                },
                equals: function(t) {
                    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
                }
            });
            var on = {
                    aliceblue: 15792383,
                    antiquewhite: 16444375,
                    aqua: 65535,
                    aquamarine: 8388564,
                    azure: 15794175,
                    beige: 16119260,
                    bisque: 16770244,
                    black: 0,
                    blanchedalmond: 16772045,
                    blue: 255,
                    blueviolet: 9055202,
                    brown: 10824234,
                    burlywood: 14596231,
                    cadetblue: 6266528,
                    chartreuse: 8388352,
                    chocolate: 13789470,
                    coral: 16744272,
                    cornflowerblue: 6591981,
                    cornsilk: 16775388,
                    crimson: 14423100,
                    cyan: 65535,
                    darkblue: 139,
                    darkcyan: 35723,
                    darkgoldenrod: 12092939,
                    darkgray: 11119017,
                    darkgreen: 25600,
                    darkgrey: 11119017,
                    darkkhaki: 12433259,
                    darkmagenta: 9109643,
                    darkolivegreen: 5597999,
                    darkorange: 16747520,
                    darkorchid: 10040012,
                    darkred: 9109504,
                    darksalmon: 15308410,
                    darkseagreen: 9419919,
                    darkslateblue: 4734347,
                    darkslategray: 3100495,
                    darkslategrey: 3100495,
                    darkturquoise: 52945,
                    darkviolet: 9699539,
                    deeppink: 16716947,
                    deepskyblue: 49151,
                    dimgray: 6908265,
                    dimgrey: 6908265,
                    dodgerblue: 2003199,
                    firebrick: 11674146,
                    floralwhite: 16775920,
                    forestgreen: 2263842,
                    fuchsia: 16711935,
                    gainsboro: 14474460,
                    ghostwhite: 16316671,
                    gold: 16766720,
                    goldenrod: 14329120,
                    gray: 8421504,
                    green: 32768,
                    greenyellow: 11403055,
                    grey: 8421504,
                    honeydew: 15794160,
                    hotpink: 16738740,
                    indianred: 13458524,
                    indigo: 4915330,
                    ivory: 16777200,
                    khaki: 15787660,
                    lavender: 15132410,
                    lavenderblush: 16773365,
                    lawngreen: 8190976,
                    lemonchiffon: 16775885,
                    lightblue: 11393254,
                    lightcoral: 15761536,
                    lightcyan: 14745599,
                    lightgoldenrodyellow: 16448210,
                    lightgray: 13882323,
                    lightgreen: 9498256,
                    lightgrey: 13882323,
                    lightpink: 16758465,
                    lightsalmon: 16752762,
                    lightseagreen: 2142890,
                    lightskyblue: 8900346,
                    lightslategray: 7833753,
                    lightslategrey: 7833753,
                    lightsteelblue: 11584734,
                    lightyellow: 16777184,
                    lime: 65280,
                    limegreen: 3329330,
                    linen: 16445670,
                    magenta: 16711935,
                    maroon: 8388608,
                    mediumaquamarine: 6737322,
                    mediumblue: 205,
                    mediumorchid: 12211667,
                    mediumpurple: 9662683,
                    mediumseagreen: 3978097,
                    mediumslateblue: 8087790,
                    mediumspringgreen: 64154,
                    mediumturquoise: 4772300,
                    mediumvioletred: 13047173,
                    midnightblue: 1644912,
                    mintcream: 16121850,
                    mistyrose: 16770273,
                    moccasin: 16770229,
                    navajowhite: 16768685,
                    navy: 128,
                    oldlace: 16643558,
                    olive: 8421376,
                    olivedrab: 7048739,
                    orange: 16753920,
                    orangered: 16729344,
                    orchid: 14315734,
                    palegoldenrod: 15657130,
                    palegreen: 10025880,
                    paleturquoise: 11529966,
                    palevioletred: 14381203,
                    papayawhip: 16773077,
                    peachpuff: 16767673,
                    peru: 13468991,
                    pink: 16761035,
                    plum: 14524637,
                    powderblue: 11591910,
                    purple: 8388736,
                    rebeccapurple: 6697881,
                    red: 16711680,
                    rosybrown: 12357519,
                    royalblue: 4286945,
                    saddlebrown: 9127187,
                    salmon: 16416882,
                    sandybrown: 16032864,
                    seagreen: 3050327,
                    seashell: 16774638,
                    sienna: 10506797,
                    silver: 12632256,
                    skyblue: 8900331,
                    slateblue: 6970061,
                    slategray: 7372944,
                    slategrey: 7372944,
                    snow: 16775930,
                    springgreen: 65407,
                    steelblue: 4620980,
                    tan: 13808780,
                    teal: 32896,
                    thistle: 14204888,
                    tomato: 16737095,
                    turquoise: 4251856,
                    violet: 15631086,
                    wheat: 16113331,
                    white: 16777215,
                    whitesmoke: 16119285,
                    yellow: 16776960,
                    yellowgreen: 10145074
                },
                sn = {
                    h: 0,
                    s: 0,
                    l: 0
                },
                cn = {
                    h: 0,
                    s: 0,
                    l: 0
                };

            function hn(t, e, i) {
                return void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i)
            }

            function ln(t, e, i) {
                return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t
            }

            function un(t) {
                return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
            }

            function pn(t) {
                return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
            }

            function dn(t, e, i, n, r, a) {
                this.a = t, this.b = e, this.c = i, this.normal = n && n.isVector3 ? n : new Re, this.vertexNormals = Array.isArray(n) ? n : [], this.color = r && r.isColor ? r : new hn, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== a ? a : 0
            }
            Object.assign(hn.prototype, {
                isColor: !0,
                r: 1,
                g: 1,
                b: 1,
                set: function(t) {
                    return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
                },
                setScalar: function(t) {
                    return this.r = t, this.g = t, this.b = t, this
                },
                setHex: function(t) {
                    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
                },
                setRGB: function(t, e, i) {
                    return this.r = t, this.g = e, this.b = i, this
                },
                setHSL: function(t, e, i) {
                    if (t = Oe.euclideanModulo(t, 1), e = Oe.clamp(e, 0, 1), i = Oe.clamp(i, 0, 1), 0 === e) this.r = this.g = this.b = i;
                    else {
                        var n = i <= .5 ? i * (1 + e) : i + e - i * e,
                            r = 2 * i - n;
                        this.r = ln(r, n, t + 1 / 3), this.g = ln(r, n, t), this.b = ln(r, n, t - 1 / 3)
                    }
                    return this
                },
                setStyle: function(t) {
                    function e(t) {
                        void 0 !== t && parseFloat(t)
                    }
                    var i;
                    if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
                        var n, r = i[1],
                            a = i[2];
                        switch (r) {
                            case "rgb":
                            case "rgba":
                                if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, e(n[5]), this;
                                if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, e(n[5]), this;
                                break;
                            case "hsl":
                            case "hsla":
                                if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
                                    var o = parseFloat(n[1]) / 360,
                                        s = parseInt(n[2], 10) / 100,
                                        c = parseInt(n[3], 10) / 100;
                                    return e(n[5]), this.setHSL(o, s, c)
                                }
                        }
                    } else if (i = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                        var h = i[1],
                            l = h.length;
                        if (3 === l) return this.r = parseInt(h.charAt(0) + h.charAt(0), 16) / 255, this.g = parseInt(h.charAt(1) + h.charAt(1), 16) / 255, this.b = parseInt(h.charAt(2) + h.charAt(2), 16) / 255, this;
                        if (6 === l) return this.r = parseInt(h.charAt(0) + h.charAt(1), 16) / 255, this.g = parseInt(h.charAt(2) + h.charAt(3), 16) / 255, this.b = parseInt(h.charAt(4) + h.charAt(5), 16) / 255, this
                    }
                    return t && t.length > 0 ? this.setColorName(t) : this
                },
                setColorName: function(t) {
                    var e = on[t];
                    return void 0 !== e && this.setHex(e), this
                },
                clone: function() {
                    return new this.constructor(this.r, this.g, this.b)
                },
                copy: function(t) {
                    return this.r = t.r, this.g = t.g, this.b = t.b, this
                },
                copyGammaToLinear: function(t, e) {
                    return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
                },
                copyLinearToGamma: function(t, e) {
                    void 0 === e && (e = 2);
                    var i = e > 0 ? 1 / e : 1;
                    return this.r = Math.pow(t.r, i), this.g = Math.pow(t.g, i), this.b = Math.pow(t.b, i), this
                },
                convertGammaToLinear: function(t) {
                    return this.copyGammaToLinear(this, t), this
                },
                convertLinearToGamma: function(t) {
                    return this.copyLinearToGamma(this, t), this
                },
                copySRGBToLinear: function(t) {
                    return this.r = un(t.r), this.g = un(t.g), this.b = un(t.b), this
                },
                copyLinearToSRGB: function(t) {
                    return this.r = pn(t.r), this.g = pn(t.g), this.b = pn(t.b), this
                },
                convertSRGBToLinear: function() {
                    return this.copySRGBToLinear(this), this
                },
                convertLinearToSRGB: function() {
                    return this.copyLinearToSRGB(this), this
                },
                getHex: function() {
                    return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
                },
                getHexString: function() {
                    return ("000000" + this.getHex().toString(16)).slice(-6)
                },
                getHSL: function(t) {
                    void 0 === t && (t = {
                        h: 0,
                        s: 0,
                        l: 0
                    });
                    var e, i, n = this.r,
                        r = this.g,
                        a = this.b,
                        o = Math.max(n, r, a),
                        s = Math.min(n, r, a),
                        c = (s + o) / 2;
                    if (s === o) e = 0, i = 0;
                    else {
                        var h = o - s;
                        switch (i = c <= .5 ? h / (o + s) : h / (2 - o - s), o) {
                            case n:
                                e = (r - a) / h + (r < a ? 6 : 0);
                                break;
                            case r:
                                e = (a - n) / h + 2;
                                break;
                            case a:
                                e = (n - r) / h + 4
                        }
                        e /= 6
                    }
                    return t.h = e, t.s = i, t.l = c, t
                },
                getStyle: function() {
                    return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
                },
                offsetHSL: function(t, e, i) {
                    return this.getHSL(sn), sn.h += t, sn.s += e, sn.l += i, this.setHSL(sn.h, sn.s, sn.l), this
                },
                add: function(t) {
                    return this.r += t.r, this.g += t.g, this.b += t.b, this
                },
                addColors: function(t, e) {
                    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
                },
                addScalar: function(t) {
                    return this.r += t, this.g += t, this.b += t, this
                },
                sub: function(t) {
                    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
                },
                multiply: function(t) {
                    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
                },
                multiplyScalar: function(t) {
                    return this.r *= t, this.g *= t, this.b *= t, this
                },
                lerp: function(t, e) {
                    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
                },
                lerpHSL: function(t, e) {
                    this.getHSL(sn), t.getHSL(cn);
                    var i = Oe.lerp(sn.h, cn.h, e),
                        n = Oe.lerp(sn.s, cn.s, e),
                        r = Oe.lerp(sn.l, cn.l, e);
                    return this.setHSL(i, n, r), this
                },
                equals: function(t) {
                    return t.r === this.r && t.g === this.g && t.b === this.b
                },
                fromArray: function(t, e) {
                    return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
                },
                toArray: function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
                },
                toJSON: function() {
                    return this.getHex()
                }
            }), hn.NAMES = on, Object.assign(dn.prototype, {
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
                    for (var e = 0, i = t.vertexNormals.length; e < i; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
                    for (e = 0, i = t.vertexColors.length; e < i; e++) this.vertexColors[e] = t.vertexColors[e].clone();
                    return this
                }
            });
            var fn = 0;

            function mn() {
                Object.defineProperty(this, "id", {
                    value: fn++
                }), this.uuid = Oe.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = v, this.side = h, this.flatShading = !1, this.vertexTangents = !1, this.vertexColors = p, this.opacity = 1, this.transparent = !1, this.blendSrc = E, this.blendDst = O, this.blendEquation = b, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = V, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Ae, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Te, this.stencilZFail = Te, this.stencilZPass = Te, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0
            }

            function vn(t) {
                mn.call(this), this.type = "MeshBasicMaterial", this.color = new hn(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = H, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(t)
            }
            mn.prototype = Object.assign(Object.create(Pe.prototype), {
                constructor: mn,
                isMaterial: !0,
                onBeforeCompile: function() {},
                setValues: function(t) {
                    if (void 0 !== t)
                        for (var e in t) {
                            var i = t[e];
                            if (void 0 !== i)
                                if ("shading" !== e) {
                                    var n = this[e];
                                    void 0 !== n && (n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = i)
                                } else this.flatShading = 1 === i
                        }
                },
                toJSON: function(t) {
                    var e = void 0 === t || "string" == typeof t;
                    e && (t = {
                        textures: {},
                        images: {}
                    });
                    var i = {
                        metadata: {
                            version: 4.5,
                            type: "Material",
                            generator: "Material.toJSON"
                        }
                    };

                    function n(t) {
                        var e = [];
                        for (var i in t) {
                            var n = t[i];
                            delete n.metadata, e.push(n)
                        }
                        return e
                    }
                    if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), this.sheen && this.sheen.isColor && (i.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearcoat && (i.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, i.reflectivity = this.reflectivity, i.refractionRatio = this.refractionRatio, void 0 !== this.combine && (i.combine = this.combine), void 0 !== this.envMapIntensity && (i.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (i.size = this.size), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== v && (i.blending = this.blending), !0 === this.flatShading && (i.flatShading = this.flatShading), this.side !== h && (i.side = this.side), this.vertexColors !== p && (i.vertexColors = this.vertexColors), this.opacity < 1 && (i.opacity = this.opacity), !0 === this.transparent && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, i.stencilWrite = this.stencilWrite, i.stencilWriteMask = this.stencilWriteMask, i.stencilFunc = this.stencilFunc, i.stencilRef = this.stencilRef, i.stencilFuncMask = this.stencilFuncMask, i.stencilFail = this.stencilFail, i.stencilZFail = this.stencilZFail, i.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (i.rotation = this.rotation), !0 === this.polygonOffset && (i.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (i.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (i.linewidth = this.linewidth), void 0 !== this.dashSize && (i.dashSize = this.dashSize), void 0 !== this.gapSize && (i.gapSize = this.gapSize), void 0 !== this.scale && (i.scale = this.scale), !0 === this.dithering && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (i.morphTargets = !0), !0 === this.morphNormals && (i.morphNormals = !0), !0 === this.skinning && (i.skinning = !0), !1 === this.visible && (i.visible = !1), !1 === this.toneMapped && (i.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), e) {
                        var r = n(t.textures),
                            a = n(t.images);
                        r.length > 0 && (i.textures = r), a.length > 0 && (i.images = a)
                    }
                    return i
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    this.name = t.name, this.fog = t.fog, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexTangents = t.vertexTangents, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
                    var e = t.clippingPlanes,
                        i = null;
                    if (null !== e) {
                        var n = e.length;
                        i = new Array(n);
                        for (var r = 0; r !== n; ++r) i[r] = e[r].clone()
                    }
                    return this.clippingPlanes = i, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this
                },
                dispose: function() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            }), Object.defineProperty(mn.prototype, "needsUpdate", {
                set: function(t) {
                    !0 === t && this.version++
                }
            }), vn.prototype = Object.create(mn.prototype), vn.prototype.constructor = vn, vn.prototype.isMeshBasicMaterial = !0, vn.prototype.copy = function(t) {
                return mn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
            };
            var gn = new Re;

            function yn(t, e, i) {
                if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
                this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === i, this.usage = Le, this.updateRange = {
                    offset: 0,
                    count: -1
                }, this.version = 0
            }

            function xn(t, e, i) {
                yn.call(this, new Int8Array(t), e, i)
            }

            function _n(t, e, i) {
                yn.call(this, new Uint8Array(t), e, i)
            }

            function bn(t, e, i) {
                yn.call(this, new Uint8ClampedArray(t), e, i)
            }

            function Mn(t, e, i) {
                yn.call(this, new Int16Array(t), e, i)
            }

            function wn(t, e, i) {
                yn.call(this, new Uint16Array(t), e, i)
            }

            function Sn(t, e, i) {
                yn.call(this, new Int32Array(t), e, i)
            }

            function Tn(t, e, i) {
                yn.call(this, new Uint32Array(t), e, i)
            }

            function An(t, e, i) {
                yn.call(this, new Float32Array(t), e, i)
            }

            function Ln(t, e, i) {
                yn.call(this, new Float64Array(t), e, i)
            }

            function Pn() {
                this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
            }

            function Cn(t) {
                if (0 === t.length) return -1 / 0;
                for (var e = t[0], i = 1, n = t.length; i < n; ++i) t[i] > e && (e = t[i]);
                return e
            }
            Object.defineProperty(yn.prototype, "needsUpdate", {
                set: function(t) {
                    !0 === t && this.version++
                }
            }), Object.assign(yn.prototype, {
                isBufferAttribute: !0,
                onUploadCallback: function() {},
                setUsage: function(t) {
                    return this.usage = t, this
                },
                copy: function(t) {
                    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this
                },
                copyAt: function(t, e, i) {
                    t *= this.itemSize, i *= e.itemSize;
                    for (var n = 0, r = this.itemSize; n < r; n++) this.array[t + n] = e.array[i + n];
                    return this
                },
                copyArray: function(t) {
                    return this.array.set(t), this
                },
                copyColorsArray: function(t) {
                    for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                        var a = t[n];
                        void 0 === a && (a = new hn), e[i++] = a.r, e[i++] = a.g, e[i++] = a.b
                    }
                    return this
                },
                copyVector2sArray: function(t) {
                    for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                        var a = t[n];
                        void 0 === a && (a = new Ne), e[i++] = a.x, e[i++] = a.y
                    }
                    return this
                },
                copyVector3sArray: function(t) {
                    for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                        var a = t[n];
                        void 0 === a && (a = new Re), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z
                    }
                    return this
                },
                copyVector4sArray: function(t) {
                    for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                        var a = t[n];
                        void 0 === a && (a = new je), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z, e[i++] = a.w
                    }
                    return this
                },
                applyMatrix3: function(t) {
                    for (var e = 0, i = this.count; e < i; e++) gn.x = this.getX(e), gn.y = this.getY(e), gn.z = this.getZ(e), gn.applyMatrix3(t), this.setXYZ(e, gn.x, gn.y, gn.z);
                    return this
                },
                applyMatrix4: function(t) {
                    for (var e = 0, i = this.count; e < i; e++) gn.x = this.getX(e), gn.y = this.getY(e), gn.z = this.getZ(e), gn.applyMatrix4(t), this.setXYZ(e, gn.x, gn.y, gn.z);
                    return this
                },
                applyNormalMatrix: function(t) {
                    for (var e = 0, i = this.count; e < i; e++) gn.x = this.getX(e), gn.y = this.getY(e), gn.z = this.getZ(e), gn.applyNormalMatrix(t), this.setXYZ(e, gn.x, gn.y, gn.z);
                    return this
                },
                transformDirection: function(t) {
                    for (var e = 0, i = this.count; e < i; e++) gn.x = this.getX(e), gn.y = this.getY(e), gn.z = this.getZ(e), gn.transformDirection(t), this.setXYZ(e, gn.x, gn.y, gn.z);
                    return this
                },
                set: function(t, e) {
                    return void 0 === e && (e = 0), this.array.set(t, e), this
                },
                getX: function(t) {
                    return this.array[t * this.itemSize]
                },
                setX: function(t, e) {
                    return this.array[t * this.itemSize] = e, this
                },
                getY: function(t) {
                    return this.array[t * this.itemSize + 1]
                },
                setY: function(t, e) {
                    return this.array[t * this.itemSize + 1] = e, this
                },
                getZ: function(t) {
                    return this.array[t * this.itemSize + 2]
                },
                setZ: function(t, e) {
                    return this.array[t * this.itemSize + 2] = e, this
                },
                getW: function(t) {
                    return this.array[t * this.itemSize + 3]
                },
                setW: function(t, e) {
                    return this.array[t * this.itemSize + 3] = e, this
                },
                setXY: function(t, e, i) {
                    return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this
                },
                setXYZ: function(t, e, i, n) {
                    return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this
                },
                setXYZW: function(t, e, i, n, r) {
                    return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this
                },
                onUpload: function(t) {
                    return this.onUploadCallback = t, this
                },
                clone: function() {
                    return new this.constructor(this.array, this.itemSize).copy(this)
                },
                toJSON: function() {
                    return {
                        itemSize: this.itemSize,
                        type: this.array.constructor.name,
                        array: Array.prototype.slice.call(this.array),
                        normalized: this.normalized
                    }
                }
            }), xn.prototype = Object.create(yn.prototype), xn.prototype.constructor = xn, _n.prototype = Object.create(yn.prototype), _n.prototype.constructor = _n, bn.prototype = Object.create(yn.prototype), bn.prototype.constructor = bn, Mn.prototype = Object.create(yn.prototype), Mn.prototype.constructor = Mn, wn.prototype = Object.create(yn.prototype), wn.prototype.constructor = wn, Sn.prototype = Object.create(yn.prototype), Sn.prototype.constructor = Sn, Tn.prototype = Object.create(yn.prototype), Tn.prototype.constructor = Tn, An.prototype = Object.create(yn.prototype), An.prototype.constructor = An, Ln.prototype = Object.create(yn.prototype), Ln.prototype.constructor = Ln, Object.assign(Pn.prototype, {
                computeGroups: function(t) {
                    for (var e, i = [], n = void 0, r = t.faces, a = 0; a < r.length; a++) {
                        var o = r[a];
                        o.materialIndex !== n && (n = o.materialIndex, void 0 !== e && (e.count = 3 * a - e.start, i.push(e)), e = {
                            start: 3 * a,
                            materialIndex: n
                        })
                    }
                    void 0 !== e && (e.count = 3 * a - e.start, i.push(e)), this.groups = i
                },
                fromGeometry: function(t) {
                    var e, i = t.faces,
                        n = t.vertices,
                        r = t.faceVertexUvs,
                        a = r[0] && r[0].length > 0,
                        o = r[1] && r[1].length > 0,
                        s = t.morphTargets,
                        c = s.length;
                    if (c > 0) {
                        e = [];
                        for (var h = 0; h < c; h++) e[h] = {
                            name: s[h].name,
                            data: []
                        };
                        this.morphTargets.position = e
                    }
                    var l, u = t.morphNormals,
                        p = u.length;
                    if (p > 0) {
                        l = [];
                        for (h = 0; h < p; h++) l[h] = {
                            name: u[h].name,
                            data: []
                        };
                        this.morphTargets.normal = l
                    }
                    var d = t.skinIndices,
                        f = t.skinWeights,
                        m = d.length === n.length,
                        v = f.length === n.length;
                    n.length > 0 && i.length;
                    for (h = 0; h < i.length; h++) {
                        var g = i[h];
                        this.vertices.push(n[g.a], n[g.b], n[g.c]);
                        var y = g.vertexNormals;
                        if (3 === y.length) this.normals.push(y[0], y[1], y[2]);
                        else {
                            var x = g.normal;
                            this.normals.push(x, x, x)
                        }
                        var _, b = g.vertexColors;
                        if (3 === b.length) this.colors.push(b[0], b[1], b[2]);
                        else {
                            var M = g.color;
                            this.colors.push(M, M, M)
                        }
                        if (!0 === a) void 0 !== (_ = r[0][h]) ? this.uvs.push(_[0], _[1], _[2]) : this.uvs.push(new Ne, new Ne, new Ne);
                        if (!0 === o) void 0 !== (_ = r[1][h]) ? this.uvs2.push(_[0], _[1], _[2]) : this.uvs2.push(new Ne, new Ne, new Ne);
                        for (var w = 0; w < c; w++) {
                            var S = s[w].vertices;
                            e[w].data.push(S[g.a], S[g.b], S[g.c])
                        }
                        for (w = 0; w < p; w++) {
                            var T = u[w].vertexNormals[h];
                            l[w].data.push(T.a, T.b, T.c)
                        }
                        m && this.skinIndices.push(d[g.a], d[g.b], d[g.c]), v && this.skinWeights.push(f[g.a], f[g.b], f[g.c])
                    }
                    return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
                }
            });
            var En = 1,
                On = new $e,
                Nn = new gi,
                In = new Re,
                Dn = new Ni,
                zn = new Ni,
                Rn = new Re;

            function Fn() {
                Object.defineProperty(this, "id", {
                    value: En += 2
                }), this.uuid = Oe.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                    start: 0,
                    count: 1 / 0
                }, this.userData = {}
            }
            Fn.prototype = Object.assign(Object.create(Pe.prototype), {
                constructor: Fn,
                isBufferGeometry: !0,
                getIndex: function() {
                    return this.index
                },
                setIndex: function(t) {
                    Array.isArray(t) ? this.index = new(Cn(t) > 65535 ? Tn : wn)(t, 1) : this.index = t
                },
                getAttribute: function(t) {
                    return this.attributes[t]
                },
                setAttribute: function(t, e) {
                    return this.attributes[t] = e, this
                },
                deleteAttribute: function(t) {
                    return delete this.attributes[t], this
                },
                addGroup: function(t, e, i) {
                    this.groups.push({
                        start: t,
                        count: e,
                        materialIndex: void 0 !== i ? i : 0
                    })
                },
                clearGroups: function() {
                    this.groups = []
                },
                setDrawRange: function(t, e) {
                    this.drawRange.start = t, this.drawRange.count = e
                },
                applyMatrix: function(t) {
                    var e = this.attributes.position;
                    void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
                    var i = this.attributes.normal;
                    if (void 0 !== i) {
                        var n = (new Be).getNormalMatrix(t);
                        i.applyNormalMatrix(n), i.needsUpdate = !0
                    }
                    var r = this.attributes.tangent;
                    return void 0 !== r && (r.transformDirection(t), r.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
                },
                rotateX: function(t) {
                    return On.makeRotationX(t), this.applyMatrix(On), this
                },
                rotateY: function(t) {
                    return On.makeRotationY(t), this.applyMatrix(On), this
                },
                rotateZ: function(t) {
                    return On.makeRotationZ(t), this.applyMatrix(On), this
                },
                translate: function(t, e, i) {
                    return On.makeTranslation(t, e, i), this.applyMatrix(On), this
                },
                scale: function(t, e, i) {
                    return On.makeScale(t, e, i), this.applyMatrix(On), this
                },
                lookAt: function(t) {
                    return Nn.lookAt(t), Nn.updateMatrix(), this.applyMatrix(Nn.matrix), this
                },
                center: function() {
                    return this.computeBoundingBox(), this.boundingBox.getCenter(In).negate(), this.translate(In.x, In.y, In.z), this
                },
                setFromObject: function(t) {
                    var e = t.geometry;
                    if (t.isPoints || t.isLine) {
                        var i = new An(3 * e.vertices.length, 3),
                            n = new An(3 * e.colors.length, 3);
                        if (this.setAttribute("position", i.copyVector3sArray(e.vertices)), this.setAttribute("color", n.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
                            var r = new An(e.lineDistances.length, 1);
                            this.setAttribute("lineDistance", r.copyArray(e.lineDistances))
                        }
                        null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
                    } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
                    return this
                },
                setFromPoints: function(t) {
                    for (var e = [], i = 0, n = t.length; i < n; i++) {
                        var r = t[i];
                        e.push(r.x, r.y, r.z || 0)
                    }
                    return this.setAttribute("position", new An(e, 3)), this
                },
                updateFromObject: function(t) {
                    var e, i = t.geometry;
                    if (t.isMesh) {
                        var n = i.__directGeometry;
                        if (!0 === i.elementsNeedUpdate && (n = void 0, i.elementsNeedUpdate = !1), void 0 === n) return this.fromGeometry(i);
                        n.verticesNeedUpdate = i.verticesNeedUpdate, n.normalsNeedUpdate = i.normalsNeedUpdate, n.colorsNeedUpdate = i.colorsNeedUpdate, n.uvsNeedUpdate = i.uvsNeedUpdate, n.groupsNeedUpdate = i.groupsNeedUpdate, i.verticesNeedUpdate = !1, i.normalsNeedUpdate = !1, i.colorsNeedUpdate = !1, i.uvsNeedUpdate = !1, i.groupsNeedUpdate = !1, i = n
                    }
                    return !0 === i.verticesNeedUpdate && (void 0 !== (e = this.attributes.position) && (e.copyVector3sArray(i.vertices), e.needsUpdate = !0), i.verticesNeedUpdate = !1), !0 === i.normalsNeedUpdate && (void 0 !== (e = this.attributes.normal) && (e.copyVector3sArray(i.normals), e.needsUpdate = !0), i.normalsNeedUpdate = !1), !0 === i.colorsNeedUpdate && (void 0 !== (e = this.attributes.color) && (e.copyColorsArray(i.colors), e.needsUpdate = !0), i.colorsNeedUpdate = !1), i.uvsNeedUpdate && (void 0 !== (e = this.attributes.uv) && (e.copyVector2sArray(i.uvs), e.needsUpdate = !0), i.uvsNeedUpdate = !1), i.lineDistancesNeedUpdate && (void 0 !== (e = this.attributes.lineDistance) && (e.copyArray(i.lineDistances), e.needsUpdate = !0), i.lineDistancesNeedUpdate = !1), i.groupsNeedUpdate && (i.computeGroups(t.geometry), this.groups = i.groups, i.groupsNeedUpdate = !1), this
                },
                fromGeometry: function(t) {
                    return t.__directGeometry = (new Pn).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
                },
                fromDirectGeometry: function(t) {
                    var e = new Float32Array(3 * t.vertices.length);
                    if (this.setAttribute("position", new yn(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
                        var i = new Float32Array(3 * t.normals.length);
                        this.setAttribute("normal", new yn(i, 3).copyVector3sArray(t.normals))
                    }
                    if (t.colors.length > 0) {
                        var n = new Float32Array(3 * t.colors.length);
                        this.setAttribute("color", new yn(n, 3).copyColorsArray(t.colors))
                    }
                    if (t.uvs.length > 0) {
                        var r = new Float32Array(2 * t.uvs.length);
                        this.setAttribute("uv", new yn(r, 2).copyVector2sArray(t.uvs))
                    }
                    if (t.uvs2.length > 0) {
                        var a = new Float32Array(2 * t.uvs2.length);
                        this.setAttribute("uv2", new yn(a, 2).copyVector2sArray(t.uvs2))
                    }
                    for (var o in this.groups = t.groups, t.morphTargets) {
                        for (var s = [], c = t.morphTargets[o], h = 0, l = c.length; h < l; h++) {
                            var u = c[h],
                                p = new An(3 * u.data.length, 3);
                            p.name = u.name, s.push(p.copyVector3sArray(u.data))
                        }
                        this.morphAttributes[o] = s
                    }
                    if (t.skinIndices.length > 0) {
                        var d = new An(4 * t.skinIndices.length, 4);
                        this.setAttribute("skinIndex", d.copyVector4sArray(t.skinIndices))
                    }
                    if (t.skinWeights.length > 0) {
                        var f = new An(4 * t.skinWeights.length, 4);
                        this.setAttribute("skinWeight", f.copyVector4sArray(t.skinWeights))
                    }
                    return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
                },
                computeBoundingBox: function() {
                    null === this.boundingBox && (this.boundingBox = new Ni);
                    var t = this.attributes.position,
                        e = this.morphAttributes.position;
                    if (void 0 !== t) {
                        if (this.boundingBox.setFromBufferAttribute(t), e)
                            for (var i = 0, n = e.length; i < n; i++) {
                                var r = e[i];
                                Dn.setFromBufferAttribute(r), this.morphTargetsRelative ? (Rn.addVectors(this.boundingBox.min, Dn.min), this.boundingBox.expandByPoint(Rn), Rn.addVectors(this.boundingBox.max, Dn.max), this.boundingBox.expandByPoint(Rn)) : (this.boundingBox.expandByPoint(Dn.min), this.boundingBox.expandByPoint(Dn.max))
                            }
                    } else this.boundingBox.makeEmpty();
                    isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)
                },
                computeBoundingSphere: function() {
                    null === this.boundingSphere && (this.boundingSphere = new zi);
                    var t = this.attributes.position,
                        e = this.morphAttributes.position;
                    if (t) {
                        var i = this.boundingSphere.center;
                        if (Dn.setFromBufferAttribute(t), e)
                            for (var n = 0, r = e.length; n < r; n++) {
                                var a = e[n];
                                zn.setFromBufferAttribute(a), this.morphTargetsRelative ? (Rn.addVectors(Dn.min, zn.min), Dn.expandByPoint(Rn), Rn.addVectors(Dn.max, zn.max), Dn.expandByPoint(Rn)) : (Dn.expandByPoint(zn.min), Dn.expandByPoint(zn.max))
                            }
                        Dn.getCenter(i);
                        var o = 0;
                        for (n = 0, r = t.count; n < r; n++) Rn.fromBufferAttribute(t, n), o = Math.max(o, i.distanceToSquared(Rn));
                        if (e)
                            for (n = 0, r = e.length; n < r; n++) {
                                a = e[n];
                                for (var s = this.morphTargetsRelative, c = 0, h = a.count; c < h; c++) Rn.fromBufferAttribute(a, c), s && (In.fromBufferAttribute(t, c), Rn.add(In)), o = Math.max(o, i.distanceToSquared(Rn))
                            }
                        this.boundingSphere.radius = Math.sqrt(o), isNaN(this.boundingSphere.radius)
                    }
                },
                computeFaceNormals: function() {},
                computeVertexNormals: function() {
                    var t = this.index,
                        e = this.attributes;
                    if (e.position) {
                        var i = e.position.array;
                        if (void 0 === e.normal) this.setAttribute("normal", new yn(new Float32Array(i.length), 3));
                        else
                            for (var n = e.normal.array, r = 0, a = n.length; r < a; r++) n[r] = 0;
                        var o, s, c, h = e.normal.array,
                            l = new Re,
                            u = new Re,
                            p = new Re,
                            d = new Re,
                            f = new Re;
                        if (t) {
                            var m = t.array;
                            for (r = 0, a = t.count; r < a; r += 3) o = 3 * m[r + 0], s = 3 * m[r + 1], c = 3 * m[r + 2], l.fromArray(i, o), u.fromArray(i, s), p.fromArray(i, c), d.subVectors(p, u), f.subVectors(l, u), d.cross(f), h[o] += d.x, h[o + 1] += d.y, h[o + 2] += d.z, h[s] += d.x, h[s + 1] += d.y, h[s + 2] += d.z, h[c] += d.x, h[c + 1] += d.y, h[c + 2] += d.z
                        } else
                            for (r = 0, a = i.length; r < a; r += 9) l.fromArray(i, r), u.fromArray(i, r + 3), p.fromArray(i, r + 6), d.subVectors(p, u), f.subVectors(l, u), d.cross(f), h[r] = d.x, h[r + 1] = d.y, h[r + 2] = d.z, h[r + 3] = d.x, h[r + 4] = d.y, h[r + 5] = d.z, h[r + 6] = d.x, h[r + 7] = d.y, h[r + 8] = d.z;
                        this.normalizeNormals(), e.normal.needsUpdate = !0
                    }
                },
                merge: function(t, e) {
                    if (t && t.isBufferGeometry) {
                        void 0 === e && (e = 0);
                        var i = this.attributes;
                        for (var n in i)
                            if (void 0 !== t.attributes[n])
                                for (var r = i[n].array, a = t.attributes[n], o = a.array, s = a.itemSize * e, c = Math.min(o.length, r.length - s), h = 0, l = s; h < c; h++, l++) r[l] = o[h];
                        return this
                    }
                },
                normalizeNormals: function() {
                    for (var t = this.attributes.normal, e = 0, i = t.count; e < i; e++) Rn.x = t.getX(e), Rn.y = t.getY(e), Rn.z = t.getZ(e), Rn.normalize(), t.setXYZ(e, Rn.x, Rn.y, Rn.z)
                },
                toNonIndexed: function() {
                    function t(t, e) {
                        for (var i = t.array, n = t.itemSize, r = new i.constructor(e.length * n), a = 0, o = 0, s = 0, c = e.length; s < c; s++) {
                            a = e[s] * n;
                            for (var h = 0; h < n; h++) r[o++] = i[a++]
                        }
                        return new yn(r, n)
                    }
                    if (null === this.index) return this;
                    var e = new Fn,
                        i = this.index.array,
                        n = this.attributes;
                    for (var r in n) {
                        var a = t(n[r], i);
                        e.setAttribute(r, a)
                    }
                    var o = this.morphAttributes;
                    for (r in o) {
                        for (var s = [], c = o[r], h = 0, l = c.length; h < l; h++) {
                            a = t(c[h], i);
                            s.push(a)
                        }
                        e.morphAttributes[r] = s
                    }
                    e.morphTargetsRelative = this.morphTargetsRelative;
                    for (var u = this.groups, p = (h = 0, u.length); h < p; h++) {
                        var d = u[h];
                        e.addGroup(d.start, d.count, d.materialIndex)
                    }
                    return e
                },
                toJSON: function() {
                    var t = {
                        metadata: {
                            version: 4.5,
                            type: "BufferGeometry",
                            generator: "BufferGeometry.toJSON"
                        }
                    };
                    if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
                        var e = this.parameters;
                        for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
                        return t
                    }
                    t.data = {
                        attributes: {}
                    };
                    var n = this.index;
                    null !== n && (t.data.index = {
                        type: n.array.constructor.name,
                        array: Array.prototype.slice.call(n.array)
                    });
                    var r = this.attributes;
                    for (var i in r) {
                        var a = (p = r[i]).toJSON();
                        "" !== p.name && (a.name = p.name), t.data.attributes[i] = a
                    }
                    var o = {},
                        s = !1;
                    for (var i in this.morphAttributes) {
                        for (var c = this.morphAttributes[i], h = [], l = 0, u = c.length; l < u; l++) {
                            var p;
                            a = (p = c[l]).toJSON();
                            "" !== p.name && (a.name = p.name), h.push(a)
                        }
                        h.length > 0 && (o[i] = h, s = !0)
                    }
                    s && (t.data.morphAttributes = o, t.data.morphTargetsRelative = this.morphTargetsRelative);
                    var d = this.groups;
                    d.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(d)));
                    var f = this.boundingSphere;
                    return null !== f && (t.data.boundingSphere = {
                        center: f.center.toArray(),
                        radius: f.radius
                    }), t
                },
                clone: function() {
                    return (new Fn).copy(this)
                },
                copy: function(t) {
                    var e, i, n;
                    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
                    var r = t.index;
                    null !== r && this.setIndex(r.clone());
                    var a = t.attributes;
                    for (e in a) {
                        var o = a[e];
                        this.setAttribute(e, o.clone())
                    }
                    var s = t.morphAttributes;
                    for (e in s) {
                        var c = [],
                            h = s[e];
                        for (i = 0, n = h.length; i < n; i++) c.push(h[i].clone());
                        this.morphAttributes[e] = c
                    }
                    this.morphTargetsRelative = t.morphTargetsRelative;
                    var l = t.groups;
                    for (i = 0, n = l.length; i < n; i++) {
                        var u = l[i];
                        this.addGroup(u.start, u.count, u.materialIndex)
                    }
                    var p = t.boundingBox;
                    null !== p && (this.boundingBox = p.clone());
                    var d = t.boundingSphere;
                    return null !== d && (this.boundingSphere = d.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
                },
                dispose: function() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            });
            var Un = new $e,
                Bn = new ji,
                Vn = new zi,
                Gn = new Re,
                kn = new Re,
                jn = new Re,
                Wn = new Re,
                Hn = new Re,
                qn = new Re,
                Xn = new Re,
                Yn = new Re,
                Jn = new Re,
                Zn = new Ne,
                Qn = new Ne,
                Kn = new Ne,
                $n = new Re,
                tr = new Re;

            function er(t, e) {
                gi.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new Fn, this.material = void 0 !== e ? e : new vn({
                    color: 16777215 * Math.random()
                }), this.updateMorphTargets()
            }

            function ir(t, e, i, n, r, a, o, s) {
                if (null === (e.side === l ? n.intersectTriangle(o, a, r, !0, s) : n.intersectTriangle(r, a, o, e.side !== u, s))) return null;
                tr.copy(s), tr.applyMatrix4(t.matrixWorld);
                var c = i.ray.origin.distanceTo(tr);
                return c < i.near || c > i.far ? null : {
                    distance: c,
                    point: tr.clone(),
                    object: t
                }
            }

            function nr(t, e, i, n, r, a, o, s, c, h, l, u) {
                Gn.fromBufferAttribute(r, h), kn.fromBufferAttribute(r, l), jn.fromBufferAttribute(r, u);
                var p = t.morphTargetInfluences;
                if (e.morphTargets && a && p) {
                    Xn.set(0, 0, 0), Yn.set(0, 0, 0), Jn.set(0, 0, 0);
                    for (var d = 0, f = a.length; d < f; d++) {
                        var m = p[d],
                            v = a[d];
                        0 !== m && (Wn.fromBufferAttribute(v, h), Hn.fromBufferAttribute(v, l), qn.fromBufferAttribute(v, u), o ? (Xn.addScaledVector(Wn, m), Yn.addScaledVector(Hn, m), Jn.addScaledVector(qn, m)) : (Xn.addScaledVector(Wn.sub(Gn), m), Yn.addScaledVector(Hn.sub(kn), m), Jn.addScaledVector(qn.sub(jn), m)))
                    }
                    Gn.add(Xn), kn.add(Yn), jn.add(Jn)
                }
                var g = ir(t, e, i, n, Gn, kn, jn, $n);
                if (g) {
                    s && (Zn.fromBufferAttribute(s, h), Qn.fromBufferAttribute(s, l), Kn.fromBufferAttribute(s, u), g.uv = an.getUV($n, Gn, kn, jn, Zn, Qn, Kn, new Ne)), c && (Zn.fromBufferAttribute(c, h), Qn.fromBufferAttribute(c, l), Kn.fromBufferAttribute(c, u), g.uv2 = an.getUV($n, Gn, kn, jn, Zn, Qn, Kn, new Ne));
                    var y = new dn(h, l, u);
                    an.getNormal(Gn, kn, jn, y.normal), g.face = y
                }
                return g
            }
            er.prototype = Object.assign(Object.create(gi.prototype), {
                constructor: er,
                isMesh: !0,
                copy: function(t) {
                    return gi.prototype.copy.call(this, t), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this
                },
                updateMorphTargets: function() {
                    var t, e, i, n = this.geometry;
                    if (n.isBufferGeometry) {
                        var r = n.morphAttributes,
                            a = Object.keys(r);
                        if (a.length > 0) {
                            var o = r[a[0]];
                            if (void 0 !== o)
                                for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = o.length; t < e; t++) i = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
                        }
                    } else {
                        var s = n.morphTargets;
                        void 0 !== s && s.length
                    }
                },
                raycast: function(t, e) {
                    var i, n = this.geometry,
                        r = this.material,
                        a = this.matrixWorld;
                    if (void 0 !== r && (null === n.boundingSphere && n.computeBoundingSphere(), Vn.copy(n.boundingSphere), Vn.applyMatrix4(a), !1 !== t.ray.intersectsSphere(Vn) && (Un.getInverse(a), Bn.copy(t.ray).applyMatrix4(Un), null === n.boundingBox || !1 !== Bn.intersectsBox(n.boundingBox))))
                        if (n.isBufferGeometry) {
                            var o, s, c, h, l, u, p, d, f, m = n.index,
                                v = n.attributes.position,
                                g = n.morphAttributes.position,
                                y = n.morphTargetsRelative,
                                x = n.attributes.uv,
                                _ = n.attributes.uv2,
                                b = n.groups,
                                M = n.drawRange;
                            if (null !== m)
                                if (Array.isArray(r))
                                    for (h = 0, u = b.length; h < u; h++)
                                        for (f = r[(d = b[h]).materialIndex], l = Math.max(d.start, M.start), p = Math.min(d.start + d.count, M.start + M.count); l < p; l += 3) o = m.getX(l), s = m.getX(l + 1), c = m.getX(l + 2), (i = nr(this, f, t, Bn, v, g, y, x, _, o, s, c)) && (i.faceIndex = Math.floor(l / 3), i.face.materialIndex = d.materialIndex, e.push(i));
                                else
                                    for (h = Math.max(0, M.start), u = Math.min(m.count, M.start + M.count); h < u; h += 3) o = m.getX(h), s = m.getX(h + 1), c = m.getX(h + 2), (i = nr(this, r, t, Bn, v, g, y, x, _, o, s, c)) && (i.faceIndex = Math.floor(h / 3), e.push(i));
                            else if (void 0 !== v)
                                if (Array.isArray(r))
                                    for (h = 0, u = b.length; h < u; h++)
                                        for (f = r[(d = b[h]).materialIndex], l = Math.max(d.start, M.start), p = Math.min(d.start + d.count, M.start + M.count); l < p; l += 3)(i = nr(this, f, t, Bn, v, g, y, x, _, o = l, s = l + 1, c = l + 2)) && (i.faceIndex = Math.floor(l / 3), i.face.materialIndex = d.materialIndex, e.push(i));
                                else
                                    for (h = Math.max(0, M.start), u = Math.min(v.count, M.start + M.count); h < u; h += 3)(i = nr(this, r, t, Bn, v, g, y, x, _, o = h, s = h + 1, c = h + 2)) && (i.faceIndex = Math.floor(h / 3), e.push(i))
                        } else if (n.isGeometry) {
                        var w, S, T, A, L = Array.isArray(r),
                            P = n.vertices,
                            C = n.faces,
                            E = n.faceVertexUvs[0];
                        E.length > 0 && (A = E);
                        for (var O = 0, N = C.length; O < N; O++) {
                            var I = C[O],
                                D = L ? r[I.materialIndex] : r;
                            if (void 0 !== D && (w = P[I.a], S = P[I.b], T = P[I.c], i = ir(this, D, t, Bn, w, S, T, $n))) {
                                if (A && A[O]) {
                                    var z = A[O];
                                    Zn.copy(z[0]), Qn.copy(z[1]), Kn.copy(z[2]), i.uv = an.getUV($n, w, S, T, Zn, Qn, Kn, new Ne)
                                }
                                i.face = I, i.faceIndex = O, e.push(i)
                            }
                        }
                    }
                },
                clone: function() {
                    return new this.constructor(this.geometry, this.material).copy(this)
                }
            });
            var rr = 0,
                ar = new $e,
                or = new gi,
                sr = new Re;

            function cr() {
                Object.defineProperty(this, "id", {
                    value: rr += 2
                }), this.uuid = Oe.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                    []
                ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
            }
            cr.prototype = Object.assign(Object.create(Pe.prototype), {
                constructor: cr,
                isGeometry: !0,
                applyMatrix: function(t) {
                    for (var e = (new Be).getNormalMatrix(t), i = 0, n = this.vertices.length; i < n; i++) {
                        this.vertices[i].applyMatrix4(t)
                    }
                    for (i = 0, n = this.faces.length; i < n; i++) {
                        var r = this.faces[i];
                        r.normal.applyMatrix3(e).normalize();
                        for (var a = 0, o = r.vertexNormals.length; a < o; a++) r.vertexNormals[a].applyMatrix3(e).normalize()
                    }
                    return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
                },
                rotateX: function(t) {
                    return ar.makeRotationX(t), this.applyMatrix(ar), this
                },
                rotateY: function(t) {
                    return ar.makeRotationY(t), this.applyMatrix(ar), this
                },
                rotateZ: function(t) {
                    return ar.makeRotationZ(t), this.applyMatrix(ar), this
                },
                translate: function(t, e, i) {
                    return ar.makeTranslation(t, e, i), this.applyMatrix(ar), this
                },
                scale: function(t, e, i) {
                    return ar.makeScale(t, e, i), this.applyMatrix(ar), this
                },
                lookAt: function(t) {
                    return or.lookAt(t), or.updateMatrix(), this.applyMatrix(or.matrix), this
                },
                fromBufferGeometry: function(t) {
                    var e = this,
                        i = null !== t.index ? t.index.array : void 0,
                        n = t.attributes;
                    if (void 0 === n.position) return this;
                    var r = n.position.array,
                        a = void 0 !== n.normal ? n.normal.array : void 0,
                        o = void 0 !== n.color ? n.color.array : void 0,
                        s = void 0 !== n.uv ? n.uv.array : void 0,
                        c = void 0 !== n.uv2 ? n.uv2.array : void 0;
                    void 0 !== c && (this.faceVertexUvs[1] = []);
                    for (var h = 0; h < r.length; h += 3) e.vertices.push((new Re).fromArray(r, h)), void 0 !== o && e.colors.push((new hn).fromArray(o, h));

                    function l(t, i, n, r) {
                        var h = void 0 === o ? [] : [e.colors[t].clone(), e.colors[i].clone(), e.colors[n].clone()],
                            l = new dn(t, i, n, void 0 === a ? [] : [(new Re).fromArray(a, 3 * t), (new Re).fromArray(a, 3 * i), (new Re).fromArray(a, 3 * n)], h, r);
                        e.faces.push(l), void 0 !== s && e.faceVertexUvs[0].push([(new Ne).fromArray(s, 2 * t), (new Ne).fromArray(s, 2 * i), (new Ne).fromArray(s, 2 * n)]), void 0 !== c && e.faceVertexUvs[1].push([(new Ne).fromArray(c, 2 * t), (new Ne).fromArray(c, 2 * i), (new Ne).fromArray(c, 2 * n)])
                    }
                    var u = t.groups;
                    if (u.length > 0)
                        for (h = 0; h < u.length; h++)
                            for (var p = u[h], d = p.start, f = d, m = d + p.count; f < m; f += 3) void 0 !== i ? l(i[f], i[f + 1], i[f + 2], p.materialIndex) : l(f, f + 1, f + 2, p.materialIndex);
                    else if (void 0 !== i)
                        for (h = 0; h < i.length; h += 3) l(i[h], i[h + 1], i[h + 2]);
                    else
                        for (h = 0; h < r.length / 3; h += 3) l(h, h + 1, h + 2);
                    return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
                },
                center: function() {
                    return this.computeBoundingBox(), this.boundingBox.getCenter(sr).negate(), this.translate(sr.x, sr.y, sr.z), this
                },
                normalize: function() {
                    this.computeBoundingSphere();
                    var t = this.boundingSphere.center,
                        e = this.boundingSphere.radius,
                        i = 0 === e ? 1 : 1 / e,
                        n = new $e;
                    return n.set(i, 0, 0, -i * t.x, 0, i, 0, -i * t.y, 0, 0, i, -i * t.z, 0, 0, 0, 1), this.applyMatrix(n), this
                },
                computeFaceNormals: function() {
                    for (var t = new Re, e = new Re, i = 0, n = this.faces.length; i < n; i++) {
                        var r = this.faces[i],
                            a = this.vertices[r.a],
                            o = this.vertices[r.b],
                            s = this.vertices[r.c];
                        t.subVectors(s, o), e.subVectors(a, o), t.cross(e), t.normalize(), r.normal.copy(t)
                    }
                },
                computeVertexNormals: function(t) {
                    var e, i, n, r, a, o;
                    for (void 0 === t && (t = !0), o = new Array(this.vertices.length), e = 0, i = this.vertices.length; e < i; e++) o[e] = new Re;
                    if (t) {
                        var s, c, h, l = new Re,
                            u = new Re;
                        for (n = 0, r = this.faces.length; n < r; n++) a = this.faces[n], s = this.vertices[a.a], c = this.vertices[a.b], h = this.vertices[a.c], l.subVectors(h, c), u.subVectors(s, c), l.cross(u), o[a.a].add(l), o[a.b].add(l), o[a.c].add(l)
                    } else
                        for (this.computeFaceNormals(), n = 0, r = this.faces.length; n < r; n++) o[(a = this.faces[n]).a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal);
                    for (e = 0, i = this.vertices.length; e < i; e++) o[e].normalize();
                    for (n = 0, r = this.faces.length; n < r; n++) {
                        var p = (a = this.faces[n]).vertexNormals;
                        3 === p.length ? (p[0].copy(o[a.a]), p[1].copy(o[a.b]), p[2].copy(o[a.c])) : (p[0] = o[a.a].clone(), p[1] = o[a.b].clone(), p[2] = o[a.c].clone())
                    }
                    this.faces.length > 0 && (this.normalsNeedUpdate = !0)
                },
                computeFlatVertexNormals: function() {
                    var t, e, i;
                    for (this.computeFaceNormals(), t = 0, e = this.faces.length; t < e; t++) {
                        var n = (i = this.faces[t]).vertexNormals;
                        3 === n.length ? (n[0].copy(i.normal), n[1].copy(i.normal), n[2].copy(i.normal)) : (n[0] = i.normal.clone(), n[1] = i.normal.clone(), n[2] = i.normal.clone())
                    }
                    this.faces.length > 0 && (this.normalsNeedUpdate = !0)
                },
                computeMorphNormals: function() {
                    var t, e, i, n, r;
                    for (i = 0, n = this.faces.length; i < n; i++)
                        for ((r = this.faces[i]).__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), t = 0, e = r.vertexNormals.length; t < e; t++) r.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy(r.vertexNormals[t]) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone();
                    var a = new cr;
                    for (a.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
                        if (!this.morphNormals[t]) {
                            this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
                            var o = this.morphNormals[t].faceNormals,
                                s = this.morphNormals[t].vertexNormals;
                            for (i = 0, n = this.faces.length; i < n; i++) c = new Re, h = {
                                a: new Re,
                                b: new Re,
                                c: new Re
                            }, o.push(c), s.push(h)
                        }
                        var c, h, l = this.morphNormals[t];
                        for (a.vertices = this.morphTargets[t].vertices, a.computeFaceNormals(), a.computeVertexNormals(), i = 0, n = this.faces.length; i < n; i++) r = this.faces[i], c = l.faceNormals[i], h = l.vertexNormals[i], c.copy(r.normal), h.a.copy(r.vertexNormals[0]), h.b.copy(r.vertexNormals[1]), h.c.copy(r.vertexNormals[2])
                    }
                    for (i = 0, n = this.faces.length; i < n; i++)(r = this.faces[i]).normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
                },
                computeBoundingBox: function() {
                    null === this.boundingBox && (this.boundingBox = new Ni), this.boundingBox.setFromPoints(this.vertices)
                },
                computeBoundingSphere: function() {
                    null === this.boundingSphere && (this.boundingSphere = new zi), this.boundingSphere.setFromPoints(this.vertices)
                },
                merge: function(t, e, i) {
                    if (t && t.isGeometry) {
                        var n, r = this.vertices.length,
                            a = this.vertices,
                            o = t.vertices,
                            s = this.faces,
                            c = t.faces,
                            h = this.colors,
                            l = t.colors;
                        void 0 === i && (i = 0), void 0 !== e && (n = (new Be).getNormalMatrix(e));
                        for (var u = 0, p = o.length; u < p; u++) {
                            var d = o[u].clone();
                            void 0 !== e && d.applyMatrix4(e), a.push(d)
                        }
                        for (u = 0, p = l.length; u < p; u++) h.push(l[u].clone());
                        for (u = 0, p = c.length; u < p; u++) {
                            var f, m, v, g = c[u],
                                y = g.vertexNormals,
                                x = g.vertexColors;
                            (f = new dn(g.a + r, g.b + r, g.c + r)).normal.copy(g.normal), void 0 !== n && f.normal.applyMatrix3(n).normalize();
                            for (var _ = 0, b = y.length; _ < b; _++) m = y[_].clone(), void 0 !== n && m.applyMatrix3(n).normalize(), f.vertexNormals.push(m);
                            f.color.copy(g.color);
                            for (_ = 0, b = x.length; _ < b; _++) v = x[_], f.vertexColors.push(v.clone());
                            f.materialIndex = g.materialIndex + i, s.push(f)
                        }
                        for (u = 0, p = t.faceVertexUvs.length; u < p; u++) {
                            var M = t.faceVertexUvs[u];
                            void 0 === this.faceVertexUvs[u] && (this.faceVertexUvs[u] = []);
                            for (_ = 0, b = M.length; _ < b; _++) {
                                for (var w = M[_], S = [], T = 0, A = w.length; T < A; T++) S.push(w[T].clone());
                                this.faceVertexUvs[u].push(S)
                            }
                        }
                    }
                },
                mergeMesh: function(t) {
                    t && t.isMesh && (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix))
                },
                mergeVertices: function() {
                    var t, e, i, n, r, a, o, s, c = {},
                        h = [],
                        l = [],
                        u = Math.pow(10, 4);
                    for (i = 0, n = this.vertices.length; i < n; i++) t = this.vertices[i], void 0 === c[e = Math.round(t.x * u) + "_" + Math.round(t.y * u) + "_" + Math.round(t.z * u)] ? (c[e] = i, h.push(this.vertices[i]), l[i] = h.length - 1) : l[i] = l[c[e]];
                    var p = [];
                    for (i = 0, n = this.faces.length; i < n; i++) {
                        (r = this.faces[i]).a = l[r.a], r.b = l[r.b], r.c = l[r.c], a = [r.a, r.b, r.c];
                        for (var d = 0; d < 3; d++)
                            if (a[d] === a[(d + 1) % 3]) {
                                p.push(i);
                                break
                            }
                    }
                    for (i = p.length - 1; i >= 0; i--) {
                        var f = p[i];
                        for (this.faces.splice(f, 1), o = 0, s = this.faceVertexUvs.length; o < s; o++) this.faceVertexUvs[o].splice(f, 1)
                    }
                    var m = this.vertices.length - h.length;
                    return this.vertices = h, m
                },
                setFromPoints: function(t) {
                    this.vertices = [];
                    for (var e = 0, i = t.length; e < i; e++) {
                        var n = t[e];
                        this.vertices.push(new Re(n.x, n.y, n.z || 0))
                    }
                    return this
                },
                sortFacesByMaterialIndex: function() {
                    for (var t = this.faces, e = t.length, i = 0; i < e; i++) t[i]._id = i;
                    t.sort((function(t, e) {
                        return t.materialIndex - e.materialIndex
                    }));
                    var n, r, a = this.faceVertexUvs[0],
                        o = this.faceVertexUvs[1];
                    a && a.length === e && (n = []), o && o.length === e && (r = []);
                    for (i = 0; i < e; i++) {
                        var s = t[i]._id;
                        n && n.push(a[s]), r && r.push(o[s])
                    }
                    n && (this.faceVertexUvs[0] = n), r && (this.faceVertexUvs[1] = r)
                },
                toJSON: function() {
                    var t = {
                        metadata: {
                            version: 4.5,
                            type: "Geometry",
                            generator: "Geometry.toJSON"
                        }
                    };
                    if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
                        var e = this.parameters;
                        for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
                        return t
                    }
                    for (var n = [], r = 0; r < this.vertices.length; r++) {
                        var a = this.vertices[r];
                        n.push(a.x, a.y, a.z)
                    }
                    var o = [],
                        s = [],
                        c = {},
                        h = [],
                        l = {},
                        u = [],
                        p = {};
                    for (r = 0; r < this.faces.length; r++) {
                        var d = this.faces[r],
                            f = void 0 !== this.faceVertexUvs[0][r],
                            m = d.normal.length() > 0,
                            v = d.vertexNormals.length > 0,
                            g = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
                            y = d.vertexColors.length > 0,
                            x = 0;
                        if (x = w(x, 0, 0), x = w(x, 1, !0), x = w(x, 2, !1), x = w(x, 3, f), x = w(x, 4, m), x = w(x, 5, v), x = w(x, 6, g), x = w(x, 7, y), o.push(x), o.push(d.a, d.b, d.c), o.push(d.materialIndex), f) {
                            var _ = this.faceVertexUvs[0][r];
                            o.push(A(_[0]), A(_[1]), A(_[2]))
                        }
                        if (m && o.push(S(d.normal)), v) {
                            var b = d.vertexNormals;
                            o.push(S(b[0]), S(b[1]), S(b[2]))
                        }
                        if (g && o.push(T(d.color)), y) {
                            var M = d.vertexColors;
                            o.push(T(M[0]), T(M[1]), T(M[2]))
                        }
                    }

                    function w(t, e, i) {
                        return i ? t | 1 << e : t & ~(1 << e)
                    }

                    function S(t) {
                        var e = t.x.toString() + t.y.toString() + t.z.toString();
                        return void 0 !== c[e] ? c[e] : (c[e] = s.length / 3, s.push(t.x, t.y, t.z), c[e])
                    }

                    function T(t) {
                        var e = t.r.toString() + t.g.toString() + t.b.toString();
                        return void 0 !== l[e] ? l[e] : (l[e] = h.length, h.push(t.getHex()), l[e])
                    }

                    function A(t) {
                        var e = t.x.toString() + t.y.toString();
                        return void 0 !== p[e] ? p[e] : (p[e] = u.length / 2, u.push(t.x, t.y), p[e])
                    }
                    return t.data = {}, t.data.vertices = n, t.data.normals = s, h.length > 0 && (t.data.colors = h), u.length > 0 && (t.data.uvs = [u]), t.data.faces = o, t
                },
                clone: function() {
                    return (new cr).copy(this)
                },
                copy: function(t) {
                    var e, i, n, r, a, o;
                    this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                        []
                    ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
                    var s = t.vertices;
                    for (e = 0, i = s.length; e < i; e++) this.vertices.push(s[e].clone());
                    var c = t.colors;
                    for (e = 0, i = c.length; e < i; e++) this.colors.push(c[e].clone());
                    var h = t.faces;
                    for (e = 0, i = h.length; e < i; e++) this.faces.push(h[e].clone());
                    for (e = 0, i = t.faceVertexUvs.length; e < i; e++) {
                        var l = t.faceVertexUvs[e];
                        for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []), n = 0, r = l.length; n < r; n++) {
                            var u = l[n],
                                p = [];
                            for (a = 0, o = u.length; a < o; a++) {
                                var d = u[a];
                                p.push(d.clone())
                            }
                            this.faceVertexUvs[e].push(p)
                        }
                    }
                    var f = t.morphTargets;
                    for (e = 0, i = f.length; e < i; e++) {
                        var m = {};
                        if (m.name = f[e].name, void 0 !== f[e].vertices)
                            for (m.vertices = [], n = 0, r = f[e].vertices.length; n < r; n++) m.vertices.push(f[e].vertices[n].clone());
                        if (void 0 !== f[e].normals)
                            for (m.normals = [], n = 0, r = f[e].normals.length; n < r; n++) m.normals.push(f[e].normals[n].clone());
                        this.morphTargets.push(m)
                    }
                    var v = t.morphNormals;
                    for (e = 0, i = v.length; e < i; e++) {
                        var g = {};
                        if (void 0 !== v[e].vertexNormals)
                            for (g.vertexNormals = [], n = 0, r = v[e].vertexNormals.length; n < r; n++) {
                                var y = v[e].vertexNormals[n],
                                    x = {};
                                x.a = y.a.clone(), x.b = y.b.clone(), x.c = y.c.clone(), g.vertexNormals.push(x)
                            }
                        if (void 0 !== v[e].faceNormals)
                            for (g.faceNormals = [], n = 0, r = v[e].faceNormals.length; n < r; n++) g.faceNormals.push(v[e].faceNormals[n].clone());
                        this.morphNormals.push(g)
                    }
                    var _ = t.skinWeights;
                    for (e = 0, i = _.length; e < i; e++) this.skinWeights.push(_[e].clone());
                    var b = t.skinIndices;
                    for (e = 0, i = b.length; e < i; e++) this.skinIndices.push(b[e].clone());
                    var M = t.lineDistances;
                    for (e = 0, i = M.length; e < i; e++) this.lineDistances.push(M[e]);
                    var w = t.boundingBox;
                    null !== w && (this.boundingBox = w.clone());
                    var S = t.boundingSphere;
                    return null !== S && (this.boundingSphere = S.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
                },
                dispose: function() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            });
            class hr extends Fn {
                constructor(t, e, i, n, r, a) {
                    super(), this.type = "BoxBufferGeometry", this.parameters = {
                        width: t,
                        height: e,
                        depth: i,
                        widthSegments: n,
                        heightSegments: r,
                        depthSegments: a
                    };
                    var o = this;
                    t = t || 1, e = e || 1, i = i || 1, n = Math.floor(n) || 1, r = Math.floor(r) || 1, a = Math.floor(a) || 1;
                    var s = [],
                        c = [],
                        h = [],
                        l = [],
                        u = 0,
                        p = 0;

                    function d(t, e, i, n, r, a, d, f, m, v, g) {
                        var y, x, _ = a / m,
                            b = d / v,
                            M = a / 2,
                            w = d / 2,
                            S = f / 2,
                            T = m + 1,
                            A = v + 1,
                            L = 0,
                            P = 0,
                            C = new Re;
                        for (x = 0; x < A; x++) {
                            var E = x * b - w;
                            for (y = 0; y < T; y++) {
                                var O = y * _ - M;
                                C[t] = O * n, C[e] = E * r, C[i] = S, c.push(C.x, C.y, C.z), C[t] = 0, C[e] = 0, C[i] = f > 0 ? 1 : -1, h.push(C.x, C.y, C.z), l.push(y / m), l.push(1 - x / v), L += 1
                            }
                        }
                        for (x = 0; x < v; x++)
                            for (y = 0; y < m; y++) {
                                var N = u + y + T * x,
                                    I = u + y + T * (x + 1),
                                    D = u + (y + 1) + T * (x + 1),
                                    z = u + (y + 1) + T * x;
                                s.push(N, I, z), s.push(I, D, z), P += 6
                            }
                        o.addGroup(p, P, g), p += P, u += L
                    }
                    d("z", "y", "x", -1, -1, i, e, t, a, r, 0), d("z", "y", "x", 1, -1, i, e, -t, a, r, 1), d("x", "z", "y", 1, 1, t, i, e, n, a, 2), d("x", "z", "y", 1, -1, t, i, -e, n, a, 3), d("x", "y", "z", 1, -1, t, e, i, n, r, 4), d("x", "y", "z", -1, -1, t, e, -i, n, r, 5), this.setIndex(s), this.setAttribute("position", new An(c, 3)), this.setAttribute("normal", new An(h, 3)), this.setAttribute("uv", new An(l, 2))
                }
            }

            function lr(t) {
                var e = {};
                for (var i in t)
                    for (var n in e[i] = {}, t[i]) {
                        var r = t[i][n];
                        r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? e[i][n] = r.clone() : Array.isArray(r) ? e[i][n] = r.slice() : e[i][n] = r
                    }
                return e
            }

            function ur(t) {
                for (var e = {}, i = 0; i < t.length; i++) {
                    var n = lr(t[i]);
                    for (var r in n) e[r] = n[r]
                }
                return e
            }
            var pr = {
                    clone: lr,
                    merge: ur
                },
                dr = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
                fr = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";

            function mr(t) {
                mn.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = dr, this.fragmentShader = fr, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
                    derivatives: !1,
                    fragDepth: !1,
                    drawBuffers: !1,
                    shaderTextureLOD: !1
                }, this.defaultAttributeValues = {
                    color: [1, 1, 1],
                    uv: [0, 0],
                    uv2: [0, 0]
                }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== t && (t.attributes, this.setValues(t))
            }

            function vr() {
                gi.call(this), this.type = "Camera", this.matrixWorldInverse = new $e, this.projectionMatrix = new $e, this.projectionMatrixInverse = new $e
            }

            function gr(t, e, i, n) {
                vr.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== n ? n : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
            }
            mr.prototype = Object.create(mn.prototype), mr.prototype.constructor = mr, mr.prototype.isShaderMaterial = !0, mr.prototype.copy = function(t) {
                return mn.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = lr(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
            }, mr.prototype.toJSON = function(t) {
                var e = mn.prototype.toJSON.call(this, t);
                for (var i in e.uniforms = {}, this.uniforms) {
                    var n = this.uniforms[i].value;
                    n && n.isTexture ? e.uniforms[i] = {
                        type: "t",
                        value: n.toJSON(t).uuid
                    } : n && n.isColor ? e.uniforms[i] = {
                        type: "c",
                        value: n.getHex()
                    } : n && n.isVector2 ? e.uniforms[i] = {
                        type: "v2",
                        value: n.toArray()
                    } : n && n.isVector3 ? e.uniforms[i] = {
                        type: "v3",
                        value: n.toArray()
                    } : n && n.isVector4 ? e.uniforms[i] = {
                        type: "v4",
                        value: n.toArray()
                    } : n && n.isMatrix3 ? e.uniforms[i] = {
                        type: "m3",
                        value: n.toArray()
                    } : n && n.isMatrix4 ? e.uniforms[i] = {
                        type: "m4",
                        value: n.toArray()
                    } : e.uniforms[i] = {
                        value: n
                    }
                }
                Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
                var r = {};
                for (var a in this.extensions) !0 === this.extensions[a] && (r[a] = !0);
                return Object.keys(r).length > 0 && (e.extensions = r), e
            }, vr.prototype = Object.assign(Object.create(gi.prototype), {
                constructor: vr,
                isCamera: !0,
                copy: function(t, e) {
                    return gi.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
                },
                getWorldDirection: function(t) {
                    void 0 === t && (t = new Re), this.updateMatrixWorld(!0);
                    var e = this.matrixWorld.elements;
                    return t.set(-e[8], -e[9], -e[10]).normalize()
                },
                updateMatrixWorld: function(t) {
                    gi.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld)
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                }
            }), gr.prototype = Object.assign(Object.create(vr.prototype), {
                constructor: gr,
                isPerspectiveCamera: !0,
                copy: function(t, e) {
                    return vr.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
                },
                setFocalLength: function(t) {
                    var e = .5 * this.getFilmHeight() / t;
                    this.fov = 2 * Oe.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
                },
                getFocalLength: function() {
                    var t = Math.tan(.5 * Oe.DEG2RAD * this.fov);
                    return .5 * this.getFilmHeight() / t
                },
                getEffectiveFOV: function() {
                    return 2 * Oe.RAD2DEG * Math.atan(Math.tan(.5 * Oe.DEG2RAD * this.fov) / this.zoom)
                },
                getFilmWidth: function() {
                    return this.filmGauge * Math.min(this.aspect, 1)
                },
                getFilmHeight: function() {
                    return this.filmGauge / Math.max(this.aspect, 1)
                },
                setViewOffset: function(t, e, i, n, r, a) {
                    this.aspect = t / e, null === this.view && (this.view = {
                        enabled: !0,
                        fullWidth: 1,
                        fullHeight: 1,
                        offsetX: 0,
                        offsetY: 0,
                        width: 1,
                        height: 1
                    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
                },
                clearViewOffset: function() {
                    null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
                },
                updateProjectionMatrix: function() {
                    var t = this.near,
                        e = t * Math.tan(.5 * Oe.DEG2RAD * this.fov) / this.zoom,
                        i = 2 * e,
                        n = this.aspect * i,
                        r = -.5 * n,
                        a = this.view;
                    if (null !== this.view && this.view.enabled) {
                        var o = a.fullWidth,
                            s = a.fullHeight;
                        r += a.offsetX * n / o, e -= a.offsetY * i / s, n *= a.width / o, i *= a.height / s
                    }
                    var c = this.filmOffset;
                    0 !== c && (r += t * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, e, e - i, t, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
                },
                toJSON: function(t) {
                    var e = gi.prototype.toJSON.call(this, t);
                    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
                }
            });
            var yr = 90,
                xr = 1;

            function _r(t, e, i, n) {
                gi.call(this), this.type = "CubeCamera";
                var r = new gr(yr, xr, t, e);
                r.up.set(0, -1, 0), r.lookAt(new Re(1, 0, 0)), this.add(r);
                var a = new gr(yr, xr, t, e);
                a.up.set(0, -1, 0), a.lookAt(new Re(-1, 0, 0)), this.add(a);
                var o = new gr(yr, xr, t, e);
                o.up.set(0, 0, 1), o.lookAt(new Re(0, 1, 0)), this.add(o);
                var s = new gr(yr, xr, t, e);
                s.up.set(0, 0, -1), s.lookAt(new Re(0, -1, 0)), this.add(s);
                var c = new gr(yr, xr, t, e);
                c.up.set(0, -1, 0), c.lookAt(new Re(0, 0, 1)), this.add(c);
                var h = new gr(yr, xr, t, e);
                h.up.set(0, -1, 0), h.lookAt(new Re(0, 0, -1)), this.add(h), n = n || {
                    format: Ct,
                    magFilter: dt,
                    minFilter: dt
                }, this.renderTarget = new br(i, i, n), this.renderTarget.texture.name = "CubeCamera", this.update = function(t, e) {
                    null === this.parent && this.updateMatrixWorld();
                    var i = t.getRenderTarget(),
                        n = this.renderTarget,
                        l = n.texture.generateMipmaps;
                    n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, r), t.setRenderTarget(n, 1), t.render(e, a), t.setRenderTarget(n, 2), t.render(e, o), t.setRenderTarget(n, 3), t.render(e, s), t.setRenderTarget(n, 4), t.render(e, c), n.texture.generateMipmaps = l, t.setRenderTarget(n, 5), t.render(e, h), t.setRenderTarget(i)
                }, this.clear = function(t, e, i, n) {
                    for (var r = t.getRenderTarget(), a = this.renderTarget, o = 0; o < 6; o++) t.setRenderTarget(a, o), t.clear(e, i, n);
                    t.setRenderTarget(r)
                }
            }

            function br(t, e, i) {
                We.call(this, t, e, i)
            }

            function Mr(t, e, i, n, r, a, o, s, c, h, l, u) {
                ke.call(this, null, a, o, s, c, h, n, r, l, u), this.image = {
                    data: t || null,
                    width: e || 1,
                    height: i || 1
                }, this.magFilter = void 0 !== c ? c : lt, this.minFilter = void 0 !== h ? h : lt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
            }
            _r.prototype = Object.create(gi.prototype), _r.prototype.constructor = _r, br.prototype = Object.create(We.prototype), br.prototype.constructor = br, br.prototype.isWebGLRenderTargetCube = !0, br.prototype.fromEquirectangularTexture = function(t, e) {
                this.texture.type = e.type, this.texture.format = e.format, this.texture.encoding = e.encoding;
                var i = new yi,
                    n = {
                        uniforms: {
                            tEquirect: {
                                value: null
                            }
                        },
                        vertexShader: ["varying vec3 vWorldDirection;", "vec3 transformDirection( in vec3 dir, in mat4 matrix ) {", "\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );", "}", "void main() {", "\tvWorldDirection = transformDirection( position, modelMatrix );", "\t#include <begin_vertex>", "\t#include <project_vertex>", "}"].join("\n"),
                        fragmentShader: ["uniform sampler2D tEquirect;", "varying vec3 vWorldDirection;", "#define RECIPROCAL_PI 0.31830988618", "#define RECIPROCAL_PI2 0.15915494", "void main() {", "\tvec3 direction = normalize( vWorldDirection );", "\tvec2 sampleUV;", "\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;", "\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;", "\tgl_FragColor = texture2D( tEquirect, sampleUV );", "}"].join("\n")
                    },
                    r = new mr({
                        type: "CubemapFromEquirect",
                        uniforms: lr(n.uniforms),
                        vertexShader: n.vertexShader,
                        fragmentShader: n.fragmentShader,
                        side: l,
                        blending: m
                    });
                r.uniforms.tEquirect.value = e;
                var a = new er(new hr(5, 5, 5), r);
                i.add(a);
                var o = new _r(1, 10, 1);
                return o.renderTarget = this, o.renderTarget.texture.name = "CubeCameraTexture", o.update(t, i), a.geometry.dispose(), a.material.dispose(), this
            }, Mr.prototype = Object.create(ke.prototype), Mr.prototype.constructor = Mr, Mr.prototype.isDataTexture = !0;
            var wr = new zi,
                Sr = new Re;

            function Tr(t, e, i, n, r, a) {
                this.planes = [void 0 !== t ? t : new Xi, void 0 !== e ? e : new Xi, void 0 !== i ? i : new Xi, void 0 !== n ? n : new Xi, void 0 !== r ? r : new Xi, void 0 !== a ? a : new Xi]
            }
            Object.assign(Tr.prototype, {
                set: function(t, e, i, n, r, a) {
                    var o = this.planes;
                    return o[0].copy(t), o[1].copy(e), o[2].copy(i), o[3].copy(n), o[4].copy(r), o[5].copy(a), this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    for (var e = this.planes, i = 0; i < 6; i++) e[i].copy(t.planes[i]);
                    return this
                },
                setFromMatrix: function(t) {
                    var e = this.planes,
                        i = t.elements,
                        n = i[0],
                        r = i[1],
                        a = i[2],
                        o = i[3],
                        s = i[4],
                        c = i[5],
                        h = i[6],
                        l = i[7],
                        u = i[8],
                        p = i[9],
                        d = i[10],
                        f = i[11],
                        m = i[12],
                        v = i[13],
                        g = i[14],
                        y = i[15];
                    return e[0].setComponents(o - n, l - s, f - u, y - m).normalize(), e[1].setComponents(o + n, l + s, f + u, y + m).normalize(), e[2].setComponents(o + r, l + c, f + p, y + v).normalize(), e[3].setComponents(o - r, l - c, f - p, y - v).normalize(), e[4].setComponents(o - a, l - h, f - d, y - g).normalize(), e[5].setComponents(o + a, l + h, f + d, y + g).normalize(), this
                },
                intersectsObject: function(t) {
                    var e = t.geometry;
                    return null === e.boundingSphere && e.computeBoundingSphere(), wr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(wr)
                },
                intersectsSprite: function(t) {
                    return wr.center.set(0, 0, 0), wr.radius = .7071067811865476, wr.applyMatrix4(t.matrixWorld), this.intersectsSphere(wr)
                },
                intersectsSphere: function(t) {
                    for (var e = this.planes, i = t.center, n = -t.radius, r = 0; r < 6; r++) {
                        if (e[r].distanceToPoint(i) < n) return !1
                    }
                    return !0
                },
                intersectsBox: function(t) {
                    for (var e = this.planes, i = 0; i < 6; i++) {
                        var n = e[i];
                        if (Sr.x = n.normal.x > 0 ? t.max.x : t.min.x, Sr.y = n.normal.y > 0 ? t.max.y : t.min.y, Sr.z = n.normal.z > 0 ? t.max.z : t.min.z, n.distanceToPoint(Sr) < 0) return !1
                    }
                    return !0
                },
                containsPoint: function(t) {
                    for (var e = this.planes, i = 0; i < 6; i++)
                        if (e[i].distanceToPoint(t) < 0) return !1;
                    return !0
                }
            });
            var Ar = {
                    alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
                    alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
                    alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
                    aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
                    aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
                    begin_vertex: "vec3 transformed = vec3( position );",
                    beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
                    bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
                    bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
                    clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
                    clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
                    clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif",
                    clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif",
                    color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
                    color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
                    color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
                    color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
                    common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}",
                    cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_maxMipLevel 8.0\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_maxTileSize 256.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction) {\n    vec3 absDirection = abs(direction);\n    float face = -1.0;\n    if (absDirection.x > absDirection.z) {\n      if (absDirection.x > absDirection.y)\n        face = direction.x > 0.0 ? 0.0 : 3.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    } else {\n      if (absDirection.z > absDirection.y)\n        face = direction.z > 0.0 ? 2.0 : 5.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    }\n    return face;\n}\nvec2 getUV(vec3 direction, float face) {\n    vec2 uv;\n    if (face == 0.0) {\n      uv = vec2(-direction.z, direction.y) / abs(direction.x);\n    } else if (face == 1.0) {\n      uv = vec2(direction.x, -direction.z) / abs(direction.y);\n    } else if (face == 2.0) {\n      uv = direction.xy / abs(direction.z);\n    } else if (face == 3.0) {\n      uv = vec2(direction.z, direction.y) / abs(direction.x);\n    } else if (face == 4.0) {\n      uv = direction.xz / abs(direction.y);\n    } else {\n      uv = vec2(-direction.x, direction.y) / abs(direction.z);\n    }\n    return 0.5 * (uv + 1.0);\n}\nvec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {\n  float face = getFace(direction);\n  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);\n  mipInt = max(mipInt, cubeUV_minMipLevel);\n  float faceSize = exp2(mipInt);\n  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);\n  vec2 uv = getUV(direction, face) * (faceSize - 1.0);\n  vec2 f = fract(uv);\n  uv += 0.5 - f;\n  if (face > 2.0) {\n    uv.y += faceSize;\n    face -= 3.0;\n  }\n  uv.x += face * faceSize;\n  if(mipInt < cubeUV_maxMipLevel){\n    uv.y += 2.0 * cubeUV_maxTileSize;\n  }\n  uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);\n  uv *= texelSize;\n  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x += texelSize;\n  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.y += texelSize;\n  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x -= texelSize;\n  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  vec3 tm = mix(tl, tr, f.x);\n  vec3 bm = mix(bl, br, f.x);\n  return mix(tm, bm, f.y);\n}\n#define r0 1.0\n#define v0 0.339\n#define m0 -2.0\n#define r1 0.8\n#define v1 0.276\n#define m1 -1.0\n#define r4 0.4\n#define v4 0.046\n#define m4 2.0\n#define r5 0.305\n#define v5 0.016\n#define m5 3.0\n#define r6 0.21\n#define v6 0.0038\n#define m6 4.0\nfloat roughnessToMip(float roughness) {\n  float mip = 0.0;\n  if (roughness >= r1) {\n    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;\n  } else if (roughness >= r4) {\n    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;\n  } else if (roughness >= r5) {\n    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;\n  } else if (roughness >= r6) {\n    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;\n  } else {\n    mip = -2.0 * log2(1.16 * roughness);  }\n  return mip;\n}\nvec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {\n  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);\n  float mipF = fract(mip);\n  float mipInt = floor(mip);\n  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);\n  if (mipF == 0.0) {\n    return vec4(color0, 1.0);\n  } else {\n    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);\n    return vec4(mix(color0, color1, mipF), 1.0);\n  }\n}\n#endif",
                    defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\ttransformedNormal = mat3( instanceMatrix ) * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
                    displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
                    displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
                    emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
                    emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
                    encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
                    encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
                    envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\t\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t}  else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ), 0.0 );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
                    envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
                    envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
                    envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
                    envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
                    envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) { \n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
                    fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",
                    fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
                    fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
                    fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
                    gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
                    lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
                    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
                    lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",
                    lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
                    lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
                    lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
                    lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
                    lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
                    lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = saturate( clearcoat );\tmaterial.clearcoatRoughness = max( clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
                    lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
                    lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
                    lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
                    lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
                    logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
                    logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
                    logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
                    logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
                    map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
                    map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
                    map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
                    map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
                    metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
                    metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
                    morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
                    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
                    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
                    normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
                    normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
                    normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
                    clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
                    clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",
                    clearcoat_normalmap_pars_fragment: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
                    packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
                    premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
                    project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
                    dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
                    dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
                    roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
                    roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
                    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
                    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
                    shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",
                    shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",
                    skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
                    skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
                    skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
                    skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
                    specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
                    specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
                    tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
                    tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
                    uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
                    uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
                    uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
                    uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
                    uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
                    uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
                    worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
                    background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
                    background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
                    cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
                    cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
                    depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}",
                    depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}",
                    distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
                    distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
                    equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
                    equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
                    linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
                    linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
                    meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
                    meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
                    meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
                    meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
                    meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
                    meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
                    meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
                    meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
                    meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
                    meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
                    meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
                    meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
                    normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
                    normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
                    points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
                    points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
                    shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}",
                    shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
                    sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
                    sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
                },
                Lr = {
                    common: {
                        diffuse: {
                            value: new hn(15658734)
                        },
                        opacity: {
                            value: 1
                        },
                        map: {
                            value: null
                        },
                        uvTransform: {
                            value: new Be
                        },
                        uv2Transform: {
                            value: new Be
                        },
                        alphaMap: {
                            value: null
                        }
                    },
                    specularmap: {
                        specularMap: {
                            value: null
                        }
                    },
                    envmap: {
                        envMap: {
                            value: null
                        },
                        flipEnvMap: {
                            value: -1
                        },
                        reflectivity: {
                            value: 1
                        },
                        refractionRatio: {
                            value: .98
                        },
                        maxMipLevel: {
                            value: 0
                        }
                    },
                    aomap: {
                        aoMap: {
                            value: null
                        },
                        aoMapIntensity: {
                            value: 1
                        }
                    },
                    lightmap: {
                        lightMap: {
                            value: null
                        },
                        lightMapIntensity: {
                            value: 1
                        }
                    },
                    emissivemap: {
                        emissiveMap: {
                            value: null
                        }
                    },
                    bumpmap: {
                        bumpMap: {
                            value: null
                        },
                        bumpScale: {
                            value: 1
                        }
                    },
                    normalmap: {
                        normalMap: {
                            value: null
                        },
                        normalScale: {
                            value: new Ne(1, 1)
                        }
                    },
                    displacementmap: {
                        displacementMap: {
                            value: null
                        },
                        displacementScale: {
                            value: 1
                        },
                        displacementBias: {
                            value: 0
                        }
                    },
                    roughnessmap: {
                        roughnessMap: {
                            value: null
                        }
                    },
                    metalnessmap: {
                        metalnessMap: {
                            value: null
                        }
                    },
                    gradientmap: {
                        gradientMap: {
                            value: null
                        }
                    },
                    fog: {
                        fogDensity: {
                            value: 25e-5
                        },
                        fogNear: {
                            value: 1
                        },
                        fogFar: {
                            value: 2e3
                        },
                        fogColor: {
                            value: new hn(16777215)
                        }
                    },
                    lights: {
                        ambientLightColor: {
                            value: []
                        },
                        lightProbe: {
                            value: []
                        },
                        directionalLights: {
                            value: [],
                            properties: {
                                direction: {},
                                color: {},
                                shadow: {},
                                shadowBias: {},
                                shadowRadius: {},
                                shadowMapSize: {}
                            }
                        },
                        directionalShadowMap: {
                            value: []
                        },
                        directionalShadowMatrix: {
                            value: []
                        },
                        spotLights: {
                            value: [],
                            properties: {
                                color: {},
                                position: {},
                                direction: {},
                                distance: {},
                                coneCos: {},
                                penumbraCos: {},
                                decay: {},
                                shadow: {},
                                shadowBias: {},
                                shadowRadius: {},
                                shadowMapSize: {}
                            }
                        },
                        spotShadowMap: {
                            value: []
                        },
                        spotShadowMatrix: {
                            value: []
                        },
                        pointLights: {
                            value: [],
                            properties: {
                                color: {},
                                position: {},
                                decay: {},
                                distance: {},
                                shadow: {},
                                shadowBias: {},
                                shadowRadius: {},
                                shadowMapSize: {},
                                shadowCameraNear: {},
                                shadowCameraFar: {}
                            }
                        },
                        pointShadowMap: {
                            value: []
                        },
                        pointShadowMatrix: {
                            value: []
                        },
                        hemisphereLights: {
                            value: [],
                            properties: {
                                direction: {},
                                skyColor: {},
                                groundColor: {}
                            }
                        },
                        rectAreaLights: {
                            value: [],
                            properties: {
                                color: {},
                                position: {},
                                width: {},
                                height: {}
                            }
                        }
                    },
                    points: {
                        diffuse: {
                            value: new hn(15658734)
                        },
                        opacity: {
                            value: 1
                        },
                        size: {
                            value: 1
                        },
                        scale: {
                            value: 1
                        },
                        map: {
                            value: null
                        },
                        alphaMap: {
                            value: null
                        },
                        uvTransform: {
                            value: new Be
                        }
                    },
                    sprite: {
                        diffuse: {
                            value: new hn(15658734)
                        },
                        opacity: {
                            value: 1
                        },
                        center: {
                            value: new Ne(.5, .5)
                        },
                        rotation: {
                            value: 0
                        },
                        map: {
                            value: null
                        },
                        alphaMap: {
                            value: null
                        },
                        uvTransform: {
                            value: new Be
                        }
                    }
                },
                Pr = {
                    basic: {
                        uniforms: ur([Lr.common, Lr.specularmap, Lr.envmap, Lr.aomap, Lr.lightmap, Lr.fog]),
                        vertexShader: Ar.meshbasic_vert,
                        fragmentShader: Ar.meshbasic_frag
                    },
                    lambert: {
                        uniforms: ur([Lr.common, Lr.specularmap, Lr.envmap, Lr.aomap, Lr.lightmap, Lr.emissivemap, Lr.fog, Lr.lights, {
                            emissive: {
                                value: new hn(0)
                            }
                        }]),
                        vertexShader: Ar.meshlambert_vert,
                        fragmentShader: Ar.meshlambert_frag
                    },
                    phong: {
                        uniforms: ur([Lr.common, Lr.specularmap, Lr.envmap, Lr.aomap, Lr.lightmap, Lr.emissivemap, Lr.bumpmap, Lr.normalmap, Lr.displacementmap, Lr.fog, Lr.lights, {
                            emissive: {
                                value: new hn(0)
                            },
                            specular: {
                                value: new hn(1118481)
                            },
                            shininess: {
                                value: 30
                            }
                        }]),
                        vertexShader: Ar.meshphong_vert,
                        fragmentShader: Ar.meshphong_frag
                    },
                    standard: {
                        uniforms: ur([Lr.common, Lr.envmap, Lr.aomap, Lr.lightmap, Lr.emissivemap, Lr.bumpmap, Lr.normalmap, Lr.displacementmap, Lr.roughnessmap, Lr.metalnessmap, Lr.fog, Lr.lights, {
                            emissive: {
                                value: new hn(0)
                            },
                            roughness: {
                                value: .5
                            },
                            metalness: {
                                value: .5
                            },
                            envMapIntensity: {
                                value: 1
                            }
                        }]),
                        vertexShader: Ar.meshphysical_vert,
                        fragmentShader: Ar.meshphysical_frag
                    },
                    toon: {
                        uniforms: ur([Lr.common, Lr.specularmap, Lr.aomap, Lr.lightmap, Lr.emissivemap, Lr.bumpmap, Lr.normalmap, Lr.displacementmap, Lr.gradientmap, Lr.fog, Lr.lights, {
                            emissive: {
                                value: new hn(0)
                            },
                            specular: {
                                value: new hn(1118481)
                            },
                            shininess: {
                                value: 30
                            }
                        }]),
                        vertexShader: Ar.meshtoon_vert,
                        fragmentShader: Ar.meshtoon_frag
                    },
                    matcap: {
                        uniforms: ur([Lr.common, Lr.bumpmap, Lr.normalmap, Lr.displacementmap, Lr.fog, {
                            matcap: {
                                value: null
                            }
                        }]),
                        vertexShader: Ar.meshmatcap_vert,
                        fragmentShader: Ar.meshmatcap_frag
                    },
                    points: {
                        uniforms: ur([Lr.points, Lr.fog]),
                        vertexShader: Ar.points_vert,
                        fragmentShader: Ar.points_frag
                    },
                    dashed: {
                        uniforms: ur([Lr.common, Lr.fog, {
                            scale: {
                                value: 1
                            },
                            dashSize: {
                                value: 1
                            },
                            totalSize: {
                                value: 2
                            }
                        }]),
                        vertexShader: Ar.linedashed_vert,
                        fragmentShader: Ar.linedashed_frag
                    },
                    depth: {
                        uniforms: ur([Lr.common, Lr.displacementmap]),
                        vertexShader: Ar.depth_vert,
                        fragmentShader: Ar.depth_frag
                    },
                    normal: {
                        uniforms: ur([Lr.common, Lr.bumpmap, Lr.normalmap, Lr.displacementmap, {
                            opacity: {
                                value: 1
                            }
                        }]),
                        vertexShader: Ar.normal_vert,
                        fragmentShader: Ar.normal_frag
                    },
                    sprite: {
                        uniforms: ur([Lr.sprite, Lr.fog]),
                        vertexShader: Ar.sprite_vert,
                        fragmentShader: Ar.sprite_frag
                    },
                    background: {
                        uniforms: {
                            uvTransform: {
                                value: new Be
                            },
                            t2D: {
                                value: null
                            }
                        },
                        vertexShader: Ar.background_vert,
                        fragmentShader: Ar.background_frag
                    },
                    cube: {
                        uniforms: ur([Lr.envmap, {
                            opacity: {
                                value: 1
                            }
                        }]),
                        vertexShader: Ar.cube_vert,
                        fragmentShader: Ar.cube_frag
                    },
                    equirect: {
                        uniforms: {
                            tEquirect: {
                                value: null
                            }
                        },
                        vertexShader: Ar.equirect_vert,
                        fragmentShader: Ar.equirect_frag
                    },
                    distanceRGBA: {
                        uniforms: ur([Lr.common, Lr.displacementmap, {
                            referencePosition: {
                                value: new Re
                            },
                            nearDistance: {
                                value: 1
                            },
                            farDistance: {
                                value: 1e3
                            }
                        }]),
                        vertexShader: Ar.distanceRGBA_vert,
                        fragmentShader: Ar.distanceRGBA_frag
                    },
                    shadow: {
                        uniforms: ur([Lr.lights, Lr.fog, {
                            color: {
                                value: new hn(0)
                            },
                            opacity: {
                                value: 1
                            }
                        }]),
                        vertexShader: Ar.shadow_vert,
                        fragmentShader: Ar.shadow_frag
                    }
                };

            function Cr() {
                var t = null,
                    e = !1,
                    i = null;

                function n(r, a) {
                    !1 !== e && (i(r, a), t.requestAnimationFrame(n))
                }
                return {
                    start: function() {
                        !0 !== e && null !== i && (t.requestAnimationFrame(n), e = !0)
                    },
                    stop: function() {
                        e = !1
                    },
                    setAnimationLoop: function(t) {
                        i = t
                    },
                    setContext: function(e) {
                        t = e
                    }
                }
            }

            function Er(t) {
                var e = new WeakMap;
                return {
                    get: function(t) {
                        return t.isInterleavedBufferAttribute && (t = t.data), e.get(t)
                    },
                    remove: function(i) {
                        i.isInterleavedBufferAttribute && (i = i.data);
                        var n = e.get(i);
                        n && (t.deleteBuffer(n.buffer), e.delete(i))
                    },
                    update: function(i, n) {
                        i.isInterleavedBufferAttribute && (i = i.data);
                        var r = e.get(i);
                        void 0 === r ? e.set(i, function(e, i) {
                            var n = e.array,
                                r = e.usage,
                                a = t.createBuffer();
                            t.bindBuffer(i, a), t.bufferData(i, n, r), e.onUploadCallback();
                            var o = 5126;
                            return n instanceof Float32Array ? o = 5126 : n instanceof Float64Array || (n instanceof Uint16Array ? o = 5123 : n instanceof Int16Array ? o = 5122 : n instanceof Uint32Array ? o = 5125 : n instanceof Int32Array ? o = 5124 : n instanceof Int8Array ? o = 5120 : n instanceof Uint8Array && (o = 5121)), {
                                buffer: a,
                                type: o,
                                bytesPerElement: n.BYTES_PER_ELEMENT,
                                version: e.version
                            }
                        }(i, n)) : r.version < i.version && (! function(e, i, n) {
                            var r = i.array,
                                a = i.updateRange;
                            t.bindBuffer(n, e), -1 === a.count ? t.bufferSubData(n, 0, r) : (t.bufferSubData(n, a.offset * r.BYTES_PER_ELEMENT, r.subarray(a.offset, a.offset + a.count)), a.count = -1)
                        }(r.buffer, i, n), r.version = i.version)
                    }
                }
            }

            function Or(t, e, i, n) {
                cr.call(this), this.type = "PlaneGeometry", this.parameters = {
                    width: t,
                    height: e,
                    widthSegments: i,
                    heightSegments: n
                }, this.fromBufferGeometry(new Nr(t, e, i, n)), this.mergeVertices()
            }

            function Nr(t, e, i, n) {
                Fn.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
                    width: t,
                    height: e,
                    widthSegments: i,
                    heightSegments: n
                };
                var r, a, o = (t = t || 1) / 2,
                    s = (e = e || 1) / 2,
                    c = Math.floor(i) || 1,
                    h = Math.floor(n) || 1,
                    l = c + 1,
                    u = h + 1,
                    p = t / c,
                    d = e / h,
                    f = [],
                    m = [],
                    v = [],
                    g = [];
                for (a = 0; a < u; a++) {
                    var y = a * d - s;
                    for (r = 0; r < l; r++) {
                        var x = r * p - o;
                        m.push(x, -y, 0), v.push(0, 0, 1), g.push(r / c), g.push(1 - a / h)
                    }
                }
                for (a = 0; a < h; a++)
                    for (r = 0; r < c; r++) {
                        var _ = r + l * a,
                            b = r + l * (a + 1),
                            M = r + 1 + l * (a + 1),
                            w = r + 1 + l * a;
                        f.push(_, b, w), f.push(b, M, w)
                    }
                this.setIndex(f), this.setAttribute("position", new An(m, 3)), this.setAttribute("normal", new An(v, 3)), this.setAttribute("uv", new An(g, 2))
            }

            function Ir(t, e, i, n) {
                var r, a, o = new hn(0),
                    s = 0,
                    c = null,
                    u = 0;

                function p(t, i) {
                    e.buffers.color.setClear(t.r, t.g, t.b, i, n)
                }
                return {
                    getClearColor: function() {
                        return o
                    },
                    setClearColor: function(t, e) {
                        o.set(t), p(o, s = void 0 !== e ? e : 1)
                    },
                    getClearAlpha: function() {
                        return s
                    },
                    setClearAlpha: function(t) {
                        p(o, s = t)
                    },
                    render: function(e, n, d, f) {
                        var m = n.background,
                            v = t.xr,
                            g = v.getSession && v.getSession();
                        if (g && "additive" === g.environmentBlendMode && (m = null), null === m ? (p(o, s), c = null, u = 0) : m && m.isColor && (p(m, 1), f = !0, c = null, u = 0), (t.autoClear || f) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), m && (m.isCubeTexture || m.isWebGLRenderTargetCube || m.mapping === at)) {
                            void 0 === a && ((a = new er(new hr(1, 1, 1), new mr({
                                type: "BackgroundCubeMaterial",
                                uniforms: lr(Pr.cube.uniforms),
                                vertexShader: Pr.cube.vertexShader,
                                fragmentShader: Pr.cube.fragmentShader,
                                side: l,
                                depthTest: !1,
                                depthWrite: !1,
                                fog: !1
                            }))).geometry.deleteAttribute("normal"), a.geometry.deleteAttribute("uv"), a.onBeforeRender = function(t, e, i) {
                                this.matrixWorld.copyPosition(i.matrixWorld)
                            }, Object.defineProperty(a.material, "envMap", {
                                get: function() {
                                    return this.uniforms.envMap.value
                                }
                            }), i.update(a));
                            var y = m.isWebGLRenderTargetCube ? m.texture : m;
                            a.material.uniforms.envMap.value = y, a.material.uniforms.flipEnvMap.value = y.isCubeTexture ? -1 : 1, c === m && u === y.version || (a.material.needsUpdate = !0, c = m, u = y.version), e.unshift(a, a.geometry, a.material, 0, 0, null)
                        } else m && m.isTexture && (void 0 === r && ((r = new er(new Nr(2, 2), new mr({
                            type: "BackgroundMaterial",
                            uniforms: lr(Pr.background.uniforms),
                            vertexShader: Pr.background.vertexShader,
                            fragmentShader: Pr.background.fragmentShader,
                            side: h,
                            depthTest: !1,
                            depthWrite: !1,
                            fog: !1
                        }))).geometry.deleteAttribute("normal"), Object.defineProperty(r.material, "map", {
                            get: function() {
                                return this.uniforms.t2D.value
                            }
                        }), i.update(r)), r.material.uniforms.t2D.value = m, !0 === m.matrixAutoUpdate && m.updateMatrix(), r.material.uniforms.uvTransform.value.copy(m.matrix), c === m && u === m.version || (r.material.needsUpdate = !0, c = m, u = m.version), e.unshift(r, r.geometry, r.material, 0, 0, null))
                    }
                }
            }

            function Dr(t, e, i, n) {
                var r, a = n.isWebGL2;
                this.setMode = function(t) {
                    r = t
                }, this.render = function(e, n) {
                    t.drawArrays(r, e, n), i.update(n, r)
                }, this.renderInstances = function(n, o, s, c) {
                    if (0 !== c) {
                        var h, l;
                        if (a) h = t, l = "drawArraysInstanced";
                        else if (l = "drawArraysInstancedANGLE", null === (h = e.get("ANGLE_instanced_arrays"))) return;
                        h[l](r, o, s, c), i.update(s, r, c)
                    }
                }
            }

            function zr(t, e, i) {
                var n;

                function r(e) {
                    if ("highp" === e) {
                        if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
                        e = "mediump"
                    }
                    return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
                }
                var a = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext,
                    o = void 0 !== i.precision ? i.precision : "highp",
                    s = r(o);
                s !== o && (o = s);
                var c = !0 === i.logarithmicDepthBuffer,
                    h = t.getParameter(34930),
                    l = t.getParameter(35660),
                    u = t.getParameter(3379),
                    p = t.getParameter(34076),
                    d = t.getParameter(34921),
                    f = t.getParameter(36347),
                    m = t.getParameter(36348),
                    v = t.getParameter(36349),
                    g = l > 0,
                    y = a || !!e.get("OES_texture_float");
                return {
                    isWebGL2: a,
                    getMaxAnisotropy: function() {
                        if (void 0 !== n) return n;
                        var i = e.get("EXT_texture_filter_anisotropic");
                        return n = null !== i ? t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
                    },
                    getMaxPrecision: r,
                    precision: o,
                    logarithmicDepthBuffer: c,
                    maxTextures: h,
                    maxVertexTextures: l,
                    maxTextureSize: u,
                    maxCubemapSize: p,
                    maxAttributes: d,
                    maxVertexUniforms: f,
                    maxVaryings: m,
                    maxFragmentUniforms: v,
                    vertexTextures: g,
                    floatFragmentTextures: y,
                    floatVertexTextures: g && y,
                    maxSamples: a ? t.getParameter(36183) : 0
                }
            }

            function Rr() {
                var t = this,
                    e = null,
                    i = 0,
                    n = !1,
                    r = !1,
                    a = new Xi,
                    o = new Be,
                    s = {
                        value: null,
                        needsUpdate: !1
                    };

                function c() {
                    s.value !== e && (s.value = e, s.needsUpdate = i > 0), t.numPlanes = i, t.numIntersection = 0
                }

                function h(e, i, n, r) {
                    var c = null !== e ? e.length : 0,
                        h = null;
                    if (0 !== c) {
                        if (h = s.value, !0 !== r || null === h) {
                            var l = n + 4 * c,
                                u = i.matrixWorldInverse;
                            o.getNormalMatrix(u), (null === h || h.length < l) && (h = new Float32Array(l));
                            for (var p = 0, d = n; p !== c; ++p, d += 4) a.copy(e[p]).applyMatrix4(u, o), a.normal.toArray(h, d), h[d + 3] = a.constant
                        }
                        s.value = h, s.needsUpdate = !0
                    }
                    return t.numPlanes = c, h
                }
                this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, r, a) {
                    var o = 0 !== t.length || r || 0 !== i || n;
                    return n = r, e = h(t, a, 0), i = t.length, o
                }, this.beginShadows = function() {
                    r = !0, h(null)
                }, this.endShadows = function() {
                    r = !1, c()
                }, this.setState = function(t, a, o, l, u, p) {
                    if (!n || null === t || 0 === t.length || r && !o) r ? h(null) : c();
                    else {
                        var d = r ? 0 : i,
                            f = 4 * d,
                            m = u.clippingState || null;
                        s.value = m, m = h(t, l, f, p);
                        for (var v = 0; v !== f; ++v) m[v] = e[v];
                        u.clippingState = m, this.numIntersection = a ? this.numPlanes : 0, this.numPlanes += d
                    }
                }
            }

            function Fr(t) {
                var e = {};
                return {
                    get: function(i) {
                        if (void 0 !== e[i]) return e[i];
                        var n;
                        switch (i) {
                            case "WEBGL_depth_texture":
                                n = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                                break;
                            case "EXT_texture_filter_anisotropic":
                                n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                                break;
                            case "WEBGL_compressed_texture_s3tc":
                                n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                                break;
                            case "WEBGL_compressed_texture_pvrtc":
                                n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                                break;
                            default:
                                n = t.getExtension(i)
                        }
                        return e[i] = n, n
                    }
                }
            }

            function Ur(t, e, i) {
                var n = new WeakMap,
                    r = new WeakMap;

                function a(t) {
                    var o = t.target,
                        s = n.get(o);
                    for (var c in null !== s.index && e.remove(s.index), s.attributes) e.remove(s.attributes[c]);
                    o.removeEventListener("dispose", a), n.delete(o);
                    var h = r.get(s);
                    h && (e.remove(h), r.delete(s)), i.memory.geometries--
                }

                function o(t) {
                    var i = [],
                        n = t.index,
                        a = t.attributes.position,
                        o = 0;
                    if (null !== n) {
                        var s = n.array;
                        o = n.version;
                        for (var c = 0, h = s.length; c < h; c += 3) {
                            var l = s[c + 0],
                                u = s[c + 1],
                                p = s[c + 2];
                            i.push(l, u, u, p, p, l)
                        }
                    } else {
                        s = a.array;
                        o = a.version;
                        for (c = 0, h = s.length / 3 - 1; c < h; c += 3) {
                            l = c + 0, u = c + 1, p = c + 2;
                            i.push(l, u, u, p, p, l)
                        }
                    }
                    var d = new(Cn(i) > 65535 ? Tn : wn)(i, 1);
                    d.version = o, e.update(d, 34963);
                    var f = r.get(t);
                    f && e.remove(f), r.set(t, d)
                }
                return {
                    get: function(t, e) {
                        var r = n.get(e);
                        return r || (e.addEventListener("dispose", a), e.isBufferGeometry ? r = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new Fn).setFromObject(t)), r = e._bufferGeometry), n.set(e, r), i.memory.geometries++, r)
                    },
                    update: function(t) {
                        var i = t.index,
                            n = t.attributes;
                        for (var r in null !== i && e.update(i, 34963), n) e.update(n[r], 34962);
                        var a = t.morphAttributes;
                        for (var r in a)
                            for (var o = a[r], s = 0, c = o.length; s < c; s++) e.update(o[s], 34962)
                    },
                    getWireframeAttribute: function(t) {
                        var e = r.get(t);
                        if (e) {
                            var i = t.index;
                            null !== i && e.version < i.version && o(t)
                        } else o(t);
                        return r.get(t)
                    }
                }
            }

            function Br(t, e, i, n) {
                var r, a, o, s = n.isWebGL2;
                this.setMode = function(t) {
                    r = t
                }, this.setIndex = function(t) {
                    a = t.type, o = t.bytesPerElement
                }, this.render = function(e, n) {
                    t.drawElements(r, n, a, e * o), i.update(n, r)
                }, this.renderInstances = function(n, c, h, l) {
                    if (0 !== l) {
                        var u, p;
                        if (s) u = t, p = "drawElementsInstanced";
                        else if (p = "drawElementsInstancedANGLE", null === (u = e.get("ANGLE_instanced_arrays"))) return;
                        u[p](r, h, a, c * o, l), i.update(h, r, l)
                    }
                }
            }

            function Vr(t) {
                var e = {
                    frame: 0,
                    calls: 0,
                    triangles: 0,
                    points: 0,
                    lines: 0
                };
                return {
                    memory: {
                        geometries: 0,
                        textures: 0
                    },
                    render: e,
                    programs: null,
                    autoReset: !0,
                    reset: function() {
                        e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
                    },
                    update: function(t, i, n) {
                        switch (n = n || 1, e.calls++, i) {
                            case 4:
                                e.triangles += n * (t / 3);
                                break;
                            case 1:
                                e.lines += n * (t / 2);
                                break;
                            case 3:
                                e.lines += n * (t - 1);
                                break;
                            case 2:
                                e.lines += n * t;
                                break;
                            case 0:
                                e.points += n * t
                        }
                    }
                }
            }

            function Gr(t, e) {
                return Math.abs(e[1]) - Math.abs(t[1])
            }

            function kr(t) {
                var e = {},
                    i = new Float32Array(8);
                return {
                    update: function(n, r, a, o) {
                        var s = n.morphTargetInfluences,
                            c = void 0 === s ? 0 : s.length,
                            h = e[r.id];
                        if (void 0 === h) {
                            h = [];
                            for (var l = 0; l < c; l++) h[l] = [l, 0];
                            e[r.id] = h
                        }
                        var u = a.morphTargets && r.morphAttributes.position,
                            p = a.morphNormals && r.morphAttributes.normal;
                        for (l = 0; l < c; l++) {
                            0 !== (f = h[l])[1] && (u && r.deleteAttribute("morphTarget" + l), p && r.deleteAttribute("morphNormal" + l))
                        }
                        for (l = 0; l < c; l++) {
                            (f = h[l])[0] = l, f[1] = s[l]
                        }
                        h.sort(Gr);
                        var d = 0;
                        for (l = 0; l < 8; l++) {
                            var f;
                            if (f = h[l]) {
                                var m = f[0],
                                    v = f[1];
                                if (v) {
                                    u && r.setAttribute("morphTarget" + l, u[m]), p && r.setAttribute("morphNormal" + l, p[m]), i[l] = v, d += v;
                                    continue
                                }
                            }
                            i[l] = 0
                        }
                        var g = r.morphTargetsRelative ? 1 : 1 - d;
                        o.getUniforms().setValue(t, "morphTargetBaseInfluence", g), o.getUniforms().setValue(t, "morphTargetInfluences", i)
                    }
                }
            }

            function jr(t, e, i, n) {
                var r = {};
                return {
                    update: function(t) {
                        var a = n.render.frame,
                            o = t.geometry,
                            s = e.get(t, o);
                        return r[s.id] !== a && (o.isGeometry && s.updateFromObject(t), e.update(s), r[s.id] = a), t.isInstancedMesh && i.update(t.instanceMatrix, 34962), s
                    },
                    dispose: function() {
                        r = {}
                    }
                }
            }

            function Wr(t, e, i, n, r, a, o, s, c, h) {
                t = void 0 !== t ? t : [], e = void 0 !== e ? e : tt, o = void 0 !== o ? o : Ct, ke.call(this, t, e, i, n, r, a, o, s, c, h), this.flipY = !1
            }

            function Hr(t, e, i, n) {
                ke.call(this, null), this.image = {
                    data: t || null,
                    width: e || 1,
                    height: i || 1,
                    depth: n || 1
                }, this.magFilter = lt, this.minFilter = lt, this.wrapR = ct, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
            }

            function qr(t, e, i, n) {
                ke.call(this, null), this.image = {
                    data: t || null,
                    width: e || 1,
                    height: i || 1,
                    depth: n || 1
                }, this.magFilter = lt, this.minFilter = lt, this.wrapR = ct, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
            }
            Pr.physical = {
                uniforms: ur([Pr.standard.uniforms, {
                    transparency: {
                        value: 0
                    },
                    clearcoat: {
                        value: 0
                    },
                    clearcoatRoughness: {
                        value: 0
                    },
                    sheen: {
                        value: new hn(0)
                    },
                    clearcoatNormalScale: {
                        value: new Ne(1, 1)
                    },
                    clearcoatNormalMap: {
                        value: null
                    }
                }]),
                vertexShader: Ar.meshphysical_vert,
                fragmentShader: Ar.meshphysical_frag
            }, Or.prototype = Object.create(cr.prototype), Or.prototype.constructor = Or, Nr.prototype = Object.create(Fn.prototype), Nr.prototype.constructor = Nr, Wr.prototype = Object.create(ke.prototype), Wr.prototype.constructor = Wr, Wr.prototype.isCubeTexture = !0, Object.defineProperty(Wr.prototype, "images", {
                get: function() {
                    return this.image
                },
                set: function(t) {
                    this.image = t
                }
            }), Hr.prototype = Object.create(ke.prototype), Hr.prototype.constructor = Hr, Hr.prototype.isDataTexture2DArray = !0, qr.prototype = Object.create(ke.prototype), qr.prototype.constructor = qr, qr.prototype.isDataTexture3D = !0;
            var Xr = new ke,
                Yr = new Hr,
                Jr = new qr,
                Zr = new Wr,
                Qr = [],
                Kr = [],
                $r = new Float32Array(16),
                ta = new Float32Array(9),
                ea = new Float32Array(4);

            function ia(t, e, i) {
                var n = t[0];
                if (n <= 0 || n > 0) return t;
                var r = e * i,
                    a = Qr[r];
                if (void 0 === a && (a = new Float32Array(r), Qr[r] = a), 0 !== e) {
                    n.toArray(a, 0);
                    for (var o = 1, s = 0; o !== e; ++o) s += i, t[o].toArray(a, s)
                }
                return a
            }

            function na(t, e) {
                if (t.length !== e.length) return !1;
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] !== e[i]) return !1;
                return !0
            }

            function ra(t, e) {
                for (var i = 0, n = e.length; i < n; i++) t[i] = e[i]
            }

            function aa(t, e) {
                var i = Kr[e];
                void 0 === i && (i = new Int32Array(e), Kr[e] = i);
                for (var n = 0; n !== e; ++n) i[n] = t.allocateTextureUnit();
                return i
            }

            function oa(t, e) {
                var i = this.cache;
                i[0] !== e && (t.uniform1f(this.addr, e), i[0] = e)
            }

            function sa(t, e) {
                var i = this.cache;
                if (void 0 !== e.x) i[0] === e.x && i[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y);
                else {
                    if (na(i, e)) return;
                    t.uniform2fv(this.addr, e), ra(i, e)
                }
            }

            function ca(t, e) {
                var i = this.cache;
                if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z);
                else if (void 0 !== e.r) i[0] === e.r && i[1] === e.g && i[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), i[0] = e.r, i[1] = e.g, i[2] = e.b);
                else {
                    if (na(i, e)) return;
                    t.uniform3fv(this.addr, e), ra(i, e)
                }
            }

            function ha(t, e) {
                var i = this.cache;
                if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w);
                else {
                    if (na(i, e)) return;
                    t.uniform4fv(this.addr, e), ra(i, e)
                }
            }

            function la(t, e) {
                var i = this.cache,
                    n = e.elements;
                if (void 0 === n) {
                    if (na(i, e)) return;
                    t.uniformMatrix2fv(this.addr, !1, e), ra(i, e)
                } else {
                    if (na(i, n)) return;
                    ea.set(n), t.uniformMatrix2fv(this.addr, !1, ea), ra(i, n)
                }
            }

            function ua(t, e) {
                var i = this.cache,
                    n = e.elements;
                if (void 0 === n) {
                    if (na(i, e)) return;
                    t.uniformMatrix3fv(this.addr, !1, e), ra(i, e)
                } else {
                    if (na(i, n)) return;
                    ta.set(n), t.uniformMatrix3fv(this.addr, !1, ta), ra(i, n)
                }
            }

            function pa(t, e) {
                var i = this.cache,
                    n = e.elements;
                if (void 0 === n) {
                    if (na(i, e)) return;
                    t.uniformMatrix4fv(this.addr, !1, e), ra(i, e)
                } else {
                    if (na(i, n)) return;
                    $r.set(n), t.uniformMatrix4fv(this.addr, !1, $r), ra(i, n)
                }
            }

            function da(t, e, i) {
                var n = this.cache,
                    r = i.allocateTextureUnit();
                n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.safeSetTexture2D(e || Xr, r)
            }

            function fa(t, e, i) {
                var n = this.cache,
                    r = i.allocateTextureUnit();
                n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture2DArray(e || Yr, r)
            }

            function ma(t, e, i) {
                var n = this.cache,
                    r = i.allocateTextureUnit();
                n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture3D(e || Jr, r)
            }

            function va(t, e, i) {
                var n = this.cache,
                    r = i.allocateTextureUnit();
                n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.safeSetTextureCube(e || Zr, r)
            }

            function ga(t, e) {
                var i = this.cache;
                i[0] !== e && (t.uniform1i(this.addr, e), i[0] = e)
            }

            function ya(t, e) {
                var i = this.cache;
                na(i, e) || (t.uniform2iv(this.addr, e), ra(i, e))
            }

            function xa(t, e) {
                var i = this.cache;
                na(i, e) || (t.uniform3iv(this.addr, e), ra(i, e))
            }

            function _a(t, e) {
                var i = this.cache;
                na(i, e) || (t.uniform4iv(this.addr, e), ra(i, e))
            }

            function ba(t, e) {
                t.uniform1fv(this.addr, e)
            }

            function Ma(t, e) {
                t.uniform1iv(this.addr, e)
            }

            function wa(t, e) {
                t.uniform2iv(this.addr, e)
            }

            function Sa(t, e) {
                t.uniform3iv(this.addr, e)
            }

            function Ta(t, e) {
                t.uniform4iv(this.addr, e)
            }

            function Aa(t, e) {
                var i = ia(e, this.size, 2);
                t.uniform2fv(this.addr, i)
            }

            function La(t, e) {
                var i = ia(e, this.size, 3);
                t.uniform3fv(this.addr, i)
            }

            function Pa(t, e) {
                var i = ia(e, this.size, 4);
                t.uniform4fv(this.addr, i)
            }

            function Ca(t, e) {
                var i = ia(e, this.size, 4);
                t.uniformMatrix2fv(this.addr, !1, i)
            }

            function Ea(t, e) {
                var i = ia(e, this.size, 9);
                t.uniformMatrix3fv(this.addr, !1, i)
            }

            function Oa(t, e) {
                var i = ia(e, this.size, 16);
                t.uniformMatrix4fv(this.addr, !1, i)
            }

            function Na(t, e, i) {
                var n = e.length,
                    r = aa(i, n);
                t.uniform1iv(this.addr, r);
                for (var a = 0; a !== n; ++a) i.safeSetTexture2D(e[a] || Xr, r[a])
            }

            function Ia(t, e, i) {
                var n = e.length,
                    r = aa(i, n);
                t.uniform1iv(this.addr, r);
                for (var a = 0; a !== n; ++a) i.safeSetTextureCube(e[a] || Zr, r[a])
            }

            function Da(t, e, i) {
                this.id = t, this.addr = i, this.cache = [], this.setValue = function(t) {
                    switch (t) {
                        case 5126:
                            return oa;
                        case 35664:
                            return sa;
                        case 35665:
                            return ca;
                        case 35666:
                            return ha;
                        case 35674:
                            return la;
                        case 35675:
                            return ua;
                        case 35676:
                            return pa;
                        case 35678:
                        case 36198:
                            return da;
                        case 35679:
                            return ma;
                        case 35680:
                            return va;
                        case 36289:
                            return fa;
                        case 5124:
                        case 35670:
                            return ga;
                        case 35667:
                        case 35671:
                            return ya;
                        case 35668:
                        case 35672:
                            return xa;
                        case 35669:
                        case 35673:
                            return _a
                    }
                }(e.type)
            }

            function za(t, e, i) {
                this.id = t, this.addr = i, this.cache = [], this.size = e.size, this.setValue = function(t) {
                    switch (t) {
                        case 5126:
                            return ba;
                        case 35664:
                            return Aa;
                        case 35665:
                            return La;
                        case 35666:
                            return Pa;
                        case 35674:
                            return Ca;
                        case 35675:
                            return Ea;
                        case 35676:
                            return Oa;
                        case 35678:
                        case 36198:
                        case 36298:
                        case 36306:
                            return Na;
                        case 35680:
                        case 36300:
                        case 36308:
                            return Ia;
                        case 5124:
                        case 35670:
                            return Ma;
                        case 35667:
                        case 35671:
                            return wa;
                        case 35668:
                        case 35672:
                            return Sa;
                        case 35669:
                        case 35673:
                            return Ta
                    }
                }(e.type)
            }

            function Ra(t) {
                this.id = t, this.seq = [], this.map = {}
            }
            za.prototype.updateCache = function(t) {
                var e = this.cache;
                t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), ra(e, t)
            }, Ra.prototype.setValue = function(t, e, i) {
                for (var n = this.seq, r = 0, a = n.length; r !== a; ++r) {
                    var o = n[r];
                    o.setValue(t, e[o.id], i)
                }
            };
            var Fa = /([\w\d_]+)(\])?(\[|\.)?/g;

            function Ua(t, e) {
                t.seq.push(e), t.map[e.id] = e
            }

            function Ba(t, e, i) {
                var n = t.name,
                    r = n.length;
                for (Fa.lastIndex = 0;;) {
                    var a = Fa.exec(n),
                        o = Fa.lastIndex,
                        s = a[1],
                        c = "]" === a[2],
                        h = a[3];
                    if (c && (s |= 0), void 0 === h || "[" === h && o + 2 === r) {
                        Ua(i, void 0 === h ? new Da(s, t, e) : new za(s, t, e));
                        break
                    }
                    var l = i.map[s];
                    void 0 === l && Ua(i, l = new Ra(s)), i = l
                }
            }

            function Va(t, e) {
                this.seq = [], this.map = {};
                for (var i = t.getProgramParameter(e, 35718), n = 0; n < i; ++n) {
                    var r = t.getActiveUniform(e, n);
                    Ba(r, t.getUniformLocation(e, r.name), this)
                }
            }

            function Ga(t, e, i) {
                var n = t.createShader(e);
                return t.shaderSource(n, i), t.compileShader(n), n
            }
            Va.prototype.setValue = function(t, e, i, n) {
                var r = this.map[e];
                void 0 !== r && r.setValue(t, i, n)
            }, Va.prototype.setOptional = function(t, e, i) {
                var n = e[i];
                void 0 !== n && this.setValue(t, i, n)
            }, Va.upload = function(t, e, i, n) {
                for (var r = 0, a = e.length; r !== a; ++r) {
                    var o = e[r],
                        s = i[o.id];
                    !1 !== s.needsUpdate && o.setValue(t, s.value, n)
                }
            }, Va.seqWithValue = function(t, e) {
                for (var i = [], n = 0, r = t.length; n !== r; ++n) {
                    var a = t[n];
                    a.id in e && i.push(a)
                }
                return i
            };
            var ka = 0;

            function ja(t) {
                switch (t) {
                    case de:
                        return ["Linear", "( value )"];
                    case fe:
                        return ["sRGB", "( value )"];
                    case ve:
                        return ["RGBE", "( value )"];
                    case ye:
                        return ["RGBM", "( value, 7.0 )"];
                    case xe:
                        return ["RGBM", "( value, 16.0 )"];
                    case _e:
                        return ["RGBD", "( value, 256.0 )"];
                    case me:
                        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
                    case ge:
                        return ["LogLuv", "( value )"];
                    default:
                        throw new Error("unsupported encoding: " + t)
                }
            }

            function Wa(t, e, i) {
                var n = t.getShaderParameter(e, 35713),
                    r = t.getShaderInfoLog(e).trim();
                return n && "" === r ? "" : "THREE.WebGLShader: gl.getShaderInfoLog() " + i + "\n" + r + function(t) {
                    for (var e = t.split("\n"), i = 0; i < e.length; i++) e[i] = i + 1 + ": " + e[i];
                    return e.join("\n")
                }(t.getShaderSource(e))
            }

            function Ha(t, e) {
                var i = ja(e);
                return "vec4 " + t + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }"
            }

            function qa(t, e) {
                var i;
                switch (e) {
                    case J:
                        i = "Linear";
                        break;
                    case Z:
                        i = "Reinhard";
                        break;
                    case Q:
                        i = "Uncharted2";
                        break;
                    case K:
                        i = "OptimizedCineon";
                        break;
                    case $:
                        i = "ACESFilmic";
                        break;
                    default:
                        throw new Error("unsupported toneMapping: " + e)
                }
                return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
            }

            function Xa(t) {
                return "" !== t
            }

            function Ya(t, e) {
                return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
            }

            function Ja(t, e) {
                return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
            }
            var Za = /^[ \t]*#include +<([\w\d./]+)>/gm;

            function Qa(t) {
                return t.replace(Za, Ka)
            }

            function Ka(t, e) {
                var i = Ar[e];
                if (void 0 === i) throw new Error("Can not resolve #include <" + e + ">");
                return Qa(i)
            }
            var $a = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;

            function to(t) {
                return t.replace($a, eo)
            }

            function eo(t, e, i, n) {
                for (var r = "", a = parseInt(e); a < parseInt(i); a++) r += n.replace(/\[ i \]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
                return r
            }

            function io(t) {
                var e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
                return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e
            }

            function no(t, e, i, n, r, a) {
                var h, l, u, p, d, f = t.getContext(),
                    m = n.defines,
                    v = r.vertexShader,
                    g = r.fragmentShader,
                    y = function(t) {
                        var e = "SHADOWMAP_TYPE_BASIC";
                        return t.shadowMapType === o ? e = "SHADOWMAP_TYPE_PCF" : t.shadowMapType === s ? e = "SHADOWMAP_TYPE_PCF_SOFT" : t.shadowMapType === c && (e = "SHADOWMAP_TYPE_VSM"), e
                    }(a),
                    x = function(t) {
                        var e = "ENVMAP_TYPE_CUBE";
                        if (t.envMap) switch (t.envMapMode) {
                            case tt:
                            case et:
                                e = "ENVMAP_TYPE_CUBE";
                                break;
                            case at:
                            case ot:
                                e = "ENVMAP_TYPE_CUBE_UV";
                                break;
                            case it:
                            case nt:
                                e = "ENVMAP_TYPE_EQUIREC";
                                break;
                            case rt:
                                e = "ENVMAP_TYPE_SPHERE"
                        }
                        return e
                    }(a),
                    _ = function(t) {
                        var e = "ENVMAP_MODE_REFLECTION";
                        if (t.envMap) switch (t.envMapMode) {
                            case et:
                            case nt:
                                e = "ENVMAP_MODE_REFRACTION"
                        }
                        return e
                    }(a),
                    b = function(t) {
                        var e = "ENVMAP_BLENDING_NONE";
                        if (t.envMap) switch (t.combine) {
                            case H:
                                e = "ENVMAP_BLENDING_MULTIPLY";
                                break;
                            case q:
                                e = "ENVMAP_BLENDING_MIX";
                                break;
                            case X:
                                e = "ENVMAP_BLENDING_ADD"
                        }
                        return e
                    }(a),
                    M = t.gammaFactor > 0 ? t.gammaFactor : 1,
                    w = a.isWebGL2 ? "" : function(t, e, i) {
                        return [(t = t || {}).derivatives || e.envMapCubeUV || e.bumpMap || e.tangentSpaceNormalMap || e.clearcoatNormalMap || e.flatShading || "physical" === e.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Xa).join("\n")
                    }(n.extensions, a, e),
                    S = function(t) {
                        var e = [];
                        for (var i in t) {
                            var n = t[i];
                            !1 !== n && e.push("#define " + i + " " + n)
                        }
                        return e.join("\n")
                    }(m),
                    T = f.createProgram(),
                    A = a.numMultiviewViews;
                if (n.isRawShaderMaterial ? ((h = [S].filter(Xa).join("\n")).length > 0 && (h += "\n"), (l = [w, S].filter(Xa).join("\n")).length > 0 && (l += "\n")) : (h = [io(a), "#define SHADER_NAME " + r.name, S, a.instancing ? "#define USE_INSTANCING" : "", a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + M, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + _ : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.normalMap && a.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexTangents ? "#define USE_TANGENT" : "", a.vertexColors ? "#define USE_COLOR" : "", a.vertexUvs ? "#define USE_UV" : "", a.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + y : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (a.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", " attribute mat4 instanceMatrix;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Xa).join("\n"), l = [w, io(a), "#define SHADER_NAME " + r.name, S, a.alphaTest ? "#define ALPHATEST " + a.alphaTest + (a.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + M, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.matcap ? "#define USE_MATCAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + x : "", a.envMap ? "#define " + _ : "", a.envMap ? "#define " + b : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.normalMap && a.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.sheen ? "#define USE_SHEEN" : "", a.vertexTangents ? "#define USE_TANGENT" : "", a.vertexColors ? "#define USE_COLOR" : "", a.vertexUvs ? "#define USE_UV" : "", a.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + y : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (a.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensions && n.extensions.shaderTextureLOD || a.envMap) && (a.isWebGL2 || e.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", a.toneMapping !== Y ? "#define TONE_MAPPING" : "", a.toneMapping !== Y ? Ar.tonemapping_pars_fragment : "", a.toneMapping !== Y ? qa("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.matcapEncoding || a.envMapEncoding || a.emissiveMapEncoding || a.lightMapEncoding ? Ar.encodings_pars_fragment : "", a.mapEncoding ? Ha("mapTexelToLinear", a.mapEncoding) : "", a.matcapEncoding ? Ha("matcapTexelToLinear", a.matcapEncoding) : "", a.envMapEncoding ? Ha("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? Ha("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.lightMapEncoding ? Ha("lightMapTexelToLinear", a.lightMapEncoding) : "", a.outputEncoding ? (u = "linearToOutputTexel", p = a.outputEncoding, d = ja(p), "vec4 " + u + "( vec4 value ) { return LinearTo" + d[0] + d[1] + "; }") : "", a.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Xa).join("\n")), v = Ja(v = Ya(v = Qa(v), a), a), g = Ja(g = Ya(g = Qa(g), a), a), v = to(v), g = to(g), a.isWebGL2 && !n.isRawShaderMaterial) {
                    var L = !1,
                        P = /^\s*#version\s+300\s+es\s*\n/;
                    n.isShaderMaterial && null !== v.match(P) && null !== g.match(P) && (L = !0, v = v.replace(P, ""), g = g.replace(P, "")), h = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + h, l = ["#version 300 es\n", "#define varying in", L ? "" : "out highp vec4 pc_fragColor;", L ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + l, A > 0 && (h = (h = h.replace("#version 300 es\n", ["#version 300 es\n", "#extension GL_OVR_multiview2 : require", "layout(num_views = " + A + ") in;", "#define VIEW_ID gl_ViewID_OVR"].join("\n"))).replace(["uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;"].join("\n"), ["uniform mat4 modelViewMatrices[" + A + "];", "uniform mat4 projectionMatrices[" + A + "];", "uniform mat4 viewMatrices[" + A + "];", "uniform mat3 normalMatrices[" + A + "];", "#define modelViewMatrix modelViewMatrices[VIEW_ID]", "#define projectionMatrix projectionMatrices[VIEW_ID]", "#define viewMatrix viewMatrices[VIEW_ID]", "#define normalMatrix normalMatrices[VIEW_ID]"].join("\n")), l = (l = l.replace("#version 300 es\n", ["#version 300 es\n", "#extension GL_OVR_multiview2 : require", "#define VIEW_ID gl_ViewID_OVR"].join("\n"))).replace("uniform mat4 viewMatrix;", ["uniform mat4 viewMatrices[" + A + "];", "#define viewMatrix viewMatrices[VIEW_ID]"].join("\n")))
                }
                var C, E, O = l + g,
                    N = Ga(f, 35633, h + v),
                    I = Ga(f, 35632, O);
                if (f.attachShader(T, N), f.attachShader(T, I), void 0 !== n.index0AttributeName ? f.bindAttribLocation(T, 0, n.index0AttributeName) : !0 === a.morphTargets && f.bindAttribLocation(T, 0, "position"), f.linkProgram(T), t.debug.checkShaderErrors) {
                    var D = f.getProgramInfoLog(T).trim(),
                        z = f.getShaderInfoLog(N).trim(),
                        R = f.getShaderInfoLog(I).trim(),
                        F = !0,
                        U = !0;
                    if (!1 === f.getProgramParameter(T, 35714)) {
                        F = !1;
                        Wa(f, N, "vertex"), Wa(f, I, "fragment")
                    } else "" !== D || "" !== z && "" !== R || (U = !1);
                    U && (this.diagnostics = {
                        runnable: F,
                        material: n,
                        programLog: D,
                        vertexShader: {
                            log: z,
                            prefix: h
                        },
                        fragmentShader: {
                            log: R,
                            prefix: l
                        }
                    })
                }
                return f.deleteShader(N), f.deleteShader(I), this.getUniforms = function() {
                    return void 0 === C && (C = new Va(f, T)), C
                }, this.getAttributes = function() {
                    return void 0 === E && (E = function(t, e) {
                        for (var i = {}, n = t.getProgramParameter(e, 35721), r = 0; r < n; r++) {
                            var a = t.getActiveAttrib(e, r).name;
                            i[a] = t.getAttribLocation(e, a)
                        }
                        return i
                    }(f, T)), E
                }, this.destroy = function() {
                    f.deleteProgram(T), this.program = void 0
                }, this.name = r.name, this.id = ka++, this.cacheKey = i, this.usedTimes = 1, this.program = T, this.vertexShader = N, this.fragmentShader = I, this.numMultiviewViews = A, this
            }

            function ro(t, e, i) {
                var n = [],
                    r = i.isWebGL2,
                    a = i.logarithmicDepthBuffer,
                    o = i.floatVertexTextures,
                    s = i.precision,
                    c = i.maxVertexUniforms,
                    h = i.vertexTextures,
                    p = {
                        MeshDepthMaterial: "depth",
                        MeshDistanceMaterial: "distanceRGBA",
                        MeshNormalMaterial: "normal",
                        MeshBasicMaterial: "basic",
                        MeshLambertMaterial: "lambert",
                        MeshPhongMaterial: "phong",
                        MeshToonMaterial: "toon",
                        MeshStandardMaterial: "physical",
                        MeshPhysicalMaterial: "physical",
                        MeshMatcapMaterial: "matcap",
                        LineBasicMaterial: "basic",
                        LineDashedMaterial: "dashed",
                        PointsMaterial: "points",
                        ShadowMaterial: "shadow",
                        SpriteMaterial: "sprite"
                    },
                    d = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "numMultiviewViews", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen"];

                function f(t) {
                    var e;
                    return t ? t.isTexture ? e = t.encoding : t.isWebGLRenderTarget && (e = t.texture.encoding) : e = de, e
                }
                this.getParameters = function(e, n, d, m, v, g, y) {
                    var x = m.fog,
                        _ = e.isMeshStandardMaterial ? m.environment : null,
                        b = e.envMap || _,
                        M = p[e.type],
                        w = y.isSkinnedMesh ? function(t) {
                            var e = t.skeleton.bones;
                            if (o) return 1024;
                            var i = c,
                                n = Math.floor((i - 20) / 4),
                                r = Math.min(n, e.length);
                            return r < e.length ? 0 : r
                        }(y) : 0;
                    null !== e.precision && (s = i.getMaxPrecision(e.precision), e.precision);
                    var S = t.getRenderTarget(),
                        T = S && S.isWebGLMultiviewRenderTarget ? S.numViews : 0;
                    return {
                        isWebGL2: r,
                        shaderID: M,
                        precision: s,
                        instancing: !0 === y.isInstancedMesh,
                        supportsVertexTextures: h,
                        numMultiviewViews: T,
                        outputEncoding: null !== S ? f(S.texture) : t.outputEncoding,
                        map: !!e.map,
                        mapEncoding: f(e.map),
                        matcap: !!e.matcap,
                        matcapEncoding: f(e.matcap),
                        envMap: !!b,
                        envMapMode: b && b.mapping,
                        envMapEncoding: f(b),
                        envMapCubeUV: !!b && (b.mapping === at || b.mapping === ot),
                        lightMap: !!e.lightMap,
                        lightMapEncoding: f(e.lightMap),
                        aoMap: !!e.aoMap,
                        emissiveMap: !!e.emissiveMap,
                        emissiveMapEncoding: f(e.emissiveMap),
                        bumpMap: !!e.bumpMap,
                        normalMap: !!e.normalMap,
                        objectSpaceNormalMap: e.normalMapType === Se,
                        tangentSpaceNormalMap: e.normalMapType === we,
                        clearcoatNormalMap: !!e.clearcoatNormalMap,
                        displacementMap: !!e.displacementMap,
                        roughnessMap: !!e.roughnessMap,
                        metalnessMap: !!e.metalnessMap,
                        specularMap: !!e.specularMap,
                        alphaMap: !!e.alphaMap,
                        gradientMap: !!e.gradientMap,
                        sheen: !!e.sheen,
                        combine: e.combine,
                        vertexTangents: e.normalMap && e.vertexTangents,
                        vertexColors: e.vertexColors,
                        vertexUvs: !!(e.map || e.bumpMap || e.normalMap || e.specularMap || e.alphaMap || e.emissiveMap || e.roughnessMap || e.metalnessMap || e.clearcoatNormalMap || e.displacementMap),
                        uvsVertexOnly: !(e.map || e.bumpMap || e.normalMap || e.specularMap || e.alphaMap || e.emissiveMap || e.roughnessMap || e.metalnessMap || e.clearcoatNormalMap || !e.displacementMap),
                        fog: !!x,
                        useFog: e.fog,
                        fogExp2: x && x.isFogExp2,
                        flatShading: e.flatShading,
                        sizeAttenuation: e.sizeAttenuation,
                        logarithmicDepthBuffer: a,
                        skinning: e.skinning && w > 0,
                        maxBones: w,
                        useVertexTexture: o,
                        morphTargets: e.morphTargets,
                        morphNormals: e.morphNormals,
                        maxMorphTargets: t.maxMorphTargets,
                        maxMorphNormals: t.maxMorphNormals,
                        numDirLights: n.directional.length,
                        numPointLights: n.point.length,
                        numSpotLights: n.spot.length,
                        numRectAreaLights: n.rectArea.length,
                        numHemiLights: n.hemi.length,
                        numDirLightShadows: n.directionalShadowMap.length,
                        numPointLightShadows: n.pointShadowMap.length,
                        numSpotLightShadows: n.spotShadowMap.length,
                        numClippingPlanes: v,
                        numClipIntersection: g,
                        dithering: e.dithering,
                        shadowMapEnabled: t.shadowMap.enabled && d.length > 0,
                        shadowMapType: t.shadowMap.type,
                        toneMapping: e.toneMapped ? t.toneMapping : Y,
                        physicallyCorrectLights: t.physicallyCorrectLights,
                        premultipliedAlpha: e.premultipliedAlpha,
                        alphaTest: e.alphaTest,
                        doubleSided: e.side === u,
                        flipSided: e.side === l,
                        depthPacking: void 0 !== e.depthPacking && e.depthPacking
                    }
                }, this.getProgramCacheKey = function(e, i) {
                    var n = [];
                    if (i.shaderID ? n.push(i.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines)
                        for (var r in e.defines) n.push(r), n.push(e.defines[r]);
                    if (void 0 === e.isRawShaderMaterial) {
                        for (var a = 0; a < d.length; a++) n.push(i[d[a]]);
                        n.push(t.outputEncoding), n.push(t.gammaFactor)
                    }
                    return n.push(e.onBeforeCompile.toString()), n.join()
                }, this.acquireProgram = function(i, r, a, o) {
                    for (var s, c = 0, h = n.length; c < h; c++) {
                        var l = n[c];
                        if (l.cacheKey === o) {
                            ++(s = l).usedTimes;
                            break
                        }
                    }
                    return void 0 === s && (s = new no(t, e, o, i, r, a), n.push(s)), s
                }, this.releaseProgram = function(t) {
                    if (0 == --t.usedTimes) {
                        var e = n.indexOf(t);
                        n[e] = n[n.length - 1], n.pop(), t.destroy()
                    }
                }, this.programs = n
            }

            function ao() {
                var t = new WeakMap;
                return {
                    get: function(e) {
                        var i = t.get(e);
                        return void 0 === i && (i = {}, t.set(e, i)), i
                    },
                    remove: function(e) {
                        t.delete(e)
                    },
                    update: function(e, i, n) {
                        t.get(e)[i] = n
                    },
                    dispose: function() {
                        t = new WeakMap
                    }
                }
            }

            function oo(t, e) {
                return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
            }

            function so(t, e) {
                return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
            }

            function co() {
                var t = [],
                    e = 0,
                    i = [],
                    n = [],
                    r = {
                        id: -1
                    };

                function a(i, n, a, o, s, c) {
                    var h = t[e];
                    return void 0 === h ? (h = {
                        id: i.id,
                        object: i,
                        geometry: n,
                        material: a,
                        program: a.program || r,
                        groupOrder: o,
                        renderOrder: i.renderOrder,
                        z: s,
                        group: c
                    }, t[e] = h) : (h.id = i.id, h.object = i, h.geometry = n, h.material = a, h.program = a.program || r, h.groupOrder = o, h.renderOrder = i.renderOrder, h.z = s, h.group = c), e++, h
                }
                return {
                    opaque: i,
                    transparent: n,
                    init: function() {
                        e = 0, i.length = 0, n.length = 0
                    },
                    push: function(t, e, r, o, s, c) {
                        var h = a(t, e, r, o, s, c);
                        (!0 === r.transparent ? n : i).push(h)
                    },
                    unshift: function(t, e, r, o, s, c) {
                        var h = a(t, e, r, o, s, c);
                        (!0 === r.transparent ? n : i).unshift(h)
                    },
                    sort: function(t, e) {
                        i.length > 1 && i.sort(t || oo), n.length > 1 && n.sort(e || so)
                    }
                }
            }

            function ho() {
                var t = new WeakMap;

                function e(i) {
                    var n = i.target;
                    n.removeEventListener("dispose", e), t.delete(n)
                }
                return {
                    get: function(i, n) {
                        var r, a = t.get(i);
                        return void 0 === a ? (r = new co, t.set(i, new WeakMap), t.get(i).set(n, r), i.addEventListener("dispose", e)) : void 0 === (r = a.get(n)) && (r = new co, a.set(n, r)), r
                    },
                    dispose: function() {
                        t = new WeakMap
                    }
                }
            }

            function lo() {
                var t = {};
                return {
                    get: function(e) {
                        if (void 0 !== t[e.id]) return t[e.id];
                        var i;
                        switch (e.type) {
                            case "DirectionalLight":
                                i = {
                                    direction: new Re,
                                    color: new hn,
                                    shadow: !1,
                                    shadowBias: 0,
                                    shadowRadius: 1,
                                    shadowMapSize: new Ne
                                };
                                break;
                            case "SpotLight":
                                i = {
                                    position: new Re,
                                    direction: new Re,
                                    color: new hn,
                                    distance: 0,
                                    coneCos: 0,
                                    penumbraCos: 0,
                                    decay: 0,
                                    shadow: !1,
                                    shadowBias: 0,
                                    shadowRadius: 1,
                                    shadowMapSize: new Ne
                                };
                                break;
                            case "PointLight":
                                i = {
                                    position: new Re,
                                    color: new hn,
                                    distance: 0,
                                    decay: 0,
                                    shadow: !1,
                                    shadowBias: 0,
                                    shadowRadius: 1,
                                    shadowMapSize: new Ne,
                                    shadowCameraNear: 1,
                                    shadowCameraFar: 1e3
                                };
                                break;
                            case "HemisphereLight":
                                i = {
                                    direction: new Re,
                                    skyColor: new hn,
                                    groundColor: new hn
                                };
                                break;
                            case "RectAreaLight":
                                i = {
                                    color: new hn,
                                    position: new Re,
                                    halfWidth: new Re,
                                    halfHeight: new Re
                                }
                        }
                        return t[e.id] = i, i
                    }
                }
            }
            var uo = 0;

            function po(t, e) {
                return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0)
            }

            function fo() {
                for (var t = new lo, e = {
                        version: 0,
                        hash: {
                            directionalLength: -1,
                            pointLength: -1,
                            spotLength: -1,
                            rectAreaLength: -1,
                            hemiLength: -1,
                            numDirectionalShadows: -1,
                            numPointShadows: -1,
                            numSpotShadows: -1
                        },
                        ambient: [0, 0, 0],
                        probe: [],
                        directional: [],
                        directionalShadowMap: [],
                        directionalShadowMatrix: [],
                        spot: [],
                        spotShadowMap: [],
                        spotShadowMatrix: [],
                        rectArea: [],
                        point: [],
                        pointShadowMap: [],
                        pointShadowMatrix: [],
                        hemi: [],
                        numDirectionalShadows: -1,
                        numPointShadows: -1,
                        numSpotShadows: -1
                    }, i = 0; i < 9; i++) e.probe.push(new Re);
                var n = new Re,
                    r = new $e,
                    a = new $e;
                return {
                    setup: function(i, o, s) {
                        for (var c = 0, h = 0, l = 0, u = 0; u < 9; u++) e.probe[u].set(0, 0, 0);
                        var p = 0,
                            d = 0,
                            f = 0,
                            m = 0,
                            v = 0,
                            g = 0,
                            y = 0,
                            x = 0,
                            _ = s.matrixWorldInverse;
                        i.sort(po), u = 0;
                        for (var b = i.length; u < b; u++) {
                            var M = i[u],
                                w = M.color,
                                S = M.intensity,
                                T = M.distance,
                                A = M.shadow && M.shadow.map ? M.shadow.map.texture : null;
                            if (M.isAmbientLight) c += w.r * S, h += w.g * S, l += w.b * S;
                            else if (M.isLightProbe)
                                for (var L = 0; L < 9; L++) e.probe[L].addScaledVector(M.sh.coefficients[L], S);
                            else if (M.isDirectionalLight) {
                                if ((C = t.get(M)).color.copy(M.color).multiplyScalar(M.intensity), C.direction.setFromMatrixPosition(M.matrixWorld), n.setFromMatrixPosition(M.target.matrixWorld), C.direction.sub(n), C.direction.transformDirection(_), C.shadow = M.castShadow, M.castShadow) {
                                    var P = M.shadow;
                                    C.shadowBias = P.bias, C.shadowRadius = P.radius, C.shadowMapSize = P.mapSize, e.directionalShadowMap[p] = A, e.directionalShadowMatrix[p] = M.shadow.matrix, g++
                                }
                                e.directional[p] = C, p++
                            } else if (M.isSpotLight) {
                                if ((C = t.get(M)).position.setFromMatrixPosition(M.matrixWorld), C.position.applyMatrix4(_), C.color.copy(w).multiplyScalar(S), C.distance = T, C.direction.setFromMatrixPosition(M.matrixWorld), n.setFromMatrixPosition(M.target.matrixWorld), C.direction.sub(n), C.direction.transformDirection(_), C.coneCos = Math.cos(M.angle), C.penumbraCos = Math.cos(M.angle * (1 - M.penumbra)), C.decay = M.decay, C.shadow = M.castShadow, M.castShadow) {
                                    P = M.shadow;
                                    C.shadowBias = P.bias, C.shadowRadius = P.radius, C.shadowMapSize = P.mapSize, e.spotShadowMap[f] = A, e.spotShadowMatrix[f] = M.shadow.matrix, x++
                                }
                                e.spot[f] = C, f++
                            } else if (M.isRectAreaLight) {
                                (C = t.get(M)).color.copy(w).multiplyScalar(S), C.position.setFromMatrixPosition(M.matrixWorld), C.position.applyMatrix4(_), a.identity(), r.copy(M.matrixWorld), r.premultiply(_), a.extractRotation(r), C.halfWidth.set(.5 * M.width, 0, 0), C.halfHeight.set(0, .5 * M.height, 0), C.halfWidth.applyMatrix4(a), C.halfHeight.applyMatrix4(a), e.rectArea[m] = C, m++
                            } else if (M.isPointLight) {
                                if ((C = t.get(M)).position.setFromMatrixPosition(M.matrixWorld), C.position.applyMatrix4(_), C.color.copy(M.color).multiplyScalar(M.intensity), C.distance = M.distance, C.decay = M.decay, C.shadow = M.castShadow, M.castShadow) {
                                    P = M.shadow;
                                    C.shadowBias = P.bias, C.shadowRadius = P.radius, C.shadowMapSize = P.mapSize, C.shadowCameraNear = P.camera.near, C.shadowCameraFar = P.camera.far, e.pointShadowMap[d] = A, e.pointShadowMatrix[d] = M.shadow.matrix, y++
                                }
                                e.point[d] = C, d++
                            } else if (M.isHemisphereLight) {
                                var C;
                                (C = t.get(M)).direction.setFromMatrixPosition(M.matrixWorld), C.direction.transformDirection(_), C.direction.normalize(), C.skyColor.copy(M.color).multiplyScalar(S), C.groundColor.copy(M.groundColor).multiplyScalar(S), e.hemi[v] = C, v++
                            }
                        }
                        e.ambient[0] = c, e.ambient[1] = h, e.ambient[2] = l;
                        var E = e.hash;
                        E.directionalLength === p && E.pointLength === d && E.spotLength === f && E.rectAreaLength === m && E.hemiLength === v && E.numDirectionalShadows === g && E.numPointShadows === y && E.numSpotShadows === x || (e.directional.length = p, e.spot.length = f, e.rectArea.length = m, e.point.length = d, e.hemi.length = v, e.directionalShadowMap.length = g, e.pointShadowMap.length = y, e.spotShadowMap.length = x, e.directionalShadowMatrix.length = g, e.pointShadowMatrix.length = y, e.spotShadowMatrix.length = x, E.directionalLength = p, E.pointLength = d, E.spotLength = f, E.rectAreaLength = m, E.hemiLength = v, E.numDirectionalShadows = g, E.numPointShadows = y, E.numSpotShadows = x, e.version = uo++)
                    },
                    state: e
                }
            }

            function mo() {
                var t = new fo,
                    e = [],
                    i = [];
                return {
                    init: function() {
                        e.length = 0, i.length = 0
                    },
                    state: {
                        lightsArray: e,
                        shadowsArray: i,
                        lights: t
                    },
                    setupLights: function(n) {
                        t.setup(e, i, n)
                    },
                    pushLight: function(t) {
                        e.push(t)
                    },
                    pushShadow: function(t) {
                        i.push(t)
                    }
                }
            }

            function vo() {
                var t = new WeakMap;

                function e(i) {
                    var n = i.target;
                    n.removeEventListener("dispose", e), t.delete(n)
                }
                return {
                    get: function(i, n) {
                        var r;
                        return !1 === t.has(i) ? (r = new mo, t.set(i, new WeakMap), t.get(i).set(n, r), i.addEventListener("dispose", e)) : !1 === t.get(i).has(n) ? (r = new mo, t.get(i).set(n, r)) : r = t.get(i).get(n), r
                    },
                    dispose: function() {
                        t = new WeakMap
                    }
                }
            }

            function go(t) {
                mn.call(this), this.type = "MeshDepthMaterial", this.depthPacking = be, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(t)
            }

            function yo(t) {
                mn.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new Re, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(t)
            }
            go.prototype = Object.create(mn.prototype), go.prototype.constructor = go, go.prototype.isMeshDepthMaterial = !0, go.prototype.copy = function(t) {
                return mn.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
            }, yo.prototype = Object.create(mn.prototype), yo.prototype.constructor = yo, yo.prototype.isMeshDistanceMaterial = !0, yo.prototype.copy = function(t) {
                return mn.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
            };
            var xo = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = sqrt( squared_mean - mean * mean );\n  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
                _o = "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}";

            function bo(t, e, i) {
                var n = new Tr,
                    r = new Ne,
                    a = new Ne,
                    s = new je,
                    p = [],
                    d = [],
                    f = {},
                    v = {
                        0: l,
                        1: h,
                        2: u
                    },
                    g = new mr({
                        defines: {
                            SAMPLE_RATE: .25,
                            HALF_SAMPLE_RATE: 1 / 8
                        },
                        uniforms: {
                            shadow_pass: {
                                value: null
                            },
                            resolution: {
                                value: new Ne
                            },
                            radius: {
                                value: 4
                            }
                        },
                        vertexShader: _o,
                        fragmentShader: xo
                    }),
                    y = g.clone();
                y.defines.HORIZONAL_PASS = 1;
                var x = new Fn;
                x.setAttribute("position", new yn(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
                var _ = new er(x, g),
                    b = this;

                function M(i, n) {
                    var r = e.update(_);
                    g.uniforms.shadow_pass.value = i.map.texture, g.uniforms.resolution.value = i.mapSize, g.uniforms.radius.value = i.radius, t.setRenderTarget(i.mapPass), t.clear(), t.renderBufferDirect(n, null, r, g, _, null), y.uniforms.shadow_pass.value = i.mapPass.texture, y.uniforms.resolution.value = i.mapSize, y.uniforms.radius.value = i.radius, t.setRenderTarget(i.map), t.clear(), t.renderBufferDirect(n, null, r, y, _, null)
                }

                function w(t, e, i) {
                    var n = t << 0 | e << 1 | i << 2,
                        r = p[n];
                    return void 0 === r && (r = new go({
                        depthPacking: Me,
                        morphTargets: t,
                        skinning: e
                    }), p[n] = r), r
                }

                function S(t, e, i) {
                    var n = t << 0 | e << 1 | i << 2,
                        r = d[n];
                    return void 0 === r && (r = new yo({
                        morphTargets: t,
                        skinning: e
                    }), d[n] = r), r
                }

                function T(e, i, n, r, a, o) {
                    var s = e.geometry,
                        h = null,
                        l = w,
                        u = e.customDepthMaterial;
                    if (!0 === n.isPointLight && (l = S, u = e.customDistanceMaterial), void 0 === u) {
                        var p = !1;
                        !0 === i.morphTargets && (!0 === s.isBufferGeometry ? p = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : !0 === s.isGeometry && (p = s.morphTargets && s.morphTargets.length > 0));
                        var d = !1;
                        !0 === e.isSkinnedMesh && !0 === i.skinning && (d = !0), h = l(p, d, !0 === e.isInstancedMesh)
                    } else h = u;
                    if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
                        var m = h.uuid,
                            g = i.uuid,
                            y = f[m];
                        void 0 === y && (y = {}, f[m] = y);
                        var x = y[g];
                        void 0 === x && (x = h.clone(), y[g] = x), h = x
                    }
                    return h.visible = i.visible, h.wireframe = i.wireframe, h.side = o === c ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : v[i.side], h.clipShadows = i.clipShadows, h.clippingPlanes = i.clippingPlanes, h.clipIntersection = i.clipIntersection, h.wireframeLinewidth = i.wireframeLinewidth, h.linewidth = i.linewidth, !0 === n.isPointLight && !0 === h.isMeshDistanceMaterial && (h.referencePosition.setFromMatrixPosition(n.matrixWorld), h.nearDistance = r, h.farDistance = a), h
                }

                function A(i, r, a, o, s) {
                    if (!1 !== i.visible) {
                        if (i.layers.test(r.layers) && (i.isMesh || i.isLine || i.isPoints) && (i.castShadow || i.receiveShadow && s === c) && (!i.frustumCulled || n.intersectsObject(i))) {
                            i.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, i.matrixWorld);
                            var h = e.update(i),
                                l = i.material;
                            if (Array.isArray(l))
                                for (var u = h.groups, p = 0, d = u.length; p < d; p++) {
                                    var f = u[p],
                                        m = l[f.materialIndex];
                                    if (m && m.visible) {
                                        var v = T(i, m, o, a.near, a.far, s);
                                        t.renderBufferDirect(a, null, h, v, i, f)
                                    }
                                } else if (l.visible) {
                                    v = T(i, l, o, a.near, a.far, s);
                                    t.renderBufferDirect(a, null, h, v, i, null)
                                }
                        }
                        for (var g = i.children, y = 0, x = g.length; y < x; y++) A(g[y], r, a, o, s)
                    }
                }
                this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = o, this.render = function(e, o, h) {
                    if (!1 !== b.enabled && (!1 !== b.autoUpdate || !1 !== b.needsUpdate) && 0 !== e.length) {
                        var l = t.getRenderTarget(),
                            u = t.getActiveCubeFace(),
                            p = t.getActiveMipmapLevel(),
                            d = t.state;
                        d.setBlending(m), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);
                        for (var f = 0, v = e.length; f < v; f++) {
                            var g = e[f],
                                y = g.shadow;
                            if (void 0 !== y) {
                                r.copy(y.mapSize);
                                var x = y.getFrameExtents();
                                if (r.multiply(x), a.copy(y.mapSize), (r.x > i || r.y > i) && (r.x > i && (a.x = Math.floor(i / x.x), r.x = a.x * x.x, y.mapSize.x = a.x), r.y > i && (a.y = Math.floor(i / x.y), r.y = a.y * x.y, y.mapSize.y = a.y)), null === y.map && !y.isPointLightShadow && this.type === c) {
                                    var _ = {
                                        minFilter: dt,
                                        magFilter: dt,
                                        format: Et
                                    };
                                    y.map = new We(r.x, r.y, _), y.map.texture.name = g.name + ".shadowMap", y.mapPass = new We(r.x, r.y, _), y.camera.updateProjectionMatrix()
                                }
                                if (null === y.map) {
                                    _ = {
                                        minFilter: lt,
                                        magFilter: lt,
                                        format: Et
                                    };
                                    y.map = new We(r.x, r.y, _), y.map.texture.name = g.name + ".shadowMap", y.camera.updateProjectionMatrix()
                                }
                                t.setRenderTarget(y.map), t.clear();
                                for (var w = y.getViewportCount(), S = 0; S < w; S++) {
                                    var T = y.getViewport(S);
                                    s.set(a.x * T.x, a.y * T.y, a.x * T.z, a.y * T.w), d.viewport(s), y.updateMatrices(g, S), n = y.getFrustum(), A(o, h, y.camera, g, this.type)
                                }
                                y.isPointLightShadow || this.type !== c || M(y, h)
                            }
                        }
                        b.needsUpdate = !1, t.setRenderTarget(l, u, p)
                    }
                }
            }

            function Mo(t, e, i) {
                var o = i.isWebGL2;
                var s = new function() {
                        var e = !1,
                            i = new je,
                            n = null,
                            r = new je(0, 0, 0, 0);
                        return {
                            setMask: function(i) {
                                n === i || e || (t.colorMask(i, i, i, i), n = i)
                            },
                            setLocked: function(t) {
                                e = t
                            },
                            setClear: function(e, n, a, o, s) {
                                !0 === s && (e *= o, n *= o, a *= o), i.set(e, n, a, o), !1 === r.equals(i) && (t.clearColor(e, n, a, o), r.copy(i))
                            },
                            reset: function() {
                                e = !1, n = null, r.set(-1, 0, 0, 0)
                            }
                        }
                    },
                    c = new function() {
                        var e = !1,
                            i = null,
                            n = null,
                            r = null;
                        return {
                            setTest: function(t) {
                                t ? xt(2929) : _t(2929)
                            },
                            setMask: function(n) {
                                i === n || e || (t.depthMask(n), i = n)
                            },
                            setFunc: function(e) {
                                if (n !== e) {
                                    if (e) switch (e) {
                                        case F:
                                            t.depthFunc(512);
                                            break;
                                        case U:
                                            t.depthFunc(519);
                                            break;
                                        case B:
                                            t.depthFunc(513);
                                            break;
                                        case V:
                                            t.depthFunc(515);
                                            break;
                                        case G:
                                            t.depthFunc(514);
                                            break;
                                        case k:
                                            t.depthFunc(518);
                                            break;
                                        case j:
                                            t.depthFunc(516);
                                            break;
                                        case W:
                                            t.depthFunc(517);
                                            break;
                                        default:
                                            t.depthFunc(515)
                                    } else t.depthFunc(515);
                                    n = e
                                }
                            },
                            setLocked: function(t) {
                                e = t
                            },
                            setClear: function(e) {
                                r !== e && (t.clearDepth(e), r = e)
                            },
                            reset: function() {
                                e = !1, i = null, n = null, r = null
                            }
                        }
                    },
                    h = new function() {
                        var e = !1,
                            i = null,
                            n = null,
                            r = null,
                            a = null,
                            o = null,
                            s = null,
                            c = null,
                            h = null;
                        return {
                            setTest: function(t) {
                                e || (t ? xt(2960) : _t(2960))
                            },
                            setMask: function(n) {
                                i === n || e || (t.stencilMask(n), i = n)
                            },
                            setFunc: function(e, i, o) {
                                n === e && r === i && a === o || (t.stencilFunc(e, i, o), n = e, r = i, a = o)
                            },
                            setOp: function(e, i, n) {
                                o === e && s === i && c === n || (t.stencilOp(e, i, n), o = e, s = i, c = n)
                            },
                            setLocked: function(t) {
                                e = t
                            },
                            setClear: function(e) {
                                h !== e && (t.clearStencil(e), h = e)
                            },
                            reset: function() {
                                e = !1, i = null, n = null, r = null, a = null, o = null, s = null, c = null, h = null
                            }
                        }
                    },
                    p = t.getParameter(34921),
                    d = new Uint8Array(p),
                    f = new Uint8Array(p),
                    H = new Uint8Array(p),
                    q = {},
                    X = null,
                    Y = null,
                    J = null,
                    Z = null,
                    Q = null,
                    K = null,
                    $ = null,
                    tt = null,
                    et = null,
                    it = !1,
                    nt = null,
                    rt = null,
                    at = null,
                    ot = null,
                    st = null,
                    ct = t.getParameter(35661),
                    ht = !1,
                    lt = 0,
                    ut = t.getParameter(7938); - 1 !== ut.indexOf("WebGL") ? (lt = parseFloat(/^WebGL\ ([0-9])/.exec(ut)[1]), ht = lt >= 1) : -1 !== ut.indexOf("OpenGL ES") && (lt = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(ut)[1]), ht = lt >= 2);
                var pt = null,
                    dt = {},
                    ft = new je,
                    mt = new je;

                function vt(e, i, n) {
                    var r = new Uint8Array(4),
                        a = t.createTexture();
                    t.bindTexture(e, a), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);
                    for (var o = 0; o < n; o++) t.texImage2D(i + o, 0, 6408, 1, 1, 0, 6408, 5121, r);
                    return a
                }
                var gt = {};

                function yt(i, n) {
                    (d[i] = 1, 0 === f[i] && (t.enableVertexAttribArray(i), f[i] = 1), H[i] !== n) && ((o ? t : e.get("ANGLE_instanced_arrays"))[o ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](i, n), H[i] = n)
                }

                function xt(e) {
                    !0 !== q[e] && (t.enable(e), q[e] = !0)
                }

                function _t(e) {
                    !1 !== q[e] && (t.disable(e), q[e] = !1)
                }
                gt[3553] = vt(3553, 3553, 1), gt[34067] = vt(34067, 34069, 6), s.setClear(0, 0, 0, 1), c.setClear(1), h.setClear(0), xt(2929), c.setFunc(V), Tt(!1), At(r), xt(2884), St(m);
                var bt = {
                    [b]: 32774,
                    [M]: 32778,
                    [w]: 32779
                };
                if (o) bt[S] = 32775, bt[T] = 32776;
                else {
                    var Mt = e.get("EXT_blend_minmax");
                    null !== Mt && (bt[S] = Mt.MIN_EXT, bt[T] = Mt.MAX_EXT)
                }
                var wt = {
                    [A]: 0,
                    [L]: 1,
                    [P]: 768,
                    [E]: 770,
                    [R]: 776,
                    [D]: 774,
                    [N]: 772,
                    [C]: 769,
                    [O]: 771,
                    [z]: 775,
                    [I]: 773
                };

                function St(e, i, n, r, a, o, s, c) {
                    if (e !== m) {
                        if (Y || (xt(3042), Y = !0), e === _) a = a || i, o = o || n, s = s || r, i === Z && a === $ || (t.blendEquationSeparate(bt[i], bt[a]), Z = i, $ = a), n === Q && r === K && o === tt && s === et || (t.blendFuncSeparate(wt[n], wt[r], wt[o], wt[s]), Q = n, K = r, tt = o, et = s), J = e, it = null;
                        else if (e !== J || c !== it) {
                            if (Z === b && $ === b || (t.blendEquation(32774), Z = b, $ = b), c) switch (e) {
                                case v:
                                    t.blendFuncSeparate(1, 771, 1, 771);
                                    break;
                                case g:
                                    t.blendFunc(1, 1);
                                    break;
                                case y:
                                    t.blendFuncSeparate(0, 0, 769, 771);
                                    break;
                                case x:
                                    t.blendFuncSeparate(0, 768, 0, 770)
                            } else switch (e) {
                                case v:
                                    t.blendFuncSeparate(770, 771, 1, 771);
                                    break;
                                case g:
                                    t.blendFunc(770, 1);
                                    break;
                                case y:
                                    t.blendFunc(0, 769);
                                    break;
                                case x:
                                    t.blendFunc(0, 768)
                            }
                            Q = null, K = null, tt = null, et = null, J = e, it = c
                        }
                    } else Y && (_t(3042), Y = !1)
                }

                function Tt(e) {
                    nt !== e && (e ? t.frontFace(2304) : t.frontFace(2305), nt = e)
                }

                function At(e) {
                    e !== n ? (xt(2884), e !== rt && (e === r ? t.cullFace(1029) : e === a ? t.cullFace(1028) : t.cullFace(1032))) : _t(2884), rt = e
                }

                function Lt(e, i, n) {
                    e ? (xt(32823), ot === i && st === n || (t.polygonOffset(i, n), ot = i, st = n)) : _t(32823)
                }

                function Pt(e) {
                    void 0 === e && (e = 33984 + ct - 1), pt !== e && (t.activeTexture(e), pt = e)
                }
                return {
                    buffers: {
                        color: s,
                        depth: c,
                        stencil: h
                    },
                    initAttributes: function() {
                        for (var t = 0, e = d.length; t < e; t++) d[t] = 0
                    },
                    enableAttribute: function(t) {
                        yt(t, 0)
                    },
                    enableAttributeAndDivisor: yt,
                    disableUnusedAttributes: function() {
                        for (var e = 0, i = f.length; e !== i; ++e) f[e] !== d[e] && (t.disableVertexAttribArray(e), f[e] = 0)
                    },
                    enable: xt,
                    disable: _t,
                    useProgram: function(e) {
                        return X !== e && (t.useProgram(e), X = e, !0)
                    },
                    setBlending: St,
                    setMaterial: function(t, e) {
                        t.side === u ? _t(2884) : xt(2884);
                        var i = t.side === l;
                        e && (i = !i), Tt(i), t.blending === v && !1 === t.transparent ? St(m) : St(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), c.setFunc(t.depthFunc), c.setTest(t.depthTest), c.setMask(t.depthWrite), s.setMask(t.colorWrite);
                        var n = t.stencilWrite;
                        h.setTest(n), n && (h.setMask(t.stencilWriteMask), h.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), h.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), Lt(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
                    },
                    setFlipSided: Tt,
                    setCullFace: At,
                    setLineWidth: function(e) {
                        e !== at && (ht && t.lineWidth(e), at = e)
                    },
                    setPolygonOffset: Lt,
                    setScissorTest: function(t) {
                        t ? xt(3089) : _t(3089)
                    },
                    activeTexture: Pt,
                    bindTexture: function(e, i) {
                        null === pt && Pt();
                        var n = dt[pt];
                        void 0 === n && (n = {
                            type: void 0,
                            texture: void 0
                        }, dt[pt] = n), n.type === e && n.texture === i || (t.bindTexture(e, i || gt[e]), n.type = e, n.texture = i)
                    },
                    unbindTexture: function() {
                        var e = dt[pt];
                        void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0)
                    },
                    compressedTexImage2D: function() {
                        try {
                            t.compressedTexImage2D.apply(t, arguments)
                        } catch (t) {}
                    },
                    texImage2D: function() {
                        try {
                            t.texImage2D.apply(t, arguments)
                        } catch (t) {}
                    },
                    texImage3D: function() {
                        try {
                            t.texImage3D.apply(t, arguments)
                        } catch (t) {}
                    },
                    scissor: function(e) {
                        !1 === ft.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), ft.copy(e))
                    },
                    viewport: function(e) {
                        !1 === mt.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), mt.copy(e))
                    },
                    reset: function() {
                        for (var e = 0; e < f.length; e++) 1 === f[e] && (t.disableVertexAttribArray(e), f[e] = 0);
                        q = {}, pt = null, dt = {}, X = null, J = null, nt = null, rt = null, s.reset(), c.reset(), h.reset()
                    }
                }
            }

            function wo(t, e, i, n, r, a, o) {
                var s, c = r.isWebGL2,
                    h = (r.maxTextures, r.maxCubemapSize),
                    l = r.maxTextureSize,
                    u = r.maxSamples,
                    p = new WeakMap,
                    d = !1;
                try {
                    d = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d")
                } catch (t) {}

                function f(t, e) {
                    return d ? new OffscreenCanvas(t, e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
                }

                function m(t, e, i, n) {
                    var r = 1;
                    if ((t.width > n || t.height > n) && (r = n / Math.max(t.width, t.height)), r < 1 || !0 === e) {
                        if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                            var a = e ? Oe.floorPowerOfTwo : Math.floor,
                                o = a(r * t.width),
                                c = a(r * t.height);
                            void 0 === s && (s = f(o, c));
                            var h = i ? f(o, c) : s;
                            return h.width = o, h.height = c, h.getContext("2d").drawImage(t, 0, 0, o, c), h
                        }
                        return t
                    }
                    return t
                }

                function v(t) {
                    return Oe.isPowerOfTwo(t.width) && Oe.isPowerOfTwo(t.height)
                }

                function g(t, e) {
                    return t.generateMipmaps && e && t.minFilter !== lt && t.minFilter !== dt
                }

                function y(e, i, r, a) {
                    t.generateMipmap(e), n.get(i).__maxMipLevel = Math.log(Math.max(r, a)) * Math.LOG2E
                }

                function x(i, n, r) {
                    if (!1 === c) return n;
                    if (null !== i && void 0 !== t[i]) return t[i];
                    var a = n;
                    return 6403 === n && (5126 === r && (a = 33326), 5131 === r && (a = 33325), 5121 === r && (a = 33321)), 6407 === n && (5126 === r && (a = 34837), 5131 === r && (a = 34843), 5121 === r && (a = 32849)), 6408 === n && (5126 === r && (a = 34836), 5131 === r && (a = 34842), 5121 === r && (a = 32856)), 33325 !== a && 33326 !== a && 34842 !== a && 34836 !== a || e.get("EXT_color_buffer_float"), a
                }

                function _(t) {
                    return t === lt || t === ut || t === pt ? 9728 : 9729
                }

                function b(e) {
                    var i = e.target;
                    i.removeEventListener("dispose", b),
                        function(e) {
                            var i = n.get(e);
                            if (void 0 === i.__webglInit) return;
                            t.deleteTexture(i.__webglTexture), n.remove(e)
                        }(i), i.isVideoTexture && p.delete(i), o.memory.textures--
                }

                function M(e) {
                    var i = e.target;
                    i.removeEventListener("dispose", M),
                        function(e) {
                            var i = n.get(e),
                                r = n.get(e.texture);
                            if (!e) return;
                            void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture);
                            e.depthTexture && e.depthTexture.dispose();
                            if (e.isWebGLRenderTargetCube)
                                for (var a = 0; a < 6; a++) t.deleteFramebuffer(i.__webglFramebuffer[a]), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer[a]);
                            else t.deleteFramebuffer(i.__webglFramebuffer), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer);
                            if (e.isWebGLMultiviewRenderTarget) {
                                t.deleteTexture(i.__webglColorTexture), t.deleteTexture(i.__webglDepthStencilTexture), o.memory.textures -= 2;
                                a = 0;
                                for (var s = i.__webglViewFramebuffers.length; a < s; a++) t.deleteFramebuffer(i.__webglViewFramebuffers[a])
                            }
                            n.remove(e.texture), n.remove(e)
                        }(i), o.memory.textures--
                }
                var w = 0;

                function S(t, e) {
                    var r = n.get(t);
                    if (t.isVideoTexture && function(t) {
                            var e = o.render.frame;
                            p.get(t) !== e && (p.set(t, e), t.update())
                        }(t), t.version > 0 && r.__version !== t.version) {
                        var a = t.image;
                        if (void 0 === a);
                        else if (!1 !== a.complete) return void O(r, t, e)
                    }
                    i.activeTexture(33984 + e), i.bindTexture(3553, r.__webglTexture)
                }

                function T(e, r) {
                    if (6 === e.image.length) {
                        var o = n.get(e);
                        if (e.version > 0 && o.__version !== e.version) {
                            E(o, e), i.activeTexture(33984 + r), i.bindTexture(34067, o.__webglTexture), t.pixelStorei(37440, e.flipY);
                            for (var s = e && e.isCompressedTexture, l = e.image[0] && e.image[0].isDataTexture, u = [], p = 0; p < 6; p++) u[p] = s || l ? l ? e.image[p].image : e.image[p] : m(e.image[p], !1, !0, h);
                            var d, f = u[0],
                                _ = v(f) || c,
                                b = a.convert(e.format),
                                M = a.convert(e.type),
                                w = x(e.internalFormat, b, M);
                            if (C(34067, e, _), s) {
                                for (p = 0; p < 6; p++) {
                                    d = u[p].mipmaps;
                                    for (var S = 0; S < d.length; S++) {
                                        var T = d[S];
                                        e.format !== Et && e.format !== Ct ? null !== b && i.compressedTexImage2D(34069 + p, S, w, T.width, T.height, 0, T.data) : i.texImage2D(34069 + p, S, w, T.width, T.height, 0, b, M, T.data)
                                    }
                                }
                                o.__maxMipLevel = d.length - 1
                            } else {
                                d = e.mipmaps;
                                for (p = 0; p < 6; p++)
                                    if (l) {
                                        i.texImage2D(34069 + p, 0, w, u[p].width, u[p].height, 0, b, M, u[p].data);
                                        for (S = 0; S < d.length; S++) {
                                            var A = (T = d[S]).image[p].image;
                                            i.texImage2D(34069 + p, S + 1, w, A.width, A.height, 0, b, M, A.data)
                                        }
                                    } else {
                                        i.texImage2D(34069 + p, 0, w, b, M, u[p]);
                                        for (S = 0; S < d.length; S++) {
                                            T = d[S];
                                            i.texImage2D(34069 + p, S + 1, w, b, M, T.image[p])
                                        }
                                    }
                                o.__maxMipLevel = d.length
                            }
                            g(e, _) && y(34067, e, f.width, f.height), o.__version = e.version, e.onUpdate && e.onUpdate(e)
                        } else i.activeTexture(33984 + r), i.bindTexture(34067, o.__webglTexture)
                    }
                }

                function A(t, e) {
                    i.activeTexture(33984 + e), i.bindTexture(34067, n.get(t).__webglTexture)
                }
                var L = {
                        [st]: 10497,
                        [ct]: 33071,
                        [ht]: 33648
                    },
                    P = {
                        [lt]: 9728,
                        [ut]: 9984,
                        [pt]: 9986,
                        [dt]: 9729,
                        [ft]: 9985,
                        [mt]: 9987
                    };

                function C(i, a, o) {
                    o ? (t.texParameteri(i, 10242, L[a.wrapS]), t.texParameteri(i, 10243, L[a.wrapT]), 32879 !== i && 35866 !== i || t.texParameteri(i, 32882, L[a.wrapR]), t.texParameteri(i, 10240, P[a.magFilter]), t.texParameteri(i, 10241, P[a.minFilter])) : (t.texParameteri(i, 10242, 33071), t.texParameteri(i, 10243, 33071), 32879 !== i && 35866 !== i || t.texParameteri(i, 32882, 33071), a.wrapS !== ct || a.wrapT, t.texParameteri(i, 10240, _(a.magFilter)), t.texParameteri(i, 10241, _(a.minFilter)), a.minFilter !== lt && a.minFilter);
                    var s = e.get("EXT_texture_filter_anisotropic");
                    if (s) {
                        if (a.type === Mt && null === e.get("OES_texture_float_linear")) return;
                        if (a.type === wt && null === (c || e.get("OES_texture_half_float_linear"))) return;
                        (a.anisotropy > 1 || n.get(a).__currentAnisotropy) && (t.texParameterf(i, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), n.get(a).__currentAnisotropy = a.anisotropy)
                    }
                }

                function E(e, i) {
                    void 0 === e.__webglInit && (e.__webglInit = !0, i.addEventListener("dispose", b), e.__webglTexture = t.createTexture(), o.memory.textures++)
                }

                function O(e, n, r) {
                    var o = 3553;
                    n.isDataTexture2DArray && (o = 35866), n.isDataTexture3D && (o = 32879), E(e, n), i.activeTexture(33984 + r), i.bindTexture(o, e.__webglTexture), t.pixelStorei(37440, n.flipY), t.pixelStorei(37441, n.premultiplyAlpha), t.pixelStorei(3317, n.unpackAlignment);
                    var s = function(t) {
                            return !c && (t.wrapS !== ct || t.wrapT !== ct || t.minFilter !== lt && t.minFilter !== dt)
                        }(n) && !1 === v(n.image),
                        h = m(n.image, s, !1, l),
                        u = v(h) || c,
                        p = a.convert(n.format),
                        d = a.convert(n.type),
                        f = x(n.internalFormat, p, d);
                    C(o, n, u);
                    var _, b = n.mipmaps;
                    if (n.isDepthTexture) {
                        if (f = 6402, n.type === Mt) {
                            if (!1 === c) throw new Error("Float Depth Texture only supported in WebGL2.0");
                            f = 36012
                        } else c && (f = 33189);
                        n.format === Dt && 6402 === f && n.type !== xt && n.type !== bt && (n.type = xt, d = a.convert(n.type)), n.format === zt && (f = 34041, n.type !== Lt && (n.type = Lt, d = a.convert(n.type))), i.texImage2D(3553, 0, f, h.width, h.height, 0, p, d, null)
                    } else if (n.isDataTexture)
                        if (b.length > 0 && u) {
                            for (var M = 0, w = b.length; M < w; M++) _ = b[M], i.texImage2D(3553, M, f, _.width, _.height, 0, p, d, _.data);
                            n.generateMipmaps = !1, e.__maxMipLevel = b.length - 1
                        } else i.texImage2D(3553, 0, f, h.width, h.height, 0, p, d, h.data), e.__maxMipLevel = 0;
                    else if (n.isCompressedTexture) {
                        for (M = 0, w = b.length; M < w; M++) _ = b[M], n.format !== Et && n.format !== Ct ? null !== p && i.compressedTexImage2D(3553, M, f, _.width, _.height, 0, _.data) : i.texImage2D(3553, M, f, _.width, _.height, 0, p, d, _.data);
                        e.__maxMipLevel = b.length - 1
                    } else if (n.isDataTexture2DArray) i.texImage3D(35866, 0, f, h.width, h.height, h.depth, 0, p, d, h.data), e.__maxMipLevel = 0;
                    else if (n.isDataTexture3D) i.texImage3D(32879, 0, f, h.width, h.height, h.depth, 0, p, d, h.data), e.__maxMipLevel = 0;
                    else if (b.length > 0 && u) {
                        for (M = 0, w = b.length; M < w; M++) _ = b[M], i.texImage2D(3553, M, f, p, d, _);
                        n.generateMipmaps = !1, e.__maxMipLevel = b.length - 1
                    } else i.texImage2D(3553, 0, f, p, d, h), e.__maxMipLevel = 0;
                    g(n, u) && y(o, n, h.width, h.height), e.__version = n.version, n.onUpdate && n.onUpdate(n)
                }

                function N(e, r, o, s) {
                    var c = a.convert(r.texture.format),
                        h = a.convert(r.texture.type),
                        l = x(r.texture.internalFormat, c, h);
                    i.texImage2D(s, 0, l, r.width, r.height, 0, c, h, null), t.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, o, s, n.get(r.texture).__webglTexture, 0), t.bindFramebuffer(36160, null)
                }

                function I(e, i, n) {
                    if (t.bindRenderbuffer(36161, e), i.depthBuffer && !i.stencilBuffer) {
                        if (n) {
                            var r = z(i);
                            t.renderbufferStorageMultisample(36161, r, 33189, i.width, i.height)
                        } else t.renderbufferStorage(36161, 33189, i.width, i.height);
                        t.framebufferRenderbuffer(36160, 36096, 36161, e)
                    } else if (i.depthBuffer && i.stencilBuffer) {
                        if (n) {
                            r = z(i);
                            t.renderbufferStorageMultisample(36161, r, 35056, i.width, i.height)
                        } else t.renderbufferStorage(36161, 34041, i.width, i.height);
                        t.framebufferRenderbuffer(36160, 33306, 36161, e)
                    } else {
                        var o = a.convert(i.texture.format),
                            s = a.convert(i.texture.type),
                            c = x(i.texture.internalFormat, o, s);
                        if (n) {
                            r = z(i);
                            t.renderbufferStorageMultisample(36161, r, c, i.width, i.height)
                        } else t.renderbufferStorage(36161, c, i.width, i.height)
                    }
                    t.bindRenderbuffer(36161, null)
                }

                function D(e) {
                    var i = n.get(e),
                        r = !0 === e.isWebGLRenderTargetCube;
                    if (e.depthTexture) {
                        if (r) throw new Error("target.depthTexture not supported in Cube render targets");
                        ! function(e, i) {
                            if (i && i.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported");
                            if (t.bindFramebuffer(36160, e), !i.depthTexture || !i.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                            n.get(i.depthTexture).__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), S(i.depthTexture, 0);
                            var r = n.get(i.depthTexture).__webglTexture;
                            if (i.depthTexture.format === Dt) t.framebufferTexture2D(36160, 36096, 3553, r, 0);
                            else {
                                if (i.depthTexture.format !== zt) throw new Error("Unknown depthTexture format");
                                t.framebufferTexture2D(36160, 33306, 3553, r, 0)
                            }
                        }(i.__webglFramebuffer, e)
                    } else if (r) {
                        i.__webglDepthbuffer = [];
                        for (var a = 0; a < 6; a++) t.bindFramebuffer(36160, i.__webglFramebuffer[a]), i.__webglDepthbuffer[a] = t.createRenderbuffer(), I(i.__webglDepthbuffer[a], e)
                    } else t.bindFramebuffer(36160, i.__webglFramebuffer), i.__webglDepthbuffer = t.createRenderbuffer(), I(i.__webglDepthbuffer, e);
                    t.bindFramebuffer(36160, null)
                }

                function z(t) {
                    return c && t.isWebGLMultisampleRenderTarget ? Math.min(u, t.samples) : 0
                }
                var R = !1,
                    F = !1;
                this.allocateTextureUnit = function() {
                    var t = w;
                    return w += 1, t
                }, this.resetTextureUnits = function() {
                    w = 0
                }, this.setTexture2D = S, this.setTexture2DArray = function(t, e) {
                    var r = n.get(t);
                    t.version > 0 && r.__version !== t.version ? O(r, t, e) : (i.activeTexture(33984 + e), i.bindTexture(35866, r.__webglTexture))
                }, this.setTexture3D = function(t, e) {
                    var r = n.get(t);
                    t.version > 0 && r.__version !== t.version ? O(r, t, e) : (i.activeTexture(33984 + e), i.bindTexture(32879, r.__webglTexture))
                }, this.setTextureCube = T, this.setTextureCubeDynamic = A, this.setupRenderTarget = function(r) {
                    var s = n.get(r),
                        h = n.get(r.texture);
                    r.addEventListener("dispose", M), h.__webglTexture = t.createTexture(), o.memory.textures++;
                    var l = !0 === r.isWebGLRenderTargetCube,
                        u = !0 === r.isWebGLMultisampleRenderTarget,
                        p = !0 === r.isWebGLMultiviewRenderTarget,
                        d = v(r) || c;
                    if (l) {
                        s.__webglFramebuffer = [];
                        for (var f = 0; f < 6; f++) s.__webglFramebuffer[f] = t.createFramebuffer()
                    } else if (s.__webglFramebuffer = t.createFramebuffer(), u) {
                        if (c) {
                            s.__webglMultisampledFramebuffer = t.createFramebuffer(), s.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, s.__webglColorRenderbuffer);
                            var m = a.convert(r.texture.format),
                                _ = a.convert(r.texture.type),
                                b = x(r.texture.internalFormat, m, _),
                                w = z(r);
                            t.renderbufferStorageMultisample(36161, w, b, r.width, r.height), t.bindFramebuffer(36160, s.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, s.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), r.depthBuffer && (s.__webglDepthRenderbuffer = t.createRenderbuffer(), I(s.__webglDepthRenderbuffer, r, !0)), t.bindFramebuffer(36160, null)
                        }
                    } else if (p) {
                        var S = r.width,
                            T = r.height,
                            A = r.numViews;
                        t.bindFramebuffer(36160, s.__webglFramebuffer);
                        var L = e.get("OVR_multiview2");
                        o.memory.textures += 2;
                        var P = t.createTexture();
                        t.bindTexture(35866, P), t.texParameteri(35866, 10240, 9728), t.texParameteri(35866, 10241, 9728), t.texImage3D(35866, 0, 32856, S, T, A, 0, 6408, 5121, null), L.framebufferTextureMultiviewOVR(36160, 36064, P, 0, 0, A);
                        var E = t.createTexture();
                        t.bindTexture(35866, E), t.texParameteri(35866, 10240, 9728), t.texParameteri(35866, 10241, 9728), t.texImage3D(35866, 0, 35056, S, T, A, 0, 34041, 34042, null), L.framebufferTextureMultiviewOVR(36160, 33306, E, 0, 0, A);
                        var O = new Array(A);
                        for (f = 0; f < A; ++f) O[f] = t.createFramebuffer(), t.bindFramebuffer(36160, O[f]), t.framebufferTextureLayer(36160, 36064, P, 0, f);
                        s.__webglColorTexture = P, s.__webglDepthStencilTexture = E, s.__webglViewFramebuffers = O, t.bindFramebuffer(36160, null), t.bindTexture(35866, null)
                    }
                    if (l) {
                        i.bindTexture(34067, h.__webglTexture), C(34067, r.texture, d);
                        for (f = 0; f < 6; f++) N(s.__webglFramebuffer[f], r, 36064, 34069 + f);
                        g(r.texture, d) && y(34067, r.texture, r.width, r.height), i.bindTexture(34067, null)
                    } else p || (i.bindTexture(3553, h.__webglTexture), C(3553, r.texture, d), N(s.__webglFramebuffer, r, 36064, 3553), g(r.texture, d) && y(3553, r.texture, r.width, r.height), i.bindTexture(3553, null));
                    r.depthBuffer && D(r)
                }, this.updateRenderTargetMipmap = function(t) {
                    var e = t.texture;
                    if (g(e, v(t) || c)) {
                        var r = t.isWebGLRenderTargetCube ? 34067 : 3553,
                            a = n.get(e).__webglTexture;
                        i.bindTexture(r, a), y(r, e, t.width, t.height), i.bindTexture(r, null)
                    }
                }, this.updateMultisampleRenderTarget = function(e) {
                    if (e.isWebGLMultisampleRenderTarget && c) {
                        var i = n.get(e);
                        t.bindFramebuffer(36008, i.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, i.__webglFramebuffer);
                        var r = e.width,
                            a = e.height,
                            o = 16384;
                        e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024), t.blitFramebuffer(0, 0, r, a, 0, 0, r, a, o, 9728)
                    }
                }, this.safeSetTexture2D = function(t, e) {
                    t && t.isWebGLRenderTarget && (!1 === R && (R = !0), t = t.texture), S(t, e)
                }, this.safeSetTextureCube = function(t, e) {
                    t && t.isWebGLRenderTargetCube && (!1 === F && (F = !0), t = t.texture), t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? T(t, e) : A(t, e)
                }
            }

            function So(t, e, i) {
                var n = i.isWebGL2;
                return {
                    convert: function(t) {
                        var i;
                        if (t === vt) return 5121;
                        if (t === St) return 32819;
                        if (t === Tt) return 32820;
                        if (t === At) return 33635;
                        if (t === gt) return 5120;
                        if (t === yt) return 5122;
                        if (t === xt) return 5123;
                        if (t === _t) return 5124;
                        if (t === bt) return 5125;
                        if (t === Mt) return 5126;
                        if (t === wt) return n ? 5131 : null !== (i = e.get("OES_texture_half_float")) ? i.HALF_FLOAT_OES : null;
                        if (t === Pt) return 6406;
                        if (t === Ct) return 6407;
                        if (t === Et) return 6408;
                        if (t === Ot) return 6409;
                        if (t === Nt) return 6410;
                        if (t === Dt) return 6402;
                        if (t === zt) return 34041;
                        if (t === Rt) return 6403;
                        if (t === Ft) return 36244;
                        if (t === Ut) return 33319;
                        if (t === Bt) return 33320;
                        if (t === Vt) return 36248;
                        if (t === Gt) return 36249;
                        if (t === kt || t === jt || t === Wt || t === Ht) {
                            if (null === (i = e.get("WEBGL_compressed_texture_s3tc"))) return null;
                            if (t === kt) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
                            if (t === jt) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                            if (t === Wt) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                            if (t === Ht) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT
                        }
                        if (t === qt || t === Xt || t === Yt || t === Jt) {
                            if (null === (i = e.get("WEBGL_compressed_texture_pvrtc"))) return null;
                            if (t === qt) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                            if (t === Xt) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                            if (t === Yt) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                            if (t === Jt) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                        }
                        return t === Zt ? null !== (i = e.get("WEBGL_compressed_texture_etc1")) ? i.COMPRESSED_RGB_ETC1_WEBGL : null : t === Qt || t === Kt || t === $t || t === te || t === ee || t === ie || t === ne || t === re || t === ae || t === oe || t === se || t === ce || t === he || t === le ? null !== (i = e.get("WEBGL_compressed_texture_astc")) ? t : null : t === Lt ? n ? 34042 : null !== (i = e.get("WEBGL_depth_texture")) ? i.UNSIGNED_INT_24_8_WEBGL : null : void 0
                    }
                }
            }

            function To(t, e, i, n) {
                We.call(this, t, e, n), this.depthBuffer = !1, this.stencilBuffer = !1, this.numViews = i
            }

            function Ao(t, e) {
                var i, n, r, a, o, s, c, h = 2,
                    l = t.extensions,
                    u = t.properties,
                    p = 0;

                function d(t) {
                    return t.isArrayCamera ? t.cameras : (o[0] = t, o)
                }
                this.isAvailable = function() {
                    if (void 0 === c) {
                        var t = l.get("OVR_multiview2");
                        if (c = null !== t && !1 === e.getContextAttributes().antialias) {
                            p = e.getParameter(t.MAX_VIEWS_OVR), i = new To(0, 0, h), s = new Ne, a = [], r = [], o = [];
                            for (var n = 0; n < p; n++) a[n] = new $e, r[n] = new Be
                        }
                    }
                    return c
                }, this.attachCamera = function(e) {
                    !1 !== function(t) {
                        if (void 0 === t.isArrayCamera) return !0;
                        var e = t.cameras;
                        if (e.length > p) return !1;
                        for (var i = 1, n = e.length; i < n; i++)
                            if (e[0].viewport.z !== e[i].viewport.z || e[0].viewport.w !== e[i].viewport.w) return !1;
                        return !0
                    }(e) && (n = t.getRenderTarget(), function(e) {
                        if (n ? s.set(n.width, n.height) : t.getDrawingBufferSize(s), e.isArrayCamera) {
                            var r = e.cameras[0].viewport;
                            i.setSize(r.z, r.w), i.setNumViews(e.cameras.length)
                        } else i.setSize(s.x, s.y), i.setNumViews(h)
                    }(e), t.setRenderTarget(i))
                }, this.detachCamera = function(r) {
                    i === t.getRenderTarget() && (t.setRenderTarget(n), function(t) {
                        var n = i,
                            r = n.numViews,
                            a = u.get(n).__webglViewFramebuffers,
                            o = n.width,
                            c = n.height;
                        if (t.isArrayCamera)
                            for (var h = 0; h < r; h++) {
                                var l = t.cameras[h].viewport,
                                    p = l.x,
                                    d = l.y,
                                    f = p + l.z,
                                    m = d + l.w;
                                e.bindFramebuffer(36008, a[h]), e.blitFramebuffer(0, 0, o, c, p, d, f, m, 16384, 9728)
                            } else e.bindFramebuffer(36008, a[0]), e.blitFramebuffer(0, 0, o, c, 0, 0, s.x, s.y, 16384, 9728)
                    }(r))
                }, this.updateCameraProjectionMatricesUniform = function(t, i) {
                    for (var n = d(t), r = 0; r < n.length; r++) a[r].copy(n[r].projectionMatrix);
                    i.setValue(e, "projectionMatrices", a)
                }, this.updateCameraViewMatricesUniform = function(t, i) {
                    for (var n = d(t), r = 0; r < n.length; r++) a[r].copy(n[r].matrixWorldInverse);
                    i.setValue(e, "viewMatrices", a)
                }, this.updateObjectMatricesUniforms = function(t, i, n) {
                    for (var o = d(i), s = 0; s < o.length; s++) a[s].multiplyMatrices(o[s].matrixWorldInverse, t.matrixWorld), r[s].getNormalMatrix(a[s]);
                    n.setValue(e, "modelViewMatrices", a), n.setValue(e, "normalMatrices", r)
                }
            }

            function Lo(t) {
                gr.call(this), this.cameras = t || []
            }

            function Po() {
                gi.call(this), this.type = "Group"
            }

            function Co(t, e) {
                var i = this,
                    n = null,
                    r = null,
                    a = "local-floor",
                    o = null,
                    s = [],
                    c = new Map,
                    h = new gr;
                h.layers.enable(1), h.viewport = new je;
                var l = new gr;
                l.layers.enable(2), l.viewport = new je;
                var u = new Lo([h, l]);

                function p(t) {
                    var e = c.get(t.inputSource);
                    e && e.dispatchEvent({
                        type: t.type
                    })
                }

                function d() {
                    c.forEach((function(t, e) {
                        t.dispatchEvent({
                            type: "disconnected",
                            data: e
                        }), t.visible = !1
                    })), c.clear(), t.setFramebuffer(null), t.setRenderTarget(t.getRenderTarget()), _.stop(), i.dispatchEvent({
                        type: "sessionend"
                    }), i.isPresenting = !1
                }

                function f(t) {
                    r = t, _.setContext(n), _.start(), i.dispatchEvent({
                        type: "sessionstart"
                    }), i.isPresenting = !0
                }

                function m(t) {
                    for (var e = n.inputSources, i = 0; i < s.length; i++) c.set(e[i], s[i]);
                    for (i = 0; i < t.removed.length; i++) {
                        var r = t.removed[i];
                        (a = c.get(r)) && (a.dispatchEvent({
                            type: "disconnected",
                            data: r
                        }), c.delete(r))
                    }
                    for (i = 0; i < t.added.length; i++) {
                        var a;
                        r = t.added[i];
                        (a = c.get(r)) && a.dispatchEvent({
                            type: "connected",
                            data: r
                        })
                    }
                }
                u.layers.enable(1), u.layers.enable(2), this.enabled = !1, this.isPresenting = !1, this.getController = function(t) {
                    var e = s[t];
                    return void 0 === e && ((e = new Po).matrixAutoUpdate = !1, e.visible = !1, s[t] = e), e
                }, this.setFramebufferScaleFactor = function() {}, this.setReferenceSpaceType = function(t) {
                    a = t
                }, this.getReferenceSpace = function() {
                    return r
                }, this.getSession = function() {
                    return n
                }, this.setSession = function(t) {
                    if (null !== (n = t)) {
                        n.addEventListener("select", p), n.addEventListener("selectstart", p), n.addEventListener("selectend", p), n.addEventListener("squeeze", p), n.addEventListener("squeezestart", p), n.addEventListener("squeezeend", p), n.addEventListener("end", d);
                        var i = e.getContextAttributes(),
                            r = {
                                antialias: i.antialias,
                                alpha: i.alpha,
                                depth: i.depth,
                                stencil: i.stencil
                            },
                            o = new XRWebGLLayer(n, e, r);
                        n.updateRenderState({
                            baseLayer: o
                        }), n.requestReferenceSpace(a).then(f), n.addEventListener("inputsourceschange", m)
                    }
                };
                var v = new Re,
                    g = new Re;

                function y(t, e) {
                    null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.getInverse(t.matrixWorld)
                }
                this.getCamera = function(t) {
                    var e = t.parent,
                        i = u.cameras;
                    y(u, e);
                    for (var n = 0; n < i.length; n++) y(i[n], e);
                    t.matrixWorld.copy(u.matrixWorld);
                    for (var r = t.children, a = (n = 0, r.length); n < a; n++) r[n].updateMatrixWorld(!0);
                    return function(t, e, i) {
                        v.setFromMatrixPosition(e.matrixWorld), g.setFromMatrixPosition(i.matrixWorld);
                        var n = v.distanceTo(g),
                            r = e.projectionMatrix.elements,
                            a = i.projectionMatrix.elements,
                            o = r[14] / (r[10] - 1),
                            s = r[14] / (r[10] + 1),
                            c = (r[9] + 1) / r[5],
                            h = (r[9] - 1) / r[5],
                            l = (r[8] - 1) / r[0],
                            u = (a[8] + 1) / a[0],
                            p = o * l,
                            d = o * u,
                            f = n / (-l + u),
                            m = f * -l;
                        e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.getInverse(t.matrixWorld);
                        var y = o + f,
                            x = s + f,
                            _ = p - m,
                            b = d + (n - m),
                            M = c * s / x * y,
                            w = h * s / x * y;
                        t.projectionMatrix.makePerspective(_, b, M, w, y, x)
                    }(u, h, l), u
                };
                var x = null;
                var _ = new Cr;
                _.setAnimationLoop((function(e, i) {
                    if (null !== (o = i.getViewerPose(r))) {
                        var a = o.views,
                            c = n.renderState.baseLayer;
                        t.setFramebuffer(c.framebuffer);
                        for (var h = 0; h < a.length; h++) {
                            var l = a[h],
                                p = c.getViewport(l),
                                d = l.transform.inverse.matrix,
                                f = u.cameras[h];
                            f.matrix.fromArray(d).getInverse(f.matrix), f.projectionMatrix.fromArray(l.projectionMatrix), f.viewport.set(p.x, p.y, p.width, p.height), 0 === h && u.matrix.copy(f.matrix)
                        }
                    }
                    var m = n.inputSources;
                    for (h = 0; h < s.length; h++) {
                        var v = s[h],
                            g = m[h];
                        if (g) {
                            var y = i.getPose(g.targetRaySpace, r);
                            if (null !== y) {
                                v.matrix.fromArray(y.transform.matrix), v.matrix.decompose(v.position, v.rotation, v.scale), v.visible = !0;
                                continue
                            }
                        }
                        v.visible = !1
                    }
                    x && x(e, i)
                })), this.setAnimationLoop = function(t) {
                    x = t
                }, this.dispose = function() {}
            }

            function Eo(t) {
                var e = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
                    i = void 0 !== t.context ? t.context : null,
                    n = void 0 !== t.alpha && t.alpha,
                    r = void 0 === t.depth || t.depth,
                    a = void 0 === t.stencil || t.stencil,
                    o = void 0 !== t.antialias && t.antialias,
                    s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
                    c = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
                    h = void 0 !== t.powerPreference ? t.powerPreference : "default",
                    u = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat,
                    p = null,
                    d = null;
                this.domElement = e, this.debug = {
                    checkShaderErrors: !0
                }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = de, this.physicallyCorrectLights = !1, this.toneMapping = J, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
                var f, m, v, g, y, x, _, b, M, w, S, T, A, L, P, C, E, O, N = this,
                    I = !1,
                    D = null,
                    z = 0,
                    R = 0,
                    F = null,
                    U = null,
                    B = -1,
                    V = {
                        geometry: null,
                        program: null,
                        wireframe: !1
                    },
                    G = null,
                    k = null,
                    j = new je,
                    W = new je,
                    H = null,
                    q = e.width,
                    X = e.height,
                    Y = 1,
                    Z = null,
                    Q = null,
                    K = new je(0, 0, q, X),
                    $ = new je(0, 0, q, X),
                    tt = !1,
                    et = new Tr,
                    it = new Rr,
                    nt = !1,
                    rt = !1,
                    at = new $e,
                    ot = new Re;

                function st() {
                    return null === F ? Y : 1
                }
                try {
                    var ct = {
                        alpha: n,
                        depth: r,
                        stencil: a,
                        antialias: o,
                        premultipliedAlpha: s,
                        preserveDrawingBuffer: c,
                        powerPreference: h,
                        failIfMajorPerformanceCaveat: u,
                        xrCompatible: !0
                    };
                    if (e.addEventListener("webglcontextlost", dt, !1), e.addEventListener("webglcontextrestored", ft, !1), null === (f = i || e.getContext("webgl", ct) || e.getContext("experimental-webgl", ct))) throw null !== e.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
                    void 0 === f.getShaderPrecisionFormat && (f.getShaderPrecisionFormat = function() {
                        return {
                            rangeMin: 1,
                            rangeMax: 1,
                            precision: 1
                        }
                    })
                } catch (t) {
                    throw t
                }

                function ht() {
                    m = new Fr(f), !1 === (v = new zr(f, m, t)).isWebGL2 && (m.get("WEBGL_depth_texture"), m.get("OES_texture_float"), m.get("OES_texture_half_float"), m.get("OES_texture_half_float_linear"), m.get("OES_standard_derivatives"), m.get("OES_element_index_uint"), m.get("ANGLE_instanced_arrays")), m.get("OES_texture_float_linear"), O = new So(f, m, v), (g = new Mo(f, m, v)).scissor(W.copy($).multiplyScalar(Y).floor()), g.viewport(j.copy(K).multiplyScalar(Y).floor()), y = new Vr(f), x = new ao, _ = new wo(f, m, g, x, v, O, y), b = new Er(f), M = new Ur(f, b, y), w = new jr(f, M, b, y), P = new kr(f), S = new ro(N, m, v), T = new ho, A = new vo, L = new Ir(N, g, w, s), C = new Dr(f, m, y, v), E = new Br(f, m, y, v), y.programs = S.programs, N.capabilities = v, N.extensions = m, N.properties = x, N.renderLists = T, N.state = g, N.info = y
                }
                ht();
                var lt = new Co(N, f);
                this.xr = lt;
                var ut = new Ao(N, f),
                    pt = new bo(N, w, v.maxTextureSize);

                function dt(t) {
                    t.preventDefault(), I = !0
                }

                function ft() {
                    I = !1, ht()
                }

                function mt(t) {
                    var e = t.target;
                    e.removeEventListener("dispose", mt),
                        function(t) {
                            gt(t), x.remove(t)
                        }(e)
                }

                function gt(t) {
                    var e = x.get(t).program;
                    t.program = void 0, void 0 !== e && S.releaseProgram(e)
                }
                this.shadowMap = pt, this.getContext = function() {
                    return f
                }, this.getContextAttributes = function() {
                    return f.getContextAttributes()
                }, this.forceContextLoss = function() {
                    var t = m.get("WEBGL_lose_context");
                    t && t.loseContext()
                }, this.forceContextRestore = function() {
                    var t = m.get("WEBGL_lose_context");
                    t && t.restoreContext()
                }, this.getPixelRatio = function() {
                    return Y
                }, this.setPixelRatio = function(t) {
                    void 0 !== t && (Y = t, this.setSize(q, X, !1))
                }, this.getSize = function(t) {
                    return void 0 === t && (t = new Ne), t.set(q, X)
                }, this.setSize = function(t, i, n) {
                    lt.isPresenting || (q = t, X = i, e.width = Math.floor(t * Y), e.height = Math.floor(i * Y), !1 !== n && (e.style.width = t + "px", e.style.height = i + "px"), this.setViewport(0, 0, t, i))
                }, this.getDrawingBufferSize = function(t) {
                    return void 0 === t && (t = new Ne), t.set(q * Y, X * Y).floor()
                }, this.setDrawingBufferSize = function(t, i, n) {
                    q = t, X = i, Y = n, e.width = Math.floor(t * n), e.height = Math.floor(i * n), this.setViewport(0, 0, t, i)
                }, this.getCurrentViewport = function(t) {
                    return void 0 === t && (t = new je), t.copy(j)
                }, this.getViewport = function(t) {
                    return t.copy(K)
                }, this.setViewport = function(t, e, i, n) {
                    t.isVector4 ? K.set(t.x, t.y, t.z, t.w) : K.set(t, e, i, n), g.viewport(j.copy(K).multiplyScalar(Y).floor())
                }, this.getScissor = function(t) {
                    return t.copy($)
                }, this.setScissor = function(t, e, i, n) {
                    t.isVector4 ? $.set(t.x, t.y, t.z, t.w) : $.set(t, e, i, n), g.scissor(W.copy($).multiplyScalar(Y).floor())
                }, this.getScissorTest = function() {
                    return tt
                }, this.setScissorTest = function(t) {
                    g.setScissorTest(tt = t)
                }, this.setOpaqueSort = function(t) {
                    Z = t
                }, this.setTransparentSort = function(t) {
                    Q = t
                }, this.getClearColor = function() {
                    return L.getClearColor()
                }, this.setClearColor = function() {
                    L.setClearColor.apply(L, arguments)
                }, this.getClearAlpha = function() {
                    return L.getClearAlpha()
                }, this.setClearAlpha = function() {
                    L.setClearAlpha.apply(L, arguments)
                }, this.clear = function(t, e, i) {
                    var n = 0;
                    (void 0 === t || t) && (n |= 16384), (void 0 === e || e) && (n |= 256), (void 0 === i || i) && (n |= 1024), f.clear(n)
                }, this.clearColor = function() {
                    this.clear(!0, !1, !1)
                }, this.clearDepth = function() {
                    this.clear(!1, !0, !1)
                }, this.clearStencil = function() {
                    this.clear(!1, !1, !0)
                }, this.dispose = function() {
                    e.removeEventListener("webglcontextlost", dt, !1), e.removeEventListener("webglcontextrestored", ft, !1), T.dispose(), A.dispose(), x.dispose(), w.dispose(), lt.dispose(), _t.stop()
                }, this.renderBufferImmediate = function(t, e) {
                    g.initAttributes();
                    var i = x.get(t);
                    t.hasPositions && !i.position && (i.position = f.createBuffer()), t.hasNormals && !i.normal && (i.normal = f.createBuffer()), t.hasUvs && !i.uv && (i.uv = f.createBuffer()), t.hasColors && !i.color && (i.color = f.createBuffer());
                    var n = e.getAttributes();
                    t.hasPositions && (f.bindBuffer(34962, i.position), f.bufferData(34962, t.positionArray, 35048), g.enableAttribute(n.position), f.vertexAttribPointer(n.position, 3, 5126, !1, 0, 0)), t.hasNormals && (f.bindBuffer(34962, i.normal), f.bufferData(34962, t.normalArray, 35048), g.enableAttribute(n.normal), f.vertexAttribPointer(n.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (f.bindBuffer(34962, i.uv), f.bufferData(34962, t.uvArray, 35048), g.enableAttribute(n.uv), f.vertexAttribPointer(n.uv, 2, 5126, !1, 0, 0)), t.hasColors && (f.bindBuffer(34962, i.color), f.bufferData(34962, t.colorArray, 35048), g.enableAttribute(n.color), f.vertexAttribPointer(n.color, 3, 5126, !1, 0, 0)), g.disableUnusedAttributes(), f.drawArrays(4, 0, t.count), t.count = 0
                };
                var yt = new yi;
                this.renderBufferDirect = function(t, e, i, n, r, a) {
                    null === e && (e = yt);
                    var o = r.isMesh && r.matrixWorld.determinant() < 0,
                        s = Lt(t, e, n, r);
                    g.setMaterial(n, o);
                    var c = !1;
                    V.geometry === i.id && V.program === s.id && V.wireframe === (!0 === n.wireframe) || (V.geometry = i.id, V.program = s.id, V.wireframe = !0 === n.wireframe, c = !0), (n.morphTargets || n.morphNormals) && (P.update(r, i, n, s), c = !0);
                    var h = i.index,
                        l = i.attributes.position;
                    if (null === h) {
                        if (void 0 === l || 0 === l.count) return
                    } else if (0 === h.count) return;
                    var u, p = 1;
                    !0 === n.wireframe && (h = M.getWireframeAttribute(i), p = 2);
                    var d = C;
                    null !== h && (u = b.get(h), (d = E).setIndex(u)), c && (! function(t, e, i, n) {
                        if (!1 === v.isWebGL2 && (t.isInstancedMesh || e.isInstancedBufferGeometry) && null === m.get("ANGLE_instanced_arrays")) return;
                        g.initAttributes();
                        var r = e.attributes,
                            a = n.getAttributes(),
                            o = i.defaultAttributeValues;
                        for (var s in a) {
                            var c = a[s];
                            if (c >= 0) {
                                var h = r[s];
                                if (void 0 !== h) {
                                    var l = h.normalized,
                                        u = h.itemSize;
                                    if (void 0 === (w = b.get(h))) continue;
                                    var p = w.buffer,
                                        d = w.type,
                                        y = w.bytesPerElement;
                                    if (h.isInterleavedBufferAttribute) {
                                        var x = h.data,
                                            _ = x.stride,
                                            M = h.offset;
                                        x && x.isInstancedInterleavedBuffer ? (g.enableAttributeAndDivisor(c, x.meshPerAttribute), void 0 === e.maxInstancedCount && (e.maxInstancedCount = x.meshPerAttribute * x.count)) : g.enableAttribute(c), f.bindBuffer(34962, p), f.vertexAttribPointer(c, u, d, l, _ * y, M * y)
                                    } else h.isInstancedBufferAttribute ? (g.enableAttributeAndDivisor(c, h.meshPerAttribute), void 0 === e.maxInstancedCount && (e.maxInstancedCount = h.meshPerAttribute * h.count)) : g.enableAttribute(c), f.bindBuffer(34962, p), f.vertexAttribPointer(c, u, d, l, 0, 0)
                                } else if ("instanceMatrix" === s) {
                                    var w;
                                    if (void 0 === (w = b.get(t.instanceMatrix))) continue;
                                    p = w.buffer, d = w.type;
                                    g.enableAttributeAndDivisor(c + 0, 1), g.enableAttributeAndDivisor(c + 1, 1), g.enableAttributeAndDivisor(c + 2, 1), g.enableAttributeAndDivisor(c + 3, 1), f.bindBuffer(34962, p), f.vertexAttribPointer(c + 0, 4, d, !1, 64, 0), f.vertexAttribPointer(c + 1, 4, d, !1, 64, 16), f.vertexAttribPointer(c + 2, 4, d, !1, 64, 32), f.vertexAttribPointer(c + 3, 4, d, !1, 64, 48)
                                } else if (void 0 !== o) {
                                    var S = o[s];
                                    if (void 0 !== S) switch (S.length) {
                                        case 2:
                                            f.vertexAttrib2fv(c, S);
                                            break;
                                        case 3:
                                            f.vertexAttrib3fv(c, S);
                                            break;
                                        case 4:
                                            f.vertexAttrib4fv(c, S);
                                            break;
                                        default:
                                            f.vertexAttrib1fv(c, S)
                                    }
                                }
                            }
                        }
                        g.disableUnusedAttributes()
                    }(r, i, n, s), null !== h && f.bindBuffer(34963, u.buffer));
                    var y = null !== h ? h.count : l.count,
                        x = i.drawRange.start * p,
                        _ = i.drawRange.count * p,
                        w = null !== a ? a.start * p : 0,
                        S = null !== a ? a.count * p : 1 / 0,
                        T = Math.max(x, w),
                        A = Math.min(y, x + _, w + S) - 1,
                        L = Math.max(0, A - T + 1);
                    if (0 !== L) {
                        if (r.isMesh) !0 === n.wireframe ? (g.setLineWidth(n.wireframeLinewidth * st()), d.setMode(1)) : d.setMode(4);
                        else if (r.isLine) {
                            var O = n.linewidth;
                            void 0 === O && (O = 1), g.setLineWidth(O * st()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3)
                        } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
                        r.isInstancedMesh ? d.renderInstances(i, T, L, r.count) : i.isInstancedBufferGeometry ? d.renderInstances(i, T, L, i.maxInstancedCount) : d.render(T, L)
                    }
                }, this.compile = function(t, e) {
                    (d = A.get(t, e)).init(), t.traverse((function(t) {
                        t.isLight && (d.pushLight(t), t.castShadow && d.pushShadow(t))
                    })), d.setupLights(e), t.traverse((function(e) {
                        if (e.material)
                            if (Array.isArray(e.material))
                                for (var i = 0; i < e.material.length; i++) At(e.material[i], t, e);
                            else At(e.material, t, e)
                    }))
                };
                var xt = null;
                var _t = new Cr;

                function bt(t, e, i, n) {
                    if (!1 !== t.visible) {
                        if (t.layers.test(e.layers))
                            if (t.isGroup) i = t.renderOrder;
                            else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
                        else if (t.isLight) d.pushLight(t), t.castShadow && d.pushShadow(t);
                        else if (t.isSprite) {
                            if (!t.frustumCulled || et.intersectsSprite(t)) {
                                n && ot.setFromMatrixPosition(t.matrixWorld).applyMatrix4(at);
                                var r = w.update(t);
                                (a = t.material).visible && p.push(t, r, a, i, ot.z, null)
                            }
                        } else if (t.isImmediateRenderObject) n && ot.setFromMatrixPosition(t.matrixWorld).applyMatrix4(at), p.push(t, null, t.material, i, ot.z, null);
                        else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== y.render.frame && (t.skeleton.update(), t.skeleton.frame = y.render.frame), !t.frustumCulled || et.intersectsObject(t))) {
                            n && ot.setFromMatrixPosition(t.matrixWorld).applyMatrix4(at);
                            r = w.update(t);
                            var a = t.material;
                            if (Array.isArray(a))
                                for (var o = r.groups, s = 0, c = o.length; s < c; s++) {
                                    var h = o[s],
                                        l = a[h.materialIndex];
                                    l && l.visible && p.push(t, r, l, i, ot.z, h)
                                } else a.visible && p.push(t, r, a, i, ot.z, null)
                        }
                        var u = t.children;
                        for (s = 0, c = u.length; s < c; s++) bt(u[s], e, i, n)
                    }
                }

                function St(t, e, i, n) {
                    for (var r = 0, a = t.length; r < a; r++) {
                        var o = t[r],
                            s = o.object,
                            c = o.geometry,
                            h = void 0 === n ? o.material : n,
                            l = o.group;
                        if (i.isArrayCamera)
                            if (k = i, lt.enabled && ut.isAvailable()) Tt(s, e, i, c, h, l);
                            else
                                for (var u = i.cameras, p = 0, f = u.length; p < f; p++) {
                                    var m = u[p];
                                    s.layers.test(m.layers) && (g.viewport(j.copy(m.viewport)), d.setupLights(m), Tt(s, e, m, c, h, l))
                                } else k = null, Tt(s, e, i, c, h, l)
                    }
                }

                function Tt(t, e, i, n, r, a) {
                    if (t.onBeforeRender(N, e, i, n, r, a), d = A.get(e, k || i), t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
                        var o = Lt(i, e, r, t);
                        g.setMaterial(r), V.geometry = null, V.program = null, V.wireframe = !1,
                            function(t, e) {
                                t.render((function(t) {
                                    N.renderBufferImmediate(t, e)
                                }))
                            }(t, o)
                    } else N.renderBufferDirect(i, e, n, r, t, a);
                    t.onAfterRender(N, e, i, n, r, a), d = A.get(e, k || i)
                }

                function At(t, e, i) {
                    var n = x.get(t),
                        r = d.state.lights,
                        a = d.state.shadowsArray,
                        o = r.state.version,
                        s = S.getParameters(t, r.state, a, e, it.numPlanes, it.numIntersection, i),
                        c = S.getProgramCacheKey(t, s),
                        h = n.program,
                        l = !0;
                    if (void 0 === h) t.addEventListener("dispose", mt);
                    else if (h.cacheKey !== c) gt(t);
                    else if (n.lightsStateVersion !== o) n.lightsStateVersion = o, l = !1;
                    else {
                        if (void 0 !== s.shaderID) return;
                        l = !1
                    }
                    if (l) {
                        if (s.shaderID) {
                            var u = Pr[s.shaderID];
                            n.shader = {
                                name: t.type,
                                uniforms: lr(u.uniforms),
                                vertexShader: u.vertexShader,
                                fragmentShader: u.fragmentShader
                            }
                        } else n.shader = {
                            name: t.type,
                            uniforms: t.uniforms,
                            vertexShader: t.vertexShader,
                            fragmentShader: t.fragmentShader
                        };
                        t.onBeforeCompile(n.shader, N), c = S.getProgramCacheKey(t, s), h = S.acquireProgram(t, n.shader, s, c), n.program = h, n.environment = t.isMeshStandardMaterial ? e.environment : null, n.outputEncoding = N.outputEncoding, t.program = h
                    }
                    var p = h.getAttributes();
                    if (t.morphTargets) {
                        t.numSupportedMorphTargets = 0;
                        for (var f = 0; f < N.maxMorphTargets; f++) p["morphTarget" + f] >= 0 && t.numSupportedMorphTargets++
                    }
                    if (t.morphNormals) {
                        t.numSupportedMorphNormals = 0;
                        for (f = 0; f < N.maxMorphNormals; f++) p["morphNormal" + f] >= 0 && t.numSupportedMorphNormals++
                    }
                    var m = n.shader.uniforms;
                    (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (n.numClippingPlanes = it.numPlanes, n.numIntersection = it.numIntersection, m.clippingPlanes = it.uniform), n.fog = e.fog, n.needsLights = function(t) {
                        return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
                    }(t), n.lightsStateVersion = o, n.needsLights && (m.ambientLightColor.value = r.state.ambient, m.lightProbe.value = r.state.probe, m.directionalLights.value = r.state.directional, m.spotLights.value = r.state.spot, m.rectAreaLights.value = r.state.rectArea, m.pointLights.value = r.state.point, m.hemisphereLights.value = r.state.hemi, m.directionalShadowMap.value = r.state.directionalShadowMap, m.directionalShadowMatrix.value = r.state.directionalShadowMatrix, m.spotShadowMap.value = r.state.spotShadowMap, m.spotShadowMatrix.value = r.state.spotShadowMatrix, m.pointShadowMap.value = r.state.pointShadowMap, m.pointShadowMatrix.value = r.state.pointShadowMatrix);
                    var v = n.program.getUniforms(),
                        g = Va.seqWithValue(v.seq, m);
                    n.uniformsList = g
                }

                function Lt(t, e, i, n) {
                    _.resetTextureUnits();
                    var r = e.fog,
                        a = i.isMeshStandardMaterial ? e.environment : null,
                        o = x.get(i),
                        s = d.state.lights;
                    if (nt && (rt || t !== G)) {
                        var c = t === G && i.id === B;
                        it.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, t, o, c)
                    }
                    i.version === o.__version && (void 0 === o.program ? i.needsUpdate = !0 : i.fog && o.fog !== r ? i.needsUpdate = !0 : o.environment !== a ? i.needsUpdate = !0 : o.needsLights && o.lightsStateVersion !== s.state.version ? i.needsUpdate = !0 : void 0 === o.numClippingPlanes || o.numClippingPlanes === it.numPlanes && o.numIntersection === it.numIntersection ? o.outputEncoding !== N.outputEncoding && (i.needsUpdate = !0) : i.needsUpdate = !0), i.version !== o.__version && (At(i, e, n), o.__version = i.version);
                    var h, u, p = !1,
                        m = !1,
                        y = !1,
                        b = o.program,
                        M = b.getUniforms(),
                        w = o.shader.uniforms;
                    if (g.useProgram(b.program) && (p = !0, m = !0, y = !0), i.id !== B && (B = i.id, m = !0), p || G !== t) {
                        if (b.numMultiviewViews > 0 ? ut.updateCameraProjectionMatricesUniform(t, M) : M.setValue(f, "projectionMatrix", t.projectionMatrix), v.logarithmicDepthBuffer && M.setValue(f, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), G !== t && (G = t, m = !0, y = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshStandardMaterial || i.envMap) {
                            var S = M.map.cameraPosition;
                            void 0 !== S && S.setValue(f, ot.setFromMatrixPosition(t.matrixWorld))
                        }(i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial) && M.setValue(f, "isOrthographic", !0 === t.isOrthographicCamera), (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && (b.numMultiviewViews > 0 ? ut.updateCameraViewMatricesUniform(t, M) : M.setValue(f, "viewMatrix", t.matrixWorldInverse))
                    }
                    if (i.skinning) {
                        M.setOptional(f, n, "bindMatrix"), M.setOptional(f, n, "bindMatrixInverse");
                        var T = n.skeleton;
                        if (T) {
                            var A = T.bones;
                            if (v.floatVertexTextures) {
                                if (void 0 === T.boneTexture) {
                                    var L = Math.sqrt(4 * A.length);
                                    L = Oe.ceilPowerOfTwo(L), L = Math.max(L, 4);
                                    var P = new Float32Array(L * L * 4);
                                    P.set(T.boneMatrices);
                                    var C = new Mr(P, L, L, Et, Mt);
                                    T.boneMatrices = P, T.boneTexture = C, T.boneTextureSize = L
                                }
                                M.setValue(f, "boneTexture", T.boneTexture, _), M.setValue(f, "boneTextureSize", T.boneTextureSize)
                            } else M.setOptional(f, T, "boneMatrices")
                        }
                    }
                    return (m || o.receiveShadow !== n.receiveShadow) && (o.receiveShadow = n.receiveShadow, M.setValue(f, "receiveShadow", n.receiveShadow)), m && (M.setValue(f, "toneMappingExposure", N.toneMappingExposure), M.setValue(f, "toneMappingWhitePoint", N.toneMappingWhitePoint), o.needsLights && (u = y, (h = w).ambientLightColor.needsUpdate = u, h.lightProbe.needsUpdate = u, h.directionalLights.needsUpdate = u, h.pointLights.needsUpdate = u, h.spotLights.needsUpdate = u, h.rectAreaLights.needsUpdate = u, h.hemisphereLights.needsUpdate = u), r && i.fog && function(t, e) {
                        t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
                    }(w, r), i.isMeshBasicMaterial ? Pt(w, i) : i.isMeshLambertMaterial ? (Pt(w, i), function(t, e) {
                        e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
                    }(w, i)) : i.isMeshToonMaterial ? (Pt(w, i), function(t, e) {
                        t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4), e.gradientMap && (t.gradientMap.value = e.gradientMap);
                        e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                        e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === l && (t.bumpScale.value *= -1));
                        e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === l && t.normalScale.value.negate());
                        e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
                    }(w, i)) : i.isMeshPhongMaterial ? (Pt(w, i), function(t, e) {
                        t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                        e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === l && (t.bumpScale.value *= -1));
                        e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === l && t.normalScale.value.negate());
                        e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
                    }(w, i)) : i.isMeshStandardMaterial ? (Pt(w, i, a), i.isMeshPhysicalMaterial ? function(t, e, i) {
                        Ct(t, e, i), t.reflectivity.value = e.reflectivity, t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.sheen && t.sheen.value.copy(e.sheen);
                        e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, e.side === l && t.clearcoatNormalScale.value.negate());
                        t.transparency.value = e.transparency
                    }(w, i, a) : Ct(w, i, a)) : i.isMeshMatcapMaterial ? (Pt(w, i), function(t, e) {
                        e.matcap && (t.matcap.value = e.matcap);
                        e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === l && (t.bumpScale.value *= -1));
                        e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === l && t.normalScale.value.negate());
                        e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
                    }(w, i)) : i.isMeshDepthMaterial ? (Pt(w, i), function(t, e) {
                        e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
                    }(w, i)) : i.isMeshDistanceMaterial ? (Pt(w, i), function(t, e) {
                        e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
                        t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
                    }(w, i)) : i.isMeshNormalMaterial ? (Pt(w, i), function(t, e) {
                        e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === l && (t.bumpScale.value *= -1));
                        e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === l && t.normalScale.value.negate());
                        e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
                    }(w, i)) : i.isLineBasicMaterial ? (function(t, e) {
                        t.diffuse.value.copy(e.color), t.opacity.value = e.opacity
                    }(w, i), i.isLineDashedMaterial && function(t, e) {
                        t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
                    }(w, i)) : i.isPointsMaterial ? function(t, e) {
                        t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * Y, t.scale.value = .5 * X, e.map && (t.map.value = e.map);
                        e.alphaMap && (t.alphaMap.value = e.alphaMap);
                        var i;
                        e.map ? i = e.map : e.alphaMap && (i = e.alphaMap);
                        void 0 !== i && (!0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix))
                    }(w, i) : i.isSpriteMaterial ? function(t, e) {
                        t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map);
                        e.alphaMap && (t.alphaMap.value = e.alphaMap);
                        var i;
                        e.map ? i = e.map : e.alphaMap && (i = e.alphaMap);
                        void 0 !== i && (!0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix))
                    }(w, i) : i.isShadowMaterial && (w.color.value.copy(i.color), w.opacity.value = i.opacity), void 0 !== w.ltc_1 && (w.ltc_1.value = Lr.LTC_1), void 0 !== w.ltc_2 && (w.ltc_2.value = Lr.LTC_2), Va.upload(f, o.uniformsList, w, _), i.isShaderMaterial && (i.uniformsNeedUpdate = !1)), i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (Va.upload(f, o.uniformsList, w, _), i.uniformsNeedUpdate = !1), i.isSpriteMaterial && M.setValue(f, "center", n.center), b.numMultiviewViews > 0 ? ut.updateObjectMatricesUniforms(n, t, M) : (M.setValue(f, "modelViewMatrix", n.modelViewMatrix), M.setValue(f, "normalMatrix", n.normalMatrix)), M.setValue(f, "modelMatrix", n.matrixWorld), b
                }

                function Pt(t, e, i) {
                    t.opacity.value = e.opacity, e.color && t.diffuse.value.copy(e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap);
                    var n, r, a = e.envMap || i;
                    a && (t.envMap.value = a, t.flipEnvMap.value = a.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio, t.maxMipLevel.value = x.get(a).__maxMipLevel), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity), e.map ? n = e.map : e.specularMap ? n = e.specularMap : e.displacementMap ? n = e.displacementMap : e.normalMap ? n = e.normalMap : e.bumpMap ? n = e.bumpMap : e.roughnessMap ? n = e.roughnessMap : e.metalnessMap ? n = e.metalnessMap : e.alphaMap ? n = e.alphaMap : e.emissiveMap && (n = e.emissiveMap), void 0 !== n && (n.isWebGLRenderTarget && (n = n.texture), !0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix)), e.aoMap ? r = e.aoMap : e.lightMap && (r = e.lightMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), t.uv2Transform.value.copy(r.matrix))
                }

                function Ct(t, e, i) {
                    t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === l && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === l && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), (e.envMap || i) && (t.envMapIntensity.value = e.envMapIntensity)
                }
                _t.setAnimationLoop((function(t) {
                    lt.isPresenting || xt && xt(t)
                })), "undefined" != typeof window && _t.setContext(window), this.setAnimationLoop = function(t) {
                    xt = t, lt.setAnimationLoop(t), _t.start()
                }, this.render = function(t, e) {
                    var i, n;
                    if (void 0 !== arguments[2] && (i = arguments[2]), void 0 !== arguments[3] && (n = arguments[3]), e && e.isCamera && !I) {
                        V.geometry = null, V.program = null, V.wireframe = !1, B = -1, G = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), lt.enabled && lt.isPresenting && (e = lt.getCamera(e)), (d = A.get(t, e)).init(), t.onBeforeRender(N, t, e, i || F), at.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), et.setFromMatrix(at), rt = this.localClippingEnabled, nt = it.init(this.clippingPlanes, rt, e), (p = T.get(t, e)).init(), bt(t, e, 0, N.sortObjects), !0 === N.sortObjects && p.sort(Z, Q), nt && it.beginShadows();
                        var r = d.state.shadowsArray;
                        pt.render(r, t, e), d.setupLights(e), nt && it.endShadows(), this.info.autoReset && this.info.reset(), void 0 !== i && this.setRenderTarget(i), lt.enabled && ut.isAvailable() && ut.attachCamera(e), L.render(p, t, e, n);
                        var a = p.opaque,
                            o = p.transparent;
                        if (t.overrideMaterial) {
                            var s = t.overrideMaterial;
                            a.length && St(a, t, e, s), o.length && St(o, t, e, s)
                        } else a.length && St(a, t, e), o.length && St(o, t, e);
                        t.onAfterRender(N, t, e), null !== F && (_.updateRenderTargetMipmap(F), _.updateMultisampleRenderTarget(F)), g.buffers.depth.setTest(!0), g.buffers.depth.setMask(!0), g.buffers.color.setMask(!0), g.setPolygonOffset(!1), lt.enabled && ut.isAvailable() && ut.detachCamera(e), p = null, d = null
                    }
                }, this.setFramebuffer = function(t) {
                    D !== t && null === F && f.bindFramebuffer(36160, t), D = t
                }, this.getActiveCubeFace = function() {
                    return z
                }, this.getActiveMipmapLevel = function() {
                    return R
                }, this.getRenderTarget = function() {
                    return F
                }, this.setRenderTarget = function(t, e, i) {
                    F = t, z = e, R = i, t && void 0 === x.get(t).__webglFramebuffer && _.setupRenderTarget(t);
                    var n = D,
                        r = !1;
                    if (t) {
                        var a = x.get(t).__webglFramebuffer;
                        t.isWebGLRenderTargetCube ? (n = a[e || 0], r = !0) : n = t.isWebGLMultisampleRenderTarget ? x.get(t).__webglMultisampledFramebuffer : a, j.copy(t.viewport), W.copy(t.scissor), H = t.scissorTest
                    } else j.copy(K).multiplyScalar(Y).floor(), W.copy($).multiplyScalar(Y).floor(), H = tt;
                    if (U !== n && (f.bindFramebuffer(36160, n), U = n), g.viewport(j), g.scissor(W), g.setScissorTest(H), r) {
                        var o = x.get(t.texture);
                        f.framebufferTexture2D(36160, 36064, 34069 + (e || 0), o.__webglTexture, i || 0)
                    }
                }, this.readRenderTargetPixels = function(t, e, i, n, r, a, o) {
                    if (t && t.isWebGLRenderTarget) {
                        var s = x.get(t).__webglFramebuffer;
                        if (t.isWebGLRenderTargetCube && void 0 !== o && (s = s[o]), s) {
                            var c = !1;
                            s !== U && (f.bindFramebuffer(36160, s), c = !0);
                            try {
                                var h = t.texture,
                                    l = h.format,
                                    u = h.type;
                                if (l !== Et && O.convert(l) !== f.getParameter(35739)) return;
                                if (!(u === vt || O.convert(u) === f.getParameter(35738) || u === Mt && (v.isWebGL2 || m.get("OES_texture_float") || m.get("WEBGL_color_buffer_float")) || u === wt && (v.isWebGL2 ? m.get("EXT_color_buffer_float") : m.get("EXT_color_buffer_half_float")))) return;
                                36053 === f.checkFramebufferStatus(36160) && e >= 0 && e <= t.width - n && i >= 0 && i <= t.height - r && f.readPixels(e, i, n, r, O.convert(l), O.convert(u), a)
                            } finally {
                                c && f.bindFramebuffer(36160, U)
                            }
                        }
                    }
                }, this.copyFramebufferToTexture = function(t, e, i) {
                    void 0 === i && (i = 0);
                    var n = Math.pow(2, -i),
                        r = Math.floor(e.image.width * n),
                        a = Math.floor(e.image.height * n),
                        o = O.convert(e.format);
                    _.setTexture2D(e, 0), f.copyTexImage2D(3553, i, o, t.x, t.y, r, a, 0), g.unbindTexture()
                }, this.copyTextureToTexture = function(t, e, i, n) {
                    var r = e.image.width,
                        a = e.image.height,
                        o = O.convert(i.format),
                        s = O.convert(i.type);
                    _.setTexture2D(i, 0), e.isDataTexture ? f.texSubImage2D(3553, n || 0, t.x, t.y, r, a, o, s, e.image.data) : f.texSubImage2D(3553, n || 0, t.x, t.y, o, s, e.image), g.unbindTexture()
                }, this.initTexture = function(t) {
                    _.setTexture2D(t, 0), g.unbindTexture()
                }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                    detail: this
                }))
            }

            function Oo(t, e) {
                this.name = "", this.color = new hn(t), this.density = void 0 !== e ? e : 25e-5
            }

            function No(t, e, i) {
                this.name = "", this.color = new hn(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== i ? i : 1e3
            }

            function Io(t, e) {
                this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = Le, this.updateRange = {
                    offset: 0,
                    count: -1
                }, this.version = 0
            }
            To.prototype = Object.assign(Object.create(We.prototype), {
                constructor: To,
                isWebGLMultiviewRenderTarget: !0,
                copy: function(t) {
                    return We.prototype.copy.call(this, t), this.numViews = t.numViews, this
                },
                setNumViews: function(t) {
                    return this.numViews !== t && (this.numViews = t, this.dispose()), this
                }
            }), Lo.prototype = Object.assign(Object.create(gr.prototype), {
                constructor: Lo,
                isArrayCamera: !0
            }), Po.prototype = Object.assign(Object.create(gi.prototype), {
                constructor: Po,
                isGroup: !0
            }), Object.assign(Co.prototype, Pe.prototype), Object.assign(Oo.prototype, {
                isFogExp2: !0,
                clone: function() {
                    return new Oo(this.color, this.density)
                },
                toJSON: function() {
                    return {
                        type: "FogExp2",
                        color: this.color.getHex(),
                        density: this.density
                    }
                }
            }), Object.assign(No.prototype, {
                isFog: !0,
                clone: function() {
                    return new No(this.color, this.near, this.far)
                },
                toJSON: function() {
                    return {
                        type: "Fog",
                        color: this.color.getHex(),
                        near: this.near,
                        far: this.far
                    }
                }
            }), Object.defineProperty(Io.prototype, "needsUpdate", {
                set: function(t) {
                    !0 === t && this.version++
                }
            }), Object.assign(Io.prototype, {
                isInterleavedBuffer: !0,
                onUploadCallback: function() {},
                setUsage: function(t) {
                    return this.usage = t, this
                },
                copy: function(t) {
                    return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this
                },
                copyAt: function(t, e, i) {
                    t *= this.stride, i *= e.stride;
                    for (var n = 0, r = this.stride; n < r; n++) this.array[t + n] = e.array[i + n];
                    return this
                },
                set: function(t, e) {
                    return void 0 === e && (e = 0), this.array.set(t, e), this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                onUpload: function(t) {
                    return this.onUploadCallback = t, this
                }
            });
            var Do, zo = new Re;

            function Ro(t, e, i, n) {
                this.data = t, this.itemSize = e, this.offset = i, this.normalized = !0 === n
            }

            function Fo(t) {
                mn.call(this), this.type = "SpriteMaterial", this.color = new hn(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(t)
            }
            Object.defineProperties(Ro.prototype, {
                count: {
                    get: function() {
                        return this.data.count
                    }
                },
                array: {
                    get: function() {
                        return this.data.array
                    }
                }
            }), Object.assign(Ro.prototype, {
                isInterleavedBufferAttribute: !0,
                applyMatrix4: function(t) {
                    for (var e = 0, i = this.data.count; e < i; e++) zo.x = this.getX(e), zo.y = this.getY(e), zo.z = this.getZ(e), zo.applyMatrix4(t), this.setXYZ(e, zo.x, zo.y, zo.z);
                    return this
                },
                setX: function(t, e) {
                    return this.data.array[t * this.data.stride + this.offset] = e, this
                },
                setY: function(t, e) {
                    return this.data.array[t * this.data.stride + this.offset + 1] = e, this
                },
                setZ: function(t, e) {
                    return this.data.array[t * this.data.stride + this.offset + 2] = e, this
                },
                setW: function(t, e) {
                    return this.data.array[t * this.data.stride + this.offset + 3] = e, this
                },
                getX: function(t) {
                    return this.data.array[t * this.data.stride + this.offset]
                },
                getY: function(t) {
                    return this.data.array[t * this.data.stride + this.offset + 1]
                },
                getZ: function(t) {
                    return this.data.array[t * this.data.stride + this.offset + 2]
                },
                getW: function(t) {
                    return this.data.array[t * this.data.stride + this.offset + 3]
                },
                setXY: function(t, e, i) {
                    return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this
                },
                setXYZ: function(t, e, i, n) {
                    return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this
                },
                setXYZW: function(t, e, i, n, r) {
                    return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this
                }
            }), Fo.prototype = Object.create(mn.prototype), Fo.prototype.constructor = Fo, Fo.prototype.isSpriteMaterial = !0, Fo.prototype.copy = function(t) {
                return mn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this
            };
            var Uo = new Re,
                Bo = new Re,
                Vo = new Re,
                Go = new Ne,
                ko = new Ne,
                jo = new $e,
                Wo = new Re,
                Ho = new Re,
                qo = new Re,
                Xo = new Ne,
                Yo = new Ne,
                Jo = new Ne;

            function Zo(t) {
                if (gi.call(this), this.type = "Sprite", void 0 === Do) {
                    Do = new Fn;
                    var e = new Io(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
                    Do.setIndex([0, 1, 2, 0, 2, 3]), Do.setAttribute("position", new Ro(e, 3, 0, !1)), Do.setAttribute("uv", new Ro(e, 2, 3, !1))
                }
                this.geometry = Do, this.material = void 0 !== t ? t : new Fo, this.center = new Ne(.5, .5)
            }

            function Qo(t, e, i, n, r, a) {
                Go.subVectors(t, i).addScalar(.5).multiply(n), void 0 !== r ? (ko.x = a * Go.x - r * Go.y, ko.y = r * Go.x + a * Go.y) : ko.copy(Go), t.copy(e), t.x += ko.x, t.y += ko.y, t.applyMatrix4(jo)
            }
            Zo.prototype = Object.assign(Object.create(gi.prototype), {
                constructor: Zo,
                isSprite: !0,
                raycast: function(t, e) {
                    t.camera, Bo.setFromMatrixScale(this.matrixWorld), jo.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), Vo.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && Bo.multiplyScalar(-Vo.z);
                    var i, n, r = this.material.rotation;
                    0 !== r && (n = Math.cos(r), i = Math.sin(r));
                    var a = this.center;
                    Qo(Wo.set(-.5, -.5, 0), Vo, a, Bo, i, n), Qo(Ho.set(.5, -.5, 0), Vo, a, Bo, i, n), Qo(qo.set(.5, .5, 0), Vo, a, Bo, i, n), Xo.set(0, 0), Yo.set(1, 0), Jo.set(1, 1);
                    var o = t.ray.intersectTriangle(Wo, Ho, qo, !1, Uo);
                    if (null !== o || (Qo(Ho.set(-.5, .5, 0), Vo, a, Bo, i, n), Yo.set(0, 1), null !== (o = t.ray.intersectTriangle(Wo, qo, Ho, !1, Uo)))) {
                        var s = t.ray.origin.distanceTo(Uo);
                        s < t.near || s > t.far || e.push({
                            distance: s,
                            point: Uo.clone(),
                            uv: an.getUV(Uo, Wo, Ho, qo, Xo, Yo, Jo, new Ne),
                            face: null,
                            object: this
                        })
                    }
                },
                clone: function() {
                    return new this.constructor(this.material).copy(this)
                },
                copy: function(t) {
                    return gi.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this
                }
            });
            var Ko = new Re,
                $o = new Re;

            function ts() {
                gi.call(this), this.type = "LOD", Object.defineProperties(this, {
                    levels: {
                        enumerable: !0,
                        value: []
                    }
                }), this.autoUpdate = !0
            }

            function es(t, e) {
                t && t.isGeometry, er.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new $e, this.bindMatrixInverse = new $e
            }
            ts.prototype = Object.assign(Object.create(gi.prototype), {
                constructor: ts,
                isLOD: !0,
                copy: function(t) {
                    gi.prototype.copy.call(this, t, !1);
                    for (var e = t.levels, i = 0, n = e.length; i < n; i++) {
                        var r = e[i];
                        this.addLevel(r.object.clone(), r.distance)
                    }
                    return this.autoUpdate = t.autoUpdate, this
                },
                addLevel: function(t, e) {
                    void 0 === e && (e = 0), e = Math.abs(e);
                    for (var i = this.levels, n = 0; n < i.length && !(e < i[n].distance); n++);
                    return i.splice(n, 0, {
                        distance: e,
                        object: t
                    }), this.add(t), this
                },
                getObjectForDistance: function(t) {
                    var e = this.levels;
                    if (e.length > 0) {
                        for (var i = 1, n = e.length; i < n && !(t < e[i].distance); i++);
                        return e[i - 1].object
                    }
                    return null
                },
                raycast: function(t, e) {
                    if (this.levels.length > 0) {
                        Ko.setFromMatrixPosition(this.matrixWorld);
                        var i = t.ray.origin.distanceTo(Ko);
                        this.getObjectForDistance(i).raycast(t, e)
                    }
                },
                update: function(t) {
                    var e = this.levels;
                    if (e.length > 1) {
                        Ko.setFromMatrixPosition(t.matrixWorld), $o.setFromMatrixPosition(this.matrixWorld);
                        var i = Ko.distanceTo($o);
                        e[0].object.visible = !0;
                        for (var n = 1, r = e.length; n < r && i >= e[n].distance; n++) e[n - 1].object.visible = !1, e[n].object.visible = !0;
                        for (; n < r; n++) e[n].object.visible = !1
                    }
                },
                toJSON: function(t) {
                    var e = gi.prototype.toJSON.call(this, t);
                    !1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = [];
                    for (var i = this.levels, n = 0, r = i.length; n < r; n++) {
                        var a = i[n];
                        e.object.levels.push({
                            object: a.object.uuid,
                            distance: a.distance
                        })
                    }
                    return e
                }
            }), es.prototype = Object.assign(Object.create(er.prototype), {
                constructor: es,
                isSkinnedMesh: !0,
                bind: function(t, e) {
                    this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
                },
                pose: function() {
                    this.skeleton.pose()
                },
                normalizeSkinWeights: function() {
                    for (var t = new je, e = this.geometry.attributes.skinWeight, i = 0, n = e.count; i < n; i++) {
                        t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.w = e.getW(i);
                        var r = 1 / t.manhattanLength();
                        r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1, 0, 0, 0), e.setXYZW(i, t.x, t.y, t.z, t.w)
                    }
                },
                updateMatrixWorld: function(t) {
                    er.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode && this.bindMatrixInverse.getInverse(this.bindMatrix)
                },
                clone: function() {
                    return new this.constructor(this.geometry, this.material).copy(this)
                }
            });
            var is = new $e,
                ns = new $e;

            function rs(t, e) {
                if (t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), this.frame = -1, void 0 === e) this.calculateInverses();
                else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
                else {
                    this.boneInverses = [];
                    for (var i = 0, n = this.bones.length; i < n; i++) this.boneInverses.push(new $e)
                }
            }

            function as() {
                gi.call(this), this.type = "Bone"
            }
            Object.assign(rs.prototype, {
                calculateInverses: function() {
                    this.boneInverses = [];
                    for (var t = 0, e = this.bones.length; t < e; t++) {
                        var i = new $e;
                        this.bones[t] && i.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(i)
                    }
                },
                pose: function() {
                    var t, e, i;
                    for (e = 0, i = this.bones.length; e < i; e++)(t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
                    for (e = 0, i = this.bones.length; e < i; e++)(t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
                },
                update: function() {
                    for (var t = this.bones, e = this.boneInverses, i = this.boneMatrices, n = this.boneTexture, r = 0, a = t.length; r < a; r++) {
                        var o = t[r] ? t[r].matrixWorld : ns;
                        is.multiplyMatrices(o, e[r]), is.toArray(i, 16 * r)
                    }
                    void 0 !== n && (n.needsUpdate = !0)
                },
                clone: function() {
                    return new rs(this.bones, this.boneInverses)
                },
                getBoneByName: function(t) {
                    for (var e = 0, i = this.bones.length; e < i; e++) {
                        var n = this.bones[e];
                        if (n.name === t) return n
                    }
                }
            }), as.prototype = Object.assign(Object.create(gi.prototype), {
                constructor: as,
                isBone: !0
            });
            var os = new $e,
                ss = new $e,
                cs = [],
                hs = new er;

            function ls(t, e, i) {
                er.call(this, t, e), this.instanceMatrix = new yn(new Float32Array(16 * i), 16), this.count = i
            }

            function us(t) {
                mn.call(this), this.type = "LineBasicMaterial", this.color = new hn(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(t)
            }
            ls.prototype = Object.assign(Object.create(er.prototype), {
                constructor: ls,
                isInstancedMesh: !0,
                getMatrixAt: function(t, e) {
                    e.fromArray(this.instanceMatrix.array, 16 * t)
                },
                raycast: function(t, e) {
                    var i = this.matrixWorld,
                        n = this.count;
                    if (hs.geometry = this.geometry, hs.material = this.material, void 0 !== hs.material)
                        for (var r = 0; r < n; r++) this.getMatrixAt(r, os), ss.multiplyMatrices(i, os), hs.matrixWorld = ss, hs.raycast(t, cs), cs.length > 0 && (cs[0].instanceId = r, cs[0].object = this, e.push(cs[0]), cs.length = 0)
                },
                setMatrixAt: function(t, e) {
                    e.toArray(this.instanceMatrix.array, 16 * t)
                },
                updateMorphTargets: function() {}
            }), us.prototype = Object.create(mn.prototype), us.prototype.constructor = us, us.prototype.isLineBasicMaterial = !0, us.prototype.copy = function(t) {
                return mn.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
            };
            var ps = new Re,
                ds = new Re,
                fs = new $e,
                ms = new ji,
                vs = new zi;

            function gs(t, e, i) {
                gi.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new Fn, this.material = void 0 !== e ? e : new us({
                    color: 16777215 * Math.random()
                })
            }
            gs.prototype = Object.assign(Object.create(gi.prototype), {
                constructor: gs,
                isLine: !0,
                computeLineDistances: function() {
                    var t = this.geometry;
                    if (t.isBufferGeometry) {
                        if (null === t.index) {
                            for (var e = t.attributes.position, i = [0], n = 1, r = e.count; n < r; n++) ps.fromBufferAttribute(e, n - 1), ds.fromBufferAttribute(e, n), i[n] = i[n - 1], i[n] += ps.distanceTo(ds);
                            t.setAttribute("lineDistance", new An(i, 1))
                        }
                    } else if (t.isGeometry) {
                        var a = t.vertices;
                        (i = t.lineDistances)[0] = 0;
                        for (n = 1, r = a.length; n < r; n++) i[n] = i[n - 1], i[n] += a[n - 1].distanceTo(a[n])
                    }
                    return this
                },
                raycast: function(t, e) {
                    var i = t.linePrecision,
                        n = this.geometry,
                        r = this.matrixWorld;
                    if (null === n.boundingSphere && n.computeBoundingSphere(), vs.copy(n.boundingSphere), vs.applyMatrix4(r), vs.radius += i, !1 !== t.ray.intersectsSphere(vs)) {
                        fs.getInverse(r), ms.copy(t.ray).applyMatrix4(fs);
                        var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                            o = a * a,
                            s = new Re,
                            c = new Re,
                            h = new Re,
                            l = new Re,
                            u = this && this.isLineSegments ? 2 : 1;
                        if (n.isBufferGeometry) {
                            var p = n.index,
                                d = n.attributes.position.array;
                            if (null !== p)
                                for (var f = p.array, m = 0, v = f.length - 1; m < v; m += u) {
                                    var g = f[m],
                                        y = f[m + 1];
                                    if (s.fromArray(d, 3 * g), c.fromArray(d, 3 * y), !(ms.distanceSqToSegment(s, c, l, h) > o)) l.applyMatrix4(this.matrixWorld), (b = t.ray.origin.distanceTo(l)) < t.near || b > t.far || e.push({
                                        distance: b,
                                        point: h.clone().applyMatrix4(this.matrixWorld),
                                        index: m,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                } else
                                    for (m = 0, v = d.length / 3 - 1; m < v; m += u) {
                                        if (s.fromArray(d, 3 * m), c.fromArray(d, 3 * m + 3), !(ms.distanceSqToSegment(s, c, l, h) > o)) l.applyMatrix4(this.matrixWorld), (b = t.ray.origin.distanceTo(l)) < t.near || b > t.far || e.push({
                                            distance: b,
                                            point: h.clone().applyMatrix4(this.matrixWorld),
                                            index: m,
                                            face: null,
                                            faceIndex: null,
                                            object: this
                                        })
                                    }
                        } else if (n.isGeometry) {
                            var x = n.vertices,
                                _ = x.length;
                            for (m = 0; m < _ - 1; m += u) {
                                var b;
                                if (!(ms.distanceSqToSegment(x[m], x[m + 1], l, h) > o)) l.applyMatrix4(this.matrixWorld), (b = t.ray.origin.distanceTo(l)) < t.near || b > t.far || e.push({
                                    distance: b,
                                    point: h.clone().applyMatrix4(this.matrixWorld),
                                    index: m,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                    }
                },
                clone: function() {
                    return new this.constructor(this.geometry, this.material).copy(this)
                }
            });
            var ys = new Re,
                xs = new Re;

            function _s(t, e) {
                gs.call(this, t, e), this.type = "LineSegments"
            }

            function bs(t, e) {
                gs.call(this, t, e), this.type = "LineLoop"
            }

            function Ms(t) {
                mn.call(this), this.type = "PointsMaterial", this.color = new hn(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(t)
            }
            _s.prototype = Object.assign(Object.create(gs.prototype), {
                constructor: _s,
                isLineSegments: !0,
                computeLineDistances: function() {
                    var t = this.geometry;
                    if (t.isBufferGeometry) {
                        if (null === t.index) {
                            for (var e = t.attributes.position, i = [], n = 0, r = e.count; n < r; n += 2) ys.fromBufferAttribute(e, n), xs.fromBufferAttribute(e, n + 1), i[n] = 0 === n ? 0 : i[n - 1], i[n + 1] = i[n] + ys.distanceTo(xs);
                            t.setAttribute("lineDistance", new An(i, 1))
                        }
                    } else if (t.isGeometry) {
                        var a = t.vertices;
                        for (i = t.lineDistances, n = 0, r = a.length; n < r; n += 2) ys.copy(a[n]), xs.copy(a[n + 1]), i[n] = 0 === n ? 0 : i[n - 1], i[n + 1] = i[n] + ys.distanceTo(xs)
                    }
                    return this
                }
            }), bs.prototype = Object.assign(Object.create(gs.prototype), {
                constructor: bs,
                isLineLoop: !0
            }), Ms.prototype = Object.create(mn.prototype), Ms.prototype.constructor = Ms, Ms.prototype.isPointsMaterial = !0, Ms.prototype.copy = function(t) {
                return mn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this
            };
            var ws = new $e,
                Ss = new ji,
                Ts = new zi,
                As = new Re;

            function Ls(t, e) {
                gi.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new Fn, this.material = void 0 !== e ? e : new Ms({
                    color: 16777215 * Math.random()
                }), this.updateMorphTargets()
            }

            function Ps(t, e, i, n, r, a, o) {
                var s = Ss.distanceSqToPoint(t);
                if (s < i) {
                    var c = new Re;
                    Ss.closestPointToPoint(t, c), c.applyMatrix4(n);
                    var h = r.ray.origin.distanceTo(c);
                    if (h < r.near || h > r.far) return;
                    a.push({
                        distance: h,
                        distanceToRay: Math.sqrt(s),
                        point: c,
                        index: e,
                        face: null,
                        object: o
                    })
                }
            }

            function Cs(t, e, i, n, r, a, o, s, c) {
                ke.call(this, t, e, i, n, r, a, o, s, c), this.format = void 0 !== o ? o : Ct, this.minFilter = void 0 !== a ? a : dt, this.magFilter = void 0 !== r ? r : dt, this.generateMipmaps = !1
            }

            function Es(t, e, i, n, r, a, o, s, c, h, l, u) {
                ke.call(this, null, a, o, s, c, h, n, r, l, u), this.image = {
                    width: e,
                    height: i
                }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
            }

            function Os(t, e, i, n, r, a, o, s, c) {
                ke.call(this, t, e, i, n, r, a, o, s, c), this.needsUpdate = !0
            }

            function Ns(t, e, i, n, r, a, o, s, c, h) {
                if ((h = void 0 !== h ? h : Dt) !== Dt && h !== zt) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
                void 0 === i && h === Dt && (i = xt), void 0 === i && h === zt && (i = Lt), ke.call(this, null, n, r, a, o, s, h, i, c), this.image = {
                    width: t,
                    height: e
                }, this.magFilter = void 0 !== o ? o : lt, this.minFilter = void 0 !== s ? s : lt, this.flipY = !1, this.generateMipmaps = !1
            }

            function Is(t) {
                Fn.call(this), this.type = "WireframeGeometry";
                var e, i, n, r, a, o, s, c, h, l, u = [],
                    p = [0, 0],
                    d = {},
                    f = ["a", "b", "c"];
                if (t && t.isGeometry) {
                    var m = t.faces;
                    for (e = 0, n = m.length; e < n; e++) {
                        var v = m[e];
                        for (i = 0; i < 3; i++) s = v[f[i]], c = v[f[(i + 1) % 3]], p[0] = Math.min(s, c), p[1] = Math.max(s, c), void 0 === d[h = p[0] + "," + p[1]] && (d[h] = {
                            index1: p[0],
                            index2: p[1]
                        })
                    }
                    for (h in d) o = d[h], l = t.vertices[o.index1], u.push(l.x, l.y, l.z), l = t.vertices[o.index2], u.push(l.x, l.y, l.z)
                } else if (t && t.isBufferGeometry) {
                    var g, y, x, _, b, M, w;
                    if (l = new Re, null !== t.index) {
                        for (g = t.attributes.position, y = t.index, 0 === (x = t.groups).length && (x = [{
                                start: 0,
                                count: y.count,
                                materialIndex: 0
                            }]), r = 0, a = x.length; r < a; ++r)
                            for (e = b = (_ = x[r]).start, n = b + _.count; e < n; e += 3)
                                for (i = 0; i < 3; i++) s = y.getX(e + i), c = y.getX(e + (i + 1) % 3), p[0] = Math.min(s, c), p[1] = Math.max(s, c), void 0 === d[h = p[0] + "," + p[1]] && (d[h] = {
                                    index1: p[0],
                                    index2: p[1]
                                });
                        for (h in d) o = d[h], l.fromBufferAttribute(g, o.index1), u.push(l.x, l.y, l.z), l.fromBufferAttribute(g, o.index2), u.push(l.x, l.y, l.z)
                    } else
                        for (e = 0, n = (g = t.attributes.position).count / 3; e < n; e++)
                            for (i = 0; i < 3; i++) M = 3 * e + i, l.fromBufferAttribute(g, M), u.push(l.x, l.y, l.z), w = 3 * e + (i + 1) % 3, l.fromBufferAttribute(g, w), u.push(l.x, l.y, l.z)
                }
                this.setAttribute("position", new An(u, 3))
            }

            function Ds(t, e, i) {
                cr.call(this), this.type = "ParametricGeometry", this.parameters = {
                    func: t,
                    slices: e,
                    stacks: i
                }, this.fromBufferGeometry(new zs(t, e, i)), this.mergeVertices()
            }

            function zs(t, e, i) {
                Fn.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
                    func: t,
                    slices: e,
                    stacks: i
                };
                var n, r, a = [],
                    o = [],
                    s = [],
                    c = [],
                    h = new Re,
                    l = new Re,
                    u = new Re,
                    p = new Re,
                    d = new Re;
                t.length;
                var f = e + 1;
                for (n = 0; n <= i; n++) {
                    var m = n / i;
                    for (r = 0; r <= e; r++) {
                        var v = r / e;
                        t(v, m, l), o.push(l.x, l.y, l.z), v - 1e-5 >= 0 ? (t(v - 1e-5, m, u), p.subVectors(l, u)) : (t(v + 1e-5, m, u), p.subVectors(u, l)), m - 1e-5 >= 0 ? (t(v, m - 1e-5, u), d.subVectors(l, u)) : (t(v, m + 1e-5, u), d.subVectors(u, l)), h.crossVectors(p, d).normalize(), s.push(h.x, h.y, h.z), c.push(v, m)
                    }
                }
                for (n = 0; n < i; n++)
                    for (r = 0; r < e; r++) {
                        var g = n * f + r,
                            y = n * f + r + 1,
                            x = (n + 1) * f + r + 1,
                            _ = (n + 1) * f + r;
                        a.push(g, y, _), a.push(y, x, _)
                    }
                this.setIndex(a), this.setAttribute("position", new An(o, 3)), this.setAttribute("normal", new An(s, 3)), this.setAttribute("uv", new An(c, 2))
            }

            function Rs(t, e, i, n) {
                cr.call(this), this.type = "PolyhedronGeometry", this.parameters = {
                    vertices: t,
                    indices: e,
                    radius: i,
                    detail: n
                }, this.fromBufferGeometry(new Fs(t, e, i, n)), this.mergeVertices()
            }

            function Fs(t, e, i, n) {
                Fn.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
                    vertices: t,
                    indices: e,
                    radius: i,
                    detail: n
                }, i = i || 1;
                var r = [],
                    a = [];

                function o(t, e, i, n) {
                    var r, a, o = Math.pow(2, n),
                        c = [];
                    for (r = 0; r <= o; r++) {
                        c[r] = [];
                        var h = t.clone().lerp(i, r / o),
                            l = e.clone().lerp(i, r / o),
                            u = o - r;
                        for (a = 0; a <= u; a++) c[r][a] = 0 === a && r === o ? h : h.clone().lerp(l, a / u)
                    }
                    for (r = 0; r < o; r++)
                        for (a = 0; a < 2 * (o - r) - 1; a++) {
                            var p = Math.floor(a / 2);
                            a % 2 == 0 ? (s(c[r][p + 1]), s(c[r + 1][p]), s(c[r][p])) : (s(c[r][p + 1]), s(c[r + 1][p + 1]), s(c[r + 1][p]))
                        }
                }

                function s(t) {
                    r.push(t.x, t.y, t.z)
                }

                function c(e, i) {
                    var n = 3 * e;
                    i.x = t[n + 0], i.y = t[n + 1], i.z = t[n + 2]
                }

                function h(t, e, i, n) {
                    n < 0 && 1 === t.x && (a[e] = t.x - 1), 0 === i.x && 0 === i.z && (a[e] = n / 2 / Math.PI + .5)
                }

                function l(t) {
                    return Math.atan2(t.z, -t.x)
                }! function(t) {
                    for (var i = new Re, n = new Re, r = new Re, a = 0; a < e.length; a += 3) c(e[a + 0], i), c(e[a + 1], n), c(e[a + 2], r), o(i, n, r, t)
                }(n = n || 0),
                function(t) {
                    for (var e = new Re, i = 0; i < r.length; i += 3) e.x = r[i + 0], e.y = r[i + 1], e.z = r[i + 2], e.normalize().multiplyScalar(t), r[i + 0] = e.x, r[i + 1] = e.y, r[i + 2] = e.z
                }(i),
                function() {
                    for (var t = new Re, e = 0; e < r.length; e += 3) {
                        t.x = r[e + 0], t.y = r[e + 1], t.z = r[e + 2];
                        var i = l(t) / 2 / Math.PI + .5,
                            n = (o = t, Math.atan2(-o.y, Math.sqrt(o.x * o.x + o.z * o.z)) / Math.PI + .5);
                        a.push(i, 1 - n)
                    }
                    var o;
                    (function() {
                        for (var t = new Re, e = new Re, i = new Re, n = new Re, o = new Ne, s = new Ne, c = new Ne, u = 0, p = 0; u < r.length; u += 9, p += 6) {
                            t.set(r[u + 0], r[u + 1], r[u + 2]), e.set(r[u + 3], r[u + 4], r[u + 5]), i.set(r[u + 6], r[u + 7], r[u + 8]), o.set(a[p + 0], a[p + 1]), s.set(a[p + 2], a[p + 3]), c.set(a[p + 4], a[p + 5]), n.copy(t).add(e).add(i).divideScalar(3);
                            var d = l(n);
                            h(o, p + 0, t, d), h(s, p + 2, e, d), h(c, p + 4, i, d)
                        }
                    })(),
                    function() {
                        for (var t = 0; t < a.length; t += 6) {
                            var e = a[t + 0],
                                i = a[t + 2],
                                n = a[t + 4],
                                r = Math.max(e, i, n),
                                o = Math.min(e, i, n);
                            r > .9 && o < .1 && (e < .2 && (a[t + 0] += 1), i < .2 && (a[t + 2] += 1), n < .2 && (a[t + 4] += 1))
                        }
                    }()
                }(), this.setAttribute("position", new An(r, 3)), this.setAttribute("normal", new An(r.slice(), 3)), this.setAttribute("uv", new An(a, 2)), 0 === n ? this.computeVertexNormals() : this.normalizeNormals()
            }

            function Us(t, e) {
                cr.call(this), this.type = "TetrahedronGeometry", this.parameters = {
                    radius: t,
                    detail: e
                }, this.fromBufferGeometry(new Bs(t, e)), this.mergeVertices()
            }

            function Bs(t, e) {
                Fs.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronBufferGeometry", this.parameters = {
                    radius: t,
                    detail: e
                }
            }

            function Vs(t, e) {
                cr.call(this), this.type = "OctahedronGeometry", this.parameters = {
                    radius: t,
                    detail: e
                }, this.fromBufferGeometry(new Gs(t, e)), this.mergeVertices()
            }

            function Gs(t, e) {
                Fs.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronBufferGeometry", this.parameters = {
                    radius: t,
                    detail: e
                }
            }

            function ks(t, e) {
                cr.call(this), this.type = "IcosahedronGeometry", this.parameters = {
                    radius: t,
                    detail: e
                }, this.fromBufferGeometry(new js(t, e)), this.mergeVertices()
            }

            function js(t, e) {
                var i = (1 + Math.sqrt(5)) / 2,
                    n = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1];
                Fs.call(this, n, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronBufferGeometry", this.parameters = {
                    radius: t,
                    detail: e
                }
            }

            function Ws(t, e) {
                cr.call(this), this.type = "DodecahedronGeometry", this.parameters = {
                    radius: t,
                    detail: e
                }, this.fromBufferGeometry(new Hs(t, e)), this.mergeVertices()
            }

            function Hs(t, e) {
                var i = (1 + Math.sqrt(5)) / 2,
                    n = 1 / i,
                    r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n];
                Fs.call(this, r, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronBufferGeometry", this.parameters = {
                    radius: t,
                    detail: e
                }
            }

            function qs(t, e, i, n, r, a) {
                cr.call(this), this.type = "TubeGeometry", this.parameters = {
                    path: t,
                    tubularSegments: e,
                    radius: i,
                    radialSegments: n,
                    closed: r
                };
                var o = new Xs(t, e, i, n, r);
                this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices()
            }

            function Xs(t, e, i, n, r) {
                Fn.call(this), this.type = "TubeBufferGeometry", this.parameters = {
                    path: t,
                    tubularSegments: e,
                    radius: i,
                    radialSegments: n,
                    closed: r
                }, e = e || 64, i = i || 1, n = n || 8, r = r || !1;
                var a = t.computeFrenetFrames(e, r);
                this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
                var o, s, c = new Re,
                    h = new Re,
                    l = new Ne,
                    u = new Re,
                    p = [],
                    d = [],
                    f = [],
                    m = [];

                function v(r) {
                    u = t.getPointAt(r / e, u);
                    var o = a.normals[r],
                        l = a.binormals[r];
                    for (s = 0; s <= n; s++) {
                        var f = s / n * Math.PI * 2,
                            m = Math.sin(f),
                            v = -Math.cos(f);
                        h.x = v * o.x + m * l.x, h.y = v * o.y + m * l.y, h.z = v * o.z + m * l.z, h.normalize(), d.push(h.x, h.y, h.z), c.x = u.x + i * h.x, c.y = u.y + i * h.y, c.z = u.z + i * h.z, p.push(c.x, c.y, c.z)
                    }
                }! function() {
                    for (o = 0; o < e; o++) v(o);
                    v(!1 === r ? e : 0),
                        function() {
                            for (o = 0; o <= e; o++)
                                for (s = 0; s <= n; s++) l.x = o / e, l.y = s / n, f.push(l.x, l.y)
                        }(),
                        function() {
                            for (s = 1; s <= e; s++)
                                for (o = 1; o <= n; o++) {
                                    var t = (n + 1) * (s - 1) + (o - 1),
                                        i = (n + 1) * s + (o - 1),
                                        r = (n + 1) * s + o,
                                        a = (n + 1) * (s - 1) + o;
                                    m.push(t, i, a), m.push(i, r, a)
                                }
                        }()
                }(), this.setIndex(m), this.setAttribute("position", new An(p, 3)), this.setAttribute("normal", new An(d, 3)), this.setAttribute("uv", new An(f, 2))
            }

            function Ys(t, e, i, n, r, a, o) {
                cr.call(this), this.type = "TorusKnotGeometry", this.parameters = {
                    radius: t,
                    tube: e,
                    tubularSegments: i,
                    radialSegments: n,
                    p: r,
                    q: a
                }, this.fromBufferGeometry(new Js(t, e, i, n, r, a)), this.mergeVertices()
            }

            function Js(t, e, i, n, r, a) {
                Fn.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
                    radius: t,
                    tube: e,
                    tubularSegments: i,
                    radialSegments: n,
                    p: r,
                    q: a
                }, t = t || 1, e = e || .4, i = Math.floor(i) || 64, n = Math.floor(n) || 8, r = r || 2, a = a || 3;
                var o, s, c = [],
                    h = [],
                    l = [],
                    u = [],
                    p = new Re,
                    d = new Re,
                    f = new Re,
                    m = new Re,
                    v = new Re,
                    g = new Re,
                    y = new Re;
                for (o = 0; o <= i; ++o) {
                    var x = o / i * r * Math.PI * 2;
                    for (L(x, r, a, t, f), L(x + .01, r, a, t, m), g.subVectors(m, f), y.addVectors(m, f), v.crossVectors(g, y), y.crossVectors(v, g), v.normalize(), y.normalize(), s = 0; s <= n; ++s) {
                        var _ = s / n * Math.PI * 2,
                            b = -e * Math.cos(_),
                            M = e * Math.sin(_);
                        p.x = f.x + (b * y.x + M * v.x), p.y = f.y + (b * y.y + M * v.y), p.z = f.z + (b * y.z + M * v.z), h.push(p.x, p.y, p.z), d.subVectors(p, f).normalize(), l.push(d.x, d.y, d.z), u.push(o / i), u.push(s / n)
                    }
                }
                for (s = 1; s <= i; s++)
                    for (o = 1; o <= n; o++) {
                        var w = (n + 1) * (s - 1) + (o - 1),
                            S = (n + 1) * s + (o - 1),
                            T = (n + 1) * s + o,
                            A = (n + 1) * (s - 1) + o;
                        c.push(w, S, A), c.push(S, T, A)
                    }

                function L(t, e, i, n, r) {
                    var a = Math.cos(t),
                        o = Math.sin(t),
                        s = i / e * t,
                        c = Math.cos(s);
                    r.x = n * (2 + c) * .5 * a, r.y = n * (2 + c) * o * .5, r.z = n * Math.sin(s) * .5
                }
                this.setIndex(c), this.setAttribute("position", new An(h, 3)), this.setAttribute("normal", new An(l, 3)), this.setAttribute("uv", new An(u, 2))
            }

            function Zs(t, e, i, n, r) {
                cr.call(this), this.type = "TorusGeometry", this.parameters = {
                    radius: t,
                    tube: e,
                    radialSegments: i,
                    tubularSegments: n,
                    arc: r
                }, this.fromBufferGeometry(new Qs(t, e, i, n, r)), this.mergeVertices()
            }

            function Qs(t, e, i, n, r) {
                Fn.call(this), this.type = "TorusBufferGeometry", this.parameters = {
                    radius: t,
                    tube: e,
                    radialSegments: i,
                    tubularSegments: n,
                    arc: r
                }, t = t || 1, e = e || .4, i = Math.floor(i) || 8, n = Math.floor(n) || 6, r = r || 2 * Math.PI;
                var a, o, s = [],
                    c = [],
                    h = [],
                    l = [],
                    u = new Re,
                    p = new Re,
                    d = new Re;
                for (a = 0; a <= i; a++)
                    for (o = 0; o <= n; o++) {
                        var f = o / n * r,
                            m = a / i * Math.PI * 2;
                        p.x = (t + e * Math.cos(m)) * Math.cos(f), p.y = (t + e * Math.cos(m)) * Math.sin(f), p.z = e * Math.sin(m), c.push(p.x, p.y, p.z), u.x = t * Math.cos(f), u.y = t * Math.sin(f), d.subVectors(p, u).normalize(), h.push(d.x, d.y, d.z), l.push(o / n), l.push(a / i)
                    }
                for (a = 1; a <= i; a++)
                    for (o = 1; o <= n; o++) {
                        var v = (n + 1) * a + o - 1,
                            g = (n + 1) * (a - 1) + o - 1,
                            y = (n + 1) * (a - 1) + o,
                            x = (n + 1) * a + o;
                        s.push(v, g, x), s.push(g, y, x)
                    }
                this.setIndex(s), this.setAttribute("position", new An(c, 3)), this.setAttribute("normal", new An(h, 3)), this.setAttribute("uv", new An(l, 2))
            }
            Ls.prototype = Object.assign(Object.create(gi.prototype), {
                constructor: Ls,
                isPoints: !0,
                raycast: function(t, e) {
                    var i = this.geometry,
                        n = this.matrixWorld,
                        r = t.params.Points.threshold;
                    if (null === i.boundingSphere && i.computeBoundingSphere(), Ts.copy(i.boundingSphere), Ts.applyMatrix4(n), Ts.radius += r, !1 !== t.ray.intersectsSphere(Ts)) {
                        ws.getInverse(n), Ss.copy(t.ray).applyMatrix4(ws);
                        var a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                            o = a * a;
                        if (i.isBufferGeometry) {
                            var s = i.index,
                                c = i.attributes.position.array;
                            if (null !== s)
                                for (var h = s.array, l = 0, u = h.length; l < u; l++) {
                                    var p = h[l];
                                    As.fromArray(c, 3 * p), Ps(As, p, o, n, t, e, this)
                                } else {
                                    l = 0;
                                    for (var d = c.length / 3; l < d; l++) As.fromArray(c, 3 * l), Ps(As, l, o, n, t, e, this)
                                }
                        } else {
                            var f = i.vertices;
                            for (l = 0, d = f.length; l < d; l++) Ps(f[l], l, o, n, t, e, this)
                        }
                    }
                },
                updateMorphTargets: function() {
                    var t, e, i, n = this.geometry;
                    if (n.isBufferGeometry) {
                        var r = n.morphAttributes,
                            a = Object.keys(r);
                        if (a.length > 0) {
                            var o = r[a[0]];
                            if (void 0 !== o)
                                for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = o.length; t < e; t++) i = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
                        }
                    } else {
                        var s = n.morphTargets;
                        void 0 !== s && s.length
                    }
                },
                clone: function() {
                    return new this.constructor(this.geometry, this.material).copy(this)
                }
            }), Cs.prototype = Object.assign(Object.create(ke.prototype), {
                constructor: Cs,
                isVideoTexture: !0,
                update: function() {
                    var t = this.image;
                    t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
                }
            }), Es.prototype = Object.create(ke.prototype), Es.prototype.constructor = Es, Es.prototype.isCompressedTexture = !0, Os.prototype = Object.create(ke.prototype), Os.prototype.constructor = Os, Os.prototype.isCanvasTexture = !0, Ns.prototype = Object.create(ke.prototype), Ns.prototype.constructor = Ns, Ns.prototype.isDepthTexture = !0, Is.prototype = Object.create(Fn.prototype), Is.prototype.constructor = Is, Ds.prototype = Object.create(cr.prototype), Ds.prototype.constructor = Ds, zs.prototype = Object.create(Fn.prototype), zs.prototype.constructor = zs, Rs.prototype = Object.create(cr.prototype), Rs.prototype.constructor = Rs, Fs.prototype = Object.create(Fn.prototype), Fs.prototype.constructor = Fs, Us.prototype = Object.create(cr.prototype), Us.prototype.constructor = Us, Bs.prototype = Object.create(Fs.prototype), Bs.prototype.constructor = Bs, Vs.prototype = Object.create(cr.prototype), Vs.prototype.constructor = Vs, Gs.prototype = Object.create(Fs.prototype), Gs.prototype.constructor = Gs, ks.prototype = Object.create(cr.prototype), ks.prototype.constructor = ks, js.prototype = Object.create(Fs.prototype), js.prototype.constructor = js, Ws.prototype = Object.create(cr.prototype), Ws.prototype.constructor = Ws, Hs.prototype = Object.create(Fs.prototype), Hs.prototype.constructor = Hs, qs.prototype = Object.create(cr.prototype), qs.prototype.constructor = qs, Xs.prototype = Object.create(Fn.prototype), Xs.prototype.constructor = Xs, Xs.prototype.toJSON = function() {
                var t = Fn.prototype.toJSON.call(this);
                return t.path = this.parameters.path.toJSON(), t
            }, Ys.prototype = Object.create(cr.prototype), Ys.prototype.constructor = Ys, Js.prototype = Object.create(Fn.prototype), Js.prototype.constructor = Js, Zs.prototype = Object.create(cr.prototype), Zs.prototype.constructor = Zs, Qs.prototype = Object.create(Fn.prototype), Qs.prototype.constructor = Qs;
            var Ks = function(t, e, i) {
                i = i || 2;
                var n, r, a, o, s, c, h, l = e && e.length,
                    u = l ? e[0] * i : t.length,
                    p = $s(t, 0, u, i, !0),
                    d = [];
                if (!p || p.next === p.prev) return d;
                if (l && (p = function(t, e, i, n) {
                        var r, a, o, s, c, h = [];
                        for (r = 0, a = e.length; r < a; r++) o = e[r] * n, s = r < a - 1 ? e[r + 1] * n : t.length, (c = $s(t, o, s, n, !1)) === c.next && (c.steiner = !0), h.push(hc(c));
                        for (h.sort(oc), r = 0; r < h.length; r++) sc(h[r], i), i = tc(i, i.next);
                        return i
                    }(t, e, p, i)), t.length > 80 * i) {
                    n = a = t[0], r = o = t[1];
                    for (var f = i; f < u; f += i)(s = t[f]) < n && (n = s), (c = t[f + 1]) < r && (r = c), s > a && (a = s), c > o && (o = c);
                    h = 0 !== (h = Math.max(a - n, o - r)) ? 1 / h : 0
                }
                return ec(p, d, i, n, r, h), d
            };

            function $s(t, e, i, n, r) {
                var a, o;
                if (r === function(t, e, i, n) {
                        for (var r = 0, a = e, o = i - n; a < i; a += n) r += (t[o] - t[a]) * (t[a + 1] + t[o + 1]), o = a;
                        return r
                    }(t, e, i, n) > 0)
                    for (a = e; a < i; a += n) o = gc(a, t[a], t[a + 1], o);
                else
                    for (a = i - n; a >= e; a -= n) o = gc(a, t[a], t[a + 1], o);
                return o && dc(o, o.next) && (yc(o), o = o.next), o
            }

            function tc(t, e) {
                if (!t) return t;
                e || (e = t);
                var i, n = t;
                do {
                    if (i = !1, n.steiner || !dc(n, n.next) && 0 !== pc(n.prev, n, n.next)) n = n.next;
                    else {
                        if (yc(n), (n = e = n.prev) === n.next) break;
                        i = !0
                    }
                } while (i || n !== e);
                return e
            }

            function ec(t, e, i, n, r, a, o) {
                if (t) {
                    !o && a && function(t, e, i, n) {
                        var r = t;
                        do {
                            null === r.z && (r.z = cc(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
                        } while (r !== t);
                        r.prevZ.nextZ = null, r.prevZ = null,
                            function(t) {
                                var e, i, n, r, a, o, s, c, h = 1;
                                do {
                                    for (i = t, t = null, a = null, o = 0; i;) {
                                        for (o++, n = i, s = 0, e = 0; e < h && (s++, n = n.nextZ); e++);
                                        for (c = h; s > 0 || c > 0 && n;) 0 !== s && (0 === c || !n || i.z <= n.z) ? (r = i, i = i.nextZ, s--) : (r = n, n = n.nextZ, c--), a ? a.nextZ = r : t = r, r.prevZ = a, a = r;
                                        i = n
                                    }
                                    a.nextZ = null, h *= 2
                                } while (o > 1)
                            }(r)
                    }(t, n, r, a);
                    for (var s, c, h = t; t.prev !== t.next;)
                        if (s = t.prev, c = t.next, a ? nc(t, n, r, a) : ic(t)) e.push(s.i / i), e.push(t.i / i), e.push(c.i / i), yc(t), t = c.next, h = c.next;
                        else if ((t = c) === h) {
                        o ? 1 === o ? ec(t = rc(t, e, i), e, i, n, r, a, 2) : 2 === o && ac(t, e, i, n, r, a) : ec(tc(t), e, i, n, r, a, 1);
                        break
                    }
                }
            }

            function ic(t) {
                var e = t.prev,
                    i = t,
                    n = t.next;
                if (pc(e, i, n) >= 0) return !1;
                for (var r = t.next.next; r !== t.prev;) {
                    if (lc(e.x, e.y, i.x, i.y, n.x, n.y, r.x, r.y) && pc(r.prev, r, r.next) >= 0) return !1;
                    r = r.next
                }
                return !0
            }

            function nc(t, e, i, n) {
                var r = t.prev,
                    a = t,
                    o = t.next;
                if (pc(r, a, o) >= 0) return !1;
                for (var s = r.x < a.x ? r.x < o.x ? r.x : o.x : a.x < o.x ? a.x : o.x, c = r.y < a.y ? r.y < o.y ? r.y : o.y : a.y < o.y ? a.y : o.y, h = r.x > a.x ? r.x > o.x ? r.x : o.x : a.x > o.x ? a.x : o.x, l = r.y > a.y ? r.y > o.y ? r.y : o.y : a.y > o.y ? a.y : o.y, u = cc(s, c, e, i, n), p = cc(h, l, e, i, n), d = t.prevZ, f = t.nextZ; d && d.z >= u && f && f.z <= p;) {
                    if (d !== t.prev && d !== t.next && lc(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && pc(d.prev, d, d.next) >= 0) return !1;
                    if (d = d.prevZ, f !== t.prev && f !== t.next && lc(r.x, r.y, a.x, a.y, o.x, o.y, f.x, f.y) && pc(f.prev, f, f.next) >= 0) return !1;
                    f = f.nextZ
                }
                for (; d && d.z >= u;) {
                    if (d !== t.prev && d !== t.next && lc(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && pc(d.prev, d, d.next) >= 0) return !1;
                    d = d.prevZ
                }
                for (; f && f.z <= p;) {
                    if (f !== t.prev && f !== t.next && lc(r.x, r.y, a.x, a.y, o.x, o.y, f.x, f.y) && pc(f.prev, f, f.next) >= 0) return !1;
                    f = f.nextZ
                }
                return !0
            }

            function rc(t, e, i) {
                var n = t;
                do {
                    var r = n.prev,
                        a = n.next.next;
                    !dc(r, a) && fc(r, n, n.next, a) && mc(r, a) && mc(a, r) && (e.push(r.i / i), e.push(n.i / i), e.push(a.i / i), yc(n), yc(n.next), n = t = a), n = n.next
                } while (n !== t);
                return n
            }

            function ac(t, e, i, n, r, a) {
                var o = t;
                do {
                    for (var s = o.next.next; s !== o.prev;) {
                        if (o.i !== s.i && uc(o, s)) {
                            var c = vc(o, s);
                            return o = tc(o, o.next), c = tc(c, c.next), ec(o, e, i, n, r, a), void ec(c, e, i, n, r, a)
                        }
                        s = s.next
                    }
                    o = o.next
                } while (o !== t)
            }

            function oc(t, e) {
                return t.x - e.x
            }

            function sc(t, e) {
                if (e = function(t, e) {
                        var i, n = e,
                            r = t.x,
                            a = t.y,
                            o = -1 / 0;
                        do {
                            if (a <= n.y && a >= n.next.y && n.next.y !== n.y) {
                                var s = n.x + (a - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                                if (s <= r && s > o) {
                                    if (o = s, s === r) {
                                        if (a === n.y) return n;
                                        if (a === n.next.y) return n.next
                                    }
                                    i = n.x < n.next.x ? n : n.next
                                }
                            }
                            n = n.next
                        } while (n !== e);
                        if (!i) return null;
                        if (r === o) return i.prev;
                        var c, h = i,
                            l = i.x,
                            u = i.y,
                            p = 1 / 0;
                        n = i.next;
                        for (; n !== h;) r >= n.x && n.x >= l && r !== n.x && lc(a < u ? r : o, a, l, u, a < u ? o : r, a, n.x, n.y) && ((c = Math.abs(a - n.y) / (r - n.x)) < p || c === p && n.x > i.x) && mc(n, t) && (i = n, p = c), n = n.next;
                        return i
                    }(t, e)) {
                    var i = vc(e, t);
                    tc(i, i.next)
                }
            }

            function cc(t, e, i, n, r) {
                return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
            }

            function hc(t) {
                var e = t,
                    i = t;
                do {
                    (e.x < i.x || e.x === i.x && e.y < i.y) && (i = e), e = e.next
                } while (e !== t);
                return i
            }

            function lc(t, e, i, n, r, a, o, s) {
                return (r - o) * (e - s) - (t - o) * (a - s) >= 0 && (t - o) * (n - s) - (i - o) * (e - s) >= 0 && (i - o) * (a - s) - (r - o) * (n - s) >= 0
            }

            function uc(t, e) {
                return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
                    var i = t;
                    do {
                        if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && fc(i, i.next, t, e)) return !0;
                        i = i.next
                    } while (i !== t);
                    return !1
                }(t, e) && mc(t, e) && mc(e, t) && function(t, e) {
                    var i = t,
                        n = !1,
                        r = (t.x + e.x) / 2,
                        a = (t.y + e.y) / 2;
                    do {
                        i.y > a != i.next.y > a && i.next.y !== i.y && r < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next
                    } while (i !== t);
                    return n
                }(t, e)
            }

            function pc(t, e, i) {
                return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
            }

            function dc(t, e) {
                return t.x === e.x && t.y === e.y
            }

            function fc(t, e, i, n) {
                return !!(dc(t, i) && dc(e, n) || dc(t, n) && dc(i, e)) || pc(t, e, i) > 0 != pc(t, e, n) > 0 && pc(i, n, t) > 0 != pc(i, n, e) > 0
            }

            function mc(t, e) {
                return pc(t.prev, t, t.next) < 0 ? pc(t, e, t.next) >= 0 && pc(t, t.prev, e) >= 0 : pc(t, e, t.prev) < 0 || pc(t, t.next, e) < 0
            }

            function vc(t, e) {
                var i = new xc(t.i, t.x, t.y),
                    n = new xc(e.i, e.x, e.y),
                    r = t.next,
                    a = e.prev;
                return t.next = e, e.prev = t, i.next = r, r.prev = i, n.next = i, i.prev = n, a.next = n, n.prev = a, n
            }

            function gc(t, e, i, n) {
                var r = new xc(t, e, i);
                return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r
            }

            function yc(t) {
                t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
            }

            function xc(t, e, i) {
                this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
            }
            var _c = {
                area: function(t) {
                    for (var e = t.length, i = 0, n = e - 1, r = 0; r < e; n = r++) i += t[n].x * t[r].y - t[r].x * t[n].y;
                    return .5 * i
                },
                isClockWise: function(t) {
                    return _c.area(t) < 0
                },
                triangulateShape: function(t, e) {
                    var i = [],
                        n = [],
                        r = [];
                    bc(t), Mc(i, t);
                    var a = t.length;
                    e.forEach(bc);
                    for (var o = 0; o < e.length; o++) n.push(a), a += e[o].length, Mc(i, e[o]);
                    var s = Ks(i, n);
                    for (o = 0; o < s.length; o += 3) r.push(s.slice(o, o + 3));
                    return r
                }
            };

            function bc(t) {
                var e = t.length;
                e > 2 && t[e - 1].equals(t[0]) && t.pop()
            }

            function Mc(t, e) {
                for (var i = 0; i < e.length; i++) t.push(e[i].x), t.push(e[i].y)
            }

            function wc(t, e) {
                cr.call(this), this.type = "ExtrudeGeometry", this.parameters = {
                    shapes: t,
                    options: e
                }, this.fromBufferGeometry(new Sc(t, e)), this.mergeVertices()
            }

            function Sc(t, e) {
                Fn.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
                    shapes: t,
                    options: e
                }, t = Array.isArray(t) ? t : [t];
                for (var i = this, n = [], r = [], a = 0, o = t.length; a < o; a++) {
                    s(t[a])
                }

                function s(t) {
                    var a = [],
                        o = void 0 !== e.curveSegments ? e.curveSegments : 12,
                        s = void 0 !== e.steps ? e.steps : 1,
                        c = void 0 !== e.depth ? e.depth : 100,
                        h = void 0 === e.bevelEnabled || e.bevelEnabled,
                        l = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
                        u = void 0 !== e.bevelSize ? e.bevelSize : l - 2,
                        p = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
                        d = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
                        f = e.extrudePath,
                        m = void 0 !== e.UVGenerator ? e.UVGenerator : Tc;
                    void 0 !== e.amount && (c = e.amount);
                    var v, g, y, x, _, b, M, w, S = !1;
                    f && (v = f.getSpacedPoints(s), S = !0, h = !1, g = f.computeFrenetFrames(s, !1), y = new Re, x = new Re, _ = new Re), h || (d = 0, l = 0, u = 0, p = 0);
                    var T = t.extractPoints(o),
                        A = T.shape,
                        L = T.holes;
                    if (!_c.isClockWise(A))
                        for (A = A.reverse(), M = 0, w = L.length; M < w; M++) b = L[M], _c.isClockWise(b) && (L[M] = b.reverse());
                    var P = _c.triangulateShape(A, L),
                        C = A;
                    for (M = 0, w = L.length; M < w; M++) b = L[M], A = A.concat(b);

                    function E(t, e, i) {
                        return e.clone().multiplyScalar(i).add(t)
                    }
                    var O, N, I, D, z, R, F = A.length,
                        U = P.length;

                    function B(t, e, i) {
                        var n, r, a, o = t.x - e.x,
                            s = t.y - e.y,
                            c = i.x - t.x,
                            h = i.y - t.y,
                            l = o * o + s * s,
                            u = o * h - s * c;
                        if (Math.abs(u) > Number.EPSILON) {
                            var p = Math.sqrt(l),
                                d = Math.sqrt(c * c + h * h),
                                f = e.x - s / p,
                                m = e.y + o / p,
                                v = ((i.x - h / d - f) * h - (i.y + c / d - m) * c) / (o * h - s * c),
                                g = (n = f + o * v - t.x) * n + (r = m + s * v - t.y) * r;
                            if (g <= 2) return new Ne(n, r);
                            a = Math.sqrt(g / 2)
                        } else {
                            var y = !1;
                            o > Number.EPSILON ? c > Number.EPSILON && (y = !0) : o < -Number.EPSILON ? c < -Number.EPSILON && (y = !0) : Math.sign(s) === Math.sign(h) && (y = !0), y ? (n = -s, r = o, a = Math.sqrt(l)) : (n = o, r = s, a = Math.sqrt(l / 2))
                        }
                        return new Ne(n / a, r / a)
                    }
                    for (var V = [], G = 0, k = C.length, j = k - 1, W = G + 1; G < k; G++, j++, W++) j === k && (j = 0), W === k && (W = 0), V[G] = B(C[G], C[j], C[W]);
                    var H, q, X = [],
                        Y = V.concat();
                    for (M = 0, w = L.length; M < w; M++) {
                        for (b = L[M], H = [], G = 0, j = (k = b.length) - 1, W = G + 1; G < k; G++, j++, W++) j === k && (j = 0), W === k && (W = 0), H[G] = B(b[G], b[j], b[W]);
                        X.push(H), Y = Y.concat(H)
                    }
                    for (O = 0; O < d; O++) {
                        for (I = O / d, D = l * Math.cos(I * Math.PI / 2), N = u * Math.sin(I * Math.PI / 2) + p, G = 0, k = C.length; G < k; G++) Z((z = E(C[G], V[G], N)).x, z.y, -D);
                        for (M = 0, w = L.length; M < w; M++)
                            for (b = L[M], H = X[M], G = 0, k = b.length; G < k; G++) Z((z = E(b[G], H[G], N)).x, z.y, -D)
                    }
                    for (N = u + p, G = 0; G < F; G++) z = h ? E(A[G], Y[G], N) : A[G], S ? (x.copy(g.normals[0]).multiplyScalar(z.x), y.copy(g.binormals[0]).multiplyScalar(z.y), _.copy(v[0]).add(x).add(y), Z(_.x, _.y, _.z)) : Z(z.x, z.y, 0);
                    for (q = 1; q <= s; q++)
                        for (G = 0; G < F; G++) z = h ? E(A[G], Y[G], N) : A[G], S ? (x.copy(g.normals[q]).multiplyScalar(z.x), y.copy(g.binormals[q]).multiplyScalar(z.y), _.copy(v[q]).add(x).add(y), Z(_.x, _.y, _.z)) : Z(z.x, z.y, c / s * q);
                    for (O = d - 1; O >= 0; O--) {
                        for (I = O / d, D = l * Math.cos(I * Math.PI / 2), N = u * Math.sin(I * Math.PI / 2) + p, G = 0, k = C.length; G < k; G++) Z((z = E(C[G], V[G], N)).x, z.y, c + D);
                        for (M = 0, w = L.length; M < w; M++)
                            for (b = L[M], H = X[M], G = 0, k = b.length; G < k; G++) z = E(b[G], H[G], N), S ? Z(z.x, z.y + v[s - 1].y, v[s - 1].x + D) : Z(z.x, z.y, c + D)
                    }

                    function J(t, e) {
                        var i, n;
                        for (G = t.length; --G >= 0;) {
                            i = G, (n = G - 1) < 0 && (n = t.length - 1);
                            var r = 0,
                                a = s + 2 * d;
                            for (r = 0; r < a; r++) {
                                var o = F * r,
                                    c = F * (r + 1);
                                K(e + i + o, e + n + o, e + n + c, e + i + c)
                            }
                        }
                    }

                    function Z(t, e, i) {
                        a.push(t), a.push(e), a.push(i)
                    }

                    function Q(t, e, r) {
                        $(t), $(e), $(r);
                        var a = n.length / 3,
                            o = m.generateTopUV(i, n, a - 3, a - 2, a - 1);
                        tt(o[0]), tt(o[1]), tt(o[2])
                    }

                    function K(t, e, r, a) {
                        $(t), $(e), $(a), $(e), $(r), $(a);
                        var o = n.length / 3,
                            s = m.generateSideWallUV(i, n, o - 6, o - 3, o - 2, o - 1);
                        tt(s[0]), tt(s[1]), tt(s[3]), tt(s[1]), tt(s[2]), tt(s[3])
                    }

                    function $(t) {
                        n.push(a[3 * t + 0]), n.push(a[3 * t + 1]), n.push(a[3 * t + 2])
                    }

                    function tt(t) {
                        r.push(t.x), r.push(t.y)
                    }! function() {
                        var t = n.length / 3;
                        if (h) {
                            var e = 0,
                                r = F * e;
                            for (G = 0; G < U; G++) Q((R = P[G])[2] + r, R[1] + r, R[0] + r);
                            for (r = F * (e = s + 2 * d), G = 0; G < U; G++) Q((R = P[G])[0] + r, R[1] + r, R[2] + r)
                        } else {
                            for (G = 0; G < U; G++) Q((R = P[G])[2], R[1], R[0]);
                            for (G = 0; G < U; G++) Q((R = P[G])[0] + F * s, R[1] + F * s, R[2] + F * s)
                        }
                        i.addGroup(t, n.length / 3 - t, 0)
                    }(),
                    function() {
                        var t = n.length / 3,
                            e = 0;
                        for (J(C, e), e += C.length, M = 0, w = L.length; M < w; M++) J(b = L[M], e), e += b.length;
                        i.addGroup(t, n.length / 3 - t, 1)
                    }()
                }
                this.setAttribute("position", new An(n, 3)), this.setAttribute("uv", new An(r, 2)), this.computeVertexNormals()
            }
            wc.prototype = Object.create(cr.prototype), wc.prototype.constructor = wc, wc.prototype.toJSON = function() {
                var t = cr.prototype.toJSON.call(this);
                return Ac(this.parameters.shapes, this.parameters.options, t)
            }, Sc.prototype = Object.create(Fn.prototype), Sc.prototype.constructor = Sc, Sc.prototype.toJSON = function() {
                var t = Fn.prototype.toJSON.call(this);
                return Ac(this.parameters.shapes, this.parameters.options, t)
            };
            var Tc = {
                generateTopUV: function(t, e, i, n, r) {
                    var a = e[3 * i],
                        o = e[3 * i + 1],
                        s = e[3 * n],
                        c = e[3 * n + 1],
                        h = e[3 * r],
                        l = e[3 * r + 1];
                    return [new Ne(a, o), new Ne(s, c), new Ne(h, l)]
                },
                generateSideWallUV: function(t, e, i, n, r, a) {
                    var o = e[3 * i],
                        s = e[3 * i + 1],
                        c = e[3 * i + 2],
                        h = e[3 * n],
                        l = e[3 * n + 1],
                        u = e[3 * n + 2],
                        p = e[3 * r],
                        d = e[3 * r + 1],
                        f = e[3 * r + 2],
                        m = e[3 * a],
                        v = e[3 * a + 1],
                        g = e[3 * a + 2];
                    return Math.abs(s - l) < .01 ? [new Ne(o, 1 - c), new Ne(h, 1 - u), new Ne(p, 1 - f), new Ne(m, 1 - g)] : [new Ne(s, 1 - c), new Ne(l, 1 - u), new Ne(d, 1 - f), new Ne(v, 1 - g)]
                }
            };

            function Ac(t, e, i) {
                if (i.shapes = [], Array.isArray(t))
                    for (var n = 0, r = t.length; n < r; n++) {
                        var a = t[n];
                        i.shapes.push(a.uuid)
                    } else i.shapes.push(t.uuid);
                return void 0 !== e.extrudePath && (i.options.extrudePath = e.extrudePath.toJSON()), i
            }

            function Lc(t, e) {
                cr.call(this), this.type = "TextGeometry", this.parameters = {
                    text: t,
                    parameters: e
                }, this.fromBufferGeometry(new Pc(t, e)), this.mergeVertices()
            }

            function Pc(t, e) {
                var i = (e = e || {}).font;
                if (!i || !i.isFont) return new cr;
                var n = i.generateShapes(t, e.size);
                e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), Sc.call(this, n, e), this.type = "TextBufferGeometry"
            }

            function Cc(t, e, i, n, r, a, o) {
                cr.call(this), this.type = "SphereGeometry", this.parameters = {
                    radius: t,
                    widthSegments: e,
                    heightSegments: i,
                    phiStart: n,
                    phiLength: r,
                    thetaStart: a,
                    thetaLength: o
                }, this.fromBufferGeometry(new Ec(t, e, i, n, r, a, o)), this.mergeVertices()
            }

            function Ec(t, e, i, n, r, a, o) {
                Fn.call(this), this.type = "SphereBufferGeometry", this.parameters = {
                    radius: t,
                    widthSegments: e,
                    heightSegments: i,
                    phiStart: n,
                    phiLength: r,
                    thetaStart: a,
                    thetaLength: o
                }, t = t || 1, e = Math.max(3, Math.floor(e) || 8), i = Math.max(2, Math.floor(i) || 6), n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI, a = void 0 !== a ? a : 0, o = void 0 !== o ? o : Math.PI;
                var s, c, h = Math.min(a + o, Math.PI),
                    l = 0,
                    u = [],
                    p = new Re,
                    d = new Re,
                    f = [],
                    m = [],
                    v = [],
                    g = [];
                for (c = 0; c <= i; c++) {
                    var y = [],
                        x = c / i,
                        _ = 0;
                    for (0 == c && 0 == a ? _ = .5 / e : c == i && h == Math.PI && (_ = -.5 / e), s = 0; s <= e; s++) {
                        var b = s / e;
                        p.x = -t * Math.cos(n + b * r) * Math.sin(a + x * o), p.y = t * Math.cos(a + x * o), p.z = t * Math.sin(n + b * r) * Math.sin(a + x * o), m.push(p.x, p.y, p.z), d.copy(p).normalize(), v.push(d.x, d.y, d.z), g.push(b + _, 1 - x), y.push(l++)
                    }
                    u.push(y)
                }
                for (c = 0; c < i; c++)
                    for (s = 0; s < e; s++) {
                        var M = u[c][s + 1],
                            w = u[c][s],
                            S = u[c + 1][s],
                            T = u[c + 1][s + 1];
                        (0 !== c || a > 0) && f.push(M, w, T), (c !== i - 1 || h < Math.PI) && f.push(w, S, T)
                    }
                this.setIndex(f), this.setAttribute("position", new An(m, 3)), this.setAttribute("normal", new An(v, 3)), this.setAttribute("uv", new An(g, 2))
            }

            function Oc(t, e, i, n, r, a) {
                cr.call(this), this.type = "RingGeometry", this.parameters = {
                    innerRadius: t,
                    outerRadius: e,
                    thetaSegments: i,
                    phiSegments: n,
                    thetaStart: r,
                    thetaLength: a
                }, this.fromBufferGeometry(new Nc(t, e, i, n, r, a)), this.mergeVertices()
            }

            function Nc(t, e, i, n, r, a) {
                Fn.call(this), this.type = "RingBufferGeometry", this.parameters = {
                    innerRadius: t,
                    outerRadius: e,
                    thetaSegments: i,
                    phiSegments: n,
                    thetaStart: r,
                    thetaLength: a
                }, t = t || .5, e = e || 1, r = void 0 !== r ? r : 0, a = void 0 !== a ? a : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8;
                var o, s, c, h = [],
                    l = [],
                    u = [],
                    p = [],
                    d = t,
                    f = (e - t) / (n = void 0 !== n ? Math.max(1, n) : 1),
                    m = new Re,
                    v = new Ne;
                for (s = 0; s <= n; s++) {
                    for (c = 0; c <= i; c++) o = r + c / i * a, m.x = d * Math.cos(o), m.y = d * Math.sin(o), l.push(m.x, m.y, m.z), u.push(0, 0, 1), v.x = (m.x / e + 1) / 2, v.y = (m.y / e + 1) / 2, p.push(v.x, v.y);
                    d += f
                }
                for (s = 0; s < n; s++) {
                    var g = s * (i + 1);
                    for (c = 0; c < i; c++) {
                        var y = o = c + g,
                            x = o + i + 1,
                            _ = o + i + 2,
                            b = o + 1;
                        h.push(y, x, b), h.push(x, _, b)
                    }
                }
                this.setIndex(h), this.setAttribute("position", new An(l, 3)), this.setAttribute("normal", new An(u, 3)), this.setAttribute("uv", new An(p, 2))
            }

            function Ic(t, e, i, n) {
                cr.call(this), this.type = "LatheGeometry", this.parameters = {
                    points: t,
                    segments: e,
                    phiStart: i,
                    phiLength: n
                }, this.fromBufferGeometry(new Dc(t, e, i, n)), this.mergeVertices()
            }

            function Dc(t, e, i, n) {
                Fn.call(this), this.type = "LatheBufferGeometry", this.parameters = {
                    points: t,
                    segments: e,
                    phiStart: i,
                    phiLength: n
                }, e = Math.floor(e) || 12, i = i || 0, n = n || 2 * Math.PI, n = Oe.clamp(n, 0, 2 * Math.PI);
                var r, a, o, s = [],
                    c = [],
                    h = [],
                    l = 1 / e,
                    u = new Re,
                    p = new Ne;
                for (a = 0; a <= e; a++) {
                    var d = i + a * l * n,
                        f = Math.sin(d),
                        m = Math.cos(d);
                    for (o = 0; o <= t.length - 1; o++) u.x = t[o].x * f, u.y = t[o].y, u.z = t[o].x * m, c.push(u.x, u.y, u.z), p.x = a / e, p.y = o / (t.length - 1), h.push(p.x, p.y)
                }
                for (a = 0; a < e; a++)
                    for (o = 0; o < t.length - 1; o++) {
                        var v = r = o + a * t.length,
                            g = r + t.length,
                            y = r + t.length + 1,
                            x = r + 1;
                        s.push(v, g, x), s.push(g, y, x)
                    }
                if (this.setIndex(s), this.setAttribute("position", new An(c, 3)), this.setAttribute("uv", new An(h, 2)), this.computeVertexNormals(), n === 2 * Math.PI) {
                    var _ = this.attributes.normal.array,
                        b = new Re,
                        M = new Re,
                        w = new Re;
                    for (r = e * t.length * 3, a = 0, o = 0; a < t.length; a++, o += 3) b.x = _[o + 0], b.y = _[o + 1], b.z = _[o + 2], M.x = _[r + o + 0], M.y = _[r + o + 1], M.z = _[r + o + 2], w.addVectors(b, M).normalize(), _[o + 0] = _[r + o + 0] = w.x, _[o + 1] = _[r + o + 1] = w.y, _[o + 2] = _[r + o + 2] = w.z
                }
            }

            function zc(t, e) {
                cr.call(this), this.type = "ShapeGeometry", "object" == typeof e && (e = e.curveSegments), this.parameters = {
                    shapes: t,
                    curveSegments: e
                }, this.fromBufferGeometry(new Rc(t, e)), this.mergeVertices()
            }

            function Rc(t, e) {
                Fn.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
                    shapes: t,
                    curveSegments: e
                }, e = e || 12;
                var i = [],
                    n = [],
                    r = [],
                    a = [],
                    o = 0,
                    s = 0;
                if (!1 === Array.isArray(t)) h(t);
                else
                    for (var c = 0; c < t.length; c++) h(t[c]), this.addGroup(o, s, c), o += s, s = 0;

                function h(t) {
                    var o, c, h, l = n.length / 3,
                        u = t.extractPoints(e),
                        p = u.shape,
                        d = u.holes;
                    for (!1 === _c.isClockWise(p) && (p = p.reverse()), o = 0, c = d.length; o < c; o++) h = d[o], !0 === _c.isClockWise(h) && (d[o] = h.reverse());
                    var f = _c.triangulateShape(p, d);
                    for (o = 0, c = d.length; o < c; o++) h = d[o], p = p.concat(h);
                    for (o = 0, c = p.length; o < c; o++) {
                        var m = p[o];
                        n.push(m.x, m.y, 0), r.push(0, 0, 1), a.push(m.x, m.y)
                    }
                    for (o = 0, c = f.length; o < c; o++) {
                        var v = f[o],
                            g = v[0] + l,
                            y = v[1] + l,
                            x = v[2] + l;
                        i.push(g, y, x), s += 3
                    }
                }
                this.setIndex(i), this.setAttribute("position", new An(n, 3)), this.setAttribute("normal", new An(r, 3)), this.setAttribute("uv", new An(a, 2))
            }

            function Fc(t, e) {
                if (e.shapes = [], Array.isArray(t))
                    for (var i = 0, n = t.length; i < n; i++) {
                        var r = t[i];
                        e.shapes.push(r.uuid)
                    } else e.shapes.push(t.uuid);
                return e
            }

            function Uc(t, e) {
                Fn.call(this), this.type = "EdgesGeometry", this.parameters = {
                    thresholdAngle: e
                }, e = void 0 !== e ? e : 1;
                var i, n, r, a, o = [],
                    s = Math.cos(Oe.DEG2RAD * e),
                    c = [0, 0],
                    h = {},
                    l = ["a", "b", "c"];
                t.isBufferGeometry ? (a = new cr).fromBufferGeometry(t) : a = t.clone(), a.mergeVertices(), a.computeFaceNormals();
                for (var u = a.vertices, p = a.faces, d = 0, f = p.length; d < f; d++)
                    for (var m = p[d], v = 0; v < 3; v++) i = m[l[v]], n = m[l[(v + 1) % 3]], c[0] = Math.min(i, n), c[1] = Math.max(i, n), void 0 === h[r = c[0] + "," + c[1]] ? h[r] = {
                        index1: c[0],
                        index2: c[1],
                        face1: d,
                        face2: void 0
                    } : h[r].face2 = d;
                for (r in h) {
                    var g = h[r];
                    if (void 0 === g.face2 || p[g.face1].normal.dot(p[g.face2].normal) <= s) {
                        var y = u[g.index1];
                        o.push(y.x, y.y, y.z), y = u[g.index2], o.push(y.x, y.y, y.z)
                    }
                }
                this.setAttribute("position", new An(o, 3))
            }

            function Bc(t, e, i, n, r, a, o, s) {
                cr.call(this), this.type = "CylinderGeometry", this.parameters = {
                    radiusTop: t,
                    radiusBottom: e,
                    height: i,
                    radialSegments: n,
                    heightSegments: r,
                    openEnded: a,
                    thetaStart: o,
                    thetaLength: s
                }, this.fromBufferGeometry(new Vc(t, e, i, n, r, a, o, s)), this.mergeVertices()
            }

            function Vc(t, e, i, n, r, a, o, s) {
                Fn.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
                    radiusTop: t,
                    radiusBottom: e,
                    height: i,
                    radialSegments: n,
                    heightSegments: r,
                    openEnded: a,
                    thetaStart: o,
                    thetaLength: s
                };
                var c = this;
                t = void 0 !== t ? t : 1, e = void 0 !== e ? e : 1, i = i || 1, n = Math.floor(n) || 8, r = Math.floor(r) || 1, a = void 0 !== a && a, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : 2 * Math.PI;
                var h = [],
                    l = [],
                    u = [],
                    p = [],
                    d = 0,
                    f = [],
                    m = i / 2,
                    v = 0;

                function g(i) {
                    var r, a, f, g = new Ne,
                        y = new Re,
                        x = 0,
                        _ = !0 === i ? t : e,
                        b = !0 === i ? 1 : -1;
                    for (a = d, r = 1; r <= n; r++) l.push(0, m * b, 0), u.push(0, b, 0), p.push(.5, .5), d++;
                    for (f = d, r = 0; r <= n; r++) {
                        var M = r / n * s + o,
                            w = Math.cos(M),
                            S = Math.sin(M);
                        y.x = _ * S, y.y = m * b, y.z = _ * w, l.push(y.x, y.y, y.z), u.push(0, b, 0), g.x = .5 * w + .5, g.y = .5 * S * b + .5, p.push(g.x, g.y), d++
                    }
                    for (r = 0; r < n; r++) {
                        var T = a + r,
                            A = f + r;
                        !0 === i ? h.push(A, A + 1, T) : h.push(A + 1, A, T), x += 3
                    }
                    c.addGroup(v, x, !0 === i ? 1 : 2), v += x
                }! function() {
                    var a, g, y = new Re,
                        x = new Re,
                        _ = 0,
                        b = (e - t) / i;
                    for (g = 0; g <= r; g++) {
                        var M = [],
                            w = g / r,
                            S = w * (e - t) + t;
                        for (a = 0; a <= n; a++) {
                            var T = a / n,
                                A = T * s + o,
                                L = Math.sin(A),
                                P = Math.cos(A);
                            x.x = S * L, x.y = -w * i + m, x.z = S * P, l.push(x.x, x.y, x.z), y.set(L, b, P).normalize(), u.push(y.x, y.y, y.z), p.push(T, 1 - w), M.push(d++)
                        }
                        f.push(M)
                    }
                    for (a = 0; a < n; a++)
                        for (g = 0; g < r; g++) {
                            var C = f[g][a],
                                E = f[g + 1][a],
                                O = f[g + 1][a + 1],
                                N = f[g][a + 1];
                            h.push(C, E, N), h.push(E, O, N), _ += 6
                        }
                    c.addGroup(v, _, 0), v += _
                }(), !1 === a && (t > 0 && g(!0), e > 0 && g(!1)), this.setIndex(h), this.setAttribute("position", new An(l, 3)), this.setAttribute("normal", new An(u, 3)), this.setAttribute("uv", new An(p, 2))
            }

            function Gc(t, e, i, n, r, a, o) {
                Bc.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeGeometry", this.parameters = {
                    radius: t,
                    height: e,
                    radialSegments: i,
                    heightSegments: n,
                    openEnded: r,
                    thetaStart: a,
                    thetaLength: o
                }
            }

            function kc(t, e, i, n, r, a, o) {
                Vc.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeBufferGeometry", this.parameters = {
                    radius: t,
                    height: e,
                    radialSegments: i,
                    heightSegments: n,
                    openEnded: r,
                    thetaStart: a,
                    thetaLength: o
                }
            }

            function jc(t, e, i, n) {
                cr.call(this), this.type = "CircleGeometry", this.parameters = {
                    radius: t,
                    segments: e,
                    thetaStart: i,
                    thetaLength: n
                }, this.fromBufferGeometry(new Wc(t, e, i, n)), this.mergeVertices()
            }

            function Wc(t, e, i, n) {
                Fn.call(this), this.type = "CircleBufferGeometry", this.parameters = {
                    radius: t,
                    segments: e,
                    thetaStart: i,
                    thetaLength: n
                }, t = t || 1, e = void 0 !== e ? Math.max(3, e) : 8, i = void 0 !== i ? i : 0, n = void 0 !== n ? n : 2 * Math.PI;
                var r, a, o = [],
                    s = [],
                    c = [],
                    h = [],
                    l = new Re,
                    u = new Ne;
                for (s.push(0, 0, 0), c.push(0, 0, 1), h.push(.5, .5), a = 0, r = 3; a <= e; a++, r += 3) {
                    var p = i + a / e * n;
                    l.x = t * Math.cos(p), l.y = t * Math.sin(p), s.push(l.x, l.y, l.z), c.push(0, 0, 1), u.x = (s[r] / t + 1) / 2, u.y = (s[r + 1] / t + 1) / 2, h.push(u.x, u.y)
                }
                for (r = 1; r <= e; r++) o.push(r, r + 1, 0);
                this.setIndex(o), this.setAttribute("position", new An(s, 3)), this.setAttribute("normal", new An(c, 3)), this.setAttribute("uv", new An(h, 2))
            }
            Lc.prototype = Object.create(cr.prototype), Lc.prototype.constructor = Lc, Pc.prototype = Object.create(Sc.prototype), Pc.prototype.constructor = Pc, Cc.prototype = Object.create(cr.prototype), Cc.prototype.constructor = Cc, Ec.prototype = Object.create(Fn.prototype), Ec.prototype.constructor = Ec, Oc.prototype = Object.create(cr.prototype), Oc.prototype.constructor = Oc, Nc.prototype = Object.create(Fn.prototype), Nc.prototype.constructor = Nc, Ic.prototype = Object.create(cr.prototype), Ic.prototype.constructor = Ic, Dc.prototype = Object.create(Fn.prototype), Dc.prototype.constructor = Dc, zc.prototype = Object.create(cr.prototype), zc.prototype.constructor = zc, zc.prototype.toJSON = function() {
                var t = cr.prototype.toJSON.call(this);
                return Fc(this.parameters.shapes, t)
            }, Rc.prototype = Object.create(Fn.prototype), Rc.prototype.constructor = Rc, Rc.prototype.toJSON = function() {
                var t = Fn.prototype.toJSON.call(this);
                return Fc(this.parameters.shapes, t)
            }, Uc.prototype = Object.create(Fn.prototype), Uc.prototype.constructor = Uc, Bc.prototype = Object.create(cr.prototype), Bc.prototype.constructor = Bc, Vc.prototype = Object.create(Fn.prototype), Vc.prototype.constructor = Vc, Gc.prototype = Object.create(Bc.prototype), Gc.prototype.constructor = Gc, kc.prototype = Object.create(Vc.prototype), kc.prototype.constructor = kc, jc.prototype = Object.create(cr.prototype), jc.prototype.constructor = jc, Wc.prototype = Object.create(Fn.prototype), Wc.prototype.constructor = Wc;
            var Hc = Object.freeze({
                __proto__: null,
                WireframeGeometry: Is,
                ParametricGeometry: Ds,
                ParametricBufferGeometry: zs,
                TetrahedronGeometry: Us,
                TetrahedronBufferGeometry: Bs,
                OctahedronGeometry: Vs,
                OctahedronBufferGeometry: Gs,
                IcosahedronGeometry: ks,
                IcosahedronBufferGeometry: js,
                DodecahedronGeometry: Ws,
                DodecahedronBufferGeometry: Hs,
                PolyhedronGeometry: Rs,
                PolyhedronBufferGeometry: Fs,
                TubeGeometry: qs,
                TubeBufferGeometry: Xs,
                TorusKnotGeometry: Ys,
                TorusKnotBufferGeometry: Js,
                TorusGeometry: Zs,
                TorusBufferGeometry: Qs,
                TextGeometry: Lc,
                TextBufferGeometry: Pc,
                SphereGeometry: Cc,
                SphereBufferGeometry: Ec,
                RingGeometry: Oc,
                RingBufferGeometry: Nc,
                PlaneGeometry: Or,
                PlaneBufferGeometry: Nr,
                LatheGeometry: Ic,
                LatheBufferGeometry: Dc,
                ShapeGeometry: zc,
                ShapeBufferGeometry: Rc,
                ExtrudeGeometry: wc,
                ExtrudeBufferGeometry: Sc,
                EdgesGeometry: Uc,
                ConeGeometry: Gc,
                ConeBufferGeometry: kc,
                CylinderGeometry: Bc,
                CylinderBufferGeometry: Vc,
                CircleGeometry: jc,
                CircleBufferGeometry: Wc,
                BoxGeometry: class extends cr {
                    constructor(t, e, i, n, r, a) {
                        super(), this.type = "BoxGeometry", this.parameters = {
                            width: t,
                            height: e,
                            depth: i,
                            widthSegments: n,
                            heightSegments: r,
                            depthSegments: a
                        }, this.fromBufferGeometry(new hr(t, e, i, n, r, a)), this.mergeVertices()
                    }
                },
                BoxBufferGeometry: hr
            });

            function qc(t) {
                mn.call(this), this.type = "ShadowMaterial", this.color = new hn(0), this.transparent = !0, this.setValues(t)
            }

            function Xc(t) {
                mr.call(this, t), this.type = "RawShaderMaterial"
            }

            function Yc(t) {
                mn.call(this), this.defines = {
                    STANDARD: ""
                }, this.type = "MeshStandardMaterial", this.color = new hn(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new hn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = we, this.normalScale = new Ne(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
            }

            function Jc(t) {
                Yc.call(this), this.defines = {
                    STANDARD: "",
                    PHYSICAL: ""
                }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearcoat = 0, this.clearcoatRoughness = 0, this.sheen = null, this.clearcoatNormalScale = new Ne(1, 1), this.clearcoatNormalMap = null, this.transparency = 0, this.setValues(t)
            }

            function Zc(t) {
                mn.call(this), this.type = "MeshPhongMaterial", this.color = new hn(16777215), this.specular = new hn(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new hn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = we, this.normalScale = new Ne(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = H, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
            }

            function Qc(t) {
                mn.call(this), this.defines = {
                    TOON: ""
                }, this.type = "MeshToonMaterial", this.color = new hn(16777215), this.specular = new hn(1118481), this.shininess = 30, this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new hn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = we, this.normalScale = new Ne(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
            }

            function Kc(t) {
                mn.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = we, this.normalScale = new Ne(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
            }

            function $c(t) {
                mn.call(this), this.type = "MeshLambertMaterial", this.color = new hn(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new hn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = H, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
            }

            function th(t) {
                mn.call(this), this.defines = {
                    MATCAP: ""
                }, this.type = "MeshMatcapMaterial", this.color = new hn(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = we, this.normalScale = new Ne(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
            }

            function eh(t) {
                us.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
            }
            qc.prototype = Object.create(mn.prototype), qc.prototype.constructor = qc, qc.prototype.isShadowMaterial = !0, qc.prototype.copy = function(t) {
                return mn.prototype.copy.call(this, t), this.color.copy(t.color), this
            }, Xc.prototype = Object.create(mr.prototype), Xc.prototype.constructor = Xc, Xc.prototype.isRawShaderMaterial = !0, Yc.prototype = Object.create(mn.prototype), Yc.prototype.constructor = Yc, Yc.prototype.isMeshStandardMaterial = !0, Yc.prototype.copy = function(t) {
                return mn.prototype.copy.call(this, t), this.defines = {
                    STANDARD: ""
                }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
            }, Jc.prototype = Object.create(Yc.prototype), Jc.prototype.constructor = Jc, Jc.prototype.isMeshPhysicalMaterial = !0, Jc.prototype.copy = function(t) {
                return Yc.prototype.copy.call(this, t), this.defines = {
                    STANDARD: "",
                    PHYSICAL: ""
                }, this.reflectivity = t.reflectivity, this.clearcoat = t.clearcoat, this.clearcoatRoughness = t.clearcoatRoughness, t.sheen ? this.sheen = (this.sheen || new hn).copy(t.sheen) : this.sheen = null, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.transparency = t.transparency, this
            }, Zc.prototype = Object.create(mn.prototype), Zc.prototype.constructor = Zc, Zc.prototype.isMeshPhongMaterial = !0, Zc.prototype.copy = function(t) {
                return mn.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
            }, Qc.prototype = Object.create(mn.prototype), Qc.prototype.constructor = Qc, Qc.prototype.isMeshToonMaterial = !0, Qc.prototype.copy = function(t) {
                return mn.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
            }, Kc.prototype = Object.create(mn.prototype), Kc.prototype.constructor = Kc, Kc.prototype.isMeshNormalMaterial = !0, Kc.prototype.copy = function(t) {
                return mn.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
            }, $c.prototype = Object.create(mn.prototype), $c.prototype.constructor = $c, $c.prototype.isMeshLambertMaterial = !0, $c.prototype.copy = function(t) {
                return mn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
            }, th.prototype = Object.create(mn.prototype), th.prototype.constructor = th, th.prototype.isMeshMatcapMaterial = !0, th.prototype.copy = function(t) {
                return mn.prototype.copy.call(this, t), this.defines = {
                    MATCAP: ""
                }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
            }, eh.prototype = Object.create(us.prototype), eh.prototype.constructor = eh, eh.prototype.isLineDashedMaterial = !0, eh.prototype.copy = function(t) {
                return us.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
            };
            var ih = Object.freeze({
                    __proto__: null,
                    ShadowMaterial: qc,
                    SpriteMaterial: Fo,
                    RawShaderMaterial: Xc,
                    ShaderMaterial: mr,
                    PointsMaterial: Ms,
                    MeshPhysicalMaterial: Jc,
                    MeshStandardMaterial: Yc,
                    MeshPhongMaterial: Zc,
                    MeshToonMaterial: Qc,
                    MeshNormalMaterial: Kc,
                    MeshLambertMaterial: $c,
                    MeshDepthMaterial: go,
                    MeshDistanceMaterial: yo,
                    MeshBasicMaterial: vn,
                    MeshMatcapMaterial: th,
                    LineDashedMaterial: eh,
                    LineBasicMaterial: us,
                    Material: mn
                }),
                nh = {
                    arraySlice: function(t, e, i) {
                        return nh.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i)
                    },
                    convertArray: function(t, e, i) {
                        return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
                    },
                    isTypedArray: function(t) {
                        return ArrayBuffer.isView(t) && !(t instanceof DataView)
                    },
                    getKeyframeOrder: function(t) {
                        for (var e = t.length, i = new Array(e), n = 0; n !== e; ++n) i[n] = n;
                        return i.sort((function(e, i) {
                            return t[e] - t[i]
                        })), i
                    },
                    sortedArray: function(t, e, i) {
                        for (var n = t.length, r = new t.constructor(n), a = 0, o = 0; o !== n; ++a)
                            for (var s = i[a] * e, c = 0; c !== e; ++c) r[o++] = t[s + c];
                        return r
                    },
                    flattenJSON: function(t, e, i, n) {
                        for (var r = 1, a = t[0]; void 0 !== a && void 0 === a[n];) a = t[r++];
                        if (void 0 !== a) {
                            var o = a[n];
                            if (void 0 !== o)
                                if (Array.isArray(o))
                                    do {
                                        void 0 !== (o = a[n]) && (e.push(a.time), i.push.apply(i, o)), a = t[r++]
                                    } while (void 0 !== a);
                                else if (void 0 !== o.toArray)
                                do {
                                    void 0 !== (o = a[n]) && (e.push(a.time), o.toArray(i, i.length)), a = t[r++]
                                } while (void 0 !== a);
                            else
                                do {
                                    void 0 !== (o = a[n]) && (e.push(a.time), i.push(o)), a = t[r++]
                                } while (void 0 !== a)
                        }
                    },
                    subclip: function(t, e, i, n, r) {
                        r = r || 30;
                        var a = t.clone();
                        a.name = e;
                        for (var o = [], s = 0; s < a.tracks.length; ++s) {
                            for (var c = a.tracks[s], h = c.getValueSize(), l = [], u = [], p = 0; p < c.times.length; ++p) {
                                var d = c.times[p] * r;
                                if (!(d < i || d >= n)) {
                                    l.push(c.times[p]);
                                    for (var f = 0; f < h; ++f) u.push(c.values[p * h + f])
                                }
                            }
                            0 !== l.length && (c.times = nh.convertArray(l, c.times.constructor), c.values = nh.convertArray(u, c.values.constructor), o.push(c))
                        }
                        a.tracks = o;
                        var m = 1 / 0;
                        for (s = 0; s < a.tracks.length; ++s) m > a.tracks[s].times[0] && (m = a.tracks[s].times[0]);
                        for (s = 0; s < a.tracks.length; ++s) a.tracks[s].shift(-1 * m);
                        return a.resetDuration(), a
                    }
                };

            function rh(t, e, i, n) {
                this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i
            }

            function ah(t, e, i, n) {
                rh.call(this, t, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
            }

            function oh(t, e, i, n) {
                rh.call(this, t, e, i, n)
            }

            function sh(t, e, i, n) {
                rh.call(this, t, e, i, n)
            }

            function ch(t, e, i, n) {
                if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
                if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
                this.name = t, this.times = nh.convertArray(e, this.TimeBufferType), this.values = nh.convertArray(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation)
            }

            function hh(t, e, i) {
                ch.call(this, t, e, i)
            }

            function lh(t, e, i, n) {
                ch.call(this, t, e, i, n)
            }

            function uh(t, e, i, n) {
                ch.call(this, t, e, i, n)
            }

            function ph(t, e, i, n) {
                rh.call(this, t, e, i, n)
            }

            function dh(t, e, i, n) {
                ch.call(this, t, e, i, n)
            }

            function fh(t, e, i, n) {
                ch.call(this, t, e, i, n)
            }

            function mh(t, e, i, n) {
                ch.call(this, t, e, i, n)
            }

            function vh(t, e, i) {
                this.name = t, this.tracks = i, this.duration = void 0 !== e ? e : -1, this.uuid = Oe.generateUUID(), this.duration < 0 && this.resetDuration()
            }

            function gh(t) {
                if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
                var e = function(t) {
                    switch (t.toLowerCase()) {
                        case "scalar":
                        case "double":
                        case "float":
                        case "number":
                        case "integer":
                            return uh;
                        case "vector":
                        case "vector2":
                        case "vector3":
                        case "vector4":
                            return mh;
                        case "color":
                            return lh;
                        case "quaternion":
                            return dh;
                        case "bool":
                        case "boolean":
                            return hh;
                        case "string":
                            return fh
                    }
                    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
                }(t.type);
                if (void 0 === t.times) {
                    var i = [],
                        n = [];
                    nh.flattenJSON(t.keys, i, n, "value"), t.times = i, t.values = n
                }
                return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
            }
            Object.assign(rh.prototype, {
                evaluate: function(t) {
                    var e = this.parameterPositions,
                        i = this._cachedIndex,
                        n = e[i],
                        r = e[i - 1];
                    t: {
                        e: {
                            var a;i: {
                                n: if (!(t < n)) {
                                    for (var o = i + 2;;) {
                                        if (void 0 === n) {
                                            if (t < r) break n;
                                            return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, t, r)
                                        }
                                        if (i === o) break;
                                        if (r = n, t < (n = e[++i])) break e
                                    }
                                    a = e.length;
                                    break i
                                }if (t >= r) break t;
                                var s = e[1];t < s && (i = 2, r = s);
                                for (o = i - 2;;) {
                                    if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, n);
                                    if (i === o) break;
                                    if (n = r, t >= (r = e[--i - 1])) break e
                                }
                                a = i,
                                i = 0
                            }
                            for (; i < a;) {
                                var c = i + a >>> 1;
                                t < e[c] ? a = c : i = c + 1
                            }
                            if (n = e[i], void 0 === (r = e[i - 1])) return this._cachedIndex = 0, this.beforeStart_(0, t, n);
                            if (void 0 === n) return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, r, t)
                        }
                        this._cachedIndex = i,
                        this.intervalChanged_(i, r, n)
                    }
                    return this.interpolate_(i, r, t, n)
                },
                settings: null,
                DefaultSettings_: {},
                getSettings_: function() {
                    return this.settings || this.DefaultSettings_
                },
                copySampleValue_: function(t) {
                    for (var e = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = t * n, a = 0; a !== n; ++a) e[a] = i[r + a];
                    return e
                },
                interpolate_: function() {
                    throw new Error("call to abstract method")
                },
                intervalChanged_: function() {}
            }), Object.assign(rh.prototype, {
                beforeStart_: rh.prototype.copySampleValue_,
                afterEnd_: rh.prototype.copySampleValue_
            }), ah.prototype = Object.assign(Object.create(rh.prototype), {
                constructor: ah,
                DefaultSettings_: {
                    endingStart: pe,
                    endingEnd: pe
                },
                intervalChanged_: function(t, e, i) {
                    var n = this.parameterPositions,
                        r = t - 2,
                        a = t + 1,
                        o = n[r],
                        s = n[a];
                    if (void 0 === o) switch (this.getSettings_().endingStart) {
                        case 2401:
                            r = t, o = 2 * e - i;
                            break;
                        case 2402:
                            o = e + n[r = n.length - 2] - n[r + 1];
                            break;
                        default:
                            r = t, o = i
                    }
                    if (void 0 === s) switch (this.getSettings_().endingEnd) {
                        case 2401:
                            a = t, s = 2 * i - e;
                            break;
                        case 2402:
                            a = 1, s = i + n[1] - n[0];
                            break;
                        default:
                            a = t - 1, s = e
                    }
                    var c = .5 * (i - e),
                        h = this.valueSize;
                    this._weightPrev = c / (e - o), this._weightNext = c / (s - i), this._offsetPrev = r * h, this._offsetNext = a * h
                },
                interpolate_: function(t, e, i, n) {
                    for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (i - e) / (n - e), f = d * d, m = f * d, v = -u * m + 2 * u * f - u * d, g = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, y = (-1 - p) * m + (1.5 + p) * f + .5 * d, x = p * m - p * f, _ = 0; _ !== o; ++_) r[_] = v * a[h + _] + g * a[c + _] + y * a[s + _] + x * a[l + _];
                    return r
                }
            }), oh.prototype = Object.assign(Object.create(rh.prototype), {
                constructor: oh,
                interpolate_: function(t, e, i, n) {
                    for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = (i - e) / (n - e), l = 1 - h, u = 0; u !== o; ++u) r[u] = a[c + u] * l + a[s + u] * h;
                    return r
                }
            }), sh.prototype = Object.assign(Object.create(rh.prototype), {
                constructor: sh,
                interpolate_: function(t) {
                    return this.copySampleValue_(t - 1)
                }
            }), Object.assign(ch, {
                toJSON: function(t) {
                    var e, i = t.constructor;
                    if (void 0 !== i.toJSON) e = i.toJSON(t);
                    else {
                        e = {
                            name: t.name,
                            times: nh.convertArray(t.times, Array),
                            values: nh.convertArray(t.values, Array)
                        };
                        var n = t.getInterpolation();
                        n !== t.DefaultInterpolation && (e.interpolation = n)
                    }
                    return e.type = t.ValueTypeName, e
                }
            }), Object.assign(ch.prototype, {
                constructor: ch,
                TimeBufferType: Float32Array,
                ValueBufferType: Float32Array,
                DefaultInterpolation: 2301,
                InterpolantFactoryMethodDiscrete: function(t) {
                    return new sh(this.times, this.values, this.getValueSize(), t)
                },
                InterpolantFactoryMethodLinear: function(t) {
                    return new oh(this.times, this.values, this.getValueSize(), t)
                },
                InterpolantFactoryMethodSmooth: function(t) {
                    return new ah(this.times, this.values, this.getValueSize(), t)
                },
                setInterpolation: function(t) {
                    var e;
                    switch (t) {
                        case 2300:
                            e = this.InterpolantFactoryMethodDiscrete;
                            break;
                        case 2301:
                            e = this.InterpolantFactoryMethodLinear;
                            break;
                        case 2302:
                            e = this.InterpolantFactoryMethodSmooth
                    }
                    if (void 0 === e) {
                        var i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                        if (void 0 === this.createInterpolant) {
                            if (t === this.DefaultInterpolation) throw new Error(i);
                            this.setInterpolation(this.DefaultInterpolation)
                        }
                        return this
                    }
                    return this.createInterpolant = e, this
                },
                getInterpolation: function() {
                    switch (this.createInterpolant) {
                        case this.InterpolantFactoryMethodDiscrete:
                            return 2300;
                        case this.InterpolantFactoryMethodLinear:
                            return 2301;
                        case this.InterpolantFactoryMethodSmooth:
                            return 2302
                    }
                },
                getValueSize: function() {
                    return this.values.length / this.times.length
                },
                shift: function(t) {
                    if (0 !== t)
                        for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] += t;
                    return this
                },
                scale: function(t) {
                    if (1 !== t)
                        for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] *= t;
                    return this
                },
                trim: function(t, e) {
                    for (var i = this.times, n = i.length, r = 0, a = n - 1; r !== n && i[r] < t;) ++r;
                    for (; - 1 !== a && i[a] > e;) --a;
                    if (++a, 0 !== r || a !== n) {
                        r >= a && (r = (a = Math.max(a, 1)) - 1);
                        var o = this.getValueSize();
                        this.times = nh.arraySlice(i, r, a), this.values = nh.arraySlice(this.values, r * o, a * o)
                    }
                    return this
                },
                validate: function() {
                    var t = !0,
                        e = this.getValueSize();
                    e - Math.floor(e) != 0 && (t = !1);
                    var i = this.times,
                        n = this.values,
                        r = i.length;
                    0 === r && (t = !1);
                    for (var a = null, o = 0; o !== r; o++) {
                        var s = i[o];
                        if ("number" == typeof s && isNaN(s)) {
                            t = !1;
                            break
                        }
                        if (null !== a && a > s) {
                            t = !1;
                            break
                        }
                        a = s
                    }
                    if (void 0 !== n && nh.isTypedArray(n)) {
                        o = 0;
                        for (var c = n.length; o !== c; ++o) {
                            var h = n[o];
                            if (isNaN(h)) {
                                t = !1;
                                break
                            }
                        }
                    }
                    return t
                },
                optimize: function() {
                    for (var t = this.times, e = this.values, i = this.getValueSize(), n = 2302 === this.getInterpolation(), r = 1, a = t.length - 1, o = 1; o < a; ++o) {
                        var s = !1,
                            c = t[o];
                        if (c !== t[o + 1] && (1 !== o || c !== c[0]))
                            if (n) s = !0;
                            else
                                for (var h = o * i, l = h - i, u = h + i, p = 0; p !== i; ++p) {
                                    var d = e[h + p];
                                    if (d !== e[l + p] || d !== e[u + p]) {
                                        s = !0;
                                        break
                                    }
                                }
                        if (s) {
                            if (o !== r) {
                                t[r] = t[o];
                                var f = o * i,
                                    m = r * i;
                                for (p = 0; p !== i; ++p) e[m + p] = e[f + p]
                            }++r
                        }
                    }
                    if (a > 0) {
                        t[r] = t[a];
                        for (f = a * i, m = r * i, p = 0; p !== i; ++p) e[m + p] = e[f + p];
                        ++r
                    }
                    return r !== t.length && (this.times = nh.arraySlice(t, 0, r), this.values = nh.arraySlice(e, 0, r * i)), this
                },
                clone: function() {
                    var t = nh.arraySlice(this.times, 0),
                        e = nh.arraySlice(this.values, 0),
                        i = new(0, this.constructor)(this.name, t, e);
                    return i.createInterpolant = this.createInterpolant, i
                }
            }), hh.prototype = Object.assign(Object.create(ch.prototype), {
                constructor: hh,
                ValueTypeName: "bool",
                ValueBufferType: Array,
                DefaultInterpolation: 2300,
                InterpolantFactoryMethodLinear: void 0,
                InterpolantFactoryMethodSmooth: void 0
            }), lh.prototype = Object.assign(Object.create(ch.prototype), {
                constructor: lh,
                ValueTypeName: "color"
            }), uh.prototype = Object.assign(Object.create(ch.prototype), {
                constructor: uh,
                ValueTypeName: "number"
            }), ph.prototype = Object.assign(Object.create(rh.prototype), {
                constructor: ph,
                interpolate_: function(t, e, i, n) {
                    for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = (i - e) / (n - e), h = s + o; s !== h; s += 4) Ie.slerpFlat(r, 0, a, s - o, a, s, c);
                    return r
                }
            }), dh.prototype = Object.assign(Object.create(ch.prototype), {
                constructor: dh,
                ValueTypeName: "quaternion",
                DefaultInterpolation: 2301,
                InterpolantFactoryMethodLinear: function(t) {
                    return new ph(this.times, this.values, this.getValueSize(), t)
                },
                InterpolantFactoryMethodSmooth: void 0
            }), fh.prototype = Object.assign(Object.create(ch.prototype), {
                constructor: fh,
                ValueTypeName: "string",
                ValueBufferType: Array,
                DefaultInterpolation: 2300,
                InterpolantFactoryMethodLinear: void 0,
                InterpolantFactoryMethodSmooth: void 0
            }), mh.prototype = Object.assign(Object.create(ch.prototype), {
                constructor: mh,
                ValueTypeName: "vector"
            }), Object.assign(vh, {
                parse: function(t) {
                    for (var e = [], i = t.tracks, n = 1 / (t.fps || 1), r = 0, a = i.length; r !== a; ++r) e.push(gh(i[r]).scale(n));
                    return new vh(t.name, t.duration, e)
                },
                toJSON: function(t) {
                    for (var e = [], i = t.tracks, n = {
                            name: t.name,
                            duration: t.duration,
                            tracks: e,
                            uuid: t.uuid
                        }, r = 0, a = i.length; r !== a; ++r) e.push(ch.toJSON(i[r]));
                    return n
                },
                CreateFromMorphTargetSequence: function(t, e, i, n) {
                    for (var r = e.length, a = [], o = 0; o < r; o++) {
                        var s = [],
                            c = [];
                        s.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0);
                        var h = nh.getKeyframeOrder(s);
                        s = nh.sortedArray(s, 1, h), c = nh.sortedArray(c, 1, h), n || 0 !== s[0] || (s.push(r), c.push(c[0])), a.push(new uh(".morphTargetInfluences[" + e[o].name + "]", s, c).scale(1 / i))
                    }
                    return new vh(t, -1, a)
                },
                findByName: function(t, e) {
                    var i = t;
                    if (!Array.isArray(t)) {
                        var n = t;
                        i = n.geometry && n.geometry.animations || n.animations
                    }
                    for (var r = 0; r < i.length; r++)
                        if (i[r].name === e) return i[r];
                    return null
                },
                CreateClipsFromMorphTargetSequences: function(t, e, i) {
                    for (var n = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) {
                        var s = t[a],
                            c = s.name.match(r);
                        if (c && c.length > 1) {
                            var h = n[u = c[1]];
                            h || (n[u] = h = []), h.push(s)
                        }
                    }
                    var l = [];
                    for (var u in n) l.push(vh.CreateFromMorphTargetSequence(u, n[u], e, i));
                    return l
                },
                parseAnimation: function(t, e) {
                    if (!t) return null;
                    for (var i = function(t, e, i, n, r) {
                            if (0 !== i.length) {
                                var a = [],
                                    o = [];
                                nh.flattenJSON(i, a, o, n), 0 !== a.length && r.push(new t(e, a, o))
                            }
                        }, n = [], r = t.name || "default", a = t.length || -1, o = t.fps || 30, s = t.hierarchy || [], c = 0; c < s.length; c++) {
                        var h = s[c].keys;
                        if (h && 0 !== h.length)
                            if (h[0].morphTargets) {
                                for (var l = {}, u = 0; u < h.length; u++)
                                    if (h[u].morphTargets)
                                        for (var p = 0; p < h[u].morphTargets.length; p++) l[h[u].morphTargets[p]] = -1;
                                for (var d in l) {
                                    var f = [],
                                        m = [];
                                    for (p = 0; p !== h[u].morphTargets.length; ++p) {
                                        var v = h[u];
                                        f.push(v.time), m.push(v.morphTarget === d ? 1 : 0)
                                    }
                                    n.push(new uh(".morphTargetInfluence[" + d + "]", f, m))
                                }
                                a = l.length * (o || 1)
                            } else {
                                var g = ".bones[" + e[c].name + "]";
                                i(mh, g + ".position", h, "pos", n), i(dh, g + ".quaternion", h, "rot", n), i(mh, g + ".scale", h, "scl", n)
                            }
                    }
                    return 0 === n.length ? null : new vh(r, a, n)
                }
            }), Object.assign(vh.prototype, {
                resetDuration: function() {
                    for (var t = 0, e = 0, i = this.tracks.length; e !== i; ++e) {
                        var n = this.tracks[e];
                        t = Math.max(t, n.times[n.times.length - 1])
                    }
                    return this.duration = t, this
                },
                trim: function() {
                    for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
                    return this
                },
                validate: function() {
                    for (var t = !0, e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
                    return t
                },
                optimize: function() {
                    for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
                    return this
                },
                clone: function() {
                    for (var t = [], e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
                    return new vh(this.name, this.duration, t)
                }
            });
            var yh = {
                enabled: !1,
                files: {},
                add: function(t, e) {
                    !1 !== this.enabled && (this.files[t] = e)
                },
                get: function(t) {
                    if (!1 !== this.enabled) return this.files[t]
                },
                remove: function(t) {
                    delete this.files[t]
                },
                clear: function() {
                    this.files = {}
                }
            };

            function xh(t, e, i) {
                var n = this,
                    r = !1,
                    a = 0,
                    o = 0,
                    s = void 0,
                    c = [];
                this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function(t) {
                    o++, !1 === r && void 0 !== n.onStart && n.onStart(t, a, o), r = !0
                }, this.itemEnd = function(t) {
                    a++, void 0 !== n.onProgress && n.onProgress(t, a, o), a === o && (r = !1, void 0 !== n.onLoad && n.onLoad())
                }, this.itemError = function(t) {
                    void 0 !== n.onError && n.onError(t)
                }, this.resolveURL = function(t) {
                    return s ? s(t) : t
                }, this.setURLModifier = function(t) {
                    return s = t, this
                }, this.addHandler = function(t, e) {
                    return c.push(t, e), this
                }, this.removeHandler = function(t) {
                    var e = c.indexOf(t);
                    return -1 !== e && c.splice(e, 2), this
                }, this.getHandler = function(t) {
                    for (var e = 0, i = c.length; e < i; e += 2) {
                        var n = c[e],
                            r = c[e + 1];
                        if (n.global && (n.lastIndex = 0), n.test(t)) return r
                    }
                    return null
                }
            }
            var _h = new xh;

            function bh(t) {
                this.manager = void 0 !== t ? t : _h, this.crossOrigin = "anonymous", this.path = "", this.resourcePath = ""
            }
            Object.assign(bh.prototype, {
                load: function() {},
                parse: function() {},
                setCrossOrigin: function(t) {
                    return this.crossOrigin = t, this
                },
                setPath: function(t) {
                    return this.path = t, this
                },
                setResourcePath: function(t) {
                    return this.resourcePath = t, this
                }
            });
            var Mh = {};

            function wh(t) {
                bh.call(this, t)
            }

            function Sh(t) {
                bh.call(this, t)
            }

            function Th(t) {
                bh.call(this, t)
            }

            function Ah(t) {
                bh.call(this, t)
            }

            function Lh(t) {
                bh.call(this, t)
            }

            function Ph(t) {
                bh.call(this, t)
            }

            function Ch(t) {
                bh.call(this, t)
            }

            function Eh() {
                this.type = "Curve", this.arcLengthDivisions = 200
            }

            function Oh(t, e, i, n, r, a, o, s) {
                Eh.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = i || 1, this.yRadius = n || 1, this.aStartAngle = r || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0
            }

            function Nh(t, e, i, n, r, a) {
                Oh.call(this, t, e, i, i, n, r, a), this.type = "ArcCurve"
            }

            function Ih() {
                var t = 0,
                    e = 0,
                    i = 0,
                    n = 0;

                function r(r, a, o, s) {
                    t = r, e = o, i = -3 * r + 3 * a - 2 * o - s, n = 2 * r - 2 * a + o + s
                }
                return {
                    initCatmullRom: function(t, e, i, n, a) {
                        r(e, i, a * (i - t), a * (n - e))
                    },
                    initNonuniformCatmullRom: function(t, e, i, n, a, o, s) {
                        var c = (e - t) / a - (i - t) / (a + o) + (i - e) / o,
                            h = (i - e) / o - (n - e) / (o + s) + (n - i) / s;
                        r(e, i, c *= o, h *= o)
                    },
                    calc: function(r) {
                        var a = r * r;
                        return t + e * r + i * a + n * (a * r)
                    }
                }
            }
            wh.prototype = Object.assign(Object.create(bh.prototype), {
                constructor: wh,
                load: function(t, e, i, n) {
                    void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
                    var r = this,
                        a = yh.get(t);
                    if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function() {
                        e && e(a), r.manager.itemEnd(t)
                    }), 0), a;
                    if (void 0 === Mh[t]) {
                        var o = t.match(/^data:(.*?)(;base64)?,(.*)$/);
                        if (o) {
                            var s = o[1],
                                c = !!o[2],
                                h = o[3];
                            h = decodeURIComponent(h), c && (h = atob(h));
                            try {
                                var l, u = (this.responseType || "").toLowerCase();
                                switch (u) {
                                    case "arraybuffer":
                                    case "blob":
                                        for (var p = new Uint8Array(h.length), d = 0; d < h.length; d++) p[d] = h.charCodeAt(d);
                                        l = "blob" === u ? new Blob([p.buffer], {
                                            type: s
                                        }) : p.buffer;
                                        break;
                                    case "document":
                                        var f = new DOMParser;
                                        l = f.parseFromString(h, s);
                                        break;
                                    case "json":
                                        l = JSON.parse(h);
                                        break;
                                    default:
                                        l = h
                                }
                                setTimeout((function() {
                                    e && e(l), r.manager.itemEnd(t)
                                }), 0)
                            } catch (e) {
                                setTimeout((function() {
                                    n && n(e), r.manager.itemError(t), r.manager.itemEnd(t)
                                }), 0)
                            }
                        } else {
                            Mh[t] = [], Mh[t].push({
                                onLoad: e,
                                onProgress: i,
                                onError: n
                            });
                            var m = new XMLHttpRequest;
                            for (var v in m.open("GET", t, !0), m.addEventListener("load", (function(e) {
                                    var i = this.response,
                                        n = Mh[t];
                                    if (delete Mh[t], 200 === this.status || 0 === this.status) {
                                        this.status, yh.add(t, i);
                                        for (var a = 0, o = n.length; a < o; a++) {
                                            (s = n[a]).onLoad && s.onLoad(i)
                                        }
                                        r.manager.itemEnd(t)
                                    } else {
                                        for (a = 0, o = n.length; a < o; a++) {
                                            var s;
                                            (s = n[a]).onError && s.onError(e)
                                        }
                                        r.manager.itemError(t), r.manager.itemEnd(t)
                                    }
                                }), !1), m.addEventListener("progress", (function(e) {
                                    for (var i = Mh[t], n = 0, r = i.length; n < r; n++) {
                                        var a = i[n];
                                        a.onProgress && a.onProgress(e)
                                    }
                                }), !1), m.addEventListener("error", (function(e) {
                                    var i = Mh[t];
                                    delete Mh[t];
                                    for (var n = 0, a = i.length; n < a; n++) {
                                        var o = i[n];
                                        o.onError && o.onError(e)
                                    }
                                    r.manager.itemError(t), r.manager.itemEnd(t)
                                }), !1), m.addEventListener("abort", (function(e) {
                                    var i = Mh[t];
                                    delete Mh[t];
                                    for (var n = 0, a = i.length; n < a; n++) {
                                        var o = i[n];
                                        o.onError && o.onError(e)
                                    }
                                    r.manager.itemError(t), r.manager.itemEnd(t)
                                }), !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) m.setRequestHeader(v, this.requestHeader[v]);
                            m.send(null)
                        }
                        return r.manager.itemStart(t), m
                    }
                    Mh[t].push({
                        onLoad: e,
                        onProgress: i,
                        onError: n
                    })
                },
                setResponseType: function(t) {
                    return this.responseType = t, this
                },
                setWithCredentials: function(t) {
                    return this.withCredentials = t, this
                },
                setMimeType: function(t) {
                    return this.mimeType = t, this
                },
                setRequestHeader: function(t) {
                    return this.requestHeader = t, this
                }
            }), Sh.prototype = Object.assign(Object.create(bh.prototype), {
                constructor: Sh,
                load: function(t, e, i, n) {
                    var r = this,
                        a = new wh(r.manager);
                    a.setPath(r.path), a.load(t, (function(t) {
                        e(r.parse(JSON.parse(t)))
                    }), i, n)
                },
                parse: function(t) {
                    for (var e = [], i = 0; i < t.length; i++) {
                        var n = vh.parse(t[i]);
                        e.push(n)
                    }
                    return e
                }
            }), Th.prototype = Object.assign(Object.create(bh.prototype), {
                constructor: Th,
                load: function(t, e, i, n) {
                    var r = this,
                        a = [],
                        o = new Es;
                    o.image = a;
                    var s = new wh(this.manager);

                    function c(c) {
                        s.load(t[c], (function(t) {
                            var i = r.parse(t, !0);
                            a[c] = {
                                width: i.width,
                                height: i.height,
                                format: i.format,
                                mipmaps: i.mipmaps
                            }, 6 === (h += 1) && (1 === i.mipmapCount && (o.minFilter = dt), o.format = i.format, o.needsUpdate = !0, e && e(o))
                        }), i, n)
                    }
                    if (s.setPath(this.path), s.setResponseType("arraybuffer"), Array.isArray(t))
                        for (var h = 0, l = 0, u = t.length; l < u; ++l) c(l);
                    else s.load(t, (function(t) {
                        var i = r.parse(t, !0);
                        if (i.isCubemap)
                            for (var n = i.mipmaps.length / i.mipmapCount, s = 0; s < n; s++) {
                                a[s] = {
                                    mipmaps: []
                                };
                                for (var c = 0; c < i.mipmapCount; c++) a[s].mipmaps.push(i.mipmaps[s * i.mipmapCount + c]), a[s].format = i.format, a[s].width = i.width, a[s].height = i.height
                            } else o.image.width = i.width, o.image.height = i.height, o.mipmaps = i.mipmaps;
                        1 === i.mipmapCount && (o.minFilter = dt), o.format = i.format, o.needsUpdate = !0, e && e(o)
                    }), i, n);
                    return o
                }
            }), Ah.prototype = Object.assign(Object.create(bh.prototype), {
                constructor: Ah,
                load: function(t, e, i, n) {
                    var r = this,
                        a = new Mr,
                        o = new wh(this.manager);
                    return o.setResponseType("arraybuffer"), o.setPath(this.path), o.load(t, (function(t) {
                        var i = r.parse(t);
                        i && (void 0 !== i.image ? a.image = i.image : void 0 !== i.data && (a.image.width = i.width, a.image.height = i.height, a.image.data = i.data), a.wrapS = void 0 !== i.wrapS ? i.wrapS : ct, a.wrapT = void 0 !== i.wrapT ? i.wrapT : ct, a.magFilter = void 0 !== i.magFilter ? i.magFilter : dt, a.minFilter = void 0 !== i.minFilter ? i.minFilter : dt, a.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.format && (a.format = i.format), void 0 !== i.type && (a.type = i.type), void 0 !== i.mipmaps && (a.mipmaps = i.mipmaps, a.minFilter = mt), 1 === i.mipmapCount && (a.minFilter = dt), a.needsUpdate = !0, e && e(a, i))
                    }), i, n), a
                }
            }), Lh.prototype = Object.assign(Object.create(bh.prototype), {
                constructor: Lh,
                load: function(t, e, i, n) {
                    void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
                    var r = this,
                        a = yh.get(t);
                    if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function() {
                        e && e(a), r.manager.itemEnd(t)
                    }), 0), a;
                    var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

                    function s() {
                        o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), yh.add(t, this), e && e(this), r.manager.itemEnd(t)
                    }

                    function c(e) {
                        o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), n && n(e), r.manager.itemError(t), r.manager.itemEnd(t)
                    }
                    return o.addEventListener("load", s, !1), o.addEventListener("error", c, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(t), o.src = t, o
                }
            }), Ph.prototype = Object.assign(Object.create(bh.prototype), {
                constructor: Ph,
                load: function(t, e, i, n) {
                    var r = new Wr,
                        a = new Lh(this.manager);
                    a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
                    var o = 0;

                    function s(i) {
                        a.load(t[i], (function(t) {
                            r.images[i] = t, 6 === ++o && (r.needsUpdate = !0, e && e(r))
                        }), void 0, n)
                    }
                    for (var c = 0; c < t.length; ++c) s(c);
                    return r
                }
            }), Ch.prototype = Object.assign(Object.create(bh.prototype), {
                constructor: Ch,
                load: function(t, e, i, n) {
                    var r = new ke,
                        a = new Lh(this.manager);
                    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, (function(i) {
                        r.image = i;
                        var n = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
                        r.format = n ? Ct : Et, r.needsUpdate = !0, void 0 !== e && e(r)
                    }), i, n), r
                }
            }), Object.assign(Eh.prototype, {
                getPoint: function() {
                    return null
                },
                getPointAt: function(t, e) {
                    var i = this.getUtoTmapping(t);
                    return this.getPoint(i, e)
                },
                getPoints: function(t) {
                    void 0 === t && (t = 5);
                    for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t));
                    return e
                },
                getSpacedPoints: function(t) {
                    void 0 === t && (t = 5);
                    for (var e = [], i = 0; i <= t; i++) e.push(this.getPointAt(i / t));
                    return e
                },
                getLength: function() {
                    var t = this.getLengths();
                    return t[t.length - 1]
                },
                getLengths: function(t) {
                    if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
                    this.needsUpdate = !1;
                    var e, i, n = [],
                        r = this.getPoint(0),
                        a = 0;
                    for (n.push(0), i = 1; i <= t; i++) a += (e = this.getPoint(i / t)).distanceTo(r), n.push(a), r = e;
                    return this.cacheArcLengths = n, n
                },
                updateArcLengths: function() {
                    this.needsUpdate = !0, this.getLengths()
                },
                getUtoTmapping: function(t, e) {
                    var i, n = this.getLengths(),
                        r = 0,
                        a = n.length;
                    i = e || t * n[a - 1];
                    for (var o, s = 0, c = a - 1; s <= c;)
                        if ((o = n[r = Math.floor(s + (c - s) / 2)] - i) < 0) s = r + 1;
                        else {
                            if (!(o > 0)) {
                                c = r;
                                break
                            }
                            c = r - 1
                        }
                    if (n[r = c] === i) return r / (a - 1);
                    var h = n[r];
                    return (r + (i - h) / (n[r + 1] - h)) / (a - 1)
                },
                getTangent: function(t) {
                    var e = t - 1e-4,
                        i = t + 1e-4;
                    e < 0 && (e = 0), i > 1 && (i = 1);
                    var n = this.getPoint(e);
                    return this.getPoint(i).clone().sub(n).normalize()
                },
                getTangentAt: function(t) {
                    var e = this.getUtoTmapping(t);
                    return this.getTangent(e)
                },
                computeFrenetFrames: function(t, e) {
                    var i, n, r, a = new Re,
                        o = [],
                        s = [],
                        c = [],
                        h = new Re,
                        l = new $e;
                    for (i = 0; i <= t; i++) n = i / t, o[i] = this.getTangentAt(n), o[i].normalize();
                    s[0] = new Re, c[0] = new Re;
                    var u = Number.MAX_VALUE,
                        p = Math.abs(o[0].x),
                        d = Math.abs(o[0].y),
                        f = Math.abs(o[0].z);
                    for (p <= u && (u = p, a.set(1, 0, 0)), d <= u && (u = d, a.set(0, 1, 0)), f <= u && a.set(0, 0, 1), h.crossVectors(o[0], a).normalize(), s[0].crossVectors(o[0], h), c[0].crossVectors(o[0], s[0]), i = 1; i <= t; i++) s[i] = s[i - 1].clone(), c[i] = c[i - 1].clone(), h.crossVectors(o[i - 1], o[i]), h.length() > Number.EPSILON && (h.normalize(), r = Math.acos(Oe.clamp(o[i - 1].dot(o[i]), -1, 1)), s[i].applyMatrix4(l.makeRotationAxis(h, r))), c[i].crossVectors(o[i], s[i]);
                    if (!0 === e)
                        for (r = Math.acos(Oe.clamp(s[0].dot(s[t]), -1, 1)), r /= t, o[0].dot(h.crossVectors(s[0], s[t])) > 0 && (r = -r), i = 1; i <= t; i++) s[i].applyMatrix4(l.makeRotationAxis(o[i], r * i)), c[i].crossVectors(o[i], s[i]);
                    return {
                        tangents: o,
                        normals: s,
                        binormals: c
                    }
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.arcLengthDivisions = t.arcLengthDivisions, this
                },
                toJSON: function() {
                    var t = {
                        metadata: {
                            version: 4.5,
                            type: "Curve",
                            generator: "Curve.toJSON"
                        }
                    };
                    return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
                },
                fromJSON: function(t) {
                    return this.arcLengthDivisions = t.arcLengthDivisions, this
                }
            }), Oh.prototype = Object.create(Eh.prototype), Oh.prototype.constructor = Oh, Oh.prototype.isEllipseCurve = !0, Oh.prototype.getPoint = function(t, e) {
                for (var i = e || new Ne, n = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, a = Math.abs(r) < Number.EPSILON; r < 0;) r += n;
                for (; r > n;) r -= n;
                r < Number.EPSILON && (r = a ? 0 : n), !0 !== this.aClockwise || a || (r === n ? r = -n : r -= n);
                var o = this.aStartAngle + t * r,
                    s = this.aX + this.xRadius * Math.cos(o),
                    c = this.aY + this.yRadius * Math.sin(o);
                if (0 !== this.aRotation) {
                    var h = Math.cos(this.aRotation),
                        l = Math.sin(this.aRotation),
                        u = s - this.aX,
                        p = c - this.aY;
                    s = u * h - p * l + this.aX, c = u * l + p * h + this.aY
                }
                return i.set(s, c)
            }, Oh.prototype.copy = function(t) {
                return Eh.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
            }, Oh.prototype.toJSON = function() {
                var t = Eh.prototype.toJSON.call(this);
                return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
            }, Oh.prototype.fromJSON = function(t) {
                return Eh.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
            }, Nh.prototype = Object.create(Oh.prototype), Nh.prototype.constructor = Nh, Nh.prototype.isArcCurve = !0;
            var Dh = new Re,
                zh = new Ih,
                Rh = new Ih,
                Fh = new Ih;

            function Uh(t, e, i, n) {
                Eh.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this.curveType = i || "centripetal", this.tension = n || .5
            }

            function Bh(t, e, i, n, r) {
                var a = .5 * (n - e),
                    o = .5 * (r - i),
                    s = t * t;
                return (2 * i - 2 * n + a + o) * (t * s) + (-3 * i + 3 * n - 2 * a - o) * s + a * t + i
            }

            function Vh(t, e, i, n) {
                return function(t, e) {
                    var i = 1 - t;
                    return i * i * e
                }(t, e) + function(t, e) {
                    return 2 * (1 - t) * t * e
                }(t, i) + function(t, e) {
                    return t * t * e
                }(t, n)
            }

            function Gh(t, e, i, n, r) {
                return function(t, e) {
                    var i = 1 - t;
                    return i * i * i * e
                }(t, e) + function(t, e) {
                    var i = 1 - t;
                    return 3 * i * i * t * e
                }(t, i) + function(t, e) {
                    return 3 * (1 - t) * t * t * e
                }(t, n) + function(t, e) {
                    return t * t * t * e
                }(t, r)
            }

            function kh(t, e, i, n) {
                Eh.call(this), this.type = "CubicBezierCurve", this.v0 = t || new Ne, this.v1 = e || new Ne, this.v2 = i || new Ne, this.v3 = n || new Ne
            }

            function jh(t, e, i, n) {
                Eh.call(this), this.type = "CubicBezierCurve3", this.v0 = t || new Re, this.v1 = e || new Re, this.v2 = i || new Re, this.v3 = n || new Re
            }

            function Wh(t, e) {
                Eh.call(this), this.type = "LineCurve", this.v1 = t || new Ne, this.v2 = e || new Ne
            }

            function Hh(t, e) {
                Eh.call(this), this.type = "LineCurve3", this.v1 = t || new Re, this.v2 = e || new Re
            }

            function qh(t, e, i) {
                Eh.call(this), this.type = "QuadraticBezierCurve", this.v0 = t || new Ne, this.v1 = e || new Ne, this.v2 = i || new Ne
            }

            function Xh(t, e, i) {
                Eh.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t || new Re, this.v1 = e || new Re, this.v2 = i || new Re
            }

            function Yh(t) {
                Eh.call(this), this.type = "SplineCurve", this.points = t || []
            }
            Uh.prototype = Object.create(Eh.prototype), Uh.prototype.constructor = Uh, Uh.prototype.isCatmullRomCurve3 = !0, Uh.prototype.getPoint = function(t, e) {
                var i, n, r, a, o = e || new Re,
                    s = this.points,
                    c = s.length,
                    h = (c - (this.closed ? 0 : 1)) * t,
                    l = Math.floor(h),
                    u = h - l;
                if (this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / c) + 1) * c : 0 === u && l === c - 1 && (l = c - 2, u = 1), this.closed || l > 0 ? i = s[(l - 1) % c] : (Dh.subVectors(s[0], s[1]).add(s[0]), i = Dh), n = s[l % c], r = s[(l + 1) % c], this.closed || l + 2 < c ? a = s[(l + 2) % c] : (Dh.subVectors(s[c - 1], s[c - 2]).add(s[c - 1]), a = Dh), "centripetal" === this.curveType || "chordal" === this.curveType) {
                    var p = "chordal" === this.curveType ? .5 : .25,
                        d = Math.pow(i.distanceToSquared(n), p),
                        f = Math.pow(n.distanceToSquared(r), p),
                        m = Math.pow(r.distanceToSquared(a), p);
                    f < 1e-4 && (f = 1), d < 1e-4 && (d = f), m < 1e-4 && (m = f), zh.initNonuniformCatmullRom(i.x, n.x, r.x, a.x, d, f, m), Rh.initNonuniformCatmullRom(i.y, n.y, r.y, a.y, d, f, m), Fh.initNonuniformCatmullRom(i.z, n.z, r.z, a.z, d, f, m)
                } else "catmullrom" === this.curveType && (zh.initCatmullRom(i.x, n.x, r.x, a.x, this.tension), Rh.initCatmullRom(i.y, n.y, r.y, a.y, this.tension), Fh.initCatmullRom(i.z, n.z, r.z, a.z, this.tension));
                return o.set(zh.calc(u), Rh.calc(u), Fh.calc(u)), o
            }, Uh.prototype.copy = function(t) {
                Eh.prototype.copy.call(this, t), this.points = [];
                for (var e = 0, i = t.points.length; e < i; e++) {
                    var n = t.points[e];
                    this.points.push(n.clone())
                }
                return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
            }, Uh.prototype.toJSON = function() {
                var t = Eh.prototype.toJSON.call(this);
                t.points = [];
                for (var e = 0, i = this.points.length; e < i; e++) {
                    var n = this.points[e];
                    t.points.push(n.toArray())
                }
                return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
            }, Uh.prototype.fromJSON = function(t) {
                Eh.prototype.fromJSON.call(this, t), this.points = [];
                for (var e = 0, i = t.points.length; e < i; e++) {
                    var n = t.points[e];
                    this.points.push((new Re).fromArray(n))
                }
                return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
            }, kh.prototype = Object.create(Eh.prototype), kh.prototype.constructor = kh, kh.prototype.isCubicBezierCurve = !0, kh.prototype.getPoint = function(t, e) {
                var i = e || new Ne,
                    n = this.v0,
                    r = this.v1,
                    a = this.v2,
                    o = this.v3;
                return i.set(Gh(t, n.x, r.x, a.x, o.x), Gh(t, n.y, r.y, a.y, o.y)), i
            }, kh.prototype.copy = function(t) {
                return Eh.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
            }, kh.prototype.toJSON = function() {
                var t = Eh.prototype.toJSON.call(this);
                return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
            }, kh.prototype.fromJSON = function(t) {
                return Eh.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
            }, jh.prototype = Object.create(Eh.prototype), jh.prototype.constructor = jh, jh.prototype.isCubicBezierCurve3 = !0, jh.prototype.getPoint = function(t, e) {
                var i = e || new Re,
                    n = this.v0,
                    r = this.v1,
                    a = this.v2,
                    o = this.v3;
                return i.set(Gh(t, n.x, r.x, a.x, o.x), Gh(t, n.y, r.y, a.y, o.y), Gh(t, n.z, r.z, a.z, o.z)), i
            }, jh.prototype.copy = function(t) {
                return Eh.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
            }, jh.prototype.toJSON = function() {
                var t = Eh.prototype.toJSON.call(this);
                return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
            }, jh.prototype.fromJSON = function(t) {
                return Eh.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
            }, Wh.prototype = Object.create(Eh.prototype), Wh.prototype.constructor = Wh, Wh.prototype.isLineCurve = !0, Wh.prototype.getPoint = function(t, e) {
                var i = e || new Ne;
                return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i
            }, Wh.prototype.getPointAt = function(t, e) {
                return this.getPoint(t, e)
            }, Wh.prototype.getTangent = function() {
                return this.v2.clone().sub(this.v1).normalize()
            }, Wh.prototype.copy = function(t) {
                return Eh.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
            }, Wh.prototype.toJSON = function() {
                var t = Eh.prototype.toJSON.call(this);
                return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
            }, Wh.prototype.fromJSON = function(t) {
                return Eh.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
            }, Hh.prototype = Object.create(Eh.prototype), Hh.prototype.constructor = Hh, Hh.prototype.isLineCurve3 = !0, Hh.prototype.getPoint = function(t, e) {
                var i = e || new Re;
                return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i
            }, Hh.prototype.getPointAt = function(t, e) {
                return this.getPoint(t, e)
            }, Hh.prototype.copy = function(t) {
                return Eh.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
            }, Hh.prototype.toJSON = function() {
                var t = Eh.prototype.toJSON.call(this);
                return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
            }, Hh.prototype.fromJSON = function(t) {
                return Eh.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
            }, qh.prototype = Object.create(Eh.prototype), qh.prototype.constructor = qh, qh.prototype.isQuadraticBezierCurve = !0, qh.prototype.getPoint = function(t, e) {
                var i = e || new Ne,
                    n = this.v0,
                    r = this.v1,
                    a = this.v2;
                return i.set(Vh(t, n.x, r.x, a.x), Vh(t, n.y, r.y, a.y)), i
            }, qh.prototype.copy = function(t) {
                return Eh.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
            }, qh.prototype.toJSON = function() {
                var t = Eh.prototype.toJSON.call(this);
                return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
            }, qh.prototype.fromJSON = function(t) {
                return Eh.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
            }, Xh.prototype = Object.create(Eh.prototype), Xh.prototype.constructor = Xh, Xh.prototype.isQuadraticBezierCurve3 = !0, Xh.prototype.getPoint = function(t, e) {
                var i = e || new Re,
                    n = this.v0,
                    r = this.v1,
                    a = this.v2;
                return i.set(Vh(t, n.x, r.x, a.x), Vh(t, n.y, r.y, a.y), Vh(t, n.z, r.z, a.z)), i
            }, Xh.prototype.copy = function(t) {
                return Eh.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
            }, Xh.prototype.toJSON = function() {
                var t = Eh.prototype.toJSON.call(this);
                return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
            }, Xh.prototype.fromJSON = function(t) {
                return Eh.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
            }, Yh.prototype = Object.create(Eh.prototype), Yh.prototype.constructor = Yh, Yh.prototype.isSplineCurve = !0, Yh.prototype.getPoint = function(t, e) {
                var i = e || new Ne,
                    n = this.points,
                    r = (n.length - 1) * t,
                    a = Math.floor(r),
                    o = r - a,
                    s = n[0 === a ? a : a - 1],
                    c = n[a],
                    h = n[a > n.length - 2 ? n.length - 1 : a + 1],
                    l = n[a > n.length - 3 ? n.length - 1 : a + 2];
                return i.set(Bh(o, s.x, c.x, h.x, l.x), Bh(o, s.y, c.y, h.y, l.y)), i
            }, Yh.prototype.copy = function(t) {
                Eh.prototype.copy.call(this, t), this.points = [];
                for (var e = 0, i = t.points.length; e < i; e++) {
                    var n = t.points[e];
                    this.points.push(n.clone())
                }
                return this
            }, Yh.prototype.toJSON = function() {
                var t = Eh.prototype.toJSON.call(this);
                t.points = [];
                for (var e = 0, i = this.points.length; e < i; e++) {
                    var n = this.points[e];
                    t.points.push(n.toArray())
                }
                return t
            }, Yh.prototype.fromJSON = function(t) {
                Eh.prototype.fromJSON.call(this, t), this.points = [];
                for (var e = 0, i = t.points.length; e < i; e++) {
                    var n = t.points[e];
                    this.points.push((new Ne).fromArray(n))
                }
                return this
            };
            var Jh = Object.freeze({
                __proto__: null,
                ArcCurve: Nh,
                CatmullRomCurve3: Uh,
                CubicBezierCurve: kh,
                CubicBezierCurve3: jh,
                EllipseCurve: Oh,
                LineCurve: Wh,
                LineCurve3: Hh,
                QuadraticBezierCurve: qh,
                QuadraticBezierCurve3: Xh,
                SplineCurve: Yh
            });

            function Zh() {
                Eh.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
            }

            function Qh(t) {
                Zh.call(this), this.type = "Path", this.currentPoint = new Ne, t && this.setFromPoints(t)
            }

            function Kh(t) {
                Qh.call(this, t), this.uuid = Oe.generateUUID(), this.type = "Shape", this.holes = []
            }

            function $h(t, e) {
                gi.call(this), this.type = "Light", this.color = new hn(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
            }

            function tl(t, e, i) {
                $h.call(this, t, i), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(gi.DefaultUp), this.updateMatrix(), this.groundColor = new hn(e)
            }

            function el(t) {
                this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new Ne(512, 512), this.map = null, this.mapPass = null, this.matrix = new $e, this._frustum = new Tr, this._frameExtents = new Ne(1, 1), this._viewportCount = 1, this._viewports = [new je(0, 0, 1, 1)]
            }

            function il() {
                el.call(this, new gr(50, 1, .5, 500))
            }

            function nl(t, e, i, n, r, a) {
                $h.call(this, t, e), this.type = "SpotLight", this.position.copy(gi.DefaultUp), this.updateMatrix(), this.target = new gi, Object.defineProperty(this, "power", {
                    get: function() {
                        return this.intensity * Math.PI
                    },
                    set: function(t) {
                        this.intensity = t / Math.PI
                    }
                }), this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new il
            }

            function rl() {
                el.call(this, new gr(90, 1, .5, 500)), this._frameExtents = new Ne(4, 2), this._viewportCount = 6, this._viewports = [new je(2, 1, 1, 1), new je(0, 1, 1, 1), new je(3, 1, 1, 1), new je(1, 1, 1, 1), new je(3, 0, 1, 1), new je(1, 0, 1, 1)], this._cubeDirections = [new Re(1, 0, 0), new Re(-1, 0, 0), new Re(0, 0, 1), new Re(0, 0, -1), new Re(0, 1, 0), new Re(0, -1, 0)], this._cubeUps = [new Re(0, 1, 0), new Re(0, 1, 0), new Re(0, 1, 0), new Re(0, 1, 0), new Re(0, 0, 1), new Re(0, 0, -1)]
            }

            function al(t, e, i, n) {
                $h.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
                    get: function() {
                        return 4 * this.intensity * Math.PI
                    },
                    set: function(t) {
                        this.intensity = t / (4 * Math.PI)
                    }
                }), this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new rl
            }

            function ol(t, e, i, n, r, a) {
                vr.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = void 0 !== t ? t : -1, this.right = void 0 !== e ? e : 1, this.top = void 0 !== i ? i : 1, this.bottom = void 0 !== n ? n : -1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
            }

            function sl() {
                el.call(this, new ol(-5, 5, 5, -5, .5, 500))
            }

            function cl(t, e) {
                $h.call(this, t, e), this.type = "DirectionalLight", this.position.copy(gi.DefaultUp), this.updateMatrix(), this.target = new gi, this.shadow = new sl
            }

            function hl(t, e) {
                $h.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
            }

            function ll(t, e, i, n) {
                $h.call(this, t, e), this.type = "RectAreaLight", this.width = void 0 !== i ? i : 10, this.height = void 0 !== n ? n : 10
            }

            function ul(t) {
                bh.call(this, t), this.textures = {}
            }
            Zh.prototype = Object.assign(Object.create(Eh.prototype), {
                constructor: Zh,
                add: function(t) {
                    this.curves.push(t)
                },
                closePath: function() {
                    var t = this.curves[0].getPoint(0),
                        e = this.curves[this.curves.length - 1].getPoint(1);
                    t.equals(e) || this.curves.push(new Wh(e, t))
                },
                getPoint: function(t) {
                    for (var e = t * this.getLength(), i = this.getCurveLengths(), n = 0; n < i.length;) {
                        if (i[n] >= e) {
                            var r = i[n] - e,
                                a = this.curves[n],
                                o = a.getLength(),
                                s = 0 === o ? 0 : 1 - r / o;
                            return a.getPointAt(s)
                        }
                        n++
                    }
                    return null
                },
                getLength: function() {
                    var t = this.getCurveLengths();
                    return t[t.length - 1]
                },
                updateArcLengths: function() {
                    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
                },
                getCurveLengths: function() {
                    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
                    for (var t = [], e = 0, i = 0, n = this.curves.length; i < n; i++) e += this.curves[i].getLength(), t.push(e);
                    return this.cacheLengths = t, t
                },
                getSpacedPoints: function(t) {
                    void 0 === t && (t = 40);
                    for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t));
                    return this.autoClose && e.push(e[0]), e
                },
                getPoints: function(t) {
                    t = t || 12;
                    for (var e, i = [], n = 0, r = this.curves; n < r.length; n++)
                        for (var a = r[n], o = a && a.isEllipseCurve ? 2 * t : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? t * a.points.length : t, s = a.getPoints(o), c = 0; c < s.length; c++) {
                            var h = s[c];
                            e && e.equals(h) || (i.push(h), e = h)
                        }
                    return this.autoClose && i.length > 1 && !i[i.length - 1].equals(i[0]) && i.push(i[0]), i
                },
                copy: function(t) {
                    Eh.prototype.copy.call(this, t), this.curves = [];
                    for (var e = 0, i = t.curves.length; e < i; e++) {
                        var n = t.curves[e];
                        this.curves.push(n.clone())
                    }
                    return this.autoClose = t.autoClose, this
                },
                toJSON: function() {
                    var t = Eh.prototype.toJSON.call(this);
                    t.autoClose = this.autoClose, t.curves = [];
                    for (var e = 0, i = this.curves.length; e < i; e++) {
                        var n = this.curves[e];
                        t.curves.push(n.toJSON())
                    }
                    return t
                },
                fromJSON: function(t) {
                    Eh.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = [];
                    for (var e = 0, i = t.curves.length; e < i; e++) {
                        var n = t.curves[e];
                        this.curves.push((new Jh[n.type]).fromJSON(n))
                    }
                    return this
                }
            }), Qh.prototype = Object.assign(Object.create(Zh.prototype), {
                constructor: Qh,
                setFromPoints: function(t) {
                    this.moveTo(t[0].x, t[0].y);
                    for (var e = 1, i = t.length; e < i; e++) this.lineTo(t[e].x, t[e].y);
                    return this
                },
                moveTo: function(t, e) {
                    return this.currentPoint.set(t, e), this
                },
                lineTo: function(t, e) {
                    var i = new Wh(this.currentPoint.clone(), new Ne(t, e));
                    return this.curves.push(i), this.currentPoint.set(t, e), this
                },
                quadraticCurveTo: function(t, e, i, n) {
                    var r = new qh(this.currentPoint.clone(), new Ne(t, e), new Ne(i, n));
                    return this.curves.push(r), this.currentPoint.set(i, n), this
                },
                bezierCurveTo: function(t, e, i, n, r, a) {
                    var o = new kh(this.currentPoint.clone(), new Ne(t, e), new Ne(i, n), new Ne(r, a));
                    return this.curves.push(o), this.currentPoint.set(r, a), this
                },
                splineThru: function(t) {
                    var e = new Yh([this.currentPoint.clone()].concat(t));
                    return this.curves.push(e), this.currentPoint.copy(t[t.length - 1]), this
                },
                arc: function(t, e, i, n, r, a) {
                    var o = this.currentPoint.x,
                        s = this.currentPoint.y;
                    return this.absarc(t + o, e + s, i, n, r, a), this
                },
                absarc: function(t, e, i, n, r, a) {
                    return this.absellipse(t, e, i, i, n, r, a), this
                },
                ellipse: function(t, e, i, n, r, a, o, s) {
                    var c = this.currentPoint.x,
                        h = this.currentPoint.y;
                    return this.absellipse(t + c, e + h, i, n, r, a, o, s), this
                },
                absellipse: function(t, e, i, n, r, a, o, s) {
                    var c = new Oh(t, e, i, n, r, a, o, s);
                    if (this.curves.length > 0) {
                        var h = c.getPoint(0);
                        h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
                    }
                    this.curves.push(c);
                    var l = c.getPoint(1);
                    return this.currentPoint.copy(l), this
                },
                copy: function(t) {
                    return Zh.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this
                },
                toJSON: function() {
                    var t = Zh.prototype.toJSON.call(this);
                    return t.currentPoint = this.currentPoint.toArray(), t
                },
                fromJSON: function(t) {
                    return Zh.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this
                }
            }), Kh.prototype = Object.assign(Object.create(Qh.prototype), {
                constructor: Kh,
                getPointsHoles: function(t) {
                    for (var e = [], i = 0, n = this.holes.length; i < n; i++) e[i] = this.holes[i].getPoints(t);
                    return e
                },
                extractPoints: function(t) {
                    return {
                        shape: this.getPoints(t),
                        holes: this.getPointsHoles(t)
                    }
                },
                copy: function(t) {
                    Qh.prototype.copy.call(this, t), this.holes = [];
                    for (var e = 0, i = t.holes.length; e < i; e++) {
                        var n = t.holes[e];
                        this.holes.push(n.clone())
                    }
                    return this
                },
                toJSON: function() {
                    var t = Qh.prototype.toJSON.call(this);
                    t.uuid = this.uuid, t.holes = [];
                    for (var e = 0, i = this.holes.length; e < i; e++) {
                        var n = this.holes[e];
                        t.holes.push(n.toJSON())
                    }
                    return t
                },
                fromJSON: function(t) {
                    Qh.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = [];
                    for (var e = 0, i = t.holes.length; e < i; e++) {
                        var n = t.holes[e];
                        this.holes.push((new Qh).fromJSON(n))
                    }
                    return this
                }
            }), $h.prototype = Object.assign(Object.create(gi.prototype), {
                constructor: $h,
                isLight: !0,
                copy: function(t) {
                    return gi.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
                },
                toJSON: function(t) {
                    var e = gi.prototype.toJSON.call(this, t);
                    return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
                }
            }), tl.prototype = Object.assign(Object.create($h.prototype), {
                constructor: tl,
                isHemisphereLight: !0,
                copy: function(t) {
                    return $h.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
                }
            }), Object.assign(el.prototype, {
                _projScreenMatrix: new $e,
                _lightPositionWorld: new Re,
                _lookTarget: new Re,
                getViewportCount: function() {
                    return this._viewportCount
                },
                getFrustum: function() {
                    return this._frustum
                },
                updateMatrices: function(t) {
                    var e = this.camera,
                        i = this.matrix,
                        n = this._projScreenMatrix,
                        r = this._lookTarget,
                        a = this._lightPositionWorld;
                    a.setFromMatrixPosition(t.matrixWorld), e.position.copy(a), r.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(r), e.updateMatrixWorld(), n.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromMatrix(n), i.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), i.multiply(e.projectionMatrix), i.multiply(e.matrixWorldInverse)
                },
                getViewport: function(t) {
                    return this._viewports[t]
                },
                getFrameExtents: function() {
                    return this._frameExtents
                },
                copy: function(t) {
                    return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                toJSON: function() {
                    var t = {};
                    return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
                }
            }), il.prototype = Object.assign(Object.create(el.prototype), {
                constructor: il,
                isSpotLightShadow: !0,
                updateMatrices: function(t) {
                    var e = this.camera,
                        i = 2 * Oe.RAD2DEG * t.angle,
                        n = this.mapSize.width / this.mapSize.height,
                        r = t.distance || e.far;
                    i === e.fov && n === e.aspect && r === e.far || (e.fov = i, e.aspect = n, e.far = r, e.updateProjectionMatrix()), el.prototype.updateMatrices.call(this, t)
                }
            }), nl.prototype = Object.assign(Object.create($h.prototype), {
                constructor: nl,
                isSpotLight: !0,
                copy: function(t) {
                    return $h.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
                }
            }), rl.prototype = Object.assign(Object.create(el.prototype), {
                constructor: rl,
                isPointLightShadow: !0,
                updateMatrices: function(t, e) {
                    void 0 === e && (e = 0);
                    var i = this.camera,
                        n = this.matrix,
                        r = this._lightPositionWorld,
                        a = this._lookTarget,
                        o = this._projScreenMatrix;
                    r.setFromMatrixPosition(t.matrixWorld), i.position.copy(r), a.copy(i.position), a.add(this._cubeDirections[e]), i.up.copy(this._cubeUps[e]), i.lookAt(a), i.updateMatrixWorld(), n.makeTranslation(-r.x, -r.y, -r.z), o.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), this._frustum.setFromMatrix(o)
                }
            }), al.prototype = Object.assign(Object.create($h.prototype), {
                constructor: al,
                isPointLight: !0,
                copy: function(t) {
                    return $h.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
                }
            }), ol.prototype = Object.assign(Object.create(vr.prototype), {
                constructor: ol,
                isOrthographicCamera: !0,
                copy: function(t, e) {
                    return vr.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
                },
                setViewOffset: function(t, e, i, n, r, a) {
                    null === this.view && (this.view = {
                        enabled: !0,
                        fullWidth: 1,
                        fullHeight: 1,
                        offsetX: 0,
                        offsetY: 0,
                        width: 1,
                        height: 1
                    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
                },
                clearViewOffset: function() {
                    null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
                },
                updateProjectionMatrix: function() {
                    var t = (this.right - this.left) / (2 * this.zoom),
                        e = (this.top - this.bottom) / (2 * this.zoom),
                        i = (this.right + this.left) / 2,
                        n = (this.top + this.bottom) / 2,
                        r = i - t,
                        a = i + t,
                        o = n + e,
                        s = n - e;
                    if (null !== this.view && this.view.enabled) {
                        var c = this.zoom / (this.view.width / this.view.fullWidth),
                            h = this.zoom / (this.view.height / this.view.fullHeight),
                            l = (this.right - this.left) / this.view.width,
                            u = (this.top - this.bottom) / this.view.height;
                        a = (r += l * (this.view.offsetX / c)) + l * (this.view.width / c), s = (o -= u * (this.view.offsetY / h)) - u * (this.view.height / h)
                    }
                    this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
                },
                toJSON: function(t) {
                    var e = gi.prototype.toJSON.call(this, t);
                    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
                }
            }), sl.prototype = Object.assign(Object.create(el.prototype), {
                constructor: sl,
                isDirectionalLightShadow: !0,
                updateMatrices: function(t) {
                    el.prototype.updateMatrices.call(this, t)
                }
            }), cl.prototype = Object.assign(Object.create($h.prototype), {
                constructor: cl,
                isDirectionalLight: !0,
                copy: function(t) {
                    return $h.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
                }
            }), hl.prototype = Object.assign(Object.create($h.prototype), {
                constructor: hl,
                isAmbientLight: !0
            }), ll.prototype = Object.assign(Object.create($h.prototype), {
                constructor: ll,
                isRectAreaLight: !0,
                copy: function(t) {
                    return $h.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this
                },
                toJSON: function(t) {
                    var e = $h.prototype.toJSON.call(this, t);
                    return e.object.width = this.width, e.object.height = this.height, e
                }
            }), ul.prototype = Object.assign(Object.create(bh.prototype), {
                constructor: ul,
                load: function(t, e, i, n) {
                    var r = this,
                        a = new wh(r.manager);
                    a.setPath(r.path), a.load(t, (function(t) {
                        e(r.parse(JSON.parse(t)))
                    }), i, n)
                },
                parse: function(t) {
                    var e = this.textures;

                    function i(t) {
                        return e[t], e[t]
                    }
                    var n = new ih[t.type];
                    if (void 0 !== t.uuid && (n.uuid = t.uuid), void 0 !== t.name && (n.name = t.name), void 0 !== t.color && n.color.setHex(t.color), void 0 !== t.roughness && (n.roughness = t.roughness), void 0 !== t.metalness && (n.metalness = t.metalness), void 0 !== t.sheen && (n.sheen = (new hn).setHex(t.sheen)), void 0 !== t.emissive && n.emissive.setHex(t.emissive), void 0 !== t.specular && n.specular.setHex(t.specular), void 0 !== t.shininess && (n.shininess = t.shininess), void 0 !== t.clearcoat && (n.clearcoat = t.clearcoat), void 0 !== t.clearcoatRoughness && (n.clearcoatRoughness = t.clearcoatRoughness), void 0 !== t.vertexColors && (n.vertexColors = t.vertexColors), void 0 !== t.fog && (n.fog = t.fog), void 0 !== t.flatShading && (n.flatShading = t.flatShading), void 0 !== t.blending && (n.blending = t.blending), void 0 !== t.combine && (n.combine = t.combine), void 0 !== t.side && (n.side = t.side), void 0 !== t.opacity && (n.opacity = t.opacity), void 0 !== t.transparent && (n.transparent = t.transparent), void 0 !== t.alphaTest && (n.alphaTest = t.alphaTest), void 0 !== t.depthTest && (n.depthTest = t.depthTest), void 0 !== t.depthWrite && (n.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (n.colorWrite = t.colorWrite), void 0 !== t.stencilWrite && (n.stencilWrite = t.stencilWrite), void 0 !== t.stencilWriteMask && (n.stencilWriteMask = t.stencilWriteMask), void 0 !== t.stencilFunc && (n.stencilFunc = t.stencilFunc), void 0 !== t.stencilRef && (n.stencilRef = t.stencilRef), void 0 !== t.stencilFuncMask && (n.stencilFuncMask = t.stencilFuncMask), void 0 !== t.stencilFail && (n.stencilFail = t.stencilFail), void 0 !== t.stencilZFail && (n.stencilZFail = t.stencilZFail), void 0 !== t.stencilZPass && (n.stencilZPass = t.stencilZPass), void 0 !== t.wireframe && (n.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (n.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (n.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (n.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (n.rotation = t.rotation), 1 !== t.linewidth && (n.linewidth = t.linewidth), void 0 !== t.dashSize && (n.dashSize = t.dashSize), void 0 !== t.gapSize && (n.gapSize = t.gapSize), void 0 !== t.scale && (n.scale = t.scale), void 0 !== t.polygonOffset && (n.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (n.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (n.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (n.skinning = t.skinning), void 0 !== t.morphTargets && (n.morphTargets = t.morphTargets), void 0 !== t.morphNormals && (n.morphNormals = t.morphNormals), void 0 !== t.dithering && (n.dithering = t.dithering), void 0 !== t.visible && (n.visible = t.visible), void 0 !== t.toneMapped && (n.toneMapped = t.toneMapped), void 0 !== t.userData && (n.userData = t.userData), void 0 !== t.uniforms)
                        for (var r in t.uniforms) {
                            var a = t.uniforms[r];
                            switch (n.uniforms[r] = {}, a.type) {
                                case "t":
                                    n.uniforms[r].value = i(a.value);
                                    break;
                                case "c":
                                    n.uniforms[r].value = (new hn).setHex(a.value);
                                    break;
                                case "v2":
                                    n.uniforms[r].value = (new Ne).fromArray(a.value);
                                    break;
                                case "v3":
                                    n.uniforms[r].value = (new Re).fromArray(a.value);
                                    break;
                                case "v4":
                                    n.uniforms[r].value = (new je).fromArray(a.value);
                                    break;
                                case "m3":
                                    n.uniforms[r].value = (new Be).fromArray(a.value);
                                case "m4":
                                    n.uniforms[r].value = (new $e).fromArray(a.value);
                                    break;
                                default:
                                    n.uniforms[r].value = a.value
                            }
                        }
                    if (void 0 !== t.defines && (n.defines = t.defines), void 0 !== t.vertexShader && (n.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (n.fragmentShader = t.fragmentShader), void 0 !== t.extensions)
                        for (var o in t.extensions) n.extensions[o] = t.extensions[o];
                    if (void 0 !== t.shading && (n.flatShading = 1 === t.shading), void 0 !== t.size && (n.size = t.size), void 0 !== t.sizeAttenuation && (n.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (n.map = i(t.map)), void 0 !== t.matcap && (n.matcap = i(t.matcap)), void 0 !== t.alphaMap && (n.alphaMap = i(t.alphaMap), n.transparent = !0), void 0 !== t.bumpMap && (n.bumpMap = i(t.bumpMap)), void 0 !== t.bumpScale && (n.bumpScale = t.bumpScale), void 0 !== t.normalMap && (n.normalMap = i(t.normalMap)), void 0 !== t.normalMapType && (n.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
                        var s = t.normalScale;
                        !1 === Array.isArray(s) && (s = [s, s]), n.normalScale = (new Ne).fromArray(s)
                    }
                    return void 0 !== t.displacementMap && (n.displacementMap = i(t.displacementMap)), void 0 !== t.displacementScale && (n.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (n.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (n.roughnessMap = i(t.roughnessMap)), void 0 !== t.metalnessMap && (n.metalnessMap = i(t.metalnessMap)), void 0 !== t.emissiveMap && (n.emissiveMap = i(t.emissiveMap)), void 0 !== t.emissiveIntensity && (n.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (n.specularMap = i(t.specularMap)), void 0 !== t.envMap && (n.envMap = i(t.envMap)), void 0 !== t.envMapIntensity && (n.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (n.reflectivity = t.reflectivity), void 0 !== t.refractionRatio && (n.refractionRatio = t.refractionRatio), void 0 !== t.lightMap && (n.lightMap = i(t.lightMap)), void 0 !== t.lightMapIntensity && (n.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (n.aoMap = i(t.aoMap)), void 0 !== t.aoMapIntensity && (n.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (n.gradientMap = i(t.gradientMap)), void 0 !== t.clearcoatNormalMap && (n.clearcoatNormalMap = i(t.clearcoatNormalMap)), void 0 !== t.clearcoatNormalScale && (n.clearcoatNormalScale = (new Ne).fromArray(t.clearcoatNormalScale)), n
                },
                setTextures: function(t) {
                    return this.textures = t, this
                }
            });
            var pl = function(t) {
                var e = t.lastIndexOf("/");
                return -1 === e ? "./" : t.substr(0, e + 1)
            };

            function dl() {
                Fn.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
            }

            function fl(t, e, i, n) {
                "number" == typeof i && (n = i, i = !1), yn.call(this, t, e, i), this.meshPerAttribute = n || 1
            }

            function ml(t) {
                bh.call(this, t)
            }
            dl.prototype = Object.assign(Object.create(Fn.prototype), {
                constructor: dl,
                isInstancedBufferGeometry: !0,
                copy: function(t) {
                    return Fn.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                toJSON: function() {
                    var t = Fn.prototype.toJSON.call(this);
                    return t.maxInstancedCount = this.maxInstancedCount, t.isInstancedBufferGeometry = !0, t
                }
            }), fl.prototype = Object.assign(Object.create(yn.prototype), {
                constructor: fl,
                isInstancedBufferAttribute: !0,
                copy: function(t) {
                    return yn.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
                },
                toJSON: function() {
                    var t = yn.prototype.toJSON.call(this);
                    return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t
                }
            }), ml.prototype = Object.assign(Object.create(bh.prototype), {
                constructor: ml,
                load: function(t, e, i, n) {
                    var r = this,
                        a = new wh(r.manager);
                    a.setPath(r.path), a.load(t, (function(t) {
                        e(r.parse(JSON.parse(t)))
                    }), i, n)
                },
                parse: function(t) {
                    var e = t.isInstancedBufferGeometry ? new dl : new Fn,
                        i = t.data.index;
                    if (void 0 !== i) {
                        var n = new vl[i.type](i.array);
                        e.setIndex(new yn(n, 1))
                    }
                    var r = t.data.attributes;
                    for (var a in r) {
                        var o = r[a],
                            s = (n = new vl[o.type](o.array), new(o.isInstancedBufferAttribute ? fl : yn)(n, o.itemSize, o.normalized));
                        void 0 !== o.name && (s.name = o.name), e.setAttribute(a, s)
                    }
                    var c = t.data.morphAttributes;
                    if (c)
                        for (var a in c) {
                            for (var h = c[a], l = [], u = 0, p = h.length; u < p; u++) {
                                o = h[u], s = new yn(n = new vl[o.type](o.array), o.itemSize, o.normalized);
                                void 0 !== o.name && (s.name = o.name), l.push(s)
                            }
                            e.morphAttributes[a] = l
                        }
                    t.data.morphTargetsRelative && (e.morphTargetsRelative = !0);
                    var d = t.data.groups || t.data.drawcalls || t.data.offsets;
                    if (void 0 !== d) {
                        u = 0;
                        for (var f = d.length; u !== f; ++u) {
                            var m = d[u];
                            e.addGroup(m.start, m.count, m.materialIndex)
                        }
                    }
                    var v = t.data.boundingSphere;
                    if (void 0 !== v) {
                        var g = new Re;
                        void 0 !== v.center && g.fromArray(v.center), e.boundingSphere = new zi(g, v.radius)
                    }
                    return t.name && (e.name = t.name), t.userData && (e.userData = t.userData), e
                }
            });
            var vl = {
                Int8Array: Int8Array,
                Uint8Array: Uint8Array,
                Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
                Int16Array: Int16Array,
                Uint16Array: Uint16Array,
                Int32Array: Int32Array,
                Uint32Array: Uint32Array,
                Float32Array: Float32Array,
                Float64Array: Float64Array
            };

            function gl(t) {
                bh.call(this, t)
            }
            gl.prototype = Object.assign(Object.create(bh.prototype), {
                constructor: gl,
                load: function(t, e, i, n) {
                    var r = this,
                        a = "" === this.path ? pl(t) : this.path;
                    this.resourcePath = this.resourcePath || a;
                    var o = new wh(r.manager);
                    o.setPath(this.path), o.load(t, (function(t) {
                        var i = null;
                        try {
                            i = JSON.parse(t)
                        } catch (t) {
                            return void(void 0 !== n && n(t))
                        }
                        var a = i.metadata;
                        void 0 !== a && void 0 !== a.type && "geometry" !== a.type.toLowerCase() && r.parse(i, e)
                    }), i, n)
                },
                parse: function(t, e) {
                    var i = this.parseShape(t.shapes),
                        n = this.parseGeometries(t.geometries, i),
                        r = this.parseImages(t.images, (function() {
                            void 0 !== e && e(s)
                        })),
                        a = this.parseTextures(t.textures, r),
                        o = this.parseMaterials(t.materials, a),
                        s = this.parseObject(t.object, n, o);
                    return t.animations && (s.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(s), s
                },
                parseShape: function(t) {
                    var e = {};
                    if (void 0 !== t)
                        for (var i = 0, n = t.length; i < n; i++) {
                            var r = (new Kh).fromJSON(t[i]);
                            e[r.uuid] = r
                        }
                    return e
                },
                parseGeometries: function(t, e) {
                    var i = {};
                    if (void 0 !== t)
                        for (var n = new ml, r = 0, a = t.length; r < a; r++) {
                            var o, s = t[r];
                            switch (s.type) {
                                case "PlaneGeometry":
                                case "PlaneBufferGeometry":
                                    o = new Hc[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
                                    break;
                                case "BoxGeometry":
                                case "BoxBufferGeometry":
                                case "CubeGeometry":
                                    o = new Hc[s.type](s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
                                    break;
                                case "CircleGeometry":
                                case "CircleBufferGeometry":
                                    o = new Hc[s.type](s.radius, s.segments, s.thetaStart, s.thetaLength);
                                    break;
                                case "CylinderGeometry":
                                case "CylinderBufferGeometry":
                                    o = new Hc[s.type](s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                                    break;
                                case "ConeGeometry":
                                case "ConeBufferGeometry":
                                    o = new Hc[s.type](s.radius, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                                    break;
                                case "SphereGeometry":
                                case "SphereBufferGeometry":
                                    o = new Hc[s.type](s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
                                    break;
                                case "DodecahedronGeometry":
                                case "DodecahedronBufferGeometry":
                                case "IcosahedronGeometry":
                                case "IcosahedronBufferGeometry":
                                case "OctahedronGeometry":
                                case "OctahedronBufferGeometry":
                                case "TetrahedronGeometry":
                                case "TetrahedronBufferGeometry":
                                    o = new Hc[s.type](s.radius, s.detail);
                                    break;
                                case "RingGeometry":
                                case "RingBufferGeometry":
                                    o = new Hc[s.type](s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength);
                                    break;
                                case "TorusGeometry":
                                case "TorusBufferGeometry":
                                    o = new Hc[s.type](s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
                                    break;
                                case "TorusKnotGeometry":
                                case "TorusKnotBufferGeometry":
                                    o = new Hc[s.type](s.radius, s.tube, s.tubularSegments, s.radialSegments, s.p, s.q);
                                    break;
                                case "TubeGeometry":
                                case "TubeBufferGeometry":
                                    o = new Hc[s.type]((new Jh[s.path.type]).fromJSON(s.path), s.tubularSegments, s.radius, s.radialSegments, s.closed);
                                    break;
                                case "LatheGeometry":
                                case "LatheBufferGeometry":
                                    o = new Hc[s.type](s.points, s.segments, s.phiStart, s.phiLength);
                                    break;
                                case "PolyhedronGeometry":
                                case "PolyhedronBufferGeometry":
                                    o = new Hc[s.type](s.vertices, s.indices, s.radius, s.details);
                                    break;
                                case "ShapeGeometry":
                                case "ShapeBufferGeometry":
                                    for (var c = [], h = 0, l = s.shapes.length; h < l; h++) {
                                        var u = e[s.shapes[h]];
                                        c.push(u)
                                    }
                                    o = new Hc[s.type](c, s.curveSegments);
                                    break;
                                case "ExtrudeGeometry":
                                case "ExtrudeBufferGeometry":
                                    for (c = [], h = 0, l = s.shapes.length; h < l; h++) {
                                        u = e[s.shapes[h]];
                                        c.push(u)
                                    }
                                    var p = s.options.extrudePath;
                                    void 0 !== p && (s.options.extrudePath = (new Jh[p.type]).fromJSON(p)), o = new Hc[s.type](c, s.options);
                                    break;
                                case "BufferGeometry":
                                case "InstancedBufferGeometry":
                                    o = n.parse(s);
                                    break;
                                case "Geometry":
                                    if ("THREE" in window && "LegacyJSONLoader" in THREE) o = (new THREE.LegacyJSONLoader).parse(s, this.resourcePath).geometry;
                                    break;
                                default:
                                    continue
                            }
                            o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), !0 === o.isBufferGeometry && void 0 !== s.userData && (o.userData = s.userData), i[s.uuid] = o
                        }
                    return i
                },
                parseMaterials: function(t, e) {
                    var i = {},
                        n = {};
                    if (void 0 !== t) {
                        var r = new ul;
                        r.setTextures(e);
                        for (var a = 0, o = t.length; a < o; a++) {
                            var s = t[a];
                            if ("MultiMaterial" === s.type) {
                                for (var c = [], h = 0; h < s.materials.length; h++) {
                                    var l = s.materials[h];
                                    void 0 === i[l.uuid] && (i[l.uuid] = r.parse(l)), c.push(i[l.uuid])
                                }
                                n[s.uuid] = c
                            } else void 0 === i[s.uuid] && (i[s.uuid] = r.parse(s)), n[s.uuid] = i[s.uuid]
                        }
                    }
                    return n
                },
                parseAnimations: function(t) {
                    for (var e = [], i = 0; i < t.length; i++) {
                        var n = t[i],
                            r = vh.parse(n);
                        void 0 !== n.uuid && (r.uuid = n.uuid), e.push(r)
                    }
                    return e
                },
                parseImages: function(t, e) {
                    var i = this,
                        n = {};

                    function r(t) {
                        return i.manager.itemStart(t), a.load(t, (function() {
                            i.manager.itemEnd(t)
                        }), void 0, (function() {
                            i.manager.itemError(t), i.manager.itemEnd(t)
                        }))
                    }
                    if (void 0 !== t && t.length > 0) {
                        var a = new Lh(new xh(e));
                        a.setCrossOrigin(this.crossOrigin);
                        for (var o = 0, s = t.length; o < s; o++) {
                            var c = t[o],
                                h = c.url;
                            if (Array.isArray(h)) {
                                n[c.uuid] = [];
                                for (var l = 0, u = h.length; l < u; l++) {
                                    var p = h[l],
                                        d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p) ? p : i.resourcePath + p;
                                    n[c.uuid].push(r(d))
                                }
                            } else {
                                d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : i.resourcePath + c.url;
                                n[c.uuid] = r(d)
                            }
                        }
                    }
                    return n
                },
                parseTextures: function(t, e) {
                    function i(t, e) {
                        return "number" == typeof t ? t : e[t]
                    }
                    var n = {};
                    if (void 0 !== t)
                        for (var r = 0, a = t.length; r < a; r++) {
                            var o, s = t[r];
                            s.image, e[s.image], (o = Array.isArray(e[s.image]) ? new Wr(e[s.image]) : new ke(e[s.image])).needsUpdate = !0, o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), void 0 !== s.mapping && (o.mapping = i(s.mapping, xl)), void 0 !== s.offset && o.offset.fromArray(s.offset), void 0 !== s.repeat && o.repeat.fromArray(s.repeat), void 0 !== s.center && o.center.fromArray(s.center), void 0 !== s.rotation && (o.rotation = s.rotation), void 0 !== s.wrap && (o.wrapS = i(s.wrap[0], _l), o.wrapT = i(s.wrap[1], _l)), void 0 !== s.format && (o.format = s.format), void 0 !== s.type && (o.type = s.type), void 0 !== s.encoding && (o.encoding = s.encoding), void 0 !== s.minFilter && (o.minFilter = i(s.minFilter, bl)), void 0 !== s.magFilter && (o.magFilter = i(s.magFilter, bl)), void 0 !== s.anisotropy && (o.anisotropy = s.anisotropy), void 0 !== s.flipY && (o.flipY = s.flipY), void 0 !== s.premultiplyAlpha && (o.premultiplyAlpha = s.premultiplyAlpha), void 0 !== s.unpackAlignment && (o.unpackAlignment = s.unpackAlignment), n[s.uuid] = o
                        }
                    return n
                },
                parseObject: function(t, e, i) {
                    var n;

                    function r(t) {
                        return e[t], e[t]
                    }

                    function a(t) {
                        if (void 0 !== t) {
                            if (Array.isArray(t)) {
                                for (var e = [], n = 0, r = t.length; n < r; n++) {
                                    var a = t[n];
                                    i[a], e.push(i[a])
                                }
                                return e
                            }
                            return i[t], i[t]
                        }
                    }
                    switch (t.type) {
                        case "Scene":
                            n = new yi, void 0 !== t.background && Number.isInteger(t.background) && (n.background = new hn(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? n.fog = new No(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (n.fog = new Oo(t.fog.color, t.fog.density)));
                            break;
                        case "PerspectiveCamera":
                            n = new gr(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (n.focus = t.focus), void 0 !== t.zoom && (n.zoom = t.zoom), void 0 !== t.filmGauge && (n.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (n.filmOffset = t.filmOffset), void 0 !== t.view && (n.view = Object.assign({}, t.view));
                            break;
                        case "OrthographicCamera":
                            n = new ol(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (n.zoom = t.zoom), void 0 !== t.view && (n.view = Object.assign({}, t.view));
                            break;
                        case "AmbientLight":
                            n = new hl(t.color, t.intensity);
                            break;
                        case "DirectionalLight":
                            n = new cl(t.color, t.intensity);
                            break;
                        case "PointLight":
                            n = new al(t.color, t.intensity, t.distance, t.decay);
                            break;
                        case "RectAreaLight":
                            n = new ll(t.color, t.intensity, t.width, t.height);
                            break;
                        case "SpotLight":
                            n = new nl(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
                            break;
                        case "HemisphereLight":
                            n = new tl(t.color, t.groundColor, t.intensity);
                            break;
                        case "SkinnedMesh":
                        case "Mesh":
                            var o = r(t.geometry),
                                s = a(t.material);
                            n = o.bones && o.bones.length > 0 ? new es(o, s) : new er(o, s);
                            break;
                        case "InstancedMesh":
                            o = r(t.geometry), s = a(t.material);
                            var c = t.count,
                                h = t.instanceMatrix;
                            (n = new ls(o, s, c)).instanceMatrix = new yn(new Float32Array(h.array), 16);
                            break;
                        case "LOD":
                            n = new ts;
                            break;
                        case "Line":
                            n = new gs(r(t.geometry), a(t.material), t.mode);
                            break;
                        case "LineLoop":
                            n = new bs(r(t.geometry), a(t.material));
                            break;
                        case "LineSegments":
                            n = new _s(r(t.geometry), a(t.material));
                            break;
                        case "PointCloud":
                        case "Points":
                            n = new Ls(r(t.geometry), a(t.material));
                            break;
                        case "Sprite":
                            n = new Zo(a(t.material));
                            break;
                        case "Group":
                            n = new Po;
                            break;
                        default:
                            n = new gi
                    }
                    if (n.uuid = t.uuid, void 0 !== t.name && (n.name = t.name), void 0 !== t.matrix ? (n.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (n.matrixAutoUpdate = t.matrixAutoUpdate), n.matrixAutoUpdate && n.matrix.decompose(n.position, n.quaternion, n.scale)) : (void 0 !== t.position && n.position.fromArray(t.position), void 0 !== t.rotation && n.rotation.fromArray(t.rotation), void 0 !== t.quaternion && n.quaternion.fromArray(t.quaternion), void 0 !== t.scale && n.scale.fromArray(t.scale)), void 0 !== t.castShadow && (n.castShadow = t.castShadow), void 0 !== t.receiveShadow && (n.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (n.shadow.bias = t.shadow.bias), void 0 !== t.shadow.radius && (n.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && n.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (n.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (n.visible = t.visible), void 0 !== t.frustumCulled && (n.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (n.renderOrder = t.renderOrder), void 0 !== t.userData && (n.userData = t.userData), void 0 !== t.layers && (n.layers.mask = t.layers), void 0 !== t.children)
                        for (var l = t.children, u = 0; u < l.length; u++) n.add(this.parseObject(l[u], e, i));
                    if ("LOD" === t.type) {
                        void 0 !== t.autoUpdate && (n.autoUpdate = t.autoUpdate);
                        for (var p = t.levels, d = 0; d < p.length; d++) {
                            var f = p[d],
                                m = n.getObjectByProperty("uuid", f.object);
                            void 0 !== m && n.addLevel(m, f.distance)
                        }
                    }
                    return n
                }
            });
            var yl, xl = {
                    UVMapping: 300,
                    CubeReflectionMapping: tt,
                    CubeRefractionMapping: et,
                    EquirectangularReflectionMapping: it,
                    EquirectangularRefractionMapping: nt,
                    SphericalReflectionMapping: rt,
                    CubeUVReflectionMapping: at,
                    CubeUVRefractionMapping: ot
                },
                _l = {
                    RepeatWrapping: st,
                    ClampToEdgeWrapping: ct,
                    MirroredRepeatWrapping: ht
                },
                bl = {
                    NearestFilter: lt,
                    NearestMipmapNearestFilter: ut,
                    NearestMipmapLinearFilter: pt,
                    LinearFilter: dt,
                    LinearMipmapNearestFilter: ft,
                    LinearMipmapLinearFilter: mt
                };

            function Ml(t) {
                bh.call(this, t), this.options = void 0
            }

            function wl() {
                this.type = "ShapePath", this.color = new hn, this.subPaths = [], this.currentPath = null
            }

            function Sl(t) {
                this.type = "Font", this.data = t
            }

            function Tl(t, e, i, n, r) {
                var a = r.glyphs[t] || r.glyphs["?"];
                if (a) {
                    var o, s, c, h, l, u, p, d, f = new wl;
                    if (a.o)
                        for (var m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), v = 0, g = m.length; v < g;) {
                            switch (m[v++]) {
                                case "m":
                                    o = m[v++] * e + i, s = m[v++] * e + n, f.moveTo(o, s);
                                    break;
                                case "l":
                                    o = m[v++] * e + i, s = m[v++] * e + n, f.lineTo(o, s);
                                    break;
                                case "q":
                                    c = m[v++] * e + i, h = m[v++] * e + n, l = m[v++] * e + i, u = m[v++] * e + n, f.quadraticCurveTo(l, u, c, h);
                                    break;
                                case "b":
                                    c = m[v++] * e + i, h = m[v++] * e + n, l = m[v++] * e + i, u = m[v++] * e + n, p = m[v++] * e + i, d = m[v++] * e + n, f.bezierCurveTo(l, u, p, d, c, h)
                            }
                        }
                    return {
                        offsetX: a.ha * e,
                        path: f
                    }
                }
            }

            function Al(t) {
                bh.call(this, t)
            }
            Ml.prototype = Object.assign(Object.create(bh.prototype), {
                constructor: Ml,
                setOptions: function(t) {
                    return this.options = t, this
                },
                load: function(t, e, i, n) {
                    void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
                    var r = this,
                        a = yh.get(t);
                    if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function() {
                        e && e(a), r.manager.itemEnd(t)
                    }), 0), a;
                    fetch(t).then((function(t) {
                        return t.blob()
                    })).then((function(t) {
                        return void 0 === r.options ? createImageBitmap(t) : createImageBitmap(t, r.options)
                    })).then((function(i) {
                        yh.add(t, i), e && e(i), r.manager.itemEnd(t)
                    })).catch((function(e) {
                        n && n(e), r.manager.itemError(t), r.manager.itemEnd(t)
                    })), r.manager.itemStart(t)
                }
            }), Object.assign(wl.prototype, {
                moveTo: function(t, e) {
                    return this.currentPath = new Qh, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this
                },
                lineTo: function(t, e) {
                    return this.currentPath.lineTo(t, e), this
                },
                quadraticCurveTo: function(t, e, i, n) {
                    return this.currentPath.quadraticCurveTo(t, e, i, n), this
                },
                bezierCurveTo: function(t, e, i, n, r, a) {
                    return this.currentPath.bezierCurveTo(t, e, i, n, r, a), this
                },
                splineThru: function(t) {
                    return this.currentPath.splineThru(t), this
                },
                toShapes: function(t, e) {
                    function i(t) {
                        for (var e = [], i = 0, n = t.length; i < n; i++) {
                            var r = t[i],
                                a = new Kh;
                            a.curves = r.curves, e.push(a)
                        }
                        return e
                    }

                    function n(t, e) {
                        for (var i = e.length, n = !1, r = i - 1, a = 0; a < i; r = a++) {
                            var o = e[r],
                                s = e[a],
                                c = s.x - o.x,
                                h = s.y - o.y;
                            if (Math.abs(h) > Number.EPSILON) {
                                if (h < 0 && (o = e[a], c = -c, s = e[r], h = -h), t.y < o.y || t.y > s.y) continue;
                                if (t.y === o.y) {
                                    if (t.x === o.x) return !0
                                } else {
                                    var l = h * (t.x - o.x) - c * (t.y - o.y);
                                    if (0 === l) return !0;
                                    if (l < 0) continue;
                                    n = !n
                                }
                            } else {
                                if (t.y !== o.y) continue;
                                if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x) return !0
                            }
                        }
                        return n
                    }
                    var r = _c.isClockWise,
                        a = this.subPaths;
                    if (0 === a.length) return [];
                    if (!0 === e) return i(a);
                    var o, s, c, h = [];
                    if (1 === a.length) return s = a[0], (c = new Kh).curves = s.curves, h.push(c), h;
                    var l = !r(a[0].getPoints());
                    l = t ? !l : l;
                    var u, p, d = [],
                        f = [],
                        m = [],
                        v = 0;
                    f[v] = void 0, m[v] = [];
                    for (var g = 0, y = a.length; g < y; g++) o = r(u = (s = a[g]).getPoints()), (o = t ? !o : o) ? (!l && f[v] && v++, f[v] = {
                        s: new Kh,
                        p: u
                    }, f[v].s.curves = s.curves, l && v++, m[v] = []) : m[v].push({
                        h: s,
                        p: u[0]
                    });
                    if (!f[0]) return i(a);
                    if (f.length > 1) {
                        for (var x = !1, _ = [], b = 0, M = f.length; b < M; b++) d[b] = [];
                        for (b = 0, M = f.length; b < M; b++)
                            for (var w = m[b], S = 0; S < w.length; S++) {
                                for (var T = w[S], A = !0, L = 0; L < f.length; L++) n(T.p, f[L].p) && (b !== L && _.push({
                                    froms: b,
                                    tos: L,
                                    hole: S
                                }), A ? (A = !1, d[L].push(T)) : x = !0);
                                A && d[b].push(T)
                            }
                        _.length > 0 && (x || (m = d))
                    }
                    g = 0;
                    for (var P = f.length; g < P; g++) {
                        c = f[g].s, h.push(c);
                        for (var C = 0, E = (p = m[g]).length; C < E; C++) c.holes.push(p[C].h)
                    }
                    return h
                }
            }), Object.assign(Sl.prototype, {
                isFont: !0,
                generateShapes: function(t, e) {
                    void 0 === e && (e = 100);
                    for (var i = [], n = function(t, e, i) {
                            for (var n = Array.from ? Array.from(t) : String(t).split(""), r = e / i.resolution, a = (i.boundingBox.yMax - i.boundingBox.yMin + i.underlineThickness) * r, o = [], s = 0, c = 0, h = 0; h < n.length; h++) {
                                var l = n[h];
                                if ("\n" === l) s = 0, c -= a;
                                else {
                                    var u = Tl(l, r, s, c, i);
                                    s += u.offsetX, o.push(u.path)
                                }
                            }
                            return o
                        }(t, e, this.data), r = 0, a = n.length; r < a; r++) Array.prototype.push.apply(i, n[r].toShapes());
                    return i
                }
            }), Al.prototype = Object.assign(Object.create(bh.prototype), {
                constructor: Al,
                load: function(t, e, i, n) {
                    var r = this,
                        a = new wh(this.manager);
                    a.setPath(this.path), a.load(t, (function(t) {
                        var i;
                        try {
                            i = JSON.parse(t)
                        } catch (e) {
                            i = JSON.parse(t.substring(65, t.length - 2))
                        }
                        var n = r.parse(i);
                        e && e(n)
                    }), i, n)
                },
                parse: function(t) {
                    return new Sl(t)
                }
            });
            var Ll = {
                getContext: function() {
                    return void 0 === yl && (yl = new(window.AudioContext || window.webkitAudioContext)), yl
                },
                setContext: function(t) {
                    yl = t
                }
            };

            function Pl(t) {
                bh.call(this, t)
            }

            function Cl() {
                this.coefficients = [];
                for (var t = 0; t < 9; t++) this.coefficients.push(new Re)
            }

            function El(t, e) {
                $h.call(this, void 0, e), this.sh = void 0 !== t ? t : new Cl
            }

            function Ol(t, e, i) {
                El.call(this, void 0, i);
                var n = (new hn).set(t),
                    r = (new hn).set(e),
                    a = new Re(n.r, n.g, n.b),
                    o = new Re(r.r, r.g, r.b),
                    s = Math.sqrt(Math.PI),
                    c = s * Math.sqrt(.75);
                this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s), this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)
            }

            function Nl(t, e) {
                El.call(this, void 0, e);
                var i = (new hn).set(t);
                this.sh.coefficients[0].set(i.r, i.g, i.b).multiplyScalar(2 * Math.sqrt(Math.PI))
            }
            Pl.prototype = Object.assign(Object.create(bh.prototype), {
                constructor: Pl,
                load: function(t, e, i, n) {
                    var r = new wh(this.manager);
                    r.setResponseType("arraybuffer"), r.setPath(this.path), r.load(t, (function(t) {
                        var i = t.slice(0);
                        Ll.getContext().decodeAudioData(i, (function(t) {
                            e(t)
                        }))
                    }), i, n)
                }
            }), Object.assign(Cl.prototype, {
                isSphericalHarmonics3: !0,
                set: function(t) {
                    for (var e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
                    return this
                },
                zero: function() {
                    for (var t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
                    return this
                },
                getAt: function(t, e) {
                    var i = t.x,
                        n = t.y,
                        r = t.z,
                        a = this.coefficients;
                    return e.copy(a[0]).multiplyScalar(.282095), e.addScale(a[1], .488603 * n), e.addScale(a[2], .488603 * r), e.addScale(a[3], .488603 * i), e.addScale(a[4], i * n * 1.092548), e.addScale(a[5], n * r * 1.092548), e.addScale(a[6], .315392 * (3 * r * r - 1)), e.addScale(a[7], i * r * 1.092548), e.addScale(a[8], .546274 * (i * i - n * n)), e
                },
                getIrradianceAt: function(t, e) {
                    var i = t.x,
                        n = t.y,
                        r = t.z,
                        a = this.coefficients;
                    return e.copy(a[0]).multiplyScalar(.886227), e.addScale(a[1], 1.023328 * n), e.addScale(a[2], 1.023328 * r), e.addScale(a[3], 1.023328 * i), e.addScale(a[4], .858086 * i * n), e.addScale(a[5], .858086 * n * r), e.addScale(a[6], .743125 * r * r - .247708), e.addScale(a[7], .858086 * i * r), e.addScale(a[8], .429043 * (i * i - n * n)), e
                },
                add: function(t) {
                    for (var e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
                    return this
                },
                scale: function(t) {
                    for (var e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
                    return this
                },
                lerp: function(t, e) {
                    for (var i = 0; i < 9; i++) this.coefficients[i].lerp(t.coefficients[i], e);
                    return this
                },
                equals: function(t) {
                    for (var e = 0; e < 9; e++)
                        if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
                    return !0
                },
                copy: function(t) {
                    return this.set(t.coefficients)
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                fromArray: function(t, e) {
                    void 0 === e && (e = 0);
                    for (var i = this.coefficients, n = 0; n < 9; n++) i[n].fromArray(t, e + 3 * n);
                    return this
                },
                toArray: function(t, e) {
                    void 0 === t && (t = []), void 0 === e && (e = 0);
                    for (var i = this.coefficients, n = 0; n < 9; n++) i[n].toArray(t, e + 3 * n);
                    return t
                }
            }), Object.assign(Cl, {
                getBasisAt: function(t, e) {
                    var i = t.x,
                        n = t.y,
                        r = t.z;
                    e[0] = .282095, e[1] = .488603 * n, e[2] = .488603 * r, e[3] = .488603 * i, e[4] = 1.092548 * i * n, e[5] = 1.092548 * n * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * i * r, e[8] = .546274 * (i * i - n * n)
                }
            }), El.prototype = Object.assign(Object.create($h.prototype), {
                constructor: El,
                isLightProbe: !0,
                copy: function(t) {
                    return $h.prototype.copy.call(this, t), this.sh.copy(t.sh), this.intensity = t.intensity, this
                },
                toJSON: function(t) {
                    return $h.prototype.toJSON.call(this, t)
                }
            }), Ol.prototype = Object.assign(Object.create(El.prototype), {
                constructor: Ol,
                isHemisphereLightProbe: !0,
                copy: function(t) {
                    return El.prototype.copy.call(this, t), this
                },
                toJSON: function(t) {
                    return El.prototype.toJSON.call(this, t)
                }
            }), Nl.prototype = Object.assign(Object.create(El.prototype), {
                constructor: Nl,
                isAmbientLightProbe: !0,
                copy: function(t) {
                    return El.prototype.copy.call(this, t), this
                },
                toJSON: function(t) {
                    return El.prototype.toJSON.call(this, t)
                }
            });
            var Il = new $e,
                Dl = new $e;

            function zl(t) {
                this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
            }
            Object.assign(function() {
                this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new gr, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new gr, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
                    focus: null,
                    fov: null,
                    aspect: null,
                    near: null,
                    far: null,
                    zoom: null,
                    eyeSep: null
                }
            }.prototype, {
                update: function(t) {
                    var e = this._cache;
                    if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
                        e.focus = t.focus, e.fov = t.fov, e.aspect = t.aspect * this.aspect, e.near = t.near, e.far = t.far, e.zoom = t.zoom, e.eyeSep = this.eyeSep;
                        var i, n, r = t.projectionMatrix.clone(),
                            a = e.eyeSep / 2,
                            o = a * e.near / e.focus,
                            s = e.near * Math.tan(Oe.DEG2RAD * e.fov * .5) / e.zoom;
                        Dl.elements[12] = -a, Il.elements[12] = a, i = -s * e.aspect + o, n = s * e.aspect + o, r.elements[0] = 2 * e.near / (n - i), r.elements[8] = (n + i) / (n - i), this.cameraL.projectionMatrix.copy(r), i = -s * e.aspect - o, n = s * e.aspect - o, r.elements[0] = 2 * e.near / (n - i), r.elements[8] = (n + i) / (n - i), this.cameraR.projectionMatrix.copy(r)
                    }
                    this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Dl), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Il)
                }
            }), Object.assign(zl.prototype, {
                start: function() {
                    this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
                },
                stop: function() {
                    this.getElapsedTime(), this.running = !1, this.autoStart = !1
                },
                getElapsedTime: function() {
                    return this.getDelta(), this.elapsedTime
                },
                getDelta: function() {
                    var t = 0;
                    if (this.autoStart && !this.running) return this.start(), 0;
                    if (this.running) {
                        var e = ("undefined" == typeof performance ? Date : performance).now();
                        t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
                    }
                    return t
                }
            });
            var Rl = new Re,
                Fl = new Ie,
                Ul = new Re,
                Bl = new Re;

            function Vl() {
                gi.call(this), this.type = "AudioListener", this.context = Ll.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new zl
            }

            function Gl(t) {
                gi.call(this), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this._startedAt = 0, this._pausedAt = 0, this.filters = []
            }
            Vl.prototype = Object.assign(Object.create(gi.prototype), {
                constructor: Vl,
                getInput: function() {
                    return this.gain
                },
                removeFilter: function() {
                    return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this
                },
                getFilter: function() {
                    return this.filter
                },
                setFilter: function(t) {
                    return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this
                },
                getMasterVolume: function() {
                    return this.gain.gain.value
                },
                setMasterVolume: function(t) {
                    return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
                },
                updateMatrixWorld: function(t) {
                    gi.prototype.updateMatrixWorld.call(this, t);
                    var e = this.context.listener,
                        i = this.up;
                    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(Rl, Fl, Ul), Bl.set(0, 0, -1).applyQuaternion(Fl), e.positionX) {
                        var n = this.context.currentTime + this.timeDelta;
                        e.positionX.linearRampToValueAtTime(Rl.x, n), e.positionY.linearRampToValueAtTime(Rl.y, n), e.positionZ.linearRampToValueAtTime(Rl.z, n), e.forwardX.linearRampToValueAtTime(Bl.x, n), e.forwardY.linearRampToValueAtTime(Bl.y, n), e.forwardZ.linearRampToValueAtTime(Bl.z, n), e.upX.linearRampToValueAtTime(i.x, n), e.upY.linearRampToValueAtTime(i.y, n), e.upZ.linearRampToValueAtTime(i.z, n)
                    } else e.setPosition(Rl.x, Rl.y, Rl.z), e.setOrientation(Bl.x, Bl.y, Bl.z, i.x, i.y, i.z)
                }
            }), Gl.prototype = Object.assign(Object.create(gi.prototype), {
                constructor: Gl,
                getOutput: function() {
                    return this.gain
                },
                setNodeSource: function(t) {
                    return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
                },
                setMediaElementSource: function(t) {
                    return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this
                },
                setMediaStreamSource: function(t) {
                    return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this
                },
                setBuffer: function(t) {
                    return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
                },
                play: function(t) {
                    if (void 0 === t && (t = 0), !0 !== this.isPlaying && !1 !== this.hasPlaybackControl) {
                        this._startedAt = this.context.currentTime + t;
                        var e = this.context.createBufferSource();
                        return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._pausedAt + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
                    }
                },
                pause: function() {
                    if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._pausedAt = (this.context.currentTime - this._startedAt) * this.playbackRate, this.source.stop(), this.source.onended = null, this.isPlaying = !1), this
                },
                stop: function() {
                    if (!1 !== this.hasPlaybackControl) return this._pausedAt = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this
                },
                connect: function() {
                    if (this.filters.length > 0) {
                        this.source.connect(this.filters[0]);
                        for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
                        this.filters[this.filters.length - 1].connect(this.getOutput())
                    } else this.source.connect(this.getOutput());
                    return this
                },
                disconnect: function() {
                    if (this.filters.length > 0) {
                        this.source.disconnect(this.filters[0]);
                        for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
                        this.filters[this.filters.length - 1].disconnect(this.getOutput())
                    } else this.source.disconnect(this.getOutput());
                    return this
                },
                getFilters: function() {
                    return this.filters
                },
                setFilters: function(t) {
                    return t || (t = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = t, this.connect()) : this.filters = t, this
                },
                setDetune: function(t) {
                    if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
                },
                getDetune: function() {
                    return this.detune
                },
                getFilter: function() {
                    return this.getFilters()[0]
                },
                setFilter: function(t) {
                    return this.setFilters(t ? [t] : [])
                },
                setPlaybackRate: function(t) {
                    if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this
                },
                getPlaybackRate: function() {
                    return this.playbackRate
                },
                onEnded: function() {
                    this.isPlaying = !1
                },
                getLoop: function() {
                    return !1 !== this.hasPlaybackControl && this.loop
                },
                setLoop: function(t) {
                    if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this
                },
                setLoopStart: function(t) {
                    return this.loopStart = t, this
                },
                setLoopEnd: function(t) {
                    return this.loopEnd = t, this
                },
                getVolume: function() {
                    return this.gain.gain.value
                },
                setVolume: function(t) {
                    return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
                }
            });
            var kl = new Re,
                jl = new Ie,
                Wl = new Re,
                Hl = new Re;

            function ql(t) {
                Gl.call(this, t), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain)
            }

            function Xl(t, e) {
                this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
            }

            function Yl(t, e, i) {
                this.binding = t, this.valueSize = i;
                var n, r = Float64Array;
                switch (e) {
                    case "quaternion":
                        n = this._slerp;
                        break;
                    case "string":
                    case "bool":
                        r = Array, n = this._select;
                        break;
                    default:
                        n = this._lerp
                }
                this.buffer = new r(4 * i), this._mixBufferRegion = n, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
            }
            ql.prototype = Object.assign(Object.create(Gl.prototype), {
                constructor: ql,
                getOutput: function() {
                    return this.panner
                },
                getRefDistance: function() {
                    return this.panner.refDistance
                },
                setRefDistance: function(t) {
                    return this.panner.refDistance = t, this
                },
                getRolloffFactor: function() {
                    return this.panner.rolloffFactor
                },
                setRolloffFactor: function(t) {
                    return this.panner.rolloffFactor = t, this
                },
                getDistanceModel: function() {
                    return this.panner.distanceModel
                },
                setDistanceModel: function(t) {
                    return this.panner.distanceModel = t, this
                },
                getMaxDistance: function() {
                    return this.panner.maxDistance
                },
                setMaxDistance: function(t) {
                    return this.panner.maxDistance = t, this
                },
                setDirectionalCone: function(t, e, i) {
                    return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = i, this
                },
                updateMatrixWorld: function(t) {
                    if (gi.prototype.updateMatrixWorld.call(this, t), !0 !== this.hasPlaybackControl || !1 !== this.isPlaying) {
                        this.matrixWorld.decompose(kl, jl, Wl), Hl.set(0, 0, 1).applyQuaternion(jl);
                        var e = this.panner;
                        if (e.positionX) {
                            var i = this.context.currentTime + this.listener.timeDelta;
                            e.positionX.linearRampToValueAtTime(kl.x, i), e.positionY.linearRampToValueAtTime(kl.y, i), e.positionZ.linearRampToValueAtTime(kl.z, i), e.orientationX.linearRampToValueAtTime(Hl.x, i), e.orientationY.linearRampToValueAtTime(Hl.y, i), e.orientationZ.linearRampToValueAtTime(Hl.z, i)
                        } else e.setPosition(kl.x, kl.y, kl.z), e.setOrientation(Hl.x, Hl.y, Hl.z)
                    }
                }
            }), Object.assign(Xl.prototype, {
                getFrequencyData: function() {
                    return this.analyser.getByteFrequencyData(this.data), this.data
                },
                getAverageFrequency: function() {
                    for (var t = 0, e = this.getFrequencyData(), i = 0; i < e.length; i++) t += e[i];
                    return t / e.length
                }
            }), Object.assign(Yl.prototype, {
                accumulate: function(t, e) {
                    var i = this.buffer,
                        n = this.valueSize,
                        r = t * n + n,
                        a = this.cumulativeWeight;
                    if (0 === a) {
                        for (var o = 0; o !== n; ++o) i[r + o] = i[o];
                        a = e
                    } else {
                        var s = e / (a += e);
                        this._mixBufferRegion(i, r, 0, s, n)
                    }
                    this.cumulativeWeight = a
                },
                apply: function(t) {
                    var e = this.valueSize,
                        i = this.buffer,
                        n = t * e + e,
                        r = this.cumulativeWeight,
                        a = this.binding;
                    if (this.cumulativeWeight = 0, r < 1) {
                        var o = 3 * e;
                        this._mixBufferRegion(i, n, o, 1 - r, e)
                    }
                    for (var s = e, c = e + e; s !== c; ++s)
                        if (i[s] !== i[s + e]) {
                            a.setValue(i, n);
                            break
                        }
                },
                saveOriginalState: function() {
                    var t = this.binding,
                        e = this.buffer,
                        i = this.valueSize,
                        n = 3 * i;
                    t.getValue(e, n);
                    for (var r = i, a = n; r !== a; ++r) e[r] = e[n + r % i];
                    this.cumulativeWeight = 0
                },
                restoreOriginalState: function() {
                    var t = 3 * this.valueSize;
                    this.binding.setValue(this.buffer, t)
                },
                _select: function(t, e, i, n, r) {
                    if (n >= .5)
                        for (var a = 0; a !== r; ++a) t[e + a] = t[i + a]
                },
                _slerp: function(t, e, i, n) {
                    Ie.slerpFlat(t, e, t, e, t, i, n)
                },
                _lerp: function(t, e, i, n, r) {
                    for (var a = 1 - n, o = 0; o !== r; ++o) {
                        var s = e + o;
                        t[s] = t[s] * a + t[i + o] * n
                    }
                }
            });
            var Jl = new RegExp("[\\[\\]\\.:\\/]", "g"),
                Zl = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
                Ql = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
                Kl = /(WCOD+)?/.source.replace("WCOD", Zl),
                $l = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
                tu = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
                eu = new RegExp("^" + Ql + Kl + $l + tu + "$"),
                iu = ["material", "materials", "bones"];

            function nu(t, e, i) {
                var n = i || ru.parseTrackName(e);
                this._targetGroup = t, this._bindings = t.subscribe_(e, n)
            }

            function ru(t, e, i) {
                this.path = e, this.parsedPath = i || ru.parseTrackName(e), this.node = ru.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
            }

            function au(t, e, i) {
                this._mixer = t, this._clip = e, this._localRoot = i || null;
                for (var n = e.tracks, r = n.length, a = new Array(r), o = {
                        endingStart: pe,
                        endingEnd: pe
                    }, s = 0; s !== r; ++s) {
                    var c = n[s].createInterpolant(null);
                    a[s] = c, c.settings = o
                }
                this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = ue, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
            }

            function ou(t) {
                this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
            }

            function su(t) {
                "string" == typeof t && (t = arguments[1]), this.value = t
            }

            function cu(t, e, i) {
                Io.call(this, t, e), this.meshPerAttribute = i || 1
            }

            function hu(t, e) {
                return t.distance - e.distance
            }

            function lu(t, e, i, n) {
                if (!1 !== t.visible && (t.raycast(e, i), !0 === n))
                    for (var r = t.children, a = 0, o = r.length; a < o; a++) lu(r[a], e, i, !0)
            }
            Object.assign(nu.prototype, {
                getValue: function(t, e) {
                    this.bind();
                    var i = this._targetGroup.nCachedObjects_,
                        n = this._bindings[i];
                    void 0 !== n && n.getValue(t, e)
                },
                setValue: function(t, e) {
                    for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) i[n].setValue(t, e)
                },
                bind: function() {
                    for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].bind()
                },
                unbind: function() {
                    for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].unbind()
                }
            }), Object.assign(ru, {
                Composite: nu,
                create: function(t, e, i) {
                    return t && t.isAnimationObjectGroup ? new ru.Composite(t, e, i) : new ru(t, e, i)
                },
                sanitizeNodeName: function(t) {
                    return t.replace(/\s/g, "_").replace(Jl, "")
                },
                parseTrackName: function(t) {
                    var e = eu.exec(t);
                    if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
                    var i = {
                            nodeName: e[2],
                            objectName: e[3],
                            objectIndex: e[4],
                            propertyName: e[5],
                            propertyIndex: e[6]
                        },
                        n = i.nodeName && i.nodeName.lastIndexOf(".");
                    if (void 0 !== n && -1 !== n) {
                        var r = i.nodeName.substring(n + 1); - 1 !== iu.indexOf(r) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = r)
                    }
                    if (null === i.propertyName || 0 === i.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
                    return i
                },
                findNode: function(t, e) {
                    if (!e || "" === e || "root" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
                    if (t.skeleton) {
                        var i = t.skeleton.getBoneByName(e);
                        if (void 0 !== i) return i
                    }
                    if (t.children) {
                        var n = function(t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    if (r.name === e || r.uuid === e) return r;
                                    var a = n(r.children);
                                    if (a) return a
                                }
                                return null
                            },
                            r = n(t.children);
                        if (r) return r
                    }
                    return null
                }
            }), Object.assign(ru.prototype, {
                _getValue_unavailable: function() {},
                _setValue_unavailable: function() {},
                BindingType: {
                    Direct: 0,
                    EntireArray: 1,
                    ArrayElement: 2,
                    HasFromToArray: 3
                },
                Versioning: {
                    None: 0,
                    NeedsUpdate: 1,
                    MatrixWorldNeedsUpdate: 2
                },
                GetterByBindingType: [function(t, e) {
                    t[e] = this.node[this.propertyName]
                }, function(t, e) {
                    for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) t[e++] = i[n]
                }, function(t, e) {
                    t[e] = this.resolvedProperty[this.propertyIndex]
                }, function(t, e) {
                    this.resolvedProperty.toArray(t, e)
                }],
                SetterByBindingTypeAndVersioning: [
                    [function(t, e) {
                        this.targetObject[this.propertyName] = t[e]
                    }, function(t, e) {
                        this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
                    }, function(t, e) {
                        this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
                    }],
                    [function(t, e) {
                        for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++]
                    }, function(t, e) {
                        for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
                        this.targetObject.needsUpdate = !0
                    }, function(t, e) {
                        for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
                        this.targetObject.matrixWorldNeedsUpdate = !0
                    }],
                    [function(t, e) {
                        this.resolvedProperty[this.propertyIndex] = t[e]
                    }, function(t, e) {
                        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
                    }, function(t, e) {
                        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
                    }],
                    [function(t, e) {
                        this.resolvedProperty.fromArray(t, e)
                    }, function(t, e) {
                        this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
                    }, function(t, e) {
                        this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
                    }]
                ],
                getValue: function(t, e) {
                    this.bind(), this.getValue(t, e)
                },
                setValue: function(t, e) {
                    this.bind(), this.setValue(t, e)
                },
                bind: function() {
                    var t = this.node,
                        e = this.parsedPath,
                        i = e.objectName,
                        n = e.propertyName,
                        r = e.propertyIndex;
                    if (t || (t = ru.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
                        if (i) {
                            var a = e.objectIndex;
                            switch (i) {
                                case "materials":
                                    if (!t.material) return;
                                    if (!t.material.materials) return;
                                    t = t.material.materials;
                                    break;
                                case "bones":
                                    if (!t.skeleton) return;
                                    t = t.skeleton.bones;
                                    for (var o = 0; o < t.length; o++)
                                        if (t[o].name === a) {
                                            a = o;
                                            break
                                        }
                                    break;
                                default:
                                    if (void 0 === t[i]) return;
                                    t = t[i]
                            }
                            if (void 0 !== a) {
                                if (void 0 === t[a]) return;
                                t = t[a]
                            }
                        }
                        var s = t[n];
                        if (void 0 !== s) {
                            var c = this.Versioning.None;
                            this.targetObject = t, void 0 !== t.needsUpdate ? c = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (c = this.Versioning.MatrixWorldNeedsUpdate);
                            var h = this.BindingType.Direct;
                            if (void 0 !== r) {
                                if ("morphTargetInfluences" === n) {
                                    if (!t.geometry) return;
                                    if (t.geometry.isBufferGeometry) {
                                        if (!t.geometry.morphAttributes) return;
                                        for (o = 0; o < this.node.geometry.morphAttributes.position.length; o++)
                                            if (t.geometry.morphAttributes.position[o].name === r) {
                                                r = o;
                                                break
                                            }
                                    } else {
                                        if (!t.geometry.morphTargets) return;
                                        for (o = 0; o < this.node.geometry.morphTargets.length; o++)
                                            if (t.geometry.morphTargets[o].name === r) {
                                                r = o;
                                                break
                                            }
                                    }
                                }
                                h = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
                            } else void 0 !== s.fromArray && void 0 !== s.toArray ? (h = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (h = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = n;
                            this.getValue = this.GetterByBindingType[h], this.setValue = this.SetterByBindingTypeAndVersioning[h][c]
                        } else e.nodeName
                    }
                },
                unbind: function() {
                    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
                }
            }), Object.assign(ru.prototype, {
                _getValue_unbound: ru.prototype.getValue,
                _setValue_unbound: ru.prototype.setValue
            }), Object.assign(function() {
                this.uuid = Oe.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
                var t = {};
                this._indicesByUUID = t;
                for (var e = 0, i = arguments.length; e !== i; ++e) t[arguments[e].uuid] = e;
                this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
                var n = this;
                this.stats = {
                    objects: {
                        get total() {
                            return n._objects.length
                        },
                        get inUse() {
                            return this.total - n.nCachedObjects_
                        }
                    },
                    get bindingsPerObject() {
                        return n._bindings.length
                    }
                }
            }.prototype, {
                isAnimationObjectGroup: !0,
                add: function() {
                    for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = 0, h = arguments.length; c !== h; ++c) {
                        var l = arguments[c],
                            u = l.uuid,
                            p = n[u];
                        if (void 0 === p) {
                            p = e++, n[u] = p, t.push(l);
                            for (var d = 0, f = s; d !== f; ++d) o[d].push(new ru(l, r[d], a[d]))
                        } else if (p < i) {
                            t[p];
                            var m = --i,
                                v = t[m];
                            n[v.uuid] = p, t[p] = v, n[u] = m, t[m] = l;
                            for (d = 0, f = s; d !== f; ++d) {
                                var g = o[d],
                                    y = g[m],
                                    x = g[p];
                                g[p] = y, void 0 === x && (x = new ru(l, r[d], a[d])), g[m] = x
                            }
                        } else t[p]
                    }
                    this.nCachedObjects_ = i
                },
                remove: function() {
                    for (var t = this._objects, e = this.nCachedObjects_, i = this._indicesByUUID, n = this._bindings, r = n.length, a = 0, o = arguments.length; a !== o; ++a) {
                        var s = arguments[a],
                            c = s.uuid,
                            h = i[c];
                        if (void 0 !== h && h >= e) {
                            var l = e++,
                                u = t[l];
                            i[u.uuid] = h, t[h] = u, i[c] = l, t[l] = s;
                            for (var p = 0, d = r; p !== d; ++p) {
                                var f = n[p],
                                    m = f[l],
                                    v = f[h];
                                f[h] = m, f[l] = v
                            }
                        }
                    }
                    this.nCachedObjects_ = e
                },
                uncache: function() {
                    for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
                        var c = arguments[o],
                            h = c.uuid,
                            l = n[h];
                        if (void 0 !== l)
                            if (delete n[h], l < i) {
                                var u = --i,
                                    p = t[u],
                                    d = t[y = --e];
                                n[p.uuid] = l, t[l] = p, n[d.uuid] = u, t[u] = d, t.pop();
                                for (var f = 0, m = a; f !== m; ++f) {
                                    var v = (x = r[f])[u],
                                        g = x[y];
                                    x[l] = v, x[u] = g, x.pop()
                                }
                            } else {
                                var y;
                                n[(d = t[y = --e]).uuid] = l, t[l] = d, t.pop();
                                for (f = 0, m = a; f !== m; ++f) {
                                    var x;
                                    (x = r[f])[l] = x[y], x.pop()
                                }
                            }
                    }
                    this.nCachedObjects_ = i
                },
                subscribe_: function(t, e) {
                    var i = this._bindingsIndicesByPath,
                        n = i[t],
                        r = this._bindings;
                    if (void 0 !== n) return r[n];
                    var a = this._paths,
                        o = this._parsedPaths,
                        s = this._objects,
                        c = s.length,
                        h = this.nCachedObjects_,
                        l = new Array(c);
                    n = r.length, i[t] = n, a.push(t), o.push(e), r.push(l);
                    for (var u = h, p = s.length; u !== p; ++u) {
                        var d = s[u];
                        l[u] = new ru(d, t, e)
                    }
                    return l
                },
                unsubscribe_: function(t) {
                    var e = this._bindingsIndicesByPath,
                        i = e[t];
                    if (void 0 !== i) {
                        var n = this._paths,
                            r = this._parsedPaths,
                            a = this._bindings,
                            o = a.length - 1,
                            s = a[o];
                        e[t[o]] = i, a[i] = s, a.pop(), r[i] = r[o], r.pop(), n[i] = n[o], n.pop()
                    }
                }
            }), Object.assign(au.prototype, {
                play: function() {
                    return this._mixer._activateAction(this), this
                },
                stop: function() {
                    return this._mixer._deactivateAction(this), this.reset()
                },
                reset: function() {
                    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
                },
                isRunning: function() {
                    return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
                },
                isScheduled: function() {
                    return this._mixer._isActiveAction(this)
                },
                startAt: function(t) {
                    return this._startTime = t, this
                },
                setLoop: function(t, e) {
                    return this.loop = t, this.repetitions = e, this
                },
                setEffectiveWeight: function(t) {
                    return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
                },
                getEffectiveWeight: function() {
                    return this._effectiveWeight
                },
                fadeIn: function(t) {
                    return this._scheduleFading(t, 0, 1)
                },
                fadeOut: function(t) {
                    return this._scheduleFading(t, 1, 0)
                },
                crossFadeFrom: function(t, e, i) {
                    if (t.fadeOut(e), this.fadeIn(e), i) {
                        var n = this._clip.duration,
                            r = t._clip.duration,
                            a = r / n,
                            o = n / r;
                        t.warp(1, a, e), this.warp(o, 1, e)
                    }
                    return this
                },
                crossFadeTo: function(t, e, i) {
                    return t.crossFadeFrom(this, e, i)
                },
                stopFading: function() {
                    var t = this._weightInterpolant;
                    return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
                },
                setEffectiveTimeScale: function(t) {
                    return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
                },
                getEffectiveTimeScale: function() {
                    return this._effectiveTimeScale
                },
                setDuration: function(t) {
                    return this.timeScale = this._clip.duration / t, this.stopWarping()
                },
                syncWith: function(t) {
                    return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
                },
                halt: function(t) {
                    return this.warp(this._effectiveTimeScale, 0, t)
                },
                warp: function(t, e, i) {
                    var n = this._mixer,
                        r = n.time,
                        a = this._timeScaleInterpolant,
                        o = this.timeScale;
                    null === a && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a);
                    var s = a.parameterPositions,
                        c = a.sampleValues;
                    return s[0] = r, s[1] = r + i, c[0] = t / o, c[1] = e / o, this
                },
                stopWarping: function() {
                    var t = this._timeScaleInterpolant;
                    return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
                },
                getMixer: function() {
                    return this._mixer
                },
                getClip: function() {
                    return this._clip
                },
                getRoot: function() {
                    return this._localRoot || this._mixer._root
                },
                _update: function(t, e, i, n) {
                    if (this.enabled) {
                        var r = this._startTime;
                        if (null !== r) {
                            var a = (t - r) * i;
                            if (a < 0 || 0 === i) return;
                            this._startTime = null, e = i * a
                        }
                        e *= this._updateTimeScale(t);
                        var o = this._updateTime(e),
                            s = this._updateWeight(t);
                        if (s > 0)
                            for (var c = this._interpolants, h = this._propertyBindings, l = 0, u = c.length; l !== u; ++l) c[l].evaluate(o), h[l].accumulate(n, s)
                    } else this._updateWeight(t)
                },
                _updateWeight: function(t) {
                    var e = 0;
                    if (this.enabled) {
                        e = this.weight;
                        var i = this._weightInterpolant;
                        if (null !== i) {
                            var n = i.evaluate(t)[0];
                            e *= n, t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1))
                        }
                    }
                    return this._effectiveWeight = e, e
                },
                _updateTimeScale: function(t) {
                    var e = 0;
                    if (!this.paused) {
                        e = this.timeScale;
                        var i = this._timeScaleInterpolant;
                        if (null !== i) e *= i.evaluate(t)[0], t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e)
                    }
                    return this._effectiveTimeScale = e, e
                },
                _updateTime: function(t) {
                    var e = this.time + t,
                        i = this._clip.duration,
                        n = this.loop,
                        r = this._loopCount,
                        a = 2202 === n;
                    if (0 === t) return -1 === r ? e : a && 1 == (1 & r) ? i - e : e;
                    if (2200 === n) {
                        -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                        t: {
                            if (e >= i) e = i;
                            else {
                                if (!(e < 0)) {
                                    this.time = e;
                                    break t
                                }
                                e = 0
                            }
                            this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                            this.time = e,
                            this._mixer.dispatchEvent({
                                type: "finished",
                                action: this,
                                direction: t < 0 ? -1 : 1
                            })
                        }
                    } else {
                        if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), e >= i || e < 0) {
                            var o = Math.floor(e / i);
                            e -= i * o, r += Math.abs(o);
                            var s = this.repetitions - r;
                            if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? i : 0, this.time = e, this._mixer.dispatchEvent({
                                type: "finished",
                                action: this,
                                direction: t > 0 ? 1 : -1
                            });
                            else {
                                if (1 === s) {
                                    var c = t < 0;
                                    this._setEndings(c, !c, a)
                                } else this._setEndings(!1, !1, a);
                                this._loopCount = r, this.time = e, this._mixer.dispatchEvent({
                                    type: "loop",
                                    action: this,
                                    loopDelta: o
                                })
                            }
                        } else this.time = e;
                        if (a && 1 == (1 & r)) return i - e
                    }
                    return e
                },
                _setEndings: function(t, e, i) {
                    var n = this._interpolantSettings;
                    i ? (n.endingStart = 2401, n.endingEnd = 2401) : (n.endingStart = t ? this.zeroSlopeAtStart ? 2401 : pe : 2402, n.endingEnd = e ? this.zeroSlopeAtEnd ? 2401 : pe : 2402)
                },
                _scheduleFading: function(t, e, i) {
                    var n = this._mixer,
                        r = n.time,
                        a = this._weightInterpolant;
                    null === a && (a = n._lendControlInterpolant(), this._weightInterpolant = a);
                    var o = a.parameterPositions,
                        s = a.sampleValues;
                    return o[0] = r, s[0] = e, o[1] = r + t, s[1] = i, this
                }
            }), ou.prototype = Object.assign(Object.create(Pe.prototype), {
                constructor: ou,
                _bindAction: function(t, e) {
                    var i = t._localRoot || this._root,
                        n = t._clip.tracks,
                        r = n.length,
                        a = t._propertyBindings,
                        o = t._interpolants,
                        s = i.uuid,
                        c = this._bindingsByRootAndName,
                        h = c[s];
                    void 0 === h && (h = {}, c[s] = h);
                    for (var l = 0; l !== r; ++l) {
                        var u = n[l],
                            p = u.name,
                            d = h[p];
                        if (void 0 !== d) a[l] = d;
                        else {
                            if (void 0 !== (d = a[l])) {
                                null === d._cacheIndex && (++d.referenceCount, this._addInactiveBinding(d, s, p));
                                continue
                            }
                            var f = e && e._propertyBindings[l].binding.parsedPath;
                            ++(d = new Yl(ru.create(i, p, f), u.ValueTypeName, u.getValueSize())).referenceCount, this._addInactiveBinding(d, s, p), a[l] = d
                        }
                        o[l].resultBuffer = d.buffer
                    }
                },
                _activateAction: function(t) {
                    if (!this._isActiveAction(t)) {
                        if (null === t._cacheIndex) {
                            var e = (t._localRoot || this._root).uuid,
                                i = t._clip.uuid,
                                n = this._actionsByClip[i];
                            this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e)
                        }
                        for (var r = t._propertyBindings, a = 0, o = r.length; a !== o; ++a) {
                            var s = r[a];
                            0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
                        }
                        this._lendAction(t)
                    }
                },
                _deactivateAction: function(t) {
                    if (this._isActiveAction(t)) {
                        for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
                            var r = e[i];
                            0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
                        }
                        this._takeBackAction(t)
                    }
                },
                _initMemoryManager: function() {
                    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
                    var t = this;
                    this.stats = {
                        actions: {
                            get total() {
                                return t._actions.length
                            },
                            get inUse() {
                                return t._nActiveActions
                            }
                        },
                        bindings: {
                            get total() {
                                return t._bindings.length
                            },
                            get inUse() {
                                return t._nActiveBindings
                            }
                        },
                        controlInterpolants: {
                            get total() {
                                return t._controlInterpolants.length
                            },
                            get inUse() {
                                return t._nActiveControlInterpolants
                            }
                        }
                    }
                },
                _isActiveAction: function(t) {
                    var e = t._cacheIndex;
                    return null !== e && e < this._nActiveActions
                },
                _addInactiveAction: function(t, e, i) {
                    var n = this._actions,
                        r = this._actionsByClip,
                        a = r[e];
                    if (void 0 === a) a = {
                        knownActions: [t],
                        actionByRoot: {}
                    }, t._byClipCacheIndex = 0, r[e] = a;
                    else {
                        var o = a.knownActions;
                        t._byClipCacheIndex = o.length, o.push(t)
                    }
                    t._cacheIndex = n.length, n.push(t), a.actionByRoot[i] = t
                },
                _removeInactiveAction: function(t) {
                    var e = this._actions,
                        i = e[e.length - 1],
                        n = t._cacheIndex;
                    i._cacheIndex = n, e[n] = i, e.pop(), t._cacheIndex = null;
                    var r = t._clip.uuid,
                        a = this._actionsByClip,
                        o = a[r],
                        s = o.knownActions,
                        c = s[s.length - 1],
                        h = t._byClipCacheIndex;
                    c._byClipCacheIndex = h, s[h] = c, s.pop(), t._byClipCacheIndex = null, delete o.actionByRoot[(t._localRoot || this._root).uuid], 0 === s.length && delete a[r], this._removeInactiveBindingsForAction(t)
                },
                _removeInactiveBindingsForAction: function(t) {
                    for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
                        var r = e[i];
                        0 == --r.referenceCount && this._removeInactiveBinding(r)
                    }
                },
                _lendAction: function(t) {
                    var e = this._actions,
                        i = t._cacheIndex,
                        n = this._nActiveActions++,
                        r = e[n];
                    t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
                },
                _takeBackAction: function(t) {
                    var e = this._actions,
                        i = t._cacheIndex,
                        n = --this._nActiveActions,
                        r = e[n];
                    t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
                },
                _addInactiveBinding: function(t, e, i) {
                    var n = this._bindingsByRootAndName,
                        r = n[e],
                        a = this._bindings;
                    void 0 === r && (r = {}, n[e] = r), r[i] = t, t._cacheIndex = a.length, a.push(t)
                },
                _removeInactiveBinding: function(t) {
                    var e = this._bindings,
                        i = t.binding,
                        n = i.rootNode.uuid,
                        r = i.path,
                        a = this._bindingsByRootAndName,
                        o = a[n],
                        s = e[e.length - 1],
                        c = t._cacheIndex;
                    s._cacheIndex = c, e[c] = s, e.pop(), delete o[r], 0 === Object.keys(o).length && delete a[n]
                },
                _lendBinding: function(t) {
                    var e = this._bindings,
                        i = t._cacheIndex,
                        n = this._nActiveBindings++,
                        r = e[n];
                    t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
                },
                _takeBackBinding: function(t) {
                    var e = this._bindings,
                        i = t._cacheIndex,
                        n = --this._nActiveBindings,
                        r = e[n];
                    t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
                },
                _lendControlInterpolant: function() {
                    var t = this._controlInterpolants,
                        e = this._nActiveControlInterpolants++,
                        i = t[e];
                    return void 0 === i && ((i = new oh(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = e, t[e] = i), i
                },
                _takeBackControlInterpolant: function(t) {
                    var e = this._controlInterpolants,
                        i = t.__cacheIndex,
                        n = --this._nActiveControlInterpolants,
                        r = e[n];
                    t.__cacheIndex = n, e[n] = t, r.__cacheIndex = i, e[i] = r
                },
                _controlInterpolantsResultBuffer: new Float32Array(1),
                clipAction: function(t, e) {
                    var i = e || this._root,
                        n = i.uuid,
                        r = "string" == typeof t ? vh.findByName(i, t) : t,
                        a = null !== r ? r.uuid : t,
                        o = this._actionsByClip[a],
                        s = null;
                    if (void 0 !== o) {
                        var c = o.actionByRoot[n];
                        if (void 0 !== c) return c;
                        s = o.knownActions[0], null === r && (r = s._clip)
                    }
                    if (null === r) return null;
                    var h = new au(this, r, e);
                    return this._bindAction(h, s), this._addInactiveAction(h, a, n), h
                },
                existingAction: function(t, e) {
                    var i = e || this._root,
                        n = i.uuid,
                        r = "string" == typeof t ? vh.findByName(i, t) : t,
                        a = r ? r.uuid : t,
                        o = this._actionsByClip[a];
                    return void 0 !== o && o.actionByRoot[n] || null
                },
                stopAllAction: function() {
                    var t = this._actions,
                        e = this._nActiveActions,
                        i = this._bindings,
                        n = this._nActiveBindings;
                    this._nActiveActions = 0, this._nActiveBindings = 0;
                    for (var r = 0; r !== e; ++r) t[r].reset();
                    for (r = 0; r !== n; ++r) i[r].useCount = 0;
                    return this
                },
                update: function(t) {
                    t *= this.timeScale;
                    for (var e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== i; ++o) {
                        e[o]._update(n, t, r, a)
                    }
                    var s = this._bindings,
                        c = this._nActiveBindings;
                    for (o = 0; o !== c; ++o) s[o].apply(a);
                    return this
                },
                setTime: function(t) {
                    this.time = 0;
                    for (var e = 0; e < this._actions.length; e++) this._actions[e].time = 0;
                    return this.update(t)
                },
                getRoot: function() {
                    return this._root
                },
                uncacheClip: function(t) {
                    var e = this._actions,
                        i = t.uuid,
                        n = this._actionsByClip,
                        r = n[i];
                    if (void 0 !== r) {
                        for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) {
                            var c = a[o];
                            this._deactivateAction(c);
                            var h = c._cacheIndex,
                                l = e[e.length - 1];
                            c._cacheIndex = null, c._byClipCacheIndex = null, l._cacheIndex = h, e[h] = l, e.pop(), this._removeInactiveBindingsForAction(c)
                        }
                        delete n[i]
                    }
                },
                uncacheRoot: function(t) {
                    var e = t.uuid,
                        i = this._actionsByClip;
                    for (var n in i) {
                        var r = i[n].actionByRoot[e];
                        void 0 !== r && (this._deactivateAction(r), this._removeInactiveAction(r))
                    }
                    var a = this._bindingsByRootAndName[e];
                    if (void 0 !== a)
                        for (var o in a) {
                            var s = a[o];
                            s.restoreOriginalState(), this._removeInactiveBinding(s)
                        }
                },
                uncacheAction: function(t, e) {
                    var i = this.existingAction(t, e);
                    null !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
                }
            }), su.prototype.clone = function() {
                return new su(void 0 === this.value.clone ? this.value : this.value.clone())
            }, cu.prototype = Object.assign(Object.create(Io.prototype), {
                constructor: cu,
                isInstancedInterleavedBuffer: !0,
                copy: function(t) {
                    return Io.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
                }
            }), Object.assign(function(t, e, i, n) {
                this.ray = new ji(t, e), this.near = i || 0, this.far = n || 1 / 0, this.camera = null, this.params = {
                    Mesh: {},
                    Line: {},
                    LOD: {},
                    Points: {
                        threshold: 1
                    },
                    Sprite: {}
                }, Object.defineProperties(this.params, {
                    PointCloud: {
                        get: function() {
                            return this.Points
                        }
                    }
                })
            }.prototype, {
                linePrecision: 1,
                set: function(t, e) {
                    this.ray.set(t, e)
                },
                setFromCamera: function(t, e) {
                    e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e && e.isOrthographicCamera && (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e)
                },
                intersectObject: function(t, e, i) {
                    var n = i || [];
                    return lu(t, this, n, e), n.sort(hu), n
                },
                intersectObjects: function(t, e, i) {
                    var n = i || [];
                    if (!1 === Array.isArray(t)) return n;
                    for (var r = 0, a = t.length; r < a; r++) lu(t[r], this, n, e);
                    return n.sort(hu), n
                }
            }), Object.assign(function(t, e, i) {
                return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== i ? i : 0, this
            }.prototype, {
                set: function(t, e, i) {
                    return this.radius = t, this.phi = e, this.theta = i, this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
                },
                makeSafe: function() {
                    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
                },
                setFromVector3: function(t) {
                    return this.setFromCartesianCoords(t.x, t.y, t.z)
                },
                setFromCartesianCoords: function(t, e, i) {
                    return this.radius = Math.sqrt(t * t + e * e + i * i), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, i), this.phi = Math.acos(Oe.clamp(e / this.radius, -1, 1))), this
                }
            }), Object.assign(function(t, e, i) {
                return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== i ? i : 0, this
            }.prototype, {
                set: function(t, e, i) {
                    return this.radius = t, this.theta = e, this.y = i, this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
                },
                setFromVector3: function(t) {
                    return this.setFromCartesianCoords(t.x, t.y, t.z)
                },
                setFromCartesianCoords: function(t, e, i) {
                    return this.radius = Math.sqrt(t * t + i * i), this.theta = Math.atan2(t, i), this.y = e, this
                }
            });
            var uu = new Ne;

            function pu(t, e) {
                this.min = void 0 !== t ? t : new Ne(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new Ne(-1 / 0, -1 / 0)
            }
            Object.assign(pu.prototype, {
                set: function(t, e) {
                    return this.min.copy(t), this.max.copy(e), this
                },
                setFromPoints: function(t) {
                    this.makeEmpty();
                    for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
                    return this
                },
                setFromCenterAndSize: function(t, e) {
                    var i = uu.copy(e).multiplyScalar(.5);
                    return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.min.copy(t.min), this.max.copy(t.max), this
                },
                makeEmpty: function() {
                    return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
                },
                isEmpty: function() {
                    return this.max.x < this.min.x || this.max.y < this.min.y
                },
                getCenter: function(t) {
                    return void 0 === t && (t = new Ne), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
                },
                getSize: function(t) {
                    return void 0 === t && (t = new Ne), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
                },
                expandByPoint: function(t) {
                    return this.min.min(t), this.max.max(t), this
                },
                expandByVector: function(t) {
                    return this.min.sub(t), this.max.add(t), this
                },
                expandByScalar: function(t) {
                    return this.min.addScalar(-t), this.max.addScalar(t), this
                },
                containsPoint: function(t) {
                    return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
                },
                containsBox: function(t) {
                    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
                },
                getParameter: function(t, e) {
                    return void 0 === e && (e = new Ne), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
                },
                intersectsBox: function(t) {
                    return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
                },
                clampPoint: function(t, e) {
                    return void 0 === e && (e = new Ne), e.copy(t).clamp(this.min, this.max)
                },
                distanceToPoint: function(t) {
                    return uu.copy(t).clamp(this.min, this.max).sub(t).length()
                },
                intersect: function(t) {
                    return this.min.max(t.min), this.max.min(t.max), this
                },
                union: function(t) {
                    return this.min.min(t.min), this.max.max(t.max), this
                },
                translate: function(t) {
                    return this.min.add(t), this.max.add(t), this
                },
                equals: function(t) {
                    return t.min.equals(this.min) && t.max.equals(this.max)
                }
            });
            var du = new Re,
                fu = new Re;

            function mu(t, e) {
                this.start = void 0 !== t ? t : new Re, this.end = void 0 !== e ? e : new Re
            }

            function vu(t) {
                gi.call(this), this.material = t, this.render = function() {}
            }
            Object.assign(mu.prototype, {
                set: function(t, e) {
                    return this.start.copy(t), this.end.copy(e), this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.start.copy(t.start), this.end.copy(t.end), this
                },
                getCenter: function(t) {
                    return void 0 === t && (t = new Re), t.addVectors(this.start, this.end).multiplyScalar(.5)
                },
                delta: function(t) {
                    return void 0 === t && (t = new Re), t.subVectors(this.end, this.start)
                },
                distanceSq: function() {
                    return this.start.distanceToSquared(this.end)
                },
                distance: function() {
                    return this.start.distanceTo(this.end)
                },
                at: function(t, e) {
                    return void 0 === e && (e = new Re), this.delta(e).multiplyScalar(t).add(this.start)
                },
                closestPointToPointParameter: function(t, e) {
                    du.subVectors(t, this.start), fu.subVectors(this.end, this.start);
                    var i = fu.dot(fu),
                        n = fu.dot(du) / i;
                    return e && (n = Oe.clamp(n, 0, 1)), n
                },
                closestPointToPoint: function(t, e, i) {
                    var n = this.closestPointToPointParameter(t, e);
                    return void 0 === i && (i = new Re), this.delta(i).multiplyScalar(n).add(this.start)
                },
                applyMatrix4: function(t) {
                    return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
                },
                equals: function(t) {
                    return t.start.equals(this.start) && t.end.equals(this.end)
                }
            }), vu.prototype = Object.create(gi.prototype), vu.prototype.constructor = vu, vu.prototype.isImmediateRenderObject = !0;
            var gu = new Re;

            function yu(t, e) {
                gi.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
                for (var i = new Fn, n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, a = 1; r < 32; r++, a++) {
                    var o = r / 32 * Math.PI * 2,
                        s = a / 32 * Math.PI * 2;
                    n.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
                }
                i.setAttribute("position", new An(n, 3));
                var c = new us({
                    fog: !1
                });
                this.cone = new _s(i, c), this.add(this.cone), this.update()
            }
            yu.prototype = Object.create(gi.prototype), yu.prototype.constructor = yu, yu.prototype.dispose = function() {
                this.cone.geometry.dispose(), this.cone.material.dispose()
            }, yu.prototype.update = function() {
                this.light.updateMatrixWorld();
                var t = this.light.distance ? this.light.distance : 1e3,
                    e = t * Math.tan(this.light.angle);
                this.cone.scale.set(e, e, t), gu.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(gu), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
            };
            var xu = new Re,
                _u = new $e,
                bu = new $e;

            function Mu(t) {
                for (var e = function t(e) {
                        var i = [];
                        e && e.isBone && i.push(e);
                        for (var n = 0; n < e.children.length; n++) i.push.apply(i, t(e.children[n]));
                        return i
                    }(t), i = new Fn, n = [], r = [], a = new hn(0, 0, 1), o = new hn(0, 1, 0), s = 0; s < e.length; s++) {
                    var c = e[s];
                    c.parent && c.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(a.r, a.g, a.b), r.push(o.r, o.g, o.b))
                }
                i.setAttribute("position", new An(n, 3)), i.setAttribute("color", new An(r, 3));
                var h = new us({
                    vertexColors: f,
                    depthTest: !1,
                    depthWrite: !1,
                    transparent: !0
                });
                _s.call(this, i, h), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
            }

            function wu(t, e, i) {
                this.light = t, this.light.updateMatrixWorld(), this.color = i;
                var n = new Ec(e, 4, 2),
                    r = new vn({
                        wireframe: !0,
                        fog: !1
                    });
                er.call(this, n, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
            }
            Mu.prototype = Object.create(_s.prototype), Mu.prototype.constructor = Mu, Mu.prototype.updateMatrixWorld = function(t) {
                var e = this.bones,
                    i = this.geometry,
                    n = i.getAttribute("position");
                bu.getInverse(this.root.matrixWorld);
                for (var r = 0, a = 0; r < e.length; r++) {
                    var o = e[r];
                    o.parent && o.parent.isBone && (_u.multiplyMatrices(bu, o.matrixWorld), xu.setFromMatrixPosition(_u), n.setXYZ(a, xu.x, xu.y, xu.z), _u.multiplyMatrices(bu, o.parent.matrixWorld), xu.setFromMatrixPosition(_u), n.setXYZ(a + 1, xu.x, xu.y, xu.z), a += 2)
                }
                i.getAttribute("position").needsUpdate = !0, gi.prototype.updateMatrixWorld.call(this, t)
            }, wu.prototype = Object.create(er.prototype), wu.prototype.constructor = wu, wu.prototype.dispose = function() {
                this.geometry.dispose(), this.material.dispose()
            }, wu.prototype.update = function() {
                void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
            };
            var Su = new Re,
                Tu = new hn,
                Au = new hn;

            function Lu(t, e, i) {
                gi.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i;
                var n = new Gs(e);
                n.rotateY(.5 * Math.PI), this.material = new vn({
                    wireframe: !0,
                    fog: !1
                }), void 0 === this.color && (this.material.vertexColors = f);
                var r = n.getAttribute("position"),
                    a = new Float32Array(3 * r.count);
                n.setAttribute("color", new yn(a, 3)), this.add(new er(n, this.material)), this.update()
            }

            function Pu(t, e, i, n) {
                t = t || 10, e = e || 10, i = new hn(void 0 !== i ? i : 4473924), n = new hn(void 0 !== n ? n : 8947848);
                for (var r = e / 2, a = t / e, o = t / 2, s = [], c = [], h = 0, l = 0, u = -o; h <= e; h++, u += a) {
                    s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o);
                    var p = h === r ? i : n;
                    p.toArray(c, l), l += 3, p.toArray(c, l), l += 3, p.toArray(c, l), l += 3, p.toArray(c, l), l += 3
                }
                var d = new Fn;
                d.setAttribute("position", new An(s, 3)), d.setAttribute("color", new An(c, 3));
                var m = new us({
                    vertexColors: f
                });
                _s.call(this, d, m)
            }

            function Cu(t, e, i, n, r, a) {
                t = t || 10, e = e || 16, i = i || 8, n = n || 64, r = new hn(void 0 !== r ? r : 4473924), a = new hn(void 0 !== a ? a : 8947848);
                var o, s, c, h, l, u, p, d = [],
                    m = [];
                for (h = 0; h <= e; h++) c = h / e * (2 * Math.PI), o = Math.sin(c) * t, s = Math.cos(c) * t, d.push(0, 0, 0), d.push(o, 0, s), p = 1 & h ? r : a, m.push(p.r, p.g, p.b), m.push(p.r, p.g, p.b);
                for (h = 0; h <= i; h++)
                    for (p = 1 & h ? r : a, u = t - t / i * h, l = 0; l < n; l++) c = l / n * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, d.push(o, 0, s), m.push(p.r, p.g, p.b), c = (l + 1) / n * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, d.push(o, 0, s), m.push(p.r, p.g, p.b);
                var v = new Fn;
                v.setAttribute("position", new An(d, 3)), v.setAttribute("color", new An(m, 3));
                var g = new us({
                    vertexColors: f
                });
                _s.call(this, v, g)
            }
            Lu.prototype = Object.create(gi.prototype), Lu.prototype.constructor = Lu, Lu.prototype.dispose = function() {
                this.children[0].geometry.dispose(), this.children[0].material.dispose()
            }, Lu.prototype.update = function() {
                var t = this.children[0];
                if (void 0 !== this.color) this.material.color.set(this.color);
                else {
                    var e = t.geometry.getAttribute("color");
                    Tu.copy(this.light.color), Au.copy(this.light.groundColor);
                    for (var i = 0, n = e.count; i < n; i++) {
                        var r = i < n / 2 ? Tu : Au;
                        e.setXYZ(i, r.r, r.g, r.b)
                    }
                    e.needsUpdate = !0
                }
                t.lookAt(Su.setFromMatrixPosition(this.light.matrixWorld).negate())
            }, Pu.prototype = Object.assign(Object.create(_s.prototype), {
                constructor: Pu,
                copy: function(t) {
                    return _s.prototype.copy.call(this, t), this.geometry.copy(t.geometry), this.material.copy(t.material), this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                }
            }), Cu.prototype = Object.create(_s.prototype), Cu.prototype.constructor = Cu;
            var Eu = new Re,
                Ou = new Re,
                Nu = new Re;

            function Iu(t, e, i) {
                gi.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, void 0 === e && (e = 1);
                var n = new Fn;
                n.setAttribute("position", new An([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
                var r = new us({
                    fog: !1
                });
                this.lightPlane = new gs(n, r), this.add(this.lightPlane), (n = new Fn).setAttribute("position", new An([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new gs(n, r), this.add(this.targetLine), this.update()
            }
            Iu.prototype = Object.create(gi.prototype), Iu.prototype.constructor = Iu, Iu.prototype.dispose = function() {
                this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
            }, Iu.prototype.update = function() {
                Eu.setFromMatrixPosition(this.light.matrixWorld), Ou.setFromMatrixPosition(this.light.target.matrixWorld), Nu.subVectors(Ou, Eu), this.lightPlane.lookAt(Ou), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Ou), this.targetLine.scale.z = Nu.length()
            };
            var Du = new Re,
                zu = new vr;

            function Ru(t) {
                var e = new Fn,
                    i = new us({
                        color: 16777215,
                        vertexColors: d
                    }),
                    n = [],
                    r = [],
                    a = {},
                    o = new hn(16755200),
                    s = new hn(16711680),
                    c = new hn(43775),
                    h = new hn(16777215),
                    l = new hn(3355443);

                function u(t, e, i) {
                    p(t, i), p(e, i)
                }

                function p(t, e) {
                    n.push(0, 0, 0), r.push(e.r, e.g, e.b), void 0 === a[t] && (a[t] = []), a[t].push(n.length / 3 - 1)
                }
                u("n1", "n2", o), u("n2", "n4", o), u("n4", "n3", o), u("n3", "n1", o), u("f1", "f2", o), u("f2", "f4", o), u("f4", "f3", o), u("f3", "f1", o), u("n1", "f1", o), u("n2", "f2", o), u("n3", "f3", o), u("n4", "f4", o), u("p", "n1", s), u("p", "n2", s), u("p", "n3", s), u("p", "n4", s), u("u1", "u2", c), u("u2", "u3", c), u("u3", "u1", c), u("c", "t", h), u("p", "c", l), u("cn1", "cn2", l), u("cn3", "cn4", l), u("cf1", "cf2", l), u("cf3", "cf4", l), e.setAttribute("position", new An(n, 3)), e.setAttribute("color", new An(r, 3)), _s.call(this, e, i), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
            }

            function Fu(t, e, i, n, r, a, o) {
                Du.set(r, a, o).unproject(n);
                var s = e[t];
                if (void 0 !== s)
                    for (var c = i.getAttribute("position"), h = 0, l = s.length; h < l; h++) c.setXYZ(s[h], Du.x, Du.y, Du.z)
            }
            Ru.prototype = Object.create(_s.prototype), Ru.prototype.constructor = Ru, Ru.prototype.update = function() {
                var t = this.geometry,
                    e = this.pointMap;
                zu.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), Fu("c", e, t, zu, 0, 0, -1), Fu("t", e, t, zu, 0, 0, 1), Fu("n1", e, t, zu, -1, -1, -1), Fu("n2", e, t, zu, 1, -1, -1), Fu("n3", e, t, zu, -1, 1, -1), Fu("n4", e, t, zu, 1, 1, -1), Fu("f1", e, t, zu, -1, -1, 1), Fu("f2", e, t, zu, 1, -1, 1), Fu("f3", e, t, zu, -1, 1, 1), Fu("f4", e, t, zu, 1, 1, 1), Fu("u1", e, t, zu, .7, 1.1, -1), Fu("u2", e, t, zu, -.7, 1.1, -1), Fu("u3", e, t, zu, 0, 2, -1), Fu("cf1", e, t, zu, -1, 0, 1), Fu("cf2", e, t, zu, 1, 0, 1), Fu("cf3", e, t, zu, 0, -1, 1), Fu("cf4", e, t, zu, 0, 1, 1), Fu("cn1", e, t, zu, -1, 0, -1), Fu("cn2", e, t, zu, 1, 0, -1), Fu("cn3", e, t, zu, 0, -1, -1), Fu("cn4", e, t, zu, 0, 1, -1), t.getAttribute("position").needsUpdate = !0
            };
            var Uu = new Ni;

            function Bu(t, e) {
                this.object = t, void 0 === e && (e = 16776960);
                var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
                    n = new Float32Array(24),
                    r = new Fn;
                r.setIndex(new yn(i, 1)), r.setAttribute("position", new yn(n, 3)), _s.call(this, r, new us({
                    color: e
                })), this.matrixAutoUpdate = !1, this.update()
            }

            function Vu(t, e) {
                this.type = "Box3Helper", this.box = t, e = e || 16776960;
                var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
                    n = new Fn;
                n.setIndex(new yn(i, 1)), n.setAttribute("position", new An([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), _s.call(this, n, new us({
                    color: e
                })), this.geometry.computeBoundingSphere()
            }

            function Gu(t, e, i) {
                this.type = "PlaneHelper", this.plane = t, this.size = void 0 === e ? 1 : e;
                var n = void 0 !== i ? i : 16776960,
                    r = new Fn;
                r.setAttribute("position", new An([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), r.computeBoundingSphere(), gs.call(this, r, new us({
                    color: n
                }));
                var a = new Fn;
                a.setAttribute("position", new An([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), a.computeBoundingSphere(), this.add(new er(a, new vn({
                    color: n,
                    opacity: .2,
                    transparent: !0,
                    depthWrite: !1
                })))
            }
            Bu.prototype = Object.create(_s.prototype), Bu.prototype.constructor = Bu, Bu.prototype.update = function(t) {
                if (void 0 !== this.object && Uu.setFromObject(this.object), !Uu.isEmpty()) {
                    var e = Uu.min,
                        i = Uu.max,
                        n = this.geometry.attributes.position,
                        r = n.array;
                    r[0] = i.x, r[1] = i.y, r[2] = i.z, r[3] = e.x, r[4] = i.y, r[5] = i.z, r[6] = e.x, r[7] = e.y, r[8] = i.z, r[9] = i.x, r[10] = e.y, r[11] = i.z, r[12] = i.x, r[13] = i.y, r[14] = e.z, r[15] = e.x, r[16] = i.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = i.x, r[22] = e.y, r[23] = e.z, n.needsUpdate = !0, this.geometry.computeBoundingSphere()
                }
            }, Bu.prototype.setFromObject = function(t) {
                return this.object = t, this.update(), this
            }, Bu.prototype.copy = function(t) {
                return _s.prototype.copy.call(this, t), this.object = t.object, this
            }, Bu.prototype.clone = function() {
                return (new this.constructor).copy(this)
            }, Vu.prototype = Object.create(_s.prototype), Vu.prototype.constructor = Vu, Vu.prototype.updateMatrixWorld = function(t) {
                var e = this.box;
                e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), gi.prototype.updateMatrixWorld.call(this, t))
            }, Gu.prototype = Object.create(gs.prototype), Gu.prototype.constructor = Gu, Gu.prototype.updateMatrixWorld = function(t) {
                var e = -this.plane.constant;
                Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? l : h, this.lookAt(this.plane.normal), gi.prototype.updateMatrixWorld.call(this, t)
            };
            var ku, ju, Wu = new Re;

            function Hu(t, e, i, n, r, a) {
                gi.call(this), void 0 === t && (t = new Re(0, 0, 1)), void 0 === e && (e = new Re(0, 0, 0)), void 0 === i && (i = 1), void 0 === n && (n = 16776960), void 0 === r && (r = .2 * i), void 0 === a && (a = .2 * r), void 0 === ku && ((ku = new Fn).setAttribute("position", new An([0, 0, 0, 0, 1, 0], 3)), (ju = new Vc(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(e), this.line = new gs(ku, new us({
                    color: n
                })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new er(ju, new vn({
                    color: n
                })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(i, r, a)
            }

            function qu(t) {
                var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
                    i = new Fn;
                i.setAttribute("position", new An(e, 3)), i.setAttribute("color", new An([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
                var n = new us({
                    vertexColors: f
                });
                _s.call(this, i, n)
            }
            Hu.prototype = Object.create(gi.prototype), Hu.prototype.constructor = Hu, Hu.prototype.setDirection = function(t) {
                if (t.y > .99999) this.quaternion.set(0, 0, 0, 1);
                else if (t.y < -.99999) this.quaternion.set(1, 0, 0, 0);
                else {
                    Wu.set(t.z, 0, -t.x).normalize();
                    var e = Math.acos(t.y);
                    this.quaternion.setFromAxisAngle(Wu, e)
                }
            }, Hu.prototype.setLength = function(t, e, i) {
                void 0 === e && (e = .2 * t), void 0 === i && (i = .2 * e), this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone.updateMatrix()
            }, Hu.prototype.setColor = function(t) {
                this.line.material.color.set(t), this.cone.material.color.set(t)
            }, Hu.prototype.copy = function(t) {
                return gi.prototype.copy.call(this, t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this
            }, Hu.prototype.clone = function() {
                return (new this.constructor).copy(this)
            }, qu.prototype = Object.create(_s.prototype), qu.prototype.constructor = qu;
            var Xu, Yu, Ju, Zu, Qu = 4,
                Ku = 8,
                $u = Math.pow(2, Ku),
                tp = [.125, .215, .35, .446, .526, .582],
                ep = Ku - Qu + 1 + tp.length,
                ip = 20,
                np = {
                    [de]: 0,
                    [fe]: 1,
                    [ve]: 2,
                    [ye]: 3,
                    [xe]: 4,
                    [_e]: 5,
                    [me]: 6
                },
                rp = new ol,
                ap = (Xu = ip, Yu = new Float32Array(Xu), Ju = new Re(0, 1, 0), (Zu = new Xc({
                    defines: {
                        n: Xu
                    },
                    uniforms: {
                        envMap: {
                            value: null
                        },
                        samples: {
                            value: 1
                        },
                        weights: {
                            value: Yu
                        },
                        latitudinal: {
                            value: !1
                        },
                        dTheta: {
                            value: 0
                        },
                        mipInt: {
                            value: 0
                        },
                        poleAxis: {
                            value: Ju
                        },
                        inputEncoding: {
                            value: np[de]
                        },
                        outputEncoding: {
                            value: np[de]
                        }
                    },
                    vertexShader: Lp(),
                    fragmentShader: `\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform int samples;\nuniform float weights[n];\nuniform bool latitudinal;\nuniform float dTheta;\nuniform float mipInt;\nuniform vec3 poleAxis;\n\n${Pp()}\n\n#define ENVMAP_TYPE_CUBE_UV\n#include <cube_uv_reflection_fragment>\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tfor (int i = 0; i < n; i++) {\n\t\tif (i >= samples)\n\t\t\tbreak;\n\t\tfor (int dir = -1; dir < 2; dir += 2) {\n\t\t\tif (i == 0 && dir == 1)\n\t\t\t\tcontinue;\n\t\t\tvec3 axis = latitudinal ? poleAxis : cross(poleAxis, vOutputDirection);\n\t\t\tif (all(equal(axis, vec3(0.0))))\n\t\t\t\taxis = cross(vec3(0.0, 1.0, 0.0), vOutputDirection);\n\t\t\taxis = normalize(axis);\n\t\t\tfloat theta = dTheta * float(dir * i);\n\t\t\tfloat cosTheta = cos(theta);\n\t\t\t// Rodrigues' axis-angle rotation\n\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross(axis, vOutputDirection) * sin(theta)\n\t\t\t\t\t+ axis * dot(axis, vOutputDirection) * (1.0 - cosTheta);\n\t\t\tgl_FragColor.rgb +=\n\t\t\t\t\tweights[i] * bilinearCubeUV(envMap, sampleDirection, mipInt);\n\t\t}\n\t}\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t`,
                    blending: m,
                    depthTest: !1,
                    depthWrite: !1
                })).type = "SphericalGaussianBlur", Zu),
                op = null,
                sp = null,
                {
                    _lodPlanes: cp,
                    _sizeLods: hp,
                    _sigmas: lp
                } = function() {
                    for (var t = [], e = [], i = [], n = Ku, r = 0; r < ep; r++) {
                        var a = Math.pow(2, n);
                        e.push(a);
                        var o = 1 / a;
                        r > Ku - Qu ? o = tp[r - Ku + Qu - 1] : 0 == r && (o = 0), i.push(o);
                        for (var s = 1 / (a - 1), c = -s / 2, h = 1 + s / 2, l = [c, c, h, c, h, h, c, c, h, h, c, h], u = new Float32Array(108), p = new Float32Array(72), d = new Float32Array(36), f = 0; f < 6; f++) {
                            var m = f % 3 * 2 / 3 - 1,
                                v = f > 2 ? 0 : -1,
                                g = [m, v, 0, m + 2 / 3, v, 0, m + 2 / 3, v + 1, 0, m, v, 0, m + 2 / 3, v + 1, 0, m, v + 1, 0];
                            u.set(g, 18 * f), p.set(l, 12 * f);
                            var y = [f, f, f, f, f, f];
                            d.set(y, 6 * f)
                        }
                        var x = new Fn;
                        x.setAttribute("position", new yn(u, 3)), x.setAttribute("uv", new yn(p, 2)), x.setAttribute("faceIndex", new yn(d, 1)), t.push(x), n > Qu && n--
                    }
                    return {
                        _lodPlanes: t,
                        _sizeLods: e,
                        _sigmas: i
                    }
                }(),
                up = null,
                pp = null,
                dp = (1 + Math.sqrt(5)) / 2,
                fp = 1 / dp,
                mp = [new Re(1, 1, 1), new Re(-1, 1, 1), new Re(1, 1, -1), new Re(-1, 1, -1), new Re(0, dp, fp), new Re(0, dp, -fp), new Re(fp, 0, dp), new Re(-fp, 0, dp), new Re(dp, fp, 0), new Re(-dp, fp, 0)];

            function vp(t) {
                pp = t, xp(ap)
            }

            function gp(t) {
                var e = {
                        magFilter: lt,
                        minFilter: lt,
                        generateMipmaps: !1,
                        type: t ? t.type : vt,
                        format: t ? t.format : It,
                        encoding: t ? t.encoding : ve,
                        depthBuffer: !1,
                        stencilBuffer: !1
                    },
                    i = _p(e);
                return i.depthBuffer = !t, up = _p(e), i
            }

            function yp() {
                up.dispose(), pp.setRenderTarget(null);
                var t = pp.getSize(new Ne);
                pp.setViewport(0, 0, t.x, t.y)
            }

            function xp(t) {
                var e = new yi;
                e.add(new er(cp[0], t)), pp.compile(e, rp)
            }

            function _p(t) {
                var e = new We(3 * $u, 3 * $u, t);
                return e.texture.mapping = at, e.texture.name = "PMREM.cubeUv", e.scissorTest = !0, e
            }

            function bp(t, e, i, n) {
                var r = 1 / pp.getPixelRatio();
                t *= r, e *= r, i *= r, n *= r, pp.setViewport(t, e, i, n), pp.setScissor(t, e, i, n)
            }

            function Mp(t) {
                var e = pp.autoClear;
                pp.autoClear = !1;
                for (var i = 1; i < ep; i++) {
                    wp(t, i - 1, i, Math.sqrt(lp[i] * lp[i] - lp[i - 1] * lp[i - 1]), mp[(i - 1) % mp.length])
                }
                pp.autoClear = e
            }

            function wp(t, e, i, n, r) {
                Sp(t, up, e, i, n, "latitudinal", r), Sp(up, t, i, i, n, "longitudinal", r)
            }

            function Sp(t, e, i, n, r, a, o) {
                var s = new yi;
                s.add(new er(cp[n], ap));
                for (var c = ap.uniforms, h = hp[i] - 1, l = isFinite(r) ? Math.PI / (2 * h) : 2 * Math.PI / (2 * ip - 1), u = r / l, p = isFinite(r) ? 1 + Math.floor(3 * u) : ip, d = [], f = 0, m = 0; m < ip; ++m) {
                    var v = m / u,
                        g = Math.exp(-v * v / 2);
                    d.push(g), 0 == m ? f += g : m < p && (f += 2 * g)
                }
                for (m = 0; m < d.length; m++) d[m] = d[m] / f;
                c.envMap.value = t.texture, c.samples.value = p, c.weights.value = d, c.latitudinal.value = "latitudinal" === a, o && (c.poleAxis.value = o), c.dTheta.value = l, c.mipInt.value = Ku - i, c.inputEncoding.value = np[t.texture.encoding], c.outputEncoding.value = np[t.texture.encoding];
                var y = hp[n],
                    x = (v = 3 * Math.max(0, $u - 2 * y), (0 === n ? 0 : 2 * $u) + 2 * y * (n > Ku - Qu ? n - Ku + Qu : 0));
                pp.setRenderTarget(e), bp(v, x, 3 * y, 2 * y), pp.render(s, rp)
            }

            function Tp() {
                var t = new Xc({
                    uniforms: {
                        envMap: {
                            value: null
                        },
                        texelSize: {
                            value: new Ne(1, 1)
                        },
                        inputEncoding: {
                            value: np[de]
                        },
                        outputEncoding: {
                            value: np[de]
                        }
                    },
                    vertexShader: Lp(),
                    fragmentShader: `\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform vec2 texelSize;\n\n${Pp()}\n\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tvec3 outputDirection = normalize(vOutputDirection);\n\tvec2 uv;\n\tuv.y = asin(clamp(outputDirection.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5;\n\tuv.x = atan(outputDirection.z, outputDirection.x) * RECIPROCAL_PI2 + 0.5;\n\tvec2 f = fract(uv / texelSize - 0.5);\n\tuv -= f * texelSize;\n\tvec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x += texelSize.x;\n\tvec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.y += texelSize.y;\n\tvec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x -= texelSize.x;\n\tvec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tvec3 tm = mix(tl, tr, f.x);\n\tvec3 bm = mix(bl, br, f.x);\n\tgl_FragColor.rgb = mix(tm, bm, f.y);\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t`,
                    blending: m,
                    depthTest: !1,
                    depthWrite: !1
                });
                return t.type = "EquirectangularToCubeUV", t
            }

            function Ap() {
                var t = new Xc({
                    uniforms: {
                        envMap: {
                            value: null
                        },
                        inputEncoding: {
                            value: np[de]
                        },
                        outputEncoding: {
                            value: np[de]
                        }
                    },
                    vertexShader: Lp(),
                    fragmentShader: `\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform samplerCube envMap;\n\n${Pp()}\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tgl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t`,
                    blending: m,
                    depthTest: !1,
                    depthWrite: !1
                });
                return t.type = "CubemapToCubeUV", t
            }

            function Lp() {
                return "\nprecision mediump float;\nprecision mediump int;\nattribute vec3 position;\nattribute vec2 uv;\nattribute float faceIndex;\nvarying vec3 vOutputDirection;\nvec3 getDirection(vec2 uv, float face) {\n\tuv = 2.0 * uv - 1.0;\n\tvec3 direction = vec3(uv, 1.0);\n\tif (face == 0.0) {\n\t\tdirection = direction.zyx;\n\t\tdirection.z *= -1.0;\n\t} else if (face == 1.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.z *= -1.0;\n\t} else if (face == 3.0) {\n\t\tdirection = direction.zyx;\n\t\tdirection.x *= -1.0;\n\t} else if (face == 4.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.y *= -1.0;\n\t} else if (face == 5.0) {\n\t\tdirection.xz *= -1.0;\n\t}\n\treturn direction;\n}\nvoid main() {\n\tvOutputDirection = getDirection(uv, faceIndex);\n\tgl_Position = vec4( position, 1.0 );\n}\n\t"
            }

            function Pp() {
                return "\nuniform int inputEncoding;\nuniform int outputEncoding;\n\n#include <encodings_pars_fragment>\n\nvec4 inputTexelToLinear(vec4 value){\n\tif(inputEncoding == 0){\n\t\treturn value;\n\t}else if(inputEncoding == 1){\n\t\treturn sRGBToLinear(value);\n\t}else if(inputEncoding == 2){\n\t\treturn RGBEToLinear(value);\n\t}else if(inputEncoding == 3){\n\t\treturn RGBMToLinear(value, 7.0);\n\t}else if(inputEncoding == 4){\n\t\treturn RGBMToLinear(value, 16.0);\n\t}else if(inputEncoding == 5){\n\t\treturn RGBDToLinear(value, 256.0);\n\t}else{\n\t\treturn GammaToLinear(value, 2.2);\n\t}\n}\n\nvec4 linearToOutputTexel(vec4 value){\n\tif(outputEncoding == 0){\n\t\treturn value;\n\t}else if(outputEncoding == 1){\n\t\treturn LinearTosRGB(value);\n\t}else if(outputEncoding == 2){\n\t\treturn LinearToRGBE(value);\n\t}else if(outputEncoding == 3){\n\t\treturn LinearToRGBM(value, 7.0);\n\t}else if(outputEncoding == 4){\n\t\treturn LinearToRGBM(value, 16.0);\n\t}else if(outputEncoding == 5){\n\t\treturn LinearToRGBD(value, 256.0);\n\t}else{\n\t\treturn LinearToGamma(value, 2.2);\n\t}\n}\n\nvec4 envMapTexelToLinear(vec4 color) {\n\treturn inputTexelToLinear(color);\n}\n\t"
            }
            vp.prototype = {
                constructor: vp,
                fromScene: function(t, e = 0, i = .1, n = 100) {
                    var r = gp();
                    return function(t, e, i, n) {
                        var r = new gr(90, 1, e, i),
                            a = [1, 1, 1, 1, -1, 1],
                            o = [1, 1, -1, -1, -1, 1],
                            s = pp.outputEncoding,
                            c = pp.toneMapping,
                            h = pp.toneMappingExposure,
                            l = pp.getClearColor(),
                            u = pp.getClearAlpha();
                        pp.toneMapping = J, pp.toneMappingExposure = 1, pp.outputEncoding = de, t.scale.z *= -1;
                        var p = t.background;
                        if (p && p.isColor) {
                            p.convertSRGBToLinear();
                            var d = Math.max(p.r, p.g, p.b),
                                f = Math.min(Math.max(Math.ceil(Math.log2(d)), -128), 127);
                            p = p.multiplyScalar(Math.pow(2, -f));
                            var m = (f + 128) / 255;
                            pp.setClearColor(p, m), t.background = null
                        }
                        pp.setRenderTarget(n);
                        for (var v = 0; v < 6; v++) {
                            var g = v % 3;
                            0 == g ? (r.up.set(0, a[v], 0), r.lookAt(o[v], 0, 0)) : 1 == g ? (r.up.set(0, 0, a[v]), r.lookAt(0, o[v], 0)) : (r.up.set(0, a[v], 0), r.lookAt(0, 0, o[v])), bp(g * $u, v > 2 ? $u : 0, $u, $u), pp.render(t, r)
                        }
                        pp.toneMapping = c, pp.toneMappingExposure = h, pp.outputEncoding = s, pp.setClearColor(l, u), t.scale.z *= -1
                    }(t, i, n, r), e > 0 && wp(r, 0, 0, e), Mp(r), yp(), r.scissorTest = !1, r
                },
                fromEquirectangular: function(t) {
                    return t.magFilter = lt, t.minFilter = lt, t.generateMipmaps = !1, this.fromCubemap(t)
                },
                fromCubemap: function(t) {
                    var e = gp(t);
                    return function(t, e) {
                        var i = new yi;
                        t.isCubeTexture ? null == sp && (sp = Ap()) : null == op && (op = Tp());
                        var n = t.isCubeTexture ? sp : op;
                        i.add(new er(cp[0], n));
                        var r = n.uniforms;
                        r.envMap.value = t, t.isCubeTexture || r.texelSize.value.set(1 / t.image.width, 1 / t.image.height);
                        r.inputEncoding.value = np[t.encoding], r.outputEncoding.value = np[t.encoding], pp.setRenderTarget(e), bp(0, 0, 3 * $u, 2 * $u), pp.render(i, rp)
                    }(t, e), Mp(e), yp(), e.scissorTest = !1, e
                },
                compileCubemapShader: function() {
                    null == sp && xp(sp = Ap())
                },
                compileEquirectangularShader: function() {
                    null == op && xp(op = Tp())
                },
                dispose: function() {
                    ap.dispose(), null != sp && sp.dispose(), null != op && op.dispose();
                    for (var t = 0; t < cp.length; t++) cp[t].dispose()
                }
            };

            function Cp(t) {
                Uh.call(this, t), this.type = "catmullrom"
            }
            Eh.create = function(t, e) {
                return t.prototype = Object.create(Eh.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
            }, Object.assign(Zh.prototype, {
                createPointsGeometry: function(t) {
                    var e = this.getPoints(t);
                    return this.createGeometry(e)
                },
                createSpacedPointsGeometry: function(t) {
                    var e = this.getSpacedPoints(t);
                    return this.createGeometry(e)
                },
                createGeometry: function(t) {
                    for (var e = new cr, i = 0, n = t.length; i < n; i++) {
                        var r = t[i];
                        e.vertices.push(new Re(r.x, r.y, r.z || 0))
                    }
                    return e
                }
            }), Object.assign(Qh.prototype, {
                fromPoints: function(t) {
                    return this.setFromPoints(t)
                }
            }), Object.create(Uh.prototype), Object.create(Uh.prototype), Cp.prototype = Object.create(Uh.prototype), Object.assign(Cp.prototype, {
                initFromArray: function() {},
                getControlPointsArray: function() {},
                reparametrizeByArcLength: function() {}
            }), Pu.prototype.setColors = function() {}, Mu.prototype.update = function() {}, Object.assign(bh.prototype, {
                extractUrlBase: function(t) {
                    return pl(t)
                }
            }), bh.Handlers = {
                add: function() {},
                get: function() {}
            }, Object.assign(gl.prototype, {
                setTexturePath: function(t) {
                    return this.setResourcePath(t)
                }
            }), Object.assign(pu.prototype, {
                center: function(t) {
                    return this.getCenter(t)
                },
                empty: function() {
                    return this.isEmpty()
                },
                isIntersectionBox: function(t) {
                    return this.intersectsBox(t)
                },
                size: function(t) {
                    return this.getSize(t)
                }
            }), Object.assign(Ni.prototype, {
                center: function(t) {
                    return this.getCenter(t)
                },
                empty: function() {
                    return this.isEmpty()
                },
                isIntersectionBox: function(t) {
                    return this.intersectsBox(t)
                },
                isIntersectionSphere: function(t) {
                    return this.intersectsSphere(t)
                },
                size: function(t) {
                    return this.getSize(t)
                }
            }), mu.prototype.center = function(t) {
                return this.getCenter(t)
            }, Object.assign(Oe, {
                random16: function() {
                    return Math.random()
                },
                nearestPowerOfTwo: function(t) {
                    return Oe.floorPowerOfTwo(t)
                },
                nextPowerOfTwo: function(t) {
                    return Oe.ceilPowerOfTwo(t)
                }
            }), Object.assign(Be.prototype, {
                flattenToArrayOffset: function(t, e) {
                    return this.toArray(t, e)
                },
                multiplyVector3: function(t) {
                    return t.applyMatrix3(this)
                },
                multiplyVector3Array: function() {},
                applyToBuffer: function(t) {
                    return this.applyToBufferAttribute(t)
                },
                applyToVector3Array: function() {}
            }), Object.assign($e.prototype, {
                extractPosition: function(t) {
                    return this.copyPosition(t)
                },
                flattenToArrayOffset: function(t, e) {
                    return this.toArray(t, e)
                },
                getPosition: function() {
                    return (new Re).setFromMatrixColumn(this, 3)
                },
                setRotationFromQuaternion: function(t) {
                    return this.makeRotationFromQuaternion(t)
                },
                multiplyToArray: function() {},
                multiplyVector3: function(t) {
                    return t.applyMatrix4(this)
                },
                multiplyVector4: function(t) {
                    return t.applyMatrix4(this)
                },
                multiplyVector3Array: function() {},
                rotateAxis: function(t) {
                    t.transformDirection(this)
                },
                crossVector: function(t) {
                    return t.applyMatrix4(this)
                },
                translate: function() {},
                rotateX: function() {},
                rotateY: function() {},
                rotateZ: function() {},
                rotateByAxis: function() {},
                applyToBuffer: function(t) {
                    return this.applyToBufferAttribute(t)
                },
                applyToVector3Array: function() {},
                makeFrustum: function(t, e, i, n, r, a) {
                    return this.makePerspective(t, e, n, i, r, a)
                }
            }), Xi.prototype.isIntersectionLine = function(t) {
                return this.intersectsLine(t)
            }, Ie.prototype.multiplyVector3 = function(t) {
                return t.applyQuaternion(this)
            }, Object.assign(ji.prototype, {
                isIntersectionBox: function(t) {
                    return this.intersectsBox(t)
                },
                isIntersectionPlane: function(t) {
                    return this.intersectsPlane(t)
                },
                isIntersectionSphere: function(t) {
                    return this.intersectsSphere(t)
                }
            }), Object.assign(an.prototype, {
                area: function() {
                    return this.getArea()
                },
                barycoordFromPoint: function(t, e) {
                    return this.getBarycoord(t, e)
                },
                midpoint: function(t) {
                    return this.getMidpoint(t)
                },
                normal: function(t) {
                    return this.getNormal(t)
                },
                plane: function(t) {
                    return this.getPlane(t)
                }
            }), Object.assign(an, {
                barycoordFromPoint: function(t, e, i, n, r) {
                    return an.getBarycoord(t, e, i, n, r)
                },
                normal: function(t, e, i, n) {
                    return an.getNormal(t, e, i, n)
                }
            }), Object.assign(Kh.prototype, {
                extractAllPoints: function(t) {
                    return this.extractPoints(t)
                },
                extrude: function(t) {
                    return new wc(this, t)
                },
                makeGeometry: function(t) {
                    return new zc(this, t)
                }
            }), Object.assign(Ne.prototype, {
                fromAttribute: function(t, e, i) {
                    return this.fromBufferAttribute(t, e, i)
                },
                distanceToManhattan: function(t) {
                    return this.manhattanDistanceTo(t)
                },
                lengthManhattan: function() {
                    return this.manhattanLength()
                }
            }), Object.assign(Re.prototype, {
                setEulerFromRotationMatrix: function() {},
                setEulerFromQuaternion: function() {},
                getPositionFromMatrix: function(t) {
                    return this.setFromMatrixPosition(t)
                },
                getScaleFromMatrix: function(t) {
                    return this.setFromMatrixScale(t)
                },
                getColumnFromMatrix: function(t, e) {
                    return this.setFromMatrixColumn(e, t)
                },
                applyProjection: function(t) {
                    return this.applyMatrix4(t)
                },
                fromAttribute: function(t, e, i) {
                    return this.fromBufferAttribute(t, e, i)
                },
                distanceToManhattan: function(t) {
                    return this.manhattanDistanceTo(t)
                },
                lengthManhattan: function() {
                    return this.manhattanLength()
                }
            }), Object.assign(je.prototype, {
                fromAttribute: function(t, e, i) {
                    return this.fromBufferAttribute(t, e, i)
                },
                lengthManhattan: function() {
                    return this.manhattanLength()
                }
            }), Object.assign(cr.prototype, {
                computeTangents: function() {},
                computeLineDistances: function() {}
            }), Object.assign(gi.prototype, {
                getChildByName: function(t) {
                    return this.getObjectByName(t)
                },
                renderDepth: function() {},
                translate: function(t, e) {
                    return this.translateOnAxis(e, t)
                },
                getWorldRotation: function() {}
            }), Object.defineProperties(gi.prototype, {
                eulerOrder: {
                    get: function() {
                        return this.rotation.order
                    },
                    set: function(t) {
                        this.rotation.order = t
                    }
                },
                useQuaternion: {
                    get: function() {},
                    set: function() {}
                }
            }), Object.assign(er.prototype, {
                setDrawMode: function() {}
            }), Object.defineProperties(er.prototype, {
                drawMode: {
                    get: function() {
                        return 0
                    },
                    set: function() {}
                }
            }), Object.defineProperties(ts.prototype, {
                objects: {
                    get: function() {
                        return this.levels
                    }
                }
            }), Object.defineProperty(rs.prototype, "useVertexTexture", {
                get: function() {},
                set: function() {}
            }), es.prototype.initBones = function() {}, Object.defineProperty(Eh.prototype, "__arcLengthDivisions", {
                get: function() {
                    return this.arcLengthDivisions
                },
                set: function(t) {
                    this.arcLengthDivisions = t
                }
            }), gr.prototype.setLens = function(t, e) {
                void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
            }, Object.defineProperties($h.prototype, {
                onlyShadow: {
                    set: function() {}
                },
                shadowCameraFov: {
                    set: function(t) {
                        this.shadow.camera.fov = t
                    }
                },
                shadowCameraLeft: {
                    set: function(t) {
                        this.shadow.camera.left = t
                    }
                },
                shadowCameraRight: {
                    set: function(t) {
                        this.shadow.camera.right = t
                    }
                },
                shadowCameraTop: {
                    set: function(t) {
                        this.shadow.camera.top = t
                    }
                },
                shadowCameraBottom: {
                    set: function(t) {
                        this.shadow.camera.bottom = t
                    }
                },
                shadowCameraNear: {
                    set: function(t) {
                        this.shadow.camera.near = t
                    }
                },
                shadowCameraFar: {
                    set: function(t) {
                        this.shadow.camera.far = t
                    }
                },
                shadowCameraVisible: {
                    set: function() {}
                },
                shadowBias: {
                    set: function(t) {
                        this.shadow.bias = t
                    }
                },
                shadowDarkness: {
                    set: function() {}
                },
                shadowMapWidth: {
                    set: function(t) {
                        this.shadow.mapSize.width = t
                    }
                },
                shadowMapHeight: {
                    set: function(t) {
                        this.shadow.mapSize.height = t
                    }
                }
            }), Object.defineProperties(yn.prototype, {
                length: {
                    get: function() {
                        return this.array.length
                    }
                },
                dynamic: {
                    get: function() {
                        return 35048 === this.usage
                    },
                    set: function() {
                        this.setUsage(35048)
                    }
                }
            }), Object.assign(yn.prototype, {
                setDynamic: function(t) {
                    return this.setUsage(!0 === t ? 35048 : Le), this
                },
                copyIndicesArray: function() {},
                setArray: function() {}
            }), Object.assign(Fn.prototype, {
                addIndex: function(t) {
                    this.setIndex(t)
                },
                addAttribute: function(t, e) {
                    return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (this.setIndex(e), this) : this.setAttribute(t, e) : this.setAttribute(t, new yn(arguments[1], arguments[2]))
                },
                addDrawCall: function(t, e, i) {
                    this.addGroup(t, e)
                },
                clearDrawCalls: function() {
                    this.clearGroups()
                },
                computeTangents: function() {},
                computeOffsets: function() {},
                removeAttribute: function(t) {
                    return this.deleteAttribute(t)
                }
            }), Object.defineProperties(Fn.prototype, {
                drawcalls: {
                    get: function() {
                        return this.groups
                    }
                },
                offsets: {
                    get: function() {
                        return this.groups
                    }
                }
            }), Object.defineProperties(Io.prototype, {
                dynamic: {
                    get: function() {
                        return 35048 === this.usage
                    },
                    set: function(t) {
                        this.setUsage(t)
                    }
                }
            }), Object.assign(Io.prototype, {
                setDynamic: function(t) {
                    return this.setUsage(!0 === t ? 35048 : Le), this
                },
                setArray: function() {}
            }), Object.assign(Sc.prototype, {
                getArrays: function() {},
                addShapeList: function() {},
                addShape: function() {}
            }), Object.defineProperties(su.prototype, {
                dynamic: {
                    set: function() {}
                },
                onUpdate: {
                    value: function() {
                        return this
                    }
                }
            }), Object.defineProperties(mn.prototype, {
                wrapAround: {
                    get: function() {},
                    set: function() {}
                },
                overdraw: {
                    get: function() {},
                    set: function() {}
                },
                wrapRGB: {
                    get: function() {
                        return new hn
                    }
                },
                shading: {
                    get: function() {},
                    set: function(t) {
                        this.flatShading = 1 === t
                    }
                },
                stencilMask: {
                    get: function() {
                        return this.stencilFuncMask
                    },
                    set: function(t) {
                        this.stencilFuncMask = t
                    }
                }
            }), Object.defineProperties(Zc.prototype, {
                metal: {
                    get: function() {
                        return !1
                    },
                    set: function() {}
                }
            }), Object.defineProperties(mr.prototype, {
                derivatives: {
                    get: function() {
                        return this.extensions.derivatives
                    },
                    set: function(t) {
                        this.extensions.derivatives = t
                    }
                }
            }), Object.assign(Eo.prototype, {
                clearTarget: function(t, e, i, n) {
                    this.setRenderTarget(t), this.clear(e, i, n)
                },
                animate: function(t) {
                    this.setAnimationLoop(t)
                },
                getCurrentRenderTarget: function() {
                    return this.getRenderTarget()
                },
                getMaxAnisotropy: function() {
                    return this.capabilities.getMaxAnisotropy()
                },
                getPrecision: function() {
                    return this.capabilities.precision
                },
                resetGLState: function() {
                    return this.state.reset()
                },
                supportsFloatTextures: function() {
                    return this.extensions.get("OES_texture_float")
                },
                supportsHalfFloatTextures: function() {
                    return this.extensions.get("OES_texture_half_float")
                },
                supportsStandardDerivatives: function() {
                    return this.extensions.get("OES_standard_derivatives")
                },
                supportsCompressedTextureS3TC: function() {
                    return this.extensions.get("WEBGL_compressed_texture_s3tc")
                },
                supportsCompressedTexturePVRTC: function() {
                    return this.extensions.get("WEBGL_compressed_texture_pvrtc")
                },
                supportsBlendMinMax: function() {
                    return this.extensions.get("EXT_blend_minmax")
                },
                supportsVertexTextures: function() {
                    return this.capabilities.vertexTextures
                },
                supportsInstancedArrays: function() {
                    return this.extensions.get("ANGLE_instanced_arrays")
                },
                enableScissorTest: function(t) {
                    this.setScissorTest(t)
                },
                initMaterial: function() {},
                addPrePlugin: function() {},
                addPostPlugin: function() {},
                updateShadowMap: function() {},
                setFaceCulling: function() {},
                allocTextureUnit: function() {},
                setTexture: function() {},
                setTexture2D: function() {},
                setTextureCube: function() {},
                getActiveMipMapLevel: function() {
                    return this.getActiveMipmapLevel()
                }
            }), Object.defineProperties(Eo.prototype, {
                shadowMapEnabled: {
                    get: function() {
                        return this.shadowMap.enabled
                    },
                    set: function(t) {
                        this.shadowMap.enabled = t
                    }
                },
                shadowMapType: {
                    get: function() {
                        return this.shadowMap.type
                    },
                    set: function(t) {
                        this.shadowMap.type = t
                    }
                },
                shadowMapCullFace: {
                    get: function() {},
                    set: function() {}
                },
                context: {
                    get: function() {
                        return this.getContext()
                    }
                },
                vr: {
                    get: function() {
                        return this.xr
                    }
                },
                gammaInput: {
                    get: function() {
                        return !1
                    },
                    set: function() {}
                },
                gammaOutput: {
                    get: function() {
                        return !1
                    },
                    set: function(t) {
                        this.outputEncoding = !0 === t ? fe : de
                    }
                }
            }), Object.defineProperties(bo.prototype, {
                cullFace: {
                    get: function() {},
                    set: function() {}
                },
                renderReverseSided: {
                    get: function() {},
                    set: function() {}
                },
                renderSingleSided: {
                    get: function() {},
                    set: function() {}
                }
            }), Object.defineProperties(br.prototype, {
                activeCubeFace: {
                    set: function() {}
                },
                activeMipMapLevel: {
                    set: function() {}
                }
            }), Object.defineProperties(We.prototype, {
                wrapS: {
                    get: function() {
                        return this.texture.wrapS
                    },
                    set: function(t) {
                        this.texture.wrapS = t
                    }
                },
                wrapT: {
                    get: function() {
                        return this.texture.wrapT
                    },
                    set: function(t) {
                        this.texture.wrapT = t
                    }
                },
                magFilter: {
                    get: function() {
                        return this.texture.magFilter
                    },
                    set: function(t) {
                        this.texture.magFilter = t
                    }
                },
                minFilter: {
                    get: function() {
                        return this.texture.minFilter
                    },
                    set: function(t) {
                        this.texture.minFilter = t
                    }
                },
                anisotropy: {
                    get: function() {
                        return this.texture.anisotropy
                    },
                    set: function(t) {
                        this.texture.anisotropy = t
                    }
                },
                offset: {
                    get: function() {
                        return this.texture.offset
                    },
                    set: function(t) {
                        this.texture.offset = t
                    }
                },
                repeat: {
                    get: function() {
                        return this.texture.repeat
                    },
                    set: function(t) {
                        this.texture.repeat = t
                    }
                },
                format: {
                    get: function() {
                        return this.texture.format
                    },
                    set: function(t) {
                        this.texture.format = t
                    }
                },
                type: {
                    get: function() {
                        return this.texture.type
                    },
                    set: function(t) {
                        this.texture.type = t
                    }
                },
                generateMipmaps: {
                    get: function() {
                        return this.texture.generateMipmaps
                    },
                    set: function(t) {
                        this.texture.generateMipmaps = t
                    }
                }
            }), Object.defineProperties(Gl.prototype, {
                load: {
                    value: function(t) {
                        var e = this;
                        return (new Pl).load(t, (function(t) {
                            e.setBuffer(t)
                        })), this
                    }
                },
                startTime: {
                    set: function() {}
                }
            }), Xl.prototype.getData = function() {
                return this.getFrequencyData()
            }, _r.prototype.updateCubeMap = function(t, e) {
                return this.update(t, e)
            };
            Ve.crossOrigin = void 0, Ve.loadTexture = function(t, e, i, n) {
                var r = new Ch;
                r.setCrossOrigin(this.crossOrigin);
                var a = r.load(t, i, void 0, n);
                return e && (a.mapping = e), a
            }, Ve.loadTextureCube = function(t, e, i, n) {
                var r = new Ph;
                r.setCrossOrigin(this.crossOrigin);
                var a = r.load(t, i, void 0, n);
                return e && (a.mapping = e), a
            }, Ve.loadCompressedTexture = function() {}, Ve.loadCompressedTextureCube = function() {};
            "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
                detail: {
                    revision: "112"
                }
            }))
        }
    }
]);