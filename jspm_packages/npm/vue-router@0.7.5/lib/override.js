/* */ 
"format esm";
'use strict';

exports.__esModule = true;

exports['default'] = function (Vue) {

  var _ = Vue.util;

  // override Vue's init and destroy process to keep track of router instances
  var init = Vue.prototype._init;
  Vue.prototype._init = function (options) {
    var root = options._parent || options.parent || this;
    var route = root.$route;
    if (route) {
      route.router._children.push(this);
      if (!this.$route) {
        /* istanbul ignore if */
        if (this._defineMeta) {
          // 0.12
          this._defineMeta('$route', route);
        } else {
          // 1.0
          _.defineReactive(this, '$route', route);
        }
      }
    }
    init.call(this, options);
  };

  var destroy = Vue.prototype._destroy;
  Vue.prototype._destroy = function () {
    if (!this._isBeingDestroyed) {
      var route = this.$root.$route;
      if (route) {
        route.router._children.$remove(this);
      }
      destroy.apply(this, arguments);
    }
  };

  // 1.0 only: enable route mixins
  var strats = Vue.config.optionMergeStrategies;
  var hooksToMergeRE = /^(data|activate|deactivate)$/;

  if (strats) {
    strats.route = function (parentVal, childVal) {
      if (!childVal) return parentVal;
      if (!parentVal) return childVal;
      var ret = {};
      _.extend(ret, parentVal);
      for (var key in childVal) {
        var a = ret[key];
        var b = childVal[key];
        // for data, activate and deactivate, we need to merge them into
        // arrays similar to lifecycle hooks.
        if (a && hooksToMergeRE.test(key)) {
          ret[key] = (_.isArray(a) ? a : [a]).concat(b);
        } else {
          ret[key] = b;
        }
      }
      return ret;
    };
  }
};

module.exports = exports['default'];