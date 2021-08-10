import { Container } from 'components/UI'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MediaQuery from 'react-responsive'
import Slick from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'

import * as S from './styles'
import * as animations from './animations'

const BPOTemplate = () => {
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
    <motion.div key={2} {...animations.wrapperFade}>
      <S.Wrapper>
        <Container position="relative">
          <>
            <S.Content>
              <S.HeroWrapper>
                <motion.div key={2} {...animations.wrapper}>
                  <div className="ico">
                    <h1>BPO</h1>
                    <motion.div key={1025} {...animations.rotate}>
                      <MediaQuery minWidth={767}>
                        <Image
                          placeholder="blur"
                          src="/img/bpo-icon.png"
                          blurDataURL="/img/bpo-icon.png"
                          width={240}
                          height={240}
                        />
                      </MediaQuery>
                      <MediaQuery maxWidth={768}>
                        <Image
                          placeholder="blur"
                          src="/img/bpo-icon-mobile.png"
                          blurDataURL="/img/bpo-icon-mobile.png"
                          width={250}
                          height={250}
                        />
                      </MediaQuery>
                    </motion.div>
                    <h2>
                      Amplie a capacidade operacional da sua empresa com nosso
                      Business Process Outsourcing.
                    </h2>
                  </div>

                  <div className="shape">
                    <MediaQuery minWidth={768}>
                      <Image
                        placeholder="blur"
                        src="/img/bpo-shape.png"
                        blurDataURL="/img/bpo-shape.png"
                        width={1300}
                        height={1100}
                      />
                    </MediaQuery>
                    <MediaQuery maxWidth={767}>
                      <Image
                        placeholder="blur"
                        src="/img/bpo-shape-mobile.png"
                        blurDataURL="/img/bpo-shape-mobile.png"
                        width={417}
                        height={528}
                      />
                    </MediaQuery>
                  </div>
                </motion.div>
              </S.HeroWrapper>
              <S.Body>
                <motion.div key={2} {...animations.wrapper}>
                  <MediaQuery minWidth={768}>
                    <h3>Parceria</h3>
                    <p style={{ maxWidth: '420px' }}>
                      Com a expertise da nossa equipe podemos prover serviços de
                      operação de back office e de customer experience, sempre
                      com muita qualidade e agilidade.
                    </p>
                    <h3>Custo acessível</h3>
                    <p style={{ maxWidth: '450px' }}>
                      Com a Meuportfolio você pode ter um time de back office
                      disponível por um custo mais acessível se comparado com
                      manter seu próprio time dentro da sua empresa.
                    </p>
                    <h3>Segurança &amp; Sigilo</h3>
                    <p style={{ maxWidth: '450px' }}>
                      Segurança &amp; Sigilo Estamos sempre preocupados em
                      manter o sigilo das informações que nosso time tem acesso.
                      Garantimos total confidencialidade dos dados.
                    </p>

                    <div className="mockup-caption">
                      <p>
                        Nós fazemos o trabalho pesado das tarefas de input de
                        dados para permitir que nossos clientes se concentrem em
                        suas atividades essenciais e naquilo que traz inovação
                        para o seu negócio. Com um time de pessoas capacitadas,
                        tecnologia inovadora e excelência operacional, nosso BPO
                        funciona como o combustível do foguete que ajuda a
                        alimentar a nave dos nossos clientes.
                      </p>
                    </div>
                    <div className="mockup-img">
                      <Image
                        placeholder="blur"
                        src="/img/bpo-mockup.png"
                        blurDataURL="/img/bpo-mockup.png"
                        width={595}
                        height={375}
                      />
                    </div>
                  </MediaQuery>
                  <MediaQuery maxWidth={767}>
                    <S.BodyCarouselWrapper>
                      <Slick {...slickConfig}>
                        <S.BodyCarouselItem>
                          <h3>Parceria</h3>
                          <p style={{ maxWidth: '420px' }}>
                            Com a expertise da nossa equipe podemos prover
                            serviços de operação de back office e de customer
                            experience, sempre com muita qualidade e agilidade.
                          </p>
                        </S.BodyCarouselItem>
                        <S.BodyCarouselItem>
                          <h3>Custo acessível</h3>
                          <p style={{ maxWidth: '450px' }}>
                            Com a Meuportfolio você pode ter um time de back
                            office disponível por um custo mais acessível se
                            comparado com manter seu próprio time dentro da sua
                            empresa.
                          </p>
                        </S.BodyCarouselItem>
                        <S.BodyCarouselItem>
                          <h3>Segurança &amp; Sigilo</h3>
                          <p style={{ maxWidth: '450px' }}>
                            Segurança &amp; Sigilo Estamos sempre preocupados em
                            manter o sigilo das informações que nosso time tem
                            acesso. Garantimos total confidencialidade dos
                            dados.
                          </p>
                        </S.BodyCarouselItem>
                      </Slick>
                    </S.BodyCarouselWrapper>
                  </MediaQuery>
                </motion.div>
              </S.Body>
            </S.Content>
            <MediaQuery maxWidth={768}>
              <S.ExternalDesc>
                <p>
                  Nós fazemos o trabalho pesado das tarefas de input de dados
                  para permitir que nossos clientes se concentrem em suas
                  atividades essenciais e naquilo que traz inovação para o seu
                  negócio. Com um time de pessoas capacitadas, tecnologia
                  inovadora e excelência operacional, nosso BPO funciona como o
                  combustível do foguete que ajuda a alimentar a nave dos nossos
                  clientes.
                </p>
              </S.ExternalDesc>
            </MediaQuery>
          </>
        </Container>
      </S.Wrapper>
    </motion.div>
  )
}

export default BPOTemplate
