import { useState, useEffect, useCallback } from 'react'
import usePersistedState from '../../utils/usePersistedState'
import { Sound, SoundMute } from '@styled-icons/entypo'

import * as S from './styles'

const BackgroundAudio = () => {
  const [play, setPlay] = usePersistedState('audioBackground', true)
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
    setAudioInstance(new Audio(audioUrl))
  }, [])

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
        {play ? <SoundMute size={25} /> : <Sound size={25} />}
      </S.BackgroundAudioButton>
    </div>
  )
}

export default BackgroundAudio
