import { AppProps } from 'next/app'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import Navbar from '../components/Navbar'

import 'nprogress/nprogress.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Floresta.TV • Movimento em serviço da Floresta.</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="og:image" itemProp="image" href="/img/og-image.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#149A41" />
        <meta
          name="description"
          content="O movimento coletivo Floresta TV partiu de um pedido dos próprios Povos Originários do mundo em ter autonomia para registrar, compartilhar e ampliar milhares de anos de cultura e sabedoria altamente sustentável, integrativa, coletiva e pacífica com o mundo digital binário."
        />
      </Head>
      <GlobalStyles />
      <Navbar />
      <main>
        <Component {...pageProps} key={router.route} />
      </main>
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
