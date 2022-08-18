# GetAccept.SubscriptionsApi

All URIs are relative to *https://api.getaccept.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscription**](SubscriptionsApi.md#createSubscription) | **POST** /subscriptions | Subscribe to document events
[**deleteSubscription**](SubscriptionsApi.md#deleteSubscription) | **DELETE** /subscriptions/{subscriptionId} | Delete subscription
[**getSubscriptionDetails**](SubscriptionsApi.md#getSubscriptionDetails) | **GET** /subscriptions/{subscriptionId} | Get subscription details
[**listSubscriptionEvents**](SubscriptionsApi.md#listSubscriptionEvents) | **GET** /subscriptions/events | List available subscription events
[**listSubscriptions**](SubscriptionsApi.md#listSubscriptions) | **GET** /subscriptions | List subscriptions

<a name="createSubscription"></a>
# **createSubscription**
> Subscription createSubscription(body)

Subscribe to document events

This call will create a new subscription. The response will be wrapped in an array even for single object according to REST hook standards.  &gt;Events   * &#x60;document.created&#x60; - Document is created   * &#x60;document.sent&#x60; - Document is sent   * &#x60;document.viewed&#x60; - Document is sent   * &#x60;document.signed&#x60; - Document is signed   * &#x60;document.approved&#x60; - Document is approved   * &#x60;document.expired&#x60; - Document has expired   * &#x60;document.rejected&#x60; - Document is rejected   * &#x60;document.downloaded&#x60; - Document is downloaded   * &#x60;document.printed&#x60; - Document is printed   * &#x60;document.forwarded&#x60; - Document is forwarded   * &#x60;document.partially_signed&#x60; - Document has been partially signed   * &#x60;document.commented&#x60; - Document is commented   * &#x60;document.hardbounced&#x60; - Document is hardbounced   * &#x60;document.imported&#x60; - Document is imported

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.SubscriptionsApi();
let body = new GetAccept.SubscriptionsBody(); // SubscriptionsBody | A JSON object containing subscription information

apiInstance.createSubscription(body, (error, data, response) => {
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
 **body** | [**SubscriptionsBody**](SubscriptionsBody.md)| A JSON object containing subscription information | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSubscription"></a>
# **deleteSubscription**
> deleteSubscription(subscriptionId)

Delete subscription

Delete a single subscription.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.SubscriptionsApi();
let subscriptionId = "subscriptionId_example"; // String | Subscription ID

apiInstance.deleteSubscription(subscriptionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| Subscription ID | 

### Return type

null (empty response body)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSubscriptionDetails"></a>
# **getSubscriptionDetails**
> Subscription getSubscriptionDetails(subscriptionId)

Get subscription details

This call will return details of a single subscription

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.SubscriptionsApi();
let subscriptionId = "subscriptionId_example"; // String | Subscription ID

apiInstance.getSubscriptionDetails(subscriptionId, (error, data, response) => {
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
 **subscriptionId** | **String**| Subscription ID | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSubscriptionEvents"></a>
# **listSubscriptionEvents**
> [InlineResponse2006] listSubscriptionEvents()

List available subscription events

This call will return a list of available subscription events

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.SubscriptionsApi();
apiInstance.listSubscriptionEvents((error, data, response) => {
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

[**[InlineResponse2006]**](InlineResponse2006.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSubscriptions"></a>
# **listSubscriptions**
> Subscriptions listSubscriptions()

List subscriptions

Receive a list of available subscriptions for the current entity.

### Example
```javascript
import {GetAccept} from 'get_accept';
let defaultClient = GetAccept.ApiClient.instance;

// Configure OAuth2 access token for authorization: Oauth2
let Oauth2 = defaultClient.authentications['Oauth2'];
Oauth2.accessToken = 'YOUR ACCESS TOKEN';


let apiInstance = new GetAccept.SubscriptionsApi();
apiInstance.listSubscriptions((error, data, response) => {
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

[**Subscriptions**](Subscriptions.md)

### Authorization

[Oauth2](../README.md#Oauth2), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

