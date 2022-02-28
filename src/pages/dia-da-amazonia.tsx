import DiaDaAmazoniaTemplate from 'templates/dia-da-amazonia'
import { GetStaticProps } from 'next'

import client from 'graphql/client'
import { GET_PAGE_DIA_DA_AMAZONIA } from 'graphql/queries/pages'

const PageDiaDaAmazonia = ({ content }) => {
  return <DiaDaAmazoniaTemplate content={content} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { paginaDiaDaAmazonia } = await client.request(
    GET_PAGE_DIA_DA_AMAZONIA,
    {
      locale
    }
  )

  return {
    props: {
      content: paginaDiaDaAmazonia
    }
  }
}

export default PageDiaDaAmazonia
