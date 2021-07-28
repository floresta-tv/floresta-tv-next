import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  position: relative;
  width: 100%;
  padding: 24px 30px 24px 30px;
  background-color: var(--secondary);
  z-index: 400;

  ${media.greaterThan('large')`
    padding: 34px 60px 34px 60px;
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
  color: var(--light);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;

  ${media.greaterThan('large')`
    margin-bottom: 30px;
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
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--light);
    }
  }

  ${media.greaterThan('large')`
    a{
      margin-bottom: -10px;
    }
  `}
`

export const CopyWrapper = styled.footer`
  position: relative;
  width: 100%;
  padding: 22px 30px 70px 30px;
  background-color: var(--navy);
  z-index: 300;

  ${media.greaterThan('large')`
    padding: 22px 60px 26px 60px;
  `}
`

export const CopyContainer = styled.div`
  width: 100%;
`

export const CopyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  ${media.greaterThan('large')`
    flex-direction: row;
  `}
`

export const CopyInfo = styled.div`
  position: relative;
  font-size: 14px;
  text-align: center;
  font-weight: 700;
  width: 216px;
  margin-bottom: 10px;

  ${media.greaterThan('large')`
  font-size: 16px;
  width: 220px;
  text-align: left;
  margin-bottom: 0px;
  `}

  span {
    display: block;
    margin: 4px 0;
    color: var(--light);

    &:first-child {
      text-transform: uppercase;
    }

    a {
      color: inherit;
      cursor: pointer;
      transition: color 0.2s;
      text-decoration: none;

      &:hover {
        color: #fff;
      }
    }
  }
`

export const CopySocial = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 10px;

  ${media.greaterThan('large')`
    margin-left: 140px;
  `}
`

export const CopySocialItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: var(--primary);
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 10px;

  &:not(:last-child) {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  &:hover {
    transform: scale(1.04);
    background-color: var(--light);
  }

  svg {
    width: 25px;
  }

  ${media.greaterThan('large')`
    width: 44px;
    height: 44px;

    svg{
      width: 34px;
    }

    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 14px;
    }
  `}
`
