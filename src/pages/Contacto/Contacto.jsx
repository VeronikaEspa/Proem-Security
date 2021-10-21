import React from 'react'
import './Contacto.css'
import { Menu , ContactoForm , Footer, Gerentes, TituloContacto, Sedes} from '../../component/index'
const Contacto = () => {
    return(
        <>
        <Menu />
        <TituloContacto/>
        <div className="acomodaoContacto">
            <Gerentes/>
            <ContactoForm/>
        </div>
        <Sedes/>
        <Footer/>
        </>
    )
}

export default Contacto;