import "./KcalSpend.css";

export function KcalSpend() {
  return (
    <div className="containerMain">
      <h1>Calorias Gastadas</h1>
      <div className="divCaloriasGatadas">
        <p>Ingresa tus kcal gastadas</p>
        <input type="text" placeholder="kcals: " className="inpuCalGastadas" />
      </div>
      <div className="divActividadFisica">
        <p>O elige la actividad física semanal:</p>
        <button className="activityWeek">Sedentaria (0 a 2 hrs)</button>
        <button className="activityWeek">Liviana (2 a 3 hrs)</button>
        <button className="activityWeek">Moderada (3 a 6 hrs)</button>
        <button className="activityWeek">Intensa (4 a 5 hrs al día)</button>
      </div>
    </div>
  );
}
