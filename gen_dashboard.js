// Input 0
'use strict';var j = void 0, k = true, l = null, m = false, n, r = this;
function aa() {
}
function ba(a) {
  a.d = function() {
    return a.Tc || (a.Tc = new a)
  }
}
function ca(a) {
  var b = typeof a;
  if(b == "object") {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }else {
        if(a instanceof Object) {
          return b
        }
      }
      var c = Object.prototype.toString.call(a);
      if(c == "[object Window]") {
        return"object"
      }
      if(c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(b == "function" && typeof a.call == "undefined") {
      return"object"
    }
  }
  return b
}
function da(a) {
  return a != l
}
function ea(a) {
  var b = ca(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function s(a) {
  return typeof a == "string"
}
function fa(a) {
  return ca(a) == "function"
}
function ga(a) {
  a = ca(a);
  return a == "object" || a == "array" || a == "function"
}
var ha = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ia = 0;
function ja(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ka(a, b, c) {
  if(!a) {
    throw Error();
  }
  if(arguments.length > 2) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }else {
    return function() {
      return a.apply(b, arguments)
    }
  }
}
function t(a, b, c) {
  t = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ja : ka;
  return t.apply(l, arguments)
}
function la(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var u = Date.now || function() {
  return+new Date
};
function v(a, b) {
  var c = a.split("."), d = r;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var e;c.length && (e = c.shift());) {
    !c.length && b !== j ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
  }
}
function w(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ob = b.prototype;
  a.prototype = new c
}
;
// Input 1
var ma;
function x() {
  this.D = 0;
  this.ac = []
}
ba(x);
function na(a, b) {
  a.ac.push(b)
}
x.prototype.update = function(a) {
  if(this.D != a) {
    this.D = a, _gaq.push(["_trackEvent", "Map", "Zoom level change", a]), y(this.ac, function(a) {
      a()
    })
  }
};
function oa() {
  var a = x.d();
  return a.D > 15 ? 0 : a.D == 15 ? 1 : 9 - Math.ceil(a.D / 2)
}
function pa() {
  var a = x.d();
  return a.D >= 18 ? 1 : a.D >= 16 ? 0.8 : a.D >= 14 ? 0.6 : 0.4
}
;
// Input 2
function qa() {
  this.X = {};
  this.kb = this.Kd = "";
  this.o = 0
}
;
// Input 3
function ra(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = String(a)
  }
}
w(ra, Error);
ra.prototype.name = "CustomError";
// Input 4
function sa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function z(a, b) {
  var c = String(a), d = c.indexOf(".");
  if(d == -1) {
    d = c.length
  }
  d = Math.max(0, b - d);
  return Array(d + 1).join("0") + c
}
function ta(a, b) {
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(d.length, e.length), g = 0;c == 0 && g < f;g++) {
    var h = d[g] || "", i = e[g] || "", p = /(\d*)(\D*)/g, q = /(\d*)(\D*)/g;
    do {
      var o = p.exec(h) || ["", "", ""], E = q.exec(i) || ["", "", ""];
      if(o[0].length == 0 && E[0].length == 0) {
        break
      }
      c = ua(o[1].length == 0 ? 0 : parseInt(o[1], 10), E[1].length == 0 ? 0 : parseInt(E[1], 10)) || ua(o[2].length == 0, E[2].length == 0) || ua(o[2], E[2])
    }while(c == 0)
  }
  return c
}
function ua(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
var va = {};
function wa(a) {
  return va[a] || (va[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;
// Input 5
function xa(a, b) {
  b.unshift(a);
  ra.call(this, sa.apply(l, b));
  b.shift();
  this.Md = a
}
w(xa, ra);
xa.prototype.name = "AssertionError";
function ya(a, b) {
  throw new xa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;
// Input 6
// Input 7
var za, Aa, Ba, Ca, Da;
function Ea() {
  return r.navigator ? r.navigator.userAgent : l
}
function Fa() {
  return r.navigator
}
Ca = Ba = Aa = za = m;
var Ga;
if(Ga = Ea()) {
  var Ha = Fa();
  za = Ga.indexOf("Opera") == 0;
  Aa = !za && Ga.indexOf("MSIE") != -1;
  Ba = !za && Ga.indexOf("WebKit") != -1;
  Ca = !za && !Ba && Ha.product == "Gecko"
}
var Ia = za, A = Aa, Ja = Ca, Ka = Ba, La = Fa();
Da = (La && La.platform || "").indexOf("Mac") != -1;
var Ma = !!Fa() && (Fa().appVersion || "").indexOf("X11") != -1, Na;
a: {
  var Oa = "", Pa;
  if(Ia && r.opera) {
    var Qa = r.opera.version, Oa = typeof Qa == "function" ? Qa() : Qa
  }else {
    if(Ja ? Pa = /rv\:([^\);]+)(\)|;)/ : A ? Pa = /MSIE\s+([^\);]+)(\)|;)/ : Ka && (Pa = /WebKit\/(\S+)/), Pa) {
      var Ra = Pa.exec(Ea()), Oa = Ra ? Ra[1] : ""
    }
  }
  if(A) {
    var Sa, Ta = r.document;
    Sa = Ta ? Ta.documentMode : j;
    if(Sa > parseFloat(Oa)) {
      Na = String(Sa);
      break a
    }
  }
  Na = Oa
}
var Ua = {};
function Va(a) {
  return Ua[a] || (Ua[a] = ta(Na, a) >= 0)
}
var Wa = {};
function Xa() {
  return Wa[9] || (Wa[9] = A && document.documentMode && document.documentMode >= 9)
}
;
// Input 8
function B(a, b, c) {
  for(var d in a) {
    b.call(c, a[d], d, a)
  }
}
function Ya(a, b, c) {
  var d = {}, e;
  for(e in a) {
    b.call(c, a[e], e, a) && (d[e] = a[e])
  }
  return d
}
function Za(a) {
  var b = 0, c;
  for(c in a) {
    b++
  }
  return b
}
function $a(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function ab(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
function bb(a) {
  for(var b in a) {
    return m
  }
  return k
}
function cb(a, b) {
  var c = MAP_PARAMS;
  return a in c ? c[a] : b
}
;
// Input 9
!A || Xa();
var db = !A || Xa();
A && Va("8");
// Input 10
var C = Array.prototype, eb = C.indexOf ? function(a, b, c) {
  return C.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == l ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(s(a)) {
    return!s(b) || b.length != 1 ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, y = C.forEach ? function(a, b, c) {
  C.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = s(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
}, fb = C.filter ? function(a, b, c) {
  return C.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], f = 0, g = s(a) ? a.split("") : a, h = 0;h < d;h++) {
    if(h in g) {
      var i = g[h];
      b.call(c, i, h, a) && (e[f++] = i)
    }
  }
  return e
}, D = C.map ? function(a, b, c) {
  return C.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), f = s(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && (e[g] = b.call(c, f[g], g, a))
  }
  return e
};
function gb(a, b, c) {
  if(a.reduce) {
    return a.reduce(b, c)
  }
  var d = c;
  y(a, function(c, f) {
    d = b.call(j, d, c, f, a)
  });
  return d
}
function hb(a, b) {
  var c = eb(a, b);
  c >= 0 && C.splice.call(a, c, 1)
}
function ib(a) {
  return C.concat.apply(C, arguments)
}
function jb(a) {
  if(ca(a) == "array") {
    return ib(a)
  }else {
    for(var b = [], c = 0, d = a.length;c < d;c++) {
      b[c] = a[c]
    }
    return b
  }
}
function kb(a, b, c, d) {
  C.splice.apply(a, lb(arguments, 1))
}
function lb(a, b, c) {
  return arguments.length <= 2 ? C.slice.call(a, b) : C.slice.call(a, b, c)
}
function mb(a, b, c) {
  if(!ea(a) || !ea(b) || a.length != b.length) {
    return m
  }
  for(var d = a.length, c = c || nb, e = 0;e < d;e++) {
    if(!c(a[e], b[e])) {
      return m
    }
  }
  return k
}
function nb(a, b) {
  return a === b
}
;
// Input 11
// Input 12
// Input 13
// Input 14
// Input 15
function ob() {
}
ob.prototype.yb = m;
ob.prototype.O = function() {
  if(!this.yb) {
    this.yb = k, this.P()
  }
};
ob.prototype.P = function() {
  this.Mc && pb.apply(l, this.Mc)
};
function pb(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ea(d) ? pb.apply(l, d) : d && typeof d.O == "function" && d.O()
  }
}
;
// Input 16
function F(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
w(F, ob);
F.prototype.P = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
F.prototype.Da = m;
F.prototype.ld = k;
F.prototype.stopPropagation = function() {
  this.Da = k
};
// Input 17
function qb(a) {
  qb[" "](a);
  return a
}
qb[" "] = aa;
// Input 18
function rb(a, b) {
  a && this.t(a, b)
}
w(rb, F);
n = rb.prototype;
n.target = l;
n.relatedTarget = l;
n.offsetX = 0;
n.offsetY = 0;
n.clientX = 0;
n.clientY = 0;
n.screenX = 0;
n.screenY = 0;
n.button = 0;
n.keyCode = 0;
n.charCode = 0;
n.ctrlKey = m;
n.altKey = m;
n.shiftKey = m;
n.metaKey = m;
n.dd = m;
n.da = l;
n.t = function(a, b) {
  var c = this.type = a.type;
  F.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Ja) {
      var e;
      a: {
        try {
          qb(d.nodeName);
          e = k;
          break a
        }catch(f) {
        }
        e = m
      }
      e || (d = l)
    }
  }else {
    if(c == "mouseover") {
      d = a.fromElement
    }else {
      if(c == "mouseout") {
        d = a.toElement
      }
    }
  }
  this.relatedTarget = d;
  this.offsetX = a.offsetX !== j ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== j ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== j ? a.clientX : a.pageX;
  this.clientY = a.clientY !== j ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.dd = Da ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.da = a;
  delete this.ld;
  delete this.Da
};
n.stopPropagation = function() {
  rb.ob.stopPropagation.call(this);
  this.da.stopPropagation ? this.da.stopPropagation() : this.da.cancelBubble = k
};
n.P = function() {
  rb.ob.P.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.da = l
};
// Input 19
function sb() {
}
var tb = 0;
n = sb.prototype;
n.key = 0;
n.V = m;
n.ub = m;
n.t = function(a, b, c, d, e, f) {
  if(fa(a)) {
    this.Gb = k
  }else {
    if(a && a.handleEvent && fa(a.handleEvent)) {
      this.Gb = m
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.va = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Db = f;
  this.ub = m;
  this.key = ++tb;
  this.V = m
};
n.handleEvent = function(a) {
  return this.Gb ? this.va.call(this.Db || this.src, a) : this.va.handleEvent.call(this.va, a)
};
// Input 20
var ub, vb = (ub = "ScriptEngine" in r && r.ScriptEngine() == "JScript") ? r.ScriptEngineMajorVersion() + "." + r.ScriptEngineMinorVersion() + "." + r.ScriptEngineBuildVersion() : "0";
// Input 21
function G(a, b) {
  this.Lb = b;
  this.J = [];
  if(a > this.Lb) {
    throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for(var c = 0;c < a;c++) {
    this.J.push(this.v ? this.v() : {})
  }
}
w(G, ob);
G.prototype.v = l;
G.prototype.xb = l;
function wb(a) {
  return a.J.length ? a.J.pop() : a.v ? a.v() : {}
}
function xb(a, b) {
  a.J.length < a.Lb ? a.J.push(b) : yb(a, b)
}
function yb(a, b) {
  if(a.xb) {
    a.xb(b)
  }else {
    if(ga(b)) {
      if(fa(b.O)) {
        b.O()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
G.prototype.P = function() {
  G.ob.P.call(this);
  for(var a = this.J;a.length;) {
    yb(this, a.pop())
  }
  delete this.J
};
// Input 22
var zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb;
(function() {
  function a() {
    return{C:0, U:0}
  }
  function b() {
    return[]
  }
  function c() {
    var a = db ? function(b) {
      return g.call(a.src, a.key, b)
    } : function(b) {
      b = g.call(a.src, a.key, b);
      if(!b) {
        return b
      }
    };
    return a
  }
  function d() {
    return new sb
  }
  function e() {
    return new rb
  }
  var f = ub && !(ta(vb, "5.7") >= 0), g;
  Eb = function(a) {
    g = a
  };
  if(f) {
    zb = function() {
      return wb(h)
    };
    Ab = function(a) {
      xb(h, a)
    };
    Bb = function() {
      return wb(i)
    };
    Cb = function(a) {
      xb(i, a)
    };
    Db = function() {
      return wb(p)
    };
    Fb = function() {
      xb(p, c())
    };
    Gb = function() {
      return wb(q)
    };
    Hb = function(a) {
      xb(q, a)
    };
    Ib = function() {
      return wb(o)
    };
    Jb = function(a) {
      xb(o, a)
    };
    var h = new G(0, 600);
    h.v = a;
    var i = new G(0, 600);
    i.v = b;
    var p = new G(0, 600);
    p.v = c;
    var q = new G(0, 600);
    q.v = d;
    var o = new G(0, 600);
    o.v = e
  }else {
    zb = a, Ab = aa, Bb = b, Cb = aa, Db = c, Fb = aa, Gb = d, Hb = aa, Ib = e, Jb = aa
  }
})();
// Input 23
var Kb = {}, H = {}, Lb = {}, Mb = {};
function I(a, b, c, d, e) {
  if(b) {
    if(ca(b) == "array") {
      for(var f = 0;f < b.length;f++) {
        I(a, b[f], c, d, e)
      }
      return l
    }else {
      var d = !!d, g = H;
      b in g || (g[b] = zb());
      g = g[b];
      d in g || (g[d] = zb(), g.C++);
      var g = g[d], h = a[ha] || (a[ha] = ++ia), i;
      g.U++;
      if(g[h]) {
        i = g[h];
        for(f = 0;f < i.length;f++) {
          if(g = i[f], g.va == c && g.Db == e) {
            if(g.V) {
              break
            }
            return i[f].key
          }
        }
      }else {
        i = g[h] = Bb(), g.C++
      }
      f = Db();
      f.src = a;
      g = Gb();
      g.t(c, f, a, b, d, e);
      c = g.key;
      f.key = c;
      i.push(g);
      Kb[c] = g;
      Lb[h] || (Lb[h] = Bb());
      Lb[h].push(g);
      a.addEventListener ? (a == r || !a.Kc) && a.addEventListener(b, f, d) : a.attachEvent(b in Mb ? Mb[b] : Mb[b] = "on" + b, f);
      return c
    }
  }else {
    throw Error("Invalid event type");
  }
}
function Nb(a) {
  if(Kb[a]) {
    var b = Kb[a];
    if(!b.V) {
      var c = b.src, d = b.type, e = b.proxy, f = b.capture;
      c.removeEventListener ? (c == r || !c.Kc) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Mb ? Mb[d] : Mb[d] = "on" + d, e);
      c = c[ha] || (c[ha] = ++ia);
      e = H[d][f][c];
      if(Lb[c]) {
        var g = Lb[c];
        hb(g, b);
        g.length == 0 && delete Lb[c]
      }
      b.V = k;
      e.Mb = k;
      Ob(d, f, c, e);
      delete Kb[a]
    }
  }
}
function Ob(a, b, c, d) {
  if(!d.wa && d.Mb) {
    for(var e = 0, f = 0;e < d.length;e++) {
      if(d[e].V) {
        var g = d[e].proxy;
        g.src = l;
        Fb(g);
        Hb(d[e])
      }else {
        e != f && (d[f] = d[e]), f++
      }
    }
    d.length = f;
    d.Mb = m;
    f == 0 && (Cb(d), delete H[a][b][c], H[a][b].C--, H[a][b].C == 0 && (Ab(H[a][b]), delete H[a][b], H[a].C--), H[a].C == 0 && (Ab(H[a]), delete H[a]))
  }
}
function Pb(a, b, c, d, e) {
  var f = 1, b = b[ha] || (b[ha] = ++ia);
  if(a[b]) {
    a.U--;
    a = a[b];
    a.wa ? a.wa++ : a.wa = 1;
    try {
      for(var g = a.length, h = 0;h < g;h++) {
        var i = a[h];
        i && !i.V && (f &= Qb(i, e) !== m)
      }
    }finally {
      a.wa--, Ob(c, d, b, a)
    }
  }
  return Boolean(f)
}
function Qb(a, b) {
  var c = a.handleEvent(b);
  a.ub && Nb(a.key);
  return c
}
Eb(function(a, b) {
  if(!Kb[a]) {
    return k
  }
  var c = Kb[a], d = c.type, e = H;
  if(!(d in e)) {
    return k
  }
  var e = e[d], f, g;
  if(!db) {
    var h;
    if(!(h = b)) {
      a: {
        h = "window.event".split(".");
        for(var i = r;f = h.shift();) {
          if(da(i[f])) {
            i = i[f]
          }else {
            h = l;
            break a
          }
        }
        h = i
      }
    }
    f = h;
    h = k in e;
    i = m in e;
    if(h) {
      if(f.keyCode < 0 || f.returnValue != j) {
        return k
      }
      a: {
        var p = m;
        if(f.keyCode == 0) {
          try {
            f.keyCode = -1;
            break a
          }catch(q) {
            p = k
          }
        }
        if(p || f.returnValue == j) {
          f.returnValue = k
        }
      }
    }
    p = Ib();
    p.t(f, this);
    f = k;
    try {
      if(h) {
        for(var o = Bb(), E = p.currentTarget;E;E = E.parentNode) {
          o.push(E)
        }
        g = e[k];
        g.U = g.C;
        for(var N = o.length - 1;!p.Da && N >= 0 && g.U;N--) {
          p.currentTarget = o[N], f &= Pb(g, o[N], d, k, p)
        }
        if(i) {
          g = e[m];
          g.U = g.C;
          for(N = 0;!p.Da && N < o.length && g.U;N++) {
            p.currentTarget = o[N], f &= Pb(g, o[N], d, m, p)
          }
        }
      }else {
        f = Qb(c, p)
      }
    }finally {
      if(o) {
        o.length = 0, Cb(o)
      }
      p.O();
      Jb(p)
    }
    return f
  }
  d = new rb(b, this);
  try {
    f = Qb(c, d)
  }finally {
    d.O()
  }
  return f
});
// Input 24
function J(a, b) {
  this.q = ub ? [] : "";
  a != l && this.append.apply(this, arguments)
}
ub ? (J.prototype.Ma = 0, J.prototype.append = function(a, b, c) {
  b == l ? this.q[this.Ma++] = a : (this.q.push.apply(this.q, arguments), this.Ma = this.q.length);
  return this
}) : J.prototype.append = function(a, b, c) {
  this.q += a;
  if(b != l) {
    for(var d = 1;d < arguments.length;d++) {
      this.q += arguments[d]
    }
  }
  return this
};
J.prototype.clear = function() {
  ub ? this.Ma = this.q.length = 0 : this.q = ""
};
J.prototype.toString = function() {
  if(ub) {
    var a = this.q.join("");
    this.clear();
    a && this.append(a);
    return a
  }else {
    return this.q
  }
};
// Input 25
var Rb;
function Sb(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function K(a, b) {
  for(var c = Sb(a), d = lb(arguments, 1), e = c, f = 0, g = 0;g < d.length;g++) {
    eb(e, d[g]) >= 0 || (e.push(d[g]), f++)
  }
  a.className = c.join(" ")
}
function L(a, b) {
  for(var c = Sb(a), d = lb(arguments, 1), e = c, f = 0, g = 0;g < e.length;g++) {
    eb(d, e[g]) >= 0 && (kb(e, g--, 1), f++)
  }
  a.className = c.join(" ")
}
function Tb(a, b, c) {
  for(var d = Sb(a), e = m, f = 0;f < d.length;f++) {
    d[f] == b && (kb(d, f--, 1), e = k)
  }
  if(e) {
    d.push(c), a.className = d.join(" ")
  }
}
function Ub(a, b) {
  var c = !(eb(Sb(a), b) >= 0);
  c ? K(a, b) : L(a, b);
  return c
}
;
// Input 26
// Input 27
// Input 28
!A || Xa();
!Ja && !A || A && Xa() || Ja && Va("1.9.1");
A && Va("9");
// Input 29
// Input 30
function Vb(a, b, c) {
  function d(c) {
    c && b.appendChild(s(c) ? a.createTextNode(c) : c)
  }
  for(var e = 1;e < c.length;e++) {
    var f = c[e];
    ea(f) && !(ga(f) && f.nodeType > 0) ? y(Wb(f) ? jb(f) : f, d) : d(f)
  }
}
function Xb(a, b) {
  Vb(a.nodeType == 9 ? a : a.ownerDocument || a.document, a, arguments)
}
function Yb(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : l
}
function Zb(a) {
  var b, c = a.parentNode;
  if(c && c.nodeType != 11) {
    if(a.removeNode) {
      a.removeNode(m)
    }else {
      for(;b = a.firstChild;) {
        c.insertBefore(b, a)
      }
      Yb(a)
    }
  }
}
function Wb(a) {
  if(a && typeof a.length == "number") {
    if(ga(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(fa(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return m
}
function $b(a) {
  this.zb = a || r.document || document
}
n = $b.prototype;
n.createElement = function(a) {
  return this.zb.createElement(a)
};
n.createTextNode = function(a) {
  return this.zb.createTextNode(a)
};
n.appendChild = function(a, b) {
  a.appendChild(b)
};
n.append = Xb;
n.removeNode = Yb;
n.contains = function(a, b) {
  if(a.contains && b.nodeType == 1) {
    return a == b || a.contains(b)
  }
  if(typeof a.compareDocumentPosition != "undefined") {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
};
// Input 31
function ac(a, b) {
  var c = (Rb || (Rb = new $b)).createElement("DIV");
  c.innerHTML = a(b || bc, j, j);
  if(c.childNodes.length == 1) {
    var d = c.firstChild;
    if(d.nodeType == 1) {
      return d
    }
  }
  return c
}
var bc = {};
// Input 32
// Input 33
// Input 34
A && Va(8);
// Input 35
// Input 36
// Input 37
function M(a, b, c) {
  a.innerHTML = b(c || bc, j, j)
}
function cc(a, b) {
  function c() {
  }
  c.prototype = a;
  var d = new c, e;
  for(e in b) {
    d[e] = b[e]
  }
  return d
}
function O(a) {
  return typeof a === "object" && a && a.Ic === 0 ? a.content : String(a).replace(dc, ec)
}
function P(a) {
  typeof a === "object" && a && a.Ic === 0 ? (a = String(a.content).replace(fc, ""), a = String(a).replace(gc, ec)) : a = String(a).replace(dc, ec);
  return a
}
function Q(a) {
  if(a == l) {
    return" null "
  }
  switch(typeof a) {
    case "boolean":
    ;
    case "number":
      return" " + a + " ";
    default:
      return"'" + String(String(a)).replace(hc, ic) + "'"
  }
}
var jc = {"\x00":"&#0;", '"':"&quot;", "&":"&amp;", "'":"&#39;", "<":"&lt;", ">":"&gt;", "\t":"&#9;", "\n":"&#10;", "\u000b":"&#11;", "\u000c":"&#12;", "\r":"&#13;", " ":"&#32;", "-":"&#45;", "/":"&#47;", "=":"&#61;", "`":"&#96;", "\u0085":"&#133;", "\u00a0":"&#160;", "\u2028":"&#8232;", "\u2029":"&#8233;"};
function ec(a) {
  return jc[a]
}
var kc = {"\x00":"\\x00", "\u0008":"\\x08", "\t":"\\t", "\n":"\\n", "\u000b":"\\x0b", "\u000c":"\\f", "\r":"\\r", '"':"\\x22", "&":"\\x26", "'":"\\x27", "/":"\\/", "<":"\\x3c", "=":"\\x3d", ">":"\\x3e", "\\":"\\\\", "\u0085":"\\x85", "\u2028":"\\u2028", "\u2029":"\\u2029", $:"\\x24", "(":"\\x28", ")":"\\x29", "*":"\\x2a", "+":"\\x2b", ",":"\\x2c", "-":"\\x2d", ".":"\\x2e", ":":"\\x3a", "?":"\\x3f", "[":"\\x5b", "]":"\\x5d", "^":"\\x5e", "{":"\\x7b", "|":"\\x7c", "}":"\\x7d"};
function ic(a) {
  return kc[a]
}
var lc = {"\x00":"%00", "\u0001":"%01", "\u0002":"%02", "\u0003":"%03", "\u0004":"%04", "\u0005":"%05", "\u0006":"%06", "\u0007":"%07", "\u0008":"%08", "\t":"%09", "\n":"%0A", "\u000b":"%0B", "\u000c":"%0C", "\r":"%0D", "\u000e":"%0E", "\u000f":"%0F", "\u0010":"%10", "\u0011":"%11", "\u0012":"%12", "\u0013":"%13", "\u0014":"%14", "\u0015":"%15", "\u0016":"%16", "\u0017":"%17", "\u0018":"%18", "\u0019":"%19", "\u001a":"%1A", "\u001b":"%1B", "\u001c":"%1C", "\u001d":"%1D", "\u001e":"%1E", "\u001f":"%1F",
" ":"%20", '"':"%22", "'":"%27", "(":"%28", ")":"%29", "<":"%3C", ">":"%3E", "\\":"%5C", "{":"%7B", "}":"%7D", "\u007f":"%7F", "\u0085":"%C2%85", "\u00a0":"%C2%A0", "\u2028":"%E2%80%A8", "\u2029":"%E2%80%A9", "\uff01":"%EF%BC%81", "\uff03":"%EF%BC%83", "\uff04":"%EF%BC%84", "\uff06":"%EF%BC%86", "\uff07":"%EF%BC%87", "\uff08":"%EF%BC%88", "\uff09":"%EF%BC%89", "\uff0a":"%EF%BC%8A", "\uff0b":"%EF%BC%8B", "\uff0c":"%EF%BC%8C", "\uff0f":"%EF%BC%8F", "\uff1a":"%EF%BC%9A", "\uff1b":"%EF%BC%9B", "\uff1d":"%EF%BC%9D",
"\uff1f":"%EF%BC%9F", "\uff20":"%EF%BC%A0", "\uff3b":"%EF%BC%BB", "\uff3d":"%EF%BC%BD"};
function mc(a) {
  return lc[a]
}
var dc = /[\x00\x22\x26\x27\x3c\x3e]/g, gc = /[\x00\x22\x27\x3c\x3e]/g, hc = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g, nc = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g, oc = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i, pc = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;
function qc(a) {
  a = String(a);
  return!oc.test(a) ? (ya("Bad value `%s` for |filterCssValue", [a]), "zSoyz") : a
}
function rc(a) {
  a = String(a);
  return!pc.test(a) ? (ya("Bad value `%s` for |filterNormalizeUri", [a]), "zSoyz") : a.replace(nc, mc)
}
var fc = /<(?:!|\/?[a-zA-Z])(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
// Input 38
function sc(a, b) {
  var c = b || new J;
  c.append('<div id="player_ap_icon"><div class="SPRITE_ap_icon_', P(a.g.b.oa), "_", P(a.g.tb), '"><div id="player_level">', O(a.g.e), '</div></div></div><div class="', P(a.g.b.css), '"><div class="player_nickname">', O(a.g.L), '</div><div id="xm_slot"><div id="xm_indicator" style="width: ', a.g.qb == l ? "" : qc(a.g.qb), 'px;"></div></div><div id="xm">', O(a.g.La), ' <span id="xm_reward"></span><span class="color_orange"> / ', O(a.g.Xa), ' XM</span></div><div id="ap" class="visible_on_show_box"><div><span class="number">',
  O(a.g.N), "</span> AP  Level ", O(a.g.e), "</div>", a.g.ka > 0 ? '<div><span class="color_orange">[ </span><span class="number">' + O(a.g.ab) + '</span> AP<span class="color_orange"> required for level ' + O(a.g.ka) + " ]</span></div>" : "", "</div></div>");
  return b ? "" : c.toString()
}
function tc(a, b) {
  var c = b || new J;
  c.append('<div id="redeem_results"><span id="redeem_error"></span><span id="redeemed_rewards" class="color_orange"></span></div><form onSubmit="redeem(); return false;" name="redeem_reward"><input type="submit" value="Input passcode" onclick="showpi(true);" onmouseover="showpi(true);" /><input type="text" id="passcode" class="form_input" onmouseout="showpi(false);" /></form>');
  return b ? "" : c.toString()
}
;
// Input 39
function uc(a, b, c, d) {
  this.Pa = a;
  this.color = b;
  this.css = c;
  this.oa = d;
  this.Qc = d + "_symbol_black";
  this.Xc = "mod_icon_" + d + "_L1"
}
var vc = new uc("Neutral", "#cccc00", "NEUTRAL", "neutral"), wc = new uc("Enlightened", "#00cc00", "ALIENS", "enl"), xc = new uc("Resistance", "#0000cc", "RESISTANCE", "hum");
function yc(a) {
  return a == "ALIENS" ? wc : a == "RESISTANCE" ? xc : vc
}
;
// Input 40
function R(a, b, c) {
  this.a = a;
  this.b = yc(b);
  this.o = c
}
R.prototype.toString = function() {
  return"guid:" + this.a + ",team:" + this.b.Pa
};
function zc(a, b) {
  var c = fb(a, da), d = fb(b, da);
  return c.length != d.length ? m : mb(c, d, function(a, b) {
    y(ab(a), function(c) {
      if(a[c] != b[c]) {
        return m
      }
    });
    return k
  })
}
;
// Input 41
function Ac(a, b, c, d, e) {
  R.call(this, a, b, u());
  this.L = c;
  this.tb = this.qb = this.Xa = this.ab = this.ka = this.e = this.La = this.N = 0;
  Bc(this, d, e)
}
w(Ac, R);
function Bc(a, b, c) {
  var d = Cc;
  a.N = b;
  a.La = c;
  a.e = Dc(a.N);
  a.ka = a.e == d.length ? 0 : a.e + 1;
  a.ab = a.ka > 0 ? d[a.ka - 1] : 0;
  a.Xa = 2E3 + Dc(a.N) * 1E3;
  a.qb = Math.ceil(330 * a.La / a.Xa);
  a.tb = a.ab == 0 ? 0 : Math.floor(8 * ((a.N - d[a.e - 1]) / (d[a.e] - d[a.e - 1])))
}
var Cc = [0, 1E4, 3E4, 7E4, 15E4, 3E5, 6E5, 12E5];
Ac.prototype.fa = function() {
  return!!this.L
};
Ac.prototype.merge = function(a) {
  if(this.a == a.a) {
    this.b = a.b, this.L = a.L, Bc(this, a.N, a.La)
  }
};
function Dc(a) {
  for(var b = Cc, c = b.length;c > 0;c--) {
    if(a >= b[c - 1]) {
      return c
    }
  }
  return 1
}
function Ec(a) {
  return new Ac(a.guid, a.team, a.nickname, +a.ap, +a.energy)
}
;
// Input 42
function Fc(a, b) {
  R.call(this, a, "", u());
  this.type = b
}
w(Fc, R);
var Gc = {yd:"Resonator", zd:"Xmp Burster", Ed:"Media", Gd:"Portal Key", Hd:"Portal Shield"};
function Hc() {
  this.K = {}
}
function Ic(a) {
  var b = "";
  B(Gc, function(a) {
    this.K[a] && this.K[a].length && (b && (b += ", "), b += a + "(" + (this.K[a] ? this.K[a].length : 0) + ")")
  }, a);
  return b
}
function Jc(a) {
  var b = new Hc;
  y(a, function(a) {
    a && (b.K[a.type] || (b.K[a.type] = []), b.K[a.type].push(a))
  });
  return b
}
;
// Input 43
function Kc() {
}
Kc.prototype.Nc = function(a) {
  var b = a.result;
  document.getElementById("redeem_error").innerHTML = b ? "" : a.error;
  var a = b ? b.apAward : "", c = b ? b.xmAward : "", b = b ? b.inventoryAward : [], d = D(b || [], function(a) {
    a: {
      var b = a[2], c;
      "resourceWithLevels" in b ? c = b.resourceWithLevels.resourceType : "resource" in b && (c = b.resource.resourceType);
      if(c && (b = Gc[c])) {
        a = new Fc(a[0], b);
        break a
      }
      a = l
    }
    return a
  }), d = Jc(d), e = document.getElementById("redeemed_rewards");
  a || c || b.length > 0 ? (e.innerHTML = "Passcode accepted." + (a ? " " + a + " AP rewarded." : "") + (c ? " " + c + " XM rewarded." : "") + (b.length > 0 ? " " + Ic(d) + " unlocked." : ""), _gaq.push(["_trackEvent", "Action", "Passcode accepted"])) : e.innerHTML = ""
};
Kc.prototype.nb = function(a) {
  var b = this.fb;
  a ? K(b, "show_box") : L(b, "show_box")
};
Kc.prototype.rd = function() {
  Ub(this.fb, "show_box")
};
// Input 44
function Lc() {
  this.mb = {};
  this.Ld = []
}
function Mc(a, b) {
  a.mb[b] || (a.mb[b] = []);
  return a.mb[b]
}
Lc.prototype.Fc = function(a, b) {
  var c = Mc(this, a);
  c.length >= (b || 1) && c.shift().abort()
};
Lc.prototype.jd = function(a, b) {
  hb(Mc(this, a), b)
};
function S(a, b, c, d, e) {
  c.method = b;
  var f = t(a.Fc, a, b, e), g = t(a.cd, a, b, d), h = t(a.jd, a);
  _gaq.push(["_trackEvent", "RPC", b]);
  c = $.ajax({type:"POST", url:"/rpc/" + b, dataType:"json", contentType:"application/json; charset=utf-8", data:JSON.stringify(c), Jd:function() {
    f()
  }, success:function(a) {
    g(a)
  }, error:function() {
    _gaq.push(["_trackEvent", "RPC_error", b])
  }, complete:function(a) {
    h(b, a)
  }});
  Mc(a, b).push(c)
}
Lc.prototype.cd = function(a, b, c) {
  a = Mc(this, a).length > 1;
  b(c, a)
};
function Nc(a, b, c) {
  var d = [];
  y(c, function(a, b) {
    for(var c = b % 4;d.length <= c;) {
      d.push({minLevelOfDetail:-1, boundsParamsList:[]})
    }
    d[c].boundsParamsList.push({id:a.kb, minLatE6:Math.round(a.X.bounds.sw.lat() * 1E6), minLngE6:Math.round(a.X.bounds.sw.lng() * 1E6), maxLatE6:Math.round(a.X.bounds.ne.lat() * 1E6), maxLngE6:Math.round(a.X.bounds.ne.lng() * 1E6), timestampMs:a.A, qk:a.kb})
  });
  var e = d.length;
  y(d, function(a) {
    S(this, "dashboard.getThinnedEntitiesV2", a, b, e)
  }, a)
}
Lc.prototype.Qa = function(a, b, c, d, e, f) {
  if(!d) {
    d = new qa;
    d.o = u();
    var g = {};
    g.sw = new google.maps.LatLng(-90, -180);
    g.ne = new google.maps.LatLng(90, 180);
    d.bounds = g
  }
  e = e || -1;
  f = f || -1;
  b = {desiredNumItems:b, minLatE6:Math.round(d.bounds.sw.lat() * 1E6), minLngE6:Math.round(d.bounds.sw.lng() * 1E6), maxLatE6:Math.round(d.bounds.ne.lat() * 1E6), maxLngE6:Math.round(d.bounds.ne.lng() * 1E6), minTimestampMs:e, maxTimestampMs:f};
  c && (b.factionOnly = k);
  e > -1 && (b.ascendingTimestampOrder = k);
  S(this, "dashboard.getPaginatedPlextsV2", b, a, 12)
};
function Oc(a, b, c) {
  S(a, "dashboard.getPlayersByGuids", {guids:b}, c)
}
function Pc(a, b) {
  S(a, "dashboard.getAvailableInvitesForPlayer", {}, b)
}
;
// Input 45
function Qc(a, b, c) {
  this.a = a;
  this.lat = b;
  this.lng = c
}
function Rc(a) {
  return!!a.lat && !!a.lng
}
;
// Input 46
function Sc(a, b, c) {
  R.call(this, a, b, c);
  this.m = this.origin = l
}
w(Sc, R);
Sc.prototype.merge = function(a) {
  if(this.a != a.a) {
    return l
  }
  if(this.a == a.a && this.origin.lat == a.origin.lat && this.origin.lng == a.origin.lng && this.m.lat == a.m.lat && this.m.lng == a.m.lng) {
    return this
  }
  if(!Rc(this.origin) && Rc(a.origin)) {
    this.origin = a.origin
  }else {
    if(!Rc(this.m) && Rc(a.m)) {
      this.m = a.m
    }
  }
  this.o = Math.max(this.o, a.o);
  return this
};
// Input 47
function Tc() {
  this.S = {}
}
ba(Tc);
function Uc(a, b) {
  a.S[b] || (a.S[b] = new Ac(b, l, "", 0, 0));
  return a.S[b]
}
;
// Input 48
function Vc(a, b, c) {
  this.e = a;
  this.cb = Uc(Tc.d(), b);
  this.ua = Math.ceil(16 * c / Wc[a])
}
var Wc = [0, 1E3, 1500, 2E3, 2500, 3E3, 4E3, 5E3, 6E3];
function Xc(a) {
  a = fb(a, function(a) {
    return!!a
  });
  return D(a, function(a) {
    return new Vc(a.level, a.ownerGuid, a.energyTotal)
  })
}
;
// Input 49
function Yc(a, b, c) {
  R.call(this, a, b, c);
  this.Ib = this.Hb = 0;
  this.e = 1;
  this.title = "";
  this.ga = l;
  this.sa = 0;
  this.Y = l;
  this.Q = [];
  this.u = [];
  this.isCaptured = m
}
w(Yc, R);
var Zc = {VERY_COMMON:"Very common", COMMON:"Common", LESS_COMMON:"Less common", RARE:"Rare", VERY_RARE:"Very rare", EXTREMELY_RARE:"Extremely rare"}, $c = [16, 24, 32, 40, 48, 56, 64];
function ad(a) {
  return new google.maps.LatLng(a.Hb, a.Ib)
}
function bd(a, b) {
  var c = u(), d = Tc.d(), c = new Yc(a, b.controllingTeam.team, c);
  c.Hb = b.locationE6.latE6 / 1E6;
  c.Ib = b.locationE6.lngE6 / 1E6;
  c.u = Xc(b.resonatorArray.resonators);
  c.e = cd(c.u);
  var e = fb(b.portalV2.linkedModArray, da);
  c.Q = D(e, function(a) {
    return{Od:Zc[a.rarity], name:a.displayName, Sa:Uc(d, a.installingUser)}
  });
  if(b.captured) {
    c.isCaptured = k, c.sa = (new dd("MM/dd/yyyy")).format(new Date(parseInt(b.captured.capturedTime, 10))), c.Y = Uc(d, b.captured.capturingPlayerId)
  }
  if("descriptiveText" in b.portalV2) {
    if("TITLE" in b.portalV2.descriptiveText) {
      c.title = b.portalV2.descriptiveText.TITLE
    }
  }else {
    c.title = ""
  }
  c.ga = b.imageByUrl && b.imageByUrl.imageUrl ? b.imageByUrl.imageUrl.replace("medium", "small") : "http://commondatastorage.googleapis.com/ingress/img/default-portal-image.png";
  return c
}
function cd(a) {
  a = gb(a, function(a, b) {
    return a + b.e
  }, 0);
  if(a == 0) {
    return 1
  }else {
    for(var b = 0;b < 7;b++) {
      if(a < $c[b]) {
        return b + 1
      }
    }
    return 8
  }
}
Yc.prototype.Wa = function(a) {
  return this.a == a.a && this.b == a.b && this.e == a.e && this.title == a.title && this.ga == a.ga && this.sa == a.sa && zc(this.Q, a.Q) && zc(this.u, a.u) && this.isCaptured == a.isCaptured
};
Yc.prototype.fa = function() {
  return ed(this).length == 0
};
function ed(a) {
  if(a.Y) {
    var b = {};
    b[a.Y.a] = a.Y;
    y(a.u, function(a) {
      b[a.cb.a] = a.cb
    });
    y(a.Q, function(a) {
      b[a.Sa.a] = a.Sa
    });
    return fb($a(b), function(a) {
      return!a.fa()
    })
  }
  return[]
}
;
// Input 50
function fd(a, b, c, d) {
  R.call(this, a, b, c);
  this.T = d
}
w(fd, R);
fd.prototype.Wa = function(a) {
  if(this.a != a.a) {
    return m
  }
  for(var b = 0;b < this.T.length;b++) {
    if(!(this.T[b].lat == a.T[b].lat && this.T[b].lng == a.T[b].lng)) {
      return m
    }
  }
  return k
};
function gd(a, b) {
  var c = u(), d = D($a(b.capturedRegion), function(a) {
    return new Qc(a.guid, a.location.latE6 / 1E6, a.location.lngE6 / 1E6)
  });
  return new fd(a, b.controllingTeam.team, c, d)
}
;
// Input 51
function T() {
  this.i = {};
  this.ma = {};
  this.aa = {};
  this.lb = {};
  this.H = new Lc;
  this.Ea = [];
  this.Z = {}
}
ba(T);
function hd() {
  return T.d().H
}
function id(a, b, c) {
  for(var d = {}, e = 0;e < a.Ea.length;e++) {
    var f = a.Ea[e];
    if(a.i[f] && a.i[f][b] && a.i[f][b].entities) {
      for(var g = a.i[f][b].entities, h = 0;h < g.length;h++) {
        var i = g[h];
        c[i] && !d[i] && !a.Z[i] ? d[i] = c[i] : a.Z[i] && hb(a.i[f][b].entities, i)
      }
    }
  }
  return d
}
function jd(a, b) {
  a.i[b] || (a.i[b] = {});
  a.i[b].lastUpdated = u()
}
function kd(a, b, c, d) {
  a.i[b] || (a.i[b] = {});
  if(!a.i[b][c]) {
    a.i[b][c] = {}, a.i[b][c].entities = []
  }
  a.i[b][c].entities.push(d)
}
function ld(a, b, c, d) {
  var e = bd(c, d), f = a.ma[c];
  if(!f || !f.Wa(e)) {
    a.ma[c] = e, y(d.portalV2.linkedEdges, function(a) {
      var e = u(), f = new Qc(c, d.locationE6.latE6 / 1E6, d.locationE6.lngE6 / 1E6), p = new Qc(a.otherPortalGuid), e = new Sc(a.edgeGuid, d.controllingTeam.team, e), a = a.isOrigin;
      e.origin = a ? f : p;
      e.m = a ? p : f;
      this.aa[e.a] = this.aa[e.a] ? this.aa[e.a].merge(e) : e;
      kd(this, b, "edge", e.a)
    }, a)
  }
}
T.prototype.W = function(a, b, c, d) {
  if(!("result" in c) || !("map" in c.result)) {
    a(k)
  }else {
    var e = {};
    B(c.result.map, function(a, c) {
      "gameEntities" in a && (jd(this, c), y(a.gameEntities, function(a) {
        var b = a[0], a = a[2], d;
        if("portalV2" in a) {
          ld(this, c, b, a), d = "portal"
        }else {
          if("capturedRegion" in a) {
            a = gd(b, a);
            d = this.lb[b];
            if(!d || !d.Wa(a)) {
              this.lb[b] = a
            }
            d = "region"
          }else {
            if("edge" in a) {
              d = u(), d = new Sc(b, a.controllingTeam.team, d), a = a.edge, d.origin = new Qc(a.originPortalGuid, a.originPortalLocation.latE6 / 1E6, a.originPortalLocation.lngE6 / 1E6), d.m = new Qc(a.destinationPortalGuid, a.destinationPortalLocation.latE6 / 1E6, a.destinationPortalLocation.lngE6 / 1E6), this.aa[b] = d, d = "edge"
            }
          }
        }
        d && kd(this, c, d, b)
      }, this));
      "deletedGameEntityGuids" in a && y(a.deletedGameEntityGuids, function(a) {
        this.Z[a] = a
      }, this);
      "error" in a && a.error == "TIMEOUT" && c in b && (e[c] = b[c])
    }, this);
    bb(e) ? a(!d) : (a(m), Nc(this.H, t(this.W, this, a, e), $a(e)))
  }
};
function md(a, b) {
  return a.i[b] && a.i[b].lastUpdated ? +a.i[b].lastUpdated : 0
}
function nd(a, b, c) {
  a.Z = {};
  a.Ea = [];
  var d = {};
  B(b, function(a) {
    var b = a.quadkey;
    this.Ea.push(b);
    if(md(this, b) + 18E4 < u()) {
      var c = new qa;
      c.X = a;
      c.o = md(this, b);
      c.kb = b;
      d[b] = c
    }
  }, a);
  bb(d) ? c(k) : Nc(a.H, t(a.W, a, c, d), $a(d))
}
function od(a, b, c) {
  b = a.ma[b] || l;
  !b || b.fa() ? c(b) : Oc(a.H, D(ed(b), function(a) {
    return a.a
  }), t(a.fd, a, b, c))
}
T.prototype.fd = function(a, b, c) {
  if("result" in c) {
    var d = Tc.d();
    y(c.result, function(a) {
      a = Ec(a);
      d.S[a.a] ? d.S[a.a].merge(a) : d.S[a.a] = a
    })
  }
  b(a)
};
// Input 52
function pd(a) {
  return/^[+a-zA-Z0-9_.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,6}$/.test(a)
}
;
// Input 53
function qd(a, b) {
  var c = b || new J;
  c.append('<div id="header_invites_box" class="header_box"><form onSubmit="return false;" id="send_invite_form" name="send_invite"><input type="email" id="invitee_email" placeholder="enter email" ', a.disabled ? "disabled" : "", ' /><input type="submit" value="Send" ', a.disabled ? "disabled" : "", ' /></form><div id="send_invite_status"></div><div id="invite_count_text">');
  rd(a, c);
  c.append("</div></div>");
  return b ? "" : c.toString()
}
function rd(a, b) {
  var c = b || new J;
  c.append(a.Ta == 0 ? "No invites left" : a.Ta == 1 ? "1 invite left" : O(a.Ta) + " invites left");
  return b ? "" : c.toString()
}
;
// Input 54
function sd() {
}
sd.prototype.draw = function(a) {
  var b = 0;
  "result" in a && (b = +a.result);
  a = {Ta:b, disabled:b == 0};
  (b = document.getElementById("invite_count_text")) ? M(b, rd, a) : (a = ac(qd, a), b = document.getElementById("header_invites"), b.parentNode.insertBefore(a, b.nextSibling))
};
// Input 55
function td() {
  this.Ua = new sd
}
td.prototype.t = function() {
  Pc(hd(), t(this.Oc, this))
};
td.prototype.Oc = function(a) {
  this.Ua.draw(a);
  this.ba = document.getElementById("invitee_email");
  this.M = document.getElementById("send_invite_status");
  (a = document.getElementById("send_invite_form")) && I(a, "submit", t(this.md, this))
};
td.prototype.md = function() {
  var a = this.ba.value;
  if(pd(a)) {
    this.ba.value = "";
    this.M.innerHTML = "sending invite to " + a + "...";
    var b = t(this.ad, this, a);
    S(hd(), "dashboard.sendInviteEmail", {inviteeEmailAddress:a}, b);
    _gaq.push(["_trackEvent", "Action", "Send invite"])
  }else {
    this.M.innerHTML = "invalid email"
  }
};
td.prototype.ad = function(a, b) {
  this.M.innerHTML = "error" in b ? "error sending invite to " + a : "invite sent to " + a;
  Pc(hd(), t(this.Ua.draw, this.Ua))
};
// Input 56
// Input 57
// Input 58
function ud(a, b, c) {
  s(b) ? vd(a, c, b) : B(b, la(vd, a))
}
function vd(a, b, c) {
  a.style[wa(c)] = b
}
function wd(a, b) {
  typeof a == "number" && (a = (b ? Math.round(a) : a) + "px");
  return a
}
;
// Input 59
var xd = [{featureType:"all", elementType:"all", stylers:[{visibility:"on"}, {hue:"#0091ff"}, {invert_lightness:k}]}, {featureType:"water", elementType:"all", stylers:[{visibility:"on"}, {hue:"#005eff"}, {invert_lightness:k}]}, {featureType:"poi", stylers:[{visibility:"off"}]}, {featureType:"transit", elementType:"all", stylers:[{visibility:"off"}]}];
// Input 60
function yd(a, b) {
  var c = b || new J;
  c.append('<div class="', P(a.j.b.css), '"><div id="portal_details_container"><div id="pointy_container"><div id="pointy"></div></div><div class="portal_details_row"><div id="portal_primary_title">', O(a.j.title), '</div><div id="portal_close"><div class="SPRITE_close"></div></div></div>');
  var d = c || new J;
  d.append('<div class="portal_details_row"><div id="portal_image_container"><div id="portal_image"', a.j.ga ? ' style="background: url(' + rc(a.j.ga) + ') no-repeat center center"' : "", '></div></div><div id="portal_metadata">', a.j.e ? '<div id="portal_level">Level ' + O(a.j.e) + "</div>" : "", '<div id="portal_capture_status">');
  a.j.isCaptured && (d.append('<div id="portal_discovery_label">Discovery:</div><div id="portal_capture_details">'), zd(a, d), d.append("</div>"));
  d.append("</div></div></div>");
  a.j.isCaptured ? (c.append('<div id="portal_tabs_container" class="res_tab_selected"><div class="portal_details_row"><div id="portal_tab_group_decorator"><div id="pi-tab-res" class="portal_tab_title tab_selected">RESONATORS</div><div id="pi-tab-mod" class="portal_tab_title">MODS</div></div></div><div id="tab_content_res">'), Ad({na:a.j.u, b:a.j.b, r:k}, c), c.append('</div><div id="tab_content_mod">'), Bd({Za:a.j.Q, b:a.j.b}, c), c.append("</div></div>")) : c.append('<div class="portal_details_row"></div>');
  c.append("</div></div>");
  return b ? "" : c.toString()
}
function zd(a, b) {
  var c = b || new J;
  Cd({g:a.j.Y}, c);
  c.append("   ", O(a.j.sa));
  return b ? "" : c.toString()
}
function Bd(a, b) {
  var c = b || new J;
  c.append('<div class="portal_details_row">');
  for(var d = 0;d < 4;d++) {
    d < a.Za.length ? Dd(cc(a.Za[d], {b:a.b}), c) : Dd(l, c), c.append(d != 3 ? '<div class="mod_separator"></div>' : "")
  }
  c.append("</div>");
  return b ? "" : c.toString()
}
function Dd(a, b) {
  var c = b || new J;
  c.append('<div class="mod">');
  a != l ? (c.append('<div class="mod_installer">'), Cd({g:a.Sa}, c), c.append('</div><div class="mod_icon"><div class="SPRITE_', P(a.b.Xc), '"></div></div><div class="mod_name">', O(a.name), "</div>")) : c.append('<div class="mod_icon_empty"></div>');
  c.append("</div>")
}
function Ad(a, b) {
  var c = b || new J;
  c.append('<div class="portal_details_row"><div id="resonators_left">');
  for(var d = 0;d < 4;d++) {
    d < a.na.length ? Ed(cc(a.na[d], {r:a.r}), c) : Ed({r:a.r, Va:0}, c)
  }
  c.append('</div><div id="resonators_center">');
  d = c || new J;
  d.append('<div id="resonatorsCenterPiece"><div id="resonator_arms_left">');
  for(var e = 1;e < 5;e++) {
    d.append('<div class="resonator_arm resonator_arm_', P(e), '"></div>')
  }
  d.append('</div><div id="resonator_arms_right">');
  for(e = 1;e < 5;e++) {
    d.append('<div class="resonator_arm resonator_arm_', P(e), '"></div>')
  }
  d.append('</div><div id="resonators_bar"><div id="portal_faction_icon"><div class="SPRITE_', P(a.b.Qc), '"></div></div></div></div>');
  c.append('</div><div id="resonators_right">');
  for(d = 4;d < 8;d++) {
    d < a.na.length ? Ed(cc(a.na[d], {r:a.r, Va:1}), c) : Ed({r:a.r, Va:1}, c)
  }
  c.append("</div></div>");
  return b ? "" : c.toString()
}
function Ed(a, b) {
  var c = b || new J;
  c.append('<div class="resonator">');
  a.Va ? (Fd(a, c), Gd(a, c), Hd(a, c)) : (Hd(a, c), Gd(a, c), Fd(a, c));
  c.append("</div>")
}
function Fd(a, b) {
  (b || new J).append('<div class="resonator_health"><div class="resonator_health_slot">', a.e ? "<div " + (a.ua && !a.r ? 'style="height: ' + (a.ua == l ? "" : qc(a.ua)) + 'px;"' : "") + 'class="resonator_health_indicator resonator_level_' + P(a.e) + (a.r && !a.ua ? " resonator_health_loading" : "") + '"></div>' : "", "</div></div>")
}
function Gd(a, b) {
  (b || new J).append('<div class="resonator_level">', a.e ? "Level " + O(a.e) : "", "</div>")
}
function Hd(a, b) {
  var c = b || new J;
  c.append('<div class="resonator_owner">');
  Cd({g:a.cb}, c);
  c.append("</div>")
}
function Cd(a, b) {
  (b || new J).append(a.g ? a.g.L ? '<span title="' + P(a.g.L) + '">' + O(a.g.L) + "</span>" : '<span class="player_nickname_loading">loading...</span>' : "")
}
;
// Input 61
function U(a) {
  google.maps.OverlayView.call(this);
  this.I = l;
  this.c = a;
  this.bb = []
}
var Id;
w(U, google.maps.OverlayView);
U.prototype.onAdd = function() {
  if(!this.I) {
    var a = document.createElement("div");
    ud(a, "position", "absolute");
    M(a, yd, {j:this.c});
    this.I = a
  }
  this.getPanes().floatPane.appendChild(this.I);
  (a = document.getElementById("pi-tab-res")) && I(a, "click", t(this.Ub, this, "resonators"));
  (a = document.getElementById("pi-tab-mod")) && I(a, "click", t(this.Ub, this, "mods"));
  this.bb.push(I(document.getElementById("portal_close"), "click", t(this.Nb, this)));
  this.bb.push(I(this.getMap().getDiv(), "click", t(this.Nb, this)));
  I(this.I, "click", function(a) {
    a.stopPropagation()
  })
};
U.prototype.onAdd = U.prototype.onAdd;
U.prototype.show = function(a) {
  Id && Id != this && Id.setMap(l);
  Id = this;
  this.setMap(a);
  _gaq.push(["_trackEvent", "Map", "Portal info window"])
};
U.prototype.Nb = function(a) {
  y(this.bb, function(a) {
    Nb(a)
  });
  a.stopPropagation();
  this.setMap(l)
};
U.prototype.Ub = function(a, b) {
  b.stopPropagation();
  var c = document.getElementById("portal_tabs_container"), d = document.getElementById("pi-tab-res"), e = document.getElementById("pi-tab-mod");
  a == "resonators" ? (Tb(c, "mod_tab_selected", "res_tab_selected"), K(d, "tab_selected"), L(e, "tab_selected")) : (Tb(c, "res_tab_selected", "mod_tab_selected"), K(e, "tab_selected"), L(d, "tab_selected"));
  _gaq.push(["_trackEvent", "Map", "Portal info window", a + " tab"])
};
U.prototype.draw = function() {
  this.c.fa() || od(T.d(), this.c.a, t(this.vd, this));
  var a;
  a = l;
  var b = this.I, c = ad(this.c), d = this.getProjection().fromLatLngToContainerPixel(c), e = document.getElementById("map_canvas"), f = d.y, g = e.offsetHeight - f, d = d.x, e = e.offsetWidth - d, h = b.offsetWidth, i = b.offsetHeight, p = this.getProjection().fromLatLngToDivPixel(c), q = Math.floor(h / 2), o = Math.floor(i / 2), E = p.x - q, c = p.y - o;
  q < d && q < e && i + 45 < f ? (c -= o + 45, Jd("bottom", i)) : q < d && q < e && i + 45 < g ? (c += o + 45, Jd("top")) : o < f && o < g && h + 45 < e ? (E += q + 45, Jd("left", o)) : o < f && o < g && h + 45 < d ? (E -= q + 45, Jd("right", o)) : (c -= o + 45, Jd("bottom", i), a = this.getProjection().fromDivPixelToLatLng(new google.maps.Point(p.x, p.y - (i + 45) / 2)));
  f = E;
  g = c;
  d = Ja && (Da || Ma) && Va("1.9");
  b.style.left = wd(f, d);
  b.style.top = wd(g, d);
  a && this.getMap().getBounds().contains(ad(this.c)) && this.getMap().panTo(a)
};
U.prototype.draw = U.prototype.draw;
function Jd(a, b) {
  var c = document.getElementById("pointy");
  c.className = "pointy_" + a;
  b ? ud(c, "top", b + "px") : c.removeAttribute("style")
}
U.prototype.onRemove = function() {
  this.I.parentNode.removeChild(this.I)
};
U.prototype.onRemove = U.prototype.onRemove;
U.prototype.vd = function(a) {
  if(a && (this.c = a, !a.fa())) {
    return
  }
  (a = document.getElementById("portal_capture_details")) && M(a, zd, {j:this.c});
  M(document.getElementById("tab_content_res"), Ad, {na:this.c.u, b:this.c.b});
  M(document.getElementById("tab_content_mod"), Bd, {Za:this.c.Q, b:this.c.b})
};
// Input 62
function Kd(a, b) {
  this.h = a;
  this.w = 1;
  this.c = b
}
Kd.prototype.show = function(a) {
  this.w = a;
  Ld(this);
  this.F.setMap(this.h);
  this.s && this.s.setMap(this.h)
};
Kd.prototype.hide = function() {
  this.F && this.F.setMap(l);
  this.s && this.s.setMap(l)
};
function Ld(a) {
  a.F ? (a.F.setIcon(Md(a.c.b, Za(a.c.u), a.w)), a.F.setShape(Nd(a.w))) : a.F = new google.maps.Marker({position:ad(a.c), icon:Md(a.c.b, Za(a.c.u), a.w), shape:Nd(a.w), zIndex:1});
  var b = a.c.e > 1;
  if(a.s && b) {
    a.s.setIcon(Od(a.c.b, a.c.e, a.w))
  }else {
    if(a.s && !b) {
      a.s.setMap(l), a.s = l
    }else {
      if(!a.s && b) {
        a.s = new google.maps.Marker({position:ad(a.c), icon:Od(a.c.b, a.c.e, a.w), clickable:m, zIndex:2})
      }
    }
  }
  google.maps.event.clearListeners(a.F, "click");
  b = new U(a.c);
  google.maps.event.addListener(a.F, "click", t(b.show, b, a.h))
}
var V = {};
function Md(a, b, c) {
  var d = a.oa;
  V[d] || (V[d] = {});
  V[d][b] || (V[d][b] = {});
  V[d][b][c] || (V[d][b][c] = Pd(a == vc ? "http://commondatastorage.googleapis.com/ingress/img/map_icons/marker_images/neutral_icon.png" : "http://commondatastorage.googleapis.com/ingress/img/map_icons/marker_images/" + a.oa + "_" + b + "res.png", c));
  return V[d][b][c]
}
var W = {};
function Od(a, b, c) {
  var d = a.oa;
  W[d] || (W[d] = {});
  W[d][b] || (W[d][b] = {});
  W[d][b][c] || (W[d][b][c] = Pd("http://commondatastorage.googleapis.com/ingress/img/map_icons/marker_images/" + a.oa + "_lev" + b + ".png", c));
  return W[d][b][c]
}
function Pd(a, b) {
  var c = new google.maps.Size(60, 60), d = new google.maps.Point(0, 0), e = new google.maps.Point(30 * b, 30 * b), f = new google.maps.Size(60 * b, 60 * b);
  return new google.maps.MarkerImage(a, c, d, e, f)
}
var Qd = {};
function Nd(a) {
  Qd[a] || (Qd[a] = {type:"circle", coords:[30 * a, 30 * a, 20 * a]});
  return Qd[a]
}
;
// Input 63
var X = {hc:["BC", "AD"], gc:["Before Christ", "Anno Domini"], oc:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), zc:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), mc:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), yc:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), vc:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), Bc:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), Ec:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
Dc:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), xc:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), Cc:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), Fd:"S,M,T,W,T,F,S".split(","), Ac:"S,M,T,W,T,F,S".split(","), wc:["Q1", "Q2", "Q3", "Q4"], tc:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], bc:["AM", "PM"], rb:["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"], sb:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], Bd:6, Id:[5, 6], Cd:2};
// Input 64
// Input 65
function Rd() {
}
function Sd(a) {
  if(typeof a == "number") {
    var b = new Rd;
    b.Ga = a;
    var c;
    c = a;
    if(c == 0) {
      c = "Etc/GMT"
    }else {
      var d = ["Etc/GMT", c < 0 ? "-" : "+"];
      c = Math.abs(c);
      d.push(Math.floor(c / 60) % 100);
      c %= 60;
      c != 0 && d.push(":", z(c, 2));
      c = d.join("")
    }
    b.Wb = c;
    a == 0 ? a = "UTC" : (c = ["UTC", a < 0 ? "+" : "-"], a = Math.abs(a), c.push(Math.floor(a / 60) % 100), a %= 60, a != 0 && c.push(":", a), a = c.join(""));
    b.pb = [a, a];
    b.Ia = [];
    return b
  }
  b = new Rd;
  b.Wb = a.id;
  b.Ga = -a.std_offset;
  b.pb = a.names;
  b.Ia = a.transitions;
  return b
}
function Td(a, b) {
  for(var c = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5, d = 0;d < a.Ia.length && c >= a.Ia[d];) {
    d += 2
  }
  return d == 0 ? 0 : a.Ia[d - 1]
}
;
// Input 66
function dd(a) {
  this.Ba = [];
  typeof a == "number" ? this.ra(a) : this.B(a)
}
var Ud = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvzZ]+/];
dd.prototype.B = function(a) {
  for(;a;) {
    for(var b = 0;b < Ud.length;++b) {
      var c = a.match(Ud[b]);
      if(c) {
        c = c[0];
        a = a.substring(c.length);
        b == 0 && (c == "''" ? c = "'" : (c = c.substring(1, c.length - 1), c = c.replace(/\'\'/, "'")));
        this.Ba.push({text:c, type:b});
        break
      }
    }
  }
};
dd.prototype.format = function(a, b) {
  var c = b ? (a.getTimezoneOffset() - (b.Ga - Td(b, a))) * 6E4 : 0, d = c ? new Date(a.getTime() + c) : a, e = d;
  b && d.getTimezoneOffset() != a.getTimezoneOffset() && (c += c > 0 ? -864E5 : 864E5, e = new Date(a.getTime() + c));
  for(var c = [], f = 0;f < this.Ba.length;++f) {
    var g = this.Ba[f].text;
    1 == this.Ba[f].type ? c.push(Vd(g, a, d, e, b)) : c.push(g)
  }
  return c.join("")
};
dd.prototype.ra = function(a) {
  if(a < 4) {
    a = X.rb[a]
  }else {
    if(a < 8) {
      a = X.sb[a - 4]
    }else {
      if(a < 12) {
        a = X.rb[a - 8] + " " + X.sb[a - 8]
      }else {
        this.ra(10);
        return
      }
    }
  }
  this.B(a)
};
function Wd(a, b) {
  var c = b.getMonth();
  switch(a) {
    case 5:
      return X.oc[c];
    case 4:
      return X.mc[c];
    case 3:
      return X.vc[c];
    default:
      return z(c + 1, a)
  }
}
function Xd(a, b) {
  var c = b.getDay();
  switch(a) {
    case 5:
      return X.Ac[c];
    case 4:
      return X.Dc[c];
    case 3:
      return X.Cc[c];
    default:
      return z(c, 1)
  }
}
function Yd(a, b) {
  var c = b.getMonth();
  switch(a) {
    case 5:
      return X.zc[c];
    case 4:
      return X.yc[c];
    case 3:
      return X.Bc[c];
    default:
      return z(c + 1, a)
  }
}
function Vd(a, b, c, d, e) {
  var f = a.length;
  switch(a.charAt(0)) {
    case "G":
      return b = c.getFullYear() > 0 ? 1 : 0, f >= 4 ? X.gc[b] : X.hc[b];
    case "y":
      return b = c.getFullYear(), b < 0 && (b = -b), f == 2 ? z(b % 100, 2) : String(b);
    case "M":
      return Wd(f, c);
    case "k":
      return z(d.getHours() || 24, f);
    case "S":
      return(d.getTime() % 1E3 / 1E3).toFixed(Math.min(3, f)).substr(2) + (f > 3 ? z(0, f - 3) : "");
    case "E":
      return b = c.getDay(), f >= 4 ? X.Ec[b] : X.xc[b];
    case "a":
      return f = d.getHours(), X.bc[f >= 12 && f < 24 ? 1 : 0];
    case "h":
      return z(d.getHours() % 12 || 12, f);
    case "K":
      return z(d.getHours() % 12, f);
    case "H":
      return z(d.getHours(), f);
    case "c":
      return Xd(f, c);
    case "L":
      return Yd(f, c);
    case "Q":
      return b = Math.floor(c.getMonth() / 3), f < 4 ? X.wc[b] : X.tc[b];
    case "d":
      return z(c.getDate(), f);
    case "m":
      return z(d.getMinutes(), f);
    case "s":
      return z(d.getSeconds(), f);
    case "v":
      return f = e || Sd(b.getTimezoneOffset()), f.Wb;
    case "z":
      return a = e || Sd(b.getTimezoneOffset()), f < 4 ? a.pb[Td(a, b) > 0 ? 2 : 0] : a.pb[Td(a, b) > 0 ? 3 : 1];
    case "Z":
      return a = e || Sd(b.getTimezoneOffset()), f < 4 ? (f = -(a.Ga - Td(a, b)), b = [f < 0 ? "-" : "+"], f = Math.abs(f), b.push(z(Math.floor(f / 60) % 100, 2), z(f % 60, 2))) : (f = a.Ga - Td(a, b), b = ["GMT"], b.push(f <= 0 ? "+" : "-"), f = Math.abs(f), b.push(z(Math.floor(f / 60) % 100, 2), ":", z(f % 60, 2))), f = b.join("");
    default:
      return""
  }
}
;
// Input 67
function Zd(a) {
  this.h = a;
  this.Na = []
}
Zd.prototype.draw = function(a) {
  var b = pa();
  this.Na = fb(this.Na, function(c) {
    var d = c.c;
    if(!$d(d)) {
      return c.hide(), m
    }
    if(a[d.a]) {
      var e = a[d.a];
      if(e.o > d.o && c.c != e) {
        c.c = e, Ld(c)
      }
      delete a[d.a]
    }
    if(c.w != b) {
      c.w = b, Ld(c)
    }
    return k
  }, this);
  B(a, function(a) {
    $d(a) && (a = new Kd(this.h, a), a.show(b), this.Na.push(a))
  }, this)
};
function $d(a) {
  return(a.u.length ? a.e : 0) >= oa()
}
;
// Input 68
function ae(a) {
  this.map = a;
  this.ca = {}
}
ae.prototype.draw = function(a) {
  var b = be, c = T.d();
  this.ca = Ya(this.ca, function(d, e) {
    return!b(this.ea(d)) || a[e] && this.ca[a[e].a] && this.ca[a[e].a].o < a[e].o || c.Z[e] ? (this.hide(d), m) : k
  }, this);
  B(a, function(a) {
    b(this.ea(a)) && (this.show(a), this.ca[a.a] = a)
  }, this)
};
function be(a) {
  var b = T.d();
  return gb(a, function(a, d) {
    if(a) {
      return k
    }
    var e = b.ma[d.a] || l;
    if(e) {
      if($d(e)) {
        return k
      }
    }else {
      return k
    }
    return m
  }, m)
}
;
// Input 69
function ce(a) {
  ae.call(this, a);
  this.Fa = {}
}
w(ce, ae);
ce.prototype.ea = function(a) {
  return a ? a.T : []
};
ce.prototype.hide = function(a) {
  var b = this.Fa[a.a];
  b && (delete this.Fa[a.a], b.setMap(l))
};
ce.prototype.show = function(a) {
  if(!this.Fa[a.a]) {
    var b = D(this.ea(a), function(a) {
      return new google.maps.LatLng(a.lat, a.lng)
    });
    b.length < 3 || (this.Fa[a.a] = new google.maps.Polygon({map:this.map, paths:b, strokeColor:a.b.color, strokeOpacity:0.2, strokeWeight:1, fillColor:a.b.color, fillOpacity:0.35}))
  }
};
// Input 70
function de(a) {
  ae.call(this, a);
  this.ta = {}
}
w(de, ae);
de.prototype.ea = function(a) {
  return a ? [a.origin, a.m] : []
};
de.prototype.hide = function(a) {
  var b = this.ta[a.a];
  b && (delete this.ta[a.a], b.setMap(l))
};
de.prototype.show = function(a) {
  if(!this.ta[a.a]) {
    var b = [];
    y(this.ea(a), function(a) {
      Rc(a) && (a = new google.maps.LatLng(a.lat, a.lng), b.push(a))
    });
    b.length < 2 || (this.ta[a.a] = new google.maps.Polyline({map:this.map, path:b, strokeColor:a.b.color, strokeOpacity:0.8, strokeWeight:2}))
  }
};
// Input 71
function ee(a) {
  this.ed = new Zd(a);
  this.gd = new ce(a);
  this.Pc = new de(a)
}
ee.prototype.Ab = function(a) {
  var b = T.d();
  this.ed.draw(id(b, "portal", b.ma));
  this.gd.draw(id(b, "region", b.lb));
  this.Pc.draw(id(b, "edge", b.aa));
  a && fe(m)
};
function fe(a) {
  document.getElementById("map_spinner").style.display = a ? "" : "none"
}
;
// Input 72
function ge(a, b) {
  var c = b || new J;
  c.append('<div class="portal_level_indicator">');
  if(a.ha == 0) {
    c.append("Showing all Portals.")
  }else {
    c.append("Showing ");
    if(a.ha < 8) {
      var d = a.ha;
      (c || new J).append('<span class="level_', P(d), '">L', O(d), "</span>");
      c.append("-")
    }
    c.append('<span class="level_8">L8</span> Portals.')
  }
  c.append(a.ha == 1 ? " Zoom in to see unclaimed Portals." : a.ha > 1 ? " Zoom in to see lower level Portals." : "", "</div>");
  return b ? "" : c.toString()
}
;
// Input 73
function he() {
}
he.prototype.draw = function() {
  var a = oa(), b = $("#zoom_level_data").get()[0];
  M(b, ge, {ha:a})
};
// Input 74
function ie(a, b) {
  var c = b || new J;
  c.append('<div id="global_scores">');
  je({b:wc, Tb:a.Hc, Sb:a.Gc}, c);
  je({b:xc, Tb:a.Sc, Sb:a.Rc}, c);
  c.append("</div>");
  return b ? "" : c.toString()
}
function je(a, b) {
  (b || new J).append('<div class="global_score ', P(a.b.css), '"><div class="score_faction_name">', O(a.b.Pa), '</div><div class="score_metadata"><span class="color_orange">Mind Units:</span>  ', O(a.Tb), '</div><div class="score_metadata visible_on_show_box"><span class="color_orange">Global Control:</span>  ', O(a.Sb), "</div></div>")
}
;
// Input 75
var ke = {ec:".", jc:",", pc:"%", qa:"0", sc:"+", lc:"-", ic:"E", rc:"\u2030", kc:"\u221e", nc:"NaN", dc:"#,##0.###", uc:"#E0", qc:"#,##0%", cc:"\u00a4#,##0.00;(\u00a4#,##0.00)", fc:"USD"}, Y = ke, Y = ke;
// Input 76
var le = {AED:"\u062f.\u0625", ARS:"$", AUD:"$", BDT:"\u09f3", BRL:"R$", CAD:"$", CHF:"Fr.", CLP:"$", CNY:"\u00a5", COP:"$", CRC:"\u20a1", CUP:"$", CZK:"K\u010d", DKK:"kr", DOP:"$", EGP:"\u00a3", EUR:"\u20ac", GBP:"\u00a3", HKD:"$", HRK:"kn", HUF:"Ft", IDR:"Rp", ILS:"\u20aa", INR:"Rs", IQD:"\u0639\u062f", ISK:"kr", JMD:"$", JPY:"\u00a5", KRW:"\u20a9", KWD:"\u062f.\u0643", LKR:"Rs", LVL:"Ls", MNT:"\u20ae", MXN:"$", MYR:"RM", NOK:"kr", NZD:"$", PAB:"B/.", PEN:"S/.", PHP:"P", PKR:"Rs.", PLN:"z\u0142",
RON:"L", RUB:"\u0440\u0443\u0431", SAR:"\u0633.\u0631", SEK:"kr", SGD:"$", SKK:"Sk", SYP:"SYP", THB:"\u0e3f", TRY:"TL", TWD:"NT$", USD:"$", UYU:"$", VEF:"Bs.F", VND:"\u20ab", XAF:"FCFA", XCD:"$", YER:"YER", ZAR:"R"};
// Input 77
function me(a, b) {
  this.Fb = b || Y.fc;
  this.Jc = le[this.Fb];
  this.ya = 40;
  this.p = 1;
  this.Ya = 3;
  this.za = this.ia = 0;
  this.Zb = m;
  this.jb = this.ib = "";
  this.Aa = "-";
  this.$a = "";
  this.ja = 1;
  this.Ra = 3;
  this.Ja = this.wb = m;
  typeof a == "number" ? this.ra(a) : this.B(a)
}
me.prototype.B = function(a) {
  this.Nd = a.replace(/ /g, "\u00a0");
  var b = [0];
  this.ib = ne(this, a, b);
  for(var c = b[0], d = -1, e = 0, f = 0, g = 0, h = -1, i = a.length, p = k;b[0] < i && p;b[0]++) {
    switch(a.charAt(b[0])) {
      case "#":
        f > 0 ? g++ : e++;
        h >= 0 && d < 0 && h++;
        break;
      case "0":
        if(g > 0) {
          throw Error('Unexpected "0" in pattern "' + a + '"');
        }
        f++;
        h >= 0 && d < 0 && h++;
        break;
      case ",":
        h = 0;
        break;
      case ".":
        if(d >= 0) {
          throw Error('Multiple decimal separators in pattern "' + a + '"');
        }
        d = e + f + g;
        break;
      case "E":
        if(this.Ja) {
          throw Error('Multiple exponential symbols in pattern "' + a + '"');
        }
        this.Ja = k;
        this.za = 0;
        if(b[0] + 1 < i && a.charAt(b[0] + 1) == "+") {
          b[0]++, this.Zb = k
        }
        for(;b[0] + 1 < i && a.charAt(b[0] + 1) == "0";) {
          b[0]++, this.za++
        }
        if(e + f < 1 || this.za < 1) {
          throw Error('Malformed exponential pattern "' + a + '"');
        }
        p = m;
        break;
      default:
        b[0]--, p = m
    }
  }
  f == 0 && e > 0 && d >= 0 && (f = d, f == 0 && f++, g = e - f, e = f - 1, f = 1);
  if(d < 0 && g > 0 || d >= 0 && (d < e || d > e + f) || h == 0) {
    throw Error('Malformed pattern "' + a + '"');
  }
  g = e + f + g;
  this.Ya = d >= 0 ? g - d : 0;
  if(d >= 0 && (this.ia = e + f - d, this.ia < 0)) {
    this.ia = 0
  }
  this.p = (d >= 0 ? d : g) - e;
  if(this.Ja && (this.ya = e + this.p, this.Ya == 0 && this.p == 0)) {
    this.p = 1
  }
  this.Ra = Math.max(0, h);
  this.wb = d == 0 || d == g;
  c = b[0] - c;
  this.jb = ne(this, a, b);
  b[0] < a.length && a.charAt(b[0]) == oe ? (b[0]++, this.Aa = ne(this, a, b), b[0] += c, this.$a = ne(this, a, b)) : (this.Aa = this.ib + this.Aa, this.$a += this.jb)
};
me.prototype.ra = function(a) {
  switch(a) {
    case 1:
      this.B(Y.dc);
      break;
    case 2:
      this.B(Y.uc);
      break;
    case 3:
      this.B(Y.qc);
      break;
    case 4:
      this.B(Y.cc);
      break;
    default:
      throw Error("Unsupported pattern type.");
  }
};
me.prototype.format = function(a) {
  if(isNaN(a)) {
    return Y.nc
  }
  var b = [], c = a < 0 || a == 0 && 1 / a < 0;
  b.push(c ? this.Aa : this.ib);
  if(isFinite(a)) {
    if(a *= c ? -1 : 1, a *= this.ja, this.Ja) {
      if(a == 0) {
        pe(this, a, this.p, b), qe(this, 0, b)
      }else {
        var d = Math.floor(Math.log(a) / Math.log(10));
        a /= Math.pow(10, d);
        var e = this.p;
        if(this.ya > 1 && this.ya > this.p) {
          for(;d % this.ya != 0;) {
            a *= 10, d--
          }
          e = 1
        }else {
          this.p < 1 ? (d++, a /= 10) : (d -= this.p - 1, a *= Math.pow(10, this.p - 1))
        }
        pe(this, a, e, b);
        qe(this, d, b)
      }
    }else {
      pe(this, a, this.p, b)
    }
  }else {
    b.push(Y.kc)
  }
  b.push(c ? this.$a : this.jb);
  return b.join("")
};
function pe(a, b, c, d) {
  for(var e = Math.pow(10, a.Ya), b = Math.round(b * e), f = Math.floor(b / e), g = Math.floor(b - f * e), h = a.ia > 0 || g > 0, i = "", b = f;b > 1.0E20;) {
    i = "0" + i, b = Math.round(b / 10)
  }
  var i = b + i, p = Y.ec, q = Y.jc, b = Y.qa.charCodeAt(0), o = i.length;
  if(f > 0 || c > 0) {
    for(f = o;f < c;f++) {
      d.push(Y.qa)
    }
    for(f = 0;f < o;f++) {
      d.push(String.fromCharCode(b + i.charAt(f) * 1)), o - f > 1 && a.Ra > 0 && (o - f) % a.Ra == 1 && d.push(q)
    }
  }else {
    h || d.push(Y.qa)
  }
  (a.wb || h) && d.push(p);
  c = "" + (g + e);
  for(e = c.length;c.charAt(e - 1) == "0" && e > a.ia + 1;) {
    e--
  }
  for(f = 1;f < e;f++) {
    d.push(String.fromCharCode(b + c.charAt(f) * 1))
  }
}
function qe(a, b, c) {
  c.push(Y.ic);
  b < 0 ? (b = -b, c.push(Y.lc)) : a.Zb && c.push(Y.sc);
  for(var b = "" + b, d = b.length;d < a.za;d++) {
    c.push(Y.qa)
  }
  c.push(b)
}
var oe = ";";
function ne(a, b, c) {
  for(var d = "", e = m, f = b.length;c[0] < f;c[0]++) {
    var g = b.charAt(c[0]);
    if(g == "'") {
      c[0] + 1 < f && b.charAt(c[0] + 1) == "'" ? (c[0]++, d += "'") : e = !e
    }else {
      if(e) {
        d += g
      }else {
        switch(g) {
          case "#":
          ;
          case "0":
          ;
          case ",":
          ;
          case ".":
          ;
          case oe:
            return d;
          case "\u00a4":
            c[0] + 1 < f && b.charAt(c[0] + 1) == "\u00a4" ? (c[0]++, d += a.Fb) : d += a.Jc;
            break;
          case "%":
            if(a.ja != 1) {
              throw Error("Too many percent/permill");
            }
            a.ja = 100;
            d += Y.pc;
            break;
          case "\u2030":
            if(a.ja != 1) {
              throw Error("Too many percent/permill");
            }
            a.ja = 1E3;
            d += Y.rc;
            break;
          default:
            d += g
        }
      }
    }
  }
  return d
}
;
// Input 78
function re() {
}
var se = new me(1), te = new me(3);
re.prototype.draw = function(a) {
  var b = +a.result.alienScore, a = +a.result.resistanceScore, c = b / (b + a), d = a / (b + a);
  M(document.getElementById("game_stats"), ie, {Hc:se.format(b), Gc:te.format(c), Sc:se.format(a), Rc:te.format(d)});
  if(b = document.getElementById("global_scores")) {
    this.Cb = b, I(b, "touchstart", t(this.td, this)), I(b, "mouseover", t(this.Vb, this, k)), I(b, "mouseout", t(this.Vb, this, m))
  }
};
re.prototype.Vb = function(a) {
  var b = this.Cb;
  a ? K(b, "show_box") : L(b, "show_box")
};
re.prototype.td = function() {
  Ub(this.Cb, "show_box")
};
// Input 79
function ue(a, b) {
  document.cookie = "ingress.intelmap." + a + "=" + escape(b)
}
function ve(a) {
  return we("ingress.intelmap." + a)
}
function we(a) {
  for(var b = document.cookie.split(";"), c = 0;c < b.length;c++) {
    var d = b[c], e = d.indexOf("=");
    if(d.substr(0, e).replace(/^\s+|\s+$/g, "") == a) {
      return unescape(d.substr(e + 1))
    }
  }
  return l
}
;
// Input 80
function xe() {
  jQuery(document).ajaxSend(function(a, b, c) {
    if(a = !/^(GET|HEAD|OPTIONS|TRACE)$/.test(c.type)) {
      var c = c.url, a = "//" + document.location.host, d = document.location.protocol + a, a = c == d || c.slice(0, d.length + 1) == d + "/" || c == a || c.slice(0, a.length + 1) == a + "/" || !/^(\/\/|http:|https:).*/.test(c)
    }
    a && b.setRequestHeader("X-CSRFToken", we("csrftoken"))
  })
}
;
// Input 81
function ye() {
  this.Lc = new Lc;
  this.ba = document.getElementById("user_email");
  this.M = document.getElementById("request_invite_status");
  var a = document.getElementById("request_invite");
  a && I(a, "submit", t(this.kd, this))
}
ye.prototype.kd = function() {
  var a = this.ba.value;
  if(pd(a)) {
    this.ba.value = "";
    this.M.innerHTML = "Saving email: " + a + "...";
    var b = t(this.Zc, this, a);
    S(this.Lc, "dashboard.local.requestInvite", {email:a, local:1}, b)
  }else {
    this.M.innerHTML = "Invalid email"
  }
};
ye.prototype.Zc = function(a, b) {
  this.M.innerHTML = "error" in b ? "Error saving email: " + a : "Stay tuned at: " + a
};
// Input 82
function ze() {
  this.$b = "92rYjlxqypM";
  this.wd = "http://www.youtube.com/watch?v=" + this.$b;
  this.Vc = m
}
ba(ze);
v("play", function() {
  _gaq.push(["_trackEvent", "Videos", "Play", "Ingress promo"]);
  var a = ze.d();
  a.Vc ? window.location.href = a.wd : ($("#video_overlay").show(), $("<div>").attr("id", "ytvideo").show().appendTo($("#video")), ytplayer = new YT.Player("ytvideo", {width:$("#video").width(), height:$("#video").height(), videoId:a.$b, playerVars:{autoplay:1, enablejsapi:1, modestbranding:1, rel:0, showinfo:0, hd:1}, events:{onReady:function() {
    ytplayer.setPlaybackQuality("hd720")
  }}}))
});
v("landingPageInit", function() {
  var a = ze.d();
  Ae(a);
  $(document).keyup(function(b) {
    b.keyCode == 27 && a.Eb()
  });
  new ye;
  xe()
});
ze.prototype.Eb = function() {
  ytplayer.stopVideo();
  $("#video_overlay").hide();
  $("#ytvideo").remove()
};
function Ae(a) {
  var b = document.getElementById("video_overlay");
  b && I(b, "click", t(a.Eb, a))
}
;
// Input 83
// Input 84
function Be(a, b, c) {
  R.call(this, a, b, u());
  this.A = c;
  a = new Date(c);
  b = new Date;
  if(c = a.getDate() == b.getDate()) {
    b = b || new Date, c = a.getMonth() == b.getMonth() && a.getFullYear() == (b || new Date).getFullYear()
  }
  this.timestamp = (c ? Ce : De).format(a);
  this.type = Ee;
  this.Kb = []
}
w(Be, R);
var De = new dd("MMM d"), Ce = new dd("h:mma"), Ee = 0;
function Fe(a) {
  var b = a[2].plext, a = new Be(a[0], b.team, a[1]);
  if(b.plextType == "SYSTEM_NARROWCAST") {
    a.type = 1
  }else {
    if(b.plextType == "PLAYER_GENERATED") {
      a.type = 2
    }
  }
  a.Kb = D(b.markup, function(a) {
    var b = a[1], e = new Ge(b.plain);
    switch(a[0]) {
      case "FACTION":
        e.type = 1;
        e.b = yc(b.team);
        break;
      case "PLAYER":
        e.type = 2;
        e.b = yc(b.team);
        e.a = b.guid;
        break;
      case "SENDER":
        e.type = 3;
        e.b = yc(b.team);
        e.a = b.guid;
        break;
      case "PORTAL":
        e.type = 4;
        e.b = yc(b.team);
        e.a = b.guid;
        e.lat = b.latE6 / 1E6;
        e.lng = b.lngE6 / 1E6;
        e.name = b.name;
        e.address = b.address;
        break;
      case "SECURE":
        e.type = 5
    }
    return e
  });
  return a
}
function He(a) {
  return!("result" in a) ? [] : D(a.result, Fe)
}
function Ge(a) {
  this.type = 0;
  this.Ca = a
}
;
// Input 85
function Ie() {
  this.f = [];
  this.Oa = k
}
var Je = {xd:"all", Ad:"faction"}, Ke = {VIEWPORT:"viewport", Dd:"global"};
function Le(a, b) {
  a.f = Me(b);
  a.Oa = m
}
function Me(a) {
  return a.length > 1 && a[0].A > a[a.length - 1].A ? a.reverse() : a
}
Ie.prototype.Qa = function() {
  return this.f
};
// Input 86
function Ne(a, b) {
  var c = b || new J;
  c.append('<div id="plext_primary_title">COMM<div class="SPRITE_chevron"></div><div class="SPRITE_chevron_down"></div></div><div id="plext_tab_group_container"><div id="pl_tab_all" class="plext_tab_title tab_selected">All</div><div id="pl_tab_fac" class="plext_tab_title">Faction</div></div><div id="plext_viewport_restrict_checkbox_container"><input type="checkbox" checked="true" id="pl_checkbox" /><div id="pl_checkbox_text">Restrict to map</div></div><div id="plext_container"><div id="pl_status"></div><div id="plexts"></div></div><form id="send_plext_form" name="send_plext" onSubmit="return false;"><input id="message" type="text" placeholder="start broadcasting here" maxlength="256"><input type="submit" value="Transmit"></form>');
  return b ? "" : c.toString()
}
function Oe(a, b) {
  var c = b || new J;
  c.append('<div id="pl_spinner"><div class="img_progress"></div><div class="pl_status_text">Loading...</div></div>');
  return b ? "" : c.toString()
}
function Pe(a, b) {
  var c = b || new J;
  c.append('<div class="pl_status_text">Oops! Something went wrong...</div>');
  return b ? "" : c.toString()
}
function Qe(a, b) {
  for(var c = b || new J, d = a.hb, e = d.length, f = 0;f < e;f++) {
    var g = d[f], h = c || new J;
    h.append('<div class="plext"><div class="pl_timestamp">', O(g.timestamp), '</div><div class="pl_content ', g.type == Ee ? "pl_broad" : g.type == 1 ? "pl_narrow" : "pl_player", '" >');
    for(var g = g.Kb, i = g.length, p = 0;p < i;p++) {
      var q = g[p], o = h || new J;
      switch(q.type) {
        case 1:
          o.append('<span class="', P(q.b.css), '">', O(q.b.Pa), "</span>");
          break;
        case 2:
          o.append('<span class="', P(q.b.css), '">', O(q.Ca), "</span>");
          break;
        case 3:
          o.append('<span class="', P(q.b.css), '">', O(q.Ca), "</span>");
          break;
        case 4:
          o.append('<span class="pl_portal_name" ontouchstart="panto(', Q(q.lat), ", ", Q(q.lng), ')" onclick="panto(', Q(q.lat), ", ", Q(q.lng), ')">', O(q.name), '</span> <span class="pl_portal_address" ontouchstart="panto(', Q(q.lat), ", ", Q(q.lng), ')" onclick="panto(', Q(q.lat), ", ", Q(q.lng), ')">(', O(q.address), ")</span>");
          break;
        case 5:
          o.append('<span class="pl_secure">', O(q.Ca), "</span>");
          break;
        default:
          o.append(O(q.Ca))
      }
    }
    h.append("</div></div></div>")
  }
  return b ? "" : c.toString()
}
;
// Input 87
function Re() {
}
n = Re.prototype;
n.t = function(a, b, c, d) {
  M(document.getElementById("comm"), Ne);
  var e = document.getElementById("plext_container");
  if(e) {
    this.G = e
  }
  if(e = document.getElementById("plexts")) {
    this.f = e
  }
  (e = document.getElementById("plext_primary_title")) && I(e, "click", t(this.sd, this));
  (e = document.getElementById("pl_tab_all")) && I(e, "click", t(this.vb, this, "all", a));
  (e = document.getElementById("pl_tab_fac")) && I(e, "click", t(this.vb, this, "faction", a));
  (a = document.getElementById("pl_checkbox")) && I(a, "change", t(this.ud, this, b));
  I(this.G, "scroll", t(this.$c, this, c));
  (b = document.getElementById("send_plext_form")) && I(b, "submit", t(this.bd, this, d))
};
n.sd = function(a) {
  a.stopPropagation();
  (a = document.getElementById("comm")) && (Ub(a, "comm_expanded") ? _gaq.push(["_trackEvent", "Action", "Comm view", "expanded"]) : _gaq.push(["_trackEvent", "Action", "Comm view", "minimized"]))
};
n.vb = function(a, b, c) {
  c.stopPropagation();
  var c = document.getElementById("pl_tab_all"), d = document.getElementById("pl_tab_fac");
  a == "all" ? (K(c, "tab_selected"), L(d, "tab_selected")) : (K(d, "tab_selected"), L(c, "tab_selected"));
  b(a)
};
n.ud = function(a, b) {
  b.stopPropagation();
  a(document.getElementById("pl_checkbox").checked ? "viewport" : "global")
};
n.$c = function(a) {
  this.G.scrollTop == 0 && a()
};
n.bd = function(a) {
  var b = document.getElementById("message"), c = b.value;
  Z.d().pa();
  if(!/^[\s\xa0]*$/.test(c)) {
    _gaq.push(["_trackEvent", "Action", "Send plext"]), a(c), b.value = ""
  }
};
n.draw = function(a) {
  M(this.f, Qe, {hb:a});
  this.G.scrollTop = this.G.scrollHeight
};
n.append = function(a) {
  var b = ac(Qe, {hb:a});
  Xb(this.f, b);
  a.length > 1 && Zb(b)
};
function Se(a) {
  var b = document.getElementById("pl_status");
  a == 1 ? M(b, Oe) : a == 2 ? M(b, Pe) : b.innerHTML = ""
}
;
// Input 88
function Te(a, b) {
  this.H = a;
  this.h = b;
  this.la = new Re;
  this.k = "all";
  this.l = "viewport";
  this.n = {};
  this.Ha = {}
}
n = Te.prototype;
n.t = function() {
  var a = t(this.qd, this), b = t(this.pd, this), c = t(this.Wc, this), d = t(this.nd, this);
  this.la.t(a, b, c, d);
  B(Je, function(a) {
    this.n[a] = {};
    this.Ha[a] = {};
    B(Ke, function(b) {
      this.n[a][b] = new Ie;
      this.Ha[a][b] = 1
    }, this)
  }, this)
};
n.qd = function(a) {
  if(this.k != a) {
    this.k = a, Ue(this)
  }
};
n.pd = function(a) {
  if(this.l != a) {
    this.l = a, Ue(this)
  }
};
function Ue(a) {
  var b = a.n[a.k][a.l];
  b && a.la.draw(b.Qa());
  Se(a.Ha[a.k][a.l]);
  b.Oa ? a.reload(k) : a.refresh();
  _gaq.push(["_trackEvent", "Action", "Comm click", a.l + " " + a.k])
}
n.Wc = function() {
  var a = this.k, b = this.l;
  Ve(this, a, b, 1);
  We(this, t(this.Xb, this, a, b, k), a, b, j, this.n[a][b].f.length < 1 ? -1 : this.n[a][b].f[0].A)
};
n.nd = function(a) {
  var b = t(this.refresh, this), c = this.h.getCenter(), d = Math.floor(c.lat() * 1E6), e = Math.floor(c.lng() * 1E6), c = this.H, a = {message:a, latE6:d, lngE6:e};
  this.k == "faction" && (a.factionOnly = k);
  S(c, "dashboard.sendPlext", a, b, 5)
};
n.reload = function(a) {
  var b = this.k, c = this.l, d = t(this.od, this, b, c);
  a || B(Je, function(a) {
    this.n[a].viewport.Oa = k
  }, this);
  Ve(this, b, c, 1);
  We(this, d, b, c)
};
n.refresh = function() {
  var a = this.k, b = this.l;
  We(this, t(this.Xb, this, a, b, m), a, b, this.n[a][b].f.length < 1 ? -1 : this.n[a][b].f[this.n[a][b].f.length - 1].A)
};
function We(a, b, c, d, e, f) {
  c = c == "faction";
  if(d == "viewport") {
    var d = a.h, g = new qa;
    g.o = u();
    var h = {};
    h.sw = d.getBounds().getSouthWest();
    h.ne = d.getBounds().getNorthEast();
    g.bounds = h;
    d = g
  }else {
    d = j
  }
  a.H.Qa(b, 50, c, d, e, f)
}
n.od = function(a, b, c) {
  if("result" in c) {
    var d = this.n[a][b], c = He(c);
    Le(d, c);
    this.k == a && this.l == b && this.la.draw(c);
    Ve(this, a, b, 0)
  }else {
    Ve(this, a, b, 2)
  }
};
n.Xb = function(a, b, c, d) {
  if("result" in d) {
    var e = this.n[a][b], d = He(d);
    if(c) {
      if(d.length < 1) {
        e = []
      }else {
        if(e.f.length < 1) {
          Le(e, d)
        }else {
          for(var d = Me(d), f = e.f[0], g = -1, h = d.length - 1;h >= 0;h--) {
            var i = d[h];
            if(i.A < f.A) {
              break
            }
            if(i.a == f.a) {
              g = h;
              break
            }
          }
          g > -1 && d.splice(g, d.length - g);
          if(d.length > 0) {
            e.f = d.concat(e.f)
          }
        }
        e = d
      }
    }else {
      if(d.length < 1) {
        e = []
      }else {
        if(e.f.length < 1) {
          Le(e, d)
        }else {
          d = Me(d);
          f = e.f[e.f.length - 1];
          g = -1;
          for(h = 0;h < d.length;h++) {
            i = d[h];
            if(i.A > f.A) {
              break
            }
            if(i.a == f.a) {
              g = h;
              break
            }
          }
          g > -1 && d.splice(0, g + 1);
          if(d.length > 0) {
            e.f = e.f.concat(d)
          }
        }
        e = d
      }
    }
    if(this.k == a && this.l == b && e.length > 0) {
      if(c) {
        c = this.la;
        d = ac(Qe, {hb:e});
        if(c.f.firstElementChild != j) {
          f = c.f.firstElementChild
        }else {
          for(f = c.f.firstChild;f && f.nodeType != 1;) {
            f = f.nextSibling
          }
        }
        g = f ? f.offsetTop : 0;
        h = c.f;
        h.insertBefore(d, h.childNodes[0] || l);
        e.length > 1 && Zb(d);
        c.G.scrollTop = f ? c.G.scrollTop + f.offsetTop - g : c.G.scrollHeight
      }else {
        this.la.append(e)
      }
    }
    Ve(this, a, b, 0)
  }else {
    Ve(this, a, b, 2)
  }
};
function Ve(a, b, c, d) {
  a.Ha[b][c] = d;
  a.k == b && a.l == c && Se(d)
}
;
// Input 89
var Xe = 256;
function Ye(a) {
  return a * (Math.PI / 180)
}
function Ze(a) {
  this.z = a;
  this.Ob = new google.maps.Point(this.z / 2, this.z / 2);
  this.Pb = this.z / 360;
  this.Qb = this.z / (2 * Math.PI);
  this.R = 1 << ZOOM_LEVEL - (this.z / Xe - 1)
}
function $e(a) {
  for(var b = [], c = ZOOM_LEVEL;c > 0;c--) {
    var d = 0, e = 1 << c - 1;
    (a.x & e) != 0 && d++;
    (a.y & e) != 0 && (d++, d++);
    b.push(d)
  }
  return b.join("")
}
Ze.prototype.fromLatLngToPoint = function(a, b) {
  var c = b || new google.maps.Point(0, 0), d = this.Ob;
  c.x = d.x + a.lng() * this.Pb;
  var e;
  e = Math.sin(Ye(a.lat()));
  -0.9999 != l && (e = Math.max(e, -0.9999));
  0.9999 != l && (e = Math.min(e, 0.9999));
  c.y = d.y + 0.5 * Math.log((1 + e) / (1 - e)) * -this.Qb;
  return c
};
Ze.prototype.fromPointToLatLng = function(a) {
  var b = this.Ob;
  return new google.maps.LatLng((2 * Math.atan(Math.exp((a.y - b.y) / -this.Qb)) - Math.PI / 2) / (Math.PI / 180), (a.x - b.x) / this.Pb)
};
function af(a, b) {
  return new google.maps.Point(b.x * a.z / a.R, b.y * a.z / a.R)
}
function bf(a, b) {
  var c = new google.maps.Point(b.x, b.y + 1), d = new google.maps.Point(b.x + 1, b.y), c = a.fromPointToLatLng(af(a, c)), d = a.fromPointToLatLng(af(a, d)), e = {};
  e.sw = c;
  e.ne = d;
  return e
}
function cf(a, b) {
  return new google.maps.Point(Math.floor(b.x / a.z), Math.floor(b.y / a.z))
}
;
// Input 90
function Z() {
  this.Bb = new re;
  this.Uc = new td;
  this.eb = new Kc;
  this.Rb = new he;
  this.Ka = 0
}
ba(Z);
function df(a) {
  var b, c, d;
  bb(MAP_PARAMS) ? (b = +ve("lat") || 25, c = +ve("lng") || 0, d = +ve("zoom") || 2) : (b = cb("lat_e6", 25E6) / 1E6, c = cb("lng_e6", 0) / 1E6, d = cb("zoom_level", 2));
  ZOOM_LEVEL = d;
  d = {mapTypeId:google.maps.MapTypeId.ROADMAP, minZoom:1, panControl:m, styles:xd, zoom:d, streetViewControlOptions:{position:google.maps.ControlPosition.RIGHT_CENTER}, zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_CENTER}};
  b = new google.maps.LatLng(b, c);
  a.h = new google.maps.Map(document.getElementById("map_canvas"), d);
  a.h.setCenter(b);
  a.xa = new ee(a.h);
  a.gb = new Te(hd(), a.h);
  a.gb.t();
  na(x.d(), t(a.Rb.draw, a.Rb));
  na(x.d(), t(a.xa.Ab, a.xa));
  google.maps.event.addListener(a.h, "idle", t(a.Yc, a));
  google.maps.event.addListener(a.h, "dragend", function() {
    _gaq.push(["_trackEvent", "Map", "pan"])
  })
}
Z.prototype.Yc = function() {
  var a = this.h.getCenter(), b = this.h.getZoom();
  ue("lat", "" + a.lat());
  ue("lng", "" + a.lng());
  ue("zoom", "" + b);
  fe(k);
  this.pa();
  this.Jb && window.clearTimeout(this.Jb);
  ZOOM_LEVEL = b;
  x.d().update(b);
  this.Jb = window.setTimeout(t(this.W, this, k), 1E3)
};
Z.prototype.W = function(a) {
  if(this.Ka + 3E5 > u()) {
    fe(k);
    var b = this.h, c = b.getBounds(), d = c.getNorthEast();
    Math.round(d.lat() * 1E6);
    Math.round(d.lng() * 1E6);
    c = c.getSouthWest();
    Math.round(c.lat() * 1E6);
    Math.round(c.lng() * 1E6);
    for(var b = b.getCenter().lat(), b = Math.round(256 * 0.9999 * Math.abs(1 / Math.cos(Ye(b)))), b = new Ze(b), d = b.fromLatLngToPoint(d, l), d = new google.maps.Point(d.x * b.R, d.y * b.R), d = cf(b, d), c = b.fromLatLngToPoint(c, l), c = new google.maps.Point(c.x * b.R, c.y * b.R), e = cf(b, c), c = Math.abs(e.x - d.x), e = Math.abs(e.y - d.y), f = [], g = 0;g <= c;g++) {
      var h = Math.abs(d.x - g), i = d.y, p = {}, i = new google.maps.Point(h, i), q = $e(i);
      p.bounds = bf(b, i);
      p.quadkey = q;
      f.push(p);
      for(var o = 1;o <= e;o++) {
        i = d.y + o, p = {}, i = new google.maps.Point(h, i), q = $e(i), p.bounds = bf(b, i), p.quadkey = q, f.push(p)
      }
    }
    nd(T.d(), f, t(this.xa.Ab, this.xa));
    a ? this.gb.reload() : this.gb.refresh();
    this.Yb && window.clearTimeout(this.Yb);
    this.Yb = window.setTimeout(t(this.W, this, m), 12E4)
  }else {
    a = document.getElementById("butterbar"), a.style.display = "", I(a, "click", t(this.pa, this))
  }
};
v("redeem", function() {
  var a = document.getElementById("passcode"), b = a.value;
  Z.d().pa();
  if(!/^[\s\xa0]*$/.test(b)) {
    var c = Z.d();
    document.getElementById("redeem_error").innerHTML = "";
    document.getElementById("redeemed_rewards").innerHTML = "";
    c = t(c.eb.Nc, c.eb);
    S(hd(), "dashboard.redeemReward", {passcode:b}, c)
  }
  ef(m);
  a.value = "";
  _gaq.push(["_trackEvent", "Action", "Passcode attempt"])
});
function ef(a) {
  var b = document.getElementById("redeem_reward");
  a ? K(b, "show_box") : L(b, "show_box");
  b = document.getElementById("passcode");
  a ? b.focus() : b.blur()
}
v("showpi", ef);
v("initialize", function() {
  xe();
  var a = Z.d(), b = t(a.Bb.draw, a.Bb);
  S(hd(), "dashboard.getGameScore", {}, b);
  a.Uc.t();
  if(PLAYER && "nickname" in PLAYER) {
    var b = a.eb, c = Ec(PLAYER), d = document.getElementById("player_stats");
    if(d) {
      b.fb = d;
      M(b.fb, sc, {g:c});
      if(c = document.getElementById("player_ap_icon")) {
        I(c, "touchstart", t(b.rd, b)), I(c, "mouseover", t(b.nb, b, k)), I(c, "mouseout", t(b.nb, b, m))
      }
      (c = document.getElementById("ap")) && I(c, "touchstart", t(b.nb, b, m))
    }
    M(document.getElementById("redeem_reward"), tc, {})
  }
  df(a);
  a.Ka = u()
});
Z.prototype.pa = function() {
  var a = this.Ka + 3E5 > u();
  this.Ka = u();
  if(!a) {
    document.getElementById("butterbar").style.display = "none", this.W(m), _gaq.push(["_trackEvent", "Action", "Awake inactive client"])
  }
};
v("geocode", function() {
  var a = document.getElementById("address");
  a.blur();
  a = a.value;
  Z.d().pa();
  /^[\s\xa0]*$/.test(a) || (ma || (ma = new google.maps.Geocoder), ma.geocode({address:a}, function(a, c) {
    if(c == google.maps.GeocoderStatus.OK) {
      var d = a[0].geometry.viewport;
      Z.d().h.fitBounds(d);
      _gaq.push(["_trackEvent", "Map", "Search"])
    }else {
      _gaq.push(["_trackEvent", "Error", "geocode error", c])
    }
  }))
});
v("panto", function(a, b) {
  var c = new google.maps.LatLng(a, b);
  Z.d().h.panTo(c);
  oa() > 0 && Z.d().h.setZoom(16)
});
v("togglesb", function(a) {
  a.stopPropagation();
  Ub(a.currentTarget, "show_box")
});
// Input 91

