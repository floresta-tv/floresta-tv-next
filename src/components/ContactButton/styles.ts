import styled from 'styled-components'
import media from 'styled-media-query'

export const Button = styled.button`
  position: fixed;
  bottom: 0;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #9bc4ca;
  font-weight: 700;
  padding: 20px 30px 16px 30px;
  border-radius: 40px 40px 0 0;
  background-color: var(--primary);
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #01546e;
  }

  ${media.greaterThan('large')`
    font-size: 22px;
    padding: 29px 50px 24px 50px;
    border-radius: 65px 65px 0 0;
    right: 30px;
  `}
`
