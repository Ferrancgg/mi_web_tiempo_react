import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/prevision">
          Previsión
        </NavLink>
        <NavLink className="nav-link" to="/buscador">
          Buscador
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
