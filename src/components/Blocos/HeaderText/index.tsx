import Image from 'next/image'

import { Container } from 'components/UI'

import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

import * as S from './styles'

type HeaderTextProps = {
  title: JSX.Element
  subtitle: JSX.Element
}

const HeaderText = ({ title, subtitle }: HeaderTextProps) => {
  return (
    <S.HeaderTextWrapper>
      <S.HeaderTextDivisor>
        <Zoom>
          <Image
            placeholder="blur"
            blurDataURL={`/img/forma-triangular-de-arvore-com-raizes.png`}
            src={`/img/forma-triangular-de-arvore-com-raizes.png`}
            width={122}
            height={122}
          />
        </Zoom>
      </S.HeaderTextDivisor>
      <Container>
        <>
          <S.HeaderTextHeader>
            <Fade bottom>
              <h2 className="title">{title}</h2>s
            </Fade>
            <Fade bottom>
              <p className="desc">{subtitle}</p>
            </Fade>
          </S.HeaderTextHeader>
        </>
      </Container>
    </S.HeaderTextWrapper>
  )
}

export default HeaderText
