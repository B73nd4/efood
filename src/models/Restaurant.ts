class Dish {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string

  constructor(
    id: number,
    nome: string,
    descricao: string,
    foto: string,
    preco: number,
    porcao: string
  ) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.foto = foto
    this.preco = preco
    this.porcao = porcao
  }
}

class Restaurant {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  destacado: boolean
  cardapio: Dish[]

  constructor(
    id: number,
    titulo: string,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string,
    destacado: boolean,
    cardapio: Dish[]
  ) {
    this.id = id
    this.titulo = titulo
    this.tipo = tipo
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.capa = capa
    this.destacado = destacado
    this.cardapio = cardapio
  }
}

export { Dish, Restaurant }
