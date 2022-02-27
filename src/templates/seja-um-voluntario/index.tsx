import Head from 'next/head'
import { motion } from 'framer-motion'
import LanguagesButton from 'components/Navbar/LanguagesButton'
import { Element } from 'react-scroll'
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

const SejaUmVoluntario = ({ content }) => {
  return (
    <motion.div key={6} {...animations.wrapper}>
      <LanguagesButton />
      <S.Wrapper>
        <Head>
          <title> {content.title} | Floresta.TV</title>
        </Head>
        <Element name="home">
          <BannerFull
            items={[
              {
                backgroundAlt: content.BannerHeader.description,
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
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <S.WhatsappLink
                        href={content.button_href}
                        target="_blank"
                      >
                        {content.button_text}
                        <WhatsappIcon size={30} />
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

export default SejaUmVoluntario
