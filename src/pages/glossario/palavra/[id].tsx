import BlogRelated from 'components/BlogRelated'
import * as T from 'templates/glossario'

export default function Home() {
  return (
    <>
      <T.Header />
      <T.Testimonial />
      <T.Menu />
      <T.Result />

      <BlogRelated />
    </>
  )
}
