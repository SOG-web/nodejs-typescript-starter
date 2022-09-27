import dotenv from 'dotenv-safe';
import http from 'http';
import { AddressInfo } from 'net';

import { createServer } from '@src/config/express';
import { logger } from '@src/config/logger';

dotenv.config();
// console.log(process.env.my);

async function startServer() {
  const app = createServer();
  const server = http.createServer(app).listen(() => {
    const addressInfo = server.address() as AddressInfo;
    logger.info(
      `Server ready at http://${addressInfo.address}:${addressInfo.port}`
    );
  });

  const signalTraps: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];
  signalTraps.forEach((type) => {
    process.once(type, async () => {
      logger.info(`process.once ${type}`);

      server.close(() => {
        logger.debug('HTTP server closed');
      });
    });
  });
}

startServer();
