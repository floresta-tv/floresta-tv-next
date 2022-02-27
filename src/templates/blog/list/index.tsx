import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import Footer from 'components/Footer'

import { Container } from 'components/UI'
import { Flex, Box } from 'rebass'
import ArticleSmall from 'components/UI/ArticleSmall'
import { ArticleT } from 'types/blog'
import SEO from 'components/UI/SEO'
import LanguagesButton from 'components/Navbar/LanguagesButton'

import * as S from './styles'
import * as animations from './animations'
import { Search } from '@styled-icons/heroicons-outline'

type BlogListTemplateProps = {
  title: string
  description: string
  search_input_text: string
  SEOContent: {
    title: string
    description: string
  }
  articles: ArticleT[]
}

const BlogListTemplate = ({
  articles,
  title,
  description,
  search_input_text,
  SEOContent
}: BlogListTemplateProps) => {
  const [currentValue, setCurrentValue] = useState('')
  const [currentArticles, setCurrentArticles] = useState(articles)

  useEffect(() => {
    setCurrentArticles(articles)
    setCurrentValue('')
  }, [articles])

  const onInputChangeHandler = (value) => {
    if (value !== '') {
      const newArticles = getArticlesByValue(value)
      setCurrentValue(value)
      setCurrentArticles(newArticles)
    } else {
      setCurrentValue(value)
      setCurrentArticles(articles)
    }
  }

  const escapeRegExp = (str: string) => {
    if (typeof str !== 'string') {
      return ''
    }
    //eslint-disable-next-line
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
  }

  const getArticlesByValue = (value: string) => {
    const inputValue = escapeRegExp(
      value.trim().toLowerCase().replace(/\s/g, '')
    )
    const inputLength = inputValue.length

    return inputLength === 0
      ? []
      : articles.filter((opt) => {
          const optValue = escapeRegExp(
            opt.title.toLowerCase().replace(/\s/g, '') +
              opt.description.toLowerCase().replace(/\s/g, '')
          )
          return optValue.search(inputValue) !== -1
        })
  }

  return (
    <motion.div key={3} {...animations.wrapper}>
      <LanguagesButton />
      <SEO title={SEOContent.title} description={SEOContent.description} />

      <S.Wrapper>
        <S.Header>
          <Container>
            <>
              <h1 className="title">{title}</h1>
              <p>{description}</p>
            </>
          </Container>
        </S.Header>
        <Element name="blog">
          <S.ContentWrapper>
            <Container>
              <>
                <S.FilterInputWrapper>
                  <Search size={20} color={`#000`} className={`icon`} />
                  <input
                    onChange={(e) => onInputChangeHandler(e.target.value)}
                    value={currentValue}
                    placeholder={search_input_text}
                  />
                </S.FilterInputWrapper>
                <Flex
                  style={{ justifyContent: 'flex-start' }}
                  flexWrap={`wrap`}
                >
                  {currentArticles.length > 0 ? (
                    currentArticles.map(
                      ({ date, description, image, title, slug, author }) => (
                        <Box key={slug} width={[1, 0.33]} p={2}>
                          <ArticleSmall
                            date={date}
                            author={author}
                            img={image.url}
                            title={title}
                            description={description}
                            slug={`/blog/${slug}`}
                          />
                        </Box>
                      )
                    )
                  ) : (
                    <h3
                      className="title"
                      style={{ color: `#fff`, textAlign: `center` }}
                    >
                      Nenhuma notícia encontrada.
                    </h3>
                  )}
                </Flex>
              </>
            </Container>
          </S.ContentWrapper>
        </Element>
      </S.Wrapper>
    </motion.div>
  )
}

export default BlogListTemplate
