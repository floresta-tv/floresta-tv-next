import Link from 'next/link'

import { Container } from '../../../components/UI'

import * as S from './styles'

const GlossarioResults = () => {
  return (
    <S.ResultsWrapper>
      <Container>
        <S.ResultsList>
          <S.ResultItem>
            <Link
              passHref={true}
              scroll={false}
              href="/glossario/palavra/acionista"
            >
              <div>
                <S.ResultItemTitle>Lorem</S.ResultItemTitle>
                <S.ResultItemDesc>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself.
                </S.ResultItemDesc>
              </div>
            </Link>
          </S.ResultItem>

          <S.ResultItem>
            <Link
              passHref={true}
              scroll={false}
              href="/glossario/palavra/acionista"
            >
              <div>
                <S.ResultItemTitle>Lorem</S.ResultItemTitle>
                <S.ResultItemDesc>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself.
                </S.ResultItemDesc>
              </div>
            </Link>
          </S.ResultItem>

          <S.ResultItem>
            <Link
              passHref={true}
              scroll={false}
              href="/glossario/palavra/acionista"
            >
              <div>
                <S.ResultItemTitle>Lorem</S.ResultItemTitle>
                <S.ResultItemDesc>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself.
                </S.ResultItemDesc>
              </div>
            </Link>
          </S.ResultItem>
        </S.ResultsList>
      </Container>
    </S.ResultsWrapper>
  )
}

export default GlossarioResults
