import mail from '../../utils/img/menu/Icon-Mail.png'
import phone from '../../utils/img/menu/Icon-Phone.png'
import instagram from '../../utils/img/menu/Insta.png'
import linkedin from '../../utils/img/menu/link.png'
import whatsapp from '../../utils/img/menu/whats.png'
import logo from '../../utils/img/logo.png'

import './footer.css'
function Footer() {
    function menuhamfunction (enlaces){
        enlaces = document.getElementById("menuham");
        enlaces.classList.toggle("enlaces-menu");
    };
    return (
    <section className="azulFooter blanco">
        <footer className="columnasFooter">
            <div className="Logo">
                    <img src={logo} alt="Logo empresarial"/>
            </div>
            <div>
                <h3>Contacto</h3>
                <p>301 - 7289391</p>
                <p>gestionadm.proem@gmail.com</p>
                <p>Carrera 8H 168 - 91 Int.2 - 305</p>
                <p>Bogotá, Colombia</p>
            </div>
            <div>
                <h3>Servicios</h3>
            </div>
            <div>
                <h3>¡Siguenos para novedades!</h3>
                <a href="wa.link/4kb6nq"><img src={whatsapp} alt="Whatsapp" className="redesImagen"/></a>
                <a href="https://www.instagram.com/proem.security/" className="redesImagen"><img src={instagram} alt="Instagram"/></a>
                <a href="#"><img src={linkedin} alt="Linkedin" className="redesImagen"/></a>
            </div>
        </footer>
        <p className="finalCopyright">© 2021. PROEM SECURITY SAS - Todos los derechos reservados</p>
    </section>
    )
}
  export default Footer;