import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    
      --navy: #002936;
      --primary: #006686;
      --primary--darken: #015a75;
      --secondary: #003D50;
      --light: #9BC4CA;
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    max-width: 100vw;
    overflow-x: hidden;
    background-color: #e6e6e6;
    scroll-behavior: smooth;
  }

  main{
    min-height: 70vh;
  }

  #nprogress{
    position: absolute;
    z-index: 2000;
  }
  
  #nprogress .bar {
    background-color: var(--primary) !important;
    height: 5px;
    z-index: 2000;
    border-bottom: 0.4px solid var(--light);
  }
  
  #nprogress .peg {
    box-shadow: 0 0 20px var(--primary--darken), 0 0 5px var(--primary--darken);
  }
`

export default GlobalStyles
