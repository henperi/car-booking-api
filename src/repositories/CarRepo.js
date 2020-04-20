// import Sequelize from 'sequelize';

import Repository from './Repository';

// const { Op } = Sequelize;
/**
 * User Repo
 */
export class CarRepo extends Repository {
  /**
   * @description Method to get all cars in the system
   *
   * @returns {Promise<*>} Response
   */
  static async getAll() {
    const cars = this.Car.findAll().catch((error) => {
      throw new Error(error);
    });

    return cars;
  }
}
