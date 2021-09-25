import styled from 'styled-components'
import media from 'styled-media-query'

interface HeaderTextWrapperProps {
  bgc?: string
}

export const HeaderTextWrapper = styled.section<HeaderTextWrapperProps>`
  display: flex;
  padding: 60px 0;
  max-width: 100%;
  margin: 0 auto;

  background-color: ${(props) => (props.bgc ? props.bgc : 'transparent')};

  ${media.lessThan('medium')`
    padding-top: 0;
  `}
`

export const HeaderTextHeader = styled.header`
  display: flex;
  margin: 30px auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // text-align: center;
  border-left: 3px solid #ffffff;
  max-width: 600px;
  background-color: #00ff05;
  border-radius: 4px;

  .title {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 22px;
    padding-top: 30px;
  }

  .desc {
    padding: 10px 60px 60px 60px;
    font-size: 16px;
    font-weight: 500;
    max-width: 700px;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    font-style: italic;
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
