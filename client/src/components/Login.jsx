import "./Login.css";
import { useState } from "react";
// charly paso por aqui
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
export function Login({ setUser }) {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // charly paso por aqui
  // no se que hace, segun code no se usa, investigar luego
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (nombre === "" || password === "") {
  //     setError(true);
  //     return;
  //   }
  //   setError(false);

  //   setUser([nombre]);
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors } = useAuth();
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  return (
    <section>
      <div className="containerMain">
        {signinErrors.map((error, i) => (
          <div key={i}>{error}</div>
        ))}
        <h1 className="titulo">¡HOLA!</h1>
        <h1 className="titulo">Ingresar</h1>
        <p className="subtitulo">Ingresa para continuar</p>
        <div className="contenedorFormulario">
          <form className="formulario" onSubmit={onSubmit}>
            <p className="textoBeforeInputs">Correo electronico</p>
            <input
              type="text"
              placeholder="direccion@domnio"
              // mas cosas que no se que hacen
              //value={nombre}
              //onChange={(e) => setNombre(e.target.value)}
              {...register("email", { required: true })}
            />
            {errors.email && <p>El correo de usuario es requerido</p>}
            <p className="textoBeforeInputs">Contraseña</p>
            <input
              type="password"
              placeholder="Password"
              // mas cosas que no se que hacen
              //value={password}
              //onChange={(e) => setPassword(e.target.value)}
              {...register("password", { required: true })}
              className="inputData"
            />
            {errors.password && <p>La contraseña de usuario es requerido</p>}

            <button className="buttonIngresar">Ingresar</button>
          </form>
          {error && (
            <div className="errorContainer">
              <p className="error">Todos los campos son obligatorios</p>
            </div>
          )}
        </div>
        <div className="opcionesExtra">
          <p>¿Se te olvidó tu contraseña?</p>
          <button>Recuperar contraseña</button>
          <p>¿Aún no tienes cuenta?</p>
          <button>
            <Link to="/register">Registrarte</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
