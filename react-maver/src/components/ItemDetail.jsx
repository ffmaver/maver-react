import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {

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
                <ItemCount item={item}/>
            </div>
        </div>
    </div>
    );
}

export default ItemDetail