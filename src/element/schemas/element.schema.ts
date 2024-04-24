import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({ timestamps: true })
export class Element extends Document {
    // nombre del componente, por ejemplo "Select"
    @Prop()
    name: String
    // version actual del componente
    @Prop()
    version: String
    // tipo de componente por ejemplo form_component,
    @Prop()
    type: String
    // popiedades de configuracion del componente, por ejemplo { "label": "Pais", "multiple": false, "v-model": "pais", "value": "pais", "comments": [], "items": [] }
    @Prop({ type: Object })
    properties: Object
    // datos recolectadoos por el componente, por ejemplo { "select": { option1: {text:'Colombia', value:'CO'} } }
    @Prop({ type: Object })
    data: Object
    // componentes contenidos en el componente raiz o padre, se llaman o agregan por _id
    @Prop()
    components: []
    // version actual del componente, se llama o agrega por _id, siempre que hay una actualizacion, se actualiza el id del branch en este campo.
    @Prop({ type: Types.ObjectId, ref: 'User' })
    createdBy: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Branch' })
    trunk: Types.ObjectId

    @Prop({ type: Types.ObjectId, ref: 'Branch' })
    versions: Types.ObjectId
    // Otras propiedades adicionales si es necesario    
}

export const ElementSchema = SchemaFactory.createForClass(Element);