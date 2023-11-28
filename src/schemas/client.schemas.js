import { z } from "zod";

export const validatorGetKcalConsum = z.object({
    id: z.string({
        required_error: "El id de usuario es requerido",
    }),
})

//Aqui le pica Elsa
export const KcalConsumSchema = z.object({
    usuarioId: z.string({
        requiered_error: "El id de usuario es requerido",
    }),
    nombre: z.string({
        required_error: "El nombre del alimento es necesario",
    }),
    EnergiaKcal: z.number({
        required_error: "La cantidad de calorias es necesaria",
    }),
    ProteinaG: z.number({
        required_error: "La cantidad de proteina es necesaria",
    }),
    LipidosG: z.number({
        required_error: "La cantidad de lipidos es necesaria",
    }),
    HidratosDeCarbonoG: z.number({
        required_error: "La cantidad de carbohidratos es necesaria",
    }),
});

//Aqui le pica Gemma
export const AlimentoSchema = z.object({
    Categoria: z.string({
        required_error: "El nombre de la categoría es necesario",
    }),
    Alimento: z.string({
        required_error: "El nombre del alimento es necesario",
    }),
    Cantidad: z.number({
        required_error: "La cantidad del alimento es necesario",
    }), 
    Unidad: z.string({
        required_error: "La unidad del alimento es necesario",
    }), 
    PesoBrutoG: z.number({
        required_error: "El peso bruto en gramos del alimento es necesario",
    }),
    PesoNetoG: z.number({
        required_error: "El peso neto en gramos del alimento es necesario",
    }),
    EnergiaKcal: z.number({
        required_error: "La cantidad de energía en kcals del alimento es necesario",
    }),
    ProteinaG: z.number({
        required_error: "El peso en gramos de proteínas del alimento es necesario",
    }),
    LipidosG: z.number({
        required_error: "El peso en gramos de lípidos del alimento es necesario",
    }),
    HidratosDeCarbonoG: z.number({
        required_error: "El peso en gramos de lípidos del alimento es necesario",
    }),
     
    
});