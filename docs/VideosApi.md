# GetAccept.VideosApi

All URIs are relative to *https://api.getaccept.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listVideos**](VideosApi.md#listVideos) | **GET** /videos | List videos
[**uploadVideo**](VideosApi.md#uploadVideo) | **POST** /upload/video | Upload a video

<a name="listVideos"></a>
# **listVideos**
> InlineResponse2003 listVideos()

List videos

Receive a list of available videos on the entity. You can add new videos in the mobile app or inside GetAccept.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.VideosApi();
apiInstance.listVideos((error, data, response) => {
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

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="uploadVideo"></a>
# **uploadVideo**
> InlineResponse20010 uploadVideo(body, file)

Upload a video

You can upload attachment files to include with documents you send. Successful request will return the attachment_id. Use attachment_id to assign an attachment to a document.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.VideosApi();
let body = new GetAccept.UploadVideoBody(); // UploadVideoBody | A JSON object containing the uploaded video information
let file = "file_example"; // Blob | 

apiInstance.uploadVideo(body, file, (error, data, response) => {
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
 **body** | [**UploadVideoBody**](UploadVideoBody.md)| A JSON object containing the uploaded video information | 
 **file** | **Blob**|  | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

