import Image from 'next/image'
import BlogRelated from 'components/BlogRelated'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton
} from 'react-share'
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Whatsapp as WhatsappIcon,
  Linkedin as LinkedinIcon
} from '@styled-icons/boxicons-logos'
import { Container } from '../../components/UI'
import { motion } from 'framer-motion'
import Fade from 'react-reveal/Fade'
import { BlogPost } from 'types/blog'
import ArticleSmall from 'components/UI/ArticleSmall'

import * as animations from './animations'
import * as S from './styles'

type BlogItemTemplateProps = {
  post: BlogPost
  featured: BlogPost[]
}

const BlogItemTemplate = ({ post, featured }: BlogItemTemplateProps) => {
  return (
    <motion.div key={4} {...animations.wrapper}>
      <S.Wrapper>
        <Container>
          <>
            <Fade bottom>
              <S.Header>
                <S.HeaderTitle>{post.title}</S.HeaderTitle>
                <S.HeaderInfo>
                  <span className="author">
                    {post.author || `Autor desconhecido`}
                  </span>
                  {` - `}
                  <span className="date">{post.created_at}</span>
                  <ul className="social">
                    <li>
                      <a href="#" target="_blank">
                        <FacebookShareButton
                          url={`https://www.portfolio.vercel.app/blog/${post.slug}`}
                        >
                          <FacebookIcon />
                        </FacebookShareButton>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <TwitterShareButton
                          url={`https://www.portfolio.vercel.app/blog/${post.slug}`}
                        >
                          <TwitterIcon />
                        </TwitterShareButton>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <LinkedinShareButton
                          url={`https://www.portfolio.vercel.app/blog/${post.slug}`}
                        >
                          <LinkedinIcon />
                        </LinkedinShareButton>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <WhatsappShareButton
                          url={`https://www.portfolio.vercel.app/blog/${post.slug}`}
                        >
                          <WhatsappIcon />
                        </WhatsappShareButton>
                      </a>
                    </li>
                  </ul>
                </S.HeaderInfo>
              </S.Header>
            </Fade>
            <S.Grid>
              <S.ColumnLeft>
                <Fade>
                  <div className="main-img">
                    <Image
                      placeholder="blur"
                      blurDataURL={post.image || '/img/blog-thumbnail.jpg'}
                      src={post.image || '/img/blog-thumbnail.jpg'}
                      layout={'fill'}
                    />
                  </div>
                  <div
                    className="markup"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></div>
                </Fade>
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

            <Fade bottom>
              <BlogRelated />
            </Fade>
          </>
        </Container>
      </S.Wrapper>
    </motion.div>
  )
}

export default BlogItemTemplate
