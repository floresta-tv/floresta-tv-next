import { Container } from 'components/UI'

import Fade from 'react-reveal/Fade'

import * as S from './styles'

type HeaderTextProps = {
  // title: JSX.Element
  title: JSX.Element
  text: JSX.Element
}

const TitleText = ({ text, title }: HeaderTextProps) => {
  return (
    <S.HeaderTextWrapper>
      <Container>
        <>
          <S.HeaderTextHeader>
            <Fade bottom>
              <p className="title">{title}</p>
            </Fade>
          </S.HeaderTextHeader>
          <S.HeaderTextParagraph>
            <Fade bottom>
              <p className="desc">{text}</p>
            </Fade>
          </S.HeaderTextParagraph>
        </>
      </Container>
    </S.HeaderTextWrapper>
  )
}

export default TitleText
