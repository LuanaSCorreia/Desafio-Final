import React from "react";
import styled from "styled-components";
import Luana from "../../Foto/Luana.jpg";
import Casal from "../../Foto/Casal.jpg";
import Guia from "../../Foto/Guia.jpg";
import EF from "../../Foto/EdFisica.jpg";
import Front from "../../Foto/Front.jpg";


const Section = styled.section`
background-color: aliceblue;
display: grid;
place-items: center;
gap:1.5vw;

`
const Div = styled.div`
width: 80%;
height: 12vw;
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
  width: 10vw;
  height: 10vw;
  border: solid;
  object-fit: cover;
}
`

function Perfil() {
  return (
    <Section>

      <Div>
      <img src= {Luana}/>
  <h2>Atualmente tenho 23 anos, sou moradora do Rio de Janeiro. Sou uma pessoa ....</h2>
      </Div>

      <Div>
  <h2>Sou casada e mãe de uma gatinha.</h2>
  <img src={Casal}/>
</Div>

<Div>
  <img src={Guia}/>
  <h2>Iniciei minha vontade de aprender no ensino médio, com o técnico em guia de turismo</h2>
</Div>

<Div>
  <h2>Me formei no bacharel em Educação Física, voltada ao desenvolvimento motor, saúde
     e bem-estar. Atuo como professora de dança e ginastica rítmica infantil.</h2>
 <img src={EF}/>
</Div>

<Div>
  <img src={Front}/>
  <h2>Agora estudo web desenvolvimento, front-end em busca de consciliar minha formação 
    inicial em saúde com a tecnologia.</h2>
</Div>

    </Section>
  );
}

export default Perfil;
