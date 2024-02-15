import { useEffect, useState } from "react"
import{pedirItemPorId} from "../helpers/pedirDatos"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id; //devuelve string

    useEffect(() => {
        pedirItemPorId(Number(id)) //lo paso a number
        .then((res) => {
            setItem(res);
        })
    }, [id])


    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;