import { Link } from 'react-router-dom'
import { Restaurant } from '../../models/Restaurant'
import Button from '../Button'
import {
  Card,
  Capa,
  Infos,
  Nome,
  Descricao,
  TagsContainer,
  NotaContainer,
  Nota
} from './styles'

const RestaurantCard = ({
  id,
  titulo,
  tipo,
  avaliacao,
  descricao,
  capa,
  destacado
}: Restaurant) => {
  return (
    <Card>
      <Capa src={capa} alt={titulo} />
      <TagsContainer>
        {destacado && <Button titulo="Destaque da semana" fontSize={10} />}
        <Button titulo={tipo} fontSize={10} />
      </TagsContainer>
      <Infos>
        <NotaContainer>
          <Nome>{titulo}</Nome>
          <Nota>{avaliacao} ⭐</Nota>
        </NotaContainer>
        <Descricao>{descricao}</Descricao>
        <Link to={`/restaurante/${id}`}>
          <Button titulo="Saiba mais" />
        </Link>
      </Infos>
    </Card>
  )
}

export default RestaurantCard
