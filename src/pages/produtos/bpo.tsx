import { GetServerSideProps } from 'next'
import BPOTemplate from 'templates/produtos/bpo'

export default function BPO() {
  return <BPOTemplate />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
