import Blog from 'templates/blog'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { getBlogFeatured, getBlogRecent } from 'services/blog'
import { BlogPost } from 'types/blog'

type BlogPageProps = {
  recent: BlogPost[]
  featured: BlogPost[]
}

export default function BlogPageProps({ recent, featured }: BlogPageProps) {
  const router = useRouter()

  // retorna um loading, qq coisa enquanto tá sendo criado
  if (router.isFallback) return null

  return <Blog recent={recent} featured={featured} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  // @ts-ignore
  const recent: { posts: BlogPost[] } = await getBlogRecent()
  const featured: { posts: BlogPost[] } = await getBlogFeatured()

  if (!recent || !featured) return { notFound: true }

  return {
    props: {
      recent: recent.posts,
      featured: featured.posts
    }
  }
}
