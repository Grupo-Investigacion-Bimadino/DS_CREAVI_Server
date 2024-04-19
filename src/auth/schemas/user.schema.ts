import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class User extends Document{
     _id: mongoose.Types.ObjectId;

    @Prop()
    name: string;

    @Prop({ unique: [true, 'Email already exists'] })
    email: string;

    @Prop()
    password: string;

    @Prop()
    role: string;

    @Prop()
    status: string;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;
    
}

export const UserSchema = SchemaFactory.createForClass(User);