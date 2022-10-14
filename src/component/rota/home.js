import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Perfil from "./perfil";
import Works from "./works";
import Luana from "../../Foto/LuanaCorreia.jpeg";
import Background from "../../Foto/Background.webp";

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

`
const Section = styled.section`
background-image: url(${Background});
background-repeat: no-repeat;
background-size: 100%;
width: 100%;
height: 100vh;
margin: 0;
`
const Foto = styled.img`
width: 16vw;
border-radius:65%  ;
position: relative;
left: 16%;
top: 12%;
`
function Home() {
  return (
    <BrowserRouter>
    <Section>
    <Menu>
  <nav>
      <ul>
          <Link to ="/"><li>Home</li></Link>
          <Link to ="/perfil"><li>Sobre</li></Link>
          <Link to ="/work"><li>Trabalhos</li></Link>
         <li>Contatos</li>
      </ul>
  </nav>
    </Menu>
   <Foto src={Luana}/>
    </Section>

    <Routes>
      <Route path="/"/>
       <Route path="/perfil" element={<Perfil/>}/>
       <Route path="/works" element={<Works/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Home;

