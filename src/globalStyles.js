import {createGlobalStyle} from 'styled-components'
import PoppinsBold from './utils/fonts/Poppins-Bold.woff'
import PoppinsLight from './utils/fonts/Poppins-Light.woff'
import PoppinsMedium from './utils/fonts/Poppins-Medium.woff'
import PoppinsRegular from './utils/fonts/Poppins-Regular.woff'
import PoppinsSemiBold from './utils/fonts/Poppins-SemiBold.woff'
const GlobalStyles = createGlobalStyle `
html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box
}
button{
    cursor: pointer;
}
//COLORES
.fondo-azul{
    background-color: #1B22A1;
}
.fondo-blanco{
    background-color: #FBFBFB;
}
.azul{
    color: #1B22A1;
}
.azul-oscuro{
    color: #1A1E53;
}
.blanco{
    color: #FBFBFB;
}
.azulFooter{
    background-color: #262A6D;
}
    //FUENTES
@font-face {
    font-family: "poppins-bold";
    src: local("poppins-bold"), url(${PoppinsBold}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "poppins-light";
    src: local("poppins-light"), url(${PoppinsLight}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "poppins-medium";
    src: local("poppins-medium"), url(${PoppinsMedium}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "poppins-regular";
    src: local("poppins-regular"), url(${PoppinsRegular}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "poppins-semibold";
    src: local("poppins-semibold"), url(${PoppinsSemiBold}) format("woff");
    font-weight: normal;
}
@media screen and (min-width:300px) and (max-width:999px){
    #botonCerrarSesion{
        padding: 0;
        font-size: 12px;
        width: 70%;
        margin-top: 0;
    }
    .UsuarioNombre{
        justify-content: center;
        align-items: center;
    }
}
`
export default GlobalStyles;