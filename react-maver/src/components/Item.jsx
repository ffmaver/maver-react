const Item = ({producto}) => {

    return (
        <div>

            <div>
                <img src={producto.img} alt={producto.nombre} />
                <h2>{producto.nombre}</h2>
                <p>${producto.precio}</p>
                <p>{producto.descripcion}</p>
            </div>

        </div>
    )
}
export default Item;