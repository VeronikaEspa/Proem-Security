import './App.css';
import GlobalStyles from './globalStyles';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './pages/Inicio/Inicio'
// import Servicios from './pages/Servicios/Servicios'
import Nosotros from './pages/Nosotros/Nosotros'
import Contacto from './pages/Contacto/Contacto'
import CCTV from './pages/Servicios/CCTV/CCTV'
import Control_de_acceso from './pages/Servicios/Control_de_acceso/Control_de_acceso'
import Deteccion from './pages/Servicios/Deteccion/Deteccion'
import Extincion from './pages/Servicios/Extincion/Extincion'
import Intrusion from './pages/Servicios/Intrusion/Intrusion'
import Telefonia from './pages/Servicios/Telefonia/Telefonia'
import Redes_de_datos from './pages/Servicios/Redes_de_datos/Redes_de_datos'
import Audio_evacuacion from './pages/Servicios/Audio_evacuacion/Audio_evacuacion'

function App() {
  return (
    <div className="App">
      <Router>
      <GlobalStyles/>
      <Switch>
        <Route path="/Proem-Security" exact component={Inicio}/>
          <Route path="/CCTV" exact component={CCTV}/>
          <Route path="/Control_de_acceso" exact component={Control_de_acceso}/>
          <Route path="/Deteccion_de_incendio" exact component={Deteccion}/>
          <Route path="/Extincion_de_incendio" exact component={Extincion}/>
          <Route path="/Sistema_de_intrusion" exact component={Intrusion}/>
          <Route path="/Redes_de_datos" exact component={Redes_de_datos}/>
          <Route path="/Telefonia_Analoga" exact component={Telefonia}/>
          <Route path="/Audio_evacuacion" exact component={Audio_evacuacion}/>
        <Route path="/Nosotros" exact component={Nosotros}/>
        <Route path="/Contacto" exact component={Contacto}/>
        <Route path="/" component={Inicio}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
