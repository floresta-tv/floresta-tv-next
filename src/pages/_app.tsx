import { AppProps } from 'next/app'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import 'nprogress/nprogress.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false
})

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default App
