import "./Home.css";

export function Home({ user, setUser }) {
  const handleLogOut = () => {
    setUser([]);
  };

  return (
    <div className="containerMain">
      <div className="insideContainerMain">
        <div className="tittles">
          <h1>Bienvenido</h1>
          <h2>¡Hola {user}!</h2>
        </div>
        <div className="goals">
          <p>Meta</p>
          <div className="divMainGoal">
            <p>Aqui van las kcal meta</p>
          </div>
          <p>Kcal consumidas</p>
          <div className="divKcalConsumidas">
            <p>Aqui van las calorias consumidas</p>
          </div>
          <h3>¡Alerta de exceso de kcal!(En caso de haberlo)</h3>
          <p>Racha actual</p>
          <div className="divRachaActual">
            <p>Dias de racha</p>
          </div>
        </div>
        <button className="contactToProffesionals">
          Contacta con un profesional
        </button>
        <button className="buttonLogOut" onClick={handleLogOut}>
          Cerrar Sesion
        </button>
      </div>
    </div>
  );
}
