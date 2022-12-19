import { Module } from "@nestjs/common";
import { NotificationsRepository } from "@application/repositories/notifications-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationsRepositories } from "./prisma/repositories/prima-notifications-repositories";

@Module({
    providers: [
        PrismaService,
        {
            provide: NotificationsRepository,
            useClass: PrismaNotificationsRepositories,
        }
    ],
    exports: [NotificationsRepository]
})
export class DatabaseModule {}