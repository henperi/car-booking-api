import dotenv from 'dotenv';

import { log } from 'util';
import Repository from '../../repositories/Repository';

dotenv.config();

const seedUser = async () => {
  try {
    const users = await Repository.User.bulkCreate([
      {
        id: 1,
        email: 'user@example.com',
      },
      {
        id: 2,
        email: 'test@example.com',
      },
      {
        id: 3,
        email: 'demo@example.com',
      },
    ]);
    console.log(users);
  } catch (error) {
    log(error);
    throw error;
  }
};
seedUser();
export default seedUser;
