import { Container } from 'components/UI'

import Zoom from 'react-reveal/Zoom'

import * as S from './styles'

type HeaderTextProps = {
  // title: JSX.Element
  text: JSX.Element
  bgc?: string
  buttonText: string
  to: string
  quotted: string
}

const SimpleQuoteWithButton = ({
  text,
  bgc,
  buttonText,
  to,
  quotted
}: HeaderTextProps) => {
  return (
    <S.HeaderTextWrapper bgc={bgc}>
      <Container>
        <>
          <a href={to} className="link">
            —<br />
            {buttonText}
            <br />—
          </a>
          <S.HeaderTextHeader>
            <Zoom>
              <p className="desc">{text}</p>
              <p className="quotted">— {quotted} —</p>
            </Zoom>
          </S.HeaderTextHeader>
        </>
      </Container>
    </S.HeaderTextWrapper>
  )
}

export default SimpleQuoteWithButton
