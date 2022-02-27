import { GetStaticPaths, GetStaticProps } from 'next'

import client from 'graphql/client'
import { GET_ARTICLES, GET_ARTICLE_BY_SLUG } from 'graphql/queries/articles'

import BlogTemplate from 'templates/blog/item'

const BlogPage = ({ article }) => {
  return article ? <BlogTemplate article={article} /> : <div></div>
}

export default BlogPage

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const { articles } = await client.request(GET_ARTICLES)
  const paths = []

  articles.forEach(({ slug }) => [
    // if no `locale` is provided only the defaultLocale will be generated
    locales.forEach((locale) => {
      paths.push({ params: { slug: slug }, locale: locale })
    })
  ])

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { articles } = await client.request(GET_ARTICLE_BY_SLUG, {
    slug: params.slug,
    locale
  })

  if (articles[0] == undefined) return { notFound: true }

  return {
    props: {
      article: articles[0]
    }
  }
}
