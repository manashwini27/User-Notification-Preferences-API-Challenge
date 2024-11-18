update-user-preference.dto.ts



import { IsString, IsEmail, IsEnum, IsObject, IsBoolean, IsOptional } from 'class-validator';

export class UpdateUserPreferenceDto {
  @IsString()
  @IsOptional()
  userId?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsObject()
  @IsOptional()
  preferences?: {
    @IsBoolean() marketing?: boolean;
    @IsBoolean() newsletter?: boolean;
    @IsBoolean() updates?: boolean;
    @IsEnum(['daily', 'weekly', 'monthly', 'never']) frequency?: 'daily' | 'weekly' | 'monthly' | 'never';
    @IsObject()
    channels?: {
      @IsBoolean() email?: boolean;
      @IsBoolean() sms?: boolean;
      @IsBoolean() push?: boolean;
    };
  };

  @IsString()
  @IsOptional()
  timezone?: string;
}
