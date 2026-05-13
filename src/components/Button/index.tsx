import { BotoesHome } from './styles'

type Props = {
  titulo: string
  fontSize?: number
  variante?: 'bege'
  onClick?: () => void
}

const Button = ({ titulo, fontSize, variante, onClick }: Props) => {
  return (
    <BotoesHome fontSize={fontSize} className={variante} onClick={onClick}>
      {titulo}
    </BotoesHome>
  )
}

export default Button
