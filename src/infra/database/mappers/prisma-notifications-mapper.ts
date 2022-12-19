import { Notification } from "@application/entities/notification";

export class PrismaNotificationMapper {
    static toPrisma(notification: Notification) {
        return {
            id: notification.id,
            category: notification.category,
            recipientId: notification.recipientId,
            content: notification.content.value,
            createdAt: notification.createdAt,
            readAt: notification.readAt
        };
    };
};