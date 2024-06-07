import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../../auth/schemas/user.schema';

@Schema({
  timestamps: true,
})
export class Team extends Document {
  _id: mongoose.Types.ObjectId;

  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  logo: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Users', default: null })
  usuarios: User;
  //usuarios: Types.ObjectId[]; Esto asegura que usuarios sea un array de identificadores de objetos de usuario.
}

export const TeamSchema = SchemaFactory.createForClass(Team);
