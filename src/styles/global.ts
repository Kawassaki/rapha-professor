import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:-webkit-scrollbar-thumb {
      background-color: #000000;
      border: 2px solid #555555;
    }
    &:-webkit-scrollbar {
	    width: 10px;
    	background-color: #F5F5F5;
    }
  }

  body {
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    font: 400 16px Roboto, sans-serif;
  }
`
