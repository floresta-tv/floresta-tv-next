import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding-bottom: 52px;
  background-color: #e6e6e6;
  max-width: 100vw;
  overflow-x: hidden;
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
    margin-bottom: 54px;

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
