import mongoose from "mongoose";

// Definir el esquema
const alimentoSchema = new mongoose.Schema({
  Categoria: { type: String, default: null },
  Alimento: { type: String, default: null },
  Cantidad: { type: Number, default: null },
  Unidad: { type: String, default: null },
  PesoBrutoG: { type: Number, default: null },
  PesoNetoG: { type: Number, default: null },
  EnergiaKcal: { type: Number, default: null },
  ProteinaG: { type: Number, default: null },
  LipidosG: { type: Number, default: null },
  HidratosDeCarbonoG: { type: Number, default: null },
});

// Crear el modelo
export default mongoose.model("Alimento", alimentoSchema);
