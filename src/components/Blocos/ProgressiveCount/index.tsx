import { useState, useEffect } from 'react'
import { Container } from 'components/UI'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

import {
  Medium as MediumIcon,
  Instagram as InstagramIcon,
  Youtube as YoutubeIcon,
  Discord as DiscordIcon
} from '@styled-icons/boxicons-logos'

import * as S from './styles'

type ProgressiveCountProps = {
  title: JSX.Element
  desc: JSX.Element
  countStart?: string
  caption: JSX.Element
  background?: string
  texts: {
    seconds: string
    minutes: string
    hours: string
    days: string
  }
}

const ProgressiveCount = ({
  title,
  desc,
  caption,
  texts,
  background
}: ProgressiveCountProps) => {
  const [years, setYears] = useState(0)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    countUpFromTime('Aug 25, 2021 12:00:00')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const countUpFromTime = (countFromInit) => {
    const countFromTime = new Date(countFromInit).getTime()
    const now = new Date(),
      countFrom = new Date(countFromTime),
      // @ts-ignore
      timeDifference = now - countFrom

    const secondsInADay = 60 * 60 * 1000 * 24,
      secondsInAHour = 60 * 60 * 1000

    setDays(Math.floor((timeDifference / secondsInADay) * 1))
    setYears(Math.floor(days / 365))
    if (years > 1) {
      setDays(days - years * 365)
    }
    setHours(
      Math.floor(((timeDifference % secondsInADay) / secondsInAHour) * 1)
    )
    setMinutes(
      Math.floor(
        (((timeDifference % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1
      )
    )
    setSeconds(
      Math.floor(
        ((((timeDifference % secondsInADay) % secondsInAHour) % (60 * 1000)) /
          1000) *
          1
      )
    )

    // @ts-ignore
    clearTimeout(countUpFromTime.interval)

    // @ts-ignore
    countUpFromTime.interval = setTimeout(function () {
      countUpFromTime(countFrom)
    }, 1000)
  }

  return (
    <S.ProgressiveCountWrapper background={background}>
      <Container>
        <>
          <S.ProgressiveCountHeader>
            <Fade top>
              <h2 className="title">{title}</h2>
            </Fade>
            <Fade top>
              <p className="desc">{desc}</p>
            </Fade>
          </S.ProgressiveCountHeader>

          <Zoom>
            <S.ProgressiveCountNumbers>
              <S.ProgressiveCountNumbersItem>
                <span className="number">{days}</span>
                <span className="label">{texts.days}</span>
              </S.ProgressiveCountNumbersItem>
              <S.ProgressiveCountNumbersItem>
                <span className="number">{hours}</span>
                <span className="label">{texts.hours}</span>
              </S.ProgressiveCountNumbersItem>
              <S.ProgressiveCountNumbersItem>
                <span className="number">{minutes}</span>
                <span className="label">{texts.minutes}</span>
              </S.ProgressiveCountNumbersItem>
              <S.ProgressiveCountNumbersItem>
                <span className="number">{seconds}</span>
                <span className="label">{texts.seconds}</span>
              </S.ProgressiveCountNumbersItem>
            </S.ProgressiveCountNumbers>
          </Zoom>

          <Fade bottom>
            <S.ProgressiveCountCaption>{caption}</S.ProgressiveCountCaption>
            <S.SocialLinks>
              <S.SocialLink
                rel="noreferrer"
                aria-label="Medium Floresta.tv"
                target="_blank"
                href="https://medium.com/florestatv/about"
              >
                <MediumIcon />
              </S.SocialLink>
              <S.SocialLink
                aria-label="Instagram Floresta.tv"
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/florestatv/"
              >
                <InstagramIcon />
              </S.SocialLink>

              <S.SocialLink
                rel="noreferrer"
                target="_blank"
                aria-label="Youtube Floresta.tv"
                href="https://www.youtube.com/channel/UCo9JpvxflH3WP6vms6EBDYQ"
              >
                <YoutubeIcon />
              </S.SocialLink>
              {/* <S.SocialLink>
                  <TwitterIcon />
                </S.SocialLink> */}
              <S.SocialLink
                rel="noreferrer"
                aria-label="Discord Floresta.tv"
                target="_blank"
                href="https://discord.gg/CSqAFfyM"
              >
                <DiscordIcon />
              </S.SocialLink>
            </S.SocialLinks>
          </Fade>
        </>
      </Container>
    </S.ProgressiveCountWrapper>
  )
}

export default ProgressiveCount
