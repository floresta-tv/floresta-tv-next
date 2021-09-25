import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Element, Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'

import BannerFull from 'components/Blocos/BannerFull'
import ContactButton from 'components/ContactButton'
import Footer from 'components/Footer'

import * as animations from './animations'
import * as S from './styles'
import ProgressiveCount from 'components/Blocos/ProgressiveCount'
import VideoBlock from 'components/Blocos/VideoBlock'
import ArticleBlock from 'components/Blocos/ArticleBlock'
import DoubleImage from 'components/Blocos/DoubleImage'
import SimpleText from 'components/Blocos/SimpleText'
import ImageText from 'components/Blocos/ImageText'
import SimpleQuote from 'components/Blocos/SimpleQuote'
import LongQuote from 'components/Blocos/LongQuote'
import DoubleButton from 'components/Blocos/DoubleButton'

const DiaDaAmazonia = () => {
  const t = useTranslations('dia-da-amazonia')

  return (
    <motion.div key={6} {...animations.wrapper}>
      <ContactButton />
      <S.Wrapper>
        <Element name="home">
          <BannerFull
            items={[
              {
                backgroundAlt: `Família floresta TV`,
                width: 'large',
                position: 'center',
                textAlign: 'center',
                background: '/img/desenho-indigena.jpg',
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
                      <Link href="/equipe">Maracás em Brasília</Link>
                    </div>
                    <div className="link-3">
                      <Link href="/">Voz da Floresta</Link>
                    </div>
                  </>
                )
              }
            ]}
          />
        </Element>

        <Element name="contagem-progressiva">
          <ProgressiveCount
            texts={{
              days: t.raw('contagemprogress1.dias'),
              hours: t.raw('contagemprogress1.horas'),
              seconds: t.raw('contagemprogress1.segundos'),
              minutes: t.raw('contagemprogress1.minutos')
            }}
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

        <Element name="documentario-em-tempo-real">
          <VideoBlock
            bgc="#e43f3f"
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
            videoId={`Vw244cDbxyc`}
          />
        </Element>

        <Element name="dia-da-amazonia">
          <ArticleBlock
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('articleblock.title')
                }}
              ></span>
            }
            subtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('articleblock.subtitle')
                }}
              ></span>
            }
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('articleblock.text')
                }}
              ></span>
            }
            firstImage={`/img/indigena_bandeira.jpg`}
            firstImageSubtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('articleblock.firstImageSubtitle')
                }}
              ></span>
            }
            secondImage={`/img/segurando-bandeira.jpg`}
            thirsdImage={`/img/carregando-bandeira.jpg`}
            leftText={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('articleblock.leftText')
                }}
              ></span>
            }
            rightText={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('articleblock.rightText')
                }}
              ></span>
            }
            lastImage={`/img/povos-em-brasilia.jpg`}
            lastImageSubtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('articleblock.lastImageSubtitle')
                }}
              ></span>
            }
            finalText={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('articleblock.finalText')
                }}
              ></span>
            }
          />
        </Element>

        <Element name="povos">
          <DoubleImage
            image1="/img/povo-terena.jpg"
            image2="/img/povo-pataxo.jpg"
            caption1="Povo Terena"
            caption2="Povo Pataxó"
            title={<></>}
            subtitle={<></>}
            lit={true}
            bgc="#e43f3f"
          />
        </Element>

        <Element name="povos">
          <SimpleText
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('simpletext.text')
                }}
              ></span>
            }
          />
        </Element>

        <Element name="povos">
          <SimpleQuote
            bgc="#00ff05"
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('simplequote.quote')
                }}
              ></span>
            }
          />
        </Element>

        <Element name="urucum-na-bandeira">
          <ImageText
            bgc="#e43f3f"
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('urucum.title')
                }}
              ></span>
            }
            image="/img/urucum-na-bandeira.jpg"
            imageAlt="Indígena deitado na bandeira."
            titleTop={true}
            type="left"
          />
        </Element>

        <Element name="declaracao-rafael-quadros">
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
        </Element>

        <Element name="creditos"></Element>

        <Element name="obra-final">
          <ImageText
            image="/img/desenho-indigena.jpg"
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('obra.title')
                }}
              ></span>
            }
            desc={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('obra.text')
                }}
              ></span>
            }
            imageAlt="Desenho de indígena."
          />
        </Element>

        <Element name="botoes-de-acao">
          <DoubleButton
            textBt1={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('buttons.bt1text')
                }}
              ></span>
            }
            textBt2={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('buttons.bt2text')
                }}
              ></span>
            }
            bt1Color="#ff6666"
            bt2Color="#00ff05"
            bt1Link="/voz-da-floresta"
            bt2Link="/"
            bgc="#017300"
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

export default DiaDaAmazonia
