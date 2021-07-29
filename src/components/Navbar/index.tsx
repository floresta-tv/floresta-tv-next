import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ThreeBars, X as TimesIcon } from '@styled-icons/octicons'
import { Container } from '../UI'
import { useRouter } from 'next/router'

import * as S from './styles'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const router = useRouter()

  const navItems = [
    {
      label: 'Produtos',
      href: '/',
      isActive: false
    },
    {
      label: 'Análises ativos',
      href: '/analises-ativos',
      isActive: false
    },
    {
      label: 'Blog',
      href: '/blog',
      isActive: false
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
          <S.Toggler onClick={() => setIsOpen((old) => !old)}>
            {isOpen ? (
              <ThreeBars width={30} fill="#fff" />
            ) : (
              <TimesIcon width={35} fill="#fff" />
            )}
          </S.Toggler>
          <S.List isVisible={isOpen}>
            {navItems.map((item, index) => (
              <Link key={index} href={item.href} passHref={true}>
                <S.Item
                  onClick={() => setIsOpen((old) => !old)}
                  isActive={
                    item.href === '/'
                      ? router.pathname === item.href
                      : router.pathname.includes(item.href)
                  }
                >
                  {item.label}
                </S.Item>
              </Link>
            ))}
          </S.List>
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default Navbar
