
import { Request, Response, Router } from "express";
import { logMiddleware } from "../middleware/log";
import { checkAdmin } from "../middleware/session";
import { getPerson, getPeople, updatePerson, deletePerson, postPerson } from "../controllers/persona";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/personas [GET]
 */
router.get("/all", getPeople);
router.get("/:idPersona", getPerson);
router.post("/",postPerson);
router.put("/:idPersona",updatePerson);
router.delete("/:idPersona",checkAdmin,deletePerson);

export { router };