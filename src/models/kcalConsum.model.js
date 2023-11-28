import mongoose from "mongoose";
import User from "../models/user.model.js"; // importamos el esquema de usuario
import Alimento from "../models/alimentos.model.js"; // import
const kcalConsumSchema = new mongoose.Schema({
  usuarioId: {
    type: String,
    required: true,
  },
  nombre: { type: String, required: true},
  EnergiaKcal: { type: Number, required: true},
  ProteinaG: { type: Number, required: true },
  LipidosG: { type: Number, required: true },
  HidratosDeCarbonoG: { type: Number, required: true },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("KcalConsum", kcalConsumSchema);
