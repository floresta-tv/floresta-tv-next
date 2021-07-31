import Link from 'next/link'

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
    <S.MenuWrapper>
      <Container>
        <S.MenuContent>
          <S.MenuTitle>Glossário de Finanças e Investimentos</S.MenuTitle>
          <S.MenuDesc>
            Pesquise a(s) palavra(s) navegando pelo alfabeto abaixo
          </S.MenuDesc>
          <hr />
          <S.MenuList>
            {alphabet.map((letter, index) => (
              <Link
                scroll={false}
                key={index}
                href={`/glossario/${letter}`}
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
              <div className="upper">{selectedLetter}</div>
              <div className="lower">{selectedLetter}</div>
            </S.MenuSelectedLetter>
          )}

          {selectedWord && (
            <S.MenuSelectedWord>
              <S.MenuSelectedLetter>
                <div className="word">{selectedWord.word}</div>
              </S.MenuSelectedLetter>
              <S.MenuSelectedLetterDesc>
                <div className="word">{selectedWord.description}</div>
              </S.MenuSelectedLetterDesc>
            </S.MenuSelectedWord>
          )}
        </S.MenuContent>
      </Container>
    </S.MenuWrapper>
  )
}

export default GlossarioMenu
