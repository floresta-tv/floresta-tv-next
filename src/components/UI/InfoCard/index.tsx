import Image from 'next/image'
import { Flex, Box } from 'rebass'

import {
  Medium as MediumIcon,
  Instagram as InstagramIcon,
  Youtube as YoutubeIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon
} from '@styled-icons/boxicons-logos'
import { Globe as WebsiteIcon } from '@styled-icons/bootstrap'

import * as S from './styles'

type InfoCardProps = {
  image: string
  title: JSX.Element
  subtitle: JSX.Element
  desc: JSX.Element
  bgc?: string
  color?: string
  label?: string
  social?: {
    website?: string
    instagram?: string
    medium?: string
    twitter?: string
    facebook?: string
    youtube?: string
  }
}

const InfoCard = ({
  image,
  title,
  subtitle,
  desc,
  social,
  bgc,
  label,
  color
}: InfoCardProps) => {
  return (
    <S.InfoCardWrapper>
      <Flex flexWrap={`wrap`}>
        <Box width={[1, 0.3]}>
          <S.InfoCardImage border={bgc}>
            <Image
              placeholder="blur"
              blurDataURL={image}
              src={image}
              layout={`fill`}
              alt={title.toString()}
            />
          </S.InfoCardImage>
        </Box>
        <Box width={[1, 0.7]} style={{ display: 'flex', alignItems: 'center' }}>
          <S.InfoCardBody bgc={bgc} color={color}>
            <div className="caption">
              <span className="desc">{label}</span>
              <h2 className="title">{title}</h2>
              <h3 className="subtitle">{subtitle}</h3>
              <p className="desc">{desc}</p>
              <S.SocialLinks>
                {social.website && (
                  <S.SocialLink
                    bgc={bgc}
                    color={color}
                    target="_blank"
                    href={social.website}
                  >
                    <WebsiteIcon />
                  </S.SocialLink>
                )}
                {social.facebook && (
                  <S.SocialLink
                    bgc={bgc}
                    color={color}
                    target="_blank"
                    href={social.facebook}
                  >
                    <FacebookIcon />
                  </S.SocialLink>
                )}
                {social.medium && (
                  <S.SocialLink
                    bgc={bgc}
                    color={color}
                    target="_blank"
                    href={social.medium}
                  >
                    <MediumIcon />
                  </S.SocialLink>
                )}
                {social.instagram && (
                  <S.SocialLink
                    bgc={bgc}
                    color={color}
                    target="_blank"
                    href={social.instagram}
                  >
                    <InstagramIcon />
                  </S.SocialLink>
                )}
                {social.youtube && (
                  <S.SocialLink
                    bgc={bgc}
                    color={color}
                    target="_blank"
                    href={social.youtube}
                  >
                    <YoutubeIcon />
                  </S.SocialLink>
                )}
                {social.twitter && (
                  <S.SocialLink
                    bgc={bgc}
                    color={color}
                    target="_blank"
                    href={social.twitter}
                  >
                    <TwitterIcon />
                  </S.SocialLink>
                )}
              </S.SocialLinks>
            </div>
          </S.InfoCardBody>
        </Box>
      </Flex>
    </S.InfoCardWrapper>
  )
}

export default InfoCard
