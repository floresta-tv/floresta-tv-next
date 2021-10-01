import { Button } from '../../components/UI'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { Element, Link as ScrollLink } from 'react-scroll'
import { useTranslations } from 'next-intl'

import BannerFull from 'components/Blocos/BannerFull'
import HeaderText from 'components/Blocos/HeaderText'
import ContactButton from 'components/ContactButton'
import ImageFullWidth from 'components/Blocos/ImageFullWidth'
import InfoCard from 'components/Blocos/InfoCard'
import { Container } from 'components/UI'
import Footer from 'components/Footer'

import * as animations from './animations'
import * as S from './styles'

type EquipePerson = {
  image: string
  title: JSX.Element
  subtitle: JSX.Element
  desc: JSX.Element
  bgc?: string
  color?: string
  social?: {
    website?: string
    instagram?: string
    medium?: string
    twitter?: string
    facebook?: string
  }
}

type EquipeData = EquipePerson[]

const Equipe = () => {
  const t = useTranslations('Equipe')
  const equipeData: EquipeData = [
    {
      image: '/img/guilherme_meneghelli_florestatv.jpg',
      title: <span>Guilherme Meneghelli</span>,
      subtitle: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.gui.subtitle')
          }}
        ></span>
      ),
      bgc: '#ff8d29',
      color: '#fff',
      desc: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.gui.desc')
          }}
        ></span>
      ),
      social: {
        medium: 'https://memeugabuga.medium.com/',
        twitter: 'https://twitter.com/memeugabuga',
        instagram: 'https://www.instagram.com/memeugabuga/'
      }
    },
    {
      image: '/img/mathilde_everare_florestatv.jpeg',
      bgc: '#58cc5c',
      color: '#023004',
      title: <span>Mathilde Everaere</span>,
      subtitle: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.mathilde.subtitle')
          }}
        ></span>
      ),
      desc: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.mathilde.desc')
          }}
        ></span>
      ),
      social: {
        facebook: 'https://www.facebook.com/mathilde.everaere/',
        medium: 'https://maah-tribu.medium.com/',
        instagram: 'https://www.instagram.com/maah.tribu/'
      }
    },
    {
      image: '/img/flora_dutra_florestatv.jpg',
      title: <span>Flora Dutra</span>,
      bgc: '#383cba',
      color: '#fff',
      subtitle: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.flora.subtitle')
          }}
        ></span>
      ),
      desc: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.flora.desc')
          }}
        ></span>
      ),
      social: {
        twitter: 'https://twitter.com/floradacasinha',
        medium: 'https://medium.com/@floradutra',
        instagram: 'https://instagram.com/floradutra/'
      }
    },
    {
      image: '/img/hugo.jpg',
      bgc: '#ffa844',
      color: '#4e3b07',
      title: <span>Hugo Takemoto</span>,
      subtitle: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.hugo.subtitle')
          }}
        ></span>
      ),
      desc: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.hugo.desc')
          }}
        ></span>
      ),
      social: {
        website: 'https://www.hugotakemoto.com',
        instagram: 'https://www.instagram.com/hugotakemoto/?hl=pt-br'
      }
    },
    {
      image: '/img/camila_saibro_florestatv.jpeg',
      title: <span>Camila Saibro</span>,
      bgc: '#ffd642',
      color: '#332801',
      subtitle: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.camila.subtitle')
          }}
        ></span>
      ),
      desc: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.camila.desc')
          }}
        ></span>
      ),
      social: {
        medium: 'https://camilasaibro.medium.com/',
        facebook: 'https://www.facebook.com/camisaibro',
        instagram: 'https://www.instagram.com/camilasaibro/'
      }
    },
    {
      image: '/img/eduardo_pizaroli_florestatv.jpeg',
      title: <span>Eduardo Pizaroli </span>,
      subtitle: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.eduardopiz.subtitle')
          }}
        ></span>
      ),
      bgc: '#25517d',
      color: '#fff',
      desc: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.eduardopiz.desc')
          }}
        ></span>
      ),
      social: {
        website: 'http://www.institutonawa.org/',
        facebook: 'https://www.facebook.com/institutonawa/',
        instagram: 'https://instagram.com/institutonawa'
      }
    },
    {
      image: '/img/betina_terra_florestatv.jfif',
      title: <span>Betina Terra</span>,
      subtitle: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.betina.subtitle')
          }}
        ></span>
      ),
      bgc: '#d42f45',
      color: '#ffffff',
      desc: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.betina.desc')
          }}
        ></span>
      ),
      social: {
        instagram: 'https://www.instagram.com/betinatirra/?hl=pt-br',
        medium: 'https://medium.com/@betinarwaskow'
      }
    },
    {
      image: '/img/advan_haschi_florestatv.jpeg',
      title: <span>Advan Haschi</span>,
      subtitle: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.advan.subtitle')
          }}
        ></span>
      ),
      bgc: '#280140',
      color: '#fff',
      desc: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.advan.desc')
          }}
        ></span>
      ),
      social: {
        medium: 'https://visionariovegetal.medium.com/',
        facebook:
          'https://www.facebook.com/Advan-Haschi-Vision%C3%A1rio-Vegetal-109359397505378/?ref=py_c',
        instagram: 'https://www.instagram.com/advanhx/'
      }
    },
    {
      image: '/img/vitor_regis_florestatv.jpeg',
      bgc: '#fff68c',
      color: '#634a04',
      title: <span>Vitor Régis de Ramos</span>,
      subtitle: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.vitor.subtitle')
          }}
        ></span>
      ),
      desc: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.vitor.desc')
          }}
        ></span>
      ),
      social: {
        website: 'https://www.vitorr.dev',
        medium: 'https://medium.com/@vitorregisrr',
        instagram: 'https://www.instagram.com/caminomedicina/'
      }
    },
    {
      image: '/img/fran_diniz_mulher_shakit_florestatv.jfif',
      title: <span>Fran Diniz, Mulher Shakti</span>,
      subtitle: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.fran.subtitle')
          }}
        ></span>
      ),
      bgc: '#8c3039',
      color: '#fff',
      desc: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.fran.desc')
          }}
        ></span>
      ),
      social: {
        instagram: 'https://www.instagram.com/mulhershakti/',
        website: 'https://www.temployoginipower.com/'
      }
    },
    {
      image: '/img/sheide_mara_florestatv.jfif',
      title: <span>Sheide Mara</span>,
      subtitle: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.sheide.subtitle')
          }}
        ></span>
      ),
      bgc: '#165c03',
      color: '#fff',
      desc: (
        <span
          dangerouslySetInnerHTML={{
            __html: t.raw('team.sheide.desc')
          }}
        ></span>
      ),
      social: {
        instagram: 'https://www.instagram.com/sheidemara/'
      }
    }
  ]
  return (
    <motion.div key={6} {...animations.wrapper}>
      <ContactButton />
      <S.Wrapper>
        <Head>
          <title>Equipe | Floresta.TV</title>
        </Head>
        <Element name="home">
          <BannerFull
            items={[
              {
                backgroundAlt: `Comunidade indigena banner`,
                width: 'large',
                position: 'center',
                textAlign: 'center',
                background: '/img/comunidade_indigena_banner.png',
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
                    <ScrollLink to="equipe">
                      <Button variant="green">
                        {t.raw('bannerfull.botao-1')}
                      </Button>
                    </ScrollLink>

                    <Link passHref={true} href="/seja-um-voluntario">
                      <a href="#" style={{ textDecoration: 'none' }}>
                        <Button variant="white">
                          {t.raw('bannerfull.botao-2')}
                        </Button>
                      </a>
                    </Link>
                  </>
                )
              }
            ]}
          />
        </Element>
        <Element name="equipe">
          <HeaderText
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('header.title')
                }}
              ></span>
            }
            subtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('header.desc')
                }}
              ></span>
            }
          />
        </Element>

        <Element name="equipe-florestatv">
          <ImageFullWidth
            style={{ paddingTop: '0', marginTop: '-20px' }}
            caption={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('image1.caption')
                }}
              ></span>
            }
            imageAlt={`Familia Floresta.tv`}
            image="/img/familia_floresta_tv.jpg"
          />
        </Element>

        <Element name="membros-equipe">
          <section style={{ padding: '80px 0' }}>
            <Container>
              <>
                {equipeData.map(
                  (
                    { image, title, subtitle, desc, social, color, bgc },
                    index
                  ) => (
                    <InfoCard
                      color={color}
                      bgc={bgc}
                      key={index}
                      image={image}
                      title={title}
                      subtitle={subtitle}
                      desc={desc}
                      social={social}
                    />
                  )
                )}
              </>
            </Container>
          </section>
        </Element>

        <Element name="familia-original-brasileira">
          <ImageFullWidth
            imageAlt={`Povo indígena huni kuin`}
            image="/img/povo_indigena_huni_kuin.jpg"
            caption={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw('image2.caption')
                }}
              ></span>
            }
          />
        </Element>
      </S.Wrapper>
      <Footer
        links={[
          {
            label: t.raw('footer-links.link1'),
            to: 'home'
          },
          {
            label: t.raw('footer-links.link2'),
            to: 'equipe'
          },
          {
            label: t.raw('footer-links.link3'),
            to: 'membros-equipe'
          },
          {
            label: t.raw('footer-links.link4'),
            to: 'familia-original-brasileira'
          }
        ]}
      />
    </motion.div>
  )
}

export default Equipe
