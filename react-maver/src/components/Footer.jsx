import LogoSen from "./LogoSen";
const Footer = () => {
    return (
        <div className="container my-3">
            <hr />
            <div className="row my-3">
                <div className="col-md-10">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-secondary fs-6" href="#">Política de Privacidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary fs-6" href="#">Defensa del Consumidor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary fs-6" href="#">Protección de datos personales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary fs-6" href="#">Contacto</a>
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