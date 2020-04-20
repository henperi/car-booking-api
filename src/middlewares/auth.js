import { AppResponse } from '../helpers/AppResponse';
import { verifyToken } from '../helpers/tokenHelper';
import UserRepo from '../repositories/UserRepo';

const checkUserAuth = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return AppResponse.badRequest(res, {
      message: 'Authorization header absent, are you logged in?',
    });
  }

  try {
    const decodedToken = verifyToken(token);

    if (!decodedToken) {
      return AppResponse.unAuthorized(res, {
        message: 'Invalid Authorization credentials',
      });
    }

    const { email, exp } = decodedToken;
    const today = new Date();

    if (today.getTime() / 1000 > exp) {
      return AppResponse.unAuthorized(res, {
        message: 'Authorization token expired',
      });
    }

    const user = await UserRepo.getByEmail(email);

    if (!user) {
      return AppResponse.notFound(res, {
        message:
          'Unable to find or grant access to your login ID, log out and login again',
      });
    }

    res.locals.user = { ...decodedToken };
    return next();
  } catch (error) {
    return AppResponse.serverError(res, {
      message: 'An internal error occured',
      errors: { error },
    });
  }
};

export { checkUserAuth };
