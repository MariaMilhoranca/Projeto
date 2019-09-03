import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Chilanka&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap');
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
body, html {
  
  font-family: 'Chilanka', cursive;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}
a {
    color: #ffffff;
    text-decoration: none;
  }
`;