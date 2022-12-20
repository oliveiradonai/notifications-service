import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['enhanced-sole-14854-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'ZW5oYW5jZWQtc29sZS0xNDg1NCS6ZzFU239gpulf8_VUOu8w4ErwiVVnF7S-CkM',
                    password: 'hUGSYu3TjkKi0BuYAkUZJLPMtBb3OqJ-Lrf0H2RvkPuhwZ8e_GyWcSwZh4KTUfTQwg5FVA==',
                },
                ssl: true,
            }
        });
    }

    async onModuleDestroy() {
        await this.close();
    }    
}