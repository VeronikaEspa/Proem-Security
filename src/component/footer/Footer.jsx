import React from 'react'
import {Link} from "react-router-dom"
import mail from '../../utils/img/menu/Icon-Mail.png'
import phone from '../../utils/img/menu/Icon-Phone.png'
import instagram from '../../utils/img/menu/Insta.png'
import linkedin from '../../utils/img/menu/link.png'
import whatsapp from '../../utils/img/menu/whats.png'
import logo from '../../utils/img/logo.png'
import cctv from '../../utils/img/Footer/cctvMINI.png'
import control from '../../utils/img/Footer/control_de_incendioMINI.png'
import extincion from '../../utils/img/Footer/extincion_de_incendioMINI.png'
import redes from '../../utils/img/Footer/redes_de_datosMINI.png'
import './footer.css'
function Footer() {
    return (
    <section className="azulFooter blanco">
        <footer className="columnasFooter">
            <div className="LogoFooter">
                <Link to = "/Proem-Security"><img src={logo} alt="Logo empresarial"/></Link>
            </div>
            <div className="otrosDiv contactanosFooter">
                <h4>Contacto</h4>
                <p>301 - 7289391</p>
                <p>gestionadm.proem@gmail.com</p>
                <p>Carrera 8H 168 - 91 Int.2 - 305</p>
                <p>Bogotá, Colombia</p>
            </div>
            <div className="serviciosFooter">
                <h4>Nuestros servicios</h4>
                <div className="imagenesServiciosFooter">
                    <Link to = "/Extincion_de_incendio"><img src={extincion} alt="Extincion de incendio"/></Link>
                    <Link to = "/Control_de_acceso"><img src={control} alt="Control de acceso"/></Link>
                </div>
                <div className="imagenesServiciosFooter">
                    <Link to = "/CCTV"><img src={cctv} alt="CCTV"/></Link>
                    <Link to = "/Redes_de_datos"><img src={redes} alt="Redes de datos"/></Link>
                </div>
            </div>
            <div className="otrosDiv siguenosParaNovedades">
                <h4>¡Siguenos para novedades!</h4>
                <a className="redesFooter" href="wa.link/4kb6nq"><img src={whatsapp} alt="Whatsapp" className="redesImagen"/><p>301 7289391</p></a>
                <a className="redesFooter" href="https://www.instagram.com/proem.security/"><img src={instagram} alt="Instagram" className="redesImagen"/><p>PROEM SECURITY SAS</p></a>
                <a className="redesFooter" href="#"><img src={linkedin} alt="Linkedin" className="redesImagen"/><p>@proem.security</p></a>
            </div>
        </footer>
        <p className="finalCopyright">© 2021. PROEM SECURITY SAS - Todos los derechos reservados</p>
    </section>
    )
}
  export default Footer;