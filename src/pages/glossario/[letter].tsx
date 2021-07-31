import { GetServerSideProps } from 'next'
import * as T from 'templates/glossario'

type PageGlossarioProps = {
  letter: string
}

export default function Glossario({ letter }: PageGlossarioProps) {
  return (
    <>
      <T.Header />
      <T.Testimonial />
      <T.Menu selectedLetter={letter} />
      <T.Results />
    </>
  )
}

export async function getStaticPaths() {
  const alphabet = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.split(
    ','
  )
  const paths = alphabet.map((letter) => ({
    params: { letter }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      letter: params?.letter
    }
  }
}
