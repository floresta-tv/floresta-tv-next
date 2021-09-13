import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    
      --dark: #170101;
      --primary: #149A41;
      --primary--darken: #0d8535;
      --secondary: #FFB300;
      --light: #9BC4CA;
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    max-width: 100vw;
    overflow-x: hidden;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      width: 10px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: var(--dark);
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 15px;
      border: 2px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
    }
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
    height: 3px;
    z-index: 2000;
    /* border-bottom: 0.4px solid var(--light); */
  }
  
  #nprogress .peg {
    box-shadow: 0 0 20px var(--primary-darken), 0 0 5px var(--primary-darken);
  }

  ul{
    padding-left: 0;
  }
`

export default GlobalStyles
