import { Button } from '../../components/UI'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'

import BannerFull from 'components/Blocos/BannerFull'
import HeaderText from 'components/Blocos/HeaderText'
import ContactButton from 'components/ContactButton'
import ImageFullWidth from 'components/Blocos/ImageFullWidth'
import InfoCard from 'components/Blocos/InfoCard'
import { Container } from 'components/UI'

import * as animations from './animations'
import * as S from './styles'

type EquipePerson = {
  image: string
  title: JSX.Element
  subtitle: JSX.Element
  desc: JSX.Element
  social?: {
    website?: string
    instagram?: string
    medium?: string
    twitter?: string
    facebook?: string
  }
}

type EquipeData = EquipePerson[]

const Equipe = () => {
  const equipeData: EquipeData = [
    {
      image: '/img/guilherme_meneghelli_florestatv.jpg',
      title: <span>Guilherme Meneghelli</span>,
      subtitle: <span>Cinema da Vida Real</span>,
      desc: (
        <span>
          Guilherme trabalha como diretor de filmes nas áreas de publicidade,
          cinema, arte e música. Soma mais de 15 anos de experiência desde seu
          primeiro filme e de lá pra cá soma mais de 1000 filmes publicados em
          diversas redes sociais, destaque para o canal REC&apos;n&apos;Play que
          conta com mais de 700.
        </span>
      ),
      social: {
        medium: 'https://memeugabuga.medium.com/',
        twitter: 'https://twitter.com/memeugabuga',
        instagram: 'https://www.instagram.com/memeugabuga/'
      }
    },
    {
      image: '/img/mathilde_everare_florestatv.jpeg',
      title: <span>Mathilde Everaere</span>,
      subtitle: <span>Diplomacia da Paz</span>,
      desc: (
        <span>
          Mathilde é mestra em relações internacionais e vem gerenciando muitos
          projetos de Cooperação Intercultural entre a Europa e países
          terceiros. Tendo já realizado este trabalho para instituçoes
          internacionais como no Brasil, no Senegal e no Peru, atualmente se
          manifesta de maneira autônoma e tem como foco e objetivo a união das
          sabedorias nativas dos 5 continentes.
        </span>
      ),
      social: {
        facebook: 'https://www.facebook.com/mathilde.everaere/',
        medium: 'https://maah-tribu.medium.com/',
        instagram: 'https://www.instagram.com/maah.tribu/'
      }
    },
    {
      image: '/img/flora_dutra_florestatv.jpg',
      title: <span>Flora Dutra</span>,
      subtitle: <span>Vida em comunidade da floresta ao espaço</span>,
      desc: (
        <span>
          Flora é jornalista e doutoranda em Antropologia Social (UFRGS).
          Atualmente desenvolve e propõe Políticas de Proteção e Defesa
          Planetária para uma agenda 2022-2033 no Planetary Science. Também é
          Manager Community do Instituto de Preservação das Culturas Indígenas
          Brasileiras (Instituto Nawá) que atua na preservação da Amazônia.
        </span>
      ),
      social: {
        twitter: 'https://twitter.com/floradacasinha',
        medium: 'https://medium.com/@floradutra',
        instagram: 'https://instagram.com/floradutra/'
      }
    },
    {
      image: '/img/camila_saibro_florestatv.jpeg',
      title: <span>Camila Saibro</span>,
      subtitle: <span>Do Direito ao Dever</span>,
      desc: (
        <span>
          Camila, modelo internacional e estudante de direito com ênfase na
          causa ambiental. Uma cidadã global que trabalha em parceria com o
          coletivo Floresta TV pela representatividade cultural dos povos
          indígenas. Atua também como Manager Development do Instituto Nawá,
          pela preservação da floresta Amazônica e da biodiversidade das
          florestas.
        </span>
      ),
      social: {
        medium: 'https://camilasaibro.medium.com/',
        facebook: 'https://www.facebook.com/camisaibro',
        instagram: 'https://www.instagram.com/camilasaibro/'
      }
    },
    {
      image: '/img/eduardo_pizaroli_florestatv.jpeg',
      title: <span>Eduardo Pizaroli </span>,
      subtitle: <span>Fundador do Instituto Nawa</span>,
      desc: (
        <span>
          Idealizador do Instituto Nawá, Eduardo se formou em 2001 em
          Administração de Empresas pela Universidade Anhembi Morumbi.
          Pesquisador iniciado e batizado na tradição HUNI KUIN, atua como
          palestrante, mantenedor das culturas ancestrais e é referência entre
          as lideranças indígenas há mais de 20 anos.
        </span>
      ),
      social: {
        website: 'http://www.institutonawa.org/',
        facebook: 'https://www.facebook.com/institutonawa/',
        instagram: 'https://instagram.com/institutonawa'
      }
    },
    {
      image: '/img/vitor_regis_florestatv.jpeg',
      title: <span>Vitor Régis de Ramos</span>,
      subtitle: <span>Da Floresta à Tecnologia</span>,
      desc: (
        <span>
          Vitor é uma alma visionária que tem como propósito a integração da
          tecnologia com a espiritualidade para expandir soluções harmoniosas
          nas causas coletivas. Atua liderando e gerenciando equipes
          internacionais na área de desenvolvimento a mais de 5 anos e desde os
          12 anos de idade é envolvido em programação. Auxilia o Coletivo nas
          áreas de tecnologia, programação, gestão e desenvolvimento.
        </span>
      ),
      social: {
        medium: 'https://visionariovegetal.medium.com/',
        facebook:
          'https://www.facebook.com/Advan-Haschi-Vision%C3%A1rio-Vegetal-109359397505378/?ref=py_c',
        instagram: 'https://www.instagram.com/advanhx/'
      }
    },
    {
      image: '/img/fran_diniz_mulher_shakit_florestatv.jfif',
      title: <span>Fran Diniz, Mulher Shakti</span>,
      subtitle: <span>Yogini da Floresta</span>,
      desc: (
        <span>
          Ativadora da consciência autorresponsável na proteção do maior bioma
          do mundo, bem como de nossa floresta interna. Reconhece que a Amazônia
          é a Shakti do planeta e portanto, através do Templo Yogini Power
          trabalha no despertar do feminino consciente como fator primordial no
          resgate e conexão com Gaia, nossa Terra. Uma Yogini que dedica sua
          força criativa junto a FlorestaTv atuando como escritora e criadora de
          conteúdo audiovisual, sua missão é promover o amadurecimento da
          consciência social, sexual, psicoemocional e ambiental para uma
          humanidade verdadeiramente justa e harmônica.
        </span>
      ),
      social: {
        medium: 'https://visionariovegetal.medium.com/',
        facebook:
          'https://www.facebook.com/Advan-Haschi-Vision%C3%A1rio-Vegetal-109359397505378/?ref=py_c',
        instagram: 'https://www.instagram.com/advanhx/'
      }
    }
  ]
  return (
    <motion.div key={6} {...animations.wrapper}>
      <ContactButton />
      <S.Wrapper>
        <Element name="home">
          <BannerFull
            items={[
              {
                position: 'center',
                textAlign: 'center',
                background: '/img/comunidade_indigena_banner.png',
                title: <span>Uma grande familia </span>,
                desc: (
                  <span>
                    Além da inteira dedicação dos seus 4 fundadores, a
                    FlorestaTV conta com o apoio de dezenas de talentos
                    contribuindo no projeto de maneira decentralizada, autônomo
                    e coletiva (fotógrafos, videomakers, pesquisadores etc).{' '}
                    <br />
                    Conheça e faça parte!
                  </span>
                ),
                links: (
                  <>
                    <Button variant="green">Conheça nossa equipe</Button>
                    <Button variant="white">Quero fazer parte</Button>
                  </>
                )
              }
            ]}
          />
        </Element>
        <Element name="protecao-cultural">
          <HeaderText
            title={
              <span>
                Talentos interdependentes <br /> para um alcance global
              </span>
            }
            subtitle={
              <span>
                <h3>
                  Revelar a nossa unicidade
                  <br /> para, naturalmente, servir o todo:
                  <br />
                  Kaia
                </h3>
                <p>
                  Colaborar: do latim co-labore &quot;trabalhar junto&quot; a
                  gente pede e aceita a sua ajuda. Um convite a dividir o
                  trabalho para um alcance orgânico em rede.
                </p>{' '}
                <p>
                  <b>&quot;Eu&quot; é uma invenção de cada um de nós.</b>
                </p>
              </span>
            }
          />
        </Element>

        <ImageFullWidth
          style={{ paddingTop: '0', marginTop: '-20px' }}
          caption={
            <span>
              Equipe FlorestaTV nos acampamentos &quot;Luta Pela Vida&quot; -
              Brasilia - Dia 30 de Agosto de 2021{' '}
            </span>
          }
          image="/img/familia_floresta_tv.jpg"
        />

        <section style={{ padding: '80px 0' }}>
          <Container>
            <>
              {equipeData.map(
                ({ image, title, subtitle, desc, social }, index) => (
                  <InfoCard
                    key={index}
                    image={image}
                    title={title}
                    subtitle={subtitle}
                    desc={desc}
                    social={social}
                  />
                )
              )}
            </>
          </Container>
        </section>

        <ImageFullWidth
          image="/img/povo_indigena_huni_kuin.jpg"
          caption={
            <span>
              Familia Original Brasileira - Aldeia Segredo do Artesão, dia 31 de
              Julho 2021 - Photo : Guilherme Meneghelli
            </span>
          }
        />
      </S.Wrapper>
    </motion.div>
  )
}

export default Equipe