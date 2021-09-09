import styled from 'styled-components'
import media from 'styled-media-query'

export const ImageTextWrapper = styled.section`
  display: block;
  padding: 60px 0;
  max-width: 1200px;
  margin: 0 auto;
`

export const ImageTextHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  margin-bottom: 30px;
  padding: 0 30px;

  .title {
    font-family: 'Merriweather', serif;
    font-weight: 800;
    font-size: 36px;
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
    text-align: center !important;
    align-items: center;
  `}
`

export const ImageTextImg = styled.div`
  position: relative;
  width: 100%;
  height: 320px;

  ${media.lessThan('medium')`
      height: 300px;
      width: 100%;
      margin-top: 20px;
      margin-bottom: 30px;
  `}

  img {
    object-fit: cover;
  }
`
