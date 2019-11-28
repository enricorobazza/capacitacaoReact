import React from 'react';
import {Container} from './styles';

function Post(props){
    return(
        <>
            <Container>
                <h2>{props.title}</h2>
                {props.body}<br />
                <button>Click me</button>
            </Container>
        </>
    );
}

export default Post;