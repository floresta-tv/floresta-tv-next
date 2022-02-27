import { GetStaticProps } from 'next'

import client from 'graphql/client'
import { GET_PAGE_MARCHA_MULHERES_INDIGENAS } from 'graphql/queries/pages'

import MarchaMulheresIndigenasTemplate from 'templates/marcha-mulheres-indigenas'

const MarchaMulheresIndigenasPage = ({ content }) => {
  return <MarchaMulheresIndigenasTemplate content={content} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { paginaMarchaMulheresIndigena } = await client.request(
    GET_PAGE_MARCHA_MULHERES_INDIGENAS,
    {
      locale
    }
  )

  return {
    props: {
      content: paginaMarchaMulheresIndigena
    }
  }
}

export default MarchaMulheresIndigenasPage
