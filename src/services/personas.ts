import { Persona } from "../interfaces/persona.interface";
import PersonaModel from "../models/persona";

const insertPersona = async(item: Persona) => {
    const responseInsert = await PersonaModel.create(item);
    return responseInsert;
};

const getPersonas = async(page: number, limit: number) => {
    const options = {
        page: page,
        limit: limit
      };
    const responseItem = await PersonaModel.paginate({}, options);
    return responseItem;
};

const getPersona = async(id: string) => {
    const responseItem = await PersonaModel.findOne({_id: id});
    return responseItem;
};

const updatePersona = async(id: string, data: Persona) => {
    const responseItem = await PersonaModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const deletePersona = async(id: string) => {
    const responseItem = await PersonaModel.findOneAndRemove({_id: id});
    return responseItem;
};

export{getPersona, getPersonas, updatePersona, insertPersona, deletePersona};