import { motion } from 'framer-motion'
import { Element } from 'react-scroll'

import {
  Medium as MediumIcon,
  Instagram as InstagramIcon,
  Whatsapp as WhatsappIcon,
  Youtube as YoutubeIcon,
  Twitter as TwitterIcon,
  Discord as DiscordIcon
} from '@styled-icons/boxicons-logos'

import BannerFull from 'components/Blocos/BannerFull'
import Footer from 'components/Footer'

import * as animations from './animations'
import * as S from './styles'

const SejaUmVoluntario = () => {
  return (
    <motion.div key={6} {...animations.wrapper}>
      <S.Wrapper>
        <Element name="home">
          <BannerFull
            items={[
              {
                position: 'center',
                textAlign: 'center',
                background: '/img/familia-florestatv-2.png',
                title: (
                  <span>
                    Faça parte da <br />
                    Nossa família
                  </span>
                ),
                desc: (
                  <span>
                    Você acredita que pode aliar seus potênciais únicos ao
                    Movimento Floresta.TV e juntos servirmos ao coletivo e o
                    auxílio dos Povos Originários?
                    <br />
                    <b>Entre já em contato e se integre conosco!</b>
                    <br />
                  </span>
                ),
                links: (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <S.WhatsappLink
                        href="https://api.whatsapp.com/send?phone=554891818781&text=Hey!%20Estou%20em%20entrando%20em%20SejaUmVoluntario%20atrav%C3%A9s%20do%20website%20Floresta.TV"
                        target="_blank"
                      >
                        Chamar no Whatsapp <WhatsappIcon size={30} />
                      </S.WhatsappLink>
                      <S.SocialLinks>
                        <S.SocialLink
                          target="_blank"
                          href="https://medium.com/florestatv/about"
                        >
                          <MediumIcon />
                        </S.SocialLink>
                        <S.SocialLink
                          target="_blank"
                          href="https://www.instagram.com/florestatv/"
                        >
                          <InstagramIcon />
                        </S.SocialLink>

                        <S.SocialLink
                          target="_blank"
                          href="https://www.youtube.com/channel/UCo9JpvxflH3WP6vms6EBDYQ"
                        >
                          <YoutubeIcon />
                        </S.SocialLink>
                        <S.SocialLink>
                          <TwitterIcon />
                        </S.SocialLink>
                        <S.SocialLink
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
            label: 'Seja Um Voluntário',
            to: 'home'
          }
        ]}
      />
    </motion.div>
  )
}

export default SejaUmVoluntario
