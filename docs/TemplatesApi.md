# GetAccept.TemplatesApi

All URIs are relative to *https://api.getaccept.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listFields**](TemplatesApi.md#listFields) | **GET** /templates/{templateId}/fields | Get template fields
[**listRoles**](TemplatesApi.md#listRoles) | **GET** /templates/{templateId}/roles | Get template roles
[**listTemplates**](TemplatesApi.md#listTemplates) | **GET** /templates | List templates

<a name="listFields"></a>
# **listFields**
> Fields listFields(templateId)

Get template fields

Receive a list of fields for a specific template.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.TemplatesApi();
let templateId = "templateId_example"; // String | Template ID

apiInstance.listFields(templateId, (error, data, response) => {
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
 **templateId** | **String**| Template ID | 

### Return type

[**Fields**](Fields.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listRoles"></a>
# **listRoles**
> InlineResponse2005 listRoles(templateId)

Get template roles

Receive a list of roles for a specific template.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.TemplatesApi();
let templateId = "templateId_example"; // String | Template ID

apiInstance.listRoles(templateId, (error, data, response) => {
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
 **templateId** | **String**| Template ID | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTemplates"></a>
# **listTemplates**
> InlineResponse2002 listTemplates(opts)

List templates

Receive a list of available document templates. You can add new templates under the Templates-section in GetAccept.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.TemplatesApi();
let opts = { 
  'showall': "true", // String | Show all templates for entity
  'folderId': "folderId_example" // String | Show templates in a specific folder
};
apiInstance.listTemplates(opts, (error, data, response) => {
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
 **showall** | **String**| Show all templates for entity | [optional] [default to true]
 **folderId** | **String**| Show templates in a specific folder | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

