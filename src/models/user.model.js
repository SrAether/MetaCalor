// se toma como referencia el modelo de usuario propuesto en la actividad 10, diagrama entidad relación
import mongoose from "mongoose";
// Define el esquema del usuario
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true, // esto es para quitar espacios
    unique: true, // para indicar que cada correo es unico
  },
  password: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: true, 
  },
  age: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  streak: {
    type: Number,
    default: 0,
  },
  goal: {
    type: Number,
  },
  physicalActivityLevel: {
    type: Number,
    required: true, // pendiente <<<<<<
  },
  profilePictureUrl: { // secure-url
    type: String,
    required: true,
  },
  // _id: {
  //   type: mongoose.Types.ObjectId,
  // },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  biologicalSex: {
    type: String,
    enum: ["Men", "Women"],
    required: true,
  },
},{
  timestamps: true, // para agregar fecha de creacion y actualizacion
});

export default mongoose.model("User", userSchema);
