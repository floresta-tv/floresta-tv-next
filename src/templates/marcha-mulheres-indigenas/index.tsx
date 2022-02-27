import { motion } from 'framer-motion'
import { Element, Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import Head from 'next/head'

import BannerFull from 'components/Blocos/BannerFull'
import ContactButton from 'components/ContactButton'
import Footer from 'components/Footer'
import LanguagesButton from 'components/Navbar/LanguagesButton'

import * as animations from './animations'
import * as S from './styles'
import ProgressiveCount from 'components/Blocos/ProgressiveCount'
import ArticleBlock from 'components/Blocos/ArticleBlock'
import ImageFullWidth from 'components/Blocos/ImageFullWidth'
import SimpleText from 'components/Blocos/SimpleText'
import VideoBlock from 'components/Blocos/VideoBlock'
import ImageText from 'components/Blocos/ImageText'
import LongQuote from 'components/Blocos/LongQuote2'
import DoubleButton from 'components/Blocos/DoubleButton'
import { Container } from 'components/UI'

const MarchaMulheresIndigenas = ({ content }) => {
  return (
    <motion.div key={6} {...animations.wrapper}>
      <ContactButton />
      <LanguagesButton />
      <S.Wrapper>
        <Head>
          <title>{content.HomeBanner.title} | Floresta.TV</title>
        </Head>
        <Element name="home">
          <BannerFull
            items={[
              {
                backgroundAlt: content.HomeBanner.title,
                width: 'extralarge',
                position: 'center',
                textAlign: 'center',
                background: content.HomeBanner.image.url,
                title: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.HomeBanner.title
                    }}
                  ></span>
                ),
                desc: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.HomeBanner.paragraph
                    }}
                  ></span>
                ),
                links: (
                  <>
                    <div className="link-1">
                      <ScrollLink to={content.HomeBanner.greenButtonHref}>
                        {content.HomeBanner.greenButtonText}
                      </ScrollLink>
                    </div>
                    <div className="link-2">
                      <Link href={content.HomeBanner.whiteButtonHref}>
                        {content.HomeBanner.whiteButtonText}
                      </Link>
                    </div>
                    <div className="link-3">
                      <Link href={content.HomeBanner.transparentButtonHref}>
                        {content.HomeBanner.transparentButtonText}
                      </Link>
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
              days: content.ContagemProgressiva.days,
              hours: content.ContagemProgressiva.hours,
              seconds: content.ContagemProgressiva.seconds,
              minutes: content.ContagemProgressiva.minutes
            }}
            background={content.ContagemProgressiva.image.url}
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

        <Element name="espetaculo-global" style={{ marginTop: -70 }}>
          <ArticleBlock
            title={<span></span>}
            subtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.title_2
                }}
              ></span>
            }
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.paragraph_2
                }}
              ></span>
            }
            firstImage={content.image_1.image.url}
            firstImageSubtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.image_1.image_description
                }}
              ></span>
            }
            secondImage={content.image_2.image.url}
            thirsdImage={content.image_3.image.url}
            leftText={<span></span>}
            rightText={<span></span>}
            lastImage={content.image_4.image.url}
            lastImageSubtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.image_4.image_description
                }}
              ></span>
            }
            finalText={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.paragraph_3
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
                  __html: content.SinalVerde.title
                }}
              ></span>
            }
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.SinalVerde.body
                }}
              ></span>
            }
            bgc="#017300"
          />
        </Element>
        <div style={{ marginBottom: 70 }}>
          <Element name="urucum-sinal-vermelho">
            <ImageText
              bgc="#b82d2d"
              title={
                <span
                  dangerouslySetInnerHTML={{
                    __html: content.image_5.image_description
                  }}
                ></span>
              }
              image={content.image_5.image.url}
              imageAlt={content.image_5.image_description}
              titleTop={true}
              type="left"
            />
          </Element>
        </div>

        <Element name="credits">
          <ImageFullWidth
            image={content.image_5.image.url}
            caption={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.image_6.image_description
                }}
              ></span>
            }
            imageAlt={content.image_6.image_description}
            style={{ marginTop: '30px', paddingTop: '0' }}
          />
        </Element>

        <Container>
          <div
            dangerouslySetInnerHTML={{ __html: content.credits }}
            style={{ padding: '60px 0' }}
          ></div>
        </Container>

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
            bt2Link="/o-ultimo-recurso"
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
  )
}

export default MarchaMulheresIndigenas
