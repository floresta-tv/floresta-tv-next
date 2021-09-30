import { useState, useEffect, useCallback } from 'react'
import usePersistedState from '../../utils/usePersistedState'
import { VolumeMute } from '@styled-icons/boxicons-regular/'
import { MusicNote2Play } from '@styled-icons/fluentui-system-filled/'

import * as S from './styles'

const BackgroundAudio = () => {
  const [ios, setIos] = useState<boolean>(false)
  const [play, setPlay] = usePersistedState<boolean>('audioBackground', true)
  const [audioInstance, setAudioInstance] = useState<HTMLAudioElement>()
  const audioUrl = '/audio/florest.mp3'

  const playAudio = useCallback(() => {
    setPlay(true)
    audioInstance.play()
  }, [audioInstance, setPlay])

  const pauseAudio = () => {
    setPlay(false)
    audioInstance.pause()
  }

  useEffect(() => {
    const audioInstance = new Audio(audioUrl)
    setAudioInstance(audioInstance)
    const isIos =
      [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
    setIos(isIos)
  }, [])

  useEffect(() => {
    if (ios && play) {
      window.addEventListener('scroll', function () {
        audioInstance.play()
      })
    }
  }, [audioInstance, play, ios])

  useEffect(() => {
    if (audioInstance && play) {
      audioInstance.addEventListener(
        'ended',
        function () {
          audioInstance.currentTime = 0
          playAudio()
        },
        false
      )
    }
  }, [audioInstance, playAudio, play])

  useEffect(() => {
    if (audioInstance && play) {
      audioInstance.play()
    }
  }, [audioInstance, play])

  return (
    <div>
      <S.BackgroundAudioButton
        onClick={() => (play === true ? pauseAudio() : playAudio())}
      >
        {play ? <VolumeMute size={25} /> : <MusicNote2Play size={25} />}
      </S.BackgroundAudioButton>
    </div>
  )
}

export default BackgroundAudio
