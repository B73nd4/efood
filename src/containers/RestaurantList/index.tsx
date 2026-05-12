import { Restaurant } from '../../models/Restaurant'
import RestaurantCard from '../../components/RestaurantCard'
import { Lista } from './styles'
import fotoSushi from '../../assets/images/sushi.png'
import fotoMassa from '../../assets/images/massa.png'

const restaurantes: Restaurant[] = [
  new Restaurant(
    1,
    'Hioki Sushi',
    'Japonesa',
    4.9,
    'Peça já o melhor da culinária japonesa no conforto da sua casa!',
    fotoSushi,
    true,
    []
  ),
  new Restaurant(
    2,
    'La Dolce Vita Trattoria',
    'Italiana',
    4.6,
    'A La Dolce Vita leva a autêntica cozinha italiana até você!',
    fotoMassa,
    false,
    []
  )
]

const RestaurantList = () => {
  return (
    <Lista>
      {restaurantes.map((restaurante) => (
        <li key={restaurante.id}>
          <RestaurantCard
            id={restaurante.id}
            titulo={restaurante.titulo}
            categoria={restaurante.categoria}
            nota={restaurante.nota}
            descricao={restaurante.descricao}
            capa={restaurante.capa}
            destacado={restaurante.destacado}
            cardapio={restaurante.cardapio}
          />
        </li>
      ))}
    </Lista>
  )
}

export default RestaurantList
