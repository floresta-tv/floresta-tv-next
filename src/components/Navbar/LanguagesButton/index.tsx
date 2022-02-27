import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import * as S from './styles'
import { Container } from 'components/UI'

type LanguagesButtonProps = {
  hasContainer?: boolean
  disabled?: boolean
}

const LanguagesButton = ({ hasContainer, disabled }: LanguagesButtonProps) => {
  const router = useRouter()

  return (
    <Container position={hasContainer === false ? `unset` : `relative`}>
      <S.LanguagesButtonWrapper
        isDisabled={disabled}
        hasContainer={hasContainer}
      >
        <span>lang: </span>
        <Link passHref={true} href="" locale="pt">
          <S.LanguageButton
            className={router.locale.includes('pt') && 'active'}
            aria-label="Selecionar idioma português"
            name="Selecionar idioma português"
          >
            <Image
              src="/img/bandeira_idioma_portugues.png"
              width={51}
              height={34}
              alt="Bandeira idioma português"
            ></Image>
          </S.LanguageButton>
        </Link>
        <Link passHref={true} href="" locale="en">
          <S.LanguageButton
            className={router.locale.includes('en') && 'active'}
            aria-label="Selecionar idioma inglês"
            name="Selecionar idioma inglês"
          >
            <Image
              src="/img/bandeira_idioma_ingles.png"
              width={51}
              height={34}
              alt="Bandeira idioma inglês"
            ></Image>
          </S.LanguageButton>
        </Link>
        <Link passHref={true} href="" locale="es">
          <S.LanguageButton
            className={router.locale.includes('es') && 'active'}
            aria-label="Selecionar idioma espanhol"
            name="Selecionar idioma espanhol"
          >
            <Image
              src="/img/bandeira_idioma_espanhol.png"
              width={51}
              height={34}
              alt="Bandeira idioma espanhol"
            ></Image>
          </S.LanguageButton>
        </Link>
        <Link passHref={true} href="" locale="fr">
          <S.LanguageButton
            className={router.locale.includes('fr') && 'active'}
            aria-label="Selecionar idioma francês"
            name="Selecionar idioma francês"
          >
            <Image
              src="/img/bandeira_idioma_frances.png"
              width={51}
              height={34}
              alt="Bandeira idioma francês"
            ></Image>
          </S.LanguageButton>
        </Link>
      </S.LanguagesButtonWrapper>
    </Container>
  )
}

export default LanguagesButton
