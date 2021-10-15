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
    padding: 30px 0 10px 0;
  `}

  .link {
    background-color: #00ff05 !important;
    border-color: #00ff05 !important;
    color: #000000 !important;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);
    padding: 20px;
    border-radius: 4px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    display: flex;
    margin: 0 auto;
    width: 250px;
    text-decoration: none;
    text-align: center;
    font-weight: 600;
    margin-bottom: 60px;
    transition: 200ms ease-in-out;

    &:hover {
      color: #ffffff !important;
      background-color: #00a803 !important;
      border-color: #00a803 !important;
      box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%);
    }
  }
`

export const HeaderTextHeader = styled.header`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;
  border-top: 2px solid #00ff05;
  border-bottom: 2px solid #00ff05;
  max-width: 900px;
  color: #fff;

  .desc {
    padding: 30px 0;
    font-size: 20px;
    font-weight: 500;
    max-width: 700px;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    font-style: italic;
  }

  .quotted {
    font-size: 24px;
    font-weight: 500;
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
