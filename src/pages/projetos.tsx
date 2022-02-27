import { GetStaticProps } from 'next'

import client from 'graphql/client'
import { GET_PAGE_PROJETOS } from 'graphql/queries/pages'

import ProjetosTemplate from 'templates/projetos'

const ProjetosPage = ({ content }) => {
  return <ProjetosTemplate content={content} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { pageProjeto } = await client.request(GET_PAGE_PROJETOS, {
    locale
  })

  return {
    props: {
      content: pageProjeto
    }
  }
}

export default ProjetosPage
