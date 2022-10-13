import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./header";
import Perfil from "../perfil";
import Works from "../works";

const Section = styled.section`
margin-top: 0;
padding: 0;
background-color: #982e93;
height: 12vh;
ul{
  list-style: none;
}
`

function Header() {
  return (
    <BrowserRouter>
    <Section>
  <nav>
      <ul>
          <Link to ="/"><li>Home</li></Link>
          <Link to ="/perfil"><li>Sobre</li></Link>
          <Link to ="/works"><li>Trabalhos</li></Link>
         <li>Contatos</li>
      </ul>
  </nav>
    </Section>

    <Routes>
      <Route path="/"/>
       <Route path="/perfil" element={<Perfil/>}/>
       <Route path="/works" element={<Works/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Header;