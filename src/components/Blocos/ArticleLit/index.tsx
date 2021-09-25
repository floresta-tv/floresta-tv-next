import Image from 'next/image'

import Fade from 'react-reveal/Fade'

import { Container } from 'components/UI'
import { Row, Col } from 'react-bootstrap'

import * as S from './styles'

type ArticlePreviewProps = {
  title: JSX.Element
  subtitle: JSX.Element
  firstImage: string
  firstImageSubtitle: JSX.Element
  body: JSX.Element
  secondImage: string
  thirsdImage: string
}

const ArticleLit = ({
  title,
  subtitle,
  firstImage,
  firstImageSubtitle,
  body,
  secondImage,
  thirsdImage
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
                  <Fade left>
                    <h2 className="title">{title}</h2>
                  </Fade>
                  <Fade left>
                    <p className="desc">{subtitle}</p>
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
                <Fade right>
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
                </Fade>
              </Col>
            </Row>

            <Fade>
              <S.ArticlePreviewBody>{body}</S.ArticlePreviewBody>
            </Fade>

            <Row>
              <Col lg={6}>
                <Fade right>
                  <S.ArticlePreviewImage>
                    <Image
                      placeholder="blur"
                      blurDataURL={secondImage}
                      src={secondImage}
                      layout="fill"
                      // alt={imageAlt}
                    />
                  </S.ArticlePreviewImage>
                </Fade>
              </Col>
              <Col lg={6}>
                <Fade right>
                  <S.ArticlePreviewImage>
                    <Image
                      placeholder="blur"
                      blurDataURL={thirsdImage}
                      src={thirsdImage}
                      layout="fill"
                      // alt={imageAlt}
                    />
                  </S.ArticlePreviewImage>
                </Fade>
              </Col>
            </Row>
            {/* <Fade up>
              <S.ArticlePreviewBox>
                <h3 className="box-title">{boxtitle}</h3>
                <p className="box-desc">{boxdesc}</p>
              </S.ArticlePreviewBox>
            </Fade> */}
          </>
        </Container>
      </S.ArticlePreviewContent>
    </S.ArticlePreviewWrapper>
  )
}

export default ArticleLit
