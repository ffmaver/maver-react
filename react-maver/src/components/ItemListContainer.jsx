import { useState, useEffect } from "react";
import data from "./Productos.json"
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
const ItemListContainer = () => {

  const [productos, setProductos] = useState([]); //estado vacio
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria; //accedo a la cat


  const pedirProductos = () => { //resuelve data
    return new Promise((resolve, reject) => {
      resolve(data)
    })
  }

  useEffect(() => { //setea data
    pedirProductos()
      .then((res) => {
        if (categoria) {
          setProductos(res.filter((prod)=> prod.categoria===categoria));
          setTitulo(categoria);
        }
        else{
          setProductos(res);
          setTitulo("PRODUCTOS");
        }
      })
  }, [categoria]) //se ejecuta cuando cambia categoria

  return (
    <ItemList productos={productos} titulo={titulo}/>
  )

};
export default ItemListContainer;