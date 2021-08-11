import styled from 'styled-components'
import media from 'styled-media-query'

export const ArticleLarge = styled.div`
  width: 46%;
  margin-right: 20px;
  margin-bottom: 30px;

  ${media.lessThan('medium')`
    width: 100%;
    margin-right: 0;
  `}

  .img {
    position: relative;
    width: 100%;
    height: 24vh;
    margin-bottom: 8px;

    img,
    div {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .caption {
    box-shadow: 0px 3px 6px #0000001a;
    background-color: #fff;
    padding: 15px;
    min-height: 123px;

    ${media.lessThan('medium')`
      min-height: 0;
    `}

    .date {
      font-size: 12px;
      color: #b3aeae;
      font-weight: 500;
    }

    .title {
      font-size: 16px;
      color: #202833;
      font-weight: 500;
      margin: 4px 0;
    }

    .desc {
      font-size: 15px;
      color: #bebebe;
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
