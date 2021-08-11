import styled from 'styled-components'
import media from 'styled-media-query'

export const CarouselTitle = styled.h3`
  flex-basis: 100%;
  font-size: 17px;
  margin-bottom: 20px;
`

export const CarouselWrapper = styled.div`
  position: relative;
  padding-top: 80px;
  margin-bottom: 90px;

  ${media.lessThan('medium')`
    padding-top: 40px;
    margin-bottom: 70px;
  `}

  .slick-list {
    overflow-x: hidden;
  }

  .slick-track {
    display: flex;
  }

  .slick-dots {
    transform: translateY(15px);

    li {
      margin: 0 2px;

      button {
        &::before {
          font-size: 10px;
          opacity: 0.6;
          text-shadow: 0px 3px 6px #00000029;
          transition: opacity 0.2s;
          color: #a8a7a7;
        }
      }

      &.slick-active {
        button {
          &::before {
            opacity: 1;
            color: #003d50;
          }
        }
      }
    }
  }
`

export const CarouselItem = styled.div`
  width: 100%;
  padding: 10px;
`

export const CarouselItemCaption = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  .title {
    font-size: 48px;
    color: #1685a8;
    font-weight: bold;
    margin-bottom: 15px;

    ${media.lessThan('large')`
    font-size: 22px;
  `}
  }

  .desc {
    font-size: 24px;
    font-weight: 300;
    color: #fff;
    opacity: 0.9;
    max-width: 800px;
    line-height: 1.5;
    margin-bottom: 24px;

    ${media.lessThan('large')`
    font-size: 16px;
  `}
  }

  .link {
    font-weight: bold;
    font-size: 19px;
    color: #9bc4ca;
    text-decoration: none;
    border-radius: 84px;
    background-color: #006686;
    padding: 17px 90px;
    transition: all 0.3s;

    ${media.lessThan('large')`
    font-size: 18;
    padding: 14px 50px;
  `}

    &:hover {
      transform: scale(1.02);
      background-color: var(--light);
      color: var(--primary);
    }
  }
`

export const ArticleLarge = styled.div`
  width: 100%;

  .img {
    position: relative;
    width: 100%;
    height: 180px;

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

    @media screen and (min-width: 768px) {
      min-height: 130px;
    }

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
