import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Item = {
  id: number
  nome: string
  foto: string
  preco: number
}

type CarrinhoState = {
  itens: Item[]
  aberto: boolean
}

const initialState: CarrinhoState = {
  itens: [],
  aberto: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,

  reducers: {
    adicionar: (state, action: PayloadAction<Item>) => {
      state.itens.push(action.payload)
    },

    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },

    abrir: (state) => {
      state.aberto = true
    },

    fechar: (state) => {
      state.aberto = false
    }
  }
})

export const { adicionar, remover, abrir, fechar } = carrinhoSlice.actions

export default carrinhoSlice.reducer
