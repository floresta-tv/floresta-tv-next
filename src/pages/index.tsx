import { GetStaticProps } from 'next'

import client from 'graphql/client'
import { GET_PAGE_VOZ_DA_FLORESTA } from 'graphql/queries/pages'

import VozDaFlorestaTemplate from 'templates/a-voz-da-floresta'

const Home = ({ content }) => {
  return <VozDaFlorestaTemplate content={content} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { paginaAVozDaFloresta } = await client.request(
    GET_PAGE_VOZ_DA_FLORESTA,
    {
      locale
    }
  )

  return {
    props: {
      content: paginaAVozDaFloresta
    }
  }
}

export default Home
