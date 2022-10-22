import styled from "styled-components"
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
}
`
export const Menu = styled(Link)`
text-decoration: none;
color: #4433ff;
&:hover{
  cursor: pointer;
  font-size: 2vw;
  color: black;
}
`
