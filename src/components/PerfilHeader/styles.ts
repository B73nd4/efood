import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  background-image: url(${fundo});
  background-repeat: repeat;
  padding: 24px 0;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 125px;
`

export const Link = styled.a`
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
`

export const Banner = styled.div`
  height: 280px;
  position: relative;
  background-color: #000000ce;
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`

export const BannerContent = styled.div`
  position: absolute;
  inset: 0;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 0 32px;
  }
`

export const Categoria = styled.span`
  font-size: 32px;
  color: ${cores.branca};
  margin-bottom: 8px;
  font-weight: 100;
`

export const NomeRestaurante = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${cores.branca};
`
