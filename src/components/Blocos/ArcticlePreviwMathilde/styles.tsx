import styled from 'styled-components'
import media from 'styled-media-query'

interface ArticlePreviewWrapperProps {
  bgc?: string
}

export const ArticlePreviewWrapper = styled.section<ArticlePreviewWrapperProps>`
  display: block;
  padding: 60px 0;
  // background-color: ${(props) => props.bgc};
`

export const ArticlePreviewContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

export const ArticlePreviewHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;
  text-align: center;
  height: 100%;
  background: none !important;

  ${media.lessThan('medium')`
    text-align: center;
    align-items: center;
    margin-top: -10px;
  `}

  .title {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 48px;
    text-transform: uppercase;
    color: #00ff05;
    max-width: 700px;

    ${media.lessThan('medium')`
      font-size: 32px;
    `}
  }

  .desc {
    font-size: 24px;
    font-weight: 500;
    max-width: 800px;
  }

  .link {
    background-color: #ff6666 !important;
    border-color: #ff6666 !important;
    color: #ffffff !important;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);

    font-size: 18px;
    border-radius: 4px;
    padding: 12px 35px;
    font-weight: 600;
    margin-top: 10px;
    text-decoration: none;
    transition: transform 0.4s;

    &:hover {
      transform: scale(1.05);
    }

    svg {
      margin-left: 10px;
    }
  }
`

export const ArticlePreviewImage = styled.div`
  position: relative;
  width: 95%;
  margin-left: auto;
  height: 1000px;

  ${media.lessThan('medium')`
      height: 300px;
      width: 100%;
      margin-top: 20px;
  `}

  img {
    object-fit: contain;
  }
`

export const ArticlePreviewBody = styled.div`
  font-size: 17px;
  color: #707070;
  text-align: center;
  padding-top: 40px;
  max-width: 900px;
  margin: 0 auto;

  ${media.lessThan('medium')`
      padding-top: 20px;
  `}
`

export const ArticlePreviewBox = styled.div`
  padding: 23px;
  // background-color: rgba(250, 250, 250, 0.4);
  border-left: 6px solid #053310;
  font-family: 'Merriweather';
  margin-top: 55px;

  .box-title {
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: 800;
  }

  .box-desc {
    max-width: 800px;
    font-size: 14px;
  }
`

export const ArticlePreviewCaption = styled.p`
  font-size: 15px;
  max-width: 840px;
  font-style: italic;
  font-weight: 500;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
`
