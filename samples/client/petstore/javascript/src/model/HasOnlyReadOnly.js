/**
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerPetstore) {
      root.SwaggerPetstore = {};
    }
    root.SwaggerPetstore.HasOnlyReadOnly = factory(root.SwaggerPetstore.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HasOnlyReadOnly model module.
   * @module model/HasOnlyReadOnly
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>HasOnlyReadOnly</code>.
   * @alias module:model/HasOnlyReadOnly
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>HasOnlyReadOnly</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HasOnlyReadOnly} obj Optional instance to populate.
   * @return {module:model/HasOnlyReadOnly} The populated <code>HasOnlyReadOnly</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bar')) {
        obj['bar'] = ApiClient.convertToType(data['bar'], 'String');
      }
      if (data.hasOwnProperty('foo')) {
        obj['foo'] = ApiClient.convertToType(data['foo'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} bar
   */
  exports.prototype['bar'] = undefined;
  /**
   * @member {String} foo
   */
  exports.prototype['foo'] = undefined;



  return exports;
}));


