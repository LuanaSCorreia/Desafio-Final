import React from "react";
import styled from "styled-components";
import Luana from "../../Foto/Luana.jpg";
import Casal from "../../Foto/Casal.jpg";
import Guia from "../../Foto/Guia.jpg";
import EF from "../../Foto/EdFisica.jpg";


const Section = styled.section`
background-color: aliceblue;
`

const Div = styled.div`
border: solid red;
display: flex;
align-items: center;
justify-content: space-around;
font-size: 1.2vw;
h2{
  border: solid;
  width: 60%;
}
img{
  width: 10vw;
  height: 10vw;
  border: solid;
}
`

function Perfil() {
  return (
    <Section>
      <Div>
      <img scr= {Luana}/>
  <h2>Atualmente tenho 23 anos, sou moradora do Rio de Janeiro. Sou uma pessoa ....</h2>
      </Div>

      <Div>
  <img scr={Casal}/>
  <h2>Sou casada e mãe de gata.</h2>
</Div>

<Div>
  <img scr={Guia}/>
  <h2>Iniciei minha vontade de aprender no ensino médio, com o técnico em guia de turismo</h2>
</Div>

<Div>
  <img scr={EF}/>
  <h2>Me formei no bacharel em Educação Física, voltada ao desenvolvimento motor, saúde
     e bem-estar. Atuo como professora de dança e ginastica rítmica infantil.</h2>
</Div>

<Div>
  <img scr=""/>
  <h2>Agora estudo web desenvolvimento, front-end em busca de consciliar minha formação 
    inicial em saúde com a tecnologia.</h2>
</Div>

    </Section>
  );
}

export default Perfil;
