import styled from 'styled-components'

export const ArticleSmallWrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  width: 100%;
  min-height: 240px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 6px 4px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.4s;

  @media screen and (max-width: 768px) {
    min-height: 200px;
  }

  &:hover {
    text-decoration: none;
    transform: scale(1.03);
    box-shadow: 7px 8px 14px rgba(0, 0, 0, 0.21);
  }
`

export const ArticleSmallImage = styled.div`
  width: 100%;
  transition: all 0.4s;
  z-index: 1;
  object-fit: cover;
  object-position: center center;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: #000000;
    opacity: 0.6;
    z-index: 5;
  }

  img,
  div {
    object-fit: cover;
    z-index: 4;
  }
`

export const ArticleSmallCaption = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 35px 25px 17px 35px;
  color: var(--dark);
  text-align: left;
  max-width: 320px;

  @media screen and (max-width: 768px) {
    padding: 25px 15px 25px 25px;
  }
  @media screen and (max-width: 768px) {
    height: 58%;
  }
`

export const ArticleSmallDate = styled.p`
  font-size: 10px;
  line-height: 1.1;
  margin-bottom: 5px;
  font-weight: normal;
  opacity: 0.8;
  z-index: 2;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`

export const ArticleSmallTitle = styled.h1`
  font-size: 26px;
  margin-bottom: 0;
  font-weight: normal;
  z-index: 2;
  line-height: 1;
  margin-bottom: 13px;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const ArticleSmallDesc = styled.p`
  font-size: 15px;
  line-height: 1.1;
  margin-bottom: 10px;
  font-weight: normal;
  opacity: 0.8;
  z-index: 2;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const ArticleSmallMore = styled.a`
  font-size: 15px;
  font-weight: normal;
  z-index: 2;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s;

  &:hover {
    color: #c73636;
  }
`
