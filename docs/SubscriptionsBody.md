# GetAccept.SubscriptionsBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **String** | Event trigger | 
**targetUrl** | **String** | The URL to post payload to on event | 
**host** | **String** | The host name to send the post to | [optional] 
**payload** | **String** | Additional payload data to post | [optional] 
**global** | **Boolean** | If the webhook should catch events for all entity users. | [optional] [default to true]
**notificationEmail** | **String** | If the event fails, send a notification to this email instead of the sender | [optional] 

<a name="EventEnum"></a>
## Enum: EventEnum

* `created` (value: `"document.created"`)
* `sent` (value: `"document.sent"`)
* `viewed` (value: `"document.viewed"`)
* `reviewed` (value: `"document.reviewed"`)
* `signed` (value: `"document.signed"`)
* `approved` (value: `"document.approved"`)
* `expired` (value: `"document.expired"`)
* `rejected` (value: `"document.rejected"`)
* `downloaded` (value: `"document.downloaded"`)
* `printed` (value: `"document.printed"`)
* `forwarded` (value: `"document.forwarded"`)
* `partiallySigned` (value: `"document.partially_signed"`)
* `commented` (value: `"document.commented"`)
* `hardbounced` (value: `"document.hardbounced"`)
* `imported` (value: `"document.imported"`)

