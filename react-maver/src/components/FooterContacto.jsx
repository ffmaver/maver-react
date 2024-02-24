import { Link } from "react-router-dom";

const FooterContacto = () => {
    return (
        <ul className= "nav flex-column">
            <li className="nav-item">
                <p className="nav-link text-dark fw-bold fs-6" >CONTACTANOS</p>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-muted fs-6" to="https://mail.google.com/" target="_blank" rel="noopener noreferrer">ARCSSEN@GMAIL.COM</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-muted fs-6" to="https://www.google.com.ar/maps" target="_blank" rel="noopener noreferrer">CALLE CUALQUIERA 123, BUENOS AIRES</Link>
            </li>
        </ul>
    )
}

export default FooterContacto;