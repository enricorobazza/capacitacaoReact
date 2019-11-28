import React, {useState} from 'react';
import {Background, Container, Input, Button} from './styles';
import Box from '../../Components/Box';
import {Redirect} from 'react-router-dom';

function Login(){

    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")
    const [redirect, setRedirect] = useState(false)

    return(
        <>
            <Background>
                {redirect && <Redirect push to="/main"></Redirect>}
                <Container>
                    <h2>Login page</h2>
                    <Input placeholder="E-mail" onChange={(event)=>{
                        setLogin(event.target.value)
                    }}></Input>
                    <Input placeholder="Senha" type="password" onChange={event=>{
                        setSenha(event.target.value);
                    }}></Input>
                    <Button onClick={()=>{
                        setRedirect(true);
                    }}>Logar</Button>
                </Container>
            </Background>
        </>
    );
}

export default Login;