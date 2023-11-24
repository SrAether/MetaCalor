import { useForm } from "react-hook-form";
import "./Register.css";
import { registerRequest } from "../api/auth";
//import { registerRequest } from "../api/auth";

export function Register() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="containerMain">
      <form
        onSubmit={handleSubmit(async (values) => {
          //console.log(values);

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
          console.log(
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
            physicalActivityLevel
          );

          const res = await registerRequest({
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
          });
          console.log(res);
        })}
      >
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
          <p className="subtittleData">Apellidos</p>
          <input
            type="text"
            {...register("lastName", { required: true })}
            className="inputData"
            placeholder="Last Name"
          />
          <p className="subtittleData">Correo</p>
          <input
            type="text"
            className="inputData"
            placeholder="correo@dominio.com"
            {...register("email", { required: true })}
          />
          <p className="subtittleData">Contraseña</p>
          <input
            type="password"
            {...register("password", { required: true })}
            className="inputData"
            placeholder="Password minimo 6 caracteres"
          />
          <p className="subtittleData">Edad</p>
          <input
            type="number"
            className="inputData"
            placeholder="Años"
            {...register("age", { required: true })}
          />
          <p className="subtittleData">Altura</p>
          <input
            type="number"
            className="inputData"
            placeholder="cm"
            {...register("height", { required: true })}
          />
          <p className="subtittleData">Peso</p>
          <input
            type="number"
            className="inputData"
            placeholder="Kg"
            {...register("weight", { required: true })}
          />
          <p className="subtittleData">Meta</p>
          <input
            type="number"
            className="inputData"
            placeholder="Calorías a consumir"
            {...register("goal", { required: true })}
          />

          <p className="subtittleData">Sexo</p>
          <select
            {...register("biologicalSex", { required: true })}
            className="inputData"
          >
            <option value="Men">Hombre</option>
            <option value="Women">Mujer</option>
          </select>

          <p className="subtittleData">Apodo</p>
          <input
            type="text"
            className="inputData"
            placeholder="Como te llamamos?"
            {...register("nickname", { required: true })}
          />

          <p className="subtittleData">
            FOTO DE PEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEFIL
          </p>
          <input
            type="text"
            className="inputData"
            placeholder="Tu foto"
            {...register("profilePictureUrl", { required: true })}
          />

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
