import { GetServerSideProps } from 'next'
import BlogRelated from 'components/BlogRelated'
import * as T from 'templates/glossario'

type PageGlossarioWordProps = {
  word: string
}

export default function GlossarioWord({ word }: PageGlossarioWordProps) {
  return (
    <>
      <T.Header />
      <T.Testimonial />
      <T.Menu
        selectedWord={{
          word: word,
          description: 'Latim: actio, -onis, ação + -ista'
        }}
      />
      <T.Result />
      <BlogRelated />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      word: params?.word
    }
  }
}
