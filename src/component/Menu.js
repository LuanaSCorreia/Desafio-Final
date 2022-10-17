import React,{useState} from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Perfil from "./rota/perfil";
import Home from "./rota/home";
import Works from "./rota/works";
import Contato from "./rota/contato";


const Menu = styled.section`
display: flex;
justify-content: flex-end;

nav{
  width: 40%;
display: flex;
}

ul{
    width: 100%;
 height: 10vh;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
font-style: oblique;
font-size: 2vw;
}
button{
    border: none;
    background-color: blueviolet;
    border-radius: 5px;
    height: 6vh;
    font-size: 1.1vw;
}

`
const Section = styled.section`
background-color: aliceblue;
width: 100%;
height: 20vh;
margin: 0;
`

function Header() {

  return (
    <BrowserRouter>
    <Section>
    <Menu>
  <nav>
      <ul>
          <Link to ="/"> <li>Home</li> </Link>
          <Link to ="/perfil"> <li>Sobre</li> </Link>
          <Link to ="/works"> <li>Trabalhos</li> </Link>
          <Link to =""> <li>ODS</li> </Link>
          <Link to ="/contato"> <li>Contatos</li> </Link> 
      </ul>
  </nav>
    </Menu>
    </Section>

    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/perfil" element={<Perfil/>}/>
       <Route path="/works" element={<Works/>}/>
       <Route path="/contato" element={<Contato/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Header;

