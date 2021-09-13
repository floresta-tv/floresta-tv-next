import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'

import {
  Medium as MediumIcon,
  Instagram as InstagramIcon,
  Youtube as YoutubeIcon,
  Discord as DiscordIcon
} from '@styled-icons/boxicons-logos'
import Fade from 'react-reveal/Fade'

import * as S from './styles'

type FooterLink = {
  label: string
  to: string
}
type FooterProps = {
  links: FooterLink[]
}

const Footer = ({ links }: FooterProps) => {
  const t = useTranslations('footer')

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
                    alt="Logo Floresta.tv vertical"
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
                {/* <S.SocialLink>
                  <TwitterIcon />
                </S.SocialLink> */}
                <S.SocialLink
                  target="_blank"
                  href="https://discord.gg/CSqAFfyM"
                >
                  <DiscordIcon />
                </S.SocialLink>
              </S.SocialLinks>
            </S.GridColumn>
            <S.GridColumn>
              <S.GridTitle>{t('nesta-pagina')}</S.GridTitle>
              <S.GridList>
                {links.map(({ label, to }, index) => (
                  <S.GridListItem key={index}>
                    <ScrollLink to={to}>
                      <a href="#">{label}</a>
                    </ScrollLink>
                  </S.GridListItem>
                ))}
              </S.GridList>
            </S.GridColumn>

            <S.GridColumn>
              <S.GridTitle>{t('outras-paginas')}</S.GridTitle>
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
                  <Link href="/equipe">{t('nossa-equipe')}</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/blog">{t('nosso-blog')}</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/contato">{t('contato')}</Link>
                </S.GridListItem>
              </S.GridList>
            </S.GridColumn>

            <S.GridColumn>
              <S.GridTitle>{t('outros-projetos')}</S.GridTitle>
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
          <S.Copy>{t('copy')}</S.Copy>
        </S.Content>
      </S.Wrapper>
    </Fade>
  )
}

export default Footer
