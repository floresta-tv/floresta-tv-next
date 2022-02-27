import { Button } from '../../components/UI'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Element, Link as ScrollLink } from 'react-scroll'

import { Signature } from '@styled-icons/fluentui-system-regular'

import BannerFull from 'components/Blocos/BannerFull'
import VideoBlock from 'components/Blocos/VideoBlock'
import VideoBlockHor from 'components/Blocos/VideoBlockHor'
import ImageText from 'components/Blocos/ImageText'
import VideoBackground from 'components/Blocos/VideoBackground'
import ProgressiveCount from 'components/Blocos/ProgressiveCount'
import ArticlePreview from 'components/Blocos/ArticlePreview'
import HeroBlock from 'components/Blocos/HeroBlock'
import DoubleImage from 'components/Blocos/DoubleImage'
import ContactButton from 'components/ContactButton'
import Footer from 'components/Footer'
import LanguageButton from 'components/Navbar/LanguagesButton'
import { PAVozDaFloresta } from 'types/pages'

import * as animations from './animations'
import * as S from './styles'

type VozDaFlorestaProps = {
  content: PAVozDaFloresta
}

const VozDaFloresta = ({ content }: VozDaFlorestaProps) => {
  return (
    <motion.div key={6} {...animations.wrapper}>
      <ContactButton />
      <LanguageButton />
      <S.Wrapper>
        <Element name="home">
          <BannerFull
            items={content.HomeCarrousel.FullCarouselItem.map((item) => {
              return {
                backgroundAlt: item.title,
                background: item.image.url,
                title: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.title
                    }}
                  ></span>
                ),
                desc: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.paragraph
                    }}
                  ></span>
                ),
                subtitle: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.subtitle
                    }}
                  ></span>
                ),
                links: (
                  <>
                    {item.whiteButtonHref && (
                      <Link passHref={true} href={item.whiteButtonHref}>
                        <a href="#" style={{ textDecoration: 'none' }}>
                          <Button variant="white">
                            {item.whiteButtonText}
                          </Button>
                        </a>
                      </Link>
                    )}

                    {item.greenButtonHref && item.greenButtonHref[0] === '/' ? (
                      <Link passHref={true} href={item.greenButtonHref}>
                        <a href="#" style={{ textDecoration: 'none' }}>
                          <Button variant="green">
                            {item.greenButtonText}
                          </Button>
                        </a>
                      </Link>
                    ) : (
                      <ScrollLink to={item.greenButtonHref}>
                        <Button variant="green">{item.greenButtonText}</Button>
                      </ScrollLink>
                    )}

                    {item.transparentButtonHref && (
                      <Link passHref={true} href={item.transparentButtonHref}>
                        <a href="#" style={{ textDecoration: 'none' }}>
                          <Button variant="transparent">
                            {item.transparentButtonText}
                          </Button>
                        </a>
                      </Link>
                    )}
                  </>
                )
              }
            })}
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
                  __html: content.ContagemProgressiva.description
                }}
              ></span>
            }
            caption={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.ContagemProgressiva.subtitle
                }}
              ></span>
            }
            background={content.ContagemProgressiva.image.url}
          />
        </Element>

        <Element name="carta-aberta">
          <ArticlePreview
            bgc={`#fff6cc`}
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.CartaAberta.title
                }}
              ></span>
            }
            subtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.CartaAberta.subtitle
                }}
              ></span>
            }
            buttonText={
              <span>
                {content.CartaAberta.button_text} <Signature size={24} />
              </span>
            }
            buttonLink={`https://www.change.org/p/carta-aberta-dos-povos-origin%C3%A1rios-do-brasil-contagem-progressiva`}
            image={`/img/mulheres_indigenas_em_brasilia_segurando_velas_banner.png`}
            imageAlt={`Mulheres indígenas em Brasília segurando velas`}
            body={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.CartaAberta.body
                }}
              ></span>
            }
            boxtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.CartaAberta.box_title
                }}
              ></span>
            }
            boxdesc={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.CartaAberta.box_content
                }}
              ></span>
            }
          />
        </Element>

        <Element name="autonomia-cultural">
          <HeroBlock
            image={content.AutonomiaBlock.image.url}
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.AutonomiaBlock.title
                }}
              ></span>
            }
            body={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.AutonomiaBlock.body
                }}
              ></span>
            }
          />
        </Element>

        <Element name="mapu-huni-kui">
          <VideoBlock
            bgc={`#c4ffadff`}
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.VideoMapu.title
                }}
              ></span>
            }
            desc={content.VideoMapu.subtitle}
            caption={content.VideoMapu.video_description}
            videoId={content.VideoMapu.video_id}
          />
        </Element>

        <Element name="protecao-cultural">
          <DoubleImage
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.ProtecaoCultura.title
                }}
              ></span>
            }
            subtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.ProtecaoCultura.description
                }}
              ></span>
            }
            image1={content.ProtecaoCultura.first_image.url}
            image2={content.ProtecaoCultura.second_image.url}
            caption1={content.ProtecaoCultura.first_image_alt}
            caption2={content.ProtecaoCultura.second_image_alt}
          />
        </Element>

        <Element name="amazonia-a-live">
          <VideoBackground
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.VideoAmazonia.title
                }}
              ></span>
            }
            background={`/img/amazonia_a_live_background.png`}
            desc={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.VideoAmazonia.subtitle
                }}
              ></span>
            }
            caption={content.VideoAmazonia.video_description}
            videoId={content.VideoAmazonia.video_id}
          />
        </Element>

        <Element name="chief-phill">
          <VideoBlockHor
            bgc={`#ffd7d7`}
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.ChiefPhill.title
                }}
              ></span>
            }
            desc={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.ChiefPhill.subtitle
                }}
              ></span>
            }
            caption={content.ChiefPhill.video_description}
            videoId={content.ChiefPhill.video_id}
          />
        </Element>

        <Element name="biblioteca-viva">
          <ImageText
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.BibliotecaImage.title
                }}
              ></span>
            }
            desc={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.BibliotecaImage.description
                }}
              ></span>
            }
            image={content.BibliotecaImage.image.url}
            imageAlt={content.BibliotecaImage.image_description}
            type={'right'}
          />
        </Element>
      </S.Wrapper>
      <Footer
        links={content.footer_links.map((item) => {
          return {
            to: item.target,
            label: item.label
          }
        })}
      />
    </motion.div>
  )
}

export default VozDaFloresta
