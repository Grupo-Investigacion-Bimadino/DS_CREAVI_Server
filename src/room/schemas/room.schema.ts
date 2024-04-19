// room.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Room extends Document {
  @Prop()
  ownerId: string;

  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
