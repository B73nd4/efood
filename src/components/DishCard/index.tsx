import { useState } from 'react'
import { Dish } from '../../models/Restaurant'
import Button from '../Button'
import Modal from '../Modal'
import { Card, Foto, Infos, Nome, Descricao } from './styles'

type Props = Dish

const DishCard = ({ id, nome, descricao, foto, preco, porcao }: Props) => {
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
            variante="bege"
          />
        </Infos>
      </Card>

      {modalAberto && (
        <Modal
          prato={{
            id,
            nome,
            descricao,
            foto,
            preco,
            porcao
          }}
          onFechar={() => setModalAberto(false)}
        />
      )}
    </>
  )
}

export default DishCard
