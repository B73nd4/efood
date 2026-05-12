import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div`
  background-color: #e66767;
  padding: 32px;
  max-width: 960px;
  width: 100%;
  position: relative;
  display: flex;
  gap: 24px;
  z-index: 2;
`

export const Fechar = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  line-height: 1;
`

export const Foto = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  flex-shrink: 0;
`

export const Infos = styled.div`
  color: #fff;
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Porcao = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`
