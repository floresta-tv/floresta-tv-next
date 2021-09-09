import { Container } from 'components/UI'
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
            <h2 className="title">{title}</h2>
            <p className="desc">{desc}</p>
          </S.VideoBlockHeader>
          <S.VideoBlockIframe>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </S.VideoBlockIframe>
          <S.VideoBlockCaption>{caption}</S.VideoBlockCaption>
        </>
      </Container>
    </S.VideoBlockWrapper>
  )
}

export default VideoBlock
