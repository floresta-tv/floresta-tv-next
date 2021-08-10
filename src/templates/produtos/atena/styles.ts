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
    height: 180px;
    order: 3;
  }

  .shape {
    position: absolute;
    top: 0;
    right: -120px;
    transform: translateY(17%);

    @media screen and (max-width: 768px) {
      right: -10px;
      transform: translateY(-13%);
    }

    div,
    img {
      width: 900px;

      @media screen and (max-width: 768px) {
        width: 450px;
      }
    }
  }

  .ico {
    position: absolute;
    top: 215px;
    right: 124px;
    transform: translateY(-38%);
    z-index: 2;

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      top: -84px;
      right: 25px;
    }

    h1 {
      font-size: 65px;
      font-weight: 900;
      color: #003d50;
      text-transform: uppercase;
      text-align: center;
      transform: translateX(10px);
      margin-bottom: 40px;

      @media screen and (max-width: 768px) {
        color: #fff;
        font-size: 25px;
        margin-bottom: 30px;
        order: 2;
      }
    }

    h2 {
      font-size: 20px;
      font-weight: 400;
      color: #162933;
      text-align: center;
      margin-top: -15px;
      transform: translateX(5px);

      @media screen and (max-width: 768px) {
        font-size: 14px;
        max-width: 300px;
        margin-top: -15px;
        color: #162933;
        order: 1;
        margin-bottom: 30px;
      }
    }

    div,
    img {
      width: 240px;

      @media screen and (max-width: 768px) {
        width: 105px;
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
    padding-top: 60px;
    padding-bottom: 250px;
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
    }

    p {
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
      font-size: 24px;
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
