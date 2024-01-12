const NavBar = ({type}) => {
    return (
        <ul className= {type}>
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="#">INICIO</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="#">NEW IN</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="#">REMERAS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="#">BUZOS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="#">OUTLET</a>
            </li>
        </ul>
    )
}

export default NavBar;