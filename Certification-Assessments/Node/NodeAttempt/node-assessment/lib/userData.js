const _ = require('lodash');
const userData = require('./userData.json');
const immutable = require('immutable');

const cbs = [];

exports.subscribe = function(cb) {
  cbs.push(cb);
  cb(userData);
}

exports.reset = (function(data) {
  // Lock the original data, and update all subscribers with the original.
  const _data = immutable.fromJS(data);
  return function() {
    cbs.forEach(cb => {
      cb(_data.toJS());
    })
  }
})(userData)