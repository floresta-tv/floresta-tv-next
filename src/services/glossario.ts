const REQUEST_URL = `https://agenciawebsorocaba.com.br/meuportfolio_api/public/api`

export const getWordsByLetter = async (letter: string) => {
  const fetchUrl =
    REQUEST_URL +
    '/glossario?' +
    new URLSearchParams({
      letter: letter.toLocaleUpperCase()
    })
  const response = await fetch(fetchUrl)
  const data = await response.json()
  const words = Object.keys(data.glossario).map(function (key) {
    return { ...data.glossario[key] }
  })

  return {
    words
  }
}

export const getWordBySlug = async (slug: string) => {
  const fetchUrl = REQUEST_URL + '/glossario/' + slug
  const response = await fetch(fetchUrl)
  const data = await response.json()
  const word = data.glossario

  return {
    word
  }
}
