//Rutas de autentificacion y relacionadas
import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/auth.controller.js";

// para autentificacion
import { authRequired } from "../middlewares/validateToken.js";

const router = new Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// Profile es una ruta protegida
router.get("/profile", authRequired, profile);
export default router;
