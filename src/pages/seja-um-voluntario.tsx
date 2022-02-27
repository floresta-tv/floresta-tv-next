import { GetStaticProps } from 'next'

import client from 'graphql/client'
import { GET_PAGE_VOLUNTARIADO } from 'graphql/queries/pages'

import SejaUmVoluntarioTemplate from 'templates/seja-um-voluntario'

const SejaUmVoluntarioPage = ({ content }) => {
  return <SejaUmVoluntarioTemplate content={content} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { paginaVoluntariado } = await client.request(GET_PAGE_VOLUNTARIADO, {
    locale
  })

  return {
    props: {
      content: paginaVoluntariado
    }
  }
}

export default SejaUmVoluntarioPage
