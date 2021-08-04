import Link from 'next/link'
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Whatsapp as WhatsappIcon,
  Youtube as YoutubeIcon
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
              <S.GridTitle>Onde Estamos</S.GridTitle>
              <S.GridList>
                <S.GridListItem>
                  <strong>São Paulo</strong>
                  <span className="adress">
                    Alameda Santos, 1165 cj 321, Jd. Paulista, São Paulo - SP,
                    01419-001s
                  </span>
                </S.GridListItem>
                <S.GridListItem>
                  <strong>Sorocaba</strong>
                  <span className="adress">
                    Rua Eugênio Rabello, 74 - Jd.Paulistano, Sorocaba - SP,
                    18040-436
                  </span>
                </S.GridListItem>
              </S.GridList>
            </S.GridColumn>

            <S.GridColumn>
              <S.GridTitle>Sobre nós</S.GridTitle>
              <S.GridList>
                <S.GridListItem>
                  <Link href="/quem-somos">Quem somos</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/politica-de-privacidade">
                    Política de privacidade
                  </Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/trabalhe-conosco">Trabalhe conosco</Link>
                </S.GridListItem>
              </S.GridList>
            </S.GridColumn>

            <S.GridColumn>
              <S.GridTitle>Ferramentas</S.GridTitle>
              <S.GridList>
                <S.GridListItem>
                  <Link href="/melhores-fundos">Melhores Fundos </Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/comparacao-de-fundos">Comparação de fundos</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/lista-de-fundos">Lista de fundos</Link>
                </S.GridListItem>
              </S.GridList>
            </S.GridColumn>

            <S.GridColumn>
              <S.GridTitle>Conteúdos</S.GridTitle>
              <S.GridList>
                <S.GridListItem>
                  <Link href="/blog">Blog</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/materias">Matérias</Link>
                </S.GridListItem>
                <S.GridListItem>
                  <Link href="/cursos">Cursos</Link>
                </S.GridListItem>
              </S.GridList>
            </S.GridColumn>
          </S.Grid>
        </S.Content>
      </S.Wrapper>
      <S.CopyWrapper>
        <S.CopyContainer>
          <S.CopyContent>
            <S.CopyInfo>
              <span>Mais informações</span>
              <span>
                <a href="mailto:contato@meuportfol.io" rel="noreferrer">
                  contato@meuportfol.io
                </a>
              </span>
              <span>
                <a href="phoneto:+5511930276739" rel="noreferrer">
                  +55 11 9 3027 6739
                </a>
              </span>
            </S.CopyInfo>

            <S.CopySocial>
              <S.CopySocialItem href="https://www.facebook.com" target="_blank">
                <FacebookIcon width={40} fill="#fff" />
              </S.CopySocialItem>
              <S.CopySocialItem
                href="https://www.instagram.com"
                target="_blank"
              >
                <InstagramIcon width={35} fill="#fff" />
              </S.CopySocialItem>
              <S.CopySocialItem href="https://www.twitter.com" target="_blank">
                <TwitterIcon width={35} fill="#fff" />
              </S.CopySocialItem>
              <S.CopySocialItem href="https://www.whatsapp.com" target="_blank">
                <WhatsappIcon width={35} fill="#fff" />
              </S.CopySocialItem>
              <S.CopySocialItem href="https://www.youtube.com" target="_blank">
                <YoutubeIcon width={35} fill="#fff" />
              </S.CopySocialItem>
            </S.CopySocial>
          </S.CopyContent>
        </S.CopyContainer>
      </S.CopyWrapper>
    </Fade>
  )
}

export default Footer
