import Sequelize from 'sequelize';

import Repository from './Repository';

const { Op } = Sequelize;
/**
 * User Repo
 */
export class BookingRepo extends Repository {
  /**
   * @description Method to get all cars in the system
   *
   * @returns {Promise<*>} Response
   */
  static async create({ plateNumber, userId }) {
    const booking = this.Booking.create({
      plateNumber,
      userId,
    }).catch((error) => {
      throw new Error(error);
    });

    return booking;
  }

  /**
   * @description Method to get a user by email
   *
   * @returns {Promise<*>} Response
   */
  static async getAllByUserId({ userId }) {
    const booking = this.Booking.findAll({
      where: {
        [Op.or]: [{ userId }],
      },
    }).catch((error) => {
      throw new Error(error);
    });

    return booking;
  }
}
