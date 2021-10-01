import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { useTranslations } from 'next-intl'
import Head from 'next/head'

import {
  Medium as MediumIcon,
  Instagram as InstagramIcon,
  Whatsapp as WhatsappIcon,
  Youtube as YoutubeIcon,
  Discord as DiscordIcon
} from '@styled-icons/boxicons-logos'

import BannerFull from 'components/Blocos/BannerFull'
import Footer from 'components/Footer'

import * as animations from './animations'
import * as S from './styles'

const Contato = () => {
  const t = useTranslations('Contato')
  return (
    <motion.div key={6} {...animations.wrapper}>
      <S.Wrapper>
        <Head>
          <title>Contato | Floresta.TV</title>
        </Head>
        <Element name="home">
          <BannerFull
            items={[
              {
                backgroundAlt: 'Povo Indígena Huni Kuin',
                width: 'large',
                position: 'center',
                textAlign: 'center',
                background: '/img/povo_indigena_huni_kuin-2.png',
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
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <S.WhatsappLink
                        href="https://api.whatsapp.com/send?phone=55984457911&text=Hey!%20Estou%20em%20entrando%20em%20contato%20atrav%C3%A9s%20do%20website%20Floresta.TV"
                        target="_blank"
                      >
                        {t.raw('bannerfull.botao-1')} <WhatsappIcon size={30} />
                      </S.WhatsappLink>
                      <S.SocialLinks>
                        <S.SocialLink
                          rel="noreferrer"
                          aria-label="Medium Floresta.tv"
                          target="_blank"
                          href="https://medium.com/florestatv/about"
                        >
                          <MediumIcon />
                        </S.SocialLink>
                        <S.SocialLink
                          aria-label="Instagram Floresta.tv"
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.instagram.com/florestatv/"
                        >
                          <InstagramIcon />
                        </S.SocialLink>

                        <S.SocialLink
                          rel="noreferrer"
                          target="_blank"
                          aria-label="Youtube Floresta.tv"
                          href="https://www.youtube.com/channel/UCo9JpvxflH3WP6vms6EBDYQ"
                        >
                          <YoutubeIcon />
                        </S.SocialLink>
                        {/* <S.SocialLink>
                  <TwitterIcon />
                </S.SocialLink> */}
                        <S.SocialLink
                          rel="noreferrer"
                          aria-label="Discord Floresta.tv"
                          target="_blank"
                          href="https://discord.gg/CSqAFfyM"
                        >
                          <DiscordIcon />
                        </S.SocialLink>
                      </S.SocialLinks>
                    </div>
                  </>
                )
              }
            ]}
          />
        </Element>
      </S.Wrapper>
      <Footer
        links={[
          {
            label: t.raw('footer-links.link1'),
            to: 'home'
          }
        ]}
      />
    </motion.div>
  )
}

export default Contato
