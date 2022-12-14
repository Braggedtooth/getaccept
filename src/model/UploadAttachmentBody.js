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
 * The UploadAttachmentBody model module.
 * @module model/UploadAttachmentBody
 * @version 1.6
 */
export class UploadAttachmentBody {
  /**
   * Constructs a new <code>UploadAttachmentBody</code>.
   * @alias module:model/UploadAttachmentBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UploadAttachmentBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UploadAttachmentBody} obj Optional instance to populate.
   * @return {module:model/UploadAttachmentBody} The populated <code>UploadAttachmentBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UploadAttachmentBody();
      if (data.hasOwnProperty('file_name'))
        obj.fileName = ApiClient.convertToType(data['file_name'], 'String');
      if (data.hasOwnProperty('file_content'))
        obj.fileContent = ApiClient.convertToType(data['file_content'], 'String');
      if (data.hasOwnProperty('file_url'))
        obj.fileUrl = ApiClient.convertToType(data['file_url'], 'String');
    }
    return obj;
  }
}

/**
 * Filename of the document, with the extension. This will be helpful for converting different file-types.
 * @member {String} fileName
 */
UploadAttachmentBody.prototype.fileName = undefined;

/**
 * Send the file as base64 encoded. Note that base64 encoding files will increase the file size with about 30%
 * @member {String} fileContent
 */
UploadAttachmentBody.prototype.fileContent = undefined;

/**
 * Url to document file. File must be available for download without any authorization
 * @member {String} fileUrl
 */
UploadAttachmentBody.prototype.fileUrl = undefined;

