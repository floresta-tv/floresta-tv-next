import styled from 'styled-components'
import media from 'styled-media-query'

export const BlogItemWrapper = styled.article`
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  max-width: 380px;
  height: 320px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 6px 4px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    text-decoration: none;
    transform: scale(1.03);
    box-shadow: 7px 8px 14px rgba(0, 0, 0, 0.21);
  }
`

export const BlogItemImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.4s;
  object-fit: cover;
  object-position: center center;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.4;
  }

  ${media.lessThan('small')`
        height: 140px;
    `}

  div, img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export const BlogItemCaption = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 35px 25px 17px 35px;
  color: var(--dark);
  text-align: left;
  z-index: 3;

  ${media.lessThan('large')`
        padding: 25px 15px 25px 25px;
    `}

  ${media.lessThan('small')`
        height: 58%;
    `}
`

export const BlogItemDate = styled.p`
  font-size: 12px;
  line-height: 1.1;
  margin-bottom: 10px;
  font-weight: normal;
  opacity: 0.8;
  z-index: 2;
  color: #fff;

  ${media.lessThan('small')`
        font-size: 15px;
    `}
`

export const BlogItemTitle = styled.h1`
  font-size: 26px;
  margin-bottom: 0;
  font-weight: normal;
  z-index: 2;
  line-height: 1;
  margin-bottom: 13px;
  color: #fff;

  ${media.lessThan('medium')`
        font-size: 24px;
    `}

  ${media.lessThan('small')`
        font-size: 20px;
    `}
`

export const BlogItemDesc = styled.p`
  font-size: 15px;
  line-height: 1.1;
  margin-bottom: 20px;
  font-weight: normal;
  opacity: 0.95;
  z-index: 2;
  color: #fff;

  ${media.lessThan('small')`
        font-size: 15px;
    `}
`

export const BlogItemMore = styled.a`
  font-size: 15px;
  font-weight: normal;
  z-index: 2;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s;

  &:hover {
    color: #facf11;
  }
`
