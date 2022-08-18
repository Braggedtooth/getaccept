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
    describe('UploadBody1', function() {
      beforeEach(function() {
        instance = new GetAccept.UploadBody1();
      });

      it('should create an instance of UploadBody1', function() {
        // TODO: update the code to test UploadBody1
        expect(instance).to.be.a(GetAccept.UploadBody1);
      });

      it('should have the property file (base name: "file")', function() {
        // TODO: update the code to test the property file
        expect(instance).to.have.property('file');
        // expect(instance.file).to.be(expectedValueLiteral);
      });

    });
  });

}));