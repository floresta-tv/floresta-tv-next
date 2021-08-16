import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import { Element } from 'react-scroll'

import { Container } from '../../../components/UI'

import * as S from './styles'

type GlossarioMenuProps = {
  selectedWord?: {
    word: string
    description: string
  }

  selectedLetter?: string
}

const GlossarioMenu = ({
  selectedWord,
  selectedLetter
}: GlossarioMenuProps) => {
  const alphabet = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.split(
    ','
  )
  return (
    <Element name="glossario">
      <S.MenuWrapper>
        <Container>
          <S.MenuContent>
            <Fade bottom>
              <S.MenuTitle>Glossário de Finanças e Investimentos</S.MenuTitle>
            </Fade>
            <Fade bottom>
              <S.MenuDesc>
                Pesquise a(s) palavra(s) navegando pelo alfabeto abaixo
              </S.MenuDesc>
              <hr />
            </Fade>
            <S.MenuList>
              {alphabet.map((letter, index) => (
                <Link
                  scroll={false}
                  key={index}
                  href={`/glossario/${letter}?scroll=true`}
                  passHref={true}
                >
                  <S.MenuItem isActive={selectedLetter === letter}>
                    {letter}
                  </S.MenuItem>
                </Link>
              ))}
            </S.MenuList>

            {selectedLetter && (
              <S.MenuSelectedLetter>
                <Zoom>
                  <div className="upper">{selectedLetter}</div>
                  <div className="lower">{selectedLetter}</div>
                </Zoom>
              </S.MenuSelectedLetter>
            )}

            {selectedWord && (
              <S.MenuSelectedWord>
                <Zoom>
                  <S.MenuSelectedLetter>
                    <div className="word">{selectedWord.word}</div>
                  </S.MenuSelectedLetter>
                  {/* <S.MenuSelectedLetterDesc>
                  <div className="word">{selectedWord.description}</div>
                </S.MenuSelectedLetterDesc> */}
                </Zoom>
              </S.MenuSelectedWord>
            )}
          </S.MenuContent>
        </Container>
      </S.MenuWrapper>
    </Element>
  )
}

export default GlossarioMenu
