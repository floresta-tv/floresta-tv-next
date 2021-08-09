import { Container } from 'components/UI'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MediaQuery from 'react-responsive'
import Slick from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'

import * as S from './styles'
import * as animations from './animations'

const OneTemplate = () => {
  const slickConfig = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoHeight: true,
    adaptiveHeight: true
  }

  return (
    <motion.div key={1} {...animations.wrapperFade}>
      <S.Wrapper>
        <Container position="relative">
          <S.Content>
            <S.HeroWrapper>
              <motion.div key={1} {...animations.wrapper}>
                <div className="ico">
                  <h1>One</h1>
                  <motion.div key={1023} {...animations.rotate}>
                    <Image
                      placeholder="blur"
                      src="/img/one-icon.png"
                      blurDataURL="/img/one-icon.png"
                      width={240}
                      height={240}
                    />
                  </motion.div>
                  <h2>
                    Tão amigável quanto é poderoso para unificar seus
                    investimentos.
                  </h2>
                </div>

                <div className="shape">
                  <Image
                    placeholder="blur"
                    src="/img/one-shape.png"
                    blurDataURL="/img/one-shape.png"
                    width={1300}
                    height={1100}
                  />
                </div>
              </motion.div>
            </S.HeroWrapper>
            <S.Body>
              <motion.div key={1} {...animations.wrapper}>
                <MediaQuery minWidth={768}>
                  <h3>Cadastros</h3>
                  <p style={{ maxWidth: '450px' }}>
                    Suporte para cadastro de qualquer tipo de ativo além de
                    integrações com os maiores provedores de dados de ativos do
                    mercado.
                  </p>
                  <h3>Segurança</h3>
                  <p style={{ maxWidth: '590px' }}>
                    Tenha a confiança necessária para executar seu negócio com
                    segurança no ambiente de computação em nuvem mais flexível e
                    seguro disponível atualmente.
                  </p>
                  <h3>Dashboard &amp; Relatórios</h3>
                  <p style={{ maxWidth: '720px' }}>
                    Em nossos relatórios os dados são convertidos em informação,
                    aumentando a previsibilidade e impulsionando retornos
                    financeiros.
                  </p>
                  <h3>Alta disponibilidade</h3>
                  <p style={{ maxWidth: '720px' }}>
                    Aproveite a liberdade, nossa aplicação está hospedada dentro
                    de um dos maiores provedores de serviço em nuvem do mundo e
                    pode ser acessada de qualquer lugar.
                  </p>
                  <h3>Consolidação</h3>
                  <p style={{ maxWidth: '720px' }}>
                    Visão consolidada dos portfólios, com cálculos de impostos e
                    todos os ajustes necessários para apresentar a história
                    financeira do seu cliente.
                  </p>

                  <div className="mockup-caption">
                    <h3>Interface amigável </h3>
                    <p>
                      As interfaces do One foram construídas com o intuito de
                      trazer facilidade no uso de suas funcionalidades:
                    </p>
                  </div>
                  <div className="mockup-img">
                    <Image
                      placeholder="blur"
                      src="/img/one-mockup.png"
                      blurDataURL="/img/one-mockup.png"
                      width={595}
                      height={375}
                    />
                  </div>
                </MediaQuery>
                <MediaQuery maxWidth={767}>
                  <S.BodyCarouselWrapper>
                    <Slick {...slickConfig}>
                      <S.BodyCarouselItem>
                        <h3>Cadastros</h3>
                        <p style={{ maxWidth: '450px' }}>
                          Suporte para cadastro de qualquer tipo de ativo além
                          de integrações com os maiores provedores de dados de
                          ativos do mercado.
                        </p>
                      </S.BodyCarouselItem>
                      <S.BodyCarouselItem>
                        <h3>Segurança</h3>
                        <p style={{ maxWidth: '590px' }}>
                          Tenha a confiança necessária para executar seu negócio
                          com segurança no ambiente de computação em nuvem mais
                          flexível e seguro disponível atualmente.
                        </p>
                      </S.BodyCarouselItem>
                      <S.BodyCarouselItem>
                        <h3>Dashboard &amp; Relatórios</h3>
                        <p style={{ maxWidth: '720px' }}>
                          Em nossos relatórios os dados são convertidos em
                          informação, aumentando a previsibilidade e
                          impulsionando retornos financeiros.
                        </p>
                      </S.BodyCarouselItem>
                      <S.BodyCarouselItem>
                        <h3>Alta disponibilidade</h3>
                        <p style={{ maxWidth: '720px' }}>
                          Aproveite a liberdade, nossa aplicação está hospedada
                          dentro de um dos maiores provedores de serviço em
                          nuvem do mundo e pode ser acessada de qualquer lugar.
                        </p>
                      </S.BodyCarouselItem>
                      <S.BodyCarouselItem>
                        <h3>Consolidação</h3>
                        <p style={{ maxWidth: '720px' }}>
                          Visão consolidada dos portfólios, com cálculos de
                          impostos e todos os ajustes necessários para
                          apresentar a história financeira do seu cliente.
                        </p>
                      </S.BodyCarouselItem>
                    </Slick>
                  </S.BodyCarouselWrapper>
                  <div className="mockup-caption">
                    <h3>Interface amigável </h3>
                    <p>
                      As interfaces do One foram construídas com o intuito de
                      trazer facilidade no uso de suas funcionalidades:
                    </p>
                  </div>
                </MediaQuery>
              </motion.div>
            </S.Body>
          </S.Content>
        </Container>
      </S.Wrapper>
    </motion.div>
  )
}

export default OneTemplate
