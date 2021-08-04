import Image from 'next/image'
import Fade from 'react-reveal/Fade'

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
            <Fade bottom>
              <S.HeaderTitle>Glossário</S.HeaderTitle>
            </Fade>
            <Fade bottom delay={300}>
              <S.HeaderSubTitle>Lorem ipsum dolor sit amet.</S.HeaderSubTitle>
            </Fade>
          </S.HeaderContent>
        </>
      </Container>
    </S.HeaderWrapper>
  )
}

export default GlossarioHeader
