import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  width: 100%;
  padding-bottom: 52px;
  background-color: #e6e6e6;
`

export const CarouselWrapper = styled.div`
  position: relative;

  .slick-list {
    overflow-x: hidden;
  }

  .slick-track {
    display: flex;
  }

  .slick-dots {
    transform: translateY(-40px);

    li {
      margin: 0 2px;

      button {
        &::before {
          font-size: 10px;
          opacity: 0.6;
          text-shadow: 0px 3px 6px #00000029;
          transition: opacity 0.2s;
          color: #fff;
        }
      }

      &.slick-active {
        button {
          &::before {
            opacity: 1;
            color: #fff;
          }
        }
      }
    }
  }
`

type CarouselItemProps = {
  background: string
}

export const CarouselItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 130px 0 150px 0;
  background-image: url(${(props: CarouselItemProps) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 500px;

  ${media.lessThan('large')`
    min-height: 400px;
    padding: 60px 0 80px;
  `}
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
      font-size: 16px;
      padding: 10px 40px;
    `}

    &:hover {
      transform: scale(1.02);
      background-color: var(--light);
      color: var(--primary);
    }
  }
`

export const Grid = styled.div`
  display: flex;
  padding-top: 50px;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0.7;
`

export const ColumnRight = styled.div`
  flex: 0.3;
`
export const ColumnTitle = styled.h3`
  flex-basis: 100%;
  font-size: 17px;
  margin-bottom: 20px;
`

export const ArticleLarge = styled.div`
  width: 46%;
  gap: 30px;
  margin-right: 20px;
  margin-bottom: 30px;

  ${media.lessThan('medium')`
    width: 100%;
  `}

  .img {
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
