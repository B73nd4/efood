import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cart from '../../components/Cart/index'
import ProfileHeader from '../../components/PerfilHeader'
import Menu from '../../containers/Menu'
import Footer from '../../components/Footer'

const Restaurant = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<any>()

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((resposta) => resposta.json())
      .then((resposta) => {
        const restauranteAtual = resposta.find(
          (item: any) => item.id === Number(id)
        )

        setRestaurant(restauranteAtual)
      })
  }, [id])

  if (!restaurant) {
    return <h2>Carregando...</h2>
  }

  return (
    <>
      <ProfileHeader
        categoria={restaurant.tipo}
        nome={restaurant.titulo}
        capa={restaurant.capa}
      />
      <div className="container">
        <Menu pratos={restaurant.cardapio} />{' '}
      </div>
      <Footer />
      <Cart />
    </>
  )
}

export default Restaurant
