import styled from 'styled-components'

export const Wrapper = styled.section`
  background-image: url('/img/produtos-stairs-2.png');
  background-size: 110% 1700px;
  background-position: 10% 60%;
  background-repeat: no-repeat;
  max-width: 100vw;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    background-size: 900px 1150px;
  }

  @media screen and (max-width: 450px) {
    background-size: 900px 1150px;
    background-position: -320px -330px;
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
    right: -50px;
    transform: translateY(-40%);

    @media screen and (max-width: 768px) {
      right: 40px;
      transform: translateY(-44%);
    }

    div,
    img {
      width: 900px;

      @media screen and (max-width: 768px) {
        width: 440px;
      }
    }
  }

  .ico {
    position: absolute;
    top: 295px;
    right: 124px;
    transform: translateY(-40%);
    z-index: 2;

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      top: 140px;
      right: 40px;
    }

    h1 {
      font-size: 65px;
      font-weight: 900;
      color: #006686;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 10px;
      transform: translateX(10px);

      @media screen and (max-width: 768px) {
        font-size: 27px;
        margin-bottom: 10px;
        transform: translateX(5px);
        color: #fff;
      }
    }

    h2 {
      font-size: 20px;
      font-weight: 400;
      color: #162933;
      text-align: center;
      margin-top: -5px;
      transform: translateX(5px);

      @media screen and (max-width: 768px) {
        font-size: 16px;
        max-width: 290px;
        color: #162933;
        margin-top: 20px;
      }
    }

    div,
    img {
      width: 240px;

      @media screen and (max-width: 768px) {
        width: 100px;
      }
    }
  }
`

export const Body = styled.div`
  position: relative;
  padding-top: 100px;
  width: 70%;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 130px;
  }

  .mockup-caption {
    position: absolute;
    bottom: 100px;
    left: 0;
    transform: translateX(-110%);
    max-width: 20vw;

    @media screen and (max-width: 768px) {
      position: relative;
      bottom: unset;
      max-width: unset;
      transform: unset;
      padding-bottom: 50px;
      padding-top: 220px;
    }

    p {
      color: #003d50;
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
      font-size: 16px;
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

  h3 {
    color: #fff !important;
  }
`

export const BodyCarouselItem = styled.div``
