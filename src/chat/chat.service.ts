import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './schemas/chatMessage.schema';

@Injectable()
export class ChatService {
  constructor(@InjectModel('Message') private chatModel: Model<Message>) {}

  async saveMessage(clientMessage): Promise<any> {
    const message = new this.chatModel(clientMessage);
    const newMessage = await message.save();
    return newMessage;
  }

  /*async getMessagesByRoomId(ownerId: string): Promise<Message[]> {
    return this.chatModel.find({ ownerId }).exec();
  }*/

  async getMessagesByRoomId(
    ownerId: string,
    page: number = 1,
    pageSize: number = 20,
  ): Promise<{ messages: Message[]; total: number }> {
    const skip = (page - 1) * pageSize;
    const messages = await this.chatModel
      .find({ ownerId })
      .skip(skip)
      .limit(pageSize)
      .sort({ createdAt: -1 })
      .exec();
    const total = await this.chatModel.countDocuments({ ownerId });
    return { messages, total };
  }
}
