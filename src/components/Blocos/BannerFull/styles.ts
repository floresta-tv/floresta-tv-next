import styled from 'styled-components'
import media from 'styled-media-query'

export const BannerFullWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-position: 40% bottom;

  .slick-dots {
    transform: translateY(-45px);

    li {
      &.slick-active {
        button {
          &::before {
            color: #ffffff;
          }
        }
      }

      button {
        &::before {
          font-size: 14px;
          color: #efefef;
        }
      }
    }
  }
`

export const BannerFullCarousel = styled.div`
  width: 100%;
  height: 100%;
`

interface BannerFullItemProps {
  background: string
  backgroundPosition?: string
}

export const BannerFullItem = styled.div<BannerFullItemProps>`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.background});
  background-position: ${(props) => props.backgroundPosition};
  background-size: cover;
`

export const BannerFullContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 3;
  color: #ffffff;

  .caption {
    max-width: 590px;

    .title {
      font-family: 'Merriweather';
      font-size: 50px;
      font-weight: 800;
      margin-bottom: 15px;

      ${media.lessThan('medium')`
        font-size: 33px;
      `}
    }

    .subtitle {
      font-size: 30px;

      ${media.lessThan('medium')`
        font-size: 26px;
      `}
    }

    .desc {
      font-size: 20px;
      max-width: 520px;

      ${media.lessThan('medium')`
        font-size: 17px;
      `}
    }
  }

  .links {
    display: flex;
    margin-top: 30px;
  }
`

export const SliderNav = styled.div``

export const SliderNavArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 10;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    width: 43px;
    height: 43px;
  }

  &.left {
    background-image: url('/img/chevron-left.svg');
    left: 20px;
  }

  &.right {
    background-image: url('/img/chevron-right.svg');
    right: 20px;

    ${media.lessThan('medium')`
      right: unset;
      left: 80px;
    `}
  }

  ${media.lessThan('medium')`
    top: 93%;
    width: 30px;
    height: 30px;

    &:hover {
      width: 30px;
      height: 30px;
    }
  `}
`