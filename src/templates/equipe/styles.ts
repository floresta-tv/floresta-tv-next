import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  position: relative;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;

  .react-reveal {
    z-index: 100;
  }

  ${media.greaterThan('large')`
    padding-bottom: 50px;
  `}
`
