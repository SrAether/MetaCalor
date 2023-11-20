import express from "express"; // creacion de rutas manejo de solicitudes y respuestas http
import morgan from "morgan"; // generacion de registros de solicitudes http
import cookieParser from "cookie-parser"; // convierte cookies en objetos json

// importando rutas de autenticación
import authRoutes from "./routes/auth.routes.js";


// para servir el cliente
import {dirname, join} from "path"; 
import { fileURLToPath } from "url";
 

const app = express();

// para tener en una constante la ruta absoluta del proyecto
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
// muestra en terminal mensajes de las solicitudes que recibe el servidor
app.use(morgan("dev"));

// middleware para que express convierta las solicitudes a json
app.use(express.json());

// para convertir las cookies en objetos json
app.use(cookieParser());


// le indicamos a express que use las rutas del archivo
app.use("/api", authRoutes);

app.use(express.static(join(__dirname, "../client/dist")));

export default app;
