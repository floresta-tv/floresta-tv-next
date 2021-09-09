import * as S from './styles'

type ButtonProps = {
  children: string
  variant?: string
}

const Container = ({ children, variant }: ButtonProps) => {
  return <S.ButtonWrapper variant={variant}>{children}</S.ButtonWrapper>
}

export default Container
