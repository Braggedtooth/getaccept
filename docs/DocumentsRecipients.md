# GetAccept.DocumentsRecipients

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **String** | Recipient first name | [optional] 
**lastName** | **String** | Last name of recipient | [optional] 
**role** | **String** | The kind of recipient in the document | [optional] 
**roleName** | **String** | The name of the role in a template | [optional] 
**verifyQnaSign** | **Boolean** | Should a question be asked before signing | [optional] 
**verifyQnaQuestion** | **String** | Question to ask for verification | [optional] 
**verifyQna** | **Boolean** | Should a question be asked | [optional] 
**companyName** | **String** | Company name of the recipient | [optional] 
**companyNumber** | **String** | Company number of the recipient | [optional] 
**verifyQnaOpen** | **Boolean** | Should question be asked before opening document | [optional] 
**verifyQnaAnswer** | **String** | The answer to question | [optional] 
**verifySmsSign** | **Boolean** | Should a SMS verify the recipient before signing | [optional] 
**verifyEidType** | **String** | EID type to be used for personal verification | [optional] 
**note** | **String** | Additional note for a recipient | [optional] 
**email** | **String** | Email address of the recipient | [optional] 
**mobile** | **String** | Mobile phone in international format | [optional] 
**verifySms** | **Boolean** | Verify recipient by SMS | [optional] 
**verifySmsOpen** | **Boolean** | Verify SMS on open | [optional] 
**orderNum** | **Number** | If signing order is enabled | [optional] 
**verifyEid** | **Boolean** | Verify using EID | [optional] 

<a name="RoleEnum"></a>
## Enum: RoleEnum

* `signer` (value: `"signer"`)
* `approver` (value: `"approver"`)
* `cc` (value: `"cc"`)

