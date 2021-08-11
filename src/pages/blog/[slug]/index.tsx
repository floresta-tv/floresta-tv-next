import BlogItem from 'templates/blog-item'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { getBlogFeatured, getBlogPost } from 'services/blog'
import { BlogPost } from 'types/blog'

type BlogItemPageProps = {
  post: BlogPost
  featured: BlogPost[]
}

export default function BlogItemPage({ post, featured }: BlogItemPageProps) {
  const router = useRouter()

  // retorna um loading, qq coisa enquanto tá sendo criado
  if (router.isFallback) return null

  return <BlogItem post={post} featured={featured} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // @ts-ignore
  const { post }: BlogPostProps = await getBlogPost(params.slug)
  const featured: { posts: BlogPost[] } = await getBlogFeatured()

  if (!post) return { notFound: true }

  return {
    props: {
      post,
      featured: featured.posts
    }
  }
}
