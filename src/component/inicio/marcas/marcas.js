import React from 'react'
import './marcas.css'
import dalhua from '../../../utils/img/inicio/marcas/dalhua.png'
import hello from '../../../utils/img/inicio/marcas/helloSecurity.png'
import bonn from '../../../utils/img/inicio/marcas/BONN_EDAM.png'
import bosch from '../../../utils/img/inicio/marcas/bosch.png'
import geo from '../../../utils/img/inicio/marcas/geovision.png'
import hik from '../../../utils/img/inicio/marcas/hikvision.png'
import honey from '../../../utils/img/inicio/marcas/honeywell.png'
import pelco from '../../../utils/img/inicio/marcas/pelco.png'
import vivo from '../../../utils/img/inicio/marcas/vivotek.png'
import zk from '../../../utils/img/inicio/marcas/zkteco.png'
function marcas() {
    return (
    <section className="Marca-organi">
        <h2 className="azul">TRABAJAMOS CON MARCAS RECONOCIDAS</h2>
        <div className="conjuntoTarjetasMarca fondo-azul blanco">
            <div className="tarjetasMarca">
                <img src={dalhua} alt="Dalhua"/>
            </div>
            <div className="tarjetasMarca">
                <img src={hello} alt="HelloSecurity"/>
            </div>
            <div className="tarjetasMarca">
                <img src={hik} alt="Hikvision"/>
            </div>
            <div className="tarjetasMarca">
                <img src={vivo} alt="Vivotek"/>
            </div>
            <div className="tarjetasMarca">
                <img src={bosch} alt="Bosch"/>
            </div>
            <div className="tarjetasMarca">
                <img src={geo} alt="GeoVision"/>
            </div>
            <div className="tarjetasMarca">
                <img src={honey} alt="Honeywell"/>
            </div>
            <div className="tarjetasMarca">
                <img src={zk} alt="ZKT eco"/>
            </div>
            <div className="tarjetasMarca">
                <img src={bonn} alt="Boon Edam"/>
            </div>
            <div className="tarjetasMarca">
                <img src={pelco} alt="Pelco"/>
            </div>
        </div>
    </section>
    )
}
  export default marcas;