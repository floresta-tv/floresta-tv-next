import Link from 'next/link'
import Image from 'next/image'
import { ChevronDoubleRight } from '@styled-icons/bootstrap/'
import { useTranslations } from 'next-intl'

import * as S from './styles'

type ArticleSmallProps = {
  title: string
  img: string
  slug: string
  description: string
  date: string
  author: {
    name: string
  }
  variant?: string
}

const ArticleSmall = ({
  title,
  img,
  slug,
  date,
  author,
  description,
  variant
}: ArticleSmallProps) => {
  const t = useTranslations('misc')

  return (
    <Link passHref href={slug}>
      <S.ArticleSmallWrapper
        style={variant === `thin` ? { minHeight: 160 } : null}
      >
        <S.ArticleSmallImage>
          <Image
            placeholder="blur"
            blurDataURL={img}
            src={img}
            alt={title}
            layout={`fill`}
          />
        </S.ArticleSmallImage>
        <S.ArticleSmallCaption>
          <S.ArticleSmallDate>
            {t.raw('published_at_text')} {date}{' '}
            {author && `• ${t.raw('by_text')} ${author.name}`}
          </S.ArticleSmallDate>
          <S.ArticleSmallTitle>{title}</S.ArticleSmallTitle>
          <S.ArticleSmallDesc>{description}</S.ArticleSmallDesc>
          <S.ArticleSmallMore href={slug}>
            Leia mais
            <ChevronDoubleRight size={20} />
          </S.ArticleSmallMore>
        </S.ArticleSmallCaption>
      </S.ArticleSmallWrapper>
    </Link>
  )
}

export default ArticleSmall
