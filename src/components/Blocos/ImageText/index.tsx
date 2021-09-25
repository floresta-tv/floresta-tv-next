import Image from 'next/image'
import { Container } from 'components/UI'
import { Col, Row } from 'react-bootstrap'

import Fade from 'react-reveal/Fade'

import * as S from './styles'

type ImageTextProps = {
  title: JSX.Element
  desc?: JSX.Element
  image: string
  imageAlt: string
  type?: string
  bgc?: string
  titleTop?: boolean
}

const ImageText = ({
  title,
  desc,
  type,
  image,
  imageAlt,
  bgc,
  titleTop
}: ImageTextProps) => {
  const columnSize = () => {
    return titleTop ? 12 : 6
  }
  return (
    <S.ImageTextWrapper bgc={bgc}>
      <Container>
        <>
          <Row>
            <Col style={{ order: type === 'left' ? 0 : 2 }} lg={columnSize()}>
              <Fade right>
                <S.ImageTextHeader
                  titleTop={titleTop}
                  style={{ textAlign: type === 'left' ? 'right' : 'left' }}
                >
                  <h2 className="title">{title}</h2>
                  <p className="desc">{desc}</p>
                </S.ImageTextHeader>
              </Fade>
            </Col>
            <Col lg={columnSize()}>
              <Fade left>
                <S.ImageTextImg titleTop={titleTop}>
                  <Image
                    placeholder="blur"
                    blurDataURL={image}
                    src={image}
                    layout={`fill`}
                    alt={imageAlt}
                  />
                </S.ImageTextImg>
              </Fade>
            </Col>
          </Row>
        </>
      </Container>
    </S.ImageTextWrapper>
  )
}

export default ImageText
