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
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    fotoSushi,
    true,
    []
  ),
  new Restaurant(
    2,
    'La Dolce Vita Trattoria',
    'Italiana',
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    fotoMassa,
    false,
    []
  ),
  new Restaurant(
    3,
    'La Dolce Vita Trattoria',
    'Italiana',
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    fotoMassa,
    false,
    []
  ),
  new Restaurant(
    4,
    'La Dolce Vita Trattoria',
    'Italiana',
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    fotoMassa,
    false,
    []
  ),
  new Restaurant(
    5,
    'La Dolce Vita Trattoria',
    'Italiana',
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    fotoMassa,
    false,
    []
  ),
  new Restaurant(
    6,
    'La Dolce Vita Trattoria',
    'Italiana',
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
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
