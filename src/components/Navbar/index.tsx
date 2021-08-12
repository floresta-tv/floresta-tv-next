import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X as TimesIcon } from '@styled-icons/octicons'
import { Container } from '../UI'
import { useRouter } from 'next/router'

import * as S from './styles'

type navItemsProps = {
  label: string
  href: string
  isActive: boolean
  subItems?: {
    label: string
    href: string
  }[]
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const router = useRouter()

  const navItems: navItemsProps[] = [
    {
      label: 'Produtos',
      href: '/produtos',
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
                    onClick={() => setIsOpen((old) => !old)}
                    isActive={
                      item.href === '/'
                        ? false
                        : router.pathname.includes(item.href)
                    }
                  >
                    {item.label}
                  </S.Item>
                </Link>
                {item.subItems &&
                  item.subItems.map((subItem, subIndex) => (
                    <Link key={subIndex} href={subItem.href} passHref={true}>
                      <S.SubItem
                        onClick={() => setIsOpen((old) => !old)}
                      ></S.SubItem>
                    </Link>
                  ))}
              </S.ItemWrapper>
            ))}
          </S.List>
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default Navbar
