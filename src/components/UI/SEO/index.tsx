import Head from 'next/head'

type SEOProps = {
  title: string
  description: string
  image?: string
}

const SEO = ({ title, description, image }: SEOProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}
      </Head>
    </>
  )
}

export default SEO
