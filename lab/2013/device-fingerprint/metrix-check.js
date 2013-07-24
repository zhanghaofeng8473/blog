
function xx83(mimeType) {
  var xx133 = mimeType.constructor == String ? [mimeType] : mimeType;
  var xx84 = "false";
  var xx85 = "false";
  var xx17;
  for (xx17 = 0; xx17 < xx133.length; xx17++) {
    var xx135 = xx15[xx133[xx17]];
    if (xx135 && xx135.enabledPlugin) {
      var pluginSt = xx135.enabledPlugin;
      if (pluginSt.name) {xx84 = pluginSt.name;} else {xx84 = "true";}
      xx85 = pluginSt.description;
      break;
    }
  }
  return[xx84, xx85];
}

function xx107() {
  var xx137 = "false";
  var xx136 = xx83(['application/x-shockwave-flash', 'application/futuresplash']);
  var xx84 = xx136[0];
  var xx85 = xx136[1];
  if (xx84 != "false" && xx84 != "true") {if ((/Flash/i).test(xx84)) {xx137 = "true";} }
  if (xx137 == "true" && xx85) {
    var xx138 = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(xx85);
    if (xx138) {xx137 = xx138[0];}
  }
  return xx137;
}

function xx108() {
  var xx137 = "false";
  var xx136 = xx83(["application/x-mplayer2", "application/asx"]);
  var xx84 = xx136[0];
  var xx85 = xx136[1];
  if (xx84 != "false" && xx84 != "true") {if ((/Windows.*Media.*Firefox Plugin.*/i).test(xx84)) {xx137 = "true";} }
  return xx137;
}

function xx109() {
  var xx137 = "false";
  var xx136 = xx83(["application/pdf"]);
  var xx84 = xx136[0];
  var xx85 = xx136[1];
  if (xx84 != "false" && xx84 != "true") {if ((/Adobe Acrobat/i).test(xx84)) {xx137 = "true";} }
  if (xx137 == "true" && xx85) {
    var xx138 = /[\d][\d\.\_,-]*/.exec(xx85);
    if (xx138) {xx137 = xx138[0];} else {xx137 = "8.0/later";}
  }
  return xx137;
}

function xx110() {
  var xx137 = "false";
  var xx136 = xx83(["application/x-silverlight"]);
  var xx84 = xx136[0];
  var xx85 = xx136[1];
  if (xx84 != "false" && xx84 != "true") {if ((/Silverlight Plug-in/i).test(xx84)) {xx137 = "true";} }
  if (xx137 == "true" && xx85) {xx137 = xx85;}
  return xx137;
}

function xx111() {
  var xx137 = "false";
  if (navigator.platform && (/linux/i).test(navigator.platform)) {xx137 = "false";} else {
    var xx136 = xx83(['video/quicktime', 'application/x-quicktimeplayer', 'image/x-macpaint', 'image/x-quicktime']);
    var xx84 = xx136[0];
    var xx85 = xx136[1];
    if (xx84 != "false" && xx84 != "true") {
      if ((/QuickTime.*(Plug-in|Plugin).*/i).test(xx84)) {
        xx137 = "true";
        var xx138 = /[\d][\d\.\_,-]*/.exec(xx84);
        if (xx138) {xx137 = xx138[0];}
      }
    }
  }
  return xx137;
}

function xx112() {
  var xx137 = "false";
  var xx136 = xx83(["application/x-director"]);
  var xx84 = xx136[0];
  var xx85 = xx136[1];
  if (xx84 != "false" && xx84 != "true") {if ((/Shockwave for Director/i).test(xx84)) {xx137 = "true";} }
  if (xx137 == "true" && xx85) {
    var xx138 = /[\d][\d\.\_,-]*/.exec(xx85);
    if (xx138) {xx137 = xx138[0];}
  }
  return xx137;
}
function xx113() {
  var xx137 = "false";
  var xx136 = xx83(["application/vnd.rn-realplayer-javascript"]);
  var xx84 = xx136[0];
  var xx85 = xx136[1];
  if (xx84 != "false" && xx84 != "true") {if ((/RealPlayer.*Version.*/i).test(xx84)) {xx137 = "true";} }
  if (xx137 == "true" && xx85) {
    var xx138 = /[\d][\d\.\_,-]*/.exec(xx85);
    if (xx138) {xx137 = xx138[0];} else {xx137 = "5.0";}
  }
  return xx137;
}

function xx114() {
  var xx137 = "false";
  var xx136 = xx83(["application/x-vlc-plugin"]);
  var xx84 = xx136[0];
  var xx85 = xx136[1];
  if (xx84 != "false" && xx84 != "true") {if ((/VLC.*(Plug-in|Plugin).*/i).test(xx84)) {xx137 = "true";} }
  if (xx137 == "true" && xx85) {
    var xx138 = /(Version)([\d][\d\.]*[a-z]*)/.exec(xx85);
    if (xx138) {xx137 = xx138[2];}
  }
  return xx137;
}

function xx115() {
  var xx137 = "false";
  var xx136 = xx83(["application/x-devalvrx"]);
  var xx84 = xx136[0];
  var xx85 = xx136[1];
  if (xx84 != "false" && xx84 != "true") {if ((/DevalVR/i).test(xx84)) {xx137 = "true";} }
  if (xx137 == "true" && xx85) {
    var xx138 = /(Plugin)([\d][\d\.\,]*)/.exec(xx85);
    if (xx138) {xx137 = xx138[2];}
  }
  return xx137;
}

function xx116() {
  var xx137 = "false";
  var versionInfo = xx83(["image/svg-xml", "image/svg+xml"]);
  var xx84 = versionInfo[0];
  var xx85 = versionInfo[1];
  if (xx84 != "false" && xx84 != "true") {if ((/SVG Viewer/i).test(xx84)) {xx137 = "true";} }
  if (xx137 == "true" && xx85) {
    var xx138 = /[\d][\d\.]*/.exec(xx85);
    if (xx138) {xx137 = xx138[0];}
  }
  return xx137;
}

function xx117() {
  var xx137 = "false";
  var versionInfo = xx83(["application/x-java-applet", "application/x-java-vm", "application/x-java-bean"]);
  var xx84 = versionInfo[0];
  var xx85 = versionInfo[1];
  if (xx84 != "false" && xx84 != "true") {if ((/Java/i).test(xx84)) {xx137 = "true";} }
  if (xx137 == "true" && xx85) {
    var xx138 = /[\d][\d\._]*/.exec(xx85);
    if (xx138) {xx137 = xx138[0];}
  }
  return xx137;
}

function newObject(xx140, xx141) {
  var xx139 = null, throwErr, pluginInstalled = false;
  try {
    xx139 = new ActiveXObject(xx140);
    pluginInstalled = true;
  } catch (throwErr) {}
  if (typeof xx141 != "undefined") {
    delete xx139;
    return pluginInstalled;
  }
  return xx139;
}

function xx118() {
  var progID = "ShockwaveFlash.ShockwaveFlash";
  var throwErr, versionNum, versionStr = null, xx139 = null, xx137 = null;
  var MAXIMUM_VERSION = 15;
  var MINIMUM_VERSION = 2;
  for (versionNum = MAXIMUM_VERSION; versionNum > MINIMUM_VERSION; versionNum--) {
    xx139 = newObject(progID + "." + versionNum);
    if (xx139) {
      versionStr = versionNum.toString();
      break;
    }
  }
  if (versionStr == "6") {try {xx139.AllowScriptAccess = "always";} catch (throwErr) {xx137 = "6,0,21,0";} } else if (xx139) {
    try {
      xx137 = xx139.GetVariable("$xx137");
      var xx138 = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(xx137);
      if (xx138) {xx137 = xx138[0];} else {xx137 = "true";}
    } catch (throwErr) {xx137 = "true";}
  }
  if (!xx137 && versionStr) {xx137 = versionStr;}
  if (!xx137) {xx137 = "false";}
  return xx137;
}

function xx119() {
  var progID = "wmplayer.ocx";
  var xx137 = "false";
  var xx139 = null;
  xx139 = newObject(progID);
  if (xx139) {xx137 = xx139.versionInfo;}
  return xx137;
}

function xx120() {
  var progID = "PDF.pdfCtrl";
  var progID0 = "AcroPDF.PDF.1";
  var xx139 = null, versionNum;
  var xx137 = "false";
  xx139 = newObject(progID0);
  if (!xx139) {
    var MAXIMUM_VERSION = 10;
    var MINIMUM_VERSION = 1;
    for (versionNum = MAXIMUM_VERSION; versionNum > MINIMUM_VERSION; versionNum--) {
      xx139 = newObject(progID + "." + versionNum);
      if (xx139) {
        xx137 = xx137.toString();
        break;
      }
    }
    if (!xx139) {
      xx139 = newObject(progID + ".1");
      if (xx139) {xx137 = "4.0";}
    }
  } else {xx137 = "7.0/later";}
  return xx137;
}

function xx121() {
  var progID = "AgControl.AgControl";
  var digits = [9, 20, 9, 12, 31];
  var xx137 = "false", xx139 = null, f = false;
  xx139 = newObject(progID);
  var p = [1, 0, 1, 1, 1], l, k, o, i = function(d) {
    return(d < 10 ? "0" : "") + d.toString();
  }, m = function(q, d, s, t, r) {
    return(q + "." + d + "." + s + i(t) + i(r) + ".0");
  }, n = function(d, s) {
    var q, r = m((d == 0 ? s : p[0]), (d == 1 ? s : p[1]), (d == 2 ? s : p[2]), (d == 3 ? s : p[3]), (d == 4 ? s : p[4]));
    try {return xx139.IsVersionSupported(r);} catch (q) { }
    return false;
  };
  if (xx139 && (typeof xx139.IsVersionSupported != "undefined")) {
    xx137 = "true";
    for (l = 0; l < digits.length; l++) {
      o = p[l];
      for (k = o + (l == 0 ? 0 : 1); k <= digits[l]; k++) {
        if (n(l, k)) {
          f = true;
          p[l] = k;
        } else {break;}
      }
      if (!f) {break;}
    }
    if (f) {xx137 = m(p[0], p[1], p[2], p[3], p[4]);}
  }
  return xx137;
}

function xx122() {
  var progID = 'QuickTime.QuickTime';
  var throwErr, xx137 = "false";
  var xx139 = null;
  try {xx139 = newObject(progID);} catch (throwErr) {}
  if (xx139) {
    if (xx139.QuickTimeVersion) {
      xx137 = xx139.QuickTimeVersion.toString(16);
      xx137 = xx137.charAt(0) + "." + xx137.charAt(1) + "." + xx137.charAt(2);
    } else {xx137 = "true";}
  }
  return xx137;
}

function xx123() {
  var progID = "SWCtl.SWCtl";
  var xx137 = "false", xx139 = null, throwErr;
  {
    try {xx139 = newObject(progID).ShockwaveVersion("");} catch (throwErr) {}
    if (typeof xx139 == "string" && xx139.length > 0) {xx137 = xx139;} else {if (newObject(progID + ".8", 1)) {xx137 = "8";} else {if (newObject(progID + ".7", 1)) {xx137 = "7";} else {if (newObject(progID + ".1", 1)) {xx137 = "6";} }} }
  }
  return xx137;
}

function xx129(version1, version2) {
  if (version1 == "true" || version1 == "false")return false;
  if (version1 === "1.0.30226.2") {version1 = "2.0.30226.2";}
  var version1Arr = version1.split(".");
  while (version1Arr.length > 3) {version1Arr.pop();}
  while (version1Arr.length < 3) {version1Arr.push(0);}
  var version2Arr = version2.split(".");
  while (version2Arr.length > 3) {version2Arr.pop();}
  var num2, num1, index = 0;
  do {
    num2 = parseInt(version2Arr[index]);
    num1 = parseInt(version1Arr[index]);
    index++;
  } while (index < version2Arr.length && num2 === num1);
  if ((num2 <= num1) && !isNaN(num2)) {return true;}
  return false;
}

function xx130(xx137) {
  if (xx7 === "y3icx0v1" || xx7 === "qe1251lp" || xx7 === "z6psqp8h") {if (!(xx137 === "5.1.20125.0")) {return;} }
  var threshold = "3.0.40624.0";
  if (false == xx129(xx137, threshold)) {return;}
  if (navigator.platform && (/Mac/).test(navigator.platform)) {return;}
  if (document.all && navigator.appVersion && (/msie\s[678]\./i).test(navigator.appVersion)) {return;}
  threshold = "4.0.41108.0";
  if (navigator.userAgent && (/chrome/).test(navigator.userAgent.toLowerCase())) {if (false == xx129(xx137, threshold)) {return;} }
  var xx40 = document.createElement('div');
  xx40.id = 'sl_div';
  var text = "<object data=\"data:application/x-silverlight-2,\"type=\"application/x-silverlight-2\"width=\"2\"height=\"1\">";
  text += "<param name=\"source\"value=\"";
  text += xx1 + "/sl_fp.xap?org_id=" + xx7 + "&session_id=" + xx2 + "&sg=" + xx3 + "&w=" + xx4 + "\"/>";
  text += "<param name=\"background\"value=\"Transparent\"/>";
  text += "<param name=\"windowless\"value=\"true\"/>";
  text += "<param name=\"minRuntimeVersion\"value=\"3.0.40624.0\"/>";
  text += "<param name=\"autoUpgrade\"value=\"false\"/>";
  text += "</object>";
  xx40.innerHTML = text;
  document.body.appendChild(xx40);
}

function xx131() {
  var mimes = 0;
  var xx95;
  var xx96 = "false";
  var xx97 = "false";
  var xx98 = "false";
  var xx99 = "false";
  var xx100 = "false";
  var xx101 = "false";
  var xx102 = "false";
  var xx103 = "false";
  var xx104 = "false";
  var xx105 = "false";
  var xx106 = "false";
  if (xx15 && xx15.length)mimes = xx15.length;
  if (window.ActiveXObject) {
    xx96 = xx118();
    xx97 = xx119();
    xx98 = xx120();
    xx99 = xx121();
    xx100 = xx122();
    xx101 = xx123();
  } else if (mimes > 0) {
    xx96 = xx107();
    xx97 = xx108();
    xx98 = xx109();
    xx99 = xx110();
    xx100 = xx111();
    xx101 = xx112();
    xx102 = xx113();
    xx103 = xx114();
    xx104 = xx115();
    xx105 = xx116();
    xx106 = xx117();
  }
  xx130(xx99);
  xx95 = "plugin_flash^" + xx96 + "!";
  xx95 += "plugin_windows_media_player^" + xx97 + "!";
  xx95 += "plugin_adobe_acrobat^" + xx98 + "!";
  xx95 += "plugin_silverlight^" + xx99 + "!";
  xx95 += "plugin_quicktime^" + xx100 + "!";
  xx95 += "plugin_shockwave^" + xx101 + "!";
  xx95 += "plugin_realplayer^" + xx102 + "!";
  xx95 += "plugin_vlc_player^" + xx103 + "!";
  xx95 += "plugin_devalvr^" + xx104 + "!";
  xx95 += "plugin_svg_viewer^" + xx105 + "!";
  xx95 += "plugin_java^" + xx106;
  return xx95;
}

function xx37(url) {
  var xx39 = document.createElement('script');
  xx39.id = 'xx32';
  xx39.defer = true;
  xx39.onload = function() {
    return true
  };
  xx39.setAttribute('src', url);
  var xx40 = document.createElement('div');
  xx40.id = 'xx33';
  document.body.appendChild(xx40);
  document.getElementById('xx33').appendChild(xx39);
}

function xx55() {
  var xx57 = document.createElement('applet');
  xx57.id = 'xx31';
  xx57.defer = true;
  xx57.onload = function() {
    return true
  };
  xx57.codebase = xx1;
  xx57.code = "Japplet.class";
  xx57.width = "1";
  xx57.height = "1";
  var xx56 = document.createElement("param");
  xx56.name = "session_id";
  xx56.value = xx2;
  xx57.appendChild(xx56);
  var xx40 = document.createElement('div');
  xx40.id = 'xx33';
  document.body.appendChild(xx40);
  document.getElementById('xx33').appendChild(xx57);
}

function xx38() {
  var xx40 = document.createElement('iframe');
  xx40.id = 'ls_iframe';
  xx40.width = '0';
  xx40.height = '0';
  xx40.setAttribute('style', 'color:rgba(0,0,0,0);float:left;position:absolute;top:-200;left:-200;border:0px');
  var url = xx1 + "/ls_fp.html?org_id=" + xx7 + "&session_id=" + xx2;
  xx40.setAttribute('src', url);
  document.body.appendChild(xx40);
}

function xx53(encryptStr) {
  var realEncryptStr = encryptStr.length + "&" + encryptStr;
  var xx48 = "";
  var xx86 = "0123456789abcdef";
  for (var i = 0, x = 0; i < realEncryptStr.length; i++) {
    var encrypedVal = realEncryptStr.charCodeAt(i) ^ xx2.charCodeAt(x) & 10;
    if (++x == xx2.length) {x = 0;}
    xx48 += xx86.charAt((encrypedVal >> 4) & 15);
    xx48 += xx86.charAt(encrypedVal & 15);
  }
  return xx48;
}

var xx64 = function(s) {
  function xx65(s) {
    return xx66(xx67(xx68(s), s.length * 8));
  }

  function xx69(xx87) {
    var xx86 = "0123456789abcdef";
    var xx88 = "";
    var x;
    for (var i = 0; i < xx87.length; i++) {
      x = xx87.charCodeAt(i);
      xx88 += xx86.charAt((x >>> 4) & 0x0F) + xx86.charAt(x & 0x0F);
    }
    return xx88;
  }

  function str2rstr_utf8(xx87) {
    var xx88 = "";
    var i = -1;
    var x, y;
    while (++i < xx87.length) {
      x = xx87.charCodeAt(i);
      y = i + 1 < xx87.length ? xx87.charCodeAt(i + 1) : 0;
      if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
        x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
        i++;
      }
      if (x <= 0x7F)xx88 += String.fromCharCode(x); else if (x <= 0x7FF)xx88 += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F), 0x80 | (x & 0x3F)); else if (x <= 0xFFFF)xx88 += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F)); else if (x <= 0x1FFFFF)xx88 += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
    }
    return xx88;
  }

  function xx68(xx87) {
    var xx88 = Array(xx87.length >> 2);
    for (var i = 0; i < xx88.length; i++)xx88[i] = 0;
    for (var i = 0; i < xx87.length * 8; i += 8)xx88[i >> 5] |= (xx87.charCodeAt(i / 8) & 0xFF) << (i % 32);
    return xx88;
  }

  function xx66(xx87) {
    var xx88 = "";
    for (var i = 0; i < xx87.length * 32; i += 8)xx88 += String.fromCharCode((xx87[i >> 5] >>> (i % 32)) & 0xFF);
    return xx88;
  }

  function xx67(x, len) {
    x[len >> 5] |= 0x80 << ((len) % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
      var xx76 = a;
      var xx77 = b;
      var xx78 = c;
      var xx79 = d;
      a = xx72(a, b, c, d, x[i + 0], 7, -680876936);
      d = xx72(d, a, b, c, x[i + 1], 12, -389564586);
      c = xx72(c, d, a, b, x[i + 2], 17, 606105819);
      b = xx72(b, c, d, a, x[i + 3], 22, -1044525330);
      a = xx72(a, b, c, d, x[i + 4], 7, -176418897);
      d = xx72(d, a, b, c, x[i + 5], 12, 1200080426);
      c = xx72(c, d, a, b, x[i + 6], 17, -1473231341);
      b = xx72(b, c, d, a, x[i + 7], 22, -45705983);
      a = xx72(a, b, c, d, x[i + 8], 7, 1770035416);
      d = xx72(d, a, b, c, x[i + 9], 12, -1958414417);
      c = xx72(c, d, a, b, x[i + 10], 17, -42063);
      b = xx72(b, c, d, a, x[i + 11], 22, -1990404162);
      a = xx72(a, b, c, d, x[i + 12], 7, 1804603682);
      d = xx72(d, a, b, c, x[i + 13], 12, -40341101);
      c = xx72(c, d, a, b, x[i + 14], 17, -1502002290);
      b = xx72(b, c, d, a, x[i + 15], 22, 1236535329);
      a = xx73(a, b, c, d, x[i + 1], 5, -165796510);
      d = xx73(d, a, b, c, x[i + 6], 9, -1069501632);
      c = xx73(c, d, a, b, x[i + 11], 14, 643717713);
      b = xx73(b, c, d, a, x[i + 0], 20, -373897302);
      a = xx73(a, b, c, d, x[i + 5], 5, -701558691);
      d = xx73(d, a, b, c, x[i + 10], 9, 38016083);
      c = xx73(c, d, a, b, x[i + 15], 14, -660478335);
      b = xx73(b, c, d, a, x[i + 4], 20, -405537848);
      a = xx73(a, b, c, d, x[i + 9], 5, 568446438);
      d = xx73(d, a, b, c, x[i + 14], 9, -1019803690);
      c = xx73(c, d, a, b, x[i + 3], 14, -187363961);
      b = xx73(b, c, d, a, x[i + 8], 20, 1163531501);
      a = xx73(a, b, c, d, x[i + 13], 5, -1444681467);
      d = xx73(d, a, b, c, x[i + 2], 9, -51403784);
      c = xx73(c, d, a, b, x[i + 7], 14, 1735328473);
      b = xx73(b, c, d, a, x[i + 12], 20, -1926607734);
      a = xx74(a, b, c, d, x[i + 5], 4, -378558);
      d = xx74(d, a, b, c, x[i + 8], 11, -2022574463);
      c = xx74(c, d, a, b, x[i + 11], 16, 1839030562);
      b = xx74(b, c, d, a, x[i + 14], 23, -35309556);
      a = xx74(a, b, c, d, x[i + 1], 4, -1530992060);
      d = xx74(d, a, b, c, x[i + 4], 11, 1272893353);
      c = xx74(c, d, a, b, x[i + 7], 16, -155497632);
      b = xx74(b, c, d, a, x[i + 10], 23, -1094730640);
      a = xx74(a, b, c, d, x[i + 13], 4, 681279174);
      d = xx74(d, a, b, c, x[i + 0], 11, -358537222);
      c = xx74(c, d, a, b, x[i + 3], 16, -722521979);
      b = xx74(b, c, d, a, x[i + 6], 23, 76029189);
      a = xx74(a, b, c, d, x[i + 9], 4, -640364487);
      d = xx74(d, a, b, c, x[i + 12], 11, -421815835);
      c = xx74(c, d, a, b, x[i + 15], 16, 530742520);
      b = xx74(b, c, d, a, x[i + 2], 23, -995338651);
      a = xx75(a, b, c, d, x[i + 0], 6, -198630844);
      d = xx75(d, a, b, c, x[i + 7], 10, 1126891415);
      c = xx75(c, d, a, b, x[i + 14], 15, -1416354905);
      b = xx75(b, c, d, a, x[i + 5], 21, -57434055);
      a = xx75(a, b, c, d, x[i + 12], 6, 1700485571);
      d = xx75(d, a, b, c, x[i + 3], 10, -1894986606);
      c = xx75(c, d, a, b, x[i + 10], 15, -1051523);
      b = xx75(b, c, d, a, x[i + 1], 21, -2054922799);
      a = xx75(a, b, c, d, x[i + 8], 6, 1873313359);
      d = xx75(d, a, b, c, x[i + 15], 10, -30611744);
      c = xx75(c, d, a, b, x[i + 6], 15, -1560198380);
      b = xx75(b, c, d, a, x[i + 13], 21, 1309151649);
      a = xx75(a, b, c, d, x[i + 4], 6, -145523070);
      d = xx75(d, a, b, c, x[i + 11], 10, -1120210379);
      c = xx75(c, d, a, b, x[i + 2], 15, 718787259);
      b = xx75(b, c, d, a, x[i + 9], 21, -343485551);
      a = xx80(a, xx76);
      b = xx80(b, xx77);
      c = xx80(c, xx78);
      d = xx80(d, xx79);
    }
    return Array(a, b, c, d);
  }

  function xx71(q, a, b, x, s, t) {
    return xx80(xx81(xx80(xx80(a, q), xx80(x, t)), s), b);
  }

  function xx72(a, b, c, d, x, s, t) {
    return xx71((b & c) | ((~b) & d), a, b, x, s, t);
  }

  function xx73(a, b, c, d, x, s, t) {
    return xx71((b & d) | (c & (~d)), a, b, x, s, t);
  }

  function xx74(a, b, c, d, x, s, t) {
    return xx71(b ^ c ^ d, a, b, x, s, t);
  }

  function xx75(a, b, c, d, x, s, t) {
    return xx71(c ^ (b | (~d)), a, b, x, s, t);
  }

  function xx80(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return((msw << 16) | (lsw & 0xFFFF));
  }

  function xx81(num, cnt) {
    return((num << cnt) | (num >>> (32 - cnt)));
  }

  return xx69(xx65(str2rstr_utf8(s)));
};
function xx43() {
  var xx94 = 255;
  var xx21 = new Date();
  xx21.setDate(1);
  xx21.setMonth(5);
  var xx46 = -xx21.getTimezoneOffset();
  xx21.setMonth(11);
  var xx47 = -xx21.getTimezoneOffset();
  var xx29 = Math.min(xx46, xx47);
  var dst_offset = Math.max(xx46, xx47) - xx29;
  var xx92 = navigator.userAgent ? "&jb=" + xx53("lq=" + encodeURIComponent(navigator.userAgent)) : "";
  var xx91 = xx15 ? xx15.length : 0;
  var xx63 = [];
  for (var i = 0; i < xx91; i++) {xx63[i] = xx15[i].type;}
  var xx93 = xx91 > 0 ? "&mt=" + xx64(xx63.join()) + "&mn=" + xx91 : "";
  var xx51 = xx1 + "/clear.png?org_id=" + xx7 + "&session=" + xx2;
  var xx54 = "";
  if (xx4 != null) {xx54 += "&w=" + xx4;}
  var xx148 = 1;
  if (window.devicePixelRatio) {xx148 = window.devicePixelRatio;}
  var xx149 = screen.width * xx148;
  var xx150 = screen.height * xx148;
  xx54 += "&c=" + xx29 + "&z=" + dst_offset + "&f=" + xx149 + "x" + xx150 + xx93;
  xx54 += "&lh=" + encodeURIComponent(location.href.substring(0, xx94));
  xx54 += "&dr=" + encodeURIComponent(document.referrer.substring(0, xx94));
  var pgs = xx131();
  if (pgs != null) {xx54 += "&p=" + pgs;}
  var xx22 = navigator.plugins;
  if (xx22.length) {
    var number = xx22.length;
    xx54 += "&pl=" + number;
    var xx90;
    for (var i = 0; i < number; i++) {xx90 += xx22[i].name + xx22[i].description + xx22[i].filename + xx22[i].length;}
    xx54 += "&ph=" + xx64(xx90);
  }
  xx54 += "&hh=" + xx64(xx7 + xx2);
  xx51 += "&ja=" + xx53(xx54) + xx92;
  xx37(xx51);
  xx38();
  if (xx5 == 1) {xx55();}
}
var xx15 = navigator.mimeTypes;
if (document.readyState == "complete" || document.readyState == "loaded") {xx43();} else {
  if (typeof window.addEventListener != "undefined") {window.addEventListener("load", xx43, false);} else if (typeof window.attachEvent != "undefined") {window.attachEvent("onload", xx43);} else {
    if (window.onload != null) {
      var xx44 = window.onload;
      window.onload = function() {
        xx44();
        xx43();
      };
    } else {window.onload = xx43;}
  }
} 