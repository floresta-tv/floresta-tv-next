import styled from 'styled-components'

export const BackgroundAudioButton = styled.button`
  position: fixed;
  top: 80px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: #fff;
  width: 45px;
  height: 37px;
  padding: 5px;
  border-radius: 10px 0 0 10px;
  z-index: 10;
  border: none;
  box-shadow: 0.3px 0.3px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: width 0.4s;

  @media screen and (max-width: 768px) {
    top: 125px;
  }

  &:hover {
    width: 50px;
  }
`
