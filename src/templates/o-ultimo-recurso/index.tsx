import { motion } from 'framer-motion'
import { useTranslations } from 'use-intl'
import { Element, Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import Head from 'next/head'

import BannerFull from 'components/Blocos/BannerFull'
import ContactButton from 'components/ContactButton'
import Footer from 'components/Footer'

import * as animations from './animations'
import * as S from './styles'
import VideoBlock from 'components/Blocos/VideoBlock'
import LongQuote from 'components/Blocos/LongQuote'
import ProgressiveCount from 'components/Blocos/ProgressiveCount'
import TitleText from 'components/Blocos/TitleText'
import BackgroundText from 'components/Blocos/BackgroundText'
import SimpleArcticle from 'components/Blocos/SimpleArcticle'
import ArticlePreviewMathilde from 'components/Blocos/ArcticlePreviwMathilde'
import SimpleQuoteWithButton from 'components/Blocos/SimpleQuoteWithButton'
import FinalArticle from 'components/Blocos/FinalArticle'
import ImageArticle from 'components/Blocos/ImageArticle'

const OUltimoRecurso = () => {
  const t = useTranslations('o-ultimo-recurso')

  return (
    <motion.div key={6} {...animations.wrapper}>
      <ContactButton />
      <S.Wrapper>
        <Head>
          <title>O Último Recurso | Floresta.TV</title>
        </Head>

        <Element name="home">
          <BannerFull
            items={[
              {
                bgc: true,
                backgroundAlt: `Família floresta TV`,
                width: 'large',
                position: 'center',
                textAlign: 'center',
                background: '/img/manifestacao-em-brasilia.jpg',
                title: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t.raw('bannerfull.title')
                    }}
                  ></span>
                ),
                desc: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t.raw('bannerfull.desc')
                    }}
                  ></span>
                ),
                links: (
                  <>
                    <div className="link-1">
                      <ScrollLink to="documentario-em-tempo-real">
                        Leia mais
                      </ScrollLink>
                    </div>
                    <div className="link-2">
                      <Link href="/marcha-mulheres-indigenas">
                        II Marcha das Mulheres Indígenas
                      </Link>
                    </div>
                    <div className="link-3">
                      <Link href="/dia-da-amazonia">É urucum na bandeira</Link>
                    </div>
                  </>
                )
              }
            ]}
          />
        </Element>

        <Element name="documentario-em-tempo-real">
          <VideoBlock
            bgc="#ffffff"
            title={
              <span
                style={{ textTransform: 'uppercase' }}
                dangerouslySetInnerHTML={{
                  __html: t.raw('videoblock1.title')
                }}
              ></span>
            }
            desc={t.raw('videoblock1.desc')}
            caption={t.raw('videoblock1.caption')}
            videoId={`RzE5uA341nA`}
          />
        </Element>

        <Element name="reunimos-argumentos">
          <TitleText
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('titletext.title')
                }}
              ></span>
            }
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('titletext.text')
                }}
              ></span>
            }
          />
        </Element>

        <Element name="clique-e-leia">
          <SimpleQuoteWithButton
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('sqwb.text')
                }}
              ></span>
            }
            buttonText={t.raw('sqwb.buttontext')}
            to="http://planalto.gov.br/ccivil_03/constituicao/constituicao.htm"
            quotted={t.raw('sqwb.quotted')}
            bgc="#017300"
          />
        </Element>

        <Element name="lendo-mentes">
          <ImageArticle
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('iarticle.title')
                }}
              ></span>
            }
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('iarticle.text')
                }}
              ></span>
            }
            firstImage="/img/brasilia.jpeg"
            firstCapt={
              <a
                href="https://www.instagram.com/tv/CTh_i4Bp8-2/"
                dangerouslySetInnerHTML={{
                  __html: t.raw('iarticle.ficapt')
                }}
              ></a>
            }
            secondImage="/img/carro-com-foto-bolsonaro.jpeg"
            secondCapt={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('iarticle.sicapt')
                }}
              ></span>
            }
            thirsdImage="/img/protestos.jpeg"
            thirsdCapt={t.raw('iarticle.ticapt')}
            fourthImage="/img/protestos-em-brasilia.jpeg"
            fourthCapt={t.raw('iarticle.fticapt')}
          />
        </Element>

        <Element name="declaracao-alessandro-vieira">
          <S.StyledLQ>
            <LongQuote
              title={
                <span
                  dangerouslySetInnerHTML={{
                    __html: t.raw('longquote.title')
                  }}
                ></span>
              }
              text={
                <span
                  dangerouslySetInnerHTML={{
                    __html: t.raw('longquote.text')
                  }}
                ></span>
              }
              bgc="#017300"
            />
          </S.StyledLQ>
        </Element>

        <Element name="a-gota-dagua">
          <BackgroundText
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('backgroundtext.title')
                }}
              ></span>
            }
            subtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('backgroundtext.subtitle')
                }}
              ></span>
            }
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('backgroundtext.text')
                }}
              ></span>
            }
            image="/img/brasil-movimentos.jpg"
          />
        </Element>

        <Element name="bolsonaro-afirma">
          <S.StyledLQ>
            <LongQuote
              title={
                <span
                  dangerouslySetInnerHTML={{
                    __html: t.raw('longquote2.title')
                  }}
                ></span>
              }
              text={
                <span
                  dangerouslySetInnerHTML={{
                    __html: t.raw('longquote2.text')
                  }}
                ></span>
              }
              bgc="#017300"
            />
          </S.StyledLQ>
        </Element>

        <Element name="arroz-com-fuzil">
          <SimpleArcticle
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('simplearcticle.title')
                }}
              ></span>
            }
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('simplearcticle.text')
                }}
              ></span>
            }
            firstImage="/img/carro-ditadura.jpg"
            firstCapt={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('simplearcticle.firstcapt')
                }}
              ></span>
            }
            secondImage="/img/caminhao-bostonaro.jpg"
            secondCapt={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('simplearcticle.secondcapt')
                }}
              ></span>
            }
          />
        </Element>

        <Element name="associacao-nacional">
          <S.StyledLQ>
            <LongQuote
              title={
                <span
                  dangerouslySetInnerHTML={{
                    __html: t.raw('longquote4.title')
                  }}
                ></span>
              }
              text={
                <span
                  dangerouslySetInnerHTML={{
                    __html: t.raw('longquote4.text')
                  }}
                ></span>
              }
              bgc="#017300"
            />
          </S.StyledLQ>
        </Element>

        <Element name="artigo-mathilde">
          <S.StyledLQ>
            <ArticlePreviewMathilde
              title={
                <span
                  dangerouslySetInnerHTML={{
                    __html: t.raw('apmathilde.title')
                  }}
                ></span>
              }
              subtitle={
                <span
                  dangerouslySetInnerHTML={{
                    __html: t.raw('apmathilde.subtitle')
                  }}
                ></span>
              }
              buttonLink="https://medium.com/florestatv/bandeira-da-interdepend%C3%AAncia-do-brasil-o-ultimo-recurso-a1ada530cb16"
              buttonText={t.raw('apmathilde.bttext')}
              image="/img/artigo-mathilde.png"
              imageAlt=""
            />
          </S.StyledLQ>
        </Element>

        <Element name="depoimento-carlos-ayres">
          <S.StyledLQ>
            <LongQuote
              title={
                <span
                  dangerouslySetInnerHTML={{
                    __html: t.raw('longquote3.title')
                  }}
                ></span>
              }
              text={
                <span
                  dangerouslySetInnerHTML={{
                    __html: t.raw('longquote3.text')
                  }}
                ></span>
              }
              bgc="#017300"
            />
          </S.StyledLQ>
        </Element>

        <Element name="contagem-progressiva">
          <ProgressiveCount
            texts={{
              days: t.raw('contagemprogress1.dias'),
              hours: t.raw('contagemprogress1.horas'),
              seconds: t.raw('contagemprogress1.segundos'),
              minutes: t.raw('contagemprogress1.minutos')
            }}
            background={`/img/indigena_protestos_brasilia.jpg`}
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('contagemprogress1.title')
                }}
              ></span>
            }
            desc={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('contagemprogress1.desc')
                }}
              ></span>
            }
            caption={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('contagemprogress1.caption')
                }}
              ></span>
            }
          />
        </Element>

        <Element name="dedicacao-final">
          <FinalArticle
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('final.text')
                }}
              ></span>
            }
            image="/img/morte.jpg"
            imageSubtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('final.text')
                }}
              ></span>
            }
            elements={t.raw('final.elements')}
          />
        </Element>

        <Footer
          links={[
            {
              to: 'home',
              label: 'Dia da Amazônia'
            }
          ]}
        />
      </S.Wrapper>
    </motion.div>
  )
}

export default OUltimoRecurso
