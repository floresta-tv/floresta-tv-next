import styled from 'styled-components'

interface InfoCardImage {
  border: string
}

export const InfoCardImage = styled.div<InfoCardImage>`
  position: relative;
  width: 100%;
  height: 340px;
  width: 340px;
  border-radius: 50%;
  overflow: hidden;
  border: 10px solid ${(props) => props.theme.colors.terc};

  @media screen and (max-width: 992px) {
    height: 260px;
    width: 260px;
    margin: 0 auto;
    margin-top: 20px;
  }

  img {
    object-fit: cover;
  }
`

interface ColorProps {
  bgc: string
  color: string
}

export const InfoCardBody = styled.div<ColorProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 280px;
  margin-left: -100px;
  padding: 0 140px 0 150px;
  border-radius: 0 130px 130px 0;
  max-width: 1000px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.terc};
  color: ${(props) => props.theme.colors.white};

  .title {
    font-size: 28px;
    font-family: 'Merriweather';
    font-weight: 800;
  }

  .desc {
    font-size: 14px;
    font-weight: 400;
    margin: 20px 0;
  }

  @media screen and (max-width: 992px) {
    border-radius: 15px !important;
    margin: -80px 0 0 0 !important;
    height: auto !important;
    padding: 90px 15px 15px 15px !important;
    text-align: center !important;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  margin-top: 10px;

  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`

export const InfoCardWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;

  .react-reveal {
    width: 100%;
  }
`

export const SocialLink = styled.a<ColorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 37px;
  width: 37px;
  border: 1.5px solid ${(props) => props.theme.colors.white};
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.45s;

  svg {
    width: 25px;
    fill: ${(props) => props.theme.colors.white};
    transition: all 0.45s;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.white};

    svg {
      fill: ${(props) => props.theme.colors.terc};
    }
  }
`
