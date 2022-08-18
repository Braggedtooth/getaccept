# GetAccept.UsersApi

All URIs are relative to *https://api.getaccept.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **POST** /users | Create user
[**getUserDetails**](UsersApi.md#getUserDetails) | **GET** /users/{userId} | Get user details
[**listUsers**](UsersApi.md#listUsers) | **GET** /users | List users

<a name="createUser"></a>
# **createUser**
> User createUser(body)

Create user

This will create a new contact in the database for the current entity

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.UsersApi();
let body = new GetAccept.UsersBody(); // UsersBody | A JSON object containing user information

apiInstance.createUser(body, (error, data, response) => {
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
 **body** | [**UsersBody**](UsersBody.md)| A JSON object containing user information | 

### Return type

[**User**](User.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserDetails"></a>
# **getUserDetails**
> User getUserDetails(userId)

Get user details

This call will return details of a single user. Receive details and available entities of the current authenticated user using user-id *me*

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.UsersApi();
let userId = "userId_example"; // String | User ID

apiInstance.getUserDetails(userId, (error, data, response) => {
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
 **userId** | **String**| User ID | 

### Return type

[**User**](User.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listUsers"></a>
# **listUsers**
> Users listUsers()

List users

Fetch a list of active users for the current authenticated entity

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.UsersApi();
apiInstance.listUsers((error, data, response) => {
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

[**Users**](Users.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

