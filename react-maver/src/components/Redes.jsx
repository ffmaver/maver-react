import Instagram from "../assets/ig.png";
import Whatsapp from "../assets/wp.png";
import Twitter from "../assets/tw.png";
import Facebook from "../assets/fb.png";

const Redes = () => {
    const estiloImagen = {
        margin: '10px',
    };

    return (
        <div>
            <img src= {Instagram} alt="Instagram" style={estiloImagen} />
            <img src={Facebook} alt="Facebook" style={estiloImagen} />
            <img src={Twitter} alt="Twitter" style={estiloImagen} />
            <img src={Whatsapp} alt="Whatsapp" />
        </div>
    );
}

export default Redes;