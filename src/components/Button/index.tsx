import { BotoesHome } from './styles'

type Props = {
  titulo: string
  fontSize?: number
  onClick?: () => void
}

const Button = ({ titulo, fontSize, onClick }: Props) => {
  return (
    <BotoesHome fontSize={fontSize} onClick={onClick}>
      {titulo}
    </BotoesHome>
  )
}

export default Button
