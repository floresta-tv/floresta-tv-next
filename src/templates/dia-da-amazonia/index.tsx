import { motion } from 'framer-motion'
import { useTranslations } from 'use-intl'
import { Element, Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'

import { Button } from 'components/UI'
import BannerFull from 'components/Blocos/BannerFull'
import ContactButton from 'components/ContactButton'
import Footer from 'components/Footer'

import * as animations from './animations'
import * as S from './styles'

const DiaDaAmazonia = () => {
  // const tpage = useTranslations('dia-da-amazonia')
  const tbanners = useTranslations('banners')

  return (
    <motion.div key={6} {...animations.wrapper}>
      <ContactButton />
      <S.Wrapper>
        <Element name="home">
          <BannerFull
            items={[
              {
                backgroundAlt:
                  'Menino indígena coberto de Urucum em cima da Bandeira do Brasil',
                backgroundPosition: 'center 40% !important',
                background: '/img/indigena_com_urucum_banner.png',
                title: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: tbanners.raw('item2.title')
                    }}
                  ></span>
                ),
                subtitle: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: tbanners.raw('item2.desc')
                    }}
                  ></span>
                ),
                links: (
                  <>
                    <ScrollLink to="home">
                      <Button variant="green">
                        {tbanners.raw('item2.botao-1')}
                      </Button>
                    </ScrollLink>
                  </>
                )
              },
              {
                backgroundAlt:
                  'Homem indígena cantando com expressão de grito, expressando fortemente sua voz',
                background: '/img/homem_indigena_banner.png',
                title: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: tbanners.raw('item1.title')
                    }}
                  ></span>
                ),
                desc: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: tbanners.raw('item1.desc')
                    }}
                  ></span>
                ),
                links: (
                  <>
                    <Link passHref={true} href="/">
                      <a href="#" style={{ textDecoration: 'none' }}>
                        <Button variant="green">
                          {tbanners.raw('item2.botao-1')}
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
                      __html: tbanners.raw('item3.title')
                    }}
                  ></span>
                ),
                desc: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: tbanners.raw('item3.desc')
                    }}
                  ></span>
                ),
                links: (
                  <>
                    <Link passHref={true} href="/o-ultimo-recurso">
                      <a href="#" style={{ textDecoration: 'none' }}>
                        <Button variant="green">
                          {tbanners.raw('item3.botao-1')}
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
                      __html: tbanners.raw('item4.title')
                    }}
                  ></span>
                ),
                desc: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: tbanners.raw('item4.desc')
                    }}
                  ></span>
                ),
                links: (
                  <>
                    <Link passHref={true} href="/marcha-mulheres-indigenas">
                      <a href="#" style={{ textDecoration: 'none' }}>
                        <Button variant="green">
                          {tbanners.raw('item4.botao-1')}
                        </Button>
                      </a>
                    </Link>
                  </>
                )
              },
              {
                backgroundAlt:
                  'Grande grupo de Indígenas protestando em Brasilía',
                background: '/img/protestos_indigenas-marco_ancestral.jpg',
                title: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: tbanners.raw('item5.title')
                    }}
                  ></span>
                ),
                desc: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: tbanners.raw('item5.desc')
                    }}
                  ></span>
                ),
                links: (
                  <>
                    <Link passHref={true} href="/marco-ancestral">
                      <a href="#" style={{ textDecoration: 'none' }}>
                        <Button variant="green">
                          {tbanners.raw('item5.botao-1')}
                        </Button>
                      </a>
                    </Link>
                  </>
                )
              }
            ]}
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
