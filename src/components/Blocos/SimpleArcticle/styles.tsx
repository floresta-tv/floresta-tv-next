import styled from 'styled-components'
import media from 'styled-media-query'

export const HeaderTextWrapper = styled.section`
  display: block;
  padding: 60px 0 20px 0;
  // max-width: 1100px;
  margin: 0 auto;

  background: #232323;

  ${media.lessThan('medium')`
    padding-top: 45px;
  `}
`

export const ArticlePreviewImage = styled.div`
  position: relative;
  width: 95%;
  margin-left: auto;
  height: 500px;

  ${media.lessThan('medium')`
      height: 300px;
      width: 100%;
      margin-top: 20px;
  `}

  img {
    object-fit: cover;
  }
`

export const ImageSubtitle = styled.span`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  color: #fff;
`

export const HeaderTextHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: start;
  margin-bottom: 30px;
  max-width: 700px;
  margin: 0 auto;

  .title {
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    font-size: 42px;
    color: #fff;

    ${media.lessThan('medium')`
      font-size: 32px;
    `}
  }
`
export const HeaderTextParagraph = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;

  .desc {
    font-size: 18px;
    font-weight: 500;
    max-width: 700px;
    color: #ffffff;
  }
`

export const FirstImage = styled.div`
  display: flex;
  width: 100%;
`

export const HeaderTextDivisor = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  ${media.lessThan('medium')`
      margin-top: 50px;
      margin-bottom: 20px;
    `}

  img {
    ${media.lessThan('medium')`
      width: 80px;
      object-fit: contain;
    `}
  }
`
