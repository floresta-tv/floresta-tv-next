import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  position: relative;
  background-color: #e6e6e6;
  min-height: 100vh;
  padding-bottom: 50px;
  overflow: hidden;

  .react-reveal {
    z-index: 100;
  }
`

export const HeaderBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  width: 100%;
  height: 784px;

  @media screen and (max-width: 992px) {
    height: 690px;
  }

  @media screen and (max-width: 768px) {
    height: 440px;
  }

  @media screen and (max-width: 480px) {
    height: 560px;
  }

  img {
    object-fit: cover;
    object-position: bottom center;
  }
`

export const Header = styled.header`
  position: relative;
  padding-top: 100px;
  max-width: 800px;
  z-index: 2;

  ${media.lessThan('medium')`
    padding-top: 50px;
  `}
`

export const HeaderTitle = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: #1685a8;
  margin-bottom: 40px;

  ${media.lessThan('medium')`
    font-size: 35px;
    margin-bottom: 20px;
  `}
`

export const HeaderSubTitle = styled.h2`
  font-size: 24px;
  font-weight: 300;
  line-height: 1.8;
  color: #fff;

  ${media.lessThan('medium')`
    font-size: 15px;
  `}
`

export const DescubraWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 280px;
  text-align: right;
  max-width: 640px;
  margin-left: auto;

  @media screen and (max-width: 576px) {
    padding-top: 230px;
  }
`

export const DescubraTitle = styled.h3`
  font-size: 42px;
  font-weight: 700;
  color: #1685a8;
  margin-bottom: 40px;
  max-width: 480px;

  ${media.lessThan('medium')`
    font-size: 30px;
    margin-bottom: 20px;
    max-width: 300px;
  `}
`

export const DescubraDescription = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.8;
  color: #002936;

  ${media.lessThan('medium')`
    font-size: 15px;
  `}
`

export const DescubraChart = styled.div`
  margin-top: 30px;
  margin-right: 15px;

  ${media.lessThan('medium')`
    margin-bottom: 30px;
  
  div, img{
      width: 140px;
    }
  `}
`

export const EficienciaWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -220px;
  text-align: left;

  @media screen and (max-width: 992px) {
    margin-top: 40px;
  }
`

export const EficienciaTitle = styled.h3`
  font-size: 42px;
  font-weight: 700;
  color: var(--secondary);
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 640px;
  z-index: 2;

  ${media.lessThan('medium')`
    font-size: 31px;
    line-height: 1;
    margin-bottom: 25px;
    margin-top: 20px;
  `}
`

export const EficienciaDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: #002936;
  max-width: 760px;
  z-index: 2;

  ${media.lessThan('medium')`
    font-size: 15px;
    line-height: 1.6;
  `}
`

export const EficienciaBackground = styled.div`
  position: absolute;
  left: 0;
  width: 100vw;
  z-index: 1;
  height: 1550px;
  overflow: hidden;
  z-index: 1;
  transform: translateY(-280px);
  opacity: 0.9;

  @media screen and (max-width: 1200px) {
    height: 1500px;
  }

  @media screen and (max-width: 992px) {
    width: 190vw;
    height: 900px;
    transform: translateY(-150px);
  }

  @media screen and (max-width: 768px) {
    width: 190vw;
    height: 900px;
    transform: translateY(-150px);
  }
`

export const EficienciaImage = styled.div`
  z-index: 2;
  margin-left: -4%;

  ${media.lessThan('medium')`

    div, img{
      width: 80px;
    }
  `}
`

export const EficienciaBrand = styled.div`
  z-index: 2;
  margin-top: 110px;
  margin-left: 15px;
  width: 190px;

  ${media.lessThan('medium')`
    margin-top: 50px;
    margin-bottom: -30px;

    div, img{
      width: 80px;
    }
  `}
`

export const MenuWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -40px;
  text-align: left;

  @media screen and (max-width: 900px) {
    margin-top: 10px;
  }
`

export const MenuTestimonial = styled.div`
  margin-top: -50px;
  width: 100%;
`

export const MenuTitle = styled.h3`
  font-size: 42px;
  font-weight: 700;
  color: #1685a8;
  margin-top: 30px;
  margin-bottom: 40px;
  max-width: 640px;
  z-index: 2;
`

export const MenuDescription = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.2;
  color: #002936;
  max-width: 720px;
  margin-left: 35%;
  z-index: 2;

  ${media.lessThan('medium')`
    font-size: 16px;
    padding: 0 10px;
    max-width: unset;
    margin: 0;
    font-weight: 400;
    text-align: left;
    padding-top: 60px;
  `}
`

export const MenuBrackets = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 1643px;
  height: 731px;

  @media screen and (max-width: 768px) {
    width: 700px;
    height: 340px;
    left: 55%;
  }
`

export const MenuAuthor = styled.div`
  font-size: 17px;
  max-width: 220px;
  z-index: 2;
  text-align: center;
  line-height: 1.8;
  margin-left: 10%;

  ${media.lessThan('medium')`
    max-width: unset;
    font-size: 12px;
    max-width: 180px;
    margin: 15px auto 0 auto;
  `}

  strong {
    display: block;
    font-size: 22px;

    ${media.lessThan('medium')`
      font-size: 18px;
    `}
  }
`

export const MenuItems = styled.div`
  position: relative;
  z-index: 222;
  transform: translateX(0);

  @media screen and (max-width: 1400px) {
    transform: translateX(-2.2vw);
  }

  @media screen and (max-width: 1200px) {
    transform: translateX(-9.9vw);
  }

  @media screen and (max-width: 992px) {
    transform: translateX(-24vw);
  }

  @media screen and (max-width: 900px) {
    transform: translateX(-26vw);
  }

  @media screen and (max-width: 768px) {
    transform: translateX(0);
  }
`

export const MenuItem = styled.div`
  position: absolute;
  z-index: 5;
  cursor: pointer;
  transition: all 0.3s;

  .img {
    position: relative;
    display: block;
    width: 214px;
    height: 214px;
    overflow: visible;

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    &.rotating,
    &:hover {
      animation: rotate 1.5s linear infinite;
    }

    div {
      overflow: visible !important;
    }

    img {
      transition: all 1.5s;
    }

    @media screen and (max-width: 768px) {
      width: 100px;
      height: 100px;
    }
  }

  .description {
    text-align: center;
    margin-top: -19px;

    @media screen and (max-width: 768px) {
      margin-top: -7px;
    }

    .title {
      font-size: 38px;
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 5px;

      @media screen and (max-width: 768px) {
        font-size: 20px;
      }
    }

    .desc {
      color: #003d50;
      font-size: 20px;
      line-height: 1.2;
      font-weight: 300;
      margin: 0 auto;
      margin-bottom: 15px;
      max-width: 150px;

      @media screen and (max-width: 768px) {
        font-size: 12px;
        max-width: 120px;
        font-weight: 400;
      }
    }
  }

  &:hover,
  &:active {
    transform: scale(1.03);
  }

  &:first-child {
    top: -600px;
    left: 180px;

    .title {
      color: #003d50;
    }

    @media screen and (max-width: 768px) {
      top: -280px;
      left: calc(49vw - 170px);
    }
  }

  &:nth-child(2) {
    top: -575px;
    left: 440px;

    .title,
    .desc {
      color: #006686;
    }

    @media screen and (max-width: 768px) {
      top: -300px;
      left: calc(49vw - 60px);
    }
  }

  &:nth-child(3) {
    top: -700px;
    left: 700px;

    @media screen and (max-width: 768px) {
      top: -323px;
      left: calc(49vw + 52px);
    }

    .title,
    .desc {
      color: #287e7e;
    }
  }
`
