import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.nav`
  width: 100%;
  height: 90px;
  background-color: var(--navy);

  ${media.greaterThan('large')`
    height: 120px;
  `}
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

export const Brand = styled.div`
  width: 160px;
  cursor: pointer;

  ${media.greaterThan('large')`
    width: 220px;
  `}
`

export const Toggler = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #003d50;
  cursor: pointer;
  transition: all 0.3s;
  height: 100%;
  width: 90px;
  border: none;

  &:hover {
    background-color: #006686;
  }

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
  height: calc(100vh - 90px);
  width: 71vw;
  top: 90px;
  left: 0;
  padding-top: 15px;

  ${(props: ListProps) =>
    media.lessThan('large')`
      background-color: #003d50;
      left: ${props.isVisible ? `-100vw` : `0`};
      transition: all 0.7s;
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

export const Item = styled.li`
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
    background-color: #006686;
    font-size: 20.5px;
  }

  ${media.greaterThan('large')`
    font-size: 30px;
    height: 100%;
    padding: 0 5rem;
    height: 100%;
    width: auto;

    &:hover {
      background-color: #006686;
      font-size: 30.5px;
    }
  `}
`
