/* */ 
var _ = require('../util/index');
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
_.extend(exports, require('./array-filters'));
