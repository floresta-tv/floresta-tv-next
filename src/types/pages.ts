type DoubleImageT = {
  first_image: {
    url: string
  }
  first_image_alt
  second_image: {
    url: string
  }
  second_image_alt: string
  title: string
  description: string
}

type ImageTextT = {
  title: string
  description: string
  image: {
    url: string
  }
  image_description: string
  button_text: string
  button_link: string
}

type ContagemProgressivaT = {
  image: {
    url: string
  }
  title: string
  subtitle: string
  description: string
  days: string
  hours: string
  minutes: string
  seconds: string
}

type VideoBlockT = {
  title: string
  subtitle: string
  video_id: string
  video_description: string
}

type PageHeaderT = {
  title: string
  description: string
  image: {
    url: string
  }
}

export type PMarcoAncestralT = {
  title: string
  home_banner_title: string
  home_banner_subtitle: string
  home_banner_paragraph: string
  home_banner_background: {
    url: string
  }
  ImageKaje: ImageTextT
  DoubleImage: DoubleImageT
  ContagemProgressiva: ContagemProgressivaT
  VideoDocumentario: VideoBlockT
  button_left_text: string
  button_right_text: string
  footer_links: {
    label
    target
  }[]
}

export type PProjetosT = {
  PageHeader: PageHeaderT
  ProjetoCard: {
    id: string
    title: string
    description: string
    image: {
      url: string
    }
    color_primary: string
    color_secondary: string
    color_terc: string
  }[]
  footer_links: {
    label: string
    target: string
  }[]
}

export type PAVozDaFloresta = {
  HomeCarrousel: {
    FullCarouselItem: {
      title: string
      image: {
        url: string
      }
      subtitle: string
      paragraph: string
      greenButtonText: string
      greenButtonHref: string
      whiteButtonText: string
      whiteButtonHref: string
      transparentButtonText: string
      transparentButtonHref: string
    }[]
  }

  VideoDocumentario: {
    title: string
    subtitle: string
    video_id: string
    video_description: string
  }

  ContagemProgressiva: {
    image: {
      url: string
    }
    title: string
    subtitle: string
    days: string
    hours: string
    minutes: string
    seconds: string
    description: string
  }

  CartaAberta: {
    title: string
    subtitle: string
    body: string
    box_title: string
    box_content: string
    button_text: string
    button_link: string
    image: {
      url: string
    }
  }

  AutonomiaBlock: {
    title: string
    body: string
    image: {
      url: string
    }
  }

  VideoMapu: {
    title: string
    subtitle: string
    video_id: string
    video_description: string
  }

  VideoAmazonia: {
    title: string
    subtitle: string
    video_id: string
    video_description: string
  }

  ProtecaoCultura: {
    first_image: {
      url: string
    }
    first_image_alt
    second_image: {
      url: string
    }
    second_image_alt: string
    title: string
    description: string
  }

  footer_links: {
    label: string
    target: string
  }[]

  BibliotecaImage: {
    title: string
    description: string
    image: {
      url: string
    }
    image_description: string
    button_text: string
    button_link: string
  }

  ChiefPhill: {
    title: string
    subtitle: string
    video_id: string
    video_description: string
  }
}

export type PEquipeT = {
  BannerHeader: {
    title: string
    description: string
    image: {
      url: string
    }
    first_button: {
      text: string
      href: string
    }
    second_button: {
      text: string
      href: string
    }
    terc_button: {
      text: string
      href: string
    }
  }
  image: {
    url: string
  }
  image_alt: string
  image_final: {
    url: string
  }
  image_final_alt: string
  title: string
  description: string
  footer_links: {
    label: string
    target: string
  }[]

  integrantes: {
    integrante: {
      name: string
      description: string
      image: {
        url: string
      }
      facebook_url: string
      instagram_url: string
      medium_url: string
      twitter_url: string
      website_url: string
      ocuppation: string
      color_primary: string
      color_secondary: string
    }
  }[]
}

export type PContatoT = {
  title: string
  BannerHeader: {
    title: string
    description: string
    image: {
      url: string
    }
    first_button: {
      text: string
      href: string
    }
  }
  button_text: string
  button_href: string
  footer_links: {
    target: string
    label: string
  }[]
}

export type PDiaDaAmazoniaT = {
  HomeBanner: {
    title: string
    description: string
    image: {
      url: string
    }
    first_button: {
      href: string
      text: string
    }
    second_button: {
      href: string
      text: string
    }
    terc_button: {
      href: string
      text: string
    }
  }
  ContagemProgressiva: {
    image: {
      url: string
    }
    title: string
    subtitle: string
    days: string
    hours: string
    minutes: string
    seconds: string
    description: string
  }
  VideoHistoria: {
    title: string
    subtitle: string
    video_id: string
    video_description: string
  }
  large_content_3213: {
    title: string
    subtitle: string
    paragraph: string
    image_1: {
      url: string
    }
    image_1_desc: string
    image_2: {
      url: string
    }
    image_2_desc: string
    image_3: {
      url: string
    }
    image_3_desc: string
    image_4: {
      url: string
    }
    image_4_desc: string
    paragraph_2: string
  }
  DoubleImageStripe: {
    image_1: {
      url: string
    }
    image_1_desc: string
    image_2: {
      url: string
    }
    image_2_desc: string
  }
  paragraph_3: string
  quote: string
  ImageUrucum: {
    title: string
    description: string
    image: {
      url: string
    }
    image_description: string
    button_text: string
    button_link: string
  }

  DeclaracaoRafael: {
    title: string
    body: string
  }

  DevastacaoImage: {
    title: string
    description: string
    image: {
      url: string
    }
    image_description: string
    button_text: string
    button_link: string
  }

  button_left_text: string
  button_right_text: string
  footer_links: {
    target: string
    label: string
  }[]
}
