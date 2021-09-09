import { Row, Col } from 'react-bootstrap'
import Image from 'next/image'

import Zoom from 'react-reveal/Zoom'

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
  social?: {
    website?: string
    instagram?: string
    medium?: string
    twitter?: string
    facebook?: string
    youtube?: string
  }
}

const InfoCard = ({ image, title, subtitle, desc, social }: InfoCardProps) => {
  return (
    <S.InfoCardWrapper>
      <Zoom>
        <Row>
          <Col lg={3}>
            <Zoom>
              {' '}
              <S.InfoCardImage>
                <Image
                  placeholder="blur"
                  blurDataURL={image}
                  src={image}
                  layout={`fill`}
                />
              </S.InfoCardImage>
            </Zoom>
          </Col>
          <Col lg={9} style={{ display: 'flex', alignItems: 'center' }}>
            <S.InfoCardBody>
              <div className="caption">
                <h2 className="title">{title}</h2>
                <h3 className="subtitle">{subtitle}</h3>
                <p className="desc">{desc}</p>
                <S.SocialLinks>
                  {social.website && (
                    <S.SocialLink target="_blank" href={social.website}>
                      <WebsiteIcon />
                    </S.SocialLink>
                  )}
                  {social.facebook && (
                    <S.SocialLink target="_blank" href={social.facebook}>
                      <FacebookIcon />
                    </S.SocialLink>
                  )}
                  {social.medium && (
                    <S.SocialLink target="_blank" href={social.medium}>
                      <MediumIcon />
                    </S.SocialLink>
                  )}
                  {social.instagram && (
                    <S.SocialLink target="_blank" href={social.instagram}>
                      <InstagramIcon />
                    </S.SocialLink>
                  )}
                  {social.youtube && (
                    <S.SocialLink target="_blank" href={social.youtube}>
                      <YoutubeIcon />
                    </S.SocialLink>
                  )}
                  {social.twitter && (
                    <S.SocialLink target="_blank" href={social.twitter}>
                      <TwitterIcon />
                    </S.SocialLink>
                  )}
                </S.SocialLinks>
              </div>
            </S.InfoCardBody>
          </Col>
        </Row>
      </Zoom>
    </S.InfoCardWrapper>
  )
}

export default InfoCard
