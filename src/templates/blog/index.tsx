import Link from 'next/link'
import Slick from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import { Container } from '../../components/UI/'
import { motion } from 'framer-motion'
import Fade from 'react-reveal/Fade'
import { BlogPost } from 'types/blog'
import ArticleSmall from 'components/UI/ArticleSmall'
import ArticleLarge from 'components/UI/ArticleLarge'

import * as animations from './animations'
import * as S from './styles'

type BlogTemplateProps = {
  recent: BlogPost[]
  featured: BlogPost[]
}

const BlogTemplate = ({ recent, featured }: BlogTemplateProps) => {
  const slickConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoHeight: true
  }

  return (
    <motion.div key={5} {...animations.wrapper}>
      <S.Wrapper>
        <S.CarouselWrapper>
          <Slick {...slickConfig}>
            <S.CarouselItem background={`/img/background-blog.png`}>
              <Container>
                <S.CarouselItemCaption>
                  <Fade bottom>
                    <h2 className="title">Lorem ipsum dolor</h2>
                    <p className="desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </Fade>
                  <Fade bottom>
                    <Link href="/blog/0">
                      <a className="link">Confira</a>
                    </Link>
                  </Fade>
                </S.CarouselItemCaption>
              </Container>
            </S.CarouselItem>

            <S.CarouselItem background={`/img/background-blog.png`}>
              <Container>
                <S.CarouselItemCaption>
                  <Fade bottom>
                    <h2 className="title">Lorem ipsum dolor</h2>
                    <p className="desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </Fade>
                  <Fade bottom>
                    <Link href="/blog/0">
                      <a className="link">Confira</a>
                    </Link>
                  </Fade>
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
                {recent.map((post: BlogPost) => (
                  <ArticleLarge
                    date={post.created_at}
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    img={post.image}
                    desc={post.description}
                  />
                ))}
              </S.ColumnLeft>
              <S.ColumnRight>
                <Fade right>
                  <S.ColumnTitle>Destaque</S.ColumnTitle>
                  {featured.map((post: BlogPost) => (
                    <ArticleSmall
                      date={post.created_at}
                      key={post.slug}
                      slug={post.slug}
                      title={post.title}
                      img={post.image}
                    />
                  ))}
                </Fade>
              </S.ColumnRight>
            </S.Grid>
          </>
        </Container>
      </S.Wrapper>
    </motion.div>
  )
}

export default BlogTemplate
