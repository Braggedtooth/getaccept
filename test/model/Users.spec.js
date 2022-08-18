/*
 * GetAccept
 * GetAccept provides a sales enablement platform for sales to design, send, promote, track, and e-sign sales documents, leveraging sales collateral, contract management, proposals, and electronic signatures in one place.
 *
 * OpenAPI spec version: 1.6
 * Contact: integrations@getaccept.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GetAccept);
  }
}(this, function(expect, GetAccept) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Users', function() {
      beforeEach(function() {
        instance = new GetAccept.Users();
      });

      it('should create an instance of Users', function() {
        // TODO: update the code to test Users
        expect(instance).to.be.a(GetAccept.Users);
      });

      it('should have the property users (base name: "users")', function() {
        // TODO: update the code to test the property users
        expect(instance).to.have.property('users');
        // expect(instance.users).to.be(expectedValueLiteral);
      });

    });
  });

}));
