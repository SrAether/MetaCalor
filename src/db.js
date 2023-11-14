// conexión con mongo db
import mongoose from "mongoose";
const nombreBaseDeDatos = "metacalorDB"; // posteriormente moverlo a .env

export const conectDB = async () => {
  try {
    const puerto = 27017; // Puerto deseado, posteriormente moverlo a .env
    await mongoose.connect(`mongodb://localhost:${puerto}/${nombreBaseDeDatos}`);
    console.log(">>>>>Conexión con base de datos exitosa<<<<<<");
  } catch (error) {
    console.error(error);
  }
};

