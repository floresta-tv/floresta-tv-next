import Image from 'next/image'
import { Container } from 'components/UI'
import { Col, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

import * as S from './styles'

type VideoBlockHorProps = {
  title: JSX.Element
  desc: JSX.Element
  caption: string
  videoId: string
}

const VideoBlockHor = ({ title, desc, videoId }: VideoBlockHorProps) => {
  return (
    <S.VideoBlockHorWrapper>
      <Container>
        <>
          <Row>
            <Col lg={6}>
              <S.VideoBlockHorHeader>
                <Fade left>
                  <h2 className="title">{title}</h2>
                </Fade>
                <Fade left>
                  <p className="desc">{desc}</p>
                </Fade>
              </S.VideoBlockHorHeader>
            </Col>
            <Col lg={6}>
              <Fade right>
                <S.VideoBlockHorIframe>
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </S.VideoBlockHorIframe>
              </Fade>
            </Col>
          </Row>
          <S.DoubleImageDivisor>
            <Zoom>
              <Image
                placeholder="blur"
                blurDataURL={`/img/forma-triangular-de-arvore-com-raizes.png`}
                src={`/img/forma-triangular-de-arvore-com-raizes.png`}
                width={122}
                height={122}
              />
            </Zoom>
          </S.DoubleImageDivisor>
        </>
      </Container>
    </S.VideoBlockHorWrapper>
  )
}

export default VideoBlockHor
