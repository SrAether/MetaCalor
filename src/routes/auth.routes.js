//Rutas de autentificacion y relacionadas
import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js";

// para autentificacion
import { authRequired } from "../middlewares/validateToken.js";
// para validar
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
//import { verifyToken } from "../../client/src/api/auth.js";

const router = new Router();
router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);

router.get("/verify", verifyToken);

// Profile es una ruta protegida
router.get("/profile", authRequired, profile);
export default router;
