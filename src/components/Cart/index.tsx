import { useDispatch, useSelector } from 'react-redux'
import { enviarPedido } from '../../services/api'
import { RootState } from '../../store'
import { fechar, remover } from '../../store/reducers/carrinho'
import lixo from '../../assets/images/lixeira.png'

import { useState } from 'react'
import * as S from './styles'

type Errors = Record<string, string>

const validarCep = (cep: string) => /^\d{5}-?\d{3}$/.test(cep.trim())
const validarNumeroCartao = (num: string) =>
  num.replace(/\s/g, '').length === 16 && /^\d+$/.test(num.replace(/\s/g, ''))
const validarCvv = (cvv: string) => /^\d{3,4}$/.test(cvv.trim())
const validarMes = (mes: string) => {
  const n = Number(mes)
  return Number.isInteger(n) && n >= 1 && n <= 12
}
const validarAno = (ano: string) => {
  const n = Number(ano)
  return Number.isInteger(n) && n >= new Date().getFullYear()
}

const Cart = () => {
  const [etapa, setEtapa] = useState<
    'cart' | 'delivery' | 'payment' | 'confirmation'
  >('cart')

  const [pedidoId, setPedidoId] = useState('')
  const [enviando, setEnviando] = useState(false)

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

  const [errosEntrega, setErrosEntrega] = useState<Errors>({})
  const [errosPagamento, setErrosPagamento] = useState<Errors>({})

  const dispatch = useDispatch()
  const { itens, aberto } = useSelector((state: RootState) => state.carrinho)

  const fecharCarrinho = () => {
    dispatch(fechar())
    setEtapa('cart')
  }

  const validarEntrega = (): boolean => {
    const erros: Errors = {}

    if (!nomeRecebedor.trim() || nomeRecebedor.trim().length < 3)
      erros.nomeRecebedor = 'Informe o nome completo do recebedor'
    if (!endereco.trim() || endereco.trim().length < 5)
      erros.endereco = 'Informe o endereço completo'
    if (!cidade.trim() || cidade.trim().length < 2)
      erros.cidade = 'Informe a cidade'
    if (!validarCep(cep))
      erros.cep = 'CEP inválido. Use o formato 00000-000 ou 00000000'
    if (!numeroCasa.trim() || isNaN(Number(numeroCasa)))
      erros.numeroCasa = 'Informe um número válido'

    setErrosEntrega(erros)
    return Object.keys(erros).length === 0
  }

  const validarPagamento = (): boolean => {
    const erros: Errors = {}

    if (!nomeCartao.trim() || nomeCartao.trim().length < 3)
      erros.nomeCartao = 'Informe o nome como está no cartão'
    if (!validarNumeroCartao(numeroCartao))
      erros.numeroCartao = 'Número do cartão inválido. Deve ter 16 dígitos'
    if (!validarCvv(cvv)) erros.cvv = 'CVV inválido. Deve ter 3 ou 4 dígitos'
    if (!validarMes(mesVencimento)) erros.mesVencimento = 'Mês inválido (1-12)'
    if (!validarAno(anoVencimento))
      erros.anoVencimento = `Ano inválido (mínimo ${new Date().getFullYear()})`

    setErrosPagamento(erros)
    return Object.keys(erros).length === 0
  }

  const avancarParaPagamento = () => {
    if (validarEntrega()) {
      setEtapa('payment')
    }
  }

  const gerarPedido = async () => {
    if (!validarPagamento()) return

    setEnviando(true)
    try {
      const payload = {
        products: itens.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: nomeRecebedor.trim(),
          address: {
            description: endereco.trim(),
            city: cidade.trim(),
            zipCode: cep.trim(),
            number: Number(numeroCasa),
            complement: complemento.trim()
          }
        },
        payment: {
          card: {
            name: nomeCartao.trim(),
            number: numeroCartao.replace(/\s/g, ''),
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
    } catch (e) {
      alert('Erro ao finalizar pedido. Tente novamente.')
    } finally {
      setEnviando(false)
    }
  }

  const valorTotal = itens.reduce((acc, item) => acc + item.preco, 0)

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
                onChange={(e) => {
                  setNomeRecebedor(e.target.value)
                  setErrosEntrega((prev) => ({ ...prev, nomeRecebedor: '' }))
                }}
              />
              {errosEntrega.nomeRecebedor && (
                <S.ErrorMsg>{errosEntrega.nomeRecebedor}</S.ErrorMsg>
              )}
            </S.InputGroup>

            <S.InputGroup>
              <label>Endereço</label>
              <input
                value={endereco}
                onChange={(e) => {
                  setEndereco(e.target.value)
                  setErrosEntrega((prev) => ({ ...prev, endereco: '' }))
                }}
              />
              {errosEntrega.endereco && (
                <S.ErrorMsg>{errosEntrega.endereco}</S.ErrorMsg>
              )}
            </S.InputGroup>

            <S.InputGroup>
              <label>Cidade</label>
              <input
                value={cidade}
                onChange={(e) => {
                  setCidade(e.target.value)
                  setErrosEntrega((prev) => ({ ...prev, cidade: '' }))
                }}
              />
              {errosEntrega.cidade && (
                <S.ErrorMsg>{errosEntrega.cidade}</S.ErrorMsg>
              )}
            </S.InputGroup>

            <S.Row>
              <S.InputGroup $width="155px">
                <label>CEP</label>
                <input
                  value={cep}
                  onChange={(e) => {
                    setCep(e.target.value)
                    setErrosEntrega((prev) => ({ ...prev, cep: '' }))
                  }}
                  placeholder="00000-000"
                  maxLength={9}
                />
                {errosEntrega.cep && (
                  <S.ErrorMsg>{errosEntrega.cep}</S.ErrorMsg>
                )}
              </S.InputGroup>

              <S.InputGroup $width="155px">
                <label>Número</label>
                <input
                  value={numeroCasa}
                  onChange={(e) => {
                    setNumeroCasa(e.target.value)
                    setErrosEntrega((prev) => ({ ...prev, numeroCasa: '' }))
                  }}
                />
                {errosEntrega.numeroCasa && (
                  <S.ErrorMsg>{errosEntrega.numeroCasa}</S.ErrorMsg>
                )}
              </S.InputGroup>
            </S.Row>

            <S.InputGroup $marginBottom="24px">
              <label>Complemento (opcional)</label>
              <input
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              />
            </S.InputGroup>

            <S.Button onClick={avancarParaPagamento}>
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
                onChange={(e) => {
                  setNomeCartao(e.target.value)
                  setErrosPagamento((prev) => ({ ...prev, nomeCartao: '' }))
                }}
              />
              {errosPagamento.nomeCartao && (
                <S.ErrorMsg>{errosPagamento.nomeCartao}</S.ErrorMsg>
              )}
            </S.InputGroup>

            <S.Row>
              <S.InputGroup $width="228px">
                <label>Número do cartão</label>
                <input
                  value={numeroCartao}
                  onChange={(e) => {
                    setNumeroCartao(e.target.value)
                    setErrosPagamento((prev) => ({
                      ...prev,
                      numeroCartao: ''
                    }))
                  }}
                  placeholder="0000000000000000"
                  maxLength={16}
                />
                {errosPagamento.numeroCartao && (
                  <S.ErrorMsg>{errosPagamento.numeroCartao}</S.ErrorMsg>
                )}
              </S.InputGroup>

              <S.InputGroup $width="87px">
                <label>CVV</label>
                <input
                  value={cvv}
                  onChange={(e) => {
                    setCvv(e.target.value)
                    setErrosPagamento((prev) => ({ ...prev, cvv: '' }))
                  }}
                  maxLength={4}
                />
                {errosPagamento.cvv && (
                  <S.ErrorMsg>{errosPagamento.cvv}</S.ErrorMsg>
                )}
              </S.InputGroup>
            </S.Row>

            <S.Row>
              <S.InputGroup $width="155px" $marginBottom="24px">
                <label>Mês de vencimento</label>
                <input
                  value={mesVencimento}
                  onChange={(e) => {
                    setMesVencimento(e.target.value)
                    setErrosPagamento((prev) => ({
                      ...prev,
                      mesVencimento: ''
                    }))
                  }}
                  placeholder="MM"
                  maxLength={2}
                />
                {errosPagamento.mesVencimento && (
                  <S.ErrorMsg>{errosPagamento.mesVencimento}</S.ErrorMsg>
                )}
              </S.InputGroup>

              <S.InputGroup $width="155px" $marginBottom="24px">
                <label>Ano de vencimento</label>
                <input
                  value={anoVencimento}
                  onChange={(e) => {
                    setAnoVencimento(e.target.value)
                    setErrosPagamento((prev) => ({
                      ...prev,
                      anoVencimento: ''
                    }))
                  }}
                  placeholder="AAAA"
                  maxLength={4}
                />
                {errosPagamento.anoVencimento && (
                  <S.ErrorMsg>{errosPagamento.anoVencimento}</S.ErrorMsg>
                )}
              </S.InputGroup>
            </S.Row>

            <S.Button onClick={gerarPedido} disabled={enviando}>
              {enviando ? 'Enviando...' : 'Finalizar pedido'}
            </S.Button>

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
