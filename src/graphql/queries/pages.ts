import { gql } from 'graphql-request'

export const GET_PAGE_VOZ_DA_FLORESTA = gql`
  query getPginaVozDaFloresta($locale: String) {
    paginaAVozDaFloresta(locale: $locale) {
      HomeCarrousel {
        FullCarouselItem {
          title
          image {
            url
          }
          subtitle
          paragraph
          greenButtonText
          greenButtonHref
          whiteButtonText
          whiteButtonHref
          transparentButtonText
          transparentButtonHref
        }
      }

      VideoDocumentario {
        title
        subtitle
        video_id
        video_description
      }

      ContagemProgressiva {
        image {
          url
        }
        title
        subtitle
        days
        hours
        minutes
        seconds
        description
      }

      CartaAberta {
        title
        subtitle
        body
        box_title
        box_content
        button_text
        button_link
      }

      AutonomiaBlock {
        title
        body
        image {
          url
        }
      }

      VideoMapu {
        title
        subtitle
        video_id
        video_description
      }

      VideoAmazonia {
        title
        subtitle
        video_id
        video_description
      }

      ProtecaoCultura {
        first_image {
          url
        }
        first_image_alt
        second_image {
          url
        }
        second_image_alt
        title
        description
      }

      footer_links {
        label
        target
      }

      BibliotecaImage {
        title
        description
        image {
          url
        }
        image_description
        button_text
        button_link
      }

      ChiefPhill {
        title
        subtitle
        video_id
        video_description
      }
    }
  }
`

export const GET_PAGE_MARCO_ANCESTRAL = gql`
  query getPageMarcoAncestral($locale: String) {
    paginaMarcoTemporal(locale: $locale) {
      title
      home_banner_title
      home_banner_subtitle
      home_banner_background {
        url
      }
      home_banner_paragraph
      ImageKaje {
        title
        description
        image {
          url
        }
        image_description
        button_text
        button_link
      }
      DoubleImage {
        first_image {
          url
        }
        first_image_alt
        second_image {
          url
        }
        second_image_alt
        title
        description
      }
      ContagemProgressiva {
        image {
          url
        }
        title
        subtitle
        description
      }
      VideoDocumentario {
        title
        subtitle
        video_id
        video_description
      }
      button_left_text
      button_right_text
      footer_links {
        label
        target
      }
    }
  }
`

export const GET_PAGE_PROJETOS = gql`
  query getPageProjetos($locale: String) {
    pageProjeto(locale: $locale) {
      PageHeader {
        title
        description
        image {
          url
        }
      }
      ProjetoCard {
        id
        title
        description
        image {
          url
        }
        color_primary
        color_secondary
        color_terc
      }

      footer_links {
        label
        target
      }
    }
  }
`

export const GET_PAGE_O_ULTIMO_RECURSO = gql`
  query getPageOUltimoRecurso($locale: String) {
    pageUltimoRecurso(locale: $locale) {
      HomeBanner {
        title
        description
        image {
          url
        }
        first_button {
          text
          href
        }
        second_button {
          text
          href
        }
        terc_button {
          text
          href
        }
      }

      VideoDocumentario {
        title
        subtitle
        video_id
        video_description
      }

      StripText {
        title
        paragraph
      }

      QuoteConstituicao {
        title
        paragraph
        link_url
        link_text
      }

      FourImagesBlock {
        image_1_description
        image_1 {
          url
        }
        image_2_description
        image_2 {
          url
        }
        image_3_description
        image_3 {
          url
        }
        image_4_description
        image_4 {
          url
        }
        title
        description
      }

      AlessandreVieira {
        title
        body
      }

      GotaDaAgua {
        title
        description
        body
      }

      SaidaBolsonaro {
        title
        body
      }

      ArrozComFuzil {
        title
        description
        image {
          url
        }
        image_description
      }

      ArrozComFuzil2 {
        image {
          url
        }
        image_description
      }

      Anamatra {
        title
        body
      }

      ArtigoMatilde {
        title
        description
        button_link
        button_text
        image {
          url
        }
        image_description
      }

      CarlosAyres {
        title
        body
      }

      ContagemProgressiva {
        days
        hours
        minutes
        seconds
        image {
          url
        }
        title
        subtitle
        description
      }

      FotoPB {
        title
        image {
          url
        }
        description
      }

      Credits

      FooterLinks {
        target
        label
      }
    }
  }
`

export const GET_PAGE_VOLUNTARIADO = gql`
  query getPageVoluntariado($locale: String) {
    paginaVoluntariado(locale: $locale) {
      title
      BannerHeader {
        title
        description
        image {
          url
        }
      }

      button_text
      button_href

      footer_links {
        target
        label
      }
    }
  }
`

export const GET_PAGE_CONTATO = gql`
  query getPaginaContato($locale: String) {
    paginaContato(locale: $locale) {
      title
      BannerHeader {
        title
        description
        image {
          url
        }
        first_button {
          text
          href
        }
      }

      button_text
      button_href

      footer_links {
        target
        label
      }
    }
  }
`

export const GET_PAGE_MARCHA_MULHERES_INDIGENAS = gql`
  query getPaginaMarchaMulheresIndigena($locale: String) {
    paginaMarchaMulheresIndigena(locale: $locale) {
      HomeBanner {
        title
        image {
          url
        }
        subtitle
        paragraph
        greenButtonText
        greenButtonHref
        whiteButtonText
        whiteButtonHref
        transparentButtonText
        transparentButtonHref
      }

      ContagemProgressiva {
        image {
          url
        }
        title
        subtitle
        days
        hours
        minutes
        seconds
        description
      }

      VideoDocumentario {
        title
        subtitle
        video_id
        video_description
      }

      title_2
      paragraph_2
      image_1 {
        image {
          url
        }
        image_description
      }
      image_2 {
        image {
          url
        }
        image_description
      }
      image_3 {
        image {
          url
        }
        image_description
      }
      image_4 {
        image {
          url
        }
        image_description
      }
      paragraph_3
      SinalVerde {
        title
        body
      }
      paragraph_4
      image_5 {
        image {
          url
        }
        image_description
      }
      image_6 {
        image {
          url
        }
        image_description
      }
      credits
      button_left_text
      button_right_text
      footer_links {
        target
        label
      }
    }
  }
`

export const GET_PAGE_EQUIPE = gql`
  query getPaginaEquipe($locale: String) {
    paginaEquipe(locale: $locale) {
      BannerHeader {
        title
        description
        image {
          url
        }
        first_button {
          text
          href
        }
        second_button {
          text
          href
        }
        terc_button {
          text
          href
        }
      }
      image {
        url
      }
      image_alt
      image_final {
        url
      }
      image_final_alt
      title
      description
      footer_links {
        label
        target
      }

      integrantes {
        integrante {
          name
          description
          image {
            url
          }
          facebook_url
          instagram_url
          medium_url
          twitter_url
          website_url
          ocuppation
          color_primary
          color_secondary
        }
      }
    }
  }
`

export const GET_PAGE_DIA_DA_AMAZONIA = gql`
  query getPaginaDiaDaAmazonia {
    paginaDiaDaAmazonia {
      HomeBanner {
        title
        description
        image {
          url
        }
        first_button {
          href
          text
        }
        second_button {
          href
          text
        }
        terc_button {
          href
          text
        }
      }
      ContagemProgressiva {
        image {
          url
        }
        title
        subtitle
        days
        hours
        minutes
        seconds
        description
      }
      VideoHistoria {
        title
        subtitle
        video_id
        video_description
      }
      large_content_3213 {
        title
        subtitle
        paragraph
        image_1 {
          url
        }
        image_1_desc
        image_2 {
          url
        }
        image_2_desc
        image_3 {
          url
        }
        image_3_desc
        image_4 {
          url
        }
        image_4_desc
        paragraph_2
      }
      DoubleImageStripe {
        image_1 {
          url
        }
        image_1_desc
        image_2 {
          url
        }
        image_2_desc
      }

      paragraph_3
      quote
      ImageUrucum {
        title
        description
        image {
          url
        }
        image_description
        button_text
        button_link
      }

      DeclaracaoRafael {
        title
        body
      }

      DevastacaoImage {
        title
        description
        image {
          url
        }
        image_description
        button_text
        button_link
      }

      button_left_text
      button_right_text
      footer_links {
        target
        label
      }
    }
  }
`
