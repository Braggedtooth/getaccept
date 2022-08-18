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
import {DocumentsAttachments} from './DocumentsAttachments';
import {DocumentsCustomFields} from './DocumentsCustomFields';
import {DocumentsRecipients} from './DocumentsRecipients';

/**
 * The DocumentsBody model module.
 * @module model/DocumentsBody
 * @version 1.6
 */
export class DocumentsBody {
  /**
   * Constructs a new <code>DocumentsBody</code>.
   * @alias module:model/DocumentsBody
   * @class
   * @param name {String} Enter a name of the document
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Constructs a <code>DocumentsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentsBody} obj Optional instance to populate.
   * @return {module:model/DocumentsBody} The populated <code>DocumentsBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DocumentsBody();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('template_id'))
        obj.templateId = ApiClient.convertToType(data['template_id'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('sender_id'))
        obj.senderId = ApiClient.convertToType(data['sender_id'], 'String');
      if (data.hasOwnProperty('sender_email'))
        obj.senderEmail = ApiClient.convertToType(data['sender_email'], 'String');
      if (data.hasOwnProperty('is_signing_initials'))
        obj.isSigningInitials = ApiClient.convertToType(data['is_signing_initials'], 'Boolean');
      if (data.hasOwnProperty('is_reminder_sending'))
        obj.isReminderSending = ApiClient.convertToType(data['is_reminder_sending'], 'Boolean');
      if (data.hasOwnProperty('is_automatic_sending'))
        obj.isAutomaticSending = ApiClient.convertToType(data['is_automatic_sending'], 'Boolean');
      if (data.hasOwnProperty('video_id'))
        obj.videoId = ApiClient.convertToType(data['video_id'], 'String');
      if (data.hasOwnProperty('attachments'))
        obj.attachments = ApiClient.convertToType(data['attachments'], [DocumentsAttachments]);
      if (data.hasOwnProperty('is_signing'))
        obj.isSigning = ApiClient.convertToType(data['is_signing'], 'Boolean');
      if (data.hasOwnProperty('is_sms_sending'))
        obj.isSmsSending = ApiClient.convertToType(data['is_sms_sending'], 'Boolean');
      if (data.hasOwnProperty('file_ids'))
        obj.fileIds = ApiClient.convertToType(data['file_ids'], 'String');
      if (data.hasOwnProperty('file_name'))
        obj.fileName = ApiClient.convertToType(data['file_name'], 'String');
      if (data.hasOwnProperty('file_content'))
        obj.fileContent = ApiClient.convertToType(data['file_content'], 'String');
      if (data.hasOwnProperty('file_url'))
        obj.fileUrl = ApiClient.convertToType(data['file_url'], 'String');
      if (data.hasOwnProperty('is_signing_forward'))
        obj.isSigningForward = ApiClient.convertToType(data['is_signing_forward'], 'Boolean');
      if (data.hasOwnProperty('recipients'))
        obj.recipients = ApiClient.convertToType(data['recipients'], [DocumentsRecipients]);
      if (data.hasOwnProperty('is_signing_biometric'))
        obj.isSigningBiometric = ApiClient.convertToType(data['is_signing_biometric'], 'Boolean');
      if (data.hasOwnProperty('expiration_date'))
        obj.expirationDate = ApiClient.convertToType(data['expiration_date'], 'Date');
      if (data.hasOwnProperty('is_scheduled_sending'))
        obj.isScheduledSending = ApiClient.convertToType(data['is_scheduled_sending'], 'Boolean');
      if (data.hasOwnProperty('scheduled_sending_time'))
        obj.scheduledSendingTime = ApiClient.convertToType(data['scheduled_sending_time'], 'Date');
      if (data.hasOwnProperty('custom_fields'))
        obj.customFields = ApiClient.convertToType(data['custom_fields'], [DocumentsCustomFields]);
      if (data.hasOwnProperty('external_id'))
        obj.externalId = ApiClient.convertToType(data['external_id'], 'String');
    }
    return obj;
  }
}

/**
 * Enter a name of the document
 * @member {String} name
 */
DocumentsBody.prototype.name = undefined;

/**
 * Select a template to use for the sending
 * @member {String} templateId
 */
DocumentsBody.prototype.templateId = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
DocumentsBody.TypeEnum = {
  /**
   * value: "sales"
   * @const
   */
  sales: "sales",

  /**
   * value: "introduction"
   * @const
   */
  introduction: "introduction",

  /**
   * value: "hr"
   * @const
   */
  hr: "hr",

  /**
   * value: "other"
   * @const
   */
  other: "other"
};
/**
 * Set the type/category of the document
 * @member {module:model/DocumentsBody.TypeEnum} type
 * @default 'sales'
 */
DocumentsBody.prototype.type = 'sales';

/**
 * Value of deal or document
 * @member {Number} value
 */
DocumentsBody.prototype.value = undefined;

/**
 * Send from other user than authenticated
 * @member {String} senderId
 */
DocumentsBody.prototype.senderId = undefined;

/**
 * Send from other email than authenticated user
 * @member {String} senderEmail
 */
DocumentsBody.prototype.senderEmail = undefined;

/**
 * Sign document using recipient initials
 * @member {Boolean} isSigningInitials
 */
DocumentsBody.prototype.isSigningInitials = undefined;

/**
 * Should automatic reminders be sent
 * @member {Boolean} isReminderSending
 */
DocumentsBody.prototype.isReminderSending = undefined;

/**
 * If the document should be sent after creation
 * @member {Boolean} isAutomaticSending
 */
DocumentsBody.prototype.isAutomaticSending = undefined;

/**
 * Select a video to use for the sending
 * @member {String} videoId
 */
DocumentsBody.prototype.videoId = undefined;

/**
 * Attachments
 * @member {Array.<module:model/DocumentsAttachments>} attachments
 */
DocumentsBody.prototype.attachments = undefined;

/**
 * Should the document be sent for signing
 * @member {Boolean} isSigning
 */
DocumentsBody.prototype.isSigning = undefined;

/**
 * Should the document be sent to recipient mobile by text
 * @member {Boolean} isSmsSending
 */
DocumentsBody.prototype.isSmsSending = undefined;

/**
 * Comma-separated, unique file-ids received when uploading files
 * @member {String} fileIds
 */
DocumentsBody.prototype.fileIds = undefined;

/**
 * Filename of the document, with the extension. This will be helpful for converting different file-types.
 * @member {String} fileName
 */
DocumentsBody.prototype.fileName = undefined;

/**
 * Base64 encoded file content
 * @member {String} fileContent
 */
DocumentsBody.prototype.fileContent = undefined;

/**
 * Url to document file. Documents must be public available for download
 * @member {String} fileUrl
 */
DocumentsBody.prototype.fileUrl = undefined;

/**
 * Should recipients be able to transfer signature rights
 * @member {Boolean} isSigningForward
 */
DocumentsBody.prototype.isSigningForward = undefined;

/**
 * @member {Array.<module:model/DocumentsRecipients>} recipients
 */
DocumentsBody.prototype.recipients = undefined;

/**
 * Use handwritten signature
 * @member {Boolean} isSigningBiometric
 */
DocumentsBody.prototype.isSigningBiometric = undefined;

/**
 * Date and time when the document should expire
 * @member {Date} expirationDate
 */
DocumentsBody.prototype.expirationDate = undefined;

/**
 * Should the sending be scheduled for sending in the future
 * @member {Boolean} isScheduledSending
 */
DocumentsBody.prototype.isScheduledSending = undefined;

/**
 * Date and time when the document should be sent out
 * @member {Date} scheduledSendingTime
 */
DocumentsBody.prototype.scheduledSendingTime = undefined;

/**
 * Custom field
 * @member {Array.<module:model/DocumentsCustomFields>} customFields
 */
DocumentsBody.prototype.customFields = undefined;

/**
 * External system ID for identification
 * @member {String} externalId
 */
DocumentsBody.prototype.externalId = undefined;

