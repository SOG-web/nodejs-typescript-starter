import dotenv from 'dotenv-safe';
import express from 'express';
import cors from 'cors';

import errorHandler from '@src/middleware/errorHandler';

const createServer = (): express.Application => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(express.json());

  app.get('/health', (req, res) => {
    res.send('Up and running');
  });

  // app.use('/', locationRouter);

  app.use(errorHandler);

  return app;
};

export { createServer };
