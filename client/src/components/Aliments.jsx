import "./Aliments.css";

export function Aliments() {
  return (
    <div className="containerMain">
      <h1>Alimentos</h1>
      <div className="divVariant">
        <p>Alimentos</p>
        <div className="variant">
          <img
            src="https://waapple.org/wp-content/uploads/2021/06/Variety_Cosmic-Crisp-transparent-658x677.png"
            alt="Imagen de manzana"
            className="variantImg"
          />
          <p>Manzana</p>
          <button className="buttonAddAliments">+</button>
        </div>
        <div className="variant">
          <img
            src="https://lagranbodega.vteximg.com.br/arquivos/ids/204256-600-600/58AFYV148_1.jpg?v=636790598591370000"
            alt="Imagen de pepino"
            className="variantImg"
          />
          <p>Pepino</p>
          <button className="buttonAddAliments">+</button>
        </div>
        <div className="variant">
          <img
            src="https://lahojuela.mx/cdn/shop/products/0BA14E33-8E78-4292-9B2A-8F81CF35B202_640x.png?v=1569070307"
            alt="Imagen de frijol"
            className="variantImg"
          />
          <p>Frijol Crudo</p>
          <button className="buttonAddAliments">+</button>
        </div>
        <div className="variant">
          <img
            src="https://www.aweta.com/images/produces/overzicht/aweta-product-mango.png"
            alt="Imagen de mango"
            className="variantImg"
          />
          <p>Mango</p>
          <button className="buttonAddAliments">+</button>
        </div>
        <button className="buttonRegisterAliments">Registrar</button>
      </div>
    </div>
  );
}
