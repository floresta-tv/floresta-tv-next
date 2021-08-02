import { Container } from 'components/UI'
import Image from 'next/image'
import * as S from './styles'

const BPOTemplate = () => {
  return (
    <S.Wrapper>
      <Container position="relative">
        <S.Content>
          <S.HeroWrapper>
            <div className="ico">
              <h1>BPO</h1>
              <Image
                placeholder="blur"
                src="/img/bpo-icon.png"
                blurDataURL="/img/bpo-icon.png"
                width={240}
                height={240}
              />
              <h2>
                Amplie a capacidade operacional da sua empresa com nosso
                Business Process Outsourcing.
              </h2>
            </div>

            <div className="shape">
              <Image
                placeholder="blur"
                src="/img/bpo-shape.png"
                blurDataURL="/img/bpo-shape.png"
                width={1300}
                height={1100}
              />
            </div>
          </S.HeroWrapper>
          <S.Body>
            <h3>Parceria</h3>
            <p style={{ maxWidth: '420px' }}>
              Com a expertise da nossa equipe podemos prover serviços de
              operação de back office e de customer experience, sempre com muita
              qualidade e agilidade.
            </p>
            <h3>Custo acessível</h3>
            <p style={{ maxWidth: '450px' }}>
              Com a Meuportfolio você pode ter um time de back office disponível
              por um custo mais acessível se comparado com manter seu próprio
              time dentro da sua empresa.
            </p>
            <h3>Segurança &amp; Sigilo</h3>
            <p style={{ maxWidth: '450px' }}>
              Segurança &amp; Sigilo Estamos sempre preocupados em manter o
              sigilo das informações que nosso time tem acesso. Garantimos total
              confidencialidade dos dados.
            </p>

            <div className="mockup-caption">
              <p>
                Nós fazemos o trabalho pesado das tarefas de input de dados para
                permitir que nossos clientes se concentrem em suas atividades
                essenciais e naquilo que traz inovação para o seu negócio. Com
                um time de pessoas capacitadas, tecnologia inovadora e
                excelência operacional, nosso BPO funciona como o combustível do
                foguete que ajuda a alimentar a nave dos nossos clientes.
              </p>
            </div>
            <div className="mockup-img">
              <Image
                placeholder="blur"
                src="/img/bpo-mockup.png"
                blurDataURL="/img/bpo-mockup.png"
                width={595}
                height={375}
              />
            </div>
          </S.Body>
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default BPOTemplate
