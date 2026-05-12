import { Dish } from '../../models/Restaurant'
import Button from '../Button'
import {
  Overlay,
  ModalContainer,
  Fechar,
  Foto,
  Infos,
  Nome,
  Descricao,
  Porcao
} from './styles'

type Props = {
  prato: Dish
  onFechar: () => void
}

const Modal = ({ prato, onFechar }: Props) => {
  return (
    <Overlay>
      <ModalContainer>
        <Fechar onClick={onFechar}>X</Fechar>
        <Foto src={prato.foto} alt={prato.nome} />
        <Infos>
          <Nome>{prato.nome}</Nome>
          <Descricao>{prato.descricao}</Descricao>
          <Porcao>Serve de 2 a 3 pessoas</Porcao>
          <Button
            titulo={`Adicionar ao carrinho - R$ ${prato.preco.toFixed(2)}`}
          />
        </Infos>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal
