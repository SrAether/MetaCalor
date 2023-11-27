import "./MakeDish.css";

export function MakeDish() {
  return (
    <div className="divMakeDishMain">
      <h1>Armar Platillo</h1>
      <div className="divImgMakeDish">
        <img
          src="https://www.eatatjacks.com/wp-content/uploads/2020/08/cheeseburger-Kids-Meal-1.png"
          alt=""
          className="imgDish"
        />
      </div>
      <div className="divButtonsAddDish">
        <div className="divButtonCalculate">
          <button className="addNumDish">+</button>
          <div className="divNumberInsideButtonCalculate">
            <p>0</p>
          </div>
          <button className="restNumDish">-</button>
        </div>
        <button className="addDish">Añadir</button>
      </div>
      <div className="divIngredientsDish">
        <p>Ingredientes</p>
        <div className="divInsideIngredientsDish">
          <p>Pepino</p>
          <button className="addIngredientDish">+</button>
        </div>
      </div>
    </div>
  );
}
