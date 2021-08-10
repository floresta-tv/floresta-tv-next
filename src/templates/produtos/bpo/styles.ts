import styled from 'styled-components'

export const Wrapper = styled.section`
  background-image: url('/img/produtos-stairs-4.png');
  background-size: 110% 1500px;
  background-position: 10% 55%;
  background-repeat: no-repeat;
  max-width: 100vw;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    background-size: 900px 1150px;
    background-position: -320px -380px;
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
    height: 0px;
    order: 2;
  }

  .shape {
    position: absolute;
    top: 0;
    right: -120px;
    transform: translateY(17%);

    @media screen and (max-width: 768px) {
      right: 0px;
      transform: translateY(-16%);
    }

    div,
    img {
      width: 900px;

      @media screen and (max-width: 768px) {
        width: 400px;
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
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      top: -95px;
      right: 15px;
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
        font-size: 28px;
        margin-bottom: 20px;
        order: 2;
        color: #1b5252;
        padding-right: 15px;
      }
    }

    h2 {
      font-size: 20px;
      font-weight: 400;
      color: #287e7e;
      text-align: center;
      margin-top: -15px;
      transform: translateX(5px);
      order: 1;

      @media screen and (max-width: 768px) {
        font-size: 14px;
        font-weight: 500;
        max-width: 300px;
        margin-top: -15px;
        margin-bottom: 15px;
        color: #1b5252;
        text-align: right;
        padding-right: 15px;
      }
    }

    div,
    img {
      width: 240px;

      @media screen and (max-width: 768px) {
        width: 85px;
        order: 3;
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
    padding-top: 50px;
    padding-bottom: 250px;
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

export const BodyCarouselWrapper = styled.div`
  position: relative;

  .slick-list {
    overflow-x: hidden;
  }

  .slick-track {
    display: flex;
  }

  .slick-dots {
    transform: translateY(0px);

    li {
      margin: 0 2px;

      button {
        transform: scale(1.15);

        &::before {
          font-size: 10px;
          opacity: 1;
          text-shadow: 0px 3px 6px #00000029;
          transition: opacity 0.2s;
          color: #fff;
        }
      }

      &.slick-active {
        button {
          &::before {
            opacity: 1;
            color: #002936;
          }
        }
      }
    }
  }
`

export const BodyCarouselItem = styled.div``

export const ExternalDesc = styled.div`
  padding-bottom: 50px;

  p {
    padding-top: 160px;
    font-size: 14px;
    max-width: 250px;
    font-weight: 400;
    color: #003d50;
  }
`
