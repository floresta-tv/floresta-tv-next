import { GetServerSideProps } from 'next'
import BlogRelated from 'components/BlogRelated'
import * as T from 'templates/glossario'
import { useRouter } from 'next/dist/client/router'
import { getWordBySlug } from 'services/glossario'
import { GlossarioWord } from 'types/glossario'

type PageGlossarioWordProps = {
  word: GlossarioWord
}

export default function PageGlossarioWord({ word }: PageGlossarioWordProps) {
  const router = useRouter()

  // retorna um loading, qq coisa enquanto tá sendo criado
  if (router.isFallback) return null

  return (
    <>
      <T.Header />
      <T.Testimonial />
      <T.Menu
        selectedWord={{
          word: word.title,
          description: ''
        }}
      />
      <T.Result word={word} />
      <BlogRelated slug={word.slug} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // @ts-ignore
  const { word }: GlossarioWord[] = await getWordBySlug(params.word)

  if (!word) return { notFound: true }

  return {
    props: {
      word
    }
  }
}
