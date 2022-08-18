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
import {ApiClient} from './ApiClient';
import {AuthBody} from './model/AuthBody';
import {Contact} from './model/Contact';
import {Contacts} from './model/Contacts';
import {ContactsBody} from './model/ContactsBody';
import {Document} from './model/Document';
import {DocumentIdSealBody} from './model/DocumentIdSealBody';
import {DocumentIdSendBody} from './model/DocumentIdSendBody';
import {Documents} from './model/Documents';
import {DocumentsAttachments} from './model/DocumentsAttachments';
import {DocumentsBody} from './model/DocumentsBody';
import {DocumentsCustomFields} from './model/DocumentsCustomFields';
import {DocumentsInner} from './model/DocumentsInner';
import {DocumentsRecipients} from './model/DocumentsRecipients';
import {Error} from './model/Error';
import {EventsRejectedBody} from './model/EventsRejectedBody';
import {EventsReviewedBody} from './model/EventsReviewedBody';
import {EventsSignedBody} from './model/EventsSignedBody';
import {Field} from './model/Field';
import {Fields} from './model/Fields';
import {InlineResponse200} from './model/InlineResponse200';
import {InlineResponse2001} from './model/InlineResponse2001';
import {InlineResponse20010} from './model/InlineResponse20010';
import {InlineResponse20011} from './model/InlineResponse20011';
import {InlineResponse20011Attachments} from './model/InlineResponse20011Attachments';
import {InlineResponse2002} from './model/InlineResponse2002';
import {InlineResponse2002Templates} from './model/InlineResponse2002Templates';
import {InlineResponse2003} from './model/InlineResponse2003';
import {InlineResponse2003Videos} from './model/InlineResponse2003Videos';
import {InlineResponse2004} from './model/InlineResponse2004';
import {InlineResponse2005} from './model/InlineResponse2005';
import {InlineResponse2005Roles} from './model/InlineResponse2005Roles';
import {InlineResponse2006} from './model/InlineResponse2006';
import {InlineResponse2007} from './model/InlineResponse2007';
import {InlineResponse2008} from './model/InlineResponse2008';
import {InlineResponse2009} from './model/InlineResponse2009';
import {Recipient} from './model/Recipient';
import {Recipients} from './model/Recipients';
import {Subscription} from './model/Subscription';
import {Subscriptions} from './model/Subscriptions';
import {SubscriptionsBody} from './model/SubscriptionsBody';
import {UploadAttachmentBody} from './model/UploadAttachmentBody';
import {UploadAttachmentBody1} from './model/UploadAttachmentBody1';
import {UploadBody} from './model/UploadBody';
import {UploadBody1} from './model/UploadBody1';
import {UploadVideoBody} from './model/UploadVideoBody';
import {UploadVideoBody1} from './model/UploadVideoBody1';
import {User} from './model/User';
import {Users} from './model/Users';
import {UsersBody} from './model/UsersBody';
import {UsersUsers} from './model/UsersUsers';
import {Webhook} from './model/Webhook';
import {WebhookEntity} from './model/WebhookEntity';
import {AttachmentsApi} from './api/AttachmentsApi';
import {AuthenticationApi} from './api/AuthenticationApi';
import {ContactsApi} from './api/ContactsApi';
import {DocumentsApi} from './api/DocumentsApi';
import {OthersApi} from './api/OthersApi';
import {SubscriptionsApi} from './api/SubscriptionsApi';
import {TemplatesApi} from './api/TemplatesApi';
import {UsersApi} from './api/UsersApi';
import {VideosApi} from './api/VideosApi';

/**
* GetAccept_provides_a_sales_enablement_platform_for_sales_to_design_send_promote_track_and_e_sign_sales_documents_leveraging_sales_collateral_contract_management_proposals_and_electronic_signatures_in_one_place_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var GetAccept = require('index'); // See note below*.
* var xxxSvc = new GetAccept.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new GetAccept.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new GetAccept.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new GetAccept.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.6
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AuthBody model constructor.
     * @property {module:model/AuthBody}
     */
    AuthBody,

    /**
     * The Contact model constructor.
     * @property {module:model/Contact}
     */
    Contact,

    /**
     * The Contacts model constructor.
     * @property {module:model/Contacts}
     */
    Contacts,

    /**
     * The ContactsBody model constructor.
     * @property {module:model/ContactsBody}
     */
    ContactsBody,

    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document,

    /**
     * The DocumentIdSealBody model constructor.
     * @property {module:model/DocumentIdSealBody}
     */
    DocumentIdSealBody,

    /**
     * The DocumentIdSendBody model constructor.
     * @property {module:model/DocumentIdSendBody}
     */
    DocumentIdSendBody,

    /**
     * The Documents model constructor.
     * @property {module:model/Documents}
     */
    Documents,

    /**
     * The DocumentsAttachments model constructor.
     * @property {module:model/DocumentsAttachments}
     */
    DocumentsAttachments,

    /**
     * The DocumentsBody model constructor.
     * @property {module:model/DocumentsBody}
     */
    DocumentsBody,

    /**
     * The DocumentsCustomFields model constructor.
     * @property {module:model/DocumentsCustomFields}
     */
    DocumentsCustomFields,

    /**
     * The DocumentsInner model constructor.
     * @property {module:model/DocumentsInner}
     */
    DocumentsInner,

    /**
     * The DocumentsRecipients model constructor.
     * @property {module:model/DocumentsRecipients}
     */
    DocumentsRecipients,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The EventsRejectedBody model constructor.
     * @property {module:model/EventsRejectedBody}
     */
    EventsRejectedBody,

    /**
     * The EventsReviewedBody model constructor.
     * @property {module:model/EventsReviewedBody}
     */
    EventsReviewedBody,

    /**
     * The EventsSignedBody model constructor.
     * @property {module:model/EventsSignedBody}
     */
    EventsSignedBody,

    /**
     * The Field model constructor.
     * @property {module:model/Field}
     */
    Field,

    /**
     * The Fields model constructor.
     * @property {module:model/Fields}
     */
    Fields,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse20010 model constructor.
     * @property {module:model/InlineResponse20010}
     */
    InlineResponse20010,

    /**
     * The InlineResponse20011 model constructor.
     * @property {module:model/InlineResponse20011}
     */
    InlineResponse20011,

    /**
     * The InlineResponse20011Attachments model constructor.
     * @property {module:model/InlineResponse20011Attachments}
     */
    InlineResponse20011Attachments,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse2002Templates model constructor.
     * @property {module:model/InlineResponse2002Templates}
     */
    InlineResponse2002Templates,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2003Videos model constructor.
     * @property {module:model/InlineResponse2003Videos}
     */
    InlineResponse2003Videos,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse2005Roles model constructor.
     * @property {module:model/InlineResponse2005Roles}
     */
    InlineResponse2005Roles,

    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006,

    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007,

    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008,

    /**
     * The InlineResponse2009 model constructor.
     * @property {module:model/InlineResponse2009}
     */
    InlineResponse2009,

    /**
     * The Recipient model constructor.
     * @property {module:model/Recipient}
     */
    Recipient,

    /**
     * The Recipients model constructor.
     * @property {module:model/Recipients}
     */
    Recipients,

    /**
     * The Subscription model constructor.
     * @property {module:model/Subscription}
     */
    Subscription,

    /**
     * The Subscriptions model constructor.
     * @property {module:model/Subscriptions}
     */
    Subscriptions,

    /**
     * The SubscriptionsBody model constructor.
     * @property {module:model/SubscriptionsBody}
     */
    SubscriptionsBody,

    /**
     * The UploadAttachmentBody model constructor.
     * @property {module:model/UploadAttachmentBody}
     */
    UploadAttachmentBody,

    /**
     * The UploadAttachmentBody1 model constructor.
     * @property {module:model/UploadAttachmentBody1}
     */
    UploadAttachmentBody1,

    /**
     * The UploadBody model constructor.
     * @property {module:model/UploadBody}
     */
    UploadBody,

    /**
     * The UploadBody1 model constructor.
     * @property {module:model/UploadBody1}
     */
    UploadBody1,

    /**
     * The UploadVideoBody model constructor.
     * @property {module:model/UploadVideoBody}
     */
    UploadVideoBody,

    /**
     * The UploadVideoBody1 model constructor.
     * @property {module:model/UploadVideoBody1}
     */
    UploadVideoBody1,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The Users model constructor.
     * @property {module:model/Users}
     */
    Users,

    /**
     * The UsersBody model constructor.
     * @property {module:model/UsersBody}
     */
    UsersBody,

    /**
     * The UsersUsers model constructor.
     * @property {module:model/UsersUsers}
     */
    UsersUsers,

    /**
     * The Webhook model constructor.
     * @property {module:model/Webhook}
     */
    Webhook,

    /**
     * The WebhookEntity model constructor.
     * @property {module:model/WebhookEntity}
     */
    WebhookEntity,

    /**
    * The AttachmentsApi service constructor.
    * @property {module:api/AttachmentsApi}
    */
    AttachmentsApi,

    /**
    * The AuthenticationApi service constructor.
    * @property {module:api/AuthenticationApi}
    */
    AuthenticationApi,

    /**
    * The ContactsApi service constructor.
    * @property {module:api/ContactsApi}
    */
    ContactsApi,

    /**
    * The DocumentsApi service constructor.
    * @property {module:api/DocumentsApi}
    */
    DocumentsApi,

    /**
    * The OthersApi service constructor.
    * @property {module:api/OthersApi}
    */
    OthersApi,

    /**
    * The SubscriptionsApi service constructor.
    * @property {module:api/SubscriptionsApi}
    */
    SubscriptionsApi,

    /**
    * The TemplatesApi service constructor.
    * @property {module:api/TemplatesApi}
    */
    TemplatesApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi,

    /**
    * The VideosApi service constructor.
    * @property {module:api/VideosApi}
    */
    VideosApi
};
