import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Slick from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowRight } from '@styled-icons/bootstrap/'
import { Container } from 'components/UI'
import { BlogPost } from 'types/blog'
import { getRelatedPosts } from 'services/blog'

import * as S from './styles'

type BlogRelatedProps = {
  slug: string
}

export const BlogRelated = ({ slug }: BlogRelatedProps) => {
  const [currPosts, setCurrPosts] = useState<BlogPost[]>([])

  const setPosts = async () => {
    try {
      getRelatedPosts(slug).then((newPosts) => {
        // @ts-ignore
        setCurrPosts(newPosts.posts)
      })
    } catch (e) {
      setCurrPosts([])
    }
  }

  useEffect(() => {
    setPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

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
        {currPosts.length > 0 && (
          <>
            <S.CarouselTitle>Relacionados</S.CarouselTitle>
            <Slick {...slickConfig}>
              {currPosts?.map(
                ({ image, created_at, title, description, slug }) => (
                  <S.CarouselItem key={slug}>
                    <S.ArticleLarge>
                      <div className="img">
                        <Image
                          placeholder="blur"
                          blurDataURL={image || '/img/blog-thumbnail.jpg'}
                          src={image || '/img/blog-thumbnail.jpg'}
                          layout={'fill'}
                        />
                      </div>
                      <div className="caption">
                        <span className="date">{created_at}</span>
                        <h2 className="title">{title}</h2>
                        <p className="desc">{description}</p>
                        <Link href={`/blog/${slug}`}>
                          <a className="link">
                            Confira <ArrowRight width={30} fill="006686" />
                          </a>
                        </Link>
                      </div>
                    </S.ArticleLarge>
                  </S.CarouselItem>
                )
              )}
            </Slick>
          </>
        )}
      </S.CarouselWrapper>
    </Container>
  )
}

export default BlogRelated
