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
import {InlineResponse20011Attachments} from './InlineResponse20011Attachments';

/**
 * The InlineResponse20011 model module.
 * @module model/InlineResponse20011
 * @version 1.6
 */
export class InlineResponse20011 {
  /**
   * Constructs a new <code>InlineResponse20011</code>.
   * @alias module:model/InlineResponse20011
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20011</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20011} obj Optional instance to populate.
   * @return {module:model/InlineResponse20011} The populated <code>InlineResponse20011</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20011();
      if (data.hasOwnProperty('attachments'))
        obj.attachments = ApiClient.convertToType(data['attachments'], [InlineResponse20011Attachments]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/InlineResponse20011Attachments>} attachments
 */
InlineResponse20011.prototype.attachments = undefined;

