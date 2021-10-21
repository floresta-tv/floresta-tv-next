import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDoubleRight } from '@styled-icons/bootstrap/'
import * as S from './styles'

type BlogItemProps = {
  description: string
  title: string
  img: string
  slug: string
  date: string
}

const BlogItem = ({ description, title, img, slug, date }: BlogItemProps) => {
  return (
    <Fade>
      <Link href={slug}>
        <S.BlogItemWrapper>
          <S.BlogItemImage>
            <Image
              placeholder="blur"
              blurDataURL={img}
              src={img}
              alt={title}
              layout={`fill`}
            />
          </S.BlogItemImage>
          <S.BlogItemCaption>
            <Fade>
              <S.BlogItemDate>{date}</S.BlogItemDate>
              <S.BlogItemTitle>{title}</S.BlogItemTitle>
              <S.BlogItemDesc>{description}</S.BlogItemDesc>
              <S.BlogItemMore href={slug}>
                Leia mais
                <ChevronDoubleRight size={20} />
              </S.BlogItemMore>
            </Fade>
          </S.BlogItemCaption>
        </S.BlogItemWrapper>
      </Link>
    </Fade>
  )
}

export default BlogItem
