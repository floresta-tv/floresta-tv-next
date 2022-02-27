import OUltimoRecursoTemplate from 'templates/o-ultimo-recurso'
import { GetStaticProps } from 'next'

import client from 'graphql/client'
import { GET_PAGE_O_ULTIMO_RECURSO } from 'graphql/queries/pages'

const OUltimoRecurso = ({ content }) => {
  return <OUltimoRecursoTemplate content={content} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { pageUltimoRecurso } = await client.request(
    GET_PAGE_O_ULTIMO_RECURSO,
    {
      locale
    }
  )

  return {
    props: {
      content: pageUltimoRecurso
    }
  }
}

export default OUltimoRecurso
