/**
 * Provides a static global value which can be shared between modules.
 *
 * @author Orgun109uk <orgun109uk@gmail.com>
 *
 * @module static-var
 */

var _static;

if (global._staticVars === undefined) {
  global._staticVars = {};
}

_static = module.exports = {
  /**
   * Get the value of the static data.
   *
   * @method get
   * @param {String} name The name of the static variable.
   * @param {Mixed} [def] The default value to return if the static doesn't
   *   exist.
   * @return {Mixed} The stored value.
   */
  get: function (name, def) {
    'use strict';

    return global._staticVars[name] !== undefined ?
      global._staticVars[name] :
      def;
  },

  /**
   * Sets the stored value.
   *
   * @method set
   * @param {String} name The name of the static variable.
   * @param {Mixed} value
   * @return {Object} Returns self.
   * @chainable
   */
  set: function (name, value) {
    'use strict';

    global._staticVars[name] = value;
    return _static;
  },

  /**
   * Determines if the static value exists.
   *
   * @method has
   * @param {String} name The name of the static variable.
   * @return {Boolean} Returns true or false.
   */
  has: function (name) {
    'use strict';

    return global._staticVars[name] !== undefined;
  },

  /**
   * Deletes the stored value.
   *
   * @method del
   * @param {String} name The name of the static variables.
   * @return {Object} Returns self.
   * @chainable
   */
  del: function (name) {
    'use strict';

    delete global._staticVars[name];
    return _static;
  }
};
