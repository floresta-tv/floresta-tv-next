import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import Head from 'next/head'

import BannerFull from 'components/Blocos/BannerFull'
import ContactButton from 'components/ContactButton'
import ProgressiveCount from 'components/Blocos/ProgressiveCount'
import VideoBlock from 'components/Blocos/VideoBlock'
import DoubleButton from 'components/Blocos/DoubleButton'
import Footer from 'components/Footer'
import LanguagesButton from 'components/Navbar/LanguagesButton'

import * as animations from './animations'
import * as S from './styles'
import ArticleLit from 'components/Blocos/ArticleLit'

import { PMarcoAncestralT } from 'types/pages'

type MarcoAncestralTemplateProps = {
  content: PMarcoAncestralT
}
const MarcoAncestralTemplate = ({ content }: MarcoAncestralTemplateProps) => {
  return (
    <>
      {content && (
        <motion.div key={6} {...animations.wrapper}>
          <LanguagesButton />
          <ContactButton />
          <S.Wrapper>
            <Head>
              <title>Marco Ancestral | Floresta.TV</title>
            </Head>
            <Element name="home">
              <BannerFull
                items={[
                  {
                    backgroundAlt: content.home_banner_title,
                    width: 'large',
                    position: 'center',
                    textAlign: 'center',
                    background: content.home_banner_background.url,
                    title: (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: content.home_banner_title
                        }}
                      ></span>
                    ),
                    subtitle: (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: content.home_banner_subtitle
                        }}
                      ></span>
                    ),
                    desc: (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: content.home_banner_paragraph
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
                      __html: content.ImageKaje.title
                    }}
                  ></span>
                }
                subtitle={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.ImageKaje.description
                    }}
                  ></span>
                }
                firstImage={content.ImageKaje.image.url}
                firstImageSubtitle={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.ImageKaje.image_description
                    }}
                  ></span>
                }
                body={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.DoubleImage.description
                    }}
                  ></span>
                }
                secondImage={content.DoubleImage.first_image.url}
                thirsdImage={content.DoubleImage.second_image.url}
              />
            </Element>

            <Element name="contagem-progressiva">
              <ProgressiveCount
                texts={{
                  days: content.ContagemProgressiva.days,
                  hours: content.ContagemProgressiva.hours,
                  seconds: content.ContagemProgressiva.seconds,
                  minutes: content.ContagemProgressiva.minutes
                }}
                title={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.ContagemProgressiva.title
                    }}
                  ></span>
                }
                desc={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.ContagemProgressiva.subtitle
                    }}
                  ></span>
                }
                caption={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.ContagemProgressiva.description
                    }}
                  ></span>
                }
                background={content.ContagemProgressiva.image.url}
              />
            </Element>

            <Element name="documentario-em-tempo-real">
              <VideoBlock
                title={
                  <span
                    style={{ textTransform: 'uppercase' }}
                    dangerouslySetInnerHTML={{
                      __html: content.VideoDocumentario.title
                    }}
                  ></span>
                }
                desc={content.VideoDocumentario.subtitle}
                caption={content.VideoDocumentario.video_description}
                videoId={content.VideoDocumentario.video_id}
              />
            </Element>

            <Element name="botoes-de-acao">
              <DoubleButton
                textBt1={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.button_left_text
                    }}
                  ></span>
                }
                textBt2={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.button_right_text
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
              links={content.footer_links.map((item) => {
                return {
                  to: item.target,
                  label: item.label
                }
              })}
            />
          </S.Wrapper>
        </motion.div>
      )}
    </>
  )
}

export default MarcoAncestralTemplate
