import { useRef } from 'react'
import Slider from 'react-slick'
import Fade from 'react-reveal/Fade'
import { Container } from 'components/UI'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import * as S from './styles'

type BannerFullProps = {
  items: {
    width: string
    title: JSX.Element
    background: string
    backgroundPosition?: string
    desc?: JSX.Element
    subtitle?: JSX.Element
    links?: JSX.Element
    position?: string
    textAlign?: string
  }[]
}

const BannerFull = ({ items }: BannerFullProps) => {
  const slickRef = useRef<Slider>(null)
  return (
    <S.BannerFullWrapper>
      {items.length > 1 && (
        <S.SliderNav>
          <S.SliderNavArrow
            className="left"
            onClick={() => slickRef.current.slickNext()}
          ></S.SliderNavArrow>
          <S.SliderNavArrow
            onClick={() => slickRef.current.slickPrev()}
            className="right"
          ></S.SliderNavArrow>
        </S.SliderNav>
      )}
      <Slider
        dots={true}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        fade={true}
        speed={1200}
        autoplaySpeed={3000}
        cssEase={'linear'}
        arrows={false}
        ref={slickRef}
      >
        {items.map((item, index) => (
          <S.BannerFullItem
            key={index}
            backgroundPosition={item.backgroundPosition}
            background={item.background}
          >
            <Container fillHeight>
              <S.BannerFullContent
                width={item.width}
                style={{
                  alignItems: item.position || 'flex-start',
                  // @ts-ignore
                  textAlign: item.textAlign || 'left'
                }}
              >
                <div className="caption">
                  <Fade bottom>
                    <h1 className="title">{item.title}</h1>
                  </Fade>
                  <Fade bottom>
                    {item.desc && <p className="desc">{item.desc}</p>}
                  </Fade>
                  <Fade bottom>
                    {item.subtitle && (
                      <p className="subtitle">{item.subtitle}</p>
                    )}
                  </Fade>
                  <Fade top>
                    <div
                      className="links"
                      style={{
                        justifyContent: item.position || 'flex-start',
                        // @ts-ignore
                        textAlign: item.textAlign || 'left'
                      }}
                    >
                      {item.links}
                    </div>
                  </Fade>
                </div>
              </S.BannerFullContent>
            </Container>
          </S.BannerFullItem>
        ))}
      </Slider>
    </S.BannerFullWrapper>
  )
}

export default BannerFull
