import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.nav`
  position: absolute;
  width: 100%;
  z-index: 1200;
  cursor: default;
  padding-top: 50px;

  ${media.lessThan('medium')`
    padding-top: 60px;
  `}
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 300;
`

export const Brand = styled.div`
  position: relative;
  width: 210px;
  cursor: pointer;
  z-index: 10;
  margin-top: -10px;

  ${media.greaterThan('large')`
    width: 230px;
    margin-bottom: 0;
    margin-top: -20px;
  `}
`

export const Toggler = styled.button`
  position: absolute;
  top: 72px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  z-index: 3;
  background-color: var(--navy);

  div,
  img {
    width: 37px;
  }

  &:focus,
  &:active {
    background-color: none;
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
  height: calc(100vh);
  width: calc(101vw);
  top: 0px;
  left: 0;
  padding-top: 95px;

  ${(props: ListProps) =>
    media.lessThan('large')`
      padding-top: 120px;
      justify-content: flex-start;
      background-color: #024a05;
      left: 0;
      opacity: ${props.isVisible ? `0` : `1`};
      transition: all 0.7s;

      &, *{
        pointer-events:  ${props.isVisible ? `none` : `unset`} !important;
      }

      &::after {
        content: '';
        position: fixed;
        top: 0px;
        left: 0;
        opacity: ${props.isVisible ? `0` : `1`};
        width: calc(101vw);
        height: 90px;
        background-color: #024a05;
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

export const ItemWrapper = styled.div`
  position: relative;

  &:not(:nth-last-child(2)) {
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translate(100%, -50%);
      right: 0;
      height: 20px;
      width: 2.3px;
      background-color: #fff;
    }
  }
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  font-weight: 400;
  color: #fff;
  text-transform: lowercase;
  width: 100%;
  padding: 1rem 4rem;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.3s;

  ${media.greaterThan('large')`
    font-size: 18px;
    height: 100%;
    padding: 0rem 3rem;
    height: 100%;
    width: auto;
   

    &:hover {
      transform: scale(1.05);
      text-shadow: .5 .5 .5 .5 #fff;
    }
  `}

  ${(props: ItemProps) =>
    props.isActive &&
    `
    text-decoration: underline;
    `}
`

export const ItemButton = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: #161e02;
  text-transform: lowercase;
  padding: 0.5rem 2rem;
  border-radius: 20px;
  background-color: #ecfff5;
  text-decoration: none;
  transition: all 0.4s;

  ${media.lessThan('large')`
    margin: 10px 30px;
    font-size: 20px;
  `}

  &:hover {
    background-color: var(--primary);
    color: #fff;
  }
`

export const LanguagesWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;

  span {
    font-size: 13px;
    color: #ffffff;
    margin-right: 10px;
  }
`

export const LanguageButton = styled.button`
  position: relative;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 5px;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.05);
  }

  &.active {
    border: 3px solid var(--secondary);
  }

  &:not(:last-child) {
  }

  div,
  img {
    object-fit: cover;
    width: 102%;
    height: 102%;
  }

  ${media.lessThan('large')`
    width: 29px;
    height: 29px;
  `}
`
