import React from 'react'
import './misionYvision.css'
// import heart from '../../../utils/img/nosotros/heart-solid.png'
// import idea from '../../../utils/img/nosotros/icon_idea.png'
// import ok from '../../../utils/img/nosotros/ok-circle.png'
// import money from '../../../utils/img/nosotros/money-alt.png'
import {AiFillDollarCircle, AiFillHeart, AiFillCheckCircle, AiTwotoneBulb} from 'react-icons/ai';
function MisionYvision() {
    return (
    <section className="fondo-azul blanco beneficio-organi">
        <div className="mision-organi">
            <div className="tarjetasMision-Vision">
                <h2 className="tituloMision-Vision">MISION</h2>
                <p>Elit ea cupidatat proident non tempor velit minim. Qui ut et ullamco laboris. Magna ullamco dolor adipisicing ullamco esse dolor eu culpa eiusmod sit incididunt.
                Elit ea cupidatat proident non tempor velit minim. Qui ut et ullamco laboris. Magna ullamco dolor adipisicing ullamco esse dolor eu culpa eiusmod sit incididunt Elit ea cupidatat proident non tempor velit minim. Qui ut et ullamco</p>
            </div>
            <div className="tarjetasMision-Vision">
                <h2 className="tituloMision-Vision">VISION</h2>
                <p>Elit ea cupidatat proident non tempor velit minim. Qui ut et ullamco laboris. Magna ullamco dolor adipisicing ullamco esse dolor eu culpa eiusmod sit incididunt.
                Elit ea cupidatat proident non tempor velit minim. Qui ut et ullamco laboris. Magna ullamco dolor adipisicing ullamco esse dolor eu culpa eiusmod sit incididunt Elit ea cupidatat proident non tempor velit minim. Qui ut et ullamco</p>
            </div>
        </div>
        <h3 className="tituloBeneficios">BENEFICIOS</h3>
        <div className="container-tarjetas-beneficios bodyk">
            <div className="serviceBox">
                <div className="icon"><AiTwotoneBulb className="icon-Icon"/></div>
                <div className="content"><p>Nuestra experiencia nos ha brindado una amplia base de conocimientos</p></div>
            </div>
            <div className="serviceBox">
                <div className="icon"><AiFillCheckCircle className="icon-Icon"/></div>
                <div className="content"><p>Trabajamos bajo los mas estrictos estándares de ejecución de proyectos (metodología PMI y recomendaciones de la norma ISO)</p></div>
            </div>
            <div className="serviceBox">
                <div className="icon"><AiFillDollarCircle className="icon-Icon"/></div>
                <div className="content"><p>Creemos que lo mas importante de un proyecto es que sea rentable y útil para nuestros clientes</p></div>
            </div>
            <div className="serviceBox">
                <div className="icon"><AiFillHeart className="icon-Icon"/></div>
                <div className="content"><p>¡Nos apasiona lo que hacemos!</p></div>
            </div>
        </div>
    </section>
    )
}
  export default MisionYvision;