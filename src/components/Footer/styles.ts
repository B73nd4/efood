import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.bege};
  text-align: center;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`
export const Logo = styled.img`
  width: 125px;
`

export const RedesSociais = styled.div`
  display: flex;
  width: 88px;
`

export const Icone = styled.img`
  width: 120px;
`

export const Texto = styled.p`
  font-size: 10px;
  max-width: 480px;
  line-height: 18px;
`
