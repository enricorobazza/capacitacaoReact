import React from 'react';
import {Background} from './styles';

function Box(props){
    return(
        <>
            <Background background_color={props.background_color}>
                <h1>{props.login || "Login vazio"}</h1>
                <h3>{props.senha || "Senha vazia"}</h3>
            </Background>
        </>
    );
}

export default Box;