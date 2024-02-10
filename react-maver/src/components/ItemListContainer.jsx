import { useState, useEffect } from "react";
import data from "./Productos.json"
import ItemList from "./ItemList";
const ItemListContainer = () => {

  const [productos, setProductos] = useState([]); //estado vacio

  const pedirProductos = () => { //resuelve data
    return new Promise((resolve, reject) => {
      resolve(data)
    })
  }

  useEffect(() => { //setea data
    pedirProductos()
      .then((res) => {
        setProductos(res);
      })
  }, [])

  return (
    <ItemList productos = {productos}/>
  )

};
export default ItemListContainer;