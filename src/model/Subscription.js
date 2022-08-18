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
import {ApiClient} from '../ApiClient';

/**
 * The Subscription model module.
 * @module model/Subscription
 * @version 1.6
 */
export class Subscription {
  /**
   * Constructs a new <code>Subscription</code>.
   * Subscription details
   * @alias module:model/Subscription
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Subscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Subscription} obj Optional instance to populate.
   * @return {module:model/Subscription} The populated <code>Subscription</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Subscription();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('subscription_id'))
        obj.subscriptionId = ApiClient.convertToType(data['subscription_id'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'Number');
      if (data.hasOwnProperty('event'))
        obj.event = ApiClient.convertToType(data['event'], 'String');
      if (data.hasOwnProperty('host'))
        obj.host = ApiClient.convertToType(data['host'], 'String');
      if (data.hasOwnProperty('target_url'))
        obj.targetUrl = ApiClient.convertToType(data['target_url'], 'String');
      if (data.hasOwnProperty('payload'))
        obj.payload = ApiClient.convertToType(data['payload'], 'String');
      if (data.hasOwnProperty('global'))
        obj.global = ApiClient.convertToType(data['global'], 'Boolean');
      if (data.hasOwnProperty('notification_email'))
        obj.notificationEmail = ApiClient.convertToType(data['notification_email'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'String');
    }
    return obj;
  }
}

/**
 * ID of the subscription
 * @member {String} id
 */
Subscription.prototype.id = undefined;

/**
 * ID of the subscription
 * @member {String} subscriptionId
 */
Subscription.prototype.subscriptionId = undefined;

/**
 * Status of subscription
 * @member {Number} status
 */
Subscription.prototype.status = undefined;

/**
 * Event
 * @member {String} event
 */
Subscription.prototype.event = undefined;

/**
 * Host
 * @member {String} host
 */
Subscription.prototype.host = undefined;

/**
 * Target URL
 * @member {String} targetUrl
 */
Subscription.prototype.targetUrl = undefined;

/**
 * Payload
 * @member {String} payload
 */
Subscription.prototype.payload = undefined;

/**
 * Global
 * @member {Boolean} global
 */
Subscription.prototype.global = undefined;

/**
 * Notification Email
 * @member {String} notificationEmail
 */
Subscription.prototype.notificationEmail = undefined;

/**
 * Created
 * @member {String} createdAt
 */
Subscription.prototype.createdAt = undefined;

