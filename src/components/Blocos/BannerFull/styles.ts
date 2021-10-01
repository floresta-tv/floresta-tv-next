import styled from 'styled-components'
import media from 'styled-media-query'

interface BannerFullItemBackgroundProps {
  position?: string
}

export const BannerFullItemBackground = styled.div<BannerFullItemBackgroundProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  div,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: ${(props) => props.position || `center center`};
  }
`
export const BannerFullWrapper = styled.section`
  position: relative;
  width: 100vw;
  min-height: auto;
  background-position: 40% bottom;

  .slick-slider {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }

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

export const BannerFullItem = styled.div`
  position: relative;
  width: 100vw;
  display: flex !important;
  align-items: center;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    background-position: 40%;
    padding: 150px 0 100px 0;
  }
`
interface BannerFullContent {
  width: string
  textAlign?: string
}

export const BannerFullContent = styled.div<BannerFullContent>`
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

    ${(props) =>
      props.width === 'large' &&
      `
       max-width: 750px;
    `}

    ${(props) =>
      props.width === 'extralarge' &&
      `
        max-width: 900px;
    `}

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

      ${(props) =>
        props.width === 'large' &&
        `
        max-width: 560px;
        `}

      ${(props) =>
        props.width === 'extralarge' &&
        `
        max-width: 700px;
    `}

    ${(props) =>
        props.textAlign === 'center' &&
        `
        margin: 0 auto;
    `}

      ${media.lessThan('medium')`
        font-size: 17px;
      `}
    }
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;

    div {
      margin-bottom: 10px;
    }
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
