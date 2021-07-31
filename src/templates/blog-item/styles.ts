import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  width: 100%;
  padding-bottom: 0px;

  ${media.lessThan('medium')`
    padding-bottom: 0px;
  `}
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 0 30px 0;

  ${media.lessThan('medium')`
     padding: 30px 0 20px 0;
  `}
`

export const HeaderTitle = styled.h1`
  font-size: 50px;
  color: #1685a8;
  font-weight: bold;
  margin-bottom: 10px;

  ${media.lessThan('medium')`
    font-size: 30px;
  `}
`

export const HeaderInfo = styled.p`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 21px;

  ${media.lessThan('medium')`
    font-size: 15px;
    flex-wrap: wrap;
    justify-content: center;
  `}

  .social {
    display: flex;
    list-style: none;
    margin-left: 4px;

    ${media.lessThan('medium')`
      margin-top: 10px;
    `}

    a {
      display: block;
      color: #939393;
      margin: 0 4px;
      transition: all 0.2s;

      &:hover {
        color: var(--primary);
        transform: scale(1.04);
      }
    }

    svg {
      width: 29px;
    }
  }

  .author {
    margin-right: 5px;
  }

  .date {
    color: #b3b3b3;
    margin-left: 5px;
  }
`

export const Grid = styled.div`
  display: flex;
  padding-top: 30px;

  ${media.lessThan('medium')`
    flex-direction: column;
    padding-top: 15px;
  `}
`

export const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0.7;
  padding-right: 40px;

  ${media.lessThan('medium')`
    padding-right: 0;
  `}

  .main-img {
    margin-bottom: 15.2px;

    ${media.lessThan('medium')`
      margin-bottom: 10px;
    `}

    div,
    img {
      width: 100%;
    }
  }

  .markup {
    max-width: 90%;

    ${media.lessThan('medium')`
      max-width: 98%;
    `}

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 25px;
      font-weight: 500;
      color: #006686;
      margin: 30px 0 20px 0;

      ${media.lessThan('medium')`
        font-size: 22px;
      `}
    }

    p {
      color: #002936;
      font-size: 17px;
      line-height: 1.6;

      ${media.lessThan('medium')`
        font-size: 16px;
      `}
    }
  }
`

export const ColumnRight = styled.div`
  flex: 0.3;

  ${media.lessThan('medium')`
    padding-top: 40px;
  `}
`
export const ColumnTitle = styled.h3`
  flex-basis: 100%;
  font-size: 17px;
  margin-bottom: 20px;
`

export const ArticleSmall = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  margin-bottom: 22px;

  .img {
    width: 40%;

    img,
    div {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .caption {
    width: 60%;
    box-shadow: 0px 3px 6px #0000001a;
    background-color: #fff;
    padding: 10px 15px;

    .date {
      display: block;
      font-size: 14px;
      color: #b3aeae;
      font-weight: 500;
      margin: 0px 0 4px 0;
    }

    .desc {
      font-size: 14px;
      color: #202833;
      font-weight: 500;
      margin-bottom: 5px;
    }

    .link {
      font-size: 16.4px;
      color: var(--primary);
      font-weight: 500;
      text-decoration: none;
      transition: all 0.2s;

      svg {
        fill: var(--primary);
        transition: fill 0.2s;
      }

      &:hover {
        color: var(--light);
        margin-left: 2px;

        svg {
          fill: var(--light);
        }
      }
    }
  }
`
