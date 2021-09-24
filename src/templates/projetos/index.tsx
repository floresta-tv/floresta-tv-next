import Image from 'next/image'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { useTranslations } from 'next-intl'
import Footer from 'components/Footer'

import * as animations from './animations'
import * as S from './styles'
import { Container } from 'components/UI'
import { Col, Row } from 'react-bootstrap'

const Projetos = () => {
  const t = useTranslations('Projetos')
  return (
    <motion.div key={6} {...animations.wrapper}>
      <S.Wrapper>
        <S.Header>
          <Container>
            <>
              <h1 className="title">Nossos projetos</h1>
              <p>
                Da nuvem à materalização de idéias incríveis para auxílio dos
                povos originários.
              </p>
            </>
          </Container>
        </S.Header>
        <Element name="home">
          <S.ContentWrapper>
            <Container>
              <Row style={{ justifyContent: 'center' }}>
                <Col lg={3}>
                  <S.ProjetoIcon bgc={`#2d801c`}>
                    <Image
                      placeholder="blur"
                      blurDataURL="/img/logo-florestatv-branco.png"
                      src="/img/logo-florestatv-branco.png"
                      width={300}
                      height={300}
                      alt="Logo Floresta TV"
                    />
                  </S.ProjetoIcon>
                </Col>
                <Col lg={3}>
                  <S.ProjetoIcon bgc={`#881717`}>
                    <Image
                      placeholder="blur"
                      blurDataURL="/img/floresta-coin.svg"
                      src="/img/floresta-coin.svg"
                      width={300}
                      height={300}
                      alt="Logo Floresta Coin"
                    />
                  </S.ProjetoIcon>
                </Col>

                <Col lg={3}>
                  <S.ProjetoIcon bgc={`#112905`}>
                    <Image
                      placeholder="blur"
                      blurDataURL="/img/floresta-wiki.png"
                      src="/img/floresta-wiki.png"
                      width={300}
                      height={300}
                      alt="Logo Floresta Wiki"
                    />
                  </S.ProjetoIcon>
                </Col>

                <Col lg={3}>
                  <S.ProjetoIcon bgc={`#195b91`}>
                    <Image
                      placeholder="blur"
                      blurDataURL="/img/floresta-nft.svg"
                      src="/img/floresta-nft.svg"
                      width={300}
                      height={300}
                      alt="Logo Floresta NFT"
                    />
                  </S.ProjetoIcon>
                </Col>

                <Col lg={3}>
                  <S.ProjetoIcon bgc={`#37b94c`}>
                    <Image
                      placeholder="blur"
                      blurDataURL="/img/floresta-maps.png"
                      src="/img/floresta-maps.png"
                      width={300}
                      height={300}
                      alt="Logo Floresta Maps"
                    />
                  </S.ProjetoIcon>
                </Col>

                <Col lg={3}>
                  <S.ProjetoIcon bgc={`#e4c620`}>
                    <Image
                      placeholder="blur"
                      blurDataURL="/img/floresta-network.svg"
                      src="/img/floresta-network.svg"
                      width={300}
                      height={300}
                      alt="Logo Floresta Network"
                    />
                  </S.ProjetoIcon>
                </Col>

                <Col lg={3}>
                  <S.ProjetoIcon bgc={`#13787B`}>
                    <Image
                      placeholder="blur"
                      blurDataURL="/img/floresta-market.svg"
                      src="/img/floresta-market.svg"
                      width={300}
                      height={300}
                      alt="Logo Floresta Market"
                    />
                  </S.ProjetoIcon>
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
            to: 'home'
          }
        ]}
      />
    </motion.div>
  )
}

export default Projetos
