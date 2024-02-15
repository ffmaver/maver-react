import {Link} from "react-router-dom"
const NavBar = ({type}) => {
    return (
        <ul className= {type}>
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
        </ul>
    )
}

export default NavBar;