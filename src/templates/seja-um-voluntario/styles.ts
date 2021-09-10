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
   
  `}
`

export const SocialLinks = styled.div`
  display: flex;
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

export const WhatsappLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  background-color: #fff;
  color: var(--primary--darken);
  border-radius: 30px;
  padding: 6px 30px;
  text-transform: uppercase;
  margin: 0 auto;
  margin-bottom: 20px;
  text-decoration: none;
  transition: all 0.4s;

  &:hover {
    color: var(--primary--darken);
    transform: scale(1.05);
    cursor: pointer;
  }
`
