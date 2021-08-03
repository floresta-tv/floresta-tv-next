import { motion } from 'framer-motion'
import { GetServerSideProps } from 'next'
import * as T from 'templates/glossario'
import * as animations from 'templates/glossario/animations'

type PageGlossarioLetterProps = {
  letter: string
}

export default function GlossarioLetter({ letter }: PageGlossarioLetterProps) {
  return (
    <motion.div {...animations.wrapper}>
      <T.Header />
      <T.Testimonial />
      <T.Menu selectedLetter={letter} />
      <T.Results />
    </motion.div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      letter: params?.letter
    }
  }
}
