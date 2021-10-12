import styled from 'styled-components'

interface AudioPlayer {
  isVisible: boolean
}

export const AudioPlayer = styled.div<AudioPlayer>`
  position: fixed;
  top: 135px;
  right: 0;
  max-width: 350px;
  padding: 20px 30px;
  border-radius: 20px 0 0 20px;
  box-shadow: 0 28px 28px rgba(0, 0, 0, 0.2);
  margin: auto;
  color: var(--white);
  background-color: #ffffff;
  z-index: 10;
  opacity: 0.8;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  transform: translateX(calc(100%));

  ${(props) =>
    props.isVisible &&
    `
    transform: translateX(0);
  `}
`

export const Progress = styled.input`
  height: 5px;
  -webkit-appearance: none;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 15px;
  border-radius: 8px;
  background: #ffffff;
  transition: background 0.2s ease;
  cursor: pointer;

  &::-webkit-slider-thumb {
    width: 10px;
    -webkit-appearance: none;
    height: 10px;
    cursor: ew-resize;
    background: #434343;
    box-shadow: -80px 0 0 80px #e2e2e2;
    border-radius: 5px;
  }
`

export const TrackInfo = styled.div`
  text-align: center;
  z-index: 1;
  position: relative;
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
`

export const Artist = styled.h3`
  font-size: 17px;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 15px;
`

export const SubTitle = styled.span`
  text-align: 12px;
  opacity: 0.6;
  font-weight: 300;
  text-transform: uppercase;
`

export const AudioPlayerToggler = styled.button`
  position: absolute;
  display: block;
  top: 30%;
  left: -40px;
  padding: 3px 20px 3px 3px;
  border-radius: 10px 0 0 10px;
  background-color: #fff !important;
  transform: translateY(-50%);
`
