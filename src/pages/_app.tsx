import { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/Navbar'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          MeuPortfolio • Descubra a plataforma mais avançada em gestão de
          patrimônios
        </title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#002936" />
        <meta
          name="description"
          content="MeuPortfolio Tecnologia é uma empresa formada por um grupo de pessoas apaixonadas e dedicadas a ajudar sua organização na gestão de patrimônio do seu cliente. Nossa plataforma foi totalmente construída com base nos pilares da experiência e dedicação, oferecendo assim aos nossos clientes produtos com: Alta disponibilidade, performance, estabilidade, interface eficiente e intuitiva e um atendimento de excelência."
        />
      </Head>
      <GlobalStyles />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default App
