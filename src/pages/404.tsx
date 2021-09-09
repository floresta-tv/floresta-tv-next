import MediaQuery from 'react-responsive'
import Link from 'next/link'
import { Button } from 'components/UI'

export default function page() {
  return (
    <section
      style={{
        minHeight: '100vh',
        paddingTop: 150,
        paddingBottom: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        fontFamily: 'Merriweather',
        color: '#fff',
        backgroundImage: `url('/img/homem_indigena_banner.png')`
      }}
    >
      <MediaQuery minWidth={768}>
        <h1 style={{ fontSize: '3rem', fontWeight: 300 }}>Erro 404:</h1>
        <h2 style={{ fontSize: '4rem', fontWeight: 800 }}>
          Página não encontrada.
        </h2>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 300 }}>Erro 404:</h1>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>
          Página não encontrada.
        </h2>
      </MediaQuery>
      <div style={{ marginTop: 20, fontFamily: 'Montserrat' }}>
        <Link href="/" passHref={true}>
          <Button variant={'white'}>Voltar para home</Button>
        </Link>
      </div>
    </section>
  )
}
