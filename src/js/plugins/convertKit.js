


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