// @ts-ignore
import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields = []

  fields.push(
    {
      loc: 'https://floresta.tv',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://floresta.tv/equipe',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://floresta.tv/contato',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://floresta.tv/seja-um-voluntario',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://floresta.tv/urucum-na-bandeira',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://floresta.tv/o-ultimo-recurso',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://floresta.tv/marcha-mulheres-indigenas',
      lastmod: new Date().toISOString()
    }
  )

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {}
