import "./Navbar.css"
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <nav >
        
        <ul className="pestanas">
            <li>
                <Link to="/home">
                    <img className="iconos" src="https://res.cloudinary.com/dbyz6npup/image/upload/v1701278758/corazon_dlejol.png"/>
                </Link>
                <Link to="/registrocalorias">
                    <img className="iconos" src="https://res.cloudinary.com/dbyz6npup/image/upload/v1701279618/platillo_njxorm.png"/>
                </Link>
                <Link to="/kcalspend">
                    <img className="iconos" src="https://res.cloudinary.com/dbyz6npup/image/upload/v1701280360/silueta-de-corredor_mx7r8f.png" />
                </Link>
                <Link to="/globalrank">
                    <img className="iconos" src="https://res.cloudinary.com/dbyz6npup/image/upload/v1701280067/checkered-flag-309862_640_feddnk.png" />
                </Link>
                <Link to="/settings">
                    <img className="iconos" src="https://res.cloudinary.com/dbyz6npup/image/upload/v1701280064/perfil_m0j4sj.png" />
                </Link>

            </li>

        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
