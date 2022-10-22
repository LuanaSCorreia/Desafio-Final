import React from "react";
import styled from "styled-components";
import Luana from "../../Foto/Luana.jpg";
import EF from "../../Foto/EdFisica.jpg";
import Front from "../../Foto/Front.jpg";

const Body = styled.body`
background-color: aliceblue;
h1{
  margin: 0 0 2.5vw 5vw;
}
`
const Section = styled.section`
display: grid;
place-items: center;
`
const Div = styled.div`
margin: 2%;
width: 75%;
height: 13vw;
display: flex;
align-items: center;
justify-content: space-around;
font-size: 1.2vw;
border-radius: 50px;
background: #e0e0e0;
box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;

h2{
  width: 60%;
}

img{
  width: 11vw;
  height: 11vw;
  border: solid;
  object-fit: cover;
}
`
function Perfil() {
  return (
    <Body>
    <h1>Um pouco sobre mim:</h1>
    <Section>
      <Div>
      <img src= {Luana}/>
  <h2>Me chamo Luana Correia, atualmente tenho 23 anos e sou moradora do Rio de Janeiro.</h2>
      </Div>

<Div>
  <h2>Me formei no bacharel em Educação Física, voltada ao desenvolvimento motor,
     saúde e bem-estar. Atuo como professora de dança e ginastica rítmica infantil.</h2>
 <img src={EF}/>
</Div>

<Div>
  <img src={Front}/>
  <h2>Nesse momento estudo desenvolvimento web, front-end em busca de consciliar minha 
    formação inicial em saúde com a tecnologia. Tenho habilidade com HTML, CSS, DOM e React. </h2>
</Div>
    </Section>
    </Body>
  );
}

export default Perfil;
