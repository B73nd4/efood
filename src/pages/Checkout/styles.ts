import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: flex-end;
`

export const Sidebar = styled.aside`
  width: 360px;
  height: 100%;
  background: ${cores.branca};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
