import * as S from './styles'

type ContainerProps = {
  children: JSX.Element
  fillHeight?: boolean
  position?: string
}

const Container = ({
  children,
  fillHeight = false,
  position = 'unset'
}: ContainerProps) => {
  return (
    <S.Wrapper
      // @ts-ignore
      style={{ height: fillHeight ? '100%' : 'auto', position: position }}
    >
      {children}
    </S.Wrapper>
  )
}

export default Container
