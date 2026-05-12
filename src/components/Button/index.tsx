import { BotoesHome } from './styles'

type Props = {
  titulo: string
  fontSize?: number
}

const Button = ({ titulo, fontSize }: Props) => {
  return <BotoesHome fontSize={fontSize}>{titulo}</BotoesHome>
}

export default Button
