//Rutas de autentificacion y relacionadas
import { Router } from "express";
import { getKcalConsum, setKcalConsum, getAlimentos,getPlatillos } from "../controllers/client.controller.js";
// para autentificacion
import { authRequired } from "../middlewares/validateToken.js";
// para validar
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
import { KcalConsumSchema, AlimentoSchema, validatorGetKcalConsum } from "../schemas/client.schemas.js";
//import { verifyToken } from "../../client/src/api/auth.js";

const router = new Router();

// Profile es una ruta protegida
router.post("/kcalconsum", authRequired, validateSchema(validatorGetKcalConsum), getKcalConsum);
router.post("/kcalconsum", authRequired, validateSchema(KcalConsumSchema), setKcalConsum);
router.get("/alimentos", authRequired, getAlimentos);
router.get("/platillos", authRequired, getPlatillos);
router.get("/ranking", )
export default router;
