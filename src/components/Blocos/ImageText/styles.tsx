import styled from 'styled-components'
import media from 'styled-media-query'

interface ImageTextWrapperProps {
  bgc?: string
}

interface ImageTextImgProps {
  titleTop?: boolean
}

interface ImageTextHeaderProps {
  titleTop?: boolean
}

export const ImageTextWrapper = styled.section<ImageTextWrapperProps>`
  display: block;
  padding: 60px 0;
  max-width: ${(props) => (props.bgc ? '100%' : '1200px')};
  margin: 0 auto;
  background-color: ${(props) => (props.bgc ? props.bgc : 'transparent')};
`

export const ImageTextHeader = styled.header<ImageTextHeaderProps>`
  display: flex;
  flex-direction: 'column';
  justify-content: center;
  margin-bottom: 30px;
  padding: 0 30px;
  flex-direction: column;
  text-align: ${(props) => (props.titleTop ? 'center' : 'left')};

  ${media.lessThan('medium')`
      margin-bottom: 0px;
  `};

  .title {
    font-family: 'Merriweather', serif;
    font-weight: 800;
    font-size: 37px;
    color: ${(props) => (props.titleTop ? '#FFFFFF' : 'var(--navy)')};
    padding-top: 30px;
    line-height: ${(props) => (props.titleTop ? '1.1' : '1')};
    text-align: ${(props) => (props.titleTop ? 'center' : 'left')};

    ${media.lessThan('medium')`
      font-size: 32px;
      padding-top: 0;
    `};
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

export const ImageTextImg = styled.div<ImageTextImgProps>`
  position: relative;
  width: 100%;
  height: ${(props) => (props.titleTop ? '600px' : '320px')};

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
