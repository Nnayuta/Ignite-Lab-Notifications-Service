import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../application/entities/notification";
import { NotificationsRepository } from "../../../../application/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
    constructor(private prismaServer: PrismaService) { }

    async create(notification: Notification): Promise<void> {
        await this.prismaServer.notification.create({
            data: {
                id: notification.id,
                content: notification.content.value,
                category: notification.category,
                recipientId: notification.recipientId,
                readAt: notification.readAt,
                createAt: notification.createdAt
            }
        })
    }

}