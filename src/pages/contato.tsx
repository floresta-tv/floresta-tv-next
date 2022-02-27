import { GetStaticProps } from 'next'

import client from 'graphql/client'
import { GET_PAGE_CONTATO } from 'graphql/queries/pages'

import ContatoTemplate from 'templates/seja-um-voluntario'

const ContatoPage = ({ content }) => {
  return <ContatoTemplate content={content} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { paginaContato } = await client.request(GET_PAGE_CONTATO, {
    locale
  })

  return {
    props: {
      content: paginaContato
    }
  }
}

export default ContatoPage
