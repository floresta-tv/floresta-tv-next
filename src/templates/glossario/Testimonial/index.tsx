import Link from 'next/link'
import Image from 'next/image'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/'

import { Container } from '../../../components/UI'

import * as S from './styles'

const GlossarioTestimonial = () => {
  return (
    <S.TestimonialWrapper>
      <Container>
        <S.TestimonialContent>
          <div className="left">
            <S.TestimonialTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </S.TestimonialTitle>
            <S.TestimonialDescription>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself.
            </S.TestimonialDescription>
          </div>
          <S.TestimonialAuthor>
            <div className="img">
              <Image
                placeholder="blur"
                blurDataURL="/img/felipe-bossolani.png"
                src="/img/felipe-bossolani.png"
                width={200}
                height={200}
              />
            </div>
            <Link passHref={true} href="https://www.linkedin.com">
              <span className="name">
                <LinkedinSquare /> Giovanni Evandro
              </span>
            </Link>
          </S.TestimonialAuthor>
        </S.TestimonialContent>
      </Container>
    </S.TestimonialWrapper>
  )
}

export default GlossarioTestimonial
