import styled from 'styled-components'
import media from 'styled-media-query'

interface HeaderTextWrapperProps {
  image: string
}

export const HeaderTextWrapper = styled.section<HeaderTextWrapperProps>`
  display: block;
  // padding: 60px 0 20px 0;
  // max-width: 1100px;
  margin: 0 auto;

  background-image: url('${(props) => props.image}');
  background-size: cover;

  ${media.lessThan('medium')`
    padding-top: 45px;
  `}

  .background {
    display: block;
    position: absolute;
    width: 100%;
    min-height: 100vh;
    opacity: 0.7;
    background-color: rgb(1, 115, 0);
  }
`

export const HeaderTextHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;
  max-width: 700px;
  margin: 0px auto;
  padding-top: 60px;

  .title {
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    font-size: 40px;
    color: #ffffff;

    ${media.lessThan('medium')`
      font-size: 32px;
    `}
  }
`

export const HeaderTextSubtitle = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;

  .subtitle {
    font-size: 24px;
    font-weight: 500;
    max-width: 700px;
    color: #ffffff;
  }
`

export const HeaderTextParagraph = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  // margin-bottom: 30px;
  padding-bottom: 60px;

  .desc {
    font-size: 18px;
    font-weight: 500;
    max-width: 700px;
    color: #ffffff;
  }
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
