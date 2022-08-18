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

  beforeEach(function() {
    instance = new GetAccept.VideosApi();
  });

  describe('(package)', function() {
    describe('VideosApi', function() {
      describe('listVideos', function() {
        it('should call listVideos successfully', function(done) {
          // TODO: uncomment listVideos call and complete the assertions
          /*

          instance.listVideos(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(GetAccept.InlineResponse2003);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('uploadVideo', function() {
        it('should call uploadVideo successfully', function(done) {
          // TODO: uncomment, update parameter values for uploadVideo call and complete the assertions
          /*

          instance.uploadVideo(body, file, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(GetAccept.InlineResponse20010);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
