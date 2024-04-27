
/**
 * A version is a photograph of your properties of a component at a specific point in time, but not the yours values.
 * Is a Structure that contains the properties of a component, and the next and previous version.
 * Containing the changes bew¿tween versions, deleteds, addeds, and modifieds.
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Structure } from 'src/structures/schemas/structure.schema';
import { Histories } from 'src/histories/schemas/histories.schema';

@Schema({
    timestamps: true,
})

export class Version extends Document {
    _id: mongoose.Types.ObjectId;

    /*
    @Prop()
    trunkId: mongoose.Types.ObjectId;

    @Prop({ type: String, enum: ['branch', 'trunk', 'tag'], default: 'branch' })
    type: string;
    */

    @Prop({ type: String, })
    number: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Version', default: null })
    next_version: Version;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Version', default: null })
    prev_version: Version;

    @Prop({ type: String, default: 'No name' })
    name: string;

    @Prop({ type: String, default: 'No description' })
    description: string;

    @Prop({ type: String, default: 'No features' })
    features: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Structure' })
    structure: Structure;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Histories' })
    histories: Histories;
}

export const VersionSchema = SchemaFactory.createForClass(Version);