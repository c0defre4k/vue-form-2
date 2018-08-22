'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = function () {
  var _mutations;

  var name = this.name;
  var that = this;
  if (typeof this.$store.state[name] !== 'undefined') {
    this.$store.unregisterModule(name);
  }

  this.$store.registerModule(name, {
    state: {
      count: 0,
      values: {}
    },
    mutations: (_mutations = {}, _defineProperty(_mutations, name + '/CHANGE', function undefined(state, payload) {
      state.values[payload.name] = getValue(payload.value);
      state.count = getCount(state.values);
    }), _defineProperty(_mutations, name + '/RESET', function undefined(state, _ref) {
      var name = _ref.name;

      delete state.values[name];
      state.count = getCount(state.values);
    }), _defineProperty(_mutations, name + '/SENDING', function undefined(state, payload) {}), _defineProperty(_mutations, name + '/SENT', function undefined(state, payload) {
      if (that.opts.resetFormAfterSubmit) {
        state.values = {};
        state.count = 0;
      }
    }), _defineProperty(_mutations, name + '/INVALID.SERVER', function undefined(state, payload) {}), _defineProperty(_mutations, name + '/INVALID.CLIENT', function undefined(state, payload) {}), _defineProperty(_mutations, name + '/ERROR_CLICKED', function undefined(state, payload) {}), _mutations)
  });
};

function getValue(val) {

  if (val && typeof val.format === 'function') {
    return val.format('YYYY-MM-DD HH:mm:ss');
  }

  return val;
}

function getCount(values) {

  var c = 0;

  for (var v in values) {
    c++;
  }

  return c;
}