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
 * The Contact model module.
 * @module model/Contact
 * @version 1.6
 */
export class Contact {
  /**
   * Constructs a new <code>Contact</code>.
   * Every unique e-mail address (or mobile number) is defined as a contact.
   * @alias module:model/Contact
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Contact} obj Optional instance to populate.
   * @return {module:model/Contact} The populated <code>Contact</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Contact();
      if (data.hasOwnProperty('contact_id'))
        obj.contactId = ApiClient.convertToType(data['contact_id'], 'String');
      if (data.hasOwnProperty('fullname'))
        obj.fullname = ApiClient.convertToType(data['fullname'], 'String');
      if (data.hasOwnProperty('first_name'))
        obj.firstName = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('last_name'))
        obj.lastName = ApiClient.convertToType(data['last_name'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('mobile'))
        obj.mobile = ApiClient.convertToType(data['mobile'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('thumb_url'))
        obj.thumbUrl = ApiClient.convertToType(data['thumb_url'], 'String');
      if (data.hasOwnProperty('note'))
        obj.note = ApiClient.convertToType(data['note'], 'String');
      if (data.hasOwnProperty('gender'))
        obj.gender = ApiClient.convertToType(data['gender'], 'String');
      if (data.hasOwnProperty('document_count'))
        obj.documentCount = ApiClient.convertToType(data['document_count'], 'Number');
      if (data.hasOwnProperty('company_id'))
        obj.companyId = ApiClient.convertToType(data['company_id'], 'String');
      if (data.hasOwnProperty('company_name'))
        obj.companyName = ApiClient.convertToType(data['company_name'], 'String');
      if (data.hasOwnProperty('company_number'))
        obj.companyNumber = ApiClient.convertToType(data['company_number'], 'String');
      if (data.hasOwnProperty('company_logo_url'))
        obj.companyLogoUrl = ApiClient.convertToType(data['company_logo_url'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'String');
    }
    return obj;
  }
}

/**
 * Contact ID
 * @member {String} contactId
 */
Contact.prototype.contactId = undefined;

/**
 * Full name of the contact
 * @member {String} fullname
 */
Contact.prototype.fullname = undefined;

/**
 * First name of the contact
 * @member {String} firstName
 */
Contact.prototype.firstName = undefined;

/**
 * Last name of the contact
 * @member {String} lastName
 */
Contact.prototype.lastName = undefined;

/**
 * Title of the contact
 * @member {String} title
 */
Contact.prototype.title = undefined;

/**
 * Mobile number of the contact
 * @member {String} mobile
 */
Contact.prototype.mobile = undefined;

/**
 * Name of the created document
 * @member {String} email
 */
Contact.prototype.email = undefined;

/**
 * Thumb URL of the contact
 * @member {String} thumbUrl
 */
Contact.prototype.thumbUrl = undefined;

/**
 * Note of the contact
 * @member {String} note
 */
Contact.prototype.note = undefined;

/**
 * Gender of the recipient
 * @member {String} gender
 */
Contact.prototype.gender = undefined;

/**
 * Number of documents for a contact
 * @member {Number} documentCount
 */
Contact.prototype.documentCount = undefined;

/**
 * Company ID
 * @member {String} companyId
 */
Contact.prototype.companyId = undefined;

/**
 * Company name of the contact
 * @member {String} companyName
 */
Contact.prototype.companyName = undefined;

/**
 * Company number of the contact
 * @member {String} companyNumber
 */
Contact.prototype.companyNumber = undefined;

/**
 * Company logo
 * @member {String} companyLogoUrl
 */
Contact.prototype.companyLogoUrl = undefined;

/**
 * Date of created contact
 * @member {String} createdAt
 */
Contact.prototype.createdAt = undefined;

