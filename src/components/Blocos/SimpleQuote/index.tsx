import { Container } from 'components/UI'

import Zoom from 'react-reveal/Zoom'

import * as S from './styles'

type HeaderTextProps = {
  // title: JSX.Element
  text: JSX.Element
  bgc?: string
}

const SimpleQuote = ({ text, bgc }: HeaderTextProps) => {
  return (
    <S.HeaderTextWrapper bgc={bgc}>
      <Container>
        <>
          <S.HeaderTextHeader>
            <Zoom>
              <p className="desc">{text}</p>
            </Zoom>
          </S.HeaderTextHeader>
        </>
      </Container>
    </S.HeaderTextWrapper>
  )
}

export default SimpleQuote
