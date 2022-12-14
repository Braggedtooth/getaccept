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
 * The Document model module.
 * @module model/Document
 * @version 1.6
 */
export class Document {
  /**
   * Constructs a new <code>Document</code>.
   * A document is one or multiple uploaded file(s) that is to be sent to one or many recipients created by a user.
   * @alias module:model/Document
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Document</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Document} obj Optional instance to populate.
   * @return {module:model/Document} The populated <code>Document</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Document();
      if (data.hasOwnProperty('user_id'))
        obj.userId = ApiClient.convertToType(data['user_id'], 'String');
      if (data.hasOwnProperty('email_send_subject'))
        obj.emailSendSubject = ApiClient.convertToType(data['email_send_subject'], 'String');
      if (data.hasOwnProperty('is_signed'))
        obj.isSigned = ApiClient.convertToType(data['is_signed'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('is_private'))
        obj.isPrivate = ApiClient.convertToType(data['is_private'], 'Boolean');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('send_date'))
        obj.sendDate = ApiClient.convertToType(data['send_date'], 'String');
      if (data.hasOwnProperty('sign_date'))
        obj.signDate = ApiClient.convertToType(data['sign_date'], 'String');
      if (data.hasOwnProperty('is_scheduled_sending'))
        obj.isScheduledSending = ApiClient.convertToType(data['is_scheduled_sending'], 'Boolean');
      if (data.hasOwnProperty('is_signing_forward'))
        obj.isSigningForward = ApiClient.convertToType(data['is_signing_forward'], 'Boolean');
      if (data.hasOwnProperty('sender_thumb_url'))
        obj.senderThumbUrl = ApiClient.convertToType(data['sender_thumb_url'], 'String');
      if (data.hasOwnProperty('auto_comment_text'))
        obj.autoCommentText = ApiClient.convertToType(data['auto_comment_text'], 'String');
      if (data.hasOwnProperty('thumb_url'))
        obj.thumbUrl = ApiClient.convertToType(data['thumb_url'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], 'String');
      if (data.hasOwnProperty('email_send_template_id'))
        obj.emailSendTemplateId = ApiClient.convertToType(data['email_send_template_id'], 'String');
      if (data.hasOwnProperty('email_send_message'))
        obj.emailSendMessage = ApiClient.convertToType(data['email_send_message'], 'String');
      if (data.hasOwnProperty('is_auto_comment'))
        obj.isAutoComment = ApiClient.convertToType(data['is_auto_comment'], 'Boolean');
      if (data.hasOwnProperty('is_signing_initials'))
        obj.isSigningInitials = ApiClient.convertToType(data['is_signing_initials'], 'Boolean');
      if (data.hasOwnProperty('sender_name'))
        obj.senderName = ApiClient.convertToType(data['sender_name'], 'String');
      if (data.hasOwnProperty('parent_id'))
        obj.parentId = ApiClient.convertToType(data['parent_id'], 'String');
      if (data.hasOwnProperty('external_editor_id'))
        obj.externalEditorId = ApiClient.convertToType(data['external_editor_id'], 'String');
      if (data.hasOwnProperty('company_name'))
        obj.companyName = ApiClient.convertToType(data['company_name'], 'String');
      if (data.hasOwnProperty('is_auto_comment_email'))
        obj.isAutoCommentEmail = ApiClient.convertToType(data['is_auto_comment_email'], 'Boolean');
      if (data.hasOwnProperty('download_url'))
        obj.downloadUrl = ApiClient.convertToType(data['download_url'], 'String');
      if (data.hasOwnProperty('expiration_date'))
        obj.expirationDate = ApiClient.convertToType(data['expiration_date'], 'String');
      if (data.hasOwnProperty('scheduled_sending_time'))
        obj.scheduledSendingTime = ApiClient.convertToType(data['scheduled_sending_time'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('external_id'))
        obj.externalId = ApiClient.convertToType(data['external_id'], 'String');
      if (data.hasOwnProperty('external_editor_type'))
        obj.externalEditorType = ApiClient.convertToType(data['external_editor_type'], 'String');
      if (data.hasOwnProperty('company_logo_url'))
        obj.companyLogoUrl = ApiClient.convertToType(data['company_logo_url'], 'String');
      if (data.hasOwnProperty('unique_id'))
        obj.uniqueId = ApiClient.convertToType(data['unique_id'], 'Number');
      if (data.hasOwnProperty('is_video'))
        obj.isVideo = ApiClient.convertToType(data['is_video'], 'Boolean');
      if (data.hasOwnProperty('is_identify_recipient'))
        obj.isIdentifyRecipient = ApiClient.convertToType(data['is_identify_recipient'], 'Boolean');
      if (data.hasOwnProperty('sender_email'))
        obj.senderEmail = ApiClient.convertToType(data['sender_email'], 'String');
      if (data.hasOwnProperty('is_signing'))
        obj.isSigning = ApiClient.convertToType(data['is_signing'], 'Boolean');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('external_client_id'))
        obj.externalClientId = ApiClient.convertToType(data['external_client_id'], 'String');
      if (data.hasOwnProperty('company_id'))
        obj.companyId = ApiClient.convertToType(data['company_id'], 'String');
      if (data.hasOwnProperty('is_selfsign'))
        obj.isSelfsign = ApiClient.convertToType(data['is_selfsign'], 'Boolean');
      if (data.hasOwnProperty('is_signing_biometric'))
        obj.isSigningBiometric = ApiClient.convertToType(data['is_signing_biometric'], 'Boolean');
      if (data.hasOwnProperty('is_signing_order'))
        obj.isSigningOrder = ApiClient.convertToType(data['is_signing_order'], 'Boolean');
      if (data.hasOwnProperty('auto_comment_email'))
        obj.autoCommentEmail = ApiClient.convertToType(data['auto_comment_email'], 'String');
      if (data.hasOwnProperty('entity_auto_comment_text'))
        obj.entityAutoCommentText = ApiClient.convertToType(data['entity_auto_comment_text'], 'String');
      if (data.hasOwnProperty('field_count'))
        obj.fieldCount = ApiClient.convertToType(data['field_count'], 'Number');
      if (data.hasOwnProperty('company_number'))
        obj.companyNumber = ApiClient.convertToType(data['company_number'], 'String');
      if (data.hasOwnProperty('is_reminder_sending'))
        obj.isReminderSending = ApiClient.convertToType(data['is_reminder_sending'], 'Boolean');
      if (data.hasOwnProperty('preview_url'))
        obj.previewUrl = ApiClient.convertToType(data['preview_url'], 'String');
      if (data.hasOwnProperty('recipients'))
        obj.recipients = ApiClient.convertToType(data['recipients'], [Recipient]);
    }
    return obj;
  }
}

/**
 * ID of the sender user
 * @member {String} userId
 */
Document.prototype.userId = undefined;

/**
 * Email subject text
 * @member {String} emailSendSubject
 */
Document.prototype.emailSendSubject = undefined;

/**
 * If the document has been signed
 * @member {Boolean} isSigned
 */
Document.prototype.isSigned = undefined;

/**
 * Name of document
 * @member {String} name
 */
Document.prototype.name = undefined;

/**
 * Value of document
 * @member {Number} value
 */
Document.prototype.value = undefined;

/**
 * If the document is private
 * @member {Boolean} isPrivate
 */
Document.prototype.isPrivate = undefined;

/**
 * Current status of document
 * @member {String} status
 */
Document.prototype.status = undefined;

/**
 * Document send date
 * @member {String} sendDate
 */
Document.prototype.sendDate = undefined;

/**
 * Document sign date
 * @member {String} signDate
 */
Document.prototype.signDate = undefined;

/**
 * If the document has scheduled sending
 * @member {Boolean} isScheduledSending
 */
Document.prototype.isScheduledSending = undefined;

/**
 * If transfer of signing rights is enabled
 * @member {Boolean} isSigningForward
 */
Document.prototype.isSigningForward = undefined;

/**
 * Thumb image of sender user
 * @member {String} senderThumbUrl
 */
Document.prototype.senderThumbUrl = undefined;

/**
 * Automatic chat text
 * @member {String} autoCommentText
 */
Document.prototype.autoCommentText = undefined;

/**
 * Thumb image of document
 * @member {String} thumbUrl
 */
Document.prototype.thumbUrl = undefined;

/**
 * Document tags
 * @member {String} tags
 */
Document.prototype.tags = undefined;

/**
 * @member {String} emailSendTemplateId
 */
Document.prototype.emailSendTemplateId = undefined;

/**
 * Sending email message
 * @member {String} emailSendMessage
 */
Document.prototype.emailSendMessage = undefined;

/**
 * If automatic chat comment is enabled
 * @member {Boolean} isAutoComment
 */
Document.prototype.isAutoComment = undefined;

/**
 * @member {Boolean} isSigningInitials
 */
Document.prototype.isSigningInitials = undefined;

/**
 * Name of sender user
 * @member {String} senderName
 */
Document.prototype.senderName = undefined;

/**
 * ID of previous document version
 * @member {String} parentId
 */
Document.prototype.parentId = undefined;

/**
 * ID in external editor
 * @member {String} externalEditorId
 */
Document.prototype.externalEditorId = undefined;

/**
 * Company Name
 * @member {String} companyName
 */
Document.prototype.companyName = undefined;

/**
 * If automatic chat email is enabled
 * @member {Boolean} isAutoCommentEmail
 */
Document.prototype.isAutoCommentEmail = undefined;

/**
 * URL to download signed document
 * @member {String} downloadUrl
 */
Document.prototype.downloadUrl = undefined;

/**
 * Document expiration date
 * @member {String} expirationDate
 */
Document.prototype.expirationDate = undefined;

/**
 * When the document was scheduled for sending
 * @member {String} scheduledSendingTime
 */
Document.prototype.scheduledSendingTime = undefined;

/**
 * When document was created
 * @member {String} createdAt
 */
Document.prototype.createdAt = undefined;

/**
 * @member {String} id
 */
Document.prototype.id = undefined;

/**
 * @member {String} externalId
 */
Document.prototype.externalId = undefined;

/**
 * @member {String} externalEditorType
 */
Document.prototype.externalEditorType = undefined;

/**
 * @member {String} companyLogoUrl
 */
Document.prototype.companyLogoUrl = undefined;

/**
 * Unique ID for document
 * @member {Number} uniqueId
 */
Document.prototype.uniqueId = undefined;

/**
 * If the document has a introduction video
 * @member {Boolean} isVideo
 */
Document.prototype.isVideo = undefined;

/**
 * If document has identify recipient enabled
 * @member {Boolean} isIdentifyRecipient
 */
Document.prototype.isIdentifyRecipient = undefined;

/**
 * Email address of sender user
 * @member {String} senderEmail
 */
Document.prototype.senderEmail = undefined;

/**
 * If document is signable
 * @member {Boolean} isSigning
 */
Document.prototype.isSigning = undefined;

/**
 * Document type
 * @member {String} type
 */
Document.prototype.type = undefined;

/**
 * @member {String} externalClientId
 */
Document.prototype.externalClientId = undefined;

/**
 * Company ID
 * @member {String} companyId
 */
Document.prototype.companyId = undefined;

/**
 * If document has been self-signed by sender
 * @member {Boolean} isSelfsign
 */
Document.prototype.isSelfsign = undefined;

/**
 * If handwritten signature is enabled
 * @member {Boolean} isSigningBiometric
 */
Document.prototype.isSigningBiometric = undefined;

/**
 * If recipient signing order is enabled
 * @member {Boolean} isSigningOrder
 */
Document.prototype.isSigningOrder = undefined;

/**
 * @member {String} autoCommentEmail
 */
Document.prototype.autoCommentEmail = undefined;

/**
 * @member {String} entityAutoCommentText
 */
Document.prototype.entityAutoCommentText = undefined;

/**
 * Number of fields in document
 * @member {Number} fieldCount
 */
Document.prototype.fieldCount = undefined;

/**
 * @member {String} companyNumber
 */
Document.prototype.companyNumber = undefined;

/**
 * If automatic reminders are enabled
 * @member {Boolean} isReminderSending
 */
Document.prototype.isReminderSending = undefined;

/**
 * Link to internal preview of document
 * @member {String} previewUrl
 */
Document.prototype.previewUrl = undefined;

/**
 * @member {Array.<module:model/Recipient>} recipients
 */
Document.prototype.recipients = undefined;

