import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Notification extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    _id: Types.ObjectId;

    @Prop({ type: Date, default: Date.now })
    date: Date;

    @Prop({ type: String })
    transmitter: string;

    @Prop({ type: String })
    receiver: string;

    @Prop({ type: String })
    content: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
