import { useEffect, useState } from 'react'
import { Restaurant } from '../../models/Restaurant'
import RestaurantCard from '../../components/RestaurantCard'
import { Lista } from './styles'

const RestaurantList = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((resposta) => resposta.json())
      .then((resposta) => {
        setRestaurantes(resposta)
      })
  }, [])

  return (
    <Lista>
      {restaurantes.map((restaurante) => (
        <li key={restaurante.id}>
          <RestaurantCard
            id={restaurante.id}
            titulo={restaurante.titulo}
            tipo={restaurante.tipo}
            avaliacao={restaurante.avaliacao}
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
