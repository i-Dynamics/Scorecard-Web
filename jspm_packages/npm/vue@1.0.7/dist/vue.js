/* */ 
"format cjs";
(function(process) {
  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
      module.exports = factory();
    else if (typeof define === 'function' && define.amd)
      define([], factory);
    else if (typeof exports === 'object')
      exports["Vue"] = factory();
    else
      root["Vue"] = factory();
  })(this, function() {
    return (function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId])
          return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
          exports: {},
          id: moduleId,
          loaded: false
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.loaded = true;
        return module.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.p = "";
      return __webpack_require__(0);
    })([function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var extend = _.extend;
      function Vue(options) {
        this._init(options);
      }
      extend(Vue, __webpack_require__(13));
      Vue.options = {
        replace: true,
        directives: __webpack_require__(16),
        elementDirectives: __webpack_require__(50),
        filters: __webpack_require__(53),
        transitions: {},
        components: {},
        partials: {}
      };
      var p = Vue.prototype;
      Object.defineProperty(p, '$data', {
        get: function() {
          return this._data;
        },
        set: function(newData) {
          if (newData !== this._data) {
            this._setData(newData);
          }
        }
      });
      extend(p, __webpack_require__(55));
      extend(p, __webpack_require__(56));
      extend(p, __webpack_require__(57));
      extend(p, __webpack_require__(60));
      extend(p, __webpack_require__(62));
      extend(p, __webpack_require__(63));
      extend(p, __webpack_require__(64));
      extend(p, __webpack_require__(65));
      extend(p, __webpack_require__(66));
      Vue.version = '1.0.7';
      module.exports = _.Vue = Vue;
      if (true) {
        if (_.inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
          window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init', Vue);
        }
      }
    }, function(module, exports, __webpack_require__) {
      var lang = __webpack_require__(2);
      var extend = lang.extend;
      extend(exports, lang);
      extend(exports, __webpack_require__(3));
      extend(exports, __webpack_require__(4));
      extend(exports, __webpack_require__(10));
      extend(exports, __webpack_require__(11));
      extend(exports, __webpack_require__(12));
    }, function(module, exports) {
      exports.set = function set(obj, key, val) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = val;
          return;
        }
        if (obj._isVue) {
          set(obj._data, key, val);
          return;
        }
        var ob = obj.__ob__;
        if (!ob) {
          obj[key] = val;
          return;
        }
        ob.convert(key, val);
        ob.dep.notify();
        if (ob.vms) {
          var i = ob.vms.length;
          while (i--) {
            var vm = ob.vms[i];
            vm._proxy(key);
            vm._digest();
          }
        }
      };
      exports.delete = function(obj, key) {
        if (!obj.hasOwnProperty(key)) {
          return;
        }
        delete obj[key];
        var ob = obj.__ob__;
        if (!ob) {
          return;
        }
        ob.dep.notify();
        if (ob.vms) {
          var i = ob.vms.length;
          while (i--) {
            var vm = ob.vms[i];
            vm._unproxy(key);
            vm._digest();
          }
        }
      };
      var literalValueRE = /^\s?(true|false|[\d\.]+|'[^']*'|"[^"]*")\s?$/;
      exports.isLiteral = function(exp) {
        return literalValueRE.test(exp);
      };
      exports.isReserved = function(str) {
        var c = (str + '').charCodeAt(0);
        return c === 0x24 || c === 0x5F;
      };
      exports.toString = function(value) {
        return value == null ? '' : value.toString();
      };
      exports.toNumber = function(value) {
        if (typeof value !== 'string') {
          return value;
        } else {
          var parsed = Number(value);
          return isNaN(parsed) ? value : parsed;
        }
      };
      exports.toBoolean = function(value) {
        return value === 'true' ? true : value === 'false' ? false : value;
      };
      exports.stripQuotes = function(str) {
        var a = str.charCodeAt(0);
        var b = str.charCodeAt(str.length - 1);
        return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
      };
      var camelizeRE = /-(\w)/g;
      exports.camelize = function(str) {
        return str.replace(camelizeRE, toUpper);
      };
      function toUpper(_, c) {
        return c ? c.toUpperCase() : '';
      }
      var hyphenateRE = /([a-z\d])([A-Z])/g;
      exports.hyphenate = function(str) {
        return str.replace(hyphenateRE, '$1-$2').toLowerCase();
      };
      var classifyRE = /(?:^|[-_\/])(\w)/g;
      exports.classify = function(str) {
        return str.replace(classifyRE, toUpper);
      };
      exports.bind = function(fn, ctx) {
        return function(a) {
          var l = arguments.length;
          return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
        };
      };
      exports.toArray = function(list, start) {
        start = start || 0;
        var i = list.length - start;
        var ret = new Array(i);
        while (i--) {
          ret[i] = list[i + start];
        }
        return ret;
      };
      exports.extend = function(to, from) {
        var keys = Object.keys(from);
        var i = keys.length;
        while (i--) {
          to[keys[i]] = from[keys[i]];
        }
        return to;
      };
      exports.isObject = function(obj) {
        return obj !== null && typeof obj === 'object';
      };
      var toString = Object.prototype.toString;
      var OBJECT_STRING = '[object Object]';
      exports.isPlainObject = function(obj) {
        return toString.call(obj) === OBJECT_STRING;
      };
      exports.isArray = Array.isArray;
      exports.define = function(obj, key, val, enumerable) {
        Object.defineProperty(obj, key, {
          value: val,
          enumerable: !!enumerable,
          writable: true,
          configurable: true
        });
      };
      exports.debounce = function(func, wait) {
        var timeout,
            args,
            context,
            timestamp,
            result;
        var later = function() {
          var last = Date.now() - timestamp;
          if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
          } else {
            timeout = null;
            result = func.apply(context, args);
            if (!timeout)
              context = args = null;
          }
        };
        return function() {
          context = this;
          args = arguments;
          timestamp = Date.now();
          if (!timeout) {
            timeout = setTimeout(later, wait);
          }
          return result;
        };
      };
      exports.indexOf = function(arr, obj) {
        var i = arr.length;
        while (i--) {
          if (arr[i] === obj)
            return i;
        }
        return -1;
      };
      exports.cancellable = function(fn) {
        var cb = function() {
          if (!cb.cancelled) {
            return fn.apply(this, arguments);
          }
        };
        cb.cancel = function() {
          cb.cancelled = true;
        };
        return cb;
      };
      exports.looseEqual = function(a, b) {
        return a == b || (exports.isObject(a) && exports.isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
      };
    }, function(module, exports) {
      exports.hasProto = '__proto__' in {};
      var inBrowser = exports.inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
      exports.isIE9 = inBrowser && navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0;
      exports.isAndroid = inBrowser && navigator.userAgent.toLowerCase().indexOf('android') > 0;
      if (inBrowser && !exports.isIE9) {
        var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
        var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
        exports.transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
        exports.transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
        exports.animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
        exports.animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
      }
      exports.nextTick = (function() {
        var callbacks = [];
        var pending = false;
        var timerFunc;
        function nextTickHandler() {
          pending = false;
          var copies = callbacks.slice(0);
          callbacks = [];
          for (var i = 0; i < copies.length; i++) {
            copies[i]();
          }
        }
        if (typeof MutationObserver !== 'undefined') {
          var counter = 1;
          var observer = new MutationObserver(nextTickHandler);
          var textNode = document.createTextNode(counter);
          observer.observe(textNode, {characterData: true});
          timerFunc = function() {
            counter = (counter + 1) % 2;
            textNode.data = counter;
          };
        } else {
          timerFunc = setTimeout;
        }
        return function(cb, ctx) {
          var func = ctx ? function() {
            cb.call(ctx);
          } : cb;
          callbacks.push(func);
          if (pending)
            return;
          pending = true;
          timerFunc(nextTickHandler, 0);
        };
      })();
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var config = __webpack_require__(5);
      var transition = __webpack_require__(9);
      exports.query = function(el) {
        if (typeof el === 'string') {
          var selector = el;
          el = document.querySelector(el);
          if (!el) {
            ("development") !== 'production' && _.warn('Cannot find element: ' + selector);
          }
        }
        return el;
      };
      exports.inDoc = function(node) {
        var doc = document.documentElement;
        var parent = node && node.parentNode;
        return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && (doc.contains(parent)));
      };
      exports.attr = function(node, attr) {
        var val = node.getAttribute(attr);
        if (val !== null) {
          node.removeAttribute(attr);
        }
        return val;
      };
      exports.getBindAttr = function(node, name) {
        var val = exports.attr(node, ':' + name);
        if (val === null) {
          val = exports.attr(node, 'v-bind:' + name);
        }
        return val;
      };
      exports.before = function(el, target) {
        target.parentNode.insertBefore(el, target);
      };
      exports.after = function(el, target) {
        if (target.nextSibling) {
          exports.before(el, target.nextSibling);
        } else {
          target.parentNode.appendChild(el);
        }
      };
      exports.remove = function(el) {
        el.parentNode.removeChild(el);
      };
      exports.prepend = function(el, target) {
        if (target.firstChild) {
          exports.before(el, target.firstChild);
        } else {
          target.appendChild(el);
        }
      };
      exports.replace = function(target, el) {
        var parent = target.parentNode;
        if (parent) {
          parent.replaceChild(el, target);
        }
      };
      exports.on = function(el, event, cb) {
        el.addEventListener(event, cb);
      };
      exports.off = function(el, event, cb) {
        el.removeEventListener(event, cb);
      };
      exports.addClass = function(el, cls) {
        if (el.classList) {
          el.classList.add(cls);
        } else {
          var cur = ' ' + (el.getAttribute('class') || '') + ' ';
          if (cur.indexOf(' ' + cls + ' ') < 0) {
            el.setAttribute('class', (cur + cls).trim());
          }
        }
      };
      exports.removeClass = function(el, cls) {
        if (el.classList) {
          el.classList.remove(cls);
        } else {
          var cur = ' ' + (el.getAttribute('class') || '') + ' ';
          var tar = ' ' + cls + ' ';
          while (cur.indexOf(tar) >= 0) {
            cur = cur.replace(tar, ' ');
          }
          el.setAttribute('class', cur.trim());
        }
        if (!el.className) {
          el.removeAttribute('class');
        }
      };
      exports.extractContent = function(el, asFragment) {
        var child;
        var rawContent;
        if (exports.isTemplate(el) && el.content instanceof DocumentFragment) {
          el = el.content;
        }
        if (el.hasChildNodes()) {
          exports.trimNode(el);
          rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
          while (child = el.firstChild) {
            rawContent.appendChild(child);
          }
        }
        return rawContent;
      };
      exports.trimNode = function(node) {
        trim(node, node.firstChild);
        trim(node, node.lastChild);
      };
      function trim(parent, node) {
        if (node && node.nodeType === 3 && !node.data.trim()) {
          parent.removeChild(node);
        }
      }
      exports.isTemplate = function(el) {
        return el.tagName && el.tagName.toLowerCase() === 'template';
      };
      exports.createAnchor = function(content, persist) {
        return config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
      };
      var refRE = /^v-ref:/;
      exports.findRef = function(node) {
        if (node.hasAttributes()) {
          var attrs = node.attributes;
          for (var i = 0,
              l = attrs.length; i < l; i++) {
            var name = attrs[i].name;
            if (refRE.test(name)) {
              node.removeAttribute(name);
              return _.camelize(name.replace(refRE, ''));
            }
          }
        }
      };
      exports.mapNodeRange = function(node, end, op) {
        var next;
        while (node !== end) {
          next = node.nextSibling;
          op(node);
          node = next;
        }
        op(end);
      };
      exports.removeNodeRange = function(start, end, vm, frag, cb) {
        var done = false;
        var removed = 0;
        var nodes = [];
        exports.mapNodeRange(start, end, function(node) {
          if (node === end)
            done = true;
          nodes.push(node);
          transition.remove(node, vm, onRemoved);
        });
        function onRemoved() {
          removed++;
          if (done && removed >= nodes.length) {
            for (var i = 0; i < nodes.length; i++) {
              frag.appendChild(nodes[i]);
            }
            cb && cb();
          }
        }
      };
    }, function(module, exports, __webpack_require__) {
      module.exports = {
        debug: false,
        silent: false,
        async: true,
        warnExpressionErrors: true,
        _delimitersChanged: true,
        _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
        _propBindingModes: {
          ONE_WAY: 0,
          TWO_WAY: 1,
          ONE_TIME: 2
        },
        _maxUpdateCount: 100
      };
      var delimiters = ['{{', '}}'];
      var unsafeDelimiters = ['{{{', '}}}'];
      var textParser = __webpack_require__(6);
      Object.defineProperty(module.exports, 'delimiters', {
        get: function() {
          return delimiters;
        },
        set: function(val) {
          delimiters = val;
          textParser.compileRegex();
        }
      });
      Object.defineProperty(module.exports, 'unsafeDelimiters', {
        get: function() {
          return unsafeDelimiters;
        },
        set: function(val) {
          unsafeDelimiters = val;
          textParser.compileRegex();
        }
      });
    }, function(module, exports, __webpack_require__) {
      var Cache = __webpack_require__(7);
      var config = __webpack_require__(5);
      var dirParser = __webpack_require__(8);
      var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
      var cache,
          tagRE,
          htmlRE;
      function escapeRegex(str) {
        return str.replace(regexEscapeRE, '\\$&');
      }
      exports.compileRegex = function() {
        var open = escapeRegex(config.delimiters[0]);
        var close = escapeRegex(config.delimiters[1]);
        var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
        var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
        tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close, 'g');
        htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
        cache = new Cache(1000);
      };
      exports.parse = function(text) {
        if (!cache) {
          exports.compileRegex();
        }
        var hit = cache.get(text);
        if (hit) {
          return hit;
        }
        text = text.replace(/\n/g, '');
        if (!tagRE.test(text)) {
          return null;
        }
        var tokens = [];
        var lastIndex = tagRE.lastIndex = 0;
        var match,
            index,
            html,
            value,
            first,
            oneTime;
        while (match = tagRE.exec(text)) {
          index = match.index;
          if (index > lastIndex) {
            tokens.push({value: text.slice(lastIndex, index)});
          }
          html = htmlRE.test(match[0]);
          value = html ? match[1] : match[2];
          first = value.charCodeAt(0);
          oneTime = first === 42;
          value = oneTime ? value.slice(1) : value;
          tokens.push({
            tag: true,
            value: value.trim(),
            html: html,
            oneTime: oneTime
          });
          lastIndex = index + match[0].length;
        }
        if (lastIndex < text.length) {
          tokens.push({value: text.slice(lastIndex)});
        }
        cache.put(text, tokens);
        return tokens;
      };
      exports.tokensToExp = function(tokens) {
        if (tokens.length > 1) {
          return tokens.map(function(token) {
            return formatToken(token);
          }).join('+');
        } else {
          return formatToken(tokens[0], true);
        }
      };
      function formatToken(token, single) {
        return token.tag ? inlineFilters(token.value, single) : '"' + token.value + '"';
      }
      var filterRE = /[^|]\|[^|]/;
      function inlineFilters(exp, single) {
        if (!filterRE.test(exp)) {
          return single ? exp : '(' + exp + ')';
        } else {
          var dir = dirParser.parse(exp);
          if (!dir.filters) {
            return '(' + exp + ')';
          } else {
            return 'this._applyFilters(' + dir.expression + ',null,' + JSON.stringify(dir.filters) + ',false)';
          }
        }
      }
    }, function(module, exports) {
      function Cache(limit) {
        this.size = 0;
        this.limit = limit;
        this.head = this.tail = undefined;
        this._keymap = Object.create(null);
      }
      var p = Cache.prototype;
      p.put = function(key, value) {
        var entry = {
          key: key,
          value: value
        };
        this._keymap[key] = entry;
        if (this.tail) {
          this.tail.newer = entry;
          entry.older = this.tail;
        } else {
          this.head = entry;
        }
        this.tail = entry;
        if (this.size === this.limit) {
          return this.shift();
        } else {
          this.size++;
        }
      };
      p.shift = function() {
        var entry = this.head;
        if (entry) {
          this.head = this.head.newer;
          this.head.older = undefined;
          entry.newer = entry.older = undefined;
          this._keymap[entry.key] = undefined;
        }
        return entry;
      };
      p.get = function(key, returnEntry) {
        var entry = this._keymap[key];
        if (entry === undefined)
          return;
        if (entry === this.tail) {
          return returnEntry ? entry : entry.value;
        }
        if (entry.newer) {
          if (entry === this.head) {
            this.head = entry.newer;
          }
          entry.newer.older = entry.older;
        }
        if (entry.older) {
          entry.older.newer = entry.newer;
        }
        entry.newer = undefined;
        entry.older = this.tail;
        if (this.tail) {
          this.tail.newer = entry;
        }
        this.tail = entry;
        return returnEntry ? entry : entry.value;
      };
      module.exports = Cache;
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var Cache = __webpack_require__(7);
      var cache = new Cache(1000);
      var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
      var reservedArgRE = /^in$|^-?\d+/;
      var str,
          dir;
      var c,
          i,
          l,
          lastFilterIndex;
      var inSingle,
          inDouble,
          curly,
          square,
          paren;
      function pushFilter() {
        var exp = str.slice(lastFilterIndex, i).trim();
        var filter;
        if (exp) {
          filter = {};
          var tokens = exp.match(filterTokenRE);
          filter.name = tokens[0];
          if (tokens.length > 1) {
            filter.args = tokens.slice(1).map(processFilterArg);
          }
        }
        if (filter) {
          (dir.filters = dir.filters || []).push(filter);
        }
        lastFilterIndex = i + 1;
      }
      function processFilterArg(arg) {
        if (reservedArgRE.test(arg)) {
          return {
            value: _.toNumber(arg),
            dynamic: false
          };
        } else {
          var stripped = _.stripQuotes(arg);
          var dynamic = stripped === arg;
          return {
            value: dynamic ? arg : stripped,
            dynamic: dynamic
          };
        }
      }
      exports.parse = function(s) {
        var hit = cache.get(s);
        if (hit) {
          return hit;
        }
        str = s;
        inSingle = inDouble = false;
        curly = square = paren = 0;
        lastFilterIndex = 0;
        dir = {};
        for (i = 0, l = str.length; i < l; i++) {
          c = str.charCodeAt(i);
          if (inSingle) {
            if (c === 0x27)
              inSingle = !inSingle;
          } else if (inDouble) {
            if (c === 0x22)
              inDouble = !inDouble;
          } else if (c === 0x7C && str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
            if (dir.expression == null) {
              lastFilterIndex = i + 1;
              dir.expression = str.slice(0, i).trim();
            } else {
              pushFilter();
            }
          } else {
            switch (c) {
              case 0x22:
                inDouble = true;
                break;
              case 0x27:
                inSingle = true;
                break;
              case 0x28:
                paren++;
                break;
              case 0x29:
                paren--;
                break;
              case 0x5B:
                square++;
                break;
              case 0x5D:
                square--;
                break;
              case 0x7B:
                curly++;
                break;
              case 0x7D:
                curly--;
                break;
            }
          }
        }
        if (dir.expression == null) {
          dir.expression = str.slice(0, i).trim();
        } else if (lastFilterIndex !== 0) {
          pushFilter();
        }
        cache.put(s, dir);
        return dir;
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      exports.append = function(el, target, vm, cb) {
        apply(el, 1, function() {
          target.appendChild(el);
        }, vm, cb);
      };
      exports.before = function(el, target, vm, cb) {
        apply(el, 1, function() {
          _.before(el, target);
        }, vm, cb);
      };
      exports.remove = function(el, vm, cb) {
        apply(el, -1, function() {
          _.remove(el);
        }, vm, cb);
      };
      var apply = exports.apply = function(el, direction, op, vm, cb) {
        var transition = el.__v_trans;
        if (!transition || (!transition.hooks && !_.transitionEndEvent) || !vm._isCompiled || (vm.$parent && !vm.$parent._isCompiled)) {
          op();
          if (cb)
            cb();
          return;
        }
        var action = direction > 0 ? 'enter' : 'leave';
        transition[action](op, cb);
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var config = __webpack_require__(5);
      var extend = _.extend;
      var strats = config.optionMergeStrategies = Object.create(null);
      function mergeData(to, from) {
        var key,
            toVal,
            fromVal;
        for (key in from) {
          toVal = to[key];
          fromVal = from[key];
          if (!to.hasOwnProperty(key)) {
            _.set(to, key, fromVal);
          } else if (_.isObject(toVal) && _.isObject(fromVal)) {
            mergeData(toVal, fromVal);
          }
        }
        return to;
      }
      strats.data = function(parentVal, childVal, vm) {
        if (!vm) {
          if (!childVal) {
            return parentVal;
          }
          if (typeof childVal !== 'function') {
            ("development") !== 'production' && _.warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
            return parentVal;
          }
          if (!parentVal) {
            return childVal;
          }
          return function mergedDataFn() {
            return mergeData(childVal.call(this), parentVal.call(this));
          };
        } else if (parentVal || childVal) {
          return function mergedInstanceDataFn() {
            var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
            var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
            if (instanceData) {
              return mergeData(instanceData, defaultData);
            } else {
              return defaultData;
            }
          };
        }
      };
      strats.el = function(parentVal, childVal, vm) {
        if (!vm && childVal && typeof childVal !== 'function') {
          ("development") !== 'production' && _.warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
          return;
        }
        var ret = childVal || parentVal;
        return vm && typeof ret === 'function' ? ret.call(vm) : ret;
      };
      strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = function(parentVal, childVal) {
        return childVal ? parentVal ? parentVal.concat(childVal) : _.isArray(childVal) ? childVal : [childVal] : parentVal;
      };
      strats.paramAttributes = function() {
        ("development") !== 'production' && _.warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
      };
      function mergeAssets(parentVal, childVal) {
        var res = Object.create(parentVal);
        return childVal ? extend(res, guardArrayAssets(childVal)) : res;
      }
      config._assetTypes.forEach(function(type) {
        strats[type + 's'] = mergeAssets;
      });
      strats.watch = strats.events = function(parentVal, childVal) {
        if (!childVal)
          return parentVal;
        if (!parentVal)
          return childVal;
        var ret = {};
        extend(ret, parentVal);
        for (var key in childVal) {
          var parent = ret[key];
          var child = childVal[key];
          if (parent && !_.isArray(parent)) {
            parent = [parent];
          }
          ret[key] = parent ? parent.concat(child) : [child];
        }
        return ret;
      };
      strats.props = strats.methods = strats.computed = function(parentVal, childVal) {
        if (!childVal)
          return parentVal;
        if (!parentVal)
          return childVal;
        var ret = Object.create(null);
        extend(ret, parentVal);
        extend(ret, childVal);
        return ret;
      };
      var defaultStrat = function(parentVal, childVal) {
        return childVal === undefined ? parentVal : childVal;
      };
      function guardComponents(options) {
        if (options.components) {
          var components = options.components = guardArrayAssets(options.components);
          var def;
          var ids = Object.keys(components);
          for (var i = 0,
              l = ids.length; i < l; i++) {
            var key = ids[i];
            if (_.commonTagRE.test(key)) {
              ("development") !== 'production' && _.warn('Do not use built-in HTML elements as component ' + 'id: ' + key);
              continue;
            }
            def = components[key];
            if (_.isPlainObject(def)) {
              components[key] = _.Vue.extend(def);
            }
          }
        }
      }
      function guardProps(options) {
        var props = options.props;
        var i;
        if (_.isArray(props)) {
          options.props = {};
          i = props.length;
          while (i--) {
            options.props[props[i]] = null;
          }
        } else if (_.isPlainObject(props)) {
          var keys = Object.keys(props);
          i = keys.length;
          while (i--) {
            var val = props[keys[i]];
            if (typeof val === 'function') {
              props[keys[i]] = {type: val};
            }
          }
        }
      }
      function guardArrayAssets(assets) {
        if (_.isArray(assets)) {
          var res = {};
          var i = assets.length;
          var asset;
          while (i--) {
            asset = assets[i];
            var id = typeof asset === 'function' ? ((asset.options && asset.options.name) || asset.id) : (asset.name || asset.id);
            if (!id) {
              ("development") !== 'production' && _.warn('Array-syntax assets must provide a "name" or "id" field.');
            } else {
              res[id] = asset;
            }
          }
          return res;
        }
        return assets;
      }
      exports.mergeOptions = function merge(parent, child, vm) {
        guardComponents(child);
        guardProps(child);
        var options = {};
        var key;
        if (child.mixins) {
          for (var i = 0,
              l = child.mixins.length; i < l; i++) {
            parent = merge(parent, child.mixins[i], vm);
          }
        }
        for (key in parent) {
          mergeField(key);
        }
        for (key in child) {
          if (!(parent.hasOwnProperty(key))) {
            mergeField(key);
          }
        }
        function mergeField(key) {
          var strat = strats[key] || defaultStrat;
          options[key] = strat(parent[key], child[key], vm, key);
        }
        return options;
      };
      exports.resolveAsset = function resolve(options, type, id) {
        var assets = options[type];
        var camelizedId;
        return assets[id] || assets[camelizedId = _.camelize(id)] || assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      exports.commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/;
      exports.checkComponent = function(el, options) {
        var tag = el.tagName.toLowerCase();
        var hasAttrs = el.hasAttributes();
        if (!exports.commonTagRE.test(tag) && tag !== 'component') {
          if (_.resolveAsset(options, 'components', tag)) {
            return {id: tag};
          } else {
            var is = hasAttrs && getIsBinding(el);
            if (is) {
              return is;
            } else if (true) {
              if (tag.indexOf('-') > -1 || (/HTMLUnknownElement/.test(el.toString()) && !/^(data|time|rtc|rb)$/.test(tag))) {
                _.warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly?');
              }
            }
          }
        } else if (hasAttrs) {
          return getIsBinding(el);
        }
      };
      function getIsBinding(el) {
        var exp = _.attr(el, 'is');
        if (exp != null) {
          return {id: exp};
        } else {
          exp = _.getBindAttr(el, 'is');
          if (exp != null) {
            return {
              id: exp,
              dynamic: true
            };
          }
        }
      }
      exports.initProp = function(vm, prop, value) {
        if (exports.assertProp(prop, value)) {
          var key = prop.path;
          vm[key] = vm._data[key] = value;
        }
      };
      exports.assertProp = function(prop, value) {
        if (prop.raw === null && !prop.required) {
          return true;
        }
        var options = prop.options;
        var type = options.type;
        var valid = true;
        var expectedType;
        if (type) {
          if (type === String) {
            expectedType = 'string';
            valid = typeof value === expectedType;
          } else if (type === Number) {
            expectedType = 'number';
            valid = typeof value === 'number';
          } else if (type === Boolean) {
            expectedType = 'boolean';
            valid = typeof value === 'boolean';
          } else if (type === Function) {
            expectedType = 'function';
            valid = typeof value === 'function';
          } else if (type === Object) {
            expectedType = 'object';
            valid = _.isPlainObject(value);
          } else if (type === Array) {
            expectedType = 'array';
            valid = _.isArray(value);
          } else {
            valid = value instanceof type;
          }
        }
        if (!valid) {
          ("development") !== 'production' && _.warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
          return false;
        }
        var validator = options.validator;
        if (validator) {
          if (!validator.call(null, value)) {
            ("development") !== 'production' && _.warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
            return false;
          }
        }
        return true;
      };
      function formatType(val) {
        return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
      }
      function formatValue(val) {
        return Object.prototype.toString.call(val).slice(8, -1);
      }
    }, function(module, exports, __webpack_require__) {
      if (true) {
        var config = __webpack_require__(5);
        var hasConsole = typeof console !== 'undefined';
        exports.log = function(msg) {
          if (hasConsole && config.debug) {
            console.log('[Vue info]: ' + msg);
          }
        };
        exports.warn = function(msg, e) {
          if (hasConsole && (!config.silent || config.debug)) {
            console.warn('[Vue warn]: ' + msg);
            if (config.debug) {
              console.warn((e || new Error('Warning Stack Trace')).stack);
            }
          }
        };
        exports.assertAsset = function(val, type, id) {
          if (!val) {
            exports.warn('Failed to resolve ' + type + ': ' + id);
          }
        };
      }
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var config = __webpack_require__(5);
      exports.util = _;
      exports.config = config;
      exports.set = _.set;
      exports.delete = _.delete;
      exports.nextTick = _.nextTick;
      exports.compiler = __webpack_require__(14);
      exports.FragmentFactory = __webpack_require__(21);
      exports.internalDirectives = __webpack_require__(36);
      exports.parsers = {
        path: __webpack_require__(43),
        text: __webpack_require__(6),
        template: __webpack_require__(19),
        directive: __webpack_require__(8),
        expression: __webpack_require__(42)
      };
      exports.cid = 0;
      var cid = 1;
      exports.extend = function(extendOptions) {
        extendOptions = extendOptions || {};
        var Super = this;
        var isFirstExtend = Super.cid === 0;
        if (isFirstExtend && extendOptions._Ctor) {
          return extendOptions._Ctor;
        }
        var name = extendOptions.name || Super.options.name;
        var Sub = createClass(name || 'VueComponent');
        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.cid = cid++;
        Sub.options = _.mergeOptions(Super.options, extendOptions);
        Sub['super'] = Super;
        Sub.extend = Super.extend;
        config._assetTypes.forEach(function(type) {
          Sub[type] = Super[type];
        });
        if (name) {
          Sub.options.components[name] = Sub;
        }
        if (isFirstExtend) {
          extendOptions._Ctor = Sub;
        }
        return Sub;
      };
      function createClass(name) {
        return new Function('return function ' + _.classify(name) + ' (options) { this._init(options) }')();
      }
      exports.use = function(plugin) {
        if (plugin.installed) {
          return;
        }
        var args = _.toArray(arguments, 1);
        args.unshift(this);
        if (typeof plugin.install === 'function') {
          plugin.install.apply(plugin, args);
        } else {
          plugin.apply(null, args);
        }
        plugin.installed = true;
        return this;
      };
      exports.mixin = function(mixin) {
        var Vue = _.Vue;
        Vue.options = _.mergeOptions(Vue.options, mixin);
      };
      config._assetTypes.forEach(function(type) {
        exports[type] = function(id, definition) {
          if (!definition) {
            return this.options[type + 's'][id];
          } else {
            if (true) {
              if (type === 'component' && _.commonTagRE.test(id)) {
                _.warn('Do not use built-in HTML elements as component ' + 'id: ' + id);
              }
            }
            if (type === 'component' && _.isPlainObject(definition)) {
              definition.name = id;
              definition = _.Vue.extend(definition);
            }
            this.options[type + 's'][id] = definition;
            return definition;
          }
        };
      });
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      _.extend(exports, __webpack_require__(15));
      _.extend(exports, __webpack_require__(49));
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var publicDirectives = __webpack_require__(16);
      var internalDirectives = __webpack_require__(36);
      var compileProps = __webpack_require__(48);
      var textParser = __webpack_require__(6);
      var dirParser = __webpack_require__(8);
      var templateParser = __webpack_require__(19);
      var resolveAsset = _.resolveAsset;
      var bindRE = /^v-bind:|^:/;
      var onRE = /^v-on:|^@/;
      var argRE = /:(.*)$/;
      var modifierRE = /\.[^\.]+/g;
      var transitionRE = /^(v-bind:|:)?transition$/;
      var terminalDirectives = ['for', 'if'];
      var DEFAULT_PRIORITY = 1000;
      exports.compile = function(el, options, partial) {
        var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
        var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
        return function compositeLinkFn(vm, el, host, scope, frag) {
          var childNodes = _.toArray(el.childNodes);
          var dirs = linkAndCapture(function compositeLinkCapturer() {
            if (nodeLinkFn)
              nodeLinkFn(vm, el, host, scope, frag);
            if (childLinkFn)
              childLinkFn(vm, childNodes, host, scope, frag);
          }, vm);
          return makeUnlinkFn(vm, dirs);
        };
      };
      function linkAndCapture(linker, vm) {
        var originalDirCount = vm._directives.length;
        linker();
        var dirs = vm._directives.slice(originalDirCount);
        dirs.sort(directiveComparator);
        for (var i = 0,
            l = dirs.length; i < l; i++) {
          dirs[i]._bind();
        }
        return dirs;
      }
      function directiveComparator(a, b) {
        a = a.descriptor.def.priority || DEFAULT_PRIORITY;
        b = b.descriptor.def.priority || DEFAULT_PRIORITY;
        return a > b ? -1 : a === b ? 0 : 1;
      }
      function makeUnlinkFn(vm, dirs, context, contextDirs) {
        return function unlink(destroying) {
          teardownDirs(vm, dirs, destroying);
          if (context && contextDirs) {
            teardownDirs(context, contextDirs);
          }
        };
      }
      function teardownDirs(vm, dirs, destroying) {
        var i = dirs.length;
        while (i--) {
          dirs[i]._teardown();
          if (!destroying) {
            vm._directives.$remove(dirs[i]);
          }
        }
      }
      exports.compileAndLinkProps = function(vm, el, props, scope) {
        var propsLinkFn = compileProps(el, props);
        var propDirs = linkAndCapture(function() {
          propsLinkFn(vm, scope);
        }, vm);
        return makeUnlinkFn(vm, propDirs);
      };
      exports.compileRoot = function(el, options, contextOptions) {
        var containerAttrs = options._containerAttrs;
        var replacerAttrs = options._replacerAttrs;
        var contextLinkFn,
            replacerLinkFn;
        if (el.nodeType !== 11) {
          if (options._asComponent) {
            if (containerAttrs && contextOptions) {
              contextLinkFn = compileDirectives(containerAttrs, contextOptions);
            }
            if (replacerAttrs) {
              replacerLinkFn = compileDirectives(replacerAttrs, options);
            }
          } else {
            replacerLinkFn = compileDirectives(el.attributes, options);
          }
        } else if (("development") !== 'production' && containerAttrs) {
          var names = containerAttrs.filter(function(attr) {
            return attr.name.indexOf('_v-') < 0 && !onRE.test(attr.name) && attr.name !== 'slot';
          }).map(function(attr) {
            return '"' + attr.name + '"';
          });
          if (names.length) {
            var plural = names.length > 1;
            _.warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
          }
        }
        return function rootLinkFn(vm, el, scope) {
          var context = vm._context;
          var contextDirs;
          if (context && contextLinkFn) {
            contextDirs = linkAndCapture(function() {
              contextLinkFn(context, el, null, scope);
            }, context);
          }
          var selfDirs = linkAndCapture(function() {
            if (replacerLinkFn)
              replacerLinkFn(vm, el);
          }, vm);
          return makeUnlinkFn(vm, selfDirs, context, contextDirs);
        };
      };
      function compileNode(node, options) {
        var type = node.nodeType;
        if (type === 1 && node.tagName !== 'SCRIPT') {
          return compileElement(node, options);
        } else if (type === 3 && node.data.trim()) {
          return compileTextNode(node, options);
        } else {
          return null;
        }
      }
      function compileElement(el, options) {
        if (el.tagName === 'TEXTAREA') {
          var tokens = textParser.parse(el.value);
          if (tokens) {
            el.setAttribute(':value', textParser.tokensToExp(tokens));
            el.value = '';
          }
        }
        var linkFn;
        var hasAttrs = el.hasAttributes();
        if (hasAttrs) {
          linkFn = checkTerminalDirectives(el, options);
        }
        if (!linkFn) {
          linkFn = checkElementDirectives(el, options);
        }
        if (!linkFn) {
          linkFn = checkComponent(el, options);
        }
        if (!linkFn && hasAttrs) {
          linkFn = compileDirectives(el.attributes, options);
        }
        return linkFn;
      }
      function compileTextNode(node, options) {
        var tokens = textParser.parse(node.data);
        if (!tokens) {
          return null;
        }
        var frag = document.createDocumentFragment();
        var el,
            token;
        for (var i = 0,
            l = tokens.length; i < l; i++) {
          token = tokens[i];
          el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
          frag.appendChild(el);
        }
        return makeTextNodeLinkFn(tokens, frag, options);
      }
      function processTextToken(token, options) {
        var el;
        if (token.oneTime) {
          el = document.createTextNode(token.value);
        } else {
          if (token.html) {
            el = document.createComment('v-html');
            setTokenType('html');
          } else {
            el = document.createTextNode(' ');
            setTokenType('text');
          }
        }
        function setTokenType(type) {
          if (token.descriptor)
            return;
          var parsed = dirParser.parse(token.value);
          token.descriptor = {
            name: type,
            def: publicDirectives[type],
            expression: parsed.expression,
            filters: parsed.filters
          };
        }
        return el;
      }
      function makeTextNodeLinkFn(tokens, frag) {
        return function textNodeLinkFn(vm, el, host, scope) {
          var fragClone = frag.cloneNode(true);
          var childNodes = _.toArray(fragClone.childNodes);
          var token,
              value,
              node;
          for (var i = 0,
              l = tokens.length; i < l; i++) {
            token = tokens[i];
            value = token.value;
            if (token.tag) {
              node = childNodes[i];
              if (token.oneTime) {
                value = (scope || vm).$eval(value);
                if (token.html) {
                  _.replace(node, templateParser.parse(value, true));
                } else {
                  node.data = value;
                }
              } else {
                vm._bindDir(token.descriptor, node, host, scope);
              }
            }
          }
          _.replace(el, fragClone);
        };
      }
      function compileNodeList(nodeList, options) {
        var linkFns = [];
        var nodeLinkFn,
            childLinkFn,
            node;
        for (var i = 0,
            l = nodeList.length; i < l; i++) {
          node = nodeList[i];
          nodeLinkFn = compileNode(node, options);
          childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
          linkFns.push(nodeLinkFn, childLinkFn);
        }
        return linkFns.length ? makeChildLinkFn(linkFns) : null;
      }
      function makeChildLinkFn(linkFns) {
        return function childLinkFn(vm, nodes, host, scope, frag) {
          var node,
              nodeLinkFn,
              childrenLinkFn;
          for (var i = 0,
              n = 0,
              l = linkFns.length; i < l; n++) {
            node = nodes[n];
            nodeLinkFn = linkFns[i++];
            childrenLinkFn = linkFns[i++];
            var childNodes = _.toArray(node.childNodes);
            if (nodeLinkFn) {
              nodeLinkFn(vm, node, host, scope, frag);
            }
            if (childrenLinkFn) {
              childrenLinkFn(vm, childNodes, host, scope, frag);
            }
          }
        };
      }
      function checkElementDirectives(el, options) {
        var tag = el.tagName.toLowerCase();
        if (_.commonTagRE.test(tag))
          return;
        var def = resolveAsset(options, 'elementDirectives', tag);
        if (def) {
          return makeTerminalNodeLinkFn(el, tag, '', options, def);
        }
      }
      function checkComponent(el, options) {
        var component = _.checkComponent(el, options);
        if (component) {
          var ref = _.findRef(el);
          var descriptor = {
            name: 'component',
            ref: ref,
            expression: component.id,
            def: internalDirectives.component,
            modifiers: {literal: !component.dynamic}
          };
          var componentLinkFn = function(vm, el, host, scope, frag) {
            if (ref) {
              _.defineReactive((scope || vm).$refs, ref, null);
            }
            vm._bindDir(descriptor, el, host, scope, frag);
          };
          componentLinkFn.terminal = true;
          return componentLinkFn;
        }
      }
      function checkTerminalDirectives(el, options) {
        if (_.attr(el, 'v-pre') !== null) {
          return skip;
        }
        if (el.hasAttribute('v-else')) {
          var prev = el.previousElementSibling;
          if (prev && prev.hasAttribute('v-if')) {
            return skip;
          }
        }
        var value,
            dirName;
        for (var i = 0,
            l = terminalDirectives.length; i < l; i++) {
          dirName = terminalDirectives[i];
          if (value = el.getAttribute('v-' + dirName)) {
            return makeTerminalNodeLinkFn(el, dirName, value, options);
          }
        }
      }
      function skip() {}
      skip.terminal = true;
      function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
        var parsed = dirParser.parse(value);
        var descriptor = {
          name: dirName,
          expression: parsed.expression,
          filters: parsed.filters,
          raw: value,
          def: def || publicDirectives[dirName]
        };
        if (dirName === 'for' || dirName === 'router-view') {
          descriptor.ref = _.findRef(el);
        }
        var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
          if (descriptor.ref) {
            _.defineReactive((scope || vm).$refs, descriptor.ref, null);
          }
          vm._bindDir(descriptor, el, host, scope, frag);
        };
        fn.terminal = true;
        return fn;
      }
      function compileDirectives(attrs, options) {
        var i = attrs.length;
        var dirs = [];
        var attr,
            name,
            value,
            rawName,
            rawValue,
            dirName,
            arg,
            modifiers,
            dirDef,
            tokens;
        while (i--) {
          attr = attrs[i];
          name = rawName = attr.name;
          value = rawValue = attr.value;
          tokens = textParser.parse(value);
          arg = null;
          modifiers = parseModifiers(name);
          name = name.replace(modifierRE, '');
          if (tokens) {
            value = textParser.tokensToExp(tokens);
            arg = name;
            pushDir('bind', publicDirectives.bind, true);
            if (true) {
              if (name === 'class' && Array.prototype.some.call(attrs, function(attr) {
                return attr.name === ':class' || attr.name === 'v-bind:class';
              })) {
                _.warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');
              }
            }
          } else if (transitionRE.test(name)) {
            modifiers.literal = !bindRE.test(name);
            pushDir('transition', internalDirectives.transition);
          } else if (onRE.test(name)) {
            arg = name.replace(onRE, '');
            pushDir('on', publicDirectives.on);
          } else if (bindRE.test(name)) {
            dirName = name.replace(bindRE, '');
            if (dirName === 'style' || dirName === 'class') {
              pushDir(dirName, internalDirectives[dirName]);
            } else {
              arg = dirName;
              pushDir('bind', publicDirectives.bind);
            }
          } else if (name.indexOf('v-') === 0) {
            arg = (arg = name.match(argRE)) && arg[1];
            if (arg) {
              name = name.replace(argRE, '');
            }
            dirName = name.slice(2);
            if (dirName === 'else') {
              continue;
            }
            dirDef = resolveAsset(options, 'directives', dirName);
            if (true) {
              _.assertAsset(dirDef, 'directive', dirName);
            }
            if (dirDef) {
              pushDir(dirName, dirDef);
            }
          }
        }
        function pushDir(dirName, def, interp) {
          var parsed = dirParser.parse(value);
          dirs.push({
            name: dirName,
            attr: rawName,
            raw: rawValue,
            def: def,
            arg: arg,
            modifiers: modifiers,
            expression: parsed.expression,
            filters: parsed.filters,
            interp: interp
          });
        }
        if (dirs.length) {
          return makeNodeLinkFn(dirs);
        }
      }
      function parseModifiers(name) {
        var res = Object.create(null);
        var match = name.match(modifierRE);
        if (match) {
          var i = match.length;
          while (i--) {
            res[match[i].slice(1)] = true;
          }
        }
        return res;
      }
      function makeNodeLinkFn(directives) {
        return function nodeLinkFn(vm, el, host, scope, frag) {
          var i = directives.length;
          while (i--) {
            vm._bindDir(directives[i], el, host, scope, frag);
          }
        };
      }
    }, function(module, exports, __webpack_require__) {
      exports.text = __webpack_require__(17);
      exports.html = __webpack_require__(18);
      exports['for'] = __webpack_require__(20);
      exports['if'] = __webpack_require__(23);
      exports.show = __webpack_require__(24);
      exports.model = __webpack_require__(25);
      exports.on = __webpack_require__(30);
      exports.bind = __webpack_require__(31);
      exports.el = __webpack_require__(33);
      exports.ref = __webpack_require__(34);
      exports.cloak = __webpack_require__(35);
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      module.exports = {
        bind: function() {
          this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
        },
        update: function(value) {
          this.el[this.attr] = _.toString(value);
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var templateParser = __webpack_require__(19);
      module.exports = {
        bind: function() {
          if (this.el.nodeType === 8) {
            this.nodes = [];
            this.anchor = _.createAnchor('v-html');
            _.replace(this.el, this.anchor);
          }
        },
        update: function(value) {
          value = _.toString(value);
          if (this.nodes) {
            this.swap(value);
          } else {
            this.el.innerHTML = value;
          }
        },
        swap: function(value) {
          var i = this.nodes.length;
          while (i--) {
            _.remove(this.nodes[i]);
          }
          var frag = templateParser.parse(value, true, true);
          this.nodes = _.toArray(frag.childNodes);
          _.before(frag, this.anchor);
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var Cache = __webpack_require__(7);
      var templateCache = new Cache(1000);
      var idSelectorCache = new Cache(1000);
      var map = {
        _default: [0, '', ''],
        legend: [1, '<fieldset>', '</fieldset>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
      };
      map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
      map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
      map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
      map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
      function isRealTemplate(node) {
        return _.isTemplate(node) && node.content instanceof DocumentFragment;
      }
      var tagRE = /<([\w:]+)/;
      var entityRE = /&\w+;|&#\d+;|&#x[\dA-F]+;/;
      function stringToFragment(templateString) {
        var hit = templateCache.get(templateString);
        if (hit) {
          return hit;
        }
        var frag = document.createDocumentFragment();
        var tagMatch = templateString.match(tagRE);
        var entityMatch = entityRE.test(templateString);
        if (!tagMatch && !entityMatch) {
          frag.appendChild(document.createTextNode(templateString));
        } else {
          var tag = tagMatch && tagMatch[1];
          var wrap = map[tag] || map._default;
          var depth = wrap[0];
          var prefix = wrap[1];
          var suffix = wrap[2];
          var node = document.createElement('div');
          node.innerHTML = prefix + templateString.trim() + suffix;
          while (depth--) {
            node = node.lastChild;
          }
          var child;
          while (child = node.firstChild) {
            frag.appendChild(child);
          }
        }
        templateCache.put(templateString, frag);
        return frag;
      }
      function nodeToFragment(node) {
        if (isRealTemplate(node)) {
          _.trimNode(node.content);
          return node.content;
        }
        if (node.tagName === 'SCRIPT') {
          return stringToFragment(node.textContent);
        }
        var clone = exports.clone(node);
        var frag = document.createDocumentFragment();
        var child;
        while (child = clone.firstChild) {
          frag.appendChild(child);
        }
        _.trimNode(frag);
        return frag;
      }
      var hasBrokenTemplate = (function() {
        if (_.inBrowser) {
          var a = document.createElement('div');
          a.innerHTML = '<template>1</template>';
          return !a.cloneNode(true).firstChild.innerHTML;
        } else {
          return false;
        }
      })();
      var hasTextareaCloneBug = (function() {
        if (_.inBrowser) {
          var t = document.createElement('textarea');
          t.placeholder = 't';
          return t.cloneNode(true).value === 't';
        } else {
          return false;
        }
      })();
      exports.clone = function(node) {
        if (!node.querySelectorAll) {
          return node.cloneNode();
        }
        var res = node.cloneNode(true);
        var i,
            original,
            cloned;
        if (hasBrokenTemplate) {
          var clone = res;
          if (isRealTemplate(node)) {
            node = node.content;
            clone = res.content;
          }
          original = node.querySelectorAll('template');
          if (original.length) {
            cloned = clone.querySelectorAll('template');
            i = cloned.length;
            while (i--) {
              cloned[i].parentNode.replaceChild(exports.clone(original[i]), cloned[i]);
            }
          }
        }
        if (hasTextareaCloneBug) {
          if (node.tagName === 'TEXTAREA') {
            res.value = node.value;
          } else {
            original = node.querySelectorAll('textarea');
            if (original.length) {
              cloned = res.querySelectorAll('textarea');
              i = cloned.length;
              while (i--) {
                cloned[i].value = original[i].value;
              }
            }
          }
        }
        return res;
      };
      exports.parse = function(template, clone, noSelector) {
        var node,
            frag;
        if (template instanceof DocumentFragment) {
          _.trimNode(template);
          return clone ? exports.clone(template) : template;
        }
        if (typeof template === 'string') {
          if (!noSelector && template.charAt(0) === '#') {
            frag = idSelectorCache.get(template);
            if (!frag) {
              node = document.getElementById(template.slice(1));
              if (node) {
                frag = nodeToFragment(node);
                idSelectorCache.put(template, frag);
              }
            }
          } else {
            frag = stringToFragment(template);
          }
        } else if (template.nodeType) {
          frag = nodeToFragment(template);
        }
        return frag && clone ? exports.clone(frag) : frag;
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var FragmentFactory = __webpack_require__(21);
      var isObject = _.isObject;
      var uid = 0;
      module.exports = {
        priority: 2000,
        params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
        bind: function() {
          var inMatch = this.expression.match(/(.*) in (.*)/);
          if (inMatch) {
            var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
            if (itMatch) {
              this.iterator = itMatch[1].trim();
              this.alias = itMatch[2].trim();
            } else {
              this.alias = inMatch[1].trim();
            }
            this.expression = inMatch[2];
          }
          if (!this.alias) {
            ("development") !== 'production' && _.warn('Alias is required in v-for.');
            return;
          }
          this.id = '__v-for__' + (++uid);
          var tag = this.el.tagName;
          this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
          this.start = _.createAnchor('v-for-start');
          this.end = _.createAnchor('v-for-end');
          _.replace(this.el, this.end);
          _.before(this.start, this.end);
          this.cache = Object.create(null);
          this.factory = new FragmentFactory(this.vm, this.el);
        },
        update: function(data) {
          this.diff(data);
          this.updateRef();
          this.updateModel();
        },
        diff: function(data) {
          var item = data[0];
          var convertedFromObject = this.fromObject = isObject(item) && item.hasOwnProperty('$key') && item.hasOwnProperty('$value');
          var trackByKey = this.params.trackBy;
          var oldFrags = this.frags;
          var frags = this.frags = new Array(data.length);
          var alias = this.alias;
          var iterator = this.iterator;
          var start = this.start;
          var end = this.end;
          var inDoc = _.inDoc(start);
          var init = !oldFrags;
          var i,
              l,
              frag,
              key,
              value,
              primitive;
          for (i = 0, l = data.length; i < l; i++) {
            item = data[i];
            key = convertedFromObject ? item.$key : null;
            value = convertedFromObject ? item.$value : item;
            primitive = !isObject(value);
            frag = !init && this.getCachedFrag(value, i, key);
            if (frag) {
              frag.reused = true;
              frag.scope.$index = i;
              if (key) {
                frag.scope.$key = key;
              }
              if (iterator) {
                frag.scope[iterator] = key !== null ? key : i;
              }
              if (trackByKey || convertedFromObject || primitive) {
                frag.scope[alias] = value;
              }
            } else {
              frag = this.create(value, alias, i, key);
              frag.fresh = !init;
            }
            frags[i] = frag;
            if (init) {
              frag.before(end);
            }
          }
          if (init) {
            return;
          }
          var removalIndex = 0;
          var totalRemoved = oldFrags.length - frags.length;
          for (i = 0, l = oldFrags.length; i < l; i++) {
            frag = oldFrags[i];
            if (!frag.reused) {
              this.deleteCachedFrag(frag);
              this.remove(frag, removalIndex++, totalRemoved, inDoc);
            }
          }
          var targetPrev,
              prevEl,
              currentPrev;
          var insertionIndex = 0;
          for (i = 0, l = frags.length; i < l; i++) {
            frag = frags[i];
            targetPrev = frags[i - 1];
            prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
            if (frag.reused && !frag.staggerCb) {
              currentPrev = findPrevFrag(frag, start, this.id);
              if (currentPrev !== targetPrev) {
                this.move(frag, prevEl);
              }
            } else {
              this.insert(frag, insertionIndex++, prevEl, inDoc);
            }
            frag.reused = frag.fresh = false;
          }
        },
        create: function(value, alias, index, key) {
          var host = this._host;
          var parentScope = this._scope || this.vm;
          var scope = Object.create(parentScope);
          scope.$refs = Object.create(parentScope.$refs);
          scope.$els = Object.create(parentScope.$els);
          scope.$parent = parentScope;
          scope.$forContext = this;
          _.defineReactive(scope, alias, value);
          _.defineReactive(scope, '$index', index);
          if (key) {
            _.defineReactive(scope, '$key', key);
          } else if (scope.$key) {
            _.define(scope, '$key', null);
          }
          if (this.iterator) {
            _.defineReactive(scope, this.iterator, key !== null ? key : index);
          }
          var frag = this.factory.create(host, scope, this._frag);
          frag.forId = this.id;
          this.cacheFrag(value, frag, index, key);
          return frag;
        },
        updateRef: function() {
          var ref = this.descriptor.ref;
          if (!ref)
            return;
          var hash = (this._scope || this.vm).$refs;
          var refs;
          if (!this.fromObject) {
            refs = this.frags.map(findVmFromFrag);
          } else {
            refs = {};
            this.frags.forEach(function(frag) {
              refs[frag.scope.$key] = findVmFromFrag(frag);
            });
          }
          hash[ref] = refs;
        },
        updateModel: function() {
          if (this.isOption) {
            var parent = this.start.parentNode;
            var model = parent && parent.__v_model;
            if (model) {
              model.forceUpdate();
            }
          }
        },
        insert: function(frag, index, prevEl, inDoc) {
          if (frag.staggerCb) {
            frag.staggerCb.cancel();
            frag.staggerCb = null;
          }
          var staggerAmount = this.getStagger(frag, index, null, 'enter');
          if (inDoc && staggerAmount) {
            var anchor = frag.staggerAnchor;
            if (!anchor) {
              anchor = frag.staggerAnchor = _.createAnchor('stagger-anchor');
              anchor.__vfrag__ = frag;
            }
            _.after(anchor, prevEl);
            var op = frag.staggerCb = _.cancellable(function() {
              frag.staggerCb = null;
              frag.before(anchor);
              _.remove(anchor);
            });
            setTimeout(op, staggerAmount);
          } else {
            frag.before(prevEl.nextSibling);
          }
        },
        remove: function(frag, index, total, inDoc) {
          if (frag.staggerCb) {
            frag.staggerCb.cancel();
            frag.staggerCb = null;
            return;
          }
          var staggerAmount = this.getStagger(frag, index, total, 'leave');
          if (inDoc && staggerAmount) {
            var op = frag.staggerCb = _.cancellable(function() {
              frag.staggerCb = null;
              frag.remove();
            });
            setTimeout(op, staggerAmount);
          } else {
            frag.remove();
          }
        },
        move: function(frag, prevEl) {
          frag.before(prevEl.nextSibling, false);
        },
        cacheFrag: function(value, frag, index, key) {
          var trackByKey = this.params.trackBy;
          var cache = this.cache;
          var primitive = !isObject(value);
          var id;
          if (key || trackByKey || primitive) {
            id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : (key || value);
            if (!cache[id]) {
              cache[id] = frag;
            } else if (trackByKey !== '$index') {
              ("development") !== 'production' && this.warnDuplicate(value);
            }
          } else {
            id = this.id;
            if (value.hasOwnProperty(id)) {
              if (value[id] === null) {
                value[id] = frag;
              } else {
                ("development") !== 'production' && this.warnDuplicate(value);
              }
            } else {
              _.define(value, id, frag);
            }
          }
          frag.raw = value;
        },
        getCachedFrag: function(value, index, key) {
          var trackByKey = this.params.trackBy;
          var primitive = !isObject(value);
          var frag;
          if (key || trackByKey || primitive) {
            var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : (key || value);
            frag = this.cache[id];
          } else {
            frag = value[this.id];
          }
          if (frag && (frag.reused || frag.fresh)) {
            ("development") !== 'production' && this.warnDuplicate(value);
          }
          return frag;
        },
        deleteCachedFrag: function(frag) {
          var value = frag.raw;
          var trackByKey = this.params.trackBy;
          var scope = frag.scope;
          var index = scope.$index;
          var key = scope.hasOwnProperty('$key') && scope.$key;
          var primitive = !isObject(value);
          if (trackByKey || key || primitive) {
            var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : (key || value);
            this.cache[id] = null;
          } else {
            value[this.id] = null;
            frag.raw = null;
          }
        },
        getStagger: function(frag, index, total, type) {
          type = type + 'Stagger';
          var trans = frag.node.__v_trans;
          var hooks = trans && trans.hooks;
          var hook = hooks && (hooks[type] || hooks.stagger);
          return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
        },
        _preProcess: function(value) {
          this.rawValue = value;
          return value;
        },
        _postProcess: function(value) {
          if (_.isArray(value)) {
            return value;
          } else if (_.isPlainObject(value)) {
            var keys = Object.keys(value);
            var i = keys.length;
            var res = new Array(i);
            var key;
            while (i--) {
              key = keys[i];
              res[i] = {
                $key: key,
                $value: value[key]
              };
            }
            return res;
          } else {
            if (typeof value === 'number') {
              value = range(value);
            }
            return value || [];
          }
        },
        unbind: function() {
          if (this.descriptor.ref) {
            (this._scope || this.vm).$refs[this.descriptor.ref] = null;
          }
          if (this.frags) {
            var i = this.frags.length;
            var frag;
            while (i--) {
              frag = this.frags[i];
              this.deleteCachedFrag(frag);
              frag.destroy();
            }
          }
        }
      };
      function findPrevFrag(frag, anchor, id) {
        var el = frag.node.previousSibling;
        if (!el)
          return;
        frag = el.__vfrag__;
        while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
          el = el.previousSibling;
          if (!el)
            return;
          frag = el.__vfrag__;
        }
        return frag;
      }
      function findVmFromFrag(frag) {
        return frag.node.__vue__ || frag.node.nextSibling.__vue__;
      }
      function range(n) {
        var i = -1;
        var ret = new Array(n);
        while (++i < n) {
          ret[i] = i;
        }
        return ret;
      }
      if (true) {
        module.exports.warnDuplicate = function(value) {
          _.warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');
        };
      }
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var compiler = __webpack_require__(14);
      var templateParser = __webpack_require__(19);
      var Fragment = __webpack_require__(22);
      var Cache = __webpack_require__(7);
      var linkerCache = new Cache(5000);
      function FragmentFactory(vm, el) {
        this.vm = vm;
        var template;
        var isString = typeof el === 'string';
        if (isString || _.isTemplate(el)) {
          template = templateParser.parse(el, true);
        } else {
          template = document.createDocumentFragment();
          template.appendChild(el);
        }
        this.template = template;
        var linker;
        var cid = vm.constructor.cid;
        if (cid > 0) {
          var cacheId = cid + (isString ? el : el.outerHTML);
          linker = linkerCache.get(cacheId);
          if (!linker) {
            linker = compiler.compile(template, vm.$options, true);
            linkerCache.put(cacheId, linker);
          }
        } else {
          linker = compiler.compile(template, vm.$options, true);
        }
        this.linker = linker;
      }
      FragmentFactory.prototype.create = function(host, scope, parentFrag) {
        var frag = templateParser.clone(this.template);
        return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
      };
      module.exports = FragmentFactory;
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var transition = __webpack_require__(9);
      function Fragment(linker, vm, frag, host, scope, parentFrag) {
        this.children = [];
        this.childFrags = [];
        this.vm = vm;
        this.scope = scope;
        this.inserted = false;
        this.parentFrag = parentFrag;
        if (parentFrag) {
          parentFrag.childFrags.push(this);
        }
        this.unlink = linker(vm, frag, host, scope, this);
        var single = this.single = frag.childNodes.length === 1;
        if (single) {
          this.node = frag.childNodes[0];
          this.before = singleBefore;
          this.remove = singleRemove;
        } else {
          this.node = _.createAnchor('fragment-start');
          this.end = _.createAnchor('fragment-end');
          this.frag = frag;
          _.prepend(this.node, frag);
          frag.appendChild(this.end);
          this.before = multiBefore;
          this.remove = multiRemove;
        }
        this.node.__vfrag__ = this;
      }
      Fragment.prototype.callHook = function(hook) {
        var i,
            l;
        for (i = 0, l = this.children.length; i < l; i++) {
          hook(this.children[i]);
        }
        for (i = 0, l = this.childFrags.length; i < l; i++) {
          this.childFrags[i].callHook(hook);
        }
      };
      Fragment.prototype.destroy = function() {
        if (this.parentFrag) {
          this.parentFrag.childFrags.$remove(this);
        }
        this.unlink();
      };
      function singleBefore(target, withTransition) {
        this.inserted = true;
        var method = withTransition !== false ? transition.before : _.before;
        method(this.node, target, this.vm);
        if (_.inDoc(this.node)) {
          this.callHook(attach);
        }
      }
      function singleRemove() {
        this.inserted = false;
        var shouldCallRemove = _.inDoc(this.node);
        var self = this;
        self.callHook(destroyChild);
        transition.remove(this.node, this.vm, function() {
          if (shouldCallRemove) {
            self.callHook(detach);
          }
          self.destroy();
        });
      }
      function multiBefore(target, withTransition) {
        this.inserted = true;
        var vm = this.vm;
        var method = withTransition !== false ? transition.before : _.before;
        _.mapNodeRange(this.node, this.end, function(node) {
          method(node, target, vm);
        });
        if (_.inDoc(this.node)) {
          this.callHook(attach);
        }
      }
      function multiRemove() {
        this.inserted = false;
        var self = this;
        var shouldCallRemove = _.inDoc(this.node);
        self.callHook(destroyChild);
        _.removeNodeRange(this.node, this.end, this.vm, this.frag, function() {
          if (shouldCallRemove) {
            self.callHook(detach);
          }
          self.destroy();
        });
      }
      function attach(child) {
        if (!child._isAttached) {
          child._callHook('attached');
        }
      }
      function destroyChild(child) {
        child.$destroy(false, true);
      }
      function detach(child) {
        if (child._isAttached) {
          child._callHook('detached');
        }
      }
      module.exports = Fragment;
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var FragmentFactory = __webpack_require__(21);
      module.exports = {
        priority: 2000,
        bind: function() {
          var el = this.el;
          if (!el.__vue__) {
            var next = el.nextElementSibling;
            if (next && _.attr(next, 'v-else') !== null) {
              _.remove(next);
              this.elseFactory = new FragmentFactory(this.vm, next);
            }
            this.anchor = _.createAnchor('v-if');
            _.replace(el, this.anchor);
            this.factory = new FragmentFactory(this.vm, el);
          } else {
            ("development") !== 'production' && _.warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
            this.invalid = true;
          }
        },
        update: function(value) {
          if (this.invalid)
            return;
          if (value) {
            if (!this.frag) {
              this.insert();
            }
          } else {
            this.remove();
          }
        },
        insert: function() {
          if (this.elseFrag) {
            this.elseFrag.remove();
            this.elseFrag = null;
          }
          this.frag = this.factory.create(this._host, this._scope, this._frag);
          this.frag.before(this.anchor);
        },
        remove: function() {
          if (this.frag) {
            this.frag.remove();
            this.frag = null;
          }
          if (this.elseFactory && !this.elseFrag) {
            this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
            this.elseFrag.before(this.anchor);
          }
        },
        unbind: function() {
          if (this.frag) {
            this.frag.destroy();
          }
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var transition = __webpack_require__(9);
      module.exports = {
        bind: function() {
          var next = this.el.nextElementSibling;
          if (next && _.attr(next, 'v-else') !== null) {
            this.elseEl = next;
          }
        },
        update: function(value) {
          this.apply(this.el, value);
          if (this.elseEl) {
            this.apply(this.elseEl, !value);
          }
        },
        apply: function(el, value) {
          function done() {
            el.style.display = value ? '' : 'none';
          }
          if (_.inDoc(el)) {
            transition.apply(el, value ? 1 : -1, done, this.vm);
          } else {
            done();
          }
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var handlers = {
        text: __webpack_require__(26),
        radio: __webpack_require__(27),
        select: __webpack_require__(28),
        checkbox: __webpack_require__(29)
      };
      module.exports = {
        priority: 800,
        twoWay: true,
        handlers: handlers,
        params: ['lazy', 'number', 'debounce'],
        bind: function() {
          this.checkFilters();
          if (this.hasRead && !this.hasWrite) {
            ("development") !== 'production' && _.warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
          }
          var el = this.el;
          var tag = el.tagName;
          var handler;
          if (tag === 'INPUT') {
            handler = handlers[el.type] || handlers.text;
          } else if (tag === 'SELECT') {
            handler = handlers.select;
          } else if (tag === 'TEXTAREA') {
            handler = handlers.text;
          } else {
            ("development") !== 'production' && _.warn('v-model does not support element type: ' + tag);
            return;
          }
          el.__v_model = this;
          handler.bind.call(this);
          this.update = handler.update;
          this._unbind = handler.unbind;
        },
        checkFilters: function() {
          var filters = this.filters;
          if (!filters)
            return;
          var i = filters.length;
          while (i--) {
            var filter = _.resolveAsset(this.vm.$options, 'filters', filters[i].name);
            if (typeof filter === 'function' || filter.read) {
              this.hasRead = true;
            }
            if (filter.write) {
              this.hasWrite = true;
            }
          }
        },
        unbind: function() {
          this.el.__v_model = null;
          this._unbind && this._unbind();
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      module.exports = {
        bind: function() {
          var self = this;
          var el = this.el;
          var isRange = el.type === 'range';
          var lazy = this.params.lazy;
          var number = this.params.number;
          var debounce = this.params.debounce;
          var composing = false;
          if (!_.isAndroid && !isRange) {
            this.on('compositionstart', function() {
              composing = true;
            });
            this.on('compositionend', function() {
              composing = false;
              if (!lazy) {
                self.listener();
              }
            });
          }
          this.focused = false;
          if (!isRange) {
            this.on('focus', function() {
              self.focused = true;
            });
            this.on('blur', function() {
              self.focused = false;
              self.listener();
            });
          }
          this.listener = function() {
            if (composing)
              return;
            var val = number || isRange ? _.toNumber(el.value) : el.value;
            self.set(val);
            _.nextTick(function() {
              if (self._bound && !self.focused) {
                self.update(self._watcher.value);
              }
            });
          };
          if (debounce) {
            this.listener = _.debounce(this.listener, debounce);
          }
          this.hasjQuery = typeof jQuery === 'function';
          if (this.hasjQuery) {
            jQuery(el).on('change', this.listener);
            if (!lazy) {
              jQuery(el).on('input', this.listener);
            }
          } else {
            this.on('change', this.listener);
            if (!lazy) {
              this.on('input', this.listener);
            }
          }
          if (!lazy && _.isIE9) {
            this.on('cut', function() {
              _.nextTick(self.listener);
            });
            this.on('keyup', function(e) {
              if (e.keyCode === 46 || e.keyCode === 8) {
                self.listener();
              }
            });
          }
          if (el.hasAttribute('value') || (el.tagName === 'TEXTAREA' && el.value.trim())) {
            this.afterBind = this.listener;
          }
        },
        update: function(value) {
          this.el.value = _.toString(value);
        },
        unbind: function() {
          var el = this.el;
          if (this.hasjQuery) {
            jQuery(el).off('change', this.listener);
            jQuery(el).off('input', this.listener);
          }
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      module.exports = {
        bind: function() {
          var self = this;
          var el = this.el;
          this.getValue = function() {
            if (el.hasOwnProperty('_value')) {
              return el._value;
            }
            var val = el.value;
            if (self.params.number) {
              val = _.toNumber(val);
            }
            return val;
          };
          this.listener = function() {
            self.set(self.getValue());
          };
          this.on('change', this.listener);
          if (el.checked) {
            this.afterBind = this.listener;
          }
        },
        update: function(value) {
          this.el.checked = _.looseEqual(value, this.getValue());
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      module.exports = {
        bind: function() {
          var self = this;
          var el = this.el;
          this.forceUpdate = function() {
            if (self._watcher) {
              self.update(self._watcher.get());
            }
          };
          var multiple = this.multiple = el.hasAttribute('multiple');
          this.listener = function() {
            var value = getValue(el, multiple);
            value = self.params.number ? _.isArray(value) ? value.map(_.toNumber) : _.toNumber(value) : value;
            self.set(value);
          };
          this.on('change', this.listener);
          var initValue = getValue(el, multiple, true);
          if ((multiple && initValue.length) || (!multiple && initValue !== null)) {
            this.afterBind = this.listener;
          }
          this.vm.$on('hook:attached', this.forceUpdate);
        },
        update: function(value) {
          var el = this.el;
          el.selectedIndex = -1;
          var multi = this.multiple && _.isArray(value);
          var options = el.options;
          var i = options.length;
          var op,
              val;
          while (i--) {
            op = options[i];
            val = op.hasOwnProperty('_value') ? op._value : op.value;
            op.selected = multi ? indexOf(value, val) > -1 : _.looseEqual(value, val);
          }
        },
        unbind: function() {
          this.vm.$off('hook:attached', this.forceUpdate);
        }
      };
      function getValue(el, multi, init) {
        var res = multi ? [] : null;
        var op,
            val,
            selected;
        for (var i = 0,
            l = el.options.length; i < l; i++) {
          op = el.options[i];
          selected = init ? op.hasAttribute('selected') : op.selected;
          if (selected) {
            val = op.hasOwnProperty('_value') ? op._value : op.value;
            if (multi) {
              res.push(val);
            } else {
              return val;
            }
          }
        }
        return res;
      }
      function indexOf(arr, val) {
        var i = arr.length;
        while (i--) {
          if (_.looseEqual(arr[i], val)) {
            return i;
          }
        }
        return -1;
      }
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      module.exports = {
        bind: function() {
          var self = this;
          var el = this.el;
          this.getValue = function() {
            return el.hasOwnProperty('_value') ? el._value : self.params.number ? _.toNumber(el.value) : el.value;
          };
          function getBooleanValue() {
            var val = el.checked;
            if (val && el.hasOwnProperty('_trueValue')) {
              return el._trueValue;
            }
            if (!val && el.hasOwnProperty('_falseValue')) {
              return el._falseValue;
            }
            return val;
          }
          this.listener = function() {
            var model = self._watcher.value;
            if (_.isArray(model)) {
              var val = self.getValue();
              if (el.checked) {
                if (_.indexOf(model, val) < 0) {
                  model.push(val);
                }
              } else {
                model.$remove(val);
              }
            } else {
              self.set(getBooleanValue());
            }
          };
          this.on('change', this.listener);
          if (el.checked) {
            this.afterBind = this.listener;
          }
        },
        update: function(value) {
          var el = this.el;
          if (_.isArray(value)) {
            el.checked = _.indexOf(value, this.getValue()) > -1;
          } else {
            if (el.hasOwnProperty('_trueValue')) {
              el.checked = _.looseEqual(value, el._trueValue);
            } else {
              el.checked = !!value;
            }
          }
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var keyCodes = {
        esc: 27,
        tab: 9,
        enter: 13,
        space: 32,
        'delete': 46,
        up: 38,
        left: 37,
        right: 39,
        down: 40
      };
      function keyFilter(handler, keys) {
        var codes = keys.map(function(key) {
          var code = keyCodes[key];
          if (!code) {
            code = parseInt(key, 10);
          }
          return code;
        });
        return function keyHandler(e) {
          if (codes.indexOf(e.keyCode) > -1) {
            return handler.call(this, e);
          }
        };
      }
      function stopFilter(handler) {
        return function stopHandler(e) {
          e.stopPropagation();
          return handler.call(this, e);
        };
      }
      function preventFilter(handler) {
        return function preventHandler(e) {
          e.preventDefault();
          return handler.call(this, e);
        };
      }
      module.exports = {
        acceptStatement: true,
        priority: 700,
        bind: function() {
          if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
            var self = this;
            this.iframeBind = function() {
              _.on(self.el.contentWindow, self.arg, self.handler);
            };
            this.on('load', this.iframeBind);
          }
        },
        update: function(handler) {
          if (!this.descriptor.raw) {
            handler = function() {};
          }
          if (typeof handler !== 'function') {
            ("development") !== 'production' && _.warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);
            return;
          }
          if (this.modifiers.stop) {
            handler = stopFilter(handler);
          }
          if (this.modifiers.prevent) {
            handler = preventFilter(handler);
          }
          var keys = Object.keys(this.modifiers).filter(function(key) {
            return key !== 'stop' && key !== 'prevent';
          });
          if (keys.length) {
            handler = keyFilter(handler, keys);
          }
          this.reset();
          var scope = this._scope || this.vm;
          this.handler = function(e) {
            scope.$event = e;
            var res = handler(e);
            scope.$event = null;
            return res;
          };
          if (this.iframeBind) {
            this.iframeBind();
          } else {
            _.on(this.el, this.arg, this.handler);
          }
        },
        reset: function() {
          var el = this.iframeBind ? this.el.contentWindow : this.el;
          if (this.handler) {
            _.off(el, this.arg, this.handler);
          }
        },
        unbind: function() {
          this.reset();
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var xlinkNS = 'http://www.w3.org/1999/xlink';
      var xlinkRE = /^xlink:/;
      var inputProps = {
        value: 1,
        checked: 1,
        selected: 1
      };
      var modelProps = {
        value: '_value',
        'true-value': '_trueValue',
        'false-value': '_falseValue'
      };
      var disallowedInterpAttrRE = /^v-|^:|^@|^(is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
      module.exports = {
        priority: 850,
        bind: function() {
          var attr = this.arg;
          var tag = this.el.tagName;
          if (!attr) {
            this.deep = true;
          }
          if (this.descriptor.interp) {
            if (disallowedInterpAttrRE.test(attr) || (attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT'))) {
              ("development") !== 'production' && _.warn(attr + '="' + this.descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');
              this.el.removeAttribute(attr);
              this.invalid = true;
            }
            if (true) {
              var raw = attr + '="' + this.descriptor.raw + '": ';
              if (attr === 'src') {
                _.warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');
              }
              if (attr === 'style') {
                _.warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');
              }
            }
          }
        },
        update: function(value) {
          if (this.invalid) {
            return;
          }
          var attr = this.arg;
          if (this.arg) {
            this.handleSingle(attr, value);
          } else {
            this.handleObject(value || {});
          }
        },
        handleObject: __webpack_require__(32).handleObject,
        handleSingle: function(attr, value) {
          if (inputProps[attr] && attr in this.el) {
            this.el[attr] = attr === 'value' ? (value || '') : value;
          }
          var modelProp = modelProps[attr];
          if (modelProp) {
            this.el[modelProp] = value;
            var model = this.el.__v_model;
            if (model) {
              model.listener();
            }
          }
          if (attr === 'value' && this.el.tagName === 'TEXTAREA') {
            this.el.removeAttribute(attr);
            return;
          }
          if (value != null && value !== false) {
            if (xlinkRE.test(attr)) {
              this.el.setAttributeNS(xlinkNS, attr, value);
            } else {
              this.el.setAttribute(attr, value);
            }
          } else {
            this.el.removeAttribute(attr);
          }
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var prefixes = ['-webkit-', '-moz-', '-ms-'];
      var camelPrefixes = ['Webkit', 'Moz', 'ms'];
      var importantRE = /!important;?$/;
      var testEl = null;
      var propCache = {};
      module.exports = {
        deep: true,
        update: function(value) {
          if (typeof value === 'string') {
            this.el.style.cssText = value;
          } else if (_.isArray(value)) {
            this.handleObject(value.reduce(_.extend, {}));
          } else {
            this.handleObject(value || {});
          }
        },
        handleObject: function(value) {
          var cache = this.cache || (this.cache = {});
          var name,
              val;
          for (name in cache) {
            if (!(name in value)) {
              this.handleSingle(name, null);
              delete cache[name];
            }
          }
          for (name in value) {
            val = value[name];
            if (val !== cache[name]) {
              cache[name] = val;
              this.handleSingle(name, val);
            }
          }
        },
        handleSingle: function(prop, value) {
          prop = normalize(prop);
          if (!prop)
            return;
          if (value != null)
            value += '';
          if (value) {
            var isImportant = importantRE.test(value) ? 'important' : '';
            if (isImportant) {
              value = value.replace(importantRE, '').trim();
            }
            this.el.style.setProperty(prop, value, isImportant);
          } else {
            this.el.style.removeProperty(prop);
          }
        }
      };
      function normalize(prop) {
        if (propCache[prop]) {
          return propCache[prop];
        }
        var res = prefix(prop);
        propCache[prop] = propCache[res] = res;
        return res;
      }
      function prefix(prop) {
        prop = _.hyphenate(prop);
        var camel = _.camelize(prop);
        var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
        if (!testEl) {
          testEl = document.createElement('div');
        }
        if (camel in testEl.style) {
          return prop;
        }
        var i = prefixes.length;
        var prefixed;
        while (i--) {
          prefixed = camelPrefixes[i] + upper;
          if (prefixed in testEl.style) {
            return prefixes[i] + prop;
          }
        }
      }
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      module.exports = {
        priority: 1500,
        bind: function() {
          if (!this.arg) {
            return;
          }
          var id = this.id = _.camelize(this.arg);
          var refs = (this._scope || this.vm).$els;
          if (refs.hasOwnProperty(id)) {
            refs[id] = this.el;
          } else {
            _.defineReactive(refs, id, this.el);
          }
        },
        unbind: function() {
          var refs = (this._scope || this.vm).$els;
          if (refs[this.id] === this.el) {
            refs[this.id] = null;
          }
        }
      };
    }, function(module, exports, __webpack_require__) {
      if (true) {
        module.exports = {bind: function() {
            __webpack_require__(1).warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');
          }};
      }
    }, function(module, exports) {
      module.exports = {bind: function() {
          var el = this.el;
          this.vm.$once('hook:compiled', function() {
            el.removeAttribute('v-cloak');
          });
        }};
    }, function(module, exports, __webpack_require__) {
      exports.style = __webpack_require__(32);
      exports['class'] = __webpack_require__(37);
      exports.component = __webpack_require__(38);
      exports.prop = __webpack_require__(39);
      exports.transition = __webpack_require__(45);
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var addClass = _.addClass;
      var removeClass = _.removeClass;
      module.exports = {
        deep: true,
        update: function(value) {
          if (value && typeof value === 'string') {
            this.handleObject(stringToObject(value));
          } else if (_.isPlainObject(value)) {
            this.handleObject(value);
          } else if (_.isArray(value)) {
            this.handleArray(value);
          } else {
            this.cleanup();
          }
        },
        handleObject: function(value) {
          this.cleanup(value);
          var keys = this.prevKeys = Object.keys(value);
          for (var i = 0,
              l = keys.length; i < l; i++) {
            var key = keys[i];
            if (value[key]) {
              addClass(this.el, key);
            } else {
              removeClass(this.el, key);
            }
          }
        },
        handleArray: function(value) {
          this.cleanup(value);
          for (var i = 0,
              l = value.length; i < l; i++) {
            if (value[i]) {
              addClass(this.el, value[i]);
            }
          }
          this.prevKeys = value.slice();
        },
        cleanup: function(value) {
          if (this.prevKeys) {
            var i = this.prevKeys.length;
            while (i--) {
              var key = this.prevKeys[i];
              if (key && (!value || !contains(value, key))) {
                removeClass(this.el, key);
              }
            }
          }
        }
      };
      function stringToObject(value) {
        var res = {};
        var keys = value.trim().split(/\s+/);
        var i = keys.length;
        while (i--) {
          res[keys[i]] = true;
        }
        return res;
      }
      function contains(value, key) {
        return _.isArray(value) ? value.indexOf(key) > -1 : value.hasOwnProperty(key);
      }
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var templateParser = __webpack_require__(19);
      module.exports = {
        priority: 1500,
        params: ['keep-alive', 'transition-mode', 'inline-template'],
        bind: function() {
          if (!this.el.__vue__) {
            this.keepAlive = this.params.keepAlive;
            if (this.keepAlive) {
              this.cache = {};
            }
            if (this.params.inlineTemplate) {
              this.inlineTemplate = _.extractContent(this.el, true);
            }
            this.pendingComponentCb = this.Component = null;
            this.pendingRemovals = 0;
            this.pendingRemovalCb = null;
            this.anchor = _.createAnchor('v-component');
            _.replace(this.el, this.anchor);
            this.el.removeAttribute('is');
            if (this.literal) {
              this.setComponent(this.expression);
            }
          } else {
            ("development") !== 'production' && _.warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
          }
        },
        update: function(value) {
          if (!this.literal) {
            this.setComponent(value);
          }
        },
        setComponent: function(value, cb) {
          this.invalidatePending();
          if (!value) {
            this.unbuild(true);
            this.remove(this.childVM, cb);
            this.childVM = null;
          } else {
            var self = this;
            this.resolveComponent(value, function() {
              self.mountComponent(cb);
            });
          }
        },
        resolveComponent: function(id, cb) {
          var self = this;
          this.pendingComponentCb = _.cancellable(function(Component) {
            self.ComponentName = Component.options.name || id;
            self.Component = Component;
            cb();
          });
          this.vm._resolveComponent(id, this.pendingComponentCb);
        },
        mountComponent: function(cb) {
          this.unbuild(true);
          var self = this;
          var activateHook = this.Component.options.activate;
          var cached = this.getCached();
          var newComponent = this.build();
          if (activateHook && !cached) {
            this.waitingFor = newComponent;
            activateHook.call(newComponent, function() {
              self.waitingFor = null;
              self.transition(newComponent, cb);
            });
          } else {
            if (cached) {
              newComponent._updateRef();
            }
            this.transition(newComponent, cb);
          }
        },
        invalidatePending: function() {
          if (this.pendingComponentCb) {
            this.pendingComponentCb.cancel();
            this.pendingComponentCb = null;
          }
        },
        build: function(extraOptions) {
          var cached = this.getCached();
          if (cached) {
            return cached;
          }
          if (this.Component) {
            var options = {
              name: this.ComponentName,
              el: templateParser.clone(this.el),
              template: this.inlineTemplate,
              parent: this._host || this.vm,
              _linkerCachable: !this.inlineTemplate,
              _ref: this.descriptor.ref,
              _asComponent: true,
              _isRouterView: this._isRouterView,
              _context: this.vm,
              _scope: this._scope,
              _frag: this._frag
            };
            if (extraOptions) {
              _.extend(options, extraOptions);
            }
            var child = new this.Component(options);
            if (this.keepAlive) {
              this.cache[this.Component.cid] = child;
            }
            if (("development") !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
              _.warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);
            }
            return child;
          }
        },
        getCached: function() {
          return this.keepAlive && this.cache[this.Component.cid];
        },
        unbuild: function(defer) {
          if (this.waitingFor) {
            this.waitingFor.$destroy();
            this.waitingFor = null;
          }
          var child = this.childVM;
          if (!child || this.keepAlive) {
            if (child) {
              child._updateRef(true);
            }
            return;
          }
          child.$destroy(false, defer);
        },
        remove: function(child, cb) {
          var keepAlive = this.keepAlive;
          if (child) {
            this.pendingRemovals++;
            this.pendingRemovalCb = cb;
            var self = this;
            child.$remove(function() {
              self.pendingRemovals--;
              if (!keepAlive)
                child._cleanup();
              if (!self.pendingRemovals && self.pendingRemovalCb) {
                self.pendingRemovalCb();
                self.pendingRemovalCb = null;
              }
            });
          } else if (cb) {
            cb();
          }
        },
        transition: function(target, cb) {
          var self = this;
          var current = this.childVM;
          if (true) {
            if (current)
              current._inactive = true;
            target._inactive = false;
          }
          this.childVM = target;
          switch (self.params.transitionMode) {
            case 'in-out':
              target.$before(self.anchor, function() {
                self.remove(current, cb);
              });
              break;
            case 'out-in':
              self.remove(current, function() {
                target.$before(self.anchor, cb);
              });
              break;
            default:
              self.remove(current);
              target.$before(self.anchor, cb);
          }
        },
        unbind: function() {
          this.invalidatePending();
          this.unbuild();
          if (this.cache) {
            for (var key in this.cache) {
              this.cache[key].$destroy();
            }
            this.cache = null;
          }
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var Watcher = __webpack_require__(40);
      var bindingModes = __webpack_require__(5)._propBindingModes;
      module.exports = {
        bind: function() {
          var child = this.vm;
          var parent = child._context;
          var prop = this.descriptor.prop;
          var childKey = prop.path;
          var parentKey = prop.parentPath;
          var twoWay = prop.mode === bindingModes.TWO_WAY;
          var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function(val) {
            if (_.assertProp(prop, val)) {
              child[childKey] = val;
            }
          }, {
            twoWay: twoWay,
            filters: prop.filters,
            scope: this._scope
          });
          _.initProp(child, prop, parentWatcher.value);
          if (twoWay) {
            var self = this;
            child.$once('hook:created', function() {
              self.childWatcher = new Watcher(child, childKey, function(val) {
                parentWatcher.set(val);
              }, {sync: true});
            });
          }
        },
        unbind: function() {
          this.parentWatcher.teardown();
          if (this.childWatcher) {
            this.childWatcher.teardown();
          }
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var config = __webpack_require__(5);
      var Dep = __webpack_require__(41);
      var expParser = __webpack_require__(42);
      var batcher = __webpack_require__(44);
      var uid = 0;
      function Watcher(vm, expOrFn, cb, options) {
        if (options) {
          _.extend(this, options);
        }
        var isFn = typeof expOrFn === 'function';
        this.vm = vm;
        vm._watchers.push(this);
        this.expression = isFn ? expOrFn.toString() : expOrFn;
        this.cb = cb;
        this.id = ++uid;
        this.active = true;
        this.dirty = this.lazy;
        this.deps = Object.create(null);
        this.newDeps = null;
        this.prevError = null;
        if (isFn) {
          this.getter = expOrFn;
          this.setter = undefined;
        } else {
          var res = expParser.parse(expOrFn, this.twoWay);
          this.getter = res.get;
          this.setter = res.set;
        }
        this.value = this.lazy ? undefined : this.get();
        this.queued = this.shallow = false;
      }
      Watcher.prototype.addDep = function(dep) {
        var id = dep.id;
        if (!this.newDeps[id]) {
          this.newDeps[id] = dep;
          if (!this.deps[id]) {
            this.deps[id] = dep;
            dep.addSub(this);
          }
        }
      };
      Watcher.prototype.get = function() {
        this.beforeGet();
        var scope = this.scope || this.vm;
        var value;
        try {
          value = this.getter.call(scope, scope);
        } catch (e) {
          if (("development") !== 'production' && config.warnExpressionErrors) {
            _.warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
          }
        }
        if (this.deep) {
          traverse(value);
        }
        if (this.preProcess) {
          value = this.preProcess(value);
        }
        if (this.filters) {
          value = scope._applyFilters(value, null, this.filters, false);
        }
        if (this.postProcess) {
          value = this.postProcess(value);
        }
        this.afterGet();
        return value;
      };
      Watcher.prototype.set = function(value) {
        var scope = this.scope || this.vm;
        if (this.filters) {
          value = scope._applyFilters(value, this.value, this.filters, true);
        }
        try {
          this.setter.call(scope, scope, value);
        } catch (e) {
          if (("development") !== 'production' && config.warnExpressionErrors) {
            _.warn('Error when evaluating setter "' + this.expression + '"', e);
          }
        }
        var forContext = scope.$forContext;
        if (true) {
          if (forContext && forContext.filters && (new RegExp(forContext.alias + '\\b')).test(this.expression)) {
            _.warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');
          }
        }
        if (forContext && forContext.alias === this.expression && !forContext.filters) {
          if (scope.$key) {
            forContext.rawValue[scope.$key] = value;
          } else {
            forContext.rawValue.$set(scope.$index, value);
          }
        }
      };
      Watcher.prototype.beforeGet = function() {
        Dep.target = this;
        this.newDeps = Object.create(null);
      };
      Watcher.prototype.afterGet = function() {
        Dep.target = null;
        var ids = Object.keys(this.deps);
        var i = ids.length;
        while (i--) {
          var id = ids[i];
          if (!this.newDeps[id]) {
            this.deps[id].removeSub(this);
          }
        }
        this.deps = this.newDeps;
      };
      Watcher.prototype.update = function(shallow) {
        if (this.lazy) {
          this.dirty = true;
        } else if (this.sync || !config.async) {
          this.run();
        } else {
          this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
          this.queued = true;
          if (("development") !== 'production' && config.debug) {
            this.prevError = new Error('[vue] async stack trace');
          }
          batcher.push(this);
        }
      };
      Watcher.prototype.run = function() {
        if (this.active) {
          var value = this.get();
          if (value !== this.value || ((_.isArray(value) || this.deep) && !this.shallow)) {
            var oldValue = this.value;
            this.value = value;
            var prevError = this.prevError;
            if (("development") !== 'production' && config.debug && prevError) {
              this.prevError = null;
              try {
                this.cb.call(this.vm, value, oldValue);
              } catch (e) {
                _.nextTick(function() {
                  throw prevError;
                }, 0);
                throw e;
              }
            } else {
              this.cb.call(this.vm, value, oldValue);
            }
          }
          this.queued = this.shallow = false;
        }
      };
      Watcher.prototype.evaluate = function() {
        var current = Dep.target;
        this.value = this.get();
        this.dirty = false;
        Dep.target = current;
      };
      Watcher.prototype.depend = function() {
        var depIds = Object.keys(this.deps);
        var i = depIds.length;
        while (i--) {
          this.deps[depIds[i]].depend();
        }
      };
      Watcher.prototype.teardown = function() {
        if (this.active) {
          if (!this.vm._isBeingDestroyed) {
            this.vm._watchers.$remove(this);
          }
          var depIds = Object.keys(this.deps);
          var i = depIds.length;
          while (i--) {
            this.deps[depIds[i]].removeSub(this);
          }
          this.active = false;
          this.vm = this.cb = this.value = null;
        }
      };
      function traverse(val) {
        var i,
            keys;
        if (_.isArray(val)) {
          i = val.length;
          while (i--)
            traverse(val[i]);
        } else if (_.isObject(val)) {
          keys = Object.keys(val);
          i = keys.length;
          while (i--)
            traverse(val[keys[i]]);
        }
      }
      module.exports = Watcher;
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var uid = 0;
      function Dep() {
        this.id = uid++;
        this.subs = [];
      }
      Dep.target = null;
      Dep.prototype.addSub = function(sub) {
        this.subs.push(sub);
      };
      Dep.prototype.removeSub = function(sub) {
        this.subs.$remove(sub);
      };
      Dep.prototype.depend = function() {
        Dep.target.addDep(this);
      };
      Dep.prototype.notify = function() {
        var subs = _.toArray(this.subs);
        for (var i = 0,
            l = subs.length; i < l; i++) {
          subs[i].update();
        }
      };
      module.exports = Dep;
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var Path = __webpack_require__(43);
      var Cache = __webpack_require__(7);
      var expressionCache = new Cache(1000);
      var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
      var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
      var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';
      var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
      var wsRE = /\s/g;
      var newlineRE = /\n/g;
      var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g;
      var restoreRE = /"(\d+)"/g;
      var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
      var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g;
      var booleanLiteralRE = /^(true|false)$/;
      var saved = [];
      function save(str, isString) {
        var i = saved.length;
        saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
        return '"' + i + '"';
      }
      function rewrite(raw) {
        var c = raw.charAt(0);
        var path = raw.slice(1);
        if (allowedKeywordsRE.test(path)) {
          return raw;
        } else {
          path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
          return c + 'scope.' + path;
        }
      }
      function restore(str, i) {
        return saved[i];
      }
      function compileExpFns(exp, needSet) {
        if (improperKeywordsRE.test(exp)) {
          ("development") !== 'production' && _.warn('Avoid using reserved keywords in expression: ' + exp);
        }
        saved.length = 0;
        var body = exp.replace(saveRE, save).replace(wsRE, '');
        body = (' ' + body).replace(pathReplaceRE, rewrite).replace(restoreRE, restore);
        var getter = makeGetter(body);
        if (getter) {
          return {
            get: getter,
            body: body,
            set: needSet ? makeSetter(body) : null
          };
        }
      }
      function compilePathFns(exp) {
        var getter,
            path;
        if (exp.indexOf('[') < 0) {
          path = exp.split('.');
          path.raw = exp;
          getter = Path.compileGetter(path);
        } else {
          path = Path.parse(exp);
          getter = path.get;
        }
        return {
          get: getter,
          set: function(obj, val) {
            Path.set(obj, path, val);
          }
        };
      }
      function makeGetter(body) {
        try {
          return new Function('scope', 'return ' + body + ';');
        } catch (e) {
          ("development") !== 'production' && _.warn('Invalid expression. ' + 'Generated function body: ' + body);
        }
      }
      function makeSetter(body) {
        try {
          return new Function('scope', 'value', body + '=value;');
        } catch (e) {
          ("development") !== 'production' && _.warn('Invalid setter function body: ' + body);
        }
      }
      function checkSetter(hit) {
        if (!hit.set) {
          hit.set = makeSetter(hit.body);
        }
      }
      exports.parse = function(exp, needSet) {
        exp = exp.trim();
        var hit = expressionCache.get(exp);
        if (hit) {
          if (needSet) {
            checkSetter(hit);
          }
          return hit;
        }
        var res = exports.isSimplePath(exp) ? compilePathFns(exp) : compileExpFns(exp, needSet);
        expressionCache.put(exp, res);
        return res;
      };
      exports.isSimplePath = function(exp) {
        return pathTestRE.test(exp) && !booleanLiteralRE.test(exp) && exp.slice(0, 5) !== 'Math.';
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var Cache = __webpack_require__(7);
      var pathCache = new Cache(1000);
      var identRE = exports.identRE = /^[$_a-zA-Z]+[\w$]*$/;
      var APPEND = 0;
      var PUSH = 1;
      var BEFORE_PATH = 0;
      var IN_PATH = 1;
      var BEFORE_IDENT = 2;
      var IN_IDENT = 3;
      var BEFORE_ELEMENT = 4;
      var AFTER_ZERO = 5;
      var IN_INDEX = 6;
      var IN_SINGLE_QUOTE = 7;
      var IN_DOUBLE_QUOTE = 8;
      var IN_SUB_PATH = 9;
      var AFTER_ELEMENT = 10;
      var AFTER_PATH = 11;
      var ERROR = 12;
      var pathStateMachine = [];
      pathStateMachine[BEFORE_PATH] = {
        'ws': [BEFORE_PATH],
        'ident': [IN_IDENT, APPEND],
        '[': [BEFORE_ELEMENT],
        'eof': [AFTER_PATH]
      };
      pathStateMachine[IN_PATH] = {
        'ws': [IN_PATH],
        '.': [BEFORE_IDENT],
        '[': [BEFORE_ELEMENT],
        'eof': [AFTER_PATH]
      };
      pathStateMachine[BEFORE_IDENT] = {
        'ws': [BEFORE_IDENT],
        'ident': [IN_IDENT, APPEND]
      };
      pathStateMachine[IN_IDENT] = {
        'ident': [IN_IDENT, APPEND],
        '0': [IN_IDENT, APPEND],
        'number': [IN_IDENT, APPEND],
        'ws': [IN_PATH, PUSH],
        '.': [BEFORE_IDENT, PUSH],
        '[': [BEFORE_ELEMENT, PUSH],
        'eof': [AFTER_PATH, PUSH]
      };
      pathStateMachine[BEFORE_ELEMENT] = {
        'ws': [BEFORE_ELEMENT],
        '0': [AFTER_ZERO, APPEND],
        'number': [IN_INDEX, APPEND],
        "'": [IN_SINGLE_QUOTE, APPEND, ''],
        '"': [IN_DOUBLE_QUOTE, APPEND, ''],
        'ident': [IN_SUB_PATH, APPEND, '*']
      };
      pathStateMachine[AFTER_ZERO] = {
        'ws': [AFTER_ELEMENT, PUSH],
        ']': [IN_PATH, PUSH]
      };
      pathStateMachine[IN_INDEX] = {
        '0': [IN_INDEX, APPEND],
        'number': [IN_INDEX, APPEND],
        'ws': [AFTER_ELEMENT],
        ']': [IN_PATH, PUSH]
      };
      pathStateMachine[IN_SINGLE_QUOTE] = {
        "'": [AFTER_ELEMENT],
        'eof': ERROR,
        'else': [IN_SINGLE_QUOTE, APPEND]
      };
      pathStateMachine[IN_DOUBLE_QUOTE] = {
        '"': [AFTER_ELEMENT],
        'eof': ERROR,
        'else': [IN_DOUBLE_QUOTE, APPEND]
      };
      pathStateMachine[IN_SUB_PATH] = {
        'ident': [IN_SUB_PATH, APPEND],
        '0': [IN_SUB_PATH, APPEND],
        'number': [IN_SUB_PATH, APPEND],
        'ws': [AFTER_ELEMENT],
        ']': [IN_PATH, PUSH]
      };
      pathStateMachine[AFTER_ELEMENT] = {
        'ws': [AFTER_ELEMENT],
        ']': [IN_PATH, PUSH]
      };
      function getPathCharType(ch) {
        if (ch === undefined) {
          return 'eof';
        }
        var code = ch.charCodeAt(0);
        switch (code) {
          case 0x5B:
          case 0x5D:
          case 0x2E:
          case 0x22:
          case 0x27:
          case 0x30:
            return ch;
          case 0x5F:
          case 0x24:
            return 'ident';
          case 0x20:
          case 0x09:
          case 0x0A:
          case 0x0D:
          case 0xA0:
          case 0xFEFF:
          case 0x2028:
          case 0x2029:
            return 'ws';
        }
        if ((code >= 0x61 && code <= 0x7A) || (code >= 0x41 && code <= 0x5A)) {
          return 'ident';
        }
        if (code >= 0x31 && code <= 0x39) {
          return 'number';
        }
        return 'else';
      }
      function parsePath(path) {
        var keys = [];
        var index = -1;
        var mode = BEFORE_PATH;
        var c,
            newChar,
            key,
            type,
            transition,
            action,
            typeMap;
        var actions = [];
        actions[PUSH] = function() {
          if (key === undefined) {
            return;
          }
          keys.push(key);
          key = undefined;
        };
        actions[APPEND] = function() {
          if (key === undefined) {
            key = newChar;
          } else {
            key += newChar;
          }
        };
        function maybeUnescapeQuote() {
          var nextChar = path[index + 1];
          if ((mode === IN_SINGLE_QUOTE && nextChar === "'") || (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
            index++;
            newChar = nextChar;
            actions[APPEND]();
            return true;
          }
        }
        while (mode != null) {
          index++;
          c = path[index];
          if (c === '\\' && maybeUnescapeQuote()) {
            continue;
          }
          type = getPathCharType(c);
          typeMap = pathStateMachine[mode];
          transition = typeMap[type] || typeMap['else'] || ERROR;
          if (transition === ERROR) {
            return;
          }
          mode = transition[0];
          action = actions[transition[1]];
          if (action) {
            newChar = transition[2];
            newChar = newChar === undefined ? c : newChar === '*' ? newChar + c : newChar;
            action();
          }
          if (mode === AFTER_PATH) {
            keys.raw = path;
            return keys;
          }
        }
      }
      function formatAccessor(key) {
        if (identRE.test(key)) {
          return '.' + key;
        } else if (+key === key >>> 0) {
          return '[' + key + ']';
        } else if (key.charAt(0) === '*') {
          return '[o' + formatAccessor(key.slice(1)) + ']';
        } else {
          return '["' + key.replace(/"/g, '\\"') + '"]';
        }
      }
      exports.compileGetter = function(path) {
        var body = 'return o' + path.map(formatAccessor).join('');
        return new Function('o', body);
      };
      exports.parse = function(path) {
        var hit = pathCache.get(path);
        if (!hit) {
          hit = parsePath(path);
          if (hit) {
            hit.get = exports.compileGetter(hit);
            pathCache.put(path, hit);
          }
        }
        return hit;
      };
      exports.get = function(obj, path) {
        path = exports.parse(path);
        if (path) {
          return path.get(obj);
        }
      };
      var warnNonExistent;
      if (true) {
        warnNonExistent = function(path) {
          _.warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
        };
      }
      exports.set = function(obj, path, val) {
        var original = obj;
        if (typeof path === 'string') {
          path = exports.parse(path);
        }
        if (!path || !_.isObject(obj)) {
          return false;
        }
        var last,
            key;
        for (var i = 0,
            l = path.length; i < l; i++) {
          last = obj;
          key = path[i];
          if (key.charAt(0) === '*') {
            key = original[key.slice(1)];
          }
          if (i < l - 1) {
            obj = obj[key];
            if (!_.isObject(obj)) {
              obj = {};
              if (("development") !== 'production' && last._isVue) {
                warnNonExistent(path);
              }
              _.set(last, key, obj);
            }
          } else {
            if (_.isArray(obj)) {
              obj.$set(key, val);
            } else if (key in obj) {
              obj[key] = val;
            } else {
              if (("development") !== 'production' && obj._isVue) {
                warnNonExistent(path);
              }
              _.set(obj, key, val);
            }
          }
        }
        return true;
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var config = __webpack_require__(5);
      var queue = [];
      var userQueue = [];
      var has = {};
      var circular = {};
      var waiting = false;
      var internalQueueDepleted = false;
      function resetBatcherState() {
        queue = [];
        userQueue = [];
        has = {};
        circular = {};
        waiting = internalQueueDepleted = false;
      }
      function flushBatcherQueue() {
        runBatcherQueue(queue);
        internalQueueDepleted = true;
        runBatcherQueue(userQueue);
        if (true) {
          if (_.inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
            window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush');
          }
        }
        resetBatcherState();
      }
      function runBatcherQueue(queue) {
        for (var i = 0; i < queue.length; i++) {
          var watcher = queue[i];
          var id = watcher.id;
          has[id] = null;
          watcher.run();
          if (("development") !== 'production' && has[id] != null) {
            circular[id] = (circular[id] || 0) + 1;
            if (circular[id] > config._maxUpdateCount) {
              queue.splice(has[id], 1);
              _.warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
            }
          }
        }
      }
      exports.push = function(watcher) {
        var id = watcher.id;
        if (has[id] == null) {
          if (internalQueueDepleted && !watcher.user) {
            watcher.run();
            return;
          }
          var q = watcher.user ? userQueue : queue;
          has[id] = q.length;
          q.push(watcher);
          if (!waiting) {
            waiting = true;
            _.nextTick(flushBatcherQueue);
          }
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var Transition = __webpack_require__(46);
      module.exports = {
        priority: 1100,
        update: function(id, oldId) {
          var el = this.el;
          var hooks = _.resolveAsset(this.vm.$options, 'transitions', id);
          id = id || 'v';
          el.__v_trans = new Transition(el, id, hooks, this.el.__vue__ || this.vm);
          if (oldId) {
            _.removeClass(el, oldId + '-transition');
          }
          _.addClass(el, id + '-transition');
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var queue = __webpack_require__(47);
      var addClass = _.addClass;
      var removeClass = _.removeClass;
      var transitionEndEvent = _.transitionEndEvent;
      var animationEndEvent = _.animationEndEvent;
      var transDurationProp = _.transitionProp + 'Duration';
      var animDurationProp = _.animationProp + 'Duration';
      var TYPE_TRANSITION = 1;
      var TYPE_ANIMATION = 2;
      function Transition(el, id, hooks, vm) {
        this.id = id;
        this.el = el;
        this.enterClass = id + '-enter';
        this.leaveClass = id + '-leave';
        this.hooks = hooks;
        this.vm = vm;
        this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
        this.justEntered = false;
        this.entered = this.left = false;
        this.typeCache = {};
        var self = this;
        ;
        ['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function(m) {
          self[m] = _.bind(self[m], self);
        });
      }
      var p = Transition.prototype;
      p.enter = function(op, cb) {
        this.cancelPending();
        this.callHook('beforeEnter');
        this.cb = cb;
        addClass(this.el, this.enterClass);
        op();
        this.entered = false;
        this.callHookWithCb('enter');
        if (this.entered) {
          return;
        }
        this.cancel = this.hooks && this.hooks.enterCancelled;
        queue.push(this.enterNextTick);
      };
      p.enterNextTick = function() {
        this.justEntered = true;
        var self = this;
        setTimeout(function() {
          self.justEntered = false;
        }, 17);
        var enterDone = this.enterDone;
        var type = this.getCssTransitionType(this.enterClass);
        if (!this.pendingJsCb) {
          if (type === TYPE_TRANSITION) {
            removeClass(this.el, this.enterClass);
            this.setupCssCb(transitionEndEvent, enterDone);
          } else if (type === TYPE_ANIMATION) {
            this.setupCssCb(animationEndEvent, enterDone);
          } else {
            enterDone();
          }
        } else if (type === TYPE_TRANSITION) {
          removeClass(this.el, this.enterClass);
        }
      };
      p.enterDone = function() {
        this.entered = true;
        this.cancel = this.pendingJsCb = null;
        removeClass(this.el, this.enterClass);
        this.callHook('afterEnter');
        if (this.cb)
          this.cb();
      };
      p.leave = function(op, cb) {
        this.cancelPending();
        this.callHook('beforeLeave');
        this.op = op;
        this.cb = cb;
        addClass(this.el, this.leaveClass);
        this.left = false;
        this.callHookWithCb('leave');
        if (this.left) {
          return;
        }
        this.cancel = this.hooks && this.hooks.leaveCancelled;
        if (this.op && !this.pendingJsCb) {
          if (this.justEntered) {
            this.leaveDone();
          } else {
            queue.push(this.leaveNextTick);
          }
        }
      };
      p.leaveNextTick = function() {
        var type = this.getCssTransitionType(this.leaveClass);
        if (type) {
          var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
          this.setupCssCb(event, this.leaveDone);
        } else {
          this.leaveDone();
        }
      };
      p.leaveDone = function() {
        this.left = true;
        this.cancel = this.pendingJsCb = null;
        this.op();
        removeClass(this.el, this.leaveClass);
        this.callHook('afterLeave');
        if (this.cb)
          this.cb();
        this.op = null;
      };
      p.cancelPending = function() {
        this.op = this.cb = null;
        var hasPending = false;
        if (this.pendingCssCb) {
          hasPending = true;
          _.off(this.el, this.pendingCssEvent, this.pendingCssCb);
          this.pendingCssEvent = this.pendingCssCb = null;
        }
        if (this.pendingJsCb) {
          hasPending = true;
          this.pendingJsCb.cancel();
          this.pendingJsCb = null;
        }
        if (hasPending) {
          removeClass(this.el, this.enterClass);
          removeClass(this.el, this.leaveClass);
        }
        if (this.cancel) {
          this.cancel.call(this.vm, this.el);
          this.cancel = null;
        }
      };
      p.callHook = function(type) {
        if (this.hooks && this.hooks[type]) {
          this.hooks[type].call(this.vm, this.el);
        }
      };
      p.callHookWithCb = function(type) {
        var hook = this.hooks && this.hooks[type];
        if (hook) {
          if (hook.length > 1) {
            this.pendingJsCb = _.cancellable(this[type + 'Done']);
          }
          hook.call(this.vm, this.el, this.pendingJsCb);
        }
      };
      p.getCssTransitionType = function(className) {
        if (!transitionEndEvent || document.hidden || (this.hooks && this.hooks.css === false) || isHidden(this.el)) {
          return;
        }
        var type = this.typeCache[className];
        if (type)
          return type;
        var inlineStyles = this.el.style;
        var computedStyles = window.getComputedStyle(this.el);
        var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
        if (transDuration && transDuration !== '0s') {
          type = TYPE_TRANSITION;
        } else {
          var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
          if (animDuration && animDuration !== '0s') {
            type = TYPE_ANIMATION;
          }
        }
        if (type) {
          this.typeCache[className] = type;
        }
        return type;
      };
      p.setupCssCb = function(event, cb) {
        this.pendingCssEvent = event;
        var self = this;
        var el = this.el;
        var onEnd = this.pendingCssCb = function(e) {
          if (e.target === el) {
            _.off(el, event, onEnd);
            self.pendingCssEvent = self.pendingCssCb = null;
            if (!self.pendingJsCb && cb) {
              cb();
            }
          }
        };
        _.on(el, event, onEnd);
      };
      function isHidden(el) {
        return !(el.offsetWidth && el.offsetHeight && el.getClientRects().length);
      }
      module.exports = Transition;
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var queue = [];
      var queued = false;
      exports.push = function(job) {
        queue.push(job);
        if (!queued) {
          queued = true;
          _.nextTick(flush);
        }
      };
      function flush() {
        var f = document.documentElement.offsetHeight;
        for (var i = 0; i < queue.length; i++) {
          queue[i]();
        }
        queue = [];
        queued = false;
        return f;
      }
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var dirParser = __webpack_require__(8);
      var propDef = __webpack_require__(39);
      var propBindingModes = __webpack_require__(5)._propBindingModes;
      var empty = {};
      var identRE = __webpack_require__(43).identRE;
      var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
      module.exports = function compileProps(el, propOptions) {
        var props = [];
        var names = Object.keys(propOptions);
        var i = names.length;
        var options,
            name,
            attr,
            value,
            path,
            parsed,
            prop;
        while (i--) {
          name = names[i];
          options = propOptions[name] || empty;
          if (("development") !== 'production' && name === '$data') {
            _.warn('Do not use $data as prop.');
            continue;
          }
          path = _.camelize(name);
          if (!identRE.test(path)) {
            ("development") !== 'production' && _.warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
            continue;
          }
          prop = {
            name: name,
            path: path,
            options: options,
            mode: propBindingModes.ONE_WAY,
            raw: null
          };
          attr = _.hyphenate(name);
          if ((value = _.getBindAttr(el, attr)) === null) {
            if ((value = _.getBindAttr(el, attr + '.sync')) !== null) {
              prop.mode = propBindingModes.TWO_WAY;
            } else if ((value = _.getBindAttr(el, attr + '.once')) !== null) {
              prop.mode = propBindingModes.ONE_TIME;
            }
          }
          if (value !== null) {
            prop.raw = value;
            parsed = dirParser.parse(value);
            value = parsed.expression;
            prop.filters = parsed.filters;
            if (_.isLiteral(value)) {
              prop.optimizedLiteral = true;
            } else {
              prop.dynamic = true;
              if (("development") !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
                prop.mode = propBindingModes.ONE_WAY;
                _.warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);
              }
            }
            prop.parentPath = value;
            if (("development") !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
              _.warn('Prop "' + name + '" expects a two-way binding type.');
            }
          } else if ((value = _.attr(el, attr)) !== null) {
            prop.raw = value;
          } else if (options.required) {
            ("development") !== 'production' && _.warn('Missing required prop: ' + name);
          }
          props.push(prop);
        }
        return makePropsLinkFn(props);
      };
      function makePropsLinkFn(props) {
        return function propsLinkFn(vm, scope) {
          vm._props = {};
          var i = props.length;
          var prop,
              path,
              options,
              value,
              raw;
          while (i--) {
            prop = props[i];
            raw = prop.raw;
            path = prop.path;
            options = prop.options;
            vm._props[path] = prop;
            if (raw === null) {
              _.initProp(vm, prop, getDefault(vm, options));
            } else if (prop.dynamic) {
              if (vm._context) {
                if (prop.mode === propBindingModes.ONE_TIME) {
                  value = (scope || vm._context).$get(prop.parentPath);
                  _.initProp(vm, prop, value);
                } else {
                  vm._bindDir({
                    name: 'prop',
                    def: propDef,
                    prop: prop
                  }, null, null, scope);
                }
              } else {
                ("development") !== 'production' && _.warn('Cannot bind dynamic prop on a root instance' + ' with no parent: ' + prop.name + '="' + raw + '"');
              }
            } else if (prop.optimizedLiteral) {
              var stripped = _.stripQuotes(raw);
              value = stripped === raw ? _.toBoolean(_.toNumber(raw)) : stripped;
              _.initProp(vm, prop, value);
            } else {
              value = options.type === Boolean && raw === '' ? true : raw;
              _.initProp(vm, prop, value);
            }
          }
        };
      }
      function getDefault(vm, options) {
        if (!options.hasOwnProperty('default')) {
          return options.type === Boolean ? false : undefined;
        }
        var def = options.default;
        if (_.isObject(def)) {
          ("development") !== 'production' && _.warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
        }
        return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
      }
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var templateParser = __webpack_require__(19);
      var specialCharRE = /[^\w\-:\.]/;
      exports.transclude = function(el, options) {
        if (options) {
          options._containerAttrs = extractAttrs(el);
        }
        if (_.isTemplate(el)) {
          el = templateParser.parse(el);
        }
        if (options) {
          if (options._asComponent && !options.template) {
            options.template = '<slot></slot>';
          }
          if (options.template) {
            options._content = _.extractContent(el);
            el = transcludeTemplate(el, options);
          }
        }
        if (el instanceof DocumentFragment) {
          _.prepend(_.createAnchor('v-start', true), el);
          el.appendChild(_.createAnchor('v-end', true));
        }
        return el;
      };
      function transcludeTemplate(el, options) {
        var template = options.template;
        var frag = templateParser.parse(template, true);
        if (frag) {
          var replacer = frag.firstChild;
          var tag = replacer.tagName && replacer.tagName.toLowerCase();
          if (options.replace) {
            if (el === document.body) {
              ("development") !== 'production' && _.warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
            }
            if (frag.childNodes.length > 1 || replacer.nodeType !== 1 || tag === 'component' || _.resolveAsset(options, 'components', tag) || replacer.hasAttribute('is') || replacer.hasAttribute(':is') || replacer.hasAttribute('v-bind:is') || _.resolveAsset(options, 'elementDirectives', tag) || replacer.hasAttribute('v-for') || replacer.hasAttribute('v-if')) {
              return frag;
            } else {
              options._replacerAttrs = extractAttrs(replacer);
              mergeAttrs(el, replacer);
              return replacer;
            }
          } else {
            el.appendChild(frag);
            return el;
          }
        } else {
          ("development") !== 'production' && _.warn('Invalid template option: ' + template);
        }
      }
      function extractAttrs(el) {
        if (el.nodeType === 1 && el.hasAttributes()) {
          return _.toArray(el.attributes);
        }
      }
      function mergeAttrs(from, to) {
        var attrs = from.attributes;
        var i = attrs.length;
        var name,
            value;
        while (i--) {
          name = attrs[i].name;
          value = attrs[i].value;
          if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
            to.setAttribute(name, value);
          } else if (name === 'class') {
            value = to.getAttribute(name) + ' ' + value;
            to.setAttribute(name, value);
          }
        }
      }
    }, function(module, exports, __webpack_require__) {
      exports.slot = __webpack_require__(51);
      exports.partial = __webpack_require__(52);
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var templateParser = __webpack_require__(19);
      module.exports = {
        priority: 1750,
        params: ['name'],
        bind: function() {
          var host = this.vm;
          var raw = host.$options._content;
          var content;
          if (!raw) {
            this.fallback();
            return;
          }
          var context = host._context;
          var slotName = this.params.name;
          if (!slotName) {
            var self = this;
            var compileDefaultContent = function() {
              self.compile(extractFragment(raw.childNodes, raw, true), context, host);
            };
            if (!host._isCompiled) {
              host.$once('hook:compiled', compileDefaultContent);
            } else {
              compileDefaultContent();
            }
          } else {
            var selector = '[slot="' + slotName + '"]';
            var nodes = raw.querySelectorAll(selector);
            if (nodes.length) {
              content = extractFragment(nodes, raw);
              if (content.hasChildNodes()) {
                this.compile(content, context, host);
              } else {
                this.fallback();
              }
            } else {
              this.fallback();
            }
          }
        },
        fallback: function() {
          this.compile(_.extractContent(this.el, true), this.vm);
        },
        compile: function(content, context, host) {
          if (content && context) {
            var scope = host ? host._scope : this._scope;
            this.unlink = context.$compile(content, host, scope, this._frag);
          }
          if (content) {
            _.replace(this.el, content);
          } else {
            _.remove(this.el);
          }
        },
        unbind: function() {
          if (this.unlink) {
            this.unlink();
          }
        }
      };
      function extractFragment(nodes, parent, main) {
        var frag = document.createDocumentFragment();
        for (var i = 0,
            l = nodes.length; i < l; i++) {
          var node = nodes[i];
          if (main && !node.__v_selected) {
            append(node);
          } else if (!main && node.parentNode === parent) {
            node.__v_selected = true;
            append(node);
          }
        }
        return frag;
        function append(node) {
          if (_.isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
            node = templateParser.parse(node);
          }
          node = templateParser.clone(node);
          frag.appendChild(node);
        }
      }
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var vIf = __webpack_require__(23);
      var FragmentFactory = __webpack_require__(21);
      module.exports = {
        priority: 1750,
        params: ['name'],
        paramWatchers: {name: function(value) {
            vIf.remove.call(this);
            if (value) {
              this.insert(value);
            }
          }},
        bind: function() {
          this.anchor = _.createAnchor('v-partial');
          _.replace(this.el, this.anchor);
          this.insert(this.params.name);
        },
        insert: function(id) {
          var partial = _.resolveAsset(this.vm.$options, 'partials', id);
          if (true) {
            _.assertAsset(partial, 'partial', id);
          }
          if (partial) {
            this.factory = new FragmentFactory(this.vm, partial);
            vIf.insert.call(this);
          }
        },
        unbind: function() {
          if (this.frag) {
            this.frag.destroy();
          }
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      exports.json = {
        read: function(value, indent) {
          return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
        },
        write: function(value) {
          try {
            return JSON.parse(value);
          } catch (e) {
            return value;
          }
        }
      };
      exports.capitalize = function(value) {
        if (!value && value !== 0)
          return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      };
      exports.uppercase = function(value) {
        return (value || value === 0) ? value.toString().toUpperCase() : '';
      };
      exports.lowercase = function(value) {
        return (value || value === 0) ? value.toString().toLowerCase() : '';
      };
      var digitsRE = /(\d{3})(?=\d)/g;
      exports.currency = function(value, currency) {
        value = parseFloat(value);
        if (!isFinite(value) || (!value && value !== 0))
          return '';
        currency = currency != null ? currency : '$';
        var stringified = Math.abs(value).toFixed(2);
        var _int = stringified.slice(0, -3);
        var i = _int.length % 3;
        var head = i > 0 ? (_int.slice(0, i) + (_int.length > 3 ? ',' : '')) : '';
        var _float = stringified.slice(-3);
        var sign = value < 0 ? '-' : '';
        return currency + sign + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
      };
      exports.pluralize = function(value) {
        var args = _.toArray(arguments, 1);
        return args.length > 1 ? (args[value % 10 - 1] || args[args.length - 1]) : (args[0] + (value === 1 ? '' : 's'));
      };
      exports.debounce = function(handler, delay) {
        if (!handler)
          return;
        if (!delay) {
          delay = 300;
        }
        return _.debounce(handler, delay);
      };
      _.extend(exports, __webpack_require__(54));
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var Path = __webpack_require__(43);
      var toArray = __webpack_require__(20)._postProcess;
      exports.limitBy = function(arr, n, offset) {
        offset = offset ? parseInt(offset, 10) : 0;
        return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
      };
      exports.filterBy = function(arr, search, delimiter) {
        arr = toArray(arr);
        if (search == null) {
          return arr;
        }
        if (typeof search === 'function') {
          return arr.filter(search);
        }
        search = ('' + search).toLowerCase();
        var n = delimiter === 'in' ? 3 : 2;
        var keys = _.toArray(arguments, n).reduce(function(prev, cur) {
          return prev.concat(cur);
        }, []);
        var res = [];
        var item,
            key,
            val,
            j;
        for (var i = 0,
            l = arr.length; i < l; i++) {
          item = arr[i];
          val = (item && item.$value) || item;
          j = keys.length;
          if (j) {
            while (j--) {
              key = keys[j];
              if ((key === '$key' && contains(item.$key, search)) || contains(Path.get(val, key), search)) {
                res.push(item);
                break;
              }
            }
          } else if (contains(item, search)) {
            res.push(item);
          }
        }
        return res;
      };
      exports.orderBy = function(arr, sortKey, reverse) {
        arr = toArray(arr);
        if (!sortKey) {
          return arr;
        }
        var order = (reverse && reverse < 0) ? -1 : 1;
        return arr.slice().sort(function(a, b) {
          if (sortKey !== '$key') {
            if (_.isObject(a) && '$value' in a)
              a = a.$value;
            if (_.isObject(b) && '$value' in b)
              b = b.$value;
          }
          a = _.isObject(a) ? Path.get(a, sortKey) : a;
          b = _.isObject(b) ? Path.get(b, sortKey) : b;
          return a === b ? 0 : a > b ? order : -order;
        });
      };
      function contains(val, search) {
        var i;
        if (_.isPlainObject(val)) {
          var keys = Object.keys(val);
          i = keys.length;
          while (i--) {
            if (contains(val[keys[i]], search)) {
              return true;
            }
          }
        } else if (_.isArray(val)) {
          i = val.length;
          while (i--) {
            if (contains(val[i], search)) {
              return true;
            }
          }
        } else if (val != null) {
          return val.toString().toLowerCase().indexOf(search) > -1;
        }
      }
    }, function(module, exports, __webpack_require__) {
      var mergeOptions = __webpack_require__(1).mergeOptions;
      var uid = 0;
      exports._init = function(options) {
        options = options || {};
        this.$el = null;
        this.$parent = options.parent;
        this.$root = this.$parent ? this.$parent.$root : this;
        this.$children = [];
        this.$refs = {};
        this.$els = {};
        this._watchers = [];
        this._directives = [];
        this._uid = uid++;
        this._isVue = true;
        this._events = {};
        this._eventsCount = {};
        this._shouldPropagate = false;
        this._isFragment = false;
        this._fragment = this._fragmentStart = this._fragmentEnd = null;
        this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = false;
        this._unlinkFn = null;
        this._context = options._context || this.$parent;
        this._scope = options._scope;
        this._frag = options._frag;
        if (this._frag) {
          this._frag.children.push(this);
        }
        if (this.$parent) {
          this.$parent.$children.push(this);
        }
        options = this.$options = mergeOptions(this.constructor.options, options, this);
        this._updateRef();
        this._data = {};
        this._callHook('init');
        this._initState();
        this._initEvents();
        this._callHook('created');
        if (options.el) {
          this.$mount(options.el);
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var inDoc = _.inDoc;
      var eventRE = /^v-on:|^@/;
      exports._initEvents = function() {
        var options = this.$options;
        if (options._asComponent) {
          registerComponentEvents(this, options.el);
        }
        registerCallbacks(this, '$on', options.events);
        registerCallbacks(this, '$watch', options.watch);
      };
      function registerComponentEvents(vm, el) {
        var attrs = el.attributes;
        var name,
            handler;
        for (var i = 0,
            l = attrs.length; i < l; i++) {
          name = attrs[i].name;
          if (eventRE.test(name)) {
            name = name.replace(eventRE, '');
            handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
            vm.$on(name.replace(eventRE), handler);
          }
        }
      }
      function registerCallbacks(vm, action, hash) {
        if (!hash)
          return;
        var handlers,
            key,
            i,
            j;
        for (key in hash) {
          handlers = hash[key];
          if (_.isArray(handlers)) {
            for (i = 0, j = handlers.length; i < j; i++) {
              register(vm, action, key, handlers[i]);
            }
          } else {
            register(vm, action, key, handlers);
          }
        }
      }
      function register(vm, action, key, handler, options) {
        var type = typeof handler;
        if (type === 'function') {
          vm[action](key, handler, options);
        } else if (type === 'string') {
          var methods = vm.$options.methods;
          var method = methods && methods[handler];
          if (method) {
            vm[action](key, method, options);
          } else {
            ("development") !== 'production' && _.warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
          }
        } else if (handler && type === 'object') {
          register(vm, action, key, handler.handler, handler);
        }
      }
      exports._initDOMHooks = function() {
        this.$on('hook:attached', onAttached);
        this.$on('hook:detached', onDetached);
      };
      function onAttached() {
        if (!this._isAttached) {
          this._isAttached = true;
          this.$children.forEach(callAttach);
        }
      }
      function callAttach(child) {
        if (!child._isAttached && inDoc(child.$el)) {
          child._callHook('attached');
        }
      }
      function onDetached() {
        if (this._isAttached) {
          this._isAttached = false;
          this.$children.forEach(callDetach);
        }
      }
      function callDetach(child) {
        if (child._isAttached && !inDoc(child.$el)) {
          child._callHook('detached');
        }
      }
      exports._callHook = function(hook) {
        var handlers = this.$options[hook];
        if (handlers) {
          for (var i = 0,
              j = handlers.length; i < j; i++) {
            handlers[i].call(this);
          }
        }
        this.$emit('hook:' + hook);
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var compiler = __webpack_require__(14);
      var Observer = __webpack_require__(58);
      var Dep = __webpack_require__(41);
      var Watcher = __webpack_require__(40);
      exports._initState = function() {
        this._initProps();
        this._initMeta();
        this._initMethods();
        this._initData();
        this._initComputed();
      };
      exports._initProps = function() {
        var options = this.$options;
        var el = options.el;
        var props = options.props;
        if (props && !el) {
          ("development") !== 'production' && _.warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
        }
        el = options.el = _.query(el);
        this._propsUnlinkFn = el && el.nodeType === 1 && props ? compiler.compileAndLinkProps(this, el, props, this._scope) : null;
      };
      exports._initData = function() {
        var propsData = this._data;
        var optionsDataFn = this.$options.data;
        var optionsData = optionsDataFn && optionsDataFn();
        if (optionsData) {
          this._data = optionsData;
          for (var prop in propsData) {
            if (("development") !== 'production' && optionsData.hasOwnProperty(prop)) {
              _.warn('Data field "' + prop + '" is already defined ' + 'as a prop. Use prop default value instead.');
            }
            if (this._props[prop].raw !== null || !optionsData.hasOwnProperty(prop)) {
              _.set(optionsData, prop, propsData[prop]);
            }
          }
        }
        var data = this._data;
        var keys = Object.keys(data);
        var i,
            key;
        i = keys.length;
        while (i--) {
          key = keys[i];
          this._proxy(key);
        }
        Observer.create(data, this);
      };
      exports._setData = function(newData) {
        newData = newData || {};
        var oldData = this._data;
        this._data = newData;
        var keys,
            key,
            i;
        keys = Object.keys(oldData);
        i = keys.length;
        while (i--) {
          key = keys[i];
          if (!(key in newData)) {
            this._unproxy(key);
          }
        }
        keys = Object.keys(newData);
        i = keys.length;
        while (i--) {
          key = keys[i];
          if (!this.hasOwnProperty(key)) {
            this._proxy(key);
          }
        }
        oldData.__ob__.removeVm(this);
        Observer.create(newData, this);
        this._digest();
      };
      exports._proxy = function(key) {
        if (!_.isReserved(key)) {
          var self = this;
          Object.defineProperty(self, key, {
            configurable: true,
            enumerable: true,
            get: function proxyGetter() {
              return self._data[key];
            },
            set: function proxySetter(val) {
              self._data[key] = val;
            }
          });
        }
      };
      exports._unproxy = function(key) {
        if (!_.isReserved(key)) {
          delete this[key];
        }
      };
      exports._digest = function() {
        for (var i = 0,
            l = this._watchers.length; i < l; i++) {
          this._watchers[i].update(true);
        }
      };
      function noop() {}
      exports._initComputed = function() {
        var computed = this.$options.computed;
        if (computed) {
          for (var key in computed) {
            var userDef = computed[key];
            var def = {
              enumerable: true,
              configurable: true
            };
            if (typeof userDef === 'function') {
              def.get = makeComputedGetter(userDef, this);
              def.set = noop;
            } else {
              def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : _.bind(userDef.get, this) : noop;
              def.set = userDef.set ? _.bind(userDef.set, this) : noop;
            }
            Object.defineProperty(this, key, def);
          }
        }
      };
      function makeComputedGetter(getter, owner) {
        var watcher = new Watcher(owner, getter, null, {lazy: true});
        return function computedGetter() {
          if (watcher.dirty) {
            watcher.evaluate();
          }
          if (Dep.target) {
            watcher.depend();
          }
          return watcher.value;
        };
      }
      exports._initMethods = function() {
        var methods = this.$options.methods;
        if (methods) {
          for (var key in methods) {
            this[key] = _.bind(methods[key], this);
          }
        }
      };
      exports._initMeta = function() {
        var metas = this.$options._meta;
        if (metas) {
          for (var key in metas) {
            _.defineReactive(this, key, metas[key]);
          }
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var Dep = __webpack_require__(41);
      var arrayMethods = __webpack_require__(59);
      var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
      function Observer(value) {
        this.value = value;
        this.dep = new Dep();
        _.define(value, '__ob__', this);
        if (_.isArray(value)) {
          var augment = _.hasProto ? protoAugment : copyAugment;
          augment(value, arrayMethods, arrayKeys);
          this.observeArray(value);
        } else {
          this.walk(value);
        }
      }
      Observer.create = function(value, vm) {
        if (!value || typeof value !== 'object') {
          return;
        }
        var ob;
        if (value.hasOwnProperty('__ob__') && value.__ob__ instanceof Observer) {
          ob = value.__ob__;
        } else if ((_.isArray(value) || _.isPlainObject(value)) && !Object.isFrozen(value) && !value._isVue) {
          ob = new Observer(value);
        }
        if (ob && vm) {
          ob.addVm(vm);
        }
        return ob;
      };
      Observer.prototype.walk = function(obj) {
        var keys = Object.keys(obj);
        var i = keys.length;
        while (i--) {
          this.convert(keys[i], obj[keys[i]]);
        }
      };
      Observer.prototype.observeArray = function(items) {
        var i = items.length;
        while (i--) {
          Observer.create(items[i]);
        }
      };
      Observer.prototype.convert = function(key, val) {
        defineReactive(this.value, key, val);
      };
      Observer.prototype.addVm = function(vm) {
        (this.vms || (this.vms = [])).push(vm);
      };
      Observer.prototype.removeVm = function(vm) {
        this.vms.$remove(vm);
      };
      function protoAugment(target, src) {
        target.__proto__ = src;
      }
      function copyAugment(target, src, keys) {
        var i = keys.length;
        var key;
        while (i--) {
          key = keys[i];
          _.define(target, key, src[key]);
        }
      }
      function defineReactive(obj, key, val) {
        var dep = new Dep();
        var childOb = Observer.create(val);
        Object.defineProperty(obj, key, {
          enumerable: true,
          configurable: true,
          get: function metaGetter() {
            if (Dep.target) {
              dep.depend();
              if (childOb) {
                childOb.dep.depend();
              }
              if (_.isArray(val)) {
                for (var e,
                    i = 0,
                    l = val.length; i < l; i++) {
                  e = val[i];
                  e && e.__ob__ && e.__ob__.dep.depend();
                }
              }
            }
            return val;
          },
          set: function metaSetter(newVal) {
            if (newVal === val)
              return;
            val = newVal;
            childOb = Observer.create(newVal);
            dep.notify();
          }
        });
      }
      _.defineReactive = defineReactive;
      module.exports = Observer;
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var arrayProto = Array.prototype;
      var arrayMethods = Object.create(arrayProto);
      ;
      ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function(method) {
        var original = arrayProto[method];
        _.define(arrayMethods, method, function mutator() {
          var i = arguments.length;
          var args = new Array(i);
          while (i--) {
            args[i] = arguments[i];
          }
          var result = original.apply(this, args);
          var ob = this.__ob__;
          var inserted;
          switch (method) {
            case 'push':
              inserted = args;
              break;
            case 'unshift':
              inserted = args;
              break;
            case 'splice':
              inserted = args.slice(2);
              break;
          }
          if (inserted)
            ob.observeArray(inserted);
          ob.dep.notify();
          return result;
        });
      });
      _.define(arrayProto, '$set', function $set(index, val) {
        if (index >= this.length) {
          this.length = index + 1;
        }
        return this.splice(index, 1, val)[0];
      });
      _.define(arrayProto, '$remove', function $remove(item) {
        if (!this.length)
          return;
        var index = _.indexOf(this, item);
        if (index > -1) {
          return this.splice(index, 1);
        }
      });
      module.exports = arrayMethods;
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var Directive = __webpack_require__(61);
      var compiler = __webpack_require__(14);
      exports._updateRef = function(remove) {
        var ref = this.$options._ref;
        if (ref) {
          var refs = (this._scope || this._context).$refs;
          if (remove) {
            if (refs[ref] === this) {
              refs[ref] = null;
            }
          } else {
            refs[ref] = this;
          }
        }
      };
      exports._compile = function(el) {
        var options = this.$options;
        var original = el;
        el = compiler.transclude(el, options);
        this._initElement(el);
        var contextOptions = this._context && this._context.$options;
        var rootLinker = compiler.compileRoot(el, options, contextOptions);
        var contentLinkFn;
        var ctor = this.constructor;
        if (options._linkerCachable) {
          contentLinkFn = ctor.linker;
          if (!contentLinkFn) {
            contentLinkFn = ctor.linker = compiler.compile(el, options);
          }
        }
        var rootUnlinkFn = rootLinker(this, el, this._scope);
        var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compiler.compile(el, options)(this, el);
        this._unlinkFn = function() {
          rootUnlinkFn();
          contentUnlinkFn(true);
        };
        if (options.replace) {
          _.replace(original, el);
        }
        this._isCompiled = true;
        this._callHook('compiled');
        return el;
      };
      exports._initElement = function(el) {
        if (el instanceof DocumentFragment) {
          this._isFragment = true;
          this.$el = this._fragmentStart = el.firstChild;
          this._fragmentEnd = el.lastChild;
          if (this._fragmentStart.nodeType === 3) {
            this._fragmentStart.data = this._fragmentEnd.data = '';
          }
          this._fragment = el;
        } else {
          this.$el = el;
        }
        this.$el.__vue__ = this;
        this._callHook('beforeCompile');
      };
      exports._bindDir = function(descriptor, node, host, scope, frag) {
        this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
      };
      exports._destroy = function(remove, deferCleanup) {
        if (this._isBeingDestroyed) {
          if (!deferCleanup) {
            this._cleanup();
          }
          return;
        }
        this._callHook('beforeDestroy');
        this._isBeingDestroyed = true;
        var i;
        var parent = this.$parent;
        if (parent && !parent._isBeingDestroyed) {
          parent.$children.$remove(this);
          this._updateRef(true);
        }
        i = this.$children.length;
        while (i--) {
          this.$children[i].$destroy();
        }
        if (this._propsUnlinkFn) {
          this._propsUnlinkFn();
        }
        if (this._unlinkFn) {
          this._unlinkFn();
        }
        i = this._watchers.length;
        while (i--) {
          this._watchers[i].teardown();
        }
        if (this.$el) {
          this.$el.__vue__ = null;
        }
        var self = this;
        if (remove && this.$el) {
          this.$remove(function() {
            self._cleanup();
          });
        } else if (!deferCleanup) {
          this._cleanup();
        }
      };
      exports._cleanup = function() {
        if (this._isDestroyed) {
          return;
        }
        if (this._frag) {
          this._frag.children.$remove(this);
        }
        if (this._data.__ob__) {
          this._data.__ob__.removeVm(this);
        }
        this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
        this._isDestroyed = true;
        this._callHook('destroyed');
        this.$off();
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var Watcher = __webpack_require__(40);
      var expParser = __webpack_require__(42);
      function noop() {}
      function Directive(descriptor, vm, el, host, scope, frag) {
        this.vm = vm;
        this.el = el;
        this.descriptor = descriptor;
        this.name = descriptor.name;
        this.expression = descriptor.expression;
        this.arg = descriptor.arg;
        this.modifiers = descriptor.modifiers;
        this.filters = descriptor.filters;
        this.literal = this.modifiers && this.modifiers.literal;
        this._locked = false;
        this._bound = false;
        this._listeners = null;
        this._host = host;
        this._scope = scope;
        this._frag = frag;
        if (("development") !== 'production' && this.el) {
          this.el._vue_directives = this.el._vue_directives || [];
          this.el._vue_directives.push(this);
        }
      }
      Directive.prototype._bind = function() {
        var name = this.name;
        var descriptor = this.descriptor;
        if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
          var attr = descriptor.attr || ('v-' + name);
          this.el.removeAttribute(attr);
        }
        var def = descriptor.def;
        if (typeof def === 'function') {
          this.update = def;
        } else {
          _.extend(this, def);
        }
        this._setupParams();
        if (this.bind) {
          this.bind();
        }
        if (this.literal) {
          this.update && this.update(descriptor.raw);
        } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
          var dir = this;
          if (this.update) {
            this._update = function(val, oldVal) {
              if (!dir._locked) {
                dir.update(val, oldVal);
              }
            };
          } else {
            this._update = noop;
          }
          var preProcess = this._preProcess ? _.bind(this._preProcess, this) : null;
          var postProcess = this._postProcess ? _.bind(this._postProcess, this) : null;
          var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, {
            filters: this.filters,
            twoWay: this.twoWay,
            deep: this.deep,
            preProcess: preProcess,
            postProcess: postProcess,
            scope: this._scope
          });
          if (this.afterBind) {
            this.afterBind();
          } else if (this.update) {
            this.update(watcher.value);
          }
        }
        this._bound = true;
      };
      Directive.prototype._setupParams = function() {
        if (!this.params) {
          return;
        }
        var params = this.params;
        this.params = Object.create(null);
        var i = params.length;
        var key,
            val,
            mappedKey;
        while (i--) {
          key = params[i];
          mappedKey = _.camelize(key);
          val = _.getBindAttr(this.el, key);
          if (val != null) {
            this._setupParamWatcher(mappedKey, val);
          } else {
            val = _.attr(this.el, key);
            if (val != null) {
              this.params[mappedKey] = val === '' ? true : val;
            }
          }
        }
      };
      Directive.prototype._setupParamWatcher = function(key, expression) {
        var self = this;
        var called = false;
        var unwatch = (this._scope || this.vm).$watch(expression, function(val, oldVal) {
          self.params[key] = val;
          if (called) {
            var cb = self.paramWatchers && self.paramWatchers[key];
            if (cb) {
              cb.call(self, val, oldVal);
            }
          } else {
            called = true;
          }
        }, {immediate: true});
        ;
        (this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
      };
      Directive.prototype._checkStatement = function() {
        var expression = this.expression;
        if (expression && this.acceptStatement && !expParser.isSimplePath(expression)) {
          var fn = expParser.parse(expression).get;
          var scope = this._scope || this.vm;
          var handler = function() {
            fn.call(scope, scope);
          };
          if (this.filters) {
            handler = scope._applyFilters(handler, null, this.filters);
          }
          this.update(handler);
          return true;
        }
      };
      Directive.prototype.set = function(value) {
        if (this.twoWay) {
          this._withLock(function() {
            this._watcher.set(value);
          });
        } else if (true) {
          _.warn('Directive.set() can only be used inside twoWay' + 'directives.');
        }
      };
      Directive.prototype._withLock = function(fn) {
        var self = this;
        self._locked = true;
        fn.call(self);
        _.nextTick(function() {
          self._locked = false;
        });
      };
      Directive.prototype.on = function(event, handler) {
        _.on(this.el, event, handler);
        ;
        (this._listeners || (this._listeners = [])).push([event, handler]);
      };
      Directive.prototype._teardown = function() {
        if (this._bound) {
          this._bound = false;
          if (this.unbind) {
            this.unbind();
          }
          if (this._watcher) {
            this._watcher.teardown();
          }
          var listeners = this._listeners;
          var i;
          if (listeners) {
            i = listeners.length;
            while (i--) {
              _.off(this.el, listeners[i][0], listeners[i][1]);
            }
          }
          var unwatchFns = this._paramUnwatchFns;
          if (unwatchFns) {
            i = unwatchFns.length;
            while (i--) {
              unwatchFns[i]();
            }
          }
          if (("development") !== 'production' && this.el) {
            this.el._vue_directives.$remove(this);
          }
          this.vm = this.el = this._watcher = this._listeners = null;
        }
      };
      module.exports = Directive;
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      exports._applyFilters = function(value, oldValue, filters, write) {
        var filter,
            fn,
            args,
            arg,
            offset,
            i,
            l,
            j,
            k;
        for (i = 0, l = filters.length; i < l; i++) {
          filter = filters[i];
          fn = _.resolveAsset(this.$options, 'filters', filter.name);
          if (true) {
            _.assertAsset(fn, 'filter', filter.name);
          }
          if (!fn)
            continue;
          fn = write ? fn.write : (fn.read || fn);
          if (typeof fn !== 'function')
            continue;
          args = write ? [value, oldValue] : [value];
          offset = write ? 2 : 1;
          if (filter.args) {
            for (j = 0, k = filter.args.length; j < k; j++) {
              arg = filter.args[j];
              args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
            }
          }
          value = fn.apply(this, args);
        }
        return value;
      };
      exports._resolveComponent = function(id, cb) {
        var factory = _.resolveAsset(this.$options, 'components', id);
        if (true) {
          _.assertAsset(factory, 'component', id);
        }
        if (!factory) {
          return;
        }
        if (!factory.options) {
          if (factory.resolved) {
            cb(factory.resolved);
          } else if (factory.requested) {
            factory.pendingCallbacks.push(cb);
          } else {
            factory.requested = true;
            var cbs = factory.pendingCallbacks = [cb];
            factory(function resolve(res) {
              if (_.isPlainObject(res)) {
                res = _.Vue.extend(res);
              }
              factory.resolved = res;
              for (var i = 0,
                  l = cbs.length; i < l; i++) {
                cbs[i](res);
              }
            }, function reject(reason) {
              ("development") !== 'production' && _.warn('Failed to resolve async component: ' + id + '. ' + (reason ? '\nReason: ' + reason : ''));
            });
          }
        } else {
          cb(factory);
        }
      };
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var Watcher = __webpack_require__(40);
      var Path = __webpack_require__(43);
      var textParser = __webpack_require__(6);
      var dirParser = __webpack_require__(8);
      var expParser = __webpack_require__(42);
      var filterRE = /[^|]\|[^|]/;
      exports.$get = function(exp, asStatement) {
        var res = expParser.parse(exp);
        if (res) {
          if (asStatement && !expParser.isSimplePath(exp)) {
            var self = this;
            return function statementHandler() {
              res.get.call(self, self);
            };
          } else {
            try {
              return res.get.call(this, this);
            } catch (e) {}
          }
        }
      };
      exports.$set = function(exp, val) {
        var res = expParser.parse(exp, true);
        if (res && res.set) {
          res.set.call(this, this, val);
        }
      };
      exports.$delete = function(key) {
        _.delete(this._data, key);
      };
      exports.$watch = function(expOrFn, cb, options) {
        var vm = this;
        var parsed;
        if (typeof expOrFn === 'string') {
          parsed = dirParser.parse(expOrFn);
          expOrFn = parsed.expression;
        }
        var watcher = new Watcher(vm, expOrFn, cb, {
          deep: options && options.deep,
          filters: parsed && parsed.filters
        });
        if (options && options.immediate) {
          cb.call(vm, watcher.value);
        }
        return function unwatchFn() {
          watcher.teardown();
        };
      };
      exports.$eval = function(text, asStatement) {
        if (filterRE.test(text)) {
          var dir = dirParser.parse(text);
          var val = this.$get(dir.expression, asStatement);
          return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
        } else {
          return this.$get(text, asStatement);
        }
      };
      exports.$interpolate = function(text) {
        var tokens = textParser.parse(text);
        var vm = this;
        if (tokens) {
          if (tokens.length === 1) {
            return vm.$eval(tokens[0].value) + '';
          } else {
            return tokens.map(function(token) {
              return token.tag ? vm.$eval(token.value) : token.value;
            }).join('');
          }
        } else {
          return text;
        }
      };
      exports.$log = function(path) {
        var data = path ? Path.get(this._data, path) : this._data;
        if (data) {
          data = clean(data);
        }
        if (!path) {
          for (var key in this.$options.computed) {
            data[key] = clean(this[key]);
          }
        }
        console.log(data);
      };
      function clean(obj) {
        return JSON.parse(JSON.stringify(obj));
      }
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var transition = __webpack_require__(9);
      exports.$nextTick = function(fn) {
        _.nextTick(fn, this);
      };
      exports.$appendTo = function(target, cb, withTransition) {
        return insert(this, target, cb, withTransition, append, transition.append);
      };
      exports.$prependTo = function(target, cb, withTransition) {
        target = query(target);
        if (target.hasChildNodes()) {
          this.$before(target.firstChild, cb, withTransition);
        } else {
          this.$appendTo(target, cb, withTransition);
        }
        return this;
      };
      exports.$before = function(target, cb, withTransition) {
        return insert(this, target, cb, withTransition, before, transition.before);
      };
      exports.$after = function(target, cb, withTransition) {
        target = query(target);
        if (target.nextSibling) {
          this.$before(target.nextSibling, cb, withTransition);
        } else {
          this.$appendTo(target.parentNode, cb, withTransition);
        }
        return this;
      };
      exports.$remove = function(cb, withTransition) {
        if (!this.$el.parentNode) {
          return cb && cb();
        }
        var inDoc = this._isAttached && _.inDoc(this.$el);
        if (!inDoc)
          withTransition = false;
        var self = this;
        var realCb = function() {
          if (inDoc)
            self._callHook('detached');
          if (cb)
            cb();
        };
        if (this._isFragment) {
          _.removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
        } else {
          var op = withTransition === false ? remove : transition.remove;
          op(this.$el, this, realCb);
        }
        return this;
      };
      function insert(vm, target, cb, withTransition, op1, op2) {
        target = query(target);
        var targetIsDetached = !_.inDoc(target);
        var op = withTransition === false || targetIsDetached ? op1 : op2;
        var shouldCallHook = !targetIsDetached && !vm._isAttached && !_.inDoc(vm.$el);
        if (vm._isFragment) {
          _.mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function(node) {
            op(node, target, vm);
          });
          cb && cb();
        } else {
          op(vm.$el, target, vm, cb);
        }
        if (shouldCallHook) {
          vm._callHook('attached');
        }
        return vm;
      }
      function query(el) {
        return typeof el === 'string' ? document.querySelector(el) : el;
      }
      function append(el, target, vm, cb) {
        target.appendChild(el);
        if (cb)
          cb();
      }
      function before(el, target, vm, cb) {
        _.before(el, target);
        if (cb)
          cb();
      }
      function remove(el, vm, cb) {
        _.remove(el);
        if (cb)
          cb();
      }
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      exports.$on = function(event, fn) {
        (this._events[event] || (this._events[event] = [])).push(fn);
        modifyListenerCount(this, event, 1);
        return this;
      };
      exports.$once = function(event, fn) {
        var self = this;
        function on() {
          self.$off(event, on);
          fn.apply(this, arguments);
        }
        on.fn = fn;
        this.$on(event, on);
        return this;
      };
      exports.$off = function(event, fn) {
        var cbs;
        if (!arguments.length) {
          if (this.$parent) {
            for (event in this._events) {
              cbs = this._events[event];
              if (cbs) {
                modifyListenerCount(this, event, -cbs.length);
              }
            }
          }
          this._events = {};
          return this;
        }
        cbs = this._events[event];
        if (!cbs) {
          return this;
        }
        if (arguments.length === 1) {
          modifyListenerCount(this, event, -cbs.length);
          this._events[event] = null;
          return this;
        }
        var cb;
        var i = cbs.length;
        while (i--) {
          cb = cbs[i];
          if (cb === fn || cb.fn === fn) {
            modifyListenerCount(this, event, -1);
            cbs.splice(i, 1);
            break;
          }
        }
        return this;
      };
      exports.$emit = function(event) {
        var cbs = this._events[event];
        this._shouldPropagate = !cbs;
        if (cbs) {
          cbs = cbs.length > 1 ? _.toArray(cbs) : cbs;
          var args = _.toArray(arguments, 1);
          for (var i = 0,
              l = cbs.length; i < l; i++) {
            var res = cbs[i].apply(this, args);
            if (res === true) {
              this._shouldPropagate = true;
            }
          }
        }
        return this;
      };
      exports.$broadcast = function(event) {
        if (!this._eventsCount[event])
          return;
        var children = this.$children;
        for (var i = 0,
            l = children.length; i < l; i++) {
          var child = children[i];
          child.$emit.apply(child, arguments);
          if (child._shouldPropagate) {
            child.$broadcast.apply(child, arguments);
          }
        }
        return this;
      };
      exports.$dispatch = function() {
        this.$emit.apply(this, arguments);
        var parent = this.$parent;
        while (parent) {
          parent.$emit.apply(parent, arguments);
          parent = parent._shouldPropagate ? parent.$parent : null;
        }
        return this;
      };
      var hookRE = /^hook:/;
      function modifyListenerCount(vm, event, count) {
        var parent = vm.$parent;
        if (!parent || !count || hookRE.test(event))
          return;
        while (parent) {
          parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
          parent = parent.$parent;
        }
      }
    }, function(module, exports, __webpack_require__) {
      var _ = __webpack_require__(1);
      var compiler = __webpack_require__(14);
      exports.$mount = function(el) {
        if (this._isCompiled) {
          ("development") !== 'production' && _.warn('$mount() should be called only once.');
          return;
        }
        el = _.query(el);
        if (!el) {
          el = document.createElement('div');
        }
        this._compile(el);
        this._initDOMHooks();
        if (_.inDoc(this.$el)) {
          this._callHook('attached');
          ready.call(this);
        } else {
          this.$once('hook:attached', ready);
        }
        return this;
      };
      function ready() {
        this._isAttached = true;
        this._isReady = true;
        this._callHook('ready');
      }
      exports.$destroy = function(remove, deferCleanup) {
        this._destroy(remove, deferCleanup);
      };
      exports.$compile = function(el, host, scope, frag) {
        return compiler.compile(el, this.$options, true)(this, el, host, scope, frag);
      };
    }]);
  });
  ;
})(require('process'));
