import styled from 'styled-components';

export const Background = styled.div`
    background-color: #000;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items:center;
`;

export const Container = styled.div`
    min-width: 500px;
    min-height: 500px;
    background-color: #fff;
    padding: 40px;
`;


export const Input = styled.input`
    padding: 5px 5px;
    width: calc(100% - 15px);
    font-size: 14pt;
    margin: 10px 0px;
`;

export const Button = styled.button`
    padding: 5px 0;
    width: 100%;
    font-size: 14pt;
    border: none;
    background-color: #ff0;
    margin:10px 0px;
`;