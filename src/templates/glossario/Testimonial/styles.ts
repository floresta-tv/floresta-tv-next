import styled from 'styled-components'

export const TestimonialWrapper = styled.div`
  padding-bottom: 100px;
  background-color: #e6e6e6;

  @media screen and (max-width: 992px) {
    padding-bottom: 50px;
  }
`

export const TestimonialContent = styled.div`
  display: flex;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }

  .left {
    width: 82%;

    @media screen and (max-width: 992px) {
      width: 100%;
    }
  }

  .right {
    width: 18%;

    @media screen and (max-width: 992px) {
      width: 100%;
    }
  }
`

export const TestimonialTitle = styled.h2`
  font-size: 27px;
  font-weight: 500;
  color: #006686;
  margin-bottom: 30px;
  padding-right: 5%;

  @media screen and (max-width: 992px) {
    font-size: 22px;
    padding-right: 0;
    margin-bottom: 20px;
  }
`

export const TestimonialDescription = styled.p`
  font-size: 17px;
  font-weight: 400;
  padding-right: 10%;

  @media screen and (max-width: 992px) {
    font-size: 15px;
    padding-right: 0;
  }
`

export const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;

  @media screen and (max-width: 992px) {
    margin-top: 30px;
  }

  &:hover {
    transform: scale(1.03);
  }

  .img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 16px;

    div,
    img {
      width: 100%;
    }
  }
  .name {
    display: flex;
    align-items: center;
    color: #003d50;
    font-weight: 500;
    font-size: 18px;
    white-space: nowrap;

    svg {
      margin-right: 5px;
      width: 22px;
    }
  }
`
