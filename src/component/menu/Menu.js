// import logo from '../../utils/img/Logo.png'
// import logoPequeño from '../../utils/img/logoCrud.png'
// import jeringa from '../../utils/img/Jeringa.png'
// import pulso from '../../utils/img/Pulso.png'
// import {Link} from "react-router-dom"
import mail from '../../utils/img/menu/Icon-Mail.png'
import phone from '../../utils/img/menu/Icon-Phone.png'
import instagram from '../../utils/img/menu/Insta.png'
import linkedin from '../../utils/img/menu/link.png'
import whatsapp from '../../utils/img/menu/whats.png'
import logo from '../../utils/img/logo.png'
import './menu.css'
function Menu() {
    function menuhamfunction (enlaces){
        enlaces = document.getElementById("menuham");
        enlaces.classList.toggle("enlaces-menu");
    };
    return (
    <>
        <header>
            <div className="fondo-azul blanco menuAzul">
                <div className="contactoUltraRapido mail-phone">
                    <div className="contactoUltraRapido">
                        <img src={mail} alt="Mail"/>
                        <p>comercial.proem@gmail.com</p>
                    </div>
                    <div className="contactoUltraRapido">
                        <img src={phone} alt="Phone"/>
                        <p>30052208547</p>
                    </div>
                </div>
                <div className="contactoUltraRapido redesSocialesMenuAzul">
                    <a href="wa.link/4kb6nq"><img src={whatsapp} alt="Whatsapp" className="redesImagen"/></a>
                    <a href="https://www.instagram.com/proem.security/" className="redesImagen"><img src={instagram} alt="Instagram"/></a>
                    <a href="#"><img src={linkedin} alt="Linkedin" className="redesImagen"/></a>
                </div>
            </div>
            <nav className="fondo-blanco azul-oscuro">
                <div className="Logo">
                    <img src={logo} alt="Logo empresarial"/>
                    <h4 className="TituloNombreEmpresa">PROEM SECURITY SAS</h4>
                </div>
                <ul className="enlaces-menu" id="menuham">
                    <li>Inicio</li>
                    <li>Servicios</li>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                </ul>
                <button className="ham" type="button" onClick={menuhamfunction}>
                    <span className="br1"></span>
                    <span className="br2"></span>
                    <span className="br3"></span>
                </button>
            </nav>
        </header>
      {/* <section className="Container ">
          {/*Contenido del menu*/}
        {/* <section className="ContainerMenu">
        <div className="forja logoGrande">
            <Link to="/">
                <img src={logo} alt="Logo empresarial" />
            </Link>
        </div>
        <div className="forja logoPequeño">
            <Link to="/">
                <img src={logoPequeño} alt="Logo empresarial" />
            </Link>
        </div> */}
        {/*<div>
            <img src={jeringa} alt="cargando..."/>
        </div> */}
        {/* <div className="Menu ">
            <a href="#Banner"><button className="botonMenu naranja blancoLetra">VACUNATE</button></a>
            <a href="#InfoTapabocas"><button className="botonMenu naranja blancoLetra">CUIDADOS</button></a>
            <a href="#Slider"><button className="botonMenu naranja blancoLetra">BENEFICIOS</button></a>
        </div>
        <div className="pulso">
            <img src={pulso} alt="cargando..." />
        </div>
        <Link to="/Login">
            <button className="botonMenu link negroFondo botonLogin blancoLetra" type="button">INICIAR SESIÓN</button>
        </Link>
        </section>
     </section>*/}
    </>
    )
}
  export default Menu;