create-user-preference.dto.ts


import { IsString, IsEmail, IsEnum, IsObject, IsBoolean } from 'class-validator';

export class CreateUserPreferenceDto {
  @IsString()
  userId: string;

  @IsEmail()
  email: string;

  @IsObject()
  preferences: {
    @IsBoolean() marketing: boolean;
    @IsBoolean() newsletter: boolean;
    @IsBoolean() updates: boolean;
    @IsEnum(['daily', 'weekly', 'monthly', 'never']) frequency: 'daily' | 'weekly' | 'monthly' | 'never';
    @IsObject()
    channels: {
      @IsBoolean() email: boolean;
      @IsBoolean() sms: boolean;
      @IsBoolean() push: boolean;
    };
  };

  @IsString()
  timezone: string;
}
