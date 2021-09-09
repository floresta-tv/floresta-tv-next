import Link from 'next/link'
import { MessageCircle } from '@styled-icons/evaicons-solid'

import * as S from './styles'

const ContactButton = () => {
  return (
    <>
      <Link passHref={true} href="/contato">
        <S.Button>
          <span>
            Olá, como podemos te ajudar? <MessageCircle fill="#fff" size={27} />
          </span>
        </S.Button>
      </Link>
    </>
  )
}

export default ContactButton
