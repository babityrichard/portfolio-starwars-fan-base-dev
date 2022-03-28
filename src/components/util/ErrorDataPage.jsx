import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import dataError from '../../img/DataError.jpg';

const ErrorDataPage = () => {
    document.body.style.overflow = 'hidden';

    const navigate = useNavigate();
    const homeNavigateHandler = () => {
        navigate('/');
        document.body.style.overflowY = 'scroll';  
    }

    return (
    <ContainerStyled>
        <MessageStyled>Ooops...Something went wrong</MessageStyled>
        <ButtonStyled onClick={homeNavigateHandler}>Go Back</ButtonStyled>
    </ContainerStyled>
    )
}

const ContainerStyled = styled.div`
    background: url(${dataError});   
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);;
        color: white;
        margin-bottom: 1rem;
        transform: scale(1.3);
    }
`;

const MessageStyled = styled.h2`
    text-align: center;

    @media (max-width: 600px) {
        font-size: 90%;
    }
`;

const ButtonStyled = styled.div`
    width: 17rem;
    height: 4.5rem;
    background-color: #8818b5;
    border-radius: 10rem;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
    margin: 0 auto;
    text-align: center;
    font-family: 'Prompt', sans-serif;
    color: white;
    padding: 1.3rem 0rem;
    font-size: 125%;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
    opacity: 0.9;
    cursor: pointer;

    @media (max-width: 600px) {
        opacity: 0.7;
    }
`;

export default ErrorDataPage;
