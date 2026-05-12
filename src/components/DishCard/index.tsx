import { Dish } from '../../models/Restaurant'
import Button from '../Button'
import { Card, Foto, Infos, Nome, Descricao } from './styles'

const DishCard = ({ nome, descricao, foto }: Dish) => {
  return (
    <Card>
      <Foto src={foto} alt={nome} />
      <Infos>
        <Nome>{nome}</Nome>
        <Descricao>{descricao}</Descricao>
        <Button titulo="Adicionar ao carrinho" />
      </Infos>
    </Card>
  )
}

export default DishCard
