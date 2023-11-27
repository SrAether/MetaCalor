import "./Settings.css";

export function Settings() {
  return (
    <div className="containerSettings">
      <h1>Ajustes</h1>
      <div className="insideContainerSettings">
        <div className="myAccountDiv">
          <p>Mi cuenta</p>
          <div className="buttonsDiv">
            <button className="buttonDiv">Editar Perfil</button>
            <button className="buttonDiv">Mis Metas</button>
            <button className="buttonDiv">Cambiar Contraseña</button>
            <button className="buttonDiv">Borrar Cuenta</button>
            <button className="buttonDiv">Recordatorios</button>
          </div>
        </div>
        <div className="mySettingsDiv">
          <p>Configuraciones</p>
          <div className="buttonsDiv">
            <button className="buttonDiv">Editar Perfil</button>
            <button className="buttonDiv">Recordatorios</button>
            <button className="buttonDiv">Notificaciones Push</button>
          </div>
        </div>
        <div className="myHelpDiv">
          <p>Ayuda</p>
          <div className="buttonsDiv">
            <button className="buttonDiv">¿Quiénes somos?</button>
            <button className="buttonDiv">Preguntas Frecuentes</button>
            <button className="buttonDiv">Contacto</button>
          </div>
        </div>
      </div>
    </div>
  );
}
