import Image from 'next/image'

import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

import { Container } from 'components/UI'
import { Row, Col } from 'react-bootstrap'

import * as S from './styles'

type ArticlePreviewProps = {
  text: JSX.Element
  image: string
  imageSubtitle: JSX.Element
  elements: [{ title: string; subtitle: string }]
}

const FinalArticle = ({
  text,
  image,
  imageSubtitle,
  elements
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
                    <p className="text">{text}</p>
                  </Fade>
                </S.ArticlePreviewHeader>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Zoom>
                  <S.ArticlePreviewImage>
                    <Image
                      placeholder="blur"
                      blurDataURL={image}
                      src={image}
                      layout="fill"
                      // alt={imageAlt}
                    />
                  </S.ArticlePreviewImage>
                  <S.ImageSubtitle className="first-image-subtitle">
                    {imageSubtitle}
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
            <S.List>
              {elements.map((element, i) => {
                return (
                  <li key={i}>
                    <p className="title">{element.title}</p>
                    <p className="subtitle">{element.subtitle}</p>
                  </li>
                )
              })}
            </S.List>
          </>
        </Container>
      </S.ArticlePreviewContent>
    </S.ArticlePreviewWrapper>
  )
}

export default FinalArticle
