import {  Schema, model, PaginateModel } from "mongoose";
import { Vacuna } from "../interfaces/vacuna.interface";
import mongoosePaginate from "mongoose-paginate-v2";

interface PaginatedVacunaModel<T> extends PaginateModel<T> {}

const VacunaSchema = new Schema<Vacuna>(
    {
        nombre:{
            type: String,
            required:true,
        },
        desc:{
            type: String,
            required:true,
        },
        tecnologia:{
            type: String,
            required:true,
        },
        fecha:{
            type: String,
            required:true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

VacunaSchema.plugin(mongoosePaginate);


const VacunaModel: PaginatedVacunaModel<Vacuna> = model<Vacuna, PaginatedVacunaModel<Vacuna>>(
    "vacunas",
    VacunaSchema
);

export default VacunaModel;