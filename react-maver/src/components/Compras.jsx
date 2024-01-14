import Carrito from "../assets/Carrito.png"

const Compras = () => {
    return (
        <button type="button" className="btn position-relative px-2">
            <img src={Carrito} alt="icono-carrito" width={25} /> 
            <span className="position-absolute top-0 start-100 translate-middle badge bg-dark">4</span>
        </button>
    )
}

export default Compras;