import { ObjectId } from "mongoose";

export interface Seguimiento {
    persona: ObjectId;
    fecha: string;
    dni: string;
    tel: number;
    fiebre: "Sí" | "No";
    tos: "Continuada" | "Persistente";
    difResp: string;
    malestar: string;
}