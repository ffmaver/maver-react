import ItemCount from "./ItemCount"
import { useState } from 'react'


const ItemDetail = ({ item }) => {
    
    const [cantidad, setCantidad] = useState(1);
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }
    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    }
    const handleAgregar = () => {
        console.log(({...item, cantidad}))
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
                <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={handleAgregar}/>
            </div>
        </div>
    </div>
    );
}

export default ItemDetail;