import { Container } from 'components/UI'

import Fade from 'react-reveal/Fade'

import Link from 'next/link'

import * as S from './styles'

type HeaderTextProps = {
  textBt1: JSX.Element
  textBt2: JSX.Element
  bt1Color: string
  bt2Color: string
  bt1Link: string
  bt2Link: string
  bgc?: string
}

const DoubleButton = ({
  textBt1,
  textBt2,
  bt1Color,
  bt2Color,
  bgc,
  bt1Link,
  bt2Link
}: HeaderTextProps) => {
  return (
    <S.HeaderTextWrapper bgc={bgc} bt1Color={bt1Color} bt2Color={bt2Color}>
      <Container>
        <div className="content">
          <Fade bottom>
            <div className="bt-1">
              <Link href={bt1Link}>{textBt1}</Link>
            </div>
          </Fade>
          <Fade bottom>
            <div className="bt-2">
              <Link href={bt2Link}>{textBt2}</Link>
            </div>
          </Fade>
        </div>
      </Container>
    </S.HeaderTextWrapper>
  )
}

export default DoubleButton
