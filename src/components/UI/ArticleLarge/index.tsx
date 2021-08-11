import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@styled-icons/bootstrap/'

import * as S from './styles'

type ArticleLargeProps = {
  img: string
  date: string
  title: string
  slug: string
  desc: string
}

const ArticleLarge = ({ img, date, title, slug, desc }: ArticleLargeProps) => {
  return (
    <S.ArticleLarge>
      <div className="img">
        <Image
          placeholder="blur"
          blurDataURL={img || '/img/blog-thumbnail.jpg'}
          src={img || '/img/blog-thumbnail.jpg'}
          layout={'fill'}
        />
      </div>
      <div className="caption">
        <span className="date">{date}</span>
        <h2 className="title">{title}</h2>
        <p className="desc">{desc}</p>
        <Link href={`/blog/${slug}`}>
          <a className="link">
            Confira <ArrowRight width={30} fill="006686" />
          </a>
        </Link>
      </div>
    </S.ArticleLarge>
  )
}

export default ArticleLarge
