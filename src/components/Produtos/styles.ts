import styled from 'styled-components'

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
`

export const HeaderTitle = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: #1685a8;
  margin-bottom: 40px;
`

export const HeaderSubTitle = styled.h2`
  font-size: 24px;
  font-weight: 300;
  line-height: 1.8;
  color: #fff;
`

export const DescubraWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 280px;
  text-align: right;
  max-width: 640px;
  margin-left: auto;
`

export const DescubraTitle = styled.h3`
  font-size: 42px;
  font-weight: 700;
  color: #1685a8;
  margin-bottom: 40px;
  max-width: 480px;
`

export const DescubraDescription = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.8;
  color: #002936;
`

export const DescubraChart = styled.div`
  margin-top: 30px;
  margin-right: 15px;
`

export const EficienciaWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -200px;
  text-align: left;
`

export const EficienciaTitle = styled.h3`
  font-size: 42px;
  font-weight: 700;
  color: #1685a8;
  margin-top: 30px;
  margin-bottom: 40px;
  max-width: 640px;
  z-index: 2;
`

export const EficienciaDescription = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.8;
  color: #002936;
  max-width: 610px;
  z-index: 2;
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
`

export const EficienciaImage = styled.div`
  z-index: 2;
`

export const MenuWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 240px;
  text-align: left;
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
`

export const MenuBrackets = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 1643px;
  height: 731px;
`

export const MenuAuthor = styled.div`
  font-size: 17px;
  max-width: 220px;
  z-index: 2;
  text-align: center;
  line-height: 1.8;
  margin-left: 10%;

  strong {
    display: block;
    font-size: 22px;
  }
`

export const MenuItems = styled.div`
  position: relative;
`

export const MenuItem = styled.div`
  position: absolute;
  z-index: 5;

  .img {
    position: relative;
    display: block;
    width: 214px;
    height: 214px;
  }

  .description {
    text-align: center;
    margin-top: -19px;

    .title {
      font-size: 38px;
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 5px;
    }

    .desc {
      color: #003d50;
      font-size: 20px;
      line-height: 1.2;
      font-weight: 300;
      margin: 0 auto;
      margin-bottom: 15px;
      max-width: 150px;
    }
  }

  &:first-child {
    top: -600px;
    left: 180px;

    .title {
      color: #003d50;
    }
  }

  &:nth-child(2) {
    top: -575px;
    left: 440px;

    .title,
    .desc {
      color: #006686;
    }
  }

  &:nth-child(3) {
    top: -700px;
    left: 700px;

    .title,
    .desc {
      color: #287e7e;
    }
  }
`
