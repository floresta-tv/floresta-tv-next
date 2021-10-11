import styled from 'styled-components'
import media from 'styled-media-query'

export const HeaderTextWrapper = styled.section`
  display: block;
  padding: 60px 0 20px 0;
  max-width: 1100px;
  margin: 0 auto;

  ${media.lessThan('medium')`
    padding-top: 0;
  `}
`

export const HeaderTextHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;

  .title {
    font-family: 'Merriweather', serif;
    font-weight: 800;
    font-size: 50px;
    color: var(--dark);

    ${media.lessThan('medium')`
      font-size: 32px;
    `}
  }

  .desc {
    font-size: 18px;
    font-weight: 500;
    max-width: 700px;
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
