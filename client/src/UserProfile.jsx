import "./UserProfile.css";

export function UserProfile() {
  return (
    <div className="containerMain">
      <div className="topContainer">
        <h1>Perfil de Usuario</h1>
        <img
          src="https://thispersondoesnotexist.com/"
          alt="Imagen del Usuario"
          className="profileImg"
        />
        <p>Nombre de Usuario</p>
      </div>
      <div className="divComponents">
        <div className="component">
          <div className="insideComponent">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              alt="Icono de Usuario"
              className="iconPerson"
            />
            <p>Nombre</p>
          </div>
          {/* <div className="colorBar"></div> */}
        </div>
        <div className="component">
          <div className="insideComponent">
            <img
              src="https://cdn-icons-png.flaticon.com/512/542/542638.png"
              alt="Icono de Email"
              className="iconPerson"
            />
            <p>Email</p>
          </div>
          {/* <div className="colorBar"></div> */}
        </div>
        <div className="component">
          <div className="insideComponent">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1412/1412443.png"
              alt="Icono de Edad"
              className="iconPerson"
            />
            <p>Edad</p>
          </div>
          {/* <div className="colorBar"></div> */}
        </div>
        <div className="component">
          <div className="insideComponent">
            <img
              src="https://cdn-icons-png.flaticon.com/512/645/645823.png"
              alt="Icono de Altura"
              className="iconPerson"
            />
            <p>Altura</p>
          </div>
          {/* <div className="colorBar"></div> */}
        </div>
        <div className="component">
          <div className="insideComponent">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3260/3260058.png"
              alt="icono de Peso"
              className="iconPerson"
            />
            <p>Peso</p>
          </div>
          {/* <div className="colorBar"></div> */}
        </div>
        <div className="component">
          <div className="insideComponent">
            <img
              src="https://cdn-icons-png.flaticon.com/512/660/660350.png"
              alt=""
              className="iconPerson"
            />
            <button>Cerrar Sesión</button>
          </div>
          {/* <div className="colorBar"></div> */}
        </div>
      </div>
    </div>
  );
}
