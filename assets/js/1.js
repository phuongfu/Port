(window.webpackJsonp = window.webpackJsonp || []).push([
    [1, 2], {
        JXsB: function(e, t) {
            function i(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            e.exports = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.init(), this.speedX = 0, this.speedY = 0, this.oldX = 0, this.oldY = 0, this.enableCall = !0
                }
                var t, n, s;
                return t = e, (n = [{
                    key: "init",
                    value: function() {
                        var e = this;
                        this.firstCalc = !0, this.timerId, this.setToZero = this.setToZero.bind(this), this.calcSpeed = this.calcSpeed.bind(this), window.addEventListener("mousemove", (function(t) {
                            return e.calcSpeed(t)
                        }))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this;
                        window.removeEventListener("mousemove", (function(t) {
                            return e.calcSpeed(t)
                        }))
                    }
                }, {
                    key: "calcSpeed",
                    value: function(e) {
                        var t = this;
                        this.enableCall && (this.enableCall = !1, this.firstCalc ? (this.oldX = e.clientX, this.oldY = e.clientY, this.firstCalc = !1) : (this.speedX = e.clientX - this.oldX, this.speedY = e.clientY - this.oldY, this.oldX = e.clientX, this.oldY = e.clientY, this.setToZero()), setTimeout((function() {
                            return t.enableCall = !0
                        }), 16))
                    }
                }, {
                    key: "setToZero",
                    value: function() {
                        var e = this;
                        clearTimeout(this.timerId), this.timerId = setTimeout((function() {
                            e.speedX = 0, e.speedY = 0
                        }), 50)
                    }
                }]) && i(t.prototype, n), s && i(t, s), e
            }()
        },
        OEHq: function(e, t, i) {
            "use strict";
            i.r(t);
            var n = i("Womt"),
                s = {
                    vertexShader: "\n    #include <common>\n    #include <fog_pars_vertex>\n    #include <shadowmap_pars_vertex>\n\n    vec3 mod289(vec3 x) {\n        return x - floor(x * (1.0 / 289.0)) * 289.0;\n    }\n    vec4 mod289(vec4 x) {\n        return x - floor(x * (1.0 / 289.0)) * 289.0;\n    }\n    vec4 permute(vec4 x) {\n        return mod289(((x*34.0)+1.0)*x);\n    }\n    vec4 taylorInvSqrt(vec4 r) {\n        return 1.79284291400159 - 0.85373472095314 * r;\n    }\n\n    vec3 fade(vec3 t) {\n        return t*t*t*(t*(t*6.0-15.0)+10.0);\n    }\n\n    // Classic Perlin noise, periodic variant\n    float pnoise(vec3 P, vec3 rep) {\n        vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n        vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n        Pi0 = mod289(Pi0);\n        Pi1 = mod289(Pi1);\n        vec3 Pf0 = fract(P); // Fractional part for interpolation\n        vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n        vec4 iy = vec4(Pi0.yy, Pi1.yy);\n        vec4 iz0 = Pi0.zzzz;\n        vec4 iz1 = Pi1.zzzz;\n        vec4 ixy = permute(permute(ix) + iy);\n        vec4 ixy0 = permute(ixy + iz0);\n        vec4 ixy1 = permute(ixy + iz1);\n        vec4 gx0 = ixy0 * (1.0 / 7.0);\n        vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n        gx0 = fract(gx0);\n        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n        vec4 sz0 = step(gz0, vec4(0.0));\n        gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n        gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n        vec4 gx1 = ixy1 * (1.0 / 7.0);\n        vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n        gx1 = fract(gx1);\n        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n        vec4 sz1 = step(gz1, vec4(0.0));\n        gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n        gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n        g000 *= norm0.x;\n        g010 *= norm0.y;\n        g100 *= norm0.z;\n        g110 *= norm0.w;\n        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n        g001 *= norm1.x;\n        g011 *= norm1.y;\n        g101 *= norm1.z;\n        g111 *= norm1.w;\n        float n000 = dot(g000, Pf0);\n        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n        float n111 = dot(g111, Pf1);\n        vec3 fade_xyz = fade(Pf0);\n        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n        return 2.2 * n_xyz;\n    }\n\n    varying vec3 vNormal;\n    varying vec2 vUv;\n    varying vec3 eyeVector;\n    uniform float vertexNoise;\n    uniform float time;\n    attribute vec3 center;\n    varying vec3 vCenter;\n    varying vec3 vColor;\n\n    float turbulence( vec3 p ) {\n        float w = 100.0;\n        float t = -.5;\n        for (float f = 1.0 ; f <= 10.0 ; f++ ){\n            float power = pow( 2.0, f );\n            t += abs( pnoise( vec3( power * p ), vec3( 10.0, 10.0, 10.0 ) ) / power );\n        }\n        return t;\n    }\n    void main() {\n        #include <begin_vertex>\n        #include <color_vertex>\n        #include <project_vertex>\n        #include <worldpos_vertex>\n        #include <shadowmap_vertex>\n        #include <fog_vertex>\n\n        vec4 worldPosition = modelMatrix * vec4( position, 1.0);\n        vUv = uv;\n        vColor.xyz = color.xyz;\n\n        float noise = 10.0 *  -.10 * turbulence( .5 * normal );\n        float b = 5.0 * pnoise(  sin(time * position), vec3( 100.0 ) );\n        float displacement = noise + b;\n\n        vec3 newPosition = position + normal * (displacement * vertexNoise);\n\n        vCenter = center;\n        eyeVector = normalize(worldPosition.xyz - cameraPosition);\n        vNormal = normalize( normalMatrix * normal );\n\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );\n    }",
                    fragmentShader: "\n\n    #include <shadowmask_pars_fragment>\n\n    uniform vec3 uMaterialColor;\n    uniform sampler2D textureImg;\n    uniform sampler2D noiseImg;\n    uniform vec2 resolution;\n    varying vec3 eyeVector;\n    uniform vec3 uDirLightPos;\n    uniform vec3 uDirLightColor;\n    uniform float window;\n    uniform float time;\n    uniform float angle;\n    uniform float uKd;\n    uniform float uBorder;\n    uniform float icosahedronOpacity;\n    uniform float materialOpacity;\n    uniform vec3 materialBackground;\n    uniform float distortion;\n    uniform float refractionFactor;\n    uniform float lightRightFactor;\n    uniform float lightLeftFactor;\n    varying vec3 vNormal;\n    varying vec3 vCenter;\n    varying vec2 vUv;\n    uniform bool fragmented;\n    varying vec3 vColor;\n    uniform float brightness;\n\n    float Fresnel(vec3 eyeVector, vec3 vNormal) {\n        return pow( 1.0 + dot( eyeVector, vNormal), 3.0 );\n    }\n\n    mat2 getRotM(float angle) {\n        float s = sin(angle);\n        float c = cos(angle);\n        return mat2(c, -s, s, c);\n    }\n\n    void main() {\n        vec3 dummy = vec3(vColor * 0.0);\n        vec4 lDirection = viewMatrix * vec4( (uDirLightPos), 0.0 );\n        vec3 lVector = normalize( lDirection.xyz );\n        vec3 normal = normalize( vNormal * dummy );\n        normal = normalize( cross( dFdx( vNormal ), dFdy( vNormal ) ) );\n        float diffuse = dot( normal, lVector );\n        float lightness = 1.0;\n        diffuse = (diffuse + lightness);\n        vec2 imgPos = vec2(1, 1);\n\n        if(fragmented) {\n            if ( diffuse > (0.98 + lightness) ) {\n                imgPos = vec2(1.0, 1.06);\n            }\n            else if ( diffuse > (0.97 + lightness) ) {\n                imgPos = vec2(-1.0, -0.6);\n            }\n            else if ( diffuse > (0.96 + lightness) ) {\n                imgPos = vec2(1.0, 0.75);\n            }\n            else if ( diffuse > (0.95 + lightness) ) {\n                imgPos = vec2(-0.7, 0.86);\n            }\n            else if ( diffuse > (0.93 + lightness) ) {\n                imgPos = vec2(0.6, -1.2);\n            }\n            else if ( diffuse > (0.91 + lightness) ) {\n                imgPos = vec2(0.65, -1.2);\n            }\n            else if ( diffuse > (0.87 + lightness) ) {\n                imgPos = vec2(0.95, 1.7);\n            }\n            else if ( diffuse > (0.85 + lightness) ) {\n                imgPos = vec2(1, -1);\n            }\n            else if ( diffuse > (0.835 + lightness) ) {\n                imgPos = vec2(1.6, -0.75);\n            }\n            else if ( diffuse > (0.79 + lightness) ) {\n                imgPos = vec2(0.6, -1.3);\n            }\n            else if ( diffuse > (0.75 + lightness) ) {\n                imgPos = vec2(1.2, -0.8);\n            }\n            else if ( diffuse > (0.71 + lightness) ) {\n                imgPos = vec2(0.65, -2.0);\n            }\n            else if ( diffuse > (0.68 + lightness) ) {\n                imgPos = vec2(0.95, -1.4);\n            }\n            else if( diffuse > (0.65 + lightness) ) {\n                imgPos = vec2(-1, -1);\n            }\n            else if( diffuse > (0.55 + lightness) ) {\n                imgPos = vec2(-0.3, 0.8);\n            }\n            else if( diffuse > (0.5 + lightness) ) {\n                imgPos = vec2(-1.3, 0.6);\n            }\n            else if( diffuse > (0.4 + lightness) ) {\n                imgPos = vec2(1.1, 1.1);\n            }\n            else if( diffuse > (0.3 + lightness) ) {\n                imgPos = vec2(-0.75, -0.75);\n            }\n            else if ( diffuse < (0.1 + lightness) ) {\n                imgPos = vec2(1.25, -0.5);\n            }\n            else {\n                imgPos = vec2(1.5, -0.65);\n            }\n        }\n        else {\n           imgPos = vec2(vColor.r * 1.25, vColor.g * 1.25);\n        }\n\n        // sample the background texture\n        vec2 uv;\n\n        if(fragmented) {\n            uv = (gl_FragCoord.xy / resolution) * imgPos;\n            if ( diffuse < (0.5 + lightness) ) {\n                diffuse = (diffuse - 0.5) * (1.0 / diffuse) + 0.5;\n            }\n        } else {\n            uv = vUv + imgPos;\n        }\n\n        vec3 center = vCenter * 0.0;\n\n        vec4 disp = texture2D(noiseImg, uv);\n\n        // calculate refraction and add to the screen coordinates\n        vec3 refracted = refract(eyeVector + center, normal, 0.1 / 2.42);\n        uv += (refracted.xy * refractionFactor);\n\n        float sin_factor = sin(angle * .15);\n        float cos_factor = cos(angle * .15);\n        uv = uv * mat2(cos_factor, sin_factor, -sin_factor, cos_factor);\n\n        // calculate the Fresnel ratio\n\t    float lightRight = Fresnel(eyeVector - .35, normal + .5);\n\t    float lightLeft = Fresnel(eyeVector, normal + .5);\n\n        vec4 tex;\n\n        tex = texture2D(textureImg, uv + (vec2(disp.r, disp.g) * distortion));\n\n        vec3 finalColor;\n\n        if(vColor.r > 0.55 && fragmented == false) {\n            finalColor = vec3(tex.rgb * uKd * uMaterialColor * uDirLightColor * diffuse * vColor.r);\n        } else {\n            finalColor = vec3(tex.rgb * uKd * uMaterialColor * uDirLightColor * diffuse);\n        }\n\n        vec3 mixedLeft = vec3(uMaterialColor * uDirLightColor * diffuse * (-lightLeft) * lightLeft * 0.1);\n        vec3 mixedRight = vec3(uMaterialColor * uDirLightColor * diffuse * (-lightRight) * lightRight * 0.1);\n        vec3 mixedColor = mix(finalColor, mixedLeft * lightLeftFactor, mixedRight * lightRightFactor);\n        vec3 mixedOpacity = mix(materialBackground, mixedColor, materialOpacity * icosahedronOpacity);\n\n        gl_FragColor = vec4(mixedOpacity, 1.);\n    }\n  "
                },
                o = "\n    varying vec3 vCenter;\n    uniform float lineWidth;\n    uniform float lineDarkness;\n    uniform float lineShadow;\n    uniform float lineOpacity;\n    varying vec3 vNormal;\n    varying vec2 vUv;\n    varying vec3 eyeVector;\n    varying vec3 vColor;\n\n    float edgeFactorTri() {\n        vec3 test = vNormal * vec3(vUv, 0.0) * vColor * eyeVector * 0.0;\n    vec3 d = fwidth( vCenter.xyz );\n    vec3 a3 = smoothstep( vec3( 0.0 ), (d + test) * lineWidth, vCenter.xyz );\n    return min( min( a3.x, a3.y ), a3.z ); }\n    void main() {\n\n        float factor = edgeFactorTri();\n        if ( factor > 0.8 ) discard; // <===============\n        gl_FragColor.rgb = mix( vec3(1.0), vec3( lineShadow ), factor);\n        gl_FragColor.rgb = gl_FragColor.rgb * lineDarkness;\n\n        gl_FragColor.a = lineOpacity * 1.0;\n    }\n    ",
                r = "\n        uniform float icosahedronOpacity;\n        uniform float materialOpacity;\n        uniform float lineDarkness;\n        uniform float lineShadow;\n        uniform float lineOpacity;\n\n        void main(){\n            vec3 lineColor = mix( vec3(1.0), vec3( lineShadow ), .0);\n            lineColor.rgb = lineColor.rgb * lineDarkness;\n\n            gl_FragColor = vec4( lineColor, lineOpacity );\n\n        }\n  ",
                a = i("QZz8");

            function l(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function c(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function h(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            i.d(t, "default", (function() {
                return u
            }));
            var u = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.init()
                }
                var t, i, u;
                return t = e, (i = [{
                    key: "init",
                    value: function() {
                        this.settings = {
                            lines: {
                                opacity: 0,
                                width: 1.65,
                                darkness: 1,
                                shadow: .5
                            },
                            materialOpacity: 1,
                            materialBackground: new n.c(a.a.colors.background),
                            vertexNoise: 0,
                            refraction: 1,
                            distortion: 0,
                            fragmented: !0,
                            light: {
                                left: 0,
                                right: 0
                            },
                            y: 0,
                            scale: 1,
                            animate: !1,
                            opacity: 0,
                            smoothness: .05,
                            position: {
                                x: 0,
                                y: 0,
                                z: 0
                            }
                        }, this.createGeometry(), this.createMaterial(), this.createMeshes(), this.setupGui()
                    }
                }, {
                    key: "createGeometry",
                    value: function() {
                        var e, t;
                        this.icosahedron = new n.g(9, 1), this.icosahedronLines = new n.f(9, 1);
                        for (var i = 0; i < this.icosahedron.faces.length; i++) t = this.icosahedron.faces[i], (e = new n.c(16777215)).setHex(16777215 * Math.random()), t.color = e
                    }
                }, {
                    key: "createMaterial",
                    value: function() {
                        this.uniforms = {
                                time: {
                                    type: "f",
                                    value: 1
                                },
                                brightness: {
                                    type: "f",
                                    value: 1
                                },
                                icosahedronOpacity: {
                                    type: "f",
                                    value: 0
                                },
                                materialOpacity: {
                                    type: "f",
                                    value: 1
                                },
                                materialBackground: {
                                    type: "c",
                                    value: new n.c(a.a.colors.background)
                                },
                                lineOpacity: {
                                    type: "f",
                                    value: this.settings.lines.opacity
                                },
                                lineDarkness: {
                                    type: "f",
                                    value: this.settings.lines.darkness
                                },
                                lineShadow: {
                                    type: "f",
                                    value: this.settings.lines.lineShadow
                                },
                                vertexNoise: {
                                    type: "f",
                                    value: 1
                                },
                                angle: {
                                    type: "f",
                                    value: Math.PI / 2
                                },
                                distortion: {
                                    value: this.settings.distortion
                                },
                                fragmented: {
                                    value: this.settings.fragmented
                                },
                                refractionFactor: {
                                    type: "f",
                                    value: this.settings.refraction
                                },
                                lightLeftFactor: {
                                    type: "f",
                                    value: this.settings.light.left
                                },
                                lightRightFactor: {
                                    type: "f",
                                    value: this.settings.light.right
                                },
                                textureImg: {
                                    type: "t",
                                    value: null
                                },
                                noiseImg: {
                                    type: "t",
                                    value: null
                                },
                                uDirLightPos: {
                                    type: "v3",
                                    value: new n.w
                                },
                                uDirLightColor: {
                                    type: "c",
                                    value: new n.c(16382458)
                                },
                                uMaterialColor: {
                                    type: "c",
                                    value: new n.c(16382458)
                                },
                                ambientLightColor: {
                                    type: "v3",
                                    value: new n.w
                                },
                                resolution: {
                                    type: "v2",
                                    value: [0, 0]
                                },
                                uKd: {
                                    type: "f",
                                    value: .7
                                },
                                lineWidth: {
                                    value: this.settings.lines.width
                                },
                                uBorder: {
                                    type: "f",
                                    value: .4
                                }
                            }, this.material = new n.s(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var i = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? l(Object(i), !0).forEach((function(t) {
                                        c(e, t, i[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : l(Object(i)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                                    }))
                                }
                                return e
                            }({}, s, {
                                uniforms: this.uniforms,
                                flatShading: !0,
                                transparent: !0,
                                vertexColors: !0
                            })), this.outlineMaterial = new n.s({
                                fragmentShader: r,
                                vertexShader: s.vertexShader,
                                uniforms: this.uniforms,
                                flatShading: !0,
                                transparent: !0,
                                vertexColors: !0
                            }),
                            function(e) {
                                for (var t = [new n.w(1, 0, 0), new n.w(0, 1, 0), new n.w(0, 0, 1)], i = e.attributes.position, s = new Float32Array(3 * i.count), o = 0, r = i.count; o < r; o++) t[o % 3].toArray(s, 3 * o);
                                e.setAttribute("center", new n.a(s, 3))
                            }(this.icosahedronLines), this.lineMaterial = new n.s({
                                uniforms: this.uniforms,
                                fragmentShader: o,
                                vertexShader: s.vertexShader,
                                transparent: !0,
                                vertexColors: !0
                            }), this.lineMaterial.extensions.derivatives = !0
                    }
                }, {
                    key: "createMeshes",
                    value: function() {
                        this.mesh = new n.i(this.icosahedron, this.material), this.outlineMesh = new n.i(this.icosahedron, this.outlineMaterial), this.lineMesh = new n.i(this.icosahedronLines, this.lineMaterial), this.wrap = new n.e, this.outlineMesh.material.depthTest = !1, this.outlineMesh.scale.x = this.outlineMesh.scale.y = this.outlineMesh.scale.z = 1.003, this.outlineMesh.renderOrder = -1, this.wrap.add(this.outlineMesh), this.wrap.add(this.mesh), this.wrap.add(this.lineMesh)
                    }
                }, {
                    key: "setupGui",
                    value: function() {}
                }]) && h(t.prototype, i), u && h(t, u), e
            }()
        },
        lEI6: function(e, t, i) {
            "use strict";
            i.r(t);
            var n, s, o, r = i("Womt"),
                a = i("EgnG"),
                l = i("j2ox"),
                c = {
                    uniforms: {
                        tDiffuse: {
                            value: null
                        },
                        opacity: {
                            value: 1
                        }
                    },
                    vertexShader: ["varying vec2 vUv;", "void main() {", "\tvUv = uv;", "\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
                    fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "\tvec4 texel = texture2D( tDiffuse, vUv );", "\tgl_FragColor = opacity * texel;", "}"].join("\n")
                };

            function h() {
                this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1
            }
            Object.assign(h.prototype, {
                setSize: function() {},
                render: function() {}
            }), h.FullScreenQuad = (n = new r.k(-1, 1, 1, -1, 0, 1), s = new r.n(2, 2), o = function(e) {
                this._mesh = new r.i(s, e)
            }, Object.defineProperty(o.prototype, "material", {
                get: function() {
                    return this._mesh.material
                },
                set: function(e) {
                    this._mesh.material = e
                }
            }), Object.assign(o.prototype, {
                dispose: function() {
                    this._mesh.geometry.dispose()
                },
                render: function(e) {
                    e.render(this._mesh, n)
                }
            }), o);
            var u = function(e, t) {
                h.call(this), this.textureID = void 0 !== t ? t : "tDiffuse", e instanceof r.s ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = r.u.clone(e.uniforms), this.material = new r.s({
                    defines: Object.assign({}, e.defines),
                    uniforms: this.uniforms,
                    vertexShader: e.vertexShader,
                    fragmentShader: e.fragmentShader
                })), this.fsQuad = new h.FullScreenQuad(this.material)
            };
            u.prototype = Object.assign(Object.create(h.prototype), {
                constructor: u,
                render: function(e, t, i) {
                    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = i.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e))
                }
            });
            var d = function(e, t) {
                h.call(this), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1
            };
            d.prototype = Object.assign(Object.create(h.prototype), {
                constructor: d,
                render: function(e, t, i) {
                    var n, s, o = e.getContext(),
                        r = e.state;
                    r.buffers.color.setMask(!1), r.buffers.depth.setMask(!1), r.buffers.color.setLocked(!0), r.buffers.depth.setLocked(!0), this.inverse ? (n = 0, s = 1) : (n = 1, s = 0), r.buffers.stencil.setTest(!0), r.buffers.stencil.setOp(o.REPLACE, o.REPLACE, o.REPLACE), r.buffers.stencil.setFunc(o.ALWAYS, n, 4294967295), r.buffers.stencil.setClear(s), r.buffers.stencil.setLocked(!0), e.setRenderTarget(i), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), r.buffers.color.setLocked(!1), r.buffers.depth.setLocked(!1), r.buffers.stencil.setLocked(!1), r.buffers.stencil.setFunc(o.EQUAL, 1, 4294967295), r.buffers.stencil.setOp(o.KEEP, o.KEEP, o.KEEP), r.buffers.stencil.setLocked(!0)
                }
            });
            var f = function() {
                h.call(this), this.needsSwap = !1
            };
            f.prototype = Object.create(h.prototype), Object.assign(f.prototype, {
                render: function(e) {
                    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1)
                }
            });
            var v = function(e, t) {
                if (this.renderer = e, void 0 === t) {
                    var i = {
                            minFilter: r.h,
                            magFilter: r.h,
                            format: r.q,
                            stencilBuffer: !1
                        },
                        n = e.getSize(new r.v);
                    this._pixelRatio = e.getPixelRatio(), this._width = n.width, this._height = n.height, (t = new r.x(this._width * this._pixelRatio, this._height * this._pixelRatio, i)).texture.name = "EffectComposer.rt1"
                } else this._pixelRatio = 1, this._width = t.width, this._height = t.height;
                this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new u(c), this.clock = new r.b
            };
            Object.assign(v.prototype, {
                swapBuffers: function() {
                    var e = this.readBuffer;
                    this.readBuffer = this.writeBuffer, this.writeBuffer = e
                },
                addPass: function(e) {
                    this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
                },
                insertPass: function(e, t) {
                    this.passes.splice(t, 0, e)
                },
                isLastEnabledPass: function(e) {
                    for (var t = e + 1; t < this.passes.length; t++)
                        if (this.passes[t].enabled) return !1;
                    return !0
                },
                render: function(e) {
                    void 0 === e && (e = this.clock.getDelta());
                    var t, i, n = this.renderer.getRenderTarget(),
                        s = !1,
                        o = this.passes.length;
                    for (i = 0; i < o; i++)
                        if (!1 !== (t = this.passes[i]).enabled) {
                            if (t.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i), t.render(this.renderer, this.writeBuffer, this.readBuffer, e, s), t.needsSwap) {
                                if (s) {
                                    var r = this.renderer.getContext(),
                                        a = this.renderer.state.buffers.stencil;
                                    a.setFunc(r.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), a.setFunc(r.EQUAL, 1, 4294967295)
                                }
                                this.swapBuffers()
                            }
                            void 0 !== d && (t instanceof d ? s = !0 : t instanceof f && (s = !1))
                        }
                    this.renderer.setRenderTarget(n)
                },
                reset: function(e) {
                    if (void 0 === e) {
                        var t = this.renderer.getSize(new r.v);
                        this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, (e = this.renderTarget1.clone()).setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
                    }
                    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2
                },
                setSize: function(e, t) {
                    this._width = e, this._height = t;
                    var i = this._width * this._pixelRatio,
                        n = this._height * this._pixelRatio;
                    this.renderTarget1.setSize(i, n), this.renderTarget2.setSize(i, n);
                    for (var s = 0; s < this.passes.length; s++) this.passes[s].setSize(i, n)
                },
                setPixelRatio: function(e) {
                    this._pixelRatio = e, this.setSize(this._width, this._height)
                }
            });
            var g = function() {
                this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1
            };
            Object.assign(g.prototype, {
                setSize: function() {},
                render: function() {}
            }), g.FullScreenQuad = function() {
                var e = new r.k(-1, 1, 1, -1, 0, 1),
                    t = new r.n(2, 2),
                    i = function(e) {
                        this._mesh = new r.i(t, e)
                    };
                return Object.defineProperty(i.prototype, "material", {
                    get: function() {
                        return this._mesh.material
                    },
                    set: function(e) {
                        this._mesh.material = e
                    }
                }), Object.assign(i.prototype, {
                    dispose: function() {
                        this._mesh.geometry.dispose()
                    },
                    render: function(t) {
                        t.render(this._mesh, e)
                    }
                }), i
            }();
            var m = function(e, t, i, n, s) {
                h.call(this), this.scene = e, this.camera = t, this.overrideMaterial = i, this.clearColor = n, this.clearAlpha = void 0 !== s ? s : 0, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1
            };
            m.prototype = Object.assign(Object.create(h.prototype), {
                constructor: m,
                render: function(e, t, i) {
                    var n, s, o = e.autoClear;
                    e.autoClear = !1, this.scene.overrideMaterial = this.overrideMaterial, this.clearColor && (n = e.getClearColor().getHex(), s = e.getClearAlpha(), e.setClearColor(this.clearColor, this.clearAlpha)), this.clearDepth && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : i), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor && e.setClearColor(n, s), this.scene.overrideMaterial = null, e.autoClear = o
                }
            });
            var p = i("UMGS"),
                y = i("z+i3"),
                b = i("QZz8");

            function x(e) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function P(e, t) {
                return !t || "object" !== x(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function C(e, t) {
                return (C = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var O = function(e) {
                    function t() {
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), P(this, S(t).apply(this, arguments))
                    }
                    var i, n, s;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && C(e, t)
                    }(t, e), i = t, (n = [{
                        key: "init",
                        value: function() {
                            this.settings = {
                                smoothness: .04
                            }, this.active = !1, this.scrollEnd = !1, this.currentScroll = 0, this.deltaY = 0, this.sectionsTotalHeight = 0, this.scrolledYLerp = 0, this.page = b.a.doc.querySelector(".scroll"), this.sections = b.a.doc.querySelectorAll(".scroll-section"), this.animateScroll = this.animateScroll.bind(this), this.onWheel = this.onWheel.bind(this), this.onResize = this.onResize.bind(this), this.calculateOffset = this.calculateOffset.bind(this), this.start = this.start.bind(this), this.stop = this.stop.bind(this), this.initEvents(), this.reset()
                        }
                    }, {
                        key: "initEvents",
                        value: function() {
                            b.a.doc.addEventListener("imagesLoaded", this.start, !1), b.a.win.addEventListener("wheel", this.onWheel, {
                                passive: !0
                            }), b.a.win.addEventListener("resize", this.onResize)
                        }
                    }, {
                        key: "destroyEvents",
                        value: function() {
                            b.a.doc.removeEventListener("imagesLoaded", this.start, !1), b.a.win.removeEventListener("wheel", this.onWheel)
                        }
                    }, {
                        key: "onResize",
                        value: function() {
                            this.calculateScrollSize()
                        }
                    }, {
                        key: "start",
                        value: function() {
                            var e = this;
                            setTimeout((function() {
                                b.a.loop.add(e.animateScroll, e.id)
                            }), 1500)
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            b.a.loop.remove(this.id)
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            b.a.win.scrollTo(0, 0)
                        }
                    }, {
                        key: "animateScroll",
                        value: function() {
                            var e = this;
                            this.active && (this.currentScroll = this.currentScroll + this.deltaY, -this.currentScroll < 0 ? (this.currentScroll = 0, this.scrollEnd = !1) : Math.abs(this.currentScroll) > this.maxScroll && (this.currentScroll = -this.maxScroll, this.scrollEnd = !0)), this.scrolledYLerp = Object(p.a)(this.scrolledYLerp, this.currentScroll, this.settings.smoothness), this.sections.forEach((function(t) {
                                var i = t.dataset.parallax;
                                i || (i = 1), t.style.transform = "translate3d(0, ".concat(e.scrolledYLerp * i, "px, 0)")
                            })), this.deltaY = 0
                        }
                    }, {
                        key: "onWheel",
                        value: function(e) {
                            var t = l.a.normalizeWheel(e);
                            this.deltaY = this.delta = e.wheelDeltaY || -1 * t.pixelY
                        }
                    }, {
                        key: "calculateScrollSize",
                        value: function() {
                            this.maxScroll = this.sectionsTotalHeight - window.innerHeight
                        }
                    }, {
                        key: "calculateOffset",
                        value: function(e) {
                            return {
                                offset: e.scrollY / (this.sectionsTotalHeight - window.innerHeight) * this.maxScroll
                            }
                        }
                    }]) && w(i.prototype, n), s && w(i, s), t
                }(y.a),
                k = {
                    uniforms: {
                        uTime: {
                            value: 1
                        },
                        tDiffuse: {
                            value: null
                        },
                        rgbOffsetOpt: {
                            value: .1
                        }
                    },
                    vertexShader: "\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }",
                    fragmentShader: "\n    varying vec2 vUv;\n    uniform float uTime;\n    uniform sampler2D tDiffuse;\n    uniform float rgbOffsetOpt;\n\nvoid main() {\n\tvec2 uv =  vUv;\n    float y = uv.y;\n\n\tfloat red \t=   texture2D(tDiffuse, vec2(uv.x - 0.01 * rgbOffsetOpt,y)).r;\n\tfloat green = \ttexture2D(tDiffuse, vec2(uv.x ,\ty)).g;\n\tfloat blue \t=\ttexture2D(tDiffuse, vec2(uv.x + 0.01 * rgbOffsetOpt,y)).b;\n\n\tvec3 color = vec3(red, green, blue);\n\n\tgl_FragColor = vec4(color,1.0);\n}\n\n\n\n\n   "
                },
                z = {
                    uniforms: {
                        tDiffuse: {
                            value: null
                        },
                        rgbOffsetOpt: {
                            value: .1
                        }
                    },
                    vertexShader: "\n        varying vec2 vUv;\n        void main() {\n        vUv = uv;\n        gl_Position = projectionMatrix\n            * modelViewMatrix\n            * vec4( position, 1.0 );\n        }\n    ",
                    fragmentShader: "\n\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform float rgbOffsetOpt;\n\nfloat sat( float t ) {\n\treturn clamp( t, 0.0, 1.0 );\n}\n\nvec2 sat( vec2 t ) {\n\treturn clamp( t, 0.0, 1.0 );\n}\n\n//remaps inteval [a;b] to [0;1]\nfloat remap  ( float t, float a, float b ) {\n\treturn sat( (t - a) / (b - a) );\n}\n\n//note: / t=[0;0.5;1], y=[0;1;0]\nfloat linterp( float t ) {\n\treturn sat( 1.0 - abs( 2.0*t - 1.0 ) );\n}\n\nvec3 spectrum_offset( float t ) {\n    float t0 = 3.0 * t - 1.5;\n\treturn clamp( vec3( -t0, 1.0-abs(t0), t0), 0.0, 1.0);\n    /*\n\tvec3 ret;\n\tfloat lo = step(t,0.5);\n\tfloat hi = 1.0-lo;\n\tfloat w = linterp( remap( t, 1.0/6.0, 5.0/6.0 ) );\n\tfloat neg_w = 1.0-w;\n\tret = vec3(lo,1.0,hi) * vec3(neg_w, w, neg_w);\n\treturn pow( ret, vec3(1.0/2.2) );\n*/\n}\n\n//note: [0;1]\nfloat rand( vec2 n ) {\n  return fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);\n}\n\nvoid main() {\n\tvec2 uv = vUv;\n\n    const int NUM_SAMPLES =4;\n    const float RCP_NUM_SAMPLES_F = 1.0 / float(NUM_SAMPLES);\n\n\tvec4 sum = vec4(0.0);\n\tvec3 wsum = vec3(0.0);\n\tfor( int i=0; i<NUM_SAMPLES; ++i )\n\t{\n\t\tfloat t = float(i) * RCP_NUM_SAMPLES_F;\n\t\tuv.x = sat( uv.x + (rgbOffsetOpt * .01) * t );\n\t\tvec4 samplecol = texture2D( tDiffuse, uv );\n\t\tvec3 s = spectrum_offset( t );\n\t\tsamplecol.rgb = samplecol.rgb * s;\n\t\tsum += samplecol;\n\t\twsum += s;\n\t}\n\tsum.rgb /= wsum;\n\tsum.a *= RCP_NUM_SAMPLES_F;\n\n    vec3 color = vec3(sum);\n\n\tgl_FragColor = vec4(color,1.0); // * outcol0.a;\n}\n\n   "
                },
                _ = {
                    uniforms: {
                        tDiffuse: {
                            value: null
                        },
                        brightness: {
                            value: 1
                        },
                        gradient: {
                            value: .5
                        },
                        color: {
                            type: "c",
                            value: new r.c(8421504)
                        }
                    },
                    vertexShader: "\n      varying vec2 vUv;\n      void main() {\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);\n      }\n    ",
                    fragmentShader: "\n      varying vec2 vUv;\n      uniform sampler2D tDiffuse;\n      uniform float brightness;\n      uniform float gradient;\n      uniform vec3 color;\n\n    float blendOverlay( float base, float blend ) {\n        return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );\n    }\n\n    vec3 blendOverlay( vec3 base, vec3 blend ) {\n        return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );\n    }\n\n      void main() {\n\n        vec4 previousPassColor = texture2D(tDiffuse, vUv);\n\n        if(previousPassColor.r < (0.35 * brightness)) {\n            previousPassColor.rgb = vec3(0.015, 0.015, 0.015);\n            previousPassColor.rgb *= brightness;\n            previousPassColor.rgb *= brightness;\n            previousPassColor.rgb *= brightness;\n        }\n\n        if(previousPassColor.r >= (0.35 * brightness)) {\n            previousPassColor.rgb =  vec3(previousPassColor.r * (-vUv.y * gradient), previousPassColor.g - 0.35, previousPassColor.b);\n            // previousPassColor.rgb =  vec3(previousPassColor.r * brightness, previousPassColor.g - 0.35, previousPassColor.b);\n            previousPassColor.rgb *= brightness;\n        }\n\n        float grey = 0.21 * previousPassColor.r + 0.71 * previousPassColor.g + 0.07 * previousPassColor.b;\n        vec4 mixed = vec4(previousPassColor.rgb * (1.0 - 1.0) + (grey * 1.0), previousPassColor.w);\n        vec4 mixedBrightness = vec4( mix(mixed.rgb, vec3(1.0, 1.0, 1.0), brightness - 1.0) , previousPassColor.w);\n        vec4 finalColor = vec4(blendOverlay(mixedBrightness.rgb, color), mixedBrightness.w);\n\n        gl_FragColor = finalColor;\n     }\n    "
                },
                L = {
                    uniforms: {
                        tDiffuse: {
                            value: null
                        },
                        resolution: {
                            type: "v2",
                            value: ""
                        },
                        vignetteFactor: {
                            type: "f",
                            value: "0.0"
                        },
                        kaleidoFactor: {
                            type: "f",
                            value: "0.0"
                        },
                        kaleidoScale: {
                            type: "f",
                            value: "3.0"
                        }
                    },
                    vertexShader: "\n      varying vec2 vUv;\n      void main() {\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);\n      }\n    ",
                    fragmentShader: "\n    varying vec2 vUv;\n    uniform sampler2D tDiffuse;\n    uniform vec2 resolution;\n    uniform float vignetteFactor;\n    uniform float kaleidoFactor;\n    uniform float kaleidoScale;\n\n    const float PI = 3.14159265359;\n\n    vec2 Kaleidoscope( vec2 uv, float n) {\n        float angle = PI / n;\n\n        float r = length( uv );\n        float a = atan( uv.y, uv.x ) / angle;\n\n        a = mix( fract( a ), 1.0 - fract( a ), mod( floor( a ), 2.0 ) ) * angle;\n\n        return vec2( cos( a ), sin( a ) ) * r;\n    }\n\n    vec2 kaleidoscope(vec2 uv) {\n        vec2 radial = vec2(0.);\n        uv = mix( uv, Kaleidoscope( uv * mat2(cos(0.0), -sin(0.0), sin(0.0), cos(0.0)), 6.0), 1. );\n\n        return uv;\n    }\n    void main() {\n\n        vec2 uv = vUv - .5;\n        uv.y *= resolution.y / resolution.x;\n        uv /= 1.1;\n\n        uv = kaleidoscope(uv * kaleidoScale);\n        uv /= 1.4;\n\n        vec4 kaleidPass = texture2D(tDiffuse, uv);\n        vec4 previousPassColor = mix(texture2D(tDiffuse, vUv), kaleidPass, kaleidoFactor);\n\n        // colors\n        vec3 white = vec3(1.0, 1.0, 1.0);\n        vec3 eightWhite = vec3(0.8, 0.8, 0.8);\n        vec3 color1 = vec3(0.41, 0.41, 0.91);\n        vec3 color2 = vec3(0.94, 0.36, 0.60);\n\n        vec3 color = mix(color1, mix(white, color2, vUv.x), vUv.y);\n        vec3 mixedLight = mix(previousPassColor.rgb, previousPassColor.rgb / pow(color, vec3(vUv.y,vUv.x,vUv.y)), 1.0);\n        vec3 mixedOpec = mix(mixedLight, pow(color, vec3(3.0)), 0.5);\n\n        vec2 st = gl_FragCoord.xy / resolution;\n        float pct = 0.5;\n\n        vec3 vignette = vec3(1.0);\n\n        if(vignetteFactor > 0.0) {\n            pct = distance(st, vec2(0.5));\n            vignette = vec3(1.25 - pct);\n\n            if(vignette.r > 1.0) {\n                vignette = vec3(1.0);\n            }\n        }\n\n        vec3 mixedVignette = mix(previousPassColor.rgb, previousPassColor.rgb * vignette, vignetteFactor);\n\n        gl_FragColor = vec4(mix(mixedVignette, mixedOpec, 0.0), previousPassColor.w);\n    }"
                },
                T = {
                    uniforms: {
                        tDiffuse: {
                            value: null
                        },
                        amount: {
                            value: .135
                        },
                        uTime: {
                            value: 1
                        }
                    },
                    vertexShader: "\n        varying vec2 vUv;\n        void main() {\n        vUv = uv;\n        gl_Position = projectionMatrix\n            * modelViewMatrix\n            * vec4( position, 1.0 );\n        }\n    ",
                    fragmentShader: "\n    uniform float amount;\n    uniform sampler2D tDiffuse;\n    varying vec2 vUv;\n    uniform float uTime;\n\n    float random( vec2 p )\n    {\n      vec2 K1 = vec2(\n        2.14069263277926, // e^pi (Gelfond's constant)\n        2.665144142690225 // 2^sqrt(2) (Gelfondâ€“Schneider constant)\n      );\n      return fract( cos( dot( p, K1 ) ) * 122345.6789 );\n    }\n\n    void main() {\n\n      vec4 color = texture2D( tDiffuse, vUv );\n      vec2 uvRandom = vUv;\n\n      uvRandom.y *= random( vec2( uvRandom.y, uTime ) );\n      uvRandom.x *= random( vec2( uvRandom.x, uTime ) );\n\n      color.rgb += random( uvRandom ) * amount;\n      color.rgb += 0.02;\n      vec3 newColor = color.rgb;\n      gl_FragColor = vec4( newColor, 1.0 );\n    }\n"
                },
                M = i("Y2vH"),
                j = i("JXsB"),
                D = i.n(j),
                E = i("OEHq");

            function F(e) {
                return (F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function R(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function I(e, t) {
                return !t || "object" !== F(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function U(e) {
                return (U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function B(e, t) {
                return (B = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            i.d(t, "default", (function() {
                return Y
            }));
            var Y = function(e) {
                function t() {
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), I(this, U(t).apply(this, arguments))
                }
                var i, n, s;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && B(e, t)
                }(t, e), i = t, (n = [{
                    key: "init",
                    value: function() {
                        var e = this;
                        this.canvas = this.component, this.renderer = new r.y({
                            alpha: !1,
                            antialias: !1
                        }), this.scroll = new O("glScroll", this.page, this.component), this.scroll.sectionsTotalHeight = 5100, this.renderer.setClearColor(new r.c("#141414")), this.composer = new v(this.renderer), this.loaderText = this.page.page.querySelector(".loader-text"), this.loaderTextElements = this.page.page.querySelectorAll(".loader-letter-inner"), this.scrolling = !1, this.clock = new r.b, this.time = this.clock.getDelta(), this.objectFile = this.canvas.dataset.model, this.object = {}, this.group = new r.e, this.groupWrap = new r.e, this.deltaY = 0, this.counter = 0, this.canvas.appendChild(this.renderer.domElement), this.reset = null, this.loadingProgress = 0, this.materialsLoaded = !1, this.doVisualUpdates = !1, this.loader = new r.t, this.textures = [], this.noiseImage = this.loader.load(b.a.data.home.noiseTexture), this.isLoaded = !1, this.data = {
                            header: {
                                image: this.loader.load(b.a.data.home.image)
                            }
                        }, this.dimensions = {
                            width: this.canvas.offsetWidth,
                            height: this.canvas.offsetHeight,
                            dpr: Math.min(devicePixelRatio, 2)
                        }, this.center = {
                            x: this.canvas.offsetWidth / 2,
                            y: this.canvas.offsetHeight / 2
                        }, this.drag = {
                            xLerp: 0,
                            x: 0,
                            y: 0
                        }, this.mouse = {
                            x: 0,
                            y: 0,
                            speed: 0
                        }, this.scrollSpeed = 1, this.offset = {
                            rotation: {
                                x: 0,
                                y: 0,
                                z: 0
                            }
                        }, this.settings = {
                            speed: .25,
                            perspective: 25,
                            zoom: 1,
                            tilt: 0,
                            dragZoom: 0,
                            background: "#141414",
                            colorOverlay: "#808080",
                            brightness: 1,
                            vignette: 0,
                            kaleidoFactor: 0,
                            noise: .135,
                            rgbOffset: .1,
                            camaraPos: {
                                x: 64,
                                y: 0,
                                z: 0
                            },
                            light: {
                                x: 75,
                                y: 24,
                                z: 35,
                                color: "#e2e2e2",
                                intensity: 6
                            },
                            imageScale: 1
                        }, this.resolution = [this.dimensions.width * this.dimensions.dpr / 2.5 * this.settings.imageScale, this.dimensions.height * this.dimensions.dpr / 2.5 * this.settings.imageScale], this.render = this.render.bind(this), this.onScroll = this.onScroll.bind(this), this.onResize = this.onResize.bind(this), this.resize = this.resize.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.onKeydown = this.onKeydown.bind(this), this.calculateMouseSpeed = this.calculateMouseSpeed.bind(this), this.loadBackground = this.loadBackground.bind(this), this.showIcosahedron = this.showIcosahedron.bind(this), this.loadImages = this.loadImages.bind(this), this.loadImage = this.loadImage.bind(this), this.loadNoiseTexture = this.loadNoiseTexture.bind(this), this.changeImage = this.changeImage.bind(this), this.changeColor = this.changeColor.bind(this), this.pauseChangeTransition = this.pauseChangeTransition.bind(this), this.setPosition = this.setPosition.bind(this), this.setStyle = this.setStyle.bind(this), this.setBackground = this.setBackground.bind(this), this.getImages = null, this.tiltTimeout = null, this.tiltLerp = 0, this.mouseSpeed = new D.a, this.mouseSpeedLerp = 0, this.createCamera(), this.createGeometry(), this.createScene(), this.resize(), this.setupPostProcessing(), this.animate(), this.doVisualUpdates = !0, setTimeout((function() {
                            e.resize()
                        }), 3e3)
                    }
                }, {
                    key: "loadImages",
                    value: function() {
                        var e = this;
                        b.a.loaderStarted = !0, this.textures.push(this.data.header.image), this.createMaterials(), this.createMeshes(), r.d.onProgress = function(t, i, n) {
                            if (e.isLoaded) return !1;
                            setTimeout((function() {
                                e.loadingProgress = Math.floor(i / n * 100), e.loaderTextElements[0].innerHTML = e.loadingProgress, M.a.loadingIcon.setLoadingPoint(e.loadingProgress), 100 === e.loadingProgress && (e.isLoaded = !0, Object(a.a)({
                                    targets: e.loaderTextElements,
                                    translateY: [0, "-101%"],
                                    delay: 500,
                                    duration: 1e3,
                                    easing: b.a.easings.soft,
                                    begin: function() {
                                        b.a.doc.dispatchEvent(b.a.events.loaderDone), b.a.loaderDone = !0
                                    },
                                    complete: function() {
                                        b.a.doc.dispatchEvent(b.a.events.imagesLoaded)
                                    }
                                }))
                            }), 50 * i)
                        }, b.a.data.projects.forEach((function(t) {
                            "" !== t.texture && e.textures.push(e.loader.load(t.texture))
                        })), b.a.data.projects.forEach((function(t) {
                            "" !== t.noiseTexture && e.textures.push(e.loader.load(t.noiseTexture))
                        }))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.destroyEvents()
                    }
                }, {
                    key: "initEvents",
                    value: function() {
                        b.a.win.addEventListener("wheel", this.onScroll, {
                            passive: !0
                        }), b.a.win.addEventListener("resize", this.onResize, {
                            passive: !0
                        }), b.a.win.addEventListener("mousemove", this.onMouseMove), b.a.doc.addEventListener("loadAnimation", this.loadImages, !1), b.a.doc.addEventListener("keydown", this.onKeydown)
                    }
                }, {
                    key: "destroyEvents",
                    value: function() {
                        b.a.win.removeEventListener("wheel", this.onScroll, {
                            passive: !0
                        }), b.a.win.removeEventListener("resize", this.onResize, {
                            passive: !0
                        }), b.a.win.removeEventListener("mousemove", this.onMouseMove), b.a.doc.removeEventListener("loadAnimation", this.loadImages), b.a.doc.removeEventListener("keydown", this.onKeydown)
                    }
                }, {
                    key: "onKeydown",
                    value: function(e) {
                        var t = this;
                        clearTimeout(this.tiltTimeout), "32" == (e = e || window.event).keyCode && (this.settings.tilt = 4), this.tiltTimeout = setTimeout((function() {
                            t.settings.tilt = 0
                        }), 500)
                    }
                }, {
                    key: "onMouseMove",
                    value: function(e) {
                        this.mouse.x = e.clientX - this.center.x, this.mouse.y = e.clientY - this.center.y
                    }
                }, {
                    key: "calculateMouseSpeed",
                    value: function() {
                        this.mouse.speed = Math.abs(this.mouseSpeed.speedX) + .05 * Math.abs(this.mouseSpeed.speedY)
                    }
                }, {
                    key: "onScroll",
                    value: function(e) {
                        var t = this,
                            i = l.a.normalizeWheel(e);
                        this.deltaY = this.delta = e.wheelDeltaY || -1 * i.pixelY, clearTimeout(this.isScrolling), this.isScrolling = setTimeout((function() {
                            t.scrolling = !0
                        }), 60)
                    }
                }, {
                    key: "setupPostProcessing",
                    value: function() {
                        this.composer.addPass(new m(this.scene, this.camera)), this.glitchPass = new u(k), this.glitchPass2 = new u(z), this.colorPass = new u(_), this.gradientPass = new u(L), this.noisePass = new u(T), this.gradientPass.uniforms.resolution.value = new r.v(this.dimensions.width, this.dimensions.height), this.noisePass.renderToScreen = !0, this.composer.addPass(this.colorPass), this.composer.addPass(this.glitchPass2), this.composer.addPass(this.gradientPass), this.composer.addPass(this.noisePass)
                    }
                }, {
                    key: "createCamera",
                    value: function() {
                        this.camera = new r.m(this.settings.perspective, this.dimensions.width / this.dimensions.height, .1, 100), this.camera.position.set(this.settings.camaraPos.x, this.settings.camaraPos.y, this.settings.camaraPos.z), this.camera.lookAt(new r.w)
                    }
                }, {
                    key: "createPlaneGeometry",
                    value: function(e, t) {
                        this.planeGeometry = new r.o(e / 100, t / 100, 16, 16), this.material = new r.s({
                            vertexShader: vertexShader,
                            fragmentShader: fragmentShader,
                            uniforms: {
                                uTime: {
                                    value: 0
                                }
                            },
                            wireframe: !0
                        }), this.mesh = new r.i(this.planeGeometry, this.material), this.scene.add(this.mesh)
                    }
                }, {
                    key: "createGeometry",
                    value: function() {
                        this.icosahedron = new E.default
                    }
                }, {
                    key: "createMaterials",
                    value: function() {
                        this.data.header.image.wrapS = r.j, this.data.header.image.wrapT = r.j, this.data.header.image.anisotropy = .1, this.materialsLoaded = !0, this.icosahedron.uniforms.textureImg.value = this.data.header.image, this.noiseImage.wrapS = r.j, this.noiseImage.wrapT = r.j, this.noiseImage.anisotropy = .1, this.icosahedron.uniforms.noiseImg.value = this.noiseImage, this.icosahedron.uniforms.uDirLightColor.value = new r.c(this.settings.light.color), this.icosahedron.uniforms.uDirLightPos.value = this.light.position, this.icosahedron.uniforms.resolution.value = this.resolution, this.icosahedron.settings.y = 9.5 - this.canvas.offsetWidth / 200
                    }
                }, {
                    key: "pauseChangeTransition",
                    value: function() {
                        this.changeImageOut && this.changeImageOut.pause(), this.changeImageIn && this.changeImageIn.pause()
                    }
                }, {
                    key: "changeColor",
                    value: function(e) {
                        this.colorPass.uniforms.color.value = new r.c(e)
                    }
                }, {
                    key: "changeImage",
                    value: function(e, t) {
                        var i = this,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
                            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500;
                        this.changeImageOut = Object(a.a)({
                            targets: this.icosahedron.settings,
                            opacity: 0,
                            duration: s,
                            easing: "linear",
                            complete: function(o) {
                                i.loadImage(e), t && "" !== t && i.loadNoiseTexture(t), i.changeImageIn = Object(a.a)({
                                    targets: i.icosahedron.settings,
                                    opacity: 1,
                                    delay: n,
                                    duration: s,
                                    easing: "linear"
                                })
                            }
                        })
                    }
                }, {
                    key: "loadImage",
                    value: function(e) {
                        var t = this;
                        this.textures.forEach((function(i) {
                            i.image.src.includes(e) && (i.wrapS = r.j, i.wrapT = r.j, i.anisotropy = .1, t.icosahedron.material.uniforms.textureImg.value = i)
                        }))
                    }
                }, {
                    key: "loadNoiseTexture",
                    value: function(e) {
                        var t = this;
                        this.textures.forEach((function(i) {
                            i.image.src.includes(e) && (i.wrapS = r.j, i.wrapT = r.j, i.anisotropy = .1, t.icosahedron.material.uniforms.noiseImg.value = i)
                        }))
                    }
                }, {
                    key: "createMeshes",
                    value: function() {
                        this.group.add(this.icosahedron.wrap), this.groupWrap.add(this.group), this.group.matrixAutoUpdate = !0
                    }
                }, {
                    key: "createScene",
                    value: function() {
                        this.light = new r.p(this.settings.light.color, this.settings.light.intensity), this.light.castShadow = !0, this.light.shadow.camera.near = 1, this.light.shadow.camera.far = 300, this.light.shadow.bias = -.005, this.renderer.shadowMap.type = r.l, this.light.shadow.mapSize.width = 1024, this.light.shadow.mapSize.height = 1024, this.light.position.set(this.settings.light.x, this.settings.light.y, this.settings.light.z), this.scene = new r.r, this.scene.add(this.light), this.scene.add(this.groupWrap)
                    }
                }, {
                    key: "setBackground",
                    value: function(e) {
                        var t = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 700,
                            n = {
                                bgColor: b.a.colors.background,
                                vignette: 0,
                                kaleidoFactor: 0,
                                overlay: b.a.colors.overlay
                            };
                        Object.assign(n, e), Object(a.a)({
                            targets: this.settings,
                            background: n.bgColor,
                            vignette: n.vignette,
                            kaleidoFactor: n.kaleidoFactor,
                            colorOverlay: n.overlay,
                            duration: i,
                            easing: "linear",
                            update: function(e) {
                                t.renderer.setClearColor(new r.c(t.settings.background)), t.icosahedron.uniforms.materialBackground.value = new r.c(t.settings.background), t.changeColor(t.settings.colorOverlay)
                            }
                        })
                    }
                }, {
                    key: "setStyle",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 700,
                            i = {
                                lines: {
                                    opacity: 1,
                                    width: 1.65,
                                    darkness: 1,
                                    shadow: .5
                                },
                                fragmented: !0,
                                vertexNoise: 0,
                                distortion: 0,
                                refraction: 1,
                                materialOpacity: 1,
                                materialBackground: "#141414",
                                brightness: 1,
                                noise: .135,
                                light: {
                                    left: 0,
                                    right: 0
                                },
                                colors: {
                                    ui: "#B3B3B3",
                                    title: "#B3B3B3",
                                    border: "#999999",
                                    background: "#141414",
                                    menuBackground: "#272727",
                                    overlay: "#7a49a5"
                                }
                            };
                        Object.assign(i, e), Object(a.a)({
                            targets: this.icosahedron.settings.lines,
                            opacity: i.lines.opacity,
                            width: i.lines.width,
                            darkness: i.lines.darkness,
                            shadow: i.lines.shadow,
                            delay: 500,
                            duration: t,
                            easing: "linear"
                        }), Object(a.a)({
                            targets: this.settings,
                            brightness: i.brightness,
                            noise: i.noise,
                            delay: 300,
                            duration: t,
                            easing: "linear"
                        }), this.icosahedron.settings.materialOpacity = i.materialOpacity, this.icosahedron.settings.materialBackground = i.materialBackground, this.icosahedron.settings.refraction = i.refraction, this.icosahedron.settings.vertexNoise = i.vertexNoise, this.icosahedron.settings.distortion = i.distortion, this.icosahedron.settings.fragmented = i.fragmented, this.icosahedron.settings.light.right = i.light.right, this.icosahedron.settings.light.left = i.light.left, b.a.colors.ui !== i.colors.ui && (b.a.html.style.setProperty("--main-text-color", i.colors.ui), b.a.html.style.setProperty("--main-title-color", i.colors.title), b.a.html.style.setProperty("--main-border-color", i.colors.border), b.a.html.style.setProperty("--menu-background-color", i.colors.menuBackground), b.a.colors.ui = i.colors.ui)
                    }
                }, {
                    key: "setPosition",
                    value: function(e) {
                        var t = {
                            scroll: !0,
                            position: !0,
                            zoom: !0,
                            scale: !0,
                            lines: !1
                        };
                        Object.assign(t, e), t.scroll && (this.scroll.currentScroll = 0), t.position && (this.icosahedron.settings.position.y = 0), t.position && (this.icosahedron.settings.position.z = 0), t.zoom && (this.settings.zoom = 1), t.imageScale && (this.settings.imageScale = 1), t.lines && (this.icosahedron.settings.lines.darkness = 1), t.lines && (this.icosahedron.settings.lines.width = 1.65)
                    }
                }, {
                    key: "loadBackground",
                    value: function() {
                        Object(a.a)({
                            targets: this.canvas,
                            opacity: 1,
                            duration: 200,
                            delay: 200,
                            easing: "linear"
                        })
                    }
                }, {
                    key: "showIcosahedron",
                    value: function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        e && Object(a.a)({
                            targets: this.icosahedron.settings,
                            opacity: 1,
                            duration: 1e3,
                            delay: 300,
                            easing: "linear"
                        })
                    }
                }, {
                    key: "animate",
                    value: function() {
                        b.a.loop.add(this.render, "Render")
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (!this.doVisualUpdates) return !1;
                        this.calculateMouseSpeed(), this.time = this.clock.getDelta(), this.counter += 1e-8, this.noisePass.uniforms.uTime.value = this.counter, this.noisePass.uniforms.amount.value = this.settings.noise, this.glitchPass.uniforms.uTime.value = this.time, this.groupWrap.position.y = Object(p.a)(this.groupWrap.position.y, this.icosahedron.settings.position.y + .0015 * -this.mouse.y, this.icosahedron.settings.smoothness), this.groupWrap.position.z = Object(p.a)(this.groupWrap.position.z, this.icosahedron.settings.position.z + .0015 * -this.mouse.x, this.icosahedron.settings.smoothness), this.scroll && (this.groupWrap.position.x = this.settings.dragZoom + this.settings.zoom + -.0075 * this.scroll.scrolledYLerp * this.scrollSpeed, this.groupWrap.rotation.x = 25e-6 * this.scroll.scrolledYLerp * this.scrollSpeed, this.groupWrap.rotation.z = .001 * this.scroll.scrolledYLerp * this.scrollSpeed, this.groupWrap.rotation.y = 25e-5 * this.scroll.scrolledYLerp * this.scrollSpeed, this.drag.xLerp = Object(p.a)(this.drag.xLerp, this.drag.x, this.icosahedron.settings.smoothness), this.group.rotation.x = -this.drag.xLerp * this.scrollSpeed, this.materialsLoaded && (this.icosahedron.uniforms.icosahedronOpacity.value = this.icosahedron.settings.opacity, this.icosahedron.uniforms.materialOpacity.value = this.icosahedron.settings.materialOpacity, this.icosahedron.uniforms.lineOpacity.value = this.icosahedron.settings.lines.opacity, this.icosahedron.uniforms.lineDarkness.value = this.icosahedron.settings.lines.darkness, this.icosahedron.uniforms.lineShadow.value = this.icosahedron.settings.lines.shadow, this.resolution = [this.dimensions.width * this.dimensions.dpr / 2.5 * this.settings.imageScale, this.dimensions.height * this.dimensions.dpr / 2.5 * this.settings.imageScale], this.icosahedron.uniforms.resolution.value = this.resolution, this.icosahedron.uniforms.brightness.value = this.settings.brightness)), this.offset.rotation.z = Object(p.a)(this.offset.rotation.z, 25e-6 * (this.mouse.y + this.mouse.x), .05), this.offset.rotation.y = Object(p.a)(this.offset.rotation.y, 15e-6 * (this.mouse.y + this.mouse.x), .05), this.group.rotation.y += this.time * this.settings.speed / 6 + Math.abs(this.offset.rotation.y), this.group.rotation.z += this.time * this.settings.speed / 4 + Math.abs(this.offset.rotation.z), this.mouseSpeedLerp = Object(p.a)(this.mouseSpeedLerp, this.mouse.speed, .05), this.tiltLerp = Object(p.a)(this.tiltLerp, this.settings.tilt, .1), this.glitchPass.uniforms.rgbOffsetOpt.value = this.settings.rgbOffset + .3 * this.tiltLerp + .005 * this.mouseSpeedLerp, this.glitchPass2.uniforms.rgbOffsetOpt.value = this.settings.rgbOffset + .3 * this.tiltLerp + .0125 * this.mouseSpeedLerp, this.colorPass.uniforms.brightness.value = this.settings.brightness, this.gradientPass.uniforms.vignetteFactor.value = this.settings.vignette, this.gradientPass.uniforms.kaleidoFactor.value = this.settings.kaleidoFactor, this.gradientPass.uniforms.resolution.value = new r.v(this.dimensions.width, this.dimensions.height), this.materialsLoaded && (this.icosahedron.material.uniforms.time.value += .001, this.icosahedron.lineMaterial.uniforms.time.value = this.icosahedron.material.uniforms.time.value, this.icosahedron.uniforms.refractionFactor.value = this.icosahedron.settings.refraction, this.icosahedron.uniforms.lightLeftFactor.value = this.icosahedron.settings.light.left, this.icosahedron.uniforms.lightRightFactor.value = this.icosahedron.settings.light.right, this.icosahedron.uniforms.fragmented.value = this.icosahedron.settings.fragmented, this.icosahedron.uniforms.distortion.value = this.icosahedron.settings.distortion, this.icosahedron.uniforms.vertexNoise.value = Object(p.a)(this.icosahedron.uniforms.vertexNoise.value, this.icosahedron.settings.vertexNoise + this.tiltLerp + .035 * this.mouseSpeedLerp, .05), this.takingScreen ? this.icosahedron.uniforms.lineWidth.value = 4 * this.icosahedron.settings.lines.width : this.icosahedron.uniforms.lineWidth.value = this.icosahedron.settings.lines.width), this.composer.render(), this.deltaY = 0, this.offset.rotation.z = 0, this.offset.rotation.y = 0
                    }
                }, {
                    key: "resize",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.width,
                            i = void 0 === t ? this.canvas.offsetWidth : t,
                            n = e.height,
                            s = void 0 === n ? this.canvas.offsetHeight : n,
                            o = (e.pixelRatio, i / s),
                            r = 1 + o;
                        this.materialsLoaded && (this.gradientPass.uniforms.kaleidoScale.value = o > 1.3 ? 3 : r), this.settings.perspective = b.a.viewport.small ? 27 : 25, this.renderer.setPixelRatio(1), this.renderer.setSize(i, s), this.composer.setSize(i, s), this.renderer.autoClear = !1, this.camera.aspect = i / s, this.camera.fov = this.settings.perspective, this.camera.updateProjectionMatrix(), this.dimensions.width = i, this.dimensions.height = s, this.center = {
                            x: i / 2,
                            y: s / 2
                        }
                    }
                }, {
                    key: "onResize",
                    value: function() {
                        var e = this;
                        clearTimeout(this.reset), this.resize(), this.reset = setTimeout((function() {
                            e.resize()
                        }), 300)
                    }
                }]) && R(i.prototype, n), s && R(i, s), t
            }(y.a)
        }
    }
]);