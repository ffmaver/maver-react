import { Link } from "react-router-dom"

import CarritoWidget from "./CarritoWidget";
const NavBar = ({ type, showCarritoWidget }) => {
    return (
        <ul className={type}>
            <li className="nav-item">
                <Link className="nav-link text-dark fs-6" to="/">INICIO</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark fs-6" to="/productos">PRODUCTOS</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark fs-6" to="/productos/newin">NEW IN</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark fs-6" to="/productos/remeras">REMERAS</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark fs-6" to="/productos/buzos">BUZOS</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark fs-6" to="/productos/outlet">OUTLET</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark fs-6" to="/contacto">CONTACTO</Link>
            </li>
            {showCarritoWidget && (
                <li>
                    <CarritoWidget />
                </li>
            )}
        </ul>
    )
}

export default NavBar;