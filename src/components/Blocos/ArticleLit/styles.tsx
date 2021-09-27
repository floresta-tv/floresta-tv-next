import styled from 'styled-components'
import media from 'styled-media-query'

interface ArticlePreviewWrapperProps {
  bgc?: string
}

export const ArticlePreviewWrapper = styled.section<ArticlePreviewWrapperProps>`
  display: block;
  padding: 60px 0;
  background-color: ${(props) => props.bgc};
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

  ${media.lessThan('medium')`
    text-align: center;
    align-items: center;
    margin-top: -10px;
  `}

  .title {
    font-family: 'Merriweather', serif;
    font-weight: 800;
    font-size: 42px;
    text-transform: uppercase;
    color: var(--dark);
    max-width: 600px;
    text-align: center;

    ${media.lessThan('medium')`
      font-size: 32px;
    `}
  }

  .desc {
    font-size: 18px;
    font-weight: 500;
    max-width: 700px;
    margin: 0 auto;
  }

  .link {
    font-size: 18px;
    background-color: var(--secondary);
    color: #fff;
    border-radius: 30px;
    padding: 6px 35px;
    font-weight: 500;
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

export const ArticlePreviewBody = styled.div`
  font-size: 17px;
  color: #272727;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
  max-width: 100%;
  margin: 0 auto;

  ${media.lessThan('medium')`
      padding-top: 20px;
  `}
`

export const ArticlePreviewBox = styled.div`
  padding: 23px;
  background-color: rgba(250, 250, 250, 0.4);
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

export const ImageSubtitle = styled.span`
  font-size: 16px;
  display: flex;
  flex-align: center;
  align-items: center;
  flex-direction: column;
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
