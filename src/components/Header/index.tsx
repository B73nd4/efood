import { HeaderContainer, Logo, Titulo } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="EFOOD" />
      <Titulo>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Titulo>
    </HeaderContainer>
  )
}

export default Header
