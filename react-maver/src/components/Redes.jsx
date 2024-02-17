import Instagram from "../assets/ig.png";
import Whatsapp from "../assets/wp.png";
import Twitter from "../assets/tw.png";
import Facebook from "../assets/fb.png";
import { Link } from 'react-router-dom';

const Redes = () => {
    const estiloImagen = {
        margin: '10px',
    };

    return (
        <div>
            <Link to="https://www.instagram.com/arcssen/" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" style={estiloImagen} />
            </Link>
            <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src={Facebook} alt="Facebook" style={estiloImagen} />
            </Link>
            <Link to="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter" style={estiloImagen} />
            </Link>
            <Link to="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                <img src={Whatsapp} alt="Whatsapp" />
            </Link>
        </div>
    );
}

export default Redes;
