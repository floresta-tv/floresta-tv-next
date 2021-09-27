import Image from 'next/image'

import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

import { Container } from 'components/UI'
import { Row, Col } from 'react-bootstrap'

import * as S from './styles'

type ArticlePreviewProps = {
  title: JSX.Element
  subtitle: JSX.Element
  text: JSX.Element
  firstImage: string
  firstImageSubtitle: JSX.Element
  secondImage: string
  thirsdImage: string
  leftText: JSX.Element
  rightText: JSX.Element
  lastImage: string
  lastImageSubtitle: JSX.Element
  finalText: JSX.Element
}

const ArticleBlock = ({
  title,
  subtitle,
  text,
  firstImage,
  firstImageSubtitle,
  secondImage,
  thirsdImage,
  leftText,
  rightText,
  lastImage,
  lastImageSubtitle,
  finalText
}: ArticlePreviewProps) => {
  return (
    // <S.ArticlePreviewWrapper bgc={bgc}>
    <S.ArticlePreviewWrapper>
      <S.ArticlePreviewContent>
        <Container>
          <>
            <Row>
              <Col lg={12}>
                <S.ArticlePreviewHeader>
                  <Fade bottom>
                    <h2 className="title">{title}</h2>
                  </Fade>
                  <Fade bottom>
                    <p className="desc">{subtitle}</p>
                  </Fade>
                  <Fade bottom>
                    <p className="text">{text}</p>
                  </Fade>
                  {/* <Fade left>
                    <a
                      href={buttonLink}
                      target="_blank"
                      className="link"
                      rel="noreferrer"
                    >
                      {buttonText}
                    </a>
                  </Fade> */}
                </S.ArticlePreviewHeader>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
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
                    {firstImageSubtitle}
                  </S.ImageSubtitle>
                </Zoom>
              </Col>
            </Row>

            {/* <Fade>
              <S.ArticlePreviewBody>{body}</S.ArticlePreviewBody>
            </Fade> */}
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
                      blurDataURL={secondImage}
                      src={secondImage}
                      layout="fill"
                      // alt={imageAlt}
                    />
                  </S.ArticlePreviewImage>
                </Zoom>
              </Col>
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
                </Zoom>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Row>
              <Col lg={5}>
                <Fade right>
                  <p className="text">{leftText}</p>
                </Fade>
              </Col>
              <Col lg={1}></Col>
              <Col lg={6}>
                <Fade right>
                  <p className="text">{rightText}</p>
                </Fade>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col lg={12}>
                <Zoom right>
                  <S.ArticlePreviewImage>
                    <Image
                      placeholder="blur"
                      blurDataURL={lastImage}
                      src={lastImage}
                      layout="fill"
                      // alt={imageAlt}
                    />
                  </S.ArticlePreviewImage>
                  <S.ImageSubtitle className="first-image-subtitle">
                    {lastImageSubtitle}
                  </S.ImageSubtitle>
                </Zoom>
              </Col>
            </Row>

            <Fade up>
              <S.ArticlePreviewBox>
                <p className="final-text">{finalText}</p>
              </S.ArticlePreviewBox>
            </Fade>
          </>
        </Container>
      </S.ArticlePreviewContent>
    </S.ArticlePreviewWrapper>
  )
}

export default ArticleBlock
