import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['vital-sparrow-7727-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'dml0YWwtc3BhcnJvdy03NzI3JMLZoDBQMU9NRxOzUCjnYxwc8AWLHycLBMQLG4w',
                    password: '********',
                },
                ssl: true,
            }
        });
    }

    async onModuleDestroy() {
        await this.close();
    }
}