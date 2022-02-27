import { gql } from 'graphql-request'

export const GET_ARTICLES = gql`
  query GET_ARTICLES($locale: String) {
    pageBlog(locale: $locale) {
      title
      subtitle
      search_input_text
      SEO {
        title
        description
        keywords
      }
    }
    articles(locale: $locale) {
      id
      title
      image {
        url
      }
      slug
      date
      description
      author {
        name
      }
    }
  }
`

export const GET_ARTICLE_BY_SLUG = gql`
  query getArticleBySlug($slug: String!, $locale: String) {
    articles(where: { slug: $slug }, locale: $locale) {
      id
      title
      body
      image {
        url
        width
        height
      }
      slug
      date
      description
      author {
        name
        image {
          url
        }
        ocuppation
        description
        medium_url
        facebook_url
        twitter_url
        website_url
        instagram_url
      }
    }
  }
`
