import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  brancoNeve: '#fff2f5',
  bege: '#FFEBD9',
  vermelho: '#E66767'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.brancoNeve};
    color: ${cores.vermelho};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
  `

/*
body: #FFF8F2 bege #FFEBD9
font e detalhes: #E66767
rodapé: #FFEBD9
*/
