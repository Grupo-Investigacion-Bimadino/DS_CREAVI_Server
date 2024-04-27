import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaType, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Version } from 'src/version/schemas/version.schema';

@Schema({
    timestamps: true,
})

export class Structure extends Document {
    _id: mongoose.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Version' })
    version: Version;

    @Prop({ type: {} })
    elements: {};

    @Prop({ type: {} })
    added: {};

    @Prop({ type: {} })
    modified: {};

    @Prop({ type: {} })
    deleted: {};
}

export const StructureSchema = SchemaFactory.createForClass(Structure);