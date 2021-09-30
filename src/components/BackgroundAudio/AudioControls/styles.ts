import styled from 'styled-components'

export const AudioControls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 0 auto 15px;

  .audio-controls {
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: 0 auto 15px;
  }

  .audio-controls path {
    fill: black;
  }

  .color-backdrop {
    background: linear-gradient(45deg, rgba(0, 0, 0, 1) 20%, transparent 100%)
      no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .color-backdrop.playing {
    animation: rgba(0, 0, 0, 1) 20s alternate infinite;
  }

  @keyframes colorChange {
    from {
      filter: hue-rotate(0deg);
    }
    to {
      filter: hue-rotate(360deg);
    }
  }
`
