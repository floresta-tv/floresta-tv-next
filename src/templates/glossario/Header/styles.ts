import styled from 'styled-components'
import media from 'styled-media-query'

export const HeaderWrapper = styled.header`
  position: relative;
  padding-top: 65px;
  padding-bottom: 200px;
  background-color: #e6e6e6;

  ${media.lessThan('medium')`
    padding-bottom: 160px;
  `}
`

export const HeaderBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  width: 100%;
  height: 304px;
  z-index: 1;

  @media screen and (max-width: 992px) {
  }

  @media screen and (max-width: 768px) {
    height: 260px;
  }

  @media screen and (max-width: 480px) {
  }

  img {
    object-fit: cover;
    object-position: bottom center;
  }
`

export const HeaderTitle = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: #1685a8;
  margin-bottom: 0;
  text-transform: uppercase;

  ${media.lessThan('medium')`
    font-size: 40px;
    margin-bottom: 5px;
  `}
`

export const HeaderSubTitle = styled.h2`
  font-size: 27px;
  font-weight: 300;
  line-height: 1.8;
  color: #fff;

  ${media.lessThan('medium')`
    font-size: 16px;
  `}
`

export const HeaderContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
