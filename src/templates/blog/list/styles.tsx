import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;
  background-color: #01570c;
  min-height: 100vh;
  overflow: hidden;

  .react-reveal {
    z-index: 100;
  }
`

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
  padding-top: 170px;
  width: 100vw;

  @media screen and (max-width: 768px) {
    padding-top: 150px;
    padding-bottom: 40px;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #003509;
    opacity: 0.7;
    z-index: 2;

    @media screen and (max-width: 768px) {
    }
  }

  .title {
    position: relative;
    font-family: 'Anguita Sans', sans-serif;
    font-weight: 700;
    position: relative;
    font-size: 65px;
    text-align: center;
    color: #fff;
    margin-bottom: 10px;
    z-index: 3;

    .icon {
      position: absolute;
      top: 40px;
      right: 4vw;
      animation: float 7s infinite;

      @media screen and (max-width: 992px) {
        top: 20px;
        right: -50px;
      }

      div,
      img {
        width: 100px;

        @media screen and (max-width: 992px) {
          width: 70px;
        }
      }
    }

    @media screen and (max-width: 768px) {
      font-size: 45px;
    }
  }

  p {
    position: relative;
    letter-spacing: 1px;
    font-size: 18px;
    color: #fff;
    max-width: 430px;
    margin: 0 auto;
    text-align: center;
    z-index: 3;
  }
`

export const ContentWrapper = styled.section`
  padding: 30px 0 50px 0;
`

export const FilterInputWrapper = styled.div`
  position: relative;
  max-width: 550px;
  margin: 0 auto;

  .icon{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    z-index: 3;
  }

  input{
    font-family: 'Blogger Sans', sans-serif;
    display: block;
    font-size: 15px;
    width: 100%;
    height: 40px;
    padding-left: 50px;
    padding-right: 30px;
    border: none;
    border-radius: 36px;
    color: rgba(0, 0, 0, 0.5);
    box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.15);
    opacity: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    transition: all 0.3s;
    width: 100%;
    margin-bottom: 30px;
    background-color: #ffffffb9;

    @media screen and (min-width: 768px) {
      opacity: 0.84;
    }

    &:focus,
    &:active {
      color: rgba(0, 0, 0, 0.7);
      opacity: 0.94;
      outline: none;
    }
  }
}
`
