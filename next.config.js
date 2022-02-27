// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})

// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'pt', 'fr', 'es'],
    defaultLocale: 'pt',
    pages: {
      '*': ['common'],
      '/': ['home'],
      '/contato': ['about'],
      '/equipe': ['equipe'],
      '/seja-um-voluntario': ['seja-um-voluntario']
    }
  },
  images: {
    domains: ['floresta.tv', 'floresta-tv-api.s3.us-east-2.amazonaws.com']
  }
}
