import styled from 'styled-components'
import media from 'styled-media-query'

export const ImageFullWidthWrapper = styled.section`
  display: block;
  padding: 30px 0 60px 0;
  max-width: 1100px;
  margin: 0 auto;

  ${media.lessThan('medium')`
    padding-top: 0;
  `}
`

export const ImageFullWidthImage = styled.div`
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

export const ImageFullWidthCaption = styled.p`
  font-size: 15px;
  max-width: 840px;
  font-style: italic;
  font-weight: 500;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
`
