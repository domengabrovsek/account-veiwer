import { appConfig } from './config/appConfig';
import { getStakingTransactions, getAccountBalance, getTradeHistory, getLedgerInfo } from './kraken';

import fastify from 'fastify';
import fastifyCaching from '@fastify/caching';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';

const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname'
      }
    }
  },
  production: true,
  test: false
}

const server = fastify({ logger: envToLogger['development'] });

server.register(
  fastifyCaching,
  { privacy: fastifyCaching.privacy.NOCACHE }
)

server.register(cors);
server.register(helmet);

server.get('/kraken/balance', async (request, reply) => {
  const response = await getAccountBalance();
  reply.send(response);
});

server.get('/kraken/staking', async (request, reply) => {
  const response = await getStakingTransactions();
  reply.send(response);
});

server.get('/kraken/trade-history', async (request, reply) => {
  const response = await getTradeHistory();
  reply.send(response);
});

server.get('/kraken/ledgers', async (request, reply) => {
  const response = await getLedgerInfo();
  reply.send(response);
});

server.listen({
  port: appConfig.get('Port'),
  host: appConfig.get('Host')
});