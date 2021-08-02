import { GetServerSideProps } from 'next'
import OneTemplate from 'templates/produtos/one'

export default function One() {
  return <OneTemplate />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
