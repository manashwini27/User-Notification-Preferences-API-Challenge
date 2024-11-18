notification.controller.ts


import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('api/notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('send')
  sendNotification(@Body() { userId, type, channel, content }: { userId: string, type: string, channel: string, content: any }) {
    return this.notificationService.sendNotification(userId, type, channel, content);
  }

  @Get(':userId/logs')
  getNotificationLogs(@Param('userId') userId: string) {
    return this.notificationService.getNotificationLogs(userId);
  }
}
