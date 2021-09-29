import './App.css';
import GlobalStyles from './globalStyles';
//import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './component/menu/Menu'
import Footer from './component/footer/Footer'
function App() {
  return (
    <div className="App">
      <Menu/>
      <Footer/>
      <GlobalStyles/>
    </div>
  );
}

export default App;
