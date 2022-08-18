# GetAccept.DocumentsBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Enter a name of the document | 
**templateId** | **String** | Select a template to use for the sending | [optional] 
**type** | **String** | Set the type/category of the document | [optional] [default to &#x27;sales&#x27;]
**value** | **Number** | Value of deal or document | [optional] 
**senderId** | **String** | Send from other user than authenticated | [optional] 
**senderEmail** | **String** | Send from other email than authenticated user | [optional] 
**isSigningInitials** | **Boolean** | Sign document using recipient initials | [optional] 
**isReminderSending** | **Boolean** | Should automatic reminders be sent | [optional] 
**isAutomaticSending** | **Boolean** | If the document should be sent after creation | [optional] 
**videoId** | **String** | Select a video to use for the sending | [optional] 
**attachments** | [**[DocumentsAttachments]**](DocumentsAttachments.md) | Attachments | [optional] 
**isSigning** | **Boolean** | Should the document be sent for signing | [optional] 
**isSmsSending** | **Boolean** | Should the document be sent to recipient mobile by text | [optional] 
**fileIds** | **String** | Comma-separated, unique file-ids received when uploading files | [optional] 
**fileName** | **String** | Filename of the document, with the extension. This will be helpful for converting different file-types. | [optional] 
**fileContent** | **String** | Base64 encoded file content | [optional] 
**fileUrl** | **String** | Url to document file. Documents must be public available for download | [optional] 
**isSigningForward** | **Boolean** | Should recipients be able to transfer signature rights | [optional] 
**recipients** | [**[DocumentsRecipients]**](DocumentsRecipients.md) |  | [optional] 
**isSigningBiometric** | **Boolean** | Use handwritten signature | [optional] 
**expirationDate** | **Date** | Date and time when the document should expire | [optional] 
**isScheduledSending** | **Boolean** | Should the sending be scheduled for sending in the future | [optional] 
**scheduledSendingTime** | **Date** | Date and time when the document should be sent out | [optional] 
**customFields** | [**[DocumentsCustomFields]**](DocumentsCustomFields.md) | Custom field | [optional] 
**externalId** | **String** | External system ID for identification | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `sales` (value: `"sales"`)
* `introduction` (value: `"introduction"`)
* `hr` (value: `"hr"`)
* `other` (value: `"other"`)

