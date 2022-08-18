# GetAccept.EventsSignedBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **String** | Event trigger | [default to &#x27;document.signed&#x27;]
**targetUrl** | **String** | The URL to post payload to on event | 
**host** | **String** | The host name to send the post to | [optional] 
**payload** | **String** | Additional payload data to post | [optional] 
**global** | **Boolean** | If the webhook should catch events for all entity users. | [optional] [default to true]
**notificationEmail** | **String** | If the event fails, send a notification to this email instead of the sender | [optional] 
