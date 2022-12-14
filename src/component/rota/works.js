import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel/lib/carousel";
import Crespos from "../../Foto/Crespos.jpg";
import LuaVideo from "../../Foto/LuaVideo.png";
import ToDo from "../../Foto/ToDo.png";
import LoL from "../../Foto/LoL.jpg";
import ODS from "../../Foto/ODS.jpg";

const Container = styled(Carousel)`
  margin-top: 10vh;
  @media (max-width:600px) {
    margin-top: 0;
  }
`
const WorkLV = styled.div`
width: 43vw;
  &::before{
   content: "LuaVideo- Projeto inspirado no design do PrimeVideo, utilizando uma API pública.";
   position: relative;
   top:25vw;
   @media (max-width:600px) {
    top:97vw ;
  }
 }
`;
const WorkC = styled.div`
width: 43vw;
 &::before{
   content: "Crespos- Projeto para desenvolvimento de habilidade em CSS com enfase no media query";
   position: relative;
   top:25vw;
   @media (max-width:600px) {
    top:97vw ;
  }
 }`
const WorkLoL = styled.div`
width: 43vw;
 &::before{
   content: "Página do LoL- Projeto com design do jogo LoL para a iniciação ao JavaScript.";
   position: relative;
   top:25vw;
   @media (max-width:600px) {
    top:97vw ;
  }
 }`
const WorkTD = styled.div`
width: 43vw;
 &::before{
   content: "To Do App- Projeto para fazer To Do List em forma de aplicativo com function.";
   position: relative;
   top:25vw;
 @media (max-width:600px) {
    top:97vw ;
  }
}
 `
const WorkODS = styled.div`
width: 43vw;
 &::before{
   content: "ODS- Projeto que junta o conhecimento de código com questões sociais.";
   position: relative;
   top:25vw;
   @media (max-width:600px) {
    top:97vw ;
  }
 }`

const Button = styled.button`
  width: 101%;
  height: 3.4vw;
  color: #fff;
  font-weight: bold;
  font-size: 1.2vw;
  transition: all 0.3s ease;
  border-radius: 5px;
  border: 2px solid #4433ff;
  background: #4433ff;

  &:hover{
  cursor: pointer;
  background: #fff;
  color: #4433ff
  }
  @media (max-width:600px) {
    height: 6vw;
    font-size: 2.8vw;
  }
`

const Photo = styled.img`
  width: 100%;
  height: 57vh;
  border: solid;
 position: relative;
 z-index: 1;
 object-fit: cover;
  &:hover{
   animation: slideUp 8s  ease-in-out 1 ; 

@keyframes slideUp {
  0% {
    transform-origin: 0 0;
    transform: translateY(0%);
  }

  100% {
    transform-origin: 0 0;
    transform: translateY(-100%);
  }
}
  }
  
`;


const Works = () => {
  const settings = {
    dots: true,
    wrapAround: true,
    pauseOnHover: true,
    autoplay: false,
    slidesToShow: 2,
    speed: 900,
    cellAlign: "center",
    cellSpacing: 50,
    slidesToScroll: 1,
    dragThreshold: 1,
    adaptiveWidth: true,
    enableKeyboardControls: true,

    defaultControlsConfig: {
      nextButtonText: ">>",
      prevButtonText: "<<",
      
      pagingDotsStyle: {
        fill: "blue",
        position:"relative",
        top:"8vh",
      },
      nextButtonStyle: {
        backgroundColor: "#f00",
      },
      prevButtonStyle: {
        color: "white",
        backgroundColor: "#f00"
      }
    }
  };

  return (
    <Container {...settings}>
      <WorkC>
      <Photo
         src={Crespos}
        alt="https://luanascorreia.github.io/Projeto-Final---Crespos/" /> 
      <a href="https://luanascorreia.github.io/Projeto-Final---Crespos/" target="_blanck"> 
     <Button>Crespos</Button></a>
</WorkC>

      <WorkLV>
      <Photo 
        src={LuaVideo}
        alt="https://luavideo.vercel.app/"
      />
      <a href="https://luavideo.vercel.app/" target="_blank"><Button>LuaVideo</Button></a>
</WorkLV>
<WorkTD>
      <Photo
        src={ToDo}
        alt="https://todo-gules-ten.vercel.app/"
      />
      <a href="https://todo-gules-ten.vercel.app/" target="_blank"><Button>To Do List</Button></a>
</WorkTD>
<WorkLoL>
      <Photo
        src={LoL}
        alt="https://luanascorreia.github.io/Login-LoL/"
      />
      <a href="https://luanascorreia.github.io/Login-LoL/" target="_blank"><Button>Página do LoL</Button></a>
</WorkLoL>
<WorkODS>
  <Photo
        src={ODS}
        alt="https://ods-nine.vercel.app/"
      /> 
     <a href="https://ods-nine.vercel.app/" target="_blanck"><Button>ODS</Button> </a> 
      
</WorkODS>
    </Container>
  );
};

export default Works;


