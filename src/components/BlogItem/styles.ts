import styled from 'styled-components'
import media from 'styled-media-query'

export const BlogItemWrapper = styled.article`
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  max-width: 330px;
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
  width: 100%;
  height: 190px;
  transition: all 0.4s;
  z-index: 1;
  object-fit: cover;
  object-position: center center;

  ${media.lessThan('small')`
        height: 140px;
    `}

  img {
    object-fit: cover;
  }
`

export const BlogItemCaption = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 52%;
  padding: 35px 25px 17px 35px;
  color: var(--dark);
  text-align: left;

  ${media.lessThan('large')`
        padding: 25px 15px 25px 25px;
    `}

  ${media.lessThan('small')`
        height: 58%;
    `}
`

export const BlogItemDate = styled.p`
  font-size: 10px;
  line-height: 1.1;
  margin-bottom: 5px;
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
  margin-bottom: 30px;
  font-weight: normal;
  opacity: 0.8;
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
  backgrund-color: none;
  color: #fff;
  transition: all 0.3s;

  &:hover {
    color: #facf11;
  }
`
