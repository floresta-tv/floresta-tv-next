import Link from 'next/link'
import Image from 'next/image'

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
  boxtitle: JSX.Element
  boxdesc: JSX.Element
}

const ArticlePreview = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  body,
  image,
  boxtitle,
  boxdesc
}: ArticlePreviewProps) => {
  return (
    <S.ArticlePreviewWrapper>
      <Container>
        <>
          <Row>
            <Col lg={4}>
              <S.ArticlePreviewHeader>
                <h2 className="title">{title}</h2>
                <p className="desc">{subtitle}</p>
                <Link href={buttonLink}>
                  <a href="#" className="link">
                    {buttonText}
                  </a>
                </Link>
              </S.ArticlePreviewHeader>
            </Col>
            <Col lg={8}>
              <S.ArticlePreviewImage>
                <Image
                  placeholder="blur"
                  blurDataURL={image}
                  src={image}
                  layout="fill"
                />
              </S.ArticlePreviewImage>
            </Col>
          </Row>

          <S.ArticlePreviewBody>{body}</S.ArticlePreviewBody>

          <S.ArticlePreviewBox>
            <h3 className="box-title">{boxtitle}</h3>
            <p className="box-desc">{boxdesc}</p>
          </S.ArticlePreviewBox>
        </>
      </Container>
    </S.ArticlePreviewWrapper>
  )
}

export default ArticlePreview
