import { z } from "zod";

export const registerSchema = z.object({
  email: z.string({
    required_error: "El correo de usuario es necesario",
  }),
  password: 
    z.string({
      required_error: "La contraseña de usuario es necesaria",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
  nickname: z.string({
    required_error: "El nombre de usuario es necesario",
  }),
  age: z.number({
    required_error: "La edad es requerida",
  }),
  weight: z.number({
    required_error: "El peso es requerido",
  }),
  height: z.number({
    required_error: "La altura es requerida",
  }),
  goal: z.number({
    required_error: "El objetivo es requerido",
  }),
  physicalActivityLevel: z.number({
    required_error: "El nivel de actividad física es requerido",
  }),
  profilePictureUrl: z.string({
    required_error: "La foto de perfil es requerida",
  }),
  firstName: z.string({
    required_error: "El nombre es obligatorio",
  }),
  lastName: z.string({
    required_error: "El apellido es requerido",
  }),
  biologicalSex: z.string({
    required_error: "El sexo biológico es requerido",
  }),
});


export const loginSchema = z.object({
  email: z.string({
    required_error: "El correo de usuario es necesario",
  })
  .email({
    message: "El correo no es un correo valido",
  }),
  password: z.string({
    required_error: "La contraseña de usuario es necesaria",
  })
  .min(6, {
    message: "La contraseña debe contar con al menos 6 caracteres",
  }),
});
