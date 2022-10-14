import React from "react";
import styled from "styled-components";
//import Foto from....

const Section = styled.section`
background-color: aliceblue;
`

const Div = styled.div`
border: solid red;
display: flex;
align-items: center;
width: 50%;
height: 13vh;
`
const Divisao = styled.div`
border: solid purple;
display: flex;
align-items: center;
justify-content: flex-end;
height: 13vh;
`

function Perfil() {
  return (
    <Section>
<Div>
  <img scr=""/>
  <h2>Estudante dev</h2>
  <p></p>
</Div>

<Divisao>
  <img scr=""/>
  <h2> formada em ed fisica</h2>
  <p></p>
</Divisao>

<Div>
  <img scr=""/>
  <h2>casada</h2>
  <p></p>
</Div>

<Divisao>
  <img scr=""/>
  <h2>mae de pet</h2>
  <p></p>
</Divisao>

<Div>
  <img scr=""/>
  <h2>formada em guia de tur</h2>
  <p></p>
</Div>

<Divisao>
  <img scr=""/>
  <h2>prof de dança</h2>
  <p></p>
</Divisao>
    </Section>
  );
}

export default Perfil;
