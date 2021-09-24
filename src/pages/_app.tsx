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
          <meta
            name="description"
            content="O movimento coletivo Floresta TV partiu de um pedido dos próprios Povos Originários do mundo em ter autonomia para registrar, compartilhar e ampliar milhares de anos de cultura e sabedoria."
          />
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          {/* @ts-ignore */}
          <meta
            property="og:image"
            content="https://www.floresta.tv/img/logo-floresta.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta
            property="og:title"
            content="Floresta.TV | Movimento em serviço da Floresta."
          />
          <meta
            property="og:description"
            content="O movimento coletivo Floresta TV partiu de um pedido dos próprios Povos Originários do mundo em ter autonomia para registrar, compartilhar e ampliar milhares de anos de cultura e sabedoria."
          />
          <meta property="og:url" content="https://www.floresta.tv" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Floresta.TV" />
          <meta name="twitter:image:alt" content="Floresta.TV" />
          <meta name="twitter:site" content="@florestatv" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#149A41" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Floresta.TV" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Floresta.TV" />
          <meta
            name="description"
            content="O movimento coletivo Floresta TV partiu de um pedido dos próprios Povos Originários do mundo em ter autonomia para registrar, compartilhar e ampliar milhares de anos de cultura e sabedoria."
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
      ...require(`../../contents/banners/${locale}.json`),
      ...require(`../../contents/a-voz-da-floresta/${locale}.json`),
      ...require(`../../contents/o-ultimo-recurso/${locale}.json`),
      ...require(`../../contents/marco-ancestral/${locale}.json`),
      ...require(`../../contents/dia-da-amazonia/${locale}.json`),
      ...require(`../../contents/marcha-mulheres-indigenas/${locale}.json`),
      ...require(`../../contents/equipe/${locale}.json`),
      ...require(`../../contents/contato/${locale}.json`),
      ...require(`../../contents/voluntareer/${locale}.json`),
      ...require(`../../contents/projetos/${locale}.json`)
    }
  }
}

export default App
