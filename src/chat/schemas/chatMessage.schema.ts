import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Message extends Document {
  @Prop()
  content: string;

  @Prop()
  senderId: string;

  @Prop()
  author: string;

  @Prop()
  avatar: string;

  @Prop()
  roomId: string;

  @Prop()
  ownerId: string;

  @Prop({ default: () => new Date() })
  timestamp: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
