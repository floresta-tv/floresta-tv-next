import Image from 'next/image'

import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'

import {
  Medium as MediumIcon,
  Instagram as InstagramIcon,
  Youtube as YoutubeIcon,
  Twitter as TwitterIcon,
  Discord as DiscordIcon
} from '@styled-icons/boxicons-logos'
import Fade from 'react-reveal/Fade'

import * as S from './styles'

const Footer = () => {
  return (
    <Fade>
      <S.Wrapper>
        <S.Content>
          <S.Grid>
            <S.GridColumn>
              <S.Brand>
                <Link href="/" passHref={true}>
                  <Image
                    placeholder="blur"
                    blurDataURL="/img/logo_florestatv_vertical.png"
                    src="/img/logo_florestatv_vertical.png"
                    width={230}
                    height={170}
                  />
                </Link>
              </S.Brand>
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
            </S.GridColumn>
            <S.GridColumn>
              <S.GridTitle>Nesta página:</S.GridTitle>
              <S.GridList>
                <S.GridListItem>
                  <ScrollLink to="home">
                    <a href="#">Ouvir a voz da floresta</a>
                  </ScrollLink>
                </S.GridListItem>
                <S.GridListItem>
                  <ScrollLink to="documentario-em-tempo-real">
                    <a href="#">Documentário em tempo real</a>
                  </ScrollLink>
                </S.GridListItem>
                <S.GridListItem>
                  <ScrollLink to="contagem-progressiva">
                    <a href="#">Contagem progressiva</a>
                  </ScrollLink>
                </S.GridListItem>
                <S.GridListItem>
                  <ScrollLink to="carta-aberta">
                    <a href="#">Carta aberta</a>
                  </ScrollLink>
                </S.GridListItem>
                <S.GridListItem>
                  <ScrollLink to="mapu-huni-kui">
                    <a href="#">Mapu Huni Kuī</a>
                  </ScrollLink>
                </S.GridListItem>
                <S.GridListItem>
                  <ScrollLink to="chief-phill">
                    <a href="#">Chief Phil Lane Jr.</a>
                  </ScrollLink>
                </S.GridListItem>
                <S.GridListItem>
                  <ScrollLink to="protecao-cultural">
                    <a href="#">Proteção da cultura</a>
                  </ScrollLink>
                </S.GridListItem>
                <S.GridListItem>
                  <ScrollLink to="amazonia-a-live">
                    <a href="#">Amazônia aLive</a>
                  </ScrollLink>
                </S.GridListItem>
                <S.GridListItem>
                  <ScrollLink to="biblioteca-viva">
                    <a href="#">A biblioteca viva da floresta</a>
                  </ScrollLink>
                </S.GridListItem>
              </S.GridList>
            </S.GridColumn>

            <S.GridColumn>
              <S.GridTitle>Outras páginas:</S.GridTitle>
              <S.GridList>
                <S.GridListItem>
                  <Link href="/">A voz da floresta</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/dia-da-amazonia">Dia da amazônia</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/marco-ancestral">Marco ancestral</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/equipe">Nossa equipe</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/blog">Nosso Blog</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/contato">Entre em contato</Link>
                </S.GridListItem>
              </S.GridList>
            </S.GridColumn>

            <S.GridColumn>
              <S.GridTitle>Outras iniciativas:</S.GridTitle>
              <S.GridList>
                <S.GridListItem>
                  <Link href="/">Floresta TV</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/floresta-coin">Floresta Coin</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/floresta-wiki">Floresta Wiki</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/floresta-map">Floresta Maps</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/floresta-network">Floresta Network</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/floresta-nftmarketplace">
                    Floresta NFTMarketplace
                  </Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/floresta-permacultura">
                    Floresta Permacultura
                  </Link>
                </S.GridListItem>
              </S.GridList>
            </S.GridColumn>
          </S.Grid>
          <S.Copy>
            Todos os Direitos Demarcados aos Povos Originários. 25 de Agosto de
            2021 em Contagem Progressiva. 🌳
          </S.Copy>
        </S.Content>
      </S.Wrapper>
    </Fade>
  )
}

export default Footer
