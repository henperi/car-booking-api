import express from 'express';
import { log } from 'util';

import bootstrapApp from './bootstrapApp';

const app = express();
const port = process.env.PORT || 4225;

/**
 * @description Method to start the app
 * @returns {Promise<void>} void
 */
const startServer = async () => {
  try {
    const server = await bootstrapApp(app);
    await server.listen(port, () => {
      log(`connected on port ${port}`);
    });
  } catch (error) {
    log(error);
    process.exit();
  }
};

startServer();

export default app;
