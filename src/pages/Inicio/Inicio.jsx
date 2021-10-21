import React from 'react'
import { Menu , Footer, Slider, ServiciosInicio, CasosExito, Marcas} from '../../component/index'
const Inicio = () => {
    return(
        <>
        <Menu />
        <Slider/>
        <ServiciosInicio/>
        <CasosExito/>
        <Marcas/>
        <Footer/>
        </>
    )
}

export default Inicio;