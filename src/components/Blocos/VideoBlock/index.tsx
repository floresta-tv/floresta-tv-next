import { Container } from 'components/UI'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

import * as S from './styles'

type VideoBlockProps = {
  title: JSX.Element
  desc: string
  caption: string
  videoId: string
}

const VideoBlock = ({ title, desc, caption, videoId }: VideoBlockProps) => {
  return (
    <S.VideoBlockWrapper>
      <Container>
        <>
          <S.VideoBlockHeader>
            <Fade bottom>
              <h2 className="title">{title}</h2>
            </Fade>
            <Fade bottom>
              <p className="desc">{desc}</p>
            </Fade>
          </S.VideoBlockHeader>
          <Zoom>
            <S.VideoBlockIframe>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </S.VideoBlockIframe>
          </Zoom>
          <Fade top>
            <S.VideoBlockCaption>{caption}</S.VideoBlockCaption>
          </Fade>
        </>
      </Container>
    </S.VideoBlockWrapper>
  )
}

export default VideoBlock
