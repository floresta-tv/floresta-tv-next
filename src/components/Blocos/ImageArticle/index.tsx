import { Container } from 'components/UI'
import Image from 'next/image'
import Zoom from 'react-reveal/Zoom'

import Fade from 'react-reveal/Fade'
import { Row, Col } from 'react-bootstrap'

import * as S from './styles'

type HeaderTextProps = {
  // title: JSX.Element
  title: JSX.Element
  text: JSX.Element
  firstImage: string
  firstCapt: JSX.Element
  secondImage: string
  secondCapt: JSX.Element
  thirsdImage: string
  thirsdCapt: JSX.Element
  fourthImage: string
  fourthCapt: JSX.Element
}

const ImageArticle = ({
  text,
  title,
  firstImage,
  firstCapt,
  secondImage,
  secondCapt,
  thirsdImage,
  thirsdCapt,
  fourthImage,
  fourthCapt
}: HeaderTextProps) => {
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
          <Row>
            <Col lg={6}>
              <Zoom>
                <S.ArticlePreviewImage>
                  <Image
                    placeholder="blur"
                    blurDataURL={firstImage}
                    src={firstImage}
                    layout="fill"
                    // alt={imageAlt}
                  />
                </S.ArticlePreviewImage>
                <S.ImageSubtitle className="first-image-subtitle">
                  {firstCapt}
                </S.ImageSubtitle>
              </Zoom>
            </Col>
            <Col lg={6}>
              <Zoom>
                <S.ArticlePreviewImage>
                  <Image
                    placeholder="blur"
                    blurDataURL={secondImage}
                    src={secondImage}
                    layout="fill"
                    // alt={imageAlt}
                  />
                </S.ArticlePreviewImage>
                <S.ImageSubtitle className="first-image-subtitle">
                  {secondCapt}
                </S.ImageSubtitle>
              </Zoom>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col lg={6}>
              <Zoom>
                <S.ArticlePreviewImage>
                  <Image
                    placeholder="blur"
                    blurDataURL={thirsdImage}
                    src={thirsdImage}
                    layout="fill"
                    // alt={imageAlt}
                  />
                </S.ArticlePreviewImage>
                <S.ImageSubtitle className="first-image-subtitle">
                  {thirsdCapt}
                </S.ImageSubtitle>
              </Zoom>
            </Col>
            <Col lg={6}>
              <Zoom>
                <S.ArticlePreviewImage>
                  <Image
                    placeholder="blur"
                    blurDataURL={fourthImage}
                    src={fourthImage}
                    layout="fill"
                    // alt={imageAlt}
                  />
                </S.ArticlePreviewImage>
                <S.ImageSubtitle className="first-image-subtitle">
                  {fourthCapt}
                </S.ImageSubtitle>
              </Zoom>
            </Col>
          </Row>
          <br />
          <br />
          <br />
        </>
      </Container>
    </S.HeaderTextWrapper>
  )
}

export default ImageArticle
