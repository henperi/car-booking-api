// Repos
import UserRepo from '../repositories/UserRepo';

// Helpers
import { generateUserAuthToken } from '../helpers/generateAuthToken';
import { setupTokenData } from '../helpers/tokenHelper';
import { AppResponse } from '../helpers/AppResponse';
import { trimify } from '../helpers/objectHelper';

/**
 * Controller that handles everything relating to auth
 */
class AuthController {
  /**
   * @description controller method to authenticate a user
   * @param {*} req re
   * @param {*} res res
   *
   * @returns {Promise<AppResponse>} The Return Object
   */
  static async authenticateUser(req, res) {
    const reqBody = trimify(req.body);
    const { email } = reqBody;

    try {
      const user = await UserRepo.getByEmail(email.toLowerCase());

      if (!user) {
        return AppResponse.notFound(res, {
          message: 'Invalid login credentials',
        });
      }

      const token = generateUserAuthToken(setupTokenData(user));

      return AppResponse.success(res, {
        message: 'Authenticated successfully',
        data: { token },
      });
    } catch (errors) {
      return AppResponse.serverError(res, { errors });
    }
  }
}

export default AuthController;
