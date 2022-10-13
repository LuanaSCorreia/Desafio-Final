import React from "react";
import styled from "styled-components";
import Luana from "../../../Foto/LuanaCorreia.jpeg";
import Background from "../../../Foto/background.jpg"

const Section = styled.section`
background-image: url(${Background});
background-repeat: no-repeat;
background-size: 100%;
width: 100%;
height: 100vh;
`
const Foto = styled.img`
width: 15vw;
border-radius:65%  ;
position: relative;
left: 20%;
top: 20%;
`
function Main() {
  return (
    <Section>
   <Foto src={Luana}/>
   <h1>esta é a home</h1>
    </Section>
  );
}

export default Main;