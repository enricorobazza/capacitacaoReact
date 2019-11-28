import React, {useEffect, useState} from 'react';
import {Background, Container} from './styles';
import axios from 'axios';
import Post from '../../Components/Post';

function Main(){

    const [posts, setPosts] = useState([])

    useEffect(async()=>{
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts/');
        response.data = response.data.slice(0, 10);
        setPosts(response.data);
        // console.log(response.data);
    }, [])

    return(
        <>
            <Background>
                <Container>
                    {posts.map((post, index) => {
                        return (
                            <Post 
                                title={post.title}
                                body = {post.body}
                            ></Post>
                        )
                    })}
                </Container>
            </Background>
        </>
    );
}

export default Main;