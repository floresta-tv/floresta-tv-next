import { Container } from 'components/UI'

import Fade from 'react-reveal/Fade'

import * as S from './styles'

type HeaderTextProps = {
  // title: JSX.Element
  title: JSX.Element
  subtitle: JSX.Element
  text: JSX.Element
  image: string
}

const BackgroundText = ({ text, subtitle, title, image }: HeaderTextProps) => {
  return (
    <S.HeaderTextWrapper image={image}>
      <div className="background"></div>

      <Container>
        <>
          <S.HeaderTextHeader>
            <Fade bottom>
              <p className="title">{title}</p>
            </Fade>
          </S.HeaderTextHeader>
          <S.HeaderTextSubtitle>
            <Fade bottom>
              <p className="subtitle">{subtitle}</p>
            </Fade>
          </S.HeaderTextSubtitle>
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

export default BackgroundText
