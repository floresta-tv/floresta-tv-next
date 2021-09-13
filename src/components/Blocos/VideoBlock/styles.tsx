import styled from 'styled-components'
import media from 'styled-media-query'

interface VideoBlockWrapperProps {
  bgc?: string
}

export const VideoBlockWrapper = styled.section<VideoBlockWrapperProps>`
  display: block;
  padding: 60px 0;
  background-color: ${(props) => props.bgc};
`

export const VideoBlockHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;

  .title {
    font-family: 'Merriweather', serif;
    font-weight: 800;
    font-size: 50px;
    color: var(--dark);

    ${media.lessThan('medium')`
      font-size: 32px;
    `}
  }

  .desc {
    font-size: 20px;
    font-weight: 500;
    max-width: 800px;
  }
`

export const VideoBlockIframe = styled.div`
  display: flex;
  justify-content: center;

  iframe {
    width: 100%;
    max-width: 900px;
    min-height: 550px;
    margin: 0 auto;

    ${media.lessThan('medium')`
      min-height: 400px;
    `}
  }
`

export const VideoBlockCaption = styled.p`
  font-size: 15px;
  max-width: 840px;
  font-style: italic;
  font-weight: 500;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
`
