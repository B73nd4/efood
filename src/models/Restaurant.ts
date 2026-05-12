class Dish {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number

  constructor(
    id: number,
    nome: string,
    descricao: string,
    foto: string,
    preco: number
  ) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.foto = foto
    this.preco = preco
  }
}

class Restaurant {
  id: number
  titulo: string
  categoria: string
  nota: number
  descricao: string
  capa: string
  destacado: boolean
  cardapio: Dish[]

  constructor(
    id: number,
    titulo: string,
    categoria: string,
    nota: number,
    descricao: string,
    capa: string,
    destacado: boolean,
    cardapio: Dish[]
  ) {
    this.id = id
    this.titulo = titulo
    this.categoria = categoria
    this.nota = nota
    this.descricao = descricao
    this.capa = capa
    this.destacado = destacado
    this.cardapio = cardapio
  }
}

export { Dish, Restaurant }
