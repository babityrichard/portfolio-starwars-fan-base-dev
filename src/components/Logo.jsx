import React from 'react';
import styled from 'styled-components';
import logo from '../img/Star_Wars_logo-main.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Logo = ({ themesStatus, setThemesStatus }) => {

  return (
      <>
    <MainLogoStyled>
        <LogoStyled>
            <img src={logo} alt="Star Wars Logo" />
            <h2>Fan Base</h2>        
        </LogoStyled>
        <ThemeButtonStyled>            
            <button onClick={() => setThemesStatus(!themesStatus)}>     
                <p>Themes</p>           
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </ThemeButtonStyled>
    </MainLogoStyled>
    </>
    
  )
}

const MainLogoStyled = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 900px) {
        display: block;
        padding-top: 2rem;        
    }
    @media (max-width: 600px) {
        margin: 2rem 2rem 0.5rem 2rem;        
    }
`;

const LogoStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
        width: 22rem;
        padding: 1.5rem 0rem 1.5rem 5.5rem;        
    }
    h2 {
        padding: 1.5rem 0rem 1.5rem 3rem;
        font-size: 4.2rem;
        text-shadow: 2px 3px 7px rgba(0, 0, 0, 0.55);
        margin: 0;
    }

    @media (max-width: 900px) {
        justify-content: center;
        img {
            padding-left: 0;
        }
        h2 {
            padding-left: 2rem
        }
    }

    @media (max-width: 600px) {
        flex-direction: column;
        
        img {
            padding: 1rem;
        }
        h2 {
            padding: 0;
        }
    }
`;

const ThemeButtonStyled = styled.div`
    margin: 2.6rem 0rem 1.6rem;
    p {
        padding: 3rem 0rem;
        font-size: 1.7rem;
        font-weight: 500;
        font-family: 'Prompt', sans-serif;
        color: #efefef;
        text-shadow: 2px 3px 7px rgba(0, 0, 0, 0.55);
    }
    button {
        display: flex;
        background: transparent;
        border: none;
        cursor: pointer;
        color: #efefef;
        padding-right: 15rem;
        margin-left: 8rem;
        transition: all 0.3s ease;
        &:hover {

        }
    }    
    svg {
        padding: 2.5rem 0rem 0rem 0.6rem;
        transform: scale(2.3);
    }

    @media (max-width: 900px) {
        margin: 0rem 0rem 1rem 0rem;
        display: flex;
        justify-content: center;
        button {
            margin: 0;
            padding: 0;
        }
        p {
            transform: scale(1.4);
            margin: 0rem 1.5rem;
            padding: 1.5rem 0rem;
        }
        svg {
            padding-top: 1.3rem;
        }
    }

    @media (max-width: 600px) {
        margin-bottom: 0;
    }
`;

export default Logo;
