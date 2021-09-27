import { Container } from 'components/UI'

import Zoom from 'react-reveal/Zoom'

import * as S from './styles'

type HeaderTextProps = {
  title: JSX.Element
  text: JSX.Element
  bgc?: string
}

const LongQuote = ({ text, bgc, title }: HeaderTextProps) => {
  return (
    <S.HeaderTextWrapper bgc={bgc}>
      <Container>
        <Zoom>
          <S.HeaderTextHeader>
            <h2 className="title">{title}</h2>

            <p className="desc">{text}</p>
          </S.HeaderTextHeader>
        </Zoom>
      </Container>
    </S.HeaderTextWrapper>
  )
}

export default LongQuote
