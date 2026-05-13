import { Link as RouterLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Link,
  Banner,
  BannerImage,
  BannerContent,
  Categoria,
  NomeRestaurante
} from './styles'
import logo from '../../assets/images/logo.png'

type Props = {
  categoria: string
  nome: string
  capa: string
}

const ProfileHeader = ({ categoria, nome, capa }: Props) => {
  const navigate = useNavigate()

  return (
    <>
      <HeaderContainer>
        <div className="container">
          <HeaderContent>
            <Link onClick={() => navigate('/')}>Restaurantes</Link>
            <RouterLink to="/">
              <Logo src={logo} alt="efood" />
            </RouterLink>
            <Link>0 produto(s) no carrinho</Link>
          </HeaderContent>
        </div>
      </HeaderContainer>
      <Banner>
        <BannerImage src={capa} alt={nome} />
        <BannerContent>
          <div className="container">
            <Categoria>{categoria}</Categoria>
            <NomeRestaurante>{nome}</NomeRestaurante>
          </div>
        </BannerContent>
      </Banner>
    </>
  )
}

export default ProfileHeader
