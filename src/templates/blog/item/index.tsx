import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { Link as ScrollLink } from 'react-scroll'
import { useTranslations } from 'next-intl'

import DisqusBox from 'components/DisqusBox'
import ShareList from 'components/UI/ShareList'
import { ChevronDoubleDown, ChevronDoubleLeft } from '@styled-icons/bootstrap'
import { Container } from 'components/UI'
import { ArticleT } from 'types/blog'
import SEO from 'components/UI/SEO'
import InfoCard from 'components/UI/InfoCard'

import * as animations from './animations'
import * as S from './styles'
import LanguagesButton from 'components/Navbar/LanguagesButton'
import Footer from 'components/Footer'

type BlogItemTemplateProps = {
  article: ArticleT
}
const BlogItemTemplate = ({ article }: BlogItemTemplateProps) => {
  const t = useTranslations('misc')

  return (
    <motion.div key={2} {...animations.wrapper}>
      <SEO
        title={article.title}
        description={article.description}
        image={article.image.url}
      />

      <LanguagesButton disabled={true} />
      <S.Wrapper>
        <Element name="home">
          <S.Header>
            <Container>
              <>
                <Link passHref={true} href="/blog">
                  <span className="back">
                    <ChevronDoubleLeft size={15} /> {t.raw('back_text')} Blog
                  </span>
                </Link>
                <p className="date">
                  {t.raw('published_at_text')} {article.date}{' '}
                  {article.author &&
                    `• ${t.raw('by_text')} ${article.author.name}`}
                </p>
                <h1 className="title">{article.title}</h1>
                <ShareList
                  url={`https://marchapelamazonia.org/blog/${article.slug}`}
                />
                <p className="desc">
                  {article.description}
                  <ScrollLink to="article-body">
                    <span className="more">
                      {t.raw('continue_reading_text')}{' '}
                      <ChevronDoubleDown size={15} />
                    </span>
                  </ScrollLink>
                </p>
                <div className="image">
                  <Image
                    placeholder="blur"
                    blurDataURL={article.image.url}
                    width={article.image.width}
                    height={article.image.height}
                    src={article.image.url}
                    alt={article.title}
                  />
                </div>
              </>
            </Container>
          </S.Header>

          <Element name="article-body">
            <Container>
              <S.Body
                dangerouslySetInnerHTML={{ __html: article.body }}
              ></S.Body>
            </Container>
          </Element>
        </Element>

        <Container>
          <>
            {article.author && (
              <section style={{ padding: '40px 0' }}>
                <InfoCard
                  label={t.raw('writted_by_text')}
                  image={article.author.image.url}
                  title={<span>{article.author.name}</span>}
                  subtitle={<span>{article.author.ocuppation}</span>}
                  desc={<span>{article.author.description}</span>}
                  social={{
                    medium: article.author.medium_url,
                    facebook: article.author.facebook_url,
                    instagram: article.author.instagram_url,
                    website: article.author.website_url,
                    twitter: article.author.twitter_url
                  }}
                />
              </section>
            )}

            <DisqusBox
              category={``}
              url={`/blog/${article.slug}`}
              title={article.title}
            ></DisqusBox>
          </>
        </Container>
      </S.Wrapper>
    </motion.div>
  )
}

export default BlogItemTemplate
