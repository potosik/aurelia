/* */ 
var isObject = require('./_is-object'),
    anObject = require('./_an-object');
var check = function(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null)
    throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
    try {
      set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy)
        O.__proto__ = proto;
      else
        set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};
