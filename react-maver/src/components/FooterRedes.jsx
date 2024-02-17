import Redes from "./Redes";

const FooterRedes = () => {
    return (
        <ul className= "nav flex-column">
            <li className="nav-item">
                <p className="nav-link text-dark fw-bold fs-6">ENCONTRANOS EN</p>
            </li>
            <li className="nav-item">
                <Redes/>
            </li>
        </ul>
    )
}

export default FooterRedes;