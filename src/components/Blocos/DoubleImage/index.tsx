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
  lit?: boolean
  bgc?: string
}

const DoubleImage = ({
  title,
  subtitle,
  image1,
  image2,
  caption1,
  caption2,
  lit,
  bgc
}: DoubleImageProps) => {
  return (
    <S.DoubleImageWrapper bgc={bgc} lit={lit}>
      {!lit ? (
        <S.DoubleImageDivisor>
          <Zoom>
            <Image
              placeholder="blur"
              blurDataURL={`/img/forma-triangular-de-arvore-com-raizes.png`}
              src={`/img/forma-triangular-de-arvore-com-raizes.png`}
              width={122}
              height={122}
              alt="Fígura de uma arvore separando o conteúdo da página"
            />
          </Zoom>
        </S.DoubleImageDivisor>
      ) : (
        <></>
      )}

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
                <S.DoubleImageImage lit={lit}>
                  <Image
                    placeholder="blur"
                    blurDataURL={image1}
                    src={image1}
                    layout="fill"
                    alt={caption1}
                  />
                </S.DoubleImageImage>
              </Zoom>
              <Fade bottom>
                <S.DoubleImageCaption lit={lit}>
                  {caption1}
                </S.DoubleImageCaption>
              </Fade>
            </Col>
            <Col lg={6}>
              <Zoom>
                <S.DoubleImageImage lit={lit}>
                  <Image
                    placeholder="blur"
                    blurDataURL={image2}
                    src={image2}
                    layout="fill"
                    alt={caption2}
                  />
                </S.DoubleImageImage>
              </Zoom>
              <Fade bottom>
                <S.DoubleImageCaption lit={lit}>
                  {caption2}
                </S.DoubleImageCaption>
              </Fade>
            </Col>
          </Row>
        </>
      </Container>
    </S.DoubleImageWrapper>
  )
}

export default DoubleImage
