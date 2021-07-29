import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  position: relative;
  background-color: #e6e6e6;
  min-height: 100vh;
  padding-bottom: 50px;
  overflow: hidden;
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
    object-position: top center;
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
    font-size: 34px;
  `}
`

export const DescubraDescription = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.8;
  color: #002936;

  ${media.lessThan('medium')`
    font-size: 18px;
  `}
`

export const DescubraChart = styled.div`
  margin-top: 30px;
  margin-right: 15px;

  ${media.lessThan('medium')`
    div, img{
      width: 160px;
    }
  `}
`

export const EficienciaWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -200px;
  text-align: left;

  @media screen and (max-width: 992px) {
    margin-top: 40px;
  }
`

export const EficienciaTitle = styled.h3`
  font-size: 42px;
  font-weight: 700;
  color: #1685a8;
  margin-top: 30px;
  margin-bottom: 40px;
  max-width: 640px;
  z-index: 2;

  ${media.lessThan('medium')`
    font-size: 34px;
  `}
`

export const EficienciaDescription = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.8;
  color: #002936;
  max-width: 610px;
  z-index: 2;

  ${media.lessThan('medium')`
    font-size: 18px;
  `}
`

export const EficienciaBackground = styled.div`
  position: absolute;
  left: 0;
  width: 100vw;
  z-index: 1;
  height: 1600px;
  overflow: hidden;
  z-index: 1;
  transform: translateY(-280px);

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

  ${media.lessThan('medium')`
    div, img{
      width: 200px;
    }
  `}
`

export const MenuWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 240px;
  text-align: left;

  @media screen and (max-width: 900px) {
    margin-top: 0;
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

  @media screen and (max-width: 768px) {
    padding-top: 60px;
  }

  ${media.lessThan('medium')`
    font-size: 18px;
    max-width: unset;
    margin: 0;
    text-align: center;
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
    font-size: 15px;
    margin: 15px 0 0 0;
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

  .img {
    position: relative;
    display: block;
    width: 214px;
    height: 214px;

    @media screen and (max-width: 768px) {
      width: 100px;
      height: 100px;
    }
  }

  .description {
    text-align: center;
    margin-top: -19px;

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
      }
    }
  }

  &:first-child {
    top: -600px;
    left: 180px;

    .title {
      color: #003d50;
    }

    @media screen and (max-width: 992px) {
      top: -280px;
      left: 35px;
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
      top: -290px;
      left: 145px;
    }
  }

  &:nth-child(3) {
    top: -700px;
    left: 700px;

    @media screen and (max-width: 768px) {
      top: -323px;
      left: 255px;
    }

    .title,
    .desc {
      color: #287e7e;
    }
  }
`
