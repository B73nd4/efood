import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  fontSize?: number
}

export const BotoesHome = styled.button<Props>`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  font-weight: bold;
  padding: 6px 4px;
  border: none;
  cursor: pointer;
`
