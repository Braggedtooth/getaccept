# GetAccept.OthersApi

All URIs are relative to *https://api.getaccept.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRejectedSubscription**](OthersApi.md#createRejectedSubscription) | **POST** /subscriptions/events/rejected | When a document has been rejected
[**createReviewedSubscription**](OthersApi.md#createReviewedSubscription) | **POST** /subscriptions/events/reviewed | When a document has been reviewed
[**createSignedSubscription**](OthersApi.md#createSignedSubscription) | **POST** /subscriptions/events/signed | When a document has been signed

<a name="createRejectedSubscription"></a>
# **createRejectedSubscription**
> Subscription createRejectedSubscription(body)

When a document has been rejected

Triggers when a document has been rejected by any of the recipients

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.OthersApi();
let body = new GetAccept.EventsRejectedBody(); // EventsRejectedBody | A JSON object containing subscription information

apiInstance.createRejectedSubscription(body, (error, data, response) => {
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
 **body** | [**EventsRejectedBody**](EventsRejectedBody.md)| A JSON object containing subscription information | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createReviewedSubscription"></a>
# **createReviewedSubscription**
> Subscription createReviewedSubscription(body)

When a document has been reviewed

Triggers when a document has been reviewed by any of the recipients

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.OthersApi();
let body = new GetAccept.EventsReviewedBody(); // EventsReviewedBody | A JSON object containing subscription information

apiInstance.createReviewedSubscription(body, (error, data, response) => {
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
 **body** | [**EventsReviewedBody**](EventsReviewedBody.md)| A JSON object containing subscription information | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSignedSubscription"></a>
# **createSignedSubscription**
> Subscription createSignedSubscription(body)

When a document has been signed

Triggers when a document has been signed by all signing parties

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.OthersApi();
let body = new GetAccept.EventsSignedBody(); // EventsSignedBody | A JSON object containing subscription information

apiInstance.createSignedSubscription(body, (error, data, response) => {
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
 **body** | [**EventsSignedBody**](EventsSignedBody.md)| A JSON object containing subscription information | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

