import Item from "./Item";

const ItemList = ({ productos }) => {

    return (
        <div className="conainer"> 
            <div className="productos">
            {productos.length > 0 &&
                productos.map((producto) => {
                    return (
                            <Item key={producto.id} producto={producto} />
                    )
                })
            }
            </div>
        </div>
    )
}
export default ItemList;