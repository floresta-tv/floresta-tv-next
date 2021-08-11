import { GlossarioWord } from 'types/glossario'

import { Container } from '../../../components/UI'

import * as S from './styles'

type GlossarioResultProps = {
  word: GlossarioWord
}

const GlossarioResult = ({ word }: GlossarioResultProps) => {
  return (
    <S.ResultWrapper>
      <Container>
        <div className="markup">
          <p>{word.meaning}</p>
        </div>
      </Container>
    </S.ResultWrapper>
  )
}

export default GlossarioResult
