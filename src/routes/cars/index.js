import express from 'express';

// Controllers
import { CarsController } from '../../controllers/CarsController';
import { checkUserAuth } from '../../middlewares/auth';
import { validateRouteSchema } from '../../helpers/validateRouteSchema';
import { CarsSchema } from './schema';

const carsRouter = express.Router();

carsRouter.get('/get-cars', checkUserAuth, CarsController.fetchCars);

carsRouter.post(
  '/book-car/:plateNumber',
  checkUserAuth,
  validateRouteSchema(CarsSchema.bookCar, 'params'),
  CarsController.bookACar,
);

carsRouter.get(
  '/get-bookings',
  checkUserAuth,
  CarsController.fetchBookings,
);

export default carsRouter;
