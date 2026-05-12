import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'

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
  color: #e66767;
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
  cursor: pointer;
`

export const Banner = styled.div`
  height: 280px;
  position: relative;
  background-color: #000;
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`

export const BannerContent = styled.div`
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;
`

export const Categoria = styled.span`
  font-size: 16px;
  color: #fff;
  display: block;
  margin-bottom: 8px;
`

export const NomeRestaurante = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: #fff;
`
