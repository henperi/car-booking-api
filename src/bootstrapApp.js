import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

// Helpers
import { AppResponse } from './helpers/AppResponse';

// appRoutes
import appRoutes from './routes';

// middlewares

const bootstrapApp = async (app) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('dev'));
  app.enable('trust proxy');

  await app.use('/api/v1', appRoutes);
  app.use('/*', (req, res) =>
    AppResponse.notFound(res, { message: 'This endpoint does not exist' }),
  );

  return app;
};

export default bootstrapApp;
