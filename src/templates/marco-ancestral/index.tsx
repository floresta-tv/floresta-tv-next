import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Element } from 'react-scroll'
import Head from 'next/head'

import BannerFull from 'components/Blocos/BannerFull'
import ContactButton from 'components/ContactButton'
import ProgressiveCount from 'components/Blocos/ProgressiveCount'
import VideoBlock from 'components/Blocos/VideoBlock'
import DoubleButton from 'components/Blocos/DoubleButton'
import Footer from 'components/Footer'

import * as animations from './animations'
import * as S from './styles'
import ArticleLit from 'components/Blocos/ArticleLit'

const MarcoAncestral = () => {
  const t = useTranslations('marco-ancestral')

  return (
    <motion.div key={6} {...animations.wrapper}>
      <ContactButton />
      <S.Wrapper>
        <Head>
          <title>Marco Ancestral | Floresta.TV</title>
        </Head>
        <Element name="home">
          <BannerFull
            items={[
              {
                backgroundAlt: `Família floresta TV`,
                width: 'large',
                position: 'center',
                textAlign: 'center',
                background: '/img/marcoancestral-meta.png',
                title: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t.raw('bannerfull.title')
                    }}
                  ></span>
                ),
                subtitle: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t.raw('bannerfull.desc')
                    }}
                  ></span>
                ),
                desc: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t.raw('bannerfull.subtitle')
                    }}
                  ></span>
                )
              }
            ]}
          />
        </Element>

        <Element name="3-setembro">
          <ArticleLit
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('articlepreview1.title')
                }}
              ></span>
            }
            subtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('articlepreview1.subtitle')
                }}
              ></span>
            }
            // buttonText={
            //   <span>
            //     {tpage.raw('articlepreview1.botao')} <Signature size={24} />
            //   </span>
            // }
            // buttonLink={`https://www.change.org/p/carta-aberta-dos-povos-origin%C3%A1rios-do-brasil-contagem-progressiva`}
            firstImage={`/img/indigena_bandeira.jpg`}
            firstImageSubtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('articlepreview1.firstImageSubtitle')
                }}
              ></span>
            }
            // imageAlt={`Mulheres indígenas em Brasília segurando velas`}
            body={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('articlepreview1.body')
                }}
              ></span>
            }
            secondImage={`/img/nativo-deitado-na-bandeira.jpg`}
            thirsdImage={`/img/carregando-bandeira.jpg`}
            // boxtitle={
            //   <span
            //     dangerouslySetInnerHTML={{
            //       __html: tpage.raw('articlepreview1.box-title')
            //     }}
            //   ></span>
            // }
            // boxdesc={
            //   <span
            //     dangerouslySetInnerHTML={{
            //       __html: tpage.raw('articlepreview1.box-desc')
            //     }}
            //   ></span>
            // }
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
            videoId={`WVmItbV5rbg`}
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
            bt1Link="/"
            bt2Link="/dia-da-amazonia"
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
              to: '3-setembro',
              label: t.raw('footer-links.link2')
            },
            {
              to: 'contagem-progressiva',
              label: t.raw('footer-links.link3')
            },
            {
              to: 'documentario-em-tempo-real',
              label: t.raw('footer-links.link4')
            }
          ]}
        />
      </S.Wrapper>
    </motion.div>
  )
}

export default MarcoAncestral
