import { GetStaticProps } from 'next'

import client from 'graphql/client'
import { GET_PAGE_MARCO_ANCESTRAL } from 'graphql/queries/pages'

import MarcoAncestralTemplate from 'templates/marco-ancestral'

const MarcoAncestral = ({ content }) => {
  return <MarcoAncestralTemplate content={content} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { paginaMarcoTemporal } = await client.request(
    GET_PAGE_MARCO_ANCESTRAL,
    {
      locale
    }
  )

  return {
    props: {
      content: paginaMarcoTemporal
    }
  }
}

export default MarcoAncestral
