import Sequelize from 'sequelize';

import Repository from './Repository';

const { Op } = Sequelize;
/**
 * User Repo
 */
class UserRepo extends Repository {
  /**
   * @description Method to get a user by email
   * @param {string} email
   *
   * @returns {Promise<*>} Response
   */
  static async getByEmail(email) {
    const user = this.User.findOne({
      where: {
        [Op.or]: [{ email }],
      },
    }).catch((error) => {
      throw new Error(error);
    });

    return user;
  }
}

export default UserRepo;
