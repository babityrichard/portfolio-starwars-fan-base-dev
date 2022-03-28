import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import image404 from '../../img/Image404.jpg';

const Page404 = () => {
    document.body.style.overflow = 'hidden';    

    const navigate = useNavigate();
    const homeNavigateHandler = () => {
        navigate('/');
        document.body.style.overflowY = 'scroll';  
    }    

    return (
    <ContainerStyled>
        <MessageStyled>404 - Page Not Found</MessageStyled>
        <ButtonStyled onClick={homeNavigateHandler}>Go Back</ButtonStyled>
    </ContainerStyled>
    )
}

const ContainerStyled = styled.div`
    background: url(${image404});
    width: 100%;
    height: 100vh;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 1.7rem;
    h2 {
        text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
        color: #8818b5;
        margin-bottom: 0.7rem;
        opacity: 0.9;
    }

    @media (max-width: 900px) {
        h2 {
            color: white;
            margin: 4rem;
        }
        overflow-y: scroll;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 0.6rem;
        }
        &::-webkit-scrollbar-thumb {
            background: darkgray;
        }
        &::-webkit-scrollbar-track {
            background: white;
        } 
    }
`;

const MessageStyled = styled.h2`
    text-align: center;
    text-transform: uppercase;
`;

const ButtonStyled = styled.div`
    width: 13rem;
    height: 3.4rem;
    background-color: #8818b5;
    border-radius: 10rem;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
    margin: 0 auto;
    text-align: center;
    font-family: 'Prompt', sans-serif;
    color: white;
    padding: 0.7rem 0rem;
    font-size: 125%;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
    opacity: 0.9;
    cursor: pointer;
`;

export default Page404;
