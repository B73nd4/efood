import { useState } from 'react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

import massa1 from '../../assets/images/massa1.png'

type Props = {
  isOpen: boolean
}

const Cart = ({ isOpen }: Props) => {
  const [etapa, setEtapa] = useState<
    'cart' | 'delivery' | 'payment' | 'confirmation'
  >('cart')

  const navigate = useNavigate()

  if (!isOpen) return null

  return (
    <S.Overlay>
      <S.Sidebar>
        {etapa === 'cart' && (
          <>
            <S.CartItem>
              <img src={massa1} alt="Pizza" />

              <div>
                <h3>Pizza Marguerita</h3>
                <span>R$ 60,90</span>
              </div>
            </S.CartItem>
            <S.CartItem>
              <img src={massa1} alt="Pizza" />

              <div>
                <h3>Pizza Marguerita</h3>
                <span>R$ 60,90</span>
              </div>
            </S.CartItem>
            <S.CartItem>
              <img src={massa1} alt="Pizza" />

              <div>
                <h3>Pizza Marguerita</h3>
                <span>R$ 60,90</span>
              </div>
            </S.CartItem>

            <S.Total>
              <p>Valor total</p>
              <span>R$ 182,70</span>
            </S.Total>

            <S.Button onClick={() => setEtapa('delivery')}>
              Continuar com a entrega
            </S.Button>
          </>
        )}

        {etapa === 'delivery' && (
          <>
            <S.Title>Entrega</S.Title>

            <S.InputGroup>
              <label>Quem irá receber</label>
              <input type="text" />
            </S.InputGroup>

            <S.InputGroup>
              <label>Endereço</label>
              <input type="text" />
            </S.InputGroup>

            <S.InputGroup>
              <label>Cidade</label>
              <input type="text" />
            </S.InputGroup>

            <S.Row>
              <S.InputGroup>
                <label>CEP</label>
                <input type="text" />
              </S.InputGroup>

              <S.InputGroup $small>
                <label>Número</label>
                <input type="text" />
              </S.InputGroup>
            </S.Row>

            <S.InputGroup>
              <label>Complemento (opcional)</label>
              <input type="text" />
            </S.InputGroup>

            <S.Button onClick={() => setEtapa('payment')}>
              Continuar com o pagamento
            </S.Button>

            <S.Button onClick={() => setEtapa('cart')}>
              Voltar para o carrinho
            </S.Button>
          </>
        )}

        {etapa === 'payment' && (
          <>
            <S.Title>Pagamento</S.Title>

            <S.InputGroup>
              <label>Nome no cartão</label>
              <input type="text" />
            </S.InputGroup>

            <S.Row>
              <S.InputGroup>
                <label>Número do cartão</label>
                <input type="text" />
              </S.InputGroup>
            </S.Row>

            <S.Row>
              <S.InputGroup>
                <label>Mês de vencimento</label>
                <input type="text" />
              </S.InputGroup>

              <S.InputGroup>
                <label>Ano de vencimento</label>
                <input type="text" />
              </S.InputGroup>
            </S.Row>

            <S.Button onClick={() => setEtapa('confirmation')}>
              Finalizar pagamento
            </S.Button>

            <S.Button onClick={() => setEtapa('delivery')}>
              Voltar para a edição de endereço
            </S.Button>
          </>
        )}

        {etapa === 'confirmation' && (
          <>
            <S.Title>Pedido realizado</S.Title>
            <S.Text>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </S.Text>
            <S.Text>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </S.Text>
            <S.Button onClick={() => navigate('/')}>Concluir</S.Button>
          </>
        )}
      </S.Sidebar>
    </S.Overlay>
  )
}

export default Cart
