import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { X as TimesIcon } from '@styled-icons/octicons'
import { Container } from '../UI'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'

import * as S from './styles'

type navItemsProps = {
  label: string
  href: string
  external?: boolean
  subItems?: {
    label: string
    href: string
  }[]
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const router = useRouter()
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  const toggleNavbar = () => {
    if (isMobile) {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
      setIsOpen((old) => !old)
    }
  }

  const navItems: navItemsProps[] = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Nossa equipe',
      href: '/equipe'
    },
    {
      label: 'Blog',
      href: 'https://medium.com/florestatv/about',
      external: true
    },
    {
      label: 'Contato',
      href: '/contato'
    }
  ]

  return (
    <S.Wrapper>
      <Container fillHeight>
        <S.Content>
          <S.Brand>
            <Link href="/" passHref={true}>
              <Image
                placeholder="blur"
                blurDataURL="/img/logo_florestatv_horizontal.png"
                src="/img/logo_florestatv_horizontal.png"
                width={363}
                height={102}
              />
            </Link>
          </S.Brand>
          <S.Toggler onClick={toggleNavbar}>
            {isOpen ? (
              <Image src="/img/toggler.svg" width={26} height={18} />
            ) : (
              <TimesIcon width={35} fill="#fff" />
            )}
          </S.Toggler>
          <S.List isVisible={isOpen}>
            {navItems.map((item, index) => (
              <S.ItemWrapper key={index}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <S.Item
                      onClick={toggleNavbar}
                      isActive={
                        item.href === '/'
                          ? router.pathname === '/'
                          : router.pathname.includes(item.href)
                      }
                    >
                      {item.label}
                    </S.Item>
                  </a>
                ) : (
                  <Link href={item.href} passHref={true}>
                    <S.Item
                      onClick={toggleNavbar}
                      isActive={
                        item.href === '/'
                          ? router.pathname === '/'
                          : router.pathname.includes(item.href)
                      }
                    >
                      {item.label}
                    </S.Item>
                  </Link>
                )}
              </S.ItemWrapper>
            ))}

            <Link href={'/seja-um-voluntario'} passHref={true}>
              <S.ItemButton
                isActive={router.pathname === '/seja-um-voluntario'}
              >
                Seja um voluntário
              </S.ItemButton>
            </Link>
          </S.List>
        </S.Content>
      </Container>
      <S.LanguagesWrapper>
        <span>lang: </span>
        <S.LanguageButton className="active">
          <Image
            src="/img/bandeira_idioma_portugues.png"
            width={51}
            height={34}
          ></Image>
        </S.LanguageButton>
        <S.LanguageButton>
          <Image
            src="/img/bandeira_idioma_ingles.png"
            width={51}
            height={34}
          ></Image>
        </S.LanguageButton>
        <S.LanguageButton>
          <Image
            src="/img/bandeira_idioma_espanhol.png"
            width={51}
            height={34}
          ></Image>
        </S.LanguageButton>
        <S.LanguageButton>
          <Image
            src="/img/bandeira_idioma_frances.png"
            width={51}
            height={34}
          ></Image>
        </S.LanguageButton>
      </S.LanguagesWrapper>
    </S.Wrapper>
  )
}

export default Navbar
