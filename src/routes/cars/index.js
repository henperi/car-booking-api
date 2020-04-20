import express from 'express';

// Controllers
import { CarsController } from '../../controllers/CarsController';
import { checkUserAuth } from '../../middlewares/auth';

const carsRouter = express.Router();

carsRouter.get('/get-cars', checkUserAuth, CarsController.fetchCars);

carsRouter.get('/book-car', checkUserAuth, CarsController.bookACar);

carsRouter.get(
  '/get-bookings',
  checkUserAuth,
  CarsController.fetchBookings,
);

export default carsRouter;
