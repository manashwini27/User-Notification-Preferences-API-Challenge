notification.service.ts


import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationLog } from './schemas/notification-log.schema';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel('NotificationLog') private notificationLogModel: Model<NotificationLog>,
  ) {}

  async sendNotification(userId: string, type: 'marketing' | 'newsletter' | 'updates', channel: 'email' | 'sms' | 'push', metadata: Record<string, any>) {
    const log = new this.notificationLogModel({
      userId,
      type,
      channel,
      status: 'pending',
      metadata,
    });
    await log.save();
    // Simulate the sending process
    // Assuming it always succeeds for simplicity
    log.status = 'sent';
    log.sentAt = new Date();
    await log.save();
    return log;
  }

  async getNotificationLogs(userId: string) {
    return this.notificationLogModel.find({ userId }).exec();
  }
}
