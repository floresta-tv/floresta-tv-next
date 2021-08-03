import Link from 'next/link'
import Image from 'next/image'
import Slick from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowRight } from '@styled-icons/bootstrap/'
import { Container } from '../../components/UI/'
import { motion } from 'framer-motion'

import * as animations from './animations'
import * as S from './styles'

const Blog = () => {
  const slickConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <motion.div {...animations.wrapper}>
      <S.Wrapper>
        <S.CarouselWrapper>
          <Slick {...slickConfig}>
            <S.CarouselItem background={`/img/background-blog.png`}>
              <Container>
                <S.CarouselItemCaption>
                  <h2 className="title">Lorem ipsum dolor</h2>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <Link href="/blog/0">
                    <a className="link">Confira</a>
                  </Link>
                </S.CarouselItemCaption>
              </Container>
            </S.CarouselItem>

            <S.CarouselItem background={`/img/background-blog.png`}>
              <Container>
                <S.CarouselItemCaption>
                  <h2 className="title">Lorem ipsum dolor</h2>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <Link href="/blog/0">
                    <a className="link">Confira</a>
                  </Link>
                </S.CarouselItemCaption>
              </Container>
            </S.CarouselItem>
          </Slick>
        </S.CarouselWrapper>

        <Container>
          <>
            <S.Grid>
              <S.ColumnLeft>
                <S.ColumnTitle>Posts recentes</S.ColumnTitle>

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
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem
                    </p>
                    <Link href="/blog/0">
                      <a className="link">
                        Confira <ArrowRight width={30} fill="006686" />
                      </a>
                    </Link>
                  </div>
                </S.ArticleLarge>

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
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem
                    </p>
                    <Link href="/blog/0">
                      <a className="link">
                        Confira <ArrowRight width={30} fill="006686" />
                      </a>
                    </Link>
                  </div>
                </S.ArticleLarge>

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
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem
                    </p>
                    <Link href="/blog/0">
                      <a className="link">
                        Confira <ArrowRight width={30} fill="006686" />
                      </a>
                    </Link>
                  </div>
                </S.ArticleLarge>

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
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem
                    </p>
                    <Link href="/blog/0">
                      <a className="link">
                        Confira <ArrowRight width={30} fill="006686" />
                      </a>
                    </Link>
                  </div>
                </S.ArticleLarge>

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
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem
                    </p>
                    <Link href="/blog/0">
                      <a className="link">
                        Confira <ArrowRight width={30} fill="006686" />
                      </a>
                    </Link>
                  </div>
                </S.ArticleLarge>

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
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem
                    </p>
                    <Link href="/blog/0">
                      <a className="link">
                        Confira <ArrowRight width={30} fill="006686" />
                      </a>
                    </Link>
                  </div>
                </S.ArticleLarge>
              </S.ColumnLeft>
              <S.ColumnRight>
                <S.ColumnTitle>Destaque</S.ColumnTitle>

                <S.ArticleSmall>
                  <div className="img">
                    <Image
                      placeholder="blur"
                      blurDataURL="/img/blog-image-1.png"
                      src="/img/blog-image-1.png"
                      width={172}
                      height={140}
                    />
                  </div>
                  <div className="caption">
                    <span className="date">08/06/2021</span>
                    <p className="desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing dolore
                      magna aliqua.
                    </p>
                    <Link href="/blog/0">
                      <a className="link">
                        Confira <ArrowRight width={30} fill="006686" />
                      </a>
                    </Link>
                  </div>
                </S.ArticleSmall>

                <S.ArticleSmall>
                  <div className="img">
                    <Image
                      placeholder="blur"
                      blurDataURL="/img/blog-image-1.png"
                      src="/img/blog-image-1.png"
                      width={172}
                      height={140}
                    />
                  </div>
                  <div className="caption">
                    <span className="date">08/06/2021</span>
                    <p className="desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing dolore
                      magna aliqua.
                    </p>
                    <Link href="/blog/0">
                      <a className="link">
                        Confira <ArrowRight width={30} fill="006686" />
                      </a>
                    </Link>
                  </div>
                </S.ArticleSmall>

                <S.ArticleSmall>
                  <div className="img">
                    <Image
                      placeholder="blur"
                      blurDataURL="/img/blog-image-1.png"
                      src="/img/blog-image-1.png"
                      width={172}
                      height={140}
                    />
                  </div>
                  <div className="caption">
                    <span className="date">08/06/2021</span>
                    <p className="desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing dolore
                      magna aliqua.
                    </p>
                    <Link href="/blog/0">
                      <a className="link">
                        Confira <ArrowRight width={30} fill="006686" />
                      </a>
                    </Link>
                  </div>
                </S.ArticleSmall>

                <S.ArticleSmall>
                  <div className="img">
                    <Image
                      placeholder="blur"
                      blurDataURL="/img/blog-image-1.png"
                      src="/img/blog-image-1.png"
                      width={172}
                      height={140}
                    />
                  </div>
                  <div className="caption">
                    <span className="date">08/06/2021</span>
                    <p className="desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing dolore
                      magna aliqua.
                    </p>
                    <Link href="/blog/0">
                      <a className="link">
                        Confira <ArrowRight width={30} fill="006686" />
                      </a>
                    </Link>
                  </div>
                </S.ArticleSmall>
              </S.ColumnRight>
            </S.Grid>
          </>
        </Container>
      </S.Wrapper>
    </motion.div>
  )
}

export default Blog
