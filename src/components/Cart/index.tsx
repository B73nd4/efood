import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { fechar } from '../../store/reducers/carrinho'

import { useState } from 'react'
import * as S from './styles'

const Cart = () => {
  const [etapa, setEtapa] = useState<
    'cart' | 'delivery' | 'payment' | 'confirmation'
  >('cart')
  const dispatch = useDispatch()
  const { itens, aberto } = useSelector((state: RootState) => state.carrinho)

  const fecharCarrinho = () => {
    dispatch(fechar())
    setEtapa('cart')
  }

  const valorTotal = itens.reduce((acc, item) => {
    return acc + item.preco
  }, 0)

  if (!aberto) return null

  return (
    <S.Overlay onClick={fecharCarrinho}>
      <S.Sidebar onClick={(e) => e.stopPropagation()}>
        {etapa === 'cart' && (
          <>
            <S.CartList>
              {itens.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />

                  <div>
                    <h3>{item.nome}</h3>

                    <span>
                      {item.preco.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      })}
                    </span>
                  </div>
                </S.CartItem>
              ))}
            </S.CartList>
            <S.Total>
              <p>Valor total</p>
              <span>
                {valorTotal.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </span>
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
            <S.Button onClick={fecharCarrinho}>Concluir</S.Button>
          </>
        )}
      </S.Sidebar>
    </S.Overlay>
  )
}

export default Cart
