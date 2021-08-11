import { motion } from 'framer-motion'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { getWordsByLetter } from 'services/glossario'
import { GlossarioWord } from 'types/glossario'

import * as T from 'templates/glossario'
import * as animations from 'templates/glossario/animations'

type PageGlossarioLetterProps = {
  letter: string
  words: GlossarioWord[]
}

export default function PageGlossarioLetter({
  words,
  letter
}: PageGlossarioLetterProps) {
  const router = useRouter()

  // retorna um loading, qq coisa enquanto tá sendo criado
  if (router.isFallback) return null

  return (
    <motion.div {...animations.wrapper}>
      <T.Header />
      <T.Testimonial />
      <T.Menu selectedLetter={letter} />
      <T.Results words={words} />
    </motion.div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // @ts-ignore
  const { words }: GlossarioWord[] = await getWordsByLetter(params.letter)

  if (!words) return { notFound: true }

  return {
    props: {
      letter: params?.letter,
      words
    }
  }
}
