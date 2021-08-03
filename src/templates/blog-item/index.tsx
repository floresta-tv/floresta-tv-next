import Link from 'next/link'
import Image from 'next/image'
import BlogRelated from 'components/BlogRelated'
import { ArrowRight } from '@styled-icons/bootstrap/'
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Youtube as YoutubeIcon
} from '@styled-icons/boxicons-logos'
import { Container } from '../../components/UI'
import { motion } from 'framer-motion'

import * as animations from './animations'

import * as S from './styles'

const Blog = () => {
  return (
    <motion.div {...animations.wrapper}>
      <S.Wrapper>
        <Container>
          <>
            <S.Header>
              <S.HeaderTitle>Lorem ipsum dolor</S.HeaderTitle>
              <S.HeaderInfo>
                <span className="author">Giovanni Evandro</span>
                {` - `}
                <span className="date">Novembro 11, 2020</span>
                <ul className="social">
                  <li>
                    <a href="#" target="_blank">
                      <FacebookIcon />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <YoutubeIcon />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <InstagramIcon />
                    </a>
                  </li>
                </ul>
              </S.HeaderInfo>
            </S.Header>
            <S.Grid>
              <S.ColumnLeft>
                <div className="main-img">
                  <Image
                    placeholder="blur"
                    blurDataURL="/img/blog-image-3.png"
                    src="/img/blog-image-3.png"
                    width={824}
                    height={478}
                  />
                </div>
                <div className="markup">
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </h2>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but
                    because those who do not know how to pursue pleasure
                    rationally encounter consequences that are extremely
                    painful. Nor again is there anyone who loves or pursues or
                    desires to obtain pain of itself, because it is pain, but
                    because occasionally circumstances occur in which toil and
                    pain can procure him some great pleasure. To take a trivial
                    example, which of us ever undertakes laborious physical
                    exercise, except to obtain some advantage from it? But who
                    has any right to find fault with a man who chooses to enjoy
                    a pleasure that has no annoying consequences, or one who
                    avoids a pain that produces no resultant pleasure
                  </p>
                  <h2>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </h2>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but
                    because those who do not know how to pursue pleasure
                    rationally encounter consequences that are extremely
                    painful. Nor again is there anyone who loves or pursues or
                    desires to obtain pain of itself, because it is pain, but
                    because occasionally circumstances occur in which toil and
                    pain can procure him some great pleasure. To take a trivial
                    example, which of us ever undertakes laborious physical
                    exercise, except to obtain some advantage from it? But who
                    has any right to find fault with a man who chooses to enjoy
                    a pleasure that has no annoying consequences, or one who
                    avoids a pain that produces no resultant pleasure
                  </p>
                </div>
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

            <BlogRelated />
          </>
        </Container>
      </S.Wrapper>
    </motion.div>
  )
}

export default Blog
