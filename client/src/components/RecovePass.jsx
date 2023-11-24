import "./RecovePass.css";

export function RecovePass() {
  return (
    <div className="containerMain">
      <h1 className="tittle">Recuperación de contraseña</h1>
      <p className="subtittle">
        Ingrese su correo para recuperar su contraseña
      </p>
      <div className="formEmail">
        <p>Correo</p>
        <input
          type="email"
          className="inputEmail"
          placeholder="correo@dominio.com"
        />
        <button className="buttonSendEmail">Enviar correo</button>
      </div>
      <div className="extraOptions">
        <p className="subtittle">¿Ya tienes cuenta?</p>
        <button className="Login">Ingresar</button>
        <p className="subtittle">¿Aún no tienes una cuenta?</p>
        <button className="Login">Registrate</button>
      </div>
    </div>
  );
}
