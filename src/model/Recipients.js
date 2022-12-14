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
import {Recipient} from './Recipient';

/**
 * The Recipients model module.
 * @module model/Recipients
 * @version 1.6
 */
export class Recipients {
  /**
   * Constructs a new <code>Recipients</code>.
   * Recipient list
   * @alias module:model/Recipients
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Recipients</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Recipients} obj Optional instance to populate.
   * @return {module:model/Recipients} The populated <code>Recipients</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Recipients();
      if (data.hasOwnProperty('recipients'))
        obj.recipients = ApiClient.convertToType(data['recipients'], [Recipient]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Recipient>} recipients
 */
Recipients.prototype.recipients = undefined;

