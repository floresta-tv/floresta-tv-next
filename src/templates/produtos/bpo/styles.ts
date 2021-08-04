import styled from 'styled-components'

export const Wrapper = styled.section`
  background-image: url('/img/produtos-stairs.png');
  background-size: 110% 1500px;
  background-position: 10% 55%;
  background-repeat: no-repeat;
  max-width: 100vw;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    background-size: 200% 1800px;
    background-position: 40% 44%;
  }
`

export const Content = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const HeroWrapper = styled.div`
  position: relative;
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 180px;
  }

  .shape {
    position: absolute;
    top: 0;
    right: -120px;
    transform: translateY(17%);

    @media screen and (max-width: 768px) {
      right: -40px;
      transform: translateY(20%);
    }

    div,
    img {
      width: 900px;

      @media screen and (max-width: 768px) {
        width: 500px;
      }
    }
  }

  .ico {
    position: absolute;
    top: 215px;
    right: 114px;
    transform: translateY(-40%);
    z-index: 2;

    @media screen and (max-width: 768px) {
      top: 140px;
      right: 80px;
    }

    h1 {
      font-size: 65px;
      font-weight: 900;
      color: #287e7e;
      text-transform: uppercase;
      text-align: center;
      transform: translateX(10px);
      margin-bottom: 40px;

      @media screen and (max-width: 768px) {
        font-size: 40px;
        margin-bottom: 20px;
      }
    }

    h2 {
      font-size: 20px;
      font-weight: 400;
      color: #287e7e;
      text-align: center;
      margin-top: -15px;
      transform: translateX(5px);

      @media screen and (max-width: 768px) {
        font-size: 14px;
        max-width: 150px;
        margin-top: -15px;
        color: #fff;
      }
    }

    div,
    img {
      width: 240px;

      @media screen and (max-width: 768px) {
        width: 150px;
      }
    }
  }
`

export const Body = styled.div`
  position: relative;
  padding-top: 200px;
  padding-left: 100px;
  width: 70%;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    padding-top: 150px;
  }

  .mockup-caption {
    position: absolute;
    bottom: 30px;
    left: 0;
    transform: translateX(-100%);
    max-width: 22vw;

    @media screen and (max-width: 768px) {
      position: relative;
      bottom: unset;
      max-width: unset;
      transform: unset;
    }

    p {
      font-size: 17px;
      font-weight: 400;
      color: #003d50;

      @media screen and (max-width: 768px) {
        color: #fff;
      }
    }
  }

  .mockup-img {
    position: relative;
    width: 500px;
    margin-bottom: -5px;
    margin-left: -50px;
    margin-top: 25px;

    @media screen and (max-width: 768px) {
      width: 90%;
      margin-left: 0;
    }

    div,
    img {
      width: 100%;
    }
  }

  h3 {
    font-size: 30px;
    font-weight: 900;
    color: #003d50;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
      font-size: 23px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 300;
    color: #ffffff;
    margin-bottom: 22px;

    @media screen and (max-width: 768px) {
      font-size: 15px;
      margin-bottom: 10px;
    }
  }
`
