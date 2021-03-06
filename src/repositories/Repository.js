// eslint-disable-next-line no-unused-vars
import Sequelize from 'sequelize';

// Model
import model from '../db/models';

const { User, Cars, Booking } = model;

/**
 * Repository
 */
class Repository {
  /**
   * @typedef {Sequelize.ModelCtor<Sequelize.Model>} Model
   */

  /**
   * @type {Model}
   */
  static get User() {
    return User;
  }

  /**
   * @type {Model}
   */
  static get Car() {
    return Cars;
  }

  /**
   * @type {Model}
   */
  static get Booking() {
    return Booking;
  }
}

export default Repository;
