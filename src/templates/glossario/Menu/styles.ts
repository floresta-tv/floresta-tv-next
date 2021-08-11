import styled from 'styled-components'
import media from 'styled-media-query'

export const MenuWrapper = styled.nav`
  position: relative;
  width: 100%;
  background-color: var(--primary);
  z-index: 300;

  .react-reveal {
    width: 100%;
  }
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

    @media screen and (max-width: 768px) {
      order: 1;
      margin: 15px 0 10px 0;
    }
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
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  z-index: 1000;
  width: 100%;

  ${media.greaterThan('large')`
    
  `}
`

type MenuItemProps = {
  isActive?: boolean
}

export const MenuItem = styled.li`
  display: block;
  font-size: 30px;
  font-weight: 900;
  color: var(--navy);
  width: 20%;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1.4rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  ${media.greaterThan('large')`
    font-size: 27px;
    height: 100%;
    width: unset;
    margin-right: 1.9rem;
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
    font-size: 60px;
    margin-bottom: -16px;
    width: unset;
    justify-content: flex-start;
    order: 2;
  }
`

export const MenuSelectedWord = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;

  h3 {
    font-size: 70px;
    margin-bottom: -18px;
    margin-top: 15px;
  }

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    order: 2;
    padding-top: 10px;

    h3 {
      font-size: 33px;
      margin-bottom: -8px;
      margin-top: 0;
    }
  }
`

export const MenuSelectedLetterDesc = styled.span`
  font-size: 20px;
  color: #fff;
  text-align: right;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`
