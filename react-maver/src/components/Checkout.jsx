import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = { //obj pedido - datos del pedido
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos"); //referencia a la coleccion de pedidos

        addDoc(pedidosRef, pedido) //agrego el doc (el pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    if (pedidoId) {
        return (
            <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1 className="main-title" style={{ color: 'black' }}>
                    ¡Muchas gracias por tu compra!
                </h1>
                <br />
                <p style={{ fontSize: '18px', marginBottom: '10px' }}>Tu ID de pedido es:</p>
                <h4 style={{ color: 'grey', fontWeight: 'bold' }}>{pedidoId}</h4>

            </div>
        );
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                {/* se podrian pedir mas datos aca */}
                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} required />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} required />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} required />

                <button className="enviar" type="submit">Comprar</button>

            </form>
        </div>
    )
}

export default Checkout;