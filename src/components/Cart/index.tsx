import { useDispatch, useSelector } from 'react-redux'
import { enviarPedido } from '../../services/api'
import { RootState } from '../../store'
import { fechar, remover } from '../../store/reducers/carrinho'
import lixo from '../../assets/images/lixeira.png'

import { useState } from 'react'
import * as S from './styles'

const Cart = () => {
  const [etapa, setEtapa] = useState<
    'cart' | 'delivery' | 'payment' | 'confirmation'
  >('cart')

  const [pedidoId, setPedidoId] = useState('')

  const [nomeRecebedor, setNomeRecebedor] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [cep, setCep] = useState('')
  const [numeroCasa, setNumeroCasa] = useState('')
  const [complemento, setComplemento] = useState('')

  const [nomeCartao, setNomeCartao] = useState('')
  const [numeroCartao, setNumeroCartao] = useState('')
  const [cvv, setCvv] = useState('')
  const [mesVencimento, setMesVencimento] = useState('')
  const [anoVencimento, setAnoVencimento] = useState('')

  const dispatch = useDispatch()
  const { itens, aberto } = useSelector((state: RootState) => state.carrinho)

  const fecharCarrinho = () => {
    dispatch(fechar())
    setEtapa('cart')
  }

  const gerarPedido = async () => {
    const payload = {
      products: itens.map((item) => ({
        id: item.id,
        price: item.preco
      })),

      delivery: {
        receiver: nomeRecebedor,
        address: {
          description: endereco,
          city: cidade,
          zipCode: cep,
          number: Number(numeroCasa),
          complement: complemento
        }
      },

      payment: {
        card: {
          name: nomeCartao,
          number: numeroCartao,
          code: Number(cvv),
          expires: {
            month: Number(mesVencimento),
            year: Number(anoVencimento)
          }
        }
      }
    }

    const resposta = await enviarPedido(payload)

    setPedidoId(resposta.orderId)
    setEtapa('confirmation')
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
                  <S.RemoveButton onClick={() => dispatch(remover(item.id))}>
                    <img src={lixo} alt="Remover item" />
                  </S.RemoveButton>
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
              <input
                value={nomeRecebedor}
                onChange={(e) => setNomeRecebedor(e.target.value)}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label>Endereço</label>
              <input
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label>Cidade</label>
              <input
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </S.InputGroup>
            <S.Row>
              <S.InputGroup $width="155px">
                <label>CEP</label>
                <input value={cep} onChange={(e) => setCep(e.target.value)} />
              </S.InputGroup>

              <S.InputGroup $width="155px">
                <label>Número</label>
                <input
                  value={numeroCasa}
                  onChange={(e) => setNumeroCasa(e.target.value)}
                />
              </S.InputGroup>
            </S.Row>

            <S.InputGroup $marginBottom="24px">
              <label>Complemento (opcional)</label>
              <input
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              />
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
            <S.Title>
              Pagamento - Valor a pagar{' '}
              {valorTotal.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </S.Title>

            <S.InputGroup>
              <label>Nome no cartão</label>
              <input
                value={nomeCartao}
                onChange={(e) => setNomeCartao(e.target.value)}
              />
            </S.InputGroup>

            <S.Row>
              <S.InputGroup $width="228px">
                <label>Número do cartão</label>
                <input
                  value={numeroCartao}
                  onChange={(e) => setNumeroCartao(e.target.value)}
                />
              </S.InputGroup>
              <S.InputGroup $width="87px">
                <label>CVV</label>
                <input value={cvv} onChange={(e) => setCvv(e.target.value)} />
              </S.InputGroup>
            </S.Row>

            <S.Row>
              <S.InputGroup $width="155px" $marginBottom="24px">
                <label>Mês de vencimento</label>
                <input
                  value={mesVencimento}
                  onChange={(e) => setMesVencimento(e.target.value)}
                />
              </S.InputGroup>
              <S.InputGroup $width="155px" $marginBottom="24px">
                <label>Ano de vencimento</label>
                <input
                  value={anoVencimento}
                  onChange={(e) => setAnoVencimento(e.target.value)}
                />
              </S.InputGroup>
            </S.Row>

            <S.Button onClick={gerarPedido}>Finalizar pedido</S.Button>

            <S.Button onClick={() => setEtapa('delivery')}>
              Voltar para a edição de endereço
            </S.Button>
          </>
        )}

        {etapa === 'confirmation' && (
          <>
            <S.Title>Pedido realizado - {pedidoId}</S.Title>

            <S.Text>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </S.Text>

            <S.Text>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </S.Text>

            <S.Text>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </S.Text>

            <S.Text>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </S.Text>

            <S.Button onClick={fecharCarrinho}>Concluir</S.Button>
          </>
        )}
      </S.Sidebar>
    </S.Overlay>
  )
}

export default Cart
