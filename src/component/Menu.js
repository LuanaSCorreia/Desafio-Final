import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Perfil from "./rota/perfil";
import Home from "./rota/home";
import Works from "./rota/works";
import Contato from "./rota/contato";
import * as S from "../Style";
import HomeIcon from "../Foto/home.png";
import contatoIcon from "../Foto/contatos.png";
import perfilIcon from "../Foto/sobre.png";
import workIcon from "../Foto/trabalhos.png";

const Menu = styled.section`
display: flex;
justify-content: flex-end;

nav{
  width: 50%;
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
  font-size: 1.8vw;
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
              <li> <S.Menu to="/"> <img src={HomeIcon}/> Home </S.Menu> </li>
              <li> <S.Menu to="/perfil"><img src={perfilIcon}/> Sobre </S.Menu> </li>
              <li> <S.Menu to="/works"><img src={workIcon}/>Trabalhos </S.Menu> </li>
              <li> <S.Menu to="/contato"><img src={contatoIcon}/> Contatos </S.Menu> </li>
            </ul>
          </nav>
        </Menu>
      </Section>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Header;

