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
 * The DocumentsInner model module.
 * @module model/DocumentsInner
 * @version 1.6
 */
export class DocumentsInner {
  /**
   * Constructs a new <code>DocumentsInner</code>.
   * @alias module:model/DocumentsInner
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DocumentsInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentsInner} obj Optional instance to populate.
   * @return {module:model/DocumentsInner} The populated <code>DocumentsInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DocumentsInner();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('sender_thumb'))
        obj.senderThumb = ApiClient.convertToType(data['sender_thumb'], 'String');
      if (data.hasOwnProperty('sender_name'))
        obj.senderName = ApiClient.convertToType(data['sender_name'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('is_signing'))
        obj.isSigning = ApiClient.convertToType(data['is_signing'], 'Boolean');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], 'String');
      if (data.hasOwnProperty('company_name'))
        obj.companyName = ApiClient.convertToType(data['company_name'], 'String');
      if (data.hasOwnProperty('expiration_date'))
        obj.expirationDate = ApiClient.convertToType(data['expiration_date'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('is_private'))
        obj.isPrivate = ApiClient.convertToType(data['is_private'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} status
 */
DocumentsInner.prototype.status = undefined;

/**
 * @member {Number} value
 */
DocumentsInner.prototype.value = undefined;

/**
 * @member {String} senderThumb
 */
DocumentsInner.prototype.senderThumb = undefined;

/**
 * @member {String} senderName
 */
DocumentsInner.prototype.senderName = undefined;

/**
 * @member {String} name
 */
DocumentsInner.prototype.name = undefined;

/**
 * @member {Boolean} isSigning
 */
DocumentsInner.prototype.isSigning = undefined;

/**
 * @member {String} createdAt
 */
DocumentsInner.prototype.createdAt = undefined;

/**
 * @member {String} id
 */
DocumentsInner.prototype.id = undefined;

/**
 * @member {String} tags
 */
DocumentsInner.prototype.tags = undefined;

/**
 * @member {String} companyName
 */
DocumentsInner.prototype.companyName = undefined;

/**
 * @member {String} expirationDate
 */
DocumentsInner.prototype.expirationDate = undefined;

/**
 * @member {String} type
 */
DocumentsInner.prototype.type = undefined;

/**
 * @member {Boolean} isPrivate
 */
DocumentsInner.prototype.isPrivate = undefined;
