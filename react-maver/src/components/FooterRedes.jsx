import Redes from "./Redes";

const FooterRedes = () => {
    return (
        <ul className= "nav flex-column">
            <li className="nav-item">
                <a className="nav-link text-dark fw-bold fs-5" href="#">ENCONTRANOS EN</a>
            </li>
            <li className="nav-item">
                <Redes/>
            </li>
        </ul>
    )
}

export default FooterRedes;