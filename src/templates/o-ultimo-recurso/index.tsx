import { motion } from 'framer-motion'
import { Element, Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import Head from 'next/head'

import BannerFull from 'components/Blocos/BannerFull'
import ContactButton from 'components/ContactButton'
import Footer from 'components/Footer'
import LanguagesButton from 'components/Navbar/LanguagesButton'
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

import * as animations from './animations'
import * as S from './styles'

const OUltimoRecurso = ({ content }) => {
  return (
    <>
      {content && (
        <motion.div key={6} {...animations.wrapper}>
          <ContactButton />
          <LanguagesButton />
          <S.Wrapper>
            <Head>
              <title>O Último Recurso | Floresta.TV</title>
            </Head>

            <Element name="home">
              <BannerFull
                items={[
                  {
                    bgc: true,
                    backgroundAlt: content.HomeBanner.description,
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
                          <ScrollLink to={content.HomeBanner.first_button.href}>
                            {content.HomeBanner.first_button.text}
                          </ScrollLink>
                        </div>
                        <div className="link-2">
                          <Link href={content.HomeBanner.second_button.href}>
                            {content.HomeBanner.second_button.text}
                          </Link>
                        </div>
                        <div className="link-3">
                          <Link href={content.HomeBanner.terc_button.href}>
                            {content.HomeBanner.terc_button.text}
                          </Link>
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
                      __html: content.VideoDocumentario.title
                    }}
                  ></span>
                }
                desc={content.VideoDocumentario.subtitle}
                caption={content.VideoDocumentario.video_description}
                videoId={content.VideoDocumentario.video_id}
              />
            </Element>

            <Element name="reunimos-argumentos">
              <TitleText
                title={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.StripText.title
                    }}
                  ></span>
                }
                text={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.StripText.paragraph
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
                      __html: content.QuoteConstituicao.title
                    }}
                  ></span>
                }
                buttonText={content.QuoteConstituicao.link_text}
                to={content.QuoteConstituicao.link_url}
                quotted={content.QuoteConstituicao.paragraph}
                bgc="#017300"
              />
            </Element>

            <Element name="lendo-mentes">
              <ImageArticle
                title={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.FourImagesBlock.title
                    }}
                  ></span>
                }
                text={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.FourImagesBlock.image_1.description
                    }}
                  ></span>
                }
                firstImage={content.FourImagesBlock.image_1.url}
                firstCapt={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.FourImagesBlock.image_1_description
                    }}
                  ></span>
                }
                secondImage={content.FourImagesBlock.image_2.url}
                secondCapt={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.FourImagesBlock.image_2_description
                    }}
                  ></span>
                }
                thirsdImage={content.FourImagesBlock.image_3.url}
                thirsdCapt={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.FourImagesBlock.image_3_description
                    }}
                  ></span>
                }
                fourthImage={content.FourImagesBlock.image_4.url}
                fourthCapt={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.FourImagesBlock.image_4_description
                    }}
                  ></span>
                }
              />
            </Element>

            <Element name="declaracao-alessandro-vieira">
              <S.StyledLQ>
                <LongQuote
                  title={
                    <span
                      dangerouslySetInnerHTML={{
                        __html: content.AlessandreVieira.title
                      }}
                    ></span>
                  }
                  text={
                    <span
                      dangerouslySetInnerHTML={{
                        __html: content.AlessandreVieira.body
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
                      __html: content.GotaDaAgua.title
                    }}
                  ></span>
                }
                subtitle={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.GotaDaAgua.description
                    }}
                  ></span>
                }
                text={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.GotaDaAgua.body
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
                        __html: content.SaidaBolsonaro.title
                      }}
                    ></span>
                  }
                  text={
                    <span
                      dangerouslySetInnerHTML={{
                        __html: content.SaidaBolsonaro.body
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
                      __html: content.ArrozComFuzil.title
                    }}
                  ></span>
                }
                text={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.ArrozComFuzil.description
                    }}
                  ></span>
                }
                firstImage={content.ArrozComFuzil.image.url}
                firstCapt={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.ArrozComFuzil.image_description
                    }}
                  ></span>
                }
                secondImage={content.ArrozComFuzil2.image.url}
                secondCapt={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.ArrozComFuzil2.image_description
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
                        __html: content.Anamatra.title
                      }}
                    ></span>
                  }
                  text={
                    <span
                      dangerouslySetInnerHTML={{
                        __html: content.Anamatra.body
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
                        __html: content.ArtigoMatilde.title
                      }}
                    ></span>
                  }
                  subtitle={
                    <span
                      dangerouslySetInnerHTML={{
                        __html: content.ArtigoMatilde.description
                      }}
                    ></span>
                  }
                  buttonLink={content.ArtigoMatilde.button_link}
                  buttonText={content.ArtigoMatilde.button_text}
                  image={content.ArtigoMatilde.image.url}
                  imageAlt={content.ArtigoMatilde.image_description}
                />
              </S.StyledLQ>
            </Element>

            <Element name="depoimento-carlos-ayres">
              <S.StyledLQ>
                <LongQuote
                  title={
                    <span
                      dangerouslySetInnerHTML={{
                        __html: content.CarlosAyres.title
                      }}
                    ></span>
                  }
                  text={
                    <span
                      dangerouslySetInnerHTML={{
                        __html: content.CarlosAyres.body
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
                  days: content.ContagemProgressiva.days,
                  hours: content.ContagemProgressiva.hours,
                  seconds: content.ContagemProgressiva.minutes,
                  minutes: content.ContagemProgressiva.seconds
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

            <Element name="dedicacao-final">
              <FinalArticle
                text={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.FotoPB.title
                    }}
                  ></span>
                }
                image={content.FotoPB.image.url}
                imageSubtitle={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.FotoPB.description
                    }}
                  ></span>
                }
                elements={content.Credits}
              />
            </Element>

            <Footer
              links={content.FooterLinks.map((item) => {
                return {
                  to: item.target,
                  label: item.label
                }
              })}
            />
          </S.Wrapper>
        </motion.div>
      )}
      )
    </>
  )
}

export default OUltimoRecurso
