import Image from 'next/image'
import { Container } from 'components/UI'
import { Col, Row } from 'react-bootstrap'

import Fade from 'react-reveal/Fade'

import * as S from './styles'

type ImageTextProps = {
  title: JSX.Element
  desc: JSX.Element
  image: string
  type: string
}

const ImageText = ({ title, desc, type, image }: ImageTextProps) => {
  return (
    <S.ImageTextWrapper>
      <Container>
        <>
          <Row>
            <Col style={{ order: type === 'left' ? 0 : 2 }} lg={6}>
              <Fade right>
                <S.ImageTextHeader
                  style={{ textAlign: type === 'left' ? 'right' : 'left' }}
                >
                  <h2 className="title">{title}</h2>
                  <p className="desc">{desc}</p>
                </S.ImageTextHeader>
              </Fade>
            </Col>
            <Col lg={6}>
              <Fade left>
                <S.ImageTextImg>
                  <Image
                    placeholder="blur"
                    blurDataURL={image}
                    src={image}
                    layout={`fill`}
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
