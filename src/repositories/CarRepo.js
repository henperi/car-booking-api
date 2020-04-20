import Sequelize from 'sequelize';
import Repository from './Repository';

const { Op } = Sequelize;

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

  /**
   * @description Method to get a user by email
   * @param {string} plateNumber
   *
   * @returns {Promise<*>} Response
   */
  static async getByPlateNumber(plateNumber) {
    const user = this.Car.findOne({
      where: {
        [Op.or]: [{ plateNumber }],
      },
    }).catch((error) => {
      throw new Error(error);
    });

    return user;
  }
}
