import styled from 'styled-components'
import media from 'styled-media-query'

export const MenuWrapper = styled.nav`
  position: relative;
  width: 100%;
  background-color: var(--primary);
  z-index: 300;
`

export const MenuContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  z-index: 300;
  padding-top: 40px;

  hr {
    width: 100%;
    height: 3px;
    background-color: #fff;
    margin: 25px 0 10px 0;
  }
`

export const MenuTitle = styled.h2`
  font-size: 23px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
`

export const MenuDesc = styled.p`
  font-size: 15px;
  color: #fff;
  margin-bottom: 4px;
  letter-spacing: 0.5px;
`

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 15px;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${media.greaterThan('large')`
    
  `}
`

type MenuItemProps = {
  isActive?: boolean
}

export const MenuItem = styled.li`
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

  ${(props: MenuItemProps) =>
    props.isActive &&
    `
    color: #fff;
  `}
`

export const MenuSelectedLetter = styled.h3`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 113px;
  color: #fff;
  font-weight: 700;
  margin-bottom: -28px;

  .upper {
    text-transform: uppercase;
  }

  .lower {
    text-transform: lowercase;
  }

  @media screen and (max-width: 768px) {
    font-size: 100px;
    margin-bottom: -25px;
    width: 100%;
    justify-content: center;
  }
`

export const MenuSelectedWord = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 60px;
      margin-bottom: -5px;
    }
  }
`

export const MenuSelectedLetterDesc = styled.span`
  font-size: 20px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
