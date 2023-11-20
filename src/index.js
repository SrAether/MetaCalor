// index es el archivo que debemos arrancar para que inicie el servidor
import app from "./app.js";
// importa el modulo de coneccion con mongodb
import { conectDB } from "./db.js";

conectDB();

//app.listen(4000);
app.set('port', 4000);
app.listen(app.get('port'));
console.log("El servidor esta escuchando en el puerto: ", app.get('port'));