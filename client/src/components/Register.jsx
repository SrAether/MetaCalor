import { useForm } from "react-hook-form";
import "./Register.css";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated]);

  const OnSubmit = handleSubmit(async (values) => {
    const {
      firstName,
      lastName,
      email,
      password,
      age,
      height,
      weight,
      goal,
      biologicalSex,
      nickname,
      profilePictureUrl,
      physicalActivityLevel,
    } = values;
    const VALUES = {
      firstName,
      lastName,
      email,
      password,
      age: parseInt(age, 10),
      height: parseInt(height, 10),
      weight: parseFloat(weight, 10),
      goal: parseInt(goal, 10),
      biologicalSex,
      nickname,
      profilePictureUrl,
      physicalActivityLevel: parseInt(physicalActivityLevel, 10),
    };
    signup(VALUES);
  });

  return (
    <div className="containerMain">
      <form onSubmit={OnSubmit}>
        <h1 className="tituloRegistro">Registrar</h1>
        <p className="debajoTituloRegistro">Registra tus datos</p>
        <div className="containerData">
          <p className="subtittleData">Nombre</p>
          <input
            type="text"
            {...register("firstName", { required: true })}
            className="inputData"
            placeholder="Name"
          />
          {
            errors.firstName && (
              <p>El nombre de usuario es requerido</p>
            )
          }
          <p className="subtittleData">Apellidos</p>
          <input
            type="text"
            {...register("lastName", { required: true })}
            className="inputData"
            placeholder="Last Name"
          />
          {
            errors.lastName && (
              <p>Apellido de usuario es requerido</p>
            )
          }
          <p className="subtittleData">Correo</p>
          <input
            type="text"
            className="inputData"
            placeholder="correo@dominio.com"
            {...register("email", { required: true })}
          />
          {
            errors.email && (
              <p>El correo de usuario es requerido</p>
            )
          }
          <p className="subtittleData">Contraseña</p>
          <input
            type="password"
            {...register("password", { required: true })}
            className="inputData"
            placeholder="Password minimo 6 caracteres"
          />
          {
            errors.password && (
              <p>La contraseña de usuario es requerido</p>
            )
          }
          <p className="subtittleData">Edad</p>
          <input
            type="number"
            className="inputData"
            placeholder="Años"
            {...register("age", { required: true })}
          />
          {
            errors.age && (
              <p>La edad de usuario es requerida</p>
            )
          }
          <p className="subtittleData">Altura</p>
          <input
            type="number"
            className="inputData"
            placeholder="cm"
            {...register("height", { required: true })}
          />
          {
            errors.height && (
              <p>La altura de usuario es requerido</p>
            )
          }
          <p className="subtittleData">Peso</p>
          <input
            type="number"
            className="inputData"
            placeholder="Kg"
            {...register("weight", { required: true })}
          />
          {
            errors.firstName && (
              <p>El peso de usuario es requerido</p>
            )
          }
          <p className="subtittleData">Meta de kcals diarias</p>
          <input
            type="number"
            className="inputData"
            placeholder="Calorías a consumir"
            {...register("goal", { required: true })}
          />
          {
            errors.goal && (
              <p>El objetivo de kcals de usuario es requerido</p>
            )
          }

          <p className="subtittleData">Sexo</p>
          <select
            {...register("biologicalSex", { required: true })}
            className="inputData"
          >
            <option value="Men">Hombre</option>
            <option value="Women">Mujer</option>
          </select>
          {
            errors.biologicalSex && (
              <p>El Sexo de usuario es requerido</p>
            )
          }

          <p className="subtittleData">Apodo</p>
          <input
            type="text"
            className="inputData"
            placeholder="Como te llamamos?"
            {...register("nickname", { required: true })}
          />
          {
            errors.nickname && (
              <p>El apodo de usuario es requerido</p>
            )
          }

          <p className="subtittleData">
            FOTO DE PEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEFIL
          </p>
          <input
            type="text"
            className="inputData"
            placeholder="Tu foto"
            {...register("profilePictureUrl", { required: true })}
          />
          {
            errors.profilePictureUrl && (
              <p>La foto de perfil de usuario es requerida</p>
            )
          }

          <p className="subtittleData">Nivel de Actividad Fisica</p>
          <select
            {...register("physicalActivityLevel", { required: true })}
            className="inputData"
          >
            <option value="0">Sedentaria</option>
            <option value="1">Ligera</option>
            <option value="2">Moderada</option>
            <option value="3">Intensa</option>
          </select>
          {
            errors.physicalActivityLevel && (
              <p>El nivel de actividad fisica es requerido</p>
            )
          }
          <p>
            Sedentaria: No realiza actividad fisica. <br />
            Ligera: Maximo 3 hrs por semana. <br />
            Moderada: Maximo 6 hrs por semana. <br />
            Intensa: Mayor a 6 hrs por semana. <br />
          </p>

          <button className="buttonRegister">Registrarse</button>

          <div className="footer">
            <p className="beforeLogin">¿Ya tienes cuenta?</p>
            <button className="buttonLogin">Ingresar</button>
          </div>
        </div>
      </form>
    </div>
  );
}
