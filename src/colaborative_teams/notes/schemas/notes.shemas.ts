import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Note extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    _id: Types.ObjectId;

    @Prop({ type: Date, default: Date.now })
    creationDate: Date;

    @Prop({ type: String })
    author: string;

    @Prop({ type: String })
    notes: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
