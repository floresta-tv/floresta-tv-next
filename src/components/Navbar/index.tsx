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
      label: 'Produtos',
      href: '/produtos',
      subItems: [
        {
          label: 'One',
          href: '/produtos/one'
        },
        {
          label: 'Atena',
          href: '/produtos/atena'
        },
        {
          label: 'BPO',
          href: '/produtos/bpo'
        }
      ]
    },
    {
      label: 'Análises ativos',
      href: '/analises-ativos'
    },
    {
      label: 'Blog',
      href: '/blog'
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
                blurDataURL="/img/brand.svg"
                src="/img/brand.svg"
                width={313}
                height={82}
              />
            </Link>
          </S.Brand>
          <S.Toggler onClick={toggleNavbar}>
            {isOpen ? (
              <Image src="/img/toggler.svg" width={26} height={18} />
            ) : (
              <TimesIcon width={30} fill="#fff" />
            )}
          </S.Toggler>
          <S.List isVisible={isOpen}>
            {navItems.map((item, index) => (
              <S.ItemWrapper key={index}>
                <Link href={item.href} passHref={true}>
                  <S.Item
                    onClick={toggleNavbar}
                    isActive={
                      item.href === '/'
                        ? false
                        : router.pathname.includes(item.href)
                    }
                  >
                    {item.label}
                  </S.Item>
                </Link>
                {item.subItems && (
                  <S.SubItemsWrapper>
                    {item.subItems.map((subItem, subIndex) => (
                      <Link key={subIndex} href={subItem.href} passHref={true}>
                        <S.SubItem onClick={toggleNavbar}>
                          {subItem.label}
                        </S.SubItem>
                      </Link>
                    ))}
                  </S.SubItemsWrapper>
                )}
              </S.ItemWrapper>
            ))}
          </S.List>
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default Navbar
