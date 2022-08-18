/**
 * GetAccept
 * GetAccept provides a sales enablement platform for sales to design, send, promote, track, and e-sign sales documents, leveraging sales collateral, contract management, proposals, and electronic signatures in one place.
 *
 * OpenAPI spec version: 1.6
 * Contact: integrations@getaccept.com
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as api from "./api"
import { Configuration } from "./configuration"

const config: Configuration = {}

describe("AttachmentsApi", () => {
  let instance: api.AttachmentsApi
  beforeEach(function() {
    instance = new api.AttachmentsApi(config)
  });

  test("listAttachments", () => {
    return expect(instance.listAttachments({})).resolves.toBe(null)
  })
  test("uploadAttachment", () => {
    const body: api.UploadAttachmentBody = undefined
    return expect(instance.uploadAttachment(body, {})).resolves.toBe(null)
  })
})

describe("AuthenticationApi", () => {
  let instance: api.AuthenticationApi
  beforeEach(function() {
    instance = new api.AuthenticationApi(config)
  });

  test("authenticate", () => {
    const body: api.AuthBody = undefined
    return expect(instance.authenticate(body, {})).resolves.toBe(null)
  })
  test("refreshToken", () => {
    return expect(instance.refreshToken({})).resolves.toBe(null)
  })
})

describe("ContactsApi", () => {
  let instance: api.ContactsApi
  beforeEach(function() {
    instance = new api.ContactsApi(config)
  });

  test("createContact", () => {
    const body: api.ContactsBody = {
  "value" : {
    "first_name" : "Jane",
    "last_name" : "Doe",
    "email" : "jane@doe.com",
    "title" : "CEO",
    "phone" : "+46401234567",
    "mobile" : "+12345678901",
    "note" : "Just a random contact",
    "company_name" : "Doe Inc.",
    "company_number" : "5678901"
  }
}
    return expect(instance.createContact(body, {})).resolves.toBe(null)
  })
  test("listContacts", () => {
    return expect(instance.listContacts({})).resolves.toBe(null)
  })
})

describe("DocumentsApi", () => {
  let instance: api.DocumentsApi
  beforeEach(function() {
    instance = new api.DocumentsApi(config)
  });

  test("createDocument", () => {
    const body: api.DocumentsBody = undefined
    return expect(instance.createDocument(body, {})).resolves.toBe(null)
  })
  test("downloadDocument", () => {
    const documentId: string = "documentId_example"
    const direct: string = "direct_example"
    return expect(instance.downloadDocument(documentId, direct, {})).resolves.toBe(null)
  })
  test("getDocumentDetails", () => {
    const documentId: string = "documentId_example"
    return expect(instance.getDocumentDetails(documentId, {})).resolves.toBe(null)
  })
  test("listDocumentFields", () => {
    const documentId: string = "documentId_example"
    return expect(instance.listDocumentFields(documentId, {})).resolves.toBe(null)
  })
  test("listDocuments", () => {
    const filter: string = "filter_example"
    const sortBy: string = "sortBy_example"
    const sortOrder: string = "sortOrder_example"
    const showteam: boolean = true
    const showall: boolean = true
    const externalId: string = "externalId_example"
    const offset: number = 1.2
    const limit: number = 1.2
    return expect(instance.listDocuments(filter, sortBy, sortOrder, showteam, showall, externalId, offset, limit, {})).resolves.toBe(null)
  })
  test("listRecipients", () => {
    const documentId: string = "documentId_example"
    return expect(instance.listRecipients(documentId, {})).resolves.toBe(null)
  })
  test("sealDocument", () => {
    const documentId: string = "documentId_example"
    const body: api.DocumentIdSealBody = undefined
    return expect(instance.sealDocument(documentId, body, {})).resolves.toBe(null)
  })
  test("sendDocument", () => {
    const documentId: string = "documentId_example"
    const body: api.DocumentIdSendBody = undefined
    return expect(instance.sendDocument(documentId, body, {})).resolves.toBe(null)
  })
  test("uploadDocument", () => {
    const body: api.UploadBody = undefined
    return expect(instance.uploadDocument(body, {})).resolves.toBe(null)
  })
})

describe("OthersApi", () => {
  let instance: api.OthersApi
  beforeEach(function() {
    instance = new api.OthersApi(config)
  });

  test("createRejectedSubscription", () => {
    const body: api.EventsRejectedBody = undefined
    return expect(instance.createRejectedSubscription(body, {})).resolves.toBe(null)
  })
  test("createReviewedSubscription", () => {
    const body: api.EventsReviewedBody = undefined
    return expect(instance.createReviewedSubscription(body, {})).resolves.toBe(null)
  })
  test("createSignedSubscription", () => {
    const body: api.EventsSignedBody = undefined
    return expect(instance.createSignedSubscription(body, {})).resolves.toBe(null)
  })
})

describe("SubscriptionsApi", () => {
  let instance: api.SubscriptionsApi
  beforeEach(function() {
    instance = new api.SubscriptionsApi(config)
  });

  test("createSubscription", () => {
    const body: api.SubscriptionsBody = undefined
    return expect(instance.createSubscription(body, {})).resolves.toBe(null)
  })
  test("deleteSubscription", () => {
    const subscriptionId: string = "subscriptionId_example"
    return expect(instance.deleteSubscription(subscriptionId, {})).resolves.toBe(null)
  })
  test("getSubscriptionDetails", () => {
    const subscriptionId: string = "subscriptionId_example"
    return expect(instance.getSubscriptionDetails(subscriptionId, {})).resolves.toBe(null)
  })
  test("listSubscriptionEvents", () => {
    return expect(instance.listSubscriptionEvents({})).resolves.toBe(null)
  })
  test("listSubscriptions", () => {
    return expect(instance.listSubscriptions({})).resolves.toBe(null)
  })
})

describe("TemplatesApi", () => {
  let instance: api.TemplatesApi
  beforeEach(function() {
    instance = new api.TemplatesApi(config)
  });

  test("listFields", () => {
    const templateId: string = "templateId_example"
    return expect(instance.listFields(templateId, {})).resolves.toBe(null)
  })
  test("listRoles", () => {
    const templateId: string = "templateId_example"
    return expect(instance.listRoles(templateId, {})).resolves.toBe(null)
  })
  test("listTemplates", () => {
    const showall: string = "showall_example"
    const folderId: string = "folderId_example"
    return expect(instance.listTemplates(showall, folderId, {})).resolves.toBe(null)
  })
})

describe("UsersApi", () => {
  let instance: api.UsersApi
  beforeEach(function() {
    instance = new api.UsersApi(config)
  });

  test("createUser", () => {
    const body: api.UsersBody = {
  "value" : {
    "first_name" : "Jane",
    "last_name" : "Doe",
    "email" : "jane@doe.com",
    "title" : "CEO",
    "phone" : "+46401234567",
    "mobile" : "+12345678901",
    "note" : "Just a random contact",
    "company_name" : "Doe Inc.",
    "company_number" : "5678901"
  }
}
    return expect(instance.createUser(body, {})).resolves.toBe(null)
  })
  test("getUserDetails", () => {
    const userId: string = "userId_example"
    return expect(instance.getUserDetails(userId, {})).resolves.toBe(null)
  })
  test("listUsers", () => {
    return expect(instance.listUsers({})).resolves.toBe(null)
  })
})

describe("VideosApi", () => {
  let instance: api.VideosApi
  beforeEach(function() {
    instance = new api.VideosApi(config)
  });

  test("listVideos", () => {
    return expect(instance.listVideos({})).resolves.toBe(null)
  })
  test("uploadVideo", () => {
    const body: api.UploadVideoBody = undefined
    return expect(instance.uploadVideo(body, {})).resolves.toBe(null)
  })
})
