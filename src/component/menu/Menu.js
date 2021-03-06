import {Link} from "react-router-dom"
import React from 'react'
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
    function despliegueSubmenu(submenu){
        submenu = document.getElementById("submenu");
        submenu.style.display = "flex";
    }
    return (
    <>
        <header className="encabezado">
            <div className="fondo-azul blanco menuAzul">
                <div className="contactoUltraRapido mail-phone">
                    <div className="contactoUltraRapido">
                        <img className="simboloRedesMenuAzulMail" src={mail} alt="Mail"/>
                        <p>comercial.proem@gmail.com</p>
                    </div>
                    <div className="contactoUltraRapido">
                        <img className="simboloRedesMenuAzul" src={phone} alt="Phone"/>
                        <p>3005220854</p>
                    </div>
                </div>
                <div className="contactoUltraRapido redesSocialesMenuAzul">
                    <a className="redesSocialesMenuAzul-Uno" href="wa.link/4kb6nq"><img src={whatsapp} alt="Whatsapp" className="redesImagen"/></a>
                    <a className="redesSocialesMenuAzul-Uno" href="https://www.instagram.com/proem.security/"><img src={instagram} alt="Instagram" className="redesImagen"/></a>
                    <a className="redesSocialesMenuAzul-Uno" href="#"><img src={linkedin} alt="Linkedin" className="redesImagen"/></a>
                </div>
            </div>
            {/* MENU BLANCO */}
            <nav className="fondo-blanco azul-oscuro">
                <div className="Logo">
                    <Link className="Logo" to = "/Proem-Security"><img src={logo} alt="Logo empresarial"/>
                    <h4 className="TituloNombreEmpresa Logo">PROEM SECURITY SAS</h4></Link>
                </div>
                <ul className="enlaces-menu" id="menuham">
                    <Link to = "/Proem-Security"><li type="button">Inicio</li></Link>
                    <li className="botonServicios" type="button" onClick={despliegueSubmenu}>Servicios
                        <ul className="submenu" id="submenu">
                            <Link to = "/CCTV"><li>CCTV</li></Link>
                            <Link to = "/Control_de_acceso"><li>Control de acceso</li></Link>
                            <Link to = "/Deteccion_de_incendio"><li>Detecci??n de incendio</li></Link>
                            <Link to = "/Extincion_de_incendio"><li>Extincion de Incendio</li></Link>
                            <Link to = "/Sistema_de_intrusion"><li>Sistema de intrusi??n</li></Link>
                            <Link to = "/Audio_evacuacion"><li>Audio Evacuaci??n</li></Link>
                            <Link to = "/Redes_de_datos"><li>Redes de Datos</li></Link>
                            <Link to = "/Telefonia_Analoga"><li>Telefon??a An??loga e IP</li></Link>
                        </ul></li>
                    <Link to = "/Nosotros"><li type="button">Nosotros</li></Link>
                    <Link to = "/Contacto"><li type="button">Contacto</li></Link>
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
        <div className="forja logoPeque??o">
            <Link to="/">
                <img src={logoPeque??o} alt="Logo empresarial" />
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
            <button className="botonMenu link negroFondo botonLogin blancoLetra" type="button">INICIAR SESI??N</button>
        </Link>
        </section>
     </section>*/}
    </>
    )
}
  export default Menu;