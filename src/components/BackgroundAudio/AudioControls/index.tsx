import React from 'react'
import { Previous as Prev, Next } from '@styled-icons/fluentui-system-filled'
import { PlayFill as Play, PauseFill as Pause } from '@styled-icons/bootstrap'
import * as S from './styles'

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick
}) => (
  <S.AudioControls>
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <Prev size={20} />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <Pause size={35} />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <Play size={35} />
      </button>
    )}
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <Next size={20} />
    </button>
  </S.AudioControls>
)

export default AudioControls
