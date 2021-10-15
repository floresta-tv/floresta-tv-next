import styled from 'styled-components'
import media from 'styled-media-query'

interface ArticlePreviewWrapperProps {
  bgc?: string
}

export const ArticlePreviewWrapper = styled.section<ArticlePreviewWrapperProps>`
  display: block;
  padding: 60px 0;
  padding-top: 50px;
  background-color: ${(props) => props.bgc};
`

export const ArticlePreviewContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  .text {
    font-size: 14px;
  }
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 2.5rem;

  li {
    & .title {
      font-size: 18px;
    }

    & .subtitle {
      font-weight: 700;
      font-size: 18px;
    }
  }
`

export const ArticlePreviewHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-align: center;
  height: 100%;
  margin-bottom: 60px;

  ${media.lessThan('medium')`
    text-align: center;
    align-items: center;
    margin-top: -10px;
    margin-bottom: 30px;
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
    margin: 0 auto;
    max-width: 830px;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .text {
    font-size: 18px;
    max-width: 600px;
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
  font-family: 'Merriweather';
  margin-top: 55px;
  text-align: center;
  font-size: 14px;
  span {
    width: 100%;
  }
`

export const ImageSubtitle = styled.span`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
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
