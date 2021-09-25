import {createGlobalStyle} from 'styled-components'
import PoppinsBold from './utils/fonts/Poppins-Bold.woff'
import PoppinsLight from './utils/fonts/Poppins-Light.woff'
import PoppinsMedium from './utils/fonts/Poppins-Medium.woff'
import PoppinsRegular from './utils/fonts/Poppins-Regular.woff'
import PoppinsSemiBold from './utils/fonts/Poppins-SemiBold.woff'
const GlobalStyles = createGlobalStyle `
@font-face {
    font-family: "poppins-bold";
    src: local("poppins-bold"), url(${PoppinsBold}) format("woff");
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