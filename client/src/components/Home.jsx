import "./Home.css"; //estilos
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { logout } from "../api/auth";
import { getProfileRequest } from "../api/auth";

import { useEffect } from "react";
import { KcalConsumRequest } from "../api/auth";
//import { useUserData } from "../context/UserContext";

export function Home() {
  const navigate = useNavigate();
  const { user, userInformation, getKcal } = useAuth();
  if (!user.age) userInformation();
  // Convertir el objeto a una cadena JSON
  //let json = JSON.stringify(dato);
  if (!user.sumaEnergiaKcal) 
    getKcal(user.id);
    console.log(user);
  //console.log(typeof user.id); SI ES STRING

  //Agregado despues del UserContext
  //  const {user} = useUserData();
  //  console.log(user);

  const handleLogOut = () => {
    logout(); //eliminar la cookie del usuario para salir de la sesion
    navigate("/"); //regresar a la pagina principal(login)
    window.location.reload(); //refrescar la pagina
  };

  return (
    <div className="containerMain">
      <div className="insideContainerMain">
        <div className="tittles">
          <h1>Bienvenido</h1>
          <h2>¡Hola {user.nickname} !</h2>
        </div>
        <div className="goals">
          <p>Meta</p>
          <div className="divMainGoal">
            <p>{user.goal} </p>
          </div>
          <p>Kcal consumidas</p>
          <div className="divKcalConsumidas">
            <p>{user.sumaEnergiaKcal}</p>
          </div>
          {
            user.sumaEnergiaKcal > user.goal &&
            <h3>¡Alerta de exceso de kcal!</h3>
          }
          
          <p>Racha actual</p>
          <div className="divRachaActual">
            <p> {user.streak} </p>
          </div>
        </div>
        <button className="contactToProffesionals">
          <Link to="/nutriologos">Contacta con un profesional</Link>
        </button>
        <button className="buttonLogOut" onClick={handleLogOut}>
          CERRAR SESION
        </button>
      </div>
    </div>
  );
}
