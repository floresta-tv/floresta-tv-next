import Image from 'next/image'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import Footer from 'components/Footer'
import { PProjetosT } from 'types/pages'
import LanguagesButton from 'components/Navbar/LanguagesButton'

import * as animations from './animations'
import * as S from './styles'
import { Container } from 'components/UI'
import { Col, Row } from 'react-bootstrap'

type ProjetosTemplateProps = {
  content: PProjetosT
}

const ProjetosTemplate = ({ content }: ProjetosTemplateProps) => {
  return (
    <>
      {content && (
        <motion.div key={6} {...animations.wrapper}>
          <LanguagesButton />
          <S.Wrapper>
            <Head>
              <title>Nossos projetos | Floresta.TV</title>
            </Head>
            <S.Header>
              <Container>
                <>
                  <h1 className="title">{content.PageHeader.title}</h1>
                  <p>{content.PageHeader.description}</p>
                </>
              </Container>
            </S.Header>
            <Element name="home">
              <S.ContentWrapper>
                <Container>
                  <Row style={{ justifyContent: 'center' }}>
                    {content.ProjetoCard.map((projeto) => (
                      <Col key={projeto.id} lg={12}>
                        <S.ProjetoWrapper>
                          <S.ProjetoIcon bgc={projeto.color_primary}>
                            <Image
                              placeholder="blur"
                              blurDataURL={projeto.image.url}
                              src={projeto.image.url}
                              width={300}
                              height={300}
                              alt="Logo Floresta TV"
                            />
                          </S.ProjetoIcon>
                          <S.ProjetoCaption bgc={projeto.color_secondary}>
                            <h2>{projeto.title}</h2>
                            <p>{projeto.description}</p>
                          </S.ProjetoCaption>
                        </S.ProjetoWrapper>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </S.ContentWrapper>
            </Element>
          </S.Wrapper>
          <Footer
            links={content.footer_links.map((item) => {
              return {
                to: item.target,
                label: item.label
              }
            })}
          />
        </motion.div>
      )}
    </>
  )
}

export default ProjetosTemplate
