import { Container } from 'components/UI'

import Fade from 'react-reveal/Fade'

import * as S from './styles'

type HeaderTextProps = {
  // title: JSX.Element
  text: JSX.Element
}

const SimpleText = ({ text }: HeaderTextProps) => {
  return (
    <S.HeaderTextWrapper>
      <Container>
        <>
          <S.HeaderTextHeader>
            <Fade bottom>
              <p className="desc">{text}</p>
            </Fade>
          </S.HeaderTextHeader>
        </>
      </Container>
    </S.HeaderTextWrapper>
  )
}

export default SimpleText
