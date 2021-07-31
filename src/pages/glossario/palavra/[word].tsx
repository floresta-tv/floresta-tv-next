import BlogRelated from 'components/BlogRelated'
import * as T from 'templates/glossario'

export default function Home() {
  return (
    <>
      <T.Header />
      <T.Testimonial />
      <T.Menu
        selectedWord={{
          word: 'Acionista',
          description: 'Latim actio, -onis, ação + -ista)'
        }}
      />
      <T.Result />
      <BlogRelated />
    </>
  )
}
