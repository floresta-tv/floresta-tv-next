import Image from 'next/image'
import Link from 'next/link'

import {
  Medium as MediumIcon,
  Instagram as InstagramIcon,
  Youtube as YoutubeIcon,
  Twitter as TwitterIcon
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
                <S.SocialLink>
                  <MediumIcon />
                </S.SocialLink>
                <S.SocialLink>
                  <InstagramIcon />
                </S.SocialLink>
                <S.SocialLink>
                  <YoutubeIcon />
                </S.SocialLink>
                <S.SocialLink>
                  <TwitterIcon />
                </S.SocialLink>
              </S.SocialLinks>
            </S.GridColumn>
            <S.GridColumn>
              <S.GridTitle>Nesta página:</S.GridTitle>
              <S.GridList>
                <S.GridListItem>
                  <a href="#">Ouvir a voz da floresta</a>
                </S.GridListItem>
                <S.GridListItem>
                  <a href="#">Documentário em tempo real</a>
                </S.GridListItem>
                <S.GridListItem>
                  <a href="#">Contagem progressiva</a>
                </S.GridListItem>
                <S.GridListItem>
                  <a href="#">Mapu Huni Kuī</a>
                </S.GridListItem>
                <S.GridListItem>
                  <a href="#">Proteção da cultura</a>
                </S.GridListItem>
                <S.GridListItem>
                  <a href="#">Amazônia aLive</a>
                </S.GridListItem>
                <S.GridListItem>
                  <a href="#">A biblioteca viva da floresta</a>
                </S.GridListItem>
              </S.GridList>
            </S.GridColumn>

            <S.GridColumn>
              <S.GridTitle>Outras páginas:</S.GridTitle>
              <S.GridList>
                <S.GridListItem>
                  <Link href="#">Dia da amazônia</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="#">Marco ancestral</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="#">A voz da floresta</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="#">Nossa equipe</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="#">Nosso Blog</Link>
                </S.GridListItem>
              </S.GridList>
            </S.GridColumn>

            <S.GridColumn>
              <S.GridTitle>Outras iniciativas:</S.GridTitle>
              <S.GridList>
                <S.GridListItem>
                  <Link href="#">Floresta TV</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="#">Floresta Coin</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="#">Floresta Wiki</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="#">Floresta Maps</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="#">Floresta Network</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="#">Floresta NFTMarketplace</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="#">Floresta Permacultura</Link>
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
