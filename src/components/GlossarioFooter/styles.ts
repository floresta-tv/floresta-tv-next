import styled from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  isOverlapVisible: boolean
}

export const Wrapper = styled.nav`
  position: relative;
  width: 100%;
  background-color: var(--primary);
  z-index: 300;

  ${(props: WrapperProps) =>
    media.lessThan('large')`
    &::after {
      content: '';
      z-index: -1;
      position: fixed;
      top: 0px;
      left: ${props.isOverlapVisible ? `-100vw` : `0`};
      width: calc(100vw - 90px);
      height: 91px;
      background-color: #003d50;
      transition: all 0.7s;
    }
  `}
`

export const Container = styled.div`
  width: 100%;
  padding: 24px 30px 24px 30px;

  ${media.greaterThan('large')`
    padding: 40px 60px 40px 60px;
  `}
`

export const Content = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  z-index: 300;
`

export const Title = styled.h2`
  font-size: 23px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
`

export const Desc = styled.p`
  font-size: 15px;
  color: #fff;
  margin-bottom: 4px;
  letter-spacing: 0.5px;
`

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 15px;
  z-index: 1000;

  ${media.greaterThan('large')`
    
  `}
`

export const Item = styled.li`
  display: block;
  font-size: 18px;
  font-weight: 900;
  color: var(--navy);
  text-transform: uppercase;
  margin-right: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  ${media.greaterThan('large')`
    font-size: 27px;
    height: 100%;
    margin-bottom: 0;

    &:hover {
      background-color: var(--primary);
    }
  `}
`
