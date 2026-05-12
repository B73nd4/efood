import ProfileHeader from '../../components/PerfilHeader'
import Menu from '../../containers/Menu'
import Footer from '../../components/Footer'
import { Dish } from '../../models/Restaurant'

const pratos: Dish[] = [
  new Dish(
    1,
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400',
    35.9
  ),
  new Dish(
    2,
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400',
    35.9
  ),
  new Dish(
    3,
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400',
    35.9
  ),
  new Dish(
    4,
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400',
    35.9
  ),
  new Dish(
    5,
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400',
    35.9
  ),
  new Dish(
    6,
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400',
    35.9
  )
]

const Restaurant = () => {
  return (
    <>
      <ProfileHeader
        categoria="Italiana"
        nome="La Dolce Vita Trattoria"
        capa="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200"
      />
      <div className="container">
        <Menu pratos={pratos} />
      </div>
      <Footer />
    </>
  )
}

export default Restaurant
