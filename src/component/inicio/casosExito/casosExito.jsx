import React from 'react'
import './casosExito.css'
import camara from '../../../utils/img/inicio/camaraExito.png'
import serfi from '../../../utils/img/inicio/serfinanzaExito.png'
import argos from '../../../utils/img/inicio/argosExito.png'
import altipal from '../../../utils/img/inicio/altipalExito.png'
import estadio from '../../../utils/img/inicio/estadioExito.png'
import olimpica from '../../../utils/img/inicio/olimpicaExito.png'
function casosExito() {
    return (
    <section className="Exito-organi">
        <h2 className="azul">CASOS DE EXITO</h2>
        <div className="conjuntoTarjetasExito">
            <div className="tarjetasGrisExito">
                <img src={camara} alt="Cámara de Comercio Barranquilla"/>
                <p>Cámara de Comercio</p>
                <p>Barranquilla</p>
            </div>
            <div className="tarjetasGrisExito tarjetaMargin">
                <img src={serfi} alt="Serfinanza"/>
                <p>Serfinanza</p>
            </div>
            <div className="tarjetasGrisExito tarjetaMargin">
                <img src={argos} alt="Cementos Argos"/>
                <p>Cementos Argos</p>
            </div>
            <div className="tarjetasGrisExito">
                <img src={altipal} alt="Altipal SA"/>
                <p>Altipal SA</p>
            </div>
            <div className="tarjetasGrisExito">
                <img src={estadio} alt="Estadio Metropolitano Barranquilla"/>
                <p>Estadio Metropolitano</p>
                <p>Barranquilla</p>
            </div>
            <div className="tarjetasGrisExito tarjetaMargin">
                <img src={olimpica} alt="Olimpica"/>
                <p>Olimpica</p>
            </div>
        </div>
    </section>
    )
}
  export default casosExito;