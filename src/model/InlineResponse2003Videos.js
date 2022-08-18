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
 * The InlineResponse2003Videos model module.
 * @module model/InlineResponse2003Videos
 * @version 1.6
 */
export class InlineResponse2003Videos {
  /**
   * Constructs a new <code>InlineResponse2003Videos</code>.
   * @alias module:model/InlineResponse2003Videos
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2003Videos</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2003Videos} obj Optional instance to populate.
   * @return {module:model/InlineResponse2003Videos} The populated <code>InlineResponse2003Videos</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2003Videos();
      if (data.hasOwnProperty('video_id'))
        obj.videoId = ApiClient.convertToType(data['video_id'], 'String');
      if (data.hasOwnProperty('video_type'))
        obj.videoType = ApiClient.convertToType(data['video_type'], 'String');
      if (data.hasOwnProperty('video_title'))
        obj.videoTitle = ApiClient.convertToType(data['video_title'], 'String');
      if (data.hasOwnProperty('video_url'))
        obj.videoUrl = ApiClient.convertToType(data['video_url'], 'String');
      if (data.hasOwnProperty('thumb_url'))
        obj.thumbUrl = ApiClient.convertToType(data['thumb_url'], 'String');
      if (data.hasOwnProperty('saved'))
        obj.saved = ApiClient.convertToType(data['saved'], 'Boolean');
      if (data.hasOwnProperty('published'))
        obj.published = ApiClient.convertToType(data['published'], 'Boolean');
      if (data.hasOwnProperty('editable'))
        obj.editable = ApiClient.convertToType(data['editable'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} videoId
 */
InlineResponse2003Videos.prototype.videoId = undefined;

/**
 * @member {String} videoType
 */
InlineResponse2003Videos.prototype.videoType = undefined;

/**
 * @member {String} videoTitle
 */
InlineResponse2003Videos.prototype.videoTitle = undefined;

/**
 * @member {String} videoUrl
 */
InlineResponse2003Videos.prototype.videoUrl = undefined;

/**
 * @member {String} thumbUrl
 */
InlineResponse2003Videos.prototype.thumbUrl = undefined;

/**
 * @member {Boolean} saved
 */
InlineResponse2003Videos.prototype.saved = undefined;

/**
 * @member {Boolean} published
 */
InlineResponse2003Videos.prototype.published = undefined;

/**
 * @member {Boolean} editable
 */
InlineResponse2003Videos.prototype.editable = undefined;
