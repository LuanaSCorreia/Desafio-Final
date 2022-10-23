import React from "react";
import styled from "styled-components";
import Luana from "../../Foto/LuanaCorreia.png";
import Background from "../../Foto/Background.webp";
import BGMobile from '../../Foto/Background.png';


const Section = styled.section`
background-image: url(${Background});
background-repeat: no-repeat;
background-size: 100vw;
width: 100%;
height: 95vh;
display: flex;
justify-content: space-around;
align-items: center;
div{
  width: 30%;
}
h1{
    border-right: 2px solid;
    animation:pisca 500ms steps(40) 4s normal, digitando 3s steps(40) .1s normal both;
    white-space: nowrap;
    overflow: hidden;
    font-family: 'Source Code Pro', monospace;
    font-size: 2vw;
    @media (max-width:600px) {
     font-size:2.6vw;
    }
  }

  img{
    width: 21vw;
  }

p{
  border-right: 2px solid;
    animation:pisca 500ms steps(40) 4s infinite normal, digitando 3s steps(40) 4s normal both;
    white-space: nowrap;
    overflow: hidden;
    font-family: 'Source Code Pro', monospace;
    font-size: 1.6vw;
    @media (max-width:600px) {
     font-size:2.2vw;
    }
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
@media (max-width:800px) {
  background-image: url(${BGMobile});
  img{
    width: 40vw;
  }
}
`

function Home() {
  return (
    <Section>
   <img src={Luana} alt="Luana"/>
   <div>
     <h1>Olá! Sou Luana Correia.</h1>
     <p>Bem Vindos ao meu site!</p>
   </div>
    </Section>
  );
}

export default Home;

