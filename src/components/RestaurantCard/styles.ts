import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${cores.vermelho};
  position: relative;
`

export const Capa = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
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
  color: #4b4b4b;
  line-height: 22px;
  margin-bottom: 16px;
`

export const NotaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

export const Nota = styled.span`
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 4px;
`
