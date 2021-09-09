import styled from 'styled-components'
import media from 'styled-media-query'

interface ButtonWrapper {
  variant: string
}

export const ButtonWrapper = styled.div<ButtonWrapper>`
  font-size: 15px;
  text-transform: uppercase;
  background-color: #fff;
  border-radius: 30px;
  font-weight: 500;
  margin-right: 15px;
  color: #161e02;
  padding: 7px 25px;
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  ${media.lessThan('medium')`
    font-size: 13px;
  `}

  ${(props) =>
    props.variant === 'green' &&
    `
    background-color: var(--primary);
    color: #fff;
  `}

  ${(props) =>
    props.variant === 'transparent' &&
    `
    background-color: transparent;
    color: #fff;
    padding: 7px 7px
  `}
`
