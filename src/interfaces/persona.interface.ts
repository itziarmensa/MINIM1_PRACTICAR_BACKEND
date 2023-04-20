import { ObjectId } from "mongoose";

export interface Persona {
    name: string;
    surname: string;
    seguimientos?: ObjectId[];
    vacunas?: ObjectId[];
}