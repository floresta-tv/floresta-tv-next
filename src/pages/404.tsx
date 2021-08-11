import MediaQuery from 'react-responsive'

export default function page() {
  return (
    <section
      style={{
        minHeight: '80vh',
        paddingBottom: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        color: '#003D50'
      }}
    >
      <MediaQuery minWidth={768}>
        <h1 style={{ fontSize: '4rem', fontWeight: 300 }}>Erro 404:</h1>
        <h2 style={{ fontSize: '6rem', fontWeight: 800 }}>
          Página não encontrada.
        </h2>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <h1 style={{ fontSize: '2rem', fontWeight: 300 }}>Erro 404:</h1>
        <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>
          Página não encontrada.
        </h2>
      </MediaQuery>
    </section>
  )
}
