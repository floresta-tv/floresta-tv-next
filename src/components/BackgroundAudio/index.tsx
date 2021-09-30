import { useState, useEffect } from 'react'
import usePersistedState from '../../utils/usePersistedState'
import { Sound, SoundMute } from '@styled-icons/entypo'

import * as S from './styles'

const BackgroundAudio = () => {
  const [play, setPlay] = usePersistedState('audioBackground', true)
  const [audioInstance, setAudioInstance] = useState<HTMLAudioElement>()
  const audioUrl = '/audio/florest.mp3'

  useEffect(() => {
    setAudioInstance(new Audio(audioUrl))
  }, [])

  useEffect(() => {
    if (audioInstance && play) {
      audioInstance.play()
    }
  }, [play, audioInstance])

  const playAudio = () => {
    setPlay(true)
    audioInstance.play()
  }

  const pauseAudio = () => {
    setPlay(false)
    audioInstance.pause()
  }

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
