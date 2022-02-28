import { motion } from 'framer-motion'
import { Element, Link as ScrollLink } from 'react-scroll'
import Head from 'next/head'
import Link from 'next/link'

import BannerFull from 'components/Blocos/BannerFull'
import ContactButton from 'components/ContactButton'
import Footer from 'components/Footer'
import LanguagesButton from 'components/Navbar/LanguagesButton'

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
import { PDiaDaAmazoniaT } from 'types/pages'

type DiaDaAmazoniaProps = {
  content: PDiaDaAmazoniaT
}

const DiaDaAmazonia = ({ content }: DiaDaAmazoniaProps) => {
  return (
    <motion.div key={6} {...animations.wrapper}>
      <ContactButton />
      <LanguagesButton />
      <S.Wrapper>
        <Head>
          <title>Dia da Amazônia | Floresta.TV</title>
        </Head>
        <Element name="home">
          <BannerFull
            items={[
              {
                backgroundAlt: content.HomeBanner.title,
                width: 'large',
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
                      __html: content.HomeBanner.description
                    }}
                  ></span>
                ),
                links: (
                  <>
                    <div className="link-1">
                      <ScrollLink to="documentario-em-tempo-real">
                        {content.HomeBanner.first_button.text}
                      </ScrollLink>
                    </div>
                    <div className="link-2">
                      <Link href="/marcha-mulheres-indigenas">
                        {content.HomeBanner.second_button.text}
                      </Link>
                    </div>
                    <div className="link-3">
                      <Link href="/">
                        {content.HomeBanner.terc_button.text}
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
            bgc="#ffb4b4"
            title={
              <span
                style={{ textTransform: 'uppercase' }}
                dangerouslySetInnerHTML={{
                  __html: content.VideoHistoria.title
                }}
              ></span>
            }
            desc={content.VideoHistoria.subtitle}
            caption={content.VideoHistoria.video_description}
            videoId={content.VideoHistoria.video_id}
          />
        </Element>

        <Element name="dia-da-amazonia">
          <ArticleBlock
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.large_content_3213.title
                }}
              ></span>
            }
            subtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.large_content_3213.subtitle
                }}
              ></span>
            }
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.large_content_3213.paragraph
                }}
              ></span>
            }
            firstImage={content.large_content_3213.image_1.url}
            firstImageSubtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.large_content_3213.image_1_desc
                }}
              ></span>
            }
            secondImage={content.large_content_3213.image_2.url}
            thirsdImage={content.large_content_3213.image_3.url}
            leftText={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.large_content_3213.image_2_desc
                }}
              ></span>
            }
            rightText={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.large_content_3213.image_3_desc
                }}
              ></span>
            }
            lastImage={content.large_content_3213.image_4.url}
            lastImageSubtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.large_content_3213.image_4_desc
                }}
              ></span>
            }
            finalText={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.large_content_3213.paragraph_2
                }}
              ></span>
            }
          />
        </Element>

        <Element name="povos">
          <DoubleImage
            image1={content.DoubleImageStripe.image_1.url}
            image2={content.DoubleImageStripe.image_2.url}
            caption1={content.DoubleImageStripe.image_2_desc}
            caption2={content.DoubleImageStripe.image_2_desc}
            title={<></>}
            subtitle={<></>}
            lit={true}
            bgc="#fc6868"
          />
        </Element>

        <Element name="o-floresta-tv">
          <div style={{ paddingTop: 50 }}>
            <SimpleText
              text={
                <span
                  dangerouslySetInnerHTML={{
                    __html: content.paragraph_3
                  }}
                ></span>
              }
            />
          </div>
        </Element>

        <Element name="algumas-pessoas">
          <SimpleQuote
            bgc="#017300"
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.quote
                }}
              ></span>
            }
          />
        </Element>

        <Element name="urucum-na-bandeira">
          <ImageText
            bgc="#f57272"
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.ImageUrucum.title
                }}
              ></span>
            }
            image={content.ImageUrucum.image.url}
            imageAlt={content.ImageUrucum.image_description}
            titleTop={true}
            type="left"
          />
        </Element>

        <Element name="declaracao-rafael-quadros">
          <LongQuote
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.DeclaracaoRafael.title
                }}
              ></span>
            }
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.DeclaracaoRafael.body
                }}
              ></span>
            }
            bgc="#017300"
          />
        </Element>

        <Element name="obra-final">
          <ImageText
            image={content.DevastacaoImage.image.url}
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.DevastacaoImage.title
                }}
              ></span>
            }
            desc={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.DevastacaoImage.description
                }}
              ></span>
            }
            imageAlt={content.DevastacaoImage.image_description}
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

export default DiaDaAmazonia
