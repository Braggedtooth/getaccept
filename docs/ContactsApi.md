# GetAccept.ContactsApi

All URIs are relative to *https://api.getaccept.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContact**](ContactsApi.md#createContact) | **POST** /contacts | Create contact
[**listContacts**](ContactsApi.md#listContacts) | **GET** /contacts | List contacts

<a name="createContact"></a>
# **createContact**
> InlineResponse2007 createContact(body)

Create contact

This will create a new contact in the database for the current entity

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.ContactsApi();
let body = new GetAccept.ContactsBody(); // ContactsBody | A JSON object containing contact information

apiInstance.createContact(body, (error, data, response) => {
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
 **body** | [**ContactsBody**](ContactsBody.md)| A JSON object containing contact information | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listContacts"></a>
# **listContacts**
> Contacts listContacts()

List contacts

Receive a list of available contact for the current entity. All contacts added as a recipient are saved as a contact and is available for later use on that entity.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.ContactsApi();
apiInstance.listContacts((error, data, response) => {
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

[**Contacts**](Contacts.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

