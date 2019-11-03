


setTimeout(function(){ 
    if (typeof CK == 'undefined'){
        (function() {
            var e;
            this._CK || (e = function() {
                function e() {}
                return e
            }(), this._CK = e, e.log = function(t) {
                return e.debug && console && console.log ? (Array.prototype.unshift.call(arguments, "CKJS: "), console.log.apply(console, arguments)) : void 0
            }, e.getURLParameter = function(e) {
                var t, n, o, i, r, c, a;
                for (r = window.location.search.substring(1), i = null, o = r.split("&"), t = 0, n = o.length; n > t; t++) a = o[t], c = a.split("="), c[0] === e && (i = c[1]);
                return i
            }, e.host_url = "https://api.convertkit.com/", e.debug = e.getURLParameter("ckdbg"), e.log("Host: " + e.host_url), e.log("prod"))
        }).call(this),
            function() {
                var e, t, n, o, i, r, c, a;
                this._CK.loaded || (_CK.log("Cookies"), a = null, e = function() {
                    function e() {}
                    return e.setCookie = function(e, t, i) {
                        return null == t && (t = null), null == i && (i = null), a || (a = n()), a[e] || (a[e] = {}), null != t && (a[e].shown = new Date), null != i && (a[e].c = i), o(a)
                    }, e.getCookie = function(e) {
                        return a || (a = n()), a[e] || null
                    }, e
                }(), this._CK.Cookies = e, r = "_ck_form", i = location.hostname.replace(/^www\./, ""), o = function(e, t) {
                    var n, o;
                    null == t && (t = r);
                    try {
                        return n = JSON.stringify(e), c.setItem(t, n, 31536e3, "/", i)
                    } catch (a) {
                        return o = a, _CK.log("Error saving cookie (" + o + ")")
                    }
                }, n = function(e) {
                    var n, a, s;
                    null == e && (e = r);
                    try {
                        return n = c.getItem(e), _CK.log(n), s = JSON.parse(n), s instanceof Object && !(s instanceof Array) ? t(s) : {}
                    } catch (l) {
                        return a = l, c.removeItem(r, "/", i), _CK.log("Error parsing cookie (" + a + ")"), _CK.debug && o(n, "_ck_form_error"), {}
                    }
                }, t = function(e) {
                    var t, n, o;
                    o = {
                        id: null,
                        date: new Date
                    }, t = 0;
                    for (n in e) t += 1, e[n].shown && (e[n].shown = new Date(e[n].shown)), e[n].shown < o.date && (o = {
                        id: n,
                        date: e[n].shown
                    });
                    return t > 15 && delete e[o.id], e
                }, c = {
                    getItem: function(e) {
                        return e ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null
                    },
                    setItem: function(e, t, n, o, i, r) {
                        var c;
                        if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
                        if (c = "", n) switch (n.constructor) {
                            case Number:
                                c = Infinity === n ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
                                break;
                            case String:
                                c = "; expires=" + n;
                                break;
                            case Date:
                                c = "; expires=" + n.toUTCString()
                        }
                        return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + c + (i ? "; domain=" + i : "") + (o ? "; path=" + o : "") + (r ? "; secure" : ""), !0
                    },
                    removeItem: function(e, t, n) {
                        return this.hasItem(e) ? (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (n ? "; domain=" + n : "") + (t ? "; path=" + t : ""), !0) : !1
                    },
                    hasItem: function(e) {
                        return e ? new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie) : !1
                    },
                    keys: function() {
                        var e, t, n;
                        for (e = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), n = e.length, t = 0; n > t;) e[t] = decodeURIComponent(e[t]), t++;
                        return e
                    }
                })
            }.call(this),
            function() {
                var e, t;
                this._CK.loaded || (_CK.log("Forms"), t = _CK, e = function() {
                    function e() {}
                    return e.init = function() {
                        return ckJQ("form#ck_subscribe_form").each(function() {
                            var e, n, o, i, r, c, a, s, l, d, u, m, f, k, p, _, h, g, v, w, C, y, b, J, Q, x, A, I, T;
                            x = null, A = function(e) {
                                return x >= e
                            }, I = function(e) {
                                return e >= x
                            }, o = function(e) {
                                var n, o, i;
                                n = document.getElementById("ck-g-recaptcha"), "undefined" != typeof grecaptcha && null !== grecaptcha && null != n && (i = n.getAttribute("data-widget-id"), o = grecaptcha.getResponse(i), 0 === o.length && (t.log("Executing reCAPTCHA"), n.setAttribute("data-landing-page-id", e), grecaptcha.execute(i)))
                            }, J = ckJQ(this), Q = J.parent().closest(".ck_form_container"), f = Q.data("ck-version"), n = function() {
                                return Q.appendTo(document.body)
                            }, f && (isNaN(f) || (x = f)), _ = J.find("input#landing_page_id").val();
                            try {
                                p = ckJQ.parseJSON(J.find("#ck_form_options").val()), p && p.embed_style ? (d = p.embed_style, u = p.embed_trigger, y = parseInt(p.scroll_percentage), a = parseInt(p.delay_seconds), l = p.display_position, s = p.display_devices, c = parseInt(p.days_no_show), c = p.days_no_show, r = p.converted_behavior, t.log(d + "|" + u + "|" + y + "|" + a + "|" + l + "|" + s + "|" + c + "|" + r)) : p && p.form_style && (r = p.converted_behavior)
                            } catch (E) {
                                m = E, t.log("Error parsing form_options (" + m + ")")
                            }
                            return null == _ ? (t.log("Error: Form not found"), !1) : (b = !0, /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) ? "desktop" === s && (b = !1) : "mobile" === s && (b = !1), k = t.Cookies.getCookie(_), k ? (g = k.shown, i = k.c, v = (new Date).getTime() - g.getTime(), w = 864e5, w * c > v && (b = !1)) : t.Cookies.setCookie(_, !1), h = "landing_pages/" + _, C = ckJQ("#ck_subscribe_button").text, e = t.host_url + h + "/viewed", t.log("POST " + e), t.log("Referrer: " + document.referrer), ckJQ.ajax({
                                url: e,
                                type: "post",
                                data: {
                                    ref: t.getURLParameter("ref")
                                },
                                headers: {
                                    "X-Alt-Referer": document.referrer
                                }
                            }), i && (T = J.closest(".ck_form"), "hide" === r ? (b = !1, T.fadeOut()) : "custom" === r && (T.addClass("ck_converted"), T.find(".ck_form_content").fadeOut("fast"), T.find(".ck_form_fields").fadeOut("fast", function() {
                                return T.find(".ck_converted_content").fadeIn()
                            }))), J.submit(function(n) {
                                var i, r, c, a, s, l, d, u;
                                return n.preventDefault(), o(_), d = J.find("#ck_subscribe_button"), a = d.text(), d.prop("disabled", !0).text("Working..."), u = J.parent().find("#ck_success_msg"), c = J.find("#ck_error_msg"), r = J.serializeArray(), J.find(".optIn").is(":checked") && r.push({
                                    name: "course_opted",
                                    value: !0
                                }), i = t.getURLParameter("ref"), i && r.push({
                                    name: "source",
                                    value: i
                                }), document.referrer && r.push({
                                    name: "referrer",
                                    value: document.referrer
                                }), x && r.push({
                                    name: "version",
                                    value: x
                                }), l = function() {
                                    return c.parent("div").css("display", "block"), c.css("opacity", "0").fadeTo(250, 1)
                                }, s = function(e) {
                                    return function(e) {
                                        return A(7) ? window.top.location.href = e : window.location.href = e
                                    }
                                }(this), e = t.host_url + h + "/subscribe", t.log("POST " + e), ckJQ.ajax({
                                    url: e,
                                    data: r,
                                    method: "POST",
                                    success: function(e) {
                                        return t.log("  Response: " + JSON.stringify(e)), t.Cookies.setCookie(_, !0, !0), "success" === e.message || "created" === e.status ? e.redirect_url ? s(e.redirect_url) : J.fadeOut("fast", function() {
                                            return u.css("opacity", "0").fadeTo(250, 1)
                                        }) : 302 === e.status && e.redirect_url ? s(e.redirect_url) : (t.Cookies.setCookie(_, !0, !1), d.prop("disabled", !1).text(a), l())
                                    },
                                    error: function(e, t, n) {
                                        return d.prop("disabled", !1).text(a), l()
                                    }
                                }), !1
                            }), "modal" === d ? (ckJQ(document).ready(function() {
                                return A(5) ? n() : void 0
                            }), function(e) {
                                var n, o, i, r, c, s;
                                o = b && "exit_intent" === u ? !1 : !0, r = !0, i = !1, setTimeout(function() {
                                    o || (i = !0)
                                }, 2e3), c = {
                                    top: 100,
                                    overlay: .5,
                                    closeButton: null
                                }, e.fn.extend({
                                    ck_modal: function(t) {
                                        var n, o;
                                        return A(6) && (n = e("<div class='ck_close_link'>&#x2715;</div>"), e(".ck_modal.ck_form_v6").append(n)), o = e("<div id='ck_overlay'></div>"), e("body").append(o), t = e.extend(c, t), this.each(function() {
                                            var n;
                                            n = t, e(this).click(function(t) {
                                                var n;
                                                n = e(this).attr("href"), s(n), t.preventDefault()
                                            })
                                        })
                                    }
                                }), b && ("scroll_percentage" === u ? e(window).scroll(function() {
                                    var t, n, o, i, c, a;
                                    t = e(window).scrollTop(), n = e(document).height(), a = e(window).height(), i = t / (n - a) * 100, c = y, i > c && r && (o = "#ck_modal", s(o), r = !1)
                                }) : "timing" === u && setTimeout(function() {
                                    var e;
                                    return e = "#ck_modal", s(e), r = !1
                                }, 1e3 * a)), n = function(t) {
                                    e("#ck_overlay").fadeOut(200), e(t).css({
                                        display: "none"
                                    }), A(6) && (e(".ck_modal .ck_close_link").fadeOut(200), e("body").removeClass("ck_modal_open"))
                                }, s = function(o) {
                                    var i, r;
                                    e(o).is(":visible") || (I(5) && e("#ck_overlay").click(function() {
                                        n(o)
                                    }), e(".ck_close_link").click(function() {
                                        n(o)
                                    }), A(6) && (e("body").addClass("ck_modal_open"), e(document).click(function(t) {
                                        e(t.target).closest(".ck_modal .ck_form").length || e(t.target).closest("[rel*='ck_modal']").length || !e(o).is(":visible") || n(o)
                                    })), i = e(o).outerHeight(), r = e(o).outerWidth(), e("#ck_overlay").css({
                                        display: "block",
                                        opacity: 0
                                    }), e("#ck_overlay").fadeTo(200, c.overlay), I(5) ? e(o).css({
                                        display: "block",
                                        opacity: 0,
                                        "z-index": 11e3,
                                        left: "50%",
                                        "margin-left": -(r / 2) + "px",
                                        top: c.top + "px"
                                    }) : (e(o).css({
                                        display: "block",
                                        opacity: 0,
                                        "z-index": 11e3
                                    }), e(".ck_close_link").fadeIn(200)), e(o).fadeTo(200, 1), t.Cookies.setCookie(_, !0))
                                }, e("body").mouseleave(function() {
                                    var e;
                                    i && !o && (e = "#ck_modal", s(e), i = !1)
                                })
                            }(window.ckJQ), window.ckJQ(function() {
                                window.ckJQ("a[rel*=ck_modal]").ck_modal()
                            })) : void("slideup" === d && ckJQ(document).ready(function() {
                                var e, o, i, r, c, s, l;
                                A(5) && n(), A(6) && (e = ckJQ("<div class='ck_close_link'>&#x2715;</div>"), ckJQ(".ck_slide_up.ck_form_v6").append(e)), l = J.closest(".ck_form_container.ck_slide_up"), i = function(e) {
                                    return 0 - (e.height() + 15)
                                }, s = function() {
                                    var e;
                                    J.closest(".ck_form_container").hasClass("visible") === !1 && (l.css({
                                        bottom: i(l)
                                    }), l.show().stop().animate({
                                        bottom: "0px"
                                    }, 500, function() {
                                        J.closest(".ck_form_container").addClass("visible")
                                    }), l.find(".ck_close_link").show(), t.Cookies.setCookie(_, !0), A(6) && (e = function() {
                                        return ckJQ(".ck_slide_up").each(function(e, t) {
                                            var n, o, i, r, c, a;
                                            return r = ckJQ(t).find(".ck_description").height(), c = ckJQ(window).height() / 2.3, a = ckJQ(window).width(), o = ckJQ(t).closest(".ck_form"), i = ckJQ(t).closest(".ck_slide_up"), n = 800 > a ? !0 : !1, r > c && !n ? (o.removeClass("ck_vertical"), o.removeClass("width400"), o.addClass("ck_horizontal"), i.addClass("ck_slide_up--lg")) : n ? i.addClass("ck_slide_up--lg") : (o.addClass("ck_vertical"), o.addClass("width400"), o.removeClass("ck_horizontal"), i.removeClass("ck_slide_up--lg"))
                                        })
                                    }, ckJQ(document).ready(e)))
                                }, r = function() {
                                    J.closest(".ck_form_container").hasClass("visible") === !0 && l.stop().animate({
                                        bottom: i(l)
                                    }, 500, function() {
                                        J.closest(".ck_form_container").removeClass("visible"), l.find(".ck_close_link").hide()
                                    })
                                }, c = y, l.find(".ck_close_link").click(function() {
                                    r()
                                }), b && ("scroll_percentage" === u ? (o = !0, ckJQ(window).scroll(function() {
                                    var e, t, n, i;
                                    e = ckJQ(window).scrollTop(), t = ckJQ(document).height(), i = ckJQ(window).height(), n = e / (t - i) * 100, n > c && o === !0 && (s(), o = !1)
                                })) : "timing" === u && setTimeout(function() {
                                    return s()
                                }, 1e3 * a))
                            })))
                        })
                    }, e
                }(), this._CK.Forms = e)
            }.call(this),
            function() {
                var e, t, n, o, i, r, c, a, s, l, d, u, m, f, k, p, _, h, g;
                if (!this._CK.loaded) {
                    for (this._CK.loaded = !0, _ = "CKJS4", a = "3.4.1", c = "https://ajax.googleapis.com/ajax/libs/jquery/" + a + "/jquery.min.js", k = "https://www.google.com/recaptcha/api.js?onload=recaptchaLoaded&render=explicit", r = null, window.ck_widget_init = !1, e = _CK, t = document.getElementsByTagName("script"), g = [], n = 0, s = t.length; s > n; n++) p = t[n], f = p.src, f && f.indexOf(_) > 0 && g.push(p);
                    h = g[g.length - 1], u = function(t, n) {
                        var o;
                        return e.log("Script: " + t), o = document.createElement("script"), o.setAttribute("type", "text/javascript"), o.setAttribute("src", t), o.readyState ? o.onreadystatechange = function() {
                            return "complete" === this.readyState || "loaded" === this.readyState ? n : void 0
                        } : o.onload = n, (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(o)
                    }, l = function(t) {
                        var n;
                        return e.log("   Load CSS: " + src), n = document.createElement("link"), n.setAttribute("type", "text/css"), n.setAttribute("rel", "stylesheet"), n.setAttribute("href", t), (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag)
                    }, i = function() {
                        return window.ck_widget_init || window.ckJQ || (window.ckJQ = jQuery.noConflict(!0), "undefined" != typeof $ && null !== $ || "undefined" != typeof jQuery && null !== jQuery || (window.$ = window.jQuery = ckJQ)), ckJQ(function() {
                            return !window.ck_widget_init && (m(), window.ck_widget_init = !0, window.ConvertKitForm) ? new window.ConvertKitForm : void 0
                        })
                    }, this.recaptchaCallback = function(e) {
                        var t, n, o;
                        return o = document.getElementById("ck-g-recaptcha"), n = o.getAttribute("data-landing-page-id"), t = ckJQ("input#landing_page_id[value='" + n + "']")[0].closest("form"), ckJQ("<input>").attr({
                            type: "hidden",
                            id: "g_invisible_recaptcha_token",
                            name: "g_invisible_recaptcha_token",
                            value: e
                        }).appendTo(t), ckJQ(t).trigger("submit")
                    }, this.recaptchaLoaded = function() {
                        var e, t;
                        return e = document.getElementById("ck-g-recaptcha"), t = grecaptcha.render(e, {
                            sitekey: "6LcibRkUAAAAAPja1nU7BgtXEF_GG3kfsaExbAlm",
                            callback: "recaptchaCallback",
                            size: "invisible"
                        }), e.setAttribute("data-widget-id", t)
                    }, d = function() {
                        return h = document.createElement("script"), h.setAttribute("type", "text/javascript"), h.setAttribute("src", k), h.setAttribute("async", ""), h.setAttribute("defer", ""), (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(h)
                    }, o = function() {
                        var e;
                        return e = document.createElement("div"), e.setAttribute("class", "ck-g-recaptcha"), e.setAttribute("id", "ck-g-recaptcha"), document.documentElement.appendChild(e), d()
                    }, null == window.jQuery || window.jQuery.fn.jquery !== a ? u(c, i) : i(), m = function() {
                        var t, n;
                        return e.log("Initializing"), e.Forms.init(), t = ckJQ("input#ck_form_recaptcha").filter(function(e, t) {
                            return "true" === ckJQ(t).val()
                        }), t.length > 0 && (e.log("Initializing reCAPTCHA"), o()), n = function(e) {
                            ckJQ(".ck_form").each(function() {
                                var t;
                                return t = ckJQ(this), e = parseInt(t.width()), 500 > e && e > 401 ? (t.removeClass("ck_horizontal"), t.addClass("ck_vertical"), t.addClass("width500"), t.removeClass("width400")) : 401 >= e ? (t.addClass("width400"), t.removeClass("width500"), t.removeClass("ck_horizontal"), t.addClass("ck_vertical")) : (t.removeClass("ck_vertical"), t.addClass("ck_horizontal"), t.removeClass("width500"), t.removeClass("width400"))
                            })
                        }, ckJQ(function() {
                            n(), ckJQ(window).resize(function() {
                                n()
                            })
                        }), !1
                    }
                }
            }.call(this);
    }else{
        console.log('ConvertKit already loaded.');
    }
}, 2000);
!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,l){function a(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,a){var h=l.data(a,i);if(!h)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var c=h[e];if(!c||"_"==e.charAt(0))return void s(r+" is not a valid method");var u=c.apply(h,n);o=void 0===o?u:o}),void 0!==o?o:t}function h(t,e){t.each(function(t,n){var o=l.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),l.data(n,i,o))})}l=l||e||t.jQuery,l&&(r.prototype.option||(r.prototype.option=function(t){l.isPlainObject(t)&&(this.options=l.extend(!0,this.options,t))}),l.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return a(this,t,e)}return h(this,t),this},n(l))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return n.indexOf(e)==-1&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return n!=-1&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var r=i.toDashed(n),s="data-"+r,l=document.querySelectorAll("["+s+"]"),a=document.querySelectorAll(".js-"+r),h=i.makeArray(l).concat(i.makeArray(a)),c=s+"-options",u=t.jQuery;h.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(c);try{i=r&&JSON.parse(r)}catch(l){return void(o&&o.error("Error parsing "+s+" on "+t.className+": "+l))}var a=new e(t,i);u&&u.data(t,n,a)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("infinite-scroll/js/core",["ev-emitter/ev-emitter","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("fizzy-ui-utils")):t.InfiniteScroll=e(t,t.EvEmitter,t.fizzyUIUtils)}(window,function(t,e,i){function n(t,e){var s=i.getQueryElement(t);if(!s)return void console.error("Bad element for InfiniteScroll: "+(s||t));if(t=s,t.infiniteScrollGUID){var l=r[t.infiniteScrollGUID];return l.option(e),l}this.element=t,this.options=i.extend({},n.defaults),this.option(e),o&&(this.$element=o(this.element)),this.create()}var o=t.jQuery,r={};n.defaults={},n.create={},n.destroy={};var s=n.prototype;i.extend(s,e.prototype);var l=0;s.create=function(){var t=this.guid=++l;this.element.infiniteScrollGUID=t,r[t]=this,this.pageIndex=1,this.loadCount=0,this.updateGetPath();var e=this.getPath&&this.getPath();if(!e)return void console.error("Disabling InfiniteScroll");this.updateGetAbsolutePath(),this.log("initialized",[this.element.className]),this.callOnInit();for(var i in n.create)n.create[i].call(this)},s.option=function(t){i.extend(this.options,t)},s.callOnInit=function(){var t=this.options.onInit;t&&t.call(this,this)},s.dispatchEvent=function(t,e,i){this.log(t,i);var n=e?[e].concat(i):i;if(this.emitEvent(t,n),o&&this.$element){t+=".infiniteScroll";var r=t;if(e){var s=o.Event(e);s.type=t,r=s}this.$element.trigger(r,i)}};var a={initialized:function(t){return"on "+t},request:function(t){return"URL: "+t},load:function(t,e){return(t.title||"")+". URL: "+e},error:function(t,e){return t+". URL: "+e},append:function(t,e,i){return i.length+" items. URL: "+e},last:function(t,e){return"URL: "+e},history:function(t,e){return"URL: "+e},pageIndex:function(t,e){return"current page determined to be: "+t+" from "+e}};s.log=function(t,e){if(this.options.debug){var i="[InfiniteScroll] "+t,n=a[t];n&&(i+=". "+n.apply(this,e)),console.log(i)}},s.updateMeasurements=function(){this.windowHeight=t.innerHeight;var e=this.element.getBoundingClientRect();this.top=e.top+t.pageYOffset},s.updateScroller=function(){var e=this.options.elementScroll;if(!e)return void(this.scroller=t);if(this.scroller=e===!0?this.element:i.getQueryElement(e),!this.scroller)throw"Unable to find elementScroll: "+e},s.updateGetPath=function(){var t=this.options.path;if(!t)return void console.error("InfiniteScroll path option required. Set as: "+t);var e=typeof t;if("function"==e)return void(this.getPath=t);var i="string"==e&&t.match("{{#}}");return i?void this.updateGetPathTemplate(t):void this.updateGetPathSelector(t)},s.updateGetPathTemplate=function(t){this.getPath=function(){var e=this.pageIndex+1;return t.replace("{{#}}",e)}.bind(this);var e=t.replace(/(\\\?|\?)/,"\\?").replace("{{#}}","(\\d\\d?\\d?)"),i=new RegExp(e),n=location.href.match(i);n&&(this.pageIndex=parseInt(n[1],10),this.log("pageIndex",[this.pageIndex,"template string"]))};var h=[/^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/,/^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/,/(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/];return s.updateGetPathSelector=function(t){var e=document.querySelector(t);if(!e)return void console.error("Bad InfiniteScroll path option. Next link not found: "+t);for(var i,n,o=e.getAttribute("href"),r=0;o&&r<h.length;r++){n=h[r];var s=o.match(n);if(s){i=s.slice(1);break}}return i?(this.isPathSelector=!0,this.getPath=function(){var t=this.pageIndex+1;return i[0]+t+i[2]}.bind(this),this.pageIndex=parseInt(i[1],10)-1,void this.log("pageIndex",[this.pageIndex,"next link"])):void console.error("InfiniteScroll unable to parse next link href: "+o)},s.updateGetAbsolutePath=function(){var t=this.getPath(),e=t.match(/^http/)||t.match(/^\//);if(e)return void(this.getAbsolutePath=this.getPath);var i=location.pathname,n=t.match(/^\?/);if(n)return void(this.getAbsolutePath=function(){return i+this.getPath()});var o=i.substring(0,i.lastIndexOf("/"));this.getAbsolutePath=function(){return o+"/"+this.getPath()}},n.create.hideNav=function(){var t=i.getQueryElement(this.options.hideNav);t&&(t.style.display="none",this.nav=t)},n.destroy.hideNav=function(){this.nav&&(this.nav.style.display="")},s.destroy=function(){this.allOff();for(var t in n.destroy)n.destroy[t].call(this);delete this.element.infiniteScrollGUID,delete r[this.guid],o&&this.$element&&o.removeData(this.element,"infiniteScroll")},n.throttle=function(t,e){e=e||200;var i,n;return function(){var o=+new Date,r=arguments,s=function(){i=o,t.apply(this,r)}.bind(this);i&&o<i+e?(clearTimeout(n),n=setTimeout(s,e)):s()}},n.data=function(t){t=i.getQueryElement(t);var e=t&&t.infiniteScrollGUID;return e&&r[e]},n.setJQuery=function(t){o=t},i.htmlInit(n,"infinite-scroll"),s._init=function(){},o&&o.bridget&&o.bridget("infiniteScroll",n),n}),function(t,e){"function"==typeof define&&define.amd?define("infinite-scroll/js/page-load",["./core"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./core")):e(t,t.InfiniteScroll)}(window,function(t,e){function i(t){for(var e=document.createDocumentFragment(),i=0;t&&i<t.length;i++)e.appendChild(t[i]);return e}function n(t){for(var e=t.querySelectorAll("script"),i=0;i<e.length;i++){var n=e[i],r=document.createElement("script");o(n,r),r.innerHTML=n.innerHTML,n.parentNode.replaceChild(r,n)}}function o(t,e){for(var i=t.attributes,n=0;n<i.length;n++){var o=i[n];e.setAttribute(o.name,o.value)}}function r(t,e,i,n,o){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType=e||"",r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.onload=function(){if(200==r.status)i(r.response);else if(204==r.status)o(r.response);else{var t=new Error(r.statusText);n(t)}},r.onerror=function(){var e=new Error("Network error requesting "+t);n(e)},r.send()}var s=e.prototype;return e.defaults.loadOnScroll=!0,e.defaults.checkLastPage=!0,e.defaults.responseType="document",e.create.pageLoad=function(){this.canLoad=!0,this.on("scrollThreshold",this.onScrollThresholdLoad),this.on("load",this.checkLastPage),this.options.outlayer&&this.on("append",this.onAppendOutlayer)},s.onScrollThresholdLoad=function(){this.options.loadOnScroll&&this.loadNextPage()},s.loadNextPage=function(){if(!this.isLoading&&this.canLoad){var t=this.getAbsolutePath();this.isLoading=!0;var e=function(e){this.onPageLoad(e,t)}.bind(this),i=function(e){this.onPageError(e,t)}.bind(this),n=function(e){this.lastPageReached(e,t)}.bind(this);r(t,this.options.responseType,e,i,n),this.dispatchEvent("request",null,[t])}},s.onPageLoad=function(t,e){return this.options.append||(this.isLoading=!1),this.pageIndex++,this.loadCount++,this.dispatchEvent("load",null,[t,e]),this.appendNextPage(t,e),t},s.appendNextPage=function(t,e){var n=this.options.append,o="document"==this.options.responseType;if(o&&n){var r=t.querySelectorAll(n),s=i(r),l=function(){this.appendItems(r,s),this.isLoading=!1,this.dispatchEvent("append",null,[t,e,r])}.bind(this);this.options.outlayer?this.appendOutlayerItems(s,l):l()}},s.appendItems=function(t,e){t&&t.length&&(e=e||i(t),n(e),this.element.appendChild(e))},s.appendOutlayerItems=function(i,n){var o=e.imagesLoaded||t.imagesLoaded;return o?void o(i,n):(console.error("[InfiniteScroll] imagesLoaded required for outlayer option"),void(this.isLoading=!1))},s.onAppendOutlayer=function(t,e,i){this.options.outlayer.appended(i)},s.checkLastPage=function(t,e){var i=this.options.checkLastPage;if(i){var n=this.options.path;if("function"==typeof n){var o=this.getPath();if(!o)return void this.lastPageReached(t,e)}var r;if("string"==typeof i?r=i:this.isPathSelector&&(r=n),r&&t.querySelector){var s=t.querySelector(r);s||this.lastPageReached(t,e)}}},s.lastPageReached=function(t,e){this.canLoad=!1,this.dispatchEvent("last",null,[t,e])},s.onPageError=function(t,e){return this.isLoading=!1,this.canLoad=!1,this.dispatchEvent("error",null,[t,e]),t},e.create.prefill=function(){if(this.options.prefill){var t=this.options.append;if(!t)return void console.error("append option required for prefill. Set as :"+t);this.updateMeasurements(),this.updateScroller(),this.isPrefilling=!0,this.on("append",this.prefill),this.once("error",this.stopPrefill),this.once("last",this.stopPrefill),this.prefill()}},s.prefill=function(){var t=this.getPrefillDistance();this.isPrefilling=t>=0,this.isPrefilling?(this.log("prefill"),this.loadNextPage()):this.stopPrefill()},s.getPrefillDistance=function(){return this.options.elementScroll?this.scroller.clientHeight-this.scroller.scrollHeight:this.windowHeight-this.element.clientHeight},s.stopPrefill=function(){this.log("stopPrefill"),this.off("append",this.prefill)},e}),function(t,e){"function"==typeof define&&define.amd?define("infinite-scroll/js/scroll-watch",["./core","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./core"),require("fizzy-ui-utils")):e(t,t.InfiniteScroll,t.fizzyUIUtils)}(window,function(t,e,i){var n=e.prototype;return e.defaults.scrollThreshold=400,e.create.scrollWatch=function(){this.pageScrollHandler=this.onPageScroll.bind(this),this.resizeHandler=this.onResize.bind(this);var t=this.options.scrollThreshold,e=t||0===t;e&&this.enableScrollWatch()},e.destroy.scrollWatch=function(){this.disableScrollWatch()},n.enableScrollWatch=function(){this.isScrollWatching||(this.isScrollWatching=!0,this.updateMeasurements(),this.updateScroller(),this.on("last",this.disableScrollWatch),this.bindScrollWatchEvents(!0))},n.disableScrollWatch=function(){this.isScrollWatching&&(this.bindScrollWatchEvents(!1),delete this.isScrollWatching)},n.bindScrollWatchEvents=function(e){var i=e?"addEventListener":"removeEventListener";this.scroller[i]("scroll",this.pageScrollHandler),t[i]("resize",this.resizeHandler)},n.onPageScroll=e.throttle(function(){var t=this.getBottomDistance();t<=this.options.scrollThreshold&&this.dispatchEvent("scrollThreshold")}),n.getBottomDistance=function(){return this.options.elementScroll?this.getElementBottomDistance():this.getWindowBottomDistance()},n.getWindowBottomDistance=function(){var e=this.top+this.element.clientHeight,i=t.pageYOffset+this.windowHeight;return e-i},n.getElementBottomDistance=function(){var t=this.scroller.scrollHeight,e=this.scroller.scrollTop+this.scroller.clientHeight;return t-e},n.onResize=function(){this.updateMeasurements()},i.debounceMethod(e,"onResize",150),e}),function(t,e){"function"==typeof define&&define.amd?define("infinite-scroll/js/history",["./core","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./core"),require("fizzy-ui-utils")):e(t,t.InfiniteScroll,t.fizzyUIUtils)}(window,function(t,e,i){var n=e.prototype;e.defaults.history="replace";var o=document.createElement("a");return e.create.history=function(){if(this.options.history){o.href=this.getAbsolutePath();var t=o.origin||o.protocol+"//"+o.host,e=t==location.origin;return e?void(this.options.append?this.createHistoryAppend():this.createHistoryPageLoad()):void console.error("[InfiniteScroll] cannot set history with different origin: "+o.origin+" on "+location.origin+" . History behavior disabled.")}},n.createHistoryAppend=function(){this.updateMeasurements(),this.updateScroller(),this.scrollPages=[{top:0,path:location.href,title:document.title}],this.scrollPageIndex=0,this.scrollHistoryHandler=this.onScrollHistory.bind(this),this.unloadHandler=this.onUnload.bind(this),this.scroller.addEventListener("scroll",this.scrollHistoryHandler),this.on("append",this.onAppendHistory),this.bindHistoryAppendEvents(!0)},n.bindHistoryAppendEvents=function(e){var i=e?"addEventListener":"removeEventListener";this.scroller[i]("scroll",this.scrollHistoryHandler),t[i]("unload",this.unloadHandler)},n.createHistoryPageLoad=function(){this.on("load",this.onPageLoadHistory)},e.destroy.history=n.destroyHistory=function(){var t=this.options.history&&this.options.append;t&&this.bindHistoryAppendEvents(!1)},n.onAppendHistory=function(t,e,i){if(i&&i.length){var n=i[0],r=this.getElementScrollY(n);o.href=e,this.scrollPages.push({top:r,path:o.href,title:t.title})}},n.getElementScrollY=function(t){return this.options.elementScroll?this.getElementElementScrollY(t):this.getElementWindowScrollY(t)},n.getElementWindowScrollY=function(e){var i=e.getBoundingClientRect();return i.top+t.pageYOffset},n.getElementElementScrollY=function(t){return t.offsetTop-this.top},n.onScrollHistory=function(){for(var t,e,i=this.getScrollViewY(),n=0;n<this.scrollPages.length;n++){var o=this.scrollPages[n];if(o.top>=i)break;t=n,e=o}t!=this.scrollPageIndex&&(this.scrollPageIndex=t,this.setHistory(e.title,e.path))},i.debounceMethod(e,"onScrollHistory",150),n.getScrollViewY=function(){return this.options.elementScroll?this.scroller.scrollTop+this.scroller.clientHeight/2:t.pageYOffset+this.windowHeight/2},n.setHistory=function(t,e){var i=this.options.history,n=i&&history[i+"State"];n&&(history[i+"State"](null,t,e),this.options.historyTitle&&(document.title=t),this.dispatchEvent("history",null,[t,e]))},n.onUnload=function(){var e=this.scrollPageIndex;if(0!==e){var i=this.scrollPages[e],n=t.pageYOffset-i.top+this.top;this.destroyHistory(),scrollTo(0,n)}},n.onPageLoadHistory=function(t,e){this.setHistory(t.title,e)},e}),function(t,e){"function"==typeof define&&define.amd?define("infinite-scroll/js/button",["./core","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./core"),require("fizzy-ui-utils")):e(t,t.InfiniteScroll,t.fizzyUIUtils)}(window,function(t,e,i){function n(t,e){this.element=t,this.infScroll=e,this.clickHandler=this.onClick.bind(this),this.element.addEventListener("click",this.clickHandler),e.on("request",this.disable.bind(this)),e.on("load",this.enable.bind(this)),e.on("error",this.hide.bind(this)),e.on("last",this.hide.bind(this))}return e.create.button=function(){var t=i.getQueryElement(this.options.button);if(t)return void(this.button=new n(t,this))},e.destroy.button=function(){this.button&&this.button.destroy()},n.prototype.onClick=function(t){t.preventDefault(),this.infScroll.loadNextPage()},n.prototype.enable=function(){this.element.removeAttribute("disabled")},n.prototype.disable=function(){this.element.disabled="disabled"},n.prototype.hide=function(){this.element.style.display="none"},n.prototype.destroy=function(){this.element.removeEventListener("click",this.clickHandler)},e.Button=n,e}),function(t,e){"function"==typeof define&&define.amd?define("infinite-scroll/js/status",["./core","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./core"),require("fizzy-ui-utils")):e(t,t.InfiniteScroll,t.fizzyUIUtils)}(window,function(t,e,i){function n(t){r(t,"none")}function o(t){r(t,"block")}function r(t,e){t&&(t.style.display=e)}var s=e.prototype;return e.create.status=function(){var t=i.getQueryElement(this.options.status);t&&(this.statusElement=t,this.statusEventElements={request:t.querySelector(".infinite-scroll-request"),error:t.querySelector(".infinite-scroll-error"),last:t.querySelector(".infinite-scroll-last")},this.on("request",this.showRequestStatus),this.on("error",this.showErrorStatus),this.on("last",this.showLastStatus),this.bindHideStatus("on"))},s.bindHideStatus=function(t){var e=this.options.append?"append":"load";this[t](e,this.hideAllStatus)},s.showRequestStatus=function(){this.showStatus("request")},s.showErrorStatus=function(){this.showStatus("error")},s.showLastStatus=function(){this.showStatus("last"),this.bindHideStatus("off")},s.showStatus=function(t){o(this.statusElement),this.hideStatusEventElements();var e=this.statusEventElements[t];o(e)},s.hideAllStatus=function(){n(this.statusElement),this.hideStatusEventElements()},s.hideStatusEventElements=function(){for(var t in this.statusEventElements){var e=this.statusEventElements[t];n(e)}},e}),function(t,e){"function"==typeof define&&define.amd?define(["infinite-scroll/js/core","infinite-scroll/js/page-load","infinite-scroll/js/scroll-watch","infinite-scroll/js/history","infinite-scroll/js/button","infinite-scroll/js/status"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./core"),require("./page-load"),require("./scroll-watch"),require("./history"),require("./button"),require("./status")))}(window,function(t){return t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}("undefined"!=typeof window?window:this,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){if(Array.isArray(t))return t;var e="object"==typeof t&&"number"==typeof t.length;return e?h.call(t):[t]}function o(t,e,r){if(!(this instanceof o))return new o(t,e,r);var s=t;return"string"==typeof t&&(s=document.querySelectorAll(t)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),l&&(this.jqDeferred=new l.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||t))}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var l=t.jQuery,a=t.console,h=Array.prototype.slice;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&c[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var c={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(l=e,l.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(l(this))})},o.makeJQueryPlugin(),o});
/*! instant.page v2.0.0 - (C) 2019 Alexandre Dieulot - https://instant.page/license */

let urlToPreload
let mouseoverTimer
let lastTouchTimestamp

const prefetcher = document.createElement('link')
const isSupported = prefetcher.relList && prefetcher.relList.supports && prefetcher.relList.supports('prefetch')
const isDataSaverEnabled = navigator.connection && navigator.connection.saveData
const allowQueryString = 'instantAllowQueryString' in document.body.dataset
const allowExternalLinks = 'instantAllowExternalLinks' in document.body.dataset
const useWhitelist = 'instantWhitelist' in document.body.dataset

let delayOnHover = 65
let useMousedown = false
let useMousedownOnly = false
if ('instantIntensity' in document.body.dataset) {
  if (document.body.dataset.instantIntensity.substr(0, 'mousedown'.length) == 'mousedown') {
    useMousedown = true
    if (document.body.dataset.instantIntensity == 'mousedown-only') {
      useMousedownOnly = true
    }
  }
  else {
    const milliseconds = parseInt(document.body.dataset.instantIntensity)
    if (milliseconds != NaN) {
      delayOnHover = milliseconds
    }
  }
}

if (isSupported && !isDataSaverEnabled) {
  prefetcher.rel = 'prefetch'
  document.head.appendChild(prefetcher)

  const eventListenersOptions = {
    capture: true,
    passive: true,
  }

  if (!useMousedownOnly) {
    document.addEventListener('touchstart', touchstartListener, eventListenersOptions)
  }

  if (!useMousedown) {
    document.addEventListener('mouseover', mouseoverListener, eventListenersOptions)
  }
  else {
    document.addEventListener('mousedown', mousedownListener, eventListenersOptions)
  }
}

function touchstartListener(event) {
  /* Chrome on Android calls mouseover before touchcancel so `lastTouchTimestamp`
   * must be assigned on touchstart to be measured on mouseover. */
  lastTouchTimestamp = performance.now()

  const linkElement = event.target.closest('a')

  if (!isPreloadable(linkElement)) {
    return
  }

  linkElement.addEventListener('touchcancel', touchendAndTouchcancelListener, {passive: true})
  linkElement.addEventListener('touchend', touchendAndTouchcancelListener, {passive: true})

  urlToPreload = linkElement.href
  preload(linkElement.href)
}

function touchendAndTouchcancelListener() {
  urlToPreload = undefined
  stopPreloading()
}

function mouseoverListener(event) {
  if (performance.now() - lastTouchTimestamp < 1100) {
    return
  }

  const linkElement = event.target.closest('a')

  if (!isPreloadable(linkElement)) {
    return
  }

  linkElement.addEventListener('mouseout', mouseoutListener, {passive: true})

  urlToPreload = linkElement.href

  mouseoverTimer = setTimeout(() => {
    preload(linkElement.href)
    mouseoverTimer = undefined
  }, delayOnHover)
}

function mousedownListener(event) {
  const linkElement = event.target.closest('a')

  if (!isPreloadable(linkElement)) {
    return
  }

  linkElement.addEventListener('mouseout', mouseoutListener, {passive: true})

  urlToPreload = linkElement.href

  preload(linkElement.href)
}

function mouseoutListener(event) {
  if (event.relatedTarget && event.target.closest('a') == event.relatedTarget.closest('a')) {
    return
  }

  if (mouseoverTimer) {
    clearTimeout(mouseoverTimer)
    mouseoverTimer = undefined
  }

  urlToPreload = undefined

  stopPreloading()
}

function isPreloadable(linkElement) {
  if (!linkElement || !linkElement.href) {
    return
  }

  if (urlToPreload == linkElement.href) {
    return
  }

  if (useWhitelist && !('instant' in linkElement.dataset)) {
    return
  }

  if (!allowExternalLinks && linkElement.origin != location.origin && !('instant' in linkElement.dataset)) {
    return
  }

  if (!['http:', 'https:'].includes(linkElement.protocol)) {
    return
  }

  if (linkElement.protocol == 'http:' && location.protocol == 'https:') {
    return
  }

  if (!allowQueryString && linkElement.search && !('instant' in linkElement.dataset)) {
    return
  }

  if (linkElement.hash && linkElement.pathname + linkElement.search == location.pathname + location.search) {
    return
  }

  if ('noInstant' in linkElement.dataset) {
    return
  }

  return true
}

function preload(url) {
  prefetcher.href = url
}

function stopPreloading() {
  prefetcher.removeAttribute('href')
}
var html = document.documentElement,
	menuToggle = document.getElementById('menuToggle');
if(menuToggle){
	menuToggle.addEventListener('click', function(e) {
		e.preventDefault();
	
		html.dataset.menuState == 'inactive' ? html.setAttribute('data-menu-state', 'active') : html.setAttribute('data-menu-state', 'inactive');
	
	
	});
}

!function(a,b,c){var d,e,f;d="PIN_"+~~((new Date).getTime()/864e5),a[d]?a[d]+=1:(a[d]=1,a.setTimeout(function(){e=b.getElementsByTagName("SCRIPT")[0],f=b.createElement("SCRIPT"),f.type="text/javascript",f.async=!0,f.src=c.mainUrl+"?"+Math.random(),e.parentNode.insertBefore(f,e)},10))}(window,document,{mainUrl:"//assets.pinterest.com/js/pinit_main.js"});
function isElementInViewport(el) {
	var rect = el.getBoundingClientRect();

	return rect.bottom > 0 &&
		rect.right > 0 &&
		rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
		rect.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */ ;
}

if (window.requestAnimationFrame) {
	var requestAnimation = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;

	var animatedElements = document.querySelectorAll('[data-scroll-animate]');


	var animateElements = function() {
		for (var i = 0; i < animatedElements.length; i++) {
			var animatedElement = animatedElements[i];
			var speed = animatedElement.dataset.speed ? animatedElement.dataset.speed : 0.5;
			var style = animatedElement.dataset.scrollAnimate;

			if (isElementInViewport(animatedElement)) {

				var scroll = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

				switch (style) {
					case 'opacity':
						var opacity = Math.min(1, Math.max(0, ((speed * scroll) / 150)));

						animatedElement.style.opacity = opacity;
						break;
					case 'rotation':
						animatedElement.style.transform = "rotate(" + (speed * scroll) / 40 + "deg)";
						break;
					default:
						animatedElement.style.transform = "translate3d(0," + 0.1 * scroll * speed + "px, 0)";
				}

			}


		}
	};

	var animate = function() {
		requestAnimation(animateElements);
	};

	if (animatedElements.length) {
		addEventListener("scroll", animate, !1, { passive: true });
	}
}
'use strict';

var elem = document.querySelector('.post-list');

if (elem) {
  var infScroll = new InfiniteScroll(elem, {
    // options
    path: '.pagination-next',
    append: '.post-intro',
    history: false,
    scrollThreshold: 800
  });
}

if (document.querySelectorAll('img')) {
  var images = document.querySelectorAll('img');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var image = _step.value;
      image.removeAttribute("width");
      image.removeAttribute("height");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}