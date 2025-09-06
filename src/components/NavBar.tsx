import { Link, Outlet } from "react-router-dom";
import "../css/NavBar.css";

/**
 * This component renders the navigation bar for the application.
 * @returns NavBar component.
 */
function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <img src="../assets/logo.png" alt="Logo" className="logo" />
          </li>
          <li id="tables" className="nav-item">
            <Link className="nav-link" to="/">
              Mesas
            </Link>
          </li>
          <li id="stock" className="nav-item">
            <a href="/" className="nav-link">
              {" "}
              estoque
            </a>
          </li>
          <li id="cards" className="nav-item">
            <Link className="nav-link" to="/cards">
              Cards
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
