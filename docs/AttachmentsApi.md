# GetAccept.AttachmentsApi

All URIs are relative to *https://api.getaccept.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAttachments**](AttachmentsApi.md#listAttachments) | **GET** /attachments | List attachments
[**uploadAttachment**](AttachmentsApi.md#uploadAttachment) | **POST** /upload/attachment | Upload an attachment

<a name="listAttachments"></a>
# **listAttachments**
> InlineResponse20011 listAttachments()

List attachments

Receive a list of available attachments. You can add new attachments in GetAccept using a new document.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.AttachmentsApi();
apiInstance.listAttachments((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="uploadAttachment"></a>
# **uploadAttachment**
> InlineResponse2009 uploadAttachment(body, file)

Upload an attachment

You can upload attachment files to include with documents you send. Successful request will return the attachment_id. Use attachment_id to assign an attachment to a document.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.AttachmentsApi();
let body = new GetAccept.UploadAttachmentBody(); // UploadAttachmentBody | A JSON object containing the uploaded attachment information
let file = "file_example"; // Blob | 

apiInstance.uploadAttachment(body, file, (error, data, response) => {
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
 **body** | [**UploadAttachmentBody**](UploadAttachmentBody.md)| A JSON object containing the uploaded attachment information | 
 **file** | **Blob**|  | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

