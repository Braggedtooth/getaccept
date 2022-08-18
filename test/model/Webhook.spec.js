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
    describe('Webhook', function() {
      beforeEach(function() {
        instance = new GetAccept.Webhook();
      });

      it('should create an instance of Webhook', function() {
        // TODO: update the code to test Webhook
        expect(instance).to.be.a(GetAccept.Webhook);
      });

      it('should have the property eventAction (base name: "event_action")', function() {
        // TODO: update the code to test the property eventAction
        expect(instance).to.have.property('eventAction');
        // expect(instance.eventAction).to.be(expectedValueLiteral);
      });

      it('should have the property subscriptionId (base name: "subscription_id")', function() {
        // TODO: update the code to test the property subscriptionId
        expect(instance).to.have.property('subscriptionId');
        // expect(instance.subscriptionId).to.be(expectedValueLiteral);
      });

      it('should have the property document (base name: "document")', function() {
        // TODO: update the code to test the property document
        expect(instance).to.have.property('document');
        // expect(instance.document).to.be(expectedValueLiteral);
      });

      it('should have the property entity (base name: "entity")', function() {
        // TODO: update the code to test the property entity
        expect(instance).to.have.property('entity');
        // expect(instance.entity).to.be(expectedValueLiteral);
      });

      it('should have the property recipient (base name: "recipient")', function() {
        // TODO: update the code to test the property recipient
        expect(instance).to.have.property('recipient');
        // expect(instance.recipient).to.be(expectedValueLiteral);
      });

      it('should have the property customFields (base name: "custom_fields")', function() {
        // TODO: update the code to test the property customFields
        expect(instance).to.have.property('customFields');
        // expect(instance.customFields).to.be(expectedValueLiteral);
      });

      it('should have the property event (base name: "event")', function() {
        // TODO: update the code to test the property event
        expect(instance).to.have.property('event');
        // expect(instance.event).to.be(expectedValueLiteral);
      });

      it('should have the property eventType (base name: "event_type")', function() {
        // TODO: update the code to test the property eventType
        expect(instance).to.have.property('eventType');
        // expect(instance.eventType).to.be(expectedValueLiteral);
      });

    });
  });

}));
