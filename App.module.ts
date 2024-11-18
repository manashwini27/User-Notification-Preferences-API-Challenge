app.module.ts



import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPreferencesController } from './user-preferences/user-preferences.controller';
import { UserPreferencesService } from './user-preferences/user-preferences.service';
import { UserPreference, UserPreferenceSchema } from './user-preferences/schemas/user-preference.schema';
import { NotificationController } from './notification/notification.controller';
import { NotificationService } from './notification/notification.service';
import { NotificationLog, NotificationLogSchema } from './notification/schemas/notification-log.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/user-notifications'),
    MongooseModule.forFeature([
      { name: UserPreference.name, schema: UserPreferenceSchema },
      { name: NotificationLog.name, schema: NotificationLogSchema },
    ]),
  ],
  controllers: [UserPreferencesController, NotificationController],
  providers: [UserPreferencesService, NotificationService],
})
export class AppModule {}
