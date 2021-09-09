import styled from 'styled-components'
import media from 'styled-media-query'

export const VideoBlockHorWrapper = styled.section`
  display: block;
  padding: 60px 0;
  max-width: 1000px;
  margin: 0 auto;

  ${media.lessThan('medium')`
    padding-bottom: 0;
  `}
`

export const VideoBlockHorHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
  margin-bottom: 30px;
  padding-right: 30px;

  .title {
    font-family: 'Merriweather', serif;
    font-weight: 800;
    font-size: 40px;
    color: var(--navy);
    padding-top: 30px;

    ${media.lessThan('medium')`
      font-size: 32px;
      padding-top: 0;
    `}
  }

  .desc {
    font-size: 17px;
    font-weight: 500;
    max-width: 800px;
  }

  ${media.lessThan('large')`
    text-align: center;
    align-items: center;
  `}
`

export const VideoBlockHorIframe = styled.div`
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

export const VideoBlockCHoraption = styled.p`
  font-size: 15px;
  max-width: 840px;
  font-style: italic;
  font-weight: 500;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
`

export const DoubleImageDivisor = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  img {
    ${media.lessThan('medium')`
      width: 80px;
      margin-top: 50px;
      object-fit: contain;
    `}
  }
`
