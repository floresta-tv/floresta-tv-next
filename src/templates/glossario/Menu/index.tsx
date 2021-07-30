import { useState, useEffect } from 'react'
import Link from 'next/link'

import { Container } from '../../../components/UI'

import * as S from './styles'

const GlossarioMenu = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>()
  const alphabet = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.split(
    ','
  )

  useEffect(() => {
    setSelectedLetter('a')
  }, [])

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
                <S.MenuItem>{letter}</S.MenuItem>
              </Link>
            ))}
          </S.MenuList>

          <S.MenuSelectedLetter>
            <div className="upper">{selectedLetter}</div>
            <div className="lower">{selectedLetter}</div>
          </S.MenuSelectedLetter>
        </S.MenuContent>
      </Container>
    </S.MenuWrapper>
  )
}

export default GlossarioMenu
