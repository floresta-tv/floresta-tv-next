import Image from 'next/image'

import { Container } from '../../../components/UI'

import * as S from './styles'

const GlossarioHeader = () => {
  return (
    <S.HeaderWrapper>
      <Container>
        <>
          <S.HeaderBackground>
            <Image
              placeholder="blur"
              src="/img/glossario-header.png"
              blurDataURL="/img/glossario-header.png"
              layout="fill"
            />
          </S.HeaderBackground>
          <S.HeaderContent>
            <S.HeaderTitle>Glossário</S.HeaderTitle>
            <S.HeaderSubTitle>Lorem ipsum dolor sit amet.</S.HeaderSubTitle>
          </S.HeaderContent>
        </>
      </Container>
    </S.HeaderWrapper>
  )
}

export default GlossarioHeader
