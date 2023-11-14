//Rutas de autentificacion y relacionadas
import { Router } from "express";
import { register, login, logout } from "../controllers/auth.controller.js";
const router = new Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
export default router;