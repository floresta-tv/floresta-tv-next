import styled from 'styled-components'
import media from 'styled-media-query'

interface HeroBlockProps {
  background: string
}

export const HeroBlockWrapper = styled.section<HeroBlockProps>`
  position: relative;
  display: block;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-attachment: fixed;
`

export const HeroBlockContent = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  color: #fff;
  min-height: 90vh;
  padding: 60px 5vw 60px 10vw;

  ${media.lessThan('medium')`
    text-align: center;
    align-items: center;
  `}

  .title {
    font-family: 'Merriweather', serif;
    font-weight: 800;
    font-size: 40px;
    text-transform: uppercase;
    color: var(--secondary);

    ${media.lessThan('medium')`
      font-size: 32px;
    `}
  }

  .body {
    font-size: 17px;
    font-weight: 500;
    max-width: 800px;

    p {
      margin: 20px 0;
    }
  }

  .link {
    font-size: 18px;
    background-color: var(--secondary);
    color: #fff;
    border-radius: 30px;
    padding: 6px 35px;
    font-weight: 500;
    margin-top: 10px;
    text-decoration: none;
    transition: transform 0.4s;

    &:hover {
      transform: scale(1.05);
    }

    svg {
      margin-left: 10px;
    }
  }
`
