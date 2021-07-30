import Link from 'next/link'

import { Container } from '../../../components/UI'

import * as S from './styles'

const GlossarioResult = () => {
  return (
    <S.ResultWrapper>
      <Container>
        <div className="markup">
          <p>
            Pessoa que possui uma ou mais ações numa sociedade financeira ou
            comercial.
          </p>

          <h2>Definição de Acionista</h2>
          <p>
            Classe gramatical: adjetivo de dois gêneros e substantivo de dois
            gêneros Separação silábica: a-ci-o-nis-ta Plural: acionistas
          </p>
          <p>
            adjetivo de dois gêneros
            <br />
            1. Que é relativo a ação.
          </p>
          <p>
            substantivo de dois gêneros <br />
            2. Pessoa que é possuidora de ações de alguma empresa.
          </p>

          <h2>Sinônimo</h2>
          <p>
            <Link scroll={false} href="/glossario/word/socio">
              <a>sócio.</a>
            </Link>
          </p>
        </div>
      </Container>
    </S.ResultWrapper>
  )
}

export default GlossarioResult
