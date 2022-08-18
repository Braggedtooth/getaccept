# GetAccept.AuthenticationApi

All URIs are relative to *https://api.getaccept.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticate**](AuthenticationApi.md#authenticate) | **POST** /auth | Authentication by token
[**refreshToken**](AuthenticationApi.md#refreshToken) | **GET** /refresh | Refresh an access token

<a name="authenticate"></a>
# **authenticate**
> InlineResponse200 authenticate(body)

Authentication by token

Token based authentication is recommended for server-based access or access from clients where OAuth is not suitable. Access tokens has to be requested using an administrators login credentials. Requests should include the header Content-Type with value application/json

### Example
```javascript
import {GetAccept} from 'get_accept';

let apiInstance = new GetAccept.AuthenticationApi();
let body = new GetAccept.AuthBody(); // AuthBody | A JSON object containing authentication credentials

apiInstance.authenticate(body, (error, data, response) => {
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
 **body** | [**AuthBody**](AuthBody.md)| A JSON object containing authentication credentials | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="refreshToken"></a>
# **refreshToken**
> InlineResponse2001 refreshToken()

Refresh an access token

You can request a refreshed of the access token before the original token has expired.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.AuthenticationApi();
apiInstance.refreshToken((error, data, response) => {
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

