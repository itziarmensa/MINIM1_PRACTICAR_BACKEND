import {  Schema, model, PaginateModel } from "mongoose";
import { Persona } from "../interfaces/persona.interface";
import mongoosePaginate from "mongoose-paginate-v2";

interface PaginatedPersonaModel<T> extends PaginateModel<T> {}

const PersonaSchema = new Schema<Persona>(
    {
        name:{
            type: String,
            required:true,
        },
        surname:{
            type: String,
            required:true,
        },
        seguimientos:{
            type: [Schema.Types.ObjectId],
            required:true,
        },
        vacunas:{
            type: [Schema.Types.ObjectId],
            required:true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

PersonaSchema.plugin(mongoosePaginate);


const PersonaModel: PaginatedPersonaModel<Persona> = model<Persona, PaginatedPersonaModel<Persona>>(
    "personas",
    PersonaSchema
);

export default PersonaModel;