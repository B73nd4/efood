import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'

export const HeaderContainer = styled.header`
  background-image: url(${fundo});
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 384px;
`
export const Logo = styled.img`
  width: 125px;
  margin-bottom: 160px;
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  line-height: 1.3;
  width: 539px;
`
