import Link from 'next/link'
import { MessageCircle } from '@styled-icons/evaicons-solid'
import { useTranslations } from 'next-intl'

import * as S from './styles'

const ContactButton = () => {
  const t = useTranslations('contact-button')

  return (
    <>
      <Link passHref={true} href="/contato">
        <S.Button>
          <span>
            {t.raw('label')} <MessageCircle fill="#fff" size={27} />
          </span>
        </S.Button>
      </Link>
    </>
  )
}

export default ContactButton
