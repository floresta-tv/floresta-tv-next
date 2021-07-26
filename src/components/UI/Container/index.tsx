import * as S from './styles'

type ContainerProps = {
  children: JSX.Element
  fillHeight: boolean
}

const Container = ({ children, fillHeight }: ContainerProps) => {
  return (
    <S.Wrapper style={{ height: fillHeight ? '100%' : 'auto' }}>
      {children}
    </S.Wrapper>
  )
}

export default Container
