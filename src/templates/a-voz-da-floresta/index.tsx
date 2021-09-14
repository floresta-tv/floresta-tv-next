import { Button } from '../../components/UI'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Element, Link as ScrollLink } from 'react-scroll'
import { useTranslations } from 'next-intl'

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

import * as animations from './animations'
import * as S from './styles'

const VozDaFloresta = () => {
  const t = useTranslations('a-voz-da-floresta')

  return (
    <motion.div key={6} {...animations.wrapper}>
      <ContactButton />
      <S.Wrapper>
        <Element name="home">
          <BannerFull
            items={[
              {
                backgroundAlt:
                  'Homem indígena cantando com expressão de grito, expressando fortemente sua voz',
                background: '/img/homem_indigena_banner.png',
                title: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t.raw('bannerfull1.item1.title')
                    }}
                  ></span>
                ),
                desc: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t.raw('bannerfull1.item1.desc')
                    }}
                  ></span>
                ),
                links: (
                  <>
                    <Link passHref={true} href="/equipe">
                      <a href="#" style={{ textDecoration: 'none' }}>
                        <Button variant="white">
                          {t.raw('bannerfull1.item1.botao-1')}
                        </Button>
                      </a>
                    </Link>
                    <ScrollLink to="carta-aberta">
                      <Button variant="green">
                        {t.raw('bannerfull1.item1.botao-2')}
                      </Button>
                    </ScrollLink>
                    <Link passHref={true} href="/contato">
                      <a href="#" style={{ textDecoration: 'none' }}>
                        <Button variant="transparent">
                          {t.raw('bannerfull1.item1.botao-3')}
                        </Button>
                      </a>
                    </Link>
                  </>
                )
              },
              {
                backgroundAlt:
                  'Menino indígena coberto de Urucum em cima da Bandeira do Brasil',
                backgroundPosition: 'center 40% !important',
                background: '/img/indigena_com_urucum_banner.png',
                title: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t.raw('bannerfull1.item2.title')
                    }}
                  ></span>
                ),
                subtitle: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t.raw('bannerfull1.item2.desc')
                    }}
                  ></span>
                ),
                links: (
                  <>
                    <Link passHref={true} href="/urucum-na-bandeira">
                      <a href="#" style={{ textDecoration: 'none' }}>
                        <Button variant="green">
                          {t.raw('bannerfull1.item2.botao-1')}
                        </Button>
                      </a>
                    </Link>
                  </>
                )
              },
              {
                backgroundAlt:
                  'Protesto indígenas em Brasília sobre o Marco Temporal',
                backgroundPosition: 'center 40% !important',
                background:
                  '/img/protesto_indigenas_brasilia_marco_temporal.png',
                title: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t.raw('bannerfull1.item3.title')
                    }}
                  ></span>
                ),
                desc: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t.raw('bannerfull1.item3.desc')
                    }}
                  ></span>
                ),
                links: (
                  <>
                    <Link passHref={true} href="/o-ultimo-recurso">
                      <a href="#" style={{ textDecoration: 'none' }}>
                        <Button variant="green">
                          {t.raw('bannerfull1.item3.botao-1')}
                        </Button>
                      </a>
                    </Link>
                  </>
                )
              },
              {
                backgroundAlt:
                  'Protesto de mulheres indígenas em Brasília sobre o Marco Temporal',
                backgroundPosition: 'center 40% !important',
                width: 'extralarge',
                background: '/img/protesto_mulheres_indigenas_brasilia.jpg',
                title: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t.raw('bannerfull1.item4.title')
                    }}
                  ></span>
                ),
                desc: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t.raw('bannerfull1.item4.desc')
                    }}
                  ></span>
                ),
                links: (
                  <>
                    <Link passHref={true} href="/marcha-mulheres-indigenas">
                      <a href="#" style={{ textDecoration: 'none' }}>
                        <Button variant="green">
                          {t.raw('bannerfull1.item4.botao-1')}
                        </Button>
                      </a>
                    </Link>
                  </>
                )
              }
            ]}
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

        <Element name="carta-aberta">
          <ArticlePreview
            bgc={`#fff6cc`}
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
            buttonText={
              <span>
                {t.raw('articlepreview1.botao')} <Signature size={24} />
              </span>
            }
            buttonLink={`https://www.change.org/p/carta-aberta-dos-povos-origin%C3%A1rios-do-brasil-contagem-progressiva`}
            image={`/img/mulheres_indigenas_em_brasilia_segurando_velas_banner.png`}
            imageAlt={`Mulheres indígenas em Brasília segurando velas`}
            body={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('articlepreview1.body')
                }}
              ></span>
            }
            boxtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('articlepreview1.box-title')
                }}
              ></span>
            }
            boxdesc={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('articlepreview1.box-desc')
                }}
              ></span>
            }
          />
        </Element>

        <Element name="autonomia-cultural">
          <HeroBlock
            image={
              '/img/indigenas_usando_equipamento_de_gravacao_na_natureza.png'
            }
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('heroblock1.title')
                }}
              ></span>
            }
            body={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('heroblock1.body')
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
                  __html: t.raw('videoblock2.title')
                }}
              ></span>
            }
            desc={t.raw('videoblock2.desc')}
            caption={t.raw('videoblock2.caption')}
            videoId={`7HzO-IiJZYw`}
          />
        </Element>

        <Element name="protecao-cultural">
          <DoubleImage
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('doubleimage1.title')
                }}
              ></span>
            }
            subtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('doubleimage1.subtitle')
                }}
              ></span>
            }
            image1={`/img/indigena_escrevendo_rabiscando_tablet.png`}
            image2={`/img/indigena_usando_tablet_tecnologia.png`}
            caption1={t.raw('doubleimage1.caption1')}
            caption2={t.raw('doubleimage1.caption2')}
          />
        </Element>

        <Element name="amazonia-a-live">
          <VideoBackground
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('videobackground1.title')
                }}
              ></span>
            }
            background={`/img/amazonia_a_live_background.png`}
            desc={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('videobackground1.desc')
                }}
              ></span>
            }
            caption={t.raw('videobackground1.caption')}
            videoId={`9qbc0xnPQNI`}
          />
        </Element>

        <Element name="chief-phill">
          <VideoBlockHor
            bgc={`#ffd7d7`}
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('videoblockhor1.title')
                }}
              ></span>
            }
            desc={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('videoblockhor1.body')
                }}
              ></span>
            }
            caption={`Vídeo do Chief Phill compartilhando sua sabedoria.`}
            videoId={`0bDVbECBgcM`}
          />
        </Element>

        <Element name="biblioteca-viva">
          <ImageText
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('imagetext1.title')
                }}
              ></span>
            }
            desc={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('imagetext1.desc')
                }}
              ></span>
            }
            image={`/img/sementes_no_chao_da_floresta.png`}
            imageAlt={`Sementes no chão da floresta`}
            type={'right'}
          />
        </Element>
      </S.Wrapper>
      <Footer
        links={[
          {
            label: t.raw('footer-links.link-1'),
            to: 'home'
          },
          {
            label: t.raw('footer-links.link-2'),
            to: 'documentario-em-tempo-real'
          },
          {
            label: t.raw('footer-links.link-3'),
            to: 'contagem-progressiva'
          },
          {
            label: t.raw('footer-links.link-3'),
            to: 'mapu-huni-kui'
          },
          {
            label: t.raw('footer-links.link-4'),
            to: 'chief-phill'
          },
          {
            label: t.raw('footer-links.link-5'),
            to: 'protecao-cultural'
          },
          {
            label: t.raw('footer-links.link-6'),
            to: 'amazonia-a-live'
          },
          {
            label: t.raw('footer-links.link-7'),
            to: 'biblioteca-viva'
          }
        ]}
      />
    </motion.div>
  )
}

export default VozDaFloresta
