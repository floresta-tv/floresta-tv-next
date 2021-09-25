import { Container } from 'components/UI'

import Fade from 'react-reveal/Fade'

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
        <>
          <S.HeaderTextHeader>
            <Fade bottom>
              <h2 className="title">{title}</h2>
            </Fade>
            <Fade bottom>
              <p className="desc">{text}</p>
            </Fade>
          </S.HeaderTextHeader>
        </>
      </Container>
    </S.HeaderTextWrapper>
  )
}

export default LongQuote
