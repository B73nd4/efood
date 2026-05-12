import { useState } from 'react'
import { Dish } from '../../models/Restaurant'
import Button from '../Button'
import Modal from '../Modal'
import { Card, Foto, Infos, Nome, Descricao } from './styles'

const DishCard = ({ id, nome, descricao, foto, preco }: Dish) => {
  const [modalAberto, setModalAberto] = useState(false)

  return (
    <>
      <Card>
        <Foto src={foto} alt={nome} />
        <Infos>
          <Nome>{nome}</Nome>
          <Descricao>{descricao}</Descricao>
          <Button
            titulo="Adicionar ao carrinho"
            onClick={() => setModalAberto(true)}
          />
        </Infos>
      </Card>
      {modalAberto && (
        <Modal
          prato={new Dish(id, nome, descricao, foto, preco)}
          onFechar={() => setModalAberto(false)}
        />
      )}
    </>
  )
}

export default DishCard
