import styled from 'styled-components'
import media from 'styled-media-query'

export const ProgressiveCountWrapper = styled.section`
  min-height: 90vh;
  background-image: url('/img/indigenas_em_brasilia_banner.png');
  background-position: center bottom;
  padding: 70px 0;
  background-attachment: fixed;
`

export const ProgressiveCountHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 45px;

  ${media.lessThan('medium')`
    margin-bottom: 20px;
   `}

  .title {
    font-size: 50px;
    color: #ffffff;
    font-family: 'Merriweather';
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 10px;
    text-align: center;

    ${media.lessThan('medium')`
      font-size: 40px;
    `}
  }

  .desc {
    font-size: 20px;
    color: #ffffff;
    font-weight: 500;
    text-align: center;
    max-width: 650px;
    margin: 0 auto;

    ${media.lessThan('medium')`
      font-size: 16px;
    `}
  }
`

export const ProgressiveCountNumbers = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
`

export const ProgressiveCountNumbersItem = styled.div`
  font-family: 'Merriweather';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0.22;
  min-height: 211px;
  background-color: rgba(250, 250, 250, 0.4);
  color: #0e2a0b;

  ${media.lessThan('medium')`
    min-height: 140px;
  `}

  .number {
    font-size: 111px;

    ${media.lessThan('medium')`
      font-size: 60px;
    `}
  }

  .label {
    font-size: 29px;
    font-weight: 300;

    ${media.lessThan('medium')`
      font-size: 18px;
    `}
  }
`

export const ProgressiveCountCaption = styled.div`
  font-family: 'Merriweather';
  font-weight: 900;
  font-size: 28px;
  color: #ffffff;
  font-weight: 500;
  text-align: center;
  max-width: 650px;
  margin: 0 auto;
  margin-top: 50px;

  ${media.lessThan('medium')`
    margin-top: 40px;
   `}
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  ${media.lessThan('large')`
    justify-content: center;
  `}
`

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border: 1.5px solid #ffffff;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.45s;

  svg {
    width: 35px;
    fill: #ffffff;
    transition: all 0.45s;
  }

  &:hover {
    background-color: #fff;

    svg {
      fill: #024a05;
    }
  }
`
