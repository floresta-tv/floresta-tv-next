import { AuthorT } from './author'

export type ArticleT = {
  id: number
  title: string
  description: string
  body: string
  image: {
    url: string
    width?: string
    height?: string
  }
  date: string
  slug: string
  author: AuthorT
}
