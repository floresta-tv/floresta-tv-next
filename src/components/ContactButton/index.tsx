import { MessageCircle } from '@styled-icons/evaicons-solid'

import * as S from './styles'

const ContactButton = () => {
  return (
    <>
      <S.Button>
        <span>
          Olá, como podemos te ajudar? <MessageCircle fill="#fff" size={27} />
        </span>
      </S.Button>
    </>
  )
}

export default ContactButton
