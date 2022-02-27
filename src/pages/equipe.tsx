import { GetStaticProps } from 'next'

import client from 'graphql/client'
import { GET_PAGE_EQUIPE } from 'graphql/queries/pages'

import EquipeTemplate from 'templates/equipe'

const EquipePage = ({ content }) => {
  return <EquipeTemplate content={content} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { paginaEquipe } = await client.request(GET_PAGE_EQUIPE, {
    locale
  })

  return {
    props: {
      content: paginaEquipe
    }
  }
}

export default EquipePage
