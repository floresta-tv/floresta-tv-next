import NextApp, { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import Navbar from '../components/Navbar'
import { NextIntlProvider } from 'next-intl'

import 'nprogress/nprogress.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import GlobalStyles from 'styles/global'

// @ts-ignore
function App({ Component, pageProps, messages, router }: AppProps) {
  return (
    <>
      <NextIntlProvider messages={{ ...messages, ...pageProps.messages }}>
        <Head>
          <title>Floresta.TV • Movimento em serviço da Floresta.</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          {/* @ts-ignore */}
          <link rel="og:image" itemProp="image" content="/img/og-image.png" />
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
      </NextIntlProvider>
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

App.getInitialProps = async function getInitialProps(context: AppContext) {
  const { locale } = context.router
  return {
    ...(await NextApp.getInitialProps(context)),
    messages: {
      ...require(`../../contents/common/${locale}.json`),
      ...require(`../../contents/index/${locale}.json`),
      ...require(`../../contents/equipe/${locale}.json`),
      ...require(`../../contents/contato/${locale}.json`),
      ...require(`../../contents/voluntareer/${locale}.json`)
    }
  }
}

export default App
