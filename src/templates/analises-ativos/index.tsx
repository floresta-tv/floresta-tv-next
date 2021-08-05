import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../../components/UI'
import { motion } from 'framer-motion'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

import * as animations from './animations'
import * as S from './styles'

const Produtos = () => {
  const [isRotating, setIsRotating] = useState('')

  return (
    <motion.div key={6} {...animations.wrapper}>
      <S.Wrapper>
        <Container>
          <>
            <S.HeaderBackground>
              <Image
                placeholder="blur"
                src="/img/produtos-header.png"
                blurDataURL="/img/produtos-header.png"
                layout="fill"
              />
            </S.HeaderBackground>
            <S.Header>
              <motion.div {...animations.text}>
                <S.HeaderTitle>
                  wealth manag ement poderosamente simples
                </S.HeaderTitle>
              </motion.div>
              <motion.div
                {...animations.text}
                transition={{ delay: 0.9, duration: 0.7 }}
              >
                <S.HeaderSubTitle>
                  Feito para tornar simples a gestão de patrimônios sem perder o
                  poder de tomar a decisão certa no momento certo, porque vidas
                  e histórias financeiras são únicas e exigem um roadmap
                  exclusivo.
                </S.HeaderSubTitle>
              </motion.div>
            </S.Header>

            <S.DescubraWrapper>
              <Fade right>
                <S.DescubraTitle>
                  descubra a plataforma mais avançada em gestão de patrimônios
                </S.DescubraTitle>
              </Fade>
              <Fade bottom>
                <S.DescubraDescription>
                  MeuPortfolio Tecnologia é uma empresa formada por um grupo de
                  pessoas apaixonadas e dedicadas a ajudar sua organização na
                  gestão de patrimônio do seu cliente. Nossa plataforma foi
                  totalmente construída com base nos pilares da experiência e
                  dedicação, oferecendo assim aos nossos clientes produtos com:
                  Alta disponibilidade, performance, estabilidade, interface
                  eficiente e intuitiva e um atendimento de excelência.
                </S.DescubraDescription>
              </Fade>
              <Zoom>
                <S.DescubraChart>
                  <Image
                    blurDataURL="/img/produtos-chart.svg"
                    src="/img/produtos-chart.svg"
                    placeholder="blur"
                    width={241}
                    height={187}
                  />
                </S.DescubraChart>
              </Zoom>
            </S.DescubraWrapper>

            <S.EficienciaWrapper>
              <S.EficienciaBackground>
                <Image
                  placeholder="blur"
                  src="/img/produtos-stairs-1.png"
                  blurDataURL="/img/produtos-stairs-1.png"
                  layout="fill"
                />
              </S.EficienciaBackground>
              <S.EficienciaImage>
                <Zoom>
                  <Image
                    blurDataURL="/img/percent-icon.svg"
                    src="/img/percent-icon.svg"
                    placeholder="blur"
                    width={291}
                    height={227}
                  />
                </Zoom>
              </S.EficienciaImage>
              <S.EficienciaTitle>
                <Fade left>
                  eficiência e flexibilidade para construir sua estrategia
                </Fade>
              </S.EficienciaTitle>
              <S.EficienciaDescription>
                <Fade bottom>
                  Sabemos que nossos clientes possuem estratégias distintas, por
                  isso desenvolvemos uma aplicação única que se molda para o seu
                  negócio. Bancos, Gestores, Wealth Management e outras
                  organizações podem fazer a gestão de qualquer tipo de
                  patrimônio numa plataforma online, segura, com alta
                  disponibilidade e performance.
                </Fade>
              </S.EficienciaDescription>
              <Fade left>
                <S.EficienciaBrand>
                  <Image
                    blurDataURL="/img/vertical-brand.png"
                    src="/img/vertical-brand.png"
                    placeholder="blur"
                    width={230}
                    height={174}
                  />
                </S.EficienciaBrand>
              </Fade>
            </S.EficienciaWrapper>

            <S.MenuWrapper>
              <Container position="relative">
                <S.MenuBrackets>
                  <Image
                    placeholder="blur"
                    src="/img/produtos-brackets.png"
                    blurDataURL="/img/produtos-brackets.png"
                    layout="fill"
                  />
                </S.MenuBrackets>
              </Container>

              <S.MenuItems>
                <Link passHref={true} href="/produtos/atena">
                  <S.MenuItem onClick={() => setIsRotating('atena')}>
                    <div
                      className={`img ${isRotating === 'atena' && 'rotate'}`}
                    >
                      <Image
                        placeholder="blur"
                        src="/img/atena-icon.png"
                        blurDataURL="/img/atena-icon.png"
                        layout="fill"
                      />
                    </div>
                    <div className="description">
                      <h3 className="title">Atena</h3>
                      <p className="desc">
                        A sabedoria do mercado financeiro onshore e offshore.
                        Cadastros, preços, indíces e muito mais.
                      </p>
                    </div>
                  </S.MenuItem>
                </Link>

                <Link passHref={true} href="/produtos/one">
                  <S.MenuItem onClick={() => setIsRotating('one')}>
                    <div className="description">
                      <h3 className="title">One</h3>
                      <p className="desc">
                        Tão amigável quanto é poderoso para unificar seus
                        investimentos.
                      </p>
                    </div>
                    <div className={`img ${isRotating === 'one' && 'rotate'}`}>
                      <Image
                        placeholder="blur"
                        src="/img/one-icon.png"
                        blurDataURL="/img/one-icon.png"
                        layout="fill"
                      />
                    </div>
                  </S.MenuItem>
                </Link>
                <Link passHref={true} href="/produtos/bpo">
                  <S.MenuItem onClick={() => setIsRotating('bpo')}>
                    <div className={`img ${isRotating === 'bpo' && 'rotate'}`}>
                      <Image
                        placeholder="blur"
                        src="/img/bpo-icon.png"
                        blurDataURL="/img/bpo-icon.png"
                        layout="fill"
                      />
                    </div>
                    <div className="description">
                      <h3 className="title">BPO</h3>
                      <p className="desc">
                        Amplie a capacidade operacional da sua empresa com nosso
                        Business Process Outsourcing.
                      </p>
                    </div>
                  </S.MenuItem>
                </Link>
              </S.MenuItems>

              <S.MenuTestimonial>
                <Fade bottom>
                  <S.MenuDescription>
                    “MeuPortfolio é uma empresa de tecnologia que vai além do
                    software e infraestruturas robustas que entregam
                    performance, integridade e alta disponibilidade. É uma
                    empresa construída por pessoas que trazem consigo muita
                    experiência, paixão pelo trabalho e compromisso com o
                    cliente. Nossa busca incessante pela excelência está
                    associada ao desejo de transformar a nossa plataforma no
                    roadmap que vai auxiliar nossos clientes em suas tomadas de
                    decisão.”
                  </S.MenuDescription>
                </Fade>

                <Fade bottom>
                  <S.MenuAuthor>
                    <strong>Felipe Bossolani</strong>
                    CEO &amp; Fundador da MeuPortfolio Tecnologia
                  </S.MenuAuthor>
                </Fade>
              </S.MenuTestimonial>
            </S.MenuWrapper>
          </>
        </Container>
      </S.Wrapper>
    </motion.div>
  )
}

export default Produtos
