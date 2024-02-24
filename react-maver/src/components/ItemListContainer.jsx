import { useState, useEffect } from "react";
import data from "./Productos.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"
import Load from "./Load";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]); //estado vacio
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria; //accedo a la cat
  const [loading, setLoading] = useState(true);

  const pedirProductos = () => { //resuelve data
    return new Promise((resolve, reject) => {
      resolve(data)
    })
  }

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

    getDocs(q)
      .then((resp) => {
        setLoading(false)
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
  }, [categoria])

  return (
    <>
      {loading ? <Load /> : <ItemList productos={productos} titulo={titulo}></ItemList>}

    </>
  )

};
export default ItemListContainer;