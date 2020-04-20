// /* eslint-disable require-jsdoc */
import Joi from '@hapi/joi';

/**
 * Schemas for all the endpoints relating to auth
 */
export class CarsSchema {
  /**
   * @description The schema used to validate the process of authenticating a user
   */
  static get bookCar() {
    return Joi.object({
      plateNumber: Joi.string().required(),
    });
  }
}
