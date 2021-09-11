import { GetStaticProps } from 'next'
import VozDaFloresta from 'templates/a-voz-da-floresta'

export default function Home() {
  return <VozDaFloresta />
}

export const getStaticProps: GetStaticProps = ({ locale }) => {
  return {
    props: {
      messages: {
        ...require(`../../contents/index/${locale}.json`)
      }
    }
  }
}
