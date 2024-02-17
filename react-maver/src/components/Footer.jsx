import { Link } from "react-router-dom";
import LogoSen from "./LogoSen";
const Footer = () => {
    return (
        <div className="container my-3">
            <hr />
            <div className="row my-3">
                <div className="col-md-10">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link text-secondary fs-6" to="/">Política de Privacidad</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-secondary fs-6" to="/">Protección de datos personales</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-secondary fs-6" to="/">Contacto</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 m-auto">
                    <LogoSen tamano={40} />
                </div>
            </div>
        </div>
    )
}

export default Footer;