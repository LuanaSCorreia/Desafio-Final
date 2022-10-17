import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel/lib/carousel";
import Crespos from "../../Foto/Crespos.jpg";
import LuaVideo from "../../Foto/LuaVideo.jpg";
import ToDo from "../../Foto/ToDo.png"

const Container = styled(Carousel)`
  border: none;
  margin-top: 20vh;
`
const Work = styled.div`
 

button{
  width: 102%;
  background-color: purple;
}
`;

const Photo = styled.img`
  width: 100%;
  height: 90%;
  border: solid;
`;

const Works = () => {
  const settings = {
    dots: true,
    wrapAround: true,
    pauseOnHover: true,
    autoplay: false,
    slidesToShow: 3,
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
        backgroundColor: "#f00"
      },
      prevButtonStyle: {
        color: "white",
        backgroundColor: "#f00"
      }
    }
  };

  return (
    <Container {...settings}>
      <Work>
      <Photo
         src={Crespos}
        alt="hhttps://luanascorreia.github.io/Projeto-Final---Crespos/" /> 
      <button>Crespos</button>
</Work>

      <Work>
      <Photo
        src={LuaVideo}
        alt=""
      />
      <button>LuaVideo</button>
</Work>
<Work>
      <Photo
        src={ToDo}
        alt=""
      />
      <button>To Do List</button>
</Work>
     
    </Container>
  );
};

export default Works;


