import { Button } from '../../components/UI'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'

import { Signature } from '@styled-icons/fluentui-system-regular'

import BannerFull from 'components/Blocos/BannerFull'
import VideoBlock from 'components/Blocos/VideoBlock'
import VideoBlockHor from 'components/Blocos/VideoBlockHor'
import ImageText from 'components/Blocos/ImageText'
import VideoBackground from 'components/Blocos/VideoBackground'
import ProgressiveCount from 'components/Blocos/ProgressiveCount'
import ArticlePreview from 'components/Blocos/ArticlePreview'
import HeroBlock from 'components/Blocos/HeroBlock'
import DoubleImage from 'components/Blocos/DoubleImage'
import ContactButton from 'components/ContactButton'

import * as animations from './animations'
import * as S from './styles'

const Produtos = () => {
  return (
    <motion.div key={6} {...animations.wrapper}>
      <ContactButton />
      <S.Wrapper>
        <Element name="home">
          <BannerFull
            items={[
              {
                background: '/img/homem_indigena_banner.png',
                title: <span>Ouvir a voz da floresta</span>,
                desc: (
                  <span>
                    O movimento coletivo Floresta TV partiu de um pedido dos
                    próprios Povos Originários do mundo em ter autonomia para
                    registrar, compartilhar e ampliar milhares de anos de
                    cultura e sabedoria altamente sustentável, integrativa,
                    coletiva e pacífica com o mundo digital binário.
                  </span>
                ),
                links: (
                  <>
                    <Button variant="white">Equipe</Button>
                    <Button variant="green">Carta aberta</Button>
                    <Button variant="transparent">Contato</Button>
                  </>
                )
              },
              {
                backgroundPosition: 'center 40% !important',
                background: '/img/indigena_com_urucum_banner.png',
                title: <span>Dia da Amazônia</span>,
                subtitle: <span>É urucum na bandeira!</span>,
                links: (
                  <>
                    <Button variant="white">Leia mais</Button>
                    <Button variant="transparent">A voz da Floresta</Button>
                  </>
                )
              }
            ]}
          />
        </Element>
        <Element name="documentario-em-tempo-real">
          <VideoBlock
            title={
              <span style={{ textTransform: 'uppercase' }}>
                Documentário em tempo real <br /> sobre o marco ancestral
              </span>
            }
            desc={`Levantamento crescente da influência dos Povos Originários no 
          mundo através da sabedoria ancestral que zela pela vida e meio ambiente.`}
            caption={`Direto de Brasília um breve resumo dos conteúdos que viemos somando na realização da CONTAGEM PROGRESSIVA, um documentário longa-metragem que cresce com a participação e compartilhamento de cada um de vocês. Uma carta aberta acompanha esse filme e já passam 1300 assinaturas! [25-31ago2021]`}
            videoId={`WVmItbV5rbg`}
          />
        </Element>

        <Element name="contagem-progressiva">
          <ProgressiveCount
            title={<span>Contagem Progressiva </span>}
            desc={
              <span>
                Documentário longa-metragem sobre o crescimento da cultura
                originária a partir de registros independentes em colaboração
                com os próprios povos originários.
              </span>
            }
            caption={<span>Contando desde 25 de Agosto de 2021</span>}
          />
        </Element>

        <Element name="carta-aberta">
          <ArticlePreview
            title={<span>Carta aberta dos povos originários do Brasil</span>}
            subtitle={<span>27 de Agosto de 2021</span>}
            buttonText={
              <span>
                Assine a carta <Signature size={24} />
              </span>
            }
            buttonLink={`/`}
            image={`/img/mulheres_indigenas_em_brasilia_segurando_velas_banner.png`}
            body={
              <span>
                <p>
                  Sabemos que a Floresta Amazônica é considerada o coração do
                  mundo por ser o maior polo de biodiversidade do planeta, e
                  vivemos em uma nova era onde a sociedade está plenamente
                  ciente da necessidade de preservação da vida e do meio
                  ambiente.
                </p>

                <p>
                  {' '}
                  Paralelamente, segundo nossas tradições originárias estamos
                  vivendo o Novo Pensamento, conhecido como Xinã Bena. Após
                  séculos de perseguição, exploração e conflitos, estamos
                  ganhando voz ativa na sociedade e acreditamos que é chegado o
                  momento de abrir-nos para interagir com o mundo todo.
                </p>

                <p>
                  {' '}
                  Neste Novo Tempo, todos colaboramos e juntos cocriamos um novo
                  mundo, feito por nós, Povos Coloridos: todas as raças de todas
                  as cores alcançam uma nova forma de sentir e integrar o
                  verdadeiro Xinã Bena e atuar em prol das florestas. Cientes de
                  nossa importância e nossos direitos, queremos mostrar nosso
                  legado cultural e nossa maneira de enxergar o ser humano como
                  parte da natureza.
                </p>

                <p>
                  {' '}
                  Estamos gritando por atenção há mais de 500 anos. Nossa
                  premissa é engajar cada vez mais pessoas na conservação da
                  biodiversidade e desta cultura ancestral que tanto pode ajudar
                  o planeta com nossos conhecimentos milenares sobre viver em
                  harmonia com a floresta.
                </p>

                <p>
                  {' '}
                  Pedimos pela REJEIÇÃO do Projeto de Lei 490 de 2007, que está
                  tramitando na Câmara dos Deputados e versa sobre a mudança na
                  legislação sobre a demarcação de territórios dos Povos
                  Originários no Brasil. O texto do PL 490, e seus adendos, abre
                  caminho para nosso extermínio e a desertificação da Floresta
                  Amazônica. Sendo assim, é irrefutável que este projeto de lei
                  deve ser REJEITADO em sua totalidade pela Casa Legislativa
                  deste país, bem como os demais projetos que tramitam com o
                  mesmo tema e propósito.
                </p>

                <p>
                  {' '}
                  Por fim, estamos cientes de uma urgência global e incorporamos
                  uma agenda de políticas de proteção e defesa planetária quando
                  falamos do maior berço da biodiversidade do planeta. Somos o
                  movimento de mudança, somos os Guardiões da Floresta.
                </p>
              </span>
            }
            boxtitle={
              <span>Assinam essa carta [em contagem progressiva]:</span>
            }
            boxdesc={
              <span>
                Pajé Txaná Ixã, Pajé Txaná Kixtin, Ibã Huni kuin, Eduardo
                Pizaroli [Tete Beru], Shane Inu Bake [Guilherme Meneghelli],
                Camila Saibro, Mathilde Everaere, Flora Dutra, Advan Haschi,
                Rael Castro, Hugo Takemoto, Daniel Heberle, Graziele Borges,
                Gabriela Guidetti, Chloe Malkine, Nathalie Malkine [Pranad Monja
                do Amor], Vhera Xunú, Cacique Nasso, Cacique Geral da Nação Huni
                Kui Ninawa Inu Huni KuĪ...
              </span>
            }
          />
        </Element>

        <Element name="autonomia-cultural">
          <HeroBlock
            image={
              '/img/indigenas_usando_equipamento_de_gravacao_na_natureza.png'
            }
            title={<span>Autonomia Cultural </span>}
            body={
              <span>
                <p>
                  Capacitar e equipar os nativos que demostram interesse nas
                  tecnologias audiovisuais para apoiar a autonomia, o
                  empoderamento e a expansão cultural de cada povo a partir da
                  fonte para o mundo.
                </p>

                <p>
                  CINEMA DA VIDA REAL <br />
                  BIMI SHU KAYA [AMAZON PRIME]
                </p>

                <p>
                  A aldeia Segredo do Artesão tem um grupo de cinema:
                  &quot;Audiovisual Consciência Ambiental&quot; liderado por
                  Isaka Huni Kuin, que já se lançou no mercado audiovisual
                  internacional. Um modelo a ser replicado e compartilhado com o
                  mundo.
                </p>
              </span>
            }
          />
        </Element>

        <Element name="mapu-huni-kui">
          <VideoBlock
            title={
              <span>
                Mapu Huni Kuī —<br /> Ni Ni Ni Naya Naya Ne
              </span>
            }
            desc={`Fortalecimento da Cultura Huni Kuī`}
            caption={`No filme Mapu Huni Kui — cacique e líder espiritual do Centro Huwã Karu Yuxibu que tem como missão o fortalecimento da identidade cultural do povo Huni Kuî — apresenta o Reggae Kuî com o perfume da floresta. Lançado 25 de Agosto de 2021 e início da Contagem Progressiva.`}
            videoId={`7HzO-IiJZYw`}
          />
        </Element>

        <Element name="protecao-cultural">
          <DoubleImage
            title={<span>Proteção da Cultura</span>}
            subtitle={
              <span>
                Frente ao alarmante contexto da PL490 no Brasil, a Floresta TV
                nasceu para apoiar a digitalização da cultura dos Povos
                Originários e garantir o Marco Atemporal através da
                representatividade cultural daqueles que habitam e protegem as
                nossas florestas a milhares de anos.{' '}
              </span>
            }
            image1={`/img/indigena_escrevendo_rabiscando_tablet.png`}
            image2={`/img/indigena_usando_tablet_tecnologia.png`}
            caption1={`Jordão, Janeiro de 2019`}
            caption2={`Maya Huni Kuī desenhando Kene 
          para registro da cultura ancestral`}
          />
        </Element>

        <Element name="amazonia-a-live">
          <VideoBackground
            title={<span>Amazônia aLive</span>}
            background={`/img/amazonia_a_live_background.png`}
            desc={
              <span>
                Além das Fronteiras do Tempo
                <br /> - da tradição oral para a tradição digital -
              </span>
            }
            caption={`"Amazonia aLive!" Faz parte da World Unity Week da UNIFY e reúne diferentes representantes de comunidades amazônicas, organizações de base e ativistas e lideranças que trabalham em diferentes regiões da região amazônica. 27 de Junho de 2021 (https://worldunityweek.org). Powered by: @recnplay @unify @maah.tribu`}
            videoId={`9qbc0xnPQNI`}
          />
        </Element>

        <Element name="chief-phill">
          <VideoBlockHor
            title={<span>Chief Phil Lane Jr.</span>}
            desc={
              <span>
                <p>
                  {' '}
                  Durante a World Unity Week, uma semana inteira com encontros
                  de lideranças mundiais engajadas com a integração da ciência,
                  cultura, espiritualidade e tecnologia, que aconteceu online
                  nos dias 19 a 26 de junho de 2021, o discurso de encerramento,
                  feito por Phil Lane Jr., enfatizou que precisamos ultrapassar
                  as fronteiras territoriais e culturais e nos unirmos enquanto
                  comunidade global, para que a paz no mundo seja finalmente
                  alcançada.
                </p>
                <p>
                  Em seu emocionado discurso no evento de encerramento da
                  semana, após um dia dedicado a pauta indigenista, organizado
                  pela nossa dedicada equipe Amazônia a.Live, ele se emociona ao
                  agradecer aos engajados com a causa indígena, afirmando que se
                  fizesse sua passagem agora, iria tranquilo e com a certeza que
                  o mundo estará em boas mãos.
                </p>
              </span>
            }
            caption={``}
            videoId={`0bDVbECBgcM`}
          />
        </Element>

        <Element name="biblioteca-viva">
          <ImageText
            title={
              <span>
                A biblioteca viva
                <br /> da floresta
              </span>
            }
            desc={
              <span>
                Os povos originários cultivam ha milenares o compartilhamento de
                conhecimento por tradição oral. Enquanto muitas dessas
                sabedorias estão a ponto de se perder, a FlorestaTV foi
                convidada em ajudar na estruturação de bibliotecas vivas de
                conhecimento dos povos da Floresta para o mundo digital binário.
              </span>
            }
            image={`/img/sementes_no_chao_da_floresta.png`}
            type={'right'}
          />
        </Element>
      </S.Wrapper>
    </motion.div>
  )
}

export default Produtos
