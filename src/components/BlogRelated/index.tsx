import Link from 'next/link'
import Image from 'next/image'
import Slick from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowRight } from '@styled-icons/bootstrap/'

import * as S from './styles'
import { Container } from 'components/UI'

export const BlogRelated = () => {
  const slickConfig = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <Container>
      <S.CarouselWrapper>
        <S.CarouselTitle>Relacionados</S.CarouselTitle>
        <Slick {...slickConfig}>
          <S.CarouselItem>
            <S.ArticleLarge>
              <div className="img">
                <Image
                  placeholder="blur"
                  blurDataURL="/img/blog-image-2.png"
                  src="/img/blog-image-2.png"
                  width={403}
                  height={235}
                />
              </div>
              <div className="caption">
                <span className="date">08/06/2021</span>
                <h2 className="title">Lorem ipsum dolor sit.</h2>
                <p className="desc">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                </p>
                <Link href="/blog/0">
                  <a className="link">
                    Confira <ArrowRight width={30} fill="006686" />
                  </a>
                </Link>
              </div>
            </S.ArticleLarge>
          </S.CarouselItem>
          <S.CarouselItem>
            <S.ArticleLarge>
              <div className="img">
                <Image
                  placeholder="blur"
                  blurDataURL="/img/blog-image-2.png"
                  src="/img/blog-image-2.png"
                  width={403}
                  height={235}
                />
              </div>
              <div className="caption">
                <span className="date">08/06/2021</span>
                <h2 className="title">Lorem ipsum dolor sit.</h2>
                <p className="desc">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                </p>
                <Link href="/blog/0">
                  <a className="link">
                    Confira <ArrowRight width={30} fill="006686" />
                  </a>
                </Link>
              </div>
            </S.ArticleLarge>
          </S.CarouselItem>
          <S.CarouselItem>
            <S.ArticleLarge>
              <div className="img">
                <Image
                  placeholder="blur"
                  blurDataURL="/img/blog-image-2.png"
                  src="/img/blog-image-2.png"
                  width={403}
                  height={235}
                />
              </div>
              <div className="caption">
                <span className="date">08/06/2021</span>
                <h2 className="title">Lorem ipsum dolor sit.</h2>
                <p className="desc">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                </p>
                <Link href="/blog/0">
                  <a className="link">
                    Confira <ArrowRight width={30} fill="006686" />
                  </a>
                </Link>
              </div>
            </S.ArticleLarge>
          </S.CarouselItem>
          <S.CarouselItem>
            <S.ArticleLarge>
              <div className="img">
                <Image
                  placeholder="blur"
                  blurDataURL="/img/blog-image-2.png"
                  src="/img/blog-image-2.png"
                  width={403}
                  height={235}
                />
              </div>
              <div className="caption">
                <span className="date">08/06/2021</span>
                <h2 className="title">Lorem ipsum dolor sit.</h2>
                <p className="desc">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                </p>
                <Link href="/blog/0">
                  <a className="link">
                    Confira <ArrowRight width={30} fill="006686" />
                  </a>
                </Link>
              </div>
            </S.ArticleLarge>
          </S.CarouselItem>
        </Slick>
      </S.CarouselWrapper>
    </Container>
  )
}

export default BlogRelated
