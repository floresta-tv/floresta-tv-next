import { useState } from 'react'
import Link from 'next/link'
import * as S from './styles'

const GlossarioFooter = () => {
  const alphabet = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.split(
    ','
  )
  const [isOpen, setIsOpen] = useState(true)
  return (
    <S.Wrapper isOverlapVisible={isOpen}>
      <S.Container>
        <S.Content>
          <S.Title>Glossário de Finanças e Investimentos</S.Title>
          <S.Desc>
            Pesquise a(s) palavra(s) navegando pelo alfabeto abaixo
          </S.Desc>
          <S.List onClick={() => setIsOpen((old) => !old)}>
            {alphabet.map((letter, index) => (
              <Link key={index} href={`/glossario/${letter}`} passHref={true}>
                <S.Item>{letter}</S.Item>
              </Link>
            ))}
          </S.List>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}

export default GlossarioFooter
