/* */ 
"format esm";
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _util = require('../util');

var _route = require('../route');

var _route2 = _interopRequireDefault(_route);

var _transition = require('../transition');

var _transition2 = _interopRequireDefault(_transition);

exports['default'] = function (Vue, Router) {

  var _ = Vue.util;

  /**
   * Add a route containing a list of segments to the internal
   * route recognizer. Will be called recursively to add all
   * possible sub-routes.
   *
   * @param {String} path
   * @param {Object} handler
   * @param {Array} segments
   */

  Router.prototype._addRoute = function (path, handler, segments) {
    guardComponent(handler);
    segments.push({
      path: path,
      handler: handler
    });
    this._recognizer.add(segments, {
      as: handler.name
    });
    // add sub routes
    if (handler.subRoutes) {
      for (var subPath in handler.subRoutes) {
        // recursively walk all sub routes
        this._addRoute(subPath, handler.subRoutes[subPath],
        // pass a copy in recursion to avoid mutating
        // across branches
        segments.slice());
      }
    }
  };

  /**
   * Set the notFound route handler.
   *
   * @param {Object} handler
   */

  Router.prototype._notFound = function (handler) {
    guardComponent(handler);
    this._notFoundHandler = [{ handler: handler }];
  };

  /**
   * Add a redirect record.
   *
   * @param {String} path
   * @param {String} redirectPath
   */

  Router.prototype._addRedirect = function (path, redirectPath) {
    this._addGuard(path, redirectPath, this.replace);
  };

  /**
   * Add an alias record.
   *
   * @param {String} path
   * @param {String} aliasPath
   */

  Router.prototype._addAlias = function (path, aliasPath) {
    this._addGuard(path, aliasPath, this._match);
  };

  /**
   * Add a path guard.
   *
   * @param {String} path
   * @param {String} mappedPath
   * @param {Function} handler
   */

  Router.prototype._addGuard = function (path, mappedPath, _handler) {
    var _this = this;

    this._guardRecognizer.add([{
      path: path,
      handler: function handler(match, query) {
        var realPath = (0, _util.mapParams)(mappedPath, match.params, query);
        _handler.call(_this, realPath);
      }
    }]);
  };

  /**
   * Check if a path matches any redirect records.
   *
   * @param {String} path
   * @return {Boolean} - if true, will skip normal match.
   */

  Router.prototype._checkGuard = function (path) {
    var matched = this._guardRecognizer.recognize(path);
    if (matched) {
      matched[0].handler(matched[0], matched.queryParams);
      return true;
    }
  };

  /**
   * Match a URL path and set the route context on vm,
   * triggering view updates.
   *
   * @param {String} path
   * @param {Object} [state]
   * @param {String} [anchor]
   */

  Router.prototype._match = function (path, state, anchor) {
    var _this2 = this;

    if (this._checkGuard(path)) {
      return;
    }

    var prevRoute = this._currentRoute;
    var prevTransition = this._currentTransition;

    // do nothing if going to the same route.
    // the route only changes when a transition successfully
    // reaches activation; we don't need to do anything
    // if an ongoing transition is aborted during validation
    // phase.
    if (prevTransition && path === prevRoute.path) {
      return;
    }

    // construct new route and transition context
    var route = new _route2['default'](path, this);
    var transition = new _transition2['default'](this, route, prevRoute);
    this._prevTransition = prevTransition;
    this._currentTransition = transition;

    if (!this.app) {
      // initial render
      this.app = new this._appConstructor({
        el: this._appContainer,
        _meta: {
          $route: route
        }
      });
    }

    // check global before hook
    var beforeHooks = this._beforeEachHooks;
    var startTransition = function startTransition() {
      transition.start(function () {
        _this2._postTransition(route, state, anchor);
      });
    };

    if (beforeHooks.length) {
      transition.runQueue(beforeHooks, function (hook, _, next) {
        if (transition === _this2._currentTransition) {
          transition.callHook(hook, null, next, true);
        }
      }, startTransition);
    } else {
      startTransition();
    }

    // HACK:
    // set rendered to true after the transition start, so
    // that components that are acitvated synchronously know
    // whether it is the initial render.
    this._rendered = true;
  };

  /**
   * Set current to the new transition.
   * This is called by the transition object when the
   * validation of a route has succeeded.
   *
   * @param {RouteTransition} transition
   */

  Router.prototype._onTransitionValidated = function (transition) {
    // now that this one is validated, we can abort
    // the previous transition.
    var prevTransition = this._prevTransition;
    if (prevTransition) {
      prevTransition.aborted = true;
    }
    // set current route
    var route = this._currentRoute = transition.to;
    // update route context for all children
    if (this.app.$route !== route) {
      this.app.$route = route;
      this._children.forEach(function (child) {
        child.$route = route;
      });
    }
    // call global after hook
    if (this._afterEachHooks.length) {
      this._afterEachHooks.forEach(function (hook) {
        return hook.call(null, {
          to: transition.to,
          from: transition.from
        });
      });
    }
    this._currentTransition.done = true;
  };

  /**
   * Handle stuff after the transition.
   *
   * @param {Route} route
   * @param {Object} [state]
   * @param {String} [anchor]
   */

  Router.prototype._postTransition = function (route, state, anchor) {
    // handle scroll positions
    // saved scroll positions take priority
    // then we check if the path has an anchor
    var pos = state && state.pos;
    if (pos && this._saveScrollPosition) {
      Vue.nextTick(function () {
        window.scrollTo(pos.x, pos.y);
      });
    } else if (anchor) {
      Vue.nextTick(function () {
        var el = document.getElementById(anchor.slice(1));
        if (el) {
          window.scrollTo(window.scrollX, el.offsetTop);
        }
      });
    }
  };

  /**
   * Normalize named route object / string paths into
   * a string.
   *
   * @param {Object|String|Number} path
   * @return {String}
   */

  Router.prototype._normalizePath = function (path) {
    if (typeof path === 'object') {
      if (path.name) {
        var params = path.params || {};
        if (path.query) {
          params.queryParams = path.query;
        }
        return this._recognizer.generate(path.name, params);
      } else if (path.path) {
        return path.path;
      } else {
        return '';
      }
    } else {
      return path + '';
    }
  };

  /**
   * Allow directly passing components to a route
   * definition.
   *
   * @param {Object} handler
   */

  function guardComponent(handler) {
    var comp = handler.component;
    if (_.isPlainObject(comp)) {
      comp = handler.component = Vue.extend(comp);
    }
    /* istanbul ignore if */
    if (typeof comp !== 'function') {
      handler.component = null;
      (0, _util.warn)('invalid component for route "' + handler.path + '"');
    }
  }
};

module.exports = exports['default'];