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
import {ApiClient} from '../ApiClient';

/**
 * The InlineResponse2005Roles model module.
 * @module model/InlineResponse2005Roles
 * @version 1.6
 */
export class InlineResponse2005Roles {
  /**
   * Constructs a new <code>InlineResponse2005Roles</code>.
   * @alias module:model/InlineResponse2005Roles
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2005Roles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2005Roles} obj Optional instance to populate.
   * @return {module:model/InlineResponse2005Roles} The populated <code>InlineResponse2005Roles</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2005Roles();
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
      if (data.hasOwnProperty('role_name'))
        obj.roleName = ApiClient.convertToType(data['role_name'], 'String');
      if (data.hasOwnProperty('first_name'))
        obj.firstName = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('last_name'))
        obj.lastName = ApiClient.convertToType(data['last_name'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('mobile'))
        obj.mobile = ApiClient.convertToType(data['mobile'], 'String');
      if (data.hasOwnProperty('role_id'))
        obj.roleId = ApiClient.convertToType(data['role_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} role
 */
InlineResponse2005Roles.prototype.role = undefined;

/**
 * @member {String} roleName
 */
InlineResponse2005Roles.prototype.roleName = undefined;

/**
 * @member {String} firstName
 */
InlineResponse2005Roles.prototype.firstName = undefined;

/**
 * @member {String} lastName
 */
InlineResponse2005Roles.prototype.lastName = undefined;

/**
 * @member {String} email
 */
InlineResponse2005Roles.prototype.email = undefined;

/**
 * @member {String} mobile
 */
InlineResponse2005Roles.prototype.mobile = undefined;

/**
 * @member {String} roleId
 */
InlineResponse2005Roles.prototype.roleId = undefined;

