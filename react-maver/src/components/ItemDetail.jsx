import ItemCount from "./ItemCount"
import { useState, useContext } from 'react'
import { CartContext } from "../context/CartContext"


const ItemDetail = ({ item }) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1);
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }
    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    }

    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.img} alt={item.nombre} />
                <div className="detalle-info">
                    <div>
                        <h3 className="titulo">{item.nombre}</h3>
                        <p className="descripcion">{item.descripcion}</p>
                        <p className="precio">${item.precio}</p>
                    </div>
                    <ItemCount cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={() => { agregarAlCarrito(item, cantidad) }} />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;