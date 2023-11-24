//Controladores de rutas de autentificacion
import User from "../models/user.model.js"; // importamos el esquema de usuario

import bcrypt from "bcryptjs"; // para encriptar la contraseña

import { createAccessToken } from "../libs/jwt.js"; // generador de tokens

export const register = async (req, res) => {
  const {
    email,
    password,
    nickname,
    age,
    weight,
    height,
    // streak,
    goal,
    physicalActivityLevel,
    profilePictureUrl,
    firstName,
    lastName,
    biologicalSex,
  } = req.body; // extraemos los datos del req.body

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    // creamos un objeto que almacena los datos del usuario
    const newUser = new User({
      email,
      password: passwordHash,
      nickname,
      age,
      weight,
      height,
      streak: 0,
      goal,
      physicalActivityLevel,
      profilePictureUrl,
      firstName,
      lastName,
      biologicalSex,
    });
    const userSaved = await newUser.save(); // guardamos el usuario

    // genera una cookie
    const token = await createAccessToken({ id: userSaved._id }); //creamos el token
    res.cookie("token", token);

    // datos que retornamos
    res.json({
      id: userSaved.id,
      nickname: userSaved.nickname,
      email: userSaved.email,
    }); // se modifica en base a las necesidades del frontend
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body; // extraemos los datos del req.body

  try {
    // verificamos que el email se encuentre en la base de datos
    const userFound = await User.findOne({ email });
    if (!userFound)
      return res.status(400).json({ message: "Usuario no encontrado" });
    // verificamos que la contraseña coincide
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Credenciales invalidas" });

    // genera una cookie
    const token = await createAccessToken({ id: userFound._id }); //creamos el token
    res.cookie("token", token);

    // datos que retornamos
    res.json({
      id: userFound.id,
      nickname: userFound.nickname,
      email: userFound.email,
    }); // se modifica en base a las necesidades del frontend
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound)
    return res.status(404).json({ message: "Usuario no encontrado" });

  return res.json({
    id: userFound._id,
    nickname: userFound.nickname,
    age: userFound.age,
    weight: userFound.weight,
    height: userFound.height,
    streak: userFound.streak,
    goal: userFound.goal,
    physicalActivityLevel: userFound.physicalActivityLevel,
    profilePictureUrl: userFound.profilePictureUrl,
    firstName: userFound.firstName,
    lastName: userFound.lastName,
    biologicalSex: userFound.biologicalSex,
  });
};
