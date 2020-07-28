import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #___gatsby, #gatsby-focus-wrapper {
    min-height: 100%;
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    color: #333;
  }
`

export default GlobalStyle
