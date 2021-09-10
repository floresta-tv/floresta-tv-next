import Image from 'next/image'

import { Container } from 'components/UI'
import { Row, Col } from 'react-bootstrap'

import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

import * as S from './styles'

type DoubleImageProps = {
  title: JSX.Element
  subtitle: JSX.Element
  image1: string
  image2: string
  caption1: string
  caption2: string
}

const DoubleImage = ({
  title,
  subtitle,
  image1,
  image2,
  caption1,
  caption2
}: DoubleImageProps) => {
  return (
    <S.DoubleImageWrapper>
      <S.DoubleImageDivisor>
        <Zoom>
          <Image
            placeholder="blur"
            blurDataURL={`/img/forma-triangular-de-arvore-com-raizes.png`}
            src={`/img/forma-triangular-de-arvore-com-raizes.png`}
            width={122}
            height={122}
          />
        </Zoom>
      </S.DoubleImageDivisor>
      <Container>
        <>
          <S.DoubleImageHeader>
            <Fade bottom>
              <h2 className="title">{title}</h2>
            </Fade>
            <Fade bottom>
              <p className="desc">{subtitle}</p>
            </Fade>
          </S.DoubleImageHeader>
          <Row>
            <Col lg={6}>
              <Zoom>
                <S.DoubleImageImage>
                  <Image
                    placeholder="blur"
                    blurDataURL={image1}
                    src={image1}
                    layout="fill"
                  />
                </S.DoubleImageImage>
              </Zoom>
              <Fade bottom>
                <S.DoubleImageCaption>{caption1}</S.DoubleImageCaption>
              </Fade>
            </Col>
            <Col lg={6}>
              <Zoom>
                <S.DoubleImageImage>
                  <Image
                    placeholder="blur"
                    blurDataURL={image2}
                    src={image2}
                    layout="fill"
                  />
                </S.DoubleImageImage>
              </Zoom>
              <Fade bottom>
                <S.DoubleImageCaption>{caption2}</S.DoubleImageCaption>
              </Fade>
            </Col>
          </Row>
        </>
      </Container>
    </S.DoubleImageWrapper>
  )
}

export default DoubleImage
