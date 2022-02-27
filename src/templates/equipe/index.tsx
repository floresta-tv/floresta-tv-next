import { Button } from '../../components/UI'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { Element, Link as ScrollLink } from 'react-scroll'
import LanguagesButton from 'components/Navbar/LanguagesButton'
import { PEquipeT } from 'types/pages'

import BannerFull from 'components/Blocos/BannerFull'
import HeaderText from 'components/Blocos/HeaderText'
import ContactButton from 'components/ContactButton'
import ImageFullWidth from 'components/Blocos/ImageFullWidth'
import InfoCard from 'components/Blocos/InfoCard'
import { Container } from 'components/UI'
import Footer from 'components/Footer'

import * as animations from './animations'
import * as S from './styles'

type EquipeProps = {
  content: PEquipeT
}

const Equipe = ({ content }: EquipeProps) => {
  return (
    <motion.div key={6} {...animations.wrapper}>
      <ContactButton />
      <LanguagesButton />
      <S.Wrapper>
        <Head>
          <title>Equipe | Floresta.TV</title>
        </Head>
        <Element name="home">
          <BannerFull
            items={[
              {
                backgroundAlt: content.BannerHeader.title,
                width: 'large',
                position: 'center',
                textAlign: 'center',
                background: content.BannerHeader.image.url,
                title: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.BannerHeader.title
                    }}
                  ></span>
                ),
                desc: (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.BannerHeader.description
                    }}
                  ></span>
                ),
                links: (
                  <>
                    <ScrollLink to="equipe">
                      <Button variant="green">
                        {content.BannerHeader.first_button.text}
                      </Button>
                    </ScrollLink>

                    <Link passHref={true} href="/seja-um-voluntario">
                      <a href="#" style={{ textDecoration: 'none' }}>
                        <Button variant="white">
                          {content.BannerHeader.second_button.text}
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
                  __html: content.title
                }}
              ></span>
            }
            subtitle={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.description
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
                  __html: content.image_alt
                }}
              ></span>
            }
            imageAlt={content.image_alt}
            image={content.image.url}
          />
        </Element>

        <Element name="membros-equipe">
          <section style={{ padding: '80px 0' }}>
            <Container>
              <>
                {content.integrantes.map(({ integrante }, index) => (
                  <InfoCard
                    color={integrante.color_secondary}
                    bgc={integrante.color_primary}
                    key={index}
                    image={integrante.image.url}
                    title={<>{integrante.name}</>}
                    subtitle={<>{integrante.ocuppation}</>}
                    desc={<>{integrante.description}</>}
                    social={{
                      facebook: integrante.facebook_url,
                      instagram: integrante.instagram_url,
                      medium: integrante.medium_url,
                      website: integrante.website_url,
                      twitter: integrante.twitter_url
                    }}
                  />
                ))}
              </>
            </Container>
          </section>
        </Element>

        <Element name="familia-original-brasileira">
          <ImageFullWidth
            imageAlt={content.image_final_alt}
            image={content.image_final.url}
            caption={
              <span
                dangerouslySetInnerHTML={{
                  __html: content.image_final_alt
                }}
              ></span>
            }
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

export default Equipe
