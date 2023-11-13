import express from "express";

const app = express();

// muestra en terminal mensajes de las solicitudes que recibe el servidor
app.use(morgan("dev"));

export default app;
