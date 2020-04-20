import express from 'express';
import authRouter from './auth';
import carsRouter from './cars';

const appRouter = express.Router();

appRouter.use('/auth', authRouter);
appRouter.use('/cars', carsRouter);

export default appRouter;
