import React from "react";
import styled from "styled-components";

const Div = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
display: grid;
place-items: center;
`
const Modal = ({ id = 'modal', onClose = () => { }, children }) => {
    const clickFora = (e) => {
        if (e.target.id === id) onClose();
    };

    return (
        <Div id={id} onClick={clickFora}>
                <div>{children}</div>
        </Div>
    );
};

export default Modal;