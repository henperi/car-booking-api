import dotenv from 'dotenv';

import { log } from 'util';
import Repository from '../../repositories/Repository';

dotenv.config();

const seedCars = async () => {
  try {
    const cars = await Repository.Car.bulkCreate([
      {
        plateNumber: 'AA123',
        transmissionType: 'manual',
        airConditioned: true,
        imageUrl:
          'https://images.netdirector.co.uk/gforces-auto/image/upload/w_392,h_261,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/b886fb3e7e3ec3335a63d2bb1a38b260/hyundai_i10_go_se_polar_white_0002.jpg',
        bookingPrice: 5500,
        extraDetails: [
          '6 Speaker Radio/CD system',
          'Hybrid system display',
          'Vehicle Stability Control',
          'Hill-start Assist Control',
        ],
        modelName: 'Hyundai i10',
        rentalType: 'Mini Extra',
      },
      {
        plateNumber: 'AA243',
        transmissionType: 'automatic',
        airConditioned: false,
        imageUrl:
          'https://images.netdirector.co.uk/gforces-auto/image/upload/w_392,h_261,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/3c4e23058172911ebcc4c62ad2401b39/108.png',
        bookingPrice: 7000,
        extraDetails: [],
        modelName: 'Peugeot 108',
        rentalType: 'Mini Extra',
      },
      {
        plateNumber: 'BB123',
        transmissionType: 'automatic',
        airConditioned: true,
        imageUrl:
          'https://cars.usnews.com/static/images/Auto/izmo/i105104134/2019_ford_fiesta_angularfront.jpg',
        bookingPrice: 9000,
        extraDetails: [
          'Hybrid system display',
          'Vehicle Stability Control',
          'Remote Control',
        ],
        modelName: 'Ford Fiesta',
        rentalType: 'Economy',
      },
      {
        plateNumber: 'BC223',
        transmissionType: 'automatic',
        airConditioned: true,
        imageUrl:
          'https://www.nationwidevehiclecontracts.co.uk/m/2/c3-hatchback-flair.jpg',
        bookingPrice: 5000,
        extraDetails: ['Remote Control', '8 Speaker Audio system'],
        modelName: 'Citroen C3',
        rentalType: 'Economy',
      },
      {
        plateNumber: 'XX125',
        transmissionType: 'automatic',
        airConditioned: false,
        imageUrl:
          'https://cdn2.carbuyer.co.uk/sites/carbuyer_d7/files/styles/16x9_720/public/ford-mondeo-mk4-01.jpg?itok=skVBRcO7',
        bookingPrice: 8000,
        extraDetails: [],
        modelName: 'Ford Mondeo',
        rentalType: 'Standard',
      },
      {
        plateNumber: 'XA124',
        transmissionType: 'automatic',
        airConditioned: true,
        imageUrl:
          'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/4c4dfa7de047f3af2d17207cfb9e17d9.png',
        bookingPrice: 8500,
        extraDetails: [],
        modelName: 'Audi A5',
        rentalType: 'Luxury',
      },
    ]);
    console.log(cars);
  } catch (error) {
    log(error);
    throw error;
  }
};
seedCars();
export default seedCars;
