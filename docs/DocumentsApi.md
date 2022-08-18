# GetAccept.DocumentsApi

All URIs are relative to *https://api.getaccept.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDocument**](DocumentsApi.md#createDocument) | **POST** /documents | Create and send document or template
[**downloadDocument**](DocumentsApi.md#downloadDocument) | **GET** /documents/{documentId}/download | Download document
[**getDocumentDetails**](DocumentsApi.md#getDocumentDetails) | **GET** /documents/{documentId} | Get document details
[**listDocumentFields**](DocumentsApi.md#listDocumentFields) | **GET** /documents/{documentId}/fields | Get document fields
[**listDocuments**](DocumentsApi.md#listDocuments) | **GET** /documents | List documents
[**listRecipients**](DocumentsApi.md#listRecipients) | **GET** /documents/{documentId}/recipients | Get document recipients
[**sealDocument**](DocumentsApi.md#sealDocument) | **POST** /documents/{documentId}/seal | Seal document
[**sendDocument**](DocumentsApi.md#sendDocument) | **POST** /documents/{documentId}/send | Send existing document
[**uploadDocument**](DocumentsApi.md#uploadDocument) | **POST** /upload | Upload a document file

<a name="createDocument"></a>
# **createDocument**
> Document createDocument(body)

Create and send document or template

You must create a document to be able to send it to a recipient. When creating a document you can refer to previously uploaded files with file_id or you can choose to create a document and upload the files in on API post. You can only upload ONE file when including a file in the create document POST.  Use either file_ids parameter to use existing uploaded file(s), file_content to send the document as base64 encoded string or do a multipart post with file parameter.  All recipients must have either a valid e-mail or a mobile number.  All events are recorded using requestor IP address. You can override this using header CLIENT_IP containing the end-users public IP address.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.DocumentsApi();
let body = new GetAccept.DocumentsBody(); // DocumentsBody | A JSON object containing document information

apiInstance.createDocument(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentsBody**](DocumentsBody.md)| A JSON object containing document information | 

### Return type

[**Document**](Document.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="downloadDocument"></a>
# **downloadDocument**
> InlineResponse2004 downloadDocument(documentId, opts)

Download document

Document file can always be downloaded but most likely you want to download it when it has status Signed.   You can select to receive a download-url or get the binary file.  The download URL is accessable 10 minutes after a request has been made.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.DocumentsApi();
let documentId = "documentId_example"; // String | Document ID
let opts = { 
  'direct': "true" // String | Return the binary file directly
};
apiInstance.downloadDocument(documentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| Document ID | 
 **direct** | **String**| Return the binary file directly | [optional] [default to true]

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf

<a name="getDocumentDetails"></a>
# **getDocumentDetails**
> Document getDocumentDetails(documentId)

Get document details

Get document details by specifying a document id.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.DocumentsApi();
let documentId = "documentId_example"; // String | Document ID

apiInstance.getDocumentDetails(documentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| Document ID | 

### Return type

[**Document**](Document.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listDocumentFields"></a>
# **listDocumentFields**
> Fields listDocumentFields(documentId)

Get document fields

Get a list of fields for a document or template. Can be used both before and after a document has been signed.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.DocumentsApi();
let documentId = "documentId_example"; // String | Document ID

apiInstance.listDocumentFields(documentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| Document ID | 

### Return type

[**Fields**](Fields.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listDocuments"></a>
# **listDocuments**
> Documents listDocuments(opts)

List documents

Get a list of available documents

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.DocumentsApi();
let opts = { 
  'filter': "filter_example", // String | Filter list on status
  'sortBy': "sortBy_example", // String | How to sort results
  'sortOrder': "sortOrder_example", // String | Sort order of results
  'showteam': true, // Boolean | Include documents from team members
  'showall': true, // Boolean | Include all documents from entity
  'externalId': "externalId_example", // String | An external ID is a custom field which can contain a unique record identifier from a system outside of GetAccept
  'offset': 1.2, // Number | Start list from record x until limit
  'limit': 1.2 // Number | Number of records to list
};
apiInstance.listDocuments(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter list on status | [optional] 
 **sortBy** | **String**| How to sort results | [optional] 
 **sortOrder** | **String**| Sort order of results | [optional] 
 **showteam** | **Boolean**| Include documents from team members | [optional] 
 **showall** | **Boolean**| Include all documents from entity | [optional] 
 **externalId** | **String**| An external ID is a custom field which can contain a unique record identifier from a system outside of GetAccept | [optional] 
 **offset** | **Number**| Start list from record x until limit | [optional] 
 **limit** | **Number**| Number of records to list | [optional] 

### Return type

[**Documents**](Documents.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listRecipients"></a>
# **listRecipients**
> Recipients listRecipients(documentId)

Get document recipients

Get a list of recipients for a specific document.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.DocumentsApi();
let documentId = "documentId_example"; // String | Document ID

apiInstance.listRecipients(documentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| Document ID | 

### Return type

[**Recipients**](Recipients.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sealDocument"></a>
# **sealDocument**
> Recipients sealDocument(documentId, opts)

Seal document

If you prefer to send the document manually you can use this method to seal the document. Do not use this method if you send the document automatically or if you use the send document method above.  This API call triggers the document seal action and can only be performed on documents with document_status &#x3D; draft. The method will return individual access/signing links for each recipient.  If document was created using self-sign option it will also be self-signed by the authenticated or specified user before sealing.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.DocumentsApi();
let documentId = "documentId_example"; // String | Document ID
let opts = { 
  'body': new GetAccept.DocumentIdSealBody() // DocumentIdSealBody | An optional JSON object containing seal information
};
apiInstance.sealDocument(documentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| Document ID | 
 **body** | [**DocumentIdSealBody**](DocumentIdSealBody.md)| An optional JSON object containing seal information | [optional] 

### Return type

[**Recipients**](Recipients.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendDocument"></a>
# **sendDocument**
> Document sendDocument(documentId, opts)

Send existing document

When you send a document via GetAccept, we deliver an email to all recipients, each containing a unique, secured link. This API call triggers the document send action and can only be performed on documents with document_status &#x3D; draft. The document will be sent to recipients you provided when it was created.  If document was created using self-sign option it will also be self-signed by the authenticated or specified user before sending.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.DocumentsApi();
let documentId = "documentId_example"; // String | Document ID
let opts = { 
  'body': new GetAccept.DocumentIdSendBody() // DocumentIdSendBody | An optional JSON object containing sending information
};
apiInstance.sendDocument(documentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| Document ID | 
 **body** | [**DocumentIdSendBody**](DocumentIdSendBody.md)| An optional JSON object containing sending information | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadDocument"></a>
# **uploadDocument**
> InlineResponse2008 uploadDocument(body, file)

Upload a document file

You can upload one file at a time and get a file id. The file id is used to connect a file with a GetAccept document which is sent to recipients. If you want to upload mutliple files you run multiple POST. We only accept files up to 10 MB as default. Uploaded file need to be imported/added to a document within 48 hours after uploading.  We recommended you to upload PDF files in order to guarantee the same look when sent. Other file types can be converted, such as:  Mirosoft Office: doc, docx, xl, xls, xlsx, ppt, pptx Mac: numbers, key Images: jpg, jpeg, png Other: html, tex, csv

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.DocumentsApi();
let body = new GetAccept.UploadBody(); // UploadBody | A JSON object containing the uploaded document information
let file = "file_example"; // Blob | 

apiInstance.uploadDocument(body, file, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UploadBody**](UploadBody.md)| A JSON object containing the uploaded document information | 
 **file** | **Blob**|  | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

