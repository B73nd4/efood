import { useState } from 'react'
import Cart from '../../components/Cart/index'
import ProfileHeader from '../../components/PerfilHeader'
import Menu from '../../containers/Menu'
import Footer from '../../components/Footer'
import { Dish } from '../../models/Restaurant'

import fotomassa1 from '../../assets/images/massa1.png'
import banner from '../../assets/images/banner-perfil.png'

const pratos: Dish[] = [
  new Dish(
    1,
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    fotomassa1,
    35.9
  ),
  new Dish(
    2,
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    fotomassa1,
    35.9
  ),
  new Dish(
    3,
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    fotomassa1,
    35.9
  ),
  new Dish(
    4,
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    fotomassa1,
    35.9
  ),
  new Dish(
    5,
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    fotomassa1,
    35.9
  ),
  new Dish(
    6,
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    fotomassa1,
    35.9
  )
]

const Restaurant = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false)

  return (
    <>
      <ProfileHeader
        categoria="Italiana"
        nome="La Dolce Vita Trattoria"
        capa={banner}
      />
      <div className="container">
        <Menu pratos={pratos} abrirCarrinho={() => setCartIsOpen(true)} />
      </div>
      <Footer />
      <Cart isOpen={cartIsOpen} />
    </>
  )
}

export default Restaurant
