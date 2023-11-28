import User from "../models/user.model.js";
import KcalConsum from "../models/kcalConsum.model.js";
import Alimento from "../models/alimentos.model.js";
import mongoose from "mongoose";
export const getKcalConsum = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    // Validación del ID
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json(["ID de usuario no válido"]);
    }

    // Realizar la consulta
    const referencia = await KcalConsum.find({ usuarioId: id });

    // Verificar si se encontraron registros
    if (!referencia || referencia.length === 0) {
      return res
        .status(404)
        .json(["No se encontraron registros de consumo para el usuario"]);
    }

    res.json(referencia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const setKcalConsum = async (req, res) => {
  try {
    const {
      usuarioId,
      nombre,
      EnergiaKcal,
      ProteinaG,
      LipidosG,
      HidratosDeCarbonoG
    } = req.body;

    // Validación de los datos de entrada
    if (!usuarioId || !mongoose.Types.ObjectId.isValid(usuarioId)) {
      return res.status(400).json({ message: "ID de usuario no válido" });
    }

    

    // Crear el nuevo registro de consumo de calorías
    const nuevoKcalConsum = new KcalConsum({
      usuarioId,
      nombre,
      EnergiaKcal,
      ProteinaG,
      LipidosG,
      HidratosDeCarbonoG
    });

    // Guardar el registro en la base de datos
    await nuevoKcalConsum.save();

    res.status(201).json(nuevoKcalConsum);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// para consultar alimentos

export const getAlimentos = async (req, res) => {
    try {
    
        // Realizar la consulta
        const referencia = await Alimento.find();
    
        // Verificar si se encontraron registros
        if (!referencia || referencia.length === 0) {
          return res
            .status(404)
            .json(["No se encontraron registros de consumo para el usuario"]);
        }
    
        res.json(referencia);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}
export const getPlatillos = async (req, res) => {
  try {

    // Realizar la consulta
    const referencia = await KcalConsum.find();

    // Verificar si se encontraron registros
    if (!referencia || referencia.length === 0) {
      return res
        .status(404)
        .json(["No se encontraron registros de consumo para el usuario"]);
    }

    res.json(referencia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};