import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Task extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    _id: Types.ObjectId;

    @Prop({ type: String })
    name: string;

    @Prop({ type: Date, default: Date.now })
    creationDate: Date;

    @Prop({ type: String })
    author: string;

    @Prop({ type: String })
    notes: string;

    @Prop({ type: String })
    responsible: string;

    @Prop({ type: Date })
    reminderDate: Date;

    @Prop({ type: String })
    reminderMessage: string;

    @Prop({ type: Date })
    deliverDate: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
