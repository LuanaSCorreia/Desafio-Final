import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import Modal from "../modal";
import WPP from "../../Foto/whatsapp.png";
import Linkedin from "../../Foto/linkedin.png";
import Github from "../../Foto/github.png"

const Conteiner = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 100%;
height: 70vh;
div{
display: flex;
justify-content: space-around;
width: 50vw;
}

img{
width: 4vw;
gap: 5vw;
    &:hover{
cursor: pointer;
width: 4.5vw;
}
}

button{
  min-width: 9vw;
  height: 4vw;
  color: #fff;
  font-weight: bold;
  transition: all 0.3s ease;
  border-radius: 5px;
  border: 2px solid #2c0b8e;
  background: #2c0b8e;

    &:hover{
        cursor: pointer;
        box-shadow: 3px 3px 30px #686FFD;
    }
}
@media (max-width: 600px) {
    flex-direction: row-reverse;
    height: 87vh;
    background-color: aliceblue;
    div{
        flex-direction: column;
        width: 50vw;
        height: 90vh;
        align-items: flex-end;
    }
    img{
        width: 13vw;
    }
    button{
        height: 17vw;
       font-size: 3vw;
    }
}
`
const Mensagem = styled.form`
width: 35vw;
height: 23vw;
display: grid;
place-items: center;
border-radius: 50px;
background: #e0e0e0;
box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
input{
height: 2.4vw;
}
@media (max-width:600px) {
  width: 70vw;
  height: 50vw;
  input{
      width: 44vw;
      height: 8vw;
  }
}
`

const Submit = styled.input`
  width: 11vw;
  height: 2vw;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  border-radius: 5px;
  border: none;
  background: #343a40;
  box-shadow: 0 5px #212529;

&:hover {
  box-shadow: 0 3px #212529;
  top: 1px;
}

@media (max-width:600px) {
   
}
`

function Contato() {
    const [remetente, setRemetente] = useState('');
    const [remetenteEmail, setRemetenteEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);


    const SendEmail = (e) => {
        if (remetente !== "") {
            setMensagem("");
            setRemetente("");
            setRemetenteEmail("");

        }
        e.preventDefault();

        var templateParams = {
            remetente: remetente,
            remetenteEmail: remetenteEmail,
            mensagem: mensagem
        };

        emailjs.send('service_rsbzzxb', 'template_o0n68br', templateParams, 'Ahv_yXpnxTeEz3AA7')
            .then(function (response) {
                alert("Parabéns,sua mensagem foi enviada!", response.status, response.text)
            }, function (error) {
                alert('Desculpe, tente de novo mais tarde.', error)
            });
        console.log(templateParams)
    }
    return (
        <Conteiner>
            <div>

                <a href="https://wa.me/5521970809667?text=Ol%C3%A1,%20tudo%20bem?%20Obrigada%20por%20entrar%20em%20contato.%20Daqui%20a%20pouco%20respondo.">
                    <img src={WPP} /></a>

                <a href="https://www.linkedin.com/feed/?trk=sem-ga_campid%3D12619604099_asid%3D122510712920_crid%3D509739556235_kw%3Dlinked_d%3Dc_tid%3Dkwd-103941963_n%3Dg_mt%3De_geo%3D1001655_slid%3D">
                    <img src={Linkedin} /> </a>

                <a href="https://github.com/LuanaSCorreia">
                    <img src={Github} /> </a>

            </div>

            <button onClick={() => setIsModalVisible(true)}> Envie sua mensagem. </button>
            {isModalVisible ? (
                <Modal onClose={() => setIsModalVisible(false)}>
                    <Mensagem
                        onSubmit={SendEmail}>
                        <input type='text' name="remetente" placeholder="Nome"
                            onChange={(e) => { setRemetente(e.target.value); }} value={remetente} />
                        <input type='email' placeholder="Email" name="remetenteEmail"
                            onChange={(e) => { setRemetenteEmail(e.target.value); }} value={remetenteEmail} />
                        <textarea rows="3" cols="40" name="mensagem" placeholder="Escreva sua mensagem"
                            onChange={(e) => { setMensagem(e.target.value); }} value={mensagem} />
                        <Submit
                            type='submit' value="Enviar mensagem" />
                    </Mensagem>

                </Modal>
            ) : null}



        </Conteiner>
    )
}

export default Contato;