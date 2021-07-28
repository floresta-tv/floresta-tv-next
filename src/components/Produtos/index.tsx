import Image from 'next/image'
import { Container } from '../UI/'

import * as S from './styles'

const Produtos = () => {
  return (
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
            <S.HeaderTitle>
              wealth manag ement poderosamente simples
            </S.HeaderTitle>
            <S.HeaderSubTitle>
              Feito para tornar simples a gestão de patrimônios sem perder o
              poder de tomar a decisão certa no momento certo, porque vidas e
              histórias financeiras são únicas e exigem um roadmap exclusivo.
            </S.HeaderSubTitle>
          </S.Header>

          <S.DescubraWrapper>
            <S.DescubraTitle>
              descubra a plataforma mais avançada em gestão de patrimônios
            </S.DescubraTitle>
            <S.DescubraDescription>
              MeuPortfolio Tecnologia é uma empresa formada por um grupo de
              pessoas apaixonadas e dedicadas a ajudar sua organização na gestão
              de patrimônio do seu cliente. Nossa plataforma foi totalmente
              construída com base nos pilares da experiência e dedicação,
              oferecendo assim aos nossos clientes produtos com: Alta
              disponibilidade, performance, estabilidade, interface eficiente e
              intuitiva e um atendimento de excelência.
            </S.DescubraDescription>
            <S.DescubraChart>
              <Image
                blurDataURL="/img/produtos-chart.svg"
                src="/img/produtos-chart.svg"
                placeholder="blur"
                width={241}
                height={187}
              />
            </S.DescubraChart>
          </S.DescubraWrapper>

          <S.EficienciaWrapper>
            <S.EficienciaBackground>
              <Image
                placeholder="blur"
                src="/img/produtos-stairs.png"
                blurDataURL="/img/produtos-stairs.png"
                layout="fill"
              />
            </S.EficienciaBackground>
            <S.EficienciaImage>
              <Image
                blurDataURL="/img/produtos-chart.svg"
                src="/img/percent-icon.svg"
                placeholder="blur"
                width={291}
                height={227}
              />
            </S.EficienciaImage>
            <S.EficienciaTitle>
              eficiência e flexibilidade para construir sua estrategia
            </S.EficienciaTitle>
            <S.EficienciaDescription>
              Sabemos que nossos clientes possuem estratégias distintas, por
              isso desenvolvemos uma aplicação única que se molda para o seu
              negócio. Bancos, Gestores, Wealth Management e outras organizações
              podem fazer a gestão de qualquer tipo de patrimônio numa
              plataforma online, segura, com alta disponibilidade e performance.
            </S.EficienciaDescription>
          </S.EficienciaWrapper>

          <S.MenuWrapper>
            <S.MenuBrackets>
              <Image
                placeholder="blur"
                src="/img/produtos-brackets.png"
                blurDataURL="/img/produtos-brackets.png"
                layout="fill"
              />
            </S.MenuBrackets>

            <S.MenuItems>
              <S.MenuItem>
                <div className="img">
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

              <S.MenuItem>
                <div className="description">
                  <h3 className="title">One</h3>
                  <p className="desc">
                    Tão amigável quanto é poderoso para unificar seus
                    investimentos.
                  </p>
                </div>
                <div className="img">
                  <Image
                    placeholder="blur"
                    src="/img/one-icon.png"
                    blurDataURL="/img/one-icon.png"
                    layout="fill"
                  />
                </div>
              </S.MenuItem>

              <S.MenuItem>
                <div className="img">
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
            </S.MenuItems>

            <S.MenuTestimonial>
              <S.MenuDescription>
                “MeuPortfolio é uma empresa de tecnologia que vai além do
                software e infraestruturas robustas que entregam performance,
                integridade e alta disponibilidade. É uma empresa construída por
                pessoas que trazem consigo muita experiência, paixão pelo
                trabalho e compromisso com o cliente. Nossa busca incessante
                pela excelência está associada ao desejo de transformar a nossa
                plataforma no roadmap que vai auxiliar nossos clientes em suas
                tomadas de decisão.”
              </S.MenuDescription>

              <S.MenuAuthor>
                <strong>Felipe Bossolani</strong>
                CEO &amp; Fundador da MeuPortfolio Tecnologia
              </S.MenuAuthor>
            </S.MenuTestimonial>
          </S.MenuWrapper>
        </>
      </Container>
    </S.Wrapper>
  )
}

export default Produtos
