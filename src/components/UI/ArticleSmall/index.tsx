import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@styled-icons/bootstrap/'

import * as S from './styles'

type ArticleSmallProps = {
  img: string
  date: string
  title: string
  slug: string
}

const ArticleSmall = ({ img, date, title, slug }: ArticleSmallProps) => {
  return (
    <S.ArticleSmall>
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
        <p className="desc">{title}</p>
        <Link href={`/blog/${slug}`}>
          <a className="link">
            Confira <ArrowRight width={30} fill="006686" />
          </a>
        </Link>
      </div>
    </S.ArticleSmall>
  )
}

export default ArticleSmall
