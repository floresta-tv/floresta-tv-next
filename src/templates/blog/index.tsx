import Image from 'next/image'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { useTranslations } from 'next-intl'
import Footer from 'components/Footer'

import * as animations from './animations'
import * as S from './styles'
import { Container } from 'components/UI'
import { Col, Row } from 'react-bootstrap'
import BlogItem from 'components/BlogItem'

const BlogTemplate = () => {
  const t = useTranslations('Blog')
  return (
    <motion.div key={6} {...animations.wrapper}>
      <S.Wrapper>
        <Head>
          <title>Blog | Floresta.TV</title>
        </Head>
        <S.Header>
          <Container>
            <>
              <h1 className="title">BLOG</h1>
              <p>Acompanhe a Floresta pelo mundo na íntegra em tempo real.</p>
            </>
          </Container>
        </S.Header>
        <Element name="blog">
          <S.ContentWrapper>
            <Container>
              <Row style={{ justifyContent: 'flex-start' }}>
                <Col lg={4}>
                  <BlogItem
                    date={`00/00/00`}
                    img={
                      'https://tech.floresta.tv/_next/image?url=%2Fimg%2Fmulheres_indigenas_em_brasilia_segurando_velas_banner.png&w=1920&q=75'
                    }
                    title={`aaaaaa`}
                    description={`aaaaaa`}
                    slug={`/blog/aaa`}
                  />
                </Col>
              </Row>
            </Container>
          </S.ContentWrapper>
        </Element>
      </S.Wrapper>
      <Footer
        links={[
          {
            label: t.raw('footer-links.link1'),
            to: 'blog'
          }
        ]}
      />
    </motion.div>
  )
}

export default BlogTemplate
