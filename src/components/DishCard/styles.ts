import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
`

export const Foto = styled.img`
  width: 304px;
  height: 167px;
  margin: 8px;
  object-fit: cover;
`

export const Infos = styled.div`
  padding: 8px;
`

export const Nome = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`
