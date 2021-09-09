import Fade from 'react-reveal/Fade'
import { Row, Col } from 'react-bootstrap'

import * as S from './styles'

type HeroBlockProps = {
  title: JSX.Element
  body: JSX.Element
  image: string
}

const HeroBlock = ({ title, body, image }: HeroBlockProps) => {
  return (
    <S.HeroBlockWrapper background={image}>
      <Row style={{ height: '100%' }}>
        <Col lg={5} style={{ height: '100%' }}>
          <S.HeroBlockContent>
            <Fade left>
              <h2 className="title">{title}</h2>
              <div className="body">{body}</div>
            </Fade>
          </S.HeroBlockContent>
        </Col>
      </Row>
    </S.HeroBlockWrapper>
  )
}

export default HeroBlock
