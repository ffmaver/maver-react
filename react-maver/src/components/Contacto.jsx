import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

    return (

        <div className="container">
            <h1 className="main-title">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>

                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} required />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} required/>
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} required/>

                <button className="enviar" type="submit">Enviar</button>

            </form>
        </div>

    )
}

export default Contacto;