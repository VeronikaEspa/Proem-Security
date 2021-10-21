import React from 'react'
import {Link} from "react-router-dom"
import './serviciosInicio.css'
import cctv from '../../../utils/img/inicio/cctvServi.png'
import audioE from '../../../utils/img/inicio/audioEvacuacionServi.png'
import deteccion from '../../../utils/img/inicio/deteccionServi.png'
import control from '../../../utils/img/inicio/controlServi.png'
import redes from '../../../utils/img/inicio/redesServi.png'
import extincion from '../../../utils/img/inicio/extincionServi.png'
function ServiciosInicio() {
    return (
    <section className="servicios-organi fondo-azul blanco">
        <h2>SOMOS LOS MEJORES</h2>
        <div className="conjuntoTarjetasServicios">
            <div className="tarjetasGrisServicios">
                <Link to = "/CCTV"><img src={cctv} alt="CCTV"/></Link>
                <p>Circuito Cerrado de Televisión</p>
            </div>
            <div className="tarjetasGrisServicios">
                <Link to = "/Audio_evacuacion"><img src={audioE} alt="Audio Evacuacion"/></Link>
                <p>Audio Evacuación</p>
            </div>
            <div className="tarjetasGrisServicios">
                <Link to = "/Deteccion_de_incendio"><img src={deteccion} alt="CCTV"/></Link>
                <p>Sistemas de Detección de Incendios</p>
            </div>
            <div className="tarjetasGrisServicios">
                <Link to = "/Control_de_acceso"><img src={control} alt="CCTV"/></Link>
                <p>Sistemas de Control de Acceso</p>
            </div>
            <div className="tarjetasGrisServicios">
                <Link to = "/Redes_de_datos"><img src={redes} alt="Audio Evacuacion"/></Link>
                <p>Infraestructura y Soluciones para Redes de Datos</p>
            </div>
            <div className="tarjetasGrisServicios">
                <Link to = "/Extincion_de_incendio"><img src={extincion} alt="CCTV"/></Link>
                <p>Sistemas de Extincion de Incendios</p>
            </div>
        </div>
    </section>
    )
}
  export default ServiciosInicio;