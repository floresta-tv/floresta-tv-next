import styled from 'styled-components'
import media from 'styled-media-query'

export const DoubleImageWrapper = styled.section`
  display: block;
  padding: 30px 0 60px 0;
  max-width: 1100px;
  margin: 0 auto;

  ${media.lessThan('medium')`
    padding-top: 0;
  `}
`

export const DoubleImageHeader = styled.header`
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

export const DoubleImageImage = styled.div`
  position: relative;
  width: 100%;
  height: 600px;

  ${media.lessThan('medium')`
      height: 300px;
      width: 100%;
      margin-top: 20px;
  `}

  img {
    object-fit: cover;
  }
`

export const DoubleImageCaption = styled.p`
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
  margin-bottom: 40px;

  img {
    ${media.lessThan('medium')`
      width: 80px;
      object-fit: contain;
    `}
  }
`
