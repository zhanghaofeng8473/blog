var S = KISSY,
    noop = function() {
    };

window.console = {
    log: noop,
    warn: noop,
    info: noop,
    dir: noop
};

// Boolean Number String Function Array Date RegExp Object
S = {
    isBoolean: noop,
    isNumber: noop,
    isString: noop,
    isFunction: noop,
    isArray: noop,
    isDate: noop,
    isRegExp: noop,
    isObject: noop
};

S.UA = {
    ie: 0,
    gecko: 0,
    webkit: 0
};

S.DOM = {
    viewportWidth: noop,
    viewportHeight: noop,
    docHeight: noop,
    docWidth: noop
};

S.Node = {
    appendTo: noop,
    append: noop,
    prepend: noop,
    prependTo: noop
};


// for nodejs

process = {
  cwd: function() {}
  ,exit: function() {}
  ,argv: []
};

stat = {
  isDirectory: function() {}
  ,isFile: function() {}
};

fs = {
  statSync: function() {}
  ,readdirSync: function() {}
  ,readFileSync: function() {}
  ,writeFileSync: function() {}
};

path = {
  dirname: function() {}
  ,basename: function() {}
  ,existsSync: function() {}
  ,extname: function() {}
};
