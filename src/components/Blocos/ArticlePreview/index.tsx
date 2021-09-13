import Image from 'next/image'

import Fade from 'react-reveal/Fade'

import { Container } from 'components/UI'
import { Row, Col } from 'react-bootstrap'

import * as S from './styles'

type ArticlePreviewProps = {
  title: JSX.Element
  subtitle: JSX.Element
  buttonText: JSX.Element
  buttonLink: string
  body: JSX.Element
  image: string
  imageAlt: string
  boxtitle: JSX.Element
  boxdesc: JSX.Element
  bgc?: string
}

const ArticlePreview = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  body,
  image,
  boxtitle,
  imageAlt,
  boxdesc,
  bgc
}: ArticlePreviewProps) => {
  return (
    <S.ArticlePreviewWrapper bgc={bgc}>
      <S.ArticlePreviewContent>
        <Container>
          <>
            <Row>
              <Col lg={4}>
                <S.ArticlePreviewHeader>
                  <Fade left>
                    <h2 className="title">{title}</h2>
                  </Fade>
                  <Fade left>
                    <p className="desc">{subtitle}</p>
                  </Fade>
                  <Fade left>
                    <a
                      href={buttonLink}
                      target="_blank"
                      className="link"
                      rel="noreferrer"
                    >
                      {buttonText}
                    </a>
                  </Fade>
                </S.ArticlePreviewHeader>
              </Col>
              <Col lg={8}>
                <Fade right>
                  <S.ArticlePreviewImage>
                    <Image
                      placeholder="blur"
                      blurDataURL={image}
                      src={image}
                      layout="fill"
                      alt={imageAlt}
                    />
                  </S.ArticlePreviewImage>
                </Fade>
              </Col>
            </Row>

            <Fade>
              <S.ArticlePreviewBody>{body}</S.ArticlePreviewBody>
            </Fade>

            <Fade up>
              <S.ArticlePreviewBox>
                <h3 className="box-title">{boxtitle}</h3>
                <p className="box-desc">{boxdesc}</p>
              </S.ArticlePreviewBox>
            </Fade>
          </>
        </Container>
      </S.ArticlePreviewContent>
    </S.ArticlePreviewWrapper>
  )
}

export default ArticlePreview
