/*
 * GetAccept
 * GetAccept provides a sales enablement platform for sales to design, send, promote, track, and e-sign sales documents, leveraging sales collateral, contract management, proposals, and electronic signatures in one place.
 *
 * OpenAPI spec version: 1.6
 * Contact: integrations@getaccept.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {Error} from '../model/Error';
import {InlineResponse2006} from '../model/InlineResponse2006';
import {Subscription} from '../model/Subscription';
import {Subscriptions} from '../model/Subscriptions';
import {SubscriptionsBody} from '../model/SubscriptionsBody';

/**
* Subscriptions service.
* @module api/SubscriptionsApi
* @version 1.6
*/
export class SubscriptionsApi {

    /**
    * Constructs a new SubscriptionsApi. 
    * @alias module:api/SubscriptionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createSubscription operation.
     * @callback moduleapi/SubscriptionsApi~createSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscription{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Subscribe to document events
     * This call will create a new subscription. The response will be wrapped in an array even for single object according to REST hook standards.  &gt;Events   * &#x60;document.created&#x60; - Document is created   * &#x60;document.sent&#x60; - Document is sent   * &#x60;document.viewed&#x60; - Document is sent   * &#x60;document.signed&#x60; - Document is signed   * &#x60;document.approved&#x60; - Document is approved   * &#x60;document.expired&#x60; - Document has expired   * &#x60;document.rejected&#x60; - Document is rejected   * &#x60;document.downloaded&#x60; - Document is downloaded   * &#x60;document.printed&#x60; - Document is printed   * &#x60;document.forwarded&#x60; - Document is forwarded   * &#x60;document.partially_signed&#x60; - Document has been partially signed   * &#x60;document.commented&#x60; - Document is commented   * &#x60;document.hardbounced&#x60; - Document is hardbounced   * &#x60;document.imported&#x60; - Document is imported
     * @param {module:model/SubscriptionsBody} body A JSON object containing subscription information
     * @param {module:api/SubscriptionsApi~createSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createSubscription(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSubscription");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Oauth2', 'Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Subscription;

      return this.apiClient.callApi(
        '/subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteSubscription operation.
     * @callback moduleapi/SubscriptionsApi~deleteSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete subscription
     * Delete a single subscription.
     * @param {String} subscriptionId Subscription ID
     * @param {module:api/SubscriptionsApi~deleteSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteSubscription(subscriptionId, callback) {
      
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling deleteSubscription");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Oauth2', 'Token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getSubscriptionDetails operation.
     * @callback moduleapi/SubscriptionsApi~getSubscriptionDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscription{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get subscription details
     * This call will return details of a single subscription
     * @param {String} subscriptionId Subscription ID
     * @param {module:api/SubscriptionsApi~getSubscriptionDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getSubscriptionDetails(subscriptionId, callback) {
      
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling getSubscriptionDetails");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Oauth2', 'Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Subscription;

      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the listSubscriptionEvents operation.
     * @callback moduleapi/SubscriptionsApi~listSubscriptionEventsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2006>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List available subscription events
     * This call will return a list of available subscription events
     * @param {module:api/SubscriptionsApi~listSubscriptionEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    listSubscriptionEvents(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Oauth2', 'Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [InlineResponse2006];

      return this.apiClient.callApi(
        '/subscriptions/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the listSubscriptions operation.
     * @callback moduleapi/SubscriptionsApi~listSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscriptions{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List subscriptions
     * Receive a list of available subscriptions for the current entity.
     * @param {module:api/SubscriptionsApi~listSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    listSubscriptions(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Oauth2', 'Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Subscriptions;

      return this.apiClient.callApi(
        '/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}