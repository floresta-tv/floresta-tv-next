import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  position: relative;
  width: 100%;
  padding: 54px 30px 54px 30px;
  background-color: #0d2e03;
  background-size: cover;
  z-index: 400;

  ${media.greaterThan('large')`
    padding: 84px 90px 34px 130px;
  `}
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;

  ${media.lessThan('large')`
    width: 100%;
  `}
`

export const Content = styled.div`
  ${media.greaterThan('large')`
  `}
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  ${media.greaterThan('large')`
    flex-direction: row;
    flex-wrap: nowrap;
  `}
`

export const GridColumn = styled.div`
  flex-basis: 1;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  ${media.greaterThan('large')`
    flex: 0.33;
    
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  `}
`

export const GridTitle = styled.h4`
  display: block;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;

  ${media.lessThan('medium')`
    max-width: unset;
    text-align: center;
  `}

  ${media.greaterThan('large')`
    margin-bottom: 20px;
  `}
`

export const GridList = styled.ul`
  list-style: none;

  ${media.greaterThan('large')`
  `}
`

export const GridListItem = styled.li`
  display: block;
  color: #fff;
  max-width: 252px;

  ${media.lessThan('medium')`
    max-width: unset;
    text-align: center;
  `}

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  .adress {
    display: block;
    font-size: 13px;
    font-weight: 300;
    opacity: 0.9;
    line-height: 1.5;
  }

  strong {
    display: block;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  a {
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    text-decoration: underline;
    transition: color 0.2s;

    &:hover {
      color: var(#efefef);
    }
  }

  ${media.greaterThan('large')`
  a{
    margin-bottom: -10px;
  }
  `}
`

export const Copy = styled.p`
  margin-top: 35px;
  text-align: center;
  font-size: 15px;
  color: #fff;
`

export const SocialLinks = styled.div`
  display: flex;
  margin-top: 10px;

  ${media.lessThan('large')`
    justify-content: center;
  `}
`

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 37px;
  width: 37px;
  border: 1.5px solid #ffffff;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.45s;

  svg {
    width: 25px;
    fill: #ffffff;
    transition: all 0.45s;
  }

  &:hover {
    background-color: #fff;

    svg {
      fill: #024a05;
    }
  }
`
