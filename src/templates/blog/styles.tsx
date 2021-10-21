import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  position: relative;
  background-color: #fffde8;
  min-height: 100vh;
  overflow: hidden;

  .react-reveal {
    z-index: 100;
  }

  ${media.greaterThan('large')`
   
  `}
`

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
  padding-top: 200px;
  width: 100vw;
  background-color: #012557;
  background-image: url('/img/comunidade_indigena_banner.png');
  background-position: top top;
  background-attachment: fixed;

  @media screen and (max-width: 768px) {
    background-position: center center;
    padding-top: 190px;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #012557;
    opacity: 0.8;
    z-index: 2;

    @media screen and (max-width: 768px) {
    }
  }

  .title {
    font-weight: 700;
    position: relative;
    font-size: 50px;
    text-align: center;
    color: #fff;
    z-index: 3;

    @media screen and (max-width: 768px) {
      font-size: 35px;
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
  padding: 50px 0;
`

interface ProjetoIcon {
  bgc: string
}

interface ProjetoCaption {
  bgc: string
}

export const ProjetoWrapper = styled.article`
  display: flex;
  align-items: stretch;
  margin-bottom: 30px;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`

export const ProjetoCaption = styled.div<ProjetoCaption>`
  font-size: 20px;
  padding: 30px;
  width: 80%;
  background-color: ${(props) => props.bgc};
  border-radius: 0 30px 30px 0;
  color: black;

  @media screen and (max-width: 992px) {
    border-radius: 0 0 30px 30px;
    width: 100%;
    text-align: center;
  }

  h2 {
    font-size: 32px;
    opacity: 0.9;
    font-weight: bold;
    color: black;
  }

  p {
    font-size: 18px;
    max-width: 650px;
  }
`

export const ProjetoIcon = styled.button<ProjetoIcon>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30%;
  padding: 10px 0;
  border-radius: 30px 0 0 30px;
  background-color: ${(props) => props.bgc};
  transition: transform 0.4s ease-in-out;
  border: none;

  @media screen and (max-width: 992px) {
    border-radius: 30px 30px 0 0;
    width: 100%;
  }

  &:hover {
    transform: scale(1.05);
  }

  div,
  img {
    width: 64%;
    height: 200px;
    object-fit: contain;
    object-position: center center;

    @media screen and (max-width: 992px) {
      width: 150px;
      height: auto;
    }
  }
`
