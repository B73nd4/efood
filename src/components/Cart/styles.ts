import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: flex-end;

  z-index: 999;
`

export const Sidebar = styled.aside`
  width: 360px;
  background-color: #e66767;

  padding: 16px 8px;

  overflow-y: auto;
`

export const CartItem = styled.div`
  background-color: #ffebd9;

  display: flex;
  gap: 8px;

  padding: 8px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    color: #e66767;

    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    color: #e66767;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;

  color: #ffebd9;

  font-size: 14px;
  font-weight: bold;

  margin-bottom: 16px;
`

export const Button = styled.button`
  width: 100%;
  height: 24px;

  border: none;

  background-color: #ffebd9;
  color: #e66767;

  font-size: 14px;
  font-weight: bold;

  margin-bottom: 8px;

  cursor: pointer;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #ffebd9;
  margin-bottom: 16px;
`

export const InputGroup = styled.div<{ $small?: boolean }>`
  display: flex;
  flex-direction: column;

  margin-bottom: 8px;

  width: ${(props) => (props.$small ? '155px' : '100%')};
  label {
    color: #ffebd9;
    font-size: 14px;
    font-weight: bold;

    margin-bottom: 8px;
  }

  input {
    height: 32px;

    border: none;

    background-color: #ffebd9;

    padding: 0 8px;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 8px;
`

export const Text = styled.p`
  font-size: 14px;
  line-height: 22px;

  color: #ffebd9;

  margin-bottom: 24px;
`
