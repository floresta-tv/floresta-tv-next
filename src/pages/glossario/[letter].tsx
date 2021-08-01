import { GetServerSideProps } from 'next'
import * as T from 'templates/glossario'

type PageGlossarioLetterProps = {
  letter: string
}

export default function GlossarioLetter({ letter }: PageGlossarioLetterProps) {
  return (
    <>
      <T.Header />
      <T.Testimonial />
      <T.Menu selectedLetter={letter} />
      <T.Results />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      letter: params?.letter
    }
  }
}
