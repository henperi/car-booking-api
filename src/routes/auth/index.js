import express from 'express';

// Controllers
import AuthController from '../../controllers/AuthController';
import { AuthSchema } from './schema';
import { validateRouteSchema } from '../../helpers/validateRouteSchema';

const authRouter = express.Router();

/**
 * login user
 */
authRouter.post(
  '/login',
  validateRouteSchema(AuthSchema.login, 'body'),
  AuthController.authenticateUser,
);

export default authRouter;
