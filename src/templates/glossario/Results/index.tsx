import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import { GlossarioWord } from 'types/glossario'

import { Container } from '../../../components/UI'

import * as S from './styles'

type GlossarioResultsTemplateProps = {
  words: GlossarioWord[]
}

const GlossarioResultsTemplate = ({ words }: GlossarioResultsTemplateProps) => {
  return (
    <S.ResultsWrapper>
      <Container>
        <S.ResultsList>
          {words.length > 0 ? (
            words.map(({ title, meaning, slug }: GlossarioWord, index) => (
              <Fade bottom key={index}>
                <S.ResultItem>
                  <Link
                    passHref={true}
                    scroll={false}
                    href={`/glossario/palavra/${slug}?scroll=true`}
                  >
                    <div>
                      <S.ResultItemTitle>{title}</S.ResultItemTitle>
                      <S.ResultItemDesc>{meaning}</S.ResultItemDesc>
                    </div>
                  </Link>
                </S.ResultItem>
              </Fade>
            ))
          ) : (
            <h3 className="error">Sem palavras encontradas. </h3>
          )}
        </S.ResultsList>
      </Container>
    </S.ResultsWrapper>
  )
}

export default GlossarioResultsTemplate
