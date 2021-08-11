const REQUEST_URL = `https://agenciawebsorocaba.com.br/meuportfolio_api/public/api`

export const getBlogFeatured = async () => {
  const fetchUrl = REQUEST_URL + '/posts-featured'

  const response = await fetch(fetchUrl)
  const data = await response.json()
  const { posts } = data

  return { posts }
}

export const getBlogRecent = async () => {
  const fetchUrl = REQUEST_URL + '/posts'

  const response = await fetch(fetchUrl)
  const data = await response.json()
  const { posts } = data

  return { posts }
}

export const getBlogPost = async (slug: string) => {
  const fetchUrl = REQUEST_URL + '/post-slug/' + slug
  const response = await fetch(fetchUrl)
  const data = await response.json()
  const { posts } = data

  return {
    post: posts[0]
  }
}

export const getRelatedPosts = async (slug: string) => {
  const fetchUrl = REQUEST_URL + '/post-related/' + slug
  console.log(fetchUrl)
  const response = await fetch(fetchUrl)
  const data = await response.json()
  const { posts } = data

  return {
    posts
  }
}
