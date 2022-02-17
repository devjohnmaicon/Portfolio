import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 /* #0dcaf0 */
 /* bglight -  background-color: #0F0F0F; */
 /* bgdark -  background-color: #000; */
 
html{
    scroll-padding-top: 5rem;
    scroll-behavior: smooth;
}

 body{
     background-color: #000;
 }

 *{
     padding: 0;
     margin: 0;
     box-sizing: border-box;
     font-family: 'Poppins', sans-serif;
     outline: none;
     text-decoration: none;
     border: none;
     color: #fff;
     transition: .3s ease;
 }



 li{
     list-style: none;
 }

 ::-webkit-scrollbar-thumb{
     background-color: #474A56;
     border-radius: 15px;
 }

 ::-webkit-scrollbar{
     background-color:  #0F0F0F;
 }

`;

export default GlobalStyle;
