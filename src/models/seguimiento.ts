import {  Schema, model, PaginateModel } from "mongoose";
import { Seguimiento } from "../interfaces/seguimiento.interface";
import mongoosePaginate from "mongoose-paginate-v2";
import { Persona } from "../interfaces/persona.interface";

interface PaginatedSeguimientoModel<T> extends PaginateModel<T> {}

const SeguimientoSchema = new Schema<Seguimiento>(
    {
        persona:{
            type: [Schema.Types.ObjectId],
            required:true,
        },
        fecha:{
            type: String,
            required:true,
        },
        dni:{
            type: String,
            required:true,
            unique: true,
        },
        tel:{
            type: Number,
            required:true,
        },
        fiebre:{
            type: String, 
            enum: ["Sí", "No"],
            required:true,
        },
        tos:{
            type: String, 
            enum: ["Continuada", "Persistente"],
            required:true,
        },
        difResp:{
            type: String,
            required:true,
        },
        malestar:{
            type: String,
            required:true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

SeguimientoSchema.plugin(mongoosePaginate);


const SeguimientoModel: PaginatedSeguimientoModel<Seguimiento> = model<Seguimiento, PaginatedSeguimientoModel<Seguimiento>>(
    "seguimientos",
    SeguimientoSchema
);

export default SeguimientoModel;