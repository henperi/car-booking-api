// /* eslint-disable require-jsdoc */
import Joi from '@hapi/joi';

/**
 * Schemas for all the endpoints relating to auth
 */
export class AuthSchema {
  /**
   * @description The schema used to validate the process of authenticating a user
   */
  static get login() {
    return Joi.object({
      email: Joi.string().email().required(),
    });
  }
}
