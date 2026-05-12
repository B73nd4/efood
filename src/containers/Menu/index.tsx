import { Dish } from '../../models/Restaurant'
import DishCard from '../../components/DishCard'
import { Grid } from './styles'

type Props = {
  pratos: Dish[]
}

const Menu = ({ pratos }: Props) => {
  return (
    <Grid>
      {pratos.map((prato) => (
        <li key={prato.id}>
          <DishCard
            id={prato.id}
            nome={prato.nome}
            descricao={prato.descricao}
            foto={prato.foto}
            preco={prato.preco}
          />
        </li>
      ))}
    </Grid>
  )
}

export default Menu
