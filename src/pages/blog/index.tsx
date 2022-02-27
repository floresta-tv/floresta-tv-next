import { GetStaticProps } from 'next'

import client from 'graphql/client'
import { GET_ARTICLES } from 'graphql/queries/articles'

import BlogTemplate from 'templates/blog/list'

const BlogPage = ({ articles, pageBlog }) => {
  return (
    <BlogTemplate
      title={pageBlog.title}
      description={pageBlog.subtitle}
      articles={articles}
      search_input_text={pageBlog.search_input_text}
      SEOContent={pageBlog.SEO}
    />
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { articles, pageBlog } = await client.request(GET_ARTICLES, {
    locale
  })

  return {
    props: {
      articles,
      pageBlog
    }
  }
}

export default BlogPage
