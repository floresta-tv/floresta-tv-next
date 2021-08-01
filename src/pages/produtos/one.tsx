import { GetServerSideProps } from 'next'

export default function One() {
  return <></>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
