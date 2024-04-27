
/**
 * A history is a register of changes of versions.
 * Is a Structure that contains the versions of a component, and the actual version.
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaType, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Version } from 'src/version/schemas/version.schema';

@Schema({
    timestamps: true,
})

export class Histories extends Document {
    _id: mongoose.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Version' })
    actual_version: Version;

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Version' })
    versions: Version[];
}

export const HistoriesSchema = SchemaFactory.createForClass(Histories);
