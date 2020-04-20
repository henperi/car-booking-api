// Repos
import { CarRepo } from '../repositories/CarRepo';
import { BookingRepo } from '../repositories/BookingRepo';

// Helpers
import { AppResponse } from '../helpers/AppResponse';
// import { trimify } from '../helpers/objectHelper';

/**
 * Controller that handles everything relating to cars
 */
export class CarsController {
  /**
   * @description controller method to fetch all cars
   * @param {*} req req
   * @param {{
   * }} res res
   *
   * @returns {Promise<AppResponse>} The Return Object
   */
  static async fetchCars(req, res) {
    try {
      const cars = await CarRepo.getAll();

      return AppResponse.success(res, { data: { cars } });
    } catch (errors) {
      return AppResponse.serverError(res, { errors });
    }
  }

  /**
   * @description controller method to book a car
   * @param {*} req req
   * @param {*} res res
   *
   * @returns {Promise<AppResponse>} The Return Object
   */
  static async bookACar(req, res) {
    const { plateNumber } = req.params;
    const { id } = res.locals.user;

    try {
      const car = await CarRepo.getByPlateNumber(plateNumber);

      if (!car) {
        return AppResponse.badRequest(res, {
          message: 'This car does not exist',
        });
      }

      const bookingResult = await BookingRepo.create({
        plateNumber,
        userId: id,
      });

      return AppResponse.success(res, { data: { bookingResult } });
    } catch (errors) {
      return AppResponse.serverError(res, { errors });
    }
  }

  /**
   * @description controller method to fetch all cars
   * @param {*} req req
   * @param {*} res res
   *
   * @returns {Promise<AppResponse>} The Return Object
   */
  static async fetchBookings(req, res) {
    const { id } = res.locals.user;

    try {
      const allBookings = await BookingRepo.getAllByUserId({
        userId: id.toString(),
      });

      return AppResponse.success(res, { data: { allBookings } });
    } catch (errors) {
      return AppResponse.serverError(res, { errors });
    }
  }
}
