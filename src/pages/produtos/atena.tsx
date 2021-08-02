import { GetServerSideProps } from 'next'
import AtenaTemplate from 'templates/produtos/atena'

export default function Atena() {
  return <AtenaTemplate />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
