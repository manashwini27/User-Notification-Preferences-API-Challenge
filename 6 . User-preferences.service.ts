user-preferences.service.ts


import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference } from './schemas/user-preference.schema';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';
import { UpdateUserPreferenceDto } from './dto/update-user-preference.dto';

@Injectable()
export class UserPreferencesService {
  constructor(
    @InjectModel('UserPreference') private userPreferenceModel: Model<UserPreference>,
  ) {}

  async create(createUserPreferenceDto: CreateUserPreferenceDto): Promise<UserPreference> {
    const createdPreference = new this.userPreferenceModel(createUserPreferenceDto);
    return createdPreference.save();
  }

  async findOne(userId: string): Promise<UserPreference> {
    const preference = await this.userPreferenceModel.findOne({ userId }).exec();
    if (!preference) {
      throw new NotFoundException(User preference for ${userId} not found);
    }
    return preference;
  }

  async update(userId: string, updateUserPreferenceDto: UpdateUserPreferenceDto): Promise<UserPreference> {
    const updatedPreference = await this.userPreferenceModel
      .findOneAndUpdate({ userId }, updateUserPreferenceDto, { new: true })
      .exec();
    if (!updatedPreference) {
      throw new NotFoundException(User preference for ${userId} not found);
    }
    return updatedPreference;
  }

  async delete(userId: string): Promise<any> {
    const deletedPreference = await this.userPreferenceModel.findOneAndDelete({ userId }).exec();
    if (!deletedPreference) {
      throw new NotFoundException(User preference for ${userId} not found);
    }
    return { message: 'User preference deleted successfully' };
  }
}
