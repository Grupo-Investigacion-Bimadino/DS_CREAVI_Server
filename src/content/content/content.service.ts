import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Content } from './schema/content.schema';

@Injectable()
export class contentService {
  constructor(@InjectModel('content') private readonly contentModel: Model<Content>) { }

  async findOne(id: string): Promise<{}> {
    const room = await this.contentModel.find().exec();
    return room;
  }

  async findAll(): Promise<Content[]> {
    const contents = await this.contentModel.find().exec();
    return contents;
  }

  async create(createcontentDto): Promise<{}> {
    const createdcontent = new this.contentModel(createcontentDto);
    return createdcontent.save();
  }

  async update(id, updatecontent): Promise<{}> {
    const updatedcontent = await this.contentModel.findByIdAndUpdate(id, updatecontent, {
      new: true,
    });
    return updatedcontent;
  }

  async delete(id): Promise<{}> {
    const deletedcontent = await this.contentModel.findByIdAndDelete(id);
    return deletedcontent;
  }
}