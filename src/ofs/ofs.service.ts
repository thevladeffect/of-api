import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Of } from './interfaces/of.interface';
import { CreateOfDto } from './dtos/create-of.dto';

@Injectable()
export class OfsService {
  constructor(@InjectModel('Of') private readonly ofModel: Model<Of>) {
  }

  async create(createOfDto: CreateOfDto): Promise<Of> {
    const createdOf = new this.ofModel({
      ...createOfDto,
      createdAt: new Date(),
    });
    return await createdOf.save();
  }

  async findAll(): Promise<Of[]> {
    return await this.ofModel.find().exec();
  }

  async delete(id: string): Promise<Of> {
    return await this.ofModel.findOneAndDelete(id).exec();
  }
}
