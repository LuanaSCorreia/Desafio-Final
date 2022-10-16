import React from "react";
import styled from "styled-components";
import Luana from "../../Foto/LuanaCorreia.png";
import Background from "../../Foto/Background.webp";


const Section = styled.section`
background-image: url(${Background});
background-repeat: no-repeat;
background-size: 100%;
width: 100%;
height: 90vh;
display: flex;
justify-content: space-around;
align-items: center;
div{
  width: 30%;
}
h1{
    border-right: 2px solid;
    animation:pisca 500ms steps(40) infinite normal, digitando 4s steps(40) .1s normal both;
    white-space: nowrap;
    overflow: hidden;
    font-family: 'Source Code Pro', monospace;
    font-size: 2vw;
  }

p{
  border-right: 2px solid;
    animation:pisca 500ms steps(40) infinite normal, digitando 5s steps(40) 5s normal both;
    white-space: nowrap;
    overflow: hidden;
    font-family: 'Source Code Pro', monospace;
    font-size: 1.6vw;
}

@keyframes digitando{
    from{
        width: 0;
    }
    to{
        width: 13.7em;

    }
}

@keyframes pisca{
    from{
        border-right-color: black;
    }
    to{
        border-right-color:transparent ;
    }
}
`
const Foto = styled.img`
width: 21vw;

`
function Home() {
  return (

    <Section>
   <Foto src={Luana} alt="Luana"/>
   <div>
     <h1>Olá! Sou Luana Correia.</h1>
     <p>Bem Vindos ao meu site!</p>
   </div>
    </Section>

  
   
  );
}

export default Home;

