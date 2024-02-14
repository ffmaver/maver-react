import {Link} from "react-router-dom"
const NavBar = ({type}) => {
    return (
        <ul className= {type}>
            <li className="nav-item">
                <Link className="nav-link text-dark fs-6" to="/">INICIO</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark fs-6" to="/newin">NEW IN</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark fs-6" to="/remeras">REMERAS</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark fs-6" to="/buzos">BUZOS</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark fs-6" to="/outlet">OUTLET</Link>
            </li>
        </ul>
    )
}

export default NavBar;