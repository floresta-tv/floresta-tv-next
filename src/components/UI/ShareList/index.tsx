import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton
} from 'react-share'
import { useTranslations } from 'next-intl'

import {
  FacebookCircle as FacebookIcon,
  Twitter as TwitterIcon,
  Telegram as TelegramIcon,
  Whatsapp as WhatsappIcon,
  Linkedin as LinkedinIcon
} from '@styled-icons/boxicons-logos'

import { Envelope as EmailIcon } from '@styled-icons/boxicons-solid'

import * as S from './styles'

const ShareList = ({ url }: { url: string }) => {
  const t = useTranslations('misc')

  return (
    <S.ShareListWrapper>
      <span>{t.raw('share_text')}</span>
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} fill="#fff" />
      </FacebookShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={32} fill="#fff" />
      </WhatsappShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={32} fill="#fff" />
      </TwitterShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon size={32} fill="#fff" />
      </TelegramShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} fill="#fff" />
      </LinkedinShareButton>
      <EmailShareButton url={url}>
        <EmailIcon size={32} fill="#fff" />
      </EmailShareButton>
    </S.ShareListWrapper>
  )
}

export default ShareList
