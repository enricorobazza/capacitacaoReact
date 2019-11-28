import React from 'react';
import {Background, Container, Input, Button} from './styles';

function Login(){
    return(
        <>
            <Background>
                <Container>
                    <h2>Login page</h2>
                    <Input placeholder="E-mail"></Input>
                    <Input placeholder="Senha" type="password"></Input>
                    <Button>Logar</Button>
                </Container>
            </Background>
        </>
    );
}

export default Login;