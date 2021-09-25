import styled from 'styled-components'
import media from 'styled-media-query'

interface HeaderTextWrapperProps {
  bgc?: string
  bt1Color: string
  bt2Color: string
}

export const HeaderTextWrapper = styled.section<HeaderTextWrapperProps>`
  padding: 60px 0;
  max-width: 100%;
  margin: 0 auto;

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  background-color: ${(props) => (props.bgc ? props.bgc : 'transparent')};

  ${media.lessThan('medium')`
    padding-top: 0;
  `}

  .bt-1 {
    // height: 60px;
    // width: 120px;
    background-color: ${(props) => props.bt1Color} !important;
    border-color: ${(props) => props.bt1Color} !important;
    color: #ffffff !important;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);
    padding: 16px 24px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }

  .bt-2 {
    // height: 60px;
    // width: 120px;
    background-color: ${(props) => props.bt2Color} !important;
    border-color: ${(props) => props.bt2Color} !important;
    color: #000000 !important;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);
    padding: 16px 24px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
`
