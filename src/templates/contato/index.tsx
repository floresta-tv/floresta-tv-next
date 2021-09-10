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

const Contato = () => {
  return (
    <motion.div key={6} {...animations.wrapper}>
      <S.Wrapper>
        <Element name="home">
          <BannerFull
            items={[
              {
                position: 'center',
                textAlign: 'center',
                background: '/img/povo_indigena_huni_kuin-2.png',
                title: (
                  <span>
                    Como podemos <br />
                    ajudar?
                  </span>
                ),
                desc: (
                  <span>
                    Nossa equipe de talentos está a disposição de causas
                    coletivas que levem auxílio, suporte e benefício aos Povos
                    Originários.
                    <br />
                    <b>Contate-nos por:</b>
                  </span>
                ),
                links: (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <S.WhatsappLink
                        href="https://api.whatsapp.com/send?phone=55984457911&text=Hey!%20Estou%20em%20entrando%20em%20contato%20atrav%C3%A9s%20do%20website%20Floresta.TV"
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
            label: 'Entre em contato',
            to: 'home'
          }
        ]}
      />
    </motion.div>
  )
}

export default Contato
