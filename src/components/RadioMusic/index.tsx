import React, { useState, useEffect, useRef } from 'react'
import { MusicNote2Play as MusicIcon } from '@styled-icons/fluentui-system-filled/'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline'
import tracks from './tracks'
import AudioControls from './AudioControls'
import * as S from './styles'

const AudioPlayer = () => {
  // State
  const [trackIndex, setTrackIndex] = useState(0)
  const [trackProgress, setTrackProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  // Destructure for conciseness
  const { title, artist, audioSrc } = tracks[trackIndex]

  // Refs
  const audioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio(audioSrc) : undefined
  )
  const intervalRef = useRef()
  const isReady = useRef(false)

  // Destructure for conciseness
  let duration = undefined
  let currentPercentage = undefined
  let trackStyling = undefined

  if (audioRef.current) {
    duration = audioRef.current.duration
    currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%'
    trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `
  }
  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current)

    // @ts-ignore
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack()
      } else {
        setTrackProgress(audioRef.current.currentTime)
      }
      // @ts-ignore
    }, [1000])
  }

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current)
    audioRef.current.currentTime = value
    setTrackProgress(audioRef.current.currentTime)
  }

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true)
    }
    startTimer()
  }

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1)
    } else {
      setTrackIndex(trackIndex - 1)
    }
  }

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1)
    } else {
      setTrackIndex(0)
    }
  }

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
      startTimer()
    } else {
      audioRef.current.pause()
    }
    screen.width < 768 ? setIsVisible(false) : setIsVisible(true)
  }, [])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
      startTimer()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause()

    audioRef.current = new Audio(audioSrc)
    setTrackProgress(audioRef.current.currentTime)

    if (isReady.current) {
      audioRef.current.play()
      setIsPlaying(true)
      startTimer()
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true
    }
  }, [trackIndex])

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause()
      clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    audioRef.current.play()
  }, [])

  return (
    <S.AudioPlayer isVisible={isVisible}>
      <S.AudioPlayerToggler onClick={() => setIsVisible((old) => !old)}>
        {isVisible ? <CloseIcon size={30} /> : <MusicIcon size={30} />}
      </S.AudioPlayerToggler>
      <S.TrackInfo>
        <S.SubTitle>Escutando agora:</S.SubTitle>
        <S.Title>{title}</S.Title>
        <S.Artist>{artist}</S.Artist>
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
        <S.Progress
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
      </S.TrackInfo>
    </S.AudioPlayer>
  )
}

export default AudioPlayer
