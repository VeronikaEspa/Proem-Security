import React from 'react'
import './gerentesinfo.css'
// import logo from '../../utils/img/logo.png'
function gerentes() {
    return (
    <section className="Gerentes-organi">
            <div className=""><h3 className="azul tituProemContacto">PROEM SECURITY SAS</h3></div>
            <div className="gerentesInfo">
                <div className="">
                    {/* <img src={logo} alt="Logo empresarial"/> */}
                    <p>Virginia Molina</p>
                    <p>Gerente Administrativa</p>
                    <div className="">
                        <p>301 - 7289391</p>
                        <p>gestionadm.proem@gmail.com</p>
                    </div>
               </div>
               <div className="">
                    {/* <img src={logo} alt="Logo empresarial"/> */}
                    <p>Julio Esparragoza</p>
                    <p>Gerente de proyectos</p>
                    <div className="">
                        <p>300 - 5220854</p>
                        <p>comercial.proem@gmail.com</p>
                    </div>
               </div>
            </div>
    </section>
    )
}
  export default gerentes;