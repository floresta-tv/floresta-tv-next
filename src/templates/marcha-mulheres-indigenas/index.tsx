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
import ArticleBlock from 'components/Blocos/ArticleBlock'
import ImageFullWidth from 'components/Blocos/ImageFullWidth'
import SimpleText from 'components/Blocos/SimpleText'
import ImageText from 'components/Blocos/ImageText'
import LongQuote from 'components/Blocos/LongQuote2'
import DoubleButton from 'components/Blocos/DoubleButton'

const MarchaMulheresIndigenas = () => {
  const t = useTranslations('marcha-mulheres-indigenas')

  return (
    <motion.div key={6} {...animations.wrapper}>
      <ContactButton />
      <S.Wrapper>
        <Element name="home">
          <BannerFull
            items={[
              {
                backgroundAlt: `Família floresta TV`,
                width: 'extralarge',
                position: 'center',
                textAlign: 'center',
                background: '/img/protesto_mulheres_indigenas_brasilia.jpg',
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
                      <Link href="/marco-ancestral">Marco Ancestral</Link>
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
            background="/img/indigena_segurando_camera.jpg"
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
            firstImage={`/img/nao_ao_marco_temporal_marcha_mulheres_indigenas.jpg`}
            firstImageSubtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('articleblock.firstImageSubtitle')
                }}
              ></span>
            }
            secondImage={`/img/marcha_mulheres_indigenas_5.jpg`}
            thirsdImage={`/img/marcha_mulheres_indigenas_6.jpg`}
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
            lastImage={`/img/marcha_mulheres_indigenas.jfif`}
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

        <Element name="protagonismo-mulher-indigena">
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

        <Element name="sinal-verde">
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
                  __html: t.raw('longquote.body')
                }}
              ></span>
            }
            bgc="#017300"
          />
        </Element>
        <Element name="uma-marcha-historica">
          <SimpleText
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('simpletext2.text')
                }}
              ></span>
            }
          />
        </Element>

        <Element name="urucum-sinal-vermelho">
          <ImageText
            bgc="#b82d2d"
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('urucum.title')
                }}
              ></span>
            }
            image="/img/marcha_mulheres_indigenas_3.jpg"
            imageAlt="Marcha mulheres indígenas no Sinal Vermelho"
            titleTop={true}
            type="left"
          />
        </Element>

        <Element name="foto-final">
          <ImageFullWidth
            image={`/img/marcha_mulheres_indigenas_4.jpg`}
            caption={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('imageFullWidth.desc')
                }}
              ></span>
            }
            imageAlt={t.raw('imageFullWidth.desc')}
            style={{ marginTop: '30px', paddingTop: '0' }}
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
              label: t.raw('footer-links.link1')
            },
            {
              to: 'contagem-progressiva',
              label: t.raw('footer-links.link2')
            },
            {
              to: 'documentario-em-tempo-real',
              label: t.raw('footer-links.link3')
            },
            {
              to: 'dia-da-amazonia',
              label: t.raw('footer-links.link4')
            },
            {
              to: 'povos',
              label: t.raw('footer-links.link5')
            },
            {
              to: 'o-florestatv',
              label: t.raw('footer-links.link6')
            },
            {
              to: 'urucum-na-bandeira',
              label: t.raw('footer-links.link7')
            },
            {
              to: 'declaracao-rafael-quadros',
              label: t.raw('footer-links.link8')
            },
            {
              to: 'obra-final',
              label: t.raw('footer-links.link9')
            }
          ]}
        />
      </S.Wrapper>
    </motion.div>
  )
}

export default MarchaMulheresIndigenas
