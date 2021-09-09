import styled from 'styled-components'
import media from 'styled-media-query'

export const Button = styled.button`
  @keyframes buttonFade {
    from {
      bottom: -50px;
    }

    to {
      bottom: 10px;
    }
  }
  position: fixed;
  bottom: 10px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  padding: 8px 20px 8px 20px;
  border-radius: 30px;
  right: 18px;
  background-color: var(--primary);
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  animation: buttonFade 1.5s;

  &:hover {
    background-color: var(--primary--darken);
  }

  svg {
    margin-top: -4px;
  }

  ${media.greaterThan('large')`
    font-size: 17px;
    padding: 12px 25px 12px 25px;
    border-radius: 30px;
    right: 18px;
  `}
`
