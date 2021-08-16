import { useEffect } from 'react'
import { scroller } from 'react-scroll'
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

  useEffect(() => {
    // @ts-ignore
    const shouldScroll = router.query.scroll === 'true'

    if (shouldScroll) {
      scroller.scrollTo('glossario', {
        duration: 500,
        offset: window.innerWidth > 768 ? 100 : 400,
        smooth: true
      })
    }
  }, [word]) // eslint-disable-line react-hooks/exhaustive-deps

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
