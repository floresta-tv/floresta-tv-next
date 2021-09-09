import styled from 'styled-components'
import media from 'styled-media-query'

export const InfoCardImage = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
  width: 340px;
  border-radius: 50%;
  overflow: hidden;
  border: 10px solid #e0ffe7;

  ${media.lessThan('medium')`
      height: 300px;
      width: 100%;
      margin-top: 20px;
  `}

  img {
    object-fit: cover;
  }
`

export const InfoCardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e0ffe7;
  height: 280px;
  margin-left: -100px;
  padding: 0 160px;
  border-radius: 0 130px 130px 0;
  max-width: 1000px;
  color: #0e3817;

  .title {
    font-size: 28px;
    font-family: 'Merriweather';
    font-weight: 800;
  }

  .desc {
    font-size: 14px;
    font-weight: 300;
    margin: 20px 0;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  margin-top: 10px;

  ${media.lessThan('large')`
    justify-content: center;
  `}
`

export const InfoCardWrapper = styled.article`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  &:nth-child(2n) {
    ${InfoCardImage} {
    }

    ${InfoCardBody} {
      margin-left: none;
      transform: translateX(150px);
      text-align: right;
      border-radius: 130px 0 0 130px;
    }

    ${SocialLinks} {
      justify-content: flex-end;
    }

    .col-lg-3 {
      position: relative;
      z-index: 4;
      order: 2;
    }
  }
`

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 37px;
  width: 37px;
  border: 1.5px solid #0e3817;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.45s;

  svg {
    width: 25px;
    fill: #0e3817;
    transition: all 0.45s;
  }

  &:hover {
    background-color: #0e3817;

    svg {
      fill: #e0ffe7;
    }
  }
`
