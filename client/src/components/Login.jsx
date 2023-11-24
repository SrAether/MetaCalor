import "./Login.css";
import { useState } from "react";

export function Login({ setUser }) {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre === "" || password === "") {
      setError(true);
      return;
    }
    setError(false);

    setUser([nombre]);
  };
  return (
    <section>
      <div className="containerMain">
        <h1 className="titulo">¡HOLA!</h1>
        <h1 className="titulo">Ingresar</h1>
        <p className="subtitulo">Ingresa para continuar</p>
        <div className="contenedorFormulario">
          <form className="formulario" onSubmit={handleSubmit}>
            <p className="textoBeforeInputs">Nombre de Usuario</p>
            <input
              type="text"
              placeholder="Nickname"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <p className="textoBeforeInputs">Contraseña</p>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
          <button>Registrarte</button>
        </div>
      </div>
    </section>
  );
}
