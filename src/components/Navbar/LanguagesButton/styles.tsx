import styled from 'styled-components'

interface LanguagesButtonWrapper {
  hasContainer: boolean
  isDisabled: boolean
}
export const LanguagesButtonWrapper = styled.div<LanguagesButtonWrapper>`
  position: absolute;
  top: 10px;
  right: 15px;
  display: flex;
  align-items: center;
  z-index: 1300;

  ${(props) =>
    props.hasContainer == false &&
    `
    right: 70px;`}

  ${(props) =>
    props.isDisabled &&
    `
      opacity: .3;
      cursor: not-allowed;

      button{
        pointer-events: none;
      }
    `}

  @media screen and (max-width: 992px) {
    right: 10px;
  }

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
    border: 3px solid #fff;
  }
  &:not(:last-child) {
  }
  div,
  img {
    object-fit: cover;
    width: 102%;
    height: 102%;
  }
  @media screen and (max-width: 992px) {
    width: 29px;
    height: 29px;
  }
`
