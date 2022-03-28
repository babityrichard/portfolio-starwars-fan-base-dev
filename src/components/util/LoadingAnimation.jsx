import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingAnimation = () => {
    return (
        <LoaderStyled>
            <span></span>
            <span></span>
            <span></span>
        </LoaderStyled>
    )
}

const bounceAnimation = keyframes`
    from {
        width: 1rem;
        height: 1rem;
        opacity: 1;
        transform: translateY(0);
    }
    to {
        width: 1rem;
        height: 1rem;
        opacity: 0.8;
        transform: translateY(1rem);
    }
`;

const LoaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        background: white;
        border-radius: 50%;
        margin: 0rem 0.5rem;
        animation: ${bounceAnimation} 0.6s infinite alternate;
    }
    > :nth-child(2) {
        animation-delay: 0.2s;
    }
    > :nth-child(3) {
        animation-delay: 0.4s;
    } 
`;

export default LoadingAnimation;
