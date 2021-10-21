import React from 'react'
import './contactoform.css'
function ContactoForm() {
    return (
    <>
        <form className="formularioCont">
                <h3 className="tituloContactForm">¡Queremos ayudarte!</h3>
            <div className="formulariotexto">
                <input className="input" placeholder="Nombre"/>
                <input className="input" placeholder="Telefono"/>
                <input className="input" placeholder="Correo"/>
                <textarea placeholder="Mensaje"/>
                <input className="botonEnviar" type="submit" value="Enviar"/>
            </div>
        </form>
    </>
    )
}
  export default ContactoForm;