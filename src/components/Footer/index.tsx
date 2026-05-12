import { FooterContainer, Logo, RedesSociais, Icone, Texto } from './styles'
import logo from '../../assets/images/logo.png'
import redesSociais from '../../assets/images/redes-sociais.png'

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="efood" />
      <RedesSociais>
        <Icone src={redesSociais} alt="Redes sociais" />
      </RedesSociais>
      <Texto>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratante.
      </Texto>
    </FooterContainer>
  )
}

export default Footer
