import { Container } from 'components/UI'
import Image from 'next/image'
import { motion } from 'framer-motion'

import * as S from './styles'
import * as animations from './animations'

const AtenaTemplate = () => {
  return (
    <motion.div key={3} {...animations.wrapperFade}>
      <S.Wrapper>
        <Container position="relative">
          <S.Content>
            <S.HeroWrapper>
              <motion.div key={3} {...animations.wrapper}>
                <div className="ico">
                  <h1>Atena</h1>
                  <motion.div key={1028} {...animations.rotate}>
                    <Image
                      placeholder="blur"
                      src="/img/atena-icon.png"
                      blurDataURL="/img/atena-icon.png"
                      width={240}
                      height={240}
                    />
                  </motion.div>
                  <h2>
                    A sabedoria do mercado financeiro onshore e offshore.
                    Cadastros, preços, indíces e muito mais.
                  </h2>
                </div>

                <div className="shape">
                  <Image
                    placeholder="blur"
                    src="/img/atena-shape.png"
                    blurDataURL="/img/atena-shape.png"
                    width={1300}
                    height={1100}
                  />
                </div>
              </motion.div>
            </S.HeroWrapper>
            <S.Body>
              <motion.div key={3} {...animations.wrapper}>
                <h3>Big Data</h3>
                <p style={{ maxWidth: '450px' }}>
                  Através de integrações, serviços e suporte da nossa equipe de
                  especialistas, o Athena tornou-se uma grande base de dados de
                  ativos concentrando assim as informações necessárias para que
                  nossos clientes possam direcionar sua atenção para as
                  estratégias de negócio.
                </p>
                <h3>Integração</h3>
                <p style={{ maxWidth: '450px' }}>
                  Athena está integrado aos nossos produtos provendo as
                  atualizações necessárias para manter as informações de ativos
                  sempre consistentes, potencializando assim os resultados de
                  rentabilidade e posição das carteiras dentro da plataforma
                  Meuportfolio.
                </p>
                <div className="mockup-img">
                  <Image
                    placeholder="blur"
                    src="/img/atena-mockup.png"
                    blurDataURL="/img/atena-mockup.png"
                    width={595}
                    height={375}
                  />
                </div>
              </motion.div>
            </S.Body>
          </S.Content>
        </Container>
      </S.Wrapper>
    </motion.div>
  )
}

export default AtenaTemplate
