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
  ,stdout: function() {}
  ,argv: []
};

stat = {
  isDirectory: function() {}
  ,isFile: function() {}
};

fs = {
  stat: function() {}
  ,statSync: function() {}
  ,readdir: function() {}
  ,readdirSync: function() {}
  ,readFile: function() {}
  ,readFileSync: function() {}
  ,writeFile: function() {}
  ,writeFileSync: function() {}
  ,mkdir: function() {}
  ,mkdirSync: function() {}
  ,unlink: function() {}
  ,unlinkSync: function() {}
  ,rmdir: function() {}
  ,rmdirSync: function() {}
  ,realpath: function() {}
  ,realpathSync: function() {}
};

path = {
  dirname: function() {}
  ,basename: function() {}
  ,existsSync: function() {}
  ,extname: function() {}
};

vm = {
  runInNewContext: function() {}
};

document = {
  createWindow: function() {}
};

assert = {
  ok: function() {}
};


var FileReader = function() {};
FileReader.prototype.readAsDataURL = function() {};
FileReader.prototype.onload = function() {};

res = {
  on: function() {}
};

events = {
  EventEmitter: function() {}
};

util = {
  inherits: function() {}
};

assert['throws'] = function() {};

request = {
  socket: {
    setTimeout: function() {}
  }
};
