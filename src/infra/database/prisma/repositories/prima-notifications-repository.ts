import { Injectable } from "@nestjs/common";
import { Notification } from "@application/entities/notification";
import { NotificationsRepository } from "@application/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";
import { PrismaNotificationMapper } from "@infra/database/mappers/prisma-notifications-mapper";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
    constructor(private prismaService: PrismaService) { }

    async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification);

        await this.prismaService.notification.create({
            data: raw,
        });
    };
};