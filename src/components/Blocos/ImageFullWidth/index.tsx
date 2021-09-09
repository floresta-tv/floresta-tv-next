import Image from 'next/image'

import { Container } from 'components/UI'
import { Row, Col } from 'react-bootstrap'

import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

import * as S from './styles'

type ImageFullWidthProps = {
  image: string
  caption: JSX.Element
  style?: {
    paddingTop: string
    marginTop: string
  }
}

const ImageFullWidth = ({ image, caption, style }: ImageFullWidthProps) => {
  return (
    <S.ImageFullWidthWrapper style={style}>
      <Container>
        <>
          <Row>
            <Col lg={12}>
              <Zoom>
                <S.ImageFullWidthImage>
                  <Image
                    placeholder="blur"
                    blurDataURL={image}
                    src={image}
                    layout="fill"
                  />
                </S.ImageFullWidthImage>
              </Zoom>
              <Fade bottom>
                <S.ImageFullWidthCaption>{caption}</S.ImageFullWidthCaption>
              </Fade>
            </Col>
          </Row>
        </>
      </Container>
    </S.ImageFullWidthWrapper>
  )
}

export default ImageFullWidth
