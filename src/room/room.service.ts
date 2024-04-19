import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './schemas/room.schema';

@Injectable()
export class RoomService {
  constructor(@InjectModel('Room') private roomModel: Model<Room>) {}

  async createRoom(
    ownerId: string,
    name: string,
    description: string,
  ): Promise<Room> {
    const room = await new this.roomModel({ ownerId, name, description });
    return room.save();
  }

  async getRoomList(): Promise<Room[]> {
    const rooms = await this.roomModel.find().exec();
    return rooms;
  }

  async getRoomListById(listId: string): Promise<Room[]> {
    const room = await this.roomModel.find({ _id: listId }).exec();
    return room;
  }
}
