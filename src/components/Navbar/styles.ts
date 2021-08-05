import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.nav`
  position: relative;
  width: 100%;
  height: 85px;
  background-color: var(--navy);
  z-index: 1200;

  ${media.greaterThan('large')`
    height: 120px;
  `}
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  z-index: 300;
`

export const Brand = styled.div`
  position: relative;
  width: 130px;
  cursor: pointer;
  z-index: 10;
  margin-bottom: -4px;

  ${media.greaterThan('large')`
    width: 220px;
    margin-bottom: 0;
  `}
`

export const Toggler = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  height: 100%;
  width: 70px;
  border: none;
  z-index: 3;
  background-color: var(--navy);

  ${media.greaterThan('large')`
    display: none;
  `}
`

type ListProps = {
  isVisible: boolean
}

export const List = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: calc(100vh);
  width: calc(100vw);
  top: 0px;
  left: 0;
  padding-top: 105px;

  ${(props: ListProps) =>
    media.lessThan('large')`
      background-color: var(--navy);
      left: 0;
      opacity: ${props.isVisible ? `0` : `1`};
      transition: all 0.7s;

      &::after {
        content: '';
        position: fixed;
        top: 0px;
        left: 0;
        opacity: ${props.isVisible ? `0` : `1`};
        width: calc(100vw);
        height: 90px;
        background-color: var(--navy);
        transition: all 0.7s;
        z-index: -1;
      }
  `}

  ${media.greaterThan('large')`
    position: relative;
    flex-direction: row;
    height: 100%;
    top: unset;
    left: unset;
    width: auto;
    padding: 0;
  `}
`

type ItemProps = {
  isActive: boolean
}

export const ItemWrapper = styled.div``

export const Item = styled.li`
  display: flex;
  align-items: center;
  font-weight: 900;
  color: #fff;
  text-transform: lowercase;
  width: 100%;
  padding: 2rem 4rem;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 20px;
  background-color: var(--navy);

  &:hover {
    background-color: var(--primary);
    font-size: 20.5px;
  }

  ${(props: ItemProps) =>
    props.isActive &&
    `
    background-color: var(--primary);
    `}

  ${media.greaterThan('large')`
    font-size: 30px;
    height: 100%;
    padding: 0 5rem;
    height: 100%;
    width: auto;
    background-color: #003d50;
   

    &:hover {
      background-color: var(--primary);
      font-size: 30.5px;
    }
  `}
`

export const SubWrapper = styled.ul`
  display: flex;
  align-items: center;
  background-color: #003d50;
  font-weight: 900;
  color: #fff;
  text-transform: lowercase;
  width: 100%;
  padding: 2rem 4rem;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 20px;

  &:hover {
    background-color: var(--primary);
    font-size: 20.5px;
  }

  ${(props: ItemProps) =>
    props.isActive &&
    `
  background-color: var(--primary);
  `}

  ${media.greaterThan('large')`
    font-size: 30px;
    height: 100%;
    padding: 0 5rem;
    height: 100%;
    width: auto;

    &:hover {
      background-color: var(--primary);
      font-size: 30.5px;
    }
  `}
`

export const SubItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #003d50;
  font-weight: 900;
  color: #fff;
  text-transform: lowercase;
  width: 100%;
  padding: 2rem 4rem;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 20px;

  &:hover {
    background-color: var(--primary);
    font-size: 20.5px;
  }

  ${media.greaterThan('large')`
    font-size: 30px;
    height: 100%;
    padding: 0 5rem;
    height: 100%;
    width: auto;

    &:hover {
      background-color: var(--primary);
      font-size: 30.5px;
    }
  `}
`
