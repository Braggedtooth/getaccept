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
import {DocumentsInner} from './DocumentsInner';

/**
 * The Documents model module.
 * @module model/Documents
 * @version 1.6
 */
export class Documents extends Array {
  /**
   * Constructs a new <code>Documents</code>.
   * Document list
   * @alias module:model/Documents
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>Documents</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Documents} obj Optional instance to populate.
   * @return {module:model/Documents} The populated <code>Documents</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Documents();
      ApiClient.constructFromObject(data, obj, 'DocumentsInner');
    }
    return obj;
  }
}