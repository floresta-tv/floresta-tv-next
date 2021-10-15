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
  image: string
  imageAlt: string
  bgc?: string
  backgroundImage?: string
}

const ArticlePreviewMathilde = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  image,
  imageAlt,
  bgc
}: ArticlePreviewProps) => {
  return (
    <S.ArticlePreviewWrapper bgc={bgc}>
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
            </Row>
            <Row>
              <Col lg={12}>
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
          </>
        </Container>
      </S.ArticlePreviewContent>
    </S.ArticlePreviewWrapper>
  )
}

export default ArticlePreviewMathilde
