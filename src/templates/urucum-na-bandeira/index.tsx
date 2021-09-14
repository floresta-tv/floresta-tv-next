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

const UrucumNaBandeira = () => {
  const t = useTranslations('urucum-na-bandeira')

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

export default UrucumNaBandeira
