import "./CaloriesRegister.css";

export function CaloriesRegister() {
  return (
    <div className="containerMain">
      <h1>Registro de calorias</h1>
      <div className="divVariant">
        <p>Seleccion de variante</p>
        <div className="variant">
          <img
            src="https://ichef.bbci.co.uk/news/640/cpsprodpb/89E2/production/_106589253_amino.jpg"
            alt="Imagen de alimento"
            className="variantImg"
          />
          <p>Alimento</p>
          <button className="buttonAdd">Add</button>
        </div>
        <div className="variant">
          <img
            src="https://salroche.com/cdn/shop/articles/Tips-para-preparar-comida-saludable.jpg?v=1574172216"
            alt="Imagen de platillo"
            className="variantImg"
          />
          <p>Platillo</p>
          <button className="buttonAdd">Add</button>
        </div>
        <div className="variant">
          <img
            src="https://burgerkingec.com/wp-content/uploads/2022/11/web_Mesa-de-trabajo-1-1.png"
            alt="Imagen de nuevo platillo"
            className="variantImg"
          />
          <p>Nuevo platillo</p>
          <button className="buttonAdd">Add</button>
        </div>
      </div>
    </div>
  );
}
