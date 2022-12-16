import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['discrete-bream-10504-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'ZGlzY3JldGUtYnJlYW0tMTA1MDQkYXGRKIuqoB_Weg8EI-WhkNXZq4PmfNNwspc',
          password:
            'gUw52r9FiB6imdHSDVp-LsZB2Pz3O4VA38QLFPgJce6wQLThm4CETmHVTmaSq9EG1XN2xw==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
