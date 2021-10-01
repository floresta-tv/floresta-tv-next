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

const Projetos = () => {
  const t = useTranslations('Projetos')
  return (
    <motion.div key={6} {...animations.wrapper}>
      <S.Wrapper>
        <Head>
          <title>Nossos projetos | Floresta.TV</title>
        </Head>
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
                <Col lg={12}>
                  <S.ProjetoWrapper>
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
                    <S.ProjetoCaption bgc={`#a5cf9d`}>
                      <h2>Floresta.TV</h2>
                      <p>
                        O movimento coletivo Floresta TV partiu de um pedido dos
                        próprios Povos Originários do mundo em ter autonomia
                        para registrar, compartilhar e ampliar milhares de anos
                        de cultura e sabedoria altamente sustentável,
                        integrativa, coletiva e pacífica com o mundo digital
                        binário.
                      </p>
                    </S.ProjetoCaption>
                  </S.ProjetoWrapper>
                </Col>
                <Col lg={12}>
                  <S.ProjetoWrapper>
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
                    <S.ProjetoCaption bgc={`#dfa6a6`}>
                      <h2>Floresta Coin</h2>
                      <p>
                        Floresta Coin é a moeda da floresta. Se trata de uma
                        criptomoeda dos e para os povos nativos, trazendo sua
                        independência e valorização cultural.
                      </p>
                    </S.ProjetoCaption>
                  </S.ProjetoWrapper>
                </Col>

                <Col lg={12}>
                  <S.ProjetoWrapper>
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
                    <S.ProjetoCaption bgc={`#b6dda2`}>
                      <h2>Floresta Wiki</h2>
                      <p>
                        Floresta Wiki é a enciclopédia digital da floresta. A
                        ideia é trazer o máximo possível de conhecimentos e
                        sabedorias destes povos e trazer esse conteúdo para uma
                        plataforma dinâmica, fluída, bonita e intuitiva por meio
                        de uma aplicação WEB.
                      </p>
                    </S.ProjetoCaption>
                  </S.ProjetoWrapper>
                </Col>

                <Col lg={12}>
                  <S.ProjetoWrapper>
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
                    <S.ProjetoCaption bgc={`#82aed1`}>
                      <h2>Floresta NFTMarketplace</h2>
                      <p>
                        Floresta NFTMarketplace é a loja/acervo NFT da floresta.
                        Se trata de um portal de venda de NFTs (o futuro do
                        mercado das obras digitais). Esse portal vem para
                        valorizar as propriedades de música, artes ou qualquer
                        outro tipo de conteúdo artístico ou intelectual dos
                        povos nativos que esteja presente no mundo digital.
                      </p>
                    </S.ProjetoCaption>
                  </S.ProjetoWrapper>
                </Col>

                <Col lg={12}>
                  <S.ProjetoWrapper>
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
                    <S.ProjetoCaption bgc={`#a6f3b3`}>
                      <h2>Floresta Maps</h2>
                      <p>
                        Floresta Maps é o sistema de mapeamento da(s)
                        floresta(s).
                      </p>
                    </S.ProjetoCaption>
                  </S.ProjetoWrapper>
                </Col>

                <Col lg={12}>
                  <S.ProjetoWrapper>
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
                    <S.ProjetoCaption bgc={`#e0d69e`}>
                      <h2>Floresta Network</h2>
                      <p>
                        Floresta Network é a rede social da floresta. Se trata
                        de um portal digital para conexão entre os povos nativos
                        e entre o mundo exterior e os próprios povos. A intenção
                        é uma rede focada em compartilhar informações voltadas
                        ao movimento dos povos nativos.
                      </p>
                    </S.ProjetoCaption>
                  </S.ProjetoWrapper>
                </Col>

                <Col lg={12}>
                  <S.ProjetoWrapper>
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
                    <S.ProjetoCaption bgc={`#abeaec`}>
                      <h2>Floresta MarketPlace</h2>
                    </S.ProjetoCaption>
                  </S.ProjetoWrapper>
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
