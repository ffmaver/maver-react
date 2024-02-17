import { Link } from "react-router-dom";
import LogoArc from "../assets/Logo.png";

const Logo = ({tamano}) => {
    return (
        <Link to="/"><img src={LogoArc} alt="ARCSSEN" width={tamano} /></Link> 
    )
}

export default Logo;