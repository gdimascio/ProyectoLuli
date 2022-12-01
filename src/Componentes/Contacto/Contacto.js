import React from "react";
import { useForm } from "react-hook-form";

const Contacto = () => {
    const {register, formState:{ errors}, handleSubmit} = useForm("");
    const onSubmit = (data) =>{ 
        console.log(data);
    }

    return (
        <section className="seccion4-contato">
            <span></span>
            <h3 className="contacto">Contacto</h3>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-div">
                    <input type="text" placeholder="Email *"{...register('email', {required:true, pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/})}/>
                    {errors.email?.type === 'pattern' && <p style={{color:"red"}}> El formato es incorrecto </p>}
                </div>

                <div className="form-div">
                    <input type="text" placeholder="Nombre *" {...register('Nombre', {required:true})} />
                    {errors.Nombre?.type === 'required' && <p style={{color:"red"}}> El campo nombre es obligatorio </p>}
                </div>

                <div className="form-div">
                    <input type="text" placeholder="Asunto" />
                </div>

                <div className="form-div">
                    <textarea placeholder="Mensaje" {...register('Mensaje', {maxLength:100})}/>
                </div>

                <div className="div-button">
                    <input type="submit" value="Enviar" className="enviar-button button"/>
                </div>
            </form>
        </section>
        );
}
export default Contacto;
