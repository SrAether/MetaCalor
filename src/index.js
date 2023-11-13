// index es el archivo que debemos arrancar para que inicie el servidor
import app from "./app.js";

app.listen(4000);

console.log("El servidor esta escuchando en el puerto: ", 4000);