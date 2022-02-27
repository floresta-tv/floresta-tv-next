import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: #e8ffe6;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  margin-bottom: -20px;

  .react-reveal {
    z-index: 100;
  }

  .link-1 {
    background-color: #00ff05 !important;
    border-color: #00ff05 !important;
    color: #000000 !important;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);
    padding: 12px;
    border-radius: 4px;
    a {
      font-family: 'Open Sans', sans-serif;
      font-size: 18px;
      padding: 12px;
      text-decoration: none;
      color: #000000 !important;
    }
    margin-right: 16px;
  }

  .link-2 {
    background-color: #ffe161 !important;
    border-color: #ffe161 !important;
    color: #614f00 !important;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);
    padding: 12px;
    border-radius: 4px;
    a {
      font-family: 'Open Sans', sans-serif;
      font-size: 18px;
      padding: 12px;
      text-decoration: none;
      color: #614f00 !important;
    }
    margin-right: 16px;
  }

  .link-3 {
    background-color: #ff6666 !important;
    border-color: #ff6666 !important;
    color: #ffffff !important;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);
    padding: 12px;
    border-radius: 4px;
    a {
      font-family: 'Open Sans', sans-serif;
      font-size: 18px;
      padding: 12px;
      text-decoration: none;
      color: #ffffff !important;
    }
  }
`

export const StyledLQ = styled.div`
  header {
    background: #00ff05;

    h2 {
      margin: 0px 30px 0px 30px;
    }
  }
`
