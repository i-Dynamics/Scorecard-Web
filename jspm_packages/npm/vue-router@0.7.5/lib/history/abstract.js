/* */ 
"format esm";
'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

exports.__esModule = true;

var _util = require('../util');

var AbstractHistory = (function () {
  function AbstractHistory(_ref) {
    var onChange = _ref.onChange;

    _classCallCheck(this, AbstractHistory);

    this.onChange = onChange;
    this.currentPath = '/';
  }

  AbstractHistory.prototype.start = function start() {
    this.onChange('/');
  };

  AbstractHistory.prototype.stop = function stop() {
    // noop
  };

  AbstractHistory.prototype.go = function go(path, replace, append) {
    path = this.currentPath = this.formatPath(path, append);
    this.onChange(path);
  };

  AbstractHistory.prototype.formatPath = function formatPath(path, append) {
    return path.charAt(0) === '/' ? path : _util.resolvePath(this.currentPath, path, append);
  };

  return AbstractHistory;
})();

exports['default'] = AbstractHistory;
module.exports = exports['default'];